---
title: "GitLab 8.11 released with Issue Boards and Merge Conflict Resolution"
author: Job van der Voort
author_twitter: Jobvo
image_title: /images/8_11/pic2.jpg
categories: release
twitter_image: /images/tweets/gitlab-8-11-released.png
date: 2016-08-22 17:01
---

There are so many good things in GitLab 8.11,
that I struggle to introduce all this
without turning to superlatives. So, without further ado:

With GitLab 8.11 you get a completely new way to manage your issues,
you can resolve merge conflicts in the interface,
you can restrict pushes to people and groups (in EE),
you get an online IDE,
you can use slash commands to modify issues and
you can create as many issue templates as
you want ..and many other new features.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is
Clement Ho for his merge requests and responsiveness on issues.
Thanks Clement Ho!

<!--more-->

## Issue Board

GitLab Issues are very flexible. You can crosslink them, prioritize them, and
rank them by popularity. With the Issue Board we've added something new:

You can now create workflows, quickly get an idea of the status of your
issues and all that in a simple, beautiful Board, not unlike a Kanban or Scrum
board.

![Issue Boards in GitLab 8.11](/images/8_11/issue_boards.gif)

You have a board for every project, which starts with a Backlog with all open
issues and a Done list, where issues are automatically closed.

By adding new lists you can create workflows. Lists are based on labels, this
means that adding an issue to a list will add that label to the issue and
removing it from a list, will remove the label.

This means all your current issues will automatically appear in new
lists you create and that you can quickly see whether a certain issue is
in one (or more!) of the lists.

