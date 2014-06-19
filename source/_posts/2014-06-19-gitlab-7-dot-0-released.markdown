---
layout: post
title: "GitLab 7.0 released"
date: 2014-06-19 16:18:54 +0300
comments: true
categories: 
author: Dmitriy Zaporozhets
---

GitLab is open source software to collaborate on code.
Today we announce the release of a new version of GitLab Community Edition (CE) and GitLab Enterprise Edition (EE), with new features, usability and performance improvements, and bug fixes.
The biggest new feature in Community Edition is ***MAIN_CE_FEATURE***.
In addition to the updates from Community Edition, GitLab Enterprise Edition ***MAIN_EE_FEATURE***.

Other changes include ***FEATURES_FROM_CHANGELOG***.

This month's Most Valuable Person (MVP) is ***MVP_USER*** ***CONTRIBUTION_OF_MVP_USER***.
Thanks ***MVP_USER_FIRST_NAME***!

<!--more-->

## Attach images (JPG, PNG, GIF) by dragging & dropping or selecting them

Now you can easily attach several images to issue description or comment using drag & drop feature.

[![screenshot](/images/7_0/upload.gif)](/images/7_0/upload.gif)

## Permissions changes

Some new changes to permissions model:

Developers: 

* can remove branch via UI and push
* can not remove or owerwrite git tags

Masters: 

* can not remove or force push to branch unless it is protected
* can create projects in group (only if master is a group access level)

## Improved performance

Application is much faster now. Especially for large groups.

## Drag & drop issues inside milestone 

Thanks to sponsoring by ***COMPANY_NAME*** it is now possible to ***DESCRIPTION_OF_THE_FEATURE*** [LINK TO CHAGELOG](https://gitlab.com/gitlab-org/gitlab-ce/blob/X-X-stable/CHANGELOG#L18).

[![screenshot](/images/7_0/milestone.gif)](/images/7_0/milestone.gif)

- - -

# Installation

If you are setting up a new GitLab installation please see the [installing GitLab page](https://www.gitlab.com/installation/).

# Updating

Upgrade instructions for omnibus-gitlab packages can be found in [the omnibus-gitlab repository](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/update.md).

If you still want to do it manually - see the [Update Guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/X.x-to-X.x.md).

# Enterprise

For LDAP group support and more have a look at the [feature list of GitLab Enterprise Edition](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/subscription/).

No time to upgrade or maintain Gitlab yourself?
GitLab B.V. also offers upgrade and installation services as part of a [subscription](http://www.gitlab.com/subscription/) or alternatively on a [consultancy basis](http://www.gitlab.com/consultancy/).

- - -
