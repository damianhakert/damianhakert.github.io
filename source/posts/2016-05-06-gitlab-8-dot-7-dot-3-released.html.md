---
title: "GitLab 8.7.3 Released"
comments: true
author: GitLab
author_twitter: gitlab
---

Today we are releasing version 8.7.3 for GitLab Community Edition (CE) and
Enterprise Edition (EE).

It includes the following fixes:

- **CE/EE:** Emails, Gitlab::Email::Message, Gitlab::Diff, and
  Premailer::Adapter::Nokogiri are now instrumented ([!4038])
- **CE/EE:** Merge request widget displays TeamCity build state and code
  coverage correctly again ([!3998])
- **CE/EE:** Fix the line code when importing PR review comments from GitHub.
  ([!4010])
- **CE/EE:** Wikis are now initialized on legacy projects when checking
  repositories ([!3931])

<!-- more -->

## Upgrade barometer

This version does not include any new migrations, and should not require any
downtime.

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

## Updating

To update, check out our [update page](https://about.gitlab.com/update).

## Enterprise Edition

Interested in GitLab Enterprise Edition? Check out the [features exclusive to
EE](http://about.gitlab.com/features/#enterprise).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/subscription/).
No time to upgrade GitLab yourself? Subscribers receive upgrade and installation
services.

[!4038]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4038
[!3998]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3998
[!4010]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4010
[!3931]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3931
