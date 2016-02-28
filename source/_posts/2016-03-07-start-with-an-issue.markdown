---
layout: post
title: "Always start with an issue"
date: 2016-03-07
comments: true
categories: collaboration
author: Heather McNamee
author_twitter: nearlythere
image_title: '/images/unsplash/stars.png'
---

“Always start with an issue” say [Job][job], VP of Product here at GitLab.
Before you begin anything else, summarize your ideas in an issue and share it.
It’s such a simple rule, but the impact is huge.

In this post we'll focus on issues for feature proposals specifically,
but the rule applies in either case.
We say “start” with an issue and not “create” an issue, because one might already exist.
Make sure to search in All issues (open and closed) to see if your idea has been proposed already.

 **Webcast soon!** Find out more about making the most of GitLab to collaborate
 on your projects, join us for our GitLab Intro
 [webcast on GitLab Workflow][webcast], Thursday March 10th.

<!-- more -->

### The benefits of collaboration start at the point of making an issue

By making an issue, you have to get your ideas out there, and let your
collaborators have their say early.
You also avert a number of risks which can introduce problems later on.

- You may not know everything there is to consider.
- There may be parts of the system you aren’t familiar with.
- There may be limitation or possibilities you’re not aware of.
- There may be factors for users you may not know.
- There may be work going on in a parallel effort which relates your idea.

### GitLab is a discussion about software

Non-programmers think that programmers are constantly tapping away at their
keyboards on code.
In fact software development is more like a discussion, and it’s more
collaborative than it is a solitary experience.

Of course not everything aspect of collaboration is recorded on GitLab.
We also use text chat and we pop open a video chat sometimes.
However, the issue tracker does give us insight into the collaborative experience.

Let’s look at an example discussion as it took place around a specific feature
proposal.
In his recent blog post (link), GitLab developer [Douglas][Douglas] told the
story of how the Todo feature came to be in GitLab 8.5.

The [original issue][Todo issue] was posted 6 months before coding began.
The targeted milestone was moved from 8.4 to 8.5 during that time.
The discussion continued for four months until the description was simplified.
One of our designers, Andriy, came up with a second design reflecting the major decisions.
The title changed seven times until finally it’s renamed Todo’s.
There were 30 participants marked in the issue, but some may have just been
watching, or may have taken other actions such as adding a label.
In total, 13 people add to the discussion.

At one point early on, Job summarized [the next actions to take][next actions].

- formal proposal (Job / Darby / other people)
- mockups (Job)
- design (Andriy)
- implementation (any dev) (*which turned out to be Douglas*)

Implementation is a *final* step.

Let's consider the lifetime of the issue which started 174 days before the final release.

The task was assigned to Douglas only on Feb 2nd, with 20 days left to that milestone.
Douglas spent 11% of lifetime of this issue on development.
He didn't created the merge request until 7 days before the release.
That means over the course of the issue from start to close, only 4% of the
time was spent "coding".

It’s in [the merge request][the MR] that Douglas and Douwe worked on refining edge cases
and how it would get done according to the intention of the original issue.
Douglas would make a number of commits, and then Douwe would give him feedback.
Again, it's more discussion and communication.

Of course, the Todo issue might be an extreme case, but it does highlight
that software development is a discussion.
Git commits themselves are just one aspect of the work software developers do.
That is why tracking "commits" as evidence of productivity gives an inaccurate
metric of software development productivity.

(link to @job's post)

## What happens if you don’t make an issue first?

There’s a danger with spending a lot of time on work before sharing the idea.
As you develop it, and polish it, you run the risk of becoming precious about it.

![Gollum gets precious about his work](/images/blogimages/gollum-perfectionist.jpg)

When you present your polished prize, you will be spending more time justifying your decisions.
why you didn’t do X or didn’t account for Y.

## What's contained in the initial issue?

In the contribution guide…

(what should a feature proposal contain)

The issue started with a [long description][original proposal] which thankfully
was kept and later marked as "too complex", so we can compare it.


## Are there times you don’t start with an issue?

Sure! When I’m working on something small, corrections or small fixes, I don’t make an issue.

(needs another case)

The Merge Request (MR) has all the same collaboration tools I need.

- Comments
- Labels and milestone
- Notifications

## GitLab workflow

So you've started with an issue, what happens next?
In our next webcast on March 10th, we'll dig into a typical GitLab workflow.

- Date: Thursday, March 10, 2016
- Time: 5pm (17:00) UTC; 12pm EST; 9am PST
- [Register here][webcast] 

Can't make it? Register anyway, and we'll send you a link to watch it later!

[webcast]: http://page.gitlab.com/mar-2016-gitlab-introduction.html
[Job]: https://twitter.com/Jobvo
[Douglas]: https://twitter.com/dbalexandre
[Todo issue]: https://gitlab.com/gitlab-org/gitlab-ce/issues/2425
[the MR]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/2817
[original proposal]: https://gitlab.com/gitlab-org/gitlab-ce/issues/2425#old-deprecated-proposal-too-complex
[next actions]: https://gitlab.com/gitlab-org/gitlab-ce/issues/2425#note_2070496
