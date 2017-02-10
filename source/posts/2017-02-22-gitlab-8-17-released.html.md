---
title: "GitLab 8.17 released with xyz and abc features"
categories: release
author: Job van der Voort
author_twitter: Jobvo
image_title: '/images/8_17/pic.jpg'
description: GitLab 8.17 released with xyz and abc features
---

_Job writes introductory paragrahs here_

_Job writes about the MVP here_

## GitLab Pages is now free for everyone

[GitLab Pages](https://pages.gitlab.io/) allows you to host static websites straight from GitLab, with any kind of static site generator. Previously this functionality was only available on GitLab.com and GitLab Enterprise Edition. After receiving [over 100 votes](https://gitlab.com/gitlab-org/gitlab-ce/issues/14605) we decided to make GitLab Pages available to everyone, for free!

## Easily search and add issues to board

Prior to 8.17, the Backlog list in the issue board contained issues that you had not yet added to your workflow (the "main" area of the board). 
Finding issues to add was somewhat difficult given that small area, and you could only add them one by one.
Most of the time, you didn't even need to see the Backlog list at all, and it was just hanging around taking up valuable screen real estate.
With 8.17, you now add issues through a dedicated modal window. 
Click the `Add issues` button at the top-right, and you get an expansive modal to search and filter for issues you care about.
Select one or many issues, and even choose the list where you want to put them in before adding them to the board, saving just a few more clicks and drags.
To remove an issue from your board, select it to bring up the sidebar, and hit `Remove from board`.
[Learn more](https://docs.gitlab.com/ce/user/project/issue_board.html).


![Add issues modal in board in GitLab 8.17](/images/8_17/board_modal.png){: .shadow}

![Remove issue from board in GitLab 8.17](/images/8_17/board_remove.png){: .shadow}

## Squash and merge

To improve code collaboration, we suggest teams share their merge requests as soon as possible in [WIP form](https://docs.gitlab.com/ce/user/project/merge_requests/work_in_progress_merge_requests.html).
This naturally results in many commits as the merge request evolves.
Developers will then often squash the commits manually on their local machine before merging into the target branch.
With 8.17, you can now squash and merge with a single click in GitLab itself, by simply selecting the option in the merge request.
[Learn more](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html).

![Squash and merge in GitLab 8.17](/images/8_17/squash_edit_form.png){: .shadow}

## Streamlining project settings and navigation

We are continuing to streamline project settings and navigation, which we [first started in 8.16](https://about.gitlab.com/2017/01/22/gitlab-8-16-released/).
We've combined the existing `Runners`, `Variables`, `Triggers`, and `CI/CD Pipelines` menu items into one simply called `CI/CD Pipelines`.
Navigating to `CI/CD Pipelines` will show you one page with all the settings that were previously spread across the 4 original pages.

![Improved settings navigation in GitLab 8.17](/images/8_17/settings_new.png){: .shadow}

## Audit Users (EE only)

GitLab Enterprise Edition features a new capability to create users with an `Audit` role. This role allows the user read-only access to all projects, groups and users.

## Configureable mirror synchronisation time (EE only)

[Repository mirroring](https://docs.gitlab.com/ee/workflow/repository_mirroring.html) is a great feature in GitLab Enterprise Edition that allows you to synchronise remote repositories with your repository on GitLab. Previously, synchronisation happened every hour; you can now [adjust this](https://docs.gitlab.com/ee/workflow/repository_mirroring.html#adjusting-synchronization-times) for more fine-grained synchronisation windows.

## Impersonation Tokens

Administrators can now retrieve an Impersonation Token for any user, which allows API-based applications to authenticate as other users without needing to go through the cumbersome oAuth process.
