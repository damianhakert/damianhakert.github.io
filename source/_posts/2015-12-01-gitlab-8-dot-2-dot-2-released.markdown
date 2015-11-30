---
layout: post
title: "GitLab 8.2.2 Released"
date: 2015-12-01
comments: true
author: GitLab
author_twitter: gitlab
filename: 2015-12-01-gitlab-8-dot-2-dot-2-released.markdown
---

Today we are releasing version 8.2.2 for Community Edition (CE) and Enterprise
Edition (EE).

It includes the following fixes:

* **CE/EE:** Ensure GitLab fires custom update hooks after commit via UI ([#3069]).
* **CE/EE:** Expire application settings cache at startup ([#3643]).
* **CE/EE:** Fix raw private snippet access workflow ([#3677]).
* **CE/EE:** Prevent 500 error when viewing a user's projects from the admin area
  ([#3680]).
* **CE/EE:** Prevent 404 error after removing a project ([#3559]).
* **CE/EE:** Nginx should no longer block large LFS uploads ([#3708]).
* **EE:** Use configured shared path for rebase before merge ([#56]).

[#3069]: https://gitlab.com/gitlab-org/gitlab-ce/issues/3069
[#3559]: https://gitlab.com/gitlab-org/gitlab-ce/issues/3559
[#3643]: https://gitlab.com/gitlab-org/gitlab-ce/issues/3643
[#3677]: https://gitlab.com/gitlab-org/gitlab-ce/issues/3677
[#3680]: https://gitlab.com/gitlab-org/gitlab-ce/issues/3680
[#3708]: https://gitlab.com/gitlab-org/gitlab-ce/issues/3708
[#56]: https://gitlab.com/gitlab-org/gitlab-ee/issues/56

<!-- more -->

## Upgrade barometer

TODO (rspeicher): Note about gitlab-shell v2.6.8 - https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/1932

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
