---
title: "GitLab 8.11 released with Issue Boards and Merge Conflict Resolution"
categories:
author: Job van der Voort
author_twitter: Jobvo
image_title: /images/8_11/pic2.jpg
---

There are so many good things in GitLab 8.11, that I struggle to introduce all this
without turning to superlatives. So, without further ado:

With GitLab 8.11 you get a completely new way to manage your issues,
you can resolve merge conflicts in the interface,
you can restrict pushes to people and groups (in EE),
you get an online IDE,
can use slash commands to modify issues and
use as many issue templates as
you want ..and that's not all.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is
Clement Ho for his merge requests and responsiveness on issues.
Thanks Clement Ho!

<!--more-->

## Issue Boards

GitLab Issues are very flexible. You can crosslink them, prioritize them and
rank them by popularity. With GitLab Issue Boards we've added something new:

You can now create workflows, quickly get an idea of the status of your
issues and all that in a simple, beautiful Board, not unlike a Kanban or Scrum
board.

![Issue Boards in GitLab 8.11](/images/8_11/issue_boards.gif)

You have a board for every project, which starts with a Backlog with all open
issues and a Done list, where issues are automatically closed.

By adding new lists you can create workflows. Lists are based on labels, this
means that adding an issue to a list will add that label to the issue and
removing it from a list, will remove the label.

As effect, this means all your current issues will automatically appear in new
lists you create and that you can quickly see whether a certain issue is
in one (or more!) of the lists.

To see an example, have a look at the
[GitLab CE Issue Board for the next release (8.12)](https://gitlab.com/gitlab-org/gitlab-ce/board?author_id=&assignee_id=&milestone_title=8.12).

<iframe width="100%" height="500" src="https://www.youtube.com/embed/UWsJ8tkHAa8" frameborder="0" allowfullscreen></iframe>

> [Documentation link](link)

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

> [Documentation link](link)

## (EE) Branch Permissions for Groups and People


## Resolve Discussions in MRs

Discussions on diffs in merge requests can be hard to keep track off, yet
it's important that you actually give each comment attention.

To make it easier to find, fix and resolve those comments and discussions,
we've added the ability to do just that: Each comment and discussion on merge
request diffs can be resolved. Longer threads can be resolved all at once
or just comment-by-comment.

![Resolve Discussions in GitLab 8.11](/images/8_11/resolve_discussion.png)

## Pipelines Graph

Pipelines in GitLab can be complex structures with many sequential and parallel
builds. To make it a little easier to see what is going on, you can now view
a graph of a single pipeline and its status:

![Pipeline Graphs in GitLab 8.11](/images/8_11/pipeline_graph.png)

TODO Find it HERE AND HERE

## Issue and MR Templates

To standardize on a certain format for issues and merge requests,
you could already create templates in GitLab Enterprise Edition.

With GitLab 8.11, we're bringing the ability to create multiple templates
(for instance, one for feature proposals, another for bugs) to GitLab CE and EE.

Templates are Markdown files (`.md`) that live in the repository in a `.gitlab`
directory and either the `.gitlab/issue_templates` or
`.gitlab/merge_request_templates`. They will appear in a dropdown when creating
a new issue or merge request:

![]()

## Slash Commands

Inspired by chat tools, such as IRC, Hipchat, Mattermost and Slack, we've add
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
- When creating a new issue through email (see below!)
- Try having some in a template
- Through the notes API

We can't wait to see how you'll use them.

## Koding Integration

[Koding][koding-web] allows you to run your entire development environment
in the cloud, share it with your team and even use your local editor. This
means that you don't have to spend hours to set up your stack on every new
machine and every change.

With GitLab 8.11, we're introducing the Koding integration with GitLab.
This means that you can check out a project or just a merge request in
a fully fledged IDE with the press of a button.

## Pipelines in MRs

You will now see your [Pipelines](https://about.gitlab.com/2016/05/22/gitlab-8-8-released/#pipelines) in merge requests!

![Pipelines in merge requests in GitLab 8.11](/images/8_11/pipelines_mr.png)

## Email a new Issue

To create a new issue, you can now send an email!
Find the email address on the bottom of the issues list and then use
the subject for the title and the body of the email for the description of
the issue.

If you want to use set the milestone, add labels or anything else, make
use of the slash commands!

## MR links when pushing

You'll now see a link to quickly create a new merge request and
any related merge requests when you push to GitLab.

![Merge request links when pushing in GitLab 8.11](/images/8_11/mr_link.png)

## Move projects between shards

With GitLab 8.10 we [introduced][mount-points] multiple mount points in GitLab.

With GitLab 8.11 you can move projects between shards with a rake command.
This is not something for everyday use, but convenient if you want to test
a new shard or want to move that super-heavily used project over to faster
storage.

### Improvements

* Checking if a user can read multiple issues has been improved:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5370)
* Looking up a user's maximum access level has been improved:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5412)
* Displaying CI charts now uses fewer SQL queries:
  [mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5502)
* Various improvements have been made to GitLab's Git handling to use fewer Git
  operations and use faster sorting of version numbers:
  <[mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5536)>, <[mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5375)>
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
  <[mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5828)>,
  <[mr](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5686)>
* Methods cals for finding Git blobs that were not needed have been removed:
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

### Features

* SideKiq now caches certain objects per transaction. This is enabled by default but can be disabled using an environment variable: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5054
* GitLab can now process a request using ruby-prof, storing the profiling data on disk so it can be viewed later on. This requires a token to be specified in a header to work: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5281
* GitLab Performance Monitoring can now track custom events such as the number of Git pushes, projects being forked, etc  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5830

### Instrumentation

* Nokogiri has been instrumented:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5470
* The overhead of method call instrumentation has been reduced:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5550
* The `Repository` class has been instrumented:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5621
* `Gitlab::Highlight` has been instrumented:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5644
* `Project.visible_to_user` has been instrumented again:
  https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/5793

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
