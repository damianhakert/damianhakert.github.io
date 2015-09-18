---
layout: markdown_page
title: "Developer Onboarding"
---

Awesome! You're about to become a GitLab developer!
Make sure you've checked out our [handbook] beforehand, so you get a feeling
of how we work at GitLab. Below you'll find everything you need to start developing.
If something is missing, add it (as goes with everything at GitLab)!

## GitLab instances

We have two GitLab instances that we use primarily:

### dev.gitlab.org

This server is only accessible to people from GitLab the company.

This is the instance we use for customers development.

In addition, all our internal (company) issues are found here as well.

This server is updated from master every night, so we quickly see if we broke something.

Often referred to as `dev`.

### GitLab.com

This is the SaaS of GitLab. Everyone can host their repository for free here
and this is where the majority of open source contributions come in.
Unless there's a good reason not to (sensitive customer information,
not-yet-disclosed security issues), do your development here [in the
open](https://about.gitlab.com/2015/08/03/almost-everything-we-do-is-now-open/).

### Other instances

Many developers set up their own private GitLab instance somewhere, for instance
to test and work with LDAP or Active Directory, give demos and other reasons.

## Getting started with GitLab development

To start development, simply follow the instructions at the
[GitLab Development Kit](https://gitlab.com/gitlab-org/gitlab-development-kit).

## GitLab Repositories

Almost all repositories are available on both gitlab.com and dev.gitlab.org. We
also mirror our biggest projects to [GitHub](https://github.com/gitlabhq),
making them more widely available for people to contribute.

### GitLab Community Edition (CE)

This is the community edition of GitLab. Most of the development happens here,
then gets merged into GitLab EE periodically. Unless you're making a change
specific to GitLab EE, add it to CE.

- [dev.gitlab.org/gitlab/gitlabhq]
- [gitlab.com/gitlab-org/gitlab-ce]
- [https://github.com/gitlabhq/gitlabhq](https://github.com/gitlabhq/gitlabhq)

### GitLab Enterprise Edition (EE)

This is _not_ an open source project, but we made the source code available for
viewing and contributions. As of version 7.11, it requires a license key to be
used.

It exists in three places. The subscribers repository is deprecated and used to be
used as a private repository for customers:

- [dev.gitlab.org/gitlab/gitlab-ee] Most development in EE happens here.
- [gitlab.com/gitlab-org/gitlab-ee] Public repo of EE.
- [gitlab.com/subscribers/gitlab-ee] Deprecated private and no longer update repo.

### GitLab Continuous Integration (CI)

GitLab CI is the CI tool that runs the tests in your repositories, does deploys
and anything you program it to do. It comes bundled with every GitLab package.

Available on both instances:

- [https://dev.gitlab.org/gitlab/gitlab-ci](https://dev.gitlab.org/gitlab/gitlab-ci)
- [https://gitlab.com/gitlab-org/gitlab-ci](https://gitlab.com/gitlab-org/gitlab-ci)
- [https://github.com/gitlabhq/gitlab-ci](https://github.com/gitlabhq/gitlab-ci)

### GitLab Shell

GitLab Shell handles git commands for GitLab. It's an essential part of GitLab.

- [https://dev.gitlab.org/gitlab/gitlab-shell](https://dev.gitlab.org/gitlab/gitlab-shell)
- [https://gitlab.com/gitlab-org/gitlab-shell](https://gitlab.com/gitlab-org/gitlab-shell)

### Omnibus GitLab

Omnibus GitLab creates the packages for GitLab.

- [https://gitlab.com/gitlab-org/omnibus-gitlab](https://gitlab.com/gitlab-org/omnibus-gitlab)
- [https://dev.gitlab.org/gitlab/omnibus-gitlab](https://dev.gitlab.org/gitlab/omnibus-gitlab)
- [https://github.com/gitlabhq/omnibus-gitlab](https://github.com/gitlabhq/omnibus-gitlab)

## Cloud infrastructure

GitLab.com runs on Amazon Web Services (AWS). Many people in GitLab also have
instances on DigitalOcean. If you need a VPS for any reason, it's probably easiest
to set one up at DigitalOcean. Ask another developer for access.

## Operations

For everything related to operations, check out the
[Operations handbook](https://about.gitlab.com/handbook/operations).


[handbook]: https://about.gitlab.com/handbook
[dev.gitlab.org/gitlab/gitlabhq]: https://dev.gitlab.org/gitlab/gitlabhq
[gitlab.com/gitlab-org/gitlab-ce]: https://gitlab.com/gitlab-org/gitlab-ce
[dev.gitlab.org/gitlab/gitlab-ee]: https://dev.gitlab.org/gitlab/gitlab-ee
[gitlab.com/gitlab-org/gitlab-ee]: https://gitlab.com/gitlab-org/gitlab-ee
[gitlab.com/subscribers/gitlab-ee]: https://gitlab.com/subscribers/gitlab-ee