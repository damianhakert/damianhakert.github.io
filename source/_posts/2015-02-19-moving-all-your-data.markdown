---
layout: post
title: "Moving all your data"
date: 2015-02-19 13:53:45 +0100
comments: true
author: Jacob Vosmaer
categories: 
---
At GitLab B.V. we are working on an infrastructure upgrade to give more CPU
power and storage space to GitLab.com. (We are currently still running on a
[single server](/2015/01/03/the-hardware-that-powers-100k-git-repos/).) As a
part of this upgrade we wanted to move gitlab.com to a different data center.
In this blog post we will tell you how we did that and what challenges we had
to overcome.

## What do we have to move?

In our current setup we run a stock GitLab Enterprise Edition omnibus package,
with a single big filesystem mounted at `/var/opt/gitlab`. This
filesystem holds all the user data hosted on gitlab.com: Postgres and Redis
database files, user uploads, and a lot of Git repositories. All we have to do
to move this data to the new data center is to move the files on this
filesystem.

So do we move the files, or the filesystem itself? This is an easy question to
answer. Moving the files using something like Rsync is not an option because it
is just too slow. We do file-based backups every week where we take a block
device snapshot, mount the snapshot and send it across with Rsync. That
currently takes over 24 hours, and 24 hours of downtime while we move
gitlab.com is not a nice idea. Now you might ask: what if you Rsync once to
prepare, take the server offline, and then do a quick Rsync just to catch up?
That would still take hours. No good.

We have faced and solved this same problem in the past when the amount of data
was 10 times smaller. (Rsync was not an option even then.) What we did then was
to use DRBD to move not just the files themselves, but the whole filesystem
they sit on. It is not the fastest solution to move a lot of data, but what is
great about it is that you can keep using the filesystem while the data is
being moved, and changes will get synchronized continuously. No downtime for
our users! (Except maybe 5 minutes at the start to set up the sync.)

## What is DRBD?

