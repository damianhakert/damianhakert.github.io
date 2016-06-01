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

It started one day when we both agreed that we are not satisfied with current UI.
I even made a messy screenshot with project page navigation to describe my confusion: 

![SCREENSHOT HERE](/images/navigation-redesign/old-pr-nav.png)

Basically there are several things we did not like: 

* Logically hierarchy of navigation goes from left to right and from top to bottom. 
But old UI did not follow it.
* We can not use collapsed sidebar or muscle memory for fast click on links because of 
dynamic menu with too many items.
* Its hard to navigate when you come to GitLab via link from other 
app (like chat or anything) because of context only navigation and not logical hierarchy. 


Few days after Andriy made a prototype where project menu was displayed with 
dashboard navigation. So when you visit one of dashboard pages you see 1 level 
of links and when you visit project or group page - dashboard links get collapsed to 
icons and next level of navigation displayed. 

![SCREENSHOT HERE](/images/navigation-redesign/concept1.png)

We were very excited with concept and proceed with implementation. The implementation
process was pretty straightforward - we made a merge request, it got feedback and review
and we merged it. After we waited for next release candidate to bring it to users.

But user testing and feedback during release candidate was far from what we expected.
Instead of making things easier to understand and use, we confused users even more 
and made a decision to rollback the change. We gave up for a while...

Few weeks later we decided to take different path. We splitted GitLab layout 
on different areas by color and tried to follow navigation hierarchy. 
Global navigation stays in dark left sidebar and is static. No matter what 
page you visit you can always find GitLab logo, your profile picture and main links
like your projects, issues and profile settings in the left sidebar. 
 
![SCREENSHOT HERE](/images/navigation-redesign/nav-exp.png)

Whole page except left sidebar is dynamic area with corresponding navigation and content. 
If you visit project page - navigation will be on the top and content below it. 
Same for group page or profile page. So when you visit any page from within application or 
via link from external application - you always know that left sidebar is the same 
and header describe where exactly you are via name and navigation links. 

So when you visit GitLab page N time a day you scan page from top to the bottom starting with
page/group/project name then navigation and then content below. You mostly ignore 
left sidebar until you need return to one of main pages like "Projects" or "Groups". 
So after some time using new UI you might consider collapse left sidebar as its easier
now to remember icons-only links there.

First we tried it on profiles pages and later on group pages and received mostly positive feedback. 
It passed release candidate and was part of 8.8 release. 

Group page with new navigation layout: 
![SCREENSHOT HERE](/images/navigation-redesign/group-nav.png)

Thanks to this changes we were able to improve mobile UI as well. We hide sidebar
on mobiles phones and toggle by click link in top left corner. It allowed us to save 
a lot of horizontal space which is really valuable on mobile screens. 

![SCREENSHOT HERE](/images/navigation-redesign/mobile.png)

Next step is 8.9 where we finish navigation redesign by touching most used page - project. 
Probably this change will bring a lot of feedback from user side as it is the hardest one. 
We have too many menu items there which is not good for user experience. So beside 
actually applying new navigation style we also need to re-group logically connected pages
under less amount of tabs. Old project navigation had up to 15 menu items which 
is too much for human eye. 

Here is a spoiler for 8.9: 

![SCREENSHOT HERE](/images/navigation-redesign/project.png)



## Resources

- [Issue for new navigation](https://gitlab.com/gitlab-org/gitlab-ce/issues/14838) with a lot of discussion.
- [Google design guide](https://www.google.com/design/spec/components/tabs.html#tabs-types-of-tabs) was good for inspiration. 


