---
layout: post
title: "GitLab 8.7 released with Due Date for Issues and Remote Mirrors"
date: 2016-04-22
categories:
author: Job van der Voort
author_twitter: Jobvo
image_title: /images/8_7/ny.jpg
---

We want GitLab to be the place where your projects go from idea all the way to
production. You shouldn't have to rely on other tools to build something
great together.
We believe GitLab is able to power any step in this process and with
GitLab 8.7, we've made every step better.

GitLab 8.7 improves Issues, makes diffs better to work with, brings better
commenting, has 100% more cherries and can now even push to remote repositories
out of its own volition*.

This months MVP is Connor Shea. Connor has been an incredibly responsive and
productive member of the community, working on anything from new features
to performance issues up to this very release post.

We also want to thank Ershad ..

* _GitLab doesn't actually have a mind of its own_

<!--more-->

## Remote Mirrors (EE only)

You could already automatically mirror an external repository to your GitLab
instance. With GitLab 8.7 you can now do the inverse and have GitLab push
updates to a remote repository: a mirror on a remote repository. It's like
you can have the cake and eat it too.

This means you can use GitLab to build your projects, while still maintaining
an active mirror in another place. You could even run a GitLab instance locally
and mirror it to GitLab.com or another popular open instance.

To start mirroring to a remote repository, find the Mirror Repository settings
in your project and fill out the required URL and GitLab with automatically sync
the remote every hour.

![Remote Mirror in GitLab 8.7](/images/8_7/remote_mirror.png)

> [Documentation link](link)

## Multiple Label Filter

You might already be labelling your issues and merge requests. You might even
[be subscribed] to a label. If that's the case, you were probably sad to
discover GitLab couldn't filter for multiple labels. Well, now you can!

Select any number of labels to filter only for issues or merge requests that
contain all selections. Meaning, if I search for `feature proposal` and
`customer`, I'm now able to find only feature proposals by customers.

![]()

> [Documentation link](link)

[be subscribed]: https://about.gitlab.com/2016/04/13/feature-highlight-subscribe-to-label

## LICENSE templates

If you have an open source project, you should have a license in place for it.
Typically, project include a text file named `LICENSE` in the root of their
repository. GitLab now provides license templates, so you can quickly move on
with building the rest of the project.

To add a LICENSE, add a new file to an existing project and name it `LICENSE`.
GitLab will show a dropdown with options for a license. Your name will be
pre-filled in select licenses.

![]()

The most popular open source licenses are available and we welcome merge
requests for additional licenses.

> [Documentation link](link)

## Due Date for Issues

It's easy for things to get lost in the shuffle of multiple priorities and
several stakeholders. This challenge compounds in collaborative projects since
people often depend on each other.  To help keep things on track, we've added
the ability to set a due date for individual issues.

![]()

With the addition of due dates for issues, there are now two ways to keep your
projects on track. However, due dates and milestones have a couple important
distinctions. Due dates are only for individual issues. They are most useful
when you want to drive your team to a target completion date.

Milestones, on the
other hand, apply to your full project. Milestones are great for organizing
issues and merge requests into a cohesive group and track progress on a
collection of issues, using the [milestone view].

[milestone view]: (https://gitlab.com/gitlab-org/gitlab-ce/milestones/23)

> [Documentation link](link)

## Cherry Pick

You can now cherry-pick any commit into any branch, right within GitLab.
Cherry picking allows you to take a single commit and bring it to any other
branch. It's especially useful if you work with multiple, concurrent branches,
like the release branches of GitLab (`8-6-stable`, `8-7-stable`) and you want
to bring a certain change set over from one to the other.

To cherry pick a commit, simply click on the `Cherry Pick` button, whenever
it presents itself. You can find it in Merge Requests and Commits:

![Cherry-pick any commit into any branch in GitLab 8.7](/images/8_7/cherry_pick_button.png)

Choose a branch to pick the commit into and optionally create a merge request
for it.

![Cherry-pick any commit into any branch in GitLab 8.7 and create a merge request straight away](/images/8_7/cherry_pick_modal.png)

Cherry Pick was contributed by [P.S.V.R](https://gitlab.com/u/pmq20). Thanks!

> [Documentation link](link)

## Better diffs

### Better copying from diffs

### Better looking diffs

## Tooltip in your timezone

Although some of you may correctly be using the one true timezone (UTC),
it was confusing to many that times in GitLab were reported in a different
timezone than their own.

That's a thing of the past! All times are now reported in your own timezone.

![GitLab 8.7 uses your local timezone](/images/8_7/timezone.png)

## Improved GitHub Importer

The GitHub importer now also imports milestones, labels and keeps
references to pull requests and issues!

## Other changes
Tooltip dates use user’s timezone.
Autocomplete for participants get’s priority
Create labels through dropdowns
Sidebar for issue pages with new dropdowns
Sidebar for MR pages with new dropdowns
Location aware search
New comment form for issues and MR’s
Build updates
Diff page redesign
Label page redesigns

### Smarter, Better Commenting

We've revised the input for comments! It doesn't just look much better,
it's also smarter. If you start to mention someone, autocomplete
will prioritize  names based on the context of the issue, diff or merge request
(several other dropdown boxes have that same ability now).

### Shortcuts!

Press `e` to edit the issue or merge request you're in. Or just press up on the
arrow keys to edit your last comment.

### More options default Dashboard page

Did you know you can change the page you see when you sign in to GitLab?
We've now made it possible to also make that page Groups or even Todos.
That means you can set the Dashboard to be:

- Projects (default)
- Starred Projects
- Groups (new)
- Activity of Projects
- Activity of Starred Projects
- Todos (new)

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
* Re-enable GZIP compression of assets in production gitlab-org/gitlab-ce!3632
* Load the emoji spritesheet only when necessary. gitlab-org/gitlab-ce!3449

## GitLab Mattermost 2.2

[Mattermost 2.2](http://www.mattermost.org/mattermost-2-2-threaded-messages-and-more/) ships in GitLab 8.7 with threaded messages, French translation, new themes, new Trello and IRC support, plus many more new benefits.

This version also includes a [security update](http://docs.mattermost.com/administration/changelog.html#security-update) and [upgrade from earlier versions]((http://doc.gitlab.com/omnibus/gitlab-mattermost/)) is recommended.


## Other changes

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.

- Once a month GitLab will perform a data integrity check (git fsck) on each of your Git repositories.
http://doc.gitlab.com/ce/administration/repository_checks.html
- Images now link to their full source URLs, this is especially good for mobile users. gitlab-org/gitlab-ce!3464



## Upgrade barometer

This release requires up to 30 minutes downtime.

A migration affecting projects with import data requires downtime as it
manipulates and encrypts user data stored for projects that were previously
imported from other Git repositories. Unless you have a large number of
imported projects, this migration should last only a few seconds.

This release contains other migrations that might make the total upgrade time
longer. For GitLab.com (>800k projects) the complete upgrade was completed within
30 minutes.

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
