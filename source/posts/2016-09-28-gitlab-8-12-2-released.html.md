---
title: "GitLab 8.12.2, 8.11.8, 8.10.11 and 8.9.11 released"
author: Rubén Dávila
author_twitter: rdavila
categories: security release
date: 2016-09-28 09:30
---

Today we are releasing versions 8.12.2, 8.11.8, 8.10.11 and 8.9.11 for GitLab Community
Edition (CE) and Enterprise Edition (EE).

Version 8.12.2 contains some security fixes for GitLab, plus fixes for minor
regressions. Version 8.11.8, 8.10.11 and 8.9.11 only contains the security fixes.

Please read on for more details.

<!-- more -->

- **CE/EE:** Enforce the fork_project permission in Projects::CreateService. ([!1996])
- **CE/EE:** Set a restrictive CORS policy for the API. ([!1998])
- **CE/EE:** API: disable rails session auth for non-GET/HEAD requests. ([!1999])
- **CE/EE:** Escape HTML nodes in builds commands in ci linter. ([!2001])
- **CE/EE:** Send ajax request for label update only if they are changed. ([!5071])
- **CE/EE:** Pass the full project path for resolve buttons. ([!6129])
- **CE/EE:** Fixed list issues not loading with spaces in filtered values. ([!6258])
- **CE/EE:** fix LDAP omniauth regression (Closes: #22357). ([!6462])
- **CE/EE:** Fixed awards dropdown search text from repeating. ([!6498])
- **CE/EE:** Fixes issue with rails reserved keyword type exporting/importing services. ([!6499])
- **CE/EE:** Fix snippets pagination. ([!6500])
- **CE/EE:** Wrap List-Unsubscribe link in angle brackets. ([!6511])
- **CE/EE:** Fix the "Commits" section of the cycle analytics summary. ([!6513])
- **CE/EE:** Fix Import/Export milestone and 1to1 models issue. ([!6521])
- **CE/EE:** Added v-cloak to resolve disc button. ([!6528])
- **CE/EE:** Be nice to Docker Clients talking to JWT/auth. ([!6536])
- **CE/EE:** Fix IssuesController#show degradation including project on loaded notes. ([!6540])
- **CE/EE:** Fix pipelines table headers. ([!6542])
- **CE/EE:** Do not regenerate the `lfs_token` every time `git-lfs-authenticate` is called. ([!6551])
- **CE/EE:** Changed to v-cloak attr to hash rocket and string 'true'. ([!6553])
- **CE/EE:** Fix duplicate master entries in the mr versions dropdown. ([!6567])

- **EE:** [ES] Fix internal data exposure. ([!504])
- **EE:** Add missing url param to ajax call. ([!760])
- **EE:** Ignore unknown project ID in RepositoryUpdateMirrorWorker. ([!754])

- **Omnibus GitLab** Update openssl to 1.0.2j to get the latest security fixes. ([!1006])

[!6536]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6536
[!5071]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5071
[!6542]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6542
[!6540]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6540
[!6521]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6521
[!6513]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6513
[!6511]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6511
[!6498]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6498
[!6129]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6129
[!6528]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6528
[!6462]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6462
[!6258]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6258
[!6500]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6500
[!6499]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6499
[!6553]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6553
[!6567]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6567
[!6551]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6551
[!1996]: https://dev.gitlab.org/gitlab/gitlabhq/merge_requests/1996
[!1998]: https://dev.gitlab.org/gitlab/gitlabhq/merge_requests/1998
[!1999]: https://dev.gitlab.org/gitlab/gitlabhq/merge_requests/1999
[!2001]: https://dev.gitlab.org/gitlab/gitlabhq/merge_requests/2001
[!504]: https://dev.gitlab.org/gitlab/gitlab-ee/merge_requests/504
[!760]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/760
[!754]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/754
[!1006]: https://gitlab.com/gitlab-org/omnibus-gitlab/merge_requests/1006

## Upgrade barometer

This version has no migrations and should not require any downtime.

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

## Updating

To update, check out our [update page](https://about.gitlab.com/update/).

## Sign up for security notices

Want to be alerted to new security patches as soon as they're available? Sign up
for our [Security Newsletter](https://about.gitlab.com/contact/).

## Enterprise Edition

Interested in GitLab Enterprise Edition? Check out the [features exclusive to
EE](https://about.gitlab.com/features/#enterprise).

Access to GitLab Enterprise Edition is included with a [subscription](https://about.gitlab.com/pricing/).
No time to upgrade GitLab yourself? Subscribers receive upgrade and installation
services.
