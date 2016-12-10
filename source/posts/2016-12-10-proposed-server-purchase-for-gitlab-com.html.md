---
title: "Proposed server purchase for GitLab.com"
author: Sid Sijbrandij
author_twitter: sytses
categories: gitlab
image_title: '/images/default-blog-image.png'
description: ""
---

We want to make GitLab.com fast and we [knew it was time to leave the cloud](https://about.gitlab.com/2016/11/10/why-choose-bare-metal/) and purchase our own servers.
In this post is our thinking about what chassis, rack, memory, CPU, network, power, and hosting to buy.
We wanted to share what we learned and get your feedback on our proposal and questions.
When you reply to a question please reference it with their letter and number: 'Regarding R1'.
We'll try to update the questions with prelimenary answers as we learn more.

<!-- more -->

# Chassis

One of the team members that will join GitLab in 2017 recommended using a [6028TP-HTTR SuperMicro supertwin server](https://www.supermicro.nl/products/system/2U/6028/SYS-6028TP-HTTR.cfm) chassis that has 4 dual processor nodes and is 2 [rack units](https://en.wikipedia.org/wiki/Rack_unit) (U) high. The advanatages are:

1. Great density, 0.5U per dual processor server
1. You have one common form factor
1. Power supplies are shared for great efficiency similar to [blade servers](https://en.wikipedia.org/wiki/Blade_server)
1. The network is per node for more bandwidth and reliability (like individual server)

We use the [2U Twin2](https://www.supermicro.com/products/nfo/2UTwin2.cfm) instead of the [1U Twin](https://www.supermicro.com/products/nfo/1UTwin.cfm) because it fits one more 3.5" hard drive (3 per node instead of 2).

This server is on the list of global SKU's for SuperMicro. We'll also ask for quotes from other vendors to see if they have a competitive alternative.

C1 Should we use another version than HTTR?

# Node

We need the following servers:

1. 32x File storage (Ceph OSD)
1. 3x File Monitoring (Ceph MON)
1. 10x Application server ([unicorn](https://bogomips.org/unicorn/))
1. 7x Background jobs (sidekiq)
1. 3x Key value store (Redis Sentinel)
1. 4x Database (PostgreSQL)
1. 3x Loadbalancers (HAproxy)
1. 1x Staging
1. 1x Spare

For a total of 64 nodes.

We would like to have one common node so that they are interchangable.
This would mean installing only a few disks per node instead of having large fileservers.
This would distribute failures and IO.

One task that we could not fit on the common nodes was PostgreSQL.
Plan to make PostgreSQL distrubuted in 2017 with the help of [Citus](https://www.citusdata.com/).
But for now we need to scale vertically so we need a lot of Memory and CPU.
We need at least a primary and secundary.
We wanted to add a second pair for testing and to ensure spares in case of failure.
Details about this are in the following sections.

For now our CI Runners will stay in the cloud. They are much less sensitive to latency.

Choosing a common node will mean that file storage servers will have too much CPU and that application servers will have to much disk space.
We plan to remedy that by running everything on Kubernetes.
This allows us to have a blended workloads using all CPU and disk.
For example we can file storage and background jobs on the same server, one is disk heavy and one is CPU heavy.
We will start by having one workload per server to reduce complexity.
This means that when we need to grow we can still unlock almost twice as much disk space and CPU by blending the workloads.
Please note that this will be container based, to get maximum IO performance we'll not virtualize our workload.

N1 Shall we spead the database servers amoung different chassis to make sure they don't all fail when one chassis fails?

N2 Does Ceph handle running 60 OSD nodes well or can this cause problems?

# CPU

The [SuperServer 6028TP-HTTR](https://www.supermicro.nl/products/system/2U/6028/SYS-6028TP-HTTR.cfm) supports dual E5-2600v4 processors per node.
We think the [E5-2630v4](http://ark.intel.com/products/92981/Intel-Xeon-Processor-E5-2630-v4-25M-Cache-2_20-GHz) is a good blend of power and cost.
It has 20 virtual cores at 2.20Ghz, 25MB cache, and costs about $670 per processor.
Every physical core is two virtual cores due to [hyperthreading](https://en.wikipedia.org/wiki/Hyper-threading).

Our current SQL server has one E5-2698B v3 with 32 virtual cores.
PostgreSQL commonly uses about 20-25 virtual cores.
Moving to dual processors should already help a lot.
To give us more months to grow before having to distribute the database we want to purchase some headroom.
That is why we're getting a [E5-2687Wv4] for the database servers.
This processor costs $2100 instead of $670 but has 4 extra virtual cores and runs continuously on 3 Ghz instead of 2.2.

# Disk

Every node can fit 3 larger (3.5") harddrives.
We plan to purchase the largest one available, a 8TB Seagate with 6Gb/s SATA and 7.2K RPM.
At 60 nodes this will give us 1.4PB of raw storage.
At a replication factor of 3 for Ceph this is 480TB of usable storage.
Right now GitLab.com uses 96TB (54TB for repo's, 21TB for uploads, 21TB for LFS and build artifacts) so we can grow by a factor of almost 5.

Disks can be slow so we looked at improving latency.
Higher RPM hard drives typically come in [GB instead of TB sizes](http://www.seagate.com/enterprise-storage/hard-disk-drives/enterprise-performance-15k-hdd/).
Going all SSD is too expensive.
To improve latency we plan to fit every server with an SSD card.
On the fileservers this will be used to as a cache.

We plan to use [Intel DC P3700 series](http://www.intel.com/content/www/us/en/solid-state-drives/ssd-dc-p3700-spec.html) SSD's because they have a good reputation.
For most servers it will be the [800GB SSDPEDMD800G4](http://www.supermicro.com/products/nfo/PCI-E_SSD.cfm?show=Intel).
For the database servers we plan to use the the 1.6TB variant to have more headroom.

D1 We plan to configure the disks as just a bunch of disks (JBOD) but heard that this caused performance problems with some controllers. Is this likely to impact us?

D2 What technology should we use to improve latency on on the Ceph OSD servers with SSD?

D3 We heard concerns about fitting the PCIe 3.0 x 4 SSD card into [our chassis](https://www.supermicro.nl/products/system/2U/6028/SYS-6028TP-HTTR.cfm) that supports a PCI-E 3.0 x16 Low-profile slot. Will this fit?

# Memory

Suppose one node runs both as application server and fileserver.
We recommend virtual cores + 1 instances of Unicorn of about 0.5GB each, for a total of 21GB per node (2 processors * 21 unicorns per processor * 0.5GB).
Ceph recommends about 1GB per TB of data which comes out to 24 per node.
So theoretically we can fit everything in 45GB so 64GB should be enough.

But in practise we've seen 24TB OSD nodes use 79GB of memory.
And the rule of thumb is have about 2GB per virtual core for background jobs available (40GB).
So in order not to be to low we'll spend the extra $30k to have 128GB of ECC memory per node instead of 64GB.

For the SQL nodes we'll need much more memory, we currently give it 440GB and it uses all of that.
The database is about 250GB in size and growing with 40GB per month.
At 250GB of server memory we redlined the server, probably because it no longer fits into memory.
Theoretically the server supports 2TB of memory but it needs to fit in 16 memory slots per node.
We wanted to start with 1TB per server but we're not sure if we should go from a 64GB dimm to 128GB to be able to expand later.
By having only half of the memory banks full you get half the bandwidth.
And 64GB dimms already cost twice as much per GB as 32GB dimms, let alone 128GB ones.
At a price of about $940 per 64 dimm the cost for 1TB of memory already is $15k per server.

Note that larger sizes such as 64GB come in the form of LRDIMM that has a [small performance penalty](https://www.microway.com/hpc-tech-tips/ddr4-rdimm-lrdimm-performance-comparison/) but this looks acceptable.

M1. Should we use 128dimms to be able to expand the database server later even though the will double the cost and half the bandwidth?

# Network

The servers come with 2x 10Gbps RJ45 by default (Intel X540 Dual port 10GBase-T).
We want to [dual bound](https://docs.oracle.com/cd/E37670_01/E41138/html/ch11s05.html) the network connections to increase performance and reliability.
We think that 20Gbps is enough to have minimal latency between the Ceph servers.
And this will allow use to take routers out of service during low traffic times, for example to restart them after a software upgrade.

Ceph reference designs recomment a seperated font and back network with the back network reserved for Ceph traffic.
We think that this is not needed as long as there is enough capacity.
We do want to have user request termination in a DMZ, so our HA proxy servers will be the only ones with a public IP.

Each of the two physical network connections will connect to a different top of rack router.
We want to get a Software Defined Networking (SDN) compatible router so we have flexibility there.
We're considering the [10/40GbE SDN SuperSwitch (SSE-X3648S/SSE-X3648SR)](https://www.supermicro.com/products/accessories/Networking/SSE-X3648S.cfm) that can switch 1440 Gbps.

Apart from those routers we'll have a seprate router for a 1Gbps management network.
For example to make [STONITH](https://en.wikipedia.org/wiki/STONITH) reliable when there is a lot of traffic on the normal network.
Each node already has a separate 1Gbps connection for this.

N1 Which router should we purchase?

N2 How do we deal with 48 ports on the router vs. having 64 nodes?

N3 Should we have a separate network for Ceph traffic?

N4 Do we need an SDN compatible router or can we purchase something more affordable?

# Backup

Mention backblaze

# Rack

# Power

# Hosting

PXE
Advanced remote hands
AWS Direct


# Costs

$200k per month
2 months of hosting
memory is xxx
hdd disk is cheap

half disks is only $20k

hosting costs

# Details

Our detailed calculations and notes can be found in a [public Google sheet](https://docs.google.com/spreadsheets/d/1XG9VXdDxNd8ipgPlEr7Nb7Eg22twXPuzgDwsOhtdYKQ/edit#gid=894825456).


