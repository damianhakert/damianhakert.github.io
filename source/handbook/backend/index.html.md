---
layout: markdown_page
title: "Backend Team"
---

## Teams

There are three teams within the Backend group:

* [CI](/handbook/backend/ci.html)
* [Discussion](/handbook/backend/discussion.html)
* [Platform](/handbook/backend/platform.html)

All three teams work in concert, but each has a different focus on what
issues to work on for each release. The following information is not meant to
be a set of hard-and-fast rules, but as a guideline as to what team decides can
best improve certain areas of GitLab.

The CI Team is focused on all the functionality with respect to
Continuous Integration and Deployments. For example:

  * CI Runner
  * Container Registry
  * Pipelines
  * Deployments
  * Environments

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

### Backend Mapping to [Direction Issues](https://about.gitlab.com/direction/)

There is a rough mapping of Direction Issues to different backend teams. Note
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
