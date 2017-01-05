---
title: "What we learned from 300 people vetting our proposal"
author: Pablo Carranza
author_twitter: psczg
categories:
image_title:
description:
---

On November the 10th 2016 we wrote a [blog post](bare-metal) explaining how the cloud was not enough to run CephFS in production given its heavy IO nature: this turned us into the noisy neighbor in our cloud provider. To run CephFS in production we had to go bare metal.

<!-- more -->

## We Are Not Going Bare Metal

After writing a second [blog post](hardware-post) explaining what our hardware and collocation decisions were, the whole community jumped in to help us providing great insights.

These insights led us to realize that our initial thinking was not the right way to go, so we finally decided to stay in the cloud and solve our scaling problems with software. There are the reasons why:

1. There is a lot to learn about hosting on metal (missing specific example)
1. Building and running a bare metal cluster is more art than science, there are many opposite opinions on the same subject (examples of opposite opinions)
1. There are options between the cloud and pure bare metal as Server Central or Packet.net. We could consider this if we do need more performance.
1. Metal is harder than it looks. Even with managed hosting hardware should become a core competence (networking, provisioning, security, capacity planning, disaster recovery). If you host in the cloud you can get their experts to help, outside you need to hire people that are increasingly hard to find. You need to hire for it and it changes your company. It is hard keep making software at the same rate when you also need to think about hosting. We want to keep improving GitLab at a fast rate.
1. Ceph(FS) is [hard to run](gitlab-outages) and [not boring](https://about.gitlab.com/handbook/#values), even if we hire the expertise to run it, it would be a burden on ourselves and on our largest customers, or just impossible for them to do it.
1. GitLab is a Software Company, we have to solve our problems with software so we can solve them for all our customers out of the box.
1. One of the main reasons behind using CephFS was performance, any performance optimization we can bake in GitLab-CE/EE will benefit everyone, not just as Us.
1. Our users are using GitLab in the cloud, so we should ensure it works there.
1. We should be having shorter feedback cycles (measure, improve, repeat)

## So how are we solving our storage scaling and performance issues

1. As a quick fix we are spreading all our storage into [multiple NFS shards](issue-back-to-nfs) [dropping CephFS](cephfs-turndown) from our stack. We will create more if we need to.
1. Move all our git access to a single interface
1. We started working on [Gitaly](gitaly), this is a git RPC layer that will remove our waste of resources dramatically. We will also use this project to improve our monitoring of git resource usage to make better decisions because we are [only sampling processes](git-sampling). We will also move all our application git access to it so we
1. We will explore different ways of reducing the [latency](gitlab-latency) of the requests.



<!-- identifiers -->
[bare-metal]: https://about.gitlab.com/2016/11/10/why-choose-bare-metal/
[hardware-post]: https://about.gitlab.com/2016/12/11/proposed-server-purchase-for-gitlab-com/
[gitaly]: https://gitlab.com/gitlab-org/gitaly
[gitlab-values]: https://about.gitlab.com/handbook/#values
[gitlab-outages]: https://gitlab.com/gitlab-com/infrastructure/issues?label_name%5B%5D=outage&label_name%5B%5D=ceph&scope=all&state=all
[issue-back-to-nfs]: https://gitlab.com/gitlab-com/infrastructure/issues/711
[cephfs-turndown]: https://gitlab.com/gitlab-com/infrastructure/issues/817
[git-sampling]: https://gitlab.com/gitlab-org/gitlab-monitor/blob/v0.0.25/lib/gitlab_monitor/git.rb#L87
[gitlab-latency]: https://gitlab.com/gitlab-com/infrastructure/issues/947
