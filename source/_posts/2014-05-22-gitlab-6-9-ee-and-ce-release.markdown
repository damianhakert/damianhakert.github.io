---
layout: post
title: "GitLab 6.9 EE and CE released"
date: 2014-05-22
comments: true
categories:
author: Marin Jankovski
---

Hello everyone!

Gitlab is open source software made for collaborative coding.
Today we announce the release of a new version of GitLab Enterprise Edition (EE) and GitLab Community Edition (CE), with new features, usability and performance improvements, and bug fixes.
The main new feature of CE release is two step creation process for merge requests.
In addition to updates from CE, Enterprise edition now has support for integration with Jenkins CI service.

Other changes include improvements in comments loading logic, markdown preview during editing via web editor and new API features.

This month's Most Valuable Person is 

Thanks !

<!--more-->

## Jenkins CI integration(EE only feature)

GitLab 6.9 EE can be configured to interact with Jenkins CI.

This integration includes triggering Jenkins builds after pushing to repository and showing of build status on Merge Request page.

[![screenshot](/images/6_9/jenkins.png)](/images/6_9/jenkins.png)

## Interacting with Jira(EE only feature)

Before GitLab 6.9, GitLab could be configured to use external issue trackers like Jira. This meant that Issues would link to Jira.

In GitLab 6.9 EE, GitLab goes one step further in integrating Jira by allowing issues to be closed by commit messages and Merge request mentions.

For example, commit message "New feature. Fixes JIRA-123" would create a comment in issue JIRA-123 with a link to the commit and close the issue in Jira.

[![screenshot](/images/6_9/jira.png)](/images/6_9/jira.png)

## Two step Merge Request process

We have reworked Merge Request creation process to make the workflow more natural.

In GitLab 6.9, when creating new merge request, after selecting the source and target branch and repositories an overview with differences between the two selected branch is first shown.
By comparing the branches before creating the MR, "nothing to merge" situation is prevented. When there are differences between the two branches, MR title will be pre-filled with source branch name, you can enter a description of the MR and assign a user/milestone before submitting the MR.

[![screenshot](/images/6_9/)]()

## Markdown preview or diff when using web editor

Thanks to contribution by Evgeniy Sokovikov, editing files via web editor is now more convenient.

When editing a file you can now view the diff before commiting the changes.
If the file is a markdown file, you can preview the changes before commiting.

[![screenshot](/images/6_9/)]()

## New API features

Thanks to sponsoring by O'Reilly Media it is now possible to accept Merge Requests through the API.

You can read more about the GitLab API at [doc.gitlab.com/ce/api](http://doc.gitlab.com/ce/api/README.html).

- - -

# Install

If you are setting up a new GitLab installation see the [installation section of the README](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/README.md#installation).

# Update 

Upgrade instructions for omnibus-gitlab packages can be found in [the omnibus-gitlab repository](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/update.md).

If you installed GitLab from source and you have version 6.4.2 or higher you can use the [upgrade script](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/upgrader.md).
But you have to update GitLab Shell to 1.9.4 manually, see [point 3 of the upgrade guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/6.8-to-6.9.md#3-update-gitlab-shell-and-its-config).

If you still want to do it manually - see the [Update Guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/6.8-to-6.9.md).

# Enterprise

For LDAP group support and more have a look at the [feature list of GitLab Enterprise Edition](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [GitLab.com subscription](http://www.gitlab.com/subscription/).

No time to upgrade or maintain Gitlab yourself?
GitLab.com also offers upgrade and installation services as part of a [GitLab.com subscription](http://www.gitlab.com/subscription/) or alternatively on a [consultancy basis](http://www.gitlab.com/consultancy/).

- - -
