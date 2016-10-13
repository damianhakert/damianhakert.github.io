---
layout: markdown_page
title: Gogs Overview
suppress_header: true
---

# Gogs - Go Git Service
{:.no_toc}

## Index
{:.no_toc}

- TOC
{:toc}

## What is Gogs?

[Gogs](https://gogs.io/) is an open-source, lean, self-hosted Git service. It's built on Go which makes it cross-platform friendly.

## GitLab's Support of Gogs

GitLab is a strong believer in Gogs and thinks it fills an important role. We're proud to have the only full-time contributor to the project, [Kim Carlbäcker](https://twitter.com/bkcsoft), on our team.

## Shared Features

Both Gogs & GitLab share the following features and capabilities:

- Dashboard
- File browser
- Issue tracking
- Milestones and Commit keywords
- Organizational support (supporting groups)
- Webhooks

## Gogs Advantages

Gogs is a self container binary in Go.
The disadvantage is that is more time consuming to build complex features.
The advantages are that it:

1. Comes in a single binary so it is easy to install
1. Runs on Windows and Mac in addition to Linux
1. Uses little memory, it runs fine with 512MB
1. Uses little CPU power since Go is a compiled language

## GitLab Advantages

GitLab is optimized for feature richness. Most of it is written in Ruby on Rails and it has has over [1000 non-unique dependencies](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/Gemfile). The disadvantage is that it has higher [system requirements](http://docs.gitlab.com/ce/install/requirements.html). The advantages are that it offers many more features:

### LDAP

1. **Two-Factor authentication**
2. **CAS authentication**

### Workflow

1. **LFS support** - Use GitLab to version your large files with support for Large File Storage (LFS)
2. **Webhooks at project level** - Define your project webhooks to listen to specific events like pushes, issues or merge requests on GitLab
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
