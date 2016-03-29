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
but we also offer [Shared Runners][docs-runners] to run your builds in CI *for
free* on GitLab.com. Up until recently, you may have experienced a short wait
time as your build got queued for a shared runner. With the [latest release of
GitLab Runner 1.1][runner-release], we've introduced autoscaling to help us meet
the growing demand, and this is now available on GitLab.com. Less waiting, more
building!

<!--more-->

## Scaling the service

Projects hosted in GitLab can have CI tasks defined in their [`.gitlab-ci.yml`
files](http://doc.gitlab.com/ce/ci/yaml/README.html). These tasks are performed
by [*runners*][docs-runners] which are essentially virtual machines which run
your builds in Docker containers. These machines can run any of your builds that
are compatible with Docker.

On other platforms, similar functionality is only available with an add-on
charge. In GitLab it's free to connect your own runners, and we also began
offering free [Shared Runners][docs-runners] on GitLab.com. That means Shared
Runners are freely available for projects on GitLab.com, whether they are
private or public. However, up until recently users would have noticed their
builds would be queued to run as they waited for a shared runner to become
available for work.

Today we are extending our offering, enabling the [recently announced][runner-release]
autoscaling feature. This will reduce the build times and also reduce the time
required to allocate a new available machine.

As of today, the Shared Runners for GitLab.com use the new GitLab Runner 1.1.
GitLab Runner is configured in autoscaling mode with distributed cache and
Docker registry proxy for Docker images.

## Using Shared Runners

You will be able to continue using the Shared Runners for testing and deploying
your private projects.

The Shared Runners will continue to be used to build your static pages that
are served by [GitLab Pages][docs-pages].

## The machines

All your builds run on [Digital Ocean](https://www.digitalocean.com/) 4GB
instances, with CoreOS and the latest Docker Engine installed.

Your builds will always be run on fresh machines. This will effectively
eliminate possible security issues, as there is no potential of breaking
out of the container.

## The tags

All Shared Runners are tagged with `shared` and `docker`.

You can use these tags in your `.gitlab-ci.yml` file to limit which runners are
used for specific jobs:

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
a `my_private_runner` tag.

## What has changed

Previously, runners were configured to always start the `mysql`, `postgres`,
`redis`, and `mongodb` services.
However, we are aware that most of our users don't need to use all (or even any)
of these services, and have removed them from the default configuration.

If your builds _do_ require one or more of these services, your builds may start
to fail unexpectedly. Modify your `.gitlab-ci.yml` file to add the services
required by your application:

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
