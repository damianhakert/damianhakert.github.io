---
layout: post
title: "GitLab 7.12 released with SAML support, Merge Request Approvers and .gitlab-ci.yml!"
date: 2015-06-22
comments: true
categories:
author: Job van der Voort
filename: FILENAME.MARKDOWN
image_title: /images/7_X/PICTURE.PNG
---

A new season is in, and so is GitLab 7.12! This month's release brings some big
additions and changes to CE, EE and CI. Starting with CE, GitLab now supports
SAML! This was requested by many and very happy that one of our community contributors
was so kind to build this. In GitLab Enterprise Edition you can now require multiple
people to approve a merge request before it can be merged. In GitLab CI, we're
introducing the `.gitlab-ci.yml` file, making job scripts much easier to manage.

This month's MVP was an easy choise. X from CERN contributed the SAML code he
wrote for their own usage. We're very happy with this contribution and are sure
many of you will make use of this.
Thanks X!!

<!--more-->

### SAML Support

blabla

### Merge Request Approvers (EE only)

blabla

## .gitlab-ci.yml file replaces jobs

As [announced on May 6](https://about.gitlab.com/2015/05/06/why-were-replacing-gitlab-ci-jobs-with-gitlab-ci-dot-yml/)
we're replacing GitLab CI jobs with a .gitlab-ci.yml stored in the code repository.
The advantages are listed in the announcement but the main ones are:

1. Since build script is version controlled more people can see it and to propose changes
1. Older and newer branches build correctly since they can contain a different build file
1. Forks automatically get a proper build script that gets updated when they merge upstream in

HOW IT WORKS AND THE SYNTAX

IMPORTING OLD JOBS AND TEMPORARY YML FILE

The new format is inspired by the work of Travis CI and Circle CI who are already using YAML files.
Initially we considered using the open source modules of Travis CI,
but we ended up writing our own so we could offer:

1. Customizable deploy jobs
1. Ability to run jobs on metal, vm's and docker images
1. Ability to run on the same machine each time (for example for performance testing)
1. Ability to run on special architectures (for example a Raspberry Pi 2)
1. Ability to run on machines in a special place or with certain credentials
1. A simple and shallow syntax for the YAML file
1. Named jobs, so they are easily recognizable

Because of this, the "one image per architecture and that's it" -approach was not an option.
As you are able to tag runners and jobs, this gives you a lot of freedom in
assigning a job to a certain runner.
We hope the new format combines the freedom of Jenkins
with the user friendliness of Travis CI.

### Other changes

This release has more improvements, including security fixes, please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.

#### Changed behavior for 'secret_token' settings when using Omnibus packages

If you set a custom value for `gitlab_rails['secret_token']`, `gitlab_shell['secret_token']` or `gitlab_ci['secret_token']` in `/etc/gitlab/gitlab.rb` please make a **backup copy** of `/etc/gitlab/gitlab-secrets.json` before upgrading to GitLab 7.12.
If you have custom setting for none of these three 'secret_token' values in `gitlab.rb` then this section does not apply to you.

When you install the omnibus-gitlab package for the first time, secret tokens get created for GitLab, gitlab-shell and GitLab CI.
Auto-generated tokens are stored in `/etc/gitlab/gitlab-secrets.json`.
These tokens are used for CSRF protection, API call authentication from gitlab-shell to GitLab, and to encrypt OTP secrets stored in the GitLab database.

Prior to this version, speciying secret setting in gitlab.rb would be ignored until file `/etc/gitlab/gitlab-secrets.json` was removed.

This was an unexpected behaviour as it was expected that specifying a setting in gitlab.rb always takes precedence.

From this release onwards, if you have a setting in gitlab.rb for `secret_token` for either gitlab-rails, gitlab-shell or gitlab-ci the change will be applied and all cookies signed with the old secret_token will become invalid.

#### Updated recommended SSL cipher suites

Following the [Logjam vulnerability](https://about.gitlab.com/2015/05/21/security-advisory-for-logjam-vulnerability/) we changed the recommended SSL cipher suites in omnibus-packages and installations from source. More details can be found in [this blogpost](https://about.gitlab.com/2015/06/16/gitlab-com-and-logjam/).


### Upgrade barometer

*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****

- - -

## Installation

If you are setting up a new GitLab installation please see the [installing GitLab page](https://www.gitlab.com/installation/).

## Updating

Check out our [update page](https://about.gitlab.com/update/).

## Enterprise Edition

The mentioned EE only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles you to our upgrade and installation services.

- - -
