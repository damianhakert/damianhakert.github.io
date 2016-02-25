---
layout: post
title: "Key Concepts for a GitLab newbie"
date: 2016-02-25
comments: true
author: Ivan Nemytchenko
author_twitter: inemation
image_title: '/images/unsplash/FILENAME.jpg'
---

I recently joined GitLab as a Developer Advocate. Part of my role will be to travel to community events, I hope we’ll meet in person someday. I’m also an experienced Ruby developer and a long time user of Github for both my personal projects and open source projects. I am actively using GitLab and taking notes about things that I learn.

I've heard of GitLab that it is somewhat cool if you want to have your Github-like hosting on your personal server. Things have changed a lot. I am happy to share what I have learned about GitLab.com recently.

The goal of this post is to give you an up-to-date understanding of what GitLab have become, and how you can benefit from it.

<!--more-->

First, lets disrupt existing delusions.

## Misbeliefs and delusions

### "We already have the industry standard, no reason to care about an alternative"
I will just show you one example. In GitLab when you mark a checkbox as completed, this event gets recorded in issue history. This is so helpful and makes so much sense! And this is just one small feature. If you're still not convinced, take a look at the [latest major release](https://about.gitlab.com/2016/02/22/gitlab-8-5-released/).

### "You need to set up your own server to get private repos"
I seriously was thinking like this. Truth is that you can just sign in to GitLab.com and get as many private repos with unlimited collaborators as you like to have. Yup, for free.

### "GitLab - is just a git repositories hosting"
It used to be years ago. Take a look at the company vision:
> We believe that an opinionated and integrated set of tools based on convention over configuration offers superior user experience

This means that GitLab is not only about git repositories hosting. The recent CI integration suddenly starts to make sense.

And you should expect more stuff to be integrated to serve the main goal: to provide ideal development flow - [from an idea to deploy](https://about.gitlab.com/direction/#scope), which will only need customization for unconventional usage.

## New concepts

When you start exploring GitLab, you quickly discover differences to what you're used to on Github.

### Merge requests
The term "pull request" was always a bit confusing to me. But everything falls into place, after you read [this post](https://about.gitlab.com/2016/01/27/comparing-terms-gitlab-github-bitbucket/), and follow [discussion on HackerNews](https://news.ycombinator.com/item?id=11095652).

### Continuos integration (CI)
If you were too greedy(to pay for separate CI service) or too lazy(to configure Github-CI integration), then you're lucky. GitLab has its own built-in CI server:
[![GitLab CI passed build](/images/blogimages/gitlab-ci.jpg)](https://gitlab.com/gitlab-examples/pages-middleman/builds/749744)

### Runners & Shared runners
If you don't care about GitLab's CI, just skip this.<br/>
Otherwise, here's what documentation says:
>A runner is an isolated (virtual) machine, that picks up builds ...

If you're GitLab.com user, you're able to use shared runners, provided by GitLab. If you want more speed and security, you can configure own server to be your personal runner. I mentioned security because of this scary notification:
> GitLab Runners do not offer secure isolation between projects that they do builds for. You are TRUSTING all GitLab users who can push code to project A, B or C to run shell scripts on the machine hosting runner X

### GitLab Pages
GitLab Pages is a way to host static websites. They are implemented on top of GitLab's CI.
It is not that straightforward as on Github(yet?), but it gives you much more power. You can

But the good news is that you don't need to build static version of the website locally. You can use it not only with Jekyll, but also with any other static site generators. Custom domain names are supported.

### Omnibus
It was one of the first new words for me. You don't have to care about it unless you decided to install your own instance CE or EE.

Omnibus is a way to install(and upgrade) GitLab without a hassle. Since GitLab consists of many parts, installing them manually is a time-consuming process. With omnibus, all you need to do is to install package for your OS.

