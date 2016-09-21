---
title: "GitLab 8.12 released with Cycle Analytics and Global Code Search"
categories:
author: Job van der Voort
author_twitter: Jobvo
image_title: /images/7_X/PICTURE.PNG
---

Whether you're working on a small or a large project, your tools should get out of your way and give you actionable feedback. This month, we're make sure GitLab does both and better than ever.

GitLab 8.12 will give you feedback on how efficient you actually work, helps you find code across the entire instance, makes your workflow much safer with a single click and much more.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is James Munnelly for
Thanks James!

<!--more-->

## Cycle Analytics

Reducing cycle time, the time it takes you to go from idea all the way to
production, is the [first principle of conversational development][convdev].
The shorter the cycle time, the higher the efficiency of your team.

In order to make it possible to actually see what your cycle time is, we're
introducing [Cycle Analytics][cycle-analytics] with GitLab 8.12.

TODO SCREENSHOT

Cycle Analytics tells you what your cycle time is and breaks it down into
several steps, so you can quickly see where to improve and accurately predict
when you're shipping something.

Find Cycle Analytics under Pipelines in all your projects.

[convdev]: https://about.gitlab.com/2016/09/14/gitlab-live-event-recap/#convdev
[cycle-analytics]: https://about.gitlab.com/2016/09/16/feature-preview-introducing-cycle-analytics/

## Global Code Search (EE)

If you're running Elasticsearch on your GitLab Enterprise Edition instance,
you will now be able to search through _all_ code on the server!

TODO SCREENSHOT

Just use the search as before and GitLab will show you matching code from each
project you have access to.

Note that this change requires that you rebuild your Elasticsearch index.
See the upgrade barometer below for more information.

TODO DOCS

## Merge Request Versions

When you're pushing more than a single commit to a merge request,
it can be hard to view what changed between versions and the target branch.

TODO SCREENSHOT

With merge request versions you can view previous states of a merge request: compare between a previous commit and the target branch or even between versions, showing you what has changed between certain commits.

TODO DOCS

## Preventing Secrets in your repositories (EE)

It's a bad idea to commit secrets (such as keys and certificates) to your repositories: they'll be cloned to the machines of anyone that has access to the repository, only one of which has to be insecure.

Yet, it happens quite easily. You write `git commit -am 'quickfix' && git push` and suddenly you've committed to files that were meant to stay local!

GitLab now has a new [push rule][push-rules] that will prevent commits with secrets from entering the repository. Just check the checkbox and GitLab will prevent common unsafe files such as `.pem` and `.key` from being committed.

TODO SCREENSHOT

GitLab Enterprise Edition already had a feature that allows you to block files based on a regular expression, which you can leverage to block anything that we didn't think of. We also welcome suggestions and contributions to make this push rule even better.

TODO DOCS

[push-rules]: TODO

## Toggle Project Tools

Just want to use the issue tracker or only the repository in a project? From now on, you can toggle every single tool in your project.

In fact, you can even selectively enable certain tools for only project members. That means you can have an issue tracker that is accessible only by team members, while the repository is fully open to everyone.

TODO SCREENSHOT

Or you can do the opposite and store your templates in a repository that is not accessible for other people, while they can still submit issues on the issue tracker.

TODO DOCS

## SSH Authentication for LFS

If you're used to using SSH for your Git pushes, it was frustrating to
still have to enter credentials whenever using LFS.

GitLab will now leverage your SSH key when using LFS, meaning that if you're
using LFS while connecting through ssh, you no longer have to manually
enter your credentials!

File transfers of LFS still happen over HTTP.

TODO DOCS

## Toggle LFS

Git LFS (Large File Storage), is great, but as the name implies, it can have
significant impact on your disk capacity. To make you feel a bit more secure about the LFS usage on your instance, you can now toggle LFS on instance, group and project level.

For instance, as a GitLab administrator, you can decide to turn off LFS for the entire instance, yet enable it for only a single group or project.

TODO DOCS

## Enforce Project Size Limit

As an alternative to restricting LFS, you might just want to prevent projects
from growing too large. You can now limit project size. This will take into account all repository repository data and LFS objects and stop any commits that will surpass that limit.

TODO SCREENSHOT

You can set a global project limit and override that on group and project level, as an admin. This way, you can give particular projects extra space if necessary.

TODO DOCS

## LDAP/Active Directory Improvements

This release contains several improvements to LDAP/Active Directory support
for GitLab CE and EE:

- CE/EE - Request only the LDAP user/group attributes that GitLab requires (CE [!6187] and EE [!712]). Reduces the amount of data across the wire between GitLab and the LDAP/Active Directory server. Also, decreases the object memory footprint within GitLab.
- EE - Faster Active Directory nested group and ranged member (large group) retrieval ([!719])
- EE - Add 'Sync now' option to group membership page when LDAP group links are present ([!704])

[!6187]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6187
[!712]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/712
[!719]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/719
[!704]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/704

## Recover 2FA tokens through SSH

You can now recover your 2FA security codes using SSH. This should make it
easier to recover your account, while still maintaining a level of security.

TODO DOCS

## API additions

We've expanded our API on several points with GitLab 8.12:

- Allow to set request_access_enabled for groups and projects using API [!6359]
- Add notification_settings API calls - https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5632 (community contribution)
- Add a BroadcastMessage API - https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6112

[!6359]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6359

## Improved GitHub Importer

Our GitHub importer keeps getting better,
making it easier to migrate to GitLab. With GitLab 8.12, the importer will also copy release notes over to GitLab.

TODO DOCS

## Bulk update Merge Requests

You can now bulk update merge requests. This means you can set the status, assignee, milestone, label or subscription to multiple merge requests at once.

Managing merge-request-heavy project should be a lot easier with this!

[!6226](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6226)

## Build Grouping

If you have many similar builds, your pipeline graph becomes very long. We've made a small change to improve this: similar builds will now automatically group together.

TODO SCREENSHOT

## Sentry integration of Workhorse

GitLab-Workhorse can now report application errors to Sentry.

> [Read more in the GitLab-Workhorse docs](https://gitlab.com/gitlab-org/gitlab-workhorse/blob/master/README.md#error-tracking)

## GitLab Mattermost 3.4

GitLab 8.12 includes [Mattermost 3.4](https://about.mattermost.com/mattermost-3-4/),
an [open source Slack-alternative](https://about.mattermost.com) whose newest
release offers 700 integrations with full Markdown support via Zapier,
simplified bot and 3rd party authentication via OAuth2, and community
integrations with Gitter, Heroku, Pivotal Tracker, Chef, Ansible and Yunohost.

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

> [See also the implementation in the merge request](https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/735)

### GitLab-Workhorse Secret Key

GitLab-Workhorse now uses a secret key to sign certain messages sent
to GitLab-the-Rails-application. For now this is mostly a
configuration sanity check; in future releases we want to add features
to GitLab-Workhorse that require this secret key to establish trust.

If you use our Omnibus packages, or if you installed GitLab from
source with our official init.d script, then this secret key will be
generated and picked up automatically for you. If you use a custom
init.d script or if you use packages not created by GitLab Inc. then
you may have to set the `-secretPath` option on GitLab-Workhorse.

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
