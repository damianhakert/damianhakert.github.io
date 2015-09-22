---
layout: post
title: "GitLab 8.0.1 released"
date: 2015-09-22
comments: true
author: GitLab
author_twitter: gitlab
filename: 2015-09-22-gitlab-8-dot-0-dot-1-released.markdown
---

Hot on the heels of today's [big 8.0 release](/2015/09/22/gitlab-8-0-released/),
we are releasing version 8.0.1 for Community Edition (CE), Enterprise Edition
(EE), and Continuous Integration (CI).

It includes the following fixes:

- **CE/EE/CI**: Improve CI migration procedure and documentation
- **EE**: Correct gem dependency versions
- **EE**: Re-add the "Help Text" feature that was inadvertently removed
- **Omnibus**: Revert "Do not buffer with nginx git http requests"

<!-- more -->

***Update*** *(2015-09-22 20:45 UTC)*: Omnibus packages for this release have
been updated to fix an upgrade issue. Fixed packages have a `.1` Omnibus patch
version (e.g., `8.0.1-ee.1` and `8.0.1-ce.1`).

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

Interested in GitLab Enterprise Edition?
Check out the [features exclusive to GitLab EE](http://about.gitlab.com/features/#enterprise).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing).
No time to upgrade GitLab yourself?
Subscribers receive upgrade and installation services.
