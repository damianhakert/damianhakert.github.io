---
title: "GitLab 8.17 Released"
categories: release
author: Job van der Voort
author_gitlab: JobV
author_twitter: Jobvo
image_title: '/images/unsplash/fireworks.png'
description: >
  GitLab 8.17 released with GitLab Pages in GitLab CE and Squash on Merge
---

For many years, content management systems (CMS) have been used
to manage simple websites. The advent of static sites allows organizations to
no longer worry about having to secure, update and maintain an underlying CMS. 
Static websites are fast, yet powerful and 
[seen as the next big thing in publishing to internet][smashing-link].

GitLab 8.17 allows anyone to easily create and collaborate on a static website
through [GitLab Pages][pages], now available in GitLab Community Edition.

<!-- more -->

----

In addition to Pages moving to CE, we've made improvements to Issue 
Boards, added an audit user role, added the ability to squash commits on merge 
and much more!

[smashing-link]: https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/

This month's [MVP](/mvp) is [Horacio Sanson](https://gitlab.com/Sanson).
[Last release](https://about.gitlab.com/2017/01/22/gitlab-8-16-released/),
Horacio added PlantUML support for Asciidoc; this release,
[he added it](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8588) for
Markdown, too!
Thanks Horacio!

## GitLab Pages in Community Edition

Hardcoded static websites take a long time to setup and maintain for everyone 
but the invested web developer. Static Site Generators are the best solution to 
[this problem][pages-ssgs-1]. [GitLab Pages][pages] allows you to 
[host static websites][post-pages-setup] straight from GitLab, with 
[any Static Site Generator][pages-ssgs]. Previously this functionality was only 
available on GitLab.com and GitLab Enterprise Edition. After receiving 
[over 100 votes](https://gitlab.com/gitlab-org/gitlab-ce/issues/14605)
we decided to move GitLab Pages to GitLab Community Edition.

Static websites are much faster than their dynamic counterparts, this makes them
great for high volume public marketing and documentation sites or even as a way 
to easiliy visualize data from your continuous integration.

The [GitLab Pages documentation][pages-docs] covers everything from getting
started with different Static Site Generators to advanced CI and SSL
configurations. To learn how to set up GitLab Pages to your own GitLab instance, 
read through the [admin documentation] or watch the [video tutorial].

[admin documentation]: https://docs.gitlab.com/ce/administration/pages/
[pages-ssgs]: /2016/06/17/ssg-overview-gitlab-pages-part-3-examples-ci/
[pages-ssgs-1]: /2016/06/03/ssg-overview-gitlab-pages-part-1-dynamic-x-static/
[pages]: https://pages.gitlab.io/
[post-pages-setup]: /2016/04/07/gitlab-pages-setup/
[pages-docs]: http://docs.gitlab.com/ce/user/project/pages/index.html
[video tutorial]: https://youtu.be/dD8c7WNcc6s

<!-- NOTE FOR MARCIA, AXIL, OR SEAN P.: UPDATE LINK PAGES-DOCS TO 
https://docs.gitlab.com/ce/pages/ WHEN 
https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/9395 GETS MERGED -->

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

[GitLab Flavored Markdown (GFM)][gfm-doc] is a powerful system, but 
transcribing formatted text to it may be a little bit difficult for newcomers to 
Markdown. You may find yourself going to the edit mode of an issue description 
or comment to just copy the plaintext GFM, paste it in another GitLab textarea, 
make some changes, before submitting it. 

With 8.17, you can simply copy any issue / merge request description / comment 
(i.e. GFM textarea) in regular view mode, and paste it in another GFM textarea.
All the formatting is carried over automatically. This even includes links and 
images. Pro tip: Now you can quickly learn from GFM experts by copying their 
issues and merge requests.

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

## Additional Details Included in Merge Request Workflow

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

## Improving Terminology within CI/CD

We have clarified the terminology used to discuss parts of [CI/CD][cicd],
replacing the usage of `Build`. In 8.17, `Pipeline` will be used when referring
to the entire pipeline, and `Job` will be used for a specific action or build.
**Note:** The API will only be renamed in 9.0.

[cicd]: http://docs.gitlab.com/ce/ci/README.html

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

## v4 API beta release

As part of 9.0 release, we're already shipping our v4 API as Beta! Most changes 
for 8.17 were focused on consistency improvements regarding our existing v3 API 
(which will remain unchaged for now), and we're looking forward to ship some 
great features for v4 on 9.0, such as:

* Present related resource URI's within each API response (facilitating API 
  navigation)
* Enable pagination for all endpoints
* Allow queries on issues and merge requests endpoints with IIDs (same as web 
  version URL ids)

Keep track on [CE](https://docs.gitlab.com/ce/api/v3_to_v4.html) and
[EE](https://docs.gitlab.com/ee/api/v3_to_v4.html) v4 API changes docs for 
further information.

### API v3 Deprecation

Given the current v4 shipping, we're planning to keep v3 API up until 9.3 GitLab 
release. Only bugs and security fixes will be done on v3 up until then.

## Audit Users (EE only)

Many large or regulated organizations require oversight across the entire
development environment. GitLab Enterprise Edition now features a great new
capability to assign an `Audit` role to a user. This role allows the user
read-only access to all projects, groups, users and other resources.

Unlike the `Administrator` role, Audit users don't have the ability to modify
projects settings or access the Admin Area, making it the perfect solution to
provide powerful, read-only access across the entire GitLab instance.

[Find out more](audit-docs) about how this role works and the capabilities it 
allows.

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
- Added `repository_storage` and `approvals_before_merge` fields to [API v3 Projects](https://docs.gitlab.com/ee/api/projects.html) (EE only).
- Moved the [License Breakdown](https://docs.gitlab.com/ee/user/admin_area/license.html) to the Admin Overview page (EE only).
- Email confirmation link will no longer automatically log you into your GitLab instance. This was changed due to security concerns, see [gitlab-org/gitlab-ce!7472](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/7472) for details.

## Omnibus GitLab package changes

### PostgreSQL version upgrade

As mentioned [in the 8.15 release post](https://about.gitlab.com/2016/12/22/gitlab-8-15-released/#postgresql-version-upgrade),
omnibus-gitlab packages are equipped with `gitlab-ctl pg-upgrade` tool.
This tool will upgrade the bundled PostgreSQL database version.

Please plan the upgrade ahead of GitLab 9.0 release (scheduled for Mar. 22, 2017).

The omnibus-gitlab packages for GitLab 9.0 will attempt to automatically upgrade
your database. Additionally, [default version of PostgreSQL](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1916)
will change for GitLab 9.0.

> [Read more about database upgrade in our docs](https://docs.gitlab.com/omnibus/settings/database.html#upgrade-packaged-postgresql-server)

> Ran into issues? Create an issue at the [omnibus-gitlab issue tracker](https://gitlab.com/gitlab-org/omnibus-gitlab/issues),
and reference it in the [upgrade problems meta issue.](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1783)

## Deprecations

### Git-Annex Support

We're [deprecating](https://gitlab.com/gitlab-org/gitlab-ee/issues/1648) support 
for [Git-Annex](https://docs.gitlab.com/ee/workflow/git_annex.html) available in 
GitLab Enterprise Edition, and it will be completely removed in the upcoming 
release, GitLab 9.0 (2017/03/22).

Read through the 
[Git-Annex to Git-LFS migration guide](https://docs.gitlab.com/ee/workflow/lfs/migrate_from_git_annex_to_git_lfs.html).

### Raspbian Wheezy package

8.17 will be [the last release](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1947)
with support for Raspbian Wheezy Raspberry Pi2 packages. GitLab 9.0 will continue
to be available on Raspbian Jessie.

### Change in package repository distribution for Raspberry PI

Due to a migration to new build infrastructure, several months ago Raspberry PI
packages [started being released](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1303)
under `debian` distribution of [raspberry pi2 repositiory](https://packages.gitlab.com/app/gitlab/raspberry-pi2/).
This was not the original intention and in the following months users needed to do
a [manual change in their package repository sources](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1303#note_21058665)
to fetch the latest package.
With 9.0 we will deprecate the `debian` distribution and move back to `raspbian` which was the previous default.

### Standalone GitLab CI configuration

GitLab CI standalone was merged into GitLab application with version 8.0. We
shipped configuration that helped users migrate their infrastructure to the new situation.
With GitLab 9.0 omnibus-gitlab package, [we are removing](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/792) all
support for standalone GitLab CI. If you still make use of configuration such as
`ci_external_url` and [redirecting traffic to the old address](https://docs.gitlab.com/ce/migrate_ci_to_ce/README.html#iii-redirecting-traffic),
please update your configuration in time.

## Upgrade barometer

This release does not require downtime.

Some of the migrations could take some time and on larger instances, it may be advisable
to take approximately 15 minutes downtime to ease the load of the database.

The slow migrations add columns with default values to `users` and `projects`.

### Upcoming changes to defaults in `.gitlab-ci.yml`

As part of our 9.0 release, we will be changing the default behavior of two
flags in [`.gitlab-ci.yml`][gitlab-ci-yml] to provide an improved standard experience.

* The [`cache:key`][cache-key] directive will default to a constant string. This
  means that the cache will now be shared across branches and stages, reducing
  build time making more efficient use of Runners. Note a cache is never shared
  across projects.
* The [`artifacts:expire_in`][artifacts-expire-in] default will be able to be
  controlled by the GitLab administrator. Previously unless a specific duration
  was set, artifacts would never expire. By enabling control over the default
  value, administrators can more easily manage artifacts that do not need to be
  stored indefinitely. Developers should set this value to their desired
  duration if an artifact should persist for a specific time.

[gitlab-ci-yml]: http://docs.gitlab.com/ce/ci/yaml/README.html
[cache-key]: http://docs.gitlab.com/ce/ci/yaml/README.html#cache-key
[artifacts-expire-in]: http://docs.gitlab.com/ce/ci/yaml/README.html#artifacts-expire_in

### Note

We assume you are upgrading from the latest version. If not, then also consult 
the upgrade barometers of any intermediate versions you are skipping. If you are 
upgrading from a GitLab version prior to 8.0 *and* you have CI enabled, you have 
to upgrade to GitLab 8.0 [first](https://about.gitlab.com/2015/09/22/gitlab-8-0-released/).

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

----

[Cover image](https://unsplash.com/?photo=5KvPQc1Uklk) by [Ryan Wong](https://unsplash.com/@provenwong), licensed under [CC0 1.0](https://unsplash.com/license)
{:.note}
