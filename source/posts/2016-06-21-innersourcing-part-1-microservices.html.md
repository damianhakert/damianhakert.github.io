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

**Note:** This post is the first of the four-posts series on **Innersourcing**.
{: .note}

<!-- more -->

## What’s a microservice?
 
[Microservice architecture][micro-arch] is a way designing software applications as smaller, independent,
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
rises exponentially.  Add in the IoT, and you have **a lot of** codebases to deal with. In short, the situation
increases the need for one tool from issue to deploy, otherwise you’re going to spend your life doing integrations.
 
At GitLab we try to make sure you can do everything you need **within GitLab**, so you don’t have to set up tools
for each project and spend the time integrating them.
 
## Who else is using microservice architecture?
 
[Uber][uber-eng], [Soundcloud][soundcloud-micro], [Hailo][hailo-micro], [Amazon][amazon-micro], and [Ebay][ebay-micro]
are a few of the companies that [are using microservices][companies-micro] to deliver their applications. Uber gives
a really [nice narrative][uber-blog] of their move from monolith to microservices on their blog.

Watch out for our next posts of this series, where we'll go through _Rapid Deployment_!

<!-- Identifiers, in alphabetical order -->

[amazon-micro]: http://thenewstack.io/led-amazon-microservices-architecture/
[companies-micro]: http://microservices.io/articles/whoisusingmicroservices.html
[ebay-micro]: http://highscalability.com/blog/2015/12/1/deep-lessons-from-google-and-ebay-on-building-ecosystems-of.html
[hailo-micro]: https://sudo.hailoapp.com/services/2015/03/09/journey-into-a-microservice-world-part-2/
[micro-arch]: http://martinfowler.com/articles/microservices.html#MicroservicesAndSoa
[netflix-micro]: http://techblog.netflix.com/2015/02/a-microscope-on-microservices.html
[netflix-oss]: https://netflix.github.io/
[soundcloud-micro]: https://developers.soundcloud.com/blog/building-products-at-soundcloud-part-1-dealing-with-the-monolith
[uber-blog]: https://eng.uber.com/building-tincup/
[uber-eng]: https://eng.uber.com/soa/
