---
layout: post
title: "How we managed 49 monthly releases"
date: 2015-12-17
comments: true
author: Dmitriy 
author_twitter: dzaporozhets
image_title: '/images/unsplash/goal.jpg'
---

Since Oct 2011 we’ve released GitLab each month, without fail, without exceptions. On December 22nd that will be 49 monthly releases, not including patch releases or security releases. In this article I’ll give you an overview of how we release our product and how it helps our team improve process and documentation.

Your release strategy affects how you plan, develop, test, and publish your software. At GitLab we follow a monthly release cycle which works really well for our project. If you’re running an open source distributed software project, you might consider if a predictable time-based release can help your project. You can even get started by using our release cycle document as your template. 

<!-- more -->
## Why time-based release cycles?

Time-based releases make absolute sense if you develop distributed software. Take for example Apple Mac OS X. They have a fixed release date, everyone knows when it will be coming out. With distributed software, users need to be prepare for a release. Another advantage is that it builds anticipation for the software release. 

If you have SaaS type services, they don’t need a fixed release date. People are already using the software so it’s a matter of delivering features as soon as they are ready. 

An open source project isn’t only you, working on your own. Even from very early on GitLab was always collaborative. The truth is, I’m a lazy person. I like to have lots of fun, and I always have stuff to do whether it’s playing video games or hanging out with friends. It’s actually a hack to deal with myself. You need some discipline or schedule, otherwise you will always find some reason to delay. A certain date makes it easier. 

