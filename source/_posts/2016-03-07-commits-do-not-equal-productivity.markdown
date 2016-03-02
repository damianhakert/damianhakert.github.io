---
layout: post
title: "Commits Do Not Equal Productivity"
date: 2016-03-07
comments: true
author: Job van der Voort
author_twitter: Jobvo
image_title: '/images/unsplash/FILENAME.jpg'
---

If you’re interested in an indication of productivity of individual software
engineers (programmers), don’t look at commits or other measures of activity.
Look at _consistent progress_ instead.

<!-- more -->

## Commits

Commits are arbitrary changes captured in a single moment in time.
Their size and frequency do not correlate with the work needed to achieve that change.
At best, commits can be viewed as an indication of activity.

As a general rule, a programmer should consistently be making commits
throughout their work.
This can be reduced to ‘a programmer should write code’, which is not very enlightening.
The frequency of the commits, nor the size should be compared between programmers.
What should be committed is often a matter of personal preference and is subject to debate.

It can be argued that diminishing commits by a single engineer on a single
project can be an indicator of lower productivity.
However, that engineer might’ve just read a Hacker News thread that argues for
squashing smaller commits.

Don’t measure productivity with commits.

## Weights and Points

Are you using an issue tracker with weights or points? That’s a good start.
You can now get a sense of the total volume of work planned and delivered by a team.

Typically, you’d sum the total sum of delivered work and call that _velocity_.
You now have a good idea how well your _team_ can estimate the effort required
to build things versus how much they actually build things.

Estimating issue weights is notoriously hard and is advised to be done in a group,
using games like [Planning Poker].
The issue weight should be taken as an abstract
idea of the total body of work, not directly relate to the amount of time
necessary for this task (this is also why people often use the Fibonacci sequence,
  and as bigger tasks are harder to estimate).

To measure productivity of individuals, looking at velocity on an engineer-by-engineer
basis would mean they’d be measured against the ability of the group to estimate work load.
Worse is that this would encourage engineers to over-estimate or otherwise ‘play the system’.

Don’t measure productivity with velocity.

## Progress

To get an indication of productivity, look at the progress someone is making in
their work. In this sense, progress means someone is taking deliberate steps to
work towards solving the problem they are working on.

The best way to get an idea of someone’s progress is to look at _both their communication and activity_.
An effective engineer will either be making commits to further their progress or
communicate in some way about their work.
It’s only when you look at both these factors that you can say something about their productivity.

**A productive engineer communicates and commits. At times, only one of the two.**

## Data

I argue that an engineer’s productivity should not be judged by their deliverables
or direct output, rather it should be measured by progress.
Progress as I define it, is hard to measure, but easy to gauge:

> How is your work going?

A productive programmer will tell you to stop distracting them and come back in an hour.
And then they’ll you everything you need to know.


### Webcast: GitLab workflow

In our next webcast on March 10th, we'll walk you through a typical GitLab workflow.
This will take you through the steps of making an issue, merge requests, and
using tools in GitLab for cross-referencing and keeping your issue tracker
organized with labels and milestones.

- Date: Thursday, March 10, 2016
- Time: 5pm (17:00) UTC; 12pm EST; 9am PST
- [Register here][webcast]

Can't make it? Register anyway, and we'll send you a link to watch it later!


[webcast]: http://page.gitlab.com/mar-2016-gitlab-introduction.html
