---
title: "GitLab 9.0 released with xyz and abc features"
categories: release
image_title: '/images/9_0/pic.jpg'
description: GitLab 9.0 released with xyz and abc features
---

Introductory paragraph goes here

<!--more-->

## Introducing Nested Groups

We're really excited about this new feature in 9.0 that unlocks new ways to structure and organize your GitLab groups.

You are now able to create sub-groups inside a group. Imagine you have internal teams, or want to structure your GitLab projects in a more folder-like way - you can now create up to 20 levels of groups with sub-groups and create or move projects into that new structure. Take a look at the example screenshot below that shows a list of your groups, and you can see we've added categorisation using sub-groups for Design, Backend and Frontend.

![Nested Groups](/images/9_0/gitlab-nested.png){: .shadow}

Over the coming releases, we will continue to improve nested groups and would love to hear what new features and functionality you want to see. For some up-coming UI improvements, feel free to [browse or create](https://gitlab.com/gitlab-org/gitlab-ce/issues?label_name%5B%5D=nested+groups) issues on GitLab with the `Nested Group` tag.

## New Branch for Repo-less Projects
When you click the `New branch` button in an issue, you probably want to start code development.
Currently for a project with an empty **Repository**, when this happens, GitLab stubbornly sends you back to the **Project** view.
With 9.0, when you click the `New branch` in this case, GitLab automatically creates the master branch, commits a blank `README.md` file to it, and creates and redirects you to a new branch based on the issue title.
If your [project is already configured with a deployment service][project-services-doc] (e.g. Kubernetes), GitLab takes one step further and prompts you to set up [auto deploy][auto-deploy-doc] by helping you create a `.gitlab-ci.yml` file.

[project-services-doc]: https://docs.gitlab.com/ce/user/project/integrations/project_services.html
[auto-deploy-doc]: https://docs.gitlab.com/ce/ci/autodeploy/index.html

![New Branch for Repo-less Projects in GitLab 9.0](/images/9_0/no_repo_new_branch.png){: .shadow}

## More control over HTTP Strict Transport Security settings
Now you fine tune your Strict Transport Security enforcement just by changing settings in your Omnibus GitLab config.
[Learn more][hsts-settings-doc] how you can use HTTP Strict Transport Security to provide your installation with even better protection against MITM attacks.

[hsts-settings-doc]: https://docs.gitlab.com/omnibus/settings/nginx.html#setting-http-strict-transport-security
