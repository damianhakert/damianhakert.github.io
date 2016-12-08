---
title: "GitLab 8.14 webcast recording & highlights" 
author: Erica Lindberg
author_twitter: EricaLindberg_
categories: webcast
image_title: 
description: "Review Apps, Time Tracking (EE) Beta, and Mattermost Chat Commands released!"
twitter_image: '/images/tweets/8-14-webcast-tweet.png'
---

On 22 October we released [GitLab 8.14][8-14-release-post], our 60th consecutive monthly release. In this webcast, GitLab's Head of Product [Mark Pundsack][mark-twitter] and Product Manager [Régis Freyd][regis-twitter] show off what's new, including live demos of Time Tracking Beta (EE), Mattermost Chat
Commands, and [Review Apps][review-apps-post]. Watch the recording and get the highlights below. 

<iframe src="https://www.youtube.com/embed/CteZol_7pxo" frameborder="0" allowfullscreen="true"> </iframe>

## Highlights 

### [01:21] Introduction to Git and GitLab
### [04:07] GitLab's Idea to Production Vision
### [06:10] Time Tracking Beta (EE)

> Recording time has always been painful. You have to use many different systems, and even then, you don't get a complete picture because your work is in one place, and your time tracking data in another. This is why we've decided to release Time Tracking in Beta in 8.14.

### [12:18] Mattermost Chat Commands

> Team communication has changed, more and more ideas are first discussed in chat. GitLab wants to make it easier for you to get your ideas from chat into GitLab issues where they can be acted on. 

### [15:40] Review Apps

> Review Apps are the future of reviewing work! Rather than just looking at code, Review Apps serve up a fully functioning environment where your app is running, so you get a live preview of every branch and merge request. It’s perfect for testing complex changes where looking at the code isn’t enough. 

### [33:50] Other improvements & what's next

## Q&A 

[39:26] For time tracking, can I see "original", "current", and "remaining"?

[40:16] Other time tracking tools measure the time an issue remains in a particular lane so time spent is automated. Can GitLab do this?

[41:46] What is Review Apps?

[42:46] How can the Review Apps apply to more non-traditional, or, non-web apps?

[44:57] So, Review Apps are temporary testing environments between staging and production, why not just test in staging, and what's the advantage?

[49:00] Time tracking overview. For example: across projects, by user, etc.

[50:06] How is 1 day definied? Is it hardcoded to equal 8 hours or is it configurable by user?

[51:42] In [Continuous Integration][ci-post] (CI), if a packaged project is released as docker images and pushed to GitLab [Container Registry][cr-post] can I set up a manual action that will reverse the release by using containers from the previously released docker image?

## Upcoming Live Streams 

## 1. Monitoring Distributed Systems with Prometheus

[Watch live][infra-livestream] on December 14 at 9am PT/5pm GMT. [Sign up to receive a reminder and the recording][infra-lp].

Infrastructure Lead Pablo Carranza will give a behind-the-scenes look at GitLab's Prometheus set up, explain how we plan to ship Prometheus with GitLab CE, and give a tutorial on how you can set up your own dashboard. A live chat Q&A will follow the presentation. 
For more information on the topic, read Pablo's [blog post on how we knew it was time to leave the cloud][bare-metal].

## 2. Introducing the Codeship GitLab Integration

Hosted by [Codeship][codeship-lp] on December 15 at 9am PT/6pm GMT. [Register here][codeship-lp]

Following [Codeship's announcement][codeship-post], GitLab's Mark Pundsack will join Codeship Senior Software Engineer Kyle Rames for a discussion on why Codeship built a GitLab integration and showcase a demo alongside Codeship's Docker Platform.

## 3. Designing GitLab's User Experience with UX Lead Allison Whilden

[Watch live][ux-livestream] on December 15 at 10am PT/6pm GMT. [Sign up to receive a reminder and the recording][ux-lp].

User experience (UX) affects every interaction a user has with a product. Because of this, it can make or break the adoption of a website, or application. UX designers have to do dig into the who, the what, the why, and the how of everything that happens within a platform.
How does GitLab's UX address the needs of many different types of users in a product that expands every month? Join GitLab's UX Lead, Allison Whilden, and her team, as they discuss their process, the big challenges they face and how they solve them.

## 4. Prometheus and GitLab: Completing the application lifecycle with monitoring

[Watch live][sid-livestream] on December 15 at 1:30pm PT/9:30pm GMT.

Tune in for this live broadcast with GitLab CEO [Sid Sijbrandij][sid-twitter] and Head of Product Mark Pundsack as 
they share our future plans for GitLab and Prometheus. 

> _Prometheus is not just for monitoring GitLab. It is not an optional feature. It is an essential part of deploying applications with GitLab. All GitLab users should have access to it to monitor the impact of their deployments to business/application/system metrics and do feature flags/ab-testing/etc._ - Sid Sijbrandij


<!-- identifiers --> 
[bare-metal]: https://about.gitlab.com/2016/11/10/why-choose-bare-metal/
[ci-post]: https://about.gitlab.com/2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/
[codeship-lp]: http://bit.ly/2g2jFjG
[codeship-post]: https://blog.codeship.com/codeship-launches-gitlab-support/
[cr-post]: https://about.gitlab.com/2016/05/23/gitlab-container-registry/
[infra-lp]: https://page.gitlab.com/20161207_PrometheusWebcast_LandingPage.html
[infra-livestream]: https://www.youtube.com/watch?v=WzAzm0C15W8
[mark-twitter]: https://twitter.com/MarkPundsack
[regis-twitter]: https://twitter.com/djaiss
[review-apps-post]: https://about.gitlab.com/2016/11/22/introducing-review-apps/
[sid-livestream]: https://www.youtube.com/watch?v=rT92jecagQo
[sid-twitter]: https://twitter.com/sytses
[ux-lp]: https://page.gitlab.com/UXLiveStream_LandingPage.html
[ux-livestream]: https://www.youtube.com/watch?v=Lxy1jET5pww
[8-14-release-post]: https://about.gitlab.com/2016/11/22/gitlab-8-14-released/
