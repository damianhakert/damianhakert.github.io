---
title: "GitLab Infrastructure Update"
author: Pablo Carranza
author_twitter: psczg
categories: gitlab
image_title: '/images/blogimages/infrastructure.jpeg'
description: "Hear how we're working through infrastructure challenges as we scale."
twitter_image: '/images/tweets/infrastructure-update.jpeg'
---


As a Lead of Infrastructure, my job is make GitLab.com run fast. 

Lately, it'e been a challenge. Why? We are hitting scale, adding 1.5 terabyes of git repos a week! 
It's an interesting to problem to have. We have to store this information somewhere and make sure that 
while we're gaining data and users, GitLab.com keeps working fine. 

A large part of the issue we're running into as we scale is that there is little or no documentation 
on how to do it. While there are companies out there that have hit this threshold before, no one ever 
wrote down, "When this happens, do this." As [outlined in our values][values], we believe we have a 
responsibility to document this so other companies know what to do when they reach this point.

Last Thursday, I gave a GitLab.com infrastructure status report during our [daily team call][team-call). 
Watch the recording or download the slides to see how we're working through our challenges with scaling. 

<!-- more -->

## Recording & Slides

### Recording 

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/kN-HcObb9zo" frameborder="0" allowfullscreen></iframe>
</figure>

<br>

### Slides

<figure class="video_container">
  <iframe src="https://docs.google.com/presentation/d/11rCsJM41WAETPWqtWgfIxgfPRBQB4m037aZpgsGpzkk/embed?start=false&loop=false&delayms=5000" frameborder="0" width="1280" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

<br>

<!-- identifiers --> 
[team-call]: https://about.gitlab.com/handbook/#team-call
[values]: https://about.gitlab.com/handbook/#values

