---
layout: post
title: "GitLab 8.2 released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
date: 2015-11-22
comments: true
categories:
author: ADD_YOUR_FULL_NAME
filename: FILENAME.MARKDOWN
image_title: /images/7_X/PICTURE.PNG
---

GitLab is open source software to collaborate on code.
Today we announce the release of a new version of GitLab Community Edition (CE) and GitLab Enterprise Edition (EE), with new features, usability and performance improvements, and bug fixes.
The biggest new features in Community Edition are ***MAIN_CE_FEATURES***.
In addition to the updates from Community Edition, GitLab Enterprise Edition has gained ***MAIN_EE_FEATURES***.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is ***MVP_USER*** ***CONTRIBUTION_OF_MVP_USER***.
Thanks ***MVP_USER_FIRST_NAME***!

<!--more-->

## Award Emoji

As a remote worker, you get much less opportunities for high-fives, thumbs-ups
and fist bumps. In order to make virtual celebrations easier, you can now
vote on issues and merge requests using emoji!

![]()

This makes it much easier to give and receive feedback, without a long comment thread.
For example, we will start using issues as a replacement for our
[feedback forum](https://feedback.gitlab.com).

## Releases

When creating versioned software, git tags are ideal. It is not rare that you
want to include some extra files and release notes, which is not natively
supported by Git.

With releases you can now add a markdown formatted message to any git tag
and attach any amount of files to it.

Simply press the edit button next to tags.

## Global Milestones

In GitLab you were already able to create milestones that cover multiple
projects. By giving a milestone the same name across projects, you can view the
grouped issues and merge requests on the dashboard and in groups.

With Global Milestones in GitLab 8.2, we made it possible to immediately create
milestones in multiple projects. This makes it easier to track activity and
progress across groups and projects.

## Repository Mirroring (EE only)

If you want to maintain a mirror of a repository in a GitLab instance,
you can now let GitLab handle the mirroring for you automatically in GitLab
Enterprise Edition.

There are several use cases for this. If you are globally distributed and want
to have a repository available for quick cloning, you can use repository mirroring
to always have an up-to-date, fast mirror of a remote repository.

Alternatively, if you want to have a public mirror of your project, for instance
on GitLab.com, you can now do so effortlessly.

## Build artifacts

## CI Runner Caching

## + a little surprise

## Other changes

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


## Upgrade barometer


*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****

*Note* If you are upgrading from a GitLab version prior to 8.0 *and* you have CI enabled, you have to upgrade to GitLab 8.0 [first](https://about.gitlab.com/2015/09/22/gitlab-8-0-released/).

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

- - -

## Installation

If you are setting up a new GitLab installation please see the
[download GitLab page](https://about.gitlab.com/installation/).

## Updating

Check out our [update page](https://about.gitlab.com/update/).

## Enterprise Edition

The mentioned EE only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles you to our upgrade and installation services.

- - -
