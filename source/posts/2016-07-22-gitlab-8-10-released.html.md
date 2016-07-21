---
title: "GitLab 8.10 released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
categories: release
author: Job van der Voort
author_twitter: Jobvo
image_title: /images/8_10/bg.jpg
---

Intro and introduce main features here.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is ***Winnie*** ***CONTRIBUTION_OF_MVP_USER***.
Thanks ***Winnie***!

<!--more-->

## Wildcard Branch Protection

To make sure your branches don't get deleted or accidentally pushed to,
you can protect them. For instance, your production and release branches
should only be pushed to by certain people.

With Gitlab 8.10 you can now protect any branch automatically, based on a
wildcard.

For example, if you protect `release-*`, any branch whose name starts
with `release-` automatically becomes protected. At GitLab we use this feature
to automatically protect all our stable releases by protecting `*-stable`.

## Merge into Protected Branches

Using protected branches is a great way to ensure only the right people
can push to important branches. By default, only `master` permission and higher
is able to push or merge anything into a protected branch.

Previously, we added the ability to allow `developer` users to also push to
these branches. With GitLab 8.10 you can now disallow pushing, yet explicitly
allow merges by `developer` users.

**Concretely this means that `developer` users can merge a merge request but not
directly push**. So your branches are protected from direct pushes, yet developers
don't need elevated permissions or wait for someone with a higher permission to
press merge.

Combine this feature with approvals (EE only) to enforce code review by multiple
people, while still giving developers the power to merge at their discretion.

## Better Side-by-Side Diffs

We've improved side-by-side diffs so that they now accurately show you the
changes side-by-side.

![Better side-by-side diffs in GitLab 8.10](/images/8_10/side1.png)

## Inline Diffs

When you have specific inline changes, we'll now show the exact changes that
were made, rather than just the entire line:

![Inline diffs in GitLab 8.10](/images/8_10/inline1.png)

## CI Improvements

### Key Feature

* Manual actions to trigger pipeline jobs: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5297

You've already got your [CI/CD pipeline](http://docs.gitlab.com/ce/ci/pipelines.html) configured to continuously deploy changes, right? Well maybe you're not ready to have it automatically deploy to production. You might automatically deploy to staging, but you want to do manual QA before deploying to production. Now you can define how to deploy to production and using `when: manual`, a new action will appear in the web UI so that you or your release manager can trigger that part of the pipeline manually. You can define any kind of job in your pipeline to be performed at a later time, when a user chooses.

![Manual Actions with Pipelines in GitLab 8.10](/images/8_10/ci_manual1.png)

The actions also show up in the environments, making it easy to promote from staging to production:

![Manual Actions with Pipelines in GitLab 8.10](/images/8_10/ci_manual2.png)

### Frontend Changes
* Lots of design updates for pipelines:
  * Update pipeline/build state icons: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5222 and https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5280
  * Don't pluralize pipeline stage headings: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5117
  * Change 'New Pipeline' button to 'Run Pipeline': https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5119
  * Shorten duration representation: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5121
  * Distinguish pipeline ref with tag or branch icon: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5239
* Move Build settings and build badge to new CI/CD Pipelines settings page: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5244
* Warn on failure (new `success_with_warnings` status): https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5004

### Backend Changes
* Extend CI predefined variables (`CI_PIPELINE_ID`, `CI_REGISTRY`, `CI_REGISTRY_IMAGE`, `CI_PROJECT_NAME`, `CI_PROJECT_PATH`, `CI_PROJECT_URL`): https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4826
* Fix LFS for CI: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5270
* Add an API endpoint to retrieve the latest build artifact for a branch: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5347
* Allow Slack service to notify status of builds on a different channel: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5124

### Runner v1.4 Changes

From now on, runner releases will be synchronized with monthly GitLab releases. (https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/176)

* Use Sentry in GitLab Runner to monitor critical errors: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/issues/1022: MR: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/217
* Improve logging: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/218
* Extend support for caching and artifacts for other executors: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/224
* Add support for cloning VirtualBox VM snapshots: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/111
* Improve support for Docker Machine: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/233
* Improve build abort: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/232

## Performance Improvements

### Backend

* HAML has been replaced with Hamlit to reduce memory usage and rendering timings of views: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3666
* Certain Git operations are now cached when finding CI pipelines: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4984
* Various Git operations on project dashboards are now cached, reducing the time spent in Git whenever the caches exist: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4996
* Git operations related to viewing trees of files are only executed when necessary: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4997
* The various Markdown reference parsers now re-use SQL queries when used multiple times in the same request, reducing the total number of executed SQL queries: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5020
* The column `projects.pushes_since_gc` is only updated at most once per minute, reducing the number of writes to the `projects` table: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5083
* Checking if an avatar is present no longer hits the underlying storage engine, reducing the time it takes to check if an avatar is present: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5093
* Checking if a user has access to a single project has been optimised: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5102
* The queries used to get merge request closing/merging events are now cached per request: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5151
* The presence of an external wiki is now cached on database level: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5305
* Performance of automatically generating links in Markdown has been improved: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5311
* Checking whether to show a system note has been optimized: gitlab-org/gitlab-ce!5070
* The maximum access badge for each author of a comment is now cached to prevent multiple lookups for the same author: gitlab-org/gitlab-ce!4982

