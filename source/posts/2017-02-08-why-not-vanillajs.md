---
title: "Why No Vanilla JS"
author: Jacob Schatz
author_twitter: jakecodes
author_gitlab: jschatz1
categories: GitLab
description: "In response to a user, we discuss why we did not go with Vanilla JS."
image_title: '/images/blogimages/vue-big-plan-cover.png'
---

We received a comment from user [@iamleppert](https://news.ycombinator.com/user?id=iamleppert) on Hackernews. Hello Leppert! Thanks for your comment! You had some good points. I want to respond to 1 of your points.

<!--more-->

## Why we Didn't Go With Vanilla JS

In response to [this comment](https://news.ycombinator.com/reply?id=13591807)

We received a comment from user [@iamleppert](https://news.ycombinator.com/user?id=iamleppert) on Hackernews. Hello Leppert! Thanks for your comment! You had some good points. I want to respond to 1 of your points.

> And for goodness sake, when you do need to do anything in javascript, you can use document.createElement and document.createDocumentFragment. These are perfect 1:1 browser APIs that allow you to do everything you've ever wanted, there's no magic, they call directly into the browser engine to give you what you need.

*Side note to another point: [monitoring frontend performance](https://gitlab.com/gitlab-org/gitlab-ce/issues/27487) is a work in progress.*

For goodness sakes! I am wondering if you ever tried doing what you suggest on a huge app? For tiny stuff it's fine. No big deal. I *have* done it, on huge apps. Vanilla all the way! It's not impossible, or difficult, it's just a pain in the butt. The point isn't that you can't, it's just you don't need to. It's painfully slow to dial a rotary phone. That's why we have phones with touchscreens now. JQuery is over 10 years old. JQuery came out before the first iPhone! webpack was created in 2012. I started using Vue in late [2014](https://github.com/vuejs/vue/commits/0.10), while it was in beta. Two years experience with a framework doesn't count as new in my book anymore. Vanilla JS, jQuery and Vue are very well tested. Vue is exploding right now, but it's not brand new.

One day (a few months ago), I said to the frontend team: "let's write everything in vanilla Javascript from now on". The browsers are ready, we don't need IE8, 9 or 10. We couldn't remove jQuery from our source, but we should gain performance, by talking directly to the browser, instead of by proxy.

We did gain [significant performance improvements](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/7239) (thanks [@iamphill](twitter.com/iamphill)! As one example).

Here's an example of a problem you might face. Let's say you don't use any jQuery and you need to listen for a button click, because you are submitting a form via ajax. You don't want your button to have an ID because that's will dirty up your HTML. So you give it a class and you write this event listener:

```
document.getElementsByClassName('submit')[0].addEventListener('click', ()=>{
  console.log('you have been clicked');
});
```

You could have use `document.querySelector` also.

So then you say "well hold on a second I can shorten that". 

```
const g = {};
g.get = (byClass) =>{
  return document.getElementsByClassName(byClass)[0];
  
}
g.get('submit').addEventListener('click', ()=>{
  console.log('you have been clicked');
});
```
You don't even write `gitlab`, just `g`, so it's extra slim. 

Here is what will happen. You wind up writing your own utils library for the things that take [the longest time](https://www.youtube.com/watch?v=a_XgQhMPeEQ) to write. At some point you will realize you are writing a crappier, less tested, version of jQuery, and you spent so much time fixing problems that you might as well have used jQuery, or one of the other million tiny Javascript DOM libraries. We are speaking from experience because we just tried this out. Take a simple example, like event delegation. jQuery: piece of cake. Javascript: doable, but a pain in the butt. We have been writing some things in Vanilla JS. It's much more performant than jQuery, because it's a direct line to the browser. For bigger stuff you need an abstraction layer.

When it's right, we use Vanilla JS.

But here's the funny thing: we wouldn't remove jQuery because it's deep in our source code and it works well. Like I said, rewriting isn't cost effective. Then there really isn't a reason **not** to use jQuery unless it is less performant.

It's not about the tools you use but how you use them.

Questions, suggestions, ideas? Please leave a comment
below or tweet at us [@GitLab](https://twitter.com/gitlab)!
