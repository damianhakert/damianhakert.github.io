---
title: "GitLab 8.14.8 released"
author: Alejandro Rodríguez
author_twitter:
categories: release
---

Today we are releasing version 8.14.8 for GitLab Community Edition (CE) and
Enterprise Edition (EE).

This version resolves a number of regressions and bugs in the [recent 8.14
release](/2016/11/22/gitlab-8-14-released).

Please read on for more details.

<!-- more -->

- **CE/EE:** Accept environment variables from the `pre-receive` script ([!7967])
- **CE/EE:** Speed up group milestone index by passing group_id to IssuesFinder ([!8363])
- **CE/EE:** Memoize Milestoneish#issues_visible_to_user to reduce lookups ([!8146])
- **CE/EE:** Bump gitlab-shell to 4.1.1 ([!8143])
- **CE/EE:** Ensure issuable state changes only fire webhooks once ([!8101])
- **CE/EE:** Fix N+1 queries on milestone show pages ([!8185])
- **CE/EE:** Reject blank environment variables in Gitlab::Git::RevList ([!8189])

[!7967]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/7967
[!8363]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8363
[!8146]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8146
[!8143]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8143
[!8101]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8101
[!8185]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8185
[!8189]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8189

## Updating

To update, check out our [update page](https://about.gitlab.com/update/).

## Enterprise Edition

Interested in GitLab Enterprise Edition? Check out the [features exclusive to
EE](https://about.gitlab.com/features/#enterprise).

Access to GitLab Enterprise Edition is included with a [subscription](https://about.gitlab.com/pricing/).
No time to upgrade GitLab yourself? Subscribers receive upgrade and installation
services.
