---
title: "GitLab EE, GitLab.com, GitLab CE"
author: Marcia Ramos
author_twitter: XMDRamos
categories: GitLab
image_title: '/images/blogimages/gitlab-com-vs-gitlab-ee-vs-gitlab-ce/gitlab-instances.png'
description: "A little help to understand and choose GitLab products"
twitter_image: 
ee_cta: true
---

- What is GitLab?
- Why should I consider using GitLab Enterprise Edition?
- What can GitLab do for me and my team?
- Which GitLab product is my best choice?
- What are the differences between them?

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
which has a complete and powerful built-in toolset for software development.

### Products

- **GitLab EE**, which stands for **Enterprise Edition**, is our fully-featured premium product, single-tenant.
- **GitLab CE**, which stands for **Community Edition**, is our open source product, single-tenant.
- **GitLab.com**, hosted by ourselves, runs on top of GitLab EE.

[![GitLab EE, GitLab CE, GitLab.com](/images/blogimages/gitlab-com-vs-gitlab-ee-vs-gitlab-ce/gitlab-instances.png)](/pricing/)
{:.extra-margin}

### GitLab's Key benefits

#### Reduce complexity

- Simplicity: one team, one tool, endless functionality
- Consistency: one team, one platform, all your code
- Integrity: one team, one server, same infrastructure

#### Enhance security

- Protection: keep your code behind your own firewall
- [2FA][2fa-post]: Two-factor authentication, ensuring your access is always safe
- LDAP: a secure optimization layer to provide extremely fast read/query performance for a large scale of dataset

#### Improve collaboration

- Communication: integrated Chat, with [Mattermost]
- Collaboration: advanced Issue Tracker
- Organization: [Issue Board][issue-board], Todos, Milestones

## What can GitLab do for me and my team?

### Code, Collaborate, Build, Test, and Deploy

The vision of GitLab is to allow everyone to collaborate on all digital content so people can cooperate effectively and achieve better results, faster. We do this by providing an integrated set of tools that allows you to go faster from idea to production. To do so, we are working towards the most natural and cohesive process to closely mirror the way developers work without duplicating effort or distraction of switching to multiple platforms.

The natural course of the software development process passes [through 10 major steps][10-steps]:

![FROM IDEA TO PRODUCTION IN 10 STEPS](/images/blogimages/idea-to-production-10-steps.png)

GitLab has built solutions for all of the 10 steps above. While many tools exist to serve each stage of the the development lifecycle, we believe an integrated set of open source tools is the best way to deliver [Conversational Development (Conv Dev)][convdev], which is:

> _A natural evolution of software development that carries a conversation across functional groups throughout the development process, enabling developers to track the full path of development in a cohesive and intuitive way._

Our goal is to help you work better so you can ship faster. To do this, we are working on reducing cycle time and constantly bringing ConvDev principles directly into our product as defined in our product direction [scope][scope].

The recommended way to achieve better results faster is adopting the [GitLab Workflow][workflow-post].

Our [10-step from idea to production][idea-prod-steps] toolset is
available for **every GitLab user**: CE, EE and GitLab.com.
{:.alert .alert-webcast}

## Which GitLab Product is my Best Choice?

Before answering this question, we ask you: where do you want your code hosted?

On [this article][saas-or-not], you'll find the advantages of having your code
on-premises over having it hosted.

### GitLab On-Premises Key Benefits

If you're concerned about containment, security, performance, management,
and administrative control, you should consider
GitLab Enterprise Edition (GitLab EE), [on-premises].

With GitLab EE, you take control over every customizable aspect of GitLab,
run it on your own server, behind your firewall. It's safe, it's reliable
and it has all the premium features GitLab offers to you.

GitLab EE is the ideal product to medium to large companies, which need a fully-featured
platform to host their code and achieve maximum efficiency in collaboration and integration
across their team. GitLab supports unlimited repositories and users.

However, GitLab EE is not restricted to high scale business, it addresses small companies, small
groups, and single developers, as it doesn't impose a minimum number of subscribers. If you want
your code safely hosted, GitLab EE is there for you.

GitLab EE subscriptions are absolutely affordable, **starting from $ 39.00 per user per year**.
It costs incredibly $ 3.95 per month.
{: .alert .alert-gitlab-orange .text-center}

