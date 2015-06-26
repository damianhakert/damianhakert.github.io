---
layout: post
title: "GitLab 7.13 released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
date: 2015-06-22
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

### ***MAIN_CE_FEATURE***

***DESCRIPTION***

[![screenshot](/images/7_13/feature.png)](/images/7_13/feature.png) ***7_13 is the version of GitLab being released***


### ***NEW_CE_FEATURE***

***DESCRIPTION***

[![screenshot](/images/7_13/feature.png)](/images/7_13/feature.png) ***7_13 is the version of GitLab being released***


### NEW_CE_FEATURE

***DESCRIPTION***

[![screenshot](/images/7_13/feature.png)](/images/7_13/feature.png) **+7_13 is the version of GitLab being released***

### NEW_SPONSORED_FEATURE

Thanks to sponsoring by ***COMPANY_NAME*** it is now possible to ***DESCRIPTION_OF_THE_FEATURE*** [LINK TO CHAGELOG](https://gitlab.com/gitlab-org/gitlab-ce/blob/7-13-stable/CHANGELOG#L18).

### ***MAIN_EE_FEATURE*** (EE only feature)

***DESCRIPTION***

[![screenshot](/images/7_13/feature.png)](/images/7_13/feature.png) ***7_13 is the version of GitLab being released***

### ***EE_FEATURE*** (EE only feature)

***DESCRIPTION***

[![screenshot](/images/7_13/feature.png)](/images/7_13/feature.png) ***7_13 is the version of GitLab being released***


## ***MAIN_CI_FEATURE***

***DESCRIPTION***

[![screenshot](/images/7_13/feature.png)](/images/7_13/feature.png) ***7_13 is the version of GitLab CI being released***


## ***NEW_CI_FEATURE***

***DESCRIPTION***

[![screenshot](/images/7_13/feature.png)](/images/7_13/feature.png) ***7_13 is the version of GitLab CI being released***


## NEW_CI_FEATURE

***DESCRIPTION***

[![screenshot](/images/7_13/feature.png)](/images/7_13/feature.png) **+7_13 is the version of GitLab CI being released***

## NEW_SPONSORED_FEATURE

Thanks to sponsoring by ***COMPANY_NAME*** it is now possible to ***DESCRIPTION_OF_THE_FEATURE*** [LINK TO CHAGELOG](https://gitlab.com/gitlab-org/gitlab-ce/blob/7-13-stable/CHANGELOG#L18).

### Other changes

This release has more improvements, including security fixes, please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


### Upgrade barometer

*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****

#### Changed default location of database socket for Omnibus packages

By default, PostgreSQL places the unix socket file inside of the `/tmp` directory.
Prior to 7.13, GitLab installed using omnibus-gitlab packages would use PostgreSQL default socket location to connect to the database.
This has caused issues when installing GitLab using omnibus-gitlab packages if there is an existing PostgreSQL database.

Given the goal of omnibus-gitlab package to be self contained and not influenced by existing sofware we've moved the socket location to `/var/opt/gitlab/postgresql`.

If you had previously set `db_host` setting in `/etc/gitlab/gitlab.rb` explicity for `gitlab_rails` or `gitlab_ci`, be aware that this will possibly require a change. For example, if you had

```ruby
gitlab_rails['db_host'] = '/tmp'
```

this will need to change to

```ruby
gitlab_rails['db_host'] = '/var/opt/gitlab/postgresql'
```
- - -

## Installation

If you are setting up a new GitLab installation please see the
[download GitLab page](https://www.gitlab.com/installation/).

## Updating

Check out our [update page](https://about.gitlab.com/update/).

## Enterprise Edition

The mentioned EE only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles you to our upgrade and installation services.

- - -
