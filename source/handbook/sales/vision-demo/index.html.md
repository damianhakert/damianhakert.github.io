---
layout: markdown_page
title: "Vision Demo: Idea to Production"
---

This demonstration is designed to highlight GitLab’s open set of tools for the software development lifecycle, from idea to production, through chat, issues, planning, merge request, CI, and CD.

![](handbook/sales/lifecycle.png)

We're going to start from scratch, creating a brand new GitLab installation.

An earlier, [pre-recorded version](https://youtu.be/7QXhH4WGLfc) is available on YouTube.

<iframe width="640" height="389" src="https://www.youtube.com/embed/7QXhH4WGLfc" frameborder="0" allowfullscreen></iframe>

----

## Prerequisites
{:.no_toc}

- Working OpenShift setup

## Links
{:.no_toc}

- [Original Slideware](https://docs.google.com/presentation/d/1D_L7s5xqDLw82B-drpM0av1-1m92f_ibIWruTmar-IQ/edit)
- [Meta Issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/19793)

## Vision Demo: Idea to Production
{:.no_toc}

**Main items**

- TOC
{:toc}

## Pre-demo Setup

> * Login to [OpenShift](https://openshift.tanukionline.com:8443/console/)
>   * URL: https://openshift.tanukionline.com:8443/console/
>   * Username: gitlab-user
>   * Password: <from 1password>
> * Delete all Openshift projects using OpenShift web interface  
> * Disable desktop notifications (on a Mac, top-right corner, option click)
> * Open up new browser window so the audience doesn’t see all your other open tabs.
> * Open [flowchart](https://gitlab-org.gitlab.io/gitlab-design/progress/dimitrie/flowchartideatoprod/flowchart-html-previews/) as opening window during intro
> * Consider just sharing web browser window so the audience isn’t distracted by notes or other windows.

## Intro

Today I'd like to demo some of the power of GitLab’s open set of tools
for the software development lifecycle, helping you get from idea to production
as quickly as possible.

## Install GitLab itself

The first step is to install GitLab itself. Today I'm going to use RedHat's Openshift, which is a Kubernetes platform that you can host yourself or use as a SaaS. We’re going to install everything from scratch and we’ll start by opening the Openshift web UI. Here we’ll create a new project named `gitlab`. And then import an OpenShift template for a complete GitLab installation. We have to set a couple hostnames.

> * Open Openshift web UI and log in to [Openshift Origin](https://openshift.tanukionline.com:8443).
> * Click New Project, name it `gitlab`, submit it
> * Click on Import YAML/JSON
> * Open in a browser: http://bit.do/openshiftgitlab or http://bit.ly/2e953Pn
> * Copy content of idea-2-prod-template.json
> * Click Create, leave `Process the template` selected, click Continue
>   * GitLab instance hostname to `gitlab.tanukionline.com`  
>   * Mattermost instance hostname to `mattermost.tanukionline.com`  
> * Press button
> * Continue to overview

Boom, we’ve got a shiny new GitLab installation with several containers running the GitLab Rails app, Mattermost for Chat, Postgres, Redis, and GitLab Runner for CI and CD. This is everything you need to run on Kubernetes. It will take a few minutes for GitLab Rails to configure itself so it’s a good time to describe what we’re covering today.

> * Open up [Flowchart](https://gitlab-org.gitlab.io/gitlab-design/progress/dimitrie/flowchartideatoprod/flowchart-html-previews/) and briefly walk through each step.

In the rest of the demo, I’ll take you through everything you need to take ideas to production, including chat with Mattermost, issues and issue tracking, planning with issue boards, coding with terminal access, committing with git version control and merge requests for code review, testing with continuous integration, getting peer reviews with live review apps, continuous deployment to staging, and closing the loop by deploying to production directly from chat, and lastly cycle analytics to measure how fast you’re going from idea to production. With GitLab, everything is integrated out of the box.

> * Wait for gitlab pod to go from light blue to full blue

## Setup a user and project

Now that we've got GitLab running, let's open it up. We will start by creating a group for our company; let’s name it `tanuki`. Then let’s create a new project to start off with. Let's call it `www` and make it public.

> * Go to top right for the url for [gitlab](http://gitlab.tanukionline.com)
> * Change password for root user
> * Login
> * Create a group called `tanuki` and make it public
> * Create a project called `www` under the `tanuki` group and make it public

### Configure a project

Great, we have a new project, now let’s create a README. We’ll use the built-in GitLab editor to make the changes.

> * Click add readme (changing that to + in https://gitlab.com/gitlab-org/gitlab-ce/issues/23310)
> * Type `## Hello World`

We’re going to keep this app simple and just make a static `index.html`.

> * Click on `www` or Repository and then `+`, New file
> * Name the file `index.html`
> * Type `Hello World` as the contents
> * Click Submit

Of course that’s just a static file and not an application yet, but since we’re using OpenShift it’s really easy to use Docker, and GitLab offers a set of `Dockerfile` templates that we can use. Let’s add a new file called Dockerfile and choose the template for Apache’s httpd server.

> * Click back to the files tab
> * Add a file + icon, New file
> * Filename to `Dockerfile`
> * template HTTPd
> * Commit changes on master

### Prepare OpenShift

The next step is to configure CI, but first we have to set up some project variables that CI needs in order to create deployments in our OpenShift environment. We can find our Access Token in Openshift from the help for Command Line Tools and clicking on show token. We will now copy this token and go back to GitLab where we will use this token as a project variable which will be automatically passed to our CI/CD pipeline jobs.

> * Go to [Openshift](https://openshift.tanukionline.com:8443/console/command-line) or `Help > Command Line Tools > .. click to show token…`
> * Copy token

Let’s click on `Settings > Variables` and add a new variable named `OPENSHIFT_TOKEN` and paste the previously copied token. Let’s also set up `OPENSHIFT_SERVER` and `OPENSHIFT_DOMAIN`.

> * Go to GitLab
> * Settings > Variables
> * Key: OPENSHIFT_TOKEN
> * Value: paste token
> * Add new variable
> * Repeat for:
>   * OPENSHIFT_SERVER: https://openshift.tanukionline.com:8443
>   * OPENSHIFT_DOMAIN: tanukionline.com

### Use GitLab CI

Now we’re ready to configure GitLab CI. Luckily GitLab also provides a bunch of templates for CI to get us started. Back to the project, let’s click `Setup CI` and choose the OpenShift template. Because we set these variables in the project settings, we can just delete them from the template.

> * Go to Project, Click Setup CI
> * Choose OpenShift template
> * Delete `variables` section
> * Commit

Great, that completes our setup.

## Idea (Chat)

Let’s go to our Mattermost client. We can get there from our OpenShift dashboard. Mattermost is an open source Slack alternative that comes bundled with GitLab. Because of the tight integration, I can use GitLab single-sign-on and it’ll know who I am.

> * Go to OpenShift and select GitLab project https://openshift.tanukionline.com:8443/console/project/gitlab/overview
> * Click [Mattermost URL](http://mattermost.tanukionline.com) (second application, top right)
> * Sign up with GitLab
> * Authorize

Let’s create a new team: `tanuki`. And create a channel for our project: `#www`.

> * Create a new team: tanuki. Press Next. Press Finish.
> * Create a new channel by clicking the + icon in the sidebar: www. Press 'Create new channel'

This channel is where the team would discuss the project and come up with great ideas for improving it.

> * Type: Let's improve the homepage!

When a great idea does come along, it would be such a waste to let it die in a chat room. Let's act on it, and turn it into a new issue, right from the chat interface.

> ```
> /issue create Make homepage more descriptive
> SHIFT ENTER  
> Currently it is just Hello World.
> ```

## Issue (Tracker)

Now we can click through to the new issue. Great, we've got our first issue on our new project.

> * Click on the link that starts with #1

## Plan (Board)

Inspiration is perishable, so let's pick this one up right away. As a team lead or manager, I'd go to the Issue Board.

> * Go to Issues, Issue Board

Since this is our first time, we have to add a couple columns here to match our workflow.
I'll just add the default "To Do" and "Doing" columns.

> * Add default lists

There. Now we can just drag the new issue from the backlog into the To Do column to indicate that it should be worked on this sprint.

I’ll switch hats now, and as a developer, let’s go ahead and move it to Doing, because we want to resolve this issue right now.

> * Drag issue from To Do to Doing

## Code (Terminal)

Now let’s get coding! We could of course code on our local laptops, but then we’d have to waste a bunch of time setting it up properly before we could even start. Since we’ve set up this project to deploy automatically to a staging environment, GitLab provides terminal access to that environment. This is especially useful for debugging, but we can use it here for testing out small tweaks. By clicking the terminal button we get a command prompt in the same container as our application.

> * Go to Pipelines
> * Go to Environments
> * Click Terminal button (on the right)

Let's edit the index.html file.

> * `vi htdocs/index.html`  
> * i (to insert)  
> * Update text to `Updated Hello World`  
> * esc (to go back to normal mode)  
> * ZZ (to save and close)

Now we’ve saved the changes, we can view the web page live to see how we like them.

> * Click external URL link on top right (3rd from right)

## Commit (Repo)

That looks pretty good for now. But we didn't commit anything so this will be lost the next time we release. So let’s move on to committing changes into source control by using the web editor. Let’s go to the repository and find the index file. I’m just going to edit it with a header.

> * Go to Repository
> * Go to index.html
> * Click Edit button
> * Replace `<h1>Idea to Production demo</h1>`

Now instead of committing directly to `master`, I’m going to create a new branch, named with the issue number. And it gives me an option to create a Merge Request for us, how nice of it. Let's go ahead and do that.

> * Set target branch to `1-homepage` (no longer than 24 characters)
> * Leave start a new merge request checked
> * Commit

We’re now asked to create the merge request. GitLab knows by the branch name that it closes issue #1 and adds that message automatically. Let's hit submit.

> * Submit new merge request
> * If popup asks to show notifications, click Allow.

## Test (CI)

As soon as the Merge Request is created, we see it kicking off the CI/CD Pipeline that will test our contributed code.

> * Click on Pipelines
> * Click on first pipeline

Here we see a simple pipeline that contains 3 stages for build, test, and staging.

### Test Stage

There are 2 parallel tests. Let's click through one of them and see the build log.

> * Click on `test1`

### OpenShift progress

While it’s running, we can head back to OpenShift to see that our GitLab Runner is working directly with Kubernetes to spawn new containers for each job.

> * Go to OpenShift, GitLab project  
> * Show runner pods

## Review (MR)

Now that we know tests have passed, we could ask for another developer on the team to review our merge request. They can see the exact code that has changed, comment on it, and we'd see a thread of the discussion, as well as get an email notification, of course.

> * Show Changes
> * Click on a change line to show ability to comment

### Review apps

But I don’t just want to trust reading the code, I want to see it live in a production-like environment. When a new change is pushed to our branch this change will automatically be deployed to our OpenShift cluster in a special app called a Review App, created just for this branch. Let’s see our Review job that is executed as part of our Pipeline. If it’s still running, we can follow its progress.

> * Show `Deployed`
> * Click link to show deployment

Now that it’s finished, if we go back to the merge request, we see a new status telling us that it’s been deployed, and a convenient link to the actual app. Let’s take a look.

> * Merge Requests  
> * First merge request  
> * Click on external link to review app

### Merge to `master`

Looks great! Since we’re happy with the changes, let’s click the Accept Merge Request button to merge the changes into the `master` branch.

> * Click Accept Merge Request (no need to click remove source branch)

## Staging (CD)

Taking a look at the Pipelines tab, we see that we’re re-running CI on `master` to make sure the tests still pass after the merge. We actually see the history of all CI/CD pipeline runs, and if there are any failures, it’ll quickly show you the stage where any runs fail.

> * Go to Pipelines

Going back to the merge request, we now see another status showing that this code has indeed been deployed to staging. Clicking through, we can see our changes running live on our staging server.

> * Click on first pipeline from top (staging)
> * Click on `!1` in MR description
> * Click on Staging URL to show that changes got deployed

## Production (Chatops)

I can also see the environments in the Environments page. So far we’ve got a review app and a staging app. Let’s ship these changes to production! On the staging line, we see a manual actions where can deploy to Production. We could just click through there and kick off the deploy, but there's this thing called ChatOps that encourages us to do these kinds of things in a common chat room, so everyone can see important changes. So let's go back to our chat room, and tell GitLab to deploy whatever’s on staging to production.

> * Go to Mattermost  
> * `/deploy staging to production`
> * Click on link

We see it's kicked off another deploy job.

### Environments with deployment history

Let’s go back to Environments. Ok great, we now see the production environment shows up, and we see the deploy happened less than a minute ago.

> * Go to Environments

Now let's head over to our production site. There we go! We've got our new text in it; all the way from idea to production!

> * Click production link

## Feedback (Cycle Analytics)

One final thing. Since the cycle time of getting from idea to production is so important, GitLab has built a dashboard that helps you track that. Clicking on Cycle Analytics.

> * Click Cycle Analytics

Here we can see some metrics on the overall health of our project, and then a breakdown of average times spent in each stage on the way from idea to production. So far, we're doing amazingly well, with only 12 minutes for the complete release cycle.

This is great for team managers and high level managers looking to better understand their company's release cycle time, which is key to staying competitive and responding to customers.

## Conclusion

> * Back to [flowchart](https://gitlab-org.gitlab.io/gitlab-design/progress/dimitrie/flowchartideatoprod/flowchart-html-previews/)

So that's it. We've taken you on a little journey. In less than 20 minutes, we installed GitLab from scratch, taken an idea through issue tracking, planning with an issue board, coding in the terminal, committing to the repo, testing with continuous integration, reviewing with a merge request and a review app, deploying to staging with continuous deployment, deploying to production with ChatOps, and closing the feedback loop with cycle analytics dashboard. This all on top of a container scheduler that allows GitLab, the GitLab Runners for CI, and the applications we deploy to scale. Welcome to Gitlab.
