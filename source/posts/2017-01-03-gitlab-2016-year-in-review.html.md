---
title: "GitLab 2016 Year In Review"
author: Connor Shea
author_twitter: connorjshea
categories: 
image_title: 
description: 
---

TODO: INTRO

<!-- more -->

For a visual of how far we’ve come, take a look at these two screenshots.

![Screenshot of an issue from GitLab 8.4 on January 22, 2016](/images/2016-year-in-review/gitlab-8-4.png)

An issue for GitLab Community Edition on January 22, 2016 (8.4). 

![Screenshot of an issue from GitLab 8.15 on January 3, 2017](/images/2016-year-in-review/gitlab-8-15.png)

An issue for GitLab Community Edition on January 3, 2017 (8.15).

## January: 8.4

[GitLab 8.4 Release Post](https://about.gitlab.com/2016/01/22/gitlab-8-4-released/)

We kicked off the year with our 50th release of GitLab.

A browser was added for [Build Artifacts](https://docs.gitlab.com/ce/user/project/builds/artifacts.html). Artifacts are the output resulting from builds, and can be used to provide binaries for a piece of software, the compiled content of a static site, or the results of a test coverage checker.

We introduced a [File Finder](https://docs.gitlab.com/ce/workflow/file_finder.html), a much-requested addition contributed by the community! It helps find any file in a repository using "fuzzy" search.

Improved repository search was added for Enterprise Edition with [Elasticsearch](https://docs.gitlab.com/ee/integration/elasticsearch.html). This made searching projects' code, issues, and merge requests faster and more useful.

## February: 8.5

[GitLab 8.5 Release Post](https://about.gitlab.com/2016/02/22/gitlab-8-5-released/)

February saw the release of GitLab 8.5 with the introduction of [Todos](https://docs.gitlab.com/ee/workflow/todos.html) – our take on a more useful notification system.

Also included in February's release was an alpha version of GitLab Geo. GitLab Geo is available for GitLab Enterprise Edition and allows companies with offices around the world to mirror their GitLab instance in multiple places. This makes downloading large repositories much faster for all team members, no matter where they are.

[GitLab Pages](https://pages.gitlab.io/) added support for custom domains and custom TLS certificates. This allows users to host their static sites on custom domains without giving up the added security of HTTPS. While GitLab Pages is an Enterprise Edition-only feature right now, [we'll be bringing it to Community Edition in an upcoming release](https://about.gitlab.com/2016/12/24/were-bringing-gitlab-pages-to-community-edition/).

## March: 8.6

[GitLab 8.6 Release Post](https://about.gitlab.com/2016/03/22/gitlab-8-6-released/)

Confidential issues are issues visible only to members of a project with sufficient permissions. Confidential issues can be used by open source projects and companies alike to keep security vulnerabilities private or prevent surprises from leaking out.

[Label subscriptions](https://docs.gitlab.com/ce/user/project/labels.html#subscribe-to-labels) send any newly-labeled issues to your inbox so you can keep up-to-date with issues and merge requests relevant to you.

## April: 8.7

[GitLab 8.7 Release Post](https://about.gitlab.com/2016/04/22/gitlab-8-7-released/)

[License templates](https://docs.gitlab.com/ce/api/templates/licenses.html) were introduced, providing users with a quick way to fill in LICENSE files for new projects.

Due dates were added for issues and merge requests. They can be used to keep track of deadlines and make sure features are shipped on time.

[Cherry picking](https://docs.gitlab.com/ce/user/project/merge_requests/cherry_pick_changes.html) is [a feature in git](https://git-scm.com/docs/git-cherry-pick) that takes individual commits or sets of commits from one branch and adds them to another. It’s most commonly used to backport bug fixes or security patches from the `master` branch to older, stable branches. GitLab 8.7 added cherry picking to the user interface and lets users do more of their work without switching to the command line.

## May: 8.8

[GitLab 8.8 Release Post](https://about.gitlab.com/2016/05/22/gitlab-8-8-released/)

With GitLab 8.8, GitLab CI gained the concept of [Pipelines](https://docs.gitlab.com/ce/ci/pipelines.html), collections of builds that are executed in stages. Pipelines allow for better organization and parallelization.

[GitLab Container Registry](https://docs.gitlab.com/ce/user/project/container_registry.html) was a huge addition to our offering with GitLab CI. If you’ve used [Docker](https://www.docker.com/), you probably know what a container registry is. Container registries are used to host and provide Docker containers for testing and deployment of software. Integrating the container registry means that uploading and download Docker images is easy and fast, especially for local instances.

Read [the full blog post](https://about.gitlab.com/2016/05/23/gitlab-container-registry/) on the GitLab Container Registry for more information.

Following the introduction of License templates in 8.7, 8.8 provides [`.gitignore` templates](https://docs.gitlab.com/ce/api/templates/gitignores.html) as well. [`.gitignore` files](https://git-scm.com/docs/gitignore) tell git not to track certain directories or kinds of files to help keep the repository clean. We provide templates for various languages and frameworks to prevent users from committing secrets or large log files to the repository.

## June: 8.9

[GitLab 8.9 Release Post](https://about.gitlab.com/2016/06/22/gitlab-8-9-released/)

[File Locking](https://docs.gitlab.com/ee/user/project/file_lock.html) is an EE Premium feature that 

[Environments](https://docs.gitlab.com/ce/ci/environments.html)

[Priority Labels](https://docs.gitlab.com/ce/user/project/labels.html#prioritize-labels)

Redesigned Navigation

Universal Two Factor (U2F) is a form of [Two-Factor Authentication](https://docs.gitlab.com/ce/profile/two_factor_authentication.html) that uses physical keys (usually via USB) for authentication. GitLab 8.9 added support for the U2F device standard.

## July: 8.10

[GitLab 8.10 Release Post](https://about.gitlab.com/2016/07/22/gitlab-8-10-released/)

Wildcard Branch Protection

Manual Actions for CI

## August: 8.11

[GitLab 8.11 Release Post](https://about.gitlab.com/2016/08/22/gitlab-8-11-released/)

GitLab 8.11 was probably the most exciting release of the year, bringing with it a number of major features and improvements.

[Issue Boards](https://docs.gitlab.com/ce/user/project/issue_board.html) are another way of tracking project issues. Similar to existing kanban board software, issue boards integrate with the issues you already have in GitLab and organize themselves based on project labels. If you're already using labels to track progress on issues, issue boards shouldn't take more than a minute to set up.

![Issue Boards](/images/8_11/issue_boards.gif)

[Merge Conflict Resolution](https://docs.gitlab.com/ce/user/project/merge_requests/resolve_conflicts.html)

![Merge Conflict Resolution](/images/8_11/resolve_mc.gif)

[Discussion Resolution](https://docs.gitlab.com/ce/user/project/merge_requests/merge_request_discussion_resolution.html)

![Resolve Discussions](/images/8_11/resolve_discussion.png)

Pipeline Graphs are an awesome visual representation of a project's Pipeline.

![Pipeline Graph](/images/8_11/pipeline_graph2.png)

With the addition of [Slash Commands](https://docs.gitlab.com/ce/user/project/slash_commands.html), comments can be used to modify the status, author, assignee, due date, milestone, and labels of a merge request or issue, among other things. This feature gives users more power over their issues and merge requests without ever leaving the keyboard or needing to memorize keyboard shortcuts.

![Slash Commands](/images/8_11/slash-commands.gif)

8.11 introduces integration with [Koding](http://docs.gitlab.com/ce/user/project/koding.html), an online IDE. Koding allows users to develop and test your project without ever leaving the browser.

## September: 8.12

[GitLab 8.12 Release Post](https://about.gitlab.com/2016/09/22/gitlab-8-12-released/)

The headline feature of 8.12 was [Cycle Analytics](https://docs.gitlab.com/ce/user/project/cycle_analytics.html), a new way of tracking software development using the data GitLab gathers as you use it. See [our feature highlight](https://about.gitlab.com/2016/09/21/cycle-analytics-feature-highlight/) for more information.

![Cycle Analytics](/images/8_12/cycle_analytics.png)

Code search was improved in Enterprise Edition 8.12 with the addition of Global Code Search. This allows users to search across all the repositories on an instance, and is especially useful for microservice-based architectures and for reusing code from existing projects.

[Merge Request Versions](https://docs.gitlab.com/ce/user/project/merge_requests/versions.html)

![Merge Request Versions](/images/8_12/mr_versions.png)

## October: 8.13

[GitLab 8.13 Release Post](https://about.gitlab.com/2016/10/22/gitlab-8-13-released/)

Issue Boards were improved for EE users by allowing more than one issue board for a given project. This is great for large projects with more than one team, or in situations where a repository is used to host the code of multiple products.

![Multiple Issue Boards](/images/8_13/m_ib.gif)

Building on Merge Conflict Resolution introduced in 8.11, the Merge Conflict Resolution tool gained an Editor. This allows more complex merge conflicts, which require the user to manually modify a file in order to resolve a conflict, to be solved right form the GitLab interface.

![Merge Conflict Editor](/images/8_13/inlinemergeconflictresolution.gif)

## November: 8.14

[GitLab 8.14 Release Post](https://about.gitlab.com/2016/11/22/gitlab-8-14-released/)

Time Tracking Beta, Chat Commands, and Review Apps

## December: 8.15 

[GitLab 8.15 Release Post](https://about.gitlab.com/2016/12/22/gitlab-8-15-released/)

Auto Deploy, Web Terminal, improved Git Hooks, and LaTeX support.

## Looking forward

As always, if you found this post interesting and want to contribute to the project, we’d be happy to have you! Take a look around the [Accepting Merge Requests](https://gitlab.com/gitlab-org/gitlab-ce/issues?scope=all&state=opened&utf8=%E2%9C%93&label_name%5B%5D=Accepting+Merge+Requests) and [up-for-grabs](https://gitlab.com/gitlab-org/gitlab-ce/issues?scope=all&state=opened&utf8=%E2%9C%93&label_name%5B%5D=up-for-grabs) labels in the GitLab CE project, and download the [GitLab Development Kit](https://gitlab.com/gitlab-org/gitlab-development-kit) to get started. If you have any questions feel free to reach out on Twitter, in the GDK issue tracker, or in our IRC channel. 

What improvements do you want to see this year? 
