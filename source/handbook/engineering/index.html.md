---
layout: markdown_page
title: "Engineering"
---

## Communication<a name="reach-engineering"></a>

- [**Public Issue Tracker (for GitLab CE)**](https://gitlab.com/gitlab-org/gitlab-ce); please use confidential issues for topics that should only be visible to team members at GitLab.
- [**Chat channel**](https://gitlab.slack.com/archives/development); please use the `#development` , `#frontend`, `#infrastructure`, and `#support` chat channels for questions that don't seem appropriate to use the issue tracker or the internal email address for.

## Engineering Groups

- [Support](/handbook/support)
- [Infrastructure](/handbook/infrastructure)
- [Backend](/handbook/backend)
- [Edge](/handbook/edge)
- [Frontend]() TODO
- [Packaging]() TODO
- [UX](/handbook/ux)

### Collaboration

To maintain our rapid cadence of shipping a new release every month, we must
keep the barrier low to getting things done. Since our team is distributed
around the world and therefore working at different times, we need to work
in parallel and asynchronously as much as possible. That means that if you
are implementing a new feature, you should feel empowered to work on the entire
stack if it is most efficient for you to do so. For example, if you are a
frontend developer, you should feel free to tackle the Ruby code necessary
to support a new feature. Likewise, a backend developer should feel empowered
to write the necessary CoffeeScript/JavaScript to enable a new UI element.

We do need to maintain code quality and standards. There are a few
guidelines for collaboration:

1. If you are working on an issue that touches on areas outside of your expertise, be
sure to mention someone in the other group(s) as you soon as you start working on it.
This allows others to give you early feedback, which should save you time in the
long run.
2. Security: If a frontend developer needs to touch controller code, a
backend developer/miniboss/endboss should do a thorough review.
3. Big features/moonshots: If we do something ambitious where there are
no previous examples and requires a high degree of complexity in both
frontend and backend, form a team upfront that has UX designers, frontend, and
backend engineers.
4. Final review: A final review of a merge request should be made by an endboss.
If it is mainly frontend code it should be reviewed by a frontend endboss, and if it is mainly backend code it should be
reviewed by a backend endboss.

## Developers on Support Team Rotation

See [the fix4all description](/handbook/engineering/fix4all/).

## Resources for Engineering

- [Developer onboarding](/handbook/developer-onboarding)
- [Engineering Workflow](/handbook/engineering/workflow)
- [Issue Triage Policies](/handbook/engineering/issues/issue-triage-policies)
- [Critical Security Release Process](/handbook/engineering/critical-release-process)