[DRBD](http://www.drbd.org) is a system that can create a virtual hard drive
(block device) on a Linux computer that gets mirrored across a network
connection to a second Linux computer. Both computers give a 'real' hard drive
to DRBD, and DRBD keeps the contents of the real hard drive the same across
both computers via the network. One of the two computers gets a virtual hard
drive from DRBD, which shows the contents of the real hard drive underneath. If
your first computer crashes, you can 'plug in' the virtual hard drive on the
second computer in a matter of seconds, and all your data will still be there
because DRBD kept the 'real' hard drives in sync for you. You can even have the
two computers that are linked by DRBD sit in different buildings, or on
different continents. Up until a day ago, we were using DRBD to protect against
hardware failure on the server that runs gitlab.com: if such a failure would
happen, we could just plug in the virtual hard drive with the user data into
our stand-by server. In our new data center, the hosting provider (Amazon Web
Services) has their own solution for plugging virtual hard drives in and out
called Elastic Block Storage, so we are no longer using DRBD as a virtual hard
drive.

## Using DRBD for a data migration

We felt confident using DRBD for the migration because had done it before for a
migration between data centers. At that time we were moving across the Atlantic
Ocean; this time we would only be moving from the Netherlands to Germany.
However, the last time we used DRBD only as a one-off tool. In our
pre-migration setup, we were already using DRBD to replicate the filesystem
between two servers in the same rack. DRBD only lets you share a virtual hard
drive between two computers, so how do we now send the data to a _third_
computer in the new data center?

Luckily, DRBD actually has a trick up its sleeve to deal with this, called
'stacked resources'. This means that our old servers ('linus' and 'monty')
would share a virtual hard drive called 'drbd0', and that whoever of the two
has the 'drbd0' virtual hard drive plugged in gets to use 'drbd0' as the 'real'
hard drive underneath a second virtual hard drive, called 'drbd10', which is
shared with the new server ('theo'). Also see the picture below.

![Stacked DRBD replication](/images/drbd/drbd-three-nodes.png)

If linus would malfunction, we could attach drbd0 (the blue virtual hard drive)
on monty and keep gitlab.com going. The 'green' replication (to get the data to
theo) would also be able to continue, even after a failover to monty.

## Networking

We liked the picture above, so all we had to do was set it up. That took some
time, just to set up a test environment, and to figure out how to create a
network tunnel for the green traffic. The network tunnel needed to have a
movable endpoint depending on whether linus or monty was primary. We also
needed the tunnel because DRBD is not compatible with the [Network Address
Translation](http://en.wikipedia.org/wiki/Network_address_translation)
used by AWS. DRBD assumes that whenever a node listens on an IP address, it is
also reachable for partner nodes at that IP address. On AWS on the other hand,
a node will have one or more internal IP addresses, which are distinct from its
_public_ IP address.

We chose to work around this with an [IPIP
tunnel](http://en.wikipedia.org/wiki/IP_in_IP) and manually keyed IPsec
encryption. Previous experiments indicated that this gave us the best network
throughput compared to OpenVPN and GRE tunnels.

To set up the tunnel we used a shell script that was kept in sync on all three
servers involved in the migration by Chef.

```
# Network tunnel configuration script used by GitLab B.V. to migrate data from
# Delft to Frankfurt

#!/bin/sh
set -u

PATH=/usr/sbin:/sbin:/usr/bin:/bin

frankfurt_public=54.93.71.23
frankfurt_replication=172.16.228.2
test_public=54.152.127.180
test_replication=172.16.228.1
delft_public=62.204.93.103
delft_replication=172.16.228.1

create_tunipip() {
  if ! ip tunnel show | grep -q tunIPIP ; then
    echo Creating tunnel tunIPIP
    ip tunnel add tunIPIP mode ipip ttl 64 local "$1" remote "$2"
  fi
}

add_tunnel_address() {
  if ! ip address show tunIPIP | grep -q "$1" ; then
    ip address add "$1/32" peer "$2/32" dev tunIPIP
  fi
}

case $(hostname) in
  ip-10-0-2-9)
    create_tunipip 10.0.2.140 "${frankfurt_public}"
    add_tunnel_address "${test_replication}" "${frankfurt_replication}"
    ip link set tunIPIP up
    ;;
  ip-10-0-2-245)
    create_tunipip 10.0.2.11 "${frankfurt_public}"
    add_tunnel_address "${test_replication}" "${frankfurt_replication}"
    ip link set tunIPIP up
    ;;
  ip-10-1-0-52|theo.gitlab.com)
    create_tunipip 10.1.0.52 "${delft_public}"
    add_tunnel_address "${frankfurt_replication}" "${delft_replication}"
    ip link set tunIPIP up
    ;;
  linus|monty)
    create_tunipip "${delft_public}" "${frankfurt_public}"
    add_tunnel_address "${delft_replication}" "${frankfurt_replication}"
    ip link set tunIPIP up
    ;;
esac
```

This script was configured to run on boot. Note that it covers our Delft nodes
(linus and monty, then current production), the node we were migrating to in
Frankfurt (theo), and two AWS test nodes that were part of a staging setup. We
chose the AWS Frankfurt (Germany) data center because of its geographic
proximity to Delft (The Netherlands).

We configured IPsec with `/etc/ipsec-tools.conf`. An example for the 'origin' configuration would be:

```
#!/usr/sbin/setkey -f

# Configuration for 172.16.228.1

# Flush the SAD and SPD
flush;
spdflush;

# Attention: Use this keys only for testing purposes!
# Generate your own keys!

# AH SAs using 128 bit long keys
# Fill in your keys below!
add 172.16.228.1 172.16.228.2 ah 0x200 -A hmac-md5 0xfoobar;
add 172.16.228.2 172.16.228.1 ah 0x300 -A hmac-md5 0xbarbaz;

# ESP SAs using 192 bit long keys (168 + 24 parity)
# Fill in your keys below!
add 172.16.228.1 172.16.228.2 esp 0x201 -E 3des-cbc 0xquxfoo;
add 172.16.228.2 172.16.228.1 esp 0x301 -E 3des-cbc 0xbazqux;

# Security policies
# outbound traffic from 172.16.228.1 to 172.16.228.2
spdadd 172.16.228.1 172.16.228.2 any -P out ipsec esp/transport//require ah/transport//require;

# inbound traffic from 172.16.228.2 to 172.16.228.1
spdadd 172.16.228.2 172.16.228.1 any -P in ipsec esp/transport//require ah/transport//require;
```

Getting the networking to this point took quite some work. For starters, we did
not have a staging environment similar enough to our production environment, so
we had to create one for this occasion.

On top of that, to model our production setup, we had to use an AWS 'Virtual
Private Cloud', which was new technology for us. It took a while before we
found some [vital information about using multiple IP
addresses](http://engineering.silk.co/post/31923247961/multiple-ip-addresses-on-amazon-ec2)
that was not obvious from the AWS documentation: if you want to have two public
IP addresses on an AWS VPC node, you need to put two corresponding private IP
addresses on one 'Elastic Network Interface', instead of creating two network
interfaces with one IP each.

