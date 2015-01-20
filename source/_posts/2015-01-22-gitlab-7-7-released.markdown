---
layout: post
title: "GitLab 7.7 released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
date: 2015-01-22
comments: true
categories:
author: Dmitriy Zaporozhets
---

GitLab is open source software to collaborate on code.
Today we announce the release of a new version of GitLab Community Edition (CE) and GitLab Enterprise Edition (EE), with new features, usability and performance improvements, and bug fixes.
The biggest new features in Community Edition are ***MAIN_CE_FEATURES***.
In addition to the updates from Community Edition, GitLab Enterprise Edition has gained ***MAIN_EE_FEATURES***.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is Ciro Santilli for sending over 200 merge requests to improve GitLab code base.
Thanks Ciro!

<!--more-->

## GitHub importer

Migrating projects from GitHub is easier than ever. 
With a single click you can import project with issues to GitLab.

[![screenshot](/images/7_7/import.png)](/images/7_7/import.png) 


## Mention noitication level

Get too much email? Selecting 'Mention' notification level you will only 
receive emails when people mention your username in their comment.


[![screenshot](/images/7_7/mention.png)](/images/7_7/mention.png) 


## OAuth applications

Many services such as Facebook, Twitter, and Google have already deployed OAuth servers. 
Now you have [OAuth](http://en.wikipedia.org/wiki/OAuth) server on your GitLab instance too. That means you can create 
3rd party applications and use your GitLab to authorize it.


[![screenshot](/images/7_7/oauth.png)](/images/7_7/oauth.png)

## Configure GitLab via UI on the fly

Now GitLab administrator can modify application settings on the fly without any downtime.

[![screenshot](/images/7_7/settings.png)](/images/7_7/settings.png)


## Other changes

This release has more improvements, please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/7-7-stable/CHANGELOG) to see the all named changes.


## Upgrade barometer

*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***

- - -

# Installation

If you are setting up a new GitLab installation please see the [installing GitLab page](https://www.gitlab.com/installation/).

# Updating

Upgrade instructions for omnibus-gitlab packages can be found in [the omnibus-gitlab repository](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/update.md).

If you installed GitLab from source and you have version 6.4.2 or higher you can use the [upgrade script](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/upgrader.md).
You have to update GitLab Shell to ***7.7.X*** manually, see [point 3 of the upgrade guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/X.x-to-x.x.md#3-update-gitlab-shell-and-its-config).

If you still want to do it manually - see the [Update Guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/X.x-to-X.x.md).

# Enterprise Edition

The mentioned EE only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles to our upgrade and installation services.

- - -
