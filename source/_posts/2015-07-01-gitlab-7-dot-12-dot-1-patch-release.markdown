---
layout: post
title: "GitLab 7.12.1 patch release"
date: 2015-07-01
comments: true
author: Jacob Vosmaer
author_twitter: jacobvosmaer
---

Today we released GitLab 7.12.1 (Community Edition, Enterprise Edition and
Continuous Integration). This is a bug fix release.

<!-- more -->

GitLab Community Edition (CE) and Enterprise Edition (EE) 7.12.1 contain fixes
for integration with external issue trackers (e.g. Redmine), user removal and
SAML user activation. 

In GitLab Continuous Integration (CI) we fixed several bugs related to the new
`.gitlab-ci.yml` job specification format.

In the omnibus packages we fixed the remote_syslog feature (EE only), added
support for special SAML settings in gitlab.yml, and we fixed a bug in the
automatic GitLab / GitLab CI integration.

For more details on the changes please see the
[CE](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG),
[EE](https://gitlab.com/gitlab-org/gitlab-ee/blob/master/CHANGELOG),
[CI](https://gitlab.com/gitlab-org/gitlab-ci/blob/master/CHANGELOG), and
[Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/CHANGELOG.md)
CHANGELOGs.

Please see our [Update page](/update/) for update instructions.
