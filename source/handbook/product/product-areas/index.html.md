---
layout: markdown_page
title: "Product Areas"
---

GitLab is one integrated product. But to facilitate communication and collaboration, we loosely categorize GitLab into these areas.

## GitLab Discussion (GD)

### Features

GitLab Discussion (GD)'s _main areas_ are:
* Code review, merge requests, and approvals
* Groups and projects
* Snippets and wikis
* Issues
* Labels and milestones
* Issue boards

GD is _less concerned_ about:
* CI/CD
* Cycle analytics
* GitLab integration (third-party services)

### Current product development focus
These are the 4 major areas of current focus for product development in GD. 

#### _Team collaboration with issue boards_
There is a huge opportunity for GitLab to **move into and disrupt** the space of entrenched competitors in the "project management" space. We have the strategic benefit of being one coherent platform, allowing typical "project management" features to seamlessly flow into the more technical software phases of work. Our focus is to leverage the concept of issue boards to solve many of these team collaboration problems.

#### _Merge request workflows_
Organizations may have very specific policies on how software is created, in the areas of code review, testing, and sign-off. In particular, merge request approvals, blocking, and associated workflows require powerful features. GitLab is lacking in these areas. In order to **compete** in this area, we are focused on enhancing merge request workflows.

#### _Issue view_
We are continually making improvements to GitLab in terms of **usability** to help people get their work done, and do it well in a collaborative team. In particular, we are focused on the issue view to establish a baseline of **user experience to achieve collaboration** in a single page, so that we can quickly get feedback from a coherent experience. This will inform our designs as we carry them over to other areas of GitLab.

#### _Code review beyond merge request workflows_
Code review happens beyond evaluating diffs inside a merge request. People want a light weight mechanism to browse through code, collaborating with other folks, without incurring the heavy burden of branches, commits, and merge requests. This is not an active area being pursued by major competitors. But it is a space of ongoing innovation. We want to take these **high risk high reward** bets, and invent some awesome new tools to delight our users.

### Prioritization
If a new issue comes in, then we should evaluate its priority according to:
1. Is the new issue a major regression or bug? Is it something that we need to ship for a customer immediately to address a major concern? If yes, prioritize it.
1. Does this new issue fit into our current product focus (for GitLab Discussion)? If yes, where does it belong in priority with our ongoing features?
1. If it doesn't fit into our product focus, but is obviously super important, let's revisit our product focus.
1. If it doesn't fit into our product focus, and it's not super important, then de-prioritize it. We will not spend resources on it now.

### Scenarios

Product Managers, Project Managers, Business Analysts, and Engineering Managers figure out what needs to be built based on investigation and analysis, which they do themselves and/or work with colleagues on. 
They translate these concepts into something one level more concrete. 

This is where GD begins.
GD provides the tools to enable these folks to document and collaborate on those concrete ideas.
These include issues, commenting, prioritization, and organization features.

UX Designers, Visual Designers, Software Engineers, Test Engineers, and Database Engineers create the product in a more tangible form.
GD allows these folks to collaborate with each other.
This creation is from ideation to shipping the product. 
Branching, merge requests, and code review are the main features supporting collaboration. 
The existing features are focused on the git system and the concept of source control.
The first wave of innovation is making these easier so that engineers don't need to be git experts and they can get a lot done in a browser context.
The next innovation is to jump out of the git paradigm and abstract away from commits and branching. 

GD allows all these folks to zoom out and look at the big picture, and zoom back in to focus in on tiny details, depending on the scenario.
We are working to strengthen this zoom in and zoom out dynamic, with milestones and boards being the early stages of this innovation.
