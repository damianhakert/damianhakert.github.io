---
release_number: "9.0"
title: "GitLab 9.0 released with Subgroups and Deploy Boards"
author: Victor Wu
author_gitlab: victorwu
author_twitter: victorwu416
categories: release
image_title: '/images/9_0/9_0-cover-image.jpeg'
description: "GitLab 9.0 Released with Subgroups, Deploy Boards, and much more!"
twitter_image: '/images/tweets/gitlab-9-0-released.jpg'
ee_cta: false
extra_css:
  - release-posts.css
extra_js:
  - release-posts.js
---

{::options parse_block_html="true" /}
<section class="release-post-section">

Today we are releasing GitLab 9.0, 18 months after [releasing 8.0](/2015/09/22/gitlab-8-0-released/). We've made [significant advances to GitLab during this period](/release-list/), shipping a version every single month on the 22nd. Let's quickly recap how far we've come since 8.0, and see those features dovetailing into today's 9.0 release. Or [jump ahead](#subgroups-ce-ee) to 9.0 features.

<!-- more -->

----
### Idea to Production

In the last several releases, GitLab has transformed how development teams get from idea to production. In just a few minutes, you can deploy GitLab to a container scheduler, add CI/CD with auto deployed review apps, utilize ChatOps, and analyze your cycle time. With 9.0 you can now watch your deploys with deploy boards and monitor application performance with Prometheus. Building on our [Master Plan](https://about.gitlab.com/2016/09/14/gitlab-live-event-recap/), GitLab 9.0 truly delivers the entire DevOps toolchain, so let's see how it all fits together:

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/PoBaY_rqeKA" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

### Usability and Design

In [8.0](/2015/09/22/gitlab-8-0-released/), we refreshed GitLab's look and feel, modernizing almost every UI element and significantly improving usability. (We had even updated our logo a few months prior.) Since then, we have continued to invest in design, ramping up our [UX design and research team](https://about.gitlab.com/team/), who are dedicated to improving usability and solving major pain points, everything from small CSS tweaks, to major UX flows. In each 8.x release we have iteratively evolved the design. And with GitLab 9.0, we made huge strides in [simplifying our global, group, and project navigation](#updated-navigation), a crucial enhancement as GitLab's feature set becomes increasingly powerful.

In an effort to continue improving our UX, we now have a [research panel](/researchpanel) where you can help shape the future of GitLab! By joining our panel, you'll be the first to see new features and your thoughts will drive product improvements!

[Join our research panel](/researchpanel){:.btn .btn-lg .btn-red .webcast-button}
{: .text-align-center}

### Collaboration on Digital Work

GitLab helps you collaborate on digital work. We made many enhancements to issues, a core part of collaboration in GitLab. This includes weights ([8.3](/2015/12/22/gitlab-8-3-released/#issue-weight-ee-only)), linking to merge requests ([8.3](/2015/12/22/gitlab-8-3-released/#merge-request-references-in-issues)), moving an issue to another project ([8.6](/2016/03/22/gitlab-8-6-released/#move-issues-to-other-projects)), and a powerful filter/search interface ([8.16](/2017/01/22/gitlab-8-16-released/#new-issues-search-and-filter-interface)). We also released issue boards ([8.11](/2016/08/22/gitlab-8-11-released/#issue-board)), providing a simple mechanism for issue workflow management using stages ("lists", in GitLab parlance). GitLab 9.0 continues to enhance boards further, [by improving its integration with milestones](#boards-with-milestones).

We are excited to ship [**subgroups** in GitLab 9.0](#subgroups), another huge step in furthering GitLab collaboration. This powerful new paradigm of groups within groups allows for truly team-based and team-first collaboration in even very large organizations with many different departments. We're on a [mission](/strategy/#mission) to enable **everyone to contribute**. 9.0 continues to help break down silos wherever you work so that indeed everyone in your organization can contribute.

### Code Review and Code Collaboration

We've continued to improve code review and code collaboration in GitLab since 8.0, including features such as merge when pipeline succeeds ([8.3](/2015/12/22/gitlab-8-3-released/#auto-merge-on-build-success)), code diffs ([8.4](/2016/01/22/gitlab-8-4-released), [8.5](/2016/02/22/gitlab-8-5-released/#render-svgs-in-diffs), [8.7](/2016/04/22/gitlab-8-7-released/#better-diffs), [8.10](/2016/07/22/gitlab-8-10-released/#improved-diffs), [8.15](/2016/12/22/gitlab-8-15-released/#diff-in-notification-emails)), a conflict editor ([8.11](/2016/08/22/gitlab-8-11-released/#merge-conflict-resolution), [8.13](/2016/10/22/gitlab-8-13-released/#merge-conflict-editor)), merge request versions ([8.12](/2016/09/22/gitlab-8-12-released/#merge-request-versions)), blocking merge until discussions resolved ([8.14](/2016/11/22/gitlab-8-14-released/#prevent-merge-until-review-is-done)), toggling approvals ([8.16](/2017/01/22/gitlab-8-16-released/#removing-your-approval-in-ee-merge-requests)), as well as squash and merge ([8.17](/2017/02/22/gitlab-8-17-released/#squash-and-merge-ee)). Many of these and other features involve the merge request widget. So in GitLab 9.0, we are [revamping its design](#merge-request-widget-usability) to accommodate the many existing and upcoming features that integrate with it.

### Continuous Integration

[8.0](/2015/09/22/gitlab-8-0-released/#continuous-integration-in-gitlab) was a pivotal release as it fully integrated continuous integration (CI) into GitLab itself. Subsequently, new CI features were implemented into the API ([8.4](/2016/01/22/gitlab-8-4-released/#new-ci-features-in-api)) and pipeline events were exposed through webhooks ([8.11](/2016/08/22/gitlab-8-11-released/#pipelines-web-hooks)). Pipelines were also integrated into merge requests ([8.11](/2016/08/22/gitlab-8-11-released/#pipelines-in-mrs), [8.17](/2017/02/22/gitlab-8-17-released/#additional-pipeline-details-included-in-merge-request-workflow)) and commits ([8.13](/2016/10/22/gitlab-8-13-released/#pipelines-for-commits)), as well as its own visual graph ([8.11](/2016/08/22/gitlab-8-11-released/#pipelines-graph)). GitLab runner was improved in every release from [8.10 to 8.17](/release-list/). We released review apps ([8.12](/2016/09/22/gitlab-8-12-released/#review-apps-experimenta), [8.13](/2016/10/22/gitlab-8-13-released/#ability-to-stop-review-apps), [8.14](/2016/11/22/gitlab-8-14-released/#review-apps)) and auto deploy ([8.15](/2016/12/22/gitlab-8-15-released/#auto-deploy)) to automatically deploy code into automatically created environments. And now with GitLab 9.0, we are shipping [deploy boards](#deploy-boards), allowing you track how your app is being deployed to multiple servers.

### Feedback and Insight

GitLab also provides you feedback and insight into your code and development process. We released contribution analytics ([8.3](/2015/12/22/gitlab-8-3-released/#contribution-analytics-ee-only)) and cycle analytics ([8.12](/2016/09/22/gitlab-8-12-released/#cycle-analytics), [8.13](/2016/10/22/gitlab-8-13-released/#cycle-analytics-improvements), [8.14](/2016/11/22/gitlab-8-14-released/#cycle-analytics-events)). We released time tracking ([8.14](/2016/11/22/gitlab-8-14-released/#time-tracking-beta-ee), [8.16](/2017/01/22/gitlab-8-16-released/#time-tracking-in-ce-and-api)). In [8.16](/2017/01/22/gitlab-8-16-released/#monitoring-gitlab-with-prometheus) and [8.17](/2017/02/22/gitlab-8-17-released/#monitoring-gitlab-with-prometheus), we shipped open source [Prometheus](https://prometheus.io) to extend that feedback into monitoring the server that hosts your GitLab instance, through the Prometheus console. In GitLab 9.0, we are releasing [environment monitoring](#environment-monitoring) integrated into the GitLab UI itself, building on top of the Prometheus foundation.

### Thank You

We're humbled by our community continuing to actively create and comment in numerous issues, as well as directly contributing source code. [In 9.0, there are over 130 merge requests from the community.](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests?label_name%5B%5D=Community+Contribution&milestone_title=9.0&scope=all&state=merged) As an open source project, GitLab CE now has over [47,000 commits](https://gitlab.com/gitlab-org/gitlab-ce/commits/master) (more than doubling the [20,000 count set back in 8.1](/2015/10/22/gitlab-8-1-released/)). Today, GitLab has over [over 1,500 contributors](http://contributors.gitlab.com). Thank you! 👏🙏

### Growth

We've also grown quickly during this time. We had just under 25 team members in 7 countries when we shipped 8.0. Today, we have [over 150 folks spread across 37 countries](/team/). That has helped us now to ship self-hosted GitLab in three versions, [Community Edition (CE), Enterprise Edition Starter (EES), and Enterprise Edition Premium (EEP)](/products/).

### Unique Platform

GitLab is now the only platform that connects every step of your software development lifecycle, helping you bring modern applications from idea to production, quickly and reliably. Enjoy 9.0 and read on for details!


[Register for the release webcast!](link-to-webcast){:.btn .btn-lg .btn-red}

</section>

<section class="mvp gray-section">
<div class="release-post-section">

![mvp-badge](/images/mvp_badge.png)

## This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is [Jacopo Beschi](https://gitlab.com/jacopo-beschi)

Jacopo made it possible to [undo marking a todo item as done in the todos list](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8691). This is a huge productivity enhancement that helps you recover from mistakes in managing todos. Thanks Jacopo!

</div>
</section>

<section class="release-post-section">

## Subgroups ce ee

GitLab has always been the simplest way for people to collaborate on code in a project. Just create a project, and you're on your way from idea to production. Users have _also_ told us that they want GitLab to be a team-based collaboration tool that supports hierarchical team structures sharing different code repositories. With 9.0, we are excited to ship our brand new version of GitLab groups that allows for groups within groups, i.e. "subgroups".

Each group, at each level, is itself a first-class citizen GitLab group, with the ability to have multiple projects. The new version of groups thus enables you to have a hierarchy of code repositories. You can create up to 20 levels of subgroups, giving you an incredible level of flexibility.

In this example, the organization represented by the `gitlab-nested` group has a design team, a backend team, and a frontend team, each represented by a group within the `gitlab-nested` group. The `design` and `backend` groups have further subgroups within them.

![Subgroups](/images/9_0/gitlab-nested.png){: .shadow}

Feel free to look at and provide feedback on what we are working on for [groups in future releases of GitLab]((https://gitlab.com/gitlab-org/gitlab-ce/issues?label_name%5B%5D=subgroups)).

> [Learn more about subgroups in our docs](https://docs.gitlab.com/ce/user/group/subgroups/)

</section>

<section class="release-row">
<div class="column">
## Deploy Boards eep

GitLab has an incredibly powerful CI/CD system, with over a thousand runners executing pipelines for GitLab.com projects alone. These pipelines perform builds to compile and package software, run automated tests, spawn review apps, and can even deploy software to staging and production. To date, these deployments would report back whether the environment was successfully updated, but what if you wanted more fidelity? Or a single pane to view all deployments across all environments? For larger organizations, the answers to these questions become particularly important.

Today with 9.0, we are excited to release Deploy Boards for environments running on Kubernetes. The Environments page of Pipelines now offers a single place to view the current health and deployment status of each environment, displaying the specific status of each pod in the deployment. Developers and other teammates can view the progress and status of a rollout, pod by pod, in the workflow they already use without any need for access to Kubernetes.

To celebrate the launch, Deploy Boards will be available in 9.0 as a free trial for Enterprise Edition Starter customers.

[Documentation link](link)
</div>

<div class="column">
![FEATURE_IMAGE](/images/9_0/deploy_boards.png){: .shadow}
</div>

</section>

<section class="release-row image-left">
<div class="column text-column">
## Export Issues ees

GitLab already enables you to filter, search, and navigate through the many issues you use daily. But users say they want a snapshot of issues for offline analysis or to communicate with other teams who may not be in GitLab just yet. With 9.0 EES, GitLab will email a CSV export of issues to the system administrator if you click the download button at the top right in the issue list view.

We designed and integrated the feature directly into the project issue list view. This allows you to leverage the existing powerful filter and search capability so that you can export exactly just the issues you care about. The actual processing and email sending happens asynchronously in the background once you confirm the action, so that it gets out of your way and you can continue to use GitLab as normal.

> [Learn more about exporting issues in CSV in our docs](https://docs.gitlab.com/ee/user/project/issues/csv_export.html)
</div>

<div class="column image-column">
![Export Issues](/images/9_0/export_issues.png){: .shadow}
</div>

</section>

<section class="release-row">
<div class="column">
## Environment Monitoring ce ee

A robust monitoring infrastructure is crucial to operating a successful application.  It ensures your app is responsive, provides valuable insight into the impact of changes, and enables quick debugging when problems occur. However setting this infrastructure up is often a lower priority, in particular for non-production environments, and it is often not integrated with the rest of your toolchain.

With GitLab 9.0, we are proud to introduce the first monitoring system that is fully integrated with your CI/CD pipelines and source code repository. Leveraging [Prometheus](https://prometheus.io), GitLab will now bring the same technology used for production systems to development environments like staging and even review apps.

In this initial release we are tracking CPU and Memory utilization of your CI/CD environments on Kubernetes, but this is only the beginning. In the near feature we will gauge the performance impact of a merge, support a much broader range of metrics, and fuse monitoring data with Deploy Boards.

Participate in the discussion and future of performance monitoring with GitLab [here](https://gitlab.com/gitlab-org/gitlab-ce/issues?scope=all&utf8=✓&state=opened&label_name[]=Prometheus&label_name[]=feature%20proposal).

> [Learn more about the Prometheus project integration in our docs](https://docs.gitlab.com/ce/user/project/integrations/prometheus.html)
</div>

<div class="column">
![FEATURE_IMAGE](/images/9_0/prometheus.png){: .shadow}
</div>
</section>

<section class="release-post-section">
## Disaster Recovery Alpha eep

Regardless of the size of your company, you need to make sure that your
infrastructure is resilient to any kind of natural or human-induced disasters
that can happen. One of the best practices in this case is to have a least two
servers (one primary, one secondary) in two different locations to make sure
that if the primary server goes down, the other one can take over. Having this
in place is critical for any teams to make sure you reduce the downtime as much
as possible, and reduce the risk of data loss. We have received many requests to
offer a disaster recovery solution built in GitLab and today we are introducing
a first step towards supporting this.

Since [GitLab 8.5](https://about.gitlab.com/2016/02/22/gitlab-8-5-released/),
GitLab ships with [Geo](https://about.gitlab.com/features/gitlab-geo/), a
feature that lets you have one or more secondary instances that mirror your main
GitLab instance. Geo primary goal was to drastically speed up cloning and
fetching projects over large distances. While Geo works really well for this
use case, it has one point that prevents us to use this technology to support a
full disaster recovery scenario: files that are saved on disk were not
replicated.

This is [what we are actively working on](https://gitlab.com/gitlab-org/gitlab-ee/issues/846)
and with GitLab 9.0, we are releasing a first step towards providing support for
Disaster Recovery scenarios. We call it Disaster Recovery in Alpha. A bunch of
important changes to Geo have been introduced with this release:

* If you use LFS, LFS objects will automatically be replicated to the secondary
nodes ([Merge request](https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/1237)).
* All file uploads are now recorded in the database
([Merge request](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8893)).
This will allow us to replicate those files in a future iteration.
* There is a new process to automatically backfill repositories
([Merge request](https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/1197)).
* You can now disable a secondary node through the UI.
* While the new features above are in alpha, the [core Geo feature](https://about.gitlab.com/features/gitlab-geo/),
which is to clone and fetch projects over large distances, is still
production-ready like before.

If you upgrade your installations to GitLab 9.0, these changes will be
automatically applied to your Geo installation and require no manual setup. If
you are an existing Geo user, you have nothing to do to access these new
features. If you are new to Geo, follow [the documentation to install Geo](https://docs.gitlab.com/ee/gitlab-geo/).

[Documentation link](link)

Disaster Recovery in Alpha is available to all Enterprise Edition Premium
customers as part of GitLab Geo.

</section>

<section class="release-post-section">
## Performance Improvements ce ee

As with every release, we've worked hard to make GitLab faster. With 9.0 in particular, we've put a particular focus on noticeable performance improvements across the board. Elasticsearch (ES) gets an upgrade in GitLab EE 9.0, with support for ES 5.1 and a host of smaller fixes. In accordance with our "cloud native" philosophy, we've added support for [AWS-hosted](https://aws.amazon.com/elasticsearch-service/) and HTTPS Elasticsearch clusters. Larger GitLab EE installations will benefit from improvements in the initial indexing process, and minor performance improvements have been made to repository indexing.

The improvements to the dashboards were focused on [more efficient searching by author or assignee](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/9030), and [removing unnecessary queries](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/9006). As the most common use for the dashboard is to view issues or merge requests assigned to you, this should be noticeable for most users. On GitLab.com, we saw transaction timings drop significantly for issues:

![Issues dashboard](/images/9_0/issues_dashboard.png){: .shadow}

And merge requests:

![Merge requests dashboard](/images/9_0/merge_requests_dashboard.png){: .shadow}

[Take a look](https://gitlab.com/gitlab-org/gitlab-ce/issues?label_name%5B%5D=performance&milestone_title=9.0&scope=all&state=closed) at the full list of performance improvements in 9.0 and keep an eye out for further improvements in upcoming releases as GitLab continues to get faster, especially for large installations.

Did you know, [GitLab.com](https://gitlab.com) is "merely" a massive-scale implementation of GitLab EE with hundreds of thousands of users? This just shows the level of scale that you can run GitLab EE and these performance improvements should start making a noticeable difference to the speed and reliability of GitLab.com.

</section>

<section class="release-row">
<div class="column">
## Database Load Balancing ee

Load balancing of database queries allows one to spread the load and impact of
queries across multiple database servers. Traditionally this involves additional
software such as [pgpool](http://www.pgpool.net/). Starting with 9.0, GitLab
Enterprise Edition supports load balancing of queries when using PostgreSQL.

Load balancing queries can bring many benefits, such as reducing the load and
memory usage of the primary, and reducing response timings. Spreading the load
also means that badly behaving database queries will not impact queries
executing on a different database server, reducing the likelihood of such
queries negatively affecting a GitLab installation.

GitLab's load balancer also responds to database failovers. When a primary is
unresponsive or was changed to a secondary, the load balancer will wait a brief
moment before retrying an operation. When secondaries become unavailable, they
are ignored until they become available again. For this to work in the most
transparent way you will need to use a load balancer (e.g. HAProxy) for every
database host.

One problem of load balancing is dealing with replication lag. For example, if a
write happens and you then read from a secondary it's possible for said
secondary to not yet have the data. One way of dealing with this is to use
synchronous replication. However, synchronous replication is not ideal as
replication lag could cause queries to take a very long time. Furthermore, if a
replica were to become unavailable the whole system can grind to a halt.

To work around this the database load balancer uses "sticky sessions". When a
user triggers a write to the primary the user's session will keep using the
primary. Session sticking is disabled again once a timeout expires (30 seconds),
or when the written data is available on all secondaries.

For more information on how to set up database load balancing you can refer to
the documentation section ["Database Load Balancing"](http://docs.gitlab.com/ee/administration/database_load_balancing.html).
</div>

<div class="column">
![Load Balancing Load](/images/9_0/load_balancing_load.png){: .shadow}

![Load Balancing Memory Usage](/images/9_0/load_balancing_memory_usage.png){: .shadow}

![Load Balancing Timing Improvements](/images/9_0/load_balancing_timing_improvements.png){: .shadow}
</div>
</section>

<section class="release-post-section">

## Updated Navigation ce ee

Here at GitLab, most of our business functions (not just product development) occur on GitLab.com itself. So we definitely understand the importance of navigation. We want to make it frictionless, intuitive, and efficient for you to perform your daily tasks, especially if you are using GitLab for several hours each day.

Navigation design is a crucial component in achieving that, and with 9.0, we have modernized the interface, leveraging best practices from our design team, as well as incorporating feedback from user research. At first glance, it doesn't like a lot has changed. But that was intentional. We meticulously analyzed what was already working well, and changed only the problem areas.

The menu items in the tabbed navigation interface have been re-arranged (and in some cases, merged and renamed) for both the main and subtabs. The activity tab is now a subtab of the project tab. The main tabs of repository, issues, merge requests, and pipelines and now positioned from left to right in that order, reflecting the idea to production flow. The subtabs in the main graph tab have been re-arranged and placed in other locations. Again, we carefully considered where each menu should be located drawing from feedback and analysis. [Read more about the details of the change.](https://gitlab.com/gitlab-org/gitlab-ce/issues/26348)

Another notable change is the pop-in sidebar. That has been now replaced by a less intrusive dropdown menu in the top left, that doesn't unnecessarily cover too much screen content. Previously there was a dropdown menu for settings, accessed from a cog icon at the top right for the project and group pages. These have been now pulled into the existing tabbed menu interface, harmonizing and simplifying the entire experience.

We also brought back the ability the create a new project quickly, by simply clicking the `+` button at the top right.

![Navigation](/images/9_0/navigation.png){: .shadow}

</section>

<section class="release-row">
<div class="column">

## Reorder Issues in Board List ce ee

[Issue Boards](/solutions/issueboard/) are a great way to manage issues moving through the different stages ("lists" in GitLab), in order to quickly get an idea to production. But users often want to further represent order or priority of issues within a single list. With 9.0, you can now reorder issues within an issue board list, using the intuitive and existing drag and drop mechanism.

> [Learn more about Issue Boards in our docs](https://docs.gitlab.com/ce/user/project/issue_board.html).
</div>

<div class="column">
![Boards Reorder](/images/9_0/boards_reorder.gif){: .shadow}
</div>
</section>

<section class="release-post-section">
## Boards with Milestones ees

A GitLab Issue Board enables you to manage a group of issues within a single milestone, but requires you to select the associated milestone filter each time you navigate to it. With GitLab 9.0 EES, you can now create an Issue Board that is associated to a specific milestone. This allows you to create unique boards for individual milestones.

As you plan and execute work in each new milestone, we suggest you keep creating new boards. This allows you to conveniently straddle between milestones, while also allowing you to save and look back at previous completed milestones.

> [Learn more about Issue Boards in our docs](https://docs.gitlab.com/ee/user/project/issue_board.html).

![Boards Milestone](/images/9_0/boards_milestone.gif){: .shadow}

</section>

<section class="release-post-section">
## API v4

Our [API](https://docs.gitlab.com/ee/api/) is a great way to automate tasks, control and automate GitLab in new and powerful ways. Over time, we have continued to improve our API to make it more complete and support the new features we add every month to make GitLab the best end-to-end development environment.

This constant iteration has resulted in a few inconsistencies in our existing API. Today we are announcing v4 of our API, which aims to make the API more consistent and more RESTful.

We will continue to support v3 of the API until August 2017 and so we encourage you to make any necessary changes to applications that use the v3 API.

> [Take a look at the changes in v4 to see what's different.](https://docs.gitlab.com/ee/api/v3_to_v4.html)

</section>

<section class="release-row other-improvements">
## Other Improvements in GitLab 9.0
<div class="column">
### Native Unicode Emoji 🔥 ce ee

Unicode emojis allow for a more consistent feel with the rest of your OS and equates to you being able to add emojis faster 🚀. We were able to get rid some of the hefty images and JSON payloads and generate the awards emoji menu immediately instead of having a loading spinner to wait for an async response. 👯 ✨ 🏋 👌

> [Learn more about award emojis in our docs](https://docs.gitlab.com/ce/user/award_emojis.html)

![Native unicode emojis](/images/9_0/native_unicode_emojis.gif){: .shadow}

### GitLab CI

To follow conventions of naming across GitLab, and to further move away from the
`build` term and toward `job`, CI variables [have been renamed](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/9756) for the 9.0
release.

| 8.X name | 9.0 name |
|----------|----------|
| `CI_BUILD_ID` | `CI_JOB_ID` |
| `CI_BUILD_REF` | `CI_COMMIT_SHA` |
| `CI_BUILD_TAG` | `CI_COMMIT_TAG` |
| `CI_BUILD_REF_NAME` | `CI_COMMIT_REF_NAME` |
| `CI_BUILD_REF_SLUG` | `CI_COMMIT_REF_SLUG` |
| `CI_BUILD_NAME` | `CI_JOB_NAME` |
| `CI_BUILD_STAGE` | `CI_JOB_STAGE` |
| `CI_BUILD_REPO` | `CI_REPOSITORY` |
| `CI_BUILD_TRIGGERED` | `CI_PIPELINE_TRIGGERED` |
| `CI_BUILD_MANUAL` | `CI_JOB_MANUAL` |
| `CI_BUILD_TOKEN` | `CI_JOB_TOKEN` |

The old variables continue to work, however are deprecated and will be removed soon.

> [Read more about the CI variables in our documentation](https://docs.gitlab.com/ce/ci/variables/)

### Gitaly

In every release, GitLab becomes faster with huge performance boosts. Today's
release is no different. Along with [other performance improvements](#performance-improvements-ce),
GitLab now ships with [Gitaly](https://gitlab.com/gitlab-org/gitaly), our own
open-source solution to handle git calls made by GitLab. While completely
transparent, this change in how GitLab operates internally is important and
will make GitLab faster. We are actively working on Gitaly, so you can expect
more news about it in future releases.

### Omnibus GitLab Package Improvements

#### PostgreSQL version upgrade

Previous GitLab releases were shipped with PostgreSQL 9.2 by default. PostgreSQL
9.2's end of life (EOL) is [set to September 2017](https://www.postgresql.org/support/versioning/).
For this reason, as well as to have the latest features and performance
improvements, we need to update the PostgreSQL version that GitLab uses.

GitLab 9.0 now ships with PostgreSQL 9.6 by default. For existing installations,
the omnibus-gitlab packages for GitLab 9.0 will attempt to automatically upgrade
your database, using the `gitlab-ctl pg-upgrade` tool that is included
[since 8.15](https://about.gitlab.com/2016/12/22/gitlab-8-15-released/#postgresql-version-upgrade).

> [Read more about database upgrade in our docs](https://docs.gitlab.com/omnibus/settings/database.html#upgrade-packaged-postgresql-server)

> Ran into issues? Create an issue at the [omnibus-gitlab issue tracker](https://gitlab.com/gitlab-org/omnibus-gitlab/issues),
and reference it in the [upgrade problems meta issue.](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1783)

#### Raspberry Pi 2 changes

Due to a fault in release process that was caused by changes in build infrastructure,
packages for Raspberry Pi 2 [were tagged under Debian distribution instead of Raspbian](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1303).

We've resolved this issue and also synced all latest versions of packages
to `Raspbian` distribution.

Going forward, we will only release Raspberry Pi 2 packages under `Raspbian` distribution.
Further more, as [announced in 8.17 release post](/2017/02/22/gitlab-8-17-released/#raspbian-wheezy-package),
we will provide only Jessie packages for Raspberry Pi 2.

If you did any manual changes to the apt repository as a workaround, you will need to change the distribution.
You can do this by running:

```
sed -i 's/debian/raspbian/g' /etc/apt/sources.list.d/gitlab_raspberry-pi2.list
```

#### Monitoring GitLab with Prometheus

With the release of GitLab 9.0, Prometheus and its associated exporters are now on by default. It is now easier than ever to ensure your GitLab service is healthy and responsive, with over 100 metrics available for monitoring. If you would like to disable Prometheus and all of it's related services, simply set:

```
prometheus_monitoring['enable'] = false`
```

> [Read more on monitoring with Prometheus docs](https://docs.gitlab.com/ce/doc/administration/monitoring/prometheus/)

### More control over HTTP Strict Transport Security

Now you fine tune your Strict Transport Security enforcement just by changing settings in your Omnibus GitLab config.
Use HTTP Strict Transport Security to provide your installation with even better protection against MITM attacks.

> [Learn more about HSTS in Omnibus in our docs](https://docs.gitlab.com/omnibus/settings/nginx.html#setting-http-strict-transport-security)

### Group search and filtering ce ee

With our new version of groups in 9.0, we anticipate you'll create much more of them. So we've made it possible to filter and search groups in the list view, and also allow you to sort by when they were created or updated.

![Filter Groups](/images/9_0/filter_groups.png){: .shadow}

</div>

<div class="column">

### Tokenized Filter and Search in Issues and Merge Requests ce ee

We first introduced the new streamlined filter and search interface for issues in [8.16](/2017/01/22/gitlab-8-16-released/). With 9.0, we are tokenizing the filter attributes for even more visual clarity. Many other places in GitLab deserve this new interface. We're bringing it to merge requests in 9.0, and will roll it out to other parts of GitLab in future releases.

![Merge Requests New Search Interface](/images/9_0/mr_new_search_interface.png){: .shadow}

### New Branch for Bare Projects ce ee

When you click the `New branch` button in an issue, you may want to start creating code right away.
But for a project with an empty repository, GitLab, prior to 9.0, stubbornly sends you back to the main project view when you click the button.
With 9.0, when you do click the `New branch` in an empty repository project, GitLab automatically creates the master branch, commits a blank `README.md` file to it, and creates and redirects you to a new branch based on the issue title.
If your [project is already configured with a deployment service][project-services-doc] (e.g. Kubernetes), GitLab takes one step further and prompts you to set up [auto deploy][auto-deploy-doc] by helping you create a `.gitlab-ci.yml` file.

> [Read more about creating new branches from issues in our docs](https://docs.gitlab.com/ce/user/project/repository/web_editor.html#create-a-new-branch-from-an-issue)

[project-services-doc]: https://docs.gitlab.com/ce/user/project/integrations/project_services.html
[auto-deploy-doc]: https://docs.gitlab.com/ce/ci/autodeploy/index.html

![New Branch for Repo-less Projects in GitLab 9.0](/images/9_0/no_repo_new_branch.png){: .shadow}

### Merge Request Widget Usability ce ee

The merge request plays a crucial role in code collaboration and deployment. In particular, a lot of important information and call-to-actions are located in the merge request widget. With 9.0, we are starting to improve the usability of that widget. We want to present the most relevant information and allow you to see, at a glance, the status of the code, whether it's in review, or if it's already deployed in an environment. We will continue to iterate on this new cleaner design, and continue to make the entire merge request more powerful.

![Merge Request Widget](/images/9_0/merge_request_widget.png){: .shadow}

### Impersonation Tokens

Alongside the new API, we've also added [Impersonation tokens](https://gitlab.com/gitlab-org/gitlab-ce/issues/25367). If you've ever built a bot or a piece of functionality with our API, you'll often have to retrieve a token via OAuth. This can sometimes be undesirable and cumbersome to have to go through a UI flow in order to retrieve this token. Administrators of a GitLab instance can now retrieve an impersonation token on behalf of a user to make this process a lot easier and centrally controlled. This process will also alleviate any issues caused by users inadvertently invalidating tokens in use for other applications.

> [Read more about impersonation tokens in our API docs](https://docs.gitlab.com/ce/api/index.html#impersonation-tokens)

### Create Mattermost Team when Creating GitLab Group ce ee

Sometimes chatting with your workgroup is the best way to get an idea rolling. To help you with that, GitLab integrates with [Mattermost](https://about.mattermost.com/). With GitLab 9.0, setting up a [Mattermost team](https://docs.gitlab.com/omnibus/gitlab-mattermost/README.html#gitlab-mattermost) for your GitLab group to chat and collaborate is effortless. When creating a GitLab group, select the appropriate checkbox, and GitLab will tell your Mattermost instance to create a team with the same name.

![Create GitLab Group Create Mattermost Team](/images/9_0/group-creation-mm.png){: .shadow}

### Blocking manual actions in pipelines

[Manual actions](https://docs.gitlab.com/ce/ci/yaml/README.html#manual-actions) can now be configured to block pipelines until they are completed. Pipelines blocked by manual actions have a status of `manual`, and can be enabled by setting `allow_failure` to `true`.

### Pipeline triggers with User permissions

A new [Pipeline Trigger API](https://docs.gitlab.com/ce/api/pipeline_triggers.html) and UI is now available, which utilize the user level permissions of their creator. This enables the token to be used not just for the current project, but also all dependent projects as well. The Build Trigger API remains functional however is deprecated and will be removed soon.

### CI default `cache` key is now `default`

The default [`cache` key](https://docs.gitlab.com/ce/ci/yaml/README.html#cache-key) value is now `default`, allowing the cache to be shared between all pipelines and jobs within the project, increasing CI/CD efficiency and speed.

### GitLab Pages artifacts cleaned after deployment

In order more efficiently utilize artifact storage space, [GitLab Pages](https://pages.gitlab.io/) artifacts are now automatically deleted after they have been deployed. If you would like to retain artifacts, an [expiry duration](https://docs.gitlab.com/ce/ci/yaml/README.html#artifacts-expire_in) can be set.
</div>

### Paginated environments
Pagination was added to environments list in order to improve performance and user experience.
Environments that belong to a folder are now shown in a new view.

![Root Level Environments](/images/9_0/environments_pagination.png){: .shadow}
![Environments inside a folder](/images/9_0/environments_folder_view.png){: .shadow}

### Comments in diffs
Commenting in diffs is now much easier with a purple background indicating which line we are selecting.
Going through discussion in comments is also much easier now that we can collapse discussions and
see note authors avatars in the sidebar of the diff.

![Comments in diffs](/images/9_0/diff_comments.gif){: .shadow}

</section>
<!-- END OF OTHER FEATURES RIGHT BLOCK -->


<!-- OTHER FEATURES CHANGELOG BLOCK -->
<section class="text-center changelog">

## Changelog

Please check out [the changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG.md) to see all the named changes.
{: .text-align-center}

</section>
<!-- END OF OTHER FEATURES CHANGELOG BLOCK -->


<!-- UPGRADE BAROMETER BLOCK -->
<section class="gray-section">
<div class="release-row">
<div class="column">

### Upgrade barometer

To upgrade to GitLab 9.0, downtime is required. Larger instances (>1000 users)
should expect about 15 minutes of downtime.

The specific migrations requiring downtime or taking significant time are described below.
* Some columns are renamed. This operation requires downtime.
* A new column is added to users table, which does not require downtime but may take some time to complete.
* The builds table is updated, which does not require downtime but may take some time depending on your CI usage.

GitLab 9.0 introduces a [new version of our API](#api-v4). While existing calls
to API v3 will continue to work until August 2017, we advise you to make any
necessary changes to applications that use the v3 API. [Read the documentation](https://docs.gitlab.com/ee/api/v3_to_v4.html)
to learn more.

#### GitLab Runner Deprecation

Please note that GitLab Runners prior to 9.0 rely on API v3, and therefore deprecated along with the v3 API. Runners 9.0 and above utilize the new v4 API.

#### Note

We assume you are upgrading from the latest version. If not, then also consult the upgrade barometers of any intermediate versions you are skipping.
If you are upgrading from a GitLab version prior to 8.0 *and* you have CI enabled, you have to upgrade to GitLab 8.0 [first](/2015/09/22/gitlab-8-0-released/).

New configuration options have been introduced in the omnibus-gitlab packages. To
check what changed compared to your `/etc/gitlab/gitlab.rb` configuration
file, run `sudo gitlab-ctl diff-config`.

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

If you're GitLab EE user, please be aware that in 9.0 release we bumped the required version of Elasticsearch from 2.4.x to 5.1.x.
Please update it following the official [documentation](https://www.elastic.co/guide/en/elasticsearch/reference/5.1/setup-upgrade.html).
Indexes created by Elasticsearch 2.4.x can be read by Elasticsearch 5.1.x.
</div>

<div class="column">
### Installing and Updating

If you are setting up a new GitLab installation please see the
[download GitLab page](/installation/).

Check out our [update page](/update/).

### GitLab Products

We offer four different [products](/products/) for you and your company:

- {: #CE} **GitLab Community Edition (CE)**: [Open source](https://gitlab.com/gitlab-org/gitlab-ce), self-hosted solution of GitLab. Ideal for personal projects or small teams with minimal user management and workflow control needs. Every feature available in GitLab CE, is also available on GitLab Enterprise Edition (Starter and Premium), and GitLab.com.
- {: #EE} **[GitLab Enterprise Edition](/gitlab-ee/) (EE)**: [Open core](https://gitlab.com/gitlab-org/gitlab-ee/), self-hosted, fully featured solution of GitLab. Available in two different subscriptions:
  - {: #EES} **GitLab Enterprise Edition Starter (EES)**: Ideal for co-located teams who need additional security and workflow controls for their professional projects.
  - {: #EEP} **GitLab Enterprise Edition Premium (EEP)**: Ideal for distributed teams who need advanced workflow controls, premium features, High Availability, and Premium Support.
- {: #gitlab-dot-com} **[GitLab.com](/gitlab-com/)**: Free GitLab solution, which runs on top of GitLab EES, hosted by GitLab, Inc. Ideal for individuals who want to get their projects up and running quickly. Administrated by GitLab (users don't have access to admin settings).

<!-- - {: #gitlab-hosted} **[GitLab Hosted](/gitlab-hosted/)**: Ideal for teams who want their own private and secure GitLab instance without having to worry about installation, hosting, or upgrades. -->

</div>
</div>
</section>

<section class="release-row">
[Cover image](https://www.pexels.com/photo/landscape-nature-mountain-lake-37650/) licensed under [CC0](https://www.pexels.com/photo-license/).
{:.note .text-right}
</section>
