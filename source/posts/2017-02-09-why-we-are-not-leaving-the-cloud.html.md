---
title: "Why we are not leaving the cloud"
author: Sean Packham
author_twitter: SeanPackham
categories: GitLab
image_title:
description: "What we learned from our community vetting our proposal to leave the cloud"
---

Towards the end of 2016 we [shared how challenging](https://about.gitlab.com/2016/11/10/why-choose-bare-metal/) it is to run CephFS in the cloud because of heavy IO strain on GitLab.com. We even made some bold statements like “How we knew it was time to leave the cloud and go bare metal”... but we were wrong! Read on to find out why we are not leaving the cloud, as usual it starts with great support from our amazing community, there is even a bold comment pitching we ditch x86 and move to PowerPC.


<!-- more -->

In October 2016 we were at OSCON London when the IO operations for GitLab.com went through the roof, as well as the bill. When it rains it pours and the throttling breaks were slammed hard bringing GitLab.com down. I remember the frustration in the team, we [shared our desire to leave the cloud](https://news.ycombinator.com/item?id=12939856) and [our hardware proposal](https://news.ycombinator.com/item?id=13153031) with the community and got great feedback on all the messy details of managing your own infrastructure. 

Originally I wrote this post as summary of reasons on why we were no longer going to leave the cloud, but Sid thought it would be best to let the community feedback tell the story. So I have summarized some public comments from either side of the debate. In addition to the public feedback we received hundreds of private tweets, emails and calls and would like to thank everyone who reached out to us and shared your thoughts and advice.

## Let's begin on the topic of cost 

[Geraint on the GitLab blog: Going bare metal](https://about.gitlab.com/2016/11/10/why-choose-bare-metal/#comment-2999631471) 
> When I was at Koding we made a similar move from AWS to bare metal. The costs were amazing. Something like $20k a month for what in AWS would cost $200k. I have been saying for a very long time that once you hit a certain scale AWS no longer makes sense. 

[Dmitri on the GitLab blog: Proposed server purchase](https://about.gitlab.com/2016/12/11/proposed-server-purchase-for-gitlab-com/#comment-3049071074) 
> We had 140 servers hosted in New York City for 10 years or so, and hosting only was going up and up, and contracts didn't give us flexibility to add cabinets when we needed. We basically had to cancel the previous contract, make a new one, pay for the upgrade, pay for the cabinet setup, etc... At some point, when we had financial trouble paying $14K/month for hosting, we decided to move all our servers from NYC to Tallinn, Estonia, where we built our own a small scale datacenter. As a result, we were able to cut hosting fees x10.

<div style="font-size: 38px; line-height: 1.2; margin: 45px 0 55px; font-style: italic;">
It's not just the cost of owning and renewing the hardware, it's everything else that comes with it - daenney
</div>

[daenney on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153296)
> It's not just the cost of owning and renewing the hardware, it's everything else that comes with it. Designing your network, performance tuning and debugging everything. Suddenly you have a capacity issue, now what b/c you're not likely to have a spare 100 servers racked and ready to go, or be able to spin them up in 2m? Autoscaling?

[ninjakeyboard on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153779)
> You could frame infrastructure cost savings in many different ways though. The most obvious solution may seem to be the spend to move from the cloud to in house bare metal but I feel like you'll have a lot of costs that you haven't accounted for in maintenance, operational staff spend, cost in lost productivity as you make a bunch of mistakes.
> 
> You could reduce your operating costs by looking at your architecture and technology first. Where are the bottlenecks in your application? Can you rewrite them or change them to reduce your TCOS? I think you should start with the small easy wins first.

[mohctp on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13162964)
> Application Architecture is far more important than Cloud vs. Bare Metal. It is just easier and more cost effective to throw more bare metal hardware at the problem than it is cloud instances. For some this does make bare metal the better option.
 
[bobf on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153413)
> Moving to your own hardware will almost certainly improve performance, reduce incidental downtime, and cut costs substantially. Including hiring more engineers, you might expect total costs to be ~40-50% of what you would have spent on cloud-based services over the first 24 months. If your hardware lifecycle is 36-48 months, you will see large savings beyond 24 months.

[manacit on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13154057 )
> I think they are going to underestimate the cost to GitLab in the long run. When they need to pay for someone to be a 30 minute drive from their DC 24/7/365 after the first outage, when they realize how much spare hardware they are going to want around, etc.

## What about performance

[mritun on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13155809)
> A cloud service providers' biggest responsibilities to its customers are security, durability, availability and performance -- in that order. You guys are vastly underestimating the complexity involved in getting first 3 right.

[boulos on Hacker News: Going bare metal](https://news.ycombinator.com/item?id=12941210)
> Very few teams at Google run on dedicated machines. Those that do are enormous, both in the scale of their infrastructure and in their team sizes. I'm not saying always go with a cloud provider, I'm reiterating that you'd better be certain you need to.

[candiodari on Hacker News: Going bare metal](https://news.ycombinator.com/item?id=12940950)
> Even the very best of virtualization on shared resources still kills 20-30% of performance.

<div style="font-size: 38px; line-height: 1.2; margin: 45px 0 55px; font-style: italic;">
A company rolling their own system doesn't have to share, and they can optimise specifically for their own requirements. - taneq
</div>

[taneq on Hacker News: Going bare metal](https://news.ycombinator.com/item?id=12940925)
> As a cloud provider, though, you're trying to provide shared resources to a group of clients. A company rolling their own system doesn't have to share, and they can optimise specifically for their own requirements. 

[viraptor on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13154011)
> The "staging x 1" is interesting... so what happens when you need to test a new version of Postgres before deployment? You can't pretend that a test on one server (or 4 virtual ones) will be comparable to actual deployment, especially if you need to verify the real data performance.

[wpostma on the GitLab blog: Going bare metal](https://about.gitlab.com/2016/11/10/why-choose-bare-metal/#comment-3001348957)
> My thinking is that elasticity and recovery from hardware failure, and migration and multi-data center high availability will become concerns. Moving from the cloud to bare metal gives you performance and simplicity, but doesn't give you as many ways of recovering from network interruptions, and hardware failures.

[wandernotlost on Hacker News: Going bare metal](https://news.ycombinator.com/item?id=12940082)
> It sounds like they didn't design for the cloud and are now experiencing the consequences. The cloud has different tradeoffs and performance characteristics from a datacenter. If you plan for that, it's great. Your software will be robust as a result. If you assume the characteristics of a data center, you're likely to run into problems.

[twaleson on Hacker News: Going bare metal](https://news.ycombinator.com/item?id=12940462)
> it makes sense to keep GitLab.com as an eat-your-own-dog-food-at-scale environment. Necessary for them to keep experience with large installs of gitlab. If one of their customers that run on-prem has performance issues they can't just say: GitLab.com uses a totally different architecture so you're on your own. They need GitLab.com to be as close as possible to the standard product.

[wandernotlost on Hacker News: Going bare metal](https://news.ycombinator.com/item?id=12940820)
> A blunt summary would be that everything is unreliable and disposable. You have to design for failure, because most things will almost certainly fail (or just slow down) at some point.
I learned a lot when I was first moving to the cloud from Adrian Cockroft. He has a ton of material out there from Netflix's move to the cloud. I recommend googling around for his conference talks. 

<div style="font-size: 38px; line-height: 1.2; margin: 45px 0 55px; font-style: italic;">
I would optimise the hell out of my stack before commit to a change like this - StreamBright
</div>

[StreamBright on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153866)
> They are moving from cloud to bare metal because of performance while using a bunch of software that are notoriously slow and wasteful. I would optimise the hell out of my stack before commit to a change like this. Building your own racks does not deliver business value and it is extremely error prone process (been there, done that).

[londons_explore on Hacker News: Going bare metal](https://news.ycombinator.com/item?id=12942349)
> In large systems design, you should always design for a large variation in individual systems performance. You should be able to meet customers expectations if any machine drops to 1% performance at anytime. Here they are blaming the cloud for the variation, but at big enough sizes they'll see the same on real hardware. Real hardware gets thermally throttled when heatsinks go bad, has io failures which cause dramatic performance drops, CPU's failing leaving only one core out of 32 operational, or ECC memory controllers that have to correct and reread every byte of memory.

## Advice on our storage proposals

[Spooky23 on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153860)
> **Don't f*ck with storage.** 32 file servers for 96TB? Same question as with networking re:ceph. What are your failure domains? How much does it cost to maintain the FTEs who can run this thing? 

*Spooky23 did caveat his comment with "I'm a cranky old person now" ;)*

[Nicholas on the GitLab blog: Proposed server purchase](https://about.gitlab.com/2016/12/11/proposed-server-purchase-for-gitlab-com/#comment-3047537669)
> I think there might be a pretty big IOPS drop when you switch over to this hardware. You're looking at having approximately 60 7200 RPM drives in this CephFS cluster. Doing the math, if you assume each of those drives can do 100 read and 100 write IOPS, and that you are doing 3x replication on write (plus journal writes), you're not going to get anywhere near the numbers that you want.

[lykron on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153333)
>I would think that GitLab's workload is mostly random, which would pose a problem for larger drives. The SSDs are a great idea, but I've only seen 8TB drives used when there are 2 to 3 tiers; with 8TB drives being all the way on the bottom. I'm not sure how effective having a single SSD as a cache drive for 24TBs of 8TB disks will be.

[skuhn on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153419)
Stock spares, maybe 2-3% of your total drives deployed, but at least 5-6 drives per site. You don't want to get caught out if there is a supply shortage when you need it most. Your business depends on ready access to considerable quantities of storage.

## and our choice of 8TB drives

[lykron on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153196)
> If you are looking for performance, do not get the 8TB drives. In my experience, drives above 5TB do not have good response times. I don't have hard numbers, but I built a 10 disk RAID6 array with 5TB disks and 2TB disks and the 2TB disks were a lot more responsive.

[halbritt on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153786)
> Just a few quick notes. I've experience running ~300TB of usable Ceph storage. Stay away from the 8TB drives. Why are you using fat twins? Honestly, what does that buy you? You need more spindles, and fewer cores and memory. With your current configuration, what are you getting per rack unit?

[lykron on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153653)
> If you are talking physically, 2TB/8TB would theoretically be faster than a 2TB/2TB disk if the performance attributes were the same. But a 2TB HDD will have a faster average seek time than an 8TB HDD due to physical design. Any performance gains of only partially filling a drive would probably be offset by the slower overall drive... The amount of data has no effect when compared to the physical attributes of the drive. More platters will increase the response time.

##  Feedback on our network proprosals

[Spooky23 on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153860)
> **Don't f*ck with networking.** Do you have experience operating same or similar workloads on your super micro SDN? Will the CEO of your super micro VAR pickup his phone at 2AM when you call?

*Sound advice from Spooky23 again*

[wmf on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153678)
> I would not use 10GBase-T since it's designed for desktop use. I suggest ideally 25G SFP28 (AOC-MH25G-m2S2TM) but 10G SFP+ (AOC-MTG-i4S) is OK. The speed and type of the switch needs to match the NIC (you linked to an SFP+ switch that isn't compatible with your proposed 10GBase-T NICs).

[Craig on the GitLab blog: Proposed server purchase](https://about.gitlab.com/2016/12/11/proposed-server-purchase-for-gitlab-com/#comment-3049991665)
> It's unclear why you need the SDN-Router. Why not just get two 10GE switches and connect those?  

[halbritt on Hacker News: Proposed server purchase]()https://news.ycombinator.com/item?id=13153786
> Treat your metal deployment like IaaC just like any cloud deployment. Everything in git, including the network configs. Ansible seems to be the tool of choice for NetDevOps.

[tomschlick on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153922)
> I didn't see it mentioned but what are your plans for the network strategy. Are you planning to run dual-stack IPv4/IPv6 ? IPv4 only? Internal IPv6 only with NAT64 to the public stuff? Hopefully IPv6 shows up somewhere in the stack. It's sad to see big players not using it yet.

[devicenull on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153339)
> Don't fall into the trap of extending VLANs everywhere. You should definitely be routing (not switching) between different routers. 
"Should we have a separate network for Ceph traffic?" Yes, if you want your Ceph cluster to remain usable during rebuilds. Ceph will peg the internal network during any sort of rebuild event.

## What did the community have to say about Ceph?


[Chris on the GitLab blog: Proposed server purchase](https://about.gitlab.com/2016/12/11/proposed-server-purchase-for-gitlab-com/#comment-3047381500)
> I lead a technical operations team that moved our infrastructure from public cloud (~400 instances) to private cloud (~55 physical servers) and finally, to Kubernetes (6 physical servers). We actually run a mix of Kubernetes and OpenStack, putting apps and services in Kubernetes and all data storage in OpenStack. I've done extensive testing with Ceph and while it adds flexibility, you're not going to be able to touch the I/O performance of bare metal local disks for database use. For storage, I like to keep it simple. I rely on the Linux OS running on standard tried-and-true filesystems (ext4 and ZFS) and build redundancy at the software layer.

[mtanski on Hacker News: Going bare metal](https://news.ycombinator.com/item?id=12947533)
> With the network/IOPs savings we've decided to run our CephFS backed by Erasure Coded pool. Now we have lower cost of storage (1.7x vs 3x replication) and better reliability because now with our EC profile we can lose 5 chunks before data loss instead of 2 like before. That's because we more the 90% of requests are handled with local data and there's a long tail of old data that rarely accessed.
If you're going to give it a try, make sure you're using a recent-ish kernel such as a late 3.x series (or 4+). That has all the CephFS FSCache / and upstream FSCache kinks work out. If you're using relatively recent kernel such late 3.x series or 4+ (as in ubuntu 16.04). 

**[codinghorror on Hacker News: Going bare metal](https://news.ycombinator.com/item?id=12940042)**
> We had disastrous experiences with Ceph and Gluster on bare metal. I think this says more about the immaturity (and difficulty) of distributed file systems than the cloud per se.

[dimino on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153322)
> *"We are attempting to build a fault-tolerant and performant CephFS cluster"* Ohhh boy. I hope this works, and look forward to hearing updates.

<div style="font-size: 38px; line-height: 1.2; margin: 45px 0 55px; font-style: italic;">
I'm getting the same feeling I get when I'm watching those "Hold my beer and watch this..." videos - mritun
</div>

[mritun on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153658)
> From CephFS website: *"Important: CephFS currently lacks a robust ‘fsck’ check and repair function. Please use caution when storing important data as the disaster recovery tools are still under development. For more information about using CephFS today, see CephFS for early adopters."*
I'm getting the same feeling I get when I'm watching those "Hold my beer and watch this..." videos.

[Nicholas on the GitLab blog: Proposed server purchase](https://about.gitlab.com/2016/12/11/proposed-server-purchase-for-gitlab-com/#comment-3047478761)
> You need to make sure that there is not an architecture that you can build that absolves you of having to run a CephFS cluster. CephFS is cool, but it is a single point of failure right now, and comes with a ton of caveats. Performance and stability will be much improved if you remove the layer of abstraction it creates and write your app to handle some sort of distributed storage system.

[manacit on the GitLab blog: Proposed server purchase](https://news.ycombinator.com/item?id=13154057)
> As someone who has run large scale Ceph before (though not CephFS, thankfully), it's not easy to run at scale. We had a team of 5 software engineers as well as an Ops and Hardware team, and we had to do a lot to get it stable. It's not as easy as installing it and walking away.
>
>  We had to work pretty hard to build quality monitoring around Ceph - there are very little tools that provide at-scale fine grained monitoring for the various components. We spent a lot of time figuring out what metrics we should be tracking, etc.
When you run dozens-to-hundreds of servers with many SSDs in them that are doing constant traffic, you tend to hit every edge case in the hardware and software, and there are a lot of lurking demons. We went through controller upgrades, SSD firmware upgrades, tweaking OP settings, upgrading switches, finding that the write workload on certain SSDs caused problems and much more.

[Chris on the GitLab blog: Proposed server purchase](https://about.gitlab.com/2016/12/11/proposed-server-purchase-for-gitlab-com/#comment-3048035282)
> Also look at how much data you intend to write to the cluster - the CEPH servers are going to write everything to their SSD journals - definitely check on the endurance of your SSDs and make sure that you're comfortable with the projected lifetime.

<div style="font-size: 38px; line-height: 1.2; margin: 45px 0 55px; font-style: italic;">
Be very very careful about Ceph hype - late2part
</div>

[late2part on the GitLab blog: Proposed server purchase](https://news.ycombinator.com/item?id=13154620)
> Be very very careful about Ceph hype. Ceph is good at redundancy and throughput, but not at IOPS, and Rados IOPS are poor. We couldn't get over 60k random RW IOPS across a 120 OSD cluster with 120 SSDs.

[objectivefs on the GitLab blog: Proposed server purchase](https://news.ycombinator.com/item?id=12942229)
> Switch from CephFS to a different distributed filesystem. If you need POSIX and can't go directly to S3 you could try ObjectiveFS. Using local SSD instance store and memory for caching you can get very good performance even for small file workloads. 

[JustARandomGuy on the GitLab blog: Proposed server purchase](https://news.ycombinator.com/item?id=13154635)
> Perhaps I don't understand the problem domain, but I don't understand why CephFS is being considered for this task. You're trying to treat your entire set of files across all repos as a single filesystem, but that's an entirely incorrect assumption. The I/O activity on one repo/user does not affect the I/O activity of an entirely different user. Skip the one filesystem idea, shard based on user/location/whatever.

[Rapzid on Hacker News: Going bare metal](https://news.ycombinator.com/item?id=12946174)
> If you're using CephFS and everyone else wants to be using other Cloud storage solutions, that would actually put you at a disconnect with your users and leave room for a competitor with the tools and experience to scale out on Cloud storage to come in offering support. I would at least consider all the opinions in this thread and maybe reach out to that Minqi Pan fellow from Alibaba with questions..

## How would moving to metal affect the GitLab team?

[ninjakeyboard on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153779)
Your core competency is code, not infrastructure, so striking out to build all of these new capabilities in your team and organization will come at a cost that you can not predict. Looking at total cost of ownership of cloud vs steel isn't as simple as comparing the hosting costs, hardware and facilities.

<div style="font-size: 38px; line-height: 1.2; margin: 45px 0 55px; font-style: italic;">
Your core competency is code, not infrastructure - ninjakeyboard
</div>

[l1x on the GitLab blog: Proposed server purchase](https://about.gitlab.com/2016/12/11/proposed-server-purchase-for-gitlab-com/#comment-3047353138)
> Another problem I would say to move to metal is that you lose support. Cloud vendors have entire teams, network, systems, datacenters etc. at your disposal, this is included in the price you are paying. Are you sure you are ready to debug networking issues, systems problems at the level as the cloud vendors? It is a tough job.

[thebyrd on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13153644)
> I think you're under estimating the number of people required to run your own infrastructure. You need people who can configure networking gear, people swapping out failed NICs/Drives at the datacenter, someone managing vendor relationships, and people doing capacity planning.

## Let’s just abandon x86 all together

<div style="font-size: 38px; line-height: 1.2; margin: 45px 0 55px; font-style: italic;">
Why bind yourself to Intel servers? - MBH
</div>

[MBH on the GitLab blog: Proposed server purchase](https://about.gitlab.com/2016/12/11/proposed-server-purchase-for-gitlab-com/#comment-3053432409)
> Why bind yourself to Intel servers? The max CPU-to-Memory bandwidth is 68 GB/s. That's horrible for crunching data fast. IBM's POWER8 systems have servers with 230 GB/s CPU-to-Memory bandwidth, and others with 320 GB/s.
> 
> POWER8 CPUs have a different architecture than Intel: PPC64, so you may need to recompile some things, or have some Intel systems for workloads that can only run on x86_64.

## We all have an opinion

[davidbrent on on Hacker News: Proposed server purchase](https://news.ycombinator.com/item?id=13154202)
> I've only ever built desktop machines, and this top comment drew a surprising parallel to most help me with my desktop build type posts. Granted, I'm sure as you dig deeper, the reasoning may be much different, but myself being ignorant about a proper server build, it was somehow reassuring to see power and cooling at the top!

## We are taking a step back and using a boring solution

We want to scale intelligently and build great software, we don’t want to be an infrastructure company. We are ebracing and are excited about solving the challenge of scaling GitLab.com on the cloud, because solving it for us also solved if for the largest enterprises in the world using GitLab on premise.

Most of the scaling headaches have occurred because Git is read-heavy: looking at our Git Read/Write performance chart below you can see for about every 300 reads we get 10 writes. We tried to solve this by running CephFS in the cloud but and it goes against our value of using the simplest, most  [boring solution](https://about.gitlab.com/handbook/#values) for a problem.

![An average of 300 Reads to 10 writes](/images/blogimages/why-we-are-not-leaving-the-cloud-chart.png)

## How are we going to get back to basics?

1. We spread all our storage into [multiple NFS shards](https://gitlab.com/gitlab-com/infrastructure/issues/711) and [dropped CephFS](https://gitlab.com/gitlab-com/infrastructure/issues/817) from our stack. 
2. We created [Gitaly](https://gitlab.com/gitlab-org/gitaly) so that we can stop relying on NFS for horizontal scaling and speed up Git access through caching.

[Gitaly](https://gitlab.com/gitlab-org/gitaly) will serve as the single interface for all our Git access throughout our stack. It will also be used to improve our monitoring of Git resource usage to make better decisions, currently we are only sampling processes. We would love if the community would challenge our use of Gitaly with the same passion they challenged us before. What do you think of the software architecture? Can a caching layer like this scale? What alarm bells are set off? We can’t wait to hear your feedback!

We would like to thank our community, customers, team and board for all their great support – you all make GitLab an incredible product.
