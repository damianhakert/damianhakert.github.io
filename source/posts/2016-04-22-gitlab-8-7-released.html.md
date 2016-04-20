---
layout: post
title: "GitLab 8.7 released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
date: 2016-04-22
categories:
author: Job van der Voort
author_twitter: Jobvo
image_title: /images/7_X/PICTURE.PNG
---

Intro and introduce main features here.

MVP Connor. We want to also recognize Ershad for X and Y.

<!--more-->

## Multiple label filter

> [Documentation link](link)

## LICENSE templates

> [Documentation link](link)

## Smarter, Better looking Commenting

- press up to edit
- new design
- better mentions

## Better diffs

### Better copying from diffs

### Better looking diffs

## Cherry Pick

https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3514

## Remote Mirrors

* The support to have remote repositories as mirrors has been added to EE: https://gitlab.com/gitlab-org/gitlab-ee/issues/116

## Other changes

### More options default Dashboard page

- todos
- groups view

https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3379

### Build status notifications

gif?
https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/2604

### Raw build trace output

### CI: job-level environment variables

* You can now define environment variables on a job level in `.gitlab-ci.yml`.

    Job-level variables take precedence over global YAML variables, so it is now possible to override global YAML variables in a definition of CI job.  Merge request: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3612.

### Improvements to logging when behind a reverse proxy

- You can now add your proxy server to the list of trusted servers, so it's IP is not logged as the client IP. The default trusted servers were also updated so that IPs on the private network are not trusted by default. Merge request: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3524

- The NGINX included in the Omnibus package is now compiled with the real_ip module, and can be configured to use a  list of  trusted proxies for determining client IP in its logs Merge Request: https://gitlab.com/gitlab-org/omnibus-gitlab/merge_requests/709

### Authentication related changes

- SAML can identify external groups based on configuration and set members of these groups as external users: gitlab-org/gitlab-ce!3530
- Omniauth providers can be marked as external, allowing all users of these providers, even existing ones, to be marked as external users: gitlab-org/gitlab-ce!3657

## Performance related changes

* Timestamps for metrics have been made more accurate to prevent InfluxDB from overwriting points. Depending on the amount of traffic this may lead to significantly more data being stored. Merge request: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3617
* Extra instrumentation was added for various bits of code. Merge requests: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3701, https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3675, https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3659, https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3742
* Rails cache timings are now tracked. Merge request: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3619
* Markdown rendering performance has been improved, leading to a 3x performance boost in the most ideal cases, though this highly depends on the type of data being rendered. Merge request:  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3389
* Emoji autocomplete performance has been improved. Merge request: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3458
* The referenced merge requests and related branches of an issue are now loaded asynchronously. This reduces the loading time of issue pages. Merge request: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3678

## GitLab Mattermost 2.2

[Mattermost 2.2](http://www.mattermost.org/mattermost-2-2-threaded-messages-and-more/) ships in GitLab 8.7 with threaded messages, French translation, new themes, new Trello and IRC support, plus many more new benefits.

This version also includes a [security update](http://docs.mattermost.com/administration/changelog.html#security-update) and [upgrade from earlier versions]((http://doc.gitlab.com/omnibus/gitlab-mattermost/)) is recommended.


## Other changes

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


## Upgrade barometer

This release requires downtime due to a number of schema and data migrations.


*Note* We assume you are upgrading from the latest version. If not, then also consult the upgrade barometers of any intermediate versions you are skipping.
If you are upgrading from a GitLab version prior to 8.0 *and* you have CI enabled, you have to upgrade to GitLab 8.0 [first](https://about.gitlab.com/2015/09/22/gitlab-8-0-released/).

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
