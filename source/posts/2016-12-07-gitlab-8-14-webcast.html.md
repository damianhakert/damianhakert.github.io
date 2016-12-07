---
title: GitLab 8.14 Webcast Recording & Highlights 
author: Erica Lindberg
author_twitter: EricaLindberg_
categories: webcast
image_title: 
description: Review Apps, Time Tracking Beta, and Mattermost Chat Commands released!
twitter_image: '/images/tweets/8-14-webcast-tweet.png'
---

We ship a new version of GitLab on the 22nd of every month, and [this month we released GitLab 8.14][8-14-release-post] 
marking our 60th consecutive monthly release. In this webcast, GitLab's Head of Product [Mark Pundsack][mark-twitter]
and Product Manager [Régis Freyd][regis-twitter] show off what's new, including live demos of Time Tracking Beta, Mattermost Chat
Commands, and [Review Apps][review-apps-post]. Watch the recording and get the highlights below. 

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/CteZol_7pxo" frameborder="0" allowfullscreen="true"> </iframe>
</figure>


## Highlights 

### [01:21] Introduction to Git and GitLab
### [04:07] GitLab's Idea to Production Vision
### [06:10] Time Tracking Beta (EE) & live demo

> _Recording time has always been painful. You have to use different systems to do it, and even then, you don't get a complete picture because your work is in one place, and your time tracking data in another. This is why we've decided to release Time Tracking in Beta in 8.14 

### [12:18] Mattermost Chat Commands & demo

> _Team communication has changed, and so much is happening in chat rooms these days. More and more, ideas are first discussed in chat, and so GitLab wants to make it easier for you to get your ideas from Chat and put them into GitLab issues where they can be acted on. 

### [15:40] Review Apps & demo

> _Review Apps are the future of reviewing work! Rather than just looking at code, Review Apps serve up a fully functioning environment where your app is running, so you get a live preview of every branch and merge request. It’s perfect for testing complex changes where looking at the code isn’t enough. 

### [28:33] Behind the scenes: Iterating on Review Apps

> _So, this really complex, life changing feature was broken down into three releases of the minimal viable change.

### [33:50] Other improvements & what's next

## Q&A 

[39:26] For time tracking, can I see 'original', 'current', and remaining?

[40:16] Other time tracking tools measure the time an issue remains in a particular lane so time spent is automated. Can GitLab do this?

[41:46] What is Review Apps? 

[42:46] How can the Review Apps apply to more non-traditional,or non-web apps?

[44:57]: So Review Apps are temporary testing environments between staging and production, why not just test in staging, and what's the advantage?

[49:00] Time tracking overview. For example: across projects, by user, etc.

[50:06] How is 1 day definied? Is it hardcoded to equal 8 hours or is it configurable by user?

[51:42] In continuous integration (CI), if a packaged project is released as docker images and pushed to GitLab container registry, can I set up a manual action that will reverse the release by using containers from the previously released docker image?

## Upcoming Live Streams 

## 1. Monitoring Distributed Systems with Prometheus

[Watch live][infra-livestream] on December 14 at 9am PT/5pm GMT. [Sign up to receive a reminder and the recording][infra-lp].

Infrastructure Lead Pablo Carranza will give a behind-the-scenes look at GitLab's Prometheus set up, explain how we plan to ship Prometheus with GitLab CE, and give a tutorial on how you can set up your own dashboard. A live chat Q&A will follow the presentation. See more details and sign up for a reminder here.
For more information on the topic, read Pablo's blog post on how we knew it was time to leave the cloud.

## 2. Introducing the Codeship GitLab Integration

[Register here][codeship-lp] | December 15 at 9am PT/6pm GMT.

Hosted by Codeship, GitLab's Mark Pundsack joins Codeship Senior Software Engineer Kyle Rames for a discussion on why Codeship built a GitLab integration and showcase a demo alongside Codeship's Docker Platform.

## 3. Designing GitLab's User Experience with UX Lead Allison Whilden

[Watch live][ux-livestream] on December 15 at 10am PT/6pm GMT. [Sign up to receive a reminder and the recording][ux-lp].

User experience (UX) affects every interaction a user has with a product. Because of this, it can literally make or break the adoption of a website, or application. UX designers have a really big job to do as they dig into the who, the what, the why, and the how of essentially everything that happens within a platform.
How does GitLab's UX team work to solve the challenge of creating an application that has so many different types of users and releases a new version of its product every month? Join GitLab's UX Lead, Allison Whilden, and her team, as they discuss their process, the big challenges they face and how they look to solve them.

## 4. Prometheus and GitLab: Completing the application lifecycle with monitoring

[Watch live][sid-livestream] on December 15 at 1:30pm PT/9:30pm GMT.

Tune in for this live broadcast with GitLab CEO [Sid Sijbrandij][sid-twitter] and Head of Product Mark Pundsack as 
they share our future plans for GitLab and Prometheus. 

  >"Prometheus is not just for monitoring GitLab. It is not an optional feature. It is essential part of deploying applications with GitLab. All GitLab users should have access to it to monitor the impact of their deployments to business/application/system metrics and do feature flags/ab-testing/etc." - Sid Sijbrandij


<!-- identifiers --> 
[codeship-lp]: http://bit.ly/2g2jFjG
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