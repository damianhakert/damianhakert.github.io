---
layout: post
title: "Migration of GitLab.com to Azure"
date: 2015-11-09
comments: true
author: Kelvin Mutuma
author_twitter: kelvinmutuma
filename: 2015-11-09-gitlab-dot-com-migration-to-azure.markdown
---

On **Friday 08.10.15** at **12.00 UTC** we begun a migration of GitLab.com from AWS to Azure.

**1. Why did we decide to migrate from AWS to Azure?**
We have $500,000 of free Azure hosting credit from Microsoft that was offered to each YCombinator startup from the winter 2015 batch onwards. You can read more about this on the [YCombinator blog post](http://blog.ycombinator.com/$500k-of-azure-credit-for-yc-startups). This enables us to save on our hosting bill and direct this money into improving GitLab in other means e.g. hiring developers.

We decided to migrate to Azure US East for two reasons one was the overall latency for majority of our users. The second reason is that Azure has more features available at US East like optimized storage performance compared to their other locations.

**2. Are there any plans to distribute the servers across more regions?**
Not at this time, cross-region file access to Git repositories is too slow but we do have plans for GitLab primary/secondary server setups and/or sharding but this will take a lot of development work.

**3. What have we achieved thus far?**
GitLab.com currently runs on Azure. We're still working closely with Microsoft through some performance issues many of you have noticed for GitLab.com. Please stay tuned as we continue to improve uptime performance. For real-time updates, follow us on https://twitter.com/gitlabstatus

**4. What are some of the challenges we experienced?**

- At the time of the migration we had a lot of repository data which needed to be transferred with minimal downtime from AWS to Azure
- We tried to compare the different virtual machine types between AWS and Azure and even though we used slightly bigger ones the performance, especially network, was much worse. So we ended up with adding more load balancers to spread the network load.
- Maximum number of TB attached to a single (NFS) server on Azure is 10x lower than on AWS, this meant we had to setup over 10 times more disks on Azure than our previous AWS setup.
- Azure/NFS issues.
  - It is not always obvious that the NFS server is dead. ls might work on some directories giving operators the wrong impression.
  - **restart** actions on Azure can take a very long time. Our guess is that this is because we have a large number of virtual hard drives attached which slows down the boot process. The worst thing about these slow boots is that the Azure API tells you the NFS server is running long before you can reach it. But if you get impatient and click `restart` a second time, that second restart gets queued and will hit you just when you think NFS is finally back.
  - The root cause of the disk read errors on the NFS server at the moment is that we are hitting the maximum IOPS on our Azure *storage account*. 
  The maximum IOPS per disk for a standard storage account is 500 IOPS.
  The total request rate limit for a storage account is 20000 IOPS. If a virtual machine utilizes the maximum IOPS per disk, then to avoid possible throttling, we have to ensure that the total IOPS across all of the virtual machines' VHDs does not exceed the storage account limit (20,000 IOPS).
  It used to be a guess but now we know for sure that we do hit this account limit and throttling took place (feedback from Azure engineer). The throttling took a disk offline for a few sec before it came online again which causes the kernel to hang.
  A short term fix is to move the Postgres and Redis disks out of the storage account used by the NFS server but we do not think this will buy us a lot of time.

**5. Has the move been the major cause of our increased recent downtimes?**
Some recent downtime was due to (ongoing) growing pains. Some was due to actually moving to Azure. Azure and AWS are similar but not identical hence we are facing different bottlenecks.

AWS uses Xen and Azure uses Hyper-V. It currently seems that linux runs far more smoother on Xen than on Hyper-V especially during vm migrations. So when Azure migrates our virtual machines due to updates on their Hyper-V servers sometimes they got stuck or network is not responding anymore.

**6. What have we done to solve these challenges?**

- We migrated our redis installation to a separate VM and are currently looking on Redis HA options for GitLab.com. You can view the discussion here: https://gitlab.com/gitlab-com/operations/issues/5.
- We are working on removing SPOFs in our environment so as to make GitLab.com completely HA.
- We have migrated our redis and postgres installations to Azure Premium Storage. The benefit of using the azure premium storage account is that you have **5000** IOPS per disk instead of **500** per disk. However, the total request rate limit for the storage account is the same namely **20000**, which we were already hitting. To solve this, we resorted to using multiple storage accounts. Therefore, every cluster role now has their own storage account with redis and postgres being on separate premium storage accounts.

**7. Long Term Path**

- Postgres HA for GitLab.com. GitLab.com currently runs PostgreSQL 9.2 (as bundled in omnibus-gitlab) off a single Azure VM. Read more at https://gitlab.com/gitlab-com/operations/issues/6 
- Redis HA for GitLab.com. Our redis setup is currently just one VM with persistent disk storage. You can view this issue discussion on https://gitlab.com/gitlab-com/operations/issues/5
- We are looking into migrating from NFS to CephFS since using a virtual server in the cloud as an NFS server will only take you so far in terms of storage capacity. We want to see if CephFS can be used to store Git repository data and all other file data managed by GitLab. If you have had experience running GitLab on CephFS feel free to comment on the corresponding issue: https://gitlab.com/gitlab-com/operations/issues/1

**8. Is there a way the community can pitch in? **

- We are [hiring](https://about.gitlab.com/jobs/) DevOps engineers, service engineers, and developers to help us build GitLab and improve the performance of GitLab.com 
- We have also moved issue discussions involving GitLab operations to our [public operations issue tracker](https://gitlab.com/gitlab-com/operations/issues/) for the community to pitch in.

**9. Conclusion **
Despite Azure not being as reliable as our previous AWS setup, **we own our own availability**. The following are some of the mistakes we made prior to the migration that acted as a precursor of our troubles:

- We didn't allow enough time to study the documentation
- We didn't interview other companies about their experiences
- We didn't have our setup reviewed by Azure experts
- We didn't set up the support account before moving
- We didn't run a staging environment

We are however dedicated to ensuring that GitLab.com is fast and stable and are apologetic for the uptime troubles our users have had to endure since our migration.