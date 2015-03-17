---
layout: post
title: "GitLab 7.9 released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
date: 2015-03-22
comments: true
categories:
author:
---

GitLab is open source software to collaborate on code.
Today we announce the release of a new version of GitLab Community Edition (CE) and GitLab Enterprise Edition (EE), with new features, usability and performance improvements, and bug fixes.
The biggest new features in Community Edition are ***MAIN_CE_FEATURES***.
In addition to the updates from Community Edition, GitLab Enterprise Edition has gained ***MAIN_EE_FEATURES***.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is ***MVP_USER*** ***CONTRIBUTION_OF_MVP_USER***.
Thanks ***MVP_USER_FIRST_NAME***!

<!--more-->

## Dashboard

Including starred projects page, groups page, milestones page

[![screenshot](/images/7.9/feature.png)](/images/7.9/feature.png) ***7.9 is the version of GitLab being released***


## Add Bitbucket importer

Now you can import projects and issues from bitbucket


## Save web edit in new branch

When editing file online you can save it to new branch to easy create a merge request after.

[![screenshot](/images/7.9/feature.png)](/images/7.9/feature.png) ***7.9 is the version of GitLab being released***


## Drag and drop any file in markdown 

Drag and drop pdf file or zip archive to issue description or comment

[![screenshot](/images/7.9/feature.png)](/images/7.9/feature.png) **+7.9 is the version of GitLab being released**

## Use Emoji One

Nice emoji

## Subscribe/Unsubscribe from issue or merge request 

Dont want to get notifications in certain issue. Just unsubscribe. 

## NEW_SPONSORED_FEATURE

Thanks to sponsoring by ***COMPANY_NAME*** it is now possible to ***DESCRIPTION_OF_THE_FEATURE*** [LINK TO CHAGELOG](https://gitlab.com/gitlab-org/gitlab-ce/blob/X-X-stable/CHANGELOG#L18).

## Group level webhooks (EE only feature)

Share the same web hooks between multiple projects - just setup it once in group.

[![screenshot](/images/7.9/feature.png)](/images/7.9/feature.png) ***7.9 is the version of GitLab being released***

## Other changes

This release has more improvements, including security fixes, please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


## Upgrade barometer

New dependency is added. For installations from source `nodejs` is required. For Debian/Ubuntu it should be as easy as `sudo apt-get install nodejs`. For CentOS `yum install nodejs`. Omnibus packages are shipped with nodejs already compiled so no action is needed if you are installing using a package.

*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****

- - -

# Installation

If you are setting up a new GitLab installation please see the [installing GitLab page](https://www.gitlab.com/installation/).

# Updating

Upgrade instructions for omnibus-gitlab packages can be found in [the omnibus-gitlab repository](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/update.md).

If you installed GitLab from source and you have version 6.4.2 or higher you can use the [upgrade script](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/upgrader.md).
You have to update GitLab Shell to ***X.X.X*** manually, see [point 3 of the upgrade guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/X.x-to-x.x.md#3-update-gitlab-shell-and-its-config).

If you still want to do it manually - see the [Update Guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/X.x-to-X.x.md).

# Enterprise Edition

The mentioned EE only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles to our upgrade and installation services.

- - -
