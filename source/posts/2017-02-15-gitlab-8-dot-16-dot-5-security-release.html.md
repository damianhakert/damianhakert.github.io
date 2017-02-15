---
title: "GitLab 8.16.5, 8.15.6, and 8.14.9 Security Release"
author: Brian Neel
author_twitter: b0bby_tables
author_gitlab: briann
categories: release
---

Today we are releasing versions 8.16.5, 8.15.6, and 8.14.9 for GitLab Community
Edition (CE) and Enterprise Edition (EE).

These versions contain several security fixes, including three fixes for
persistent cross-site scripting (XSS) vulnerabilities, an upgrade to Mattermost,
and a fix for project imports causing labels and comments to appear on the wrong
project. We recommend that all GitLab installations be upgraded to one of these
versions.

Please read on for more details.

<!-- more -->

## Persistent XSS vulnerability in AsciiDoc support

A customer security audit discovered an XSS vulnerability in project README
files using the AsciiDoc format. The Ruby gem that converts AsciiDoc to HTML did
not properly filter dangerous code and was therefore vulnerable to persistent
script injection.

[#27024]: https://gitlab.com/gitlab-org/gitlab-ce/issues/27024

## Persistent XSS vulnerability in RubyDoc, reStructuredText, and Textile support

[Yasin Soliman] via [HackerOne] reported XSS vulnerabilities in project README
files using the RubyDoc, reStructuredText, and Textile formats. GitLab code that
converts these formats to HTML did not properly filter dangerous code and was
therefore vulnerable to persistent script injection. See [#27153] for more
details.

[Yasin Soliman]: https://twitter.com/SecurityYasin
[#27153]: https://gitlab.com/gitlab-org/gitlab-ce/issues/27153

## Persistent XSS vulnerability in SVG support

A user who has requested to remain anonymous reported via [HackerOne] an XSS
vulnerability in GitLab's SVG support. SVG files that were displayed inline in
user comments were properly filtered for dangerous code, however direct links to
these files were not being filtered and were therefore vulnerable to persistent
script injection should a user click on a direct link to the SVG file. See
[#27471] for more details.

[#27471]: https://gitlab.com/gitlab-org/gitlab-ce/issues/27471

## Mattermost security update

Mattermost has not yet released full details, however a high severity security
release was published and Mattermost has advised all users to upgrade
immediately. See their [release notes] for more.

[#1951]: https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1951
[release notes]: https://docs.mattermost.com/administration/changelog.html?highlight=changelog#notes-on-patch-release

## GitHub importer assigning labels and comments to the wrong project

A bug in the GitHub importer would cause labels and comments on imported GitHub
repositories to sometimes be assigned to the wrong GitLab project. A race
condition existed in the comment and label assignment functions so that if a new
issue or merge request was created with the same internal ID (`iid`) on any
project between the time that an importer created an issue or merge request and
the time the labels and comments were assigned, the labels or comments would be
assigned to the wrong project. See [#27659] for more details.

[#27659]: https://gitlab.com/gitlab-org/gitlab-ce/issues/27659

### Versions affected

- Cross-site scripting: 7.12.0 through 8.16.4
- Mattermost: 8.15.0 through 8.16.4
- Project import: 8.15.0 through 8.16.4

We recommend that all installations running a version mentioned above be
upgraded as soon as possible. No workarounds are available for these
vulnerabilities.

## Upgrade barometer

These versions have no new migrations and should not require any downtime.

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a `/etc/gitlab/skip-auto-migrations` file.

## Updating

To update, check out our [update page](https://about.gitlab.com/update).

## Enterprise Edition

Interested in GitLab Enterprise Edition? Check out the [features exclusive to
EE](https://about.gitlab.com/gitlab-ee/).
Access to GitLab Enterprise Edition is included with a
[subscription](https://about.gitlab.com/pricing/). No time to upgrade GitLab
yourself? Subscribers receive upgrade and installation services.

[HackerOne]: https://hackerone.com/
