---
layout: post
title: "GitLab X.X.X Released"
date: YYYY-MM-DD
comments: true
categories:
author: ADD_YOUR_FULL_NAME
filename: FILENAME.MARKDOWN
---

Today we release GitLab X.X.X CE, EE, and GitLab CI X.X.X.


GitLab X.X.X CE fixes:

- FIX_ONE
- FIX_TWO

In addition to the fixes in X.X.X CE, Enterprise Edition X.X.X contains the following fix(es):

- FIX_ONE
- FIX_TWO

GitLab X.X.X CI fixes:

- FIX_ONE
- FIX_TWO

<!-- more -->

## Upgrade barometer

*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN DEPLOY HAPPEN WITHOUT DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

## Updating

To update, check out our [update page](https://about.gitlab.com/update).

## Enterprise Edition

Omnibus packages for GitLab Enterprise Edition X.X.X are available for subscribers [here](https://gitlab.com/subscribers/gitlab-ee/blob/master/doc/install/packages.md). For installations from source, use [this guide](https://gitlab.com/subscribers/gitlab-ee/blob/master/doc/update/patch_versions.md).

Interested in GitLab Enterprise Edition?
For an overview of feature exclusive to GitLab Enterprise Edition please have a look at the [features exclusive to GitLab EE](http://about.gitlab.com/features/#enterprise).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/subscription/).
No time to upgrade GitLab yourself?
A subscription also entitles to our upgrade and installation services.
