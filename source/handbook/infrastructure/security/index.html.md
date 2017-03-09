---
layout: markdown_page
title: "Security Team"
---

## Common Links

- Security crosses many teams in the company, but most often security related issues are posted in the [public Infrastructure issue tracker](https://gitlab.com/gitlab-com/infrastructure/issues/), or [gitlab-ce], or even [organization] trackers with the `~security` label. Please use confidential issues for topics that should only be visible to team members at GitLab.
- [Chat channel](https://gitlab.slack.com/archives/security); please use the `#securit` chat channel for questions that don't seem appropriate to use the issue tracker or the internal email address for.
- [Frequently asked questions about Security of GitLab](/security) _the application_  as well as GitLab _the organization_  are documented on the top-level [security page](/security).
- [Security Best Practices](/handbook/security), using 1Password and similar tools, are documented on their own [security best practices page](/handbook/security).

## On this page
{:.no_toc}

- TOC
{:toc}

## Security topics

At a high level, the topic of security encompasses the

1. application
2. infrastructure of GitLab.com
3. organization and internal processes

## Issue Triage

The Security team needs to be able to communicate the priorities of security related issues to the Product, Development, and Infrastructure teams. Here's how the team can set priorities internally for subsequent communication (inspired in part by how the [support team does this](/handbook/support/workflows/support_workflows/issue_escalations.html.md)).

### Use labels

Always. Use `~security` and as appropriate also `~bug`, `~feature proposal`, `~customer`. Add [Security Priority labels](#security-priority-labels) ( `~SL1`, `~SL2`, `~SL3`) to indicate perceived priority inside the Security Team.

#### Maintain confidentiality

If an image, log output, etc. is required for the issue, try to produce your own test image. If you are unable
to reproduce the issue and you wish to use the image provided by the customer make sure you _obtain
permission_ from the customer since the image may (inadvertently) include sensitive information like names,
group names, user names, or code.

#### Information gathering

For the *Application and environment information* section of issue templates, use:

+ Omnibus: `sudo gitlab-rake gitlab:check`
+ Source: `sudo -u git -H bundle exec rake gitlab:check RAILS_ENV=production SANITIZE=true`
________________________
+ Omnibus: `sudo gitlab-rake gitlab:env:info`
+ Source: `sudo -u git -H bundle exec rake gitlab:env:info RAILS_ENV=production`

### Regressions

We aim to fix [regressions](/handbook/glossary/#regression) in patch releases, when possible. However, not all regressions are created equal - we will work to patch the high-impact ones first.

For all regressions, add the `~regression` label. For high-impact regressions,
also add `~"Next Patch Release"` and add the **current** _development month_ milestone.
Development months run from the 7th to the 6th and the **current** _development month_ milestone is typically
one milestone _ahead_ of the _release month_ milestone for the current
month's release. This can be confusing because the regression may be for 8.16, and should
be fixed in an 8.16 patch release. However, the developers are working on the release of the feature-frozen
8.17 milestone, and on the newest release in milestone 9.0, so the regression should be assigned there (9.0)
for attention. See the [development process](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/PROCESS.md#feature-freeze) for more details on
this. In this case, the _issue_ gets the 9.0 milestone. The _merge request_ will get the 8.16 milestone, and
will be picked into the stable branches of both 8.16 and 8.17. Confused? Check in the `#development` chat
channel.


### Bugs and Feature Proposals

By default, add an appropriate [support priority label](#support-priority-labels) to bugs and feature proposals. The labels are `~SP1`, `~SP2`, and `~SP3`, where `SP1` is the highest priority.
These labels are applied in addition to the `~bug`, `~feature proposal` and `~customer` labels. Use
priority labels in accordance with the urgency / impact matrix below.

The reasoning behind adding an `~SP` label to _every_ of these issues is that each issue _should_ have had
someone consider the urgency and impact, and this is best done at time of creating the issue since that is
when the information and context is "fresh" in your memory. It is OK to change the assessment and label at a
later date upon reflection (for example, during the support-internal scheduling meeting). When an issues are
allowed to be filed _without_  an `~SP` label it will be unclear whether an issue lacks the label due to lack
of urgency / impact, or due to missing a step in the process.

> **Note about feature proposals:** GitLab has limited development resources.
  Additionally, we must think about how widely applicable a feature may be to
  other users. Requests that are very specific to one company's workflow are
  likely to be rejected. Even if a feature seems widely applicable, we may
  leave the feature proposal dormant for some time and see if other users
  and customers chime in that they are also interested. Features that garner
  interest from multiple organizations will be considered more rapidly. Of
  course, there are always exceptions to these 'rules'. This note is meant to
  set the expectation that feature proposals may not be implemented quickly.

### Support Priority labels

Use the following as a guideline to determine which Support Priority label to use (if any) for bugs and feature proposals.

- **Urgency:** _For example: Does this break all GitLab functionally or just a small part?_
  - U1 - A large part, or a fundamental part
  - U2
  - U3 - Only a small part
- **Impact:** _For example: How many users does this impact?_
  - I1 - Many users
  - I2
  - I3 - Limited number of users

| **Urgency \ Impact**          | **I1 - High** | **I2 - Medium**  | **I3 - Low**   |
|-------------------------------|---------------|------------------|----------------|
| **U1 - High**                 | `SP1`         | `SP1`            | `SP2`          |
| **U2 - Medium**               | `SP1`         | `SP2`            | `SP3`          |
| **U3 - Low**                  | `SP2`         | `SP3`            | `SP3`          |

### Escalating from the Support Team to the Development Team

On the last Tuesday of each month, the Support Team reviews the `SP` labeled issues (especially `SP1` and
`SP2`), discusses priorities, and chooses the top few to present to the product and development team
for potential deliverables in the next release.

After the support team prioritizes it, we ping the relevant development lead and product manager for the express purpose of
scheduling. Having the team leads comment in the issues will help customers understand the
context around why / when their issues are being resolved, and it provides direct feedback from
customers to the Development and Product teams.

Working this way, it is possible that a customer reported issue is not picked up for a while (scheduling
first, then time to work on a fix, then schedule for release, etc.). However, the idea is that this is OK
because most truly urgent issues will in fact be regressions that don’t have this
scheduling problem. If a bug isn't a regression, that means it has existed for more than a month when the customer notes it, and thus we've gone at least a full month without someone reporting the issue as urgent.

**Note**
- Issues are not scheduled for a particular release unless the team leads add them to a release milestone
*and* they are assigned to a developer. We aim to be realistic about scheduled deliverables and will
avoid scheduling issues that cannot be delivered in a given release.
- Safety valve: If something is "truly urgent", pinging leads in the issues when they are created is the best
way to go, so it can be made Next Patch Release. This will often be preceded by loud debate and concurrence on
chat.
