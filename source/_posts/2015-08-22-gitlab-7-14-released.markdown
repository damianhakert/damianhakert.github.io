---
layout: post
title: "GitLab 7.14 released with improved syntax highlighting and CI improvements"
date: 2015-08-22
comments: true
categories:
author: GitLab
author_twitter: gitlab
filename: 2015-08-22-gitlab-7-14-released.markdown
image_title: /images/7_14/TODO.PNG
---

Today we're pleased to announce version 7.14 of GitLab Community Edition (CE),
GitLab Enterprise Edition (EE), and GitLab CI.

Whereas next month's release, version 8.0, promises many new and exciting
features, our focus for 7.14 has been on fixing bugs and improving performance
and usability. Many of these bug fixes were contributed by this month's
[MVP](https://about.gitlab.com/mvp/) Stan Hu, bringing his total number of
awards to four. Thank you and congratulations, Stan!

<!--more-->

## Beta: support for long git push/pull over HTTPS

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
of) the job of serving Git HTTP requests. We use Nginx to route HTTP requests
either to Unicorn (normal requests) or gitlab-git-http-server (Git clients).

In the GitLab 7.14 Omnibus packages, gitlab-git-http-server is included but
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

## Improved syntax highlighting

GitLab has implemented the popular [Rouge](http://rouge.jneen.net/) library as
our syntax highlighter of choice. Rouge has support for 72 languages and does
a great job of properly highlighting your files in GitLab.

## Show who edited a discussion note

When a note is edited by someone other than its original author, such as a
project administrator, we now show who it was along with the time.

[![Note Modification](/images/7_14/comment_edit.png)](/images/7_14/comment_edit.png)

## Better LDAP group management (GitLab EE)

Our Enterprise Edition users managing their GitLab groups with LDAP will be glad
to hear that we've improved the way they're handled in GitLab. Groups synced
with LDAP can no longer be brought out of sync by group changes made via GitLab's
interface.

## YAML Variables (GitLab CI)

Now you can define variables in your `.gitlab-ci.yml` file that will be passed
to your CI builds. See [the documentation](http://doc.gitlab.com/ci/variables/README.html)
for more information.

## Application Settings interface (GitLab CI)

We're now surfacing application settings in the web interface of GitLab CI,
furthering our goal of making all of the GitLab applications as easy to
configure as possible.

[![Application Settings](/images/7_14/ci_settings.png)](/images/7_14/ci_settings.png)

## Better support for skipped builds

GitLab CI and its integration with GitLab CE and EE now have improved
support for builds skipped via the `[ci skip]` commit message tag.

[![CI Skipped](/images/7_14/ci_skipped.png)](/images/7_14/ci_skipped.png)

## Other changes

This release has more improvements, including security fixes. Please view
[the Changelog] to see the full list of changes.

[the Changelog]: https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG

## Upgrade barometer

This release's migrations are minor. If you are on GitLab 7.13 CE or EE you can
upgrade to 7.14 while staying online.

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how "big" or "small" the upgrade is. The behaviour
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
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

The mentioned EE-only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles you to our upgrade and installation services.

- - -
