---
layout: post
title: "GitLab vs. Bitbucket"
date: 2015-04-15
comments: true
categories:
author: Job van der Voort
author_twitter: Jobvo
image_title: '/images/stock/bb.jpg'
---

The best thing of an open source project, GitLab in particular, is the community.
Not only does the community provide us with much needed [feedback](feedback.gitlab.com),
but in our case, they often send us awesome new features themselves that are
in high demand.

This gives us an edge versus Bitbucket, which has a long list of requested
features, but doesn't seem to be responsive to their users.

To convince some of you to move from Bitbucket to GitLab, we've compiled
a list of our advantages versus them. We'd love to hear what you think in
the comments.

<!-- more -->

## GitLab.com and Community Edition are _completely_ free

Whereas Bitbucket restricts you to work with only 5 people for free,
GitLab.com is completely free. You want to host your 1000 repositories
and 100 colleagues on GitLab.com? Free.

You want to run your own server with 1000 employees, restricted to your
environment? Free.

We believe that source code hosting is a commodity and should be available
to anyone at no cost. If you want support or extra features for larger
organizations, you can look at our [subscriptions](/pricing). But without those,
you're definitely not missing out.

## GitLab is well designed

Just look at it:

![Nice design of GitLab](/images/bb/design.png)

## Contributor Statistics

The top requested Bitbucket features? We've had it for years:

![Contributor graphs](/images/bb/graphs.png)
![Commit graphs](/images/bb/graphs2.png)

## Group your Repositories

Groups allow you to easily manage multiple repositories between people
and set permissions, access rights and integrations:

![groups](/images/bb/groups.png)

## Source code Search

Want to search the source code of a project?
Enter anything in the top bar of any project and GitLab will search
through all the contents of the repository, issues and anything that belongs
to the project.

![search](/images/bb/search.png)

## Fine grained permission management

Want to give someone permission to access the issue tracker, but
not the repository? You can!

Want to give someone read access to a group of repositories,
but write access to one in particular? You can!

Want to have a discussion about what kind of animal the GitLab logo is?
Now you can!

## Custom Git Hooks

GitLab makes it easy to set up custom git hooks. By adding your hooks to
the special directory, you're making sure they do not get modified, moved
or changed between migrations.

In GitLab Enterprise Edition, there is a list of pre-built Git Hooks available
that you can use by simply selecting them.

## Comes with a CI!

With every GitLab installation, you get our continous integration tool
GitLab CI! It integrates fully with GitLab, so you can easily see the
build status of any branch, commit or merge request and run your
deployments automatically after!

![GitLab CI integration](/images/bb/ci.png)

## Import from Bitbucket, GitHub, anywhere

Want to start using GitLab? You can easily import your repositories from
Bitbucket, GitHub, Gitorious or anywhere else, all in batch!

![Import from anywhere](/images/bb/import.png)
