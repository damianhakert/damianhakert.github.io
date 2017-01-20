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

## Omnibus GitLab package changes

### PostgreSQL version upgrade

As mentioned [in the 8.15 release post](https://about.gitlab.com/2016/12/22/gitlab-8-15-released/#postgresql-version-upgrade),
omnibus-gitlab packages are equipped with `gitlab-ctl pg-upgrade` tool.
This tool will upgrade the bundled PostgreSQL database version.

Please plan the upgrade ahead of GitLab 9.0 release (scheduled for Mar. 22, 2017).

The omnibus-gitlab packages for GitLab 9.0 will prevent upgrades until the database
is upgraded.

> [Read more about database upgrade in our docs](https://docs.gitlab.com/omnibus/settings/database.html#upgrade-packaged-postgresql-server)


> Ran into issues? Create an issue at the [omnibus-gitlab issue tracker](https://gitlab.com/gitlab-org/omnibus-gitlab/issues),
and reference it in the [upgrade problems meta issue.](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1783)

### Monitoring GitLab with Prometheus

We have outlined a [bold vision](https://about.gitlab.com/2017/01/05/prometheus-and-gitlab/)
for making world class monitoring easier for everyone, and with 8.16 we have
taken our first step towards that goal. In this release we have included
[Prometheus](https://prometheus.io) and it's
[Node Exporter](https://github.com/prometheus/node_exporter) as part of our
Omnibus package. This will provide high quality time-series monitoring of your
GitLab server.

Both Prometheus and Node exporter are off by default for this release, but we
plan on having them on by default starting with GitLab version 9.0.
To enable monitoring now, simply [enable the features](https://docs.gitlab.com/omnibus/gitlab-prometheus/README.html) and reconfigure GitLab.

### Reduced package size

When you download the omnibus-gitlab 8.16 package you might notice the reduced
package size. Do not be alarmed, this is intentional.
Even with the new addition of monitoring in the package, the size was reduced
by almost 50MB!
[We've been working](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1778)
and will continue working on further size optimizations of the package.

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
