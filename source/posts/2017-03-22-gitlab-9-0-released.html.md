---
release_number: "9.0"
title: "Released with Auto Deploy and Web Terminal"
author: Firstname Lastname
author_gitlab: GitLab.com username
author_twitter: Twitter username
categories: release
image_title: '/images/9_0/9_0-cover-image.jpeg'
description: "With this last release of the year, we're not only completing our Master Plan, but we want to show you something cool we've been working on!"
twitter_image: '/images/tweets/post-screenshot-image.png' # optional
#cta_button_text: 'Watch the <strong>XXX release webcast</strong> live!' # optional
#cta_button_link: 'https://page.gitlab.com/xxx.html' # optional
guest: true # required when the author is not a GitLab Team Member
extra_css:
  - release-posts.css
---

{::options parse_block_html="true" /}

<section class="left vertical-align-top">

You’re doing code review of a new feature and wonder how it’ll actually feel, look and work when it’s live. Yesterday, you had to sacrifice your local development environment’s state, checkout the remote branch, run migrations, and then spin up the entire development environment. Today, you can just go to GitLab and click the link in the merge request to play with a fully functional, live environment.

Maybe you have some feedback on what you saw and start talking with your colleague on chat. Rather than having to communicate on who moves the result to issues, you just create an issue directly from chat. You can immediately add a time estimate to the issue and anyone peeking at the cycle analytics will see the new issue come by and over time, move to production, giving you feedback on where things might get stuck.

You can do all of the above and much more with GitLab 8.14, today. Time tracking, Review Apps, Chat commands, Cycle Analytics improvements and much more.

<!-- more -->

</section>

<section class="right vertical-align-top">

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/enMumwvLAug" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

Tune in on Nov. 30 for our 8.14 release webcast with a live demo of Review Apps and Time Tracking for EE!
{: .figcaption}

</section>

<section class="mvp">

![mvp-badge](/images/mvp_badge.png)

### This month’s Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is [Toon Claes](https://gitlab.com/to1ne)

Toon contributed the button to delete all merged branches, a great addition to GitLab. Thanks Toon Claes!

</section>

<!--more-->

<section class="middle">

## Time Tracking Beta
{: .ee}

Whether you’re a contractor that needs to keep track of their time, or you’re managing time spent on issues and projects, time tracking has traditionally been a painful experience: You have various systems to keep track or log your time and these never seem to fit in your day-to-day workflow.

You can now track your time right where you’re working, with Time Tracking in GitLab.

With Time Tracking, you’re able to set estimates for how much time is necessary for a particular issue. All you have to do is use a new slash command, which can be entered in the issue description or a comment:

![Time Tracking Beta in GitLab 8.14](/images/8_14/time.gif){: .shadow}

[Read the docs on how to use Time Tracking in GitLab](https://docs.gitlab.com/ee/workflow/time_tracking.html)

</section>

<section class="left">

## Chat Commands Alpha
{: .ce-ee}

It seems like communication has moved from the conference room to the online
chatroom in the last few years. In particular, collaboration and idea generation
seem to happen here, and that's an important part of the
[idea-to-production vision](/2016/09/13/gitlab-master-plan/#the-master-plan)
that we aim to capture with GitLab. With Chat Commands you can now bridge the
gap between chat and GitLab's repositories, issue tracker, and CI/CD pipelines
quickly and easily.

With this first iteration, you can quickly create or view an issue, for
instance, using this to make an issue with the title and description already filled in:

```
/gitlab issue create Even Better Issue Boards
Let's make Issue boards _even_ better!
```

You can also embrace ChatOps and trigger deploys to production (using the
proper identity and permissions of the user):

```
/gitlab deploy staging to production
```

This iteration supports Mattermost, which ships with GitLab Omnibus. Slack
support is [coming soon](https://gitlab.com/gitlab-org/gitlab-ce/issues/22182).
The command set is limited, but we're [looking to add
more](https://gitlab.com/gitlab-org/gitlab-ce/issues/24768) soon and would love
your feedback.

[Read the documentation on Mattermost Slash Commands](https://docs.gitlab.com/ce/project_services/mattermost_slash_commands.html)

</section>
<section class="right">

![Chat Commands in GitLab 8.14 with Mattermost](/images/8_14/chat1.gif)

</section>

<div class="small-reverse">
<section class="left">

![Improved Cycle Analytics in GitLab 8.14](/images/8_14/cycle_events.png)

</section>

<section class="right">

## Cycle Analytics Events
{: .ee}

With Cycle Analytics you get actionable feedback on how fast your ideas are moving to product and where they might be getting stuck. This can seem a little abstract, so to make it more obvious what is happening, we'll now show you the latest events in each stage.

This should make it easier to get an overview of what is happening in each
stage, but also to quickly jump in and see if you can move things forward
faster.

[Read the documentation on Cycle Analytics](https://docs.gitlab.com/ce/user/project/cycle_analytics.html)

</section>
</div>

<section class="middle">

## See all other improvements to GitLab 8.14
{: .ce-ee}

This release has more improvements, including security fixes. Please check out
[the changelog] to see all the named changes.

[the changelog]: https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG.md

</section>

<section class="left vertical-align-top">

### Upgrade barometer

*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****

#### Note

We assume you are upgrading from the latest version. If not, then also consult the upgrade barometers of any intermediate versions you are skipping.
If you are upgrading from a GitLab version prior to 8.0 *and* you have CI enabled, you have to upgrade to GitLab 8.0 [first](https://about.gitlab.com/2015/09/22/gitlab-8-0-released/).

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

</section>

<section class="right vertical-align-top">

### Installation

If you are setting up a new GitLab installation please see the
[download GitLab page](https://about.gitlab.com/installation/).

<br>

### Updating

Check out our [update page](https://about.gitlab.com/update/).

<br>

### Enterprise Edition

The mentioned EE only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE](https://about.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](https://about.gitlab.com/products/). No time to upgrade GitLab yourself? A subscription also entitles you to our upgrade and installation services.

</section>

[Cover image](LINK-TO-ORIG-IMG) by [Name Surname](LINK-TO-AUTHOR'S-BIO), licensed under [CC X](LINK-TO-LICENCE).
{:.note}
