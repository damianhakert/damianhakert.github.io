---
title: GitLab Infrastructure Update
author: Pablo Carranza
author_twitter: psczg
categories: GitLab
image_title: '/images/blogimages/infrastructure.jpeg'
description: Hear how we're working through infrastructure challenges as we scale.
twitter_image: 
---

{::options parse_block_html="true" /}

As a Lead of Infrastructure, my job is make GitLab.com run fast. 

Lately, it'e been a challenge. Why? We are hitting scale, adding 1.5 terrabyes of git repos a week! 
It's an interesting to problem to have. We have to store this information somewhere and make sure that, 
while we're gaining data and users, GitLab.com keeps working fine. 

A large part of the issue we're running into as we scale is that there is little or no documentation 
on how to do it. While there are companies out there that have hit this threshold before, no one ever 
wrote down, "When this happens, do this." As [outline in our values][values], we believe we have a 
responsibility to document this so other companies know what to do when they reach this point.

Last Thursday, I gave a GitLab.com infrastructure status report during our [daily team call][team-call). 
Watch the recording or download the slides to see how we're working through our challenges with scaling. 

<!-- More -->

<!-- blank line -->
<figure class="video_container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/kN-HcObb9zo" frameborder="0" allowfullscreen></iframe>
</figure>
<!-- blank line -->

<figure class="video_container">
  <iframe src="https://docs.google.com/presentation/d/11rCsJM41WAETPWqtWgfIxgfPRBQB4m037aZpgsGpzkk/embed?start=false&loop=false&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

<!-- identifiers --> 
[team-call]: https://about.gitlab.com/handbook/#team-call
[values]: https://about.gitlab.com/handbook/#values

