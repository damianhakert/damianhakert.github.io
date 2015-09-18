---
layout: post
title: "GitLab 8.0 released with new looks and integrated CI!"
date: 2015-09-22
comments: true
categories:
author: Job van der Voort
author_twitter: jobvo
filename: 2015-09-22-gitlab-8-0-released.markdown
image_title: /images/8_0/sf.jpeg
---

Fifteen months ago we [released](https://about.gitlab.com/2014/06/22/gitlab-7-dot-0-released/)
GitLab 7.0. Since then we've vastly improved performance of GitLab,
made GitLab work in any Enterprise through deep LDAP integration and
made it possible to [work with large files in Git](http://doc.gitlab.com/ee/workflow/git_annex.html).
On top of that, the UI has been reworked and improved with every release,
GitLab CI has become a very powerful tool and we've made [hundreds of other improvements](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG).

We built this all as a community and by being [more](https://about.gitlab.com/2015/05/22/gitlab-7-11-released/)
[and more](https://about.gitlab.com/2015/08/03/almost-everything-we-do-is-now-open/) open.

Today, GitLab's next major version is here. And it's the best GitLab so far.
We're very excited that with GitLab 8.0 we're paving the way for the future.
It's faster, more beautiful and does more than any version that came before it.

GitLab now comes with continuous integration (GitLab CI) fully integrated.
On top of that almost every single element in the interface has been reworked
and GitLab will take up to 50% less disk space!

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is ***MVP_USER*** ***CONTRIBUTION_OF_MVP_USER***.
Thanks ***MVP_USER_FIRST_NAME***!

<!--more-->

### Continuous Integration in GitLab

Code lives in GitLab: It's made, merged, reviewed in GitLab.
Now it gets tested, deployed and packaged in GitLab as well.

With GitLab 8.0, we integrate GitLab CI in GitLab itself. This means that you
no longer have to visit a separate application to see the status of your projects.
You can see all your tests, deployments, packaging that you would used to see
in your CI, right in GitLab.

Simply visit 'Continuous Integration' from the Dashboard:

TODO IMAGE

Or through one of your projects:

TODO IMAGE

### Fresh Looks

GitLab 8.0 comes with completely new looks.
This is not just a small iteration, but a major revision of almost every
UI element in GitLab.

We fixed the width of certain views to make it easier to read text. Which
by itself looks better now, as all text is now in a pretty new typeface.
In addition, contrast is reduced for elements that are less important,
some sweet, soft lines were added and contrast was increased for all important elements.

You better have a look yourself:

TODO: ADD IMAGES

### Turbo Merges!

Merging a merge request is now faster!
Rather than working in local copies of repositories (satellites),
we now work directly in them. This makes many git operations and mainly
merges much faster and more reliable.

### 50% less space used

### Reply by Email

### Open in Email

### Grack out, Better clones

### Mattermost Improvements


### Other changes

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


### Upgrade barometer

4 possible cases:

1. new user: gets both by default
1. gitlab users: update omnibus, get ci by default
1. gitlab 7.14, ci 7.14 on same server: update to 8.0, semi-automatic migration necessary.
1. separate CI: upgrade Ci to 8.0 (final version), backup, transfer backup, semi-automatic migration

disable-ci page for time of migraitons.

Downtime only for Ci, not GitLabs while migrating CI.

WAITING FOR NEW DOCS WITH MIGRATION PROCEDURE

*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****

Please be aware that by default the Omnibus packages will stop, run
migrations, and start again, no matter how 'big' or 'small' the
upgrade is. The behaviour can be changed by adding a
[/etc/gitlab/skip-auto-migrations
file](http://doc.gitlab.com/omnibus/update/README.html).

- - -

## Installation

If you are setting up a new GitLab installation please see the
[download GitLab page](https://about.gitlab.com/installation/).

## Updating

Check out our [update page](https://about.gitlab.com/update/).

## Enterprise Edition

The mentioned EE only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles you to our upgrade and installation services.

- - -
