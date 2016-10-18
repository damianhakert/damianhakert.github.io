---
title: "GitLab UX Update"
author: Allison Whilden
author_twitter: awhildy
categories: gitlab
image_title: "/images/blogimages/ux-update-2016-10/gitlabdesign-cover-image.jpg"
description: "Inside GitLab: Sneak peek of what the UX Team is working on"
twitter_image: '/images/tweets/gitlab-ux-update.png'
---

The UX Team at GitLab has been hard at work, and I'm delighted to share a sneak peek of some of their designs. While more details will be shared when the features ship, hopefully this quick update will help you get excited for what is in the works.

<!-- more -->

## What we've been working on

### Better Empty States

Empty states are easy to forget about. However, they can be great moments to celebrate an accomplishment (you finished all of your [Todos][todo-empty-state]!) or explain a concept (when to use a [group][group-empty-state]). 

![Better Empty States in GitLab 8.13](/images/blogimages/ux-update-2016-10/empty-states.png)

### Rethinking filtering and searching

Today we have a rich set of filters and search options, allowing you to find exactly what you are looking for. However, you have to jump between many dropdowns, and can't always build the complex query you are looking for. With this [effort][rethinking-filters], we are hoping to combine the controls into a streamlined, powerful search flow.

![Rethinking Filtering and Searching](/images/blogimages/ux-update-2016-10/rethinking-filtering.png)

### Tracking time

Large companies need to understand the cost of work and use of their resources. One aspect of this is [tracking time][time-tracking] spent on issues. Using slash commands, you can now easily estimate the time needed for an issue, and keep track of time spent as you work on it.

![Time tracking](/images/blogimages/ux-update-2016-10/time-tracking.png)

### Building upon Cycle Analytics

With the next iteration of [Cycle Analytics][cycle-analytics], we are helping break down each of the stages into events that data was gathered from. It is now much easier to see how the information is being put together, and exactly where your time is going.

![Cycle Analytics](/images/blogimages/ux-update-2016-10/cycle-analytics-v2.png)

### Refining the Review Apps experience

We are continuing to polish our Review Apps experience, allowing you to [stop apps][stop-review-apps], and [group environments][group-environments]. 

![Review App experience refinements](/images/blogimages/ux-update-2016-10/review-apps.png)

## What's next?

We are already jumping into more work, from [standardizing and cleaning up our many settings pages][settings], to adding such useful visuals as [burndown charts][burndown]. We are also digging into large open question such as refining the [personality][personality] of GitLab. 

## Acknowledgments

The design work on this page was created by Hazel Yang, Chris Peressini, Dimitrie Hoekstra, Pedro Moreira da Silva and Taurie Davis. Thanks for all of your great work!




<!-- identifiers --> 
[burndown]: https://gitlab.com/gitlab-org/gitlab-ee/issues/91
[cycle-analytics]: https://gitlab.com/gitlab-org/gitlab-ce/issues/22458
[group-empty-state]: https://gitlab.com/gitlab-org/gitlab-ce/issues/20829
[group-environments]: https://gitlab.com/gitlab-org/gitlab-ce/issues/22539
[personality]: https://gitlab.com/gitlab-org/gitlab-ce/issues/22192
[rethinking-filters]: https://gitlab.com/gitlab-org/gitlab-ce/issues/21747
[settings]: https://gitlab.com/gitlab-org/gitlab-ce/issues/22171
[stop-review-apps]: https://gitlab.com/gitlab-org/gitlab-ce/issues/22191
[time-tracking]: https://gitlab.com/gitlab-org/gitlab-ee/issues/985
[todo-empty-state]: https://gitlab.com/gitlab-org/gitlab-ce/issues/20833