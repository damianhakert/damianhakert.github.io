---
title: "Building an Elixir Release into Docker-image using GitLab CI - Part 1"
author: Alexander Malaev
author_twitter: spscream
categories: GitLab CI
image_title: # to be added
description: # to be added
---

**Note:** this post is a customer story by Alexander Malaev, a software developer.
{: .note}

Well, we are actively using Phoenix/Elixir in our projects for backend development, we also have RoR project as a frontend-service for Admin UI. Our project consists of a bunch of microservices written in Elixir/Erlang, and we are running it in production in Docker-containers linked together and composed by docker-compose.

On every push to project branch on [GitLab], [GitLab CI] runs tests, style checking, and other tasks. These tasks are configured using `.gitlab-ci.yml`, and on every merge to `master` GitLab builds a release image for us and uploads it to [GitLab Container Registry][registry]. After all we run `docker-compose pull && docker-compose up -d` on servers to download the latest release images and upgrade containers.

<!-- more -->

## CI pipeline

So, following I will describe our release pipeline for Elixir services, using snippets from our project’s `.gitlab-ci.yml`.

We are using `docker:latest` image for our runner, and several stages:

```yaml
image: docker:latest
stages:
  - build
  - styles
  - test
  - release
  - cleanup
```

Passing some variables:

```yaml
variables:
  APP_NAME: project
  APP_VERSION: 0.0.1
  CONTAINER_RELEASE_IMAGE: gitlab.example.org/example/project:latest
  POSTGRES_HOST: postgres
  POSTGRES_USER: postgres
  POSTGRES_PASSWORD: password
```

Those variables used during release build, they will be available to all stages. E.g., `CONTAINER_RELEASE_IMAGE` is used on release stage, as a link to push release image to. The `POSTGRES_*` variables are used to configure postgres service, and to connect later from containers.

Our build stage:

```yaml
build:
  before_script:
    - docker build -f Dockerfile.build -t ci-project-build-$CI_PROJECT_ID:$CI_BUILD_REF .
    - docker create
      -v /build/deps
      -v /build/_build
      -v /build/rel
      -v /root/.cache/rebar3/
      --name build_data_$CI_PROJECT_ID_$CI_BUILD_REF busybox /bin/true
  tags:
    - docker
  stage: build
  script:
    - docker run --volumes-from build_data_$CI_PROJECT_ID_$CI_BUILD_REF --rm -t ci-project-build-$CI_PROJECT_ID:$CI_BUILD_REF
```

Before running this stage we create container which provides volumes for building artifacts, by the way GitLab CI has a cache volume itself for similar purposes, but I couldn’t make it working correctly with GitLab Runner using Docker image.

```yaml
test:
  services:
    - postgres
  tags:
    - docker
  stage: test
  script:
    - env
    - docker run --rm
      --link $POSTGRES_NAME:postgres
      -e POSTGRES_HOST=$POSTGRES_HOST
      -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD
      -e POSTGRES_USER=$POSTGRES_USER
      -e MIX_ENV=$MIX_ENV
      --volumes-from build_data_$CI_PROJECT_ID_$CI_BUILD_REF ci-project-build-$CI_PROJECT_ID:$CI_BUILD_REF sh -c "mix ecto.setup && mix test"
```

Notice what we must pass variables and link postgres manually since GitLab Runner is passing variables only to the first level of Docker, but we go deeply ;)

We could link any services as we want, e.g. we are using Kafka in production and on our test stage we make Kafka service available to running tests.

Style checking:

```yaml
styles:
  tags:
    - docker
  stage: styles
  script:
    - docker run --rm
      --volumes-from build_data_$CI_PROJECT_ID_$CI_BUILD_REF ci-project-build-$CI_PROJECT_ID:$CI_BUILD_REF sh -c "mix credo --strict"
```

Release task, we run it only on pushes to master:

```yaml 
release:
  tags:
    - docker
  stage: release
  script:
    - docker run
      --volumes-from build_data_$CI_PROJECT_ID_$CI_BUILD_REF
      -e MIX_ENV=prod --rm -t ci-project-build-$CI_PROJECT_ID:$CI_BUILD_REF
      sh -c "mix deps.get && mix compile && mix release"
    - docker cp build_data_$CI_PROJECT_ID_$CI_BUILD_REF:/build/rel/$APP_NAME/releases/$APP_VERSION/$APP_NAME.tar.gz .
    - docker build -t $CONTAINER_RELEASE_IMAGE .
    - docker login -u gitlab-ci-token -p $CI_BUILD_TOKEN gitlab.example.org:4567
    - docker push $CONTAINER_RELEASE_IMAGE
  only:
    - master
```

We are using conform to achieve runtime configuration of release using environment variables. I use approach described in this [blog post][post-env].

And task to cleanup things:

It removes container with volumes created for build artifacts and removes image used during pipeline. This task is running every time, despite results of any previous tasks.

Below are our Dockerfiles:

`Dockerfile.build`:

```
FROM msaraiva/elixir-gcc
RUN apk add postgresql-client erlang-xmerl erlang-tools --no-cache
WORKDIR /build
ADD . /build
CMD mix deps.get
```

This image is used to create a container for run tests and style checks.

`Dockerfile`:

```dockerfile
FROM alpine:edge
RUN apk — update add postgresql-client erlang erlang-sasl erlang-crypto erlang-syntax-tools && rm -rf /var/cache/apk/*
ENV APP_NAME project
ENV PORT 4000
RUN mkdir -p /app
COPY $APP_NAME.tar.gz /app/
WORKDIR /app
RUN tar -zxvf $APP_NAME.tar.gz
EXPOSE $PORT
CMD trap exit TERM; /app/bin/$APP_NAME foreground & wait
```

This Dockerfile is used to build an actual image with Elixir release.

## Existing problems

- Now we don’t use erlang hot upgrade feature;
- We don’t test if release is correctly starting, now we are testing it manually and locally;
- Every container uses it’s own epmd and intercommunication between services now made using rest apis and I’m working on integration of [Erlang-In-Docker approach][approach] to use native erlang messaging between services.


## What’s next?

I have a plan to write and publish several articles about our release pipeline, to answer the following questions:

- How do we compile and publish assets?
- How do we run our database migrations, since mix tasks aren’t available from release image?
- What problems are we faced during implementation of this pipeline, and what solutions we found.

Thanks for reading!

----

This article was [originally published][post] by Alexander Malaev himself.
{: .note}


[approach]: https://github.com/Random-Liu/Erlang-In-Docker
[post]: https://medium.com/@spscream/building-an-elixir-release-into-docker-image-using-gitlab-ci-part-1-790edca45ac1#.uq1fwin6r
[post-env]: http://carlo-colombo.github.io/2016/05/04/The-3-E-Elixir-Exrm-and-Environment-Variables/

<!-- new links -->

[gitlab ci]: /gitlab-ci/
[gitlab]: /
[registry]: /2016/05/23/gitlab-container-registry/
[runner]: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner