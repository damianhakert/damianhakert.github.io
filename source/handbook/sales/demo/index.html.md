---
layout: markdown_page
title: "Demo"
---

## Video
{:.no_toc}

<iframe width="640" height="389" src="https://www.youtube.com/embed/3A8mdJl_icM" frameborder="0" allowfullscreen></iframe>

## Overview
{:.no_toc}

This demonstration is designed to highlight GitLab’s open set of tools for the software development lifecycle, from idea to production, through chat, issues, planning, merge request, CI, and CD.

![](handbook/sales/lifecycle.png)

![](handbook/sales/steps.png)

## Links
{:.no_toc}

- [Everyone can replicate idea to production](https://gitlab.com/gitlab-org/gitlab-ce/issues/25986)
- [All open issues](https://gitlab.com/groups/gitlab-org/issues?scope=all&state=opened&utf8=%E2%9C%93&label_name%5B%5D=idea-to-production)

## Table of Contents
{:.no_toc}

- TOC
{:toc}

## Preparation

> * You need a working OpenShift Origin installation
>   * Our installation runs OpenShift Master v1.3.1 and Kubernetes Master v1.3.0+52492b4
> * Login to OpenShift
>   * URL: [https://openshift.tanukionline.com:8443/console/](https://openshift.tanukionline.com:8443/console/)
>   * Username: gitlab-user
>   * Password: <from 1password>
> * Delete previous Openshift projects using OpenShift web interface unless they have someone else their name.
> * [Reset cookie](chrome://settings/cookies) that [blocks issue board default list prompt](https://www.dropbox.com/s/knwdvnkuholo2xd/Screenshot%202016-10-14%2011.11.39.png?dl=0) by copy pasting the first url in the browser, searching for tanukionline, and deleting all those cookies. You can also go there via settings, clicking on Content settings, then All cookies and side data.
> * Disable desktop notifications (on a Mac, top-right corner, option click)
> * Open up new browser window so the audience doesn’t see all your other open tabs.
> * Consider just sharing web browser window so the audience isn’t distracted by notes or other windows.
> * Go to 'Displays' settings, Resulution: Scaled, Larger text
> * Open the [yaml template](https://gitlab.com/gitlab-org/omnibus-gitlab/raw/openshift-idea-to-production/docker/openshift/idea-2-prod-template.json) in advance.
> * Open this page on an Ipad that has screen lock disabled.

## Install GitLab itself

The first step is to install GitLab itself. Today I'm going to use RedHat's Openshift, which is a Kubernetes platform that you can host yourself or use as a SaaS. We’re going to install everything from scratch and we’ll start by opening the Openshift web UI. Here we’ll create a new project named `gitlab`.

> * Open Openshift web UI and log in to [Openshift Origin](https://openshift.tanukionline.com:8443).
> * Click New Project
> Name it `firstname-gitlab` if running multiple demos
> Create it

And then we import an OpenShift template for a complete GitLab installation. We have to set a couple hostnames.

> * Click on Import YAML/JSON
> * Open in a browser: [YAML template in Omnibus repo](https://gitlab.com/gitlab-org/omnibus-gitlab/raw/openshift-idea-to-production/docker/openshift/idea-2-prod-template.json) which is also linked from [our installation page](https://about.gitlab.com/installation/).
> * Copy content of idea-2-prod-template.json
> * Click Create, leave `Process the template` selected, click Continue
> * Press button
> * Continue to overview

Boom, we’ve got a shiny new GitLab installation with several containers. They are running the GitLab Rails app, Mattermost for Chat, Postgres, Redis, and GitLab Runner for CI and CD. This is everything you need for the application development lifecycle on Kubernetes. It will take a few minutes for GitLab Rails to configure itself so it’s a good time to describe what we’re covering today.

In the rest of the demo, I’ll take you through everything you need to have to take ideas to production, including chat with Mattermost, issues and issue tracking, planning with issue boards, coding with terminal access, committing with git version control and merge requests for code review, testing with continuous integration, getting peer reviews with live review apps, continuous delivery to staging, and closing the loop by deploying to production directly from chat, and lastly cycle analytics to measure how fast you’re going from idea to production. With GitLab, everything is integrated out of the box.

What takes 20 minutes in this demo will take days if you're not using GitLab and have to integrate different tools.
Not only is GitLab faster to set up but it is also more convenient to have everything in one interface.
Developers want to work on creating a great product, not on learning and maintaining the integrations between theirs tools.

If there is more time talk about what a review app is and what cycle analytics are.

> * Wait for gitlab pod to go from light blue to full blue
> Click the [GitLab link](http://gitlab.tanukionline.com)

## Setup a project in GitLab

### Create a user and a project

Now that we've got GitLab running, let's set up an account.

> * Change password for root user, but do *not* log in as root
> * Create new user with your name and email address

We now create a group for our company; let’s name it `tanuki`.

> * Create a group called `tanuki` and make it public

Then let’s now create a new project to start off with.

> * Create a project called `firstname-www` under the `tanuki` group and make it public

### Configure the project

Great, we have a new project let's configure it. We’ll use the built-in GitLab editor to add it.

> * Click add readme (changing that to + in TODO: [Create new arbitrary file in new project](https://gitlab.com/gitlab-org/gitlab-ce/issues/23310)) or make irrelevant with TODO: [Auto deploy](https://gitlab.com/gitlab-org/gitlab-ce/issues/23580)
> * Name the file `index.html`
> * Type `Hello World` as the contents
> * Click Submit

Of course this is just a static file and not an application yet, but since we’re using OpenShift it’s really easy to use Docker. GitLab offers a set of `Dockerfile` templates that we can use. Let’s add a new Dockerfile and choose the template for Apache’s httpd server.

> * Click back to the files tab
> * Add a file + icon, New file
> * Filename to `Dockerfile` TODO: [Make sure this dropdown looks properly positioned even though my scaled resolution is larger text](https://gitlab.com/gitlab-org/gitlab-ce/issues/23962)
> * template HTTPd TODO: [Add multiple templates, not just HTTPd](https://gitlab.com/gitlab-org/gitlab-ce/issues/23963)
> * Commit changes on master

### Add Openshift credentials to CI

We can simplify this with TODO: [use the internal routing name for kubernetes in the openshift CI template for i2p demo](https://gitlab.com/gitlab-org/gitlab-ce/issues/23445) and TODO: [having trouble auto-discovering subdomain in OpenShift for idea to production demo
](https://gitlab.com/gitlab-org/gitlab-ce/issues/23446).*

The next step is to configure CI, but first we have to set up some project variables that CI needs in order to create deployments in our OpenShift environment. We can find our Access Token in Openshift.

> * Go to [Openshift](https://openshift.tanukionline.com:8443/console/command-line) or `Help > Command Line Tools > .. click to show token…`
> * Copy token

We will now copy this token and go back to GitLab where we will use this token as a environmental variable which will be automatically passed to our CI/CD pipeline jobs.

> * Go to GitLab
> * Settings > Variables
> * Key: OPENSHIFT_TOKEN
> * Value: paste token
> * Add new variable

We also need to set our server and our domain.

> * Repeat for:
>   * Key: OPENSHIFT_SERVER
>   * Value: https://openshift.tanukionline.com:8443
> * and repeat for:
>   * Key: OPENSHIFT_DOMAIN
>   * Value: tanukionline.com

### Setup GitLab CI

Now we’re ready to configure GitLab CI. Luckily GitLab also provides a bunch of templates to get us started. Back to the project, let’s click `Setup CI` and choose the OpenShift template.

> * Go to Project, Click Setup CI
> * Choose OpenShift template
> * Commit

Great, that completes our setup.

## Idea (Chat)

Let’s go to our Mattermost client. We can get there from our OpenShift dashboard. Mattermost is an open source Slack alternative that comes bundled with GitLab. Because of the tight integration, I can use GitLab single-sign-on and it’ll know who I am.

> * Go to OpenShift and select the GitLab project [https://openshift.tanukionline.com:8443/console/project/gitlab/overview](https://openshift.tanukionline.com:8443/console/project/gitlab/overview)
> * Click [Mattermost URL](http://mattermost.tanukionline.com) (second application, top right)
> * Sign up with GitLab
> * Authorize

Let’s create a new team.

TODO: [Automate the setup of the team and channel](https://gitlab.com/gitlab-org/gitlab-ce/issues/23964)

> * Create a new team: tanuki. Press Next. Press Finish.

And create a channel for our project.

> * Create a new channel by clicking the + icon in the sidebar: firstname-www. Press 'Create new channel'

This channel is where the team would discuss the project and come up with great ideas for such as “Let’s improve the homepage!”.

> * Type: Let's improve the homepage!

When a great idea does come along, it would be such a waste to let it die in a chat room. Let's act on it, and turn it into a new issue, right from the chat interface.

> ```
> /issue create Make homepage more descriptive
> SHIFT ENTER
> Currently it is just Hello World.
> ```

## Issue (Tracker)

Great, now that we have it, we can click through to the new issue. We've got our first issue on our new project.

> * Click on the link that starts with #1

### Plan (Board)

Inspiration is perishable, so let's pick this one up right away. As a team lead or manager, I'd go to the Issue Board.

> Go to Issues, Issue Board

Since this is our first time, we have to add a couple columns here to match our workflow.
I'll just add the default "To Do" and "Doing" columns.

> * Add default lists

There. Now we can just drag the new issue from the backlog into the To Do column to indicate that it should be worked on this sprint. I’ll switch hats now, and as a developer, let’s go ahead and move it to Doing, because we want to resolve this issue right now.

> * Drag issue from To Do to Doing

## Code (Terminal)

TODO: [Demo with a rails application instead of a static website](https://gitlab.com/gitlab-org/gitlab-ce/issues/23966)

Now let’s get coding! We could of course code on our local laptops, but then we’d have to waste a bunch of time setting it up properly before we could even start. Since we’ve set up this project to deploy automatically to a staging environment, GitLab provides terminal access to that environment. This is especially useful for debugging, but we can use it here for testing out small tweaks. By clicking the terminal button we get a command prompt in the same container as our application.

TODO: [After using the new branch button in an issue I want to press a terminal button](https://gitlab.com/gitlab-org/gitlab-ce/issues/23968)

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

That looks pretty good for now. But we didn't commit anything so this will be lost the next time we deploy. So let’s move on to committing changes into source control by using the web editor. I’m just going to add a header to it.

> * Go to Repository
> * Go to index.html
> * Click Edit button
> * Replace `<h1>Idea to Production demo</h1>`
> DON'T COMMIT

Now instead of committing directly to `master`, I’m going to create a new branch, named with the issue number.

> * Set target branch to `1-homepage` (no longer than 24 characters)

And it gives me an option to create a Merge Request for us, how nice of it. Let's go ahead and do that.

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

While it’s running, we can head back to OpenShift to see that our GitLab Runner is working directly with Kubernetes to spawn new containers for each job, as they are needed.

> * Go to OpenShift, GitLab project
> * Show runner pods

## Review (MR)

We'll ask for another developer on the team to review our merge request. They can see the exact code that has changed, comment on it, and we'd see a thread of the discussion, as well as get an email notification, of course.

> * Go back to the Merge Request and go to the tab Changes
> * Click on a change line to show ability to comment

### Review apps

But I don’t just want to trust reading the code, I want to see it live in a production-like environment. When a new change is pushed to our branch this change will automatically be deployed to our OpenShift cluster in a special app called a Review App, created just for this branch. If we go back to the merge request, we see a new status telling us that it’s been deployed, and a convenient link to the actual app. Let’s take a look.

> * Click on external link to review app (if it is not updated, go to the review app deployment history, find the second-last item and re-deploy.

### Merge to `master`

This is what we just created, automatically deploy to Kubernetes to make our review easier. It looks great so let’s click the Accept Merge Request button to merge the changes into the `master` branch.

> * Click Accept Merge Request (no need to click remove source branch)

## Staging (CD)

Taking a look at the Pipelines tab, we see that we’re re-running CI on `master` to make sure the tests still pass after the merge. We actually see the history of all CI/CD pipeline runs, and if there are any failures, it’ll quickly show you the stage where any runs fail.

> * Go to Pipelines

Going back to the merge request, we now see another status showing that this code has indeed been deployed to staging. Clicking through, we can see our changes running live on our staging server.

> * Click on Merge Requests, Merged, and click on `!1`
> * Click on Staging URL to show that changes got deployed

## Production (Chatops)

Let’s ship these changes to production! There's this thing called ChatOps that encourages us to do these kinds of things in a common chat room, so everyone can see important changes. So let's go back to our chat room, and tell GitLab to deploy whatever’s on staging to production.

> * Go to Mattermost
> * Type `/deploy staging to production`
> * Click on the link
> * enable auto scroll TODO: [enable auto scroll automaticall](https://gitlab.com/gitlab-org/gitlab-ce/issues/19620)
> * wait until it is done

Great, here we see the deploy to production happening live. As an alternative to Chatops we could have also triggered the deployment from the GitLab interface.

### Environments with deployment history

Now that it is done let’s go back to Environments.

> * Go to Environments

Ok great, we now see the production environment shows up, and we see the deploy happened less than a minute ago.

> * Click production link

There we go! We've got our new text in it; all the way from idea to production!

## Feedback (Cycle Analytics)

One final thing. The cycle time of getting from idea to production is very important, so GitLab has built a dashboard that helps you track that.

> * Click Cycle Analytics

Here we can see some metrics on the overall health of our project, and then a breakdown of average times spent in each stage on the way from idea to production. So far, we're doing amazingly well, by completing a release cycle in minutes.

This is great for team managers and high level managers looking to better understand their company's release cycle time, which is key to staying competitive and responding to customers.

## Conclusion

So that's it. In less than 20 minutes, we installed GitLab from scratch, taken an idea through issue tracking, planning with an issue board, coding in the terminal, committing to the repo, testing with continuous integration, reviewing with a merge request and a review app, deploying to staging with continuous deployment, deploying to production with ChatOps, and closing the feedback loop with cycle analytics dashboard. This all on top of a container scheduler that allows GitLab, the GitLab Runners for CI, and the applications we deploy to scale. Welcome to Gitlab.
