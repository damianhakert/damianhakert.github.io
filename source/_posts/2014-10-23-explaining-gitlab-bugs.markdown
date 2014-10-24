---
layout: post
title: "Explaining GitLab bugs"
date: 2014-10-23 22:07:21 +0200
comments: true
categories: 
author: Marc Radulescu
---

This blog post will give a short overview on how we treat bugs in GitLab

We will go through three different types of bugs:

 - Security bugs
 - Regression bugs
 - Feature requests

The image below illustrates the big picture:

[![screenshot](/images/gitlab_bugs/bugs_alt.png)](/images/gitlab_bugs/bugs_alt.png)

## Security bugs

Security bugs are system vulnerabilities that can be exploited to allow a user gain unauthorized access to the GitLab server.
We always treat them as top priority.
We take action and patch GitLab within 1-2 days of notice anytime a serious security bug is reported to us.

If you find a security bug in GitLab, please make sure to use [responsible disclosure](https://about.gitlab.com/disclosure/), and reach out to us at support@gitlab.com.

## Regression bugs

Regression bugs are bugs in the functionality of GitLab, that are unknowingly introduced in a new release.
Regression bugs are treated with priority.
We assess the impact of the regression bug and either create a patch or, more frequently, include the fix in the next minor release.

If you identify a regression bug, please let us know either via [Twitter](https://twitter.com/gitlabhq), or post it in the [issue tracker](https://gitlab.com/gitlab-org/gitlab-ce/issues)

## Feature requests

In some cases, a feature that is present in GitLab does not behave as you expect.
If a feature is really not behaving as it should then it is buggy and we will fix it.
Depending on the impact on GitLab's functionality, fixing this kind of bug might be considered a priority.
Before announcing it to us, please make sure to double-check our interpretation of the feature on the feedback tracker, on the changelog or in the blog post.
New features don't always cover all use cases and all corner cases.

If you have a specific corner case that is not covered by the newly introduced feature, please use the [feedback tracker](http://feedback.gitlab.com/forums/176466-general) to bring it to our attention.

If your use case is generic, and the feature is obviously buggy, please report it in the [issue tracker](https://gitlab.com/gitlab-org/gitlab-ce/issues).

##Other bugs

GitLab has been around for close to three years now, and we think we've ironed out most of the bugs in the software by now. However, there are always new bugs that might have escaped the community's scrutiny.

If you see any other bug in GitLab, feel free to use the [issue tracker](https://gitlab.com/gitlab-org/gitlab-ce/issues) to notify us.

##Contributing

Whenever you find a bug in GitLab, you can also [contribute](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md) the fix. We always acknoweldge contributions in the [changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG).

