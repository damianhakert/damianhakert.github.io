---
layout: markdown_page
title: "Backend Team"
---

## Teams

There are three teams within the Backend group:

* [CI](/handbook/backend#ci)
* [Discussion](/handbook/backend#discussion)
* [Platform](/handbook/backend#platform)

All three teams work in concert, but each has a different focus on what
issues to work on for each release. The following information is not meant to
be a set of hard-and-fast rules, but as a guideline as to what team decides can
best improve certain areas of GitLab.

There is a backend team call every Thursday, before the team call. You should
have been invited when you joined; if not, ask your team lead!

### CI Team
{: #ci}

The CI Team is focused on all the functionality with respect to
Continuous Integration and Deployments. For example, this includes:

  * Builds
  * CI Runner
  * Container Registry
  * Pipelines
  * Deployments
  * Environments

### Discussion Team
{: #discussion}

The Discussion Team is focused on the collaboration functionality of GitLab.
More specifically, this covers:

  * Markdown
  * Issues
  * Merge Requests
    * Diffs
    * Code Review
    * Conflict Resolver
  * Snippets
  * Search
  * Notifications
    * Todos
    * E-mail
  * Planning
    * Milestones
    * Labels
    * Due Dates
    * etc.

### Platform Team
{: #platform}

The Platform Team is focused on all the other areas of GitLab that
the CI and Discussion Teams do not cover. For example:

  * User management
    * Authentication
    * Authorization
    * LDAP/SAML/SSO integration
  * Group management
  * API
  * git repository management
    * Hooks
    * Git Annex
    * LFS
    * Housekeeping (e.g. git gc)
    * Mirroring
    * Import/export
    * Protected Branches
    * File locking
    * Commit history
  * Service Integrations
    * JIRA
    * Elasticsearch
    * Mattermost, Slack
    * etc.
  * Analytics
    * Commit history graphs
    * Cycle analytics
  * Wiki

### Mapping to Direction Issues
{: #mapping-to-direction-issues}

There is a rough mapping of [Direction Issues](https://about.gitlab.com/direction/) to different backend teams. Note
that the following is meant as a guideline, not as a hard-and-fast rule, as there
were invariably be instances where it may be ambiguous or
multiple teams may be involved in each area:

1. Idea (Platform)
2. Issue (Discussion)
3. Plan (Discussion)
4. Code (Platform)
5. Commit (Platform)
6. Test (CI)
7. Review (Discussion)
8. Staging (CI)
9. Production (CI)
10. Feedback (Platform)
