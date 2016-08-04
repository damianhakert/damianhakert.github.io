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
- [GitLab's Support of Gogs](#gitlab's-support-of-gogs)
- [Features Shared with Gogs & GitLab](#features-shared-with-gogs-&-gitlab)
- [Feature Overview](#feature-overview)

## What is Gogs?

Gogs is an open-source, lean, self-hosted Git service. It's built on Go which makes it cross-platform friendly. Installation is pretty easy with a single binary. Gogs has a low footprint and is easy on system resources.

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

## Feature Overview
GitLab is optimized for feature richness. Most of it is written in Ruby on Rails and it has has over [1000 non-unique dependencies](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/Gemfile). 
The disadvantage is the it has higher [system requirements](http://docs.gitlab.com/ce/install/requirements.html). The advantage is that it offers many more features which are listed below. 
Here are some of those features:

### LDAP
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
