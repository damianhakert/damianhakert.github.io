---
title: "Continuous Deployment with GitLab" # anyone with a better idea?
author: Marcia Ramos
author_twitter: XMDRamos
categories: GitLab
image_title:  # to be added
description: "CI, CD and Docker Registry: all built-in GitLab"
twitter_image:  # to be added
---

Can you imagine having **Continuous Integration**, Continuous **Deployment**
and **Container Registry** within the same web interface? With **GitLab**, you can!

After a brief information on CI, Continuous Delivery and Continuous Deployment,
and a short walk through a few use-cases for these development practices, we'll present you
with a **video** illustrating the capability of going **faster from idea to production** with
GitLab. Check how you can easily deploy automatically your app from GitLab to DockerCloud.

<!-- more -->

## Definitions

First, let's try to understand the definitions of some topics relevant to this post.

**Continuous Integration** is a software development practice in which you build and test software
every time a developer pushes code to the application.

**Continuous Delivery** is a software development practice in which **continuous integration**, **automated
testing**, and **automated deployment** capabilities allow software to be developed and [deployed rapidly],
reliably and repeatedly with minimal manual overhead. Still, the deployment is defined strategically
and pushed manually to production stage.

**Continuous Deployment** is a software development practice in which every code change goes through
the entire pipeline and is put **into production**, **automatically**, resulting in many production
deployments every day.

**Source:** <http://electric-cloud.com/wiki/display/releasemanagement/Continuous+Deployment>
{: .note}

## Use-cases

Let's take a look at a couple use-cases as real examples of the techniques explained above.

### Continuous Integration

[GitLab.com] is our [SaaS]. It's 100% free to use by anyone or any team. It runs on [GitLab EE],
our single tenant premium product, fully-featured. [GitLab CE] is our free on-premises product:
anyone can download and install it in their chosen server.

Our developers, as well as our community and [core contributors][core], push code to [GitLab CE][ce-repo]
and [GitLab EE][ee-repo] every day, multiple times per day.
From every commit, we use GitLab CI to test and build our software. But, we do not deploy to production
every time we push, or even a couple times a day, making both GitLab CE and EE cases of Continuous Integration.


### Continuous Delivery

[Mozilla Firefox][moz] and [Envato] are good examples of Continuous Delivery. They both get their product
deployed to production as soon as it's ready, with the minimum human intervention as possible.

[Perforce performed a study][perforce] that reveals that most of the companies are using Continuous
Delivery methods to ship their products.

They raised an interesting question:

What’s the hardest thing about Continuous Delivery?
{: .alert .alert-info}

The answer was:

For non-SaaS companies, it’s getting **automation technologies to integrate**.
{: .alert .alert-success}

Well, with GitLab, you can have all this technology, **integrated into one single UI**.

### Continuous Deployment

Our website, [about.GitLab.com], is **continuously deployed**. Every time we merge to the
`master` branch, the code is tested, built and deployed, passing through the entire [pipeline][com-pipe]. There's no
further manual action that triggers the deployment: it is an automated process, controlled by [GitLab CI],
our built-in continuous integration tool.

Other great examples of companies that adopted Continuous Deployment are [Flickr] and [Etsy].
Both deploy multiple times a day.

## From idea to production with GitLab

Our Head of Product, [Mark Pundsack], created a demonstration which illustrates an integration of **GitLab CI**,
**Continuous Deployment**, and our built-in **[Container Registry]** capability to develop faster
**from idea to production**.

In this video, you can see how it's possible, within one single interface (GitLab.com), to do everything:

- have an idea
- create an issue to discuss it with your team
- ship the code within a merge request
- run automated scripts (sequential or parallel) to build, test **and deploy** to a staging environment and actually preview the changes
- review the code and get it approved
- merge the feature-branch into `master`: the system deploys the new feature automatically to a production environment

The most amazing thing is, you can track the entire process, from idea to production, within GitLab. Everything else is
integrated automatically with GitLab already, you don't need any other tools to deliver your software.

Every step is clearly visible: the issue, the commits to the merge request, the reviews, the builds, the tests,
the deploys, the deployment history, the [container history], the environments and the [pipelines][mark-pipes].

Even further, for this example demo configuration, every time you push code to the repository, even if it's
to feature-branches, the pipeline runs from build to deployment. But instead of deploying to production,
these branches deploy to a staging environment. Production is only affected by the `master` branch.

For this case, Mark used [DockerCloud] to deploy his app, but you are free to use your creativity to optimize your software
development process with GitLab and its built-in DevTools.

Check it out, it's awesome!

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/pY4IbEXxxGY" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

**Note:** we assume you know what Docker is, how to use it and how to deploy an app to [DockerCloud].
{: .note}

Mark also talks about all the techniques briefly described on this post in a video for GitLab University (GLU), which is
our internal channel for training our team. The video is called [GLU: Idea to Production][glu] and it's available in our [GitLab YouTube Channel][youtube].

## Conclusion

Out DevTeam works hard to offer the best solution on modern software development tools and techniques. We ship a new
version once a month, every 22nd, with more features and improvements, for making development faster and better.

With GitLab, we go from idea to production using one single interface that integrates all the tools we need!

Follow [@GitLab] on Twitter and stay tuned for updates!


<!-- identifiers -->

[about.GitLab.com]: /
[@GitLab]: https://twitter.com/gitlab
[ce-repo]: https://gitlab.com/gitlab-org/gitlab-ce
[container history]: https://gitlab.com/gitlab-examples/docker-cloud/container_registry
[container registry]: /2016/05/23/gitlab-container-registry/
[core]: https://about.gitlab.com/core-team/
[com-pipe]: https://gitlab.com/gitlab-com/www-gitlab-com/pipelines
[deployed rapidly]: /2016/07/21/release-early-release-often/
[DockerCloud]: https://cloud.docker.com/
[ee-repo]: https://gitlab.com/gitlab-org/gitlab-ee
[envato]: http://www.slideshare.net/johnpviner/bank-west-10-deploys-a-day-at-envato-published
[etsy]: https://www.infoq.com/news/2014/03/etsy-deploy-50-times-a-day
[flickr]: https://vimeo.com/24542044
[GitLab CE]: /downloads/
[GitLab CI]: /gitlab-ci/
[GitLab.com]: https://gitlab.com/users/sign_in
[GitLab EE]: /features/#enterprise
[glu]: https://www.youtube.com/watch?v=25pHyknRgEo
[mark-pipes]: https://gitlab.com/gitlab-examples/docker-cloud/pipelines
[Mark Pundsack]: https://twitter.com/MarkPundsack
[moz]: https://quality.mozilla.org/2014/10/continuous-delivery-a-generic-plan/
[perforce]: https://www.perforce.com/company/newsletter/2014/02/continuous-delivery-new-normal-software-development
[SaaS]: https://en.wikipedia.org/wiki/Software_as_a_service
[youtube]: https://www.youtube.com/channel/UCnMGQ8QHMAnVIsI3xJrihhg