You can also have GitLab CE on-premises, if you are happy with our open source solution. It's free
and it doesn't have all the premium features GitLab EE has, but it's definitely an awesome option.

### GitLab Hosted Key Benefits

If you don't need GitLab EE in your own server, you can use the cloud-based options.
The best option in this case is using [GitHost], the hosting service offered by GitLab.

With GitHost, we take care of your GitLab instance for you. You don't need to
worry about installation, updates, server configuration, backup, and general
maintenance. We save all this time for you and your team,
so you can focus on what's the most important: shipping.

With GitHost, you still hold all the administrative control of
your instance, but de-stress about setting up and maintaining everything
up-to-date. It serves both GitLab EE and CE.

A similar option is using third-party cloud-based servers and VM providers
to host your GitLab instance. For example, we are partners with [Digital Ocean][do],
[OpenShift], and [Azure], from witch you can quickly install GitLab in a few clicks.
However, for these cases, you will have to take over the server
configuration and maintenance yourself.

#### GitLab.com

With GitLab.com, you can access everything GitLab offers,
but in a _user-level basis only_.
We own the admin tools, setup, servers, firewalls, etc.

Is it customizable? Up to a point, yes: you take control over your projects,
your groups, you give access to your contributors, you do
**everything a user can possibly do**. But no, **you can't setup GitLab.com**
at your will. To do that, you'll need **your own GitLab instance**, which will
give you full access to the entire administrative area, tools, disk space, defaults, etc.

