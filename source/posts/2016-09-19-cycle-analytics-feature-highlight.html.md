---
title: "Feature Highlight: Cycle Analytics"
author: Amara Nwaigwe
author_twitter: its_amaracle
categories: GitLab
image_title: 
description: "See how GitLab's Cycle Analytics can help measure your team's velocity."
---

In a couple days, we will release GitLab 8.12 with Cycle Analytics. Cycle Analytics reports the average time
it takes your team to go from idea to production on each of their projects. Few teams can answer how long 
their software projects take and fewer can answer how long each step in the process takes. When we don’t 
know, we are forced to estimate the time or level of effort that it will take to get an idea into customer-
ready code. Unfortunately, most teams are flying blind on their estimates using past experiences or best 
guesses to offer a semblance of how long it’ll take to complete a project. It’s no wonder [why estimates are often incorrect](http://www.innoarchitech.com/why-software-development-time-estimation-does-not-work-
alternative-approaches/). We built Cycle Analytics to help you stop blind estimation and instead offers you 
real data on your team’s velocity. Let’s take a closer look at how Cycle Analytics actually works.

<!-- more -->

## Why Cycle Analytics recap

Last week, we wrote a "feature preview” post about [what Cycle Analytics is and how they can help your team](https://about.gitlab.com/2016/09/16/feature-preview-introducing-cycle-analytics/). The TL;DR takeaway from 
that post was: reducing cycle time is the competitive advantage of the future. Cycle Analytics enables you 
to reduce your cycle time by reporting real data on your team's velocity and helping you pinpoint which 
steps in the modern development cycle are slowing the team down.

## Measuring the modern development lifecycle 

![FROM IDEA TO PRODUCTION IN 10 STEPS](/images/blogimages/idea-to-production-10-steps.png)

Cycle analytics tracks the median time between idea to production. It is a multi-step process from idea to production. Cycle Analytics reports the completion time for each step in the process.

- **Issue** (Tracker)
    - Median time from issue creation until given a milestone or list label (first assignment, any milestone, milestone date or assignee is not required)
- **Plan** (Board)
    - Median time from giving an issue a milestone or label until the pushing first commit
- **Code** (IDE)
    - Median time from first commit until the merge request is created (this might exclude coding time if you use WIP, so be it)
- **Test** (CI)
    - Total test time for all commits/merges
- **Review** (Merge Request/MR)
    - Median time from merge request creation until MR merged (closed MR's won't be deployed)
- **Staging** (Continuous Deployment)
    - Median time from MR merge until deploy to production (production is last stage/environment)
- Production (Total)
    - Sum of the above excluding Test (CI) time

_This the first iteration of Cycle Analytics so we will not be shipping a Chat ops integration in this release. If you want to learn more about our vision for Cycle Analytics, follow the discussion on [this issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/20975)._

## Cycle Analytics follows GitLab Workflow 

It’s important to note that Cycle Analytics measures the time it takes to complete each step based on we've defined the [GitLab Workflow](http://doc.gitlab.com/ee/workflow/gitlab_flow.html). That means for the plan, code, and staging steps there are specific actions your team needs to take be able to track their cycle time. 

* The Plan stage measures the median time giving an issue a milestone or label until pushing the first commit. For Cycle Analytics to track this change you’ll need to add the tag `closes #xxx`, where `xxx` is the issue number related to this commit.
* The Code stage measures the time between pushing the first commit and creating a merge request (MR) related to that commit. For Cycle Analytics to track this, you’ll need to add the tag `closes/fixes #xxx` to the description of the MR. 
* The Staging stage measures the time between merging the MR until the time the app is deployed to production. It's tracked by the `environment` set to `production` in your GitLab CI configuration. For Cycle Analytics to track this you'll need to [configure CI](https://docs.gitlab.com/ce/ci/quick_start/README.html).

We recognize that every team does not follow the same flow. And while GitLab is a flexible product, we are also building an opinionated product that’s aimed at helping you move faster from idea to production. Our CEO, Sid Sijbrandij, shared his thoughts on [GitLab Workflow best practices](https://about.gitlab.com/2016/07/27/the-11-rules-of-gitlab-flow/) that we hope help simplify your workflow within GitLab and increase efficiency. 

## Getting started

On September 22nd, Cycle Analytics will be available in GitLab.com, GitLab Community Edition, and GitLab Enterprise Edition. Getting started is the same in all three. All you have to do is navigate to your Project’s Pipelines tab and then select Cycle Analytics to see your team's dashboard. 

If you’ve already been using GitLab for your development workflow then you should have data on your velocity right after we release this feature. There's no setup process. 

## Join our Release Webcast

Join us on September 29 for our Cycle Analytics and a GitLab 8.12 Release Webcast. We'll demo some exciting new features and hold a Q&A. [Register here][webcast-registration].

<!-- identifiers -->

[idea-production]: https://about.gitlab.com/2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/#from-idea-to-production-with-gitlab
[webcast-registration]: https://Page.gitlab.com/20160922_CycleAnalyticsWebcast.html