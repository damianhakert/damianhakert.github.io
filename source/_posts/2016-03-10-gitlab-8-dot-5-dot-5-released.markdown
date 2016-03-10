---
layout: post
title: "GitLab 8.5.5 Released"
date: 2016-03-10 17:00
comments: true
author: GitLab
author_twitter: gitlab
filename: 2016-03-10-gitlab-8-dot-5-dot-5-released.markdown
---

Today we are releasing version 8.5.5 for GitLab Community Edition (CE) and
Enterprise Edition (EE).

This version includes a new GitLab Geo feature, several minor EE fixes as well
as fixes for Todos.

Read on for all the details!

<!-- more -->

- **EE:** GitLab Geo: Repository synchronization between primary and secondary nodes ([!179])
- **EE:** Refactor user documentation for GitLab Pages ([!212])
- **EE:** Fix importing projects from GitHub Enterprise Edition ([!219])
- **EE:** Fix syntax error in init file ([!223])
- **EE:** Only show group member roles if explicitly requested ([!3044])
- **CE/EE:** Ensure removing a project removes associated Todo entries ([!3141])
- **CE/EE:** Prevent a 500 error in Todos when author was removed ([!3141])
- **Omnibus GitLab:** Add ldap_sync_time global configuration as the EE is still supporting it ([!679])

[!179]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/179
[!212]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/212
[!219]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/219
[!223]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/223
[!3044]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3044
[!3141]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3141
[!679]: https://gitlab.com/gitlab-org/omnibus-gitlab/merge_requests/679

## GitLab Geo documentation

GitLab Geo is a new feature, currently in alpha, that allows you to have a
remote replicate of your entire GitLab instance. Today we're introducing its
documentation so that you our users can start using it.

## Upgrade barometer

This release includes two minor database migrations which can be run without
causing any downtime.

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
