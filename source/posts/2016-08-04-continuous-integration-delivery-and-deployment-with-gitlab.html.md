---
title: "Continuous Integration, Delivery, and Deployment with GitLab"
author: Marcia Ramos
author_twitter: XMDRamos
categories: GitLab
image_title: '/images/blogimages/continuous-integration-delivery-and-deployment-with-gitlab-cover.png'
description: "CI/CD: faster from idea to production with GitLab!"
twitter_image: '/images/tweets/continuous-integration-delivery-and-deployment-with-gitlab.png'
---

Can you imagine having **Continuous Integration**, **Continuous Delivery**, **Continuous Deployment**
and **Container Registry** within the same web interface? With **GitLab**, you can!

After a brief introduction to these topics,
and a short walk through of some use-cases for these development practices, we'll present you
with a **video** illustrating the capability of going **from idea to production faster** with
GitLab. Check how you can easily deploy automatically your app from GitLab to Docker Cloud, for example.

<!-- more -->

## Continuous Integration

**[Continuous Integration][ci]** is a software development practice in which you build and test software
every time a developer pushes code to the application, and it happens several times a day.

[GitLab.com] is our [SaaS]. It's 100% free to use by anyone or any team. It runs on [GitLab EE],
our single-tenant premium product. [GitLab CE] is our free on-premises product:
anyone can download and install it in their chosen server.

Our developers, as well as our community and [core contributors][core], push code to [GitLab CE][ce-repo]
and [GitLab EE][ee-repo] every day, multiple times per day.
From every commit, we use [GitLab CI] to test and build our software. We run unit tests to make sure
some changes didn't break other parts of the software. [Every push triggers multiple tests][ce-pipes],
making it easier to identify where the error is, when a test happens to fail.
But we do not deploy to production often, making both GitLab CE and EE cases
of Continuous Integration only.

## Continuous Delivery

**[Continuous Delivery][cd]** is a software engineering approach in which **continuous integration**, **automated
testing**, and **automated deployment** capabilities allow software to be developed and [deployed rapidly],
reliably and repeatedly with minimal human intervention. Still, the deployment is defined strategically
and pushed manually to the production stage.

[Mozilla Firefox][moz] and [Envato] are good examples of Continuous Delivery. They both get their product
deployed to production as soon as it's ready with as little human intervention as possible.

[Perforce performed a study][perforce] that revealed that most of the companies surveyed are using Continuous
Delivery methods to ship their products.

They raised an interesting question:

What’s the hardest thing about **Continuous Delivery**?
{: .alert .alert-info}

The answer was:

For non-SaaS companies, it’s getting **automation technologies to integrate**.
{: .alert .alert-success}

Well, with GitLab, we have all of this technology, **fully-integrated into one single UI**. With [GitLab 8.10] on, you can
actually [perform Manual Actions], and deploy manually your application with a click of a button, making Continuous Delivery
easier than ever, take a look.

Deploy to staging:

![Continuous Delivery - deploy to staging]{: .shadow}

Deploy to production:

![Continuous Delivery - deploy to production]{: .shadow}

Rollback to the previous state with a click of a button:

![Continuous Delivery - rollback]{: .shadow}

## Continuous Deployment

**[Continuous Deployment][cdp]** is a software development practice in which every code change goes through
the entire pipeline and is put **into production automatically**, resulting in many production
deployments every day. It does everything that Continuous Delivery does, but the process is fully automated,
there's no human intervention at all.

For example, our website [about.GitLab.com], is **continuously deployed**. We commit multiple times a day to
feature-branches, and every push triggers a [parallel][doc-stages] test and build. Therefore, every time we merge to the
`master` branch (and we do that a lot, every day), the code is **tested**, **built**, and **deployed** to
the production [environment][env], passing through the entire [pipeline][com-pipe].
There's no further manual action that triggers the deployment: it is an automated process, controlled by GitLab CI.

Other great examples of companies that adopted Continuous Deployment are [Flickr] and [Etsy].
Both deploy multiple times a day.

## From idea to production with GitLab

Our Head of Product, [Mark Pundsack], created a demonstration which illustrates an use-case of our built-in capabilities
with **GitLab CI**, **Continuous Deployment**, and **[Container Registry]** together, to develop **faster
from idea to production**.

In his video, you can see how it's possible, within one single interface (GitLab), to do everything:

- <i class="fa fa-info-circle fa-fw" aria-hidden="true"></i> Have an idea
- <i class="fa fa-exclamation-circle fa-fw" aria-hidden="true"></i> Create an issue to discuss it with your team
- <i class="fa fa-code fa-fw" aria-hidden="true"></i> Ship the code within a merge request
- <i class="fa fa-terminal fa-fw" aria-hidden="true"></i> Run automated scripts (sequential or parallel)
   - Build, test **and deploy** to a **staging environment**
   - Preview the changes
- <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Review the code and get it approved
- <i class="fa fa-code-fork fa-fw" aria-hidden="true"></i> Merge the feature-branch into `master`
   - **Deploy** your changes **automatically** to a **production environment**
