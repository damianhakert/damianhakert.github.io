---
layout: markdown_page
title: Product
---

_As everything at GitLab, this document is forever in draft. Merge requests are very welcome. Infographics from [xkcd](https://www.xkcd.com)._

The document below talks about _how_ we do product at GitLab, not about _what_.
For the _what_, see [Product Strategy](/direction/strategy).

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

With every release of GitLab, we want to achieve each of the following
goals.

1. Improve GitLab's existing tools.
1. Achieve [our vision](https://about.gitlab.com/direction/#vision) of a
complete toolset.
1. Make our product more interesting for our customers through Products and
EE exclusive features.

## Scope of responsibilities

The product team is responsible for iteration on most of GitLab's products and
projects:

- GitLab CE and EE
- GitLab.com
- about.gitlab.com
- customers.gitlab.com
- version.gitlab.com
- license.gitlab.com

This includes new features, major changes, performance and stability.

Bugs and regressions are typically handled without any product involvement,
but if uncaught by engineering should be treated like any of the above.

## Product at GitLab

GitLab is designed and developed in a unique way.

The direction for the GitLab product is spelled out on the
[Direction page](/direction). This document provides lessons and heuristics on
how to design changes and new features. Our iterative process is demonstrated in
a [blog post](https://about.gitlab.com/2017/01/04/behind-the-scenes-how-we-built-review-apps/).

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

##### Encouraging behavior

Convention also implies that we're encouraging our customers to do things
in a certain way. A very concrete example of this is the ability to disable
pipelines.We believe that our integrated solution will give a superior user
experience and we're motivated to encourage behavior. For this reason, adding a
configuration to be able to disable this permanently (be that in template or
instance-wide), is something that should be avoided.

Encourage favorable behaviors by limiting configuration.

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

### Workflow

Almost everything that we do is documented in an issue.

#### How to submit a new issue

1. If you have time, the first thing you should do is search both CE and EE
projects if a similar issue already exists. We shouldn't create duplicates if we
can avoid them.
2. Identify if the issue is about GitLab Community Edition (EE) or GitLab
Enterprise Edition (EE), although this can easily be changed later.
3. You should clearly state what the current pain point is, what we are trying
to solve, what the benefits will be, what it should do, how to accomplish that
and the next steps.
4. Choose which labels are relevant to the issue. If you are unsure about what
certain labels are for, head up to the Labels page ([CE](https://gitlab.com/gitlab-org/gitlab-ce/labels)
or [EE](https://gitlab.com/gitlab-org/gitlab-ee/labels)) and read the
descriptions. The Engineering handbook provides [good hints](https://about.gitlab.com/handbook/engineering/workflow/#labelling-issues)
on how to choose the right label.
5. Unless you know what you are doing, do not
    - assign someone to the issue
    - assign a milestone
    - set a due date
    - add weight - weight represents the technical complexity and should be
    defined by our developers
6. Mention the different stakeholders in the body of your issue. In most product
related issues, we usually mention the product team members, either the frontend
or the backend lead and sometimes the cofounders, as what we do impact the
product most of the time. Mentioning the people in the body issue will
trigger the notification mechanisms chosen by the people who are mentioned -
therefore there is no need to notify people in another channel after the issue
has been created (Slack, email).

#### Wireframes

When relevant, you can include a wireframe in your issues in order to illustrate
your point. You don't need to include wireframes per se - our UX/design team can
help us on that matter. Simply ping them if you need their help. We like
[Balsamiq](https://balsamiq.com/) for its simplicity and its sketch-y approach.
If you don't have inspiration, you can also paste screenshots of similar
features in other products.

#### What is a Meta issue?

Meta is a label assigned to issues that contain a large list of todos. If you
are familiar with the Agile methodology, it's similar to an epic. At GitLab we
have a short release cycle: the 22nd of every month. In some cases we won't be
able to tackle all the tasks of a meta issue in a single release - this is why
we centralize all the things that we need to do in a meta issue, then break it
down to issues small enough that they will fit into one release. Meta issues
generate most of the time lots of comments and passionate discussions. As a
consequence, they always lead to something great.

Note: smaller tasks that are part of a meta issue are sometimes also
labeled `meta`. That's because they are part of a meta topic, and thus get the
meta label.

#### Long-lasting issues

A general guideline is that an issue should only span one release. If we know an
issue is going to span multiple releases, split it up in multiple issues.

Meta/epic issues are the exception to this rule, but should be kept to a
minimum and only serve to guide broader subjects, not a single feature
over multiple releases. This to make sure we stick to our values of
the minimally viable change.

The above means that feature issues should be closed after a first iteration
whenever possible. We'll know more in the future and this keeps remaining
issues short and actionable.

In addition, it's almost never a bad idea to throw away an original plan and
start fresh. Try to do this more often that you're comfortable. Close the issue
and create a new one.

#### Which issue should you be working on?

When you don't have specific tasks assigned, you should work on issues that are
labeled `Product work`, in both EE and CE projects. These are issues that need
our attention the most.

#### Scheduling timeline throughout a milestone

Issues are scheduled into a milestone (the upcoming release), worked on by engineering and design, and then shipped to production.
Follow this timeline for the release that will be shipped in Month `M`.

* Month `M-1`, 4th: Release scope established \| In scope issues marked with the milestone
* Month `M-1`, 7th: Release post created (WIP merge request)
* Month `M`, 7th: Complete issues merged into master \| Incomplete issues de-scoped, milestone removed from them
* Month `M`, 15th: Release post first draft complete (WIP merge request)
* Month `M`, 22nd: Release shipped to production \| Release post published

With this schedule, release timelines are overlapping. For example, when a release is shipped to production on the 22nd,
the scope for the following release has already been established earlier in that same month.

### Where should you look when you need help?

* The first things you should read are this handbook as well as the [general
handbook](https://about.gitlab.com/handbook/).
* You can ask questions related to Product in the `#product` Slack channel.
* General questions should be asked in `#questions`.
* Specific Git related questions should be asked in `#git-help`.
* HR questions should be asked in `#peopleops`.

### Shipping

#### Internal and external evangelization

Before shipping a new or updated feature, you are responsible for its
evangelization, both internally and externally. When something is released, the
following teams need to be aware of it as they will all need to do something
about it:

* Marketing: depending on the importance of the feature, we need the help of
marketing to promote this feature on our different communication channels.
* Sales: sales need to know what's new or changed in the product so they can
have better arguments to convince new or existing customers during their sales
process.
* Support: as they are in contact with our users and customers all day long,
support should perfectly know how our products work.

You can promote your work in several ways:

* start with documenting what will be released and share this documentation with
the different teams,
* schedule meeting, if you think it's important, with the teams listed above.

#### GitLab University

To promote a major new feature internally, you can ask to host a GitLab
University, a company wide demo session. This is a great opportunity to make
sure every one is on the same page.

### Major feature rollout

Major features deserve proper attention from product and marketing. With a
proper rollout, we'll have ample marketing opportunities and receive more
feedback ahead, during and after the release.

Here is the ideal rollout schedule. For each step, there is the indication about
who is responsible for it.

1. Feature is drafted in an issue (PM)
2. Feature is planned in an upcoming release (PM)
3. A feature proposal blog post is made (PM or Dev), where we'll describe
	* What we are planning on doing,
	* How you'll be able to buy it: CE or any EE Editions,
	* Link to the issue,
	* When it'll be available, if possible,
	* Anything else that is interesting to share in order to fuel the discussion.
4. Feature is implemented, documentation is written (Dev).
5. Feature should appear on the website (Marketing)
	* For very significant features: Feature page on the website is made and
  pushed, with the mention "Available from X.X"
	* For other features: Feature should be listed on some page (/comparison,
    Enterprise page, /features page).
6. Feature is launched with the release (Marketing)
	* "Available from X.X" is removed
	* Documentation and other resources are linked
	* Pricing page is updated if needed
7. Feature is highlighted in a blog post (Marketing)
	* This post is linked from the feature page on the website (if applicable)

### How and when to reject a feature request

Rejecting a feature request or a merge request is not an easy thing. People can
feel quite protective of their ideas. They might have invested a lot of time and
energy in writing those ideas. You can be tempted to accept a feature only to
avoid hurting the people who thought of it. Worst, if you reject an idea too
harshly, you might discourage other people to contribute, which is something we
want to avoid.

However, as the number of issues and merge requests grow more and more, we should
be diligent about rejecting features we are sure will not do. It's better for
everyone: for the product team so we don't maintain a huge backlog of things we
will not do anyway, and for the users who won't have to wait for our feedback
indefinitely.

Note: it's fine to not respond to issues that we think have potential until they
gather momentum.

Feature requests and merge requests can be rejected for the following reasons:

* Not within our scope: the Direction page [lists all the areas](https://about.gitlab.com/direction/#outside-our-scope)
where GitLab, the product, won't go. Point the issue's author to this article
and close the issue.
* We don't want another setting: whenever we can, we try to [avoid having settings](https://about.gitlab.com/handbook/product/#convention-over-configuration).
Some settings are inevitable - most aren't. Ask the user to change how she
approaches the feature in order to get rid of the setting.
* Too complex: we want to have a user-friendly, simple product that does complex
things. Not the other way around. Tell the user to take a step back and think
about the problem she wants to solve in the first place. Offer directions on
what she could do instead. If she's not willing to do it, indicate that you will
have to close the issue/merge request because it will go nowhere.
* Bring an Enterprise exclusive feature to the Community Edition: this problem
is already addressed in the [About page](https://about.gitlab.com/about/#contributing-an-ee-only-feature-to-ce).
Indicate that we will investigate whether the feature can be ported to the
Community Edition, discuss it with other teams members and come back to the user
in a timely fashion.
* Low priority: sometimes, features are interesting but we simply don't have the
capacity to implement them. In that case, simply tell the truth and indicate that
we don't have enough resources at our disposal to do it at the moment.

Don't forget to thank the authors for the time and effort taken to submit the
feature request/merge request. In all cases and without exception, you should be
nice and polite when interacting with users and customers.

## Responsibilities and Expectations

As a PM you're expected to:

- Follow the issues you've been involved with / are assigned to as PM. That usually means reading all comments. Use email notifications for this.
- Make sure the issue description is updated when necessary
- Make sure issues are moved forward when needed. Not only should you avoid being the bottleneck, you should be the person moving issues forward when they get stuck or overlooked.
- Make sure features are complete: documentation, marketing, API, etc.
- Know when to cut corners and when not to. If we merge documentation a day
later, that's usually acceptable. Inversely, discovering by demand of a
customer that documentation is lacking is not.
- Excite and market new features and changes internally and externally
- Help build a vision for GitLab and GitLab's features
- Deeply understand whatever it is you're working on. You should be spending a lot of time learning about your subject matters.
- Have regular meetings (at least one a week) with customers

### Customer meetings

It's important to get direct feedback from our customers on things we've
built, are building or should be building.

As a PM you should have regular meetings with customers that are using the
things you've been working on and with customers that are not - in order
to get an idea of why they're not switching to our solution.

#### Set up a meeting

To setup a customer meeting, identify what you're interested in discovering
and prepare appropriately.

You can find information about how customers are using GitLab through sales
and version.gitlab.com. Sales and support should also be able to bring you
into contact with a customer.

There is no formal internal process to schedule a customer meeting,
if that need arises, we can formulate one.

#### During and after

During the meeting, spend most of your time listening and obtaining information.
It's not your job to sell GitLab, but it should be obvious when it's the time
to tell more about our products.

After the meeting, make sure all your notes and feedback lands in issues.


# Continuous Integration (CI)/Continuous Deployment and Delivery (CD)<a name="cicd"></a>

For more insights into our vision on Continuous Integration and Continuous
Deployment & Delivery, see the [CI/CD page](/direction/cicd).

# Enterprise Edition Tiers

There are two EE tiers: Starter and Premium.

EE Starter features are more relevant for organizations that have more than
**100** potential users.

EE Premium features are more relevant for organizations that have more than **750**
potential users.

## Starter or Premium?

Deciding on whether something should be a Premium feature or just a EE-only
feature can be tough. In doubt, make it a Premium feature, that's a reversible
option, whereas the alternative is not.

## Talking about EE only decisions

When talking about why a certain change is limited to Enterprise Edition in
public, [mention the stewardship paragraph in the about page][stewardship]
directly and link to it.

[stewardship]: https://about.gitlab.com/about/#what-features-are-ee-only

## Private tools and dashboards for monitoring and KPI tracking

[EE usage](https://version.gitlab.com/): dev.gitlab.org account

[Grafana](http://performance.gitlab.net): Google gitlab.com account

[Kibana](https://log.gitlap.com): dev.gitlab.org account

[LogTrail](https://log.gitlap.com): dev.gitlab.org account

[Piwik](https://piwik.gitlab.com): GitLab 1Password account

[S3stat](https://www.s3stat.com): GitLab 1Password account

[Sentry](https://sentry.gitlap.com): dev.gitlab.org account

# Writing about features

As PM we need to constantly write about the features we ship: in a blog post,
internally to promote something, in emails sent to customers.

While we want every PM to have his unique voice and style, there are some
guidelines that one should take into account when writing about features. Let's
highlight them with a concrete example, Preventing Secrets in your repositories,
 that [we've shipped in 8.12](https://about.gitlab.com/2016/09/22/gitlab-8-12-released/#preventing-secrets-in-your-repositories-ee).

* Start with the context. Explain what the current situation is without the
feature. Describe the pain points.

> It's a bad idea to commit secrets (such as keys and certificates) to your repositories: they'll be cloned to the machines of anyone that has access to the repository, only one of which has to be insecure for the information to be compromised. Yet it happens quite easily. You write `git commit -am 'quickfix' && git push` and suddenly you've committed files that were meant to stay local!

* Explain what we've shipped to fix this problem.

> GitLab now has a new push rule that will prevent commits with secrets from entering the repository.

* Describe how to use the feature in simple terms.

> Just check the checkbox and GitLab will prevent common unsafe files such as .pem and .key from being committed.

* Point to the documentation and any other relevant links (previous posts, etc).

## Writing release blog posts
For every monthly release, there is a blog post announcing features. The blog post should contain anything _exciting_ or _disruptive_.
We want to help people understand exciting features (which are often new), and increase adoption.
Disruptive features may change workflows or even introduce unavoidable inconveniences.
We want to anticipate questions and avoid confusion by communicating these changes through the blog post.
Smaller tweaks and bug fixes don't necessarily need to be mentioned,
but if interesting, can be included at the bottom of the post.

# Links

- [Engineering Workflow](/handbook/engineering/workflow)
