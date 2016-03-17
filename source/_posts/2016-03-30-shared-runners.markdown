---
layout: post
title: "GitLab.com Shared Runners uses Auto-scaling"
date: 2016-03-30
comments: true
categories:
author: Kamil Trzciński
author_twitter: ayufanpl
---

A few months ago we started offering the Shared Runners for GitLab.com.
These are machines that run your builds in docker containers.
This is convienient way to start with GitLab.com without any hurdle.
These machines can run any of your builds that is compatible with Docker.

The Shared Runners are free to build any type of project, including the private one.

Today we are extending our offering, enabling the recently annouced auto-scaling feature.
This will reduce the build times and also the reduce that time required to allocate a new free machine.

<!--more-->

The Shared Runners for GitLab.com from today use the new GitLab Runner 1.1.

GitLab Runner is configured in auto-scaling mode
with distributed cache and docker registry proxy for docker images.

## The use

You will be able to continue using the Shared Runners for testing and deploying your private projects.

The Shared Runners will be continued to be used to build your static pages that will be served by GitLab Pages.

## The machines

All your builds are run on Digital Ocean 4GB, with CoreOS and latest Docker Engine installed.

Your build will always be run on fresh machine, to reduce to zero potential security issue for breaking out of the container.

## The tags

All shared runners did receive two tags: `shared` and `docker`.

You can use these tags in your `.gitlab-ci.yml` to limit which runners are used for what branches:

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

The above script will configure GitLab to always run your tests on Shared Runners, and run deployments only on your specific runner, registered with tag `my_private_runner`.

## The changes

Previously runners were configured to always start the `mysql`, `postgres`, `redis` and `mongodb`.
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