To see an example, have a look at the
[GitLab CE Issue Board for the next release (8.12)](https://gitlab.com/gitlab-org/gitlab-ce/board?author_id=&assignee_id=&milestone_title=8.12).

<iframe width="100%" height="500" src="https://www.youtube.com/embed/UWsJ8tkHAa8" frameborder="0" allowfullscreen></iframe>

> [Issue Board Documentation](http://docs.gitlab.com/ce/user/project/issue_board.html)

## Merge Conflict Resolution

Merge conflicts can be a real pain when you want to get something to merge
in a busy project. We believe you shouldn't need any external tools to
fix your conflicts, which is why you can now solve simple conflicts straight
from GitLab.

![Merge Conflict Resolution in GitLab 8.11](/images/8_11/resolve_mc.gif)

When you encounter a conflict, you simply click "Resolve these conflicts" to be able to select
how you want the conflicts to be resolved. You confirm at the end to make a
commit with your fix.

We realize that this won't work for all conflicts, but hope that this will make
the majority of your conflicts minor bumps in the road to getting your work
to production.

> [Resolve conflicts Documentation](http://docs.gitlab.com/ce/user/project/merge_requests/resolve_conflicts.html)

## Branch Permissions for Users (EE only)

It's now possible to restrict pushing and merging to specific branches to
specific users, using Branch Permissions in GitLab Enterprise Edition.

This works hand-in-hand with the existing functionality and can easily be
combined with our restrictions. This means that you can restrict direct
pushes to only `Jane` and `John`, but allow all `masters` or even `developers`
to merge through a merge request to the branch.

![Branch permissions for users in GitLab 8.11](/images/8_11/branch_permissions.png)

For each action (push and merge) you can allow any amount of users and
permissions, making this a very powerful addition to GitLab EE for organizations.

> [Branch permissions for users Documentation](http://docs.gitlab.com/ee/user/project/protected_branches.html#restricting-push-and-merge-access-to-certain-users)

## Resolve Discussions in MRs

Discussions on diffs in merge requests can be hard to keep track of, yet
it's important that you actually give each comment attention.

To make it easier to find, fix, and resolve those comments and discussions,
we've added the ability to do just that: Each comment and discussion on merge
request diffs can be resolved. Longer threads can be resolved all at once
or just comment-by-comment.

![Resolve Discussions in GitLab 8.11](/images/8_11/resolve_discussion.png)

We keep track of how many discussions you still need to resolve and added
a convenient button to jump to the next unresolved discussion.

![Jump to the next unresolved discussion in GitLab 8.11](/images/8_11/jump.png)

> [Merge request discussion resolution Documentation](http://docs.gitlab.com/ce/user/project/merge_requests/merge_request_discussion_resolution.html)

## Pipelines Graph

Pipelines in GitLab can be complex structures with many sequential and parallel
builds. To make it a little easier to see what is going on, you can now view
a graph of a single pipeline and its status:

![Pipeline Graphs in GitLab 8.11](/images/8_11/pipeline_graph2.png)

Simply click on a pipeline in your merge request or pipelines view to view
the graph for the current pipeline.

## Issue and MR Templates

To standardize on a certain format for issues and merge requests,
you could already create templates in GitLab Enterprise Edition.

With GitLab 8.11, we're bringing the ability to create multiple templates
(for instance, one for feature proposals, another for bugs) to GitLab.com, GitLab CE, and EE.

Templates are Markdown files (`.md`) that live in the repository in a `.gitlab`
directory and either the `.gitlab/issue_templates` or
`.gitlab/merge_request_templates` subdirectory. They will appear in a dropdown when creating
a new issue or merge request:

![Issue and Merge Request templates in GitLab 8.11](/images/8_11/templates.png)

This should make it easier for everyone to submit good-looking
feature requests, bug reports, and merge requests.

> [See the documentation on templates](http://docs.gitlab.com/ce/user/project/description_templates.html)

## Slash Commands

Inspired by chat tools, such as IRC, Hipchat, Mattermost, and Slack, we've added
our own version of slash commands to GitLab. This means you can quickly
change labels, milestones, assignees and more by just writing a commment
or by having a command when writing your merge request or issue.

![Slash commands in GitLab 8.11](/images/8_11/slash-commands.gif)

Use them in comments or even when creating a new issue or merge request:

![Slash commands in GitLab 8.11](/images/8_11/slash-commands2.gif)

You can have multiple commands in a single comment and do things like changing
the title of an issue, adding or removing labels and changing assignees.

Here are some ideas on using the new slash commands:

- In your email while replying to an issue TODO doc link
- Try having some in a template
- Through the notes API

We can't wait to see how you'll use them.

> [Slash commands Documentation](http://docs.gitlab.com/ce/user/project/slash_commands.html)

## Koding Integration

[Koding][koding-web] allows you to run your entire development environment
in the cloud, share it with your team, and even use your local editor. This
means that you don't have to spend hours setting up your stack on every new
machine and every change.

With GitLab 8.11, we're introducing the Koding integration with GitLab.
This means that you can check out a project or just a merge request in
a full-fledged IDE with the press of a button.

Enable Koding in your Project services:

![Koding, an integrated IDE in GitLab 8.11](/images/8_11/koding1.png)

Set it up for your project:

![Koding, an integrated IDE in GitLab 8.11](/images/8_11/koding2.png)

![Koding, an integrated IDE in GitLab 8.11](/images/8_11/koding4.png)

And now you're able to quickly check out any merge request, branch,
and commit in a complete IDE, that even allows you to use your
local editor.

![Koding, an integrated IDE in GitLab 8.11](/images/8_11/koding3.png)

We've put together a quick screencast showing this off:

<iframe width="480" height="360" src="https://www.youtube.com/embed/3wei5yv_Ye8" frameborder="0" allowfullscreen></iframe>

## Pipelines in MRs

You will now see your [Pipelines](https://about.gitlab.com/2016/05/22/gitlab-8-8-released/#pipelines) in merge requests!

![Pipelines in merge requests in GitLab 8.11](/images/8_11/pipelines_mr.png)

Click on a pipeline to see its graph and related builds.

## Deployment status in Merge Requests

You can now easily set the URL of your environments:

![Set the URL of any environment in GitLab 8.11](/images/8_11/url_environment.png)

Which helps if you deploy automatically after a merge request is merged,
as now GitLab will show the state of the deploy in your merge requests:

![See deploy status in merge request in GitLab 8.11](/images/8_11/mr_deployed.png)

With the URL configured, GitLab will link to the environment, so you can see
the result of a merge request with a single click.

## Pipelines Web Hooks

To make it easier to integrate the power of GitLab's pipelines, we've
added a webhook for pipelines. It'll fire whenever a pipeline is created,
is running or is finished.

Enable any webhooks by going to the settings dropdown in your project and
selecting `Webhooks`.

## Code Highlighting and Collapsing

The editor in GitLab now properly highlights code and allows you to
collapse blocks of code.

![Code highlighting in GitLab 8.11](/images/8_11/highlighting.gif)

## MR links when pushing

You'll now see a link to quickly create a new merge request and
any related merge requests when you push to GitLab.

![Merge request links when pushing in GitLab 8.11](/images/8_11/mr_link.png)

## Coverage badge

GitLab can now generate a nice looking coverage badge, so you can easily
show off the test coverage of your projects anywhere:

![Coverage Badge in GitLab 8.11](/images/8_11/coverage_badge.png)

If you didn't know GitLab could report coverage yet, set it up in your
pipelines settings: `pipelines/settings`.

> [Read the docs on test coverage badges](http://docs.gitlab.com/ce/ci/pipelines.html#sts=Test coverage report badge)

## Expiration date on Memberships

When giving a user access to a project or when sharing a project with a group,
you can now limit that access to a certain date, setting an expiration date.
After the date, the user or group will no longer have access to the
project.

This should make it easier to manage sharing projects with temporary team
members.

## Move projects between shards (EE only)

With GitLab 8.10 we [introduced][mount-points] multiple mount points in GitLab.

With GitLab 8.11 you can move projects between shards with a rake command.
This is not something for everyday use, but it is convenient if you want to test
a new shard or want to move that super-heavily used project over to faster
storage.

[mount-points]: https://about.gitlab.com/2016/07/22/gitlab-8-10-released/#multiple-repository-mount-points

## Performance Updates

In this release we've added another batch of significant performance improvements.

Merge requests and their diffs should feel faster, in particular. Below
some graphs that show the difference for when we deployed GitLab 8.11 RC2
to GitLab.com (the drop is the deploy).

Loading times of merge request diffs:

![Performance improvements in GitLab 8.11](/images/8_11/perf1.jpg)

The number of SQL queries executed when displaying merge request diffs:

![Performance improvements in GitLab 8.11](/images/8_11/perf2.jpg)

The time spent in SQL queries when displaying merge request diffs:

![Performance improvements in GitLab 8.11](/images/8_11/perf3.jpg)

Pipelines performance also improved significantly:

![Performance improvements in GitLab 8.11](/images/8_11/perf4.jpg)

See below for detailed improvements and the merge requests of the implementations.

### Improvements

* Checking if a user can read multiple issues has been improved:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5370)
* Looking up a user's maximum access level has been improved:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5412)
* Displaying CI charts now uses fewer SQL queries:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5502)
* Various improvements have been made to GitLab's Git handling to use fewer Git
  operations and use faster sorting of version numbers:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5536), [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5375)
* Commit authors are cached per Sidekiq transaction to avoid extra lookups:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5537)
* The number of queries used for displaying merge request diffs has been
  reduced: [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5551)
* Iterating over diff collections has been improved:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5564)
* The performance of various methods that only depend on diff statistics has
  been improved: [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5568)
* Diff rendering performance has been improved by removing redundant checks for
  text blobs: [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5575)
* Certain method calls that are not needed when rendering diffs have been
  removed: [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5591)
* Checking if a diff note is active has been improved:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5597)
* Improve rendering of issue tracker links:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5608)
* Performance of parsing URLs in Markdown documents has been improved:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5629)
* Performance of syntax highlighting code blocks in Markdown documents has been
  improved: [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5643)
* Generating of cache keys for Markdown documents has been improved:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5715)
* Sorting of Git tags has been improved:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5723)
* Trigram indexes (PostgreSQL only) for the `ci_runners` table have been removed:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5755)
* Commit lookups in DiffHelper have been removed:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5756)
* 45 redundant database indexes have been removed:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5759)
* Caching of todo counters has been re-enabled:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5789)
* Queries to get a list of todos have been improved by limiting the number of
  projects used in these queries:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5791)
