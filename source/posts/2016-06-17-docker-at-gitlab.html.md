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

## How GitLab continues to scale using Docker

<!-- Talk about auto-scaling using Docker Machine -->
<!-- Talk about the addition of the Docker Registry to GitLab -->
<!-- Talk about building our omnibus packages in Docker -->
