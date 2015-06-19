---
layout: post
title: "GitLab 7.12 released with SAML support, Merge Request Approvers and .gitlab-ci.yml"
date: 2015-06-22
comments: true
categories:
author: Job van der Voort
author_twitter: Jobvo
filename: 2015-06-22-gitlab-7-12-released.markdown
image_title: /images/7_12/sf.jpg
---

A new season is in, and so is GitLab 7.12! This month's release brings some big
additions and changes to CE, EE and CI. Starting with CE, GitLab now supports
SAML! This was requested by many and very happy that one of our community contributors
was so kind to build this. In GitLab Enterprise Edition you can now require multiple
people to approve a merge request before it can be merged. In GitLab CI, we're
introducing the `.gitlab-ci.yml` file, making job scripts much easier to manage.

This month's MVP was an easy choice. Alexandre Lossent from CERN contributed the SAML code they
wrote for their own usage. We're very happy with this contribution and are sure
many of you will make use of this.
Thanks Alexandre!!

<!--more-->

## SAML Support

With the contribution of Alexandre, GitLab can now be configured to act as
a SAML 2.0 Service Provider. This allows GitLab to consume assertions from a SAML 2.0
Identity Provider (IdP) such as Microsoft ADFS to authenticate users.

See our [documentation on how to setup SAML integration](http://doc.gitlab.com/ce/integration/saml.html).

## Web Hook for Comments

There is a new web hook available that will trigger on all comments.
Make good use of it!

## Better performance for the Web Editor

Every new release of GitLab is faster than its previous, but in this release
we did something special. We replaced the satellites that were used for editing
in the web interface. This has significantly improved the performance of the
web editor.

## UI Update

Every month we experiment and tune our UI to be better, prettier and more intuitive
and this month is no different.

We've moved your profile link to the bottom left and updated the looks of
various parts of the UI.

![Profile bottom left](/images/7_12/profile.png)

## Merge Request Approvers (EE only)

If you want to make absolutely sure that a merge request is checked by multiple
people, you can now set merge request approvers for each merge request in a
project.

You simply set the amount of approvals that a merge request needs before allowing
it to be merged and GitLab will restrict anyone from merging until the set amount
of approvals has been met.

SCREENSHOTS

We'd love to hear how you are using this feature in your organization.

## Git hook to check Maximum File Size (EE only)

We've added a new Git Hook that allows you to restrict the incoming commits
with large files. You can simply set the threshold and GitLab will take care
of the rest.

## LDAP Group Sync improvements (EE only)

We've made several improvements to LDAP Group sync in GitLab EE.
It now checks for several more attributes when syncing and
prevents the sync from removing the last owner in a group.

## .gitlab-ci.yml file replaces jobs (CI)

As [announced on May 6](https://about.gitlab.com/2015/05/06/why-were-replacing-gitlab-ci-jobs-with-gitlab-ci-dot-yml/)
we're replacing GitLab CI jobs with a .gitlab-ci.yml stored in the code repository.
The advantages are listed in the announcement but the main ones are:

1. Since build script is version controlled more people can see it and to propose changes
1. Older and newer branches build correctly since they can contain a different build file
1. Forks automatically get a proper build script that gets updated when they merge upstream in
1. You can experiment with CI build settings in your branch not breaking the rest of branches.
   It's not possible for Jenkins-like settings.

### How it works

GitLab sends the web-hook and the `.gitlab-ci.yml` contents
to the CI Coordinator, which creates builds based on the YAML file. In turn,
these builds are executed by the Runners as it was before.

Here is an example of YAML file:

```
before_script:
  - gem install bundler
  - bundle install
  - bundle exec rake db:create

rspec:
  script: "rake spec"
  tags:
    - ruby
    - postgres
  only:
    - branches

spinach:
  script: "rake spinach"
  tags:
    - ruby
    - mysql
  except:
    - tags

staging:
  script: "cap deploy staging"
  type: deploy
  tags:
    - capistrano
    - debian
  except:
    - stable

production:
  script:
    - cap deploy production
    - cap notify
  type: deploy
  tags:
    - capistrano
    - debian
  only:
    - master
    - /^deploy-.*$/
```

We include a Lint tool to check your syntax. It is available in every GitLab CI instance by the short url `/lint`.
If something goes wrong with your .gitlab-ci.yml after push your code you will be able to see errors in the commit page.

The `before_script` section will be performed before each job.
You can define a deploy job by adding `type: deploy`.
Every job contains parameters sycg as `script` (shell script), `tags`
(only runner with this tag/tags can pick this build) and `only` or `except` parameter
that defines branch names allowed to run build on.
The `only` section takes precedence over the "except".
You can read more information about new syntax in the
[Configuration of your builds with .gitlab-ci.yml](http://doc.gitlab.com/ci/builds_configuration/README.html)

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

### Migrating

Upon upgrading to GitLab 7.12, your CI job scripts will be converted automatically
into an example `.gitlab-ci.yml` file, which you can view and download in the
project page in GitLab CI.

On a push that triggers a build, GitLab sends a long the `.gitlab-ci.yml` file
from the root of the repository. If this is not present, GitLab CI will make use
of the generated example script. This means your projects that are not updated
should work fine. However, we do recommend that you add the `.gitlab-ci.yml`
file to the root of your repository as soon as possible.

Note that you must also do this for long-running branches, in case you want to
make any specific changes to those.

## Secret Variables for runner (CI)

We've added a new function to GitLab CI that allows you to set secret variables
for runners. Secret variables will be set to the environment by the runner
and will be hidden from the build log.
Use them for passwords, secret keys or anything else.
Make sure you have runner version 4 or greater.

![Secret Variables](/images/7_12/secrets.png)

## Other changes

This release has more improvements, including security fixes, please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.

- - -

## Upgrade barometer

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
