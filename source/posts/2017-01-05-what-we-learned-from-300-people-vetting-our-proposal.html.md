---
title: "Why we are not ready to leave the cloud"
author: Pablo Carranza
author_twitter: psczg
categories:
image_title:
description: "What we learned from our community vetting our proposal to leave the cloud."
---

Towards the end of 2016 we [shared our experience](https://about.gitlab.com/2016/11/10/why-choose-bare-metal/) of running CephFS on the cloud for GitLab.com and concluded that, because of throttling caused by the heavy IO nature of our usage of Git with CephFS, we had to leave the cloud and go bare metal. Fast forward three months and we have learnt so much from our passionate community and team, we have challenged our reasons for wanting to go bare metal and have decided it is not yet time to leave the cloud.

<!-- more -->

## We are Staying in the Cloud Because our Problem is Caused by Software 

The problem isn't because we aren't managing our own infrastructure – so we don't want to push blame on the cloud. Managing your own infrastructure is difficult! The [details of the hardware]( https://about.gitlab.com/2016/12/11/proposed-server-purchase-for-gitlab-com/) are messy: you have to worry about hardrive failure, networking, power, heating, security, provisioning, capacity planning, disaster recovery, sales cycle time, and the list goes on and on.

There will come a time when we consider leaving the cloud for the right reason: cost. Although we have already crossed the threshold where it would be more affordable to go bare metal, we want to scale intelligently and solve our software problem first. We are excited about solving the problem at GitLab.com scale because this also solves it for the largest enterprises in the world. We are not yet ready to be an infrastructure company, but when we are, we know the community will have our back.

Git is read heavy: looking at our Git Read/WrIte performance chart below you can see for about every 300 reads we get 10 writes. We tried to solve this by running CephFS in the cloud which is [difficult](https://gitlab.com/gitlab-com/infrastructure/issues?label_name%5B%5D=outage&label_name%5B%5D=ceph&scope=all&state=all) and it goes against our value of using the simplest, most [boring solution](https://about.gitlab.com/handbook/#values) for a problem.

![An average of 300 Reads to 10 writes](/images/blogimages/read-write-chart.png)

## To Solve This we are Taking a Step Back and Using a Boring Solution 

We asked ourselves, how can we avoid doing these heavy IO operations so we don't have to build a CephOS cluster? 

1. As a quick fix we spread all our storage into [multiple NFS shards](https://gitlab.com/gitlab-com/infrastructure/issues/711) and [dropped CephFS](https://gitlab.com/gitlab-com/infrastructure/issues/817) from our stack. 
2. We created [Gitaly](https://gitlab.com/gitlab-org/gitaly) so that we can stop relying on NFS for horizontal scaling and speed up Git access through caching.

Gitaly will serve as the single interface for all our Git access throughout our stack. It will also be used to improve our monitoring of Git resource usage to make better decisions, currently we are [only sampling processes](https://gitlab.com/gitlab-org/gitlab-monitor/blob/v0.0.25/lib/gitlab_monitor/git.rb#L87). 

We would like to thank our community, customers, team and board for all their great support – you all make GitLab an incredible product.