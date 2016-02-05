---
layout: post
title: "GitLab 8.4.4 Released"
date: 2016-02-08
comments: true
author: GitLab
author_twitter: gitlab
filename: 2016-02-08-gitlab-8-dot-4-dot-4-released.markdown
---

Today we are releasing version 8.4.4 for GitLab Community Edition (CE) and
Enterprise Edition (EE).

This version includes more fixes for Elasticsearch, a re-introduction of the
"Send email to users" administration link that was mistakenly removed, and an
update to the omniauth-saml gem dependency in order to bring in the
[latest version of ruby-saml](https://github.com/onelogin/ruby-saml/blob/master/changelog.md#110-october-27-2015).

Read on for all the details!

<!-- more -->

- **CE/EE:** Update omniauth-saml gem to 1.4.2 ([!2684])
- **EE:** Re-introduce "Send email to users" link in Admin area ([!161])
- **EE:** Fix category values for Jenkins and JenkinsDeprecated services ([!163])
- **EE:** Fix Elasticsearch indexing for newly added Snippets ([!165])
- **EE:** Make Elasticsearch indexer more stable ([!167])

[!161]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/161
[!163]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/163
[!165]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/165
[!167]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/167
[!2684]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/2684

## Possible disclosure of secret credentials via Gitlab CI logs

***TODO (rspeicher):*** *[Explanation of problem](https://dev.gitlab.org/gitlab/gitlabhq/issues/2646#why-is-might-be-a-security-problem)*

***TODO (rspeicher):*** *[Explanation of fix](https://dev.gitlab.org/gitlab/gitlabhq/issues/2646#note_66600)*

## Elasticsearch Snippet indexing

If you enabled Elasticsearch indexing prior to this version, Snippets added
since that time may not be properly indexed.

To ensure those Snippets are properly indexed, run the following command:

***TODO (rspeicher):*** *`Snippet.import` command instructions*

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
