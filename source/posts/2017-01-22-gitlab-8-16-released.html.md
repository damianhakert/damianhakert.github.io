---
title: "GitLab 8.16 Released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
categories:
author: ADD_YOUR_FULL_NAME
author_twitter: TWITTER_USERNAME
image_title: /images/7_X/PICTURE.PNG
---

Intro and introduce main features here.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is ***MVP_USER*** ***CONTRIBUTION_OF_MVP_USER***.
Thanks ***MVP_USER_FIRST_NAME***!

<!--more-->

## feature 1

> [Documentation link](link)

## feature 2

> [Documentation link](link)

## Other changes

This release has more improvements, including security fixes. Please check out
[the changelog] to see all the named changes.

[the changelog]: https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG.md

## Upgrade barometer


*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****


### Note

We assume you are upgrading from the latest version. If not, then also consult the upgrade barometers of any intermediate versions you are skipping.
If you are upgrading from a GitLab version prior to 8.0 *and* you have CI enabled, you have to upgrade to GitLab 8.0 [first](https://about.gitlab.com/2015/09/22/gitlab-8-0-released/).

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

----

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

----
