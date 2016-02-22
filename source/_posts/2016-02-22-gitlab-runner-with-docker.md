---
layout: post
title: "Setting up GitLab Runner For Continuous Integration"
date: 2016-02-22
comments: true
categories:
author: Ahmet Kizilay
author_twitter: ahmetkizilay

---

  There are many cloud-based Continuous Integration providers out there and most of them generously offer free plans for open-source projects. While this is great for the open-source community, paid plans can get a little bit too expensive for small start-ups that would prefer to keep their source code private. In such an ecosystem, GitLab stands out as a viable option with unlimited private repositories and its GitLab Runner, free and open-source tool to automate the testing and building of projects hosted on GitLab.com, thus giving software developers the freedom to experiment with different approaches to build the optimal pipeline for their needs.

  This tutorial will demonstrate how to get started with a CI workflow using [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner). We will first setup a sample NodeJS project hosted on Gitlab.com to run tests on Shared Runners, general-purpose server instances provided by GitLab. Then, we will setup and configure our own specific runner on a private server. Then we will go over some good practices to speed up the build time as the project grows. By the end of this tutorial you will feel comfortable rolling out your own CI solution custom-tailored for your existing projects. This post will be useful for project managers looking for affordable Continuous Integration solutions and developers wanting to build test-driven and sustainable software projects.
  <!-- more -->
  <br/>
