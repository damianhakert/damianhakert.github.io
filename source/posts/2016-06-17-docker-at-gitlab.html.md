---
title: "Docker at GitLab"
author: DJ Mountney
author_twitter: twk3
categories:
image_title:
---

Our [Docker image](http://docs.gitlab.com/omnibus/docker/) is a great way to
quickly bring up an instance of GitLab. You can use it to try new features,
([try an rc](https://hub.docker.com/r/gitlab/gitlab-ce/tags/)) or mount the
storage volumes and use it for all your GitLab needs.

It has been over two years since we started thinking about [Docker and GitLab together](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/59).
In those years we have pushed over 100 CE and EE docker images to [Docker Hub](https://hub.docker.com/u/gitlab/),
and have built new features into GitLab with [built-in Docker support](http://docs.gitlab.com/ce/ci/docker/using_docker_images.html),
helping us (and you!) to test and build our applications easier and faster.

Read on for more details on how GitLab uses Docker to scale.

<!-- more -->

## Why Docker?

<!-- Docker vs VMs -->
<!-- Docker first to popularize the lightweight vms, most mature, large community support -->
<!-- Docker growth -->
<!-- Docker apps and clusters in the Cloud -->

## How GitLab started scaling with Docker

<!-- Talk about Docker use in CI, for build and test concurrency -->

## How GitLab continues to scale using Docker

<!-- Talk about autoscaling using Docker Machine -->
<!-- Talk about the addition of the Docker Registry to GitLab -->
<!-- Talk about building our omnibus packages in Docker -->
