---
title: "GitLab Container Registry"
author: Mark Pundsack
author_twitter: markpundsack
categories:
image_title:
---
Today we're happy to announce the release of GitLab Container Registry as the latest addition to GitLab's integrated set of tools for the software development lifecycle. GitLab Container Registry is a fully-integrated Docker registry that makes it easy for developers to build, test, and deploy Docker container images using GitLab CI and other Docker-compatible tooling.
<!-- more -->
GitLab Container Registry is available on-premises in GitLab CE and GitLab EE at no additional cost and installs in the same infrastructure as the rest of your GitLab instance. GitLab Container Registry is also available for free on GitLab.com for an unlimited number of private projects.

## Docker Basics

The main component of a Docker-based workflow is an image, which contains everything needed to run an application. Images are often created automatically as part of continuous integration so they are updated whenever code changes. When images are built to be shared between developers and machines, they need to be stored somewhere, and that's where a container registry comes in. The registry is the place to store and tag images for later use. Developers may want to maintain their own registry for private, company images, or for throw-away images used only in testing. Using GitLab Container Registry means you don't need to set up and administer yet another service, or use a public registry.

## Tight Integration

Built on [open source](https://github.com/docker/distribution), GitLab Container Registry isn't just a standalone registry; it's completely integrated with GitLab.

- User authentication is from GitLab itself, so all the user and group definitions are respected.
- There's no need to create repositories in the registry; the project is already defined in GitLab.
- Every project can have an image repository, but this can be turned off per-project.
- Projects have a new tab, Container Registry, which lists all images related to the project.
- Easily upload and download images from GitLab CI.
- There's no need to download additional software.

## Example

Here's an example GitLab CI configuration file (`.gitlab-ci.yml`) which builds an image, runs tests, and if the tests are successful, tags the build and uploads the build to the container registry.

```
build_image:
  image: docker:git
  services:
  - docker:dind
  script:
    - docker login -u gitlab-ci-token -p $CI_BUILD_TOKEN gitlab.com:5005
    - docker build -t my-group/my-project .
    - docker run my-group/my-project /script/to/run/tests
    - docker tag my-group/my-project gitlab.com:5005/my-group/my-project:latest
    - docker push gitlab.com:5005/my-group/my-project:latest
  only:
    - master
```

## Summary

We're excited to extend our suite of integrated tools for the software development lifecycle. With GitLab Container Registry, testing and deploying Docker containers has never been easier.
