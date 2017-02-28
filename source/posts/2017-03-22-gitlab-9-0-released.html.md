---
title: "GitLab 9.0 released with xyz and abc features"
categories: release
image_title: '/images/9_0/pic.jpg'
description: GitLab 9.0 released with xyz and abc features
---

Introductory paragraph goes here

<!--more-->

## New Branch for Repo-less Projects
When you click the `New branch` button in an issue, you probably want to start code development.
Currently for a project with an empty **Repository**, when this happens, GitLab stubbornly sends you back to the **Project** view.
With 9.0, when you click the `New branch` in this case, GitLab automatically creates the master branch, commits a blank `README.md` file to it, and creates and redirects you to a new branch based on the issue title.
If your [project is already configured with a deployment service][project-services-doc] (e.g. Kubernetes), GitLab takes one step further and prompts you to set up [auto deploy][auto-deploy-doc] by helping you create a `.gitlab-ci.yml` file.

[project-services-doc]: https://docs.gitlab.com/ce/user/project/integrations/project_services.html
[auto-deploy-doc]: https://docs.gitlab.com/ce/ci/autodeploy/index.html

![New Branch for Repo-less Projects in GitLab 9.0](/images/9_0/no_repo_new_branch.png){: .shadow}