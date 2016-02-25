---
layout: markdown_page
title: "Giving a GitLab demo"
---


Giving a GitLab demo is simple if you're familiar with GitLab. Make sure you
understand how the things you demo work, otherwise ask a colleague.

## Preparation

You should know the following things before you give the demo:

- Who will be listening in? Developers or managers makes a big difference
- Where are they coming from? Other git software or something old? Mercurial?
A competitor?
- Why are they considering GitLab?
- Is there a particular feature they're interested in?

## Structure of the demo

Each demo should roughly have the same structure. This ensures that you show
some of the most important parts of GitLab. Often people are unaware of certain
features or have misinterpreted their meaning or usage.

Therefore the basic structure is always:

1. Walkthrough of the main features of GitLab and GitLab EE
1. More in depth showing of features the customer is interested in
1. Questions and requests

### Handling Questions

I always say "Just interrupt me if you have any questions.". That works fairly
well, but it's a good idea to ask if anyone has any questions, a number of times
during the demo.

If you can explain something and / or if the question is about something that you
just showed, it's best to answer the question right away.

If the question is about a feature you still have to show, consider saying something like:
"I'll get to that feature in a bit, I'll be sure to show you then". This ensures
the right context is given to the feature.

## Demo

You should walk through the things below. Remember that the people listening usually
don't know _anything_ about GitLab. Use a project on a server with LDAP setup,
this way you can show the LDAP integration. It's also nice to show one of our
repositories (GitLab CE for instance), as they have a lot of activity.

1. Home page
    * Activity view
    * Starred activity view
1. Create a new project
    * Explain organization of projects and groups
    * Explain visibility levels. No one else has 'internal' projects'
1. Create a new file in the UI editor with markdown, in your new project
1. Activity view of the project

#### Project

At this point, you want to go through the main parts of a project.
If people are already familiar with similar software, don't spend too much
time on this, as competitors offer pretty much the same functionality.

1. File browser
1. Commit view
    * Show the branches tab with the protected branches and note that you'll get back to this later
1. Show a single commit
    * Add a line comment to the difference and reference someone there
    * Explain that you can reference anyone / anything, from anywhere in GitLab
1. Network graph
    * To show quickly.
1. Graphs
    * Also quickly.
1. Issues
    * Explain what issues are, including integration
1. Merge Requests
    * Very important! Take your time!
    * Explain GitLab CI and Jenkins integration
    * Explain integration with JIRA and Issues
1. Milestones
    * Show a milestone

#### Project Settings

1. Show members
    * Explain permissions
1. Share with group feature
1. Deploy keys
    * Quickly.
1. Web hooks
    * Quickly.
1. Git hooks
    * Explain what they are, what they do.
    * Note that we also fully support custom git hooks
1. Services
    * GitLab integrates with lots of things and new integrations can be added easily.
1. Protected branches
    * This is a really nice feature of GitLab. Explain it well and how you can use it.
1. Audit events
    * Quickly.

#### Group

Now show a group. Often you get additional questions about organization of
groups and projects in GitLab. Note that although we keep a simple hierarchy,
our _share with group_ and _LDAP Group Sync_ and the ability to assign permissions
both in group level and in project level, makes it possible to do almost any kind
of organization.

1. LDAP groups
    * Show this in detail. Explain why it's powerful.

#### Other features

Depending on time, you can show:

1. Explore view
1. Snippets
1. Admin panel