---
layout: markdown_page
title: "Infrastructure"
---

## Infrastructure

The infrastructure team is split between production engineers and performance specialists.

Both roles are closely related as both touch on some of the same spots, for example, both roles cares about both the
[availability](https://gitlab.com/gitlab-com/infrastructure/issues?scope=all&sort=updated_desc&state=opened&utf8=%E2%9C%93&label_name%5B%5D=availability&label-name=)
and [performance](https://gitlab.com/gitlab-com/infrastructure/issues?scope=all&sort=updated_desc&state=opened&utf8=%E2%9C%93&label_name%5B%5D=performance&label-name=)
of GitLab.com.

Both roles also care about building an infrastructure and monitoring that can be shipped to our customers.

### Production Engineers

Production engineers work on the infrastructure team that runs our services, including GitLab.com.

A production engineer is a developer with deep knowledge of some parts of the stack, either it
is networking, or the linux kernel, or even an specific interesting in scaling and algorithms.

It could also be seen as a systems engineer who aims to code himself out of a job by automating
all the things.

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
* What to do when - points to specific runbooks to run on stressful situations (on-call)
* How do I - points to general administration texts that explain how to perform different administration tasks.

When writing a new runbook, be mindful what the goal of it is.
If it is for on-call situations, make it crisp and brief. Try to keep the following structure: pre-check, resolution, post-check .
If it is for general management, it can be freely formatted.

### Internal documentation

Available in the [Chef Repo](https://dev.gitlab.org/cookbooks/chef-repo).
There is some documentation that is specific to GitLab.com. Things that are specific to our infrastructure
providers or that would create a security treat for our installation.

Still, this documentation is [in the Chef Repo](https://dev.gitlab.org/cookbooks/chef-repo), and we aim to
start pulling things out of there into the runbooks, until this documentation is thin and GitLab.com only.

# Make GitLab.com settings the default

As said in the [production engineer job description](jobs/production-engineer/index.html)
one of the goals is "Making GitLab easier to maintain for administrators all over the world".
One of the ways we do it is making GitLab.com settings the default for all our customers.
It is very important that GitLab.com is running GitLab Enterprise Edition with all its default settings.
We don't want users running GitLab at scale to run into any problems.

If it is not possible to use the default settings the difference should be documented in
[requirements.md](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/install/requirements.md)
before applying them to GitLab.com.
