---
title: "GitLab 8.13 Released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
categories:
author: ADD_YOUR_FULL_NAME
author_twitter: TWITTER_USERNAME
image_title: /images/7_X/PICTURE.PNG
---

Intro and introduce main features here.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is
Marc Siegfriedt for his contribution of the multi-file commit API endpoint.
Marc showed patience and determination getting this complex merge request
merged.
Thanks Marc!

<!--more-->

## Multiple Issue Boards (EE)

## Merge Conflict Editor

## Group Labels

## Ability to stop Review Apps

## Ref per Deployment

## Pipelines for Commits

## Cycle Analytics Improvements

Previously, Cycle Analytics would only mesure what's been shipped to production
in a given time range. We've changed this behaviour and will now measure
everything that happened in this time range. Only the staging and production
stages will show what's actually been shipped to production.

## Assign issues to MR author

## /wip Slash Command

## Shell tracing for CI

https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/339

## Disable Git operations for CI

https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/332

## Deployment date on Merge Request

https://gitlab.com/gitlab-org/gitlab-ce/issues/21652

https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6676

### GitLab Mattermost

GitLab 8.13 includes [Mattermost](https://about.mattermost.com/), an open source Slack-alternative for web, PC and phone with [over 700 app integrations via Zapier](https://about.mattermost.com/mattermost-3-4/).
New integrations this month [now support connecting to Slack, Gitter, XMPP, and IRC](https://about.mattermost.com/new-community-integrations-for-open-source-slack-alternative-as-mattermost-prepares-for-3-5/).
Mattermost now [releases 6 times a year](https://about.mattermost.com/changing-release-cycle-to-bi-monthly-from-monthly/) and new updates ship with GitLab in alternate months.


## API additions

### Multi-file commit

https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6096

### Issue Board

https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6646

### Version Information

https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6822

### User events

https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6771

### Visible projects

https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6681

## Other changes

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


## Upgrade barometer


*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****


### Note

We assume you are upgrading from the latest version. If not, then also consult the upgrade barometers of any intermediate versions you are skipping.
If you are upgrading from a GitLab version prior to 8.0 *and* you have CI enabled, you have to upgrade to GitLab 8.0 [first](https://about.gitlab.com/2015/09/22/gitlab-8-0-released/).

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

----

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

----
