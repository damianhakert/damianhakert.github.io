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
This means that even in the case of a server downtime, development can still continue on the developers' local clones.
**Server downtime is not as disruptive to the workflow as with a centralized tool.**

After the first cloning of the origin repo, Git only registers the changes to the files, so the deltas between the origin and the clones are very small.
That's less information that needs to travel through the wire.
**Getting the clone in sync with the origin does not take a lot of extra time if you are geographically further away.**

Code searching is also considerably faster than with a centralized tool, because the search happens on the local clone of the repo.

GitLab bundles a lot of other services and tools around the bare git.
These additional functionalities (such as the issue tracker, the merge requests, user management) are designed to only reside on one server.
While replicating the GitLab server might seem appealing at first sight, we strongly encourage that companies keep only one active GitLab server at a time.
Replicating slows down the GitLab installation.

We also recommend keeping all developers in the company on one GitLab server, instead of splitting it into several smaller servers for different groups/departments.
The rationale for this is that user management becomes more efficient as the GitLab instance is scaled up.
If you are concerned with managing the codebase and fine-grained authorizations, you can consider either [forking](http://blogs.atlassian.com/2013/05/git-branching-and-forking-in-the-enterprise-why-fork/), or using [protected branches](http://doc.gitlab.com/ce/permissions/permissions.html)

In case you do want geogrihic replication for you git server our partner WANdisco offers this in their [GitLab and Git Multisite](http://blogs.wandisco.com/2014/10/20/gitlab-git-multisite-architecture/) product.
