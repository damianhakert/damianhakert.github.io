---
layout: post
title: "GitLab 7.10.2 released"
date: 2015-05-06
comments: true
author: Job van der Voort
author_twitter: Jobvo
---

We've released 7.10.2 for GitLab CE, EE and CI.

It includes the following fixes, that apply to both CE and EE:

- A bug when using the Gitorious importer
- A bug that prevented adding group members through the admin screen
- Broken links on the merge request page leading to CI services
- A 500 error when trying to search in the wiki
- A 500 error when trying to add new tags to a project
- A bug where commit data would not appear in some subdirectories due to escaped slashes
- A bug where branches with escaped characters in their names would not always work
in the compare view

<!-- more -->

## Upgrade barometer

This patch contains several migrations to fix the issue with the tags.
It can be performed online if you're coming from 7.10.

## Upgrading

To upgrade, check out our [upgrade page](https://about.gitlab.com/upgrade).

## Enterprise Edition

Omnibus packages for GitLab Enterprise Edition 7.10.2 are available for subscribers [here](https://gitlab.com/subscribers/gitlab-ee/blob/master/doc/install/packages.md). For installations from source, use [this guide](https://gitlab.com/subscribers/gitlab-ee/blob/master/doc/update/patch_versions.md).

Interested in GitLab Enterprise Edition?
For an overview of feature exclusive to GitLab Enterprise Edition please have a look at the [features exclusive to GitLab EE](http://about.gitlab.com/features/#enterprise).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/subscription/).
No time to upgrade GitLab yourself?
A subscription also entitles to our upgrade and installation services.
