---
layout: post
title: "The hardware that powers 100,000 git repositories"
date: 2015-01-02
comments: true
author: Job van der Voort
image_title: '/images/stock/hardware.jpg'

---

Want to host your public and private repositories somewhere for free? You can on GitLab.com, where we have been hosting a single instance of GitLab for a while now. Almost 20,000 people make active use of this to host their
repositories.

100,000 repositories in a single GitLab instance.

<!-- more -->

## A single server

Before, GitLab.com was hosted on Amazon's largest instance.
But as the amount of users grew, so did our Amazon bill.
On top of that, we were limited in options of vertical scaling and were CPU bound.
We had to explore alternatives to AWS.

A 100k repositories take up several terabytes, so storage capabilities are important.
We want to be able to expand storage with ease.
Furthermore, thousands of people pushing and pulling their code will put a strain on the CPU.
Having many CPU cores available can make a big differences in times of high load.

It turns out that using our own servers was by far the cheapest option.
As cheap Dutchmen (Sytse, Jacob, Job), this made the choice easy.

And so,  we currently have two (one active) of these servers running GitLab.com:
- server model: HP DL180 G6
- processors: 2x X5690 (24 cores in total)
- 32GB RAM
- plenty of spinning hard drives

We actually started with 16 cores, but replaced the CPUs to decrease CPU-bound loading.

## Falling and Failing over

Moving away from Amazon meant that we no longer could use AWS' features.
In case a server dies, we need to be able to failover.

We used DRBD to create one primary and one slave server.
One of the servers is active as application server at a time.
If something goes wrong, we tell DRBD to promote the other server to primary.

## Scaling further

GitLab.com runs well on its current hardware, but is growing ever faster.
Expanding the current hardware would be expensive and parts are not easy to get by.

In the future, GitLab.com will be hosted on Amazon AWS again.
This will allow us to scale horizontally more easily.
On top of this, Amazon recently introduced 10+TB instances, which will make migrating easy.