- <i class="fa fa-undo fa-fw" aria-hidden="true"></i> Rollback if something goes wrong
{: .list-icons}

The most amazing thing is, you can track the entire process. Everything is
fully-integrated with GitLab already, you don't need any other tools to deliver your software, nor jump
between different applications and interfaces to track the process.

The full spectrum is clearly visible: the issue, the commits to the merge request, the reviews, the builds, the tests,
the deploys, the deployment history, the [container history], the environments and the [pipelines][mark-pipes].

Furthermore, for this example demo configuration, every time you push code to the repository, even if it's
to feature-branches, the pipeline runs **from build to deployment**. But instead of deploying to production,
these branches deploy to a staging environment. Production is only affected by the `master` branch.

For this particular case, Mark used [Docker Cloud] to deploy his app, but you are free to use your creativity to
optimize your software development process with GitLab and its built-in development tools.

Check it out, it's awesome!

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/pY4IbEXxxGY" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

**Note:** we assume you know what Docker is, how to use it and how to deploy an app to [Docker Cloud].
{: .note}

There's a [complete overview][idea-to-prod] on this demo in our Handbook, in case you want to reproduce Mark's steps.

## Conclusion

Our development team works hard to offer the best solution on modern software development tools and techniques. We ship a new
version once a month, every 22nd, with more features and improvements, for making development faster and better.

GitLab is unique: we go [from idea to production][direction] using one single interface that integrates all the tools we need!

Follow [@GitLab] on Twitter and stay tuned for updates!


<!-- identifiers -->

[@GitLab]: https://twitter.com/gitlab
[about.GitLab.com]: /
[cd]: https://continuousdelivery.com/
[cdp]: https://www.airpair.com/continuous-deployment/posts/continuous-deployment-for-practical-people
[ce-pipes]: https://gitlab.com/gitlab-org/gitlab-ce/pipelines
[ce-repo]: https://gitlab.com/gitlab-org/gitlab-ce
[ci]: https://en.wikipedia.org/wiki/Continuous_integration
[com-pipe]: https://gitlab.com/gitlab-com/www-gitlab-com/pipelines
[container history]: https://gitlab.com/gitlab-examples/docker-cloud/container_registry
[container registry]: /2016/05/23/gitlab-container-registry/
[Continuous Delivery - deploy to production]: /images/8_10/ci_manual2.png
[Continuous Delivery - deploy to staging]: /images/8_10/ci_manual1.png
[Continuous Delivery - rollback]: /images/blogimages/continuous-integration-delivery-and-deployment-with-gitlab-rollback.png
[core]: /core-team/
[deployed rapidly]: /2016/07/21/release-early-release-often/
[direction]: /direction/cicd/
[doc-stages]: http://docs.gitlab.com/ce/ci/yaml/README.html#stages
[Docker Cloud]: https://cloud.docker.com/
[ee-repo]: https://gitlab.com/gitlab-org/gitlab-ee
[env]: /2016/06/22/gitlab-8-9-released/#environments-and-deployments-in-ci
[envato]: http://www.slideshare.net/johnpviner/bank-west-10-deploys-a-day-at-envato-published
[etsy]: https://www.infoq.com/news/2014/03/etsy-deploy-50-times-a-day
[flickr]: https://vimeo.com/24542044
[From idea to production]: /images/blogimages/idea-to-production.png
[GitLab 8.10]: /2016/07/22/gitlab-8-10-released/
[GitLab CE]: /downloads/
[GitLab CI]: /gitlab-ci/
[GitLab EE]: /features/#enterprise
[GitLab.com]: https://gitlab.com/users/sign_in
[handbook-post]: /2016/07/12/our-handbook-is-open-source-heres-why/
[handbook]: /handbook/
[idea-to-prod]: /handbook/sales/idea-to-production/
[Mark Pundsack]: https://twitter.com/MarkPundsack
[mark-pipes]: https://gitlab.com/gitlab-examples/docker-cloud/pipelines
[moz]: https://quality.mozilla.org/2014/10/continuous-delivery-a-generic-plan/
[perforce]: https://www.perforce.com/company/newsletter/2014/02/continuous-delivery-new-normal-software-development
[perform Manual Actions]: /2016/07/22/gitlab-8-10-released/#manual-actions-to-trigger-pipeline-jobs
[registry-doc]: http://docs.gitlab.com/ce/administration/container_registry.html
[SaaS]: https://en.wikipedia.org/wiki/Software_as_a_service
[youtube]: https://www.youtube.com/channel/UCnMGQ8QHMAnVIsI3xJrihhg

<style>
ul.list-icons li i {
  padding-right: 15px;
  color: rgb(107,79,187);
}
ul.list-icons li:nth-of-type(even) i {
  color:rgb(252,109,38);
}
ul.list-icons {
  list-style-type: none;
  padding-left: 25px;
}
</style>
