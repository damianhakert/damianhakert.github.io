---
title: "GitLab 8.7.4 Released"
comments: true
author: GitLab
author_twitter: gitlab
---

Today we are releasing version 8.7.4 for GitLab Community Edition (CE) and
Enterprise Edition (EE). This release includes two security fixes and as such we
**strongly recommend** all affected users to upgrade their GitLab installations
as soon as possible.

It includes the following fixes:

- **EE:** Delete ProjectImportData record only if Project is not a mirror
  ([!370])
- **EE:** Fixed typo in GitLab GEO license check alert ([!379])
- **CE/EE:** Links for Redmine issue references are generated correctly again
  ([!4048])
- **CE/EE:** Fix setting trusted proxies ([!3970])
- **CE/EE:** Fix BitBucket importer bug when throwing exceptions ([!3941])
- **CE/EE:** Use sign out path only if not empty ([!3989])
- **CE/EE:** Running rake gitlab:db:drop_tables now drops tables with cascade
  ([!4020])
- **CE/EE:** Running rake gitlab:db:drop_tables uses "IF EXISTS" as a precaution
  ([!4100])

It also includes the following security fixes:

- **CE/EE:** Use a case-insensitive comparison in sanitizing URI schemes
  ([5ec434])
- **EE:** Fix LDAP access level spillover bug ([!499])

<!-- more -->

## URI Scheme Sanitization

This change (see [5ec434]) fixes a persistent XSS vulnerability. All versions of
GitLab Community Edition and GitLab Enterprise Edition prior to 8.7.3 are
affected.

Thanks to [AnirudhAnand](https://hackerone.com/a0xnirudh) on HackerOne for
responsibly disclosing this issue to us.

## GitLab Enterprise LDAP Group Sync

GitLab Enterprise Edition versions 8.7.0, 8.7.1, 8.7.2 and 8.7.3 contain an LDAP
group sync bug that can lead to Gitlab users being added to GitLab groups they
do not belong to. We do not know if it is possible for a malicious GitLab user
to reliably exploit this bug. Regardless of exploitability, when this bug
strikes it makes unwanted changes to your project access controls.

GitLab Enterprise Edition 8.6.8 and older are not affected by this bug. GitLab
Community Edition is not affected by this bug. If you are not using LDAP group
synchronization in GitLab Enterprise Edition then you are not affected by this
bug.

We recommend all users of GitLab Enterprise Edition 8.7.0 and newer to upgrade
to GitLab Enterprise Edition 8.7.4 as soon as possible.

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

[!370]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/370
[!379]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/379
[!499]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/499
[!4048]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4048
[!3970]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3970
[!3941]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3941
[!3989]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3989
[!4020]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4020
[!4100]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4100
[5ec434]: https://gitlab.com/gitlab-org/gitlab-ce/commit/5ec434706727b279f55eff4875bf76de48dd1735