This has been a popular method in some open source projects. At the time I started GitLab I was inspired by Ubuntu’s [time based releases](https://wiki.ubuntu.com/TimeBasedReleases). I was always waiting for their releases, and this was inspiring. Ubuntu time-based cycle was heavily influenced by the release process [used by the GNOME project](http://live.gnome.org/ReleasePlanning/TimeBased). Both of those projects follow a six month cycle generally. We follow a one month cycle. 




## Why monthly cycles?

In some ways the choice or date and duration of cycle is arbitrary. People ask me “Why is it on the 22nd?” perhaps expecting there is some meaning in the number. Actually, it was just the date of the previous release when we decided to make it monthly. 

By choosing monthly it greatly simplifies communication. A bi-monthly release could cause confusion (was it last month or the one before??) and longer cycles could mean stagnation in development. Another advantage is that a short cycle keeps you focused on smaller iterations, and getting feedback quickly. It’s easier to test and see what is not working, and easier to roll back changes. This is the most awesome part of time-based release cycles. 

Sometimes what happens on larger projects and teams is that people can be working in parallel and might be duplicating effort without knowing it. Someday, a manager might come to you and say “Yeah… we decided not to ship that feature you were working on. Someone else on another team was working on something similar, and your feature no longer makes sense.” That’s unfortunately a common experience. 

A short release cycle doesn’t allow you to work for a long time between when you create a feature and get feedback. It prevents people from actually losing their focus. 

## How do we organize who works on what and when?

Instead of one person assigning tasks to team members, the team members pick up tasks from the pool. This is an Agile practice which gives greater autonomy to the members of the team. You work on what you want to from the pool within the goals of the project. 

The leaders define the direction. They work on the pool and define the milestones. We do work on large features, but these are split up into tasks. Our release priorities are published in our [Direction document in the Handbook](https://about.gitlab.com/direction/), and everyone on the team can see the current milestones we’re tracking against. 

As usual, we do have some things which are high priority and which must be worked on first, such as security issues and priority features. After that, it’s a matter of what you want to work on yourself. This process of selecting issues and prioritization is outlined in our GitLab Handbook, under [GitLab Workflow](/handbook/#gitlab-workflow). Such as “Assign an issue to yourself as soon as you start to work on it, but not before that time.” If an issue is assigned to someone, someone is working on it. If it’s not assigned to someone, no one is working on it. If it’s assigned to a milestone, there’s commitment to work on it. This also makes it easier for everyone on the team to collaborate. Having a manager to bring this distributed effort to release is very important. 
## The Release Manager is a role not a person
In most software development projects a release process is followed by a team lead who delegates tasks. If there is always one person doing it, it’s not always documented. Also, you rely on that one person being available. We can’t wait if someone is sick or ill, or on vacation to get our release out. Having one person managing release is a potential single point of failure.

For a long time, I managed all the releases. As soon as we had more people on our team at GitLab, I was able to hand this task over to others. Now we rotate the role of release management to a new appointed member each month. This means we don’t have one person who is always in charge of releases. 

The benefits of making the Release Manager a role and not a person don’t stop at improving reliability, it also means a better process over all. When you pass the role to other people, someone brings you ideas or improvements, for example to the release process or documentation. The release itself becomes an object of collaboration. 

A release process is complicated. Having a new person take on that role is a good test. If someone can take follow the release process then the documentation is good. We all come together to bring some small improvements and features. It’s a living document and always evolving. 

There’s another benefit. The release process is a really good experience for fresh people. It’s great even if you’ve been in the company for some time. It gives you a wider overview of the entire pipeline. Being a Release Manager requires that you collaborate with developers, devops, marketing, sales, all aspects of the company. It’s a great way for you to get to know the company. 
## What does the Release Manager do?

Each month the Release Manager is appointed to follow the release process which initiates 7 days prior to the release date. That person stays the Release Manager until the end of their cycle and the next Release Manager initiates the next release. The monthly release process is outlined in [our documentation](http://doc.gitlab.com/ce/release/monthly.html)

It’s up to the Release Manager to delegate and coordinate activity among the team members, and ensure everyone is up to date. They create an issue in the GitLab CE project, and use the monthly.md file as a template. This generates a checklist which the Release Manager keeps up to date regarding merge tasks, QA and testing. Finally, the Release Manager also appoints the next Release Manager who will initiate the next cycle. 

See an example here:
https://gitlab.com/gitlab-org/gitlab-ce/blob/v8.2.3/doc/release/monthly.md
You can copy that file and work from it yourself as a template. 
## What are the steps towards release?

The [monthly release process](http://doc.gitlab.com/ce/release/monthly.html) starts from seven days before release. From six days before the release date, RC1 versions are created for both CE and EE. After that, the team is testing and doing QA on the release. Four days before the release, we update GitLab.com with the next release and test further. In the final days before the release we are working on build packages and preparing our release post. 

And most importantly we make sure all contributors are mentioned in the release blog post, and that the MVP for that month gets mentioned in our [GitLab Hall of Fame](https://about.gitlab.com/mvp/index.html).

Finally we release GitLab on 12am CET (Central European Time) right at the start of the 22nd. This ensures we have enough time during the European work day to take care of any issues that might arise. 

## What happens after a release?
As part of the release process, we have a regression issue where people can compare what is broken to compare to previous issues. We create fixes for issues as they arise, and prepare another release. Patch releases have no time-based deadline. They are smaller, and take less effort. After each release we collect bug reports about regressions and prepare the patch release. It might come out in 24 hours if it relates to security. We don’t want to do too many patch releases, especially because soon the next release will be coming out. It’s up to the release manager to decide how to handle this. 

In the past we’ve held team calls to celebrate. But this can be interrupted. Even right after we deploy the release and post the blog post there’s work to do, small things to fix, regressions or patch releases. I always celebrate it at home. I recommend you get a good bottle of beer, toast your friends and family and enjoy it. You probably want to spend some time with your friends and family after the intensity of a release. 


## Does this have an advantage for open source projects?

Most open source projects don’t follow this strict release process. This means it’s up to the leaders to decide when it’s time to release. 

I’ve contributed code to other open source projects, and when I see upstream issues that are important but not released I start wondering. If there are people specifically asking “Can you release a new version?” then I’m very skeptical about these projects. I don’t trust any project that doesn't know when about the next release is coming out. 

People can trust open source projects which have a stable release schedule. It’s a sign of a healthy project which is actively developed. I do feel that for open source projects, developing a timed release process is the best option for distributed software.  And I now know, it’s something that people love about GitLab. 

In January we’re going to have our 50th monthly release of our project. We’re looking forward to celebrating!

