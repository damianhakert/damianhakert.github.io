---
title: "Trends in Version Control Land: Microservices"
categories: concepts
author: Sid Sijbrandij
author_twitter: sytses
description: "Learn some benefits of microservices, and check out who's using it!"
image_title: '/images/default-blog-image.png'
twitter_image: '/images/tweets/trends-in-version-control-land-microservices.png'
---

One trend of the last few years is microservice architecture. In this post we’re
looking at what that is, and what some of the benefits and drawbacks are.

**Note:** This post is the third of the four-posts series on **Trends on Version Control Land**, after [Innersourcing][post-1] and [Release Early, Release Often][post-2].
{: .note}

<!-- more -->

## What are microservices?

[Microservices architecture][micro-arch] is a way designing software applications as smaller, independent,
cloud-based services rather than one monolithic data center. [Netflix][netflix-micro] is a good example: their
users application, movies application and ratings application are deployed independently.
Netflix has made a lot of the code behind their [microservice architecture open source][netflix-oss].

## Benefits of microservices

To use Netflix as an example, the benefits of moving to cloud-based microservices has been undeniable.

**System-wide stability:** since doing so they have achieved much greater system-wide stability,
because API service interruptions are localized, and new services can be built and tested far less intrusively.

**Faster releases and fixes:** basically, with microservices you can move more quickly because each app can
deploy independently of the others. Lots of people can contribute simultaneously, which is helpful.
And if there’s an error, you can bring just one app down rather than all of them.

**Scale:** at the same time, with capacity made virtually limitless by existing in the cloud, Netflix has
become vastly scalable. Microservices architecture can scale much more easily and affordably, because
you don’t need to create giant data centers on a regular basis just to accommodate growth.

## Drawbacks of microservices

Like most things, it’s not perfect. You have to add new repositories for every microservice application,
and as such you end up with a lot of work in terms of setting up new tools and integrating them with each
application. For every new app you raise your work exponentially, because the number of connections rises
exponentially. In short, the situation
increases the need for one tool from issue to deploy, otherwise you’re going to spend your life doing integrations.

## Who else is using microservice architecture?

[Uber][uber-eng], [Soundcloud][soundcloud-micro], [Hailo][hailo-micro], [Amazon][amazon-micro], and [Ebay][ebay-micro]
are a few of the companies that [are using microservices][companies-micro] to deliver their applications. Uber gives
a really nice narrative of their [move from monolith to microservices][uber-blog] on their blog.

Clearly microservices architecture has amazing potential, not least because it makes the user experience more efficient.
We’re very much on board with this trend. A major goal for us at GitLab is to make sure you
can do everything you need to do within GitLab, with as few external integrations to deal
with as possible. This way you don’t have to set up tools for each project and spend the time
integrating them. It's all already pre-configured to use from within one single UI.

Watch out for our last post of this series, where we'll go through **Open Source**!

<!-- identifiers -->

[post-1]: https://about.gitlab.com/2016/07/07/trends-version-control-innersourcing/
[post-2]: https://about.gitlab.com/2016/07/21/release-early-release-often/

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
