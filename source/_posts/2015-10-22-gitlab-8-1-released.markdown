---
layout: post
title: "GitLab 8.1 released: Evolution"
date: 2015-10-22
comments: true
categories:
author: Job van der Voort
filename: 2015-10-22-gitlab-8-1-released.markdown
image_title: /images/8_1/team.jpg
---

With GitLab 8.0, we did our best to change everything for the better.
Today we bring you GitLab 8.1, which brings you more of everything, straight
[from Amsterdam](https://about.gitlab.com/2015/10/14/gitlab-oscon-challenge-2015/).

The design, CI integration and many features have been improved, speed up
and had their design, colors and functionality tweaked.

GitLab now consists of [20,000 commits](https://gitlab.com/gitlab-org/gitlab-ce/commits/master)!
This is a great milestone. With every release of GitLab, new people from
this great community contribute code and time. GitLab truly is a product from
a community and we're honored to be part of it.

Zeger-Jan van de Weg did several nice contributions this release and we're happy
to elect him as this month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/))!
Thanks Zeger-Jan!

<!--more-->

## GitLab = GL + CI

In GitLab 8.0 we integrated GitLab CI into GitLab, making it a single application
where you can collaborate on, test and deploy your code.

With GitLab 8.1, CI is everywhere.
You will find build status in the commit list view, in commits and on the front page
of your projects. You'll also find graphs of CI in the graphs view and a new
builds page for quick access to your project's builds.

TODO: screenshots

## Colors and Looks

In our ongoing effort to improve the look and feel of GitLab, we have
made many changes big and small this release.

We now have a new color scheme for major interface elements:

TODO: further design improvements


## Check out Merge Request

Previously, checking out a merge request from someone was only possible if the
branch was in a repository you can read. Right now, you can check out any merge
request made to your repository, even if it's from fork.

TODO: screenshot

## Commit Status API

With the integration of GitLab CI in GitLab, we want to make it easier for
everyone to use CI. You can now get the status of any commit through the API.

```
GET /projects/:id/repository/commits/:sha/statuses
```

- [See the documentation on getting commit status through the API](http://doc.gitlab.com/ce/api/commits.html#get-the-status-of-a-commit)

In addition to this, you can even **set the commit status**. With this, you
can easily use any existing CI in combination with GitLab and still see the
commit status reflected in GitLab's interface!

```
POST /projects/:id/statuses/:sha
```

- [Docs on setting the commit status](http://doc.gitlab.com/ce/api/commits.html#post-the-status-to-commit)

The commit status API makes it easier to integrate your existing CI tools with GitLab.
We're looking forward to see what you'll use it for.


## Further improvements

### Auto-engage CI

GitLab will now automatically turn on CI for a project when you push
a `.gitlab-ci.yml` file. If you have some shared runner setup, this should
make it easier for your team to start using CI.

Of course, you can turn off CI if you don't want to use it.

### Fast, Faster!

We've been working hard to improve page speed. Issues, searching for users,
the trending page, signing in and more will now load much faster.

### Create Directories from the Web Editor

You can now create directories straight from the interface!

TODO: screenshot

### Activity on Dashboard

If you prefer to see activity on the Dashboard by default, you can now
easily set this in your profile:

TODO: screenshot

### Sign in as other user

GitLab Administrators now have a simple, useful tool: you can sign in as
any other user.

TODO: screenshot

### Quick Submit

Simply use `CMD+ENTER` on Mac or `CTRL+ENTER` on Win / Linux to quickly
submit an issue or comment.

### Destroy Fork Relationship

When you fork a project, a relationship is established between it and the
source project. You can now destroy the relationship, so there is no more reference
to the original source.

TODO: screenshot

### Faster and more reliable 'git archive' downloads

Each project in GitLab has a 'download' button that lets you grab
a ZIP file with the contents of the repository at the revision you
are viewing. In GitLab 8.1 we have reduced the delay before the
download starts and optimized the way the ZIP file is generated and
sent to the user by shifting some of the work from the main GitLab
Rails application to
[gitlab-git-http-server](https://gitlab.com/gitlab-org/gitlab-git-http-server).

Note: if you are not using the Omnibus packages and their built-in
NGINX settings this means that you will have to update your
NGINX/Apache settings when upgrading to 8.1.

## GitLab Mattermost Update

Omnibus-GitLab packages are bundled with the latest version of [Mattermost](http://www.mattermost.org/).
Mattermost version 1.1.1 comes with a large number of improvements and
is even more integrated with GitLab.
Realtime notifications from GitLab can now be received by Mattermost,
using incoming webhooks.
The latest version of Mattermost also includes a large number of config changes.
If you have any custom configuration **make sure you read the
[Upgrade from v0.7 to v1.1 notes](https://github.com/mattermost/platform/blob/master/doc/install/Upgrade-Guide.md)
and make sure you check the
[latest config options available for GitLab Mattermost](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/files/gitlab-config-template/gitlab.rb.template#L665-790)**.

## Other changes

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


## Upgrade barometer


*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****

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
For a complete overview please have a look at the [feature list of GitLab EE](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles you to our upgrade and installation services.

- - -
