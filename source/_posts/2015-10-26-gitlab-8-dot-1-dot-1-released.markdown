---
layout: post
title: "GitLab 8.1.1 Released"
date: 2015-10-26
comments: true
author: GitLab
author_twitter: gitlab
filename: 2015-10-26-gitlab-8-dot-1-dot-1-released.markdown
---

Today we are releasing version 8.1.1 for Community Edition (CE) and Enterprise
Edition (EE).

It includes the following fixes:

***TODO:*** Fixes

<!-- more -->

## Upgrade barometer

When we [released GitLab 8.0 last month], we promised to automatically remove
the satellites directory in 8.1. This seems to have slipped our minds, but we're
now including a migration to automatically perform the promised cleanup in this
patch release.

Due to this migration, an upgrade to GitLab 8.1.1 *will* require some downtime.
How much downtime depends on the size of the installation and, by extension, the
number of remaining satellite directories.

***TODO:*** Runner command instructions

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

[released GitLab 8.0 last month]: https://about.gitlab.com/2015/09/22/gitlab-8-0-released/

## Updating

To update, check out our [update page](https://about.gitlab.com/update).

## Enterprise Edition

Interested in GitLab Enterprise Edition?
Check out the [features exclusive to GitLab EE](http://about.gitlab.com/features/#enterprise).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing).
No time to upgrade GitLab yourself?
Subscribers receive upgrade and installation services.
