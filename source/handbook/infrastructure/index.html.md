---
layout: markdown_page
title: "Infrastructure"
---

## Communication<a name="reach-infra"></a>

- [**Public Issue Tracker**](https://gitlab.com/gitlab-com/infrastructure/issues/); please use confidential issues for topics that should only be visible to team members at GitLab. No longer active, but kept for reference, is the legacy public [Operations issue tracker](https://gitlab.com/gitlab-com/operations/issues) as well.
- [**Chat channel**](https://gitlab.slack.com/archives/infrastructure); please use the `#infrastructure` chat channel for questions that don't seem appropriate to use the issue tracker or the internal email address for.

## Infrastructure roles

The infrastructure team is split between production engineers and performance specialists.

Both roles are closely related as they touch on some of the same spots, for example, both care about the
[availability](https://gitlab.com/gitlab-com/infrastructure/issues?scope=all&sort=updated_desc&state=opened&utf8=%E2%9C%93&label_name%5B%5D=availability&label-name=)
and [performance](https://gitlab.com/gitlab-com/infrastructure/issues?scope=all&sort=updated_desc&state=opened&utf8=%E2%9C%93&label_name%5B%5D=performance&label-name=)
of GitLab.com, from different perspectives.

Both roles also care about building an infrastructure and monitoring that can be shipped to our customers.

### Production Engineers

Production engineers work on keeping the infrastructure that runs our services running fast and reliably.
This infrastructure includes GitLab.com, dev.GitLab.org and GitHost.io.

Production engineers also have a strong focus on enabling development to ship features as fast and bug
free as possible. Providing the monitoring tools that prevent shipping regressions that would affect
our customers. And building automation tools that lower the barrier of access to production and allow us
to scale with automation.

Responsibilities can be found in the [job description](jobs/production-engineer/index.html)

### Production Engineering Resources

- Documentation: refer to runbooks and internal documentation in this very page.
- Chat channels in Slack:
  - Alerts: monitoring tools post into this channel, production engineers should monitor this channel to act on alerts. Remember to let the people know when you are dealing with an alert, or if you have triggered it.
  - Infrastructure: general conversation about infrastructure goes on in this channel. Remember to let the people know when you are about to do some change in the infrastructure.
  - Releases: deployments and general releases conversation goes on here, lurk it to support deployments and help out when things go wrong.
- Operations channel archive:
  - You can find the infrastructure archive [here](https://docs.google.com/document/d/19yzyIHY9F_m5p0B0e6STSZyhzfo-vLIRVQ1zRRevWRM/edit#heading=h.lz1c6r6c9ejd).
-  Automated tasks and schedules
  - Weekly automatic OS updates are performed on Monday at 10:10 UTC.


### Performance Specialists

Performance specialists are developers that have a focus on improving GitLab.com performance.
They work on issues from the
[GitLab-CE](https://gitlab.com/gitlab-org/gitlab-ce/issues?scope=all&sort=updated_desc&state=opened&utf8=%E2%9C%93&label_name%5B%5D=performance&label-name=)
project.

For practical reasons we track the work that is on flight in the
[performance issue tracker](https://gitlab.com/gitlab-com/performance/issues) by cross linking,
but we keep the discussion in the source issue.

This is so we can have really quick 1 week sprints that allow us to iterate faster.

Performance specialists can also focus on critical infrastructure tasks that will enable GitLab.com to go faster, to
increase availability, or to just generally make it scale to handle more users with less resources.

We have a [public monitoring server](http://monitor.gitlab.net/dashboard/db/gitlab-status) that shows our most important metrics.

## Documentation

The main infrastructure documentation can be found in 2 places:

### Runbooks

[Runbooks are public](https://gitlab.com/gitlab-com/runbooks), but they are automatically mirrored in our
[development environment](https://dev.gitlab.org/cookbooks/runbooks/), this is so because if GitLab.com is down,
those runbooks would not be available to take it up again.

These runbooks aim to provide simple solutions for common problems, they should be pointed from our alerting
system and should also be kept up to date with whatever new finding we get as we learn how to scale GitLab.com
so these runbooks can also be adopted by our customers.

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
  - Refer to the _Outages and Blameless Post Mortems_ section ahead

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

Once this Post Mortem is finished, we will tweet from the GitLabStatus account with a link to the issue and a brief explanation of what is it about.

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
