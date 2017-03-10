---
layout: markdown_page
title: "Security Team"
---

## Common Links

- Security crosses many teams in the company, but most often security related issues are posted in the [public Infrastructure issue tracker](https://gitlab.com/gitlab-com/infrastructure/issues/), or [gitlab-ce], or even [organization] trackers with the `~security` label. Please use confidential issues for topics that should only be visible to team members at GitLab.
- [Chat channel](https://gitlab.slack.com/archives/security); please use the `#security` chat channel for questions that don't seem appropriate to use the issue tracker or the internal email address for.
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

Always. Use `~security` and as appropriate also `~bug`, `~feature proposal`, `~customer`. Add [Security Level priority labels](#security-priority-labels) ( `~SL1`, `~SL2`, `~SL3`) to indicate perceived priority inside the Security Team.

The reasoning behind adding an `~SL` label to _every_ of these issues is that each issue _should_ have had
someone consider the urgency and impact, and this is best done at time of creating the issue since that is
when the information and context is "fresh" in your mind. It is OK to change the assessment and label at a
later date upon reflection. When issues are filed _without_  an `~SL` label it will be unclear whether an issue lacks the label due to lack of urgency / impact, or due to missing a step in the process.


### Security Priority Labels

Use the following as a guideline to determine which Security Level Priority label to use for bugs and feature proposals. For this, consider the _likelihood_ and _impact_  of a security incident that could result from this issue not being resolved.

- **Likelihood:**  _For example: If left unresolved, can we expect to see an incident within a release cycle?_
  - L1 - Wide open gap easily found, or perhaps even ways for the incident to be triggered _accidentally_ .
  - L2
  - L3 - Unlikely an incident would occur (hard to find vulnerability, super edge cases).
- **Impact:** _For example: Can data be lost or compromised as a result?_
  - I1 - Any data loss. Or data exposed of many users.
  - I2
  - I3 - Meta data exposed (e.g. number of merge requests pushed) of some users

| **Likelihood \ Impact**          | **I1 - High** | **I2 - Medium**  | **I3 - Low**   |
|-------------------------------|---------------|------------------|----------------|
| **L1 - High**                 | `SL1`         | `SL1`            | `SL2`          |
| **L2 - Medium**               | `SL1`         | `SL2`            | `SL3`          |
| **L3 - Low**                  | `SL2`         | `SL3`            | `SL3`          |

### Escalating from the Security Team to the Development Team

Issues with an `SL1` rating should be immediately brought to the attention of the relevant product managers, and team leads by pinging them in the issue and/or escalating via email and chat if they are unresponsive.

Issues with an `SL2` or `SL3` rating should also be brought to the attention of product managers and team leads, but in the context of getting them scheduled for next (patch) releases; they should have a lower sense of urgency.

**Note**
- Issues are not scheduled for a particular release unless the team leads add them to a release milestone
*and* they are assigned to a developer.
- Safety valve: If something is "truly urgent", pinging leads in the issues when they are created is the best
way to go, so it can be made Next Patch Release. This will often be preceded by loud debate and concurrence on
chat.
