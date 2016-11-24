---
title: "How to Keep your Fork Up-To-Date with its Origin"
author: Marcia Ramos
author_twitter: XMDRamos
categories: GitLab Workflow
image_title: 
description: 
---

You have forked a project and you want to keep it automatically up-to-date with its remote origin. Have you ever come across this issue? 

In this post, we're going to show you how you can do that with GitLab!

<!-- more -->

## Fork

As you most likely know, a fork is a copy of a Git repository somehow connected with the project you forked from (remote origin). When you collaborate on code, it's pretty common forking a project, cloning to your local machine, making the changes you're up to, pushing to your fork and submitting a merge request (MR) to merge your code into the original project.

You fork a project whenever you don't have access to it, because it's not your own or your team's. This is how open source projects hosted in GitLab get so much collaboration from the community.

When you are a member of a project (or a group), it's easier using the [GitLab Flow](/2014/09/29/gitlab-flow/), or _branching strategy_, once anyone in your team can pull and preview your branch locally. However, with our brand-new solution for this, called [Review Apps](/features/review-apps), you can preview your apps in a per-branch basis, for each MR submitted to GitLab.

## The Problem

When you fork a project and clone it to your local computer, you need to update it with the master branch of the upstream project to be able to checkout a new branch up-to-date. If you do not do that, perhaps your changes can break the app once you merge it to the upstream, once the copy of the code you're working on is out-of-date.

To prevent this, you need first update your local repo, then start your work. This takes time and if you forget to do it, can cause a lot of pain. What I'd normally do is the following:

- Open the project in the terminal and checkout `master`
    cd <directory>
    git checkout master
- Pull the upstream master branch
    git pull https://gitlab.com/<namespace>/<project>.git master`
- Git will prompt you to commit
- Push to my fork
    git push origin master
- Checkout a new branch
    git checkout -b my-new-branch
- Make changes
- Add, commit and push to my fork
    git add
    git commit -m "commit message"
    git push origin my-new-branch
- Create a new merge request in the GitLab UI to merge `my-fork/my-new-branch` into the `upstream/master`

**Note:** You can rebase it too, but particularly, I prefer pulling, as rebasing can get messy.
{: .note}

As you can see, this takes some time and turns out to be annoying if you need to do this multiple times a day. That's why we need a better solution.

## The Solution

GitLab can do that for you with no pain! Yay!

What you need to do is very simple: enable GitLab Repository Mirroring!

- 1. Mirror your fork

Under your forked project's **Settings**, navigate to **Mirror Repository**, 

![img]()

- 2. Add the upstream's path to the field **Git repository URL**, then enable automatic mirroring:

![img]()

- 3. Setup the mirror user: it's the user the new commits to the upstream project will be attributed to.

Done! Once an hour, GitLab will pull the upstream for you and keep your fork up-to-date!

By doing so, you only need to take care of your branching strategy before starting to work. All the rest GitLab does for you:

- Open the project in the terminal and checkout `master`
    cd <directory>
    git checkout master
- Update your local branch with the origin
    git pull
- Checkout a new branch
    git checkout -b my-new-branch
- Make changes
- Add, commit and push to my fork
    git add
    git commit -m "commit message"
    git push origin my-new-branch
- Create a new merge request in the GitLab UI to merge `my-fork/my-new-branch` into the `upstream/master`

Simple, isn't it? 

Repository mirroring is available for free at GitLab.com and for all GitLab Enterprise Edition users.
{: .alert .alert-success}

## A Solution for GitLab CE Users

We know, you're a GitLab Community Edition user and got disappointed with my last sentence. Well, subscribing to GitLab EE can give you this option and more than 30 other awesome possibilities. You can [try GitLab EE for free](/free-trial/)!

But okay, let's give you a solution for CE, that I learned from [Kay Strobach](https://gitlab.com/kaystrobach), who he kindly posted to [this issue in GitLab.com](https://gitlab.com/gitlab-com/blog-posts/issues/299#note_18912122).

He uses [GitLab CI] to distribute his commits over their forks:

```yaml
publishToExternalgit:
  image: docker.kay-strobach.de/docker/php:latest
  stage: distribute
  environment: testing
  script:
    - git status
    - git checkout master
    - git pull
    - git remote add --mirror=fetch extern git@hostname:group/project.git || true
    - git push extern master
    - git remote rm extern
  only:
    - master@group/project
  tags:
    - docker
```

And he explains:

> _The local and the remote project need to be either in different groups or projects, to ensure, that the job is not triggered on both sides of the sync




