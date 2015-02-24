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
gitlab.com is not a nice idea. Some people would say, what if you Rsync once to
prepare, take the server offline, and then do a quick Rsync just to catch up?
That would still take hours. No good.

We have faced and solved this same problem in the past when the amount of data
was 10 times smaller. What we did then was to use DRBD to move not just the
files themselves, but the whole filesystem they sit on. It is not the fastest
solution to move a lot of data, but what is great about it is that you can keep
using the filesystem while the data is being moved, and changes will get
synchronized continuously. No downtime for our users! (Except maybe 5 minutes
at the start to set up the sync.)

## What is DRBD?

[DRBD](http://www.drbd.org) is a system that can create a virtual hard drive
(block device) on a Linux computer that gets mirrored across a network
connection to a second Linux computer. Both computers give a 'real' hard drive
to DRBD, and DRBD keeps the contents of the real hard drive the same. One of
the two computers gets a virtual hard drive from DRBD, which shows the contents
of the real hard drive underneath. If your first computer crashes, you can
'plug in' the virtual hard drive on the second computer in a matter of seconds,
and all your data will still be there. You can even have the two computers that
are linked by DRBD sit in different buildings, or on different continents. Up
until a day ago, we were using DRBD to protect against hardware failure on the
server that runs gitlab.com: if such a failure would happen, we could just plug
in the virtual hard drive with the user data into our stand-by server. In our
new data center, the hosting provider (Amazon Web Services) has their own
solution for plugging virtual hard drives in and out called Elastic Block
Storage, so we are no longer using DRBD as a virtual hard drive.

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
movable endpoint depending on whether linus or monty was primary.

