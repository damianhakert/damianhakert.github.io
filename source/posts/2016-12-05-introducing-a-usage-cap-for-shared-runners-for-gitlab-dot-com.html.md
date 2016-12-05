---
title: "Introducing a usage cap for shared runners for GitLab.com"
author: Job van der Voort
author_twitter: Jobvo
categories:
image_title:
description:
---

Right now, you can use our shared Runners on GitLab.com for free, to run any kind of CI job you’d like. This is manageable because we’ve generously received free credits from DigitalOcean, whose service we used to power our runners.

Unfortunately, our credit has ran out and CI usage is growing fast.
Specifically, we’re seeing that a small percentage of our users are using CI
significantly more than others. That combined makes offering unlimited,
uncapped CI not a sustainable business for GitLab Inc. To make it possible to
offer free CI, we’ll be introducing a cap to total build minutes. Most (~95%)
of users will not be affect by this.

## Build minutes

We’ll be capping the amount of free build minutes available per user / group.
We’re still looking into the amount of minutes that we’ll offer for free, but
we’re aiming for a limit that makes that 95-99% of GitLab.com users will not
notice any change.

We’ve chosen to restrict minutes (and not another restriction), as this will
still allow you to have parallel builds and therefore fast CI runs.

Users that exceed the cap will get a message ahead of time and we’ll work
together with them in the transition.

Note that this will only restrict your minutes for our shared runners. If you
have a private runner setup for your projects, that will not affect your build
minutes on our shared cluster.

## Future

In the future, we’re planning to offer a subscription with additional (or unlimited) build minutes.

We’re also thinking about introducing paid Runners with a specific purpose, such as Runners running on Apple hardware to test your iOS and macOS projects.

## Alternatives

As said, you still have and will always have the option to bring your own Runner. Runners are very easy to set up, require little to no maintenance and run on almost any platform.

[Read how to set up your own Runner in the documentation](https://docs.gitlab.com/runner/)

## Timeline

Right now, we’re working on the code that will allow us (and you, it’ll come with GitLab) to restrict build minutes. We’ll gradually introduce this over the coming months.
We’ll make sure to note any changes in our blog.
