---
layout: post
title: "GitLab 8.6.4 Released"
date: 2016-04-04 12:00
comments: true
author: GitLab
author_twitter: gitlab
---

Today we are releasing version 8.6.4 for GitLab Community Edition (CE) and
Enterprise Edition (EE).

This version includes a minor security fix.

Read on for all the details!

<!-- more -->

- **CE/EE:** Don't attempt to fetch any tags from a forked repo. ([!3504])

[!3504]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3504

## Minor security issue with tags and forks

The security issue fixed in GitLab 8.6.4 was making tags from a fork project
appearing in the upstream project's tags list in the case a merge request was
opened from the fork to the upstream project, and a new tag had been pushed to
the fork after that.

## Upgrade barometer

This version does not include any new migrations, and should not require
any downtime.

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

## Updating

To update, check out our [update page](https://about.gitlab.com/update).

## Enterprise Edition

Interested in GitLab Enterprise Edition? Check out the [features exclusive to
EE](https://about.gitlab.com/features/#enterprise).

Access to GitLab Enterprise Edition is included with a [subscription](https://about.gitlab.com/pricing/).
No time to upgrade GitLab yourself? Subscribers receive upgrade and installation
services.
