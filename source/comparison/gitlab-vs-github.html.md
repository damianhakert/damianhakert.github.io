---
layout: comparison_page
title: GitLab Compared to other tools
suppress_header: true
extra_css:
  - comparison.css
---

## GitLab vs. GitHub

### Faster from Idea to Production

GitLab has a different approach to code development and deployment compared with GitHub. GitLab focuses on delivering a holistic solution that will see developers from idea to production seamlessly and on a single platform. You can read more about our [vision](https://about.gitlab.com/direction/#vision).

### Multiple authentication Levels

Set permissions according to people's role, rather than either read or write access to a repository. Don't share the source code with people that only need access to the issue tracker.

[See the various authentication levels](http://doc.gitlab.com/ce/permissions/permissions.html)

### Attachments in issues
In GitLab you can attach any file to any issue or comment.

### Innersourcing
Internal projects in GitLab allow you to promote innersourcing of your internal repositories.

[Find out more about innersourcing](https://about.gitlab.com/2014/09/05/innersourcing-using-the-open-source-workflow-to-improve-collaboration-within-an-organization/)

### Work-in-Progress Protection
Simply add 'WIP' to the title of a merge request to prevent anyone from merging it. This gives you all the code review power of merge requests, while protecting unfinished work.

[WIP Merge documentation](http://doc.gitlab.com/ce/workflow/wip_merge_requests.html)

### Large open source projects
GitLab is meant to be the best place for any software project. The team behind GitLab is addressing issues that maintainers and contributors to large open source projects are facing, to make it easier to do both.

[Making GitLab better for large open source projects](https://about.gitlab.com/2016/01/15/making-gitlab-better-for-large-open-source-projects/)

### Powerful Issue Tracker
Quickly set the status, assignee or milestone for multiple issues at the same time or easily filter them on any properties. See milestones and issues across projects.

#### Due date

In GitLab, you can set a due date for individual issues. This is very convenient if you have small tasks with a specific deadline.

#### Move issues between projects

You can move issues between projects in GitLab. All links, history and comments
will be copied and the original issue will reference the newly moved issue.
This makes working with multiple issue trackers much easier.

#### Group-level milestones

View all the issues for the milestone you’re currently working on across multiple projects.

[Example milestone for GitLab 8.2 (need to be logged in)](https://gitlab.com/groups/gitlab-org/milestones/8-2?title=8.2)

#### Create new branches from Issues

In GitLab, you can quickly create a new branch from an issue on the issue
tracker. It will include the issue number and title automatically, making it easy to track which branch belongs to which issue.

[See how in our documentation](http://doc.gitlab.com/ce/workflow/web_editor.html#sts=Create a new branch from an issue)

### Search through Commits

GitLab not only allows you to search through code, but also searches through your commit messages.

### Don't take our word for it.

agilob contributed [a great article about why you should choose GitLab for your next open source project.](https://b.agilob.net/choose-gitlab-for-your-next-project/)

### Drag and drop tasks

You can change the order of tasks in markdown on GitHub.
GitLab does not have this ability, but is considering implementing it.

> [See the GitLab issue to implement this](https://gitlab.com/gitlab-org/gitlab-ce/issues/18003)

### Assign multiple people to an issue / MR

GitHub allows you to assign multiple people to an issue or pull request.

GitLab doesn't allow you to do this, but allows for approvals in merge requests,
which offsets this there. For issues, GitLab does not have an
equivalent feature, but a feature request has been submitted for this.

> [GitLab issue to implement multiple assignees](https://gitlab.com/gitlab-org/gitlab-ce/issues/13386)

### Allow edits from upstream maintainers in branch

In GitHub, when a user opens a pull request from a fork, they are given the
option that allows the upstream repository contributors to collaborate with
them on their new branch.

GitLab allows you to restrict pushes very carefully, but does not have this option.

> [GitLab issue to implement the same feature](https://gitlab.com/gitlab-org/gitlab-ce/issues/21975)

### Cycle Analytics

GitLab provides a dashboard that lets teams measure the time it takes to go from an idea to production. GitLab can provide this data because it has all the tools built-in: from the idea, to the CI, to code review, to deploy to production.

> [Feature Highlight: Cycle Analytics](https://about.gitlab.com/2016/09/21/cycle-analytics-feature-highlight/)

### Prevent committing secrets in the repositories

GitLab provides a way to avoid committing sensitive files to your repositories automatically.

> [Documentation on push rules](https://docs.gitlab.com/ee/push_rules/push_rules.html#prevent-pushing-secrets-to-the-repository)