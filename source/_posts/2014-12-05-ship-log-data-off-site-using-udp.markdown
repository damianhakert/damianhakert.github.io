---
layout: post
title: "Feature Highlight: Ship your GitLab EE Log Data Off-Site using UDP"
date: 2014-12-05
comments: true
categories:
author: Job van der Voort
---

A nice feature of GitLab Enterprise Edition (>= 7.1) is the ability to ship off your logs using UDP (Omnibus Packaged GitLab only). As opposed to TCP, UDP doesn't care about whether packets get received, it keeps sending them in a non-blocking, fire-and-forget manner. That makes UDP really fast and lightweight.

<!-- more -->

UDP log shipping is very easy to setup. You simply add the following lines to `/etc/gitlab/gitlab.rb`:

```
logging['udp_log_shipping_host'] = '1.2.3.4' # Your syslog server
logging['udp_log_shipping_port'] = 1514 # Optional, defaults to 514 (syslog)
```

And run `sudo gitlab-ctl reconfigure`. Now your logs will be shipped speedily to `1.2.3.4:1514`!

An example of what your syslog server will receive:

```
<13>Jun 26 06:33:46 ubuntu1204-test production.log: Started GET "/root/my-project/import" for 127.0.0.1 at 2014-06-26 06:33:46 -0700
<13>Jun 26 06:33:46 ubuntu1204-test production.log: Processing by ProjectsController#import as HTML
<13>Jun 26 06:33:46 ubuntu1204-test production.log: Parameters: {"id"=>"root/my-project"}
<13>Jun 26 06:33:46 ubuntu1204-test production.log: Completed 200 OK in 122ms (Views: 71.9ms | ActiveRecord: 12.2ms)
```

## About GitLab

Want to start to use UDP log shipping? Check out [GitLab Enterprise Edition](https://about.gitlab.com/features/#enterprise).
A subscription also includes support, deep LDAP integration, git hooks, Jenkins integration and many more powerful enterprise features.

You can try GitLab by [downloading](https://about.gitlab.com/downloads/) the Community Edition and installing it on your own server or by signing up to our free, umlimited GitLab instance [GitLab.com](https://gitlab.com/users/sign_up).

See our previous feature highlights:

- [Groups](https://about.gitlab.com/2014/06/30/feature-highlight-groups/)
- [Git Hooks](https://about.gitlab.com/2014/08/25/feature-highlight-git-hooks/)
- [Branded Login](https://about.gitlab.com/2014/09/02/feature-highlight-branded-login-gitlab-ee/)
- [LDAP Integration](https://about.gitlab.com/2014/07/10/feature-highlight-ldap-sync/)
