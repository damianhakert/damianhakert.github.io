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

We want to to make sure [everyone can replicate this demo](https://gitlab.com/gitlab-org/gitlab-ce/issues/25986).
We've changed this page to make it work with Google Container Engine (GKE) instead of OpenShift.
If you encounter issues replicating this demo on GKE or on your own Kubernetes cluster please [open an issue](https://gitlab.com/gitlab-org/kubernetes-gitlab-demo/issues/new).
We're still working to improve this demo further, please see [all open idea-to-production issues](https://gitlab.com/groups/gitlab-org/issues?scope=all&state=opened&utf8=%E2%9C%93&label_name%5B%5D=idea-to-production).

## Table of Contents
{:.no_toc}

- TOC
{:toc}

## Preparation

> * You need a Google Cloud Platform account, GitLab employees will have this. Ensure you are logged in with your GitLab account.
> * You need to have the [Google Cloud SDK](https://cloud.google.com/sdk/downloads) installed .
>   * Run `gcloud components install kubectl`
> * Login to Google Cloud Platform
>   * URL: [https://console.cloud.google.com/kubernetes](https://console.cloud.google.com/kubernetes)
> * GitLab employees should use the `gitlab-internal` project. Others should select or create a project to work in.
>   * URL: [https://console.cloud.google.com/kubernetes/list?project=gitlab-internal-153318](https://console.cloud.google.com/kubernetes/list?project=gitlab-internal-153318)
> * Clone the [kubernetes-gitlab-demo](https://gitlab.com/gitlab-org/kubernetes-gitlab-demo) for use.
> * Delete any previous [Container clusters](https://console.cloud.google.com/kubernetes/list) that you may have created.
> * This script assumes the `make-sid-dance.com` domain, but you should buy a new domain for your demo and substitute throughout the script. Also, put your domain [under Google DNS control](https://console.cloud.google.com/networking/dns/zones/~new).
> * [Reset cookie](chrome://settings/cookies) that [blocks issue board default list prompt](https://www.dropbox.com/s/knwdvnkuholo2xd/Screenshot%202016-10-14%2011.11.39.png?dl=0) by copy pasting the first url in the browser, searching for the domain you will be using for the domain (e.g. make-sid-dance), and deleting all those cookies. You can also go there via settings, clicking on Content settings, then All cookies and side data.
> * Disable desktop notifications (on a Mac, top-right corner, option click)
> * Open up new browser window so the audience doesn’t see all your other open tabs.
> * Consider just sharing web browser window so the audience isn’t distracted by notes or other windows.
> * Go to 'Displays' settings, Resolution: Scaled, Larger text
> * Open this page on an iPad that has screen lock disabled.
> * Have a Terminal window ready, open to the `kubernetes-gitlab-demo` directory you have just cloned.
> * Before the demo, run `gcloud auth application-default login`, saving you time from doing this in the middle of the demo.

## Install GitLab itself

The first step is to install GitLab itself. Today I'm going to use Google Cloud Platform, which includes Container Engine, a Kubernetes platform hosted by Google. We’re going to install everything from scratch and we’ll start by opening the Google Cloud Platform console UI.

> * Open [Google Cloud Platform](https://console.cloud.google.com/kubernetes), your Google Account credentials should have you automatically logged in.

We'll start with creating a new cluster. To do this, we will navigate to the Container Engine and create a new cluster.

> * Make sure `gitlab-internal` project is selected; otherwise pick it from the drop-down.
> * Click `Create cluster`, this will open a series of dialogs to complete.

We'll name this cluster `make-sid-dance` and have it created in the us-central zone. I’ll leave it at 3 nodes, but bump of the machine type to have 2 virtual CPUs for performance reasons.

> * Name the cluster after your domain name (e.g. `make-sid-dance`)
> * Make note of the `Zone` field should read `us-central1-*`, and will have a letter on the end. This letter does not matter.
> * Change the number of vCPU in Machine type to `2 vCPU`.
> * Click the `Create` button at the bottom of the page.

At this point, we will reserve an external IP address for the demo, so that we can use a domain name and Let's Encrypt for SSL.

> * Navigate to [Networking](https://console.cloud.google.com/networking/addresses/list)
> * Select `External IP addresses` from the menu on the left.
> * Click `Reserve static address` at the top of the page.
> * Set the name to match the name used for the cluster (e.g. `make-sid-dance`).
> * Set the Region to `us-central1` to match the Zone where you made the cluster.
> * Click the `Reserve` button at the bottom of the page.

This may take just a moment while the system allocates the address.

We'll now create a wildcard DNS entry for our demonstration domain, pointing to the IP we just created.

> * Copy the External Address from the list, from the line containing the name you used.
> * Click `Cloud DNS` from the menu on the left.
> * Click on the Zone that has the name of the domain to be used for the demo. (e.g. `make-sid-dance-com`)
> * Click on the `Add Record Set` button at the top of the page
> * Set the DNS Name to `*`
> * Set the IPv4 Address to the clipboard contents (the External Address you just copied)
> * Click the `Create` button at the bottom of the page.

Now that we have created the cluster and configured a domain, we can go back and check on our cluster.

> * Navigate to [Container Engine](https://console.cloud.google.com/kubernetes/list)
> * Confirm a green checkmark. This tells us the cluster is ready to be used.

Good, our cluster is ready for us to use. Let's connect to it.

> * Click on the `Connect` button for your cluster. (This will open a dialog.)

We'll use the these commands, provided automatically by GKE to configure our access. These allow us to connect to and configure the cluster with the `kubectl` utility.

> * Click the `copy` icon to the right of the `gcloud container ...` entry. It looks like two overlapping white boxes.
> * Switch to the Terminal window, paste this command in, run it.

Now that we have our access to the cluster configured, we're ready to generate our configuration. To do this, we'll need three (3) pieces of information:

* The External Address we just configured, which will be `GITLAB_GKE_IP`
* The domain for access, which will be `GITLAB_GKE_DOMAIN`
* An email address to use with Let's Encrypt, which will be `GITLAB_LEGO_EMAIL`

Let's go ahead and generate this now

> * Stay in the Terminal window
> * Compose the following, filling in your values from the previous steps:
>   * `GITLAB_GKE_IP=104.198.192.151 GITLAB_GKE_DOMAIN=make-sid-dance.com GITLAB_LEGO_EMAIL=user@make-sid-dance.com bash generate.bash`
> * You will see the output similar to
>   * `Using gitlab-make-sid-dance-com.yml`

Okay, now we have a configuration file that is ready to deploy! The `generate` script has filled in all the necessary information to the deployment file for us, and now we can deploy the entire installation with a simple command.

> * From the Terminal window, run the following, changing the yml file name to match the name of the one that was just created for you
>   * `kubectl create -f gitlab-make-sid-dance-com.yml`

The `kubectl` command has now connected to our cluster on GKE and is deploying as we speak. Let's go take a look at the progress.

> * From Terminal, run
>   * `kubectl proxy`
> * Go the the Kubernetes Dashboard at [http://localhost:8001/ui](http://localhost:8001/ui)

Here is the Kubernetes dashboard. We will watch the status of deployment from the Workloads page.

> * First, change the `Namespace` drop-down on the left. Change it from `default` to `All Namespaces`
> * Click on `Workloads` on the left.

We'll watch here for all items to have a green checkmark showing that they have completed. This process can take a few minutes as GKE allocates resources and starts up the various containers. You can see here there are several containers. The main GitLab container has the Rails app, but also Mattermost for Chat, the integrated Docker Registry, and Prometheus for monitoring. Then there's separate containers for Postgres and Redis and the autoscaling GitLab Runner for CI and CD. This is everything you need for the application development lifecycle on Kubernetes.

While this is spinning up, we'll go ahead and open a new tab to the URL that GitLab CE will be accessible on.

> * Open a new Chrome tab and go to [https://gitlab.make-sid-dance.com](https://gitlab.make-sid-dance.com), adjusting the URL to the domain you used for this demo.

While the system is deploying, it is expected that we will see a 503 message from the load balancer until GitLab has been fully started.

> *Note:* You can expect that you will see a 503 message for a short period as everything comes online. Feel free to refresh the page and / or switch between the Kubernetes dashboard and the gitlab page.

While we're waiting: In the rest of the demo, I’ll take you through everything you need to take ideas to production, including chat with Mattermost, issues and issue tracking, planning with issue boards, coding with terminal access, committing with git version control, merge requests for code review, testing with continuous integration, getting peer reviews with live review apps, continuous delivery to staging, deploying to production directly from chat, cycle analytics to measure how fast you’re going from idea to production, and lastly, Prometheus monitoring of your GitLab instance. With GitLab, everything is integrated out of the box.

What takes 10 minutes in this demo will take days if you're not using GitLab and have to integrate different tools. Not only is GitLab faster to set up, but it is also more convenient to have everything in one interface. Developers want to work on creating a great product, not on learning and maintaining the integrations between theirs tools.

*If there is more time talk about what a review app is and what cycle analytics are.*

> * Wait for gitlab pod to go to green, then switch to your tab with the GitLab deployment open

Looks like our deployment and all pods are green. Let's check our GitLab deployment...

Boom, we’ve got a shiny new GitLab installation!

## Setup a project in GitLab

### Create a user and a project

First things first, we need to secure the root account with a new password. Then create a new user for myself.

> * Set password for root user
> * Create a user with your name and email address (no verification sent)

We now create a group for our company; let’s name it `tanuki`.

> * Create a group called `tanuki` and make it public

Now let’s create a new project, starting from a really simple example app just to save myself some typing.

> * Create a project under the `tanuki` group
> * Import `minimal-ruby-app` from [https://gitlab.com/gitlab-examples/minimal-ruby-app.git](https://gitlab.com/gitlab-examples/minimal-ruby-app.git)
> * Make it public

### Add Kubernetes credentials to CI

Now I’ve got to tell the project about the Kubernetes service.

> * Go to Project Settings > Integrations
> * Scroll to Project Services
> * Select Kubernetes

First I need to activate it, and get IP address for the cluster from GKE.

> * Go to GCP, [Container Engine tab](https://console.cloud.google.com/kubernetes/list)
> * Click on cluster
> * Copy Endpoint to  `API URL` in GitLab, making it an HTTPS URL (such as `https://104.154.177.137`)

Then I grab an Access Token and Cert from the Kubernetes Dashboard.

> * Go to [Kubernetes Dashboard](http://localhost:8001/ui) that is proxied on your localhost.
> * Navigate to Secrets > Config on the left.
> * Click on `default-token-xxx` for the `default` namespace
> * Copy token (last item) to `Service token` in GitLab
> * Copy ca.crt (first item, including `BEGIN` and `END` lines) to `Custom CA bundle` in GitLab

Now let's save the settings. And then let's test the settings just to make sure.

> * Click Save Settings
> * Click Test Settings
> * *Click Cancel to return to integrations list TODO: https://gitlab.com/gitlab-org/gitlab-ce/issues/27301*

### Setup Mattermost Command

TODO: [Automate the setup of the team and channel](https://gitlab.com/gitlab-org/gitlab-ce/issues/23964)

While we're here, let's get our project connected to the built-in Mattermost. Mattermost is an open source Slack alternative that comes bundled with GitLab.

> * Go to Project Settings > Integrations
> * Scroll to Project Services
> * Select Mattermost Command
> * Click Add to Mattermost

Immediately, GitLab reaches out to Mattermost and asks me to create a team.

> * Click the `join a team` link
> * Click GitLab

Let's call the team `tanuki`.

> * Click `create a new team`
> * Fill in `tanuki`
> * Press Next
> * Press Finish

And let's go back to GitLab, and try connecting again.

> * Go back to GitLab
> * Refresh (or Click Go Back)

Great. The defaults looks pretty good, so let's go with them.

> * Click Install

### Setup GitLab Auto-Deploy

Now we’re ready to configure GitLab Auto Deploy. Back to the project, let’s click `Set up auto deploy` and choose the Kubernetes template. This is a great template to get us started and we just need to edit the `KUBE_DOMAIN` to use our own domain.

> * Go to Project, Click `Set up auto deploy`
> * Choose Kubernetes template
> * Edit the template
>   * Change `KUBE_DOMAIN` from `domain.example.com` to `make-sid-dance.com`
> * Change Target Branch to `master`
> * Commit

Great, that completes our setup.

## Idea (Chat)

Let's go back to our Mattermost client. Chat is where the team would discuss the project and come up with great ideas such as “Let’s improve the homepage!”.

> * Go to Mattermost [https://mattermost.make-sid-dance.com](https://mattermost.make-sid-dance.com)
> * Skip tutorial
> * Type: Let's improve the homepage!

When a great idea comes along, it's such a waste to let it die in a chat room so wouldn't it be great if we could create an issue for the project, right from chat? Well, with the GitLab chat command integration, we can do exactly that. Let's see how it works.

> * Type: `/minimal-ruby-app help`

On first use, the command will ask you to connect your GitLab account, which is as simple as clicking the provided link in the response.

> * Click connect your GitLab account
> * Click Authorize
> * Go to Mattermost
> * Type: `/minimal-ruby-app help`

Great. Now we can see what commands are available. Let's go ahead and create that issue.

> ```
> /minimal-ruby-app issue new Make homepage more descriptive
> SHIFT ENTER
> Currently it is just Hello World.
> ```

## Issue (Tracker)

Great, now we can click through to see our first issue on our new project.

> * Click on the link that starts with #1

### Plan (Board)

Inspiration is perishable, so let's pick this one up right away. As a team lead or manager, I'd go to the Issue Board.

> Go to Issues > Board

Since this is our first time, we have to add a couple columns here to match our workflow.
I'll just add the default "To Do" and "Doing" columns.

> * Add default lists

There. Now we can just drag the new issue from the backlog into the Doing column, because we want to resolve this issue right now.

> * Drag issue from Backlog to Doing

## Code (Terminal)

TODO: [Demo with a rails application instead of a static website](https://gitlab.com/gitlab-org/gitlab-ce/issues/23966)

Now let’s get coding! We could of course code on our local laptops, but then we’d have to waste a bunch of time setting it up properly before we could even start. Since we’ve set up this project to deploy automatically to a staging environment, GitLab provides web terminal access to that environment. This is especially useful for debugging, but we can use it here for testing out small tweaks. By clicking the terminal button we get a command prompt in the same container as our application.

TODO: [After using the new branch button in an issue I want to press a terminal button](https://gitlab.com/gitlab-org/gitlab-ce/issues/23968)

> * Go to Pipelines
> * Go to Environments
> * Click Staging
> * Click Terminal button (on the upper right, 1st on right)

Let's edit the server.rb file.

> * `vi server.rb`
> * i (to insert)
> * Update text to `Updated Hello World`
> * esc (to go back to normal mode)
> * ZZ (to save and close)

Now we’ve saved the changes, let's restart the server.

> * killall ruby

And now we can view the web page live to see how we like the changes.

> * Go back
> * Click external URL link on top right (2nd from right)

## Commit (Repo)

That looks pretty good for now. But we didn't commit anything so this change will be lost the next time we deploy. So let’s move on to committing changes into source control by using the web editor. I’m just going to add a header to it.

> * Go to Repository
> * Go to `server.rb`
> * Click Edit button
> * Add `Updated ` in front of  `Hello, world!`
> DON'T COMMIT

Now instead of committing directly to `master`, I’m going to create a new branch, named with the issue number.

> * Set target branch to `1-homepage` (no longer than 24 characters)
> * Leave start a new merge request checked
> * Commit

And now it gives me an option to create a Merge Request, how nice of it. Let's go ahead and do that. GitLab knows by the branch name that it closes issue #1 and adds that message automatically so we don't have to do anything except hit submit.

> * Submit new merge request
> * If popup asks to show notifications, click Allow.

## Test (CI)

As soon as the Merge Request is created, we see it kicked off the CI/CD Pipeline that will test our contributed code.

> * Click on Pipelines
> * Click on first (top) pipeline's status.

Here we see a simple pipeline that contains ~~3 stages for build, test, and staging~~ 2 stages for build and review...

### ~~Test Stage~~

~~There are 2 parallel tests. Let's click through one of them and see the build log.~~

~~> * Click on `test1`~~

### Runner progress

While it’s running, we can head back to our Kubernetes console to see that our GitLab Runner is working directly with Kubernetes to spawn new containers for each job, as they are needed. It even creates a namespace for the project, providing isolation.

> * Go to Kubernetes
> * Change the Namespace drop-down to `minimal-ruby-app`
> * Click on Pods

## Review (MR)

We'll ask for another developer on the team to review our merge request. They can see the exact code that has changed, comment on it, and we'd see a thread of the discussion, as well as get an email notification, of course.

> * Go back to the Merge Request and go to the tab Changes
> * Click on a change line to show ability to comment

### Review apps

But I don’t just want to trust reading the code, I want to see it live in a production-like environment. When a new change is pushed to our branch this change will automatically be deployed to our Kubernetes cluster in a special app called a Review App, created just for this branch. Right from the merge request, we see a new status telling us that it’s been deployed, and a convenient link to the actual app. Let’s take a look.

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
> * Type `/minimal-ruby-app deploy staging to production`
> * Click on the link
> * wait until it is done

Great, here we see the deploy to production happening live. As an alternative to Chatops we could have also triggered the deployment from the GitLab interface.

### Environments with deployment history

Now that it is done let’s go back to Environments.

> * Go to Environments

Ok great, we now see the production environment shows up, and we see the deploy happened less than a minute ago.

> * Click production link (1st on right, beside `production`)

There we go! We've got our new text in it; all the way from idea to production!

## Feedback (Cycle Analytics)

One final thing. The cycle time of getting from idea to production is very important, so GitLab has built a dashboard that helps you track that.

> * Click Cycle Analytics

Here we can see some metrics on the overall health of our project, and then a breakdown of average times spent in each stage on the way from idea to production. So far, we're doing amazingly well, by completing a release cycle in minutes.

This is great for team managers and high level managers looking to better understand their company's release cycle time, which is key to staying competitive and responding to customers.

## Conclusion

So that's it. In less than 20 minutes, we installed GitLab from scratch, taken an idea through issue tracking, planning with an issue board, coding in the terminal, committing to the repo, testing with continuous integration, reviewing with a merge request and a review app, deploying to staging with continuous deployment, deploying to production with ChatOps, and closing the feedback loop with cycle analytics dashboard. This all on top of a container scheduler that allows GitLab, the GitLab Runners for CI, and the applications we deploy to scale. Welcome to Gitlab.
