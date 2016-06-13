---
layout: markdown_page
title: "Workflow"
extra_css:
  - compared.css
---

This document explains the workflow for anyone working with issues
in GitLab Inc.

## TL;DR

Start working on an issue you’re assigned to. If you’re not assigned to any issue, find the issue with the highest priority you can work on, by relevant label.

_**Note:** most of the document below assumes priority labels are live on GitLab.com
at the time of writing this is not the case yet_

If you need to schedule something or prioritize it, apply the appropriate labels. See below for details.

## Choosing something to work on

Start working on things with the highest priority in the current milestone. The priority of items are defined under labels in the repository, but you should be able to sort by priority (starting with GitLab 8.9).

After sorting by priority, choose something that you’re able to tackle and falls under your responsibility. That means that if you’re a frontend developer, you work on something with the label frontend. To filter very precisely you could filter all issues for:

- Milestone: Upcoming
- Assignee: Unassigned
- Label: Your label of choice. For instance Frontend
- Sort by priority

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
We have a limited capacity to work on new things. Thefore, we have to
schedule issues carefully. This is done primarily by product and
engineering managers.

Each issue that is scheduled should meet most of these criteria:

1. It should be in line with our vision for GitLab
1. It benefits our users
1. It is technically viable
1. Its requirements are clear

Direction issues are the big, prioritized new features for each release. They are limited to 36 points per release (4 developers each tackling a single 9-point issue)
Direction issues are given weight using planning poker
Other issues are given weight based on best-effort.

Issues that are not scheduled for a future milestone,
but we are committed to doing are put in the Backlog milestone.

Issues that are beneficial to our users, 'nice to haves', that we currently
don't have the capacity for or want to give the priority to, are not
scheduled. These issues are labeled as accepting merge requests, so
the community can make a contribution.

### Requesting something to be scheduled

Only fleshed-out issues can be scheduled. If an issue is vague or has unclear requirements, we can not schedule it.

To request a scheduling of an issue, ask the responsible lead. You can find the leads on the team page. For (major) feature requests, ask the relevant product manager. Right now this is either Mark (for CI) or Job.

We have much more requests for great features than we have capacity to work on. There is a good chance we’ll not be able to work on something. Make sure the appropriate labels (such as `customer`) are applied so every issue is given the priority it deserves.
