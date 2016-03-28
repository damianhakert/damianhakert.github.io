---
layout: post
title: "GitLab Runner 1.1 with Autoscaling"
date: 2016-03-29 14:00
comments: true
categories:
author: Kamil Trzciński
author_twitter: ayufanpl
image_title: '/images/unsplash/high-road.jpg'
---

Over the last year the GitLab Runner has become a significant part of the GitLab
family. We've recently made major improvements with the release of GitLab Runner 1.1.
The new release introduces a new feature: Auto-Scaling.

<!-- more -->

## About GitLab Runner

GitLab has [built-in continuous integration][doc-ci] to allow you to run a
number of tasks as you prepare to deploy your software. Typical tasks
might be to build a software package or to run tests as specified in a
YAML file. These tasks need to be run in a virtual machine, and in GitLab
these virtual machines are called [Runners][doc-runners].

GitLab Runner 1.1 is the biggest release yet.
Autoscaling provides the ability to utilize resources in a more elastic and
dynamic way.
The other features include support for distributed cache server
and user requested features like passing artifacts between stages,
or and the ability to specify an archive name.


## The Challenge of Scaling

Other continuous integration platforms have a similar functionality.
For example, Runners are called is available as "Agents" in Atlassian's
Bamboo (which integrates with Bitbucket.) Some services, like Bamboo,
charge individually for using these virtual machines and if you need a
number of them it can get quite expensive, quite quickly. If you have only
one available Agent or Runner, you could be slowing down your work.

We don’t charge anything for connecting Runners in GitLab, it’s all
built-in. However, the challenge up until now has been how can you scale
these runners? With GitLab, runners can be specified per project, but this
means you have to create a runner per project, and that doesn’t scale
well.

An alternative up until now was to create a number of
[*shared runners*](http://doc.gitlab.com/ce/ci/runners/README.html)
which can be used across your entire GitLab instance.

However, what happens then when you need more runners than are available?
You end up having to queue your tasks, and that will slow things down.
Hence the need for autoscaling.

<!--more-->

## Autoscaling increases developer happiness

We decided to build autoscaling with the help of [Docker Machine][docker-machine].
Docker Machine allows you to provision and manage multiple remote Docker hosts
and supports vast number of [virtualization and cloud providers][docker-machine-driver].
For now autoscaling only works with Docker Machine virtualization and cloud providers.

Because the runners will autoscale, your infrastructure contains only as
many build instances as necessary at anytime. If you configure the Runner to
only use autoscale, the system on which the Runner is installed acts as a
bastion for all the machines it creates.

Autoscaling allows you to increase developer happiness.
Everyone hates to wait for their builds to be picked up, just because all runners
are currently in use.

The autoscaling feature promotes heavy parallelization of your tests.
GitLab makes parallelization of your tests easy in your .gitlab-ci.yml file.

These are not only benefits of autoscaling.
In long run autoscaling reduces your infrastructure costs:

* autoscaling follows your team work hours,
* you pay for what you used, even when scaling to hundreds of machines,
* you can use larger machines for the same cost, thus having your builds run faster,
* the machines are self-managed, everything is handled by docker-machine, making your Administrators happy too,
* your responsibility is to only manage GitLab and one GitLab Runner instance.

Below, you can see a real-life example of the runners autoscale feature, tested
on GitLab.com for the [GitLab Community Edition][ce] project:

![Real life example of autoscaling](/images/runner_1_1/autoscaling-gitlab-com.png)

Each machine on the chart is an independent cloud instance, running build jobs
inside of Docker containers.

Our builds are run on Digital Ocean 4GB machines, with CoreOS and latest Docker
Engine installed.
Digital Ocean proved to be one of the best choices for us, mostly because of the
fast spin-up time (around 50 seconds) and very fast SSD drivers, which are ideal
for testing purposes. Currently the GitLab Runner processes up to 160 builds at time.

Read more [about the new autoscaling feature][doc-autoscale].

## Distributed cache server

In GitLab Runner 0.7.0 we introduced support for caching.
This release brings improvements to this feature too, which is especially useful
with autoscaling.

The GitLab Runner 1.1 allows you to use an external server to store all your caches.
The server needs to expose the S3-compatible API.
You can use for example Amazon S3, but there are also a number of servers that
you can run on-premise just for the purposes of caching.

Find out more [about the distributed cache server][doc-cache].

## Artifacts improvements

We listen closely to our community, to extend the project where users most request.
One of the often-requested features was related to passing artifacts.

GitLab offers awesome capabilities to define multiple jobs and group them in
different stages.
The jobs are always independent, and can be run on different runners.
Up until now you had to use an external method if you wanted to pass the files
from one job to another one.
With GitLab Runner 1.1 it happens automatically. Going one step further - GitLab
8.6 allows you to fine tune what should be passed: http://doc.gitlab.com/ce/ci/yaml/README.html#dependencies.

```
build:osx:
  stage: build
  artifacts: ...

test:osx:
  stage: test
  dependencies:
  - build:osx
```

The second requested feature was the ability to change the name of uploaded
artifacts archive. It's possible now with this simple syntax:

```
build_linux:
  artifacts:
    name: "build_linux_$CI_BUILD_REF_NAME"
    ...
```

## Improved documentation

With GitLab Runner 1.1 we've also released improved documentation, explaining
all executors and commands. The documentation also describes what features are
supported by different configurations.

Read the [revised documentation][doc-improved].


## Changelog

These are not all the changes introduced by with GitLab Runner 1.1.
Here is the complete list:

```
- Use Go 1.5
- Add docker-machine based autoscaling for docker executor
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

You can see why we think version 1.1 is fantastic.
Go get it, test it and share your feedback with us!
You can meet with the CI team in our upcoming webcast.

## Live webcast: GitLab CI

Sign up for our webcast on April 14th, which includes an overview and tutorial
about using GitLab CI. Meet people from the GitLab CI team and get your questions
answered live!

- Date: Thursday, April 14, 2016
- Time: 5pm (17:00) UTC; 12pm EST; 9am PST
- [Register here](http://page.gitlab.com/apr-2016-gitlab-intro-ci-webcast.html)

Can't make it? Register anyway, and we'll send you a link to watch it later!

[docker-machine]: https://docs.docker.com/machine/
[docker-machine-driver]: https://docs.docker.com/machine/drivers/
[ce]: https://gitlab.com/gitlab-org/gitlab-ce
[doc-runners]: http://doc.gitlab.com/ce/ci/runners/README.html
[doc-ci]: http://doc.gitlab.com/ce/ci/quick_start/README.html
[doc-autoscale]: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/docs/configuration/autoscale.md
[doc-improved]: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/README.md
[doc-cache]: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/docs/configuration/autoscale.md#distributed-runners-caching
