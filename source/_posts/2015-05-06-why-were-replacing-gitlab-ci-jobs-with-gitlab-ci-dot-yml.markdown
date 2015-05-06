---
layout: post
title: "Why we're replacing GitLab CI jobs with .gitlab-ci.yml"
date: 2015-05-06
comments: true
author: Job van der Voort
author_twitter: Jobvo
image_title: '/images/stock/ci-yml.jpg'
---

In case you didn’t know yet: Every single GitLab installation
ships with a powerful continuous integration tool: GitLab CI.
With GitLab CI you can run tests of your projects and triggers
builds and deployments easily,
as it integrates deeply with GitLab.

Up until now, to set up the build / deploy commands you had to
go into GitLab CI and edit the scripts in a form. This made
it very low-threshold to setup, but it felt lacking.

We’re glad to tell you we’ve got a better solution:
`.gitlab-ci.yml`.

<!--more-->

Instead of editing a form, in the future you will be able to
add a `.gitlab-ci.yml` file to your repository in which you
can specify your builds for GitLab CI.
This has some major (positive) repercussions for GitLab CI
builds, because now you get:

- a fully version-controlled build file
- correctly building old commits
- correctly building forks
- possibility of different settings per branch
- easily accessible (for everyone with read access) single source of truth
- the power to do build matrices (!!)

You will also be able to run jobs by putting your
`job.sh` in the root of the repo and referencing that in your
`.gitlab-ci.yml`.

## Where we got our inspiration

The awesome [Travis CI](https://travis-ci.org/) had the great
idea to use a `.yml` file for builds and was quickly followed
by the popular [CircleCI](https://circleci.com). We’re happy
to follow this approach, which we believe is superior than
any other (such as Jenkins).

As usual, our amazing community was already fully aware of this
and we’ve seen demand for this on our [feedback page](http://feedback.gitlab.com/forums/176466-general/suggestions/5591851-store-build-configuration-in-the-repo-like-travi)
and even [implementations](https://github.com/claudyus/ci-yml) for this!

## Ships with GitLab 8.0

This change will deprecate the existing jobs to prevent
confusion and multiple ways of doing things.
That means it is also a breaking change for anyone using
GitLab CI. For this reason we will only introduce this
change with GitLab 8.0.

GitLab 8.0 has no release date yet.
