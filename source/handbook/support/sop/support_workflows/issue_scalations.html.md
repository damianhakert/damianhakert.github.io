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

# Issue Escalations

Escalating GitLab issues correctly is an important part of providing quick and
accurate customer support. The support team uses the processes below when
dealing with GitLab customer issues.

+ [Issue Prioritization](#issue-prioritization)
+ [Functional escalation points](#Functional-escalation-points)
+ [Operational escalation points](#Operational-escalation-points)
   + [Notes](#Notes)
+ [Information Gathering](#Information-Gathering)

When reporting a bug/regression or feature proposal, use the appropriate project
issue template. For example, `gitlab-ce` project has 'Bug' and 'Feature Proposal'
templates.

Always add labels to the issues. Use either `~bug` or `~feature proposal` and
also add `~customer`. For certain premium subscribers, you may need to use
`~customer+`. If there are one or more component labels that are appropriate,
such as `~ldap`, add those, too.

See [Information Gathering](#Information-Gathering) for *Application and environment information* section

## Prioritization

In general, the development team will prioritize all issues
(not just customer requests) in the following order:

1. Regressions
1. Bugs
1. Direction/Vision
1. Feature Proposal

### Regressions

A regression is something that used to work one way in the last release and
then we made a **breaking change** and it no longer works the same way. We
aim to fix regressions in patch releases, when possible. However, not all
regressions are created equal - we will work to patch the high-impact ones
first.

For all regressions, add the `~regression` label. For high-impact regressions,
also add `~"Next Patch Release"` and add the **current** development milestone.
The **current** development milestone is the release coming up in the current
month. This can be confusing because the regression may be for 8.15, and should
be fixed in an 8.15 patch release. However, the developers are working in the
8.16 milestone, so the regression should be assigned there for attention.

### Bugs and Feature Proposals

By default, do not add any priority label to bugs and feature proposals. This
will put the request in the 'backlog' at a normal priority level. This does not
mean it will be ignored, but it means it is not high-impact.

If the bug or feature proposal is particularly high impact, use the support
priority labels to assign an initial priority. The labels are `~SP1`, `~SP2`,
and `~SP3`, where `SP1` is the highest priority. These labels are applied
in addition to the `~bug`, `~feature proposal` and `~customer` labels. Use
priority labels sparingly - we have limited development resources.

Before the next release, the scheduling team will review the support priorities
and will choose the top few to mark as deliverable. Issues are not scheduled
for a particular release unless the scheduling team adds them to a milestone
*and* they are assigned to a developer. We aim to be realistic about scheduled
deliverables and will avoid scheduling issues that cannot be delivered in a
given release.

> **Note about feature proposals:** GitLab has limited development resources.
  Additionally, we must think about how widely applicable a feature may be to
  other users. Requests that are very specific to one company's workflow are
  likely to be rejected. Even if a feature seems widely applicable, we may
  leave the feature proposal dormant for some time and see if other users
  and customers chime in that they are also interested. Features that garner
  interest from multiple organizations will be considered more rapidly. Of
  course, there are always exceptions to these 'rules'. This note is meant to
  set the expectation that feature proposals may not be implemented quickly.

### General guidelines for choosing a priority label

- **Urgency:** Does this break all GitLab functionally or just a small part?
    SP1 (High) - A large part, or a fundamental part
    SP2 (Medium)
    SP3 (Low) - Only a small part
- **Impact:** How many users does this impact?
    SP1 (High) - Many users
    SP2 (Medium)
    SP3 (Low) - Limited number of users

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
| GitLab Support        | Any and all questions in relation to providing customer service for GitLab users and customers. | https://gitlab.com/gitlab-com/support/issues/new        | Production Lead/Senior Production Engineer

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
