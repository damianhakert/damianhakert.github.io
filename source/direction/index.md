---
layout: markdown_page
title: "GitLab Direction"
---

This page list the direction or roadmap of GitLab.
It is organized from the short to the long term.

## Your contributions

GitLab's direction is determined by the code that is send by our [contributors](http://contributors.gitlab.com/).
We continually merge code to be released in the next version.
Contributing is the best way to get a feature you want included.
In [our feedback forum](http://feedback.gitlab.com/forums/176466-general),
many requests are made for features and changes to GitLab.
The ones with the
[status accepting merge requests](http://feedback.gitlab.com/forums/176466-general/status/796455)
are preapproved.
Of course before any code is merged it still has to meet the
[contribution acceptance criteria](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md#contribution-acceptance-criteria).

## What our customers want

At GitLab the company we try to make what our users and we need (many of us are or used to be developers).
But if a customer of us requests a feature that carries extra weight.
Due to our short release cycle we can ship simple feature requests (for example an api extension) within one to two months.

## Next releases

GitLab releases a new version every single month on the 22nd.
Note that we often move things around, do things that are not listed and we don't always get to do everything that is planned.
Also the list below not include any contributions from outside GitLab the company.
The version numbers below link to the issues for that version accross all products.
The bullets list the tentpole features; the most improtant features of upcoming releases.

### [8.3](https://gitlab.com/groups/gitlab-org/milestones/8-3?title=8.3) - December 22nd

- [GitLab Pages (EE)](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/1748)
- [Issue Weight (EE)](https://gitlab.com/gitlab-org/gitlab-ee/issues/70)
- [Migrate all Ci::Project data to Project](https://gitlab.com/gitlab-org/gitlab-ce/issues/3474)
- [Import GitHub PR's](https://gitlab.com/gitlab-org/gitlab-ce/issues/2833)

### [8.4](https://gitlab.com/groups/gitlab-org/milestones/8-4?title=8.4) - January 22nd

- [Project import / export](https://gitlab.com/gitlab-org/gitlab-ce/issues/3050)
- [Import GitHub wiki's](https://gitlab.com/gitlab-org/gitlab-ce/issues/2834)
- [Elasticsearch or Hound (EE)](https://gitlab.com/gitlab-org/gitlab-ee/issues/61)
- [GitLab RE for readonly secundary servers (EE)](https://gitlab.com/gitlab-org/gitlab-ee/issues/76)
- [GitLab Pipeline](https://gitlab.com/gitlab-org/gitlab-ce/issues/3743)
- [Group contribution statistics (EE)](https://gitlab.com/gitlab-org/gitlab-ee/issues/109)

### [8.5](https://gitlab.com/groups/gitlab-org/milestones/8-5?title=8.5) - February 22nd

- [Notification System](https://gitlab.com/gitlab-org/gitlab-ce/issues/2425)
- [HA Omnibus packages (EE)](https://gitlab.com/gitlab-org/gitlab-ee/issues/77)
- [Revert merges](https://gitlab.com/gitlab-org/gitlab-ce/issues/3409)
- [GitLab Deploy](https://gitlab.com/gitlab-org/gitlab-ce/issues/3286)
- [Focus Dashboard](https://gitlab.com/gitlab-org/gitlab-ce/issues/3467)
- [Management dashboard for CD (EE)](https://gitlab.com/gitlab-org/gitlab-ee/issues/110)
- [Management reporting (EE)](https://gitlab.com/gitlab-org/gitlab-ee/issues/112)

### [8.6](https://gitlab.com/groups/gitlab-org/milestones/8-6?title=8.6) - March 22nd

- [External users](https://gitlab.com/gitlab-org/gitlab-ce/issues/4009)

## Wishlist

Below you will find several things we'd really like to see in GitLab.
This list is not prioritized.

Some links point to internal issues. We're working on making [all issues public](https://about.gitlab.com/2015/08/03/almost-everything-we-do-is-now-open/).

We very much welcome contributions that implement any of these things.

### Major Wins

- [Translations](http://feedback.gitlab.com/forums/176466-general/suggestions/3337748-internationalization-add-translations) with the help of the rest of the community and Perforce
- [Nested Groups](https://gitlab.com/gitlab-org/gitlab-ce/issues/2772)
- [GitLab Deploy](https://gitlab.com/gitlab-org/gitlab-ce/issues/3286)
- [GitLab Pipeline](https://gitlab.com/gitlab-org/gitlab-ce/issues/3743)
- [GitLab Autoscale](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/issues/318)
- [Resolve merge conflicts in the web interface](https://gitlab.com/gitlab-org/gitlab-ce/issues/3567)
- [Multithreaded application server](https://gitlab.com/gitlab-org/gitlab-ce/issues/3592)

### Small Wins

- [Show commits behind/ahead on branch overview page](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/1716)
- [See all forked projects of one project](https://gitlab.com/gitlab-org/gitlab-ce/issues/2406)
- [Edit on protected branch should create a new branch](https://dev.gitlab.org/gitlab/gitlabhq/issues/2242)

### Code Review

You should be able to review any code within GitLab quickly, easily and
in a way that all relevant parties get notified.

- [Pre-post comment code](https://gitlab.com/gitlab-org/gitlab-ce/issues/3502) see what the current state of the code is where in a previous commit a comment was placed
- [Merge if green button if tests are still running](https://gitlab.com/gitlab-org/gitlab-ce/issues/2640)
- [Allow cross server merge requests](http://feedback.gitlab.com/forums/176466-general/suggestions/5097708-implement-cross-server-federated-merge-requests) (paste url when making a new MR)
- [Revert button for merges](https://dev.gitlab.org/gitlab/gitlabhq/issues/2299)
- [Ability to checkout the result of MR available before merging](https://gitlab.com/gitlab-org/gitlab-ce/issues/2765)
- [Syntax highlighting for diffs](https://gitlab.com/gitlab-org/gitlab-ce/issues/3292)
- [Transactional MR comments](https://gitlab.com/gitlab-org/gitlab-ce/issues/3364) prevent notification overload by grouping comments
- [Revert button for MRs](https://gitlab.com/gitlab-org/gitlab-ce/issues/3409)

### Project Management

- [Make it easier to add labels to an issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/2574)
- [Filter by more than one label](https://gitlab.com/gitlab-org/gitlab-ce/issues/989)
- [Move issues between projects](https://gitlab.com/gitlab-org/gitlab-ce/issues/3024)
- [Set Issue weight](https://gitlab.com/gitlab-org/gitlab-ce/issues/3397)
- [Time tracking](https://gitlab.com/gitlab-org/gitlab-ee/issues/78)
- Draw and drop issues to prioritize them
- Handle incoming emails with support questions in issues, needs spam filter
- [Labels should be visible in Milestone view](https://gitlab.com/gitlab-org/gitlab-ce/issues/3276)
- [Management dashboard for continuous delivery](https://dev.gitlab.org/gitlab/gitlab-ee/issues/287)

### Productivity

- [Mentioned activity feed (overlap with notification center)](https://dev.gitlab.org/gitlab/gitlabhq/issues/2288)
- Issue/MR description field works like google docs, real time collaboration & autosave, maybe with [ShareJS](http://sharejs.org/)
- [Change notification setting](https://dev.gitlab.org/gitlab/gitlabhq/issues/2395)
- [Add more default views](https://gitlab.com/gitlab-com/www-gitlab-com/edit/master/source/direction/index.md)

### Version Control for Everything

- [In-picture-comments](https://gitlab.com/gitlab-org/gitlab-ce/issues/2641)
- [Automatically push changed files from a local folder](https://dev.gitlab.org/gitlab/gitlabhq/issues/2265)

### Operations

- [Handle errors before they give a 500](https://dev.gitlab.org/gitlab/gitlabhq/issues?milestone_id=&scope=all&sort=created_desc&state=opened&utf8=%E2%9C%93&assignee_id=&author_id=&milestone_title=&label_name=gitlab.com+errors)
- [Get rid of the large authorized keys (SSH) file](https://gitlab.com/gitlab-org/gitlab-git-http-server/issues/2#note_1983654)
- [Upgrade to Sidekiq 4 because it is faster](https://gitlab.com/gitlab-org/gitlab-ce/issues/3065)

### CI

- [Zero config CI](https://dev.gitlab.org/gitlab/gitlabhq/issues/2528)
- [Option to test the result of the merge](http://homu.io/) instead of the feature branch itself (you will have to retest all MR's every time master / target branch is updated)
- [Document dependent builds / pipeline triggers](https://gitlab.com/gitlab-org/gitlab-ce/issues/3432)
- [Staging environment per branch with GitLab Deploy](https://gitlab.com/gitlab-org/gitlab-ce/issues/3286) similar to [Teatro](https://teatro.io/), [Tutum](https://support.tutum.co/support/solutions/articles/5000620449-deploy-to-tutum-button) & [Heroku Review Apps](https://blog.heroku.com/archives/2015/5/19/heroku_review_apps_beta))
- Automatically give code quality metrics in the merge request
- [Automatic Docker image cleanup](https://gitlab.com/ayufan/gitlab-runner-docker-cleanup/issues/1)
- Show code coverage in diffs with colored horizontal bar
- A/B testing of branches
- [Shared runners](https://dev.gitlab.org/gitlab/gitlab-ci/issues/322#note_56433) automanaged [by Kubernetes](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/30)

### EE

- Push to another repo
- [Management dashboard](https://dev.gitlab.org/gitlab/gitlab-ee/issues/287)
- [Highly Available (HA) Omnibus Packages](https://gitlab.com/gitlab-org/gitlab-ee/issues/77)
- [Oracle support](https://gitlab.com/gitlab-org/gitlab-ee/issues/96)
- [Group member activity](https://gitlab.com/gitlab-org/gitlab-ce/issues/3824)

### Software to ship in the Omnibus packages

- [Rocket.Chat](http://rocket.chat/) if they can make it [work with PostgreSQL](https://github.com/RocketChat/Rocket.Chat/issues/533)
- [A scrum board](https://about.gitlab.com/applications/#scrum-boards)
- [CodeClimate](https://gitlab.com/gitlab-org/gitlab-ce/issues/4044)
- [Lita](https://www.lita.io/) or another chat-ops bot

### We would love to partner with

- Browser IDE: Koding, Nitrous.io, [Cloud9](https://c9.io/blog/cloud9-template-days/), CodeAnywhere, Codio and CodeEnvy (ship GitLab with them and button to open from GitLab)
- Configuration management: Upload cookbooks, manifests, playbooks, and modules for respectively Chef, Puppet, Ansible, and Salt.
- Paas: Use [GitLab Deploy](https://gitlab.com/gitlab-org/gitlab-ce/issues/3286) to deploy to CloudFoundry, OpenStack, OpenShift, Kubernetes, Mesos DCOS, Docker Swarm, Atlas/Terraform, [Nomad](https://nomadproject.io/), [Deis](http://deis.io/), [Convox](http://www.convox.com/), [Flynn](https://flynn.io/), [Tutum](https://www.tutum.co/), [GiantSwarm](https://giantswarm.io/), [Rancher](https://github.com/rancher/rancher/blob/master/README.md)
- Scrum boards: [Huboard](https://huboard.com/), [Waffle.io](https://waffle.io/) and [Zenhub.io](https://www.zenhub.io/) support in addition to https://about.gitlab.com/applications/#scrum-boards

## Vision <a name="vision"></a>

Everyone, including all knowledge workers, needs to collaborate on digital content.
This content should be open to suggestions by a wide number of potential contributors.
This can be achieved by using a mergeable file format and distributed version control.
The vision of GitLab is to <b>allow everyone to collaborate on all digital content</b>.
This allows people to cooperate effectively and to achieve better results, faster.

Idea's go flow though many stages before they are realized: chat, issue, sprint, IDE, commit, CI, review, acceptance, deployment.
Stitching all stages together can be done in many different ways.
You can have a marketplace of proprietary apps from different suppliers.
Or stich it together with a suite of products that are developed in isolation.
We believe that an <b>integrated set of tools based on convention over configuration</b> offers a superior user experience.
The advantage can be quoted from the [Wikipedia page for convention over configuration](https://en.wikipedia.org/wiki/Convention_over_configuration): "decrease the number of decisions that developers need to make, gaining simplicity, and not necessarily losing flexibility.".
In GitLab you only have to specify unconventional aspects of your workflow, the rest will be a smooth experience.
And that smooth experience should go all the way from informal chat, to creating an issue, coding it in an IDE, committhing the code, running CI tests, doing a code review, to deployment in different environments.
That doesn't mean we'll never do a marketplace, in fact this is the way [GitLab.com will be free forever](https://about.gitlab.com/gitlab-com/#why-gitlab-com-will-be-free-forever).
But we admire other convention over configuration tools like [Ruby on Rails](http://rubyonrails.org/), [Ember](http://emberjs.com/) and [Heroku](https://www.heroku.com/) and strive to offer the same advantages for a continuous delivery of software.

The open source nature of GitLab ensures that we're well suited to offer an integrated experience.
Everyone can contribute to achieve the [complete feature set](https://about.gitlab.com/comparison/) that is needed for an integrated experience.
Because GitLab is open source the enhancements can become part of the codebase instead of being external.
This ensures the automated tests for all functionality are continually run, ensuring that plugins always work.
It also ensures GitLab can continue to evolve with it's plugins instead of being bound to a plugin API that is hard to change and that resists refactoring.
This ensures we have many years of quality code and great monthly releases ahead of us.