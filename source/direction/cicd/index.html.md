---
layout: markdown_page
title: "GitLab CI/CD Vision"
---

## Preamble

Many of the examples describe development of an n-tier web app, but could equally be applied to an iOS app, Ruby gem, static website, or other type of project.

## Scope

[GitLab's vision](/direction/#scope) covers the entire flow from idea to production. Many of these pieces will be provided directly by GitLab, others will be provided by bundling third-party solutions. [We don't want to own or manage the production infrastructure](https://about.gitlab.com/direction/#outside-our-scope), but we do want to help developers coordinate getting their code into production; providing convenience and confidence to the developer in an integrated way.

![](handbook/sales/lifecycle.png)

The CI/CD vision focuses on steps 6 through 9: Test (CI), part of Review (MR), Staging (CD), and part of Production (Chatops). When viewed through the CI/CD lens, we can group the scope into CI, CD, and things that are currently beyond any definition of CD.

![](/images/direction/cicd/revised-gitlab-ci-scope.svg)

One obvious question is, what's the difference between Deploy and Deliver? I'm a big believer in decoupling deployment of code from delivery of a feature, mostly using feature flags. Continuous integration helps improve the speed of development, but feature flags takes it to another level, giving you the confidence to integrate code even more often while providing a gradual and granular method for delivery.

## Pipelines

There are three types of pipelines we care about that often use the single shorthand of "pipeline". We often talk about them as if each one is "the" pipeline, but really, they're just pieces of a single, comprehensive pipeline.

![](/images/direction/cicd/types-of-pipelines.svg)

1. **CI Pipeline**: Build and test stages defined in `.gitlab-ci.yml`
2. **Deploy Pipeline**: Deploy stage(s) defined in `.gitlab-ci.yml` The flow of deploying code to servers through various stages: e.g. development to staging to production
3. **Project Pipeline**: Cross-project CI dependencies, particularly for micro-services, but also for complicated build dependencies: e.g. api -> front-end, ce/ee -> omnibus.

Development workflows to accommodate:

1. **Branch Flow** (e.g. different branch for dev, qa, staging, production)
2. **Trunk-based Flow** (e.g. feature branches and single master branch, possibly with tags for releases)
3. **Fork-based Flow** (e.g. merge requests come from forks)

Example flow:

![](/images/direction/cicd/pipelines-goal.svg)

### Issues to support pipelines overall

1. [CI pipeline for a single commit, single project (i.e. visualize build and test pipeline)](https://gitlab.com/gitlab-org/gitlab-ce/issues/3743) **DONE**
1. [Run CI/CD on Merge Requests, not just branches](https://gitlab.com/gitlab-org/gitlab-ce/issues/15310), especially for fork-based flows
2. Deploy pipelines
    1. [Manual steps (e.g. deploy same SHA from staging to production)](https://gitlab.com/gitlab-org/gitlab-ce/issues/17010) **DONE**
    2. Cross-commit (e.g. before and after a merge)
    3. [Link between related commits, merge commits, and tags](https://gitlab.com/gitlab-org/gitlab-ce/issues/17013)
    4. [Show status of merge request beyond merge.](https://gitlab.com/gitlab-org/gitlab-ce/issues/19992) (e.g. add staging and production deploys to MR activity stream)
3. [Multi-project pipelines](https://gitlab.com/gitlab-org/gitlab-ee/issues/933)
  1. [First-class triggers](https://gitlab.com/gitlab-org/gitlab-ce/issues/16556)
  2. [Cross-project dependencies](https://gitlab.com/gitlab-org/gitlab-ce/issues/17069)
  3. [Cross-project artifacts](https://gitlab.com/gitlab-org/gitlab-ce/issues/14728)
  4. [Link between project pipeline views](https://gitlab.com/gitlab-org/gitlab-ce/issues/22550)
  5. [Consolidated view of entire pipeline across projects](https://gitlab.com/gitlab-org/gitlab-ce/issues/22558)
  6. [Use Docker image registry and Docker Compose to run cross-project integration tests within single project's pipeline](https://gitlab.com/gitlab-org/gitlab-ce/issues/22559)

## Stages

### Build

GitLab CI provides an explicit `build` stage already and the concept of build artifacts. As we expand to a complete CD solution, we might need to separate out build artifacts from test artifacts. For example, you might want your test runner to create a JUnit-style output file which is available for external consumption, but not included in the build image sent to production. Creation of an explicit build aligns well with Docker where the result of the build stage is a Docker image which is stored in a registry and later pulled for testing and deployment.

Builds as first-class citizen (aka build artifacts):

1. Build as separate entity from artifacts
1. Build history
1. Identify docker image as build for specific pipeline
2. [Deploy specific build to specific environment](https://gitlab.com/gitlab-org/gitlab-ce/issues/17010) **DONE**
3. Rollback to previous build **DONE**
4. [Docker images (storage, download, external usage, deployment, use in cross-project testing)](https://gitlab.com/gitlab-org/gitlab-ce/issues/3299) **DONE**

### Test

1. [Integration with third-party services like CodeClimate](https://gitlab.com/gitlab-org/gitlab-ce/issues/4044)
2. [Report more than just pass/fail, report improving, degrading, above/below threshold of change](https://gitlab.com/gitlab-org/gitlab-ce/issues/14178)
3. [Detect unnecessary builds/tests and skip them (e.g. merge of a MR off master/head where no files have changed)](https://gitlab.com/gitlab-org/gitlab-ce/issues/8998)
4. [Auto-parallelize tests, splitting across files or even individual tests](https://gitlab.com/gitlab-org/gitlab-ce/issues/3819)
5. [Load-balance tests so that each run will take roughly equal time, resulting in shortest wall-clock time](https://gitlab.com/gitlab-org/gitlab-ce/issues/13412)
6. [Provides examples and/or wizard to get started](https://gitlab.com/gitlab-org/gitlab-ce/issues/14266)
7. [Process JUnit-style output](https://gitlab.com/gitlab-org/gitlab-ce/issues/17081)

### Deploy

A key part of CD is being able to deploy. We currently have this ability via the `dpl` gem and the `deploy` stage in `.gitlab-ci.yml`. We need to go further.

1. [Compute Platform config (e.g. add DO or AWS creds to project/group)](https://gitlab.com/gitlab-org/gitlab-ce/issues/14812)
2. Other services (e.g. TestFlight, Apple)
3. [Deploys as first-class entry](https://gitlab.com/gitlab-org/gitlab-ce/issues/3286)
    1. New command rather than `dpl` gem
    2. Deploy history view **DONE**
    3. Rollback to previous deploy **DONE**
4. [Environments as first-class entry](https://gitlab.com/gitlab-org/gitlab-ce/issues/17009) **DONE**
    1. List of environments **DONE**
    2. Current state and history of environments **DONE**
5. Releases as first-class entry?
    1. Release = build + config, so this implies we'd manage config
6. Deploy/Promote without rebuilding **DONE**
7. [Review Apps (e.g. create ephemeral apps on compute platform for each merge request)](https://gitlab.com/gitlab-org/gitlab-ce/issues/4198)
8. Support multiple rollout strategies
    1. Incremental deploys (make one, break one)
    2. Canary deploys (deploy to small % of production servers)
    3. Blue/green deploys (deploy to alternating servers, switch routing)
    4. Traffic vectoring (route % of production traffic to server running new release)
9. [Runner plugins for extensible deploy syntax in `.gitlab-ci.yml`](https://gitlab.com/gitlab-runner-plugins-proof-of-concept/docker-plugin-example)

### Deliver

Developer tools have an opportunity not only to provide great functionality, but to promote best practices. One such best practice is to put new features through ever-increasing exposure.

[Feature flags](http://martinfowler.com/bliki/FeatureToggle.html) allow developers to decouple deployment from delivery. Code can be put into production while the feature is still turned off. Features can then be rolled out to internal users, beta users, a percentage of production users, and then to everyone in ever-increases spheres. Not only does this help facilitate healthy real-world testing, it helps stay true to the premise of continuous integration which is that everything is checked into `master` often and deployed. This reduces risk.

Developers can do this today themselves without our help. But let's not just support this flow, but encourage it, and add value to it. I imagine the Features list to not just show me an on/off for each feature, but which stage that feature is in. e.g. off/alpha/beta/ga. And when moving a feature from one stage to another, I imagine something that *feels* like I’m moving it to the next stage. e.g. Showing a grid of groups that I can enable the feature for, with the groups sorted by stage (or size as a proxy).

I’d like to visually see, at a glance, which features are in private beta, for example. If a product manager tries to turn a feature on for GA, they’ll be non-invasively reminded that they should consider going through private beta first. Heck, even the choice of rollout percentages could be handled this way. e.g. 1%, 5%, 25%, 100% show up as selectable items in columns, giving a reminder of the company policy on rollouts.

If done right, it’ll encourage a good rollout process, and make it trivially easy for users to follow the flow, every time.

My ideal rollout is something like:

1. Dev team that created it ->  
2. internal alpha (all employees minus those giving customer-facing demos) ->  
3. select beta (~200 people that signed up for this specific feature) ->  
4. private beta (~1000 people that signed up for general beta) ->  
5. public beta ->  
6. 10% rollout ->
7. GA

![](/images/direction/cicd/user-flags.png)

1. Integrate Feature Flags in an extensible way (so people can implement it however they want, but use a consistent interface for administration)
2. Create, view, and toggle feature flags in each environment
3. Display diffs between environments
4. Tie feature flags related to merge requests
5. On merge request view, show events for toggles of related feature flags in each environment

### Monitor

1. Integrate with third-party services like Datadog for monitoring impact on system performance impact (e.g. CPU, memory)
2. Integrate with third-party services like Mixpanel for monitoring business impact (e.g. signups, conversion, revenue)
3. Watch metrics before and after a deploy to determine if a deploy causes system problems or negatively affects critical business metrics (e.g. breaks signup)
4. Automatically roll back changes that degrade too much
5. If following GitHub flow, block merges that degrade too much
6. Watch metrics for expected positive results
7. Tie metrics back to causal changes (e.g. commits and merge requests included in deploy)
8. Display metric impact on merge requests (even after merge) and feature flags

## Misc

### Distributed Systems

From [12 Factor](http://12factor.net/codebase), if there are multiple codebases, it’s not an app – it’s a distributed system. We should support distributed systems, especially mindful of the rising trend in microservices and Docker adoption. We've already covered multi-project pipelines above, but we can go further with system-level views and coordinated deploys.

1. New view of related apps in a distributed system => zoom out in the project pipeline
2. Block deploys of one component if it depends on a version of another component that has not been deployed yet to the same environment e.g.:
    1. Annotate relationship between merge requests so that we know if one MR blocks another.
    2. Track deploys of MRs to each environment so we know, for example, when a given MR is in production.
    3. We can block merges of one MR until upstream changes are merged.
    4. We can block deploys of one MR until upstream changes are deployed (to the same environment).
    5. This can work across projects so individual services get deployed in the right order.
3. Coordinated deploy of all related apps to a new environment. e.g. autogenerate a "cloudformation" because we know how the projects relate to each other. This could, for example, be used by GitHost to spin up a new single-tenant instances of GitLab for a new customer.

## Example

A slightly more complete rendering of an example pipeline:

![](/images/direction/cicd/cd.svg)
