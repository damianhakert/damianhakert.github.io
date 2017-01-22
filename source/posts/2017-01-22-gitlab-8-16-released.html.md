---
title: "GitLab 8.16 Released with Auto deploy on Google Container Engine and Monitoring with Prometheus"
categories: release
author: Job van der Voort
author_twitter: Jobvo
image_title: '/images/8_16/pic.jpg'
description: GitLab 8.16 Released with Time Tracking coming to Community Edition and new API, Deploy Keys with write-access, and monitoring with Prometheus
---

We’re on a mission to bring powerful tools to everyone. That means making them
easy to use, easy to setup and easy to maintain. The first powerful tool we
made accessible was Git, the second zero-setup continuous integration (CI) and
last month we did our first steps into bringing the power of containers and
Kubernetes to everyone. This month, we’re leaping into the new year with the
introduction of the next step.

<!--more-->

With GitLab 8.16 we’re not only making idea to production on Kubernetes _much_
more accessible by making it work on Google Cloud, we’re also leaping to the
next step in idea to production: monitoring. From this release forward, we’ll
be shipping the powerful monitoring tool Prometheus alongside GitLab.
Deploying an application is just the start, you need feedback. With Prometheus
we’ll make sure you get feedback from your systems, applications, users, and
more, straight into GitLab.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is
[Markus Koller](https://gitlab.com/toupeira) for his contribution of
[more storage statistics](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/7754).
Thanks Markus!


## From idea to production in 10 minutes on Google Container Engine

[Last month][8.15-post] we've showed you a glimpse of the future of development:
in a few minutes from nothing to deploying to a Kubernetes cluster from a
GitLab instance with auto-scaling. That seemed hard to do if you were not
willing to set up your own Kubernetes cluster. With GitLab 8.16,
you can do it _right now_ on Google Container Engine. Let me show you:

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/3A8mdJl_icM" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

The video above is using a trial account on Google Cloud, and with a single
preconfigured domain with static IP. You can do everything shown in the video
right now [by signing up at Google Cloud][g-cloud] and simply following our
[documentation on idea to production on Google Container Engine][i2p-gke].

To be able to deploy flawlessly from GitLab to Kubernetes, we've created a
project that implements auto-deploy. [You can find it here][auto-deploy-k8s].

[8.15-post]: https://about.gitlab.com/2016/12/22/gitlab-8-15-released/
[g-cloud]: https://cloud.google.com/
[i2p-gke]: TODO
[auto-deploy-k8s]: https://gitlab.com/gitlab-examples/kubernetes-deploy

## Monitoring GitLab with Prometheus

We have outlined a [bold vision][prom-gitlab] for making world class monitoring
easier for everyone, and with GitLab 8.16 we have taken our first step towards that goal. In this release we have included [Prometheus][prometheus] and it's
[Node Exporter][node-exp] as part of our Omnibus package. This will provide
high quality time-series monitoring of your GitLab server's resources.

Both Prometheus and Node exporter are off by default for this release, but we
plan on having them on by default starting with GitLab version 9.0.
To enable monitoring now, simply [enable the features][prom-docs] and
reconfigure GitLab.

After you have enabled Prometheus you can visit `<your_domain_name>:9090` to access the Prometheus console, or connect a compatible dashboard tool like Grafana.

[prom-gitlab]: https://about.gitlab.com/2017/01/05/prometheus-and-gitlab/
[prometheus]: https://prometheus.io
[node-exp]: https://github.com/prometheus/node_exporter
[prom-docs]: https://docs.gitlab.com/ce/administration/monitoring/performance/prometheus.html

## Time Tracking in CE and API

We [introduced][8.14-post] time tracking in GitLab 8.14 Enterprise Edition.
Since its introduction, we've seen massive usage on GitLab.com; and many people
argued that time tracking can also be essential for smaller teams and not just
for enterprises. We heard you and have therefore decided to move time tracking
to GitLab Community Edition with this release.

On top of that, time tracking has now a proper API, which lets you achieve the
same actions you can do with the user interface. This means you can set
estimates and record time spent on issues and merge requests.

[8.14-post]: https://about.gitlab.com/2016/11/22/gitlab-8-14-released/

> [Time tracking feature documentation](https://docs.gitlab.com/ce/workflow/time_tracking.html)

> Time tracking API documentation for [merge requests](https://docs.gitlab.com/ce/api/merge_requests.html#set-a-time-estimate-for-a-merge-request)
  and [issues](https://docs.gitlab.com/ce/api/issues.html#set-a-time-estimate-for-an-issue)

## New issues search and filter interface

If you use issues, you probably have a lot of them.
So we've had the ability to search and filter issues based on different
attributes in GitLab. With 8.16, we've re-designed that interface to be more
natural and intuitive, and modernized the look along the way.
This will also allow us to expand search and filtering with more powerful
features in the future.

![Improved issue search and filters in GitLab 8.16](/images/8_16/issues_search_1.png){: .shadow}

We've started out with issues, but we're planning to bring the new design to
other parts of GitLab soon as well.

![Improved issue search and filters in GitLab 8.16](/images/8_16/issues_search_2.png){: .shadow}

## Removing your approval in EE merge requests

In GitLab Enterprise Edition Starter, you have been able to approve merge
requests. As an approver, clicking approve means that you've committed to that
action. But there are many scenarios where you may want to undo your approval.

![Unapprove merge requests in GitLab 8.16](/images/8_16/approve_merge_request.png){: .shadow}

Perhaps you saw something in the diff that you missed earlier.
Or maybe another approver brings up another point of discussion,
and so the approver wants to remove their approval in the mean time,
and apply it back later.

![Unapprove merge requests in GitLab 8.16](/images/8_16/unapprove_merge_request.png){: .shadow}

With GitLab 8.16 EE, you can now do that. You simply click in the merge request
widget to remove a previously made approval. As expected, system notes in the
merge request thread are recorded and notification emails are sent for both
approving and removing approvals.

![Unapprove merge requests in GitLab 8.16](/images/8_16/email_unapprove_merge_request.png){: .shadow}

Updated approvals are available in GitLab Enterprise Edition Starter, Premium
and on GitLab.com.

## Allow to add deploy keys with write-access

[Deploy keys][deploy-key-docs] are ideal for giving limited read access to your repository from external sources, for instance for deploys.

We've added the ability to give deploy keys write access. This will allow the
holder of the key to push to your repository, which can be useful for all sorts
of things, such as setting a Git tag on deploys, pushing artifacts to the
repository and more.

Deploy keys with write access was contributed by [Ali Ibrahim](https://gitlab.com/aliibrahim). Thanks Ali!

[deploy-key-docs]: https://docs.gitlab.com/ce/ssh/README.html

## Limit Shared Runner Usage (EE Starter, Premium)

Not only does GitLab CI scale up automatically based on demand,
shared runners make it incredibly easy to offer CI to your entire organisation.
In fact, it's so easy to offer CI services that we saw a need arise to be able
to limit the usage of those shared resources.

![Limit build minutes usage in GitLab 8.16 EE](/images/8_16/bm1.png){: .shadow}

With GitLab 8.16 Enterprise Edition you can limit build minutes of shared
runners per group. Once surpassed, pipelines will no longer execute on shared
runners. This will allow you to prevent over-usage of shared resources when
using GitLab CI.

![Limit build minutes usage in GitLab 8.16 EE](/images/8_16/bm2.png){: .shadow}

## Introduce a new `/merge` slash command for merge requests

[Slash commands][slash-commands] are a very quick way of executing a number of operations on
issues and merge requests in GitLab. Simply type one of the commands in
the description or comment of an issue or merge request and the commands will
be executed on submission.

You can now even merge using a slash command. Type `/merge` and the merge
request will be merged when it's ready, given you have permission to do so.

GitLab has a large amount of slash commands, [view them all here][slash-commands].

[slash-commands]: https://docs.gitlab.com/ee/user/project/slash_commands.html

## Streamlining project settings and navigation

Here at GitLab we iterate quickly. So every now and then we re-visit and
streamline our settings and navigation to accommodate.

In GitLab 8.15, the project settings dropdown menu had
many items. Furthermore, it's confusing that the menu itself is
located far away from the rest of the tabbed navigation toward the center of
the page. In the next few releases, we will be streamlining that navigation,
and combining settings pages appropriately.

![Improved settings navigation in GitLab 8.16](/images/8_16/settings_new.png)

With 8.16 we are just starting, by combining the `Members` and `Groups` menu
items into just one, called `Members`. Navigating to that page will show the
two previous pages combined into one. Similarly, we combined `Webhooks` and
`Services` together into `Integrations`.

## Record and show last used date of SSH Keys

If you have uploaded several SSH keys, it can be hard to tell which
you've been using most recently.

GitLab will now report when a SSH has been used last. Find this information
in your profile, under keys: `/profile/keys`.

Thanks [Vincent Wong(]https://gitlab.com/wingyu) for contributing this useful feature!

## Storage statistics

Okay, we admit it, we do our best to make it easy to use a lot of disk space:
You can use GitLab to store your build artifacts, your docker images,
LFS objects, Git objects, and more.

To make it a bit easier to see _where_ you are using all this disk space,
GitLab will now report per project and group how much space is being used
and by what (repository, artifacts (includes Docker images) or LFS).

![See how storage is being used in GitLab 8.16](/images/8_16/storage_usage.png){: .shadow}

Thanks to this month's MVP Markus Koller for contributing this feature!

## GitLab Runner

We are also releasing GitLab Runner 1.10 today. Most interesting changes:

- Add termination grace period for Kubernetes executor [!383](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/383)
- Add configuration options for Kubernetss resource requests [!391](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/391)
- Add poll interval and timeout parameters for Kubernetes executor [!384](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/384)
- Pass ImagePullSecrets for Kubernetes executor [!449](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/449)
- Add Namespace overwrite possibility for Kubernetes executor [!444](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/444)
- Add support for GIT_SUBMODULE_STRATEGY [!443](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/443)
- Add Prometheus metric that counts number of catched errors [!439](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/439)
- Update Docker Machine in official Runner images to v0.9.0 [!454](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/454)
- Add '--run-tagged-only' cli option for runners [!438](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/438)
- Add armv6l to the ARM replacements list for docker executor helper image [!446](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/446)

To see the full list of all changes please read [the Runner's CHANGELOG file](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/v1.10.0/CHANGELOG.md).

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
