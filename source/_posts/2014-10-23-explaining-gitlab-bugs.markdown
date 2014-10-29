---
layout: post
title: "Explaining GitLab bugs"
date: 2014-10-29
comments: true
categories: 
author: Marc Radulescu
---

This blog post will give a short overview on how we treat bugs in GitLab

At GitLab, we differentiate between three different types of bugs:

 - Security bugs
 - Regression bugs
 - Feature requests

The image below illustrates the big picture:

[![screenshot](/images/gitlab_bugs/bugs_alt.png)](/images/gitlab_bugs/bugs_alt.png)

## Security bugs

Security bugs are system vulnerabilities that can be exploited to allow a user to gain unauthorized access to the GitLab server.
We always treat them as top priority.
We take action and give feedback within 1-2 days of notice.
Depending on the severity of the vulnerability, we will either patch GitLab, or fix the issue in the next minor release.

If you find a security bug in GitLab, please make sure to use [responsible disclosure](https://about.gitlab.com/disclosure/), and reach out to us at support@gitlab.com.

## Regression bugs

Regression bugs are bugs in the functionality of GitLab, that are unknowingly introduced in a new release.
Regression bugs are treated with priority.
We assess the impact of the regression bug and either create a patch or, more frequently, include the fix in the next minor release.

If you identify a regression bug, please let us know either via [Twitter](https://twitter.com/gitlabhq), or post it in the [issue tracker](https://gitlab.com/gitlab-org/gitlab-ce/issues).

## Feature requests

GitLab Features don't cover all use cases and all corner cases, so you might come across a feature that behaves different from what you'd expect.
In this case, the unexpected behavior is neither a security bug, nor a regression, and we treat it as a feature request.
Depending on the impact on GitLab's functionality, fixing this kind of bug might be considered a priority.
Before announcing it to us, please make sure to double-check our comments on the feature on the feedback tracker, on the changelog and in the release blog post.

If you have a specific corner case that is not covered by the feature, please use the [feedback tracker](http://feedback.gitlab.com/forums/176466-general) to bring it to our attention.

If your use case is generic, and the feature is obviously buggy, please report it in the [issue tracker](https://gitlab.com/gitlab-org/gitlab-ce/issues).

##Contributing

Whenever you find a bug in GitLab, you can also [contribute](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md) the fix, and add your contribution in the [changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG).
