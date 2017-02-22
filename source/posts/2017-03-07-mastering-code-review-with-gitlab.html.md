---
title: Mastering Code Review With GitLab
author:
author_twitter:
categories: concepts
image_title: '/images/code.png'
description: Our Discussion Lead walks through a GitLab code review. 
cta_button_text: 'Join our <strong>Code Review</strong> webcast live!'
cta_button_link: ''
---

In GitLab, we code review every single change that we make; nothing gets committed directly to master. Our code review tools were built with the goal of enabling everyone to contribute from their browser, so you can go quickly from idea to production within GitLab itself. 

<!-- more -->

## Demo

In this video, Discussion Lead Sean McGivern explains GitLab’s code review process and tools.

<iframe src="https://drive.google.com/file/d/0BwXthOgZCRQQWXVIM3dwZThXd2M/preview" width="640" height="480"></iframe>

## Typical Flow

* A developer makes a change in their feature branch and tests it. When they’re happy they push, and make a merge request.
* The developer assigns the merge request to a reviewer, who looks at it and makes line and design level comments as appropriate. When the reviewer is finished, they assign it back to the author. 
* The author addresses the comments. This stage can go around for a while, but once both are happy, one assigns to a final reviewer who can merge.
* The final reviewer follows the same process again. The author again addresses any comments, either by changing the code or by responding with their own comments.
* Once the final reviewer is happy and the build is green, they will merge.

## The GitLab Advantage

* Resolve conflicts within the UI, rather than going into the command line. This saves you time and distraction by avoiding context-switching. 
* Thanks to CI, you can click on the pipeline and watch the build progress through each stage before deployment. This ensures you will never ship broken code, and lets you merge with confidence. 
* You can view a review app, which allows the reviewer to see the code as it would look if merged. This is the key advantage for less technical team members, because they don’t need to check out the code locally or run the repositories themselves; they can just view the outcome of the change. 


<p class="alert alert-orange" style="background-color: rgba(252,163,38,.3); border-color: rgba(252,163,38,.3); color: rgb(226,67,41) !important; text-align: center;">Catch our webcast &nbsp;&nbsp;<i class="fa fa-gitlab" style="color:rgb(107,79,187); font-size:.85em" aria-hidden="true"></i> &nbsp;&nbsp;<strong>Catch our webcast </strong> &nbsp;&nbsp;<i class="fa fa-gitlab" style="color:rgb(107,79,187); font-size:.85em" aria-hidden="true"></i> &nbsp;&nbsp;on March 14th. <a style="color: rgb(107,79,187);" href="https://page.gitlab.com/20170301_continuouseverything.html">Register here</a>!</p>

_Tweet us [@GitLab](https://twitter.com/gitlab), check out our [job openings](https://about.gitlab.com/jobs/), or add your questions and suggestions to our [issue tracker](https://gitlab.com/gitlab-org/gitlab-ce/issues)!_
