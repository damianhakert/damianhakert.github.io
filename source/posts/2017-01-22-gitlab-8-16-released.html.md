---
title: "GitLab 8.16 Released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
categories:
author: Job van der Voort
author_twitter: Jobvo
image_title: /images/7_X/PICTURE.PNG
---

Last month we've showed you a glimpse of the future of development:
in a few minutes from nothing to deploying to a Kubernetes cluster from a
GitLab instance with auto-scaling. That seemed hard to do if you were not
willing to set up your own Kubernetes cluster. With GitLab 8.16,
you can do it _right now_ on Google Container Engine. Let me show you:

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is ***MVP_USER*** ***CONTRIBUTION_OF_MVP_USER***.
Thanks ***MVP_USER_FIRST_NAME***!

<!--more-->

## Time Tracking in CE and API

> [Documentation link](link)

## Removing your approval in EE merge requests

GitLab EE already supports merge request approvals. As an approver, clicking approve means that you've committed to that action. But people tell us that there are many scenarios where they may want to undo approvals Perhaps an approver saw something in the code diff that they missed earlier. Or maybe another approver brings up another point of discussion, and so the approver wants to remove their approval in the mean time, and apply it back later. With 8.16, you can now do that. You simply click in the merge request widget to remove a previously made approval. As expected, system notes in the merge request thread are recorded and notification emails are sent for both approving and removing approvals.

## Monitoring GitLab with Prometheus

We have outlined a [bold vision](https://about.gitlab.com/2017/01/05/prometheus-and-gitlab/)
for making world class monitoring easier for everyone, and with 8.16 we have
taken our first step towards that goal. In this release we have included
[Prometheus](https://prometheus.io) and it's
[Node Exporter](https://github.com/prometheus/node_exporter) as part of our
Omnibus package. This will provide high quality time-series monitoring of your
GitLab server.

Both Prometheus and Node exporter are off by default for this release, but we
plan on having them on by default starting with GitLab version 9.0.
To enable monitoring now, simply [enable the features](https://docs.gitlab.com/omnibus/gitlab-prometheus/README.html) and reconfigure GitLab.

## Allow to add deploy keys with write-access. [!5807]

## Introduce a new `/merge` slash command for merge requests. [!7746]

## Streamlining project settings and navigation

Here at GitLab we add features quickly. So every now and then we re-visit and streamline our settings and navigation to accommodate. In the screenshot of 8.15, you see that the project settings dropdown menu has many items. Furthermore, you may find it confusing that the menu itself is located far away from the rest of the tabbed navigation toward the center of the page. In the next few releases, we will be streamlining that navigation, and combining settings pages appropriately. With 8.16 we are just starting, by combining the `Members` and `Groups` menu items into just one, called `Members`. Navigating to that page will show the two previous pages combined into one. Similarly, we combined `Webhooks` and `Services` together into `Integrations`.

## Record and show last used date of SSH Keys. [!8113]

## More storage statistics

## GitLab Mattermost 3.6

GitLab 8.16 includes [Mattermost 3.6](https://about.mattermost.com/mattermost-3-6), [an open source Slack-alternative](https://about.mattermost.com/) whose newest release offers improved multi-team deployment, an early version of emoji reactions, an improved command line interface and much more.

This version includes [security updates](http://about.mattermost.com/security-updates/) and upgrade is recommended.

## Amazing community contributions

For 8.16, we merged 50 merge requests from the community, including new
features, bug fixes, or even backstage improvements!

The most noticeable contributed changes are as follows:

- Allow to add deploy keys with write-access. [!5807]
- Allow to use `+` symbol in snippet filenames. [!6644]
- Order projects by latest activity in the "Go to a project" quick switcher. [!7737]
- Introduce a new `/merge` slash command for merge requests. [!7746]
- Add storage statistics for build artifacts, and LFS objects. [!7754]
- Log LDAP blocking/unblocking events to application log. [!8042]
- Allow to use ENV variables in the Redis config. [!8073]
- Record and show last used date of SSH Keys. [!8113]
- Add support for PlantUML diagrams in Asciidoc. [!8537]
- Expire related caches after changing HEAD. [!8584]
- Autoresize markdown preview. [!8607]

[!5807]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5807
[!6644]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/6644
[!7737]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/7737
[!7746]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/7746
[!7754]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/7754
[!8042]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8042
[!8073]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8073
[!8113]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8113
[!8537]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8537
[!8584]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8584
[!8607]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8607

## Omnibus GitLab package changes

### PostgreSQL version upgrade

As mentioned [in the 8.15 release post](https://about.gitlab.com/2016/12/22/gitlab-8-15-released/#postgresql-version-upgrade),
omnibus-gitlab packages are equipped with `gitlab-ctl pg-upgrade` tool.
This tool will upgrade the bundled PostgreSQL database version.

Please plan the upgrade ahead of GitLab 9.0 release (scheduled for Mar. 22, 2017).

The omnibus-gitlab packages for GitLab 9.0 will prevent upgrades until the database
is upgraded.

> [Read more about database upgrade in our docs](https://docs.gitlab.com/omnibus/settings/database.html#upgrade-packaged-postgresql-server)


> Ran into issues? Create an issue at the [omnibus-gitlab issue tracker](https://gitlab.com/gitlab-org/omnibus-gitlab/issues),
and reference it in the [upgrade problems meta issue.](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1783)

### Reduced package size

When you download the omnibus-gitlab 8.16 package you might notice the reduced
package size. Do not be alarmed, this is intentional.
Even with the new addition of monitoring in the package, the size was reduced
by almost 50MB!
[We've been working](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1778)
and will continue working on further size optimizations of the package.

## Other changes

This release has more improvements, including security fixes. Please check out
[the changelog] to see all the named changes.

[the changelog]: https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG.md

## Performance Changes

* Refactored note edit form to improve frontend performance on MR and Issues pages, especially pages with has a lot of discussions in it [8356](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8356)
* Reduce DB-load for build-queues by storing last_update in Redis [8084](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8084)

## Upgrade barometer

This release requires downtime.

This release migrates project related statistics to a separate table, removing
existing columns in the process. This migration process requires downtime,
and can take 10-15 minutes for large installations.

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
