---
layout: post
title: "(Almost) Everything we do will be Open"
date: 2015-08-03
comments: true
author: Job van der Voort
author_twitter: Jobvo
image_title: '/images/unsplash/open.jpeg'
---

At GitLab, we do our best to work together with our amazing community at
every possible occasion. The community contributes many features, fixes bugs
and improves performance. To work together effectively, we try to be open about
as many things as possible.

Today we're announcing a move from doing the majority of our development work
internally, to (almost) exclusively working in public issue trackers on GitLab.com.
This means that anyone can view and comment on all of our discussion and work.
This includes bugs, new features, performance issues and everything else that
relates to our products.

<!-- more -->

## The Problem

[GitLab Community Edition], [GitLab Continuous Integration] and the [code that we use
to build and ship these], are all open source.
In fact, even our proprietary version of GitLab, GitLab Enterprise Edition,
has a publicly viewable source code. We do this because we believe it helps
everyone building a better GitLab and makes the threshold for community contributions
very low.

However, the development of the monthly releases of GitLab is done on our private
GitLab instance. We do this because we receive many feature requests and support
issues (bugs) from customers and we figured this was best kept private.
We now realize that this had the inadvertent effect of excluding the community
from the monthly release cycle. We were not working in the open as a true open
source project should.

## The Solution

To make the entire development of GitLab a product of the community again,
we decided to move all our internal issues, discussions, feature requests
and bugs to [public repositories] on GitLab.com.
This will allow us to build better features and to solve bugs faster
with more community feedback and contributions.

Issues and features from our customers will also be visible here.
Customers will not be named, instead we will link to internal tools so that
GitLab Inc employees can still handle customer interactions as normal.
We do not intend to release any private information, so logs and other relevant
information will be sanitized or kept out of the public issue.
Sensitive issues, such as security issues with GitLab, will still be handled
internally.

Doing this, we bridge our customers and GitLab's community. At the same time,
customers are able to view our work on their issues and feature requests.
Our work, comments and also our mistakes will be open for everyone to see.

## The Next Steps

Over the coming time, we'll gradually move our internal issues over to GitLab.com.

In time, we will also start to move away from using [feedback.gitlab.com] to
using issues in GitLab for feature requests as well.

If you have concerns about any of this, please contact us at Contact at GitLab dot com.
As always, we will also be present in the comments below.


[GitLab Community Edition]: https://gitlab.com/gitlab-org/gitlab-ce
[GitLab Continuous Integration]: https://gitlab.com/gitlab-org/gitlab-ci
[code that we use to build and ship these]: https://gitlab.com/gitlab-org/omnibus-gitlab
[public repositories]: https://gitlab.com/groups/gitlab-org
[feedback.gitlab.com]: http://feedback.gitlab.com/forums/176466-general
