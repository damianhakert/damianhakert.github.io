---
layout: post
title: "Feature Highlight: Confidential issues"
date: 2016-03-31 08:00
comments: true
author: Douglas Alexandre
author_twitter: dbalexandre
image_title: '/images/unsplash/door.jpg'
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

In the course of maintaining a project it may be necessary to keep some
information from public view. A typical use case for confidential issues would
be a security report. If someone needed to report a security issue, different
projects support different ways to report security issues:

* Follow instructions for security vulnerabilities, if there are any.
* File an issue with your findings and a request to get in to contact.
* Find other means to contact the maintainer.

In general, most of them advise to not use the issue tracker, and instead send an email
to an specific address. As you might imagine, before this release, we as an open
source project advised the same [security vunerability
disclosure](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md#security-vulnerability-disclosure) on our contributing guide:

> Please report suspected security vulnerabilities in private to
support@gitlab.com, also see the disclosure section on the GitLab.com website.
Please do NOT create publicly viewable issues for suspected security
vulnerabilities.

Behind the scenes when we got a security report email. Then we create an issue in
our internal issue tracker to discuss possible fixes, and we resolved it.
This generated a lot of overhead. First that we needed to keep two issues trackers:
a public issue tracker on GitLab.com and one private issue tracker. Secondly,
the process to report a security issue became more complex. First you need to
discover how to report the issue, and then report the issue itself.

Now, with Confidential Issues, the reporter can mark an issue as confidential
when creating or editing an issue and only project members can see the issue,
as well as those who are assigned. As it turns out the process much easier, since
reporters don't need to find how to report security issues anymore, and we
don't need to keep two issues trackers.

When an issue is marked as confidential, they are only visible to team members.
They won't appear on the issue tracker, activity feed, milestone views,
auto-complete options, etc. Even if you get a @mention, and you don’t have
explicit access to the project, you don't receive any kind of notification (in
this case emails, and todos).

## Behind the scenes: Resolving merge conflicts as you go

While this is a simple feature, it created an interesting problem.
Because it causes lots of concern about security, we needed to very careful
with this. I had the branch open for a relatively long time, about two weeks.
Especially because it was affected by other features being developed at the
same time, for example- subscribe to labels. Over time, I was running into
merge conflicts daily. This happens very often if you have a merge request open
for a long time.

I do try and avoid this when I can. Everyday, I check if the MR (merge request)
has conflicts and I resolve these as I work, that is, instead of waiting until
the final release to merge.

It also helps to develop with automated tests.
Then, as you work in parallel with others and update the feature, you can
tell if something is going to break.

Normally, you don’t work a long time on issues like this, but in this case it
was unavoidable. Using tests made this a lot easier.
