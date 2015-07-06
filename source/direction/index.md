---
layout: markdown_page
title: "GitLab Direction"
---

This is a list of things the GitLab company team would really like to see in GitLab.
Unlike a roadmap, the list is not prioritized and there are not expected dates.
What goes into our monthly releases is more flexible that the list below.
This because we need to quickly respond to user and customer feedback.
Our internal milestones have a plan for the next few releases.
These have some flexibility and we want to be free to moving items between them.
But we take care to ship features promised to customers on time.

For a longer list of the things that we can accept in GitLab, please see the 'accepting merge requests lists' in our [Feature Request Forum](http://feedback.gitlab.com/forums/176466-general/status/796455)

Merge requests that implement the functionality below are very welcome.

Most links point to a private server of GitLab company and can't be accessed publicly.

## CE

* IN PROGRESS: Settings from config/gitlab.yml to application settings in ui

* Move issues between projects

* Reduce exceptions (so that exception notifications become usable)

* [Allow cross server merge requests](http://feedback.gitlab.com/forums/176466-general/suggestions/5097708-implement-cross-server-federated-merge-requests) (paste url when making a new MR) 

* [Code search in groups](https://dev.gitlab.org/gitlab/gitlabhq/issues/841)

* [Time tracking](https://dev.gitlab.org/gitlab/gitlabhq/issues/2192)

* IMPORTANT Make it easier to add labels to an issue

* Move new merge request from activity feed to flash message

* IN PROGRESS [Reply by email](https://gitlab.com/gitlab-org/gitlab-ce/issues/1360)

* IN PROGRESS [Oneclick email open](https://gitlab.com/gitlab-org/gitlab-ce/issues/1517)

* [Complete GitHub import](https://dev.gitlab.org/gitlab/gitlabhq/issues/2248)

* [Automatically push changed files](https://dev.gitlab.org/gitlab/gitlabhq/issues/2265)

* [Mentioned activity level](https://dev.gitlab.org/gitlab/gitlabhq/issues/2288)

* [Search code in group](https://dev.gitlab.org/gitlab/gitlabhq/issues/841)

* [Revert button for merges](https://dev.gitlab.org/gitlab/gitlabhq/issues/2299)

* [Remove satellites](https://dev.gitlab.org/gitlab/gitlabhq/issues/2300)

* [Translations](http://feedback.gitlab.com/forums/176466-general/suggestions/3337748-internationalization-add-translations) with the help of the community and Perforce

* [Fix the confusing search bar](https://dev.gitlab.org/groups/gitlab/group_members)

* [Subgroups](http://feedback.gitlab.com/forums/176466-general/suggestions/3867903-allow-project-groups-to-be-organized-in-a-hierarch) (Dmitriy investigated this)

* Show commits behind/ahead on branch overview page 

* Mentioned feed on the dashboard, activity feed on separate tab

* Issue/MR description field works like google docs, real time collaboration & autosave, maybe with [ShareJS](http://sharejs.org/)

* [Git large file support](http://feedback.gitlab.com/forums/176466-general/suggestions/7502608-git-large-file-storage-lfs-support)

* Draw and drop issues to prioritize them

* Handle incoming emails with support questions in issues, needs spam filter

* [Award emoji](https://dev.gitlab.org/gitlab/gitlabhq/issues/2388) (so you can use GitLab as a feature request tracker)

* Commit Status API [request](http://feedback.gitlab.com/forums/176466-general/suggestions/3923065-status-api-for-continuous-integration) [private issue](https://dev.gitlab.org/gitlab/gitlabhq/issues/2467)

* [Handle errors before they give a 500](https://dev.gitlab.org/gitlab/gitlabhq/issues?milestone_id=&scope=all&sort=created_desc&state=opened&utf8=%E2%9C%93&assignee_id=&author_id=&milestone_title=&label_name=gitlab.com+errors)

## EE
* In PROGRESS [Multiple approvers](https://dev.gitlab.org/gitlab/gitlabhq/issues/2258)

* IN PROGRESS [Mirroring](https://dev.gitlab.org/gitlab/gitlab-ee/issues/279)

* Push to another repo

* [Management dashboard](https://dev.gitlab.org/gitlab/gitlab-ee/issues/287)

* Distributed file system store [blobs](http://blog.justinsb.com/blog/2013/12/14/cloudata-day-8/), large files (Git Annex or Git LFS) and uploads in [Ceph](http://ceph.com/), [XtreemFS](http://www.xtreemfs.org/) or something else.

## CI

* [Use .gitlab-ci.yml to define jobs](https://dev.gitlab.org/gitlab/gitlab-ci/issues/221)

* [Deploys jobs using travis dpl](https://gitlab.com/gitlab-org/gitlab-ci/issues/140)

* [Upload build artifacts](https://dev.gitlab.org/gitlab/gitlab-ci/issues/56)

* Option to test the merge of the feature branch with master instead of the feature branch itself (you will have to retest all MR's every time master is updated)

* Build pipeline / Chain builds / delivery pipeline [Feedback](http://feedback.gitlab.com/forums/176466-general/suggestions/7233770-chain-builds) and [internal issue](https://dev.gitlab.org/gitlab/gitlab-ci/issues/282)

* Staging environment per branch, easy deploy (similar to [Teatro](https://teatro.io/), [Tutum](https://support.tutum.co/support/solutions/articles/5000620449-deploy-to-tutum-button) & [Heroku Review Apps](https://blog.heroku.com/archives/2015/5/19/heroku_review_apps_beta))

* [Pages and A/B testing of branches](https://dev.gitlab.org/gitlab/gitlabhq/issues/2290)

* Automatically give code quality metrics in the merge request

* Show code coverage in diffs with colored horizontal bar

## We would love to partner with

* IDE: Koding, Nitrous.io, Cloud9, CodeAnywhere, Codio and CodeEnvy (ship GitLab with them and button to open from GitLab)

* Configuration management: Chef, Puppet, Ansible, Salt, Docker (upload cookbooks, build containers, etc.)

* Paas: CloudFoundry, OpenStack, OpenShift, Kubernetes, Mesos DCOS, Docker Swarm, Atlas, Flynn (deploy apps)

* Scrum boards: Huboard support in addition to https://about.gitlab.com/applications/#scrum-boards

* Chat: Integrate with [Kandan](https://github.com/kandanapp/kandan), [Mattermost](http://www.mattermost.org/), [Rocket.Chat](http://rocket.chat/), [Let's Chat](https://sdelements.github.io/lets-chat/) when they support being an OAuth client