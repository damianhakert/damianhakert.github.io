---
layout: post
title: "GitLab 7.13 released with improved project home page"
date: 2015-07-22
comments: true
categories:
author: Valery Sizov
filename: 2015-07-22-gitlab-7-13-released.markdown
image_title: /images/7_X/PICTURE.PNG
---

Today we announce the release of a new version of GitLab Community Edition (CE) and GitLab Enterprise Edition (EE), with new features, usability and performance improvements, and bug fixes.
The biggest new features in Community Edition are improved page home page, now it looks nicer.
In addition to the updates from Community Edition, we fixed some issue in GitLab Enterprise Edition as well.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is Stan Hu, he contributed support for commenting on side-by-side diffs.
Thanks Stan!

<!--more-->

## Redesigned project home page(CE)

Now that we have a nicer and more introdactory project home page.

[![screenshot](/images/7_13/feature.png)](/images/7_13/feature.png) ***7_13 is the version of GitLab being released***


## Support commenting on diffs in side-by-side mode(CE)

Now you can use powerful GitLab's code review abilities in side-by-side mode.

[![screenshot](/images/7_13/feature.png)](/images/7_13/feature.png) ***7_13 is the version of GitLab being released***


## Image and services names in yml that can be used with docker (GitLab CI)

It makes GitLab CI extremely flexible and powerfull. 

The image is the name of any repository that is present in local Docker Engine or any repository that can be found at [Docker Hub](https://registry.hub.docker.com/).
For more information about the image and Docker Hub please read the [Docker Fundamentals](https://docs.docker.com/introduction/understanding-docker/).


Service is just another image that is run for time of your build and is linked to your build. This allows you to access the service image during the build.
The service image can run any application, but most common use case is to run some database container, ie.: mysql.
It's easier and faster to use existing image, run it as additional container than install mysql every time project is built. Here is an example of how to use image and services options in .gitlab-ci.yml file:

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

### Other changes

This release has more improvements, including security fixes, please check out [the CE Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG), [the EE Changelog](https://gitlab.com/gitlab-org/gitlab-ee/blob/master/CHANGELOG-EE) or [the CI Changelog](https://gitlab.com/gitlab-org/gitlab-ci/blob/master/CHANGELOG) to see the all named changes.


### Upgrade barometer

Postgres and Redis will be upgraded in omnibus. Postgres socket willbe changed too. So this release upgrade will require some downtime. 

#### Changed default location of database socket for Omnibus packages

By default, PostgreSQL places the unix socket file inside of the `/tmp` directory.
Prior to 7.13, GitLab installed using omnibus-gitlab packages would use PostgreSQL default socket location to connect to the database.
This has caused issues when installing GitLab using omnibus-gitlab packages if there is an existing PostgreSQL database.

Given the goal of omnibus-gitlab package to be self contained and not influenced by existing sofware we've moved the socket location to `/var/opt/gitlab/postgresql`.

If you had previously set `db_host` setting in `/etc/gitlab/gitlab.rb` explicity for `gitlab_rails` or `gitlab_ci`, be aware that this will possibly require a change. For example, if you had

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
