---
layout: post
title: "GitLab.com Shared Runners use Autoscaling"
date: 2016-03-31 12:00
comments: true
categories:
author: Kamil Trzciński
author_twitter: ayufanpl
image_title: '/images/unsplash/agile.jpeg'
---

Not only is [Continuous Integration][docs-ci] built-in with GitLab CE and EE,
we also offer [shared runners][docs-runners] to run your builds in CI *for free* on
GitLab.com.
Up until recently, you may have experienced a short wait time as your build got
queued for a shared runner.
With the [latest release of GitLab Runner 1.1][runner-release], we've
introduced autoscaling to help us meet the growing demand, and this is now
available on GitLab.com. Less waiting, more building!

<!--more-->

## Scaling the service

Continuous Integration comes built-in with GitLab, for both CE and EE.
That means projects hosted in GitLab can have CI run tasks specified in their
YAML files.
These tasks are performed by [*runners*][docs-runners] which are essentially virtual machines
which run your builds in Docker containers.
These machines can run any of your builds that are compatible with Docker.

In other platforms similar functionality is only available with an add-on
charge such as Agents in Bamboo (which is an add-on service to BitBucket.)
In GitLab it's free to connect your own runners, and we also started offering
free [shared runners][docs-runners] on GitLab.com.
That means shared runners are freely available for projects on GitLab.com,
whether they are private or public.
However, up until recently users would have noticed their builds would be queued
to run as they waited for a shared runner to be made available.

Today we are extending our offering, enabling the [recently announced][runner-release]
autoscaling feature.
This will reduce the build times and also the reduce that time required to
allocate a new free machine.

The shared runners for GitLab.com from today use the new GitLab Runner 1.1.
GitLab Runner is configured in autoscaling mode with distributed cache and
Docker registry proxy for Docker images.

## Using Shared Runners

You will be able to continue using the shared runners for testing and deploying
your private projects.

The shared runners will continue to be used to build your static pages that
are served by [GitLab Pages][docs-pages].

## The machines

All your builds run on [Digital Ocean](https://www.digitalocean.com/) 4GB,
with CoreOS and latest Docker Engine installed.

Your builds will always be run on fresh machines. This will reduce the potential
security issues to zero, meaning there is no potential of breaking out of the
container.

## The tags

All shared runners received two tags: `shared` and `docker`.

You can use these tags in your `.gitlab-ci.yml` to limit which runners are used
for what branches:

```
test:
  ...
  tags:
  - shared
  - docker

deploy:
  ...
  tags:
  - my_private_runner
```

The above script will configure GitLab to always run your tests on shared
runners, and run deployments only on your specific runner, registered with
tag `my_private_runner`.

## What has changed

Previously runners were configured to always start the `mysql`, `postgres`,
`redis` and `mongodb`.
We are aware that most of our users don't need to use any of these services.
Thus we are removing hard dependency on them.
This can lead to scenario where your builds start to fail.
Modify your `.gitlab-ci.yml` and add the services required by your application:

```
services:
- mysql
- postgres
- redis
- mongodb

tests:
  script: run-my-tests
  ...
```

Happy building!

## Live webcast: GitLab CI

Sign up for our webcast on April 14th, which includes an overview and tutorial
about using GitLab CI. Join to meet with the GitLab CI team and get your questions
answered live!

- Date: Thursday, April 14, 2016
- Time: 5pm (17:00) UTC; 12pm EST; 9am PST
- [Register here](http://page.gitlab.com/apr-2016-gitlab-intro-ci-webcast.html)

Can't make it? Register anyway, and we'll send you a link to watch it later!

[docs-ci]: http://doc.gitlab.com/ce/ci/README.html
[docs-pages]: http://doc.gitlab.com/ee/pages/README.html
[docs-runners]: http://doc.gitlab.com/ce/ci/runners/README.html
[runner-release]: https://about.gitlab.com/2016/03/29/gitlab-runner-1-1-released/
