---
layout: post
title: "GitLab 7.5.2 and GitLab CI 5.2.1 Release"
date: 2014-12-03
comments: true
categories:
author: Job van der Voort
---

Today we released GitLab 7.5.2 (both CE and EE) and GitLab CI 5.2.1.

GitLab 7.5.2 brings two fixes:

- Sidekiq arguments are no longer being logged. This prevents password reset tokens from appearing in the `sidekiq.log`
- Fix a bug with restoring the backup of a wiki

GitLab CI 5.2.1 fixes several bugs:

- 500 error on /admin/builds
- Build API Request giving 400 / CSRF token authenticity error
- Build script info not being displayed well after update
- Problems with adding a project

<!-- more -->

## Upgrading

Omnibus-gitlab packages for GitLab 7.5.2 and GitLab CI 5.2.1 are [now available](https://about.gitlab.com/downloads/).
To upgrade an installation from source please use the
[upgrader](http://doc.gitlab.com/ce/update/upgrader.html) or the [patch update
guide](http://doc.gitlab.com/ce/update/patch_versions.html).
