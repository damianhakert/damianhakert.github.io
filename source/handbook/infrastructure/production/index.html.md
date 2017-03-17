---
layout: markdown_page
title: "Production"
---

## Common Links

- [Public Infrastructure Issue Tracker](https://gitlab.com/gitlab-com/infrastructure/issues/); please use confidential issues for topics that should only be visible to team members at GitLab.
- [Chat channel](https://gitlab.slack.com/archives/production); please use the `#production` chat channel for questions that don't seem appropriate to use the issue tracker or the internal email address for.

## On this page
{:.no_toc}

- TOC
{:toc}

## Production Team

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

### Tenets

1. Security: reduce risk to its minimum, and make the minimum explicit.
1. Transparency, clarity and directness: public and explicit by default, we work in the open, we strive to get signal over noise.
1. Efficiency: smart resource usage, we should not fix scalability problems by throwing more resources at it but by understanding where the waste is happening and then working to make it disappear. We should work hard to reduce toil to a minimum by automating all the boring work out of our way.

### Production and Staging Access

Production access is granted to production engineers, security engineers, and (production) on-call heroes.

Staging access is treated at the same level as production access because it contains production data.

Any other engineer, or lead, or manager at any level will not have access to production, and, in case some information is needed from production it must be obtained by a production engineer through an issue in the infrastructure issue tracker.

There is one temporary exception: release managers require production access to perform deploys, they will have production access until production engineering can offer a deployment automation that does not require chef nor ssh access. This is an ongoing effort.


## Production events logging

There are 2 kind of production events that we track:

- Changes into the production fleet: for this we record things [in the Chef Repo](https://dev.gitlab.org/cookbooks/chef-repo).
  - Deploys will be recorded automagically because of the way we do deploys.
  - General operations can be recorded by creating an empty commit in the repo and pushing it into origin.
- Outages and general production incidents
  - If we are required to act in production manually to perform any operation we should create an issue and consider labeling it as _toil_ to track the cost of such manual work load.
  - It we had a disruption in the service, we must create a blameless post mortem. Refer to the _Outages and Blameless Post Mortems_ section ahead
