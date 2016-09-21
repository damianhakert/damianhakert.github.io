---
title: "GitLab 8.12 released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
categories:
author: Job van der Voort
author_twitter: Jobvo
image_title: /images/7_X/PICTURE.PNG
---

Intro and introduce main features here.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is ***MVP_USER*** ***CONTRIBUTION_OF_MVP_USER***.
Thanks ***MVP_USER_FIRST_NAME***!

<!--more-->

## Cycle Analytics

## Global Code Search (EE)

## SSH Authentication for LFS

## Toggle LFS

## Merge Request Versions

## Enforce Project Size Limit

## Preventing Secrets in your repositories (EE)

## API additions

## GitLab Mattermost 3.4

GitLab 8.12 includes [Mattermost 3.4](https://about.mattermost.com/mattermost-3-4/),
an [open source Slack-alternative](https://about.mattermost.com) whose newest
release offers 700 integrations with full Markdown support via Zapier,
simplified bot and 3rd party authentication via OAuth2, and community
integrations with Gitter, Heroku, Pivotal Tracker, Chef, Ansible and Yunohost.

TODO other changes

- Add internal API to recovery 2FA - https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5510
- Add notification_settings API calls - https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5632 (community contribution)
- Fix "Remember Me" for users of U2F - https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5918
- Import GitHub release notes - https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5981 (community contribution)
- Added project specific enable/disable setting for LFS - https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5997
- Create bitmaps during 'git gc' - https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6104
- Add a BroadcastMessage API - https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6112
- Allow compare merge request versions - https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6127
- Added cron to prune events older than 12 months. - https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6200 (community contribution)
- Update snippets UI - https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6210
- Add bulk update support for merge requests list - https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6226
- Group similar builds - https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6242

## Performance Improvements

* Sidekiq processes now use a connection pool when using Rails' caching
  mechanism: [merge request](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6429)
* The oj Gem is now used for faster JSON processing: [merge request](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6395)
* The column `projects.last_activity_at` is only updated once an hour to reduce
  database load: [merge request](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6391)
* The column `projects.pushes_since_gc` has been moved from the database to
  Redis to reduce database load: [merge request](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6326)
* Protected branch checks are not performed when no branch name is known,
  reducing time spent in this process: [merge request](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6317)
* Checking if one can resolve a note is only done when notes can be resolved in
  the first place: [merge request](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6298)
* The `ci_runners` table is now updated less frequently to reduce database load:
  [merge request](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6126)
* The number of database queries used for the "Builds" tab for
  commits/merge requests has been reduced: [merge request](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5957)
* The payload size for the contributions calendar has been reduced:
  [merge request](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5784)


## Other changes

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


## Upgrade barometer

This release requires downtime due to foreign keys being added, column types
being changed, and various columns being removed from some tables. The whole
migration process could take up to 30 minutes for large instances. Smaller instances should expect a downtime of about 10-15 minutes.

### (EE Only) Elasticsearch reindexing

We changed the structure of Elasticsearch index for repositories, making use of Parent Child relationships. This requires a total rebuild of the ES index. Also
Elasticsearch 2.3.* contains a bug that causes to fail all queries that use highlight feature and Parent Child relationship at once, so we recommend to use the version 2.4 and newer. After upgrading to GitLab 8.12, you will need to remove the old index and rebuild new index:

To remove the old index, call to Elasticsearch:

```
curl -XDELETE 'http://localhost:9200/gitlab-production/'
```

Then rebuild new indexes as described in [Elasticsearch integration](http://docs.gitlab.com/ee/integration/elasticsearch.html#add-gitlabs-data-to-the-elasticsearch-index)

### Ruby Update

Last release we mentioned we'd be dropping Ruby 2.1.x support in GitLab 8.13,
we no longer plan to stop supporting Ruby 2.1.x in the near future.

We still recommend you to upgrade to Ruby 2.3 if you're running a source
installation, as this is the same version that ships with our Omnibus package
now.

### Expanded usage data ping

In order to better understand the usage of GitLab by our customers,
GitLab 8.12 EE now sends additional data along its usage ping.

No information about the nature of the data, such as project names, comments or
other content is transmitted. You can view the exact data that is sent in
the admin settings. This is also where you can opt-out of the usage ping.

TODO docs link

### Note

We assume you are upgrading from the latest version. If not, then also consult the upgrade barometers of any intermediate versions you are skipping.
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
