---
layout: markdown_page
title: "Vision Demo: Idea to Production"
---

This demonstration is designed to highlight GitLab’s open set of tools for the software development lifecycle, from idea to production, through chat, issues, planning, merge request, CI, and CD.

![](handbook/sales/lifecycle.png)

We're going to start from scratch, creating a brand new GitLab installation.

A [pre-recorded version](https://youtu.be/7QXhH4WGLfc) is available on YouTube.

<iframe width="640" height="389" src="https://www.youtube.com/embed/7QXhH4WGLfc" frameborder="0" allowfullscreen></iframe>

----

## Sections
{:.no_toc}

- TOC
{:toc}

----

## Prerequisites

- Working OpenShift setup

## Scope/Flow

1. Install GitLab using OpenShift
2. Create Project
3. Chat about idea
4. Create Issue from idea
5. Plan sprint with the GitLab Issue Board
6. Code together with online IDE
7. Review with Koding
8. Merge Request
9. Use Review App
10. Test with GitLab CI
11. Container Registry
12. Manual Deploy to Development
13. Deploy to Staging with CD
14. Ship to Production via Chatops
15. Review the time from Idea to Production using Velocity Analytics

## Links

- [Original Slideware](https://docs.google.com/presentation/d/1D_L7s5xqDLw82B-drpM0av1-1m92f_ibIWruTmar-IQ/edit)
- [Meta Issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/19793)

## Vision Demo: Idea to Production

### Demo Setup

- Log in to [Openshift Origin](https://origin.gitlap.com:8443).
* Set up new project (Dockersaurus or Development or GitLab).
* Upload GitLab templates.
  * `oc login --server=origin.gitlap.com`
  * `wget https://gitlab.com/gitlab-org/omnibus-gitlab/raw/ux-demo/docker/openshift-template.json`
  * `oc create -f openshift-template.json`
  * `wget https://gitlab.com/gitlab-org/omnibus-gitlab/raw/ux-demo/docker/openshift-ci-template.json`
  * `oc create -f openshift-ci-template.json`
* Create public project on GitLab `markpundsack/velociraptor` with description: "App for the fastest idea-to-production company ever."
* Create [issue #1](https://gitlab.com/markpundsack/velociraptor/issues/new?issue%5Btitle%5D=Add%20a%20logo&issue%5Bdescription%5D=From%20https%3A%2F%2Fdockersaurus.slack.com%2Farchives%2Fvelociraptor%2Fp1470115616000002%3A%0A%0A%3E%20We%20need%20a%20logo%20for%20the%20project.%20%20%0A%3E%20Yeah%2C%20it%20should%20be%20orange%2C%20like%20GitLab%27s%20logo!%20%20%0A%3E%20Great%20idea!)

### Per-Demo Cleanup

* Delete the Openshift project
  * `oc delete project dockersaurus`
* Delete `markpundsack/velociraptor`

### Demo Script

Today I'd like to demo some of the power of GitLab’s open set of tools for the software development lifecycle, helping you get from idea to production as quickly as possible. We'll start from scratch, creating a brand new GitLab installation, and then take you through using chatops, issues, planning boards, merge requests, CI, CD, and more.

#### Installation [#19839](https://gitlab.com/gitlab-org/gitlab-ce/issues/19839)

> *Steps:*
>
> * Open Openshift web UI
> * Find GitLab in list of templates
> * Click
> * Show running GitLab

The first step is to install GitLab itself. Since we have a Docker image, it's really easy to deploy to any number of container schedulers. Today I'm going to use RedHat's Openshift with Kubernetes. We'll start by opening the Openshift web UI, finding GitLab in the list of templates, and clicking on it. Enter a few optional parameters and after a few minutes, boom, you've got a shiny new GitLab installation. Just for fun, let's scale up the main service so we've got some redundancy. There, we've now got 3 containers running the main GitLab CE service, one running Postgres, and one running Redis.

#### Setup [#19839](https://gitlab.com/gitlab-org/gitlab-ce/issues/19839)

Now that we've got GitLab running, let's open it up and create a new user for me, and a new project to start off with. Let's call it Velociraptor.

#### Chat [#19838](https://gitlab.com/gitlab-org/gitlab-ce/issues/19838)

> *Steps:*
>
> Add comment:
>
>> Great idea!
>/issue create Add a logo

I'm going to log in to the chat client. It already knows who I am through the integration with GitLab's user model.

I see there's a chat room for our new project, created automatically when I created the project. Let's go there and talk with the team. Well that was quick, I see someone else is in there and has already come up with a great idea. It would be such a waste to let a good idea die in a chat room. Let's act on that and turn it into a new issue, right from the chat interface.

#### Issue

Great, now we've got our first issue on our new project. Inspiration is perishable, so let's pick this one up right away.

#### Planning via Issue Board [#19952](https://gitlab.com/gitlab-org/gitlab-ce/issues/19952)

As a team lead or manager, I'd go to the Issue Board. Since this is our first time, we have to add a couple columns here to match our workflow. I'll just add a "To Do" column, and a "Doing" column. There. Now we can just drag the new issue from the backlog into the To Do column to indicate that it should be worked on this sprint.

#### Online IDE [#19953](https://gitlab.com/gitlab-org/gitlab-ce/issues/19953)

> *Hidden Steps:*
>
>* `mkdir velociraptor; cd velociraptor; git init .; cp ~/kubernetes-example/.gitlab-ci.yml .; cp ~/kubernetes-example/.dockerignore .; cd`

Now as a developer on the team seeing the issue in the sprint view, I decide to pick it up. I'll drag it to Doing first and then click through. I'll assign the issue to myself to let the team know that it's claimed.

Now let's get coding! Back to the project view, I see that the project is completely empty, but here are some suggestions to get started. A project isn't very good without a README, is it? Let's go create one. Type in some very helpful information...

> *This is going to be great!*

Then commit. Great, our first change!

Editing one file at a time through this UI could get a bit tedious. How about we kick off Koding to write code directly in Koding's sweet online IDE; using the full power of a development environment that happens to be running in the cloud.

Here we go, an integrated development environment, running in the cloud. It even has a full terminal, so we can run all those CLI tasks a developer needs.

Since this is a new project, there's no real code yet. But of course my fictitious company has a boilerplate starter application I can copy, so I'll start from there.

>* `cd velociraptor`
>* `cp -R ~/kubernetes-example/* .`
>* `git add .`
>* `git commit`
>* `git push origin master`

And then there's the new idea itself. Let's create a new branch. I'll just copy the new logo over...

>* `cp ~/logo.svg public`

Great, that was pretty simple, but If I get stuck, I can turn on "Start Collaboration", share the link, and someone else on my team could pair program with me.

#### Review with Koding

Now, Koding isn't just an editor. It's a full development environment. That means I can run anything from the command line that I would do on my laptop. Let's go ahead and run this app we just created.

>* `npm install`
>* `npm start`

We'll install all the required modules. Now start up the web server. Great, now go to the IP address of this server and take a look at the app. Beautiful, isn't it?

#### Merge Request

So everything looks good, let's check in our changes and push them back to GitLab.

>* `git checkout -b 1-add-new-logo`
>* `git commit -am "Add new logo"`
>* `git push origin 1-add-new-logo`

Now let's switch back to GitLab. Here we see it's detected the new branch and offered to create a Merge Request for us, how nice of it. Let's go ahead and do that, creating the merge request. It knows by the branch name that it closes issue #1 and adds that message automatically. Let's save this.

#### *Test with GitLab CI*

*There's one more thing we need to do to this project, and that's to configure CI. Luckily GitLab provides a bunch of templates to get us started. Let's pick the one for our language and go ahead and save it to our merge request branch. GitLab detects the configuration and starts running CI right away.* It's kicked off a pipeline of automated processes to build, test, and optionally deploy that change. Let’s follow the progress.

#### Test Stage

The first step is to make sure all the unit tests pass on GitLab CI. Let's click through, and we can watch the build log in realtime.

#### Build Stage

Now that that’s finished, it goes on to build the docker image and push it up to the integrated GitLab Container Registry. Let's click through and watch. OK, the pipeline has finished successfully and marked the merge request as green, letting everyone know it's passed CI.

#### Container Registry

Let’s take a quick trip over to the [container registry](https://gitlab.com/gitlab-examples/docker-cloud/container_registry) where you can see the image has been pushed.

#### Peer Review

Going back to the Merge Request, we could ask for another developer on the team to review it. They can see the exact code that has changed, comment on it, and we'd see a thread of the discussion, as well as get an email notification, of course.

Even better, any other developer on the team could do the same thing, starting where I left off. It can also be used to show the running app to other team members such as product managers that need to review the results without caring about the code itself.


#### Manual Deploy to Development

But I don’t just want to trust reading the code, I want to see it live in a production-like environment.  On Pipelines, there's a drop-down of manual actions where we see an option to Deploy to Development. Clicking on this kicks off another stage of the pipeline. Following along with the deploy progress, we see it pulling down the Docker image and then deploying the image to Openshift using Kubernetes.

#### Deploy Activity

Great, now that it's deployed, we see a little note appear in the activity thread of the merge request telling us about the deployment. We also see a summary of the current status at the top of the Merge Request. Clicking through, we can see the application running live on our development server. Even better, other reviewers or the product manager can now go to that development environment and see those changes too.

#### Merge to `master`

Since we’re happy with the changes, let’s merge them into `master`. We’ll click the Accept Merge Request button to merge the changes into the `master` branch.

#### Pipelines

Taking a look at the Pipelines tab, we see that we’re re-running CI on `master` to make sure the tests still pass after the merge. We actually see the history of all CI pipeline runs, and if there are any failures, it’ll quickly show you the stage where any runs fail.

#### Deploy to Staging with CD [#19571](https://gitlab.com/gitlab-org/gitlab-ce/issues/19571)

Looking at this recent pipeline for `master`, we see it kicked off the test and build stages again, but this time, it also runs a new deploy stage. Following along with the deploy progress, we again see it pull down the Docker image and use Kubernetes to deploy, but this time to staging, which is configured even closer to production so we can do a thorough QA or stress testing before going any further.

#### Deploy Activity

Back at the original merge request, even though it was already merged, we now see that GitLab knows this has been deployed to `staging`. This is super important for project and product managers that need to know not just that a feature has been merged, but where it's been deployed for testing, and ultimately, when it gets to production. Clicking through, we can see the application running live on our staging server. Even better, the release manager can now go to that staging environment and see those changes too.

#### Environments

And on the Environments tab, you can see what’s currently running in staging . This clearly shows that while my new changes have made it to staging, they haven’t made it to production yet.

#### Ship to Production via Chatops [#19838](https://gitlab.com/gitlab-org/gitlab-ce/issues/19838)

Since we’re happy with the changes, let’s ship them to production! Looking at the manual actions here, we see an option to Deploy to Production. We could just click through there and kick off the deploy, but there's this little thing called ChatOps that encourages us to do these kinds of things in a common chat room, so everyone can see important changes, and so there's a continuos record of activity. So let's go back to our chat room, and tell GitLab to deploy `master` to production. We see it's kicked off a deploy job.

#### Environments - Deployment history

While we’re waiting, let’s go back to Environments. Clicking through on `staging`, we see a history of everything that has been deployed so far. This is great to see exactly what has been deployed, and also exactly when changes were deployed. There’s also an easy way to rollback to one of the previous deploys. That can be a life-saver in an emergency so you don’t have to wait to write a hotfix, wait for it to be tested again, etc.

Our fix should be pretty much deployed to production by now. Let’s go back to Pipelines; yep, it’s been deployed. Check the chat log, yep, it's let everyone know the deploy has finished. Let’s check the environment tag... Ok great, we now see this production environment shows up, and we see the deploy happened less than a minute ago. And it's got our master changes with our new logo, and everything is in sync!

#### Production

Now let's head over to our production site and refresh. Now, there we go. We've got our new logo in it; in production. All the way from idea to production!

#### Review the cycle time from Idea to Production using Cycle Analytics [#18687](https://gitlab.com/gitlab-org/gitlab-ce/issues/18687)

One final thing. Since the cycle time of getting from idea to production is so important, GitLab has built a dashboard that helps you track that. Clicking on Cycle Analytics...

Here we can see some metrics on the overall health of our project, and then a breakdown of average times spent in each stage on the way from idea to production. So far, we're doing amazingly well, with only 12 minutes for the complete release cycle.

This is great for team managers and high level managers looking to better understand their company's release cycle time, which is key to staying competitive and responding to customers. It even includes stats for the last few features that made it into production. And you can drill down to each stage and see how those features looked. It's not so exciting yet, with only one feature shipped to production, but trust me, this is big.

#### Summary

So that's it. We've taken you on a little journey. In less than 20 minutes, we installed GitLab from scratch, taken an idea through issue tracking, planning with an issue board, coding in an IDE, committing to the repo, testing with continuous integration, reviewing with a merge request and a review app, deploying to staging with continuous deployment, deploying to production with ChatOps, and closing the feedback look with cycle analytics dashboard. Welcome to Gitlab.

## Todos
* Add environment variables for production secrets
* Remove redundancy, for example revisiting the container registry (currently needed while waiting for deploys)
