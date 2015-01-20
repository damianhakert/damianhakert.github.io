---
layout: post
title: "GitLab 7.7 and GitLab CI 5.4 with GitHub importer and OAuth authorization"
date: 2015-01-22
comments: true
categories:
author: DZ, Job
image_title: '/images/7_7/bg.jpeg'
---

GitLab is Version Control on your Server. It's like GitHub but Open Source.

Today we announce the release of a new version of GitLab Community Edition (CE)
and GitLab Enterprise Edition (EE), and GitLab Continuous Integration (CI)
with new features, usability and performance improvements, and bug fixes.

Also we are happy to announce our new **free Continuous Integration (CI) service: [ci.gitlab.com](https://ci.gitlab.com)**.

<!--more-->

# GitLab 7.7

The biggest new features in GitLab Community Edition are the **GitHub importer** and **OAuth support**.
In addition to the updates from Community Edition,
GitLab Enterprise Edition has gained some performance improvements and the ability to change the header logo.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is Ciro Santilli
for sending over 200 merge requests to improve the GitLab code base.
Thanks Ciro!


## Redesigned navigation

This had been on our minds for a while but we finally decided to
redesign the GitLab navigation! We worked closely with our awesome community
and hope you love it.

Check it out:

[![screenshot](/images/7_7/design.png)](/images/7_7/design.png)

Have a look at the [article](https://about.gitlab.com/2015/01/16/pragmatic-redesign-for-gitlab/)
we wrote about the redesign to get a better understanding of why we did it.

## GitHub importer

You can now super quickly import your GitHub projects, issues and all!
A single click is all it takes:

[![screenshot](/images/7_7/import.png)](/images/7_7/import.png)


## Mention notification level

Getting too much email? Just select the 'Mention' notification level and you
will only receive notification emails when people mention you.

[![screenshot](/images/7_7/mention.png)](/images/7_7/mention.png)


## OAuth!

Services like Facebook, Twitter, and Google allow you to sign in using
their credentials in 3rd party applications, implemented through [OAuth](http://en.wikipedia.org/wiki/OAuth).

From now on, GitLab is also an OAuth resource server. This means that you can
create 3rd party applications and use your GitLab credentials for authentication!

We can't wait to hear what you'll use it for.

[![screenshot](/images/7_7/oauth.png)](/images/7_7/oauth.png)

## Configure GitLab on the fly through the UI

Finally GitLab admins can change the application settings on the fly
without any downtime through our new settings page:

[![screenshot](/images/7_7/settings.png)](/images/7_7/settings.png)

In the future we'll add more settings to this page, making configuring
GitLab even easier.

- - -

# Don't want to run your own? Use GitLab.com!

You rather live in the cloud? Use GitLab.com! It's a completely free
GitLab instance hosted and managed by us. It offers (private) repositories,
issue tracking, wiki’s and continuous integration. Free!

You don’t have to install anything, just [sign up for a free account](https://gitlab.com/users/sign_up).

# GitLab CI 5.4

On top of all the new feature for GitLab, we're releasing a bunch more for
GitLab CI. These features will make testing your code more powerful and more
flexible.

## OAuth authorization

With GitLab as OAuth resource server, you can now easily link GitLab CI to
your GitLab instance, so you don't need to authenticate when switching to CI
anymore. Of course, this also works if you've setup LDAP / AD with GitLab.

You can even use this if you authenticated with GitLab through another OAuth
provider, such as Twitter or GitHub. This means that it's now much faster
and easier to use CI.

[![screenshot](/images/ci_5_4/login.png)](/images/ci_5_4/login.png)

## Everyone their own Runner

Want to add a Runner that runs your tests and scripts to a project?
Now you don't need to be an admin to do this anymore. Just install
the GitLab Runner package on any machine and use the project token
to register the Runner in your instance.

If only we'd be offering some credits to give this a try..(hint: Keep reading!)

## Labels for Runners and jobs

Now that you can easily add a group of Runners to your CI instance, we thought
it would be very cool to be able to easily run different environments per job.

Now you can add labels to jobs. Only a Runner with that (those) label(s) will pick up
up the matching jobs. This way you can run different environments per job, easily.

Project jobs:

[![screenshot](/images/ci_5_4/ci-job-labels.png)](/images/ci_5_4/ci-job-labels.png)

Project runners:

[![screenshot](/images/ci_5_4/ci-runner-labels.png)](/images/ci_5_4/ci-runner-labels.png)


- - -

# Continuous Integration (CI) for free

We are happy to offer free CI for private repositories if you bring your own Runner!

Simple add you projects from GitLab.com on ci.gitlab.com and configure the builds script(s).
You can use the parallel build feature of GitLab CI and
we'll store the build logs and configuration for you.

To run your tests you need to install GitLab Runner on one or more of your instances.
Don't have any instances? No problem:

**To get you started with this we have credit coupons from XXXX (to be added later)**.
- - -

# Custom header logo (EE only)

For GitLab Enterprise Edition Drew Blessing contributed customer header logo support.
There also were fixes for the preview and performance improvements for selectboxes.

# Applications settings page

An application settings page was added to the admin area under /admin/application_settings
Here you can enable and disable settings that previously were managed in gitlab.yml.
If you modify the applications settings these take preference above the gitlab.yml files.
Over time we'll move even more settings here to make GitLab easier to configure (merge request to move settings are very welcome).

# Open sign-up by default

From this version on user self-signup is enabled by default.
You can still disable this behaviour in the configuration file or the new applications settings page.

# Other changes

This release has more improvements, please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.

# Upgrade barometer

There are migrations in this update but they don't loop through anything.
If you don't want users to sign up themselves and you have not setup this in gitlab.yml you must ensure this behaviour stays the same.
You can do it by adding it to gitlab.rb (Omnibus package) or gitlab.yml (source installation) or the easiest way is to use the new application settings page to do this.

# Installation

If you are setting up a new GitLab installation please see the [installing GitLab page](https://www.gitlab.com/installation/).

# Updating

Upgrade instructions for omnibus-gitlab packages can be found in [the omnibus-gitlab repository](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/update.md).

If you installed GitLab from source and you have version 6.4.2 or higher you can use the [upgrade script](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/upgrader.md).
You have to update GitLab Shell to 2.4.1 manually, see [point 3 of the upgrade guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/X.x-to-x.x.md#3-update-gitlab-shell-and-its-config).

If you still want to do it manually - see the [Update Guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/X.x-to-X.x.md).

# Enterprise Edition

The mentioned EE only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles to our upgrade and installation services.

- - -
