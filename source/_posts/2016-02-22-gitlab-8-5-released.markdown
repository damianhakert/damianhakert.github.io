---
layout: post
title: "GitLab 8.5 released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
date: 2016-02-22
comments: true
categories:
author: ADD_YOUR_FULL_NAME
image_title: /images/7_X/PICTURE.PNG
---

GitLab is open source software to collaborate on code.
Today we announce the release of a new version of GitLab Community Edition (CE) and GitLab Enterprise Edition (EE), with new features, usability, and performance improvements, and bug fixes.
The biggest new features in Community Edition are ***MAIN_CE_FEATURES***.
In addition to the updates from Community Edition, GitLab Enterprise Edition has gained ***MAIN_EE_FEATURES***.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is ***MVP_USER*** ***CONTRIBUTION_OF_MVP_USER***.
Thanks ***MVP_USER_FIRST_NAME***!

<!--more-->

## ***MAIN_CE_FEATURE***

***DESCRIPTION***

[![screenshot](/images/8_5/feature.png)](/images/8_5/feature.png) ***8_5 is the version of GitLab being released***


## ***NEW_CE_FEATURE***

***DESCRIPTION***

[![screenshot](/images/8_5/feature.png)](/images/8_5/feature.png) ***8_5 is the version of GitLab being released***


## NEW_CE_FEATURE

***DESCRIPTION***

[![screenshot](/images/8_5/feature.png)](/images/8_5/feature.png) ***8_5 is the version of GitLab being released***

## NEW_SPONSORED_FEATURE

Thanks to sponsoring by ***COMPANY_NAME*** it is now possible to ***DESCRIPTION_OF_THE_FEATURE*** [LINK TO CHAGELOG](https://gitlab.com/gitlab-org/gitlab-ce/blob/8-5-stable/CHANGELOG#L18).

## ***MAIN_EE_FEATURE*** (EE only feature)

***DESCRIPTION***

[![screenshot](/images/8_5/feature.png)](/images/8_5/feature.png) ***8_5 is the version of GitLab being released***

## ***EE_FEATURE*** (EE only feature)

***DESCRIPTION***

[![screenshot](/images/8_5/feature.png)](/images/8_5/feature.png) ***8_5 is the version of GitLab being released***


## ***MAIN_CI_FEATURE***

***DESCRIPTION***

[![screenshot](/images/8_5/feature.png)](/images/8_5/feature.png) ***8_5 is the version of GitLab CI being released***


## ***NEW_CI_FEATURE***

***DESCRIPTION***

[![screenshot](/images/8_5/feature.png)](/images/8_5/feature.png) ***8_5 is the version of GitLab CI being released***


## NEW_CI_FEATURE

***DESCRIPTION***

[![screenshot](/images/8_5/feature.png)](/images/8_5/feature.png) ***8_5 is the version of GitLab CI being released***

## NEW_SPONSORED_FEATURE

Thanks to sponsoring by ***COMPANY_NAME*** it is now possible to ***DESCRIPTION_OF_THE_FEATURE*** [LINK TO CHAGELOG](https://gitlab.com/gitlab-org/gitlab-ce/blob/8-5-stable/CHANGELOG#L18).

## Other changes

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.

### Updates in the omnibus-gitlab package

As GitLab gets improved every release, so is the omnibus-gitlab package.
You can see the changes that package receives for every release it the
[omnibus-gitlab CHANGELOG](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/CHANGELOG.md).

This release there are some major changes in the bundled software:

* Ruby is updated from version 2.1.8 to 2.2.4
* Nginx is updated from version 1.7.12 to 1.9.10
* Nginx spdy protocol was replaced with http2
* Openssl is updated from version 1.0.1r to 1.0.2f

### Mattermost 1.5

We're shipping Mattermost 1.5 with GitLab 8.5.
Most notable of [many changes in this release](LINK), are a few features that
are improving the way GitLab works with Mattermost.

* GitLab SSO is now available in Mattermost iOS app. This is a breaking change
and iOS app will no longer work on previous version of GitLab Mattermost
*  Mattermost upgrade will now be able to skip 1 major build version. This means
that you will be able to upgrade using package 8.3 to 8.5 without breaking
Mattermost.


## Upgrade barometer

A migration affecting projects having a path ending in '.atom' has been added,
as they are no longer supported. This migration updates both the database and
the filesystem and previous versions of this migration have proven to be fragile.

If you have no projects with paths ending in '.atom' in your database (most likely, you don't)
you can perform this upgrade online. If you do have them, we recommend to take downtime.
You can find the current number of affected database records with the following command:

```
 sudo gitlab-rails runner "puts Project.where(%q{path LIKE '%.atom'}).count"
```

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
For a complete overview please have a look at the [feature list of GitLab EE]( https://about.gitlab.com/features/#enterprise).

Access to GitLab Enterprise Edition is included with a
[subscription]( https://about.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles you to our upgrade and installation services.

- - -
