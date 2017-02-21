---
title: "GitLab 8.17 Released"
categories: release
author: Job van der Voort
author_gitlab: JobV
author_twitter: Jobvo
image_title: '/images/8_17/pic.jpg'
description: "GitLab 8.17 released with Pages in CE and Squash"
---

For many years, content management systems (CMS) have been used
to manage simple websites. The advent of static sites allows organizations to
no longer worry about having to secure, update and maintain an underlying CMS
for their websites. Static websites are fast, yet powerful and [seen as the next big thing in publishing to internet][smashing-link].

Unfortunately, static websites are hard to setup and hard
to update for everyone but the invested engineer.
GitLab 8.17 allows anyone to easily create and collaborate on a static website
through GitLab Pages, now available in GitLab Community Edition.

Besides Pages in CE, GitLab 8.17 improves Issue Boards, allows you to easily
squash your commits before merging them, adds the option to have a dedicated
audit user for your instance, and much more!

[smashing-link]: https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/

<!-- more -->

This month's [MVP](/mvp) is [Horacio Sanson](https://gitlab.com/Sanson).
[Last release](https://about.gitlab.com/2017/01/22/gitlab-8-16-released/),
Horacio added PlantUML support for Asciidoc; this release,
[he added it](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8588) for
Markdown, too!
Thanks Horacio Sanson!

## GitLab Pages in Community Edition

[GitLab Pages][pages] allows you to [host static websites][post-pages-setup]
straight from GitLab, with [any Static Site Generator][pages-ssgs]. Previously
this functionality was only available on GitLab.com and GitLab Enterprise
Edition.
After receiving [over 100 votes](https://gitlab.com/gitlab-org/gitlab-ce/issues/14605)
we decided to make GitLab Pages available in GitLab Community Edition.

Static websites are inherently fast websites that can be used as a front of
your organization, as in-or-external documentation or even as a way to
visualize data from your continuous integration.

The [GitLab Pages documentation][pages-docs] covers everything from getting
started with different Static Site Generators to advanced CI and SSL
configurations.

[pages-ssgs]: /2016/06/17/ssg-overview-gitlab-pages-part-3-examples-ci/
[pages]: https://pages.gitlab.io/
[post-pages-setup]: /2016/04/07/gitlab-pages-setup/
[pages-docs]: http://docs.gitlab.com/ce/user/project/pages/index.html

## Easily Search and Add Issues to Issue Boards

Prior to 8.17, the Backlog list in the [Issue Board][board] contained issues
that you had not yet added to your workflow (the "main" area of the board).
Finding issues to add was somewhat difficult given that small area, and you
could only add them one by one. Most of the time, you didn't even need to see
the Backlog list at all, and it was just hanging around taking up valuable
screen real estate.

![Add issues modal in board in GitLab 8.17](/images/8_17/board_modal.png){: .shadow}

With 8.17, you now add issues through a dedicated modal window.
Click the `Add issues` button at the top-right, and you get an expansive modal
to search and filter for issues you care about.
Select one or many issues, and even choose the list where you want to put them
in before adding them to the board, saving just a few more clicks and drags.
To remove an issue from your board, select it to bring up the sidebar, and hit
`Remove from board`.

Take a look at the [Issue Board documentation][board-doc] to learn more.

[board]: /solutions/issueboard/
[board-doc]: https://docs.gitlab.com/ce/user/project/issue_board.html

![Remove issue from board in GitLab 8.17](/images/8_17/board_remove.png){: .shadow}

## Squash and Merge (EE)

To improve code collaboration, we suggest teams share their merge requests as
soon as possible in [WIP form][wip].
This naturally results in many commits as the merge request evolves.
With 8.17, you can now squash your commits together into a single commit, as
part of merging, giving you a much cleaner Git history.
Simply select the option in the merge request itself.

[See our documentation to learn more about squash and merge.][squash-doc].

[wip]: https://docs.gitlab.com/ce/user/project/merge_requests/work_in_progress_merge_requests.html
[squash-doc]: https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html

![Squash and merge in GitLab 8.17](/images/8_17/squash_edit_form.png){: .shadow}

## Copy and Paste GitLab Markdown

Transcribing formatted text to [GitLab Flavored Markdown (GFM)][gfm-doc] is often a pain.
You may find yourself going to the edit mode of an issue description or comment to just copy the plaintext GFM, paste it in another GitLab textarea, make some changes, before submitting it.
With 8.17, you can simply copy any issue / merge request description / comment (i.e. GFM textarea) in regular view mode, and paste it in another GFM textarea.
All the formatting is carried over automatically.
This even includes links and images.
Pro tip: Now you can quickly learn from GFM experts by copying their issues and merge requests.

[gfm-doc]: https://docs.gitlab.com/ce/user/markdown.html#gitlab-flavored-markdown-gfm

![Copy and paste GitLab markdown in GitLab 8.17](/images/8_17/gitlab_markdown_copy_paste.gif){: .shadow}

## Streamlining Project Settings and Navigation

We are continuing to streamline project settings and navigation, which we first
started in [8.16]. We've combined the existing `Runners`, `Variables`,
`Triggers`, and `CI/CD Pipelines` menu items into one simply called
`CI/CD Pipelines`. Navigating to `CI/CD Pipelines` will show you one page with
all the settings that were previously spread across the 4 original pages.

[8.16]: https://about.gitlab.com/2017/01/22/gitlab-8-16-released/

![Improved settings navigation in GitLab 8.17](/images/8_17/settings_new.png){: .shadow}

## Additional details included in Merge Request workflow

We have made improvements to the look and feel of the Merge Request workflow,
as well as included additional details on the CI/CD Pipeline status. You are
now able to easily and quickly review the progress of the entire Pipeline,
directly from the Merge Request page.

![Merge Request Pipeline Minigraph](/images/8_17/merge_request_minigraph.png){: .shadow}

## Redesigned Slack and Mattermost Issue Messages

The ChatOps message replies for [Slack][slack-chatops] and
[Mattermost][mattermost-chatops] have been improved. GitLab's replies will now
include additional details like assignee, current status, and more all presented
in a cleaner interface. Searching GitLab or creating a new issue all within the
context of the channel you are working in has never been easier or prettier!

![Slack Issue Show](/images/8_17/slack_issue_show.png){: .shadow}

[slack-chatops]: https://docs.gitlab.com/ce/user/project/integrations/slack_slash_commands.html
[mattermost-chatops]: https://docs.gitlab.com/ce/user/project/integrations/mattermost_slash_commands.html

## Improving terminology within CI/CD

We have clarified the terminology used to discuss parts of [CI/CD][cicd],
replacing the usage of `Build`. In 8.17, `Pipeline` will be used when referring
to the entire pipeline, and `Job` will be used for a specific action or build.

[cicd]: http://docs.gitlab.com/ce/ci/README.html

## Upcoming changes to defaults in gitlab-ci.yml

As part of our 9.0 release, we will be changing the default behavior of two
flags in [gitlab-ci.yml][gitlab-ci-yml] to provide an improved standard experience.

* The [cache:key][cache-key] directive will default to a constant string. This
  means that the cache will now be shared across branches and stages, reducing
  build time making more efficient use of Runners. Note a cache is never shared
  across projects.
* The [artifacts:expire_in][artifacts-expire-in] default will be able to be
  controlled by the GitLab administrator. Previously unless a specific duration
  was set, artifacts would never expire. By enabling control over the default
  value, administrators can more easily manage artifacts that do not need to be
  stored indefinitely. Developers should set this value to their desired
  duration if an artifact should persist for a specific time.

[gitlab-ci-yml]: http://docs.gitlab.com/ce/ci/yaml/README.html
[cache-key]: http://docs.gitlab.com/ce/ci/yaml/README.html#cache-key
[artifacts-expire-in]: http://docs.gitlab.com/ce/ci/yaml/README.html#artifacts-expire_in

## Monitoring GitLab with Prometheus

With 8.17 we are continuing to build upon our Prometheus integration initially
[released in 8.16][prom-8-16]. Three new exporters have been added to the
Omnibus package providing insight into Redis, Postgres, and GitLab service
metrics. Administrators will now be able to track the performance of Git,
Sidekiq jobs, and important database metrics. It is now easier than ever to
ensure GitLab is feeling good and snappy!

Prometheus and its exporters [can be enabled][prom-doc] by editing `gitlab.rb`,
and will be enabled by default in 9.0.

[prom-8-16]: https://about.gitlab.com/2017/01/22/gitlab-8-16-released/
[prom-doc]: https://docs.gitlab.com/ce/administration/monitoring/prometheus/index.html

## V4 API beta release

As part of 9.0 release, we're already shipping our V4 API as Beta! Most changes for 8.17
were focused on consistency improvements regarding our existing V3 API (which will remain unchaged for now),
and we're looking forward to ship some great features for V4 on 9.0, such as:

* Present related resource URI's within each API response (facilitating API navigation)
* Enable pagination for all endpoints
* Allow queries on issues and merge requests endpoints with IIDs (same as web version URL ids)

Keep track on [CE](https://docs.gitlab.com/ce/api/v3_to_v4.html) and 
[EE](https://docs.gitlab.com/ee/api/v3_to_v4.html) V4 API changes docs for further information.

### V3 deprecation

Given the current V4 shipping, we're planning to keep V3 API up until 9.3 GitLab release. 
Only bugs and security fixes will be done on V3 up until then.

## Audit Users (EE only)

Many large or regulated organizations require oversight across the entire
development environment. GitLab Enterprise Edition now features a great new
capability to assign an `Audit` role to a user. This role allows the user
read-only access to all projects, groups, users and other resources.

Unlike the `Administrator` role, Audit users don't have the ability to modify
projects settings or access the Admin Area, making it the perfect solution to
provide powerful, read-only access across the entire GitLab instance.

[Find out more](audit-docs) about how this role works and the capabilities it allows.
[audit-docs]: https://docs.gitlab.com/ee/administration/auditor_users.html

## Configurable Mirror Synchronization Time (EE only)

[Repository mirroring] is a great feature in GitLab Enterprise Edition that
allows you to synchronize remote repositories with your repository on GitLab.
Previously, synchronization happened every hour; you can now [adjust this][sync]
for more fine-grained synchronization windows.

[Repository mirroring]: https://docs.gitlab.com/ee/workflow/repository_mirroring.html
[sync]: https://docs.gitlab.com/ee/workflow/repository_mirroring.html#adjusting-synchronization-times

## Additional Changes

- Added support for multiple mount points for [repository storage](https://docs.gitlab.com/ee/administration/repository_storage_paths.html) (EE only).
- Added the ability configure a [repository's mirror sync interval](https://docs.gitlab.com/ee/workflow/repository_mirroring.html) (EE only).
- Added `repository_storage` and `approvals_before_merge` fields to [API V3 Projects](https://docs.gitlab.com/ee/api/projects.html) (EE only).
- Moved the [License Breakdown](https://docs.gitlab.com/ee/user/admin_area/license.html) to the Admin Overview page (EE only).

## Upgrade barometer

This release does not require downtime.

Some of the migrations could take some time and on larger instances, it may be advisable
to take approximately 15 minutes downtime to ease the load of the database.

The slow migrations add columns with default values to `users` and `projects`.

### Note

We assume you are upgrading from the latest version. If not, then also consult the upgrade barometers of any intermediate versions you are skipping.
If you are upgrading from a GitLab version prior to 8.0 *and* you have CI enabled, you have to upgrade to GitLab 8.0 [first](https://about.gitlab.com/2015/09/22/gitlab-8-0-released/).

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).
