---
title: "From Idea to Production in under 13 minutes"
author: Job van der Voort
author_twitter: Jobvo
image_title: ''
description: ""
twitter_image: ''
---

When we raised our B-round this September we revealed our Master Plan: the ambition to go help the world go faster from idea to production with GitLab.

Today, I want to show you what we've been working on since then. In under 13 minutes I will install GitLab and deploy a simple website with production-ready workflow. In detail, I will:

- deploy GitLab, Mattermost and auto-scaling GitLab CI using Openshift _from scratch_
- Set up a website that deploys to Kubernetes
- Create an issue from Mattermost
- Plan this issue using Issue Boards
- Edit the website that is deployed on staging using a built-in terminal in GitLab
- Commit changes to a new branch and create a merge request
- Review these changes before merging them into master
- See the proposed changes live in a Review App
- Merge the changes into master and see them deployed on staging
- Deploy staging to production from chat
- Review my cycle time with Cycle Analytics

GitLab comes with everything to bring your ideas to production from the box. This means you no longer have to spend time integrating many different apps. You no longer need to maintain these apps and integrations. There's no need for managing authentications and authorizations and you'll get feedback on where to improve your process.

Enough words, below the unedited, continuous video over which I recorded audio:

![]()

## Today

Only the terminal is not available in GitLab yet. _All other functionality shown in the video is available with GitLab 8.14, due Nov. 22nd._

To replicate the above, you'll have to have a live Openshift environment
running. We believe Kubernetes is the future of application lifecycle
management and will work hard on supporting other providers such as Mesosphere
on the short term.
