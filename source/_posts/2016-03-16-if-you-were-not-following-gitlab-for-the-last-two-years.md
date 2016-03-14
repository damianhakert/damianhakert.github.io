---
layout: post
title: "If you were not following GitLab for the last two years"
date: 2016-03-16
comments: true
author: Ivan Nemytchenko
author_twitter: inemation
image_title: '/images/unsplash/key-concepts.jpg'
---

I've recently joined GitLab as a Developer Advocate. A part of my role will be traveling to community events where I hope we'll meet in person someday. I'm also an experienced Ruby developer. As a rubyist, naturally, I've heard about GitLab and even tried to use it.

The first two weeks working with GitLab have been full of pleasant surprises and dispelled delusions. If you haven't been following GitLab for the last two years, this post is for you.

<!--more-->

## [GitLab.com](https://gitlab.com/users/sign_in)

You don't have to download and install GitLab nowadays. You can simply sign up for GitLab.com and host your own repositories. Even the private ones. Yes, for free and without any restrictions. No, there is no catch.

It should be noted that repositories are actually called "projects". And that is not the only thing that hits the eyes at first. As it turns out, the uncustomary terminology is, in fact, justified. 

## The terminology 
These aren't just fancy terms to stand out from the crowd. I strongly recommend reading [this article](), if you wish to sort out the details. I'd like to bring up the "Merge requests" topic, as the most controversial.

My initial reaction, naturally, was rejection. Most of us are accustomed to "Pull requests", so what's the big idea?
But then I remembered that the title "Pull request" never did make perfect sense to me because closing a pull request actually does branch merging.

As it turns out, there is a command [`git request-pull`](https://git-scm.com/docs/git-request-pull), hence the feature title.

Pull requests have hothing in common with this git command. Technically correct name is "Merge request". 
[Learn more](https://about.gitlab.com/2016/01/27/comparing-terms-gitlab-github-bitbucket/) on terminology difference, if you're interested.

The terminology was just a part of the deal. When reading the documentation, I've discovered something called "omnibus" and found some mysterious "runners" and "shared runners" in the settings. But first things first. 
Runners are connected to CI. Omnibus is related to GitLab installation on your own server.

## Continuous Integration (CI)

Continuous Integration is the best practice in the software development process. For example, CI server runs your tests every time you push changes to the repository.

In a rule, CI is a separate service. But in GitLab CI is embedded.
If you had to manually connect two services before, it just works on its own in GitLab.

And it works through runners.

## Runners

A runner is a virtual machine that runs your tests, builds your builds or generates static for your websites. GitLab.com users are able to make use of a special Shared Runners pool to "simply make everything work". 

If you are not satisfied with the Shared runners performance, you can [setup a runner](https://about.gitlab.com/2016/03/01/gitlab-runner-with-docker/) on your own server and connect it to one or more projects.

Not to forget that you can install GitLab on your own server as well. 

## GitLab installation with Omnibus

In the past, you could only install GitLab manually. Now you can install and update the service from packages thanks to Omnibus.
[Omnibus](https://github.com/chef/omnibus-chef) is a tool developed by Chef that helps to create installation packages for complex software with a lot of components for various platforms.

Any installation using Omnibus lasts for 2-6 minutes tops, depending on your server performance. This is what GitLab installation looks like on Ubuntu 14.04 using a relatively slow VPS with 2Gb running memory:
[![asciicast](https://asciinema.org/a/39151.png)](https://asciinema.org/a/39151)

Hint: in case you'd prefer not to mess with console installation and updates at all, you can simply rent a GitLab server on [Githost.io](https://githost.io/)

Both Omnibus and built-in CI are just a portion of what is being done to make developers' jobs easier.
Let us review a few features.

## Small features that make difference

### Merge when build succeeds

With GitLab, you don't have to wait for your build to turn green to finally merge the branch. You can simply ask GitLab to do that for you.

![](/images/automerge.jpg)

### Publishing with GitLab Pages

GitLab Pages runs on top of the built-in CI. Thanks to the feature, you can host websites created by any static site generators on GitLab. 

Fork a repo from [GitLab examples](https://gitlab.com/groups/gitlab-examples?utf8=%E2%9C%93&filter_projects=pages-) or figure out GitLab CI settings to forget all about the manual static generation. 
You simply push your changes to the repository and GitLab generates and deploys everything on its own.

CNAME and TLS are supported.


These kinds of features have become possible due to a synergic effect between system components.

If you get to know the [company's vision](https://about.gitlab.com/direction/#vision), it becomes clear that built-in CI is just another step towards making collaboration on projects simpler and more productive.

So please don't be surprised once crashed build creates a TODO automatically or GitLab introduces a built-in chat.

* * * 

Hopefully, this article has helped you to fill in the gaps in understanding of what GitLab is now. I'm planning to write two more articles: about migrating personal projects to GitLab and about the contribution to GitLab. Stay tuned and [follow me on Twitter](https://twitter.com/inemation).

I'm always happy to answer your questions in comments or personally. Over the next several weeks I will be attending the following Ukrainian Ruby-meetups, where we can catch up:
- [Ruby Meditation, Kiev](https://www.facebook.com/events/406794219490854/) (March 18)
- [Pivorak, Lviv](https://www.facebook.com/pivorak/) (March 26)