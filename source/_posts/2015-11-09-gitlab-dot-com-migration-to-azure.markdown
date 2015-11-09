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

Previously, we had our servers located at AWS US East. We decided to migrate to Azure US East for two reasons one was the overall latency for majority of our users as we had with AWS US East. The second reason is that Azure has more features available at US East like optimized storage performance.

**2. Are there any plans to distribute the servers across more regions?**

Not at this time, cross-region file access to Git repositories if too slow but we do have plans for GitLab slaves and/or sharding but this will take a lot of development work.

**3. What have we achieved thus far?**

GitLab.com is currently on Azure.

**4. What are some of the challenges we experienced?**

- At the time of the migration we had a lot of repository data which needed to be transferred with minimal downtime from AWS to Azure
- We tried to compare the different virtual machine types between AWS and Azure and even though we used slightly bigger ones the performance, especially network, was much worse. So we ended up with adding more load balancers to spread the network load.
- Maximum number of TB attached to a single (NFS) server on Azure is 10x lower than on AWS. We hope we can use CephFS but at this time it is not clear if it is a suitable solution for GitLab.
- Azure/NFS issues.
  - It is not always obvious that the NFS server is dead. ls might work on some directories giving operators the wrong impression.
  - **restart** actions on Azure can take a very long time. Our guess is that this is because we have a large number of virtual hard drives attached which slows down the boot process. The worst thing about these slow boots is that the Azure API tells you the NFS server is running long before you can reach it. But if you get impatient and click `restart` a second time, that second restart gets queued and will hit you just when you think NFS is finally back.
  - Our best guess about the root cause of the disk read errors on the NFS server at the moment is that we are hitting the maximum IOPS on our Azure *storage account*. A short term fix is to move the Postgres and Redis disks out of the storage account used by the NFS server but we do not think this will buy us a lot of time.

**5. Has the move been the major cause of our increased recent downtimes?**

Some recent downtime was due to (ongoing) growing pains. Some was due to actually moving to Azure. Azure and AWS are similar but not identical hence we are facing different bottlenecks.

AWS uses Xen and Azure uses Hyper-V. It currently seems that linux runs far more smoother on Xen than on Hyper-V especially during vm migrations. So when Azure migrates our virtual machines due to updates on their Hyper-V servers sometimes they got stuck or network is not responding anymore.

**6. What have we done to solve these challenges?**

- We migrated our redis installation to a separate VM and are currently looking on Redis HA options for GitLab.com. You can view the discussion here: https://gitlab.com/gitlab-com/operations/issues/5.
- We are working on removing SPOFs in our environment so as to make GitLab.com completely HA.

**7. Long Term Path**

- Postgres HA for GitLab.com. GitLab.com currently runs PostgreSQL 9.2 (as bundled in omnibus-gitlab) off a single Azure VM. Read more at https://gitlab.com/gitlab-com/operations/issues/6 
- Redis HA for GitLab.com. Our redis setup is currently just one VM with persistent disk storage. You can view this issue discussion on https://gitlab.com/gitlab-com/operations/issues/5
- We are looking into migrating from NFS to CephFS since using a virtual server in the cloud as an NFS server will only take you so far in terms of storage capacity. We want to see if CephFS can be used to store Git repository data and all other file data managed by GitLab. If you have had experience running GitLab on CephFS feel free to comment on the corresponding issue: https://gitlab.com/gitlab-com/operations/issues/1

**8. Is there a way the community can pitch in? **

- We are hiring devops engineers, service engineers as well as developers to improve our service. 
- We have also moved issue discussions involving GitLab operations to our [public operations issue tracker](https://gitlab.com/gitlab-com/operations/issues/) for the community to pitch in.

