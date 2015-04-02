---
layout: post
title: "GitLab 7.9.2 Released"
date: 2015-04-02
comments: true
categories:
author: Marin Jankovski
---

Today we release GitLab CE, GitLab EE and GitLab CI 7.9.2.

This release is a security release and it contains only fixes for GitLab CI.


GitLab CI 7.9.2 disables builds on shared runners if a project has assigned runners.

What this means is that the user will have to enable `Allow shared runners
` option explicitly if they want the project build to run on a shared runner.

Be advised that serving builds on a shared runner means that trust is required in all users using the CI. Private projects that have CI builds enabled with shared runner setting on will be accesible to all users with access to CI.

<!-- more -->

## Upgrade barometer

Upgrading GitLab CI from 7.9.1 to 7.9.2 contains database migrations. Downtime is not required but it is recommended as existing records are updated.

Upgrading GitLab CE or EE from 7.9.1 requires no downtime as this release contains no changes related to GitLab.

## Upgrading

Omnibus-gitlab packages for GitLab 7.9.2 are [now available](https://about.gitlab.com/downloads/).

To upgrade a GitLab installation from source please use the
[upgrader](http://doc.gitlab.com/ce/update/upgrader.html) or the [patch update
guide](http://doc.gitlab.com/ce/update/patch_versions.html).

To upgrade a GitLab CI installation from source, please use the [upgrade guide](https://gitlab.com/gitlab-org/gitlab-ci/blob/master/doc/update/patch_versions.md).

## Enterprise Edition

Omnibus packages for GitLab Enterprise Edition 7.9.2 are available for subscribers [here](https://gitlab.com/subscribers/gitlab-ee/blob/master/doc/install/packages.md). For installations from source, use [this guide](https://gitlab.com/subscribers/gitlab-ee/blob/master/doc/update/patch_versions.md).

Interested in GitLab Enterprise Edition?
For an overview of feature exclusive to GitLab Enterprise Edition please have a look at the [features exclusive to GitLab EE](http://about.gitlab.com/features/#enterprise).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/subscription/).
No time to upgrade GitLab yourself?
A subscription also entitles to our upgrade and installation services.
