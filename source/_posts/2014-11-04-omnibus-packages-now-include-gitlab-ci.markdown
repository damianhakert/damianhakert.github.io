---
layout: post
title: "Omnibus packages now include GitLab CI"
date: 2014-11-04 14:12:18 +0100
author: Jacob Vosmaer
comments: true
categories: 
---

We are excited to announce that starting today, our Omnibus packages include
the [GitLab CI](/gitlab-ci/) Coordinator.

To start using GitLab CI on your GitLab server you need to take the following steps:
- download and install the latest Omnibus package for your platform;
- create a DNS record for GitLab CI pointing to your GitLab server, e.g. `ci.example.com`;
- add the following line to `/etc/gitlab/gitlab.rb`:

```
ci_external_url 'http://ci.example.com'
```

Then run `sudo gitlab-ctl reconfigure` and you have a CI Coordinator running on
your GitLab server, integrated with GitLab!

<!-- more -->

## Under the hood

Running GitLab CI in the standard configuration (2 Unicorn workers) will
require about 500MB of RAM.

By bundling the GitLab CI Coordinator into the Omnibus packages we are able to
reuse the bundled Ruby, Postgres, NGINX and Redis, as well as the `gitlab-ctl`
utility. Because of all this reuse of available components, GitLab CI is adding
only about 20MB of data to the package downloads. If you are not using GitLab
CI you will not notice that it is there.