* SVG images larger than 2MB are no longer displayed, reducing loading times and
  memory usage: [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5794)
* A memory leak in the Markdown sanitization filter has been solved:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5808)
* The dropdown used for displaying a list of projects an issue can be moved to
  uses pagination instead of loading all data at once:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5828),
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5686)
* Methods calls for finding Git blobs that were not needed have been removed:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5848)
* The branches dropdown in the cherry pick and revert dialogues is now loaded
  asynchronously: [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5607)
* The queries used to mark todos as done have been improved:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5832)
* gitlab_git has been updated to 10.4.7 to take advantage of various
  improvements made to this library:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5851)
* Git access checks in Enterprise Edition have been improved:
  [mr](https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/647)
* An unnecessary index on the geo_nodes table has been removed:
  [mr](https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/639)
* Ace Editor is no longer loaded unless it's used on a given page, decreasing   our default JavaScript payload by just under 100KB. [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/4914)

### Features

* SideKiq now caches certain objects per transaction. This is enabled by default but can be disabled using an environment variable: [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5054)
* GitLab can now process a request using ruby-prof, storing the profiling data on disk so it can be viewed later on. This requires a token to be specified in a header to work: [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5281)
* GitLab Performance Monitoring can now track custom events such as the number of Git pushes, projects being forked, etc  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5830)

