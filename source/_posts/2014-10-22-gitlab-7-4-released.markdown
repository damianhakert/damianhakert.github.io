---
layout: post
title: "GitLab 7.4 released with task lists and multiple LDAP servers support"
date: 2014-10-22
comments: true
categories:
author: Valery Sizov
---

GitLab is open source software to collaborate on code.
Today we announce the release of a new version of GitLab Community Edition (CE) and GitLab Enterprise Edition (EE), with new features, usability and performance improvements, and bug fixes.
The biggest new feature in Community Edition is task lists.
In addition to the updates from Community Edition, GitLab Enterprise Edition from now has support for multiple LDAP servers.

Other changes include reworked snippet access which from now can be public, internal or private, also added README to tab on project show page. Also added a lot of bug fixes.

This month's Most Valuable Person (MVP) is Vinnie Okada. He added cross-project references to the markdown parser, task lists to issue and merge request descriptions and improved event note display.
Thanks Vinnie!

<!--more-->

## Task lists

You can define task list directly at the issue page by using special syntax `- [ ] title`.
This feature makes gitlab issue tracker more flexible.

[![screenshot](/images/7_4/feature.png)](/images/7_4/feature.png) ***7_4 is the version of GitLab being released***


## README tab on project show page

This tab allows you to see readme page directly at the project main page 

[![screenshot](/images/7_4/feature.png)](/images/7_4/feature.png) ***7_4 is the version of GitLab being released***


## Snippet can be public, internal or private

Now that you can create snippet with various visibility level. Public level is defining that all user can see it, even those who are not authorized. Internal snippet will be visible to authorized users.
Private snippet only for private using.

[![screenshot](/images/7_4/feature.png)](/images/7_4/feature.png) **+7_4 is the version of GitLab being released***


## Support for multiple LDAP servers (EE only feature)

Integrate GitLab with more than one LDAP server

[![screenshot](/images/7_4/feature.png)](/images/7_4/feature.png) ***7_4 is the version of GitLab being released***

## Other changes

This release has more improvements, please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/7-4-stable/CHANGELOG) to see the all named changes.

- - -

# Installation

If you are setting up a new GitLab installation please see the [installing GitLab page](https://www.gitlab.com/installation/).

# Updating

Upgrade instructions for omnibus-gitlab packages can be found in [the omnibus-gitlab repository](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/update.md).

If you installed GitLab from source and you have version 6.4.2 or higher you can use the [upgrade script](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/upgrader.md).
If you still want to do it manually - see the [Update Guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/7.3-to-7.4.md).

# Enterprise Edition

The mentioned EE only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/subscription/).
No time to upgrade GitLab yourself?
A subscription also entitles to our upgrade and installation services.

- - -
