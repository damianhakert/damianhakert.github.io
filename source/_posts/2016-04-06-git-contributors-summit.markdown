---
layout: post
title: "Notes from the Git Merge Core Contributors Summit"
date: 2016-04-06 16:00
comments: true
categories:
author: GitLab
author_twitter: GitLab
image_title: '/images/unsplash/notes.jpg'
---

At GitLab, we’re really proud to support the open source projects which underpin our service. Obviously, Git is a main part of absolutely everything we do. We recently sponsored [Git Merge](http://git-merge.com/#sponsors), an event organized by GitHub and sponsored by Atlassian, Bloomberg, Compose, SAP, and of course, GitLab. Even competitive organizations must work together to improve upon and negotiate the direction of key open source software. On the day before GitMerge, we joined the Git Merge Core Contributors Summit to discuss the direction of the project and new developments. Here are some notes from this event.

<!--more-->

## Scaling Git  

Git is growing in popularity, and projects are growing in size and complexity as larger organizations adopt Git. This has lead to efforts in improving Git performance. Twitter reported an example repo with: 1m commits, 1500 contributors, and 0.25m files. The main problem is, the checkout is slow. Booking.com reported an example repo which took 500ms to read all the references.  

One way to improve this is Repacking which greatly helps with performance. https://www.kernel.org/pub/software/scm/git/docs/git-repack.html

## Growing Git Adoption  

As Git expands into organizations and different types of projects, Git is being used by people who are less familiar with the command line. Having web based interfaces, like GitLab which allow users to perform Git commands through the web UI is helping organizations adopt Git.  

## Protecting the Git trademark  

Git is a member of the Software Freedom Conservancy http://sfconservancy.org/ which helps to protect and defend free software. Taking care of software trademarks for open source projects is important to protect the software and its users. The official Git website has guidelines about trademark use (https://git-scm.com/trademark) which can help to prevent any misuse of the trademark which could misguide users. Git project maintainers will be making the decisions about which projects can make use of the Git trademark.  

As Git proliferates and grows, there would be attempts to misuse or mislead users seeking Git related services and could be coerced into paying for free software or using software which isn’t actually Git. Protecting the Git trademark is work which requires more financial support to be sustainable. Software Freedom Conservancy is seeking more support. http://sfconservancy.org/donate/  


## Diversity  

Diversity was discussed at the event. Our team noted that all attendees were men, including those from our team. It was an unfortunate realization and one which has inspired us to take action. We will continue to focus efforts on our own diversity sponsorship program. We also aim to support events in areas with low-opportunity, to increase global diversity in technology.

Great projects which need more support:  

- Gnome’s Outreachy supports interns https://www.gnome.org/outreachy/  
- GSOC - Google Summer of Code internships  


## Submit Git - patches by email

Submit Git is a Scala app which is used to bridge between GitHub and the Git mailing list. Using Submit Git allows the Git mailing list to continue to use a patch submission process through a web UI. Users make a pull request on GitHub, and this lets you preview the patch and submit it to the mailing list. Of 40 contributors in the last year, 15 have been using it during this beta period. Soon, there will be updates to documentation to explain how to use Submit Git to submit patches to Git, and pull requests will no longer be accepted. There will be an automatic notification when people attempt to open pull requests on the Git project.  
https://github.com/rtyley/submitgit  

## Submodules

There will be improvements to submodules in Git. Google engineers are making this better, with improvements to both the UI and initialization. They are also working to improve speed with parallel downloads. When this works it will replace the Android repository tool called Repo. https://source.android.com/source/developing.html  

We'd like to thank [Peff](https://github.com/peff) for including us in the Git Merge Core Contributors Summit. We look forward to the next one!  

Please leave your opinions in the comments. We'd love to hear your thoughts. 
