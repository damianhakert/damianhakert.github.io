---
layout: post
title: "GitLab 7.1 released"
date: 2014-07-18 13:06:50 +0300
comments: true
categories: 
author: Dmitriy Zaporozhets
---

GitLab is open source software to collaborate on code.
Today we announce the release of a new version of GitLab Community Edition (CE) and GitLab Enterprise Edition (EE), with new features, usability and performance improvements, and bug fixes.
The biggest new feature in Community Edition is Group milestones feature. It allows you to see grouped list of milestones from all projects under one group
Other changes include @all mention in comments, imrpoved code highlight with more languages supported (like Go, Erlang, Clojure etc).
In addition to the updates from Community Edition, GitLab Enterprise Edition received various bug fixes.

This release's most valuable person (MVP) is Jeroen REPLACE WITH TEXT!!!!!!!!!!!!!!!!!


<!--more-->

## Group milestones

This feature allows you see all milestones in group. Grouped by title it is much easier to release software from several projects. 

[![screenshot](/images/7_1/group_milestone.png)](/images/7_1/group_milestone.png) 

Milestone page shows you all issues from all projects that have same milestone name

[![screenshot](/images/7_1/group_milestone_show.png)](/images/7_1/group_milestone_show.png) 

## Show VERSION file in sidebar

If your repository has VERSION file - it will be rendered on project sidebar. It saves time if you need to check library version.

[![screenshot](/images/7_1/version.png)](/images/7_1/version.png) 

## New login page

In Enterprise Edition we changed sign in layout few version ago to implement customization feature. In order to reduce difference between version we ported new loook to CE

[![screenshot](/images/7_1/login.png)](/images/7_1/login.png)

## Improved discussions

We put some efforts into improving discussions. Now outdated discussions hidden under cut but you can easily expand it.

[![screenshot](/images/7_1/discussion.png)](/images/7_1/discussion.png)

## Contributors API

Thanks to sponsoring by Mobbr it is now possible to get repository contributors by single API call. [LINK TO CHAGELOG](https://gitlab.com/gitlab-org/gitlab-ce/blob/7-1-stable/CHANGELOG#L18).

## Fetch SSH keys from LDAP account (EE only feature)


## Synchronize LDAP-enabled GitLab administrators with an LDAP group (EE only feature)


- - -

# Installation

If you are setting up a new GitLab installation please see the [installing GitLab page](https://www.gitlab.com/installation/).

# Updating

Upgrade instructions for omnibus-gitlab packages can be found in [the omnibus-gitlab repository](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/update.md).

If you installed GitLab from source and you have version 6.4.2 or higher you can use the [upgrade script](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/upgrader.md).
You have to update GitLab Shell to ***X.X.X*** manually, see [point 3 of the upgrade guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/X.x-to-x.x.md#3-update-gitlab-shell-and-its-config).

If you still want to do it manually - see the [Update Guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/X.x-to-X.x.md).

# Enterprise

For LDAP group support and more have a look at the [feature list of GitLab Enterprise Edition](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/subscription/).

No time to upgrade or maintain Gitlab yourself?
GitLab B.V. also offers upgrade and installation services as part of a [subscription](http://www.gitlab.com/subscription/) or alternatively on a [consultancy basis](http://www.gitlab.com/consultancy/).

- - -
