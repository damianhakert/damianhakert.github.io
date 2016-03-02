---
layout: post
title: "GitLab 8.5.2 Released"
date: 2016-03-01
comments: true
author: GitLab
author_twitter: gitlab
filename: 2016-03-01-gitlab-8-dot-5-dot-2-released.markdown
---

Today we are releasing version 8.5.2 for GitLab Community Edition (CE) and
Enterprise Edition (EE).

This version includes several fixes for merge requests, todos, as well as many
UI fixes and improvements.

Read on for all the details!

<!-- more -->

TODO

## Upgrade barometer

This version does not include any new migrations, and should not require any
downtime.

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

## Updating

To update, check out our [update page](https://about.gitlab.com/update).

## Enterprise Edition

Interested in GitLab Enterprise Edition? Check out the [features exclusive to
EE](http://about.gitlab.com/features/#enterprise).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/subscription/).
No time to upgrade GitLab yourself? Subscribers receive upgrade and installation
services.
