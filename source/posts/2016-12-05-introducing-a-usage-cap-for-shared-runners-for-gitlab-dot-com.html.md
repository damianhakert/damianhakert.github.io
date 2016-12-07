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
offer free CI, we’ll be introducing a cap to total build minutes of 1000 minutes. Most users (>97%) will not be affected by this. Users that
are exceeding this have already been contacted.

[credits-do]: https://about.gitlab.com/2016/04/19/gitlab-partners-with-digitalocean-to-make-continuous-integration-faster-safer-and-more-affordable/

## Build minutes

We’ll be capping the amount of free build minutes available per project at
1000 minutes. This will affect less than 1% of all projects using CI on
GitLab.com.

We’ve chosen to restrict minutes (and not another restriction), as this will
still allow you to have parallel builds and therefore fast CI runs.

Note that this will only restrict your minutes for our shared runners. If you
have a private runner setup for your projects, there is no limit to your build
time on GitLab.com

## Future

In the future, we’re planning to offer a subscription with additional (or unlimited) build minutes.

We’re also thinking about introducing paid Runners with a specific purpose,
such as Runners running on Apple hardware to test your iOS and macOS projects
and Runners with more memory, CPU cores, etc.

## Alternatives

As said, you still have and will always have the option to bring your own Runner. Runners are very easy to set up, require little to no maintenance and run on almost any platform.

[Read how to set up your own Runner in the documentation](https://docs.gitlab.com/runner/)

## Timeline

Right now, we’re working on the code that will allow us (and you, it’ll
come with GitLab) to visualize and restrict build minutes.
We're expecting to roll out this change in the first quarter of next year.
As always, we’ll make sure to note any changes in our blog.
