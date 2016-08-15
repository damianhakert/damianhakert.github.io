---
title: "Announcing The GitLab Issue Board"
author: Sid Sijbrandij
author_twitter: sytses
categories: GitLab
image_title: '/images/blogimages/gitlab-issue-board.png'
description: "Strengthen your Release Management Process: announcing the GitLab Issue Board"
---

Software is taking over the world. Development best practices are quickly
rising as a competitive advantage amongst teams. Who will be first to market?
Which product will have the fewest bugs? Which development team will be able
to release, gather feedback, and rapidly iterate towards a better product?
The team that solves these questions through planning and good process will
deliver quality software.

<!-- more -->

## Release management isn’t perfect

Understanding your team’s challenges is the first step to solving them.
Speaking from our own experiences shipping GitLab, some of the release
challenges we face are:

Prioritization: With nearly 4,500 issues in our [CE project][ce] and
our [direction] issues, we are constantly faced with tough decisions of
where to focus our resources.

Planning: We release on the 22nd of every month. To hit our release goal,
we have to be incredibly diligent about what we forecast for each release.

Communication: With a growing team consisting of 24 developers, 6 frontend
engineers, and 5 UX designers, it has become increasingly more important to
ensure the full team has visibility into the overall release process.

## What the experts had to say 

Obviously, we’re not “the experts.” But we’ve summarized their feedback.
The International Journal of Computer Applications [2013 study][2013] has
great insights into effective release management processes.

1. Create a single source of truth: Eliminate the natural differences that
occur with large teams working in different time zones, running different
processes, and using different tools.

1. Manage application dependencies: Avoid release failures by ensuring your
testing environments account for version dependencies.

1. Document everything: Make sure it’s in a common repository and that it’s
easily discoverable.

1. Make approvals visible: You and your team should have agreed up quality
bars that determine what makes it into each environment.

1. Deploy consistently across environments: Standardize your build, test,
and deploy process by automating as much as you can. The goal is to
remove error and unpredictability.

1. Make the release plan easy to consume: We’re lumping all the
P’s (planning, people, process, and policy) together. They all boil up to
the same key ideas. Policies and plans should be centralized. Ownership must
be clear. Finally, a change in plans needs to be visible to the full team.

## GitLab: From idea to production

That list is easier said than done. But it’s where we are all headed.
Modern development teams are optimizing for speed without sacrificing quality.
They are moving away from older process-driven development styles like Waterfall,
Scrum, and Agile and towards continuous delivery and deployment. To
support modern development practices, GitLab has everything you need to get
from idea to production faster. 

There are 10 steps from idea to production in the modern development lifecycle.

<!-- image: screenshot of the 10 steps -->

![FROM IDEA TO PRODUCTION IN 10 STEPS](#){: .shadow}

1. Chat conversation &#8594; Mattermost ships with GitLab
1. Issue creation &#8594; GitLab Issues
1. Planning board &#8594; GitLab Issue Board
1. IDE &#8594; Koding + GitLab Integration
1. Version control &#8594; GitLab Repositories
1. Continuous Integration &#8594; GitLab CI and GitLab Container Registry
1. Code review &#8594; GitLab Merge Requests
1. Continuous Delivery &#8594; GitLab Deploy
1. Chatops &#8594; We're planning to ship [Cog]
1. Feedback &#8594; We plan to ship with Cycle Analytics

The 10 steps of the modern development lifecycle will be included directly in
GitLab in the coming months. Today we are announcing the [GitLab Issue Board],
a software project management tool used to plan, organize, and visualize a team’s
feature or product release process.

## Closer look at the GitLab Issue Board

<!-- image: screenshot of the Issue Board -->

![GITLAB ISSUE BOARD](#){: .shadow}

The Issue Board builds on GitLab’s existing issue tracking functionality and now
offers teams the ability project manage their release and deployment process. This
is the first iteration of our Issue Board. Here are the six things you should know about it:

1. It’s a new way to manage your issues in GitLab.Your issues appear as cards on the Board.
1. Lists (or columns) represent each step in your development process. Think `Backlog`
1. Your lists are based on your Labels. Which means it works out of the box with your existing issues.
So if you’ve already labeled things with “Backend” and “Frontend”, the corresponding issues will
appear in the lists as you create them.
1. Each Issue Board starts with two lists: Backlog and Done. You can create up to 10 lists.
1. When you move issues between lists, the label on the issue is automatically updated. This
new label is displayed in the Issue Tracker as well as on the issue itself so even if someone on
your team isn’t checking the Issue Board they’ll still have a record of what step an issue is on.
1. Bonus. Using GitLab’s existing Label functionality also means that you’ll have all the same
filtering and sorting abilities you see across the rest of the product. 

To see the GitLab Issue Board in action, take a look at GitLab Developer Advocate
(Amanda or Ivan)’s screencast below.

<!-- VIDEO TO BE UPDATED -->

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/pY4IbEXxxGY" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

<!-- VIDEO TO BE UPDATED -->

## Join our webcast on August 25

On August 25th, we’ll be hosting a webinar to discuss and demo the Issue Board and all of the other great features in GitLab 8.11. Register here.

<!-- identifiers -->

[ce]: https://gitlab.com/gitlab-org/gitlab-ce/issues
[direction]: https://about.gitlab.com/direction/
[2013]: http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.403.1791&rep=rep1&type=pdf
[cog]: https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1412
[GitLab Issue Board]: # <!-- LINK TO BE UPDATED -->
