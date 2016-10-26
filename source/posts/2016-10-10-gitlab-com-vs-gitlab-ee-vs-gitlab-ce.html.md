---
title: "GitLab.com - GitLab EE - GitLab CE"
author: Marcia Ramos
author_twitter: XMDRamos
categories: GitLab
image_title: '/images/blogimages/gitlab-com-vs-gitlab-ee-vs-gitlab-ce/gitlab-instances.png'
description: 
twitter_image: 
ee_cta: true
---

- What is GitLab?
- Why should I consider using GitLab?
- Which GitLab product is my best choice?
- What are the differences between them?
- Why should I choose GitLab Enterprise Edition (GitLab EE)?

If these questions ring a bell, this post if for you!

<!-- more -->

----

## In this post
{:.no_toc}

- TOC
{:toc}

----

{::options parse_block_html="true" /}

## What is GitLab?
GitLab is a Git-based repository management and version control platform,
which has a complete built-in toolset for software development.

GitLab is offered in two main versions: **GitLab CE** and **GitLab EE**.
GitLab.com runs on top of GitLab EE.

**GitLab EE** stands for **Enterprise Edition**; it is our fully-featured premium product.
**GitLab CE** stands for **Community Edition**; it is our open source product.

[![GitLab EE, GitLab CE, GitLab.com](/images/blogimages/gitlab-com-vs-gitlab-ee-vs-gitlab-ce/gitlab-instances.png)](/pricing/)

### GitLab Vision

The vision of GitLab is to allow everyone to collaborate on all digital content so people can cooperate effectively and achieve better results, faster. We do this by providing an integrated set of tools that allows you to go faster from idea to production. To do so, we are working towards the most natural and cohesive process to closely mirror the way developers work without duplicating effort or distraction of switching to multiple platforms.

The natural course of the software development process passes [through 10 major steps][10-steps]:

![FROM IDEA TO PRODUCTION IN 10 STEPS](/images/blogimages/idea-to-production-10-steps.png)

GitLab has built solutions for all of the 10 steps above. While many tools exist to serve each stage of the the development lifecycle, we believe an integrated set of open source tools is the best way to deliver [Conversational Development (Conv Dev)][convdev], which is:

> _A natural evolution of software development that carries a conversation across functional groups throughout the development process, enabling developers to track the full path of development in a cohesive and intuitive way._

Our goal is to help you work better so you can ship faster. To do this, we are working on reducing cycle time and constantly bringing ConvDev principles directly into our product as defined in our product direction [scope][scope].

### GitLab's Key benefits

#### Reduce complexity

- Simplicity: one team, one tool, endless functionality
- GitLab repositories: unlimited collaborators, unlimited public and private repositories
- [GitLab Groups][]: group your similar projects and set them up at once

#### Enhance security

- Protection: keep your code behind your own firewall
- Enable [2FA][2fa-post]: Two-factor authentication, ensuring your access is always safe
- LDAP: a secure optimization layer to provide extremely fast read/query performance for a large scale of dataset

#### Improve collaboration

- Communication: integrated Chat, with [Mattermost]
- Advanced Issue Tracker: [confidential issues][post-douglas], labels, [priority labels], user assignment, [due dates, and milestones][post-amanda]
- [GitLab Issue Board][issue-board]: prioritize, organize and plan your workflow and course of action. Use Multiple Issue Boards per project to organize distinct workflows
- [Todos][todos-doc]: you're in control of what you need to track and get done

<br>

![GitLab Issue Board, 2FA, todos, confidential issues](/images/blogimages/gitlab-com-vs-gitlab-ee-vs-gitlab-ce/management-tools.png)

## Which GitLab Product is my Best Choice?

Before answering this question, we ask you: where do you want your code hosted?

### GitLab On-Premises Key Benefits

If you're worried about security, management, administrative control 



## What GitLab does for me?

### Build, Test, and Deploy with GitLab