Currently, GitLab.com offers all the features GitLab EE does,
except [Koding integration][koding], tools controlled by administrative
access, and the features listed in the [table below](#gitlab-ee-or-gitlab-dot-com).

[GitLab.com][com] is where you'll find the largest GitLab community, with
thousands of open source enthusiasts, millions of open source projects,
and enjoy all GitLab's awesomeness for free!

## Who is GitLab for?

GitLab is a powerful platform for software development. However, it can be used by
an audience much larger than that:

- Web developers, which can host their code with version control, besides building, testing, and
deploying any Static Site Generator with [GitLab Pages][pages]
- Students and teachers, to use GitLab as a collaboration platform
- Colleges and Universities, to build an internal community based on cross-department
collaboration
- Non-technology-based companies, to use all GitLab's powerful features improve collaboration
and integration for their teams
- Everyone can find a suitable use of GitLab!

## What does GitLab do?

GitLab provides a complete set of tools and features to help you in a daily basis, from
having a good idea and discussing it with your folks, to deploying software applications
to production.

### Discuss, Code and Commit with GitLab

- Communication: integrated Chat, with [Mattermost]
- Advanced Issue Tracker: [confidential issues][post-douglas], labels, [priority labels], user assignment, [due dates, and milestones][post-amanda]
- GitLab repositories: unlimited collaborators, unlimited public and private repositories
- [GitLab Groups][]: group your similar projects and set them up at once
- [GitLab Issue Board][issue-board]: prioritize, organize and plan your workflow and course of action. Use Multiple Issue Boards (EE-only) per project to organize distinct workflows
- [Todos][todos-doc]: you're in control of what you need to track and get done

![GitLab Issue Board, 2FA, todos, confidential issues](/images/blogimages/gitlab-com-vs-gitlab-ee-vs-gitlab-ce/management-tools.png){:.extra-margin}

### Build, Test, and Deploy with GitLab

- Continuous Integration: built-in ([GitLab CI][ci]) allows you to run endless scripts
with [GitLab Multi Runner][runner]. This uses an autoscaling method, making multiple
simultaneous builds not only possible, but also fast.
- [GitLab CI templates][ci-templates]: they make your life easy when configuring a new project
- GitLab [merge requests][mr]: code review with in-line commenting, which is
the best way to get feedback and approval
- [Merge conflict resolution][mr-confl-ui] from the UI: resolve the conflict and move on.
- GitLab [Pipelines][pipes]: run multiple scripts in
sequence or in parallel, whichever suits you best. Visualize the
entire pipeline, making any error easily identifiable
- [Environments] support: deploy your code to different environments,
such as `staging` and `production`
- [Continuous Delivery and Continuous Deployment][ci-cd-post]
built-in support: allows you to choose between deploying manually
or automatically to whichever environment you choose, and `rollback`
to the previous working version with a click of a button

![Build, Test and Deploy](/images/blogimages/gitlab-com-vs-gitlab-ee-vs-gitlab-ce/build-test-deploy.png){:.extra-margin}

### Automate & Integrate with GitLab

- [GitLab Webhooks][ce-webhooks]: automate repetitive
processes. Integrate with external tools and applications.
- [GitLab Pages][pages]: a static webserver which [supports][pages-post]
custom domains and subdomains, SSL/TLS encryption, and builds any SSGs.
Specially designed for web developers, and to make it
easier for software engineers to deploy their website from the same platform
they use to host and build their apps.
- [GitLab Container Registry][]: the first Docker registry that is
fully-integrated with Git repository management, allowing you to build
and deploy your Docker image right from GitLab.
- [GitLab Cycle Analytics][gca]: a new feedback tool, which allows you
to track the time your team takes to evolve a project, from the
first step (creating a new issue) until the last step (deploying to production).
This is what we call "going [from idea to production with GitLab][idea-prod]".
- Integrations: GitLab offers a lot of external [integrations], such as [Jira], [Jenkins],
[Slack],[Shippable], [Digital Ocean], [Koding], [Mesosphere] and many others.
- [GitLab API][api]: automate GitLab via a simple and powerful API.

[![Pages, Cycle Analytics, Services/Integrations](/images/blogimages/gitlab-com-vs-gitlab-ee-vs-gitlab-ce/pages-cycle-analytics-integrations.png)](/pricing/)
{:.extra-margin}

## GitLab EE or GitLab.com?
{: #gitlab-ee-or-gitlab-dot-com}

If it's not clear what GitLab EE has and GitLab.com doesn't, we created the
following table to clear this out.

| Feature name | Feature description | Available at GitLab.com |
| -- | -- | :--: |
| [Support] | GitLab EE customers have support over e-mail in one business day | <i class="fa fa-times-circle-o" style="color: red;"></i> |
| [Development][ee-devs] (service) | GitLab EE customers can contract GitLab to develop custom features | <i class="fa fa-times-circle-o" style="color: red;"></i> |
| [GitLab Pages][pages] | Pages is a static webserver, written in Go. As EE admin, you can [set it up as you like][pages-doc] | <i class="fa fa-check-circle-o" style="color: green;"></i> |
| [GitLab Group WebHooks][group-webhooks] | Configure webhooks for your groups of projects | <i class="fa fa-check-circle-o" style="color: green;"></i> |
| LDAP | [LDAP][ldap-ce] is available for GitLab CE. GitLab EE includes [enhanced LDAP][ldap-ee] integration, including group membership syncing, and supports a configurable sync time. You can also configure multiple LDAP servers to connect to one GitLab server | <i class="fa fa-times-circle-o" style="color: red;"></i> |
| [Templates] | Templates for issues and merge requests: create multiple templates for new issues and merge requests descriptions per project | <i class="fa fa-check-circle-o" style="color: green;"></i> |
| [Contribution Analytics][CA] |  An overview of the activity in issues, merge requests, and push events of your organization and its members. | <i class="fa fa-check-circle-o" style="color: green;"></i> |
| [Mirroring repositories][mirror] |  Mirror repositories from external sources. It let's you to mirror all the branches, tags, and commits that you have in your project within another Git platform. | <i class="fa fa-check-circle-o" style="color: green;"></i> |
| [Kerberos][kerb-gitlab] | [Kerberos][kerb] is a secure method for authenticating a request for a service in a computer network. | <i class="fa fa-times-circle-o" style="color: red;"></i> |
| [Audit Logs][logs] | Track important events such as user access level, target user, and user addition or removal. | <i class="fa fa-check-circle-o" style="color: green;"></i> |
| [Merge request approval][mr-approval] | Set the number of necessary approvals and predefine a list of approvers that will need to approve every merge request in a project. | <i class="fa fa-check-circle-o" style="color: green;"></i> |
| [Global code search][global-search] | [Search] through all code in your projects/groups | <i class="fa fa-check-circle-o" style="color: green;"></i> |
| [Email] | Email GitLab users from within GitLab. | <i class="fa fa-times-circle-o" style="color: red;"></i> |
{:.table}

<br>

### GitLab EE-only premium additional products

As a GitLab EE customer, you can [buy premium additional products][premium]
to spice up your GitLab instance.

- [GitLab Geo][geo]: With this feature you can have a geographically
replicated GitLab instance that mirrors the main source.
- [Premium Support][premium]: You get 24/7 emergency support (with less than 1h response time),
two training workshops, dedicated service engineer, live
upgrade assistance, Support for High Availability.
- [Pivotal Tile integration][pivotal]: deploy GitLab as a
pre-configured appliance using Ops Manager (BOSH) for Pivotal Cloud Foundry.
- [File Locking][File-Lock]: lock any file or directory in the
repository tree reserving you the right to make changes to that
file or directory. With File Locking, you can prevent modification
while you're working on a file, avoid conflicts when modifying your
assets, prevent design assets from being overwritten, avoid merge conflicts.

[![GitLab EE premium additional products](/images/blogimages/gitlab-com-vs-gitlab-ee-vs-gitlab-ce/premium-add-prod-ee.png)](/pricing/)

### GitLab EE Use-Case Scenarios

Let's create a couple of possible real scenarios which drive people to go for GitLab EE.

{::options parse_block_html="true" /}

<div class="panel panel-gitlab-orange">
**<i class="fa fa-user" aria-hidden="true"></i> 
Case 1: Single-User Subscription** 
{: .panel-heading}
<div class="panel-body">
Let's say you love GitLab.com and you decided to have your own
GitLab instance. If you are an advanced user of GitLab.com, it might
be disappointing to move over to GitLab CE. Sometimes, you'll find yourself
wondering "where can I do this?", "where is that feature I love?", "where
is my Pages server?". They're in GitLab EE. That's when you decide to buy a
single-user subscription.
</div>
</div>

<div class="panel panel-gitlab-purple">
**<i class="fa fa-users" aria-hidden="true"></i> 
Case 2: Small Group Subscription** 
{: .panel-heading}
<div class="panel-body">
Let's say you and a handful of friends from college decided to work on a
game project. Your game will be awesome, and you need a lot of different
integrated tools, control who has access to what, keep it behind your own
firewall, design a webpage for it, and do a lot of stuff you can achieve
only with an advanced, fully-featured platform. 

You need all the features only GitLab EE has. You go for GitLab EE. It's also
affordable for small groups, you and your friends can split the costs among
yourselves until the game pays you all back!
</div>
</div>

<div class="panel panel-success">
**<i class="fa fa-university" aria-hidden="true"></i> 
Case 3: Big Company Subscription** 
{: .panel-heading}
<div class="panel-body">
Now, let's say you run an entire company and you're looking for a software
development platform that can address all the needs of your large enterprise.
Of course you will choose the best option available, so your team will
be able to work faster and better within a fully-featured product. You
go for GitLab EE, and spice it up with Premium Support, File Locking and GitLab GEO.
</div>
</div>

## GitLab EE or GitLab CE?

GitLab CE is great for people who don't need all the premium features
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

You'll find the entire comparison table for GitLab EE vs GitLab CE in our
[comparison page][features].

## Key Takeaways

GitLab Enterprise Edition has over 30+ more features than the Community Edition and is
great for teams who need extended authentication, deeper user management
capabilities, powerful workflow controls, etc. Subscribe now for your
[EE trial][ee-trial] for 30 days.

Watch this [demo video][demo], by Sid Sijbrandij (our CEO), on how to have GitLab up and running, and bring you from idea to production in about 20 min.

### The Best Choice

<i class="fa fa-key fa-fw" aria-hidden="true"></i> 
1. **GitLab EE** or **GitLab EE** are your best choice when:
{: .gitlab-orange}

- You want your code hosted in your servers
- You are concerned about security, performance, and infrastructure
- You want administrative controls of GitLab (hosted on your server or on the cloud)

<i class="fa fa-key fa-fw" aria-hidden="true"></i> 
2. **GitLab EE** is your best choice when:
{: .gitlab-orange}

- You care about the options (1) above 
- You want a fully-featured GitLab instance, and you need fast support
- You want to purchase additional [premium products](#gitlab-ee-only-premium-additional-products)

<i class="fa fa-key fa-fw" aria-hidden="true"></i> 
3. **GitLab CE** is your best choice when:
{: .gitlab-orange}

- You care about the options (1) above
- You want to try GitLab for a while
- You don't need the premium features GitLab EE has

<i class="fa fa-key fa-fw" aria-hidden="true"></i> 
4. **GitLab.com** is your best choice when:
{: .gitlab-orange}

- You don't need a GitLab instance hosted on your servers
- You don't need administrative controls
- You want to reach the largest GitLab community for code collaboration

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

[10-steps]: /2016/10/25/gitlab-workflow-an-overview/#stages-of-software-development
[2FA-post]: /2016/06/22/gitlab-adds-support-for-u2f/
[@gitlab]: https://twitter.com/gitlab
[api]: https://docs.gitlab.com/ce/api/README.html
[azure]: /2016/07/13/how-to-setup-a-gitlab-instance-on-microsoft-azure/
[CA]: https://docs.gitlab.com/ee/analytics/contribution_analytics.html
[ce-download]: /downloads/
[ce-up-for-grabs]: https://gitlab.com/gitlab-org/gitlab-ce/issues?label_name%5B%5D=up-for-grabs
[ce-webhooks]: https://docs.gitlab.com/ce/web_hooks/web_hooks.html
[ce]: https://gitlab.com/gitlab-org/gitlab-ce
[ci-cd-post]: /2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/
[ci-templates]: /2016/06/22/gitlab-8-9-released/#gitlab-ciyml-templates
[ci]: /gitlab-ci/
[com]: /gitlab-com/
[convdev]: /2016/09/13/gitlab-master-plan/#convdev
[demo]: https://www.youtube.com/watch?v=t_rB1oQdG98
[Digital Ocean]: /2016/04/19/gitlab-partners-with-digitalocean-to-make-continuous-integration-faster-safer-and-more-affordable/
[do]: /2016/04/27/getting-started-with-gitlab-and-digitalocean/
[doc]: https://docs.gitlab.com
[ee-devs]: /development/
[ee-download]: /free-trial/
[ee-trial]: /free-trial/
[ee]: https://gitlab.com/gitlab-org/gitlab-ee
[email]: https://docs.gitlab.com/ee/tools/email.html
[Environments]: http://docs.gitlab.com/ce/ci/yaml/README.html#sts=environment
[features]: /features/#compare
[File locking]: /2016/06/22/gitlab-8-9-released/#file-locking-new-product
[File-Lock]: https://docs.gitlab.com/ee/user/project/file_lock.html
[forum]: https://forum.gitlab.com
[forum]: https://forum.gitlab.com/
[GCA]: /solutions/cycle-analytics/
[geo]: https://docs.gitlab.com/ee/gitlab-geo/README.html
[GitHost]: https://githost.io/
[GitLab Container Registry]: /2016/05/23/gitlab-container-registry/
[GitLab Groups]: https://docs.gitlab.com/ce/workflow/groups.html
[global-search]: /2016/09/22/gitlab-8-12-released/#global-code-search-ee
[group-webhooks]: https://docs.gitlab.com/ee/web_hooks/web_hooks.html
[idea-prod-steps]: /2016/08/22/announcing-the-gitlab-issue-board/#gitlab-from-idea-to-production
[idea-prod]: /2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/#from-idea-to-production-with-gitlab
[integrations]: https://docs.gitlab.com/ee/integration/README.html
[issue tracker]: CE-TRACKER
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
[on-premises]: /2015/02/12/why-ship-on-premises-in-the-saas-era/
[openshift]: /2016/06/28/get-started-with-openshift-origin-3-and-gitlab/
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
[saas-or-not]: http://blog.deveo.com/choosing-between-self-hosted-and-saas-code-hosting-platforms/
[scope]: https://about.gitlab.com/direction/#scope
[Search]: https://gitlab.com/search
[shippable]: /2016/05/05/getting-started-gitlab-and-shippable/
[Slack]: https://docs.gitlab.com/ce/project_services/slack.html[Shippable]: /2016/05/05/getting-started-gitlab-and-shippable/
[support]: /support/
[Support]: /support/
[team]: [/team/]
[templates]: https://docs.gitlab.com/ee/customization/issue_and_merge_request_template.html
[todos-doc]: https://docs.gitlab.com/ce/workflow/todos.html
[workflow-post]: /2016/10/25/gitlab-workflow-an-overview/

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
