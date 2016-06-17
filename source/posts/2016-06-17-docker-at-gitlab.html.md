---
title: "Docker at GitLab"
author: DJ Mountney
author_twitter: twk3
categories:
image_title:
---

Our [Docker image](http://docs.gitlab.com/omnibus/docker/) is a great way to
quickly bring up an instance of GitLab. You can use it to try new features, or
mount the storage volumes and use it for all your GitLab needs.

It has been over two years since we started thinking about [Docker and GitLab together](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/59).
In those years we have pushed over 100 CE and EE docker images to [Docker Hub](https://hub.docker.com/u/gitlab/),
and have built new features like GitLab CI with [built-in Docker support](http://docs.gitlab.com/ce/ci/docker/using_docker_images.html),
helping us (and you!) to test and build our applications easier and faster.

Read on for more details on how GitLab uses Docker to scale.

<!-- more -->

## Why Docker?

[Docker](https://www.docker.com/) provides a set of tools for running processes
in a virtualized container. This satisfies most of the same use-cases as a
virtual machine, but re-uses the host system's kernel, making it faster to boot
up. It uses a layered filesystem which can be re-used among several containers,
allowing it to take up less space.

[Docker Hub](https://hub.docker.com/) provides a central registry of images,
which helps make our GitLab image more discoverable. Docker's popularity has
resulted in increased development in virtual containers, and now has a large
community around it to provide support.

For the GitLab application image, we use Docker because it is the most familiar
container provider for our users, and is well supported.

For use within GitLab CI, we chose it because it is easy to manage and its
lightweight nature makes it easy to scale our CI tasks.

## How GitLab CI started scaling with Docker

<!-- Talk about Docker use in CI, for build and test concurrency -->

## GitLab CI adds autoscaling with Docker Machine
<!-- Talk about auto-scaling using Docker Machine -->

## A built-in Docker Registry
<!-- Talk about the addition of the Docker Registry to GitLab -->

## How we continue to scale using Docker

### Scaling our Tests

All of our source branches for GitLab are [tested](https://gitlab.com/gitlab-org/gitlab-ce/builds)
using GitLab CI. We switched our builds to use the autoscaled Docker executor when
we released support for it in GitLab CI back in March.

Before switching to the autoscaled runners, tests were on average waiting for **10
minutes** before an executor became available for them to run. Now the tests only
ever need to wait a **few seconds** for a new Docker Machine to be brought up.

It is not just our own tests though. We have [enabled autoscaling on our Shared Runners
on GitLab.com](https://about.gitlab.com/2016/04/05/shared-runners/) for all
projects. The average Docker Machines we end up running sits around 100.

### Scaling our Builds

This month we have moved the building of our GitLab Omnibus Packages into Docker
as well. Previously we were running a single dedicated VM for all 9 of the
Operating Systems that we build GitLab packages for. Most package builds took
about half-an-hour, but because there was only one VM for each OS, doing a
[security patch across 7 releases](https://about.gitlab.com/2016/06/15/gitlab-8-dot-8-dot-5-released/)
would take a long time.

Moving the builds to Docker and turning on auto-scaling allows us to run as many
builds at a time as we need. We are not finished with the move quite yet, our
Docker builds are currently half the speed of our previous system, taking a full
hour per build. And flaky build failures often cause us to retry the builds at
least once per release. We still need to reintroduce some build caching and
other improvements to fix these problems, but we expect to be able to quickly and
concurrently build our packages when it is all done. Feel free to
[track our progress](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1232).

<!-- Conclusion? -->
