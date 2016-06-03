---
title: "Navigation redesign"
author: "Dmitriy Zaporozhets"
author_twitter: dzaporozhets
categories: 
image_title: 
---

After 8.5 we looked for a way to improve current user interface for both new and 
experienced users. One of the biggest concern we had with current interface is 
that it was easy to get lost in the navigation hierarchy. New users were quite 
confused by how left sidebar constantly changes with new links to different pages. 
At same time as experienced user I was annoyed by old navigation too. 

So I and Andriy (our UX designer) decided to do something with it.

<!--more-->

It started one day when we both agreed that we were not satisfied with current UI.
I even made a messy screenshot with the default project's navigation to illustrate my confusion: 

![old project navigation](/images/navigation-redesign/old-pr-nav.png)

Basically there are several things we did not like: 

* Current navigation is not well organized. In some places it does not follow logic 
or best practices.
* We can not use collapsed sidebar or muscle memory for fast click on links because of 
dynamic menu with too many items.
* It's hard to navigate when you come to GitLab via link from other 
app (like chat or anything) because of the lack of a logical hierarchy in our UI navigation. 


A few days later, Andriy made a prototype where the project's menu was displayed with 
dashboard navigation. So when you visit one of dashboard pages you see one level 
of links and when you visit project or group page - dashboard links get collapsed to 
icons and next level of navigation displayed. 

![failed navigation concept](/images/navigation-redesign/concept1.png)

We were very excited with that new concept and proceeded with implementation, which 
was pretty straightforward: we made a merge request, got feedback and review, and 
we merged it. Then we waited for next release candidate to bring the new nav to our community.

But user testing and feedback during release candidate was far from what we expected.
Instead of making things easier to understand and use, we confused users even more 
and made a decision to rollback the change. We gave up for a while...

A few weeks later we decided to take a different path. We splitted 
GitLab's layout in different areas by color, and tried to follow the navigation hierarchy.

Global navigation stays in dark left sidebar, and it is static. No matter which 
page you visit, you can always find GitLab's logo, your profile picture, and 
the main links for your projects, issues and profile settings.

![new navigation explained](/images/navigation-redesign/nav-exp.png)

The whole page, except the left sidebar, is a dynamic area, with its corresponding navigation and content.
If you visit project's page, the context menu will be on the top, and the 
content just below it. The same for groups and profiles pages. So, when you visit 
any page from within GitLab or from an external application, you always will 
know that theleft sidebar is the same, and header describes where exactly 
you are via name and navigation links.

So when you visit GitLab page several times a day you scan the page from top to the bottom, starting with
page/group/project name, followed by the navigation, then the content just below it. 

You mostly ignore the left sidebar until you need to return to one of the main pages, like "Projects" or "Groups". 
So after some time using the new UI, you might consider collapsing the left sidebar as it's easier
now to remember the icons related to the links there.

First we tried it on profiles pages and later on group pages and received mostly positive feedback. 
It passed the release candidate and was part of 8.8 release. 

Group page with new navigation layout: 
![group navigation](/images/navigation-redesign/group-nav.png)

Thanks to this changes we were able to improve mobile UI as well. We hide sidebar
on mobiles phones and toggle by clicking the link on the top-left corner. It allowed us to save 
a lot of horizontal space, which is really valuable on mobile screens. 

![mobile navigation](/images/navigation-redesign/mobile.png)

Next step is 8.9 where we finish navigation redesign by touching most used page - project. 
Probably this change will bring a lot of feedback from the users' side, which is the hardest one. 
We have too many menu items there, which is not good for user experience. 

So, besides actually applying the new navigation style, we also need to re-group logically connected pages
under less amount of tabs. Old project navigation had up to 15 menu items which 
is too much for human eye. 

Here is a spoiler for 8.9: 

![new project navigation](/images/navigation-redesign/project.png)



## Resources

- [Issue for new navigation](https://gitlab.com/gitlab-org/gitlab-ce/issues/14838) with a lot of discussion.
- [Google design guide](https://www.google.com/design/spec/components/tabs.html#tabs-types-of-tabs) was good for inspiration. 


