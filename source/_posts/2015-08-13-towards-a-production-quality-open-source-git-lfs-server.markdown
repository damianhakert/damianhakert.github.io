---
layout: post
title: "Towards a production quality open source Git LFS server"
date: 2015-08-13
comments: true
author: Sytse Sijbrandij
author_twitter: sytses
image_title: '/images/unsplash/FILENAME.jpg'
---

At GitLab we would love to add support for Git Large File Support (LFS).
We plan to base our implementation on a reference implementation that is currently not in a production ready state.
But we hope that over time we can get to production level support.

<!-- more -->

Git repositories can't get larger than a few gigabytes so if you want to use large binaries you need to extend it.
The most extensive open source project to do this is Git Annex, which [started in 2010](https://en.wikipedia.org/wiki/Git-annex).
There where many other projects similar to this such as [Git Media](https://github.com/alebedev/git-media).
GitHub choose so start a new project in private called Git LFS [in September 2013 based on Git Media](https://github.com/github/git-lfs/commit/d8f780329b64e789553bc8ccccfb993ebc430325).

In February of 2015 we [released support for Git Annex](https://about.gitlab.com/2015/02/17/gitlab-annex-solves-the-problem-of-versioning-large-binaries-with-git/) in our propietary GitLab Enterprise Edition.
Almost all of the code to support this was included in the open source [GitLab Shell](https://github.com/gitlabhq/gitlab-shell).

In April of 2015 GitHub [announced Git LFS](https://github.com/blog/1986-announcing-git-large-file-storage-lfs) and open sourced [the client](https://github.com/github/git-lfs) and a [reference implementation for the server](https://github.com/github/lfs-test-server).
The reference implementation is called 'lfs-test-server' and the [first section of the readme](https://github.com/github/lfs-test-server#lfs-test-server) mentions that "It is intended to be used for testing the Git LFS client and is not in a production ready state."
The client implementation is really well done and many people request support for it [on our feature request tracker](http://feedback.gitlab.com/forums/176466-general/suggestions/7502608-git-large-file-storage-lfs-support).

Obviously we would like to support it properly and wonder [if the code of the test server is something we can use in production](https://twitter.com/gitlab/status/623089117983821824).
We did not get a response to the above tweet nor to an email we send but we suspect that some people at GitHub took notice.
A day later the twitter account [gitlabceohere](https://twitter.com/gitlabceohere) is suddenly also [in the market for something production-ready](https://twitter.com/gitlabceohere/status/623521722424295425).
We don't know who is behind the account (which has been pretty funny so far) but interestingly the first 6 [followers of the account](https://twitter.com/gitlabceohere/followers) are all current or former GitHub employees.
We think the message is clear and of course GitHub can do as they please and we respect that.

We think that the best course of action is to use the Git LFS reference implementation to add support for it to GitLab.
If we run into any problems we'll submit them upstream, if that is not practical we'll have to fork the project.
Of course our fork will be open source and in addition we plan to add Git LFS support to both GitLab CE and EE.
The work on this has already started with https://github.com/gitlabhq/gitlab-shell/pull/230#issuecomment-116735181 that was contributed by Artem Navrotskiy.
Probably Git LFS support will be optional and/or in beta for some time while the bugs get squashed.
We look forward to more merge requests from the rest of the community and the people at GitLab the company will do their best to contribute too.
Although please be aware that right now now we're also pretty busy with removing the satellites from GitLab for the 8.0 release.
