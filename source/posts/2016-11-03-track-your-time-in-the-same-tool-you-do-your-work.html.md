---
title: "Track your time in the same tool you do your work"
author: Regis Freyd
author_twitter: djaiss
categories:
image_title:
description: "Announcing Time Tracking in GitLab"
---

Our goal is to build everything software development teams need to collaborate efficiently into one tightly integrated product. With each release we get closer to helping you reduce the number of external tools your team uses and complete the full software development lifecycle within GitLab.

Developers who like to track their time today, do it because they want to know how efficient they are, and if the original estimate actually matches the reality. They also like it because it's a good way to know how you spend your time in general, as a developer.

Moreover, there are a lot of enterprise teams that use GitLab Enterprise Edition and we know enterprise teams often work with contract employees for specific projects. In GitLab Enterprise Edition, you can easily add [external users](https://docs.gitlab.com/ee/user/permissions.html#external-users) who can only see and access specific internal and private projects. Working with contractors means that teams have to pay close attention to how much time they estimate for a project as well as how much time contractors spend working on the project.

Most teams use external tools to track time. However, we felt that it would be more natural to track your time in the same tool you’re working within, saving you one less tool and one less distraction.

Time tracking can be achieved in a lot of ways, but we’ve decided to do it the GitLab way: simple, efficient and out of the way.

With GitLab, 8.14 we will offer two new [slash commands](), accessible from the body of both an issue or a merge request, or in a comment field. The `/spent` command will let you record the time you spent working on the problem, like `/spent 10h 45m`. Every time you add a new spent command, we will add it to a total of spent time. This total will be displayed in the sidebar.
The `/estimate` command will let you enter an estimate of time. Contrary to the `/spent` command, new `/estimate` entries will always replace previous ones, as there can only be one estimate.
You will be able to use one of these two commands independently, or use them both in the same issue.

![time tracking example](images/blogimages/track-your-time-in-the-same-tool-you-do-your-work/time_tracking.png)

These two simple commands will help you and your team estimate and track your  work. You can read more about the exact specification in the [corresponding issue](https://gitlab.com/gitlab-org/gitlab-ee/issues/985).

Time tracking will be available with GitLab 8.14 as a Product for GitLab Enterprise Edition customers. Time tracking will be free while it is still in beta. It will also be offered as usual for free to anyone on GitLab.com. We can’t wait to see what you will do with this.
