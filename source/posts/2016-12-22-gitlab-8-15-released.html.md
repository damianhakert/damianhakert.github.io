---
title: "GitLab 8.15 Released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
categories:
author: Job van der Voort
author_twitter: Jobvo
image_title: /images/7_X/PICTURE.PNG
---

With this last release of the year, we're not only completing our [Master Plan](https://about.gitlab.com/2016/09/14/gitlab-live-event-recap/), but we
want to show you something cool we've been working on:

<SHORT VIDEO HERE>

With GitLab 8.15, we're introducing Auto Deploy (shown in the video at
[xx:xx]()), which automates setting up deploys and review apps. For a
Ruby on Rails project, this brings setup time to under a minute.

Plus, to make accessing your environments easier and faster, you can now
access them directly through a terminal in GitLab (show in the video at [xx:xx]()).

We want to give the power of containers, continuous integration and deployment,
review apps and container schedulers to everyone. GitLab 8.15, we
take away all the hard work, without hiding anything.

And the hard work shouldn't even include setting up GitLab. [See below]() for
the full video, in which we install GitLab and ship a full app, from idea to
production, in under Y minutes. Before, setting up a place for your repositories, setting up a CI service and making that auto deploy to dynamic environments and deploying all of this on a container scheduler would take weeks.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is ***MVP_USER*** ***CONTRIBUTION_OF_MVP_USER***.
Thanks ***MVP_USER_FIRST_NAME***!

<!--more-->

## Installing GitLab to deploying to Production in Y minutes

< FULL VIDEO>

## Auto Deploy

We want everyone to quickly get a fully functioning CI/CD pipeline that deploys
to a container scheduler. It shouldn't require any effort to get started,
but also be scalable and not hide any of the magic.

Auto Deploy does this. Auto Deploy adds a single button to your project,
that when clicked, will create a merge request with all necessary templates
to set up GitLab CI, including review apps, and a template to deploy your
application to your container scheduler.

![TODO IMAGE]()

This is as close as you can get to one-click deploys, while exposing what
is happening and having all this version-controlled in your repository, ready
to collaborate and iterate on.

See [XX:XX]() in the video for a quick demo of Auto Deploy, as it is available
in GitLab 8.15.

For this first iteration, Auto Deploy only has templates for Ruby on Rails and
Kubernetes. We want to add support for more stacks (Node, Java, etc) soon and other container schedulers later (Mesos, Docker Swarm). Contributions are very welcome in [our template repository](TODO_ADD_LINK).

> [Documentation link](link)

## Web Terminal

Working together with your container scheduler, GitLab happily spins up several
(dynamic) environments on request for your projects. Be that for review apps
or a staging or production environment.
Traditionally, getting direct access to these environments has been a little painful. And that's a shame: it's very useful to quickly try something in a
live environment, be it to debug a problem or just to experiment.

With the web terminal, this has become extremely easy. Just visit the
environments page in your project and click on the terminal button.
GitLab will SSH into the instance for you and allow you to do anything
you would be able to do from your local instance.

In the demonstartion at [XX:XX]() we show you how to use the web terminal
to quickly try out some changes.

> [Documentation link](link)

## Improved BitBucket Importer

## Global Git Hooks

If you want to enforce rules and triggers based on Git pushes and their
contents, you have been able to use custom Git hooks in GitLab. But if you
want to standardize on these rules, you'd have to copy and paste them
to every new project.

With Global Git Hooks you can now create Git hooks that will be run
for each project on the GitLab instance. This should make it much easier
to set up rules that you want all incoming code to comply with.

Create the hooks in `hooks/<hook_name>.d/` directory or tell GitLab Shell where the directories are.

