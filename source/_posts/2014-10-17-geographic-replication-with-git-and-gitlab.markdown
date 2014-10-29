---
layout: post
title: "Geographic replication with git and GitLab"
date: 2014-10-17 14:08:56 +0200
comments: true
categories: 
---

The switch from a centralized version control system such as CVS or SVN to Git is bound to improve performance and reliability, given that the setup leverages the advantages of Git:

 - distributed workflows
 - speed
 - data integrity

In Git, The main repository (origin) lies on the server, and developer machines have local copies.
Developers commit to their local machines, and they only need to connect to the server when pushing their work back to the main repo.
This means that even in the case of server downtime, development can still continue on the developers' local clones.
**Server downtime is not as disruptive to the workflow as with a centralized tool.**
Obviously the downtime does affect code reviews, continuous integration, and deployments.

After the first cloning of the origin repo, Git only registers the changes to the files, so the deltas between the origin and the clones are very small.
That's less information that needs to travel through the wire.
**Getting the clone in sync with the origin does not take a lot of extra time if you are geographically further away.**

Code searching is also considerably faster with git than with a centralized tool, because the search happens on the local clone of the repo.

The functionalities of GitLab (such as the issue tracker, the merge requests, user management) are designed to only reside on one server.
While replicating the GitLab database server might seem appealing at first sight, we strongly encourage that companies keep only one active GitLab database server at a time.
Multiple active database servers in multiple geographic regions will need to coordinate on many requests, for example to ensure that no duplicate usernames are created and that issue numbers are incremental.
This coordination slows down the process more than multiple geographic regions will speed it up.

Having a single active database server doesn't mean that you can't scale your GitLab installation.
GitLab allows multiple active application servers and [highly available cluters in multiple datacenters](https://about.gitlab.com/high-availability/).

We also recommend keeping all developers in the company on one GitLab server, instead of splitting it into several smaller servers for different groups/departments.
The rationale for this is that internal collaboration becomes easier when more of the users are on the same server.
If you are concerned with managing the codebase and fine-grained authorizations, you can consider either [protected branches](http://doc.gitlab.com/ce/permissions/permissions.html) or using [forking](http://blogs.atlassian.com/2013/05/git-branching-and-forking-in-the-enterprise-why-fork/)

In case you do want fast geographic replication for your git data our partner WANdisco offers this in their [GitLab and Git Multisite product](http://blogs.wandisco.com/2014/10/20/gitlab-git-multisite-architecture/).
This products handles the git file store servers and database servers that [GitLab contains](http://doc.gitlab.com/ce/development/architecture.html) differently.
The [GitLab and Git Multisite architecture](http://blogs.wandisco.com/2014/10/20/gitlab-git-multisite-architecture/) has multiple active git file store servers but uses one active master database that all the GitLab servers access.
