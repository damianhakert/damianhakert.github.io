---
layout: post
title: "Innersourcing Part 1: Microservices"
date: 2016-06-21 08:00:00
comments: true
categories: technical overview
author: Sid Sijbrandij
author_twitter: sytses
image_title: '/images/default-blog-image.png'
---

One trend of the last few years is microservice architecture. In this post we’re looking
at what that is, and what some of the benefits and drawbacks are.

<!-- more -->

## What’s a microservice?
 
Microservice architecture is a way designing software applications as smaller, independent,
cloud-based services rather than one monolithic data center. Netflix is a good example: their
users application, movies application and ratings application are deployed independently.
[Netflix][netflix-micro] has made a lot of the code behind their [microservice architecture open source][netflix-oss].

## Benefits of microservices
 
Basically, with microservices you can move more quickly because each app can deploy independently
of the others. Lots of people can contribute simultaneously, which is helpful. And if there’s an error,
you can bring just one app down rather than all of them.
 
Microservice architecture is also able to scale much more easily and affordably, because you don’t
need to create giant data centers on a regular basis just to accommodate growth—this was likely a
big driver for Netflix when they started developing their cloud-based architecture.
 
## Drawbacks of microservices
 
Like most things, it’s not perfect. You have to add new repositories for every microservice application,
and as such you end up with a lot of work in terms of setting up new tools and integrating them with
each application. For every new app you raise your work exponentially, because the number of connections
rises exponentially.  Add in the IoT, and you have a lot of codebases to deal with. In short, the situation
increases the need for one tool from issue to deploy, otherwise you’re going to spend your life doing integrations.
 
At GitLab we try to make sure you can do everything you need within GitLab, so you don’t have to set up tools
for each project and spend the time integrating them.
 
## Who else is using microservice architecture?
 
Uber, Soundcloud, Hailo, Amazon, and Comcast Cable are a few of the companies that are using microservices
to deliver their applications. Uber gives a really nice narrative of their move from monolith to microservices on their blog.

Watch out for our next Trends post, coming out [next week?].

<!-- Identifiers, in alphabetical order -->

[netflix-micro]: http://techblog.netflix.com/2015/02/a-microscope-on-microservices.html
[netflix-oss]: https://netflix.github.io/
