---
layout: post
title: "Getting started with GitLab and GitLab CI"
date: 2015-12-10
comments: true
author: Achilleas Pipinellis
author_twitter: _axil
image_title: '/images/unsplash/FILENAME.jpg'
---

This is the start of a series of posts to get you started with GitLab and
GitLab CI.

In this first post we will explain what CI is, why and how to use it
effectively with GitLab and we will briefly explore a higher overview of the
components that make GitLab and GitLab CI work together.

Let's dive in!

<!-- more -->

## What is this CI thing?

CI stands for [Continuous Integration][ci-wiki] and has gain a big popularity
the last years. Together with its sibling [Continuous Delivery][cd-wiki],
conform the spine of agile software development.

With Continuous Integration developers are expected to integrate their work
frequently (usually daily) in a shared repository.

- testing
- building

To grasp a better understanding on Continuous Integration we encourage you to
read the [article written by Martin Fowler][ci-fowler] almost a decade ago.

## Meet GitLab CI

What started as a side project [three years ago][ci-first-post], has now
become one of GitLab's key features. Back then, it was a separate application
that was talking to GitLab via web hooks. Now, starting from GitLab 8.0,
GitLab CI has been [fully integrated with GitLab itself][8-post]. No more need
to setup and maintain another application, which means less work for your Ops
team.

The statuses for each build are exposed in GitLab all over the place. You can
see whether a build succeeded, failed, canceled or skipped within a single
Merge Request or commit, or at the Merge Requests and commits pages.

Read more about GitLab CI at its [official webpage][ci-page].

## GitLab Runner

- multi-platform
- easy to install
- no other dependencies
- can use docker

Roadmap

## How GitLab CI works

Three key components:

- GitLab
- GitLab Ci
- GitLab Runner

Explore:

- .gitlab-ci.yml
- jobs vs builds

## What the future holds

Some notable features to be added are listed in the issues below:

- [Pass CI build artifacts between stages][issue-3423]
- [GitLab container registry][issue-3299]
- [GitLab Pipeline][issue-3743]
- [GitLab Deploy][issue-3286]

## Conclusion

By now you should have an overview of GitLab CI's architecture, its
components and how all these work together.

If you are eager to give it a go be sure to visit our [quick start guide][].

In the next post we will explore [TODO].

[ci-wiki]: https://en.wikipedia.org/wiki/Continuous_integration
[cd-wiki]: https://en.wikipedia.org/wiki/Continuous_delivery
[ci-fowler]: http://www.martinfowler.com/articles/continuousIntegration.html
[ci-first-post]: https://about.gitlab.com/2012/11/13/continuous-integration-server-from-gitlab/
[8-post]: https://about.gitlab.com/2015/09/22/gitlab-8-0-released/
[ci-page]: https://about.gitlab.com/gitlab-ci
[issue-3423]: https://gitlab.com/gitlab-org/gitlab-ce/issues/3423
[issue-3299]: https://gitlab.com/gitlab-org/gitlab-ce/issues/3299
[issue-3743]: https://gitlab.com/gitlab-org/gitlab-ce/issues/3743
[issue-3286]: https://gitlab.com/gitlab-org/gitlab-ce/issues/3286
[quick start guide]: http://doc.gitlab.com/ce/ci/quick_start/
