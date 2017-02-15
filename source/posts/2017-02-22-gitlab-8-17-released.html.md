---
title: "GitLab 8.17 Released"
categories: release
author: Job van der Voort
author_gitlab: JobV
author_twitter: Jobvo
image_title: '/images/8_17/pic.jpg'
description: "GitLab 8.17 released with xyz and abc features"
---

_Job writes introductory paragraphs here_

<!-- more -->

_Job writes about the MVP here_

<!-- don't forget to link MVP's name to their GitLab.com profile -->

## GitLab Pages is Now Free for Everyone

[GitLab Pages][pages] allows you to [host static websites][post-pages-setup] straight from GitLab, with [any Static Site Generator][pages-ssgs]. Previously this functionality was only available on GitLab.com and GitLab Enterprise Edition. After receiving [over 100 votes](https://gitlab.com/gitlab-org/gitlab-ce/issues/14605) we decided to make GitLab Pages available to everyone, for free!

[pages-ssgs]: /2016/06/17/ssg-overview-gitlab-pages-part-3-examples-ci/
[pages]: https://pages.gitlab.io/
[post-pages-setup]: /2016/04/07/gitlab-pages-setup/

## Easily Search and Add Issues to Issue Boards

Prior to 8.17, the Backlog list in the [Issue Board][board] contained issues that you had not yet added to your workflow (the "main" area of the board).
Finding issues to add was somewhat difficult given that small area, and you could only add them one by one.
Most of the time, you didn't even need to see the Backlog list at all, and it was just hanging around taking up valuable screen real estate.
With 8.17, you now add issues through a dedicated modal window.
Click the `Add issues` button at the top-right, and you get an expansive modal to search and filter for issues you care about.
Select one or many issues, and even choose the list where you want to put them in before adding them to the board, saving just a few more clicks and drags.
To remove an issue from your board, select it to bring up the sidebar, and hit `Remove from board`.
[Learn more][board-doc].

[board]: /solutions/issueboard/
[board-doc]: https://docs.gitlab.com/ce/user/project/issue_board.html

![Add issues modal in board in GitLab 8.17](/images/8_17/board_modal.png){: .shadow}

![Remove issue from board in GitLab 8.17](/images/8_17/board_remove.png){: .shadow}

## Squash and Merge

To improve code collaboration, we suggest teams share their merge requests as soon as possible in [WIP form][wip].
This naturally results in many commits as the merge request evolves.
Developers will then often squash the commits manually on their local machine before merging into the target branch.
With 8.17, you can now squash and merge with a single click in GitLab itself, by simply selecting the option in the merge request.
[Learn more][squash-doc].

[wip]: https://docs.gitlab.com/ce/user/project/merge_requests/work_in_progress_merge_requests.html
[squash-doc]: https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html

![Squash and merge in GitLab 8.17](/images/8_17/squash_edit_form.png){: .shadow}

## Streamlining Project Settings and Navigation

We are continuing to streamline project settings and navigation, which we first started in [8.16].
We've combined the existing `Runners`, `Variables`, `Triggers`, and `CI/CD Pipelines` menu items into one simply called `CI/CD Pipelines`.
Navigating to `CI/CD Pipelines` will show you one page with all the settings that were previously spread across the 4 original pages.

[8.16]: https://about.gitlab.com/2017/01/22/gitlab-8-16-released/

![Improved settings navigation in GitLab 8.17](/images/8_17/settings_new.png){: .shadow}

## Additional details included in Merge Request workflow

We have made improvements to the look and feel of the Merge Request workflow, as well as included additional details on the CI/CD Pipeline status. You are now able to easily and quickly review the progress of the entire Pipeline, directly from the Merge Request page.

![Merge Request Pipeline Minigraph](/images/8_17/merge_request_minigraph.png){: .shadow}

## Redesigned Slack and Mattermost Issue Messages

The ChatOps message replies for Slack and Mattermost have been redesigned, offering a cleaner interface with additional detail when working with Issues. Replies will now include assignee, status, and more!

![Slack Issue Show](/images/8_17/slack_issue_show.png){: .shadow}

## Improving terminology within CI/CD

We have clarified the terminology used to discuss parts of CI/CD, replacing the usage of `Build`. In 8.17, `Pipeline` will be used when referring to the entire pipeline, and `Job` will be used for a specific action or build.

## Upcoming changes to defaults in `gitlab-ci.yml`

As part of our 9.0 release, we will be changing the default behavior of two flags in `gitlab-ci.yml` to provide an improved standard experience.

* The `cache:key` directive will now default to a constant string. This means that the cache will now be shared across branches and stages, reducing build time making more efficient use of Runners. Note a cache is never shared across projects.
* The `artifacts:expire_in` default will be able to be controlled by the GitLab administrator. This will allow administrators to reduce storage usage by reclaiming artifacts that do not need to be stored indefinitely. Set this value to your desired duration if an artifact is required to persist for a specific time.

## Audit Users (EE only)

GitLab Enterprise Edition features a new capability to create users with an `Audit` role. This role allows the user read-only access to all projects, groups and users.

## Configurable Mirror Synchronization Time (EE only)

[Repository mirroring] is a great feature in GitLab Enterprise Edition that allows you to synchronize remote repositories with your repository on GitLab. Previously, synchronization happened every hour; you can now [adjust this][sync] for more fine-grained synchronization windows.

[Repository mirroring]: https://docs.gitlab.com/ee/workflow/repository_mirroring.html
[sync]: https://docs.gitlab.com/ee/workflow/repository_mirroring.html#adjusting-synchronization-times

## Monitoring GitLab with Prometheus

Three new exporters have been added to the Omnibus package adding support for monitoring Redis, Postgres, and GitLab service metrics. Prometheus and all exporters [can be enabled][prom-doc] by editing `gitlab.rb`, and will be enabled by default in 9.0.

[prom-doc]: https://docs.gitlab.com/ce/administration/monitoring/prometheus/index.html
