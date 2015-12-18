---
layout: post
title: "GitLab 8.3 released with auto-merge and GitLab Pages
date: 2015-12-22
comments: true
categories:
author: Job van der Voort
author_twitter: jobvo
filename: FILENAME.MARKDOWN
image_title: /images/7_X/PICTURE.PNG
---

We're closing this fantastic year for GitLab with its 49th release, GitLab 8.3.

This time around, we've again received amazing contributions from the community.
You can now merge automatically after a build has passed; we're introducing
GitLab Pages for Enterprise Edition and issues have new powers in both CE and  EE!

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is
Greg Smethells. Greg made the proposal and [subsequently implemented](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/1991)
the new references in issues and merge requests.
He communicated his every move and worked together closely with many other
people from the community.

Thanks Greg!

<!--more-->

## GitLab Pages (EE only)

## Auto-merge on Build Success

## Statistics (EE only)

## References in Issues and Merge Requests

## Issue Weight (EE only)

## Quickly create a new MR from the web editor

## Builds in Merge Requests

## Automatic References

## Other changes

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.

### Decoupling GitLab from NGINX

In GitLab 8.3 we are making a major behind the scenes change in how
GitLab works: all HTTP requests are now proxied through
gitlab-workhorse. We have moved most if not all GitLab-specific
configuration from the NGINX configuration files into gitlab-workhose.

This change will make it easier for GitLab developers to add features
and improve GitLab using gitlab-workhorse because they no longer have
to work in three places: the Rails application, gitlab-workhorse and
NGINX. This change is also making it simpler to deploy GitLab from
source, and simpler to use GitLab with Apache or HAproxy when so
desired, because the contact surface between GitLab and its reverse
proxy is now much smaller.

We are still recommending to run GitLab with NGINX because it offers
request/response buffering (not yet implemented in gitlab-workhorse)
and SSL termination (not planned for gitlab-workhorse).

If you are using our Omnibus packages and their built-in NGINX service
then no action is needed when upgrading. If you installed GitLab from
source or if you are using your own reverse proxy then you will have
to check your init script (gitlab-workhorse got some new settings) and
reverse proxy configuration. The [8.3 update
guide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/update/8.2-to-8.3.md)
has more details.

Those of you who run GitLab at a 'relative URL' (example.com/gitlab)
will be pleased to hear that gitlab-workhorse now supports relative
URL's.

## Upgrade barometer


*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****

*Note* If you are upgrading from a GitLab version prior to 8.0 *and* you have CI enabled, you have to upgrade to GitLab 8.0 [first](https://about.gitlab.com/2015/09/22/gitlab-8-0-released/).

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
For a complete overview please have a look at the [feature list of GitLab EE](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles you to our upgrade and installation services.

- - -
