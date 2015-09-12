---
layout: markdown_page
title: "GitLab Direction"
---

## Product Vision

In the future, every digital product will be managed in distributed version
control. GitLab will be the product make this possible and accessible.

GitLab will make it possible for teams of any size to work on
digital products of any nature, effortlessly, distributed and asynchronously.

To make this possible, GitLab has to be easy to use, fast and reliable.
It has to make communication and working with many people easier.

GitLab is build by a large community of contributors. It has to be build in a way
that promotes contributions. By writing great documentation, amazing test suites
and making good use of (our own) continuous integration services, everyone can
quickly start developing and get instant feedback.

## Development Direction

GitLab releases a new version every single month on the 22nd.
You can view what is planned for each release on our milestone view for each
product. Note that we often move things around, do things that are not listed,
do not always get to do everything that is planned and that this not include
any community contributions.

- [Milestones for GitLab CE](https://gitlab.com/gitlab-org/gitlab-ce/milestones)
- [Milestones for GitLab EE](https://gitlab.com/gitlab-org/gitlab-ee/milestones)
- [Milestones for GitLab CI](https://gitlab.com/gitlab-org/gitlab-ee/milestones)
- [Milestones for Omnibus GitLab](https://gitlab.com/gitlab-org/omnibus-gitlab/milestones)

### Accepting Merge Requests

In [our feedback forum](http://feedback.gitlab.com/forums/176466-general),
many requests are made for features and changes to GitLab. Here you can also
view which kind of contributions will be accepted (if they meet our requirements):

- [Accepting Merge Requests on Feedback Forum](http://feedback.gitlab.com/forums/176466-general/status/796455)

## Wishlist

Below you will find several things we'd really like to see in GitLab.
It is not a roadmap, nor is the list prioritized.

Some links point to internal issues. We're working on making everything open.
Note that we're slowly deprecating this list, turning it into a more high-level
document.

We welcome contributions that implement any of these things.


### UI

- [File upload button in webeditor](https://gitlab.com/gitlab-com/www-gitlab-com/issues/410)
- [Change notification setting](https://dev.gitlab.org/gitlab/gitlabhq/issues/2395)
- [Edit on protected branch should create a new branch](https://dev.gitlab.org/gitlab/gitlabhq/issues/2242)
- [Filter by more than one label](https://gitlab.com/gitlab-org/gitlab-ce/issues/989)

### CE

- IN PROGRESS: Settings from config/gitlab.yml to application settings in ui
- Move issues between projects
- Reduce exceptions (so that exception notifications become usable)
- [Allow cross server merge requests](http://feedback.gitlab.com/forums/176466-general/suggestions/5097708-implement-cross-server-federated-merge-requests) (paste url when making a new MR)
- [Code search in groups](https://dev.gitlab.org/gitlab/gitlabhq/issues/841)
- [Time tracking](https://dev.gitlab.org/gitlab/gitlabhq/issues/2192)
- IMPORTANT Make it easier to add labels to an issue
- Move new merge request from activity feed to flash message
- IN PROGRESS [Reply by email](https://gitlab.com/gitlab-org/gitlab-ce/issues/1360)
- IN PROGRESS [Oneclick email open](https://gitlab.com/gitlab-org/gitlab-ce/issues/1517)
- [Improve GitHub import](https://dev.gitlab.org/gitlab/gitlabhq/issues/2248)
- [Automatically push changed files](https://dev.gitlab.org/gitlab/gitlabhq/issues/2265)
- [Mentioned activity level](https://dev.gitlab.org/gitlab/gitlabhq/issues/2288)
- [Search code in group](https://dev.gitlab.org/gitlab/gitlabhq/issues/841)
- [Revert button for merges](https://dev.gitlab.org/gitlab/gitlabhq/issues/2299)
- [Remove satellites](https://dev.gitlab.org/gitlab/gitlabhq/issues/2300)
- [Translations](http://feedback.gitlab.com/forums/176466-general/suggestions/3337748-internationalization-add-translations) with the help of the community and Perforce
- [Fix the confusing search bar](https://dev.gitlab.org/groups/gitlab/group_members)
- [Subgroups](http://feedback.gitlab.com/forums/176466-general/suggestions/3867903-allow-project-groups-to-be-organized-in-a-hierarch) (Dmitriy investigated this)
- Show commits behind/ahead on branch overview page
- Mentioned feed on the dashboard, activity feed on separate tab
- Issue/MR description field works like google docs, real time collaboration & autosave, maybe with [ShareJS](http://sharejs.org/)
- Git large file support (LFS) [Feedback](http://feedback.gitlab.com/forums/176466-general/suggestions/7502608-git-large-file-storage-lfs-support) [CE](https://dev.gitlab.org/gitlab/gitlabhq/issues/2295) [EE](https://dev.gitlab.org/gitlab/gitlab-ee/issues/318)
- Draw and drop issues to prioritize them
- Handle incoming emails with support questions in issues, needs spam filter
- [Award emoji](https://dev.gitlab.org/gitlab/gitlabhq/issues/2388) (so you can use GitLab as a feature request tracker)
- Commit Status API [request](http://feedback.gitlab.com/forums/176466-general/suggestions/3923065-status-api-for-continuous-integration) [private issue](https://dev.gitlab.org/gitlab/gitlabhq/issues/2467) and [merge CI into CE](https://gitlab.com/gitlab-org/gitlab-ce/issues/2164)
- [Handle errors before they give a 500](https://dev.gitlab.org/gitlab/gitlabhq/issues?milestone_id=&scope=all&sort=created_desc&state=opened&utf8=%E2%9C%93&assignee_id=&author_id=&milestone_title=&label_name=gitlab.com+errors)
- [Improve navigating to your projects](https://gitlab.com/gitlab-org/gitlab-ce/issues/2225)
- In-picture-comments like in [zeplin.io](zeplin.io) or Phabricator
- [Get rid of the large SSH key file](https://gitlab.com/gitlab-org/gitlab-git-http-server/issues/2#note_1983654)
- [Run the development kit in a Docker image](https://gitlab.com/gitlab-org/gitlab-development-kit/issues/47)
- [Deprecate the authorized keys file](https://gitlab.com/gitlab-org/gitlab-git-http-server/issues/2#note_2064375)

### EE
- IN PROGRESS [Mirroring](https://dev.gitlab.org/gitlab/gitlab-ee/issues/279)
- Push to another repo
- [Management dashboard](https://dev.gitlab.org/gitlab/gitlab-ee/issues/287)
- Distributed file system store for large files (Git Annex or Git LFS) and uploads. Can do in in [Ceph](http://ceph.com/), [XtreemFS](http://www.xtreemfs.org/), [LizardFS](http://lizardfs.com/) or something else. Or not [blobs](http://blog.justinsb.com/blog/2013/12/14/cloudata-day-8/) because [performance might suffer](https://news.ycombinator.com/item?id=9839581), this was as also indicated by a libgit2 developer in an issue, please add the link for that if you have it.
- [Geographic slave servers with GitLab RE](https://dev.gitlab.org/gitlab/gitlabhq/issues/2359) for plus subscriptions only

### CI

- [Zero config CI](https://dev.gitlab.org/gitlab/gitlabhq/issues/2528)
- [Upload build artifacts](https://dev.gitlab.org/gitlab/gitlab-ci/issues/56)
- Option to test the [merge of the feature branch with master](http://homu.io/) instead of the feature branch itself (you will have to retest all MR's every time master is updated)
- Dependent builds [Feedback](http://feedback.gitlab.com/forums/176466-general/suggestions/7233770-chain-builds) and [internal issue](https://dev.gitlab.org/gitlab/gitlab-ci/issues/328)
- Staging environment per branch, easy deploy (similar to [Teatro](https://teatro.io/), [Tutum](https://support.tutum.co/support/solutions/articles/5000620449-deploy-to-tutum-button) & [Heroku Review Apps](https://blog.heroku.com/archives/2015/5/19/heroku_review_apps_beta))
- Automatically give code quality metrics in the merge request
- [Automatic Docker image cleanup](https://gitlab.com/ayufan/gitlab-runner-docker-cleanup/issues/1)
- Show code coverage in diffs with colored horizontal bar
- [Static hosting (Pages/Sites)](https://dev.gitlab.org/gitlab/gitlabhq/issues/2290)
- A/B testing of branches
- [Shared runners](https://dev.gitlab.org/gitlab/gitlab-ci/issues/322#note_56433) automanaged [by Kubernetes](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/merge_requests/30)

### Other software in the Omnibus packages

- Chat: [Mattermost](http://www.mattermost.org/) and not [Rocket.Chat](http://rocket.chat/), [Kandan](https://github.com/kandanapp/kandan) or [Let's Chat](https://sdelements.github.io/lets-chat/)
- Consider shipping a Scrum board with Omnibus

## We would love to partner with

- Browser IDE: Koding, Nitrous.io, Cloud9, CodeAnywhere, Codio and CodeEnvy (ship GitLab with them and button to open from GitLab)

- Configuration management: Chef, Puppet, Ansible, Salt, Docker (upload cookbooks, build containers from GitLab CI, etc.)

- Paas: CloudFoundry, OpenStack, OpenShift, Kubernetes, Mesos DCOS, Docker Swarm, Atlas/Terraform, [Deis](http://deis.io/), [Convox](http://www.convox.com/), [Flynn](https://flynn.io/) (deploy apps to them with GitLab CI)

- Scrum boards: [Huboard](https://huboard.com/), [Waffle.io](https://waffle.io/) and [Zenhub.io](https://www.zenhub.io/) support in addition to https://about.gitlab.com/applications/#scrum-boards