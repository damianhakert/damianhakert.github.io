---
layout: markdown_page
title: "GitLab Direction"
---

This page describes the direction and roadmap for GitLab.
It is organized from the short to the long term.

## Your contributions

GitLab's direction is determined by the code that is sent by our [contributors](http://contributors.gitlab.com/).
We continually merge code to be released in the next version.
Contributing is the best way to get a feature you want included.
On [our issue tracker for CE](https://gitlab.com/gitlab-org/gitlab-ce/issues)
and [EE](https://gitlab.com/gitlab-org/gitlab-ee/issues),
many requests are made for features and changes to GitLab.
The ones with the
[status accepting merge requests](https://gitlab.com/gitlab-org/gitlab-ce/issues?milestone_id=&scope=all&sort=created_desc&state=opened&utf8=%E2%9C%93&assignee_id=&author_id=&milestone_title=&label_name=Accepting+Merge+Requests&weight=)
are pre-approved.
Of course before any code is merged it still has to meet the
[contribution acceptance criteria](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md#contribution-acceptance-criteria).

## What our customers want

At GitLab the company we try to make what our users and we need (many of us are or used to be developers).
If a customer requests a feature, it carries extra weight.
Due to our short release cycle we can ship simple feature requests (for example an API extension) within one to two months.

## Previous releases

On our [release list page](https://about.gitlab.com/release-list/) you can find an overview of the most important features of recent releases and a links to the release blog posts.

## Next releases

GitLab releases a new version every single month on the 22nd.
Note that we often move things around, do things that are not listed and we don't always get to do everything that is planned.
Also the list below not include any contributions from outside GitLab the company.
The bullets list the tentpole features; the most important features of upcoming releases.
The CE and EE to the right of the version number link to all planned issues for that version.

### 8.5 [CE](https://gitlab.com/gitlab-org/gitlab-ce/milestones/20) [EE](https://gitlab.com/gitlab-org/gitlab-ee/milestones/7) February 22nd

- [CI Autoscale](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/issues/318)
- [GitLab Pages gets CNAME and SSL support](https://gitlab.com/gitlab-org/gitlab-ee/issues/134)
- [GitLab Geo for readonly secondary servers (EE)](https://gitlab.com/gitlab-org/gitlab-ee/issues/76)
- [Todo's](https://gitlab.com/gitlab-org/gitlab-ce/issues/2425)
- [HA Omnibus packages (EE)](https://gitlab.com/gitlab-org/gitlab-ee/issues/77)
- [Revert merges](https://gitlab.com/gitlab-org/gitlab-ce/issues/3409)
- [GitLab Deploy](https://gitlab.com/gitlab-org/gitlab-ce/issues/3286)
- [New design for issue page](https://gitlab.com/gitlab-org/gitlab-ce/issues/3981)
- [Support for relative URLs](https://gitlab.com/gitlab-org/gitlab-ce/issues/1938)
- [Sort by vote count](https://gitlab.com/gitlab-org/gitlab-ce/issues/3763)

### 8.6 [CE](https://gitlab.com/gitlab-org/gitlab-ce/milestones/22) [EE](https://gitlab.com/gitlab-org/gitlab-ee/milestones/8) March 22nd

- [Project import / export](https://gitlab.com/gitlab-org/gitlab-ce/issues/3050)
- [CI Pipeline](https://gitlab.com/gitlab-org/gitlab-ce/issues/3743)
- [External users](https://gitlab.com/gitlab-org/gitlab-ce/issues/4009)
- [Push to a remote repository (EE)](https://gitlab.com/gitlab-org/gitlab-ee/issues/116)
- [Confidential issues (EE)](https://gitlab.com/gitlab-org/gitlab-ce/issues/3678)
- [Performance monitoring (EE)](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1008)
- [Merge even if master is updated](https://gitlab.com/gitlab-org/gitlab-ce/issues/3873)
- [Acknowledge line comments on a MR](https://gitlab.com/gitlab-org/gitlab-ce/issues/10325)

### 8.7 [CE](https://gitlab.com/gitlab-org/gitlab-ce/milestones/23) [EE](https://gitlab.com/gitlab-org/gitlab-ee/milestones/9) April 22nd

- [Squash commits upon Merging (EE)](https://gitlab.com/gitlab-org/gitlab-ee/issues/150)
- [Run build on merged code before merging (EE?)](https://gitlab.com/gitlab-org/gitlab-ce/issues/4176)
- [Code management analytics (EE)](https://gitlab.com/gitlab-org/gitlab-ee/issues/112)
- [Delivery analytics (EE)](https://gitlab.com/gitlab-org/gitlab-ee/issues/110)
- [Subscribe to a Label](https://gitlab.com/gitlab-org/gitlab-ce/issues/12743)
- [Subscribe to new Issues](https://gitlab.com/gitlab-org/gitlab-ce/issues/12758)

## Wishlist

Below are features we'd really like to see in GitLab.
This list is not prioritized.
We very much welcome contributions that implement any of these things.

### Next to plan.

- [Project / Repo templates](https://gitlab.com/gitlab-org/gitlab-ce/issues/3785)
- [Award emoji in comments](https://gitlab.com/gitlab-org/gitlab-ce/issues/3655)
- [Comment on Images in Diffs](https://gitlab.com/gitlab-org/gitlab-ce/issues/2641)
- [Mailing list functionality](https://gitlab.com/gitlab-org/gitlab-ce/issues/4272)

### Major Wins

- [Translations](https://gitlab.com/gitlab-org/gitlab-ce/issues/4012)
- [Nested Groups](https://gitlab.com/gitlab-org/gitlab-ce/issues/2772)
- [Resolve merge conflicts in the web interface](https://gitlab.com/gitlab-org/gitlab-ce/issues/3567)
- [Multithreaded application server](https://gitlab.com/gitlab-org/gitlab-ce/issues/3592)
- [Realtime editing of the issue/MR description field](https://gitlab.com/gitlab-org/gitlab-ce/issues/4199)
- [Handle incoming emails with support questions in issues](https://gitlab.com/gitlab-org/gitlab-ee/issues/149)
- [Cherry-pick MR into any branch in the web interface](https://gitlab.com/gitlab-org/gitlab-ce/issues/12785)
- [Allow pusing to multiple servers](https://gitlab.com/gitlab-org/gitlab-ee/issues/276)

### Usability

- [See all forked projects of one project](https://gitlab.com/gitlab-org/gitlab-ce/issues/2406)
- [Email actions](https://gitlab.com/gitlab-org/gitlab-ce/issues/4273)
- [Improved emails on push](https://gitlab.com/gitlab-org/gitlab-ee/issues/146)
- [Autocomplete all users](https://gitlab.com/gitlab-org/gitlab-ce/issues/3872)
- [Create branch from issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/3886)

### Code Review

- [See current HEAD in outdated discussion](https://gitlab.com/gitlab-org/gitlab-ce/issues/3502)
- [Allow cross server merge requests](https://gitlab.com/gitlab-org/gitlab-ce/issues/4013)
- [Ability to checkout the result of MR available before merging](https://gitlab.com/gitlab-org/gitlab-ce/issues/2765)
- [Syntax highlighting for diffs](https://gitlab.com/gitlab-org/gitlab-ce/issues/3292)
- [Transactional MR comments](https://gitlab.com/gitlab-org/gitlab-ce/issues/3364)

### Project Management

- [Filter by more than one label](https://gitlab.com/gitlab-org/gitlab-ce/issues/989)
- [Move issues between projects](https://gitlab.com/gitlab-org/gitlab-ce/issues/3024)
- [Time tracking](https://gitlab.com/gitlab-org/gitlab-ee/issues/78)
- [Labels should be visible in Milestone view](https://gitlab.com/gitlab-org/gitlab-ce/issues/3276)

### Productivity

- [Change notification setting](https://gitlab.com/gitlab-org/gitlab-ce/issues/3778)
- [Add more default views](https://gitlab.com/gitlab-com/www-gitlab-com/edit/master/source/direction/index.md)

### Version Control for Everything

- [Distributed code-reviews and issues](https://gitlab.com/gitlab-org/gitlab-ce/issues/4084)
- [Render PSD files](https://gitlab.com/gitlab-org/gitlab-ce/issues/13189)

### Performance

- [Handle errors before they give a 500](https://gitlab.com/gitlab-org/gitlab-ce/issues/4665)
- [Get rid of the large authorized keys (SSH) file](https://gitlab.com/gitlab-org/gitlab-git-http-server/issues/2#note_1983654)
- [Participants table](https://gitlab.com/gitlab-org/gitlab-ce/issues/3965)
- [Reduce memory leaks](https://gitlab.com/gitlab-org/gitlab-ce/issues/13241)

### CI

- [Runner Autoscale](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/issues/318)
- [Document dependent builds / pipeline triggers](https://gitlab.com/gitlab-org/gitlab-ce/issues/3432)
- [Deploy your branch button](https://gitlab.com/gitlab-org/gitlab-ce/issues/3286)
- [Automatically give code quality metrics in the merge request](https://gitlab.com/gitlab-org/gitlab-ce/issues/4044)
- [Automatic Docker image cleanup](https://gitlab.com/ayufan/gitlab-runner-docker-cleanup/issues/1)
- [Show code coverage in diffs with colored horizontal bar](https://gitlab.com/gitlab-org/gitlab-ce/issues/4073)
- [A/B testing of branches with GitLab Pages](https://gitlab.com/gitlab-org/gitlab-ee/issues/117)

### Software to ship in the Omnibus packages

The software development lifecycle and collaboration on digital products happens with the following stack of tools that we want to ship in our Omnibus packages:

1. **Chat** conversation => Mattermost, [Rocket.Chat](http://rocket.chat/) if they can make it [work with PostgreSQL](https://github.com/RocketChat/Rocket.Chat/issues/533)
1. **Issue** creation => GitLab Issues
1. **Scrum** board to plan => [Huboard](https://huboard.com/) for which there is a [bounty](https://github.com/huboard/huboard/issues/276)
1. **Development** => [Browser IDE](https://gitlab.com/gitlab-org/gitlab-ce/issues/12759)
1. **Version control** => GitLab Repo
1. **Continuous integration** => GitLab CI
1. **Merge Request** discussion => GitLab MR
1. **Deploy** to production => [GitLab Deploy](https://gitlab.com/gitlab-org/gitlab-ce/issues/3286)
1. **Chatops** to check => [Hubot](https://hubot.github.com/) which has a [Merge Request](https://gitlab.com/gitlab-org/omnibus-gitlab/merge_requests/564) or [Lita](https://www.lita.io/)

We're still deciding if application performance monitoring is in our scope, for example with Grafana and InfluxDB.

Things that are outside our scope are:

1. **PaaS** although we do want to use [GitLab Deploy](https://gitlab.com/gitlab-org/gitlab-ce/issues/3286) to deploy to CloudFoundry, OpenStack, OpenShift, Kubernetes, Mesos DCOS, Docker Swarm, Atlas/Terraform, [Nomad](https://nomadproject.io/), [Deis](http://deis.io/), [Convox](http://www.convox.com/), [Flynn](https://flynn.io/), [Tutum](https://www.tutum.co/), [GiantSwarm](https://giantswarm.io/), [Rancher](https://github.com/rancher/rancher/blob/master/README.md)
1. **Configuration management** although we do want to upload cookbooks, manifests, playbooks, and modules for respectively Chef, Puppet, Ansible, and Salt.
1. **Log monitoring** (ELK stack, Splunk)
1. **Network** (Openflow, VMware NSX, Cisco ACI)
1. **Security** applications

### We would love to partner with

- Scrum boards: We already support [some of them](https://about.gitlab.com/applications/#scrum-boards) but would love for [Waffle.io](https://waffle.io/), and [Zenhub.io](https://www.zenhub.io/) to support GitLab too.
- [CodeClimate](https://gitlab.com/gitlab-org/gitlab-ce/issues/4044)
- [Oracle database support (EE)](https://gitlab.com/gitlab-org/gitlab-ee/issues/96)
- Browser IDE's to ship GitLab with them and to have button to open them from GitLab: Koding, Nitrous.io, [Cloud9](https://c9.io/blog/cloud9-template-days/), CodeAnywhere, Codio, and CodeEnvy

## Vision <a name="vision"></a>

From development teams to marketing organizations, everyone needs to collaborate on
digital content. Content should be open to suggestions by a wide number of
potential contributors. Open contribution can be achieved by using a mergeable
file format and distributed version control. The vision of GitLab is to **allow
everyone to collaborate on all digital content** so people can cooperate
effectively and achieve better results, faster.

Idea's flow though many stages before they are realized: chat, issue, sprint,
IDE, commit, CI, review, acceptance, deployment. Stitching all these stages
together can be done in many different ways. You can have a marketplace of
proprietary apps from different suppliers or use a suite of products developed
in isolation. We believe that an **opinionated and integrated set of tools based
on convention over configuration** offers superior user experience. The
advantage can be quoted from the [Wikipedia page for convention over
configuration](https://en.wikipedia.org/wiki/Convention_over_configuration):
"decrease the number of decisions that developers need to make, gaining
simplicity, and not necessarily losing flexibility". In GitLab you only have to
specify unconventional aspects of your workflow, the rest will be a smooth
experience. That smooth experience should go from informal chat, to creating an
issue, coding it in an IDE, committing the code, running CI tests, doing a code
review, and deploying in different environments. That doesn't mean we'll never
do a marketplace, in fact this is the way [GitLab.com will be free
forever](https://about.gitlab.com/gitlab-com/#why-gitlab-com-will-be-free-forever).
We admire other convention over configuration tools like [Ruby on
Rails](http://rubyonrails.org/) (that doctrine of which perfectly describe the [value of integrated systems](http://rubyonrails.org/doctrine#integrated-systems), [Ember](http://emberjs.com/), and
[Heroku](https://www.heroku.com/), and strive to offer the same advantages for a
continuous delivery of software.

The open source nature of GitLab ensures that we're well suited to offer an
integrated experience. Everyone can contribute to achieve the [complete feature
set](https://about.gitlab.com/comparison/) that is needed for an integrated
experience. Because GitLab is open source the enhancements can become part of
the codebase instead of being external. This ensures the automated tests for all
functionality are continually run, ensuring that plugins always work. It also
ensures GitLab can continue to evolve with it's plugins instead of being bound
to a plugin API that is hard to change and that resists refactoring. This
ensures we have many years of quality code and great monthly releases ahead of
us.
