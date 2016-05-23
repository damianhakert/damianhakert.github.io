---
title: "GitLab Container Registry"
author: Mark Pundsack
author_twitter: markpundsack
categories:
image_title:
---

Today we're happy to announce the release of GitLab Container Registry, a secure and private registry for Docker images.
Built on [open source](https://github.com/docker/distribution), GitLab Container Registry isn't just a standalone registry;
it's completely integrated with GitLab, giving developers a seamless experience from code to CI to container registry.
It is actually the first Docker registry that is fully-integrated with git repository management. Our integrated 
Container Registry means no additional installation or configuration, easy upload and download of images from 
GitLab CI, and no additional cost.

<!-- more -->

## Docker Basics

The main component of a Docker-based workflow is an image, which contains everything needed to run an application. 
Images are often created automatically as part of continuous integration so they are updated whenever code changes. 
When images are built to be shared between developers and machines, they need to be stored somewhere, and that's 
where a container registry comes in. The registry is the place to store and tag images for later use. Developers 
may want to maintain their own registry for private, company images, or for throw-away images used only in testing. 
Using GitLab Container Registry means you don't need to set up and administer yet another service, or use a public registry.

## Tight Integration

GitLab Container Registry is fully-integrated with GitLab making it easy for developers to code, test, 
and deploy Docker container images using GitLab CI and other Docker-compatible tooling.

- User authentication is from GitLab itself, so all the user and group definitions are respected.
- There's no need to create repositories in the registry; the project is already defined in GitLab.
- Projects have a new tab, Container Registry, which lists all images related to the project.
- Every project can have an image repository, but this can be turned off per-project.
- Developers can easily upload and download images from GitLab CI.
- There's no need to download or install additional software.

## Simplify your workflow

GitLab Container Registry is seamless and secure. Here are some examples of how GitLab 
Container Registry can simplify your development and deployment workflows. 

- easily build Docker images with the help of GitLab CI and store them in the GitLab Container Registry,
- easily create images per branches, tags, or any other way suitable to your workflow with no effort storing them on GitLab,
- use your own build images, stored in your registry to test your applications against these images, allowing you to simplify the docker-based workflow,
- let the team easily contribute to the images, using the same workflow they are already accustomed to, with the help of GitLab CI you can automatically rebuild images that inherit from your's allowing you to easily deliver fixes and a new features to a base image used by your teams,
- have a full Continuous Deployment and Delivery workflow by pointing your CaaS to use images directly from GitLab Container Registry, you'll be able to perform automated deployments of your applications to the cloud (Docker Cloud, Docker Swarm, Kubernetes and others) when you build and test your images.

## Example

Here's an example GitLab CI configuration file (`.gitlab-ci.yml`) which builds an image, runs tests, and if the tests are successful, tags the build and uploads the build to the container registry.

```
build_image:
  image: docker:git
  services:
  - docker:dind
  script:
    - docker login -u gitlab-ci-token -p $CI_BUILD_TOKEN registry.gitlab.com
    - docker build -t my-group/my-project .
    - docker run my-group/my-project /script/to/run/tests
    - docker tag my-group/my-project registry.gitlab.com/my-group/my-project:latest
    - docker push registry.gitlab.com/my-group/my-project:latest
  only:
    - master
```

Here's a more elaborate example that splits up the tasks into 4 stages, including two tests that run in parallel. The build is stored in the container registry and used by subsequent stages, downloading the image automatically when needed. Changes to `master` also get tagged as `latest` and deployed using an application-specific deploy script.

```
image: docker:git
services:
- docker:dind

stages:
- build
- test
- release
- deploy

variables:
  CONTAINER_TEST_IMAGE: registry.gitlab.com/my-group/my-project:$CI_BUILD_REF_NAME
  CONTAINER_RELEASE_IMAGE: registry.gitlab.com/my-group/my-project:latest

before_script:
  - docker login -u gitlab-ci-token -p $CI_BUILD_TOKEN registry.gitlab.com

build:
  stage: build
  script:
    - docker build -t $CONTAINER_TEST_IMAGE .
    - docker push $CONTAINER_TEST_IMAGE

test1:
  stage: test
  script:
    - docker run $CONTAINER_TEST_IMAGE /script/to/run/tests

test2:
  stage: test
  script:
    - docker run $CONTAINER_TEST_IMAGE /script/to/run/another/test

release-image:
  stage: release
  script:
    - docker tag $CONTAINER_TEST_IMAGE $CONTAINER_RELEASE_IMAGE
    - docker push $CONTAINER_RELEASE_IMAGE
  only:
    - master

deploy:
  stage: deploy
  script:
    - ./deploy.sh
  only:
    - master
```

## Summary

GitLab Container Registry is the latest addition to GitLab's integrated set of tools for the software development lifecycle. 
With GitLab Container Registry, testing and deploying Docker containers has never been easier.
GitLab Container Registry is available on-premises in GitLab CE and GitLab EE at no additional cost 
and installs in the same infrastructure as the rest of your GitLab instance. GitLab Container Registry 
is also available for free on GitLab.com for an unlimited number of private projects.
