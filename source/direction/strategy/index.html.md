---
layout: markdown_page
title: "Product Strategy"
---

- TOC
{:toc}

This document outlines the product strategy and vision of GitLab. It talks about
_what_ and not _how_.

## High Level Vision

From development teams to marketing organizations, everyone needs to
collaborate on digital content. Content should be open to suggestions by a wide
number of potential contributors. Open contribution can be achieved by using a
mergeable file format and distributed version control. The vision of GitLab is
that **everyone can contribute** on all digital content so people can
cooperate effectively and achieve better results, faster.

## Product Strategy

Today you can create an entire product successfully in GitLab, from idea to production. But you still need domain-specific knowledge to be able to set this up and then maintain, monitor and scale this application.

GitLab provides an [_integrated toolset_](#integrated-toolset) for [_teams of any size_](#teams-of-any-size) with [_any kind of projects_](#any-project) to move faster from idea to production, while giving you [_actionable feedback_](#actionable-feedback), and making shipping products _simple_.

GitLab's toolset is opinionated, but still allows you to use other tools if you
like to do so. GitLab plays well with others.

### Integrated Toolset

GitLab is an integrated set of tools for conversational development. This offers a superior user experience and lowers the threshold between each step in going from idea to production.

#### Conversational Development

Conversational development carries a conversation across functional groups through the software development lifecycle, involving gatekeepers at every step. By providing relevant context, a feature that is only possible with an integrated solution like GitLab, we can reduce cycle time, making it easier to diagnose problems and make decisions.

Concretely, conversational development in GitLab means that a change can be easily followed from inception to the changes it made in performance and business metrics and feeding this information back to _all_ stakeholders _immediately_.

Effectively, this allows cross-functional teams to collaborate effectively.

#### Idea to Production

GitLab contains all tools needed to bring any project from the ideation stage
up to running in production and giving feedback. This includes repositories,
issue tracking, CI, CD, monitoring, chat and more. GitLab focuses on lowering the threshold between each step, so that working on a project means focusing
on collaboration and not on learning new tools.

#### External Integrations

GitLab plays well with others. To allow everyone to contribute, it's important
that there is only one place where you'll have to look, even if you need to
use external tools that are not part of GitLab. For this reason, GitLab plays
well with others: Providing APIs for nearly everything you can do within GitLab
and powerful, simple authentication and authorization tools for external
integrations.

GitLab ships with built-in integrations to many popular applications.

### Any Project

GitLab is the tool for anyone working on software in any form.

#### Multi-repository projects

Software projects are often more than single repositories. GitLab will evolve from being focused around single repositories towards being able to accommodate software projects that consist of multiple repositories.

- [Nested Groups](https://gitlab.com/gitlab-org/gitlab-ce/issues/2772)

#### From scratch or legacy

Starting a project from scratch makes it easy to do everything through GitLab and well integrated. But existing / migrated / legacy projects should benefit from the same features that GitLab offers. GitLab will offer the tools to help you integrate, setup and improve your projects with the tools we have at offer. A concrete example is setting up review apps: everyone would benefit from this. GitLab will give you all the handles to set this up. It should not be required to dive deep in the documentation to discover features like this.

- [Auto Deploy](https://gitlab.com/gitlab-org/gitlab-ce/issues/23580)

#### Beyond code

Going from idea to production is not a matter of just code anymore. Modern products work with elaborate mockups and designs both in ideation, but also in production. Whether you’re working on assets in a game or working on the design of a new website, GitLab will allow you to collaborate on your work as a programmer would on their code.

- [Comment on images](https://gitlab.com/gitlab-org/gitlab-ce/issues/2641)

### Actionable Feedback

Deployments should never be fire and forget. GitLab will give you immediate feedback on every deployment on any scale. This means that GitLab can tell you whether performance has improved on the application level, but also whether business metrics have changed.

Concretely, we can split up monitoring and feedback efforts within GitLab in three distinct areas: execution (cycle analytics), business and system feedback.

#### Business feedback

With the power of monitoring and an integrated approach, we have the ability to do amazing things within GitLab. GitLab will be able to automatically test commits and versions through feature flags and A/B testing.

Business feedback exists on different levels:

* Short term: how does a certain change perform? Choose A/B based on data.
* Medium term: did a particular new feature change conversions, engagement
* Long term: how do larger efforts relate to changes in conversations, engagement, revenue

- [A/B Testing of branches](https://gitlab.com/gitlab-org/gitlab-ee/issues/117)

#### System feedback

We can now go beyond CI and CD. GitLab will able to tell you whether a change
improved performance or stability. Because it will have access to both
historical data on performance and code, it can show you the impact of any
particular change at any time.

System feedback happens over different time windows:

* Immediate: see whether changes influence availability and alert if they do
* Short-medium term: see whether changes influence system metrics and performance
* Medium-Long term: did a particular effort influence system status

- Implemented: [Performance Monitoring](https://docs.gitlab.com/ee/administration/monitoring/performance/introduction.html)
- [Status monitoring and feedback](https://gitlab.com/gitlab-org/gitlab-ce/issues/25555)
- [Feature monitoring](https://gitlab.com/gitlab-org/gitlab-ce/issues/24254)

#### Execution Feedback & Cycle Analytics

GitLab is able to speed up cycle time for any project.
To provide feedback on cycle time GitLab will continue to expand cycle
analytics so that it not only shows you what is slow, it’ll help you speed up
with concrete, clickable suggestions.

- [Cycle Speed Suggestions](https://gitlab.com/gitlab-org/gitlab-ce/issues/25281)

### Teams of any Size

GitLab is built to work for teams of any size. By yourself, it gets out of
your way and lets you quickly push you work and track your progress.

With a small team, you can easily communicate and quickly move through the
otherwise time-intensive steps of bringing a creation to production, with
infrastructure as code, a flexible issue tracker and very permissive defaults.

Large teams of thousands of collaborators working on complex projects can easily
manage permissions. Automatic and batch actions for getting rolling quickly,
up to fine-grained overrides to give certain users specific actions, temporary
if needed.

Teams working with external collaborators will find it easy and safe to allow
collaborators to work together with them in the same place as the rest of their
work, while securing what is not to be shared.

Open source initiatives can use GitLab to effectively collaborate with a
community, while having the moderation tools to keep the project clean and
focused.
