---
title: "How to Keep your Fork Up-To-Date with its Origin"
author: Marcia Ramos
author_twitter: XMDRamos
categories: GitLab Workflow
image_title: 
description: 
---

Have you ever wondered how to keep a fork automatically up-to-date with its remote origin?

In this post we'll show you how to do that on GitLab!

<!-- more -->

## Fork

As you most likely know, a **fork** is a copy of a Git repository connected with the project you forked from (upstream). When you collaborate on code, it's pretty common forking a project, cloning to your local machine, making the changes you're up to, pushing to your fork, and submitting a merge request (MR) to merge your code into the original project.

You fork a repository whenever you want to contribute to a project which you don't have access to, as it's not your own or your team's. This is how open source projects hosted in GitLab get so much collaboration from the community.

When you are a member of a project (or a group), it's easier using the [GitLab Flow](/2014/09/29/gitlab-flow/), or _branching strategy_, once anyone in your team can pull your branch and preview your changes locally. However, with our brand-new solution for this, called [Review Apps](/features/review-apps), you can preview your apps in a per-branch basis, for each MR submitted to GitLab.

## The Problem

When you fork a project and clone it to your local computer, you need to update it with the master branch of the upstream project to be able to checkout a new branch up-to-date. If you do not do that, perhaps your changes can break the app once you merge it to the upstream, since the copy of the code you're working on is out-of-date.

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

As you can see, this sequence takes some time to complete, and turns out to be annoying if you need to do this multiple times a day. That's why we need a better solution.

## The Solution

GitLab can do that for you with no pain! Yay!

What you need to do is very simple: enable [GitLab Repository Mirroring](https://docs.gitlab.com/ee/workflow/repository_mirroring.html)!

- 1. Mirror your fork

Under your forked project's **Settings**, navigate to **Mirror Repository**:

![settings - mirror repository]()

- 2. Add the upstream's path to the field **Git repository URL**, then enable automatic mirroring:

![fork - enable automatic repository update]()

- 3. Setup the **mirror user**: it's the user whose the new commits to the upstream project will be attributed to.

Done! Once an hour, GitLab will pull the upstream for you, and keep your fork up-to-date!

By doing so, you only need to take care of your branching strategy before starting to work. All the rest GitLab does for you!

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

Repository mirroring is available for free at **GitLab.com** and for all **GitLab Enterprise Edition** users.
{: .alert .alert-success .text-center}

## A Solution for GitLab CE Users

We know, you're a **GitLab Community Edition** (CE) user and felt disappointed with my last sentence. Well, by subscribing to GitLab EE, you'll have this feature and more than 30 other awesome possibilities. You can [try GitLab EE for free](/free-trial/)!

But okay, let's give you a similar solution for CE, which I learned from [Kay Strobach](https://twitter.com/kaystrobach), who kindly posted to [this post's issue on GitLab.com](https://gitlab.com/gitlab-com/blog-posts/issues/299#note_18912122).

He uses a [job](https://docs.gitlab.com/ce/ci/yaml/README.html#jobs) in his [GitLab CI](/gitlab-ci/) configuration file (`.gitlab-ci.yml`) in his upstream project to push to his fork every commit in his upstream master's branch:

```yaml
stages:
  - distribute

publishToExternalgit:
  image: docker.kay-strobach.de/docker/php:latest
  stage: distribute
  environment: testing
  script:
    - git status
    - git remote add --mirror=fetch extern git@hostname:group/project.git || true
    - git push extern master
    - git remote rm extern
  only:
    - master@group/project
```


And he explains:

> _The local and the remote project need to be either in different groups or projects, to ensure that the job is not triggered on both sides of the sync_.

The `git remote add` command adds the external remote reference (upstream), and the `only` section ensures that this is not issued from forks if you push it to another GitLab instance.

For example, let's say my fork is <https://gitlab.com/marcia/www-gitlab-com> and the upstream project is <https://gitlab.com/gitlab-com/www-gitlab-com/>, this job would be placed under my forked project's `.gitlab-ci.yml`:

```yaml
stages:
  - distribute
publishToExternalgit:
  image: docker.kay-strobach.de/docker/php:latest
  stage: distribute
  environment: testing
  script:
    - git status
    - git remote add --mirror=fetch extern https://marcia:$SECRET_TOKEN@gitlab.com/marcia/upstream.git
    - git push extern master
    - git remote rm extern
  only:
    - master
```

## What's Your Solution?

We would love to know how you do that! Have a different solution? You can certainly help others. Let's share them all in [this post's issue](https://gitlab.com/gitlab-com/blog-posts/issues/299), so everyone from the community can decide which solution suits themselves best! Thank you!

## Conclusion

We hope to have provided you with easy solutions for keeping your fork up-to-date. Remember, you can even mirror repositories hosted in other Git platforms!

Cool! I'm looking forward to hearing from you: feedback, questions, and suggestions are very welcome! Leave your comment below, add your solution to the issue, or tweet at us [@GitLab](https://twitter.com/gitlab)! We ❤️ our community!