### Frontend

* Rendering of diffs has been improved by only rendering certain UI elements when necessary: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4776
* Page specific JS loading has been implemented in a better way, reducing the amount of JS to load per page: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4883
* Cropper.js has been separated from the main JavaScript file and only load Cropper.js when necessary: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4978
* The projects dropdown now only sends the data it needs, reducing the time it takes to load the data: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5113
* Discussion notes are not rendered when the diff tab is requested using Ajax: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5130
* The code used to check which issues are closed by a merge request is only called when necessary: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5140

### Monitoring

* Sidekiq latency is now tracked: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4871
* Redis cache hits and misses are now tracked: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4993
* The Markdown syntax highlighting filter is instrumented: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5038

## Collapsable Diffs

## Blockquote Fence Syntax

## Multiple Repository Mount Points

##

## Ticket-based Kerberos authentication (Enterprise Edition)

Before GitLab 8.10 users had to submit their Kerberos username and password on the GitLab sign-in page to authenticate with Kerberos. In GitLab 8.10 Enterprise Edition it is possible for Kerberos users to sign in with one click without ever submitting their password to GitLab, via the new 'Kerberos Spnego' button on the sign-in page.

We have added an OmniAuth provider for Kerberos SPNEGO authentication which reuses code originally [contributed by CERN in GitLab 7.14](https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/6) that enabled ticket-based 'git clone'. If the web browser of the user 'understands' Kerberos and the user has a valid Kerberos ticket on their local machine then the browser can negotiate access to GitLab during sign-in without ever asking the user for a password.

Read the [Kerberos documentation](http://docs.gitlab.com/ee/integration/kerberos.html) to learn how to enable ticket-based Kerberos integration on your GitLab Enterprise Edition server. We will remove support for password-based Kerberos sign-ins in a future release so if you are currently using GitLab with password-based Kerberos sign-ins we recommend that you switch to ticket-based sign-ins.

## Syntax Highlighting

* Override language guessing with a .gitattributes entry: gitlab-org/gitlab-ce!4606
  - Documentation: https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/user/project/highlighting.md
* Upgrade rouge from 1.11.1 to 2.0.5: gitlab-org/gitlab-ce!4691
  - new lexers, bugfixes: https://github.com/jneen/rouge/blob/master/CHANGELOG.md

## Updated Emoji!

We've updated to the 2016 library of [gemojione](https://github.com/jonathanwiesel/gemojione),
adding many new and updated emoji!

![New Emoji in GitLab 8.10!](/images/8_10/new_emoji.png)

## License Usage Report

To help us better engage with our customers, 8.10 EE periodically attempts to
send license usage back to GitLab, Inc. You can
disable this functionality by unchecking a setting in the application settings
page, which will also show you the _exact_ payload that we're sending.

![License Usage Report](/images/8_10/license_report.png)

## GitLab Mattermost 3.2

[Mattermost 3.2](https://www.mattermost.org/mattermost-3-2-german-custom-emoji-improved-threaded-messaging-search-windows-and-mac-apps-plus-more/) ships in GitLab 8.10 with German language translation, custom emoji, improved threaded messages, widescreen search, new Exchange and XMPP integrations, plus many more new benefits.

This version also includes [security updates](http://about.mattermost.com/security-updates/) and upgrade from earlier versions is recommended.

## Other changes

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


## Upgrade barometer


### Update your NGINX configuration

The default NGINX configuration now overwrites the 'Host' and 'X-Forwarded-Host' headers. This adds defense in depth against header injection attacks. For installations from source this means you need to update your NGINX configuration for GitLab. For Omnibus installations this will happen automatically, unless you configured your own 'Host' and 'X-Forwarded-Host' values in gitlab.rb.


*Note* We assume you are upgrading from the latest version. If not, then also consult the upgrade barometers of any intermediate versions you are skipping.
If you are upgrading from a GitLab version prior to 8.0 *and* you have CI enabled, you have to upgrade to GitLab 8.0 [first](https://about.gitlab.com/2015/09/22/gitlab-8-0-released/).

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

- - -

## Installation

If you are setting up a new GitLab installation please see the
[download GitLab page](https://about.gitlab.com/installation/).

## Updating

Check out our [update page](https://about.gitlab.com/update/).

## Enterprise Edition

The mentioned EE only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE]( https://about.gitlab.com/features/#enterprise).

Access to GitLab Enterprise Edition is included with a
[subscription]( https://about.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles you to our upgrade and installation services.

- - -
