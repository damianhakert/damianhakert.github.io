---
layout: post
title: "GitLab 7.13 released with a Customizable Project Dashboard and even better Approvals"
date: 2015-07-22
comments: true
categories:
author: GitLab
author_twitter: gitlab
filename: 2015-07-22-gitlab-7-13-released.markdown
image_title: /images/7_X/PICTURE.PNG
---

It's July and time for GitLab 7.13!
For most of us a warm month, but luckily that hasn't slowed us down.
First, [we raised a seed round](https://about.gitlab.com/2015/07/09/1.5M-raised-in-seed-funding-for-gitlab-to-accelerate-growth-and-expand-operations/) and now we bring you
a customizable Project Dashboard, better merge request approvals, a number
of GitLab CI improvements (Docker support!) and more!

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is Stan Hu. He contributed support for commenting on side-by-side diffs.
This is the third time this year that Stan Hu is MVP, a GitLab hat-trick.
Thanks Stan, we're happy to see you score more great features!

<!--more-->

## Customizable Project Dashboard

We've gotten a lot of requests to make the README the default page of
projects in GitLab. At the same time, many of our contributors hated
this idea. They just wanted to see what is happening, not the same README.

We kept redesigning it, looking for a great middle ground.
We gave up. The choice is yours now.

Want to see the README first? You can!

![]()

Rather see the activity in a project? Go ahead!

![]()

Change it in the settings, alongside the choice for either seeing the starred
projects or all projects on the home page.

![]()

## Comment on Side-by-Side diffs

You can now place comments on side-by-side diffs.

![]()

## Image and services names in yml that can be used with docker (GitLab CI)

It makes GitLab CI extremely flexible and powerfull.

The image is the name of any repository that is present in local Docker Engine or any repository that can be found at [Docker Hub](https://registry.hub.docker.com/).
For more information about the image and Docker Hub please read the [Docker Fundamentals](https://docs.docker.com/introduction/understanding-docker/).

Service is just another image that is run for time of your build and is linked to your build. This allows you to access the service container during the build. The service image can run any application, but most common use case is to run some database container, ie.: postgres. It's easier and faster to use existing image, run it as additional container than install postgres every time your project is built. Here is an example of how to use image and services options in .gitlab-ci.yml file:

```
image: ruby:2.2
services:
  - postgres:9.3
before_install:
  - bundle install

test:
  script:
  - bundle exec rake spec
```

You can read more information in [Docker integration](http://doc.gitlab.com/ci/builds_configuration/docker.html).


## allow_failure option for job (GitLab CI)

It allows to ignore status of specific build when computing status for commit. Example .gitlab-ci.yml file:

```
rspec:
  script: bundle exec rspec
  allow_failure: true
```


## Cancel all builds in commit at once (GitLab CI)

If you have a lot of builds in commit it is very convenient to have ability to cancel all builds at once. Earlier you had to cancel
each build separately.

[![screenshot](/images/7_13/feature.png)](/images/7_13/feature.png) ***7_13 is the version of GitLab being released***

## runner

there are mostly security related features, renaming gitlab-ci-multi-runner to gitlab-runner, colorised build log (the screenshot is on #development and the effect you can see on any CI build), the new docker features requires 0.5.0

## Flexible build types (GitLab CI)

From now on you can define multiple build types in `.gitlab-ci.yml`. That allows to define behaviour and ordering of builds execution:

```
types:
  - build
  - test
  - deploy

rspec:
  type: test
  script: bundle exec rspec
```

This will execute first all jobs with type `build`, then `test` and at the end `deploy`.
The next builds are executed only if all previous succeeds.
To speed-up building all jobs for one type will be run in parallel.

This is the first step to have flexible and powerful build pipeline in CI with support for multiple different stages.

TODO: add link to documentation

## Runners without tags (GitLab CI)

GitLab CI builds and runners can be tagged. This allows you to do things like running different builds on different platforms: some on Linux, some on Windows. GitLab CI 7.12 and earlier would send tagged builds to runners without tags. Now, runners without tags will pick only builds that don't have tags assigned. This is breaking change to 7.12. If some of your builds stop running after upgrade to 7.13, make sure that runners have tags assigned as well as builds.

## Other changes

This release has more improvements, including security fixes, please check out [the CE Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG), [the EE Changelog](https://gitlab.com/gitlab-org/gitlab-ee/blob/master/CHANGELOG-EE) or [the CI Changelog](https://gitlab.com/gitlab-org/gitlab-ci/blob/master/CHANGELOG) to see the all named changes.


## Upgrade barometer

This release upgrade will require downtime.

Coming from 7.12 the database migrations in GitLab and GitLab CI will be fast but they cannot be performed online.

### Important notice for GitLab CI installations

- GitLab CI now uses symmetric encryption to share 'secure variables'
 (provided by your users) in the SQL database
- this encryption needs a secret key. gitlab ci will generate a key for you
 when you install 7.13, it is called 'db_key_base' and can be found in
  /etc/gitlab/gitlab-secrets.json (omnibus) or config/secrets.yml
   (installations from source)
- if you lose this secret key during a backup restore or a server migration,
 your users will lose their 'secure variables'
- don't store the secret key in the same place as your database backups. if
 you do, somebody who steals your backup also gets your users' secure
  variables.
- if you use configuration management (chef, puppet etc.) you will probably
 want to (securely) store the secret key in your configuration management
  system so that your CI server uses the correct DB secret key after a server
   rebuild


### Changed default location of database socket for Omnibus packages

By default, PostgreSQL places the unix socket file inside of the `/tmp` directory.
Prior to 7.13, GitLab installed using omnibus-gitlab packages would use PostgreSQL default socket location to connect to the database.
This has caused issues when installing GitLab using omnibus-gitlab packages if there is an existing PostgreSQL database.

Given the goal of omnibus-gitlab package to be self contained and not influenced by existing software we've moved the socket location to `/var/opt/gitlab/postgresql`.

If you had previously set `db_host` setting in `/etc/gitlab/gitlab.rb` explicitly for `gitlab_rails` or `gitlab_ci`, be aware that this will possibly require a change. For example, if you had

```ruby
gitlab_rails['db_host'] = '/tmp'
```

this will need to change to

```ruby
gitlab_rails['db_host'] = '/var/opt/gitlab/postgresql'
```
- - -

## Installation

If you are setting up a new GitLab installation please see the
[download GitLab page](https://www.gitlab.com/installation/).

## Updating

Check out our [update page](https://about.gitlab.com/update/).


## Enterprise Edition

The mentioned EE only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles you to our upgrade and installation services.

- - -
