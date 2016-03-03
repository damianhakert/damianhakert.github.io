---
layout: post
title: "GitLab 8.5.3 Released"
date: 2016-03-03 17:00
comments: true
author: GitLab
author_twitter: gitlab
filename: 2016-03-03-gitlab-8-dot-5-dot-3-released.markdown
---

Today we are releasing version 8.5.3 for GitLab Community Edition (CE) and
Enterprise Edition (EE).

This version includes one important fixes for GitLab Enterprise Edition when
Elasticsearch is enabled, as well as two minor fixes.

Read on for all the details!

<!-- more -->

- **EE:** Prevent LDAP from downgrading a group's last owner ([!216])
- **EE:** Update `gitlab-elastic-search` gem to `0.0.11` ([!234])
- **CE/EE:** Flush repository caches before renaming projects ([!2974])

[!216]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/216
[!234]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/234

[!2974]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/2974

## `gitlab-elastic-search` gem update

This patch release updates the `gitlab-elastic-search` gem to `0.0.11`. If you
are using Elasticsearch, this will fix an issue where no CI builds where created
for new merge requests.

## Upgrade barometer

This version does not include any new migrations, and should not require any
causing any downtime.

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
