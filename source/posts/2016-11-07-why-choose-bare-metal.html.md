---
title: "How We Knew it Was Time to Leave the Cloud"
author: Pablo Carranza
author_twitter: @pcarranza
categories:  
image_title: '/images/unsplash/data.png'
description: "How we're solving storage and performance issues as we scale."
twitter_image: '/images/tweets/why-bare-metal.png'
---

In my last [infrastructure update][infra-post], I documented our challenges with storage as GitLab scales. We built a CephFS cluster to tackle both the capacity and performance issues of NFS and decided to move from PostgreSQL to Pg_repack. Now, we're feeling the pain of running a high performance distributed filesystem on the cloud.

Over the past month, we loaded a lot of projects, users, and CI artifacts onto CephFS. We chose CephFS because it's a reliable distributed file system that has a large capacity for data storage and we needed storage. By going with CephFS, we could push the solution into the infrastructure instead of creating a complicated application. The problem with CephFS is that in order to work, it has to be really aggressive and needs to read/write a lot of things really fast. If one of the hosts delays writing a journal, then the rest of the machiens are waiting for that host and the whole file system is blocked. When this happens, all of the hosts halt, and you have a locked file system; no one can read or write anything and that basically takes everything down. 

What we learned is that when you get into the consistency, accessibility, and partition tolerance (CAP) of CephFS, it's weakest on the consistency. When you put a lot of pressure on the system, it generates hot spots. For example, in specific places in the cluster of machines running GitLab CE, all the reads and writes end up being on the same spot during high load times. This problem is amplified because we hosted the system in the cloud. 

## Performance Issues on the Cloud 

By choosing to use the cloud, we are by default sharing infrastructure with a lot of other people. The cloud is basically timesharing, i.e. you share the machine with others on the cloud, so there is a threashold of performance. The provider puts a limit on the performance data they are going to give you. 

On our server, GitLab can only perform 20,000 IOPS/ms but the low limit is 0. With this performance capacity, we became the "noisey neighbors" on the shared machines, using all of the resources. We became the neighbor who plays their music loud and really late. So, we were punished with latencies. Providers don't provide a minimum IOPS, so they can just drop you. If we wanted to make the disk reach something, we would have to wait 100 mls latency. [That's basically telling us to wait 8 years][space-time-article]. What we found is that the cloud not meant to provide the level of IOPS performance we needed to run an agressive system like CephFS. 

At a smale scale, the cloud is cheaper and sufficient for many projects. However, if you need to scale, it's not so easy. It's often sold as, "If you need to scale and add more machines, you can spawn them because the cloud is 'infiinite'". What we discovered is that yes, you can keep spawning more machines but there is a threshold in time, particulary when you're adding heavy IOPS, where it becomes less effective and very expensive. You'll still have to pay for bigger machines. The nature of the cloud is time sharing so you still will not get the best performance. When it comes down to it, you're paying a lot of money to get a sub par level of service while still needing more performance.  

So, what happens when the cloud is just not enough? 

## Moving to Bare Metal 

At this point, going down to hardware make sense for us. From a cost perspective, it is more economical and reliable because of how the culture of the cloud works and the level of performance we need. Of course hardware comes with it's upfront costs: disks will break and people will need to be hired to maintain it and own the entire infrastructure. You have to know the hardware you are getting into and put a lot more effort into keeping it alive. But in the long run, it will make GitLab more efficient, consistent, and reliable. 

## How We Proactively Uncover Issues 

![gitlab-dashboard](place-holder)

At GitLab, we are able to proactively uncover issues like this because we've [built an observable system][gitlab-dashboard-code] as a way to understand how our system behaves. The machine is doing a lot of things, most of which we are not even aware of. To get a deeper look at what's happening, we gather data and metrics into a dashboard and observe it. 

These metrics are in the depth of the kernal and not readily visible to humans. To see it, you need to build a system that allows you to pull, aggreate, graph this data in a way you can see it.

### How we used our dashboard to understand CephFS in the cloud

![osd-journal-latency-graph]()

Here, you can see OSD Jounral Latency. Over the last 7 days shown, we had a spike. Go a little bit back you can see how it was behaving. 

![write-journal-disk-graph]()

This is how much time we spent trying to write to this journal disk. In general, we roughly perform in 2-12 seconds. You can see where it takes 42 seconds that we are being punished. The high spikes show GitLab.com is down. 
 
What's great about having this dashbaord is that there is a lot data available quickly, in one place. Non-technical people can understand this. This is the level of insight into your system you want to aim for. You can build on your own with promethus. We have been building this for the last month, it's close to the end state. We're still working on it but to add more things. 

This is how we make informed decisions to understand as best as we can what's going on with our infrastructure. What we tend to do is whenever we see something failing or not making sense and then we start building a dashboar that start makes senses to understand what's happening. how things on a large scale are being impacted. Usually monitoring is an afterthought, changing this -- feature not shipped if it doesn't have monitoring because if you don't have that monitoring you have no idea whats going on. the moment you have 40 hosts you can't run a command to see what's going on. 


## Recap: What We Learned 

1. CephFS gives us more scaleability and ostensibly performance but did not work well in the cloud on shared resources, despite tweaking and turning it to try to make it work. 
1. There is a threashold of performance on the cloud and if you need more, you will have to pay a lot more or be punished with latencies.
1. Going down to hardware is more economical and reliable for the scale of our application.
1. Building an observable system by creating a dashboard to pull and aggregrate machine performance data helps us discover issues faster

<!-- identifiers -->

[gitlab-dashboard-code]: 
[infra-post]: /2016/26/infrastructure-update/
[space-time-article]: https://blog.codinghorror.com/the-infinite-space-between-words/