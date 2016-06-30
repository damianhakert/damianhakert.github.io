---
layout: markdown_page
title: Product
---

# Product at GitLab

GitLab is designed and developed in a unique way.

This document provides lessons and heuristics on how to design changes
and new features.

_As everything at GitLab, this document is forever in draft. Merge requests are very welcome._

## TL;DR

1. [Minimally Viable Change](#the-minimally-viable-change): Work in iterations by implementing only the minimally viable change
1. [Convention over Configuration](#convention-over-configuration): Avoid configuration and make it work out of the box:
1. [Be Ambitious](#be-ambitious): do things no one else is doing
1. [Do not mess with Flow](#do-not-mess-with-flow): _frictionless_ from idea to production. Avoid adding clicks.

## The Minimally Viable Change

Reduce every change proposal to its very minimally viable form.
This allows us to ship almost anything within a single release,
get immediately feedback and avoid deep investments in ideas that might
not work. Other advantages:

- This helps avoiding the sunk-cost fallacy in situations where we might
decide to drop a change, as we almost never spend more than a few weeks working
on something.
- It prevents over-engineering
- It forces everyone involved to look for the most simple solution to a problem,
which is often the superior solution
- It forces to work for a 80/20 solution, where competing products might cater
to the last 20% of the market, a minimally viable solution is _good enough_ for 80%
- Further changes or enhancements to the change are driven by feedback from
actual users. This is a much more informative mechanism than the intuition
of a product person (though note that this doesn't mean we should just build
whatever feedback tells us)

![](https://imgs.xkcd.com/comics/optimization.png)

## Convention over Configuration

Avoid configuration at all costs.

Every configuration in GitLab multiplies its complexity, which means
the application is harder to use, harder to develop and
less friendly to its users.

Making features, changes, configurable is _easy_ and _lazy_.
It's a natural reaction to propose a big change to be configurable,
as you worry it'll negatively affect certain users. However,
by making a change configurable you now created two problems.

![](https://imgs.xkcd.com/comics/standards.png)

Work on solutions that work for everyone, that replace all
previous solutions.

Sometimes configuration is inevitable or preferable. GitLab should
work perfectly right out of the box for any users. Your configuration
can't make that experience worse and should always _get out of the
way of the user_

## Be Ambitious

Many crazy, over-ambitious ideas just sound like they are impossible
because no one else is doing them.

Because we have amazing engineers and a culture of shipping a minimally
viable change, we are able to do a lot more 'impossible' things than other
people.

That's why we're shipping merge conflict resolution, how we built-in CI before
anyone else did it, why we build a better static pages solution and why
we're able to compete.

![](https://imgs.xkcd.com/comics/squirrel_plan.png)

## Do not mess with Flow

Doing something simple in GitLab should be simple and require no
human cpu-cycles to do so. Things that are simple now, should
be simple in two and ten years.

This sounds obvious, but messing with Flow is easily done. In most
cases, flow is disrupted by adding another action, another click.

For instance: You want users to be made aware of the rules of a project.
Your proposal is a little popup that shows the rules before they create an
issue. This means that every time that someone creates an issue they need
to click once before resuming their normal action. This is unacceptable.
A better solution is to add a link to the issue that points the user to this.

![](http://imgs.xkcd.com/comics/app.png)

It's very hard to maintain flow with a lot of configurations and options.
In cases where you want to enforce certain behavior, the most obvious step
is to add another step or action. This can be avoided by making the action
work in parallel (like a link in the issue), encouraging rather than enforcing
certain behaviors.

We don't want users to be able to construct workflows that break GitLab or
make it work in unpredictable ways. Custom workflows, like you find in JIRA,
are the opposite of what we want to our users.
