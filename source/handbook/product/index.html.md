---
layout: markdown_page
title: Product
---

_As everything at GitLab, this document is forever in draft. Merge requests are very welcome. Infographics from [xkcd](www.xkcd.com)._

**Table of contents**

- TOC
{:toc}

## Communication<a name="reach-productteam"></a>

- [**Public Issue Tracker (for GitLab Community Edition)**](https://gitlab.com/gitlab-org/gitlab-ce)
and [**for GitLab Enterprise Edition**](https://gitlab.com/gitlab-org/gitlab-ee) - please use
confidential issues for topics that should only be visible to team members
 at GitLab.
- [**Chat channel**](https://gitlab.slack.com/archives/product) - please use the
`#product` chat channels for questions that don't seem appropriate to use the
issue tracker or more generic chat channels for.

## Goals of Product

Everyone at GitLab is involved with the product. It's the reason why we are
working together.

With every release of GitLab, we want to achieve each one of those following
goals.

1. Improve GitLab's existing tools.
1. Achieve [our vision](https://about.gitlab.com/direction/#vision) of a
complete toolset.
1. Make our product more interesting for our customers through Products and
EE exclusive features.

## Product at GitLab

GitLab is designed and developed in a unique way.

The direction for the GitLab product is spelled out on the
[Direction page](/direction). This document provides lessons and heuristics on
how to design changes and new features.

### TL;DR

1. [Minimally Viable Change](#the-minimally-viable-change): Work in iterations
by implementing only the minimally viable change.
1. [Convention over Configuration](#convention-over-configuration): Avoid
configuration and make it work out of the box.
1. [Be Ambitious](#be-ambitious): do things no one else is doing.
1. [Do not mess with Flow](#do-not-mess-with-flow): _frictionless_ from idea to
production. Avoid adding clicks.

### Product Core Values

#### The Minimally Viable Change

Reduce every change proposal to its very minimally viable form.
This allows us to ship almost anything within a single release,
get immediate feedback and avoid deep investments in ideas that might
not work. Other advantages:

- This helps avoiding the sunk-cost fallacy in situations where we might
decide to drop a change, as we almost never spend more than a few weeks working
on something.
- It prevents over-engineering.
- It forces everyone involved to look for the most simple solution to a problem,
which is often the superior solution.
- It forces working towards an 80/20 solution, where competing products might cater
to the last 20% of the market, a minimally viable solution is _good enough_ for 80%.
- Further changes or enhancements to the change are driven by feedback from
actual users. This is a much more informative mechanism than the intuition
of a product person (though note that this doesn't mean we should just build
whatever feedback tells us).

![](/handbook/product/p1.png)

#### Convention over Configuration

Prefer choices that are well thought out, based on current best practices.
Avoid unnecessary configuration.

For example, when considering adding a checkbox or two radio boxes, think really
hard what users really want. Most of the time, you'll find you really only need
one solution, so remove the option. When two possible choices really are
necessary, the best or most common one should be default, and the other one
should be possible. If the non-default choices are significantly less common,
then consider taking them out of the main workflow for making decisions such as
putting them behind an Advanced configuration tab.

Every configuration in GitLab multiplies its complexity, which means
the application is harder to use, harder to develop, and
less friendly to its users.

Making features configurable is _easy_ and _lazy_.
It's a natural reaction to propose a big change to be configurable,
as you worry it'll negatively affect certain users. However,
by making a feature configurable, you've now created two problems.

![](/handbook/product/p2.png)

Work on solutions that work for everyone, that replace all
previous solutions.

Sometimes configuration is inevitable or preferable. GitLab should
work perfectly right out of the box for most users. Your configuration
can't make that experience worse and should always _get out of the
way of the user_.

#### Be Ambitious

Many crazy, over-ambitious ideas just sound like they are impossible
because no one else is doing them.

Because we have amazing engineers and a culture of shipping a minimally
viable change, we are able to do a lot more 'impossible' things than other
people.

That's why we're shipping merge conflict resolution, why we shipped built-in CI
before anyone else did it, why we built a better static pages solution, and why
we're able to compete.

![](/handbook/product/p3.png)

#### Do not mess with Flow

Doing something simple in GitLab should be simple and require no
human cpu-cycles to do so. Things that are simple now, should
be simple in two and ten years.

This sounds obvious, but messing with Flow is easily done. In most
cases, flow is disrupted by adding another action, another click.

For instance: You want users to be made aware of the rules of a project.
Your proposal is a little popup that shows the rules before they create an
issue. This means that every time that someone creates an issue they need
to click once before resuming their normal action. This is unacceptable.
A better solution is to add a link to the issue that points the user to this.

![](/handbook/product/p4.png)

It's very hard to maintain flow with a lot of configurations and options.
In cases where you want to enforce certain behaviour, the most obvious step
is to add another step or action. This can be avoided by making the action
work in parallel (like a link in the issue), encouraging rather than enforcing
certain behaviours.

We don't want users to be able to construct workflows that break GitLab or
make it work in unpredictable ways.

### Responsibilities of a Product Manager

As a Product Manager, you are expected to act as the reference for everything
related to your area of responsibilities.

Everyone has opinions about the product, and all opinions matter and must be heard.
Our great company culture empowers any employee to take decisions regarding
existing or upcoming features. However when it's time to make a decision
regarding the direction of the product, it's your responsibility as Product
Manager to take the lead.

Your other responsibilities are described below.

* **Work on the roadmap**

TBD

* **Work out feature proposals from the community and customers**

We have a lot of users and a lot of customers. Feedback, bug reports and feature
proposals come from multiple channels all the time. Feature proposals will have
the `feature proposal` label assigned to them. It's our job to decide if this
feature deserves to exist. If it doesn't, you should reject the feature.

**A note about bug reports**

As a Product Manager, you are not supposed to work on bug reports. Most of the
time they are reported by the Support team and are tackled by the Engineering
team. For critical bugs, you might chime in and decide to put the highest
priority on solving them, but that happens rarely.

* **Manage new features tailored for larger enterprises from conception to market**

GitLab Enterprise Edition (EE) is very important for us. It gives us the financial
resources we need to achieve [our vision](https://about.gitlab.com/direction/#vision)
and give back to the community. It's our responsibility to create features that
will be attractive to larger enterprises in order to give them the best tools
to achieve great things.

You will need to discuss with existing customers, with people from the Sales
team and with other Product team members about which features to prioritize for
the Enterprise Edition.

* **Work together with UX and Frontend engineers on improving the look and feel of GitLab**

We all have opinions about design and UX in general. We have a dedicated team at
GitLab who handle this all day long. While it's important to let them to their
job, we are collectively responsible for providing the best user experience to
our users and customers. That means you should never worry about giving feedback
to a mockup you see in an issue or a flow in our app - as long as you have valid
arguments.

* **Ensure a smooth release of changes and features together with all stakeholders**

We don't have dedicated project managers. Everyone on the team is responsible
for making things happen. However it's your job as Product Manager to ensure that
the feature the team is working on moves as it should by pinging the different
team members appropriately.

* **Empower the community by writing great documentation and highlighting the product in various ways in cooperation with marketing**

Everyone writes documentation at GitLab. About almost everything. This is why
our product should provide clear documentation about what it does and how it
works.

You should work closely with marketing to make sure that the product is rightfully
highlighted throughout our marketing materials.

* **Finding the weak spots of GitLab and executing plans to improve them**

This task is a responsibility shared by the entire GitLab team. However as
Product Manager you should be aware of any weak spot we have on GitLab and make
sure that any problem is properly described in an issue, with clear steps on
how to fix it.

#### What you are not responsible for

As much as it's important to know what your main responsibilities are, it's also
important to understand what you shouldn't do as Product Manager.

* **Shipping in time**

As a PM you are part of a team that delivers a change, the team is responsible
for shipping in time, not you.

* **A team of engineers**

PMs at GitLab do not manage people, they manage the product. You'll be required
to take the lead in decisions about the product, but it's not your role to manage
the people that build the product.

* **Capacity and availability planning**

You will work together with engineering managers on schedules and planning: you
prioritize, the engineering managers determine how much can be scheduled.

### How we work

Almost everything that we do is documented in an issue. Issues are how GitLab
works. Every feature, bug, feedback is documented and processed.

#### How to submit a new Product issue

First, identify if the issue is about GitLab Community Edition (EE) or GitLab
Enterprise Edition (EE). This will let you know in which project you should log
the issue into.

You should clearly state what's the current pain point, what we are trying to solve,
what the benefits will be, what it should do, how to accomplish that and
the next steps.

Finally, add the Product label and assign it to Job for review.

#### What is a Meta issue?

Meta is a label assigned to certain issues that contain a large list of todos.
If you are familiar with the Agile methodology, it's similar to an epic. At
GitLab we have a short release cycle: the 22nd of every month. In some cases we
won't be able to tackle all the tasks of a meta issue - this is why we centralize
all the things that we need to do in a meta issue, then break it down to smaller issues.
Meta issues are usually big, have lots of comments and passionate discussions
and always lead to something great.

#### Which issue should you be working on?

When you don't have specific tasks assigned, you should work on issues that are
labeled `product`, in both EE and CE projects. These are issues that need our
love and attention.

#### Where should you look when you need help?

* The first things you should read are this handbook as well as the [general
handbook](https://about.gitlab.com/handbook/).
* You can ask questions related to Product in the `#product` Slack channel.
* General questions should be asked in `#questions`.
* Specific Git related questions should be asked in `#git-help`.
* HR questions should be asked in `#peopleops`.

#### How to reject a feature request

TBD

## Continuous Integration (CI)/Continuous Deployment and Delivery (CD)<a name="cicd"></a>

For more insights into our vision on Continuous Integration and Continuous
Deployment & Delivery, see the [CI/CD page](/direction/cicd).

## Relevant links

- [Engineering Workflow](/handbook/engineering/workflow)
