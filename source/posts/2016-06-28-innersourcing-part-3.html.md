---
layout: post
title: "Innersourcing Part 3: Innersourcing" # akward? how about just \"Innersourcing (Part 3)\
date: 2016-06-28 08:00:00
comments: true
categories: technical overview
author: Sid Sijbrandij
author_twitter: sytses
image_title: '/images/default-blog-image.png'
---

Recently we’ve done several posts on trends in the world of version control, like this one and this one. [add links to trends posts 1 and 2] This week we’re looking at intersourcing—this post will explain what it is and why people are doing it.

<!-- more -->

## What’s Intersourcing?

Intersourcing is a phenomenon that has arisen mostly in the private sector, by which commercial companies are starting to use processes borrowed from open source in order to work and collaborate more effectively. Companies using GitLab for intersourcing include the likes of Boeing, Oracle, and CERN.

Open source projects like Linux have proven beyond all doubt that you can run a giant, complex project with relatively little overhead, coordination and few orchestrators (or managers). In other words, the open source movement has demonstrated for the business world that you can have a lean, inexpensive system and develop an amazing product at the same time. So of course, big enterprises want to adopt aspects of that lean way of doing things, insofar as it helps contribute to the bottom line.

## Why and How It Works

Basically, a large organization is equally as complex as a big open source project, or at least we can say that they’re comparable. In both scenarios, you’re dealing with a lot of moving parts: a variety of people with different roles, skills and personalities; a variety of tools (software), many of which have to be integrated; a variety of sub-projects within the larger umbrella project.

Open source work methods are often more effective than what we might think of as traditional business solutions for managing that level of complexity. Things like feature branches and time-based releases are necessary to manage the constant output of a large and complicated organization, and to make it for the most part self-managing.

## Solving the Communication Problem

The problem with big organizations is often that there is no single coherent team working toward a goal. Workers tend to be siloed into multiple teams that have their own structures and leadership, and are largely disconnected and unaccountable to each other. Communications norms and terminologies can vary quite a bit from team to team, and the bottom line is that communication is minimal and not very effective between silos. Normal collaboration breaks down.

In contrast, open source systems also enable participation at a large scale. Lines of communication are direct, built organically and as-needed, rather than artificially through administrative reorganizations. It helps that communication hierarchies are pretty flat, cutting out a lot of the middlemen and thus a lot of the noise.

In open source, working at-distance is standard, so nobody is siloed into a department in the same way (or everyone is siloed into their own department)—so to get anything done you have to get comfortable with communicating with people you’re not formally connected with. This is more productive for many reasons, not least of which is that opportunities for collaboration are much more available, and collaboration happens organically all the time.

## Solving the Discovery Problem

A specific example of this in practice is the discovery problem: that a solution can be created multiple times in different departments, essentially multiplying effort, simply because departments aren’t talking to each other. For example, one department has created a piece of software, another department needs that functionality, but there’s no process for checking whether it’s been created so they have no idea it exists.

To contrast, in open source processes consulting the sum of project outcomes in whatever form they might take (database, repository, etc.) is intrinsic to doing anything, so as long as you’re following the process you know what exists and what doesn’t, and your contribution is going to be reviewed and signed off by others who are ready to catch duplication.

## Solving the Access Problem

In most commercial environments, the powers that be control the information, and you have to be granted access to work on it. Not so with open source processes. Basically, if you want to work on a project or see it so you can learn from it, you already have access. This cuts out the administrative work and delays of having to manage request for access, control who can see what, password-protect things etc.

Another aspect of the access problem is making modifications. In a traditional commercial setting, if you don’t have access to a project, you can’t add a feature you want—you have to ask someone else to do it. If they don’t have time or don’t see the point, you basically have no recourse. The unfortunate fact is that their job is to make sure their app meets deadlines and works, and your request might interfere with that, and they will probably be reluctant to take a risk by giving you access. The outcome is usually that someone (maybe you) will build a codebase or application to solve the problem, and this might happen multiple times with different people, so you end up, once again, multiplying work and creating unnecessary apps that basically all do the same things.

With open source, there’s a much better way to handle this. First you fork from the codebase, then make your modification. Then you do a merge request, based on which the other developer can verify it, ask questions, test it and so on. Their risk is reduced, they didn’t have to do the extra work themselves, your feature got in—everybody wins. There’s the added benefit too that this approach reduces load on the report generator overall, since it only has to support a single codebase instead of eight.

Is your company using GitLab for intersourcing, or using something else? We’d love to hear how it’s going. Drop us a line at [@GitLab] or leave a comment.

<!-- Identifiers, in alphabetical order -->

[@GitLab]: https://twitter.com/gitlab
[part-1]: #ADD-LINK-TO-PART-1
[part-2]: #ADD-LINK-TO-PART-2
