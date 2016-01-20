---
layout: post
title: "GitLab's 50th Release: 8.4"
date: 2016-01-22
comments: true
categories:
author: Job
author_twitter: Jobvo
filename: 2016-01-22-gitlab-8-4-released.markdown
image_title: /images/7_X/PICTURE.PNG
---

What better way to kick off a year than with the 50th release of GitLab, 8.4!

No matter how you use GitLab, you're going to like this release.
Your diffs will look better than ever, you can browse through your
build artifacts in CI and search has been super powered with Elasticsearch
in EE!

We're extremely happy to receive some amazing contributions this release.
Kyungchul Shin contributed a fuzzy file finder to GitLab this release,
a much requested and truly MVP-worthy contribution.

Thanks Kyungchul Shin and congratulations with being this months MVP!

<!--more-->

## Loading Tanuki

![GitLab's Tanuki is loading](/images/8_4/loading_tanuki2.gif)

## Super-powered Search with Elasticsearch (EE)

If you have a lot of data, searching through everything in GitLab can
requires a lot of number crunching, which can take a while.
Search is the last thing you want to wait for, which is why GitLab can now
leverage [Elasticsearch](https://www.elastic.co/products/elasticsearch)
to speed up those searches!

Elasticsearch is a flexible, scalable and powerful search service that lives
on its own server(s). Connecting it to GitLab is
[easy as pie](TODO: documentation link).

Just like good-old search, Elasticsearch will search through your
issues, merge requests, milestones, comments, projects, repositories,
snippets and wikis.

- [Read about setting up Elasticsearch in our documentation](TODO: documentation link)

## Artifacts browser



## Improved GitHub importer

## Fuzzy File Finder

## Unsubscribe from Threads in Email

## Further design updates

## Performance Monitoring Alpha

## CAS Support

The Central Authentication Service (CAS) is a single sign-on protocol for the web.[1] Its purpose is to permit a user to access multiple applications while providing their credentials (such as userid and password) only once. It also allows web applications to authenticate users without gaining access to a user's security credentials, such as a password. The name CAS also refers to a software package that implements this protocol.

http://doc.gitlab.com/ce/integration/cas.html


## Other changes

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


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
