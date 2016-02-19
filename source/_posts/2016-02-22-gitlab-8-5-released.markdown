---
layout: post
title: "GitLab 8.5 released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
date: 2016-02-22
comments: true
categories:
author: Job van der Voort
author_twitter: Jobvo
image_title: /images/7_X/PICTURE.PNG
---

If there is one GitLab release that you'll want to upgrade to as soon as
possible, it's this one.

GitLab 8.5 is faster, _a lot faster_. Not only have we increased performance
for everyone, getting to what is important is now super quick with Tasks.

With GitLab 8.5 Enterprise Edition, we're also introducing the beta of
GitLab Geo, which allows you to have a remote replicate of your entire
GitLab instance.

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

GitLab is where you do your work, so being able to get start quickly is
very important. Therefore, we're now introducing Tasks.

Tasks is a chronological list of tasks that are waiting for your input.
Whenever you're assigned to an issue or merge request
or have someone mention you, a new task is created automatically.

Then when you've made a change, like replying to a comment or updating an issue,
the task is automatically set to **Done**. You can also manually mark tasks
as done.

![Tasks in GitLab 8.5](tasks.png)

Tasks has been designed to be as actionable as possible, so that you can focus
on what is important. Having a personal space to work from has been a long-time
request and we're looking forward to your feedback after having given it a go.

> TODO documentation link

## GitLab Geo Beta (EE)

If you have two or more teams geographically spread out,
but your GitLab instance is in a single location,
fetching large repositories can take a long time.

With GitLab Geo, you can have a secondary GitLab instance that mirrors your
main GitLab instance. Your Geo instance can be used for cloning and fetching
projects, in addition to reading any data. This will make working with large
repositories over large distances much faster.

With GitLab 8.5, we're offering GitLab Geo as a beta to all our Enterprise
Edition customers.

> TODO documentation link

## Labels in Milestone View

We want to make GitLab the best place to manage your projects,
whether they are
[open source](https://about.gitlab.com/2016/01/15/making-gitlab-better-for-large-open-source-projects/) or not.

To get a better overview of a milestone, we're now showing labels in the
milestone view.

> [Read about milestones in our documentation](http://doc.gitlab.com/ee/workflow/milestones.html)

## Render SVGs inline

## Markdown in Broadcast messages

## Mark difference on file renames


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

## Join us for a live demo and Q+A

[Sign up to our webcast](http://page.gitlab.com/Feb252016Webcast_LandingPage.html).
[Job](https://twitter.com/Jobvo/) will give a live walkthrough for GitLab 8.5
and he'll talk about GitLab Flow.
It’s on Thursday, February 25th, 5pm (17:00) UTC; 12pm EST; 9am PST.
Can't make that time?
[Register](http://page.gitlab.com/Feb252016Webcast_LandingPage.html) anyway,
and we'll send you the recording.
