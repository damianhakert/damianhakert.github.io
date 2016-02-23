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
- New notions
- Differences from Github
- Migrating to GitLab (CI)

## Beliefs and delusions
  ### We already have industry standard, no reason to care about alternative.
I will just show you one example. In GitLab when you mark a checkbox as completed, this event gets recorded in issue history. It makes so much sense. And Github doesn't have this yet.

### GitLab - is just a Github clone
It used to be years ago. Take a look at the company vision:
"We believe that an opinionated and integrated set of tools based on convention over configuration offers superior user experience". This means that GitLab is not only about git repositories hosting. The recent CI integration starts to make sense suddenly. And you should expect more stuff to be integrated in order to serve the main goal: to provide ideal development flow - [from idea to deploy](https://about.gitlab.com/direction/#scope), which will only require customization for unconventional usage.

### You need to set up your own server in order to get private repos
I seriously have thought like this. Truth is that you can just sign in to GitLab.com and get as many private repos with unlimited collaborators as you like to have. Yup, for free