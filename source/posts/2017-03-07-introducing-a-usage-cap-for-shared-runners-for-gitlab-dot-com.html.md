---
title: "Introducing a usage cap for shared runners for GitLab.com"
author: Job van der Voort
author_twitter: Jobvo
---

Right now, you can use our shared Runners on GitLab.com for free, to run any
kind of CI job you’d like.
This is manageable because [we’ve received credits from the awesome people at DigitalOcean][credits-do], whose service we used to power our runners. We'd like to thank them for their generosity.

We're seeing people are really embracing GitLab CI and its usage has grown
exponentially. Unfortunately, this caused our credit to run out faster than
expected.
We’re also seeing that a small percentage of our users are using CI
significantly more than others. That combined makes offering unlimited,
uncapped CI not a sustainable business for GitLab Inc. To make it possible to
offer free CI, we’ll be introducing a cap to total build minutes of 2000 minutes. Most users (>97%) will not be affected by this. Users that
are exceeding this have already been contacted.

[credits-do]: https://about.gitlab.com/2016/04/19/gitlab-partners-with-digitalocean-to-make-continuous-integration-faster-safer-and-more-affordable/

## Capping Private Build minutes

We’ll be capping the amount of free build minutes available per group at
2000 minutes. Please note this limit only applies to private projects.
This will affect less than 3% of all groups using CI on
GitLab.com. 2000 build minutes means you can run a build of 10 minutes
five times a day, every work day.

With free GitLab CI on GitLab.com you'll get unlimited number of builds, with
unlimited parallelism on unlimited groups with unlimited number of
collaborators. We only count build minutes per group and you can run anything
you want, including full Docker support.

We’ve chosen to restrict minutes (and not another restriction), as this will
still allow you to have parallel builds and therefore fast CI runs.

Note that this will only restrict your minutes for our shared runners. If you
have a private runner setup for your projects, there is no limit to your build
time on GitLab.com.

## Introducing our paid plans

If you want more than 2000 build minutes per month, you will need to subscribe to one of our new paid plans.

[![paid-plans](/images/blogimages/ci-limits/paid-plans.png){: .shadow}](/images/blogimages/ci-limits/paid-plans.png)

Right now, the plans offer additional minutes and levels of support. Over time
we are going to be introducing new features into these plans, so keep an eye on
this space!

## Alternatives

As said, you still have and will always have the option to bring your own Runner.
Runners are very easy to set up, require little to no maintenance and run on almost any platform.

[Read how to set up your own Runner in the documentation](https://docs.gitlab.com/runner/)

## Timeline

The plans are available to purchase now and the CI limits will be activated at the end of March.
