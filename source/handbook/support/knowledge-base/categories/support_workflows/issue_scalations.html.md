---
layout: markdown_page
title: Issue Escalations
category: Support Workflows
---

### On this page
{:.no_toc}

- TOC
{:toc}

----

## Issue Escalations

Escalating GitLab issues correctly is an important part of providing quick and accurate customer support. The support team uses the below templates and escalation points when dealing with GitLab issues. 

+ [Templates](#Templates)
  + [Bug Report](#Bug-Report)
  + [Feature Request](#Feature-Request)
+ [Functional escalation points](#Functional-escalation-points)
+ [Operational escalation points](#Operational-escalation-points)
   + [Notes](#Notes)
+ [Information Gathering](#Information-Gathering)

## Templates


### Bug Report

```
ZD: 

## Summary

## Reproduce

## Expected

## Actual

## Application and environment information

____________

Related links:  

```

Required Tags: `bug`, `customer`, `customer+` for Premium subscribers.


**Add any additional tags related to the issue reported**

See [Information Gathering](#Information-Gathering) for *Application and environment information* section

### Feature Request


```
ZD:

## Description
Include problem, use cases, benefits, and/or goals

## Proposal

____________

Related links: 
```

Required Tags: `feature proposal`, `customer`, `customer+` for Premium subscribers.

See [Information Gathering](#Information-Gathering) for *Application and environment information* section

## Functional escalation points



| Service/Product  | Escalation Types                 | Escalation Point                                        | Assignment      |
|------------------|--------------------------------|-----------------------------------------------------------|------------------
| GitLab CE        | Bug reports, Feature proposals | https://gitlab.com/gitlab-org/gitlab-ce/issues/new        |   
| GitLab EE        | Bug reports, Feature proposals | https://gitlab.com/gitlab-org/gitlab-ee/issues/new        |
| GitHost.io       | Bug reports, Feature proposals | https://gitlab.com/gitlab-com/githost/issues/new          | Maintainer of GitHost.io
| Omnibus GitLab   | Bug reports, Feature proposals | https://gitlab.com/gitlab-org/omnibus-gitlab/issues/new   | Omnibus GitLab specialist
| GitLab Runner    | Bug reports, Feature proposals | https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/new  | GitLab CI specialist
| GitLab Workhorse | Bug reports, Feature proposals | https://gitlab.com/gitlab-org/gitlab-workhorse/issues/new | Maintainer of gitlab-workhorse


**See the [GitLab team page](https://about.gitlab.com/team/) for assignments**


## Operational escalation points


| Service/Product       | Escalation Type                                                                                  | Escalation Point                                         |  Assignment      |
|-----------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------|----------------------- |
| GitLab Infrastructure | Anything related to the **running of GitLab.com**, performance, something breaks                | https://gitlab.com/gitlab-com/infrastructure/issues/new | Support Team Lead/Senior Service Engineer 
| GitLab Support        | Any and all questions in relation to providing customer service for GitLab users and customers. | https://gitlab.com/gitlab-com/support/issues/new        | Infrastructure Lead/Senior Production Engineer

**See the [GitLab team page](https://about.gitlab.com/team/) for assignments**

### Notes

#### GitLab EE

+ **Used for EE Only features.** Check https://about.gitlab.com/features/#compare


#### GitHost.io

+ GitHost project: https://dev.gitlab.org/gitlab/GitHost
+ GitHost service: <http://githost.io> 


#### Omnibus GitLab

+ Related to Omnibus GitLab packaging only. 
+ GitLab omnibus release packages: https://packages.gitlab.com/gitlab



#### GitLab Runner


+ Information on GitLab Runner
    + https://gitlab.com/gitlab-org/gitlab-ci-multi-runner#features
    +  http://docs.gitlab.com/ce/ci/runners/README.html


#### GitLab Workhorse

+ Information on GitLab Workhorse
    + https://about.gitlab.com/2016/04/12/a-brief-history-of-gitlab-workhorse/
    +  **Description** *"Gitlab-workhorse is a smart reverse proxy for GitLab. It handles "large" HTTP requests such as file downloads, file uploads, Git push/pull and Git archive downloads."*


#### GitLab Infrastructure 

+ Information on GitLab Infrastructure 
    + Slack: https://gitlab.slack.com/archives/infrastructure
    + https://about.gitlab.com/2016/04/29/look-into-gitlab-infrastructure/ (Probably outdated) 

## Information Gathering

information to gather for "Application and environment information" section.


+ Omnibus: `sudo gitlab-rake gitlab:check`

+ Source: `sudo -u git -H bundle exec rake gitlab:check RAILS_ENV=production SANITIZE=true`

________________________

+ Omnibus: `sudo gitlab-rake gitlab:env:info`

+ Source: `sudo -u git -H bundle exec rake gitlab:env:info RAILS_ENV=production`