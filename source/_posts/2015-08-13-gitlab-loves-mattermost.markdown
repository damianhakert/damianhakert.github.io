---
layout: post
title: "GitLab Mattermost, an open source on-premises Slack alternative"
date: 2015-08-13
comments: true
author: Sytse Sijbrandij
author_twitter: sytses
image_title: '/images/unsplash/FILENAME.jpg'
---

The Omnibus packages for GitLab 7.14 will ship with GitLab Mattermost, open source on-premises Slack alternative.
We think GitLab Mattermost is essential to any 100% on-premises customer that needs effective collaboration.

<!-- more -->

Like many companies in the last year we've switched to using Slack to improve internal communication.
We are a [remote company](https://about.gitlab.com/2014/07/03/how-gitlab-works-remotely/) and great realtime asynchronous communication is very important.
Obivously we GitLab issues and merge requests extensively, but for some things a chat room can't be beaten.

That is why GitLab used to include a socalled wall for each project you had.
Is was a [loved feature in 2012](https://twitter.com/gitlab/status/274128115318550531), but in 2014 people [didn't use it](https://twitter.com/gitlab/status/478990520505888769).
The code had deteriorated and we removed it when we [released GitLab 7.0](https://about.gitlab.com/2014/06/22/gitlab-7-dot-0-released/).

GitLab the company uses a hybrid of on-premises services and SaaS services.
But for many GitLab users SaaS is not an option.
For regulatory, security, scale, speed, convenience, flexibility, customization, control or other reasons they run all their software themselves.
And since Slack doesn't offer an on-premises version that means using a second tier solution.

The people of SpinPunch wanted to run on-premises in order to [never get locked in again](TODO_LINK_TO_ARTICLE) and they made their own Slack alternative.
We think it is the best open source alternative and suggested a collaboration.
It turns out that [after their succesful launch on Hacker News](https://news.ycombinator.com/item?id=9770322) there where a lot of requests for an easier way to install Mattermost and to add LDAP features to it.
With Omnibus GitLab we have a great way to install software in 2 minutes on many platforms and GitLab CE and EE contain many LDAP features.
We decided to collaborate and SpinPunch quickly added PostgreSQL support and oAuth login to Mattermost so it could connect to the [GitLab oAuth provider](http://doc.gitlab.com/ce/integration/oauth_provider.html).

In version 7.14 GitLab Mattermost will be part of the Omnibus package, just like GitLab CI.
Just like GitLab CI it will be disabled by default so it doesn't use any CPU or memory and doesn't enlarge the attack surface.
And just like GitLab takes a one line configuration change to enable it. TODO_ADD_LINK
Right now Mattermost 0.6 is in alpha state, it contains lost of bugs, is insecure, and data migration to future versions might not always work.
But bugs are being fixed, GitLab will pay for an external security audit and SpinPunch is getting closer to a beta version.

Adding the GitLab Mattermost code to the Omnibus packages makes them just TODO_ADD_PERCENTAGE% larger and offers a much easier setup because we can configure the oAuth integration automatically like we do for GitLab CI.
Releasing it now in alpha state will allow more eyes on the project that [report Mattermost bugs](https://github.com/mattermost/platform/issues/), [responsibly disclose Mattermost security vulnerabilities](http://www.mattermost.org/responsible-disclosure-policy/) and [report Omnibus package bugs](https://gitlab.com/gitlab-org/omnibus-gitlab/issues).
We hope that with GitLab 8.0 (planned for September 22, following 7.14) we can ship that GitLab Mattermost in beta state.

We have not taken the decition to include an extra component in the Omnibus packages lightly.
We think GitLab Mattermost is essential to any 100% on-premises customer that needs effective collaboration.
We hope that the rest of the community is as exited about this as we are.
Of course we realize there will also be concens and look forward to discussing these in the comments below.
