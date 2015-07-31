---
layout: post
title: "6 reasons why you should review code early"
date: 2015-07-31
comments: true
author: Job van der Voort
author_twitter: Jobvo
image_title: '/images/code.png'
---

Code review is very important. You don't want to run the risk of [technical debt].
Actually doing code review is another matter. Besides the variety of tools and tricks
for the act of code review, the timing is vital.

Here, we give you six good reasons why you should review code before it's being
deployed / released / merged, rather than doing code review on code that is
in use already.

<!-- more -->

## 1. It's still fresh

If you get feedback on something that you recently worked on, you're
likely to have the context and structure in mind of that piece of code.

Production code that is reviewed much later on will require you to do another
deep dive into code that you might have not touched in a while. This is inefficient
and sets you up for failure, as the context is never as clear as it was while you
worked on it.

## 2. Less Resistance to Change

When your code is running in production for some time, seemingly doing what it
should, it'll be harder to convince you to change it. You will be more resistant
to changes suggested by your colleagues.

With unproven code the "it works, why change it?" argument is much harder to make.

## 3. Higher Focus on Quality

As you will be less resistant to code that is not running successfully yet,
your reviewers will be more insistent on the functionality and quality of the
code. The code has not proven itself yet, so the assumption will be that it
doesn't work, inspiring more thorough review.

## 4. Catch mistakes before Production

This seems obvious, but if you review before code going live, there will be
much less issues on the live code. In turn, this means your software is more
reliable and you'll fight less with emergency bug-fixes and spend more time
writing new features.

## 5. You Must Review

Skipping code review on live code is easy. You just don't do it.

However, if you use early code review, you can easily set up a workflow
that forces code review. For instance, with [GitLab's Merge Request Approvals],
you can require any N of your colleagues to approve a merge request before it's
merged into the target branch.

This way code review can never be skipped, with all the benefits of that.

## 6. Small Reviews > Large Reviews

We observed that smaller reviews gather much more comments per line of code,
than large reviews.
A merge request is typically smaller than the average review of a part of a
codebase of a project. This means that you can expect a more thorough review
on code that is not merged yet, over code that is already live just by the
line count of the review.

## Requirements for Early Review

The reasons for early code review above must be placed within the right context:
If you do early code review it has to be fast or it'd undo some of the advantages
and slow down your release cycle. An easy fix for this is to not wait for particular
people, rather just have a number of required reviewers (you can do this with
[merge request approvals]).

Second, the big picture has to be visible for you and your reviewers. It's possible
that a larger piece of code needs refactoring. If this is the case, do it
before shipping the code or schedule the refactoring for a future time.

## How do you review?

As we're always looking to improve code review in GitLab, we're very curious
to hear what you do with your code, how you review it in your team and how
we can improve GitLab to support better code review.
Let us know in the comments below.


[technical debt]: https://en.wikipedia.org/wiki/Technical_debt
[merge request approvals]: https://about.gitlab.com/2015/07/29/feature-highlight-merge-request-approvals/
[GitLab's Merge Request Approvals]: https://about.gitlab.com/2015/07/29/feature-highlight-merge-request-approvals/
