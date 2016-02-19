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

Once again, we received some amazing contributions this release.
One of these is the support for relative URLs in Omnibus installations,
which was one of the many contributions we received from Artem Sidorenko.

Thanks Artem Sidorenko and congratulations on being
[this month's MVP](https://about.gitlab.com/mvp/)!

<!--more-->

## Performance for Scale

At GitLab, making sure everything runs smoothly with thousands of projects
has always been a priority. But with GitLab 8.5, we've raised the bar for
ourselves.

Average mean performance is up at least 1.4 times, up to 1.6 times for 99th
percentile response times. For slower pages, the response time has been improved
way beyond this.

For instance, displaying individual issues is now up to 3.5 times faster
for very large issues. The graph below shows you the slowest 95th percentile
response times for loading issues on GitLab.com before and after we deployed
the first release candidate of 8.5:

![Response times for single issues in GitLab 8.5](/images/8_5/issue_timings.png)

There are many performance improvements that you will notice with 8.5.
Especially if you're running a very large server, this release will make
all your users happy.

## Tasks

## GitLab Geo Beta

## Render SVGs inline

## Markdown in Broadcast messages

## Mark difference on file renames

## Labels in Milestone View

## Erase Build Content

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

### Mattermost 2.0

[Mattermost 2.0](http://www.mattermost.org/open-source-localizable-slack-alternative-mattermost-2-0/)
ships with GitLab 8.5 and includes localization support,
Spanish-language translation, and API support for GitLab single-sign-on in iOS
and Android apps.

Mattermost can now also skip 1 major build version. This means GitLab Mattermost
upgrades from GitLab 8.3 to 8.5 without needing to upgrade to 8.4.
The new 2.0 iOS app for Mattermost with GitLab SSO requires Mattermost server
2.0 and higher due to a breaking change in mobile API incompatible with
Mattermost 1.x.


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
