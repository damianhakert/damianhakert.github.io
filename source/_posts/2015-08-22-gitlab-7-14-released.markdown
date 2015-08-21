---
layout: post
title: "GitLab 7.14 released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
date: 2015-08-22
comments: true
categories:
author: GitLab
author_twitter: gitlab
filename: 2015-08-22-gitlab-7-14-released.markdown
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

[![screenshot](/images/7_14/feature.png)](/images/7_14/feature.png) ***7_14 is the version of GitLab being released***


### ***NEW_CE_FEATURE***

***DESCRIPTION***

[![screenshot](/images/7_14/feature.png)](/images/7_14/feature.png) ***7_14 is the version of GitLab being released***


### NEW_CE_FEATURE

***DESCRIPTION***

[![screenshot](/images/7_14/feature.png)](/images/7_14/feature.png) **+7_14 is the version of GitLab being released***

### Beta: support for long git push/pull over HTTPS

GitLab supports two protocols for pushing and fetching Git data from Git clients
such as the `git` command and [GUI clients](https://git-scm.com/downloads/guis):
SSH and HTTPS. Traditionally, the SSH protocol has been the best and sometimes
only way to do long-running (i.e., slow or large) push/pull operations from Git
on your computer to a GitLab server. One of the reasons for this is that
[Unicorn](http://unicorn.bogomips.org/), the Ruby web application server used by
GitLab, is not designed to handle many concurrent long-running requests. With
Unicorn, long git pushes/pull will often fail (due to a timeout) after hogging
precious resources (Unicorn workers) for a long time.

To address this problem, we created
[gitlab-git-http-server](https://gitlab.com/gitlab-org/gitlab-git-http-server),
a stand-alone web server written in [Go](https://golang.org/) to take over (most
of) the job of serving Git HTTP requests. We use NGINX to route HTTP requests
either to Unicorn (normal requests) or gitlab-git-http-server (Git clients).

In the GitLab 7.14 omnibus packages, gitlab-git-http-server is included but
disabled by default. In GitLab 8.0 we will deprecate the old Git HTTP server in
GitLab ([grack](https://gitlab.com/gitlab-org/gitlab-grack)).

If you want to start using gitlab-git-http-server ahead of the 8.0 release, as
we will on [gitlab.com](https://gitlab.com), you can add the following settings
to `/etc/gitlab/gitlab.rb`:

```
gitlab_rails['env'] = {
  'GITLAB_GRACK_AUTH_ONLY' => '1'
}

gitlab_git_http_server['enable'] = true
```

Run `gitlab-ctl reconfigure` and `gitlab-ctl restart unicorn` after updating
your `gitlab.rb` file.

### ***MAIN_EE_FEATURE*** (EE only feature)

***DESCRIPTION***

[![screenshot](/images/7_14/feature.png)](/images/7_14/feature.png) ***7_14 is the version of GitLab being released***

### ***EE_FEATURE*** (EE only feature)

***DESCRIPTION***

[![screenshot](/images/7_14/feature.png)](/images/7_14/feature.png) ***7_14 is the version of GitLab being released***


## ***MAIN_CI_FEATURE***

***DESCRIPTION***

[![screenshot](/images/7_14/feature.png)](/images/7_14/feature.png) ***7_14 is the version of GitLab CI being released***


## ***NEW_CI_FEATURE***

***DESCRIPTION***

[![screenshot](/images/7_14/feature.png)](/images/7_14/feature.png) ***7_14 is the version of GitLab CI being released***


## NEW_CI_FEATURE

***DESCRIPTION***

[![screenshot](/images/7_14/feature.png)](/images/7_14/feature.png) **+7_14 is the version of GitLab CI being released***

### Other changes

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


### Upgrade barometer

*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****

Please be aware that by default the Omnibus packages will stop, run
migrations, and start again, no matter how 'big' or 'small' the
upgrade is. The behaviour can be changed by adding a
[/etc/gitlab/skip-auto-migrations
file](http://doc.gitlab.com/omnibus/update/README.html).

### Reminder: Ruby (MRI) 2.0.x no longer supported

As of the previous release (7.13), we have dropped support for the 2.0.x
versions of Ruby (MRI). We support Ruby (MRI) 2.1.x and recommend using 2.1.6.

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
