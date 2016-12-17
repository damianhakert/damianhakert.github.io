---
layout: markdown_page
title: Checklist for becoming a GitLab CI Expert
---

Create an issue with this checklist on the [support team issue tracker](https://gitlab.com/gitlab-com/support/issues/)
with the **Title:** *"Gitlab CI Boot Camp - your_name"*

Tackle stage 1 first and the last stage last, but the others can be completed in
any order you prefer.

```
**Goal of this checklist:** Set a clear path for GitLab-CI training

### Stage 1: Commit and Become familiar with what GitLab CI is

- [ ] **Done with Stage 1**

1. [ ] Ping your manager on the issue to notify them you have started
1. [ ] Commit to this by notifying the current experts that they can start
routing non-technical Gitlab CI questions to you
1. [ ] GitLab University
   1. [ ] [Getting started with GitLab and GitLab CI] (https://about.gitlab.com/2015/12/14/getting-started-with-gitlab-and-gitlab-ci/)
   1. [ ] [Continuous Integration, Delivery, and Deployment with GitLab] (https://about.gitlab.com/2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/)
   1. [ ] [GitLab Container Registry] (https://about.gitlab.com/2016/05/23/gitlab-container-registry/)
   1. [ ] [GitLab & Docker - Recording] (https://www.youtube.com/watch?v=ugOrCcbdHko&index=12&list=PLFGfElNsQthbQu_IWlNOxul0TbS_2JH-e)
1. [ ] [CI Training Video by Jose Tores] (https://zoom.us/recording/play/ZMlOFQpOfxfOlVFLQ3BmOURWviJdsEkaUoxNPeO8hQ6eGM-mVarUtTyja8ea7gMZ), See [Notes here.] (https://docs.google.com/a/gitlab.com/document/d/1rY7LP85tu_fD4WOnDhEHfnUh171bKtPDm6Ol-hcxy6U/edit?usp=sharing)
1. [ ] [Learn how .gitlan-ci.yml works] (https://docs.gitlab.com/ee/ci/yaml/README.html)
1. [ ] [Pipelines and builds] (https://docs.gitlab.com/ce/ci/pipelines.html)
1. [ ] [Learn about Artifacts] (https://docs.gitlab.com/ce/user/project/builds/artifacts.html)
1. [ ] [Learn about Executors] (https://docs.gitlab.com/runner/executors/)
1. [ ] [Using Docker Images] (https://docs.gitlab.com/ee/ci/docker/using_docker_images.html#using-docker-images)
1. [ ] [Read through all the [GitLab Documentation](https://docs.gitlab.com/ee/ci/README.html)


### Stage 2: Technical Setup

- [ ] **Done with Stage 2**

Remember to contribute to any documentation that needs updating

1. [ ] Install a Runner following the [Setup Instructions](https://docs.gitlab.com/runner/install/)
using a platform of choice, especially the preferred ones.
1. [ ] Setup a repository and create the .gitlab-ci.yml file
1. [ ] [Register a Specific Runner] (https://docs.gitlab.com/ee/ci/runners/README.html#registering-a-specific-runner)
1. [ ] [Check status of Pipeline and build] (https://docs.gitlab.com/ce/ci/quick_start/README.html#seeing-the-status-of-your-pipeline-and-builds)
1. [ ] [Change .gitlab-ci.yml to create artifacts] (https://docs.gitlab.com/ce/user/project/builds/artifacts.html#defining-artifacts-in-gitlab-ci-yml)
1. [ ] Set Maximum Artifacts size in Admin and create artifacts above the limit, then check build log for errors
1. [ ] [Register a Docker Runner] (https://docs.gitlab.com/ee/ci/docker/using_docker_images.html#register-docker-runner)
1. [ ] Review Runner [Troubleshooting guide and try to reproduce issues where possible] (https://docs.gitlab.com/runner/faq/)

### Stage 3: Tickets

- [ ] **Done with Stage 3**

1. [ ] Answer 20 GitLab CI tickets and paste the links here. Even if a ticket seems
too advanced for you to answer. Find the answers from an expert and relay it to
the customer.

  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __

### Stage 4: Pair on Customer Calls

- [ ] **Done with Stage 4**

1. [ ] Sales calls with customers that have expressed interest in GitLab CI, and will
be asking questions about it.
   1. [ ] call with ___
   1. [ ] call with ___
1. [ ] Installation calls where we help a client setup GitLab CI
   1. [ ] call with ___
  1. [ ] call with ___
1. [ ] Diagnosis calls, where something is wrong with GitLab CI for a customer
  1. [ ] call with ___
  1. [ ] call with ___

### Stage 5: Quiz?

- [ ] **Done with Stage 5**

### Final Stage

- [ ] Ask Ernst and Kamil to look over this list, send a MR to delete this line after they both satisfied with the list
- [ ] Send a MR to declare yourself a **Geo Expert** on the team page
```