### Introducing the sample project

  Before we start with the GitLab Runner, let's briefly review this simple [NodeJS project](https://gitlab.com/ahmetkizilay/test-nodejs-project/) we will work with throughout this tutorial. Our project contains two independent modules we would like to test. One module consists of some utility methods for asynchronous operations. The other module implements a simple wrapper around PostgreSQL database to insert and retrieve records. Thanks to the latter module, we will need a database instance in our testing environment to run the tests.

  We already have some tests that we can run locally. After starting a test database, we can run the tests locally and see all tests pass.

  ```
  DB_USER=<> \
  BD_PASS=<> \
  DB_HOST=<> \
  node ./specs/start.js
  ```

  Feel free to explore the project [source code](https://gitlab.com/ahmetkizilay/test-nodejs-project/tree/master) if you are interested.
  <br/>

### Getting Started with GitLab Runner

  GitLab Runner is triggered with every push to the central repository if `.gitlab-ci.yml` file is present (unless explicitly requested not to). This yml file specifies how the build environment should be set up and what commands to be executed to build, test and deploy our project in a series of jobs that can be parallelized. In this tutorial, we will be using GitLab Runner's in-built `docker executor` to set up the build environment. This executor provides a powerful abstraction that uses Docker in the background to load our app and run the tests in a container. In addition, this executor conveniently starts any dependent services, ie. databases, before running jobs and links containers to communicate with each other.

### Creating .gitlab-ci.yml file
  We will add our .gitlab-ci.yml file to the root directory of our project.

  ```
  image: node:4.2.2

  services:
    - postgres:9.5.0

  variables:
    POSTGRES_USER: $DB_USER
    POSTGRES_PASSWORD: $DB_PASS

  all_tests:
    script:
     - npm install
     - node ./specs/start.js
  ```

  Now let's go over the parts of this file.

  The first line specifies the base image against which our tests will run. Since we are testing a NodeJS app, our base image image will be a recent NodeJS version.

  Services is where external dependencies are listed. In our tests, we need a PostgreSQL database, so we add the image name for this database. Any Docker image name can be specified here, such as mysql for MySQL databases. When the database starts it will be available to the NodeJS app under the host name `postgres` on the default PostgreSQL port, 5432.

  The variables section specifies the environment variables to be passed to the containers. `POSTGRES_USER` and `POSTGRES_PASSWORD` are two variables recognized by the PostgreSQL image to set the database user and the password on start up. Values for these variables are set in Secure Variables page (Settings -> Secure Variables) where we can store sensitive passwords and tokens for our project as environment variables without revealing them in commits or build logs.

  In the final section, we define a job named `all_tests`, which contains the command that will run our tests. In the script section we simply add our commands to install the dependencies and start the tests.

  To be extra cautious, we could lint-check our yml file on [GitLab CI Lint page](https://gitlab.com/ci/lint) to see the break down of the build steps make sure we don't have a typo.

### Using Shared Runners
  GitLab provides a number of servers with GitLab Runner installed. On Runners page (Settings -> Runners), we can see the list of currently available runners. We should see that Shared Runners are already available for us, so we can immediately queue our first build by simply pushing our gitlab-ci.yml file to our repository. We can track the progress of our build on the [Builds page](https://gitlab.com/ahmetkizilay/test-nodejs-project/builds). Once our build starts, we should see that it completes with success in a couple of minutes.

### Installing a Specific Runner
  While these Shared Runners are great to get a sense of how to get started with CI, we will now install GitLab Runner on a private server to run exclusively for our project. We will use exactly the same [open-source software](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner) GitLab users on their Shared Runners, so we will have the extra benefit of optimizing and securing our builds for our specific project.

  We will need a server instance where we will install the GitLab Runner. GitLab Runner can be installed on [Linux](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/docs/install/linux-repository.md), [OSX](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/docs/install/osx.md) and [Windows](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/docs/install/windows.md). For our sample project, a small server instance with 1 GB RAM should be enough. In addition, since we will be running with the docker executor, we also need to have [Docker Engine](https://docs.docker.com/engine/installation/) installed.

  Upon installation, we will register a new runner for our project. Start the registration with the following command.

  ```
  gitlab-ci-multi-runner register
  ```

  The registration will walk us through a few steps to configure our runner.

  ```
  Running in system-mode.                            

  Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com/ci):
  https://gitlab.com/ci
  ```

  Since our project is hosted on Gitlab.com, we will use the default gitlab-ci coordinator URL.

  ```
  Please enter the gitlab-ci token for this runner:
  8tB1zBiUVuqjy9isxjcK
  ```

  Go to Runners page again (Settings -> Runners) to copy the gitlab-ci token and paste it here.

  ```
  Please enter the gitlab-ci description for this runner:
  [ubuntu-2gb-nyc3-01]: new-docker-executor
  Please enter the gitlab-ci tags for this runner (comma separated):
  node, postgres
  Registering runner... succeeded                     runner=8tB1zBiU
  ```

  It is a good practice to give descriptive name and tags for runners to be able to remember and target them later on. So we will choose `node` and `postreg`.

  ```
  Please enter the executor: virtualbox, ssh, shell, parallels, docker, docker-ssh:
  docker
  Please enter the default Docker image (eg. ruby:2.1):
  node:4.2.2
  Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded!
  ```

  Notice that there are several executor options available. In this post, we are using the docker executor. Remember from the gitlab-ci.yml file, our base image is node:4.2.2.

  Finally, we will disable the Shared Runners as we won't need them any more. On the Runners page (Settings -> Runners), toggle off the Shared Runners button. Now we can trigger a new build. We should see the build running with our specific runner on our private server.


### Enabling cache

  Now that we have a functional Continuous Integration workflow, let's talk about how to make it faster and more efficient.

  To start, we can eliminate redundant downloading of dependency libraries by caching and restoring dependencies between builds. For NodeJS projects, dependent libraries are installed in a folder called `node_modules`. We should specify this folder to cache in our gitlab-ci.yml file.

  ```
  ...

  cache:
    paths:
    - node_modules/

  all_tests:
    script:
     - npm install
     - node ./specs/start.js
  ```

  After a successful build, you should see `node_modules` folder is archived at the end of builds to be restored at the beginning of following builds. As long as our dependencies file remains unchanged, no new libraries will be downloaded and our total build time will significantly decrease.

### Adding concurrency

  Another modification we can add to speed up the build process is to parallelize the tests. In our project, we can split the tests into two jobs. One for the database tests and another for the async module tests. Furthermore, we can restrict the PostgreSQL service to run only for our database job since we won't need a database for the async module.

  ```
  ...
  test_async:
    script:
     - npm install
     - node ./specs/start.js ./specs/async.spec.js

  test_db:
    services:
      - postgres:9.5.0
    script:
     - npm install
     - node ./specs/start.js ./specs/db-postgres.spec.js
  ```

  Note that we still need to introduce concurrency to the build. To do that we could either create a new server and register a runner for our project, or increase the concurrency level for our existing runner. We will go with the latter and edit the `concurrent` setting on the first line of our config.toml file in the server.

  ```
  concurrent = 2
  ```

  After restarting the runner and triggering a build, we can see two jobs running at the same time.

### Conclusion

  In this tutorial, we set up automated testing with GitLab Runner for a NodeJS project to get started with Continuous Integration on GitLab. Check out the [documentation](http://doc.gitlab.com/ce/ci/) for more information on how to work with the GitLab CI platform. Happy coding!
