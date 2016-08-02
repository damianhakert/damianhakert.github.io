---
layout: markdown_page
title: "Engineering Workflow"
extra_css:
  - compared.css
---

This document explains the workflow for anyone working with issues in GitLab Inc.
For the workflow that applies to everyone please see [PROCESS.md](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/PROCESS.md).

**Table of contents**

- TOC
{:toc}

## Basics

1. Start working on an issue you’re assigned to. If you’re not assigned to any issue, find the issue with the highest priority you can work on, by relevant label. [You can use this query, which sorts by priority for the upcoming milestone][priority-issues].
1. If you need to schedule something or prioritize it, apply the appropriate labels. See below for details.
1. You are responsible for the issue that you're assigned to. This means it has
to ship with the milestone that is has. If you are not able to do this,
you have to communicate this early.
In teams, the team is responsible for this (see below).

[priority-issues]: https://gitlab.com/gitlab-org/gitlab-ce/issues?scope=all&sort=priority&state=opened&utf8=%E2%9C%93&milestone_title=%23upcoming&label-name=

## Working in Teams

For larger issues or issues that contain many different moving parts,
you'll be likely working in a team.

1. Teams have a shared responsibility to ship the issue in the planned release.
    1. If the team suspects that they might not be able to ship something in
  time, the team should escalate / inform others as soon as possible.
  A good start is informing your lead.
    1. It's generally preferable to ship a smaller iteration of an issue,
  than ship something a release later.
1. Consider starting a Slack channel for a new team,
but remember to write all relevant information in the related issue(s).
You don't want to have to read up on two threads, rather than only one.

## Choosing something to work on

Start working on things with the highest priority in the current milestone. The
priority of items are defined under labels in the repository, but you are able
to sort by priority (starting with GitLab 8.9).

After sorting by priority, choose something that you’re able to tackle and falls under your responsibility. That means that if you’re a frontend developer, you work on something with the label frontend. To filter very precisely you could filter all issues for:

- Milestone: Upcoming
- Assignee: Unassigned
- Label: Your label of choice. For instance Frontend
- Sort by priority

[Use this link to quickly set the above parameters][priority-issues].

If you’re in doubt about what to work on, ask your lead. They will be able to tell you.

## Labelling issues

To allow for asynchronous issue handling, we use milestones and labels. Leads and product managers handle most of the scheduling into milestones. Labelling is a task for everyone.

Most issues will have labels for at least one of the following:

- Subject (CI, wiki)
- Type (feature proposal, bug, security)
- Priority (P1, P2, P3)

If you come across an issue that has none of these, you can _always_ add the type and often also the subject.

All labels, their meaning and priority are defined on the
[labels page](https://gitlab.com/gitlab-org/gitlab-ce/labels).

### Subject labels (CI, wiki)

Subject labels are labels that define what area of GitLab this issue hits. Examples are CI, wiki, issues, merge request. They are not always necessary, but very convenient. If you are an expert in a particular area, it makes it easier to find issues to work on.

### Type labels (feature proposal, bug)

Type labels are very important. They define what kind of issue this is. Every issue should have one or more. Examples of types are:

- Bug
- Feature proposal
- Security
- Customer
- Direction

These labels have a priority assigned to them, which automatically makes them float to the top, depending on their importance.

### Priority labels

To manually assign priority to specific features, there are labels such as `P1`, `P2`, `P3`. These are assigned by leads and product to indicate overruling priority and used carefully. Right now, these are in use:

- P1: Critical. Above all, this should be worked on this milestone. Reserved for only a handful of issues.
- P2: Must. Must be finished this milestone
- P3: Should. Should be finished this milestone.

All other issues are nice to land in a milestone, but not expected to do so. They will be naturally ordered by the type labels. This prevents that ‘nice to have’ features from being prioritised over fixing bugs (as fixing bugs might be less fun).

## Scheduling issues

GitLab Inc has to be selective in working on particular issues.
We have a limited capacity to work on new things. Therefore, we have to
schedule issues carefully. This is done primarily by product and
engineering managers.

Each issue that is scheduled should meet most of these criteria:

1. It should be in line with our [vision for GitLab](https://about.gitlab.com/direction/#vision)
1. It benefits our users
1. It is [technically viable](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md#contribution-acceptance-criteria)
1. The technical complexity is acceptable (we want to preserve our ability to make changes quickly in the future so we try to avoid: complex code, complex data structures, and optional settings)
1. It is ortagonal to other features (prevent overlap with current and future features)
1. Its requirements are clear
1. It can be achieved within the scheduled milestone.
Larger issues should be split up, so that individual steps can be achieved
within a single milestone.

Direction issues are the big, prioritized new features for each release.
They are limited to a small number per release so that we have plenty of
capacity to work on other important issues, bug fixes, etc.

Issues that are not scheduled for a future milestone,
but we are committed to doing, are put in the Backlog milestone.

Issues that are beneficial to our users, 'nice to haves', that we currently
don't have the capacity for or want to give the priority to, are not
scheduled. These issues are labeled as accepting merge requests, so
the community can make a contribution.

### Requesting something to be scheduled

Only fleshed-out issues can be scheduled. If an issue is vague or has unclear requirements, we can not schedule it.

To request a scheduling of an issue, ask the responsible lead. You can find the leads on the team page. For (major) feature requests, ask the relevant product manager. Right now this is either Mark (for CI) or Job.

We have much more requests for great features than we have capacity to work on. There is a good chance we’ll not be able to work on something. Make sure the appropriate labels (such as `customer`) are applied so every issue is given the priority it deserves.

### Scheduling Committee

There is an informal scheduling committee that has a weekly meeting that
discusses issues _around_ scheduling and how the process of scheduling issues
can be improved. Actual scheduling, prioritization and others has to happen
on GitLab.com and nowhere else.

The meeting is open to anyone wanting to join. Ask in #scheduling to be added.

- [Scheduling committee agenda](https://docs.google.com/document/d/1C1cZ_72cml-6S98eULTspkZwKR4gBSgmZRhyy_pcLEc/edit)
- Slack channel: `#scheduling`
