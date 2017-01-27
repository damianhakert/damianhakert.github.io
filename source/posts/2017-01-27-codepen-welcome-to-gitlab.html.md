---
title: "CodePen, welcome to GitLab!"
author: Marcia Ramos
author_twitter: XMDRamos
categories: customer stories
image_title: 
description: "Yes, it's worth it - CodePen has moved to GitLab!"
---

We were so glad to hear that [CodePen] switched to GitLab!

Read through the ins and outs of their move! 😃

<!-- more -->

Particularly, I'm a big fan of CodePen. Their product is awesome: it's
intuitive, beautiful, works like a charm, and it's really easy to use.
Their community's work is involving - we can pass hours playing around
with pens like this, [created][pen] by [Jase Smith]:

<p data-height="300" data-theme-id="23203" data-slug-hash="dNVaae" data-default-tab="js,result" data-user="virtuacreative" data-embed-version="2" data-pen-title="Spock! Paper Scissors" class="codepen">See the Pen <a href="http://codepen.io/virtuacreative/pen/dNVaae/">Spock! Paper Scissors</a> by Virtua Creative (<a href="http://codepen.io/virtuacreative">@virtuacreative</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

When I heard that they had switched to GitLab, I had a blast! Yaaay!
&nbsp;<i class="fa fa-codepen" aria-hidden="true"></i>
&nbsp;**CodePen, welcome to GitLab!** 
&nbsp;<i class="fa fa-gitlab" aria-hidden="true"></i>

They're very cool folks, and their [team][team] is making such an
awesome product! They're also [remote-only], like us.

Listen to their podcast episode, which details why and how this
move went. If you'd rather read, we have some highlights down below.

## Listen Now

<figure>
  <audio class="shadow" preload="none" style="width: 100%;" controls="controls">
    <source type="audio/mpeg" src="http://media.blubrry.com/codepen_radio/p/codepen-podcast.s3.amazonaws.com/114.mp3?_=1">
    <a href="http://media.blubrry.com/codepen_radio/p/codepen-podcast.s3.amazonaws.com/114.mp3">http://media.blubrry.com/codepen_radio/p/codepen-podcast.s3.amazonaws.com/114.mp3</a>
  </audio>
</figure>

Source: [Codepen Radio - 114 - GitLab](https://blog.codepen.io/2017/01/24/114-gitlab/)
{:.note}

## Highlights

{::options parse_block_html="true" /}

<div class="panel panel-gitlab-orange">
### <i class="fa fa-cog fa-fw" aria-hidden="true"></i> Control
{: .panel-heading}
<div class="panel-body">
5:18. The first thing they talked about is "control". 

7:45. They can't rely in a third-party service to deploy
their code. Whenever there's a downtime, there's nothing they can do about it. With a self-hosted GitLab instance,
they have the ability to exercise control over their server and everything else.
</div>
</div>

<div class="panel panel-gitlab-purple">
### <i class="fa fa-lock fa-fw" aria-hidden="true"></i> Security
{: .panel-heading}
<div class="panel-body">
10:00. Because it's self-hosted, they feel much more protected from hacker attacks, and system breaches.
They have their own private network space, in which they run GitLab. 

> 12.35. _We have control, he have code in our own network, we have higher security._
</div>
</div>

<div class="panel panel-gitlab-orange">
### <i class="fa fa-code fa-fw" aria-hidden="true"></i> Open source &amp; Cost
{: .panel-heading}
<div class="panel-body">
> 13:00. _The open source version of GitLab [[CE]] is 100% free. You can install it in your own server._

They decided to go for [GitLab EE Starter][ee] for having certain great features available only on EE, such as [Multiple Issue Boards][boards], and [fast-forward merge][ff].

> 14:26. _It's not terribly expensive [GitLab EE], and we're also supporting open source development._
</div>
</div>

<div class="panel panel-gitlab-purple">
### <i class="fa fa-refresh fa-fw" aria-hidden="true"></i> Continuous Integration and Continuous Deployment
{: .panel-heading}
<div class="panel-body">
15:40. They finally don't need to rely on third-party services to apply Continuous Integration to test and
deploy their code. [GitLab CI][ci] does this job, and it's built-in GitLab.

> 16:34. _Because this [CI] runs internally, and because we have access to our own VPC and resources inside of it, like Docker stuff, and AWS EFS stuff, we can actually take a step further and not just test our stuff, but grab it and deploy it._

> 16:58. _In our case, they [GitLab] give you tools to make [Continuous Integration, Continuous Testing, and Continuous Deployment][ci-cd] really really simple. And that, to me, is the biggest sell of them all. That's simply not available on GitHub._

They also enjoy not having to deploy from the command line, as it was impossible to track.

17:15. They love our [Pipelines][pipes], where the entire team can see what's going on and who's doing what. The steps are visible. 

> 17:27. _It's very clear, in GitLab, weather a build on staging has actually been pushed to production. So, if I'm going to deploy something to production, I can very easily see who has moved that into master, since the last production deploy._

They also love the [rollback] button: no pain, all gain. Now it's easy to roll back changes.

> 19:18. _I feel more comfortable, for sure._
</div>
</div>

<div class="panel panel-gitlab-orange">
### <i class="fa fa-heart-o fa-fw" aria-hidden="true"></i> Their impression
{: .panel-heading}
<div class="panel-body">
23:20. Overall, GitLab brought them speed, security, and agility.

> 23:37. _Whatever we wanna do, we can do, and we're not bound by someone else's Continuous Deployment setup._
</div>
</div>

<div class="panel panel-gitlab-purple">
### <i class="fa fa-chain fa-fw" aria-hidden="true"></i> Project Management: everything in one place
{: .panel-heading}
<div class="panel-body">
> 24:56. _We were using Trello boards to organize our tasks, but very recently we've decided to move our project's specific tasks into GitLab [[Issue Boards]]. And that's because Trello is really good, in my opinion, for idea generation and quickly getting up cards for a lot of ideas you have. But the fact that the cards are so easy to add, at any point anywhere, kind of hurt us when we were trying to plan dev-work for a project, because we had duplicate cards, and the cards weren't tied to any specific pull request or issue in the codebase. So, it's kind of wish-washy having project planning over in Trello. (...) We've decided to switch to GitLab for actionable tasks related to getting up a project finished within CodePen._

26:40. They appreciate having the [Issue Boards], [Todos], and [Time Tracking][tt] in one single platform, tied together with their code.

> 28:07. _Let's start looking at all of the things that are required to go into a feature and all, and assign them priorities, and people, and milestones, and time estimates, and stuff, and it feels like a really grown up management of a thing, and it's pretty interesting!_

29:10. They mentioned how cool is it, from an issue comment, to perform a [slash command][slash]
to add how long it's gonna take to complete the implementation of a feature.

> 29:50. _We are, as a group, sick of not having an understanding of how long it's gonna take to complete a feature or whatever. If we do this [[Time Tracking][tt]], we'll know, or we'll be a lot closer to! And further, we're gonna be more accurate on what those time estimates are gonna be, and we can plan around that, and not feel so wishy-whashy about these big important things that we're doing. So we get that! That comes in the GitLab package as well, so it's kinda like we replaced GitHub, and Codeship, and Trello with one open source tool! This feels kinda cool!_
</div>
</div>

<div class="panel panel-gitlab-orange">
### <i class="fa fa-heartbeat fa-fw" aria-hidden="true"></i> The transition
{: .panel-heading}
<div class="panel-body">
30.45. They feel they made a mistake by not using the importer tool to import their projects, they simply pushed to GitLab like a separate remote. By doing so, they left some issues and wikis behind. They had to manually transfer them.

> 31:24. _This is biggest warning I have for everyone: read the [documentation][docs]!_

With [GitLab Importer][importer], you can just import your projects from GitHub directly
from the UI, which means pushing a button.

> 31:45. _It's just a button, essentially. You just have to give access to your GitHub account via keys, and once you've done that, then GitLab will actually pull in all of your repos, and say "which ones do you wanna import?" and you just go "import", "import", "import"..._
</div>
</div>

<div class="panel panel-gitlab-purple">
### <i class="fa fa-check-square-o fa-fw" aria-hidden="true"></i> Bottom Line
{: .panel-heading}
<div class="panel-body">
There's one thing they are missing: squash-merge. Good news for ya'll: we have something like that [coming][squash] soon!

At 33:44 they also mention burndown charts, and there is [an issue][burndown] with a lot of traction. 

> 34:03. _My final feeling about GitLab is like, it's both incredibly impressive work. Like, holy crap, this is really good software! High five team!_ 🙌

</div>
</div>

## GitLab Version

CodePen is using [GitLab EE Starter][ee], self-hosted on AWS together with all their
structure.

<!-- identifiers -->

[boards]: /solutions/issueboard/#step-6
[burndown]: https://gitlab.com/gitlab-org/gitlab-ee/issues/91
[ce]: /products/ "GitLab Community Edition"
[ci-cd]: /2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/
[ci]: /gitlab-ci/
[Codepen]: http://codepen.io/
[docs]: https://docs.gitlab.com/
[ee]: /gitlab-ee/ "GitLab Enterprise Edition"
[ff]: https://docs.gitlab.com/ee/user/project/merge_requests/fast_forward_merge.html
[importer]: https://docs.gitlab.com/ce/workflow/importing/import_projects_from_github.html
[Issue Boards]: /solutions/issueboard/
[jase smith]: http://codepen.io/jasesmith/
[pen]: http://codepen.io/jasesmith/pen/GqaVrx
[pipes]: https://docs.gitlab.com/ce/ci/pipelines.html
[remote-only]: http://remoteonly.org/
[rollback]: https://docs.gitlab.com/ee/ci/environments.html#viewing-the-deployment-history-of-an-environment
[slash]: https://docs.gitlab.com/ce/user/project/slash_commands.html
[squash]: https://gitlab.com/gitlab-org/gitlab-ee/issues/150
[team]: http://codepen.io/about/
[todos]: https://docs.gitlab.com/ce/workflow/todos.html
[tt]: https://docs.gitlab.com/ce/workflow/time_tracking.html

<style>
h3 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  font-size: 20px !important;
}
.shadow {
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09);
  margin-bottom: 20px;
  margin-top: 20px; }
}
</style>
