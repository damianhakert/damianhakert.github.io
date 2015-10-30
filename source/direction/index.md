---
layout: markdown_page
title: "GitLab Direction"
---

This page list the direction or roadmap of GitLab.
It is organized from the short to the long term.

### What you contribute

GitLab's direction is determined by the code that is send by our [contributors](http://contributors.gitlab.com/).
In [our feedback forum](http://feedback.gitlab.com/forums/176466-general),
many requests are made for features and changes to GitLab.
The ones with the
[status accepting merge requests](http://feedback.gitlab.com/forums/176466-general/status/796455)
are preapproved.
Of course before any code is merged it still has to meet the
[contribution acceptance criteria](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md#contribution-acceptance-criteria).

## Next releases

GitLab releases a new version every single month on the 22nd.
You can view what is planned for each release on our milestone view for each
product. Note that we often move things around, do things that are not listed,
do not always get to do everything that is planned and that this not include
any contributions from outside GitLab the company.

- [Milestones for GitLab CE](https://gitlab.com/gitlab-org/gitlab-ce/milestones)
- [Milestones for GitLab EE](https://gitlab.com/gitlab-org/gitlab-ee/milestones)
- [Milestones for GitLab CI](https://gitlab.com/gitlab-org/gitlab-ee/milestones)
- [Milestones for Omnibus GitLab](https://gitlab.com/gitlab-org/omnibus-gitlab/milestones)

## Tentpole features

### 8.2

- Git LFS support - [issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/2955)
- Repository mirroring (EE) - [dev issue](https://dev.gitlab.org/gitlab/gitlab-ee/issues/279)
- Releases - [issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/2701)
- Create MR from editor ([dev issue](https://dev.gitlab.org/gitlab/gitlabhq/issues/2518))
- Global Milestones ([dev issue](https://dev.gitlab.org/gitlab/gitlabhq/issues/2474))
- Award Emoji [issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/2223)
- CI gets rid of the ci_projects table
- CI build artifacts - [issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/3028)
- CI runner caching (not doing a clean on a fetch)

### 8.3

- Revert merges. ([dev issue](https://dev.gitlab.org/gitlab/gitlabhq/issues/2299))
- Copy to clipboard

### 8.4

- Project import / export. [issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/3050)
- Further GitHub import features (merge requests and wiki)
- GitLab Pages [issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/3085)

### 8.5

- Elasticsearch (EE) [issue](https://gitlab.com/gitlab-org/gitlab-ee/issues/61)

## Wishlist

Below you will find several things we'd really like to see in GitLab.
This list is not prioritized.

Some links point to internal issues. We're working on making [all issues public](https://about.gitlab.com/2015/08/03/almost-everything-we-do-is-now-open/).

We very much welcome contributions that implement any of these things.

### Interaction

- [Make it easier to add labels to an issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/2574)
- 8.1 [Integrate CI into CE interface wise](https://gitlab.com/gitlab-org/gitlab-ce/issues/2594)
- [Change notification setting](https://dev.gitlab.org/gitlab/gitlabhq/issues/2395)
- [Edit on protected branch should create a new branch](https://dev.gitlab.org/gitlab/gitlabhq/issues/2242)
- [Filter by more than one label](https://gitlab.com/gitlab-org/gitlab-ce/issues/989)
- [See all forked projects of one project](https://gitlab.com/gitlab-org/gitlab-ce/issues/2406)
- [Merge if green button if tests are still running](https://gitlab.com/gitlab-org/gitlab-ce/issues/2640)
- [In-picture-comments](https://gitlab.com/gitlab-org/gitlab-ce/issues/2641)
- [Add more default views](https://gitlab.com/gitlab-com/www-gitlab-com/edit/master/source/direction/index.md)
- [Filter by more than one label](https://gitlab.com/gitlab-org/gitlab-ce/issues/989)
- [Interaction milestone on GitLab.com](https://gitlab.com/dashboard/milestones/interaction?title=Interaction)
- [Interaction milestone on dev.gitlab.org](https://dev.gitlab.org/groups/gitlab/milestones/interaction?title=Interaction)

### CE

- Move issues between projects
- Reduce exceptions (so that exception notifications become usable)
- [Allow cross server merge requests](http://feedback.gitlab.com/forums/176466-general/suggestions/5097708-implement-cross-server-federated-merge-requests) (paste url when making a new MR)
- [Code search in groups](https://dev.gitlab.org/gitlab/gitlabhq/issues/841)
- [Time tracking](https://dev.gitlab.org/gitlab/gitlabhq/issues/2192)
- Improve GitHub import of [PR's](https://gitlab.com/gitlab-org/gitlab-ce/issues/2833) and [wiki's](https://gitlab.com/gitlab-org/gitlab-ce/issues/2834)
- [Automatically push changed files](https://dev.gitlab.org/gitlab/gitlabhq/issues/2265)
- [Mentioned activity level](https://dev.gitlab.org/gitlab/gitlabhq/issues/2288)
- [Revert button for merges](https://dev.gitlab.org/gitlab/gitlabhq/issues/2299)
- [Translations](http://feedback.gitlab.com/forums/176466-general/suggestions/3337748-internationalization-add-translations) with the help of the rest of the community and Perforce
- [Subgroups](http://feedback.gitlab.com/forums/176466-general/suggestions/3867903-allow-project-groups-to-be-organized-in-a-hierarch) (Dmitriy investigated this)
- Show commits behind/ahead on branch overview page
- Mentioned feed on the dashboard, activity feed on separate tab
- Issue/MR description field works like google docs, real time collaboration & autosave, maybe with [ShareJS](http://sharejs.org/)
- 8.1 Git large file support (LFS) [Feedback](http://feedback.gitlab.com/forums/176466-general/suggestions/7502608-git-large-file-storage-lfs-support) [CE](https://dev.gitlab.org/gitlab/gitlabhq/issues/2295) [EE](https://dev.gitlab.org/gitlab/gitlab-ee/issues/318)
- Draw and drop issues to prioritize them
- Handle incoming emails with support questions in issues, needs spam filter
- [Award emoji](https://dev.gitlab.org/gitlab/gitlabhq/issues/2388) (so you can use GitLab as a feature request tracker)
- 8.1 [Commit Status API](https://gitlab.com/gitlab-org/gitlab-ce/issues/2595)
- [Handle errors before they give a 500](https://dev.gitlab.org/gitlab/gitlabhq/issues?milestone_id=&scope=all&sort=created_desc&state=opened&utf8=%E2%9C%93&assignee_id=&author_id=&milestone_title=&label_name=gitlab.com+errors)
- [Get rid of the large SSH key file](https://gitlab.com/gitlab-org/gitlab-git-http-server/issues/2#note_1983654)
- [Deprecate the authorized keys file](https://gitlab.com/gitlab-org/gitlab-git-http-server/issues/2#note_2064375)

### EE
- 8.1 [Mirroring](https://dev.gitlab.org/gitlab/gitlab-ee/issues/279)
- Push to another repo
- [Management dashboard](https://dev.gitlab.org/gitlab/gitlab-ee/issues/287)
- Distributed file system store for large files (Git Annex or Git LFS) and uploads. Can do in in [Ceph](http://ceph.com/), [XtreemFS](http://www.xtreemfs.org/), [LizardFS](http://lizardfs.com/) or something else. But not a pluggable backend for [blobs](http://blog.justinsb.com/blog/2013/12/14/cloudata-day-8/) because [performance will suffer](https://news.ycombinator.com/item?id=9839581), this was as also [indicated by a libgit2 developer](https://github.com/libgit2/libgit2-backends/pull/4#issuecomment-36115322).
- [Geographic slave servers with GitLab RE](https://dev.gitlab.org/gitlab/gitlabhq/issues/2359) for plus subscriptions only

### CI

- [Zero config CI](https://dev.gitlab.org/gitlab/gitlabhq/issues/2528)
- 8.1 stretch goal [Upload build artifacts](https://dev.gitlab.org/gitlab/gitlab-ci/issues/56)
- Option to test the [merge of the feature branch with master](http://homu.io/) instead of the feature branch itself (you will have to retest all MR's every time master is updated)
- Dependent builds [Feedback](http://feedback.gitlab.com/forums/176466-general/suggestions/7233770-chain-builds) and [internal issue](https://dev.gitlab.org/gitlab/gitlab-ci/issues/328)
- Staging environment per branch, easy deploy (similar to [Teatro](https://teatro.io/), [Tutum](https://support.tutum.co/support/solutions/articles/5000620449-deploy-to-tutum-button) & [Heroku Review Apps](https://blog.heroku.com/archives/2015/5/19/heroku_review_apps_beta))
- Automatically give code quality metrics in the merge request
- [Automatic Docker image cleanup](https://gitlab.com/ayufan/gitlab-runner-docker-cleanup/issues/1)
- Show code coverage in diffs with colored horizontal bar
- [Static hosting (Pages/Sites)](https://dev.gitlab.org/gitlab/gitlabhq/issues/2290)
- A/B testing of branches
- [Shared runners](https://dev.gitlab.org/gitlab/gitlab-ci/issues/322#note_56433) automanaged [by Kubernetes](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/30)

### Software to ship in the Omnibus packages

- Add [Rocket.Chat](http://rocket.chat/) if they can make it [work with PostgreSQL](https://github.com/RocketChat/Rocket.Chat/issues/533)
- Scrum board
- [CodeClimate](http://blog.codeclimate.com/blog/2015/06/19/code-climate-platform/)
- [Lita](https://www.lita.io/) or other chat-ops bot

### We would love to partner with

- Browser IDE: Koding, Nitrous.io, Cloud9, CodeAnywhere, Codio and CodeEnvy (ship GitLab with them and button to open from GitLab)
- Configuration management: Chef, Puppet, Ansible, Salt, Docker (upload cookbooks, build containers from GitLab CI, etc.)
- Paas: CloudFoundry, OpenStack, OpenShift, Kubernetes, Mesos DCOS, Docker Swarm, Atlas/Terraform, [Nomad](https://nomadproject.io/), [Deis](http://deis.io/), [Convox](http://www.convox.com/), [Flynn](https://flynn.io/) [Tutum](https://www.tutum.co/) [GiantSwarm](https://giantswarm.io/) (deploy apps to them with GitLab CI)
- Scrum boards: [Huboard](https://huboard.com/), [Waffle.io](https://waffle.io/) and [Zenhub.io](https://www.zenhub.io/) support in addition to https://about.gitlab.com/applications/#scrum-boards

## Product Vision

In the future, every digital product will be managed in distributed version
control. GitLab will be the product make this possible and accessible.

GitLab will make it possible for teams of any size to work on
digital products of any nature, effortlessly, distributed and asynchronously.

To make this possible, GitLab has to be easy to use, fully featured, fast and reliable.
It has to make communication and working with many people easier.

GitLab is build by a large community of contributors. It has to be build in a way
that promotes contributions. By writing great documentation, amazing test suites
and making good use of (our own) continuous integration services, everyone can
quickly start developing and get instant feedback.