[See the documentation on Custom Hooks](https://docs.gitlab.com/ce/administration/custom_hooks.html)


## Chained Custom Git Hooks

If you have set up custom Git hooks, the order might matter: when an initial
hook fails, there is no point in moving forward. With Chained Custom Hooks
hooks will execute in lexical order, failing on the first failing script.

This means you can create hook `1-hook.sh`, `2-hook.sh` and you'll know that
`1` will execute before `2`.

This gives a lot of power to your hooks and allows endless customization of
what happens when a commit is about to land in your GitLab project.

For more information, see the [custom git hooks documentation](https://docs.gitlab.com/ce/administration/custom_hooks.html#chained-hooks-support).

Thanks to both Elan Ruusamäe and Dirk Hörner for both helping to define Global Git Hooks and this feature, and providing the implementation!

## Mathematics support for Markdown and AsciiDoc, using KaTeX

Comments and repository files can now contain beautifully-typeset mathematics, using the [KaTeX](https://khan.github.io/KaTeX/) library from Khan Academy.

To render inline mathematics, use dollar signs around inline code: ```$`a^2+b^2=c^2`$```

To render multiline mathematics, use the `math` language for the code block:

    ```math
    a^2+b^2=c^2
    ```

In addition to working for Markdown, this is also available for AsciiDoc documents. [Read the documentation on mathematics support.](https://docs.gitlab.com/ce/user/markdown.html#math)

Thanks to Michael Munch for this feature!

## Cleaner merge commit messages

Previously, merge commit messages included the title and description of the merge request, and a reference to the merge request. This didn't read well when using `git log` and similar tools, because merge request descriptions often contain requests for review, screenshots, and other details incidental to the code change.

Now, the default merge commit message is in the following format:

    Merge branch '$SOURCE_BRANCH' into '$TARGET_BRANCH'

    $TITLE

    Closes $CLOSING_ISSUE_REFERENCES # only present if the MR closes issues

    See merge request $MERGE_REQUEST_REFERENCE

The previous default message is available as an option when customising the merge commit message.

Thanks to Gabriel Gizotti!

## Shorthand cross-project references in GitLab Flavored Markdown

Previously, a reference to something in another project always included the namespace, even if the project was in the same namespace.

Now, shorthand references are available. So from within the `gitlab-org/gitlab-ce` project, you can refer to issue #1 in GitLab Workhorse by writing `gitlab-workhorse#1` instead of `gitlab-org/gitlab-workhorse#1`, saving precious keystrokes!

For more information, see the [special GitLab references](https://docs.gitlab.com/ce/user/markdown.html#special-gitlab-references) section of our Markdown documentation.

Thanks to Oswaldo Ferreira!

## Create an issue with unresolved discussion from a merge request

In 8.14, we [added the ability to block a merge when there are unresolved discussions](https://about.gitlab.com/2016/11/22/gitlab-8-14-released/#prevent-merge-until-review-is-done).

Now, we have added an option to [create a new issue from the unresolved discussions in a merge request](https://docs.gitlab.com/ce/user/project/merge_requests/merge_request_discussion_resolution.html#move-all-unresolved-discussions-in-a-merge-request-to-an-issue), and resolve those discussions at the same time! This is perfect for those cases where you need to merge something now, but don't want to forget about the code review comments.

Thanks to Bob van Landuyt!

## Omnibus GitLab package changes

### PostgreSQL version upgrade

Starting with GitLab 8.14 omnibus-gitlab package, we are providing a way to
upgrade the PostgreSQL database version.

The current version of PostgreSQL we are packaging (9.2.18) is slowly
approaching its EOL. Due to the [PostgreSQL versioning policy](https://www.postgresql.org/support/versioning/),
upgrades between major releases require downtime and the use of the `pg_upgrade` tool.

For this purpose, we are packaging the newest available PostgreSQL version (9.6.1).
We are also introducing `gitlab-ctl pg-upgrade` tool which should make this
transition as painless as possible.
When upgrading to GitLab 8.14, this *action will not be run automatically*.
This will allow you to plan the database upgrade downtime.

After version 9.0 is released, we plan on setting the PostgreSQL version 9.6 as
default so please make sure that you plan your upgrade before that release.
We're expecting to ship GitLab 9.0 on or after February 22nd.

> [Read more about database upgrade in our docs](https://docs.gitlab.com/omnibus/maintenance/README.html#upgrade-postgresql-database)


> Ran into issues? Create an issue at the [omnibus-gitlab issue tracker](https://gitlab.com/gitlab-org/omnibus-gitlab/issues),
and reference it in the [upgrade problems meta issue.](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1783)


## Other changes

This release has more improvements, including security fixes. Please check out
[the changelog] to see all the named changes.

[the changelog]: https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG.md

## Upgrade barometer


*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****


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
