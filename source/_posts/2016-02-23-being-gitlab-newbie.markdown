---
layout: post
title: "Being GitLab newbie"
date: 2016-02-23
comments: true
author: Ivan Nemytchenko
author_twitter: sytses
image_title: '/images/unsplash/FILENAME.jpg'
---

This post recounts my first week at GitLab. I’m an experienced Ruby developer, and a long time user of Github for both my personal projects and open source projects. I’ve joined the team as a Developer Advocate. Part of my role will be to travel to community events, I hope we’ll meet in person someday. I took notes during my first week to chart my fresh-eyed “GitLab newbie experience.”

I pretend to be an average Github user. It is default place for all my projects. I pay my $7/month, despite the fact that there's Bitbucket with free private repos.

I've heard of GitLab that it is Github clone, and it is somewhat cool, if you want to have your Github-like hosting on your personal server.

It looks like things have changed a lot during past 2 years. I am going to share what I have learned about GitLab recently.

The goal of this post is to give you an up-to-date understanding about what GitLab have become, and how you can benefit from it.

Here's the plan:
- Beliefs and delusions
- CE, EE, GitLab.com, GitHost... What should I choose?
- New notions & differences
    - Omnibus
    - Runners
    - Pages
    - CI
- Migrating to GitLab

## Beliefs and delusions

### We already have industry standard, no reason to care about alternative.
I will just show you one example. In GitLab when you mark a checkbox as completed, this event gets recorded in issue history. It makes so much sense. And Github doesn't have this yet.

### GitLab - is just a Github clone
It used to be years ago. Take a look at the company vision:
"We believe that an opinionated and integrated set of tools based on convention over configuration offers superior user experience". This means that GitLab is not only about git repositories hosting. The recent CI integration starts to make sense suddenly. And you should expect more stuff to be integrated in order to serve the main goal: to provide ideal development flow - [from an idea to deploy](https://about.gitlab.com/direction/#scope), which will only require customization for unconventional usage.

### You need to set up your own server in order to get private repos
I seriously have thought like this. Truth is that you can just sign in to GitLab.com and get as many private repos with unlimited collaborators as you like to have. Yup, for free

## CE, EE, GitLab.com, GitHost... What should I choose?

Well, it was confusing for me too. Some people think that they had to register on GitLab.com in order to be able histed version of GitLab. That is not correct. Let me give you an algorithm:

- If you just want Github-like experience, but with free private repos, just use GitLab.com
- If you prefer to control everything by yourself, then just install GitLab CE on you personal server.
- If you need extra features & support for your large organization, then consider purchasing GitLab EE license
- If you want to have your own instance of GitLab CE or EE, but don't want to deal with installation and upgrades, then you can purchase GitLab hosting on GitHost.io

It was not so hard, right?

## New notions & differences

When you start exploring GitLab, you quickly discover new differences to what you're used to on Github.

### Continuos integration (CI)
If you were too greedy(to pay for separate CI service) or too lazy(to configure Github-CI integration), then you're lucky. GitLab has its own built in CI server.
(screenshot)
(link to the documentation?)

### Runners & Shared runners
If you don't care about GitLab's built in CI, just skip this.
Otherwise, let's take a look at the documentation: "A runner is an isolated (virtual) machine, that picks pup builds ..."

If you're GitLab.com user, you're able to use shared runners, provided by GitLab. If you want more speed and security, you can configure own server to be your personal runner. I mentioned security because of this scary notification:
> "GitLab Runners do not offer secure isolation between projects that they do builds for. You are TRUSTING all GitLab users who can push code to project A, B or C to run shell scripts on the machine hosting runner X."

### Pages
GitLab Pages is a way to host static websites. They are implemented on top of GitLab's CI.
It is not that straightforward as on Github(yet?), so you need to follow this simple tutorial to configure it properly.

### Omnibus
The first new word for me was "omnibus". You don't have to care about it, unless you decided to install your own instance CE or EE.

Omnibus is a way to install(and upgrade) GitLab without a hassle. Since GitLab consists of many parts, installing them manually is time consuming process. With omnibus all you need to do is to install package for your OS.
