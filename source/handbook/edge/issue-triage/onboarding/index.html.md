---
layout: markdown_page
title: "Issue Triage Specialist Onboarding"
---

## On this page
{:.no_toc}

- TOC
{:toc}

----

## Expectations of the Issue Triaging team
{: #expectations}

Issue Triage Specialists have several reponsibilities that include both Support and Development based activities.

### Community Support

The Community Support side of the Issue Triage Specialist role involves analysing issues posted to our various Issue Trackers and determining their validity and importance. 80% of your time will be spent triaging issue reported by the Community and your fellow Team Members.

This facet to the role will also include digging into the various GitLab product's codebases to thoroughly understand a the root cause to a problem to deliver a workaround, report the problem accurately to the correct team or provide a fix.

It's important to have a good knowledge of the product and its features when responding to community queries.

### Development

The Development side of the Issue Triage Specialist role is varied. Around 20% of your time should be spent delivering fixes to Community reported bugs and feature proposals.

## Onboarding Checklist

This onboarding checklist aims to provide all of the information that you will require to carry out the above activities efficiently and become a fully fledged Issue Triage Specialist.

```

#### Stage 1 - Issue Triage

##### Goals

* Understand where to look for Issues to triage
* Understand the various labels to apply to issues
* Understand how to communicate issues effectively to other team members

##### Finding Issues

Issue Triage Specialists are expected to triage all issues posted to the Issue Trackers of Projects within the [GitLab-Org group](https://gitlab.com/gitlab-org/) and the [GitLab.com Support Tracker](https://gitlab.com/gitlab-com/support-forum/) on GitLab.com.

##### Checklist

- [ ] Explore the various projects that are available and understand their differences
- [ ] Explore the issue trackers of these projects and find out which are experiencing the most activity

##### Triaging and Communicating Issues

Labels are the most important feature within the GitLab product for categorising and organising issues. Labelling issues correctly will ensure that they are viewed by the correct team members and can be located at a later date.

Issue Triage Specialists main aim should be to label each and every issue reported to the issue trackers. Each label applied will notify the label's subscribers of the new issue, so that they can be investigated by interested team or community members

A rule of thumb for labelling each individual issue is that the issue should contain the following labels:

 * One category label
 * One or more team labels
 * One or more feature labels

###### Category Labels

Category labels will separate issues into one of several categories that each issue should fall into.

These include:

* Bug
* Feature Proposal
* Support Request - An issue that doesn't fall into the two above categories and is a community member searching for help with a particular issue

###### Team Labels

Team members are expected to subscribe to (at least) their own team's labels. Applying a team label informs the whole team of a new issue relevant to their features.

These include:

* UX
* CI
* Frontend
* Build
* Platform
* Discussion

###### Feature Labels

Feature labels should be subscribed to by experts of that particular domain. Applying a feature label informs domain experts of a new issue relevant to their features.

These include:

* merge requests
* issue boards
* code review
* many, many others

##### Checklist

- [ ] Explore the existing issues and notice the labels that have been applied
- [ ] Explore and understand the labels that are available for each project. Start with the [GitLab-CE project's labels](https://gitlab.com/gitlab-org/gitlab-ce/labels)
- [ ] Explore the Teams in the [handbook](https://about.gitlab.com/handbook/engineering/)
- [ ] Explore the domain experts listed on the [team page](https://about.gitlab.com/team/)

----

#### Stage 2 - Prepare for Community Support

##### Goals

* Gain sufficient Product Knowledge to provide Community Support
* Prepare your own Environments for replicating and debugging Community Issues
* Understand where to find documentation and answers
* Understand the tools that are at our disposal

##### Learning the Ways

Issue Triage Specialists need a solid understanding of the main features of the GitLab products to respond to and triage Community posted issues.

Some issues may just require some inside knowledge to explain a feature or a link to the documentation. Some issues may require that an issue be reproduced in an isolated environment to confirm the existence (or non-existence) of a reported bug. Some issues may require a deeper understanding of a particular feature set to properly grasp a proposed feature request.

Diagnosing issues facing GitLab.com users is aided greatly by a good knowledge of the tools that we have at our disposal. We use [Sentry](https://sentry.gitlap.com) for error tracking and [Kibana](https://log.gitlap.com) for logging.

##### Checklist

- [ ] Complete the [Service Engineer onboarding Checklist](https://about.gitlab.com/handbook/support/onboarding/checklist/) to gain knowledge of the products from installation to general and more advanced usage
- [ ] Complete the [Service Engineer steps to get your own environment](https://about.gitlab.com/handbook/support/onboarding/checklist/) in which to replicate issues and manage your own instance just like our customers do
- [ ] Dig in to [the GitLab knowledge base](https://docs.gitlab.com) and understand where to dig for more information regarding features and the API
- [ ] Gain familiarity with [Sentry](https://sentry.gitlap.com) and [Kibana](https://log.gitlap.com) for diagnosing production facing issues on GitLab.com

----

#### Stage 3 - Ship for first bug fix

##### Goals

* Understand the Development process for contributing to GitLab
* Understand the Contributing guidelines for GitLab

##### Development

Issue Triage Specialists are expected to ship bug fixes whenever they can, in response to Community reported issues.

##### Checklist

- [ ] Become comfortable with the concepts and principles outlined in the  [Engineering Workflow](https://about.gitlab.com/handbook/engineering/workflow/)
- [ ] Find an existing ~bug issue to work on in the [GitLab-CE issue tracker bug list](https://gitlab.com/gitlab-org/gitlab-ce/issues?scope=all&state=opened&utf8=%E2%9C%93&label_name%5B%5D=bug)
- [ ] Follow the [contributing guidelines](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md) and get your bug fix merged!

```
