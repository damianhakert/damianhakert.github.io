---
layout: post
title: "Innersourcing Part 2: Rapid Deployment"
date: 2016-06-23 08:00:00
comments: true
categories: technical overview
author: Sid Sijbrandij
author_twitter: sytses
image_title: '/images/default-blog-image.png'
---

Another trend that keeps popping onto the radar is a continuing reduction in time between deploys. In this post we’re looking at what that means and why it’s happened.

<!-- more -->

## What’s deployment time?
 
For anyone not au fait with the ways of software development, deployment is when a new version of a piece of software is released to the public, so “deployment time” typically refers to the amount of time it takes to put the new version out.
 
In the past decade, deployment time has shrunk massively, thanks in part to the efforts of the open source community. Looking back to the old model, you can think about software like Windows, which has traditionally been released every few years (Windows 95, Windows 2000, Windows XP, etc.). To get the new version with all the new features and bug fixes, you had to wait years.
 
With quite a lot of more specialized software, we were eventually seeing deploys every 6 months or so. This was really helpful in terms of bug fixes and addressing user needs more rapidly. But it was still slow. Particularly in open source communities this felt slow, because we have a lot of people working on solving various problems at any given time—so waiting to deliver those solutions just twice a year can feel like a waste of perfectly good code.
 
Now, some companies (like GitLab for example) are releasing as often as monthly, meaning users are pretty much always working with a new and improved version.
 
## The Logic Behind Deploying Early and Often
 
One of the biggest issues with carrying out a large deployment once or twice a year is that it created a host of coordination problems among various actors and features. If everything is ready to go but one small feature is delayed, then everything is delayed. If everything is being merged at once right before a major deploy, it can create a bottleneck. And if there’s a bug in a new version, because the new version comprises a lot of new stuff, it might take a while to figure out which exact thing has caused the bug.
 
In the old days, there was a long time between release points, which put pressure on developers to get everything perfect—which in itself can cause further delays. Now, we have an early-and-often mentality. Everything is thought of in terms of iterations, or drafts; basically, open source software is a permanent work in progress, always getting better.
 
If there’s a bug, it’s not nearly as a big of a deal as in the days of the annual or biannual deployment, because it’s much easier to isolate what caused it and to fix it, and you can release a fix almost immediately. If a particular feature isn’t ready, that won’t hold up the release; that feature can just be released next month.
 
Want to read up on more trends? Check out our posts on [microservices post] and [trends post #3].
