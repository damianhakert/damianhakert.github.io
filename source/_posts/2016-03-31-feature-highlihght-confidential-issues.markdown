---
layout: post
title: "Feature Highlight: Confidential issues"
date: 2016-03-31 08:00
comments: true
author: Douglas Alexandre
author_twitter: dbalexandre
image_title: '/images/unsplash/stars.png'
---

Since GitLab 8.6 in both CE and EE versions, there is a small checkbox available
when you create or edit an issue, allowing you to mark an issue as confidential.

In some ways it’s a simple feature, but there are complex considerations.
The main point is to keep the confidential issues secure.
However, taking care of those considerations caused some problems during
development which are typical when you develop a feature for a relatively
long time, (in this case two weeks).
We'll look at that in this feature highlight.

<!-- more -->

## About Confidential Issues

When an issue is marked as confidential, they don’t display on lists of issues
like the milestone view.
The confidential issues won’t appear on auto-complete options as you type.
If you get a @mention - you only see the issue number, if you don’t have
explicit access to the project.

A typical use case for confidential issues might be a security report.
Before this feature we used two issue trackers: a public issue tracker on
GitLab.com and one private issue tracker.
If someone needed to report a security issue, they would have to use an email
address. Then the security issue was logged in the private tracker and resolved.

Now, with Confidential Issues, the reporter can mark an issue as confidential
and only project members can see the issue, as well as those who are assigned.

## Behind the scenes: Resolving merge conflicts as you go

While this is a simple feature, it created an interesting problem.
Because it causes lots of concern about security, we needed to very careful
with this. I had the branch open for a relatively long time, about two weeks.
Especially because it was affected by other features being developed at the
same time: subscribe to label and global milestones.
Over time, I was running into merge conflicts daily.
This happens very often if you have a merge request open for a long time.

I do try and avoid this when I can. Everyday, I check if the MR (merge request)
has conflicts and I resolve these as I work, that is, instead of waiting until
the final release to merge.

It also helps to develop with automated tests.
Then, as you work in parallel with others, and update the feature, you can
tell if something is going to break.

Normally, you don’t work a long time on issues like this, but in this case it
was unavoidable. Using tests made this a lot easier.