- Continuous Integration built-in ([GitLab CI][ci]) allows you to run endless scripts
with [GitLab Multi Runner][runner]. This uses an autoscaling method, making multiple
simultaneous builds not only possible, but also fast.
- [GitLab CI templates][ci-templates] make your life easy when configuring a new project
- GitLab [merge requests][mr], with in-line commenting, which is
the best way to review your code, get feedback and approval
- [Merge conflict resolution][mr-confl-ui] from the user interface. Resolve the conflict and move on.
- GitLab [Pipelines][pipes]: run multiple scripts in
sequence or in parallel, whichever suits you best. Visualize the
entire pipeline, making any error easily identifiable
- [Environments] support, so you can deploy your code to different
environments, such as `staging` and `production`
- [Continuous Delivery and Continuous Deployment][ci-cd-post]
built-in support. Allows you to choose between deploying manually
or automatically to whichever environment you choose, and `rollback`
to the previous working version with a click of a button

![Build, Test and Deploy](/images/blogimages/gitlab-com-vs-gitlab-ee-vs-gitlab-ce/build-test-deploy.png)

### Automate & Integrate with GitLab

- [GitLab Webhooks][ce-webhooks]: automate repetitive
processes. Integrate with external tools and applications.
- [GitLab Pages][pages], a static webserver which [supports][pages-post]
custom domains and subdomains, SSL/TLS encryption, and builds any SSGs.
Specially designed for web developers, and to make it
easier for software engineers to deploy their website from the same platform
they use to host and build their apps.
- [GitLab Container Registry], the first Docker registry that is
fully-integrated with Git repository management, allowing you to build
and deploy your Docker image right from GitLab.
- [GitLab Cycle Analytics][gca]: a new feedback tool, which allows you
to track the time your team takes to evolve a project, from the
first step (creating a new issue) until the last step (deploying to production).
This is what we call "going [from idea to production with GitLab][idea-prod]".
- GitLab offers a lot of external [integrations], such as [Jira], [Jenkins], [Slack],
[Shippable], [Digital Ocean], [Koding], [Mesosphere] and many others.
- [GitLab API][api]: Automate GitLab via a simple and powerful API.

[![Pages, Cycle Analytics, Services/Integrations](/images/blogimages/gitlab-com-vs-gitlab-ee-vs-gitlab-ce/pages-cycle-analytics-integrations.png)](/pricing/)

Astonished so far? Keep going, GitLab has a lot more to offer!

### <i class="fa fa-gitlab fa-fw" style="color: #e14329 !important; font-size:.85em" aria-hidden="true"></i>&nbsp;&nbsp; GitLab.com
{:.gitlab-orange}

Let's understand something important here: **at GitLab.com, you
can access everything GitLab offers, but in a _user-level basis only_**.
We own the admin tools, setup, servers, firewalls, etc.

Is it customizable? Up to a point, yes: you take control over your projects,
your groups, you give access to your contributors, you do
**everything a user can possibly do**. But no, **you can't setup GitLab.com**
at your will. To do that, you'll need **your own GitLab instance**. With it,
you are in control of the entire administrative area, tools, disk space, defaults, etc.

