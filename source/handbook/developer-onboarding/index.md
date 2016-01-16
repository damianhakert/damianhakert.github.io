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

This is the SaaS of GitLab. Everyone can host their repository for free here and
this is where the majority of open source contributions come in. Unless there's
a good reason not to (customer information disclosure, undisclosed security
issues, etc.), do your development and submit your merge requests here [in the open].

### Other instances

Many developers set up their own private GitLab instance somewhere, for instance
to test and work with LDAP or Active Directory, to give demos, or for various
other reasons.

## Getting started with GitLab development

To start development, follow the instructions for the [GitLab Development Kit](https://gitlab.com/gitlab-org/gitlab-development-kit).

## GitLab Repositories

Almost all repositories are available on both gitlab.com and dev.gitlab.org. We
also mirror our biggest projects to [GitHub](https://github.com/gitlabhq),
making them more widely available for people to contribute.

### GitLab Community Edition (CE)

This is the community edition of GitLab. Most of the development happens here,
then gets merged into GitLab EE periodically. Unless you're making a change
specific to GitLab EE, add it to CE.

- [https://dev.gitlab.org/gitlab/gitlabhq](https://dev.gitlab.org/gitlab/gitlabhq)
- [https://gitlab.com/gitlab-org/gitlab-ce](https://gitlab.com/gitlab-org/gitlab-ce)
- [https://github.com/gitlabhq/gitlabhq](https://github.com/gitlabhq/gitlabhq)

### GitLab Enterprise Edition (EE)

This is _not_ an open source project, but we made the source code available for
viewing and contributions. As of version 7.11, it requires a license key to be
used.

- [https://dev.gitlab.org/gitlab/gitlab-ee](https://dev.gitlab.org/gitlab/gitlab-ee) - Most development happens here.
- [https://gitlab.com/gitlab-org/gitlab-ee](https://gitlab.com/gitlab-org/gitlab-ee) - Public repository.

### GitLab Shell

GitLab Shell handles git commands for GitLab. It's an essential part of GitLab.

- [https://dev.gitlab.org/gitlab/gitlab-shell](https://dev.gitlab.org/gitlab/gitlab-shell)
- [https://gitlab.com/gitlab-org/gitlab-shell](https://gitlab.com/gitlab-org/gitlab-shell)
- [https://github.com/gitlabhq/gitlab-shell](https://github.com/gitlabhq/gitlab-shell)

### GitLab Workhorse

Gitlab-workhorse is a smart reverse proxy for GitLab. It handles "large" HTTP
requests such as file downloads, file uploads, Git push/pull and Git archive
downloads.

- [https://gitlab.com/gitlab-org/gitlab-workhorse](https://gitlab.com/gitlab-org/gitlab-workhorse)

### Omnibus GitLab

Omnibus GitLab creates the packages for GitLab.

- [https://dev.gitlab.org/gitlab/omnibus-gitlab](https://dev.gitlab.org/gitlab/omnibus-gitlab)
- [https://gitlab.com/gitlab-org/omnibus-gitlab](https://gitlab.com/gitlab-org/omnibus-gitlab)
- [https://github.com/gitlabhq/omnibus-gitlab](https://github.com/gitlabhq/omnibus-gitlab)

## Cloud infrastructure

GitLab.com runs on Amazon Web Services (AWS). Many people in GitLab also have
instances on DigitalOcean. If you need a VPS for any reason, it's probably easiest
to set one up at DigitalOcean. Ask another developer for access.

## Operations

For everything related to operations, check out the
[Operations handbook](https://about.gitlab.com/handbook/operations).

## Basics of GitLab development

### Quality

One of GitLab's strengths is its high quality of software. To achieve this we've introduced
some requirements to all source code that is contributed. All requirements are mentioned in
[the Contribution guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md).
Make sure you read and follow it.

### Dependencies

GitLab can be installed through an Omnibus package or from source on different Linux distributions and OS X.
In order to maintain portability we need to avoid adding extra dependencies and use of exotic database extensions.
Every time you choose between changes in the application code or adding new dependencies
you should give priority to the first because this is easier to maintain and setup.
If you still need to bring new dependencies to GitLab - ask another developer or the CTO for advice.

### Submit your code

In GitLab all code should go through a review process before it can be merged.
Make sure you submit a merge request for any changes you've made.
When the merge request is ready it should be assigned to someone else on the team.
This person is then responsible for reviewing your code and merging it.
Optionally you can request another developer to help or review by writing a comment.
If a merge request is not assigned it will probably ignored and create unnecessary
delays.

Don't work on one task for multiple days before submitting a merge request.
Even the biggest task can be split into smaller tasks.
Try to submit a merge request for each part of the functionality.
This means that we expect multiple a merge request per week from you.
Smaller merge requests are more likely to receive good feedback and will get merged sooner.

Unless the change is very minor, or is fixing a bug that was introduced in the
same version, add an entry to `CHANGELOG` (or `CHANGELOG-EE` when applicable).
Do not include your name in the entry as we only do that to give recognition to
volunteer contributors.

### Review

A merge request that fixes a `Frontend` issue should have the `Frontend` label
and be assigned to a Frontend Engineer for review. All other merge requests
should be assigned for review to one of merge request endbosses. You can find
them listed on the [team page](https://about.gitlab.com/team/).

### Ruby Gems

When building and publishing Gems for GitLab make sure multiple developers have
access to said Gem on RubyGems.org. This ensures a Gem doesn't end up being
orphaned because the original author left, lost their credentials, passed away,
etc. When publishing a Gem you can add the following people as co-owners:

* Dmitriy Zaporozhets
* Douwe Maan
* Robert Speicher

You're of course free to add other developers as well.

[handbook]: https://about.gitlab.com/handbook
[in the open]: https://about.gitlab.com/2015/08/03/almost-everything-we-do-is-now-open/
