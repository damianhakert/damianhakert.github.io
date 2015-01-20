---
layout: post
title: "GitLab 7.7 and GitLab CI 5.4 released with GitHub importer and OAuth authorization"
date: 2015-01-22
comments: true
categories:
author: Dmitriy Zaporozhets
---

GitLab is Version Control on your Server. Its like GitHub but Open Source.

Today we announce the release of a new version of GitLab Community Edition (CE) 
and GitLab Enterprise Edition (EE), and GitLab Continuous Integration (CI) 
with new features, usability and performance improvements, and bug fixes.

Also we are happy to announce our new free service for Continuous Integration (CI) - [ci.gitlab.com](ci.gitlab.com).

<!--more-->

# GitLab 7.7

The biggest new features in Community Edition are GitHub importer and OAuth support.
In addition to the updates from Community Edition, GitLab Enterprise Edition has gained some performance improvements and ability to change header logo.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is Ciro Santilli for sending over 200 merge requests to improve GitLab code base.
Thanks Ciro!


## Redesign

In this release we made some pragmatic redesign to GitLab UI. 

[![screenshot](/images/7_7/design.png)](/images/7_7/design.png) 

You can read more about it [in our blog post](https://about.gitlab.com/2015/01/16/pragmatic-redesign-for-gitlab/)



## GitHub importer

Migrating projects from GitHub is easier than ever. 
With a single click you can import project with issues to GitLab.

[![screenshot](/images/7_7/import.png)](/images/7_7/import.png) 


## Mention noitication level

Get too much email? Selecting 'Mention' notification level you will only 
receive emails when people mention your username in their comment.


[![screenshot](/images/7_7/mention.png)](/images/7_7/mention.png) 


## OAuth applications

Many services such as Facebook, Twitter, and Google have already deployed OAuth servers. 
Now you have [OAuth](http://en.wikipedia.org/wiki/OAuth) server on your GitLab instance too. That means you can create 
3rd party applications and use your GitLab to authorize it.


[![screenshot](/images/7_7/oauth.png)](/images/7_7/oauth.png)

## Configure GitLab via UI on the fly

Now GitLab administrator can modify application settings on the fly without any downtime.

[![screenshot](/images/7_7/settings.png)](/images/7_7/settings.png)

- - -

# GitLab.com

If you don't want to manage your own GitLab instance you can always use GitLab.com.
It is completely free and offers (private) repositories, issue tracking, wiki’s and continuous integration. 
You don’t have to install anything, just [sign up for a free account](https://gitlab.com/users/sign_up).

# GitLab CI 5.4 release

This release was quire big for CI. We shipped a lot of new features that makes testing of your software more flexible.

## OAuth authorization

Now you can logic to GitLab CI via GitLab account. 
That means you dont need to type your password any more. 
And you can use GitLab account that does not have password, for example if you signup via Twitter or GitHub..

[![screenshot](/images/ci_5_4/login.png)](/images/ci_5_4/login.png)

## Users can setup own runners for own projects

Now you dont need admin account to add new runners to your projects. 
Just install GitLab Runner package on any machine and use project token to register runner in system.

## Labels for Runners and jobs

You can add labels to certain jobs to be sure only runners that has this labels will serve the builds. 
This will allow you to setup different environments per job.

Project jobs: 

[![screenshot](/images/ci_5_4/ci-job-labels.png)](/images/ci_5_4/ci-job-labels.png)

Project runners: 

[![screenshot](/images/ci_5_4/ci-runner-labels.png)](/images/ci_5_4/ci-runner-labels.png)


- - -

# Continuous Integration (CI) for free

***Tell about ci.gitlab.com and to setup of own runners. Tell about promo codes for free runners***

- - -

# Installation

If you are setting up a new GitLab installation please see the [installing GitLab page](https://www.gitlab.com/installation/).

# Updating

Upgrade instructions for omnibus-gitlab packages can be found in [the omnibus-gitlab repository](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/update.md).

If you installed GitLab from source and you have version 6.4.2 or higher you can use the [upgrade script](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/upgrader.md).
You have to update GitLab Shell to 2.4.1 manually, see [point 3 of the upgrade guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/X.x-to-x.x.md#3-update-gitlab-shell-and-its-config).

If you still want to do it manually - see the [Update Guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/X.x-to-X.x.md).

# Enterprise Edition

The mentioned EE only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles to our upgrade and installation services.

- - -
