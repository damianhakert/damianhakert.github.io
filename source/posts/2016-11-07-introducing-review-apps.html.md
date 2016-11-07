---
title: "Introducing Review Apps"
author: Mark Pundsack
author_twitter: MarkPundsack
categories: feature
image_title:
description:
---
Let's talk about deploys. When a developer starts out with a new idea for an application, they'll typically start working locally when running the app is as simple as typing `rails server` or `npm start`. But at some point, you need to deploy that app somewhere so that other people, hopefully paying customers, can use it. An easy place to start is to deploy to Heroku or maybe you're using a massive Kubernetes cluster, but really, there are tons of options out there. This post is not about those options. It's about deployment strategy.

<!-- more -->

When you start, you have no users so there's very little risk in deploying directly to production. If you're still pitching your ideas to VCs, for example, you want your changes pushed up right away, usually right before a big meeting, so you push directly whenever you're ready. Nobody uses the app when you're not showing it to them, so who cares about "production downtime" or pushing untested code with bugs; nobody is using it! So you'll go ahead and create a production app named the same as your project.

    $ heroku list
    tanuki

But of course, you really hope things don't stop there. You push some code, test it out, then get some real users, and eventually you realize you should have a separate app for development that doesn't affect your real users. So you create a `dev` version.

    $ heroku list
    tanuki
    tanuki-dev

Then your team grows and you realize you need a separate app just for staging; testing right before a deploy where you know other developers won't clobber your tests. The staging app is set up with an environment as much like production as possible, including a production database, memcache or Redis, New Relic, Papertrail, and everything else you have added to your production app that might not be on your dev app.

    $ heroku list
    tanuki
    tanuki-dev
    tanuki-staging

When your team grows more, you realize that one dev app isn't enough and you create one for each developer.

    $ heroku list
    tanuki
    tanuki-grzegorz
    tanuki-kamil
    tanuki-mark
    tanuki-staging

This lets developers show off their work to their manager or product manager without getting clobbered by another developer. But at some point, in any fast-moving company, a single developer might have multiple features under development and want to demo them at any time, without having to micromanage their single `dev` app. So, you start creating new apps dedicated to big features.

```
$ heroku list
...
tanuki-new-interface
tanuki-refactor-signup
...
```

But apps should be easy to create and destroy so why not create a new one for every branch?

    $ heroku list
    tanuki
    tanuki-6-update-logo
    tanuki-7-refactor-backend
    ...
    tanuki-328-fix-typo
    tanuki-grzegorz
    tanuki-kamil
    tanuki-mark
    tanuki-staging

As you can see, this gets complicated pretty quickly and boy, would that be a lot to manage manually. Over the last few releases, and culminating in 8.14, GitLab has been working to make this easier.

Let's talk about Review Apps.

Review Apps are ephemeral app environments that are created dynamically every time you push a new branch up to GitLab, and they're automatically deleted when the branch is deleted. This sounds nice and all, but what good is it? Well, rather than having a single `dev` environment for a project, or even separate `dev` apps for each developer, you get a new app for every topic branch, automatically. This let's you test and demo new features without having to check in chat "hey, can I deploy to `dev`?" It's even better for the people on the periphery. Product managers can check out exactly what a merge request is going to look like without having to download and run a topic branch. QA or other users could take a look without having a development environment installed on their laptop at all.

<!Insert image of production and review apps in new folders view on GitLab.>

Once you embrace review apps, you'll find it hard to go back. You'll get rid of all your `dev` apps. You might even get rid of your `staging` app. Afterall, the feature will have gone through full automated CI testing, and with high fidelity feature-level testing on a review app, `staging` becomes an unnecessary speed bump on your way to full-speed productivity. Once a merge request is approved and merged, have it automatically deployed to `production`!

<!Insert pretty graphic visualizing review app + production flow.>

To [get started with Review Apps](https://docs.gitlab.com/ce/ci/yaml/README.html#dynamic-environments), you'll need to figure how to create and deploy a new app using shell scripts, then put that into your `.gitlab-ci.yml` in a special job. You might using nginx with subdirectories, like [we do for about.gitlab.com](https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/3709). Or use the [Openshift client to create and build new apps](https://gitlab.com/gitlab-examples/review-apps-openshift/blob/master/.gitlab-ci.yml).
