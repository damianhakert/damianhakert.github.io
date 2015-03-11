---
layout: post
title: "Adding a version checker to GitLab"
date: 2015-03-10
comments: true
author: Sytse Sijbrandij
author_twitter: sytses
image_title: '/images/unspash/FILENAME.jpg'
---

We're working on a version check function reduce the problem of
outdated servers. These outdated servers are a security problem, give a bad user experience and lead to issues being created with problems that
have already been solved.

<!-- more -->

On the /help and in /admin pages GitLab we will load an image from
version.gitlab.com. This image will show green for an up to date
version, yellow for an out of date version and red for a missing
security update.

We also show this image in /help so users are aware of the status and
can ask their admin to update.

The image requests parameters will contain the GitLab version
and the server hostname. We'll store each request with a timestamp, the GitLab version and the server hostname.

We want to send server hostname to follow servers over time, for example so we have an idea what versions people are on and how soon security fixes are installed.

We decided against storing the user ip address for privacy reasons. In the future we might do a geo-lookup and store the general region of the user to see where GitLab is popular.

You will be able to to turn the version checker functionality off completely in the application settings.

We hope the above is a good balance of privacy, functionality and sustainability. But we would love to hear what you think in the comments.
