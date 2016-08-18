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

## Performance improvements

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
