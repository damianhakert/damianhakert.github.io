---
title: "Feature Highlight: Cycle Analytics"
author: Amara Nwaigwe
author twitter: its_amaracle
categories: GitLab
image_title: '/images/blogimages/cycle-analytics-feature-highlight-cover.png'
twitter_image: '/images/tweets/gitlab-cycle-analytics.png'
description: "See how GitLab's Cycle Analytics can help measure your team's velocity."
---

On September 22nd, we will release GitLab 8.12 with [Cycle Analytics](/solutions/cycle-analytics/). Cycle Analytics tells you how long
it takes your team to go [from idea to production][idea-production] on each of their projects.

Few teams can answer how long 
their software projects take and fewer can answer how long each stage in the process takes. Without this information,
you do your best to estimate the time or level of effort that it will take to get from an idea to customer-ready code.

Unfortunately, most teams are flying blind on their estimates using past experiences and best 
guesses to offer a semblance of how long it’ll take to complete a project. It’s no wonder
[why estimates are often incorrect](http://www.innoarchitech.com/why-software-development-time-estimation-does-not-work-
alternative-approaches/).

We built Cycle Analytics to stop blind estimation and instead show you 
real data on your team’s velocity. You'll see how long the total process takes as well as how much time you spend in each stage.

<!-- more -->

## Why Cycle Analytics recap

Last week, we wrote a "feature preview" post about [what Cycle Analytics is and how it can help your team](/2016/09/16/feature-preview-introducing-cycle-analytics/). The TL;DR takeaway from 
that post was: **reducing cycle time is a competitive advantage**. Cycle Analytics helps you uncover how long it actually takes to complete your process. 
Having a shared view on the team's velocity is the first stage to improving it. 

## Measuring the modern development lifecycle 

![FROM IDEA TO PRODUCTION IN 10 STEPS](/images/blogimages/idea-to-production-10-steps.png)

Cycle Analytics tracks the [median](https://www.mathsisfun.com/definitions/median.html) time it takes your team to complete every stage in the modern development process.

{::options parse_block_html="true" /}

<div class="panel panel-gitlab-purple">
**Cycle Analytics Stages** 
{: .panel-heading}
<div class="panel-body">
\- **Issue** (Tracker)
  - Median time from creating an issue to assigning the issue to a milestone or adding the issue to a list on your Issue Board 

\- **Plan** (Board)
  - Median time from giving an issue a milestone or adding it to an Issue Board list to the pushing first commit

\- **Code** (IDE)
  - Median time from the first commit to creating the merge request

\- **Test** (CI)
  - Total test time for all commits/merges

\- **Review** (Merge Request)
  - Median time from creating the merge request creation to merging it 

\- **Staging** (Continuous Deployment)
  - Median time from MR merge until deploy to production 

\- **Production** (Total)
  - Sum of the above excluding Test (CI) time
</div>
</div>

**Note:** This the first iteration of Cycle Analytics. As you know, we ship the first iteration of value and then we learn from your feedback and continue to improve the feature over time. We have ideas about what we will build next for Cycle Analytics but we'd love to hear your thoughts. You can follow and contribute to the discussion on [this issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/20975).
{: .note}

## Cycle Analytics follows GitLab Workflow 

In the recent months, we talked a lot about [our vision](https://about.gitlab.com/direction/#vision) around being an integrated set of tools for the full software development lifecycle. Cycle Analytics is another testament to the benefits of having an integrated toolset.
The reason we are able to measure cycle time is because GitLab has one data store with metrics on your development process. Now with Cycle Analytics we're able to surface that data.
However, it's important to note that Cycle Analytics tracks cycle time based on the [GitLab Workflow](http://doc.gitlab.com/ee/workflow/gitlab_flow.html). Therefore, there are some noteworthy dependencies.

<div class="panel panel-gitlab">
**Cycle Analytics & GitLab Workflow** 
{: .panel-heading}
<div class="panel-body">
- Cycle Analytics is a measure of how long it takes the team to complete the cycle. Therefore, we only track cycle time on issues that have been **deployed to production.**
- Cycle Analytics uses your GitLab CI configuration file to understand which [`environment` is set to `production`](https://docs.gitlab.com/ee/ci/environments.html#sts=Introduction). For Cycle Analytics to track your cycle time, you'll need to [configure GitLab CI](https://docs.gitlab.com/ce/ci/quick_start/README.html).
- The Plan stage measures the time from assigning an issue to a milestone or moving it to a list on the Issue Board to pushing the first commit. For Cycle Analytics to track this time you’ll need to add the tag `closes #xxx`, where `xxx` is the issue number related to this commit.
- The **Code** stage measures the time between pushing the first commit and creating a merge request (MR) related to that commit. For Cycle Analytics to track this, you’ll need to [add the tag `closes/fixes #xxx`](https://docs.gitlab.com/ce/workflow/gitlab_flow.html#linking-and-closing-issues-from-merge-requests) to the description of the MR. 
</div>
</div>

We recognize that every team does not follow the same flow. And while GitLab is a flexible product, we are also building an opinionated product that’s aimed at helping you move faster from idea to production. Our CEO, Sid Sijbrandij, shared his thoughts on [GitLab Workflow best practices](/2016/07/27/the-11-rules-of-gitlab-flow/). We hope that they help simplify your workflow within GitLab. 

## Getting started

On September 22nd, [Cycle Analytics](/solutions/cycle-analytics/) will be available in GitLab.com, GitLab Community Edition, and GitLab Enterprise Edition. Getting started is the same in all three products. All you have to do is navigate to your Project’s **Pipelines** tab and then select **Cycle Analytics** to see your project's dashboard.

Keep in mind that if you're working in a new project and you haven't deployed anything to production then you won't see any data on your Cycle Analytics dashboard. 

## Join our Release Webcast

Join us on September 29th for our Cycle Analytics and GitLab 8.12 Release Webcast. We'll demo some exciting new features and hold a Q&A. [Register here][webcast-registration].

<!-- identifiers -->

[idea-production]: https://about.gitlab.com/2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/#from-idea-to-production-with-gitlab
[webcast-registration]: https://Page.gitlab.com/20160922_CycleAnalyticsWebcast.html

<!-- custom styles -->


<style>
.panel-gitlab {
  border-color: rgba(252,163,38,.3);
}
.panel-gitlab > .panel-heading {
  color: rgb(226,67,41);
  background-color: rgba(252,163,38,.3);
  border-color: rgba(252,163,38,.3);
}
.panel-gitlab-purple {
  border-color: rgba(107,79,187,.3);
}
.panel-gitlab-purple > .panel-heading {
  color: rgb(107,79,187);
  background-color: rgba(107,79,187,.3);
  border-color: rgba(107,79,187,.3);
}
</style>
