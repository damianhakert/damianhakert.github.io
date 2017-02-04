---
title: "Our Big Frontend Plan"
author: Jacob Schatz
author_twitter: jakecodes
author_gitlab: jschatz1
categories: development
description: ""
image_title: '/images/blogimages/vue-big-plan-cover.png'
guest: false
---

The Frontend at GitLab is getting better and better every day. Today we did 2 big things, and I'd like to share them with you and our big plans for the future.

<!--more-->

# Our Big Frontend Plan

Vue is awesome. [I wrote an article](https://about.gitlab.com/2016/10/20/why-we-chose-vue/) a while ago that showed GitLab's love for Vue. Today's article is a way to show our plan over the long term to make GitLab as fast and performant as possible with Vue and Webpack. We want to make GitLab the easiest to develop for Frontend Developers. 

One of the lessons I live by is "It's not *always* about the tools you use, but **how** you use them."  Saying "we chose Vue", does not imply success. This also means that we could be using Angular or React and have just as awesome of a product. Vue is simply the way there.

How do we plan to use Vue over the long run to make GitLab better, faster, easier and more awesome?

The plan below is a work in progress and very ambitious, but I believe that it will result in a much better frontend for development and performance. This document is also a reference to myself, of the things we plan to do here at GitLab's Frontend.

## A Healthier Frontend

When I started at GitLab, our stack was (oversimplifying here) Rails with jQuery. It hasn't changed much big picture wise except for Vue. Smaller picture, we've added many linters, better code coverage, and many other great things.

### 1. Rewrite only what you need to
We are not rewriting GitLab's frontend entirely in Vue. That would be a very bad idea. It's not a bad idea for everyone, but is a bad idea for a startup. It would cost a tremendous amount of time and money. The existing jQuery code (although some say is uncool) has been tested and works very well. There is no need to rewrite functionality that works well, unless there is going to be a major gain. 

We also aren't writing every new thing in Vue. You do not need to do this either. But, it would be hard to find some part of the UI that would not benefit from even the simplest parts of Vue. 

Examples of this are: 

1. The issue page (which shows an individual issue), has a lot of jQuery on it. We won't rewrite now, because it works well. We will rewrite small parts in Vue once we make certain features more real-time. We are currently making the title and description real time. 

1. The Issue Boards, which Phil wrote, was a perfect candidate for Vue. It was a brand new feature and had lots of reactive parts.

1. The current issue page loads all comments at once and adds lots of event listeners to the page. This page could benefit from Vue for performance reasons. We could make the comment section a Vue app and make the comments a component with the emoji picker as components as well, etc. While we're in there we'll amp up the UX by allowing you to see the comment you linked to immediately without waiting. There are better ways to show massive amounts of comments so we have to potentially rethink that.

As you can see, we won't just slap Vue on everything.

### 2. Add in Webpack
Rails has this awesome system of grabbing your Ruby libraries and bundling them into your app. `bundle install` will install all the stuff you need from your `Gemfile`. So why does frontend have to stick all their libraries in the `vendor` directory? Are we not on point enough to have our own library delivery system?

By [introducing Webpack into the equation (merged and ready for action!)](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/7288) we gain multiple benefits. 

1. Javascript libraries aren't being bundled directly with the GitLab source code.
2. We can slim down the Vue source because we can precompile templates.
  1. When code is shared between files we can make sure we don't load lodash twice, for example. If both files load lodash, we should only load the code for lodash 1 time.
3. We can add [hot module reloading](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html) to make our development quicker. This is a development bonus, as our current development takes loads of time to refresh the page while developing GitLab. Spicy!
4. We can have our own module system. This should help a lot of frontenders to contribute to GitLab. Devs won't need to figure out the whole Rails Javascript situation in order to contribute. We can also dictate manually what we want to include. 
5. SVGs are going to be huge (yuuugge!).
  1. Webpack precompiles SVGs.
  1. Right now, SVGs live in a specific directory in Rails. We use Rails helpers to pull in SVGs. With Webpack we can pull in SVGs one at a time because Webpack precompiles assets.
  1. We won't have to fetch SVGs with an HTTP request.
  1. We don't have to do tricky HTML hidden elements which is technical debt.
  1. We don't have to mess around with SVGs in CSS. You cannot change the color of SVGs in CSS.
6. We'll increase developer workflow by using more native libraries. You can do this through Ruby but we can let the Frontend library deal with our CSS problems. 
7. We can use a `vendor` file. You put all your common libraries in a separate file named `vendor`. Then your server just downloads all the files once. Your external libraries change very infrequently, so you shouldn't have to reload them all the time. 
8. With Webpack deferred modules you can load just the js you need to boot. Then you do a `require ensured`. With this Webpack will do a quick call to the server and request the exact JS you need. It keeps the size of the file really small.

[Regarding point 2 above:](https://github.com/vuejs/vue/issues/2873) Evan You says: 

> There will be two different builds:
> 
> * Standalone build: includes both the compiler and the runtime. ...
> 
> * Runtime only build: since it doesn't include the compiler, you need to either pre-compiled templates in a compile step, or manually written render functions...


### 3. [Remove Turbolinks](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8570) (Merged 02/03/2017!)
Currently we use TurboLinks in GitLab.

#### What Does Turbolinks Achieve?
With TurboLinks, clicking a link won't navigate to a new page in the default browser `GET` request way. Instead Turbolinks will replace the `body` tag of your app with the new content. All your Javascript is loaded once, when using the asset pipeline. This usually only loads some small HTML and JavaScript. On GitLab our pages would load an average of 20kb on each page load versus the full JavaScript file size of 800kb+. Turbolinks is a great solution for many. When you start introducing slightly more complex Javascript it becomes a pain.

#### The problem we need to solve
When your JS is loaded once for multiple pages, events become a major problem. If you are using `gem 'jquery-turbolinks'` as we are, then the `$` `ready` function will fire on every page load even though the page isn't loading in the traditional sense. It's kind of a pain in the butt to write page specific Javascript without including it for the whole app. We do it and it's fine, but, why? There really isn't a reason for a lot of our JS that needs to be included on every page. 

Any external links do load faster so we need to be careful about performance. 

If you aren't careful, your events will get loaded multiple times and thus fire multiple times. For example, the following code:

```
$(function(){
  $(document).on('click','.some-element', function(){
    console.log('Click loaded');
  }
});
```
Then that click event will get loaded on every page and thus fire multiple times every time `.some-element` is clicked. 

#### The Solutions
There are a few remedies to this problem. Some are good and some are bad. 

1. Don't create events in `$` `ready` callbacks.
2. Use the following stinky solution:

    ```
    $(document)
    .off('click', '.some-element')
    .on('click'...
    ```
     
     I call this the `die live` method. Old jQuery code people use to write `die().live()` everywhere. That's the old school jQuery `off().on()`.
3. Write an event manager to be a delegate for all added events. 
4. Remove Turbolinks and make sure you load only the code you need on each page. 

I am opting for option 4, in order to make our development lives easier and get multiple performance gains. 

#### The Bonus
After we remove Turbolinks we can do something really cool. We can have each page live on it's own. Then certain pages can be their own Vue apps. For example we can make the file browser its own Vue application. The merge request page can be it's own application. The code for the file viewer won't need to be loaded on any other page and the same goes for other pages. This is not anything new, this is just basic web development. This is also not a new paradigm, and we would not be the first. 

There is the argument for making the whole site a single page application, but I think this would just be the hardest to maintain and has zero benefits for the performance and the user. Also highest chance of making a janky website. For example, the profile page could be potentially very light and there would be no reason that if someone is linked directly to the profile page it should load every single piece of Javascript in our project.