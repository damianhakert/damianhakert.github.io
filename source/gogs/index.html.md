---
layout: markdown_page
title: Gogs Overview
suppress_header: true
extra_css:
  - compared.css
---

# An Overview of Gogs - Go Git Service

## Index

- [What is Gogs?](#what-is-gogs?)
- [Features Shared with Gogs & GitLab](#features-shared-with-gogs-&-gitLab)
- [GitLab Features Currently Not Available On Gogs](#gitlab-features-currently-not-available-on-gogs)
- [Gogs Features Not Available in GitLab](#gogs-features-not-vailable-in-gitLab)

## What is Gogs?

Gogs is an open-source, lean, self-hosted Git service. It's built on Go which makes it cross-platform friendly. Installation is pretty easy with a single binary. Gogs has a low footprint and is easy on system resources (it can even run on Raspberry Pi).

## GitLab's Support of Gogs

GitLab is a strong believer in Gogs and thinks it's a great Git service for individuals. We're proud to be the only company who is fully supporting a full-time, paid contributor to the project.

## Features Shared with Gogs & GitLab

Both tools share the following features and capabilities:  

### General Features
- Dashboard
- File browser
- Issue tracking
- Milestones and Commit keywords
- Organizational support (supporting groups)
- Webhooks

## Gogs Features Not Available in GitLab:

1. **Lower CPU consumption**
2. **Lower memory consumption**
3. **Git hooks**

## GitLab Features Currently Not Available in Gogs

Although powerful and customizable, Gogs lacks the following features which are available on GitLab.

### LADP
1. **Two-Factor authentication**
2. **CAS authentication**

### Workflow
1. **LFS support** - Use GitLab to version your large files with support for Large File Storage (LFS)
2. **Webhooks at project level** - currently Gogs only offers push/branch/tag on the
project levels
3. **To-Do lists** - GitLab handles any @ mentions within issues and then populates
a to-do from those. There's a dedicated To-Do page to view all your tasks and check
them off. Gogs offers an activity board similar to the activity log on GitHub
to let you see when commits have been pushed, an issue was created or someone has
commented on an issue.

### Server Management
1. **Branded login page** - Add your brand logo and access whitelabel support on GitLab. Gogs offers complete control over the template as you wish (customization required)
2. **Project importing** - Easily import your projects from popular git platforms like:  GitHub, BitBucket and more
3. **Search** - Search your projects on all their assets: issues, merge requests, milestones and projects

### CI
1. Natively integrated CI (Pipelines)
2. **Automatic merge** - Automatically merge on build success


### General
1. **Authorization granularity** - Limit specific users' access to the issue tracker or wiki. Control who can contribute to the project
2. **Work-in-Progress protection** - Mark a branch/MR as WIP
3. **Hosted solution** - Host your GitLab instance with GitLab
4. **High Availability** - Setup your GitLab instance for high availability
