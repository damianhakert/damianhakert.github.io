---
title: "GitLab Patch Release: x.x.x and x.x.x"
categories: release
author: ADD_YOUR_FULL_NAME
author_gitlab: GITLAB-COM_USERNAME
author_twitter: TWITTER_USERNAME
description: "Short description of the blog post"
---

Today we are releasing version X.Y.Z for GitLab Community Edition (CE) and Enterprise Edition (EE).

It includes the following fixes:

- **CE/EE:**
- **EE:**

<!-- more -->

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
EE](https://about.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/subscription/).
No time to upgrade GitLab yourself? Subscribers receive upgrade and installation
services.
