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
GitLab 7.0. Since then we've vastly improved the performance of GitLab,
made GitLab work in any Enterprise through deep LDAP integration and
made it possible to [work with large files in Git](http://doc.gitlab.com/ee/workflow/git_annex.html).
On top of that, the UI has been reworked and improved with every release,
GitLab CI has become a very powerful tool and we've made [hundreds of other improvements](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG).

We built this all as a community and by being [more](https://about.gitlab.com/2015/05/22/gitlab-7-11-released/)
and [more](https://about.gitlab.com/2015/08/03/almost-everything-we-do-is-now-open/) open.

Today, GitLab's next major version is here. We're very excited that GitLab 8.0 allows for a faster,
more beautiful way for people to create, review and deploy code together.

GitLab now comes with continuous integration ([GitLab CI](https://about.gitlab.com/gitlab-ci/)) fully integrated.
But that's not all! Almost every element in the interface has been reworked
and GitLab will take up to 50% less disk space.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is ***MVP_USER*** ***CONTRIBUTION_OF_MVP_USER***.
Thanks ***MVP_USER_FIRST_NAME***!

<!--more-->

### Continuous Integration in GitLab

Code lives in GitLab: It's made, merged, reviewed in GitLab.
Now it gets tested, deployed and packaged in GitLab as well.

With GitLab 8.0, we've integrated GitLab CI directly into GitLab itself. This
means that you no longer have to visit a separate application to see the status
of your projects. You can see all of your tests, deployments, and packaging that
you would normally see in your CI, right in GitLab. For our community using
GitLab CI alongside previous versions of GitLab, please take a look at our
[tutorial](TODOaddlink) to migrate to GitLab 8.0.

Simply visit 'Continuous Integration' from the Dashboard:

TODO IMAGE

Or through one of your projects:

TODO IMAGE

There are [advantages and disadvantages](https://gitlab.com/gitlab-org/gitlab-ce/issues/2164#note_1902301) to this integration.
We feel confident that the benefits outweigh the drawbacks.
The impact of this integration will become more visible in versions following 8.0.
We needed to do the integration first and we have a policy of iterative improvements.
In 8.1 we look forward to [integrating CI into the menu structure](https://gitlab.com/gitlab-org/gitlab-ce/issues/2594) and a [commit status API](https://gitlab.com/gitlab-org/gitlab-ce/issues/2595) that will make it easier for third party CI services to integrate with GitLab.

### Fresh Design

GitLab 8.0 comes with a completely new look and feel.
This is not just a small iteration, but a major revision of almost every
UI element in GitLab.

We fixed the width of certain views to make it easier to view text. We also improved
that text with a pretty new typeface. In addition, contrast is reduced for elements that are less important,
increased for elements that are more important and some soft lines were added for clarity.

Take a look for yourself at our clean, new design:

TODO: ADD IMAGES

### Turbo Merges (Vroom Vroom)

Merging a merge request is now faster!
Rather than working in local copies of repositories (satellites),
we now work directly in them. This makes many git operations, like
merges, much faster and more reliable.

### 50% less space used

By removing satellites in GitLab, we free up the space left behind.
Project size in GitLab is cut in half reducing disk usage up to 50%.

### Reply by Email

Want to quickly reply to your colleagues in GitLab while on the go or when
going through your email? Now you can.
You can now simply reply to any notification email to comment in the issue
or merge request. This brings GitLab to any app that can use email;
we're already looking forward to comments from your smart watches!

TODO link to documentation to activate

TODO IMAGE

### Quick open in Gmail

Still want to get the full view of the issue or merge request while in Gmail?
Use the new quick links. In Gmail and in Inbox you will see a direct link
to the referenced issue of a notification you got from your GitLab instance.
If you use Google Inbox on your phone, you'll see the links there as well!

TODO IMAGES

### Better HTTP Support

We've replaced Grack in GitLab to handle HTTP clones and pushes and are now using our
own hip Go daemon, [gitlab-git-http-server](https://gitlab.com/gitlab-org/gitlab-git-http-server).
This means large clones and pushes over HTTP are now less likely to time out!
It also ensures the Unicorn workers are freed from these long running requests, making GitLab faster for users.

### Mattermost Improvements

We're shipping [Mattermost Beta1](http://www.mattermost.org/mattermost-beta1-now-available/)
with GitLab 8.0!

You can now make use of GitLab Single Sign On to authenticate with Mattermost,
making the shared experience much more fluid.

On top of that, the Mattermost team has added File and Image sharing, a way
to import Slack data and a host of other improvements and fixes!

The team at Rocket Chat encountered a [few temporary road blocks](https://github.com/RocketChat/Rocket.Chat/issues/533#issuecomment-140627021) in adding PostgreSQL compatibility.
Solving these will determine if GitLab 8.1 will ship with Rocket Chat or if it will be delayed.

### SSL Verification for Webhooks

TODO mention that web hooks are now enabled by default but you can change it

### Public user profile and group pages

In GitLab 8.0 all users and groups will have a publicly visible profile page.
This ensures that people are no longer confused when they can't claim a name (which already allowed you to find out what names existed).
Private and internal projects will not be shown on these profile pages unless you're allowed to see them.

### Other changes

This release has more improvements, including security fixes. Please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.

### Upgrade barometer

4 possible cases:

1. new user: gets both by default
1. GitLab users: update omnibus, get ci by default
1. GitLab 7.14, ci 7.14 on same server: update to 8.0, semi-automatic migration necessary.
1. separate CI: upgrade Ci to 8.0 (final version), backup, transfer backup, semi-automatic migration

disable-ci page for time of migraitons.

Downtime only for CI, not GitLabs while migrating CI.

WAITING FOR NEW DOCS WITH MIGRATION PROCEDURE

*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****

Please be aware that by default the Omnibus packages will stop, run
migrations, and start again, no matter how 'big' or 'small' the
upgrade is. The behaviour can be changed by adding a
[/etc/gitlab/skip-auto-migrations
file](http://doc.gitlab.com/omnibus/update/README.html).

MySQL => PG is possible

other way around is not possible right now with CI

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