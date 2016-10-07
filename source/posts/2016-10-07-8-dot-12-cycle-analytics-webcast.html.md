---
title: "GitLab 8.12 Release Webcast: Cycle Analytics Launch"
author: Erica Lindberg
author_twitter: ericalindberg_ 
categories: release
image_title: '/images/blogimages/8-12-highlights.png'
twitter_image: '/images/tweets/--.png'
description:  In this webcast, we demo the highlights from GitLab 8.12
---

During the [GitLab Master Plan][masterplan], we promised to ship the entire development lifecycle before the end of the year. [GitLab 8.12][8.12] is 
exciting because it brings us one step closer to realizing our [vision][vision] to be an integrated set of tools for the software development lifecycle.

In this release, we launchted the first iteration of [Cycle Analytics][cycle]. Cycle Analytics gives you 
feedback on your projects, measuring how long it takes your team to go from idea to production. Cycle Analytics helps you
reduce cycle time, an important competitive advantage in today's development landscape. In fact, reducing cycle time to increase effectiveness is the
very first principle of [Conversational Development][condev]. 

We also launched Global Code Search for GitLab Enterprsie Edition (EE). If you're running Elasticsearch on your 
GitLab EE instance, you can know search through all the code on your server.

In this webcast, we walk through our vision, and demo some of the key features from GitLab 8.12.

<!-- more -->

## In this webcast: 

- Introduction to GitLab and our vision
- Why Cycle Analytics?
- Introduction to Cycle Analytics 
- 8.12 Feature Release Demo
- What’s next 
- Q&A

## Recording & Slides

<figure class="video_container">
  <iframe src="https://youtu.be/EhiZdlkcNLI" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

<br>

<figure class="video_container">
<iframe src="https://docs.google.com/presentation/d/1ghixhx1EyCtDbBgW5ejZkkamNhlKAenGfCRS_9DDKBE/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

## Key Takeaways

{::options parse_block_html="true" /}

In case you don't have time to watch the full video, here are the highlights. 

<div class="panel panel-gitlab">
**GitLab Built-in Integrations** 
{: .panel-heading}
<div class="panel-body">
GitLab is an integrated set of tools, including repository management, access controls, code review, issue tracker, Issue Board, wiki, and now, **Cycle Analytics**. GitLab supports the full software development lifecycle through its built-in [Continuous Integration, Continuous Deployment, Continuous Delivery][cd], and [Container Registry][container].
</div>
</div>

<div class="panel panel-success">
**Faster From Idea to Production**
{: .panel-heading}
<div class="panel-body">
Our goal is to help teams go [faster from idea to production][cd-faster]. To do that, we've built chat, issues, wikis, code review, CI, and CD into a single UI. 
</div>
</div>

<div class="panel panel-gitlab-purple">
**10-Step lifecycle**
{: .panel-heading}
<div class="panel-body">
We will ship this complete lifecycle in 2016.

1. Chat conversation &#8594; [Mattermost ships with GitLab][mattermost]
1. Issue creation &#8594; [GitLab Issues][issue]
1. Planning board &#8594; [GitLab Issue Board]
1. IDE &#8594; [Koding + GitLab][koding] Integration
1. Version control &#8594; GitLab Repositories
1. Continuous Integration &#8594; [GitLab CI][ci] and [GitLab Container Registry][container]
1. Code review &#8594; GitLab Merge Requests
1. Continuous Delivery &#8594; [GitLab Deploy][cd]
1. Chatops &#8594; We're planning to ship [Cog]
1. Feedback &#8594; [Cycle Analytics][cycle]
</div>
</div>

<div class="panel panel-info">
**New features**
{: .panel-heading}
<div class="panel-body">
[Cycle Analytics][cycle], [Global Code Search][code-search], and [Merge Request Versions][mr-versions] are awesome features and you should really check them out. 
</div>
</div>

## Amplify Your Code at GitLab World Tour

Join us for the [GitLab World Tour][world-tour] to learn more about our product vision, talk about changes in software developement, and meet
other GitLabbers in your area! We'll be in three cities:

Register for an event near you: 

- [London][london] - October 19
- [NYC][nyc] - October 26
- [Amsterdam][amsterdam] - November 3

<!-- identifiers -->

[8.12]: /2016/09/22/gitlab-8-12-released/
[cd-faster]: /2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/#from-idea-to-production-with-gitlab
[cd]: /2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/
[ci]: /gitlab-ci/
[cog]: https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1412
[condev]: https://about.gitlab.com/2016/09/14/gitlab-live-event-recap/#convdev
[container]: /2016/05/23/gitlab-container-registry/
[cycle]: https://about.gitlab.com/2016/09/21/cycle-analytics-feature-highlight/
[GitLab Issue Board]: /solutions/issueboard/
[gitlab-vision]: /direction/#vision
[issue-board-launch]: /2016/08/22/announcing-the-gitlab-issue-board/
[issue]: /2016/03/03/start-with-an-issue/
[job]: https://twitter.com/Jobvo
[koding]: /2016/07/26/koding-and-gitlab-integrated/
[masterplan]: https://about.gitlab.com/2016/09/13/gitlab-master-plan/
[mattermost]: /2015/08/18/gitlab-loves-mattermost/
[mr-conflicts]: /2016/09/06/resolving-merge-conflicts-from-the-gitlab-ui/
[Sid Sijbrandij]: https://twitter.com/sytses
[world-tour]: https://about.gitlab.com/2016/09/28/world-tour-amplify-your-code/

<style>
.panel-gitlab {
  border-color: rgba(252,163,38,.3);
}
.panel-gitlab > .panel-heading {
  color: rgb(226,67,41);
  background-color: rgba(252,163,38,.3);
  border-color: rgba(252,163,38,.3);
}
.panel-gitlab-purple {
  border-color: rgba(107,79,187,.3);
}
.panel-gitlab-purple > .panel-heading {
  color: rgb(107,79,187);
  background-color: rgba(107,79,187,.3);
  border-color: rgba(107,79,187,.3);
}
</style>
