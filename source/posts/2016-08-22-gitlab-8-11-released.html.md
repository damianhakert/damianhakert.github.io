---
title: "GitLab 8.11 released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
categories:
author: Job van der Voort
author_twitter: Jobvo
image_title: /images/7_X/PICTURE.PNG
---

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is ***MVP_USER*** ***CONTRIBUTION_OF_MVP_USER***.
Thanks ***MVP_USER_FIRST_NAME***!

<!--more-->

## Issue Boards

> [Documentation link](link)

## Merge Conflict Resolution

> [Documentation link](link)

## (EE) Branch Permissions for Groups and People

## Resolve Discussions in MRs

## Visual Pipelines

## Issue Templates

## Koding Integration

## Pipelines everywhere

## New MR link when pushing

### Improvements

* Checking if a user can read multiple issues has been improved:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5370
* Looking up a user's maximum access level has been improved:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5412
* Displaying CI charts now uses fewer SQL queries:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5502
* Various improvements have been made to GitLab's Git handling to use fewer Git
  operations and use faster sorting of version numbers:
  <https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5536>, <https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5375>
* Commit authors are cached per Sidekiq transaction to avoid extra lookups:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5537
* The number of queries used for displaying merge request diffs has been
  reduced: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5551
* Iterating over diff collections has been improved:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5564
* The performance of various methods that only depend on diff statistics has
  been improved: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5568
* Diff rendering performance has been improved by removing redundant checks for
  text blobs: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5575
* Certain method calls that are not needed when rendering diffs have been
  removed: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5591
* Checking if a diff note is active has been improved:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5597
* Improve rendering of issue tracker links:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5608
* Performance of parsing URLs in Markdown documents has been improved:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5629
* Performance of syntax highlighting code blocks in Markdown documents has been
  improved: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5643
* Generating of cache keys for Markdown documents has been improved:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5715
* Sorting of Git tags has been improved:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5723
* Trigram indexes (PostgreSQL only) for the `ci_runners` table have been removed:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5755
* Commit lookups in DiffHelper have been removed:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5756
* 45 redundant database indexes have been removed:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5759
* Caching of todo counters has been re-enabled:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5789
* Queries to get a list of todos have been improved by limiting the number of
  projects used in these queries:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5791
* SVG images larger than 2MB are no longer displayed, reducing loading times and
  memory usage: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5794
* A memory leak in the Markdown sanitzation filter has been solved:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5808
* The dropdown used for displaying a list of projects an issue can be moved to
  uses pagination instead of loading all data at once:
  <https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5828>,
  <https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5686>
* Methods cals for finding Git blobs that were not needed have been removed:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5848
* The branches dropdown in the cherry pick and revert dialogues is now loaded
  asynchronously: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5607
* The queries used to mark todos as done have been improved:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5832
* gitlab_git has been updated to 10.4.7 to take advantage of various
  improvements made to this library:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5851
* Git access checks in Enterprise Edition have been improved:
  https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/647
* An unnecessary index on the geo_nodes table has been removed:
  https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/639

### Features

* SideKiq now caches certain objects per transaction. This is enabled by default but can be disabled using an environment variable: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5054
* GitLab can now process a request using ruby-prof, storing the profiling data on disk so it can be viewed later on. This requires a token to be specified in a header to work: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5281
* GitLab Performance Monitoring can now track custom events such as the number of Git pushes, projects being forked, etc  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5830

### Instrumentation

* Nokogiri has been instrumented:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5470
* The overhead of method call instrumentation has been reduced:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5550
* The `Repository` class has been instrumented:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5621
* `Gitlab::Highlight` has been instrumented:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5644
* `Project.visible_to_user` has been instrumented again:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5793

## Other changes

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


## Upgrade barometer

### (EE Only) Elasticsearch reindexing

We changed the structure of Elasticsearch indexes, making use of parent/child
relationships. This has performance advantages, but requires a total rebuild
of the ES index. After upgrading to GitLab 8.11, you will need to remove the
old indexes and rebuild new indexes:

To remove the old indexes, call to Elasticsearch:

```
curl -XDELETE 'http://localhost:9200/_all/'
```

Then rebuild new indexes as described in [Elasticsearch integration](../integration/elasticsearch.md#add-gitlabs-data-to-the-elasticsearch-index)


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
