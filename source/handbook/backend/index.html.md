---
layout: markdown_page
title: "Backend Group"
---

## Teams

There are a number of teams within the Backend group:

* [CI](/handbook/backend#ci)
* [Discussion](/handbook/backend#discussion)
* [Platform](/handbook/backend#platform)
* [Prometheus](/handbook/backend#prometheus)

Each team has a different focus on what issues to work on for each
release. The following information is not meant to be a set of hard-and-fast
rules, but as a guideline as to what team decides can best improve certain
areas of GitLab.

APIs should be shared responsibility between all teams within the
Backend group.

There is a backend group call every Tuesday, before the team call. You should
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

### Prometheus Team
{: #prometheus}

[Prometheus](https://prometheus.io/) shipped with GitLab 8.16. The
Prometheus Team is tasked with:

* Delvering out-of-the-box monitoring and alerting features for applications, including GitLab
* Improving [Prometheus open source project](https://github.com/prometheus) to support that goal
* Helping other groups, such as infrastructure and UI/UX, instrument and gather data

### Mapping to Direction Issues
{: #mapping-to-direction-issues}

There is a rough mapping of [Direction Issues](https://about.gitlab.com/direction/) to different backend groups. Note
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
10. Feedback (Platform, Prometheus)
