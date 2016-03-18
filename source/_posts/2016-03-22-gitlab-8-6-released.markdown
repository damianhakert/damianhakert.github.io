---
layout: post
title: "GitLab 8.6 released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
date: 2016-03-22
comments: true
categories:
author: Job van der Voort
author_twitter: Jobvo
image_title: /images/7_X/PICTURE.PNG
---

Intro and introduce main features here.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is ***MVP_USER*** ***CONTRIBUTION_OF_MVP_USER***.
Thanks ***MVP_USER_FIRST_NAME***!

<!--more-->

## GitLab Deploy

> [Documentation link](link)

## Subscribe to a Label

> [Documentation link](link)

## Confidential Issues

> [Documentation link](link)

## External Users

> [Documentation link](link)

## Updates to looks

> [Documentation link](link)

# Delete Issues

> [Documentation link](link)

## Table of Contents for Wiki

> [Documentation link](link)

## Performance improvements

* Search performance has been greatly improved for users using PostgreSQL
 _without_ using ElasticSearch. This requires the `pg_trgm` extension (see
barometer).
* Performance of listing commits has been improved
* Counting of tags and branches on the commits/branches/tags pages is now a bit
faster and is cached
* Performance of retrieving CI services of a project has been improved
* Large diffs are hidden in merge requests
* Project avatars stored in Git repositories are now cached, cutting down request timings for _all_ project pages for projects that don't use an avatar uploaded via the web UI. Merge request: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3272
* Diffs that are larger than 100 KB are no longer displayed, instead a "This diff is too large" message is displayed. This prevents Unicorn timeouts when viewing large diffs. Merge request: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3185
* The branch commit ahead/behind statistics are no longer pre-cached on every push. For projects with lots of branches (e.g. thousands) this can have a huge impact on the time it takes for the pre-caching process to complete. Merge request: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3274
* Indexes were added for `ci_runners.token` (https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3249) and `git_hooks.project_id` (https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/271)
- performance of viewing individual issues will be improved by caching certain Git operations

## New GitLab CI Features

- pass artifacts between builds

## GitLab Mattermost 2.1

[Mattermost 2.1](http://www.mattermost.org/mattermost-2-1-android-windows-linux-and-mac-apps-plus-portuguese/)
ships in GitLab 8.6 with new Android, Windows, Linux and Mac apps with full
GitLab SSO support, plus Brazilian Portuguese translation and more.
Mattermost 2.1 contains a [security update](http://docs.mattermost.com/administration/changelog.html#security-update)
and earlier deployments should [upgrade to this version](http://doc.gitlab.com/omnibus/gitlab-mattermost/).


## Other changes

- e for edit
- YAML frontmatter rendered
- Better Signup flow [docs](http://doc.gitlab.com/ce/install/installation.html#initial-login)
- Show test coverage in builds
- Support for Golang subpackage fetching
- Build updates via the Web notifications. https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/2604
- A whole new fancy sidebar with multi select labels. https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3175
- Issues and Merge Requests look good on mobile.
- New drop downs with multi selection
- New branch from an issue
- SAML customization http://doc.gitlab.com/ee/integration/saml.html#customization

### Updates in the omnibus-gitlab package

As GitLab gets improved every release, so does the omnibus-gitlab package.
You can see the changes that package receives for every release in the
[omnibus-gitlab CHANGELOG](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/CHANGELOG.md).

In this release there are some important changes in the bundled software:

* Redis is updated to version 2.8.24
* PostgreSQL is updated to version 9.2.15
* Nginx proxy caching is enabled
* pg_trgm extension is automatically enabled
* Default Nginx http2 support can be disabled if necessary

---

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


## Upgrade barometer

This release includes migrations that require downtime.

### Elasticsearch Requirements

We have added a requirement for the Elasticsearch integration with GitLab 8.6.
You now need to have the [Delete By Query Plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/2.0/plugins-delete-by-query.html)
installed, in addition to Elasticsearch 2.0+.

> [Read about the Elasticsearch integration in our documentation](http://doc.gitlab.com/ee/integration/elasticsearch.html)


### Changes for Source installations with PostgreSQL

Starting with GitLab 8.6 PostgreSQL users are required to enable the "pg_trgm"
extension. On certain Linux distributions this will require the installation of
an extra package. Ubuntu, Fedora, and Debian all ship this extension in the
"postgresql-contrib" package. Once installed the extension must be enabled, this
must be done before upgrading to GitLab 8.6 to ensure that all database
migrations succeed. This extension can be enabled by running the following as a
PostgreSQL super user for every GitLab database:

    CREATE EXTENSION IF NOT EXISTS pg_trgm;

Users using GitLab's Omnibus packages do _not_ have to manually enable this
extension as this is done automatically.

To check if the extension is enabled you can run the following query:

    SELECT true AS enabled
    FROM pg_available_extensions
    WHERE name = 'pg_trgm'
    AND installed_version IS NOT NULL;

If the extension is enabled this will produce the following output:

     enabled
    ---------
     t
    (1 row)

MySQL users do not need to take any extra steps.

This release also includes a migration that will create a number of indexes that
rely on the above extension. Creating these indexes may take up to 30 minutes to
complete depending on the amount of data stored in your database. Users are
advised to ensure that any PostgreSQL connections stay active long enough for
this process to complete.

In the unlikely event of this migration failing (or completing partially) users
can run the following SQL commands in their database:

    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_ci_runners_on_token_trigram ON ci_runners USING gin(token gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_ci_runners_on_description_trigram ON ci_runners USING gin(description gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_issues_on_title_trigram ON issues USING gin(title gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_issues_on_description_trigram ON issues USING gin(description gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_merge_requests_on_title_trigram ON merge_requests USING gin(title gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_merge_requests_on_description_trigram ON merge_requests USING gin(description gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_milestones_on_title_trigram ON milestones USING gin(title gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_milestones_on_description_trigram ON milestones USING gin(description gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_namespaces_on_name_trigram ON namespaces USING gin(name gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_namespaces_on_path_trigram ON namespaces USING gin(path gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_notes_on_note_trigram ON notes USING gin(note gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_projects_on_name_trigram ON projects USING gin(name gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_projects_on_path_trigram ON projects USING gin(path gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_projects_on_description_trigram ON projects USING gin(description gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_snippets_on_title_trigram ON snippets USING gin(title gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_snippets_on_file_name_trigram ON snippets USING gin(file_name gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_users_on_username_trigram ON users USING gin(username gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_users_on_name_trigram ON users USING gin(name gin_trgm_ops);
    CREATE INDEX CONCURRENTLY IF NOT EXISTS index_users_on_email_trigram ON users USING gin(email gin_trgm_ops);
    INSERT INTO schema_migrations VALUES ('20160226114608');

These commands ensure all indexes are in place and mark the migration as having
finished successfully (so Rails doesn't end up trying to run it again).

---

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
