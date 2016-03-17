---
layout: post
title: "GitLab Runner 1.1 with auto-scaling"
date: 2016-03-24
comments: true
categories:
author: Kamil Trzciński
author_twitter: ayufanpl
---

Over the last year the GitLab Runner, become a significant part of GitLab family. 

GitLab Runner 1.1 is the biggest release yet.
The new release introduces a new feature the auto-scaling.
Autoscale provides the ability to utilize resources in a more elastic and
dynamic way.

The other features include support for distributed cache server
and user requested features like passing artifacts between stages,
or and the ability to specify archive name.

<!--more-->

## The auto-scaling

We decided to build auto-scaling with the help of [Docker Machine][docker-machine].
The Docker Machine allows you to provision and manage multiple remote Docker hosts
and supports vast number of [virtualization and cloud providers][docker-machine-driver].
This also means that auto-scaling can be only used to execute on Docker Engine for now.

Thanks to runners being able to autoscale, your infrastructure contains only as
much build instances as necessary at anytime. If you configure the Runner to
only use autoscale, the system on which the Runner is installed acts as a
bastion for all the machines it creates.

The auto-scaling allows you to increase the developer happiness.
Anyone hates waiting for his builds to be picked up, just because all runners are currently in use.

The auto-scaling promotes heavy parallelization of your tests.
This is something that GitLab makes it a really easy to do.

These are not only benefits of auto-scaling.
In long run the auto-scaling reduces your infrastracture costs:
* the auto-scaling follows your team work hours,
* you pay for what you used, even when scaling to houndreds of machines,
* you can use larger machines for the same cost, thus having your builds run faster,
* the machines are self-managed, everything is handled by docker-machine, making your Administrators happy too,
* your responsibility is to only manage the GitLab and one GitLab Runner instance.

Below, you can see a real life example of the runners autoscale feature, tested
on GitLab.com for the [GitLab Community Edition][ce] project:

![Real life example of autoscaling](../images/runner_1_1/auto-scaling-gitlab-com.png)

Each machine on the chart is an independent cloud instance, running build jobs
inside of Docker containers.

Our builds are run on Digital Ocean 4GB machines, with CoreOS and latest Docker Engine installed. The Digital Ocean proved to be one of the best choices for us, mostly because of the fast spinup time (around 50 seconds) and very fast SSD drivers, which are ideal for testing purposes. Currently the GitLab Runner processes up to 160 builds at time.

You can find more information about the new autoscaling feature here: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/docs/configuration/autoscale.md.

## Distributed cache server

In GitLab Runner 0.7.0 we introduced the support for caching.
This release brings improvements to this feature too, especially useful with auto-scaling.

The GitLab Runner 1.1 allows you to use external server to store all your caches.
The server needs to expose the S3-compatible API.
You can use for example Amazon S3, but there are also a number of servers that you can run on-premise just for the purposes of caching.

You can find more information about the distributed cache server: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/docs/configuration/autoscale.md#distributed-runners-caching.

## Artifacts improvements

We closely listen to our community and extend the project in direction requested the most.
One of this long requested features were artifacts passing.

The GitLab offers awesome capabilities to define multiple jobs and group them in different stages.
The jobs are always independent, and can be run on different runners.
Up until now you had to use external method if you wanted to pass the files from one job to different one.
With GitLab Runner 1.1 it happens automatically, and further GitLab 8.6 allows you to fine tune what should be passed: http://doc.gitlab.com/ce/ci/yaml/README.html#dependencies.

```
build:osx:
  stage: build
  artifacts: ...

test:osx:
  stage: test
  dependencies:
  - build:osx
```

The second requested feature was the ability to change the name of uploaded artifacts archive. It's possible now with simple syntax:

```
build_linux:
  artifacts:
    name: "build_linux_$CI_BUILD_REF_NAME"
    ...
```

## Improved documentation

One of the most lacking things in GitLab Runner is documentation. The GitLab Runner 1.1 tries to fill that hole with improved documentation, explaining all executors, commands and also describing what features are support by different configurations.

You can check the revisited documentation here: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/README.md

## Changelog

This are not all changes introduced by the 1.1. Here is the complete list:

```
- Use Go 1.5
- Add docker-machine based auto-scaling for docker executor
- Add support for external cache server
- Add support for `sh`, allowing to run builds on images without the `bash`
- Add support for passing the artifacts between stages
- Add `docker-pull-policy`, it removes the `docker-image-ttl`
- Add `docker-network-mode`
- Add `git` to gitlab-runner:alpine
- Add support for `CapAdd`, `CapDrop` and `Devices` by docker executor
- Add support for passing the name of artifacts archive (`artifacts:name`)
- Refactor: The build trace is now implemented by `network` module
- Refactor: Remove CGO dependency on Windows
- Fix: Create alternative aliases for docker services (uses `-`)
- Fix: VirtualBox port race condition
- Fix: Create cache for all builds, including tags
- Fix: Make the shell executor more verbose when the process cannot be started
- Fix: Pass gitlab-ci.yml variables to build container created by docker executor
- Fix: Don't restore cache if not defined in gitlab-ci.yml
- Fix: always use `json-file` when starting docker containers
```

[ce]: https://gitlab.com/gitlab-org/gitlab-ce
