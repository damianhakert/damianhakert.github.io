---
layout: post
title: "GitLab 7.8 released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
date: 2015-02-22
comments: true
categories:
author: Job van der Voort
---

M M MONSTER RELEASE

GitLab is open source software to collaborate on code.
Today we announce the release of a new version of GitLab Community Edition (CE) and GitLab Enterprise Edition (EE), with new features, usability and performance improvements, and bug fixes.
The biggest new features in Community Edition are ***MAIN_CE_FEATURES***.
In addition to the updates from Community Edition, GitLab Enterprise Edition has gained ***MAIN_EE_FEATURES***.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is Hannes Rosenögger.
Hannes took merge requests, fixed them up and contributed them to GitLab.
This is a great way to contribute and we're excited for him to join the core team.
Thanks Hannes Rosenögger!

<!--more-->

## GitLab.com integration: login with GitLab.com account and import projects from GitLab.com

Moving from GitLab.com to your own GitLab instance? It just became a lot easier!

You can login with your GitLab.com account to your instance and quickly import projects from GitLab.com.

[![screenshot](/images/7_8/feature.png)](/images/7_8/feature.png) ***7_8 is the version of GitLab being released***


## New file in Empty Repository

Don't like to switch to your commandline just to bootstrap a new GitLab project?
It's no longer necessary! You can now create a file in an empty repository without leaving GitLab:

[![screenshot](/images/7_8/feature.png)](/images/7_8/feature.png) **+7_8 is the version of GitLab being released***

## Commit calendar

See when you made the most commits in a single glance with the commit calendar.
Try to fill an entire year of beautiful commits!

[![screenshot](/images/7_8/feature.png)](/images/7_8/feature.png) **+7_8 is the version of GitLab being released***

## Never lose unsaved comments!

You're going to love this one. From now on, unsaved comments are automatically restored when you reload the page.
It's like magic and prevents you from ever losing comments again.

[![screenshot](/images/7_8/feature.png)](/images/7_8/feature.png) **+7_8 is the version of GitLab being released***

## Project avatars

Give your project a face with its own avatar:

[![screenshot](/images/7_8/feature.png)](/images/7_8/feature.png) **+7_8 is the version of GitLab being released***

## Mention groups

Another killer feature: you can now mention entire groups at once.
Have something awesome to share with your group `awesome-people`? Just mention them in the comment,
issue or merge request with `@awesome-people` and everyone will get notified.

[![screenshot](/images/7_8/feature.png)](/images/7_8/feature.png) **+7_8 is the version of GitLab being released***

## Select email for notifications

For years you've been able to add multiple email addresses to GitLab.
Now you can actually select which address you want to receive notifications on.

[![screenshot](/images/7_8/feature.png)](/images/7_8/feature.png) **+7_8 is the version of GitLab being released***

## Manage large files in Git with GitLab Annex (EE only feature)

Organisations are struggling with handling big files in their Git repositories.
Git-annex came to the rescue, but wasn't supported by any Git hosting solution,
making permission management of large files impossible. Until now.

GitLab Annex allows you to easily include large files in your git
repository, managed just as any other commit in GitLab.

We already [blogged](https://about.gitlab.com/2015/02/17/gitlab-annex-solves-the-problem-of-versioning-large-binaries-with-git/)
about GitLab Annex, as we're very excited about it.

[![screenshot](/images/7_8/feature.png)](/images/7_8/feature.png) ***7_8 is the version of GitLab being released***

## Improved JIRA integration (EE only feature)

We improved our JIRA in a big way! Closing a JIRA ticket with a commit is now reported
back to JIRA with a nice description and link.

On top of that you can now mention your JIRA tickets anywhere in GitLab and
we'll put a comment on the issue in JIRA, so everything is linked together neatly!

[![screenshot](/images/7_8/feature.png)](/images/7_8/feature.png) ***7_8 is the version of GitLab being released***

## GitHub Enterprise Importer (EE only feature)

Moving from GitHub Enterprise to GitLab Enterprise Edition? Easy!
You can quickly migrate entire repositories and issues in a single click
with the new GitHub Enterprise importer.

[![screenshot](/images/7_8/feature.png)](/images/7_8/feature.png) ***7_8 is the version of GitLab being released***

## Other changes

This release has more improvements, including security fixes, please check out [the (MASSIVE) Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


## Upgrade barometer

This is a regular upgrade. It contains several migrations,
none of which particularly scary.

- - -

# Installation

If you are setting up a new GitLab installation please see the [installing GitLab page](https://www.gitlab.com/installation/).

# Updating

Upgrade instructions for omnibus-gitlab packages can be found in [the omnibus-gitlab repository](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/update.md).

If you installed GitLab from source and you have version 6.4.2 or higher you can use the [upgrade script](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/upgrader.md).
You have to update GitLab Shell to ***2.4.3*** manually, see [point 3 of the upgrade guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/7.7-to-7.8.md#3-update-gitlab-shell-and-its-config).

If you still want to do it manually - see the [Update Guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/7.7-to-7.8.md).

# Enterprise Edition

The mentioned EE only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles to our upgrade and installation services.

- - -
