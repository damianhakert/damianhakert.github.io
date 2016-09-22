---
layout: markdown_page
title: Product
---

**Table of contents**

- TOC
{:toc}

## Communication<a name="reach-productteam"></a>

- [**Public Issue Tracker (for GitLab CE)**](https://gitlab.com/gitlab-org/gitlab-ce) and **for [GitLab EE**](https://gitlab.com/gitlab-org/gitlab-ee); please use confidential issues for topics that should only be visible to team members at GitLab.
- [**Chat channel**](https://gitlab.slack.com/archives/product); please use the `#product` chat channels for questions that don't seem appropriate to use the issue tracker or more generic chat channels for.

# Goals of Product

Everyone at GitLab is involved with the product. It's the reason why we are
working together.

With every release of GitLab, we want to achieve each of the following
goals.

1. Improve GitLab's existing tools
1. Achieve [our vision](https://about.gitlab.com/direction/#vision) of a complete toolset
1. Make our product more interesting for our customers through Products and
EE exclusive features

# Product at GitLab

GitLab is designed and developed in a unique way.

The direction for the GitLab product is spelled out on the [Direction page](/direction). This document provides lessons and heuristics on how to design changes
and new features.

_As everything at GitLab, this document is forever in draft. Merge requests are very welcome._

Infographics from [xkcd](www.xkcd.com).

## TL;DR

1. [Minimally Viable Change](#the-minimally-viable-change): Work in iterations by implementing only the minimally viable change
1. [Convention over Configuration](#convention-over-configuration): Avoid configuration and make it work out of the box:
1. [Be Ambitious](#be-ambitious): do things no one else is doing
1. [Do not mess with Flow](#do-not-mess-with-flow): _frictionless_ from idea to production. Avoid adding clicks.

## The Minimally Viable Change

Reduce every change proposal to its very minimally viable form.
This allows us to ship almost anything within a single release,
get immediate feedback and avoid deep investments in ideas that might
not work. Other advantages:

- This helps avoiding the sunk-cost fallacy in situations where we might
decide to drop a change, as we almost never spend more than a few weeks working
on something.
- It prevents over-engineering
- It forces everyone involved to look for the most simple solution to a problem,
which is often the superior solution
- It forces working towards an 80/20 solution, where competing products might cater
to the last 20% of the market, a minimally viable solution is _good enough_ for 80%
- Further changes or enhancements to the change are driven by feedback from
actual users. This is a much more informative mechanism than the intuition
of a product person (though note that this doesn't mean we should just build
whatever feedback tells us)

![](/handbook/product/p1.png)

## Convention over Configuration

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

## Be Ambitious

Many crazy, over-ambitious ideas just sound like they are impossible
because no one else is doing them.

Because we have amazing engineers and a culture of shipping a minimally
viable change, we are able to do a lot more 'impossible' things than other
people.

That's why we're shipping merge conflict resolution, why we shipped built-in CI
before anyone else did it, why we built a better static pages solution, and why
we're able to compete.

![](/handbook/product/p3.png)

## Do not mess with Flow

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
In cases where you want to enforce certain behavior, the most obvious step
is to add another step or action. This can be avoided by making the action
work in parallel (like a link in the issue), encouraging rather than enforcing
certain behaviors.

We don't want users to be able to construct workflows that break GitLab or
make it work in unpredictable ways.

## Alignment

Balancing our great ambition with our dedication to customer success is tough. Add in a growing number of dedicated teams focusing on areas of the product, and it becomes challenging to make sure everything we work on is truly the right thing to work on, right now. To help with that, it's good to keep a few things in mind. To ask a few questions to keep us all aligned.

At a high level, you can think of aligning along these dimensions (not necessarily in priority order):

* Align with company top projects
* Align with company vision
* Align with business objectives (profit, i.e. EE)
* Align with team/project vision
* Align with team/project top priorities
* Align with developer experience
* Align with customer demands

To make it concrete with an example, the CI/CD team might ask:

* What else is needed for the idea-to-production vision? Are there other APIs needed for ChatOps integration? Can we trigger manual actions via API? [Environment-specific variables](https://gitlab.com/gitlab-org/gitlab-ce/issues/20367), [activity](https://gitlab.com/gitlab-org/gitlab-ce/issues/19992)
* What moves us towards automatic deploys of `gitlab-ce`?
* What moves the [CI/CD vision](https://about.gitlab.com/direction/cicd/) forward?
* Can we polish the existing feature set? (e.g. [#21126](https://gitlab.com/gitlab-org/gitlab-ce/issues/21126), [#18178](https://gitlab.com/gitlab-org/gitlab-ce/issues/18178), [Show builds in context of pipeline](https://gitlab.com/gitlab-org/gitlab-ce/issues/20863), [#5983](https://gitlab.com/gitlab-org/gitlab-ce/issues/5983), [#3976](https://gitlab.com/gitlab-org/gitlab-ce/issues/3976))
* Can we speed up CI/CD pipelines? (e.g. sticky runners, [automatic parallelization](https://gitlab.com/gitlab-org/gitlab-ce/issues/21480))
* What can we do to make customers happy? ([list](https://gitlab.com/gitlab-org/gitlab-ce/issues?scope=all&state=opened&utf8=✓&label_name%5B%5D=CI&label_name%5B%5D=customer))
* What can we do to ship EE features for CI? (e.g. [gitlab-org/gitlab-ee#933](https://gitlab.com/gitlab-org/gitlab-ee/issues/933))

## CI/CD<a name="cicd"></a>

For more insights into our vision on Continuous Integration and Continuous Deployment & Delivery, see the [CI/CD page](/direction/cicd).

# How to work as a PM

If you follow the guidelines above, you won't be writing long, detailed
specs for a part of the product for the next year. So how should you be
spending your time?

Invest the majority of your time in understanding the problem deeply (say 70%).
Then spend 10% of your time writing the spec _for only the first iteration_ and
handling comments, while the remaining 20% you work on promoting it.

A problem you understand well will always have a (seemingly) simple or obvious
solution. Reduce it to its simplest form (see above) and only ship that.

Once you've shipped your solution, both you and the community will
have a much better idea on what can be improved and what should be prioritized
for future iterations.

As a PM you're the person that has to kick-off new initiatives. You're not
responsible for shipping something on time, but you are responsible for taking
action and setting the direction. Be active everywhere, over-communicate and
sell the things you think are important to the rest of the team and community.

As a PM you don't own the product: ask other people for feedback and give
team members and the community the space to suggest and create without your
direct intervention. It's your job to make sure something is decided and
planned, not to come up with every idea or change.

# Links

- [Engineering Workflow](/handbook/engineering/workflow)
