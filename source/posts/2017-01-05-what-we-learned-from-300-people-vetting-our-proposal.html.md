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
1. Any performance optimization on the software will benefit everyone.

## Next steps

1. Our users are using GitLab in the cloud, so we should ensure it works there.
1. Any performance optimizations will benefit everyone.
1. We should be having shorter feedback cycles (measure, improve, repeat)



<!-- identifiers -->
[bare-metal]: https://about.gitlab.com/2016/11/10/why-choose-bare-metal/
[hardware-post]: https://about.gitlab.com/2016/12/11/proposed-server-purchase-for-gitlab-com/
[gitaly]: https://gitlab.com/gitlab-org/gitaly
[gitlab-values]: https://about.gitlab.com/handbook/#values
[gitlab-outages]: https://gitlab.com/gitlab-com/infrastructure/issues?label_name%5B%5D=outage&label_name%5B%5D=ceph&scope=all&state=all
