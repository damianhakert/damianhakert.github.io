---
title: 'Why We Chose Vue.js'
author: Jacob Schatz
author_twitter: jakecodes
categories: gitlab
image_title: '/images/default-blog-image.png/'
description: 'Why GitLab went with Vue.js'
twitter_image: '/images/tweets/why-choose-vuejs.png'
---

I had a great conversation with an interviewee a few weeks ago about how one 
should go about choosing a JavaScript framework. He brought up several good 
points, and underscored for me one reason it's a hard decision to make. 

He said, "when [insert big-name software company] releases their 
front-end's secret sauce, there is going to be hype. You'll know that this big company 
writes JavaScript very different than you do. That big company is also very successful. Does that make their approach to JavaScript better than yours? Does that mean that you need to adopt it?"

A big software company's secret sauce may be as awesome as they say. It's not "good" 
because lots of other JavaScripters are excited about it. You shouldn't copy/paste
an answer from StackOverflow without understanding it, no matter how 
many upvotes it has. So why copy/paste your choice of framework?

Which brings me to our decision to use Vue.js at GitLab.

## Simplicity and easy of use

What drew us to Vue.js is that it allows our team to _easily_ write _simple_ 
JavaScript. Getting started with Vue.js is easy, its source code is 
readable, and the documentation is the only tutorial you'll ever need. You 
don't need external libraries. You can use it with or without jQuery. You won't 
need to install any plugins, though there are many. I personally like vanilla Vue.js, although I can always reach for `vue-resource` when I need it. Hooking up Vue.js 
to existing code is very straightforward. You write some objects, and Vue does some magic.

I talk to a lot of JavaScript devs and I find it really interesting that the ones who 
spend the most time in Angular tend lack knowledge JavaScript. I don't want 
that to be me or our devs. Why should we write "not JavaScript?"

I remember back when I was using Backbone, I had to really force myself to stay 
DRY, because it's really a blank canvas. Vue.js does not make large assumptions 
about much of anything either. It only assumes that your data will change. 

Vue.js comes with the perfect balance of what it does for you and what you 
need to do yourself. Backbone is anarchy (no one in charge). Angular is a 
dictatorship (Angular is in charge), I'd say Vue.js is socialism: you 
are in charge of Vue. Vue is for the benefit of you the developer, to minimize suffering.

To give you an idea of what I mean, here's a simple 
[Codepen](http://codepen.io/jschatz1/pen/dpQkpx):

```
<div id="journal">
	<input type="text" v-model="message">
	<div>{{message}}</div>
</div>
```
```
var journal = new Vue({
	el: '#journal',
    data: {
      	message: 'Your first entry'
    }
});
```

If you've seen a few JavaScript libraries, it's not hard to understand everything in 
this example, without any documentation. Usually, with other frameworks, this is
where the simplicity stops. You get nice, simple examples when you're "Getting 
started" but in reality, things get complicated as soon as you to try to get 
your money's worth out of the framework. Not with Vue.js though -- real-life is as simple as it claims to be. 

And that is what we love about Vue.js: it's an elegant combination of structure 
and simplicity. The data for the view goes in an object called `data`, but the 
data can get there and look however you want. Any functions you'll write as 
callbacks for events go into a `methods` object, but they can do or return whatever 
you want. Vue.js just knows when things change and updates your views. And you write less code. 

## Vue.js + GitLab === Less code

So what problem does this solve for GitLab? When I joined, all the JavaScript was written 
with JQuery. There is nothing _wrong_ with that, except that it takes a lot 
more code to solve every problem. We knew we could do better. Once we started with 
Vue.js, we could immediately and consistently solve complex problems in much less time. 

A simple, but practical example we're using in production: on an GitLab 
Issue, the issue's state is displayed as either `closed` or `open`. That 
simple value can change often and needs to be represented in several views. 
With JQuery, we had about 30 or so lines of code to propagate those changes, and they 
those lines involved multiple classes and querying the DOM by hand. 

In Vue, this now requires use to write 1 line of JavaScript. The only other code 
we add is in the HTML, and that's just a few additional attributes.

What [Evan You](https://twitter.com/youyuxi) knows is that creating a kick ass framework isn't just about
writing great code. You need excellent documentation, a strong community helping each other
learn, a supporting cast of libraries and plugins to help users solve the hard problems,
and short feedback loops based on user feedback to keep the framework relevant. Vue is all
of that, *plus* great code. That's why we're using it. What about you?
