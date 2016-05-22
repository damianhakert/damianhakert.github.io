---
layout: post
title: "GitLab 8.8 released with Pipelines and Priority Labels"
date: 2016-05-22
categories:
author: Job van der Voort
author_twitter: Jobvo
image_title: /images/8_8/team.jpg
---

We're not slowing down. GitLab is getting better with every release and 8.8
is no exception. This release we're starting to introduce further improvements
to the navigation, a serious step up in the power of GitLab CI and multiply
the effectivity of GitLab Issues.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is ***MVP_USER*** ***CONTRIBUTION_OF_MVP_USER***.
Thanks ***MVP_USER_FIRST_NAME***!

<!--more-->

## Pipelines

GitLab has powerful continuous integration built-in.
No need to switch to another application, no need to juggle permissions and access, just use GitLab.

Before, you could already define complex pipelines. With GitLab 8.8, GitLab CI
will visualize these pipelines, so you can _see_ how things are going.

In the new pipeline view, you see all related builds for a single commit
and the net result of each stage of your pipeline. This allows you to quickly
see what failed and fix it.

![](/images/8_8/)

By default, GitLab will set up the build, test and deploy stages (as before)
, but you're free to [define any other stage][stages-doc] in your
`.gitlab-ci.yml` file.

> [Read how to define your `.gitlab-ci.yml` file](http://docs.gitlab.com/ce/ci/yaml/README.html)

> [Unfamiliar with GitLab CI? Start here!](http://docs.gitlab.com/ce/ci/quick_start/README.html)

[stages-doc]: http://docs.gitlab.com/ce/ci/yaml/README.html#stages

## .gitignore templates

You should version everything. Well, _almost_ everything.
Occasionally you have to use some private information,
secrets or just junk in the directories that are being watched by Git.
For those situations, you can add those files and directories that
you want to ignore to your `.gitignore` file.

With GitLab 8.8, creating a `.gitignore` file has become much simpler.
When creating the file in the web interface, GitLab will now automatically
show you a dropdown where you can choose from many different templates
to use for your `.gitignore` file.

You can still edit it to your liking of course.

> [Documentation link](link)

## Priority Labels

You have loads of issues, you manage them through our milestones,
label them accordingly, and maybe even use weights to make sure
you don't plan too much work. What else can you wish for?

Priorities. Some issues are just more important than others.
We wanted to give you the option to set priorities, but do so
in a smart way that immediately prioritises more important issues,
but also gives you the power to create a sophisticated priority system
yourself.

That's why we're introducing Priority Labels.

Priority labels are like regular labels, but are ordered by priority.
This means that issues tagged with a higher priority label can now be
found by filtering for priority.

![]()

### Creating priorities with existing issues

For example: You want to give issues related to customers a higher priority
than other issues. By starring or dragging the `customer` label to the top
of the labels list, you give it a priority. If you now sort by priority
in the issue list, `customer` tagged issues with appear on top.

### Creating your own priority system

Another option is to introduce priorities with new labels. You create a few
new labels, for instance `Prio: HIGH`, `Prio: Med` and `Prio: Low` and order
them appropriately in the label view:

![]()

Now you can easily set the priority to new labels by adding either one of the
new labels to the issues you want to prioritise.

### More about priority labels

Priority labels are a very powerful feature that works well both with
existing issue trackers, as well as with new projects.

![]()

When sorting for priority, we will float the issue with the single highest
label to the top. If an issue has multiple priority labels, we will not
sum the priority.

> [Read all about priority labels in our documentation](link)

## GitHub Importer Improvements

We further improved our GitHub importer in GitLab 8.8.
The existing GitHub importer could already important things like repository 
data, issues, wiki pages, milestones, and labels. With GitLab 8.8 
the importer is more robust now and will even import pull requests, where the
source or target branch was missing.

 > [Want to import from GitHub? Read how, here.](link)

## New shortcuts

- On a project: `i` To navigate to New Issue page.
- On a issuable: `l` To open Label dropdown on a issuable.
- Global: Typing `?` multiple times now toggles the modal.

## Toggle whitespace changes

Sometimes when people push their commits along with their important changes 
are a number of insignificant whitespace changes. We added a button in our 
UI that allows you to hide these insignificant changes in the commit's diff.

> [Documentation link](link)

## Health Check

Software can be a lot easier than people. To see whether
GitLab is healthy, no doctor required. Just point your monitoring
to `/health_check` and look for status `200`.

You will need a token that you can find in the admin screen.

> [Documentation link](link)

## Upcoming Feature

This release contains another cool feature that we're saving
for tomorrow.

We almost can't contain our excitement about how our announcement
on Monday will register with you!

## UI Improvements

We've improved many things big and small again this release.

Most notably, you will find that the group page and the profile
page are using a new navigation paradigm. The left sidebar will stay
static, where the top bar will provide you with navigation a level deeper.

![]()

We believe this change will make getting around in GitLab easier.
We're trying it first in these places and love to hear what you think!

## Other changes

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.

### Suppress Text File diffs through .gitattributes

When you mark a file as non-diffable in your `.gitattributes` file,
GitLab will now respect that and not show the diff.

Thanks to Matt Oakes for contributing this!

### Milestone references in Markdown

You can now reference milestones in Markdown!

To reference a milestone that's a single word, use `%` with the name. For instance: `%8.8`. More words? Wrap it in `"`: `%"Cool milestone"`.

Of course, this also works cross-projects and in links:

```
gitlab-org/gitlab-ce%8.8
[milestone 8.8](%8.8)
```

Do you have any more ideas for extensions of our Markdown? Let us know!

## Performance Changes

* [Use tag_exists? in GitAccess#protected_tag?](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3983): improves SSH/HTTPS pushing performance by only checking a single Git tag upon push instead of all existing Git tags (mostly noticeable on projects with lots of tags)
* [Cleaned up/tweaked Project#open_branches](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3985) and [Improve multiple branch push performance by memoizing permission checking](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4091): improves SSH/HTTPS pushing performance by cutting down the time spent in checking if branches are protected or not
* [Removed tracking of total method execution times](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4124): total method execution timings are no longer tracked by GitLab Performance Monitoring
* [Instrument all Grape API helpers](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4169): GitLab Performance Monitoring now instruments all Grape API helpers

Uptime changes:

* [Added helper methods for database migrations](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3860)
and [Move generator templates to generator_templates/](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4217):
upgrading from GitLab 8.7.x to GitLab 8.8.0 does not require any downtime as
all migrations can now be performed without stopping your GitLab instance. The
goal for future releases is to also allow online upgrades unless downtime is an
absolute requirement.

## Upgrade barometer

Upgrading from 8.7.x to 8.8.0 requires **no downtime**.

*Note* We assume you are upgrading from the latest version. If not, then also consult the upgrade barometers of any intermediate versions you are skipping.
If you are upgrading from a GitLab version prior to 8.0 *and* you have CI enabled, you have to upgrade to GitLab 8.0 [first](https://about.gitlab.com/2015/09/22/gitlab-8-0-released/).

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

### Deprecation of Fog gem

The Fog gem will be removed in 8.9 (next month). It's
currently used to connect GitLab's Backup service to various storage providers,
but only a few of fogs "micro-gems" are actually used. We intend to only
include fog-core and fog-aws in 8.9. If you backup GitLab with a service other
than Amazon S3, please open an issue so we can consider including your specific
use-case. See
[this issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/15352)
for more information.

### Changes in bin/web and bin/background_jobs

If you installed GitLab from source using a custom SystemD / Upstart service definition, or if you are a package maintainer for GitLab then you should know that bin/web and bin/background_jobs both perform one fewer fork(2) call now when starting Unicorn and Sidekiq respectively. This only matters if you configured your service supervision system to count the number of forks during startup. The official GitLab init script and our Omnibus packages are not affected by this change.

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
