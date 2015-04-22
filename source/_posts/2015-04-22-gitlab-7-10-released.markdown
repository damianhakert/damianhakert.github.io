---
layout: post
title: "GitLab 7.10 released with Google Code Import, Default Git Hooks and a package server!"
date: 2015-04-22
comments: true
categories:
author: Job van der Voort
author_twitter: Jobvo
image_title: /images/7_10/sf.jpeg
---

Everyone has been working really hard to bring GitLab 7.10 to you today!
This is the first release since GitLab graduated from [Y Combinator](https://about.gitlab.com/2015/03/04/gitlab-is-part-of-the-y-combinator-family/).
With new-found energy and our ever productive community this is most definitely
the best release of GitLab Community Edition and Enterprise Edition so far
(over 90 changelog entries vs. slightly over 80 with GitLab 7.9)!

Besides bug fixes and performance improvements, you can now import your code
from Google Code, quickly invite your colleagues and friends to GitLab
and set default Git Hooks for everyone.

On top of that, this release marks the start of our package server! This means
you can install GitLab _right now_ with `apt-get` and `yum`. More about that,
below.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is,
just like last month, Stan Hu!
Stan Hu squashed a number of bugs in the wiki, cross references and more, and
added new configuration options. We're happy to award him MVP for that again
this month.
Thanks Stan Hu!

<!--more-->

## Apt-get install GitLab

We're very excited to start using our new package server with the release of
GitLab 7.10, powered by the awesome [packagecloud.io](https://packagecloud.io) software.
This means that from now on, you can install GitLab with the
magically simple command `sudo apt-get install gitlab-ce`!

The package server is currently only available for GitLab CE.

To install GitLab using our package server, all you need is the following
commands (depending on your OS):

Ubuntu / Debian:
```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb | sudo bash
sudo apt-get install gitlab-ce
```

CentOS:
```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm | sudo bash
sudo yum install gitlab-ce
```

You can view the packages [here](https://packages.gitlab.com/gitlab/gitlab-ce/install).

If you have any problems with the package server, please report them [here](https://gitlab.com/gitlab-org/gitlab-ce/issues/1475).

<h3 id="rc-package-info"> Release Candidate caveat </h3>

We are aware that some people in the community already started using the package server to install the 7.10 release candidates.
Due to the complexity of version strings containing the `rc` nomenclature, APT and YUM see the release candidate packages as being newer
than the stable release package. In order to avoid people downloading the `rc` packages instead of the stable packages,
we have yanked all release candidate packages from the package server.
 
If you already installed one of the 7.10 release candidates, using `apt-get upgrade` or `yum upgrade` will still think that
the `rc` package is newer. In order to bypass this, you need to upgrade using the following commands:

```
sudo apt-get install gitlab-ce=7.10.0~omnibus-1
```

or

```
sudo yum install gitlab-ce-7.10.0~omnibus-1.x86_64
```


## Google Code Import

Quickly import your Google Code projects? It's easy now with our
new Google Code Import tool:

[![Google Code Import](/images/7_10/google_code.png)](/images/7_10/google_code.png)

## Fork projects with CI

If you fork a project in GitLab that has GitLab CI setup,
you forked project will now also be served by CI with the same settings!

That makes working with CI much easier and convenient for those of you that
work with forks.

Of course, we made sure this won't be possible if it infringes on permissions
you've set, so make sure to check the [documenation](http://doc.gitlab.com/ci/).

## Invite new people into project by email

Starting an amazing new project, but your co-conspirors don't have an account
on your GitLab instance yet? No problem! You can now simply invite people
by email, whether they have an account on the instance or not:

[![Invite new people by Email](/images/7_10/invite_by_email.png)](/images/7_10/invite_by_email.png)

## Quick view Changelog, License and Contribution guide

Besides the Activity view, GitLab now also automatically generates quick-links
to the Changelog, License and Contribution guide of a repository.

[![Quick Links](/images/7_10/quick_links.png)](/images/7_10/quick_links.png)

## Default Git Hooks (EE only feature)

If you regularly use the same Git Hooks, you can now pre-define them for all
projects, as an admin.

[![Default Git hooks](/images/7_10/default_git_hooks.png)](/images/7_10/default_git_hooks.png)

For instance, banish any commit containing nothing but `wip`!

## Audit log for Deploy keys (EE only feature)

A nice addition to our audit logging: Any changes to deploy keys are now also
logged in the audit log. Make sure you know who can read your code.

[![Audit log Deploy keys](/images/7_10/deploy_key_log.png)](/images/7_10/deploy_key_log.png)

## Other changes

This release has more improvements, including security fixes, please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


## Upgrade barometer

Coming from GitLab 7.9.4, the migrations run very fast.
The migrations include SQL 'UPDATE' statements so you should take your GitLab service offline during the upgrade.
As always, make sure to backup your instance before running upgrades.
- - -

## Installation

If you are setting up a new GitLab installation please see the [installing GitLab page](https://www.gitlab.com/installation/).

## Updating

Upgrade instructions for omnibus-gitlab packages can be found in [the omnibus-gitlab repository](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/update.md).

If you installed GitLab from source and you have version 6.4.2 or higher you can use the [upgrade script](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/upgrader.md).
You have to update GitLab Shell to ***2.6.2*** manually, see [point 3 of the upgrade guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/7.9-to-7.10.md#3-update-gitlab-shell-and-its-config).

If you still want to do it manually - see the [Update Guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/7.9-to-7.10.md).

## Enterprise Edition

The mentioned EE only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles to our upgrade and installation services.
