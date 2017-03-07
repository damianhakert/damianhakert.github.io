---
layout: markdown_page
title: "Infrastructure"
---

## Common Links

- [Public Infrastructure Issue Tracker](https://gitlab.com/gitlab-com/infrastructure/issues/); please use confidential issues for topics that should only be visible to team members at GitLab. No longer active, but kept for reference, is the legacy public [Operations issue tracker](https://gitlab.com/gitlab-com/operations/issues) as well.
- [Chat channel](https://gitlab.slack.com/archives/infrastructure); please use the `#infrastructure` chat channel for questions that don't seem appropriate to use the issue tracker or the internal email address for.

## On this page
{:.no_toc}

- TOC
{:toc}

## Infrastructure teams

The infrastructure team is populated by engineers who share the responsibility of making GitLab.com scale, keep it safe, available and scalable with specific focuses.

These teams are:

* Production: keeping GitLab.com available and scalable.
* Security: keeping GitLab.com safe, both the infrastructure and the application.
* Database: keeping GitLab.com's database fast and scalable.
* Gitaly: making Git access scalable and fast.

### Production Team

Composed of production engineers.

Production engineers work on keeping the infrastructure that runs our services
running fast and reliably.  This infrastructure includes staging, GitLab.com and
dev.GitLab.org.

Production engineers also have a strong focus on building the right toolsets
and automations to enable development to ship features as fast and bug free as
possible, leveraging the tools provided by GitLab.com itself - we must dogfood.

Another part of the job is building monitoring tools that allow quick
troubleshooting as a first step, then turning this into alerts to notify based on
symptoms, to then fixing the problem or automating the remediation. We can only scale
GitLab.com by being smart and using resources effectively, starting with our
own time as the main scarce resource.

[Production Engineer](jobs/production-engineer/index.html) job description.

#### Tenets

1. Security: reduce risk to its minimum, and make the minimum explicit.
1. Transparency, clarity and directness: public and explicit by default, we work in the open, we strive to get signal over noise.
1. Efficiency: smart resource usage, we should not fix scalability problems by throwing more resources at it but by understanding where the waste is happening and then working to make it disappear. We should work hard to reduce toil to a minimum by automating all the boring work out of our way.

#### Production and Staging Access

Production access is granted to production engineers, security engineers, and (production) on-call heroes.

Staging access is treated at the same level as production access because it contains production data.

Any other engineer, or lead, or manager at any level will not have access to production, and, in case some information is needed from production it must be obtained by a production engineer through an issue in the infrastructure issue tracker.

There is one temporary exception: release managers require production access to perform deploys, they will have production access until production engineering can offer a deployment automation that does not require chef nor ssh access. This is an ongoing effort.

#### Production Engineering Resources

- Documentation: refer to runbooks and internal documentation on this very page.
- Chat channels in Slack:
  - Prometheus-alerts: monitoring tools post into this channel, production engineers should monitor this channel to act on alerts. Acting may be remediating or just fixing noisy alerts.
  - Infrastructure: general conversation about infrastructure goes on in this channel. Remember to let the people know when you are about to do some change in the infrastructure.
- Operations channel archive:
  - You can find the infrastructure archive [here](https://docs.google.com/document/d/19yzyIHY9F_m5p0B0e6STSZyhzfo-vLIRVQ1zRRevWRM/edit#heading=h.lz1c6r6c9ejd).
-  Automated tasks and schedules
  - Weekly automatic OS updates are performed on Monday at 10:10 UTC.
- Monitoring: we do monitoring with prometheus leveraging available exporters like the node or the postgresql exporters, and we build whatever else is necessary within production engineering itself. We maintain 2 monitoring infrastructures:
  - [Public monitoring infrastructure](http://monitor.gitlab.net/):
    - No auth is required
    - Is automatically sync from the private monitoring infrastructure on every chef client execution. Don't change dashboards here, they will be overwritten.
  - [Private monitoring infrastructure](https://performance.gitlab.net):
    - Highly Available setup
    - Alerting feeds from this setup
    - Private GitLab account is required to access
    - Separated from the public for security and availability reasons, they should have exactly the same graphs after we deprecate InfluxDB

## Documentation

### Runbooks

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

### Internal documentation

Available in the [Chef Repo](https://dev.gitlab.org/cookbooks/chef-repo).
There is some documentation that is specific to GitLab.com. Things that are specific to our infrastructure
providers or that would create a security treat for our installation.

Still, this documentation is [in the Chef Repo](https://dev.gitlab.org/cookbooks/chef-repo), and we aim to
start pulling things out of there into the runbooks, until this documentation is thin and GitLab.com only.

### GitLab Cloud Images
A detailed process on creating and maintaining GitLab cloud images can be found [here](https://about.gitlab.com/cloud-images/).

## Production events logging

There are 2 kind of production events that we track:

- Changes into the production fleet: for this we record things [in the Chef Repo](https://dev.gitlab.org/cookbooks/chef-repo).
  - Deploys will be recorded automagically because of the way we do deploys.
  - General operations can be recorded by creating an empty commit in the repo and pushing it into origin.
- Outages and general production incidents
  - If we are required to act in production manually to perform any operation we should create an issue and consider labeling it as _toil_ to track the cost of such manual work load.
  - It we had a disruption in the service, we must create a blameless post mortem. Refer to the _Outages and Blameless Post Mortems_ section ahead

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

These issues should also be tagged with any other label that makes sense, for example, if the issue is related to storage, label it so.

The responsibility of creating this post mortem is initially on the person that handled the incident, unless it gets assigned explicitly to someone else.

### Public by default policy

These blameless post mortems have to be public by default with just a few exceptions:
* The post mortem would affect a customer or employee privacy: revealing the real user name, email, private project names, any data that can identify the person, etc.
* The post mortem would reveal billing information.
* The post mortem would reveal GitLab's confidential information.

That's it, there are no more reasons.

If what's blocking us from revealing this information is shame because we made a mistake, that is not a good enough reason.

The post mortem is blameless because our mistakes are not a person mistake but a company mistake, if we made a bad decision because our monitoring failed we have to fix our monitoring, not blame someone for making a decision based on insuficient data.

On top of this, blameless post mortems help in the following aspects:

* We can help people understand the complexity of running a service in production, and how things can go wrong.
* We help ourselves to learn by reflecting and analyzing on why this issue has happened.
* We force ourselves to think what do we need to do to not make the same mistake again, or to improve our infrastructure in a way that we don't have to deal with the same incident.
* We open our reasoning and information to the public so they can chime in and help us out.
* We leave a great trace of information for onboarding new engineers. They can see how production fails.
* We can use these post mortems for recruiting and marketing.

Once this Post Mortem is created, we will tweet from the GitLabStatus account with a link to the issue and a brief explanation of what is it about.

## On Call

See the separate [on-call page](/handbook/on-call/).

# Make GitLab.com settings the default

As said in the [production engineer job description](jobs/production-engineer/index.html)
one of the goals is "Making GitLab easier to maintain to administrators all over the world".
One of the ways we do it is making GitLab.com settings the default for all our customers.
It is very important that GitLab.com is running GitLab Enterprise Edition with all its default settings.
We don't want users running GitLab at scale to run into any problems.

If it is not possible to use the default settings the difference should be documented in
[GitLab.com settings](https://about.gitlab.com/gitlab-com/settings/#gitlab-pages)
_before_ applying them to GitLab.com.