### Instrumentation

* Nokogiri has been instrumented:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5470)
* The overhead of method call instrumentation has been reduced:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5550)
* The `Repository` class has been instrumented:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5621)
* `Gitlab::Highlight` has been instrumented:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5644)
* `Project.visible_to_user` has been instrumented again:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5793)

## GitLab Runner

We are also releasing GitLab Runner 1.5 today. A few highlights:

- Mount /builds folder to all services when used with Docker Executor: [mr](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/272)
- Use .xz for prebuilt docker images to reduce binary size and provisioning speed of Docker Engines: [mr](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/249)
- Suppress all but the first warning of a given type when extracting a ZIP file: [mr](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/261)
- Retry executor preparation to reduce system failures: [mr](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/244)
- Release armel instead arm for Debian packages: [mr](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/264)
- Improve concurrency of docker+machine executor: [mr](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/254)
- Update gitlab-runner-service to return 1 when no Host or PORT is defined: [mr](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/253)
- Fix missing entrypoint script in alpine Dockerfile: [mr](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/248)
- Cache docker client instances to avoid a file descriptor leak: [mr](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/260)
- Support bind mount of /builds folder: [mr](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/193)

## GitLab Mattermost 3.3

GitLab 8.11 includes [Mattermost 3.3](https://www.mattermost.org/mattermost-3-3-chinese-korean-dutch-message-flags-here-golang-bot-sample-and-much-more/),
an [open source Slack-alternative](https://www.mattermost.org/) whose newest release includes
Chinese, Korean and Dutch translation, a [Golang bot](https://github.com/mattermost/mattermost-bot-sample-golang),
flagged posts, @here mentions, plus many more new benefits.

This version also includes [security updates](http://about.mattermost.com/security-updates/) and upgrade from earlier versions is recommended.

## Redis Sentinel Support

GitLab now has experimental support for Redis Sentinel.

> [See the docs for details](http://docs.gitlab.com/ce/administration/high_availability/redis.html#experimental-redis-sentinel-support)

## Other changes

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


## Upgrade barometer

To upgrade to GitLab 8.11, downtime is required due to migrations.

The downtime for GitLab.com (the largest GitLab instance) was about
15 to 30 minutes. It may take less time depending on the amount of data on
your instance.

Some columns are removed by one migration which may affect users running a
version of GitLab that was still using said column.
Two other migrations populate newly created tables based on existing data,
as such they require downtime to ensure this data isn't modified while
the migration is running (and until 8.11 is deployed to the user's cluster).
Finally another migration adds two foreign keys,
which requires downtime as this is not done in a concurrent manner.

### 2FA enforced through API and Git over HTTP

Users with 2FA enabled trying to retrieve an API token via the /sessions endpoint
or the Resource Owner Password Credentials flow provided by OAuth2,
will not be able to login. They will be required to use a Personal Access Token from now on.

> [Read our documentation on personal access tokens](http://docs.gitlab.com/ce/api/README.html#personal-access-tokens)

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
