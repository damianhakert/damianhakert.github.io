---
layout: post
title: Security advisory for multiple Rails vulnerabilities
date: 2016-01-26
comments: true
author: Marin Jankovski
author_twitter: maxlazio
---

Rails team has [recently announced 9 possible security vulnerabilities](http://weblog.rubyonrails.org/2016/1/25/Rails-5-0-0-beta1-1-4-2-5-1-4-1-14-1-3-2-22-1-and-rails-html-sanitizer-1-0-3-have-been-released/).

GitLab is built using Rails framework. This means
that some of these Rails vulnerabilities could potentially
be exploitable in GitLab.

We have [released GitLab 8.4.1](https://about.gitlab.com/2016/01/26/gitlab-8-dot-4-dot-1-released) to address these
vulnerabilities.

Given the number of affected Rails versions, all
GitLab versions prior to 8.4.1 are potentially vulnerable.

We urge you to upgrade to 8.4.1 to prevent possible issues.
