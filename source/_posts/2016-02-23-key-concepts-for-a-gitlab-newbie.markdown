---
layout: post
title: "Key Concepts for a GitLab newbie"
date: 2016-03-16
comments: true
author: Ivan Nemytchenko
author_twitter: inemation
image_title: '/images/unsplash/key-concepts.jpg'
---

I recently joined GitLab as a Developer Advocate. Part of my role will be to travel to community events, I hope we’ll meet in person someday. I’m also an experienced Ruby developer and of course Github was the default place for all of my projects. I am actively using GitLab and taking notes about things I learn.

<!--more-->

Before joining GitLab, I've heard it is a cool tool for self-hosted git management. Today things have changed a lot, and I am happy to share what I have learned about GitLab recently.

First, lets disrupt some delusions.

## Misbeliefs and delusions

### "You need to set up your own server to get private repos"
I thought this way too; that you'd need to run GitLab on your own server to have private projects. Truth is, you can create an account on [GitLab.com](https://gitlab.com/users/sign_in) and get as many private repos with unlimited collaborators as you like to have. Yup, for free.

### "GitLab - is just a git repository hosting tool"
It used to be this way years ago. Take a look at the company vision:
> We believe that an opinionated and integrated set of tools based on convention over configuration offers superior user experience

This means that GitLab is not only about git repositories hosting. The  recent CI integration suddenly starts to make sense.

Looking at the scope in [GitLab's Direction document](https://about.gitlab.com/direction/#scope) gives an idea of where GitLab is going. You can expect more to be integrated to serve the main goal: to provide ideal development flow - from an idea to deployment, which will only need customization for unconventional usage.

<!--
### "We already have the industry standard, no reason to care about an alternative"
I will just show you one example. In GitLab when you mark a checkbox as completed, this event gets recorded in issue history. This is so helpful and makes so much sense! And this is just one small feature. If you're still not convinced, take a look at the [latest major release](https://about.gitlab.com/2016/02/22/gitlab-8-5-released/).
-->

## New concepts

When you start exploring GitLab, you quickly discover differences to what you're used to on Github.

### Merge requests
The term "pull request" was always a bit confusing to me. But everything falls into place, after you read [this post](https://about.gitlab.com/2016/01/27/comparing-terms-gitlab-github-bitbucket/), and follow [discussion on HackerNews](https://news.ycombinator.com/item?id=11095652).

### Continuous integration (CI)
If you don't want pay for separate CI service or don't want to configure Github-CI integration, then you're in luck. GitLab has its own built-in CI server:
[![GitLab CI passed build](/images/blogimages/gitlab-ci.jpg)](https://gitlab.com/gitlab-examples/pages-middleman/builds/749744)

Read (GitLab CI quick start guide[http://doc.gitlab.com/ce/ci/quick_start/README.html] to learn more.

### Runners & Shared runners
If you don't care about GitLab's CI, just skip this.<br/>
A runner is basically a virtual machine, that handles builds.

If you're GitLab.com user, you have an access to the pool of so called shared runners, provided by GitLab. If you want more speed and security, you can configure own server to be your personal runner. I mentioned security because of this scary notification:
> GitLab Runners do not offer secure isolation between projects that they do builds for. You are TRUSTING all GitLab users who can push code to project A, B or C to run shell scripts on the machine hosting runner X

### GitLab Pages
GitLab Pages is a way to host static websites. Obviously you can put your html and css into `public` folder of your repo, set up custom CNAME if you want, and you're done!

But the best part is that you can delegate statics generation to GitLab completely, no matter what [static site generator](http://staticgen.com) you're using. It is possible because of built-in CI. Check out `pages-*` repositories in [GitLab-examples group](https://gitlab.com/groups/gitlab-examples) and see it in action.


### Omnibus
You don't have to care about it unless you decided to install your own instance CE or EE.

Omnibus is a way to install and upgrade GitLab without hassle. Since GitLab consists of many parts, installing them manually is a time-consuming process. With omnibus, all you need to do is to [install package for your OS](https://about.gitlab.com/downloads/#ubuntu1404).