Currently, GitLab.com offers all the features GitLab EE does,
except [Koding integration][koding], tools controlled by administrative
access, and the features listed in the [table below](#gitlab-ee-only-main-features).

#### Why GitLab.com?
{:.gitlab-purple #gitlab-com}

Why not? [GitLab.com][com] is where you'll find community collaboration,
open source projects, and enjoy all it's awesomeness for free!

#### When should I choose GitLab EE or CE?
{:.gitlab-purple}

If you want to take control over every customizable aspect of GitLab,
run it on your own server, behind your firewall, you have two options:
GitLab CE and GitLab EE. And I can tell you by heart, it's awesome
having your own GitLab, even if it's running on your local machine!

### <i class="fa fa-gitlab fa-fw" style="color: #e14329 !important; font-size:.85em" aria-hidden="true"></i>&nbsp;&nbsp; GitLab CE
{:.gitlab-orange #gitlab-ce}

[GitLab CE][ce] is our princess, our open source product, free to
download, tweak, contribute, customize, and use as you wish. Does
GitLab CE have everything described in this post so far? Yes, it
does, except GitLab Pages. And we are very proud to deliver such
an amazing product, for free.

#### Why GitLab CE?
{:.gitlab-purple}

Well, if you want to have an entire GitLab instance only for you, it's
all yours! If you want it for your company, it's all yours too.

It's great for people that don't need all the premium features
GitLab EE offers, or for trying GitLab for a while, or for when
you can't afford GitLab EE, or just for fun!

GitLab CE is as customizable as possible, it has all the administrative
settings and tools, it can be [downloaded and installed][ce-download] in
different Unix operational systems, it can be made available locally
(to your own network), or globally (to the entire internet). How you
set it up, where to install, how you manage it, is totally up to you.
We provide you guides and [documentation][doc], the rest is on you to play around!

Does GitLab CE have all the features offered by GitLab? No, only its
big brother has everything: GitLab EE.

For GitLab CE, we provide [support] via [issue tracker] and [forum].

### <i class="fa fa-gitlab fa-fw" style="color: #e14329 !important; font-size:.85em" aria-hidden="true"></i>&nbsp;&nbsp; GitLab EE
{:.gitlab-orange #gitlab-ee}

[GitLab EE][ee] is our queen, our open core and premium product.
It has all the possible features GitLab offers, and some adds-ons
to spice it up. It's also available to [download and install][ee-download],
and use however you want. It's like having a "GitLab.com" all for yourself!
Our subscriptions are very affordable and don't have any restrictions: if
you want it just for yourself, you can buy a single-user subscription. If
your company has dozens, hundreds, or thousands of users, GitLab EE supports all of them.

#### Why GitLab EE?
{:.gitlab-purple}

Well, for a great number of reasons. Let's make it reader-friendly and
not over populate this single post with all the reasons.

{::options parse_block_html="true" /}

<div class="panel panel-gitlab-orange">
**Case 1: Single-User Subscription** 
{: .panel-heading}
<div class="panel-body">
Okay. Let's say you love GitLab.com and you decided to have your own
GitLab instance. If you are an advanced user of GitLab.com, it might
be disappointing to move over to GitLab CE. Sometimes, you'll find yourself
wondering "where can I do this?", "where is that feature I love?", "where
is my Pages server?". They're in GitLab EE. That's when you decide to buy a
single-user subscription.
</div>
</div>

<div class="panel panel-gitlab-purple">
**Case 2: Small Group Subscription** 
{: .panel-heading}
<div class="panel-body">
Let's say you and a bunch of friends from college decided to work on a
game project. Your game will be awesome, and you need a lot of different
integrated tools, control who has access to what, keep it behind your own
firewall, design a webpage for it, and do a lot of stuff you can achieve
only with an advanced, fully-featured platform. 

You need all the features only GitLab EE has. You go for GitLab EE. It's also
affordable for small groups, you and your friends can split the costs among
yourselves, until the game pays you all back!
</div>
</div>

<div class="panel panel-success">
**Case 3: Big Company Subscription** 
{: .panel-heading}
<div class="panel-body">
Now, let's say you run an entire company and you're looking for a software
development platform that can address all the needs of your large enterprise.
Of course you will choose the best option available, so your team will
be able to work faster and better within a fully-featured product. You
go for GitLab EE, and boost it up with Premium Support, File Locking and GitLab GEO.
</div>
</div>

### What does GitLab EE have and CE does not?

If you are following us on social media, our blog, and other communication
channels, you probably have heard about our [Master Plan], and you're
asking yourself "okay, sounds great! But what about the whole Master
Plan thing? And the idea to production workflow? Is that available only
for GitLab EE customers?" Don't worry, be happy: the answer is, **no**!

Our [10-step from idea to production][idea-prod-steps] toolset is
available for **every GitLab user**: CE, EE and GitLab.com.
{:.alert .alert-webcast}

![FROM IDEA TO PRODUCTION IN 10 STEPS](/images/blogimages/idea-to-production-10-steps.png)


#### GitLab EE-only main features
{:.gitlab-purple}

There are a lot of things GitLab EE is boosted up with. You'll find
the entire comparison table in our [features page][features]. Let's
describe the main ones here.

| Feature name | Feature description | Available at GitLab.com |
| -- | -- | :--: |
| Support | GitLab EE customers have priority support over e-mail | <i class="fa fa-times-circle-o" style="color: red;"></i> |
| [Development][ee-devs] | GitLab EE customers can contract GitLab to develop custom features | <i class="fa fa-times-circle-o" style="color: red;"></i> |
| [GitLab Pages][pages] | Pages is a static webserver, written in Go. As EE admin, you can [set it up as you like][pages-doc] | <i class="fa fa-check-circle-o" style="color: green;"></i> |
| [GitLab Group WebHooks][group-webhooks] | Make your webhooks configured for your groups of projects | <i class="fa fa-check-circle-o" style="color: green;"></i> |
| LDAP | [LDAP][ldap-ce] is available for GitLab CE. GitLab EE includes [enhanced LDAP][ldap-ee] integration, including group membership syncing, and supports a configurable sync time, with a default of one hour. You can also configure multiple LDAP servers to connect to one GitLab server | <i class="fa fa-times-circle-o" style="color: red;"></i> |
| [Templates] | Templates for issues and merge requests: create multiple templates for new issues and merge requests descriptions per project | <i class="fa fa-check-circle-o" style="color: green;"></i> |
| [Contribution Analytics][CA] |  An overview for the activity of issues, merge requests and push events of your organization and its members. | <i class="fa fa-check-circle-o" style="color: green;"></i> |
| [Mirroring repositories][mirror] |  It's a way to mirror repositories from external sources. It's going to mirror all the branches, tags, and commits that you have in your project within another Git platform. | <i class="fa fa-check-circle-o" style="color: green;"></i> |
| [Kerberos][kerb-gitlab] | [Kerberos][kerb] is a secure method for authenticating a request for a service in a computer network. | <i class="fa fa-times-circle-o" style="color: red;"></i> |
| [Audit Logs][logs] | Track important events such as user access level, target user, and user addition or removal. | <i class="fa fa-check-circle-o" style="color: green;"></i> |
| [Merge request approval][mr-approval] | Set the number of necessary approvals and predefine a list of approvers that will need to approve every merge request in a project. | <i class="fa fa-check-circle-o" style="color: green;"></i> |
| [Global code search][global-search] | [Search] through all code in your projects/groups | <i class="fa fa-check-circle-o" style="color: green;"></i> |
| [Email] | Email GitLab users from within GitLab. | <i class="fa fa-times-circle-o" style="color: red;"></i> |
{:.table}

#### GitLab EE-only premium additional products
{:.gitlab-purple}

As a GitLab EE customer, you can [buy premium additional products][premium]
to boost up your GitLab instance!

[![GitLab EE premium additional products](/images/blogimages/gitlab-com-vs-gitlab-ee-vs-gitlab-ce/premium-add-prod-ee.png)](/pricing/)

- [GitLab Geo][geo]: With this feature you can have a geographically
replicated GitLab instance that mirrors the main source.
- [Premium Support][premium]: You get 24/7 emergency support,
two training workshops, dedicated service engineer, live
upgrade assistance, Support for High Availability.
- [Pivotal Tile integration][pivotal]: deploy GitLab as a
pre-configured appliance using Ops Manager (BOSH) for Pivotal Cloud Foundry.
- [File Locking][File-Lock]: lock any file or directory in the
repository tree reserving you the right to make changes to that
file or directory. With File Locking, you can prevent modification
while you're working on a file, avoid conflicts when modifying your
assets, prevent design assets from being overwritten, avoid merge conflicts.

<!-- this section below is commented - too long - probably will be deleted  -->

<!-- 
## Who is GitLab for?

Yes, it is for you! GitLab is for everyone. If you are a **software developer**, of course GitLab is for you. If you're not, you might consider joining the club as well:


<div class="panel panel-info">
**Web developers**
{: .panel-heading}
<div class="panel-body">
With GitLab CI/CD/CD, you build and test your website or web application, get reviewed, [deploy it to `staging` and `production`][post-ivan], gather feedback and proposals within the issues, organize yourself with labels, milestones and Issue Boards, and track the time you take over the entire process with Cycle Analytics. If you use static sites, even easier to deploy it with [GitLab Pages][pages].
</div>
</div>

<div class="panel panel-success">
**Enterprises**
{: .panel-heading}
<div class="panel-body">
With our friendly UI, your entire team can use GitLab, not only your developers. The issue tracker makes everybody's live easier by having all the proposals easily achievable from the UI. With labels and the Issue Board, it's even easier to organize your team's and project's workflow. You don't need to keep your non-technical team
members apart of the developers, they can all use GitLab to improve and evolve together.
</div>
</div>

<div class="panel panel-warning">
**Universities**
{: .panel-heading}
<div class="panel-body">
Collaboration and review is always easier to track within a version control platform. From the GitLab UI, it's simple to add new files, collaborate with your colleagues, pass the responsibility on by reassigning issues and merge requests, and keep everything organized with the Issue Board.
</div>
</div>

<div class="panel panel-gitlab-orange">
**Students**
{: .panel-heading}
<div class="panel-body">
Doesn't matter what you're studying for; version control is the best way to track your own improvement in your college homeworks, collaborate with your scholar groups, discuss different subjects and point of views within issues, and improve your entire workflow for having things done better and quicker.
</div>
</div>

<div class="panel panel-gitlab-purple">
**Professionals**
{: .panel-heading}
<div class="panel-body">
If you work with a lot of projects, such as books, manuals, translations, and general written materials, you should definitely try a friendly version control platform as GitLab is. Your work and your changes will never get lost. With the commits history you can recover anything you've left behind. Besides that, you'll find your own way to explore GitLab's best tools in your favor. More and more writers are using Git management and version control to help them out.
</div>
</div>
-->

## We <i class="fa fa-heart fa-fw font-awesome gitlab-purple" aria-hidden="true"></i> Our Commmunity

<i class="fa fa-gitlab" style="color:rgb(107,79,187); font-size:.85em" aria-hidden="true"></i>&nbsp;&nbsp;
**At GitLab, everyone can contribute!**
&nbsp;&nbsp;<i class="fa fa-gitlab" style="color:rgb(107,79,187); font-size:.85em" aria-hidden="true"></i>
{: .alert .alert-gitlab-orange .text-center .extra-margin}

Thank you to our amazing community. We owe GitLab’s existence
to your enthusiasm, drive, and hard work. Without our contributors'
belief in open source software, we would not be where we are today.
We need your help to make our collective vision a reality.

Every 22nd there's a new GitLab release, with more awesomeness than before!

You are more than welcome to contribute to make GitLab CE even better.
We are happy to receive feature proposals in our issue tracker, and we
get even happier and cheerful when you contribute with your own code,
so it's easier and faster to make it happen.

Check out the implementations that are [**up-for-grabs**][ce-up-for-grabs]
and submit your code! You're also more than welcome to share your thoughts,
ask questions and even help us to answer some questions in our [forum]. Our
community is what makes GitLab better and more attractive to everyone. We
elect an **[MVP]** every month to express our gratitude. And some of our
MVPs are now happy [GitLab Team][team] members!

Do you love GitLab as much as we do? Please consider [joining us][jobs]!

Looking forward to see you around! Questions, suggestions, feedback?
Much appreciated! Please leave a comment below or tweet at us [@GitLab]!

<!-- identifiers -->

[2FA-post]: /2016/06/22/gitlab-adds-support-for-u2f/
[@gitlab]: https://twitter.com/gitlab
[api]: https://docs.gitlab.com/ce/api/README.html
[CA]: https://docs.gitlab.com/ee/analytics/contribution_analytics.html
[ce-download]: /downloads/
[ce-up-for-grabs]: https://gitlab.com/gitlab-org/gitlab-ce/issues?label_name%5B%5D=up-for-grabs
[ce-webhooks]: https://docs.gitlab.com/ce/web_hooks/web_hooks.html
[ce]: https://gitlab.com/gitlab-org/gitlab-ce
[ci-cd-post]: /2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/
[ci-templates]: /2016/06/22/gitlab-8-9-released/#gitlab-ciyml-templates
[ci]: /gitlab-ci/
[com]: /gitlab-com/
[Digital Ocean]: /2016/04/19/gitlab-partners-with-digitalocean-to-make-continuous-integration-faster-safer-and-more-affordable/
[ee-devs]: /development/
[ee-download]: /free-trial/
[ee]: https://gitlab.com/gitlab-org/gitlab-ee
[email]: https://docs.gitlab.com/ee/tools/email.html
[Environments]: http://docs.gitlab.com/ce/ci/yaml/README.html#sts=environment
[features]: /features/#compare
[File locking]: /2016/06/22/gitlab-8-9-released/#file-locking-new-product
[File-Lock]: https://docs.gitlab.com/ee/user/project/file_lock.html
[forum]: https://forum.gitlab.com/
[GCA]: /solutions/cycle-analytics/
[geo]: https://docs.gitlab.com/ee/gitlab-geo/README.html
[GitLab Container Registry]: /2016/05/23/gitlab-container-registry/
[GitLab Groups]: https://docs.gitlab.com/ce/workflow/groups.html
[global-search]: /2016/09/22/gitlab-8-12-released/#global-code-search-ee
[group-webhooks]: https://docs.gitlab.com/ee/web_hooks/web_hooks.html
[idea-prod-steps]: /2016/08/22/announcing-the-gitlab-issue-board/#gitlab-from-idea-to-production
[idea-prod]: /2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/#from-idea-to-production-with-gitlab
[integrations]: https://docs.gitlab.com/ee/integration/README.html
[issue-board]: /solutions/issueboard/
[Jenkins]: https://docs.gitlab.com/ee/integration/jenkins.html
[Jira]: https://docs.gitlab.com/ee/project_services/jira.html
[jobs]: /jobs/
[kerb-gitlab]: https://docs.gitlab.com/ee/integration/kerberos.html
[kerb]: https://web.mit.edu/kerberos/
[koding]: https://docs.gitlab.com/ce/user/project/koding.html
[ldap-ce]: https://docs.gitlab.com/ce/administration/auth/ldap.html
[ldap-ee]: https://docs.gitlab.com/ee/administration/auth/ldap-ee.html
[logs]: https://docs.gitlab.com/ee/administration/audit_events.html
[master plan]: /2016/09/13/gitlab-master-plan/
[Mattermost]:/2015/08/18/gitlab-loves-mattermost/
[Mesosphere]: /2016/09/16/announcing-gitlab-and-mesosphere/
[mirror]: https://docs.gitlab.com/ee/workflow/repository_mirroring.html
[mr-approval]: https://docs.gitlab.com/ee/user/project/merge_requests/merge_request_approvals.html
[mr-confl-ui]: https://docs.gitlab.com/ee/user/project/merge_requests/resolve_conflicts.html 
[mr]: https://docs.gitlab.com/ee/user/project/merge_requests.html
[MVP]: /mvp/
[pages-doc]: https://docs.gitlab.com/ee/pages/administration.html
[pages-post]: /2016/04/07/gitlab-pages-setup/
[pages]: https://pages.gitlab.io
[pipes]: https://docs.gitlab.com/ce/ci/pipelines.html
[pivotal]: /2015/11/03/pivotal-cloud-foundry-tile-for-gitlab-ee/
[post-amanda]: /2016/08/05/feature-highlight-set-dates-for-issues/
[post-douglas]: /2016/03/31/feature-highlihght-confidential-issues/
[post-ivan]: /2016/08/26/ci-deployment-and-environments/
[premium]: /pricing/
[priority labels]: https://about.gitlab.com/2016/06/22/gitlab-8-9-released/#priority-labels
[runner]: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner
[Search]: https://gitlab.com/search
[shippable]: /2016/05/05/getting-started-gitlab-and-shippable/
[Slack]: https://docs.gitlab.com/ce/project_services/slack.html[Shippable]: /2016/05/05/getting-started-gitlab-and-shippable/
[team]: [/team/]
[templates]: https://docs.gitlab.com/ee/customization/issue_and_merge_request_template.html
[todos-doc]: https://docs.gitlab.com/ce/workflow/todos.html
[scope]: https://about.gitlab.com/direction/#scope
[10-steps]: /2016/10/25/gitlab-workflow-an-overview/#stages-of-software-development
[convdev]: /2016/09/13/gitlab-master-plan/#convdev
[doc]: https://docs.gitlab.com
[support]: /support/
[forum]: https://forum.gitlab.com
[issue tracker]: CE-TRACKER

<!-- custom styles -->

<style>
tr td {
	vertical-align: middle !important;
}
tr td:first-child {
	width: 25%;
}
tr td:last-child {
	width: 20%;
}
.extra-margin {
	margin-top: 20px !important;
}
</style>
