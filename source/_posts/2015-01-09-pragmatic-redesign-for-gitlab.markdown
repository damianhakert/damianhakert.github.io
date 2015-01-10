---
layout: post
title: "Pragmatic redesign for GitLab"
date: 2015-01-09 14:39:32 -0800
comments: true
categories: 
author: Dmitriy Zaporozhets
---

We (GitLab) have something big UI changes coming in next release at January 22nd. 
This blog post is about how we come with idea we need to change something differently with our user interface. 
It also about how we approach this and what we got in the end.

 
<!-- more -->


## Redesign should solve problems 

As soon as you dont have a list of problems you are going to solve with redesign - you should not do it!
Changes are always stressful. So it should be some compensation for your users in the form of improving usability.

We have several problems with current UI layout and it was hard to fix them without big changes. 
So we started from next list:

* Limited space in project navigation. We cant fit all project tabs with counters :( 
* For wide screens vertical space is more valuable so 2 levels of navigation is too much.   
* All navigation is on top - you need to scroll from bottom a lot.  
* It was annoying to have 24" display but cant browse side-by-side in full size.
* We really missed icons in navigation.
* Another (3rd) level of navigation when browse project settings.

__old version__

![old screenshot](/images/redesign/old.png) 


## The way to make it 

The goal was to change less but improve more. We started with existing UI instead of blank page.
My tool was web inspector in browser, not photoshop. I changed position of controls, elements, content. 
I tried different changes, made a screenshot, press F5 and started again from old UI.
It reminds me of playing old school computer games when if you die you start from first level. 

After a day I have a lot of screenshots with different UI layout and ideas. 
Next day I deleted most of them. 
I returned to the rest of screnshots after few days and choose a winner.


__first concept__

![concept screenshot](/images/redesign/winner.png) 


## Ask users

Changing UI is always uncomforable for end users. It requires time to adopt to new changes. 
Usually people will be mad about your redesign at first even if changes are really good.   
Thats why big companies usually give an option to try new design before switching everyone to it. 

__So we started with tweet:__

![tweet with screenshot](/images/redesign/tweet.png) 

It gaves us good advices in replies and also confirmed right direction of redesign. 


Next step was improving and polishing. After certain point we have first version ready. 
We made a staging server with new changes and shared it with community. 
Everyone could try new changes even before we merged it to master. 

As and open source product we get advantages of such strategy
in the form of merge requests from contributors with improvements to our new design.  
That was good sign.  


## Check of concept

At start of this post we described problems we want to solve with redesign. 
And during work its important to remember the goal.
So we just listed each problem was solved by new layout:

* Limited space in project navigation we fixed with moving navigation to the left where we have plenty of space.
* Moving navigation to the left saved us some vertical space for content. 
* Navigation is on the left and has fixed position now. Faster navigation and less scrolling.
* Fluid layout gives you control on application UI with size of browser window.
* Adding icons to navigation links improves usability a lot.
* We get rid of 3rd level of navigation.

__new version__

![desktop screenshot](/images/redesign/final3.png) 

## Final version

After we got positive feedback from users and developers we started improvements. 
Here is alignment and polishing comes. This stage was one of the hardest. 
Changes to layout made some pages hard to use and we were forced to redesign it too. 

But we did it and now we are really excited about the progress and how efficient it was. 
In 2 weeks it will be released in stable version and we hope you like it

![desktop screenshot](/images/redesign/final1.png) 

![desktop screenshot](/images/redesign/final2.png) 

![mobile screenshot](/images/redesign/final_mobile.png) 
