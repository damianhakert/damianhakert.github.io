---
title: "GitLab 8.14 Released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
categories:
author: ADD_YOUR_FULL_NAME
author_twitter: TWITTER_USERNAME
image_title: /images/7_X/PICTURE.PNG
---

Intro and introduce main features here.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is ***MVP_USER*** ***CONTRIBUTION_OF_MVP_USER***.
Thanks ***MVP_USER_FIRST_NAME***!

{::options parse_block_html="true" /}

<i class="fa fa-gitlab" style="color:rgb(107,79,187); font-size:.85em" aria-hidden="true"></i>&nbsp;&nbsp;
Tune in on Nov. 30 for our 8.14 release webcast **Completing the Idea to Production Vision** for a live demo of Review Apps and Time Tracking for EE. [Register here](https://page.gitlab.com/20161124_ReviewAppsWebcast_LandingPage.html)!
&nbsp;&nbsp;<i class="fa fa-gitlab" style="color:rgb(107,79,187); font-size:.85em" aria-hidden="true"></i>\


{: .alert .alert-webcast}

<!--more-->

## Time Tracking (EE)

Whether you're a contractor that needs to keep track of their time,
or you're managing time spent on issues and projects,
time tracking has traditionally been a painful experience: You have various
systems to keep track or log your time and these never seem to fit in your
day-to-day workflow.

You can now track your time right where you're working, with Time Tracking
in GitLab, available for purchase with GitLab Enterprise Edition.

![]()

With Time Tracking, you're able to set estimates for how much time is necessary
for a particular issue. All you have to do is use a new slash command,
which can be entered in the issue description or a comment:

```
/estimate 6h
```

You can adjust this at any time with the same command. Once you've spent time
on an issue, you can log this simply with:

```
/spent 3h
```

## Chatops

> [Documentation link](link)

## Review Apps

## Cycle Analytics Events

> [Documentation link](link)

## Prevent merge until review is done

## GitLab Mattermost 3.5

GitLab 8.14 includes [Mattermost 3.5](https://about.mattermost.com/mattermost-3-5/), an [open source Slack-alternative](https://about.mattermost.com) whose newest release offers improved performance on mobile and web through reduced loading times, mobile UI improvements and faster server-side processing, Minio as a self-hosted S3-alternative to local file storage, Russian language translation, favorite channels and much more.

This version also includes [security updates](http://about.mattermost.com/security-updates/) and upgrade from earlier versions is recommended.

## Performance Improvements

* Commits that are pushed are now processed in a separate Sidekiq worker: [!6802](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6802)
* The authorised projects for a user are now stored in a dedicated database table. This list is updated whenever you are granted access to a new project, project access has been removed, etc: [!6839](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6839)
* Defer saving of project services to reduce database queries: [!6958](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6958)
* Getting the merge requests that close an issue now uses a cache: [!6996](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6996)
* Queries to get events have been optimised by removing the default ORDER BY where possible: [!7130](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/7130)
* GitLab can now limit the amount of Sidekiq workers per queue to a certain percentage: [!7292](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/7292)
* An index has been added for `project_import_data.project_id` to improve finding project import data: [!7316](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/7316)
* Certain database associations are now eager loaded on the merge requests and issues index pages: [!7564](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/7564)
* Refreshing of caches upon a push has been improved. Previously GitLab would refresh all caches, starting with 8.14 it will only refresh the caches of data that has been changed: [!7360](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/7360)
* Performance of loading auto complete data (e.g. usernames) has been improved: [!6856](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6856)

## Omnibus GitLab package changes

### Redis in HA configuration

In GitLab 8.11 [we've announced](https://about.gitlab.com/2016/08/22/gitlab-8-11-released/#redis-sentinel-support)
experimental Redis Sentinel support.
We've improved this further and also introduced ways of configuring Redis HA, all within the package.

With Omnibus GitLab 8.14 Enterprise Edition package, you can fully configure
Redis in Highly Available configuration which also includes configuring
Redis Sentinel. This is a step forward in the direction of having [fully HA ready Enterprise Edition package](https://gitlab.com/gitlab-org/gitlab-ee/issues/77).

When using Community Edition package, Redis Sentinel needs to be
installed and configured manually separately.

> [Read more about Redis HA setup in our docs](https://docs.gitlab.com/ee/administration/high_availability/redis.html)

### Omnibus GitLab packages on OpenSUSE

With GitLab 8.14 we are introducing omnibus-gitlab packages for OpenSUSE 13.2 and 42.1.
The packages are served through zypper repositories from our package server.

Go to [our download page](https://about.gitlab.com/downloads/) for installation
details.

### Package repositories for Oracle Linux and Scientific Linux

Omnibus GitLab packages for Oracle Linux and Scientific Linux have been supported
for a long time however, they required a manual change in the yum repo list.
Starting with GitLab 8.14, this is no longer necessary and you can use the directions
from [our download page](https://about.gitlab.com/downloads/) without any alterations.

### PostgreSQL version upgrade

Starting with GitLab 8.14 omnibus-gitlab package, we are providing a way to
upgrade the PostgreSQL database version.

The current version of PostgreSQL we are packaging (9.2.18) is slowly
approaching its EOL. Due to the [PostgreSQL versioning policy](https://www.postgresql.org/support/versioning/),
upgrades between major releases require downtime and the use of the `pg_upgrade` tool.

For this purpose, we are packaging the newest available PostgreSQL version (9.6.1).
We are also introducing `gitlab-ctl pg-upgrade` tool which should make this
transition as painless as possible.
When upgrading to GitLab 8.14, this *action will not be ran automatically*.
This will allow you to plan the database upgrade downtime.

After version 9.0 is released, we plan on setting the PostgreSQL version 9.6 as
default so please make sure that you plan your upgrade before that release.

> [Read more about database upgrade in our docs](https://docs.gitlab.com/omnibus/maintenance/README.html#upgrade-postgresql-database)

### Further Omnibus Package changes

* Packaged NGINX is upgraded to 1.10.2
* Packaged Redis is upgraded to 3.2.5
* Multiple configuration options got introduced in the [gitlab.rb](https://gitlab.com/gitlab-org/omnibus-gitlab/compare/8-13-stable...8-14-stable#diff-25) file
* See omnibus-gitlab [Changelog](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/8-14-stable/CHANGELOG.md) for more details

## Other changes

This release has more improvements, including security fixes. Please check out
[the changelog] to see all the named changes.

[the changelog]: https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG.md

## Upgrade barometer

To upgrade to GitLab 8.14, about 15 to 30 minutes downtime is required depending
on the size of your instance. See below for details.

* The column `application_settings.repository_storage` has been renamed, this requires downtime but takes very little time
* Some indexes with stricter constraints are being added and they require corresponding code changes to be deployed, this requires downtime
* The subscriptions data is being migrated in a way that can't be done online, this process may take a few minutes
* Project records with invalid visibility level are fixed, this can take a few minutes and requires downtime

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
