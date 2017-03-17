---
layout: markdown_page
title: "Infrastructure"
---

## Common Links

- [Public Infrastructure Issue Tracker](https://gitlab.com/gitlab-com/infrastructure/issues/); please use confidential issues for topics that should only be visible to team members at GitLab. No longer active, but kept for reference, is the legacy public [Operations issue tracker](https://gitlab.com/gitlab-com/operations/issues) as well.
- Chat channels; please use chat channels for questions that don't seem appropriate to use the issue tracker for.
  - [#prometheus-alerts](https://gitlab.slack.com/archives/infrastructure): monitoring tools post into this channel, production engineers should monitor this channel to act on alerts. Acting may be remediating or just fixing noisy alerts.
  - [#production](https://gitlab.slack.com/archives/production): for general conversation about production engineering.
  - [#security](https://gitlab.slack.com/archives/security): for general conversation about production security.
  - [#gitaly](https://gitlab.slack.com/archives/gitaly): for general conversation about production gitaly.
  - [#database](https://gitlab.slack.com/archives/database): for general conversation about production database related topics.  
  - The prior operations channel is [archived](https://docs.google.com/document/d/19yzyIHY9F_m5p0B0e6STSZyhzfo-vLIRVQ1zRRevWRM/edit#heading=h.lz1c6r6c9ejd).
- Documentation: refer to runbooks and internal documentation on this very page.
- On-call Log: [document](https://docs.google.com/document/d/1nWDqjzBwzYecn9Dcl4hy1s4MLng_uMq-8yGRMxtgK6M/edit#heading=h.nmt24c52ggf5) where we write events that happen in production - internal use only - editable by the whole company.

## Other pages

- [On-call](https://about.gitlab.com/handbook/on-call)
- [GitLab cloud images](https://about.gitlab.com/cloud-images/)

## On this page
{:.no_toc}

- TOC
{:toc}

## Infrastructure teams

The infrastructure team is populated by engineers who share the responsibility of keeping GitLab.com available, and safe, as well as making it scalable and performant.

These teams are:

* [Production](/handbook/infrastructure/production/): keeping GitLab.com available and scalable.
* [Security](/handbook/infrastructure/security/): keeping GitLab.com safe, from the perspective of the application, the infrastructure and the organization.
* [Database](/handbook/infrastructure/database/): keeping GitLab.com's database fast and scalable.
* [Gitaly](/handbook/infrastructure/gitaly/): making Git access scalable and fast.


## Monitoring

We do monitoring with prometheus, leveraging available exporters like the node or the postgresql exporters, and we build whatever else is necessary within production engineering itself. We maintain 2 monitoring infrastructures:
  - [Public monitoring infrastructure](http://monitor.gitlab.net/):
    - No auth is required
    - Automatically syncs from the private monitoring infrastructure on every chef client execution. Don't change dashboards here, they will be overwritten.
  - [Private monitoring infrastructure](https://performance.gitlab.net):
    - Highly Available setup
    - Alerting feeds from this setup
    - Private GitLab account is required to access
    - Separated from the public for security and availability reasons, they should have exactly the same graphs after we deprecate InfluxDB

## Automated tasks and schedules

Weekly automatic OS updates are performed on Monday at 10:10 UTC.

## Runbooks

[Runbooks are public](https://gitlab.com/gitlab-com/runbooks), but they are
automatically mirrored in our [development environment](https://dev.gitlab.org/cookbooks/runbooks/),
this is so because if GitLab.com is down, those runbooks would not be available
to take it up again.

These runbooks aim to provide simple solutions for common problems, they are
linked pointed from our alerting system and should also be kept up to date with
whatever new finding we get as we learn how to scale GitLab.com so these
runbooks can also be adopted by our customers.

Runbooks are divided into 2 main sections:

- What to do when: points to specific runbooks to run on stressful situations (on-call)
- How do I: points to general administration texts that explain how to perform different administration tasks.

When writing a new runbook, be mindful what the goal of it is:

- If it is for on-call situations, make it crisp and brief. Try to keep the following structure: pre-check, resolution, post-check .
- If it is for general management, it can be freely formatted.

### Chef cookbooks

Some basic rules:

- Use maintained cookbooks from https://supermarket.chef.io.
- Create a wrapper cookbook whenever a feature is missing.
- Make sure our custom cookbooks are public available from https://gitlab.com/gitlab-cookbooks.
- Make sure there is a copy in our DEV environment https://dev.gitlab.org/cookbooks and setup push mirror to keep it in sync.
- Berkshelf should only point to our cookbooks in DEV so we are able to fix our cookbooks whenever GitLab.com comes unavailable.
- Cookbooks should be developed using the team. We use merge requests and code review to share knowledge and build the best product we can.
- Cookbooks should be covered with ChefSpec and TestKitchen testing in order to ensure they do what they are supposed to and don't have conflicts.

Generally our [chef cookbooks](https://gitlab.com/groups/gitlab-cookbooks) live in the open, and they get mirrored back to our
[internal cookbooks group](https://dev.gitlab.org/cookbooks) for availability reasons.

There may be cases of cookbooks that could become a security concern, in which case it is ok to keep them in our GitLab
private instance. This should be assessed in a case by case and documented properly.

### Documentation specific to GitLab.com

There is some documentation that is specific to GitLab.com available in the [Chef Repo](https://dev.gitlab.org/cookbooks/chef-repo).
 Things that are specific to our infrastructure
providers or that would create a security treat for our installation are documented there.

Still, we aim to pull things out of there and into the runbooks, until this documentation is thin and on GitLab.com only.


## Outages and Blameless Post Mortems

Every time there is a production incident we will create an issue in the [infrastructure
issue tracker](https://gitlab.com/gitlab-com/infrastructure/issues) with the _outage_ label.

In this issue we will gather the following information:

* The timeline of events: what happened first, what later, what reasoning triggered what action.
* Sample graphs or logs captured from our monitoring explaining how they drove our reasoning.
* [The 5 whys](https://en.wikipedia.org/wiki/5_Whys) that lead to the root cause that triggered the incident.
* The things that worked well
* The things that can be improved
* Further actions with links to the issues that cover them

These issues should also be tagged with any other label that makes sense, for example, if the issue is related to storage, label it as such.

The responsibility of creating this post mortem is initially on the person that handled the incident, unless it gets assigned explicitly to someone else.

## Public by default policy

These blameless post mortems have to be public by default with just a few exceptions:

* The post mortem would affect a customer or employee privacy: revealing the real user name, email, private project names, any data that can identify the person, etc.
* The post mortem would reveal billing information.
* The post mortem would reveal GitLab's confidential information.

That's it, there are no other reasons.

If what's blocking us from revealing this information is shame because we made a mistake, that is not a good enough reason.

The post mortem is blameless because our mistakes are not a person mistake but a company mistake, if we made a bad decision because our monitoring failed we have to fix our monitoring, not blame someone for making a decision based on insufficient data.

On top of this, blameless post mortems help in the following aspects:

* We can help people understand the complexity of running a service in production, and how things can go wrong.
* We help ourselves to learn by reflecting and analyzing on why this issue has happened.
* We force ourselves to think what do we need to do to not make the same mistake again, or to improve our infrastructure in a way that we don't have to deal with the same incident.
* We open our reasoning and information to the public so they can chime in and help us out.
* We leave a great trace of information for onboarding new engineers. They can see how production fails.
* We can use these post mortems for recruiting and marketing.

Once this Post Mortem is created, we will tweet from the GitLabStatus account with a link to the issue and a brief explanation of what is it about.

## Make GitLab.com settings the default

As said in the [production engineer job description](jobs/production-engineer/index.html)
one of the goals is "Making GitLab easier to maintain to administrators all over the world".
One of the ways we do it is making GitLab.com settings the default for all our customers.
It is very important that GitLab.com is running GitLab Enterprise Edition with all its default settings.
We don't want users running GitLab at scale to run into any problems.

If it is not possible to use the default settings the difference should be documented in
[GitLab.com settings](https://about.gitlab.com/gitlab-com/settings/#gitlab-pages)
_before_ applying them to GitLab.com.
