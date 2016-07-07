---
layout: markdown_page
title: "Demo: Idea to Production"
---

This demonstration is designed to highlight GitLab’s integrated set of tools for the software development lifecycle, from idea to production, including continuous integration Pipelines, continuous deployment Environments, and Container Registry. It takes about 8 minutes and be done on a single-tenant server, or GitLab.com. It happens to use Ruby/Sinatra and Docker Cloud.

A [pre-recorded version](https://youtu.be/tgcYfIy3B0Q) is available on YouTube.

<iframe width="646" height="408" src="https://www.youtube.com/embed/tgcYfIy3B0Q" frameborder="0" allowfullscreen></iframe>

----

## Sections
{:.no_toc}

- TOC
{:toc}

----

## Prerequisites
{:.no_toc}
- Access to a GitLab instance
- Ability to create a project or create issues/MRs on the [example project]( https://gitlab.com/gitlab-examples/docker-cloud)
- If Internet access is available, start at this URL while logged in: [https://gitlab.com/gitlab-examples/docker-cloud](https://gitlab.com/gitlab-examples/docker-cloud)

## Idea
{:.no_toc}

1. Have issue
2. Have MR
3. Edit inline
4. check into version control (git push)
5. Docker image (alpine linux)
6. CI creates a container and runs tests
7. CD deploys to staging
8. Review in environments
9. Review image in container registry
10. Review the build
11. Show link between merge, MR, and issue
12. Deploy to production (tagged deploy since manual deploys won’t be in by Tuesday)
13. Review container registry `:latest` tag updated
14. Revert production deploy with rollback button (Don’t actually revert because of bug)

## Links
{:.no_toc}

Project: [https://gitlab.com/gitlab-examples/docker-cloud](https://gitlab.com/gitlab-examples/docker-cloud)

Example issue: [https://gitlab.com/gitlab-examples/docker-cloud/issues/1](https://gitlab.com/gitlab-examples/docker-cloud/issues/1)  
Example merge request: [https://gitlab.com/gitlab-examples/docker-cloud/merge_requests/1](https://gitlab.com/gitlab-examples/docker-cloud/merge_requests/1)

Production environment: [http://docker-cloud.gitlap.com/](http://docker-cloud.gitlap.com/)  

Staging environment: [http://staging.docker-cloud.gitlap.com/](http://staging.docker-cloud.gitlap.com/)

## Demo: Idea to Production
{:.no_toc}

### Per-Demo Setup
{:.no_toc}

1. Pre-open project: [project](https://gitlab.com/gitlab-examples/docker-cloud)

2. Create issue using [this template](https://gitlab.com/gitlab-examples/docker-cloud/issues/new?issue%5Btitle%5D=Change%20page%20heading&issue%5Bdescription%5D=Update%20the%20page%20heading%20with%20something%20more%20meaningful.%0A%0ASource:%20http://docker-cloud.gitlap.com/)

3. Create merge request

  1. Click New Branch
  1. Navigate to views/index.erb
  1. Edit
  1. Change line 48 to something new like "Welcome"
  1. Commit change
  1. Create merge request
  1. Submit merge request

### Per-Demo Cleanup
{:.no_toc}

1. Edit [https://gitlab.com/gitlab-examples/docker-cloud/edit/master/views/index.erb](https://gitlab.com/gitlab-examples/docker-cloud/edit/master/views/index.erb) to reset heading (Line 48) to "TITLE"

### Demo Script
{:.no_toc}

Today I’d like to demo some of the power of GitLab’s integrated set of tools for the software development lifecycle, helping you get from idea to production as quickly as possible. We will start with a simple project and will show you the power of built-in continuous integration, built-in container registry, and built-in continuous deployment.

#### Project, Issue Tracker, and Merge Request

[Here’s a simple Ruby application](https://gitlab.com/gitlab-examples/docker-cloud) based on the Sinatra framework. If we go to the [production site](https://docker-cloud.gitlap.com/), we can see that it just display a single page.

Now, as a developer, I’ll look at the project’s [Issue tracker](https://gitlab.com/gitlab-examples/docker-cloud/issues) to see what I need to work on. I see there’s an issue here, let’s click on it.

It’s asking to change some text; seems pretty straightforward. And look at that, there’s a proposed merge request already. Let’s take a look at that. Here we can see the exact code that has changed and discuss it. But I don’t just want to trust reading the code, I want to see it live. Let’s go back to the project and we see a link to the [staging server](https://staging.docker-cloud.gitlap.com/) where this merge request has already been deployed.

#### Online Edits

Now this is great, I can see the change running live, but I realize I’m not really happy with that. Let’s make another change.

* From merge request, view Changes, then press Edit

* Change line 48 to "Welcome (insert name or person or company)" (Important, change line 48, not line 4)

* Commit changes

Now that we’ve made a change, it kicks off a bunch of automated processes to build, test, and deploy that change. Let’s follow the progress. [Refresh until Builds tab reappears, then click on it]

#### Test Stage

The first step is to make sure all the unit tests pass on GitLab CI. [[Example](https://gitlab.com/gitlab-examples/docker-cloud/builds/2182762)]

#### Build Stage

Now that that’s finished, it goes on to build the docker image and push it up to the integrated GitLab Container Registry.

#### Container Registry

The docker build can take a while, so in the meantime, let’s take a look at the [container registry](https://gitlab.com/gitlab-examples/docker-cloud/container_registry) where you can see there’s already a bunch of images, including a couple special tags for `staging` and `production`.

#### Deploy Stage

Back to CI, if the build succeeds, we take the docker image and deploy the application using Docker Cloud. Docker Cloud is set up to grab the image directly from GitLab Container Registry and deploy it.

#### Staging

Anyone reviewing the code can now go to the [staging environment](https://staging.docker-cloud.gitlap.com/) and see those changes live.

#### Pipelines

We can also go to the [Pipelines tab](https://gitlab.com/gitlab-examples/docker-cloud/pipelines) and see the history of CI build pipelines, and if there are any failures, it’ll quickly show you the stage where any builds fail.

#### Environments

And on the [Environments tab](https://gitlab.com/gitlab-examples/docker-cloud/environments), you can see what’s currently running in staging and production. This clearly shows that while my new changes have made it to staging, they haven’t made it to production yet.

#### Ship to production

Since we’re happy with the changes, let’s ship them to production! Going back to the [merge request](https://gitlab.com/gitlab-examples/docker-cloud/merge_requests), we’ll click the Accept Merge Request button to merge the changes into the master branch, which is configured to automatically deploy the application to production. Back on the [Pipelines tab](https://gitlab.com/gitlab-examples/docker-cloud/pipelines), we see that we’re re-running CI on `master` to make sure the tests still pass after the merge.

#### Environments - Deployment history

While we’re waiting, let’s go back to [Environments](https://gitlab.com/gitlab-examples/docker-cloud/environments). Clicking through on `production`, we see a history of everything that has been deployed to production. This is great to see what exactly has been deployed, and also exactly when changes were deployed. There’s also an easy way to rollback to one of the previous deploys. That can be a life-saver in an emergency so you don’t have to wait to write a hotfix, wait for it to be tested again, etc.

Our fix should be pretty much deployed to production by now. Let’s go back to [Pipelines](https://gitlab.com/gitlab-examples/docker-cloud/pipelines); yep, it’s been deployed. Let’s check the [environment](https://gitlab.com/gitlab-examples/docker-cloud/environments); yep, deployed about a minute ago.

#### Production and Container Registry

Now that everything is updated and our fix is deployed, we can now go to our [website](https://docker-cloud.gitlap.com/) and verify that the fix is indeed deployed. If we want, we can also go to the [Container Registry](https://gitlab.com/gitlab-examples/docker-cloud/container_registry) to see that the production image has been updated.
