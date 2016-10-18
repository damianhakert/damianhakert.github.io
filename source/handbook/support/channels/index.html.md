---
layout: markdown_page
title: Support Channels
---

## On this page
{:.no_toc}

- TOC
{:toc}

----

Our [service engineers](/jobs/service-engineer) handle the channels listed below.
They are sorted in order of priority (strictest SLA at top), and as a result, it is possible that channels that appear lower
in this list experience longer delays in receiving responses. We are actively [hiring](/jobs/)
more Service Engineers to strengthen the team and provide support to the community.

### Emergency Tickets

When an emergency ticket comes in, it triggers a [PagerDuty](https://gitlab.pagerduty.com) incident. All
Service Engineers must have the PagerDuty application installed on their phones once they are added to
the on-call rotation schedule.

When a PD incident is triggered, the alarm will go off for the person on call. You should acknowledge the
incident within 5 minutes, or the person on second level support will be alerted. The PD incident will
have the link to the corresponding Zendesk issue from where you will continue the conversation with the customer.

Once acknowledged, you need to login to [Zendesk](https://gitlab.Zendesk.com), go to the corresponding ticket
and let the customer know that you will handle their case. On this response you should ask for the best way
to contact them. Usual channels are Phone, Skype, [WebEx](/handbook/support/onboarding/#webex) or Hangouts.

#### Crisis Situations

If you are unable to help the customer and their instance is in a critical state (unavailable, uncertainty of
data loss, etc.), you should **escalate** the PD incident to second level support, and work through the issue
together.

If an emergency takes longer than an hour to resolve,
and/or multiple people are or need to be involved, **start a google doc** that is open to the customer and the wider team at GitLab, and keep track of the
issues and ideas there. Zendesk's 'linear' display of communication with a customer is not as effective in crisis situations, and the
majority of developers do not have access to Zendesk in the first place. Announce the google doc in the appropriate
slack channel (#infrastructure, #development, #general) so that individuals can contribute solutions and ideas. When the crisis
has been resolved, be sure to transfer pertinent know-how from the google doc to relevant documentation, handbooks, and/or
issue trackers, so that the google doc can be deprecated a.s.a.p.  In addition, Service Engineers and Developers involved
in the crisis should make time to have a hangout for hand-off to make sure that everyone has the chance to recover and stay
clear-headed.

#### HackerOne

We also use [HackerOne](https://hackerone.com/gitlab) to manage security reports.
The HackerOne dashboard lists all reports for which you need to respond within one business day. These
reports are also piped into ZenDesk, but they need to be responded to from the HackerOne dashboard and closed manually in ZenDesk
upon completion. Remember that all researchers should receive feedback as with regular support tickets,
and you should not hesitate to triage or escalate the report. **Always** mention that they can email us at any time for an update.
Eventually each report has to be accepted and/or closed through the HackerOne dashboard even if you've followed through on ZenDesk.

After a report has been closed as resolved or informative it can be [publicly disclosed](https://dev.gitlab.org/gitlab/organization/issues/805#note_72812).
This is can be requested either by GitLab or the reporter. If the reporter requests this then it will be released when you accept it
or 30 days after the request is submitted. Prior to publication you should edit the report and make sure that it has:

1. No sensitive information.
1. A link to the merge request that fixed the issues.

If you need to grant HackerOne permissions to a new GitLab user, have an admin send
an invitation from HackerOne and add you to the Internal group. You can find out who
the admins are by asking on the #support channel.

### Regular Zendesk tickets

You should always answer the tickets in a [FIFO](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics))
manner. Make sure that you answer the tickets that are assigned to you first and then move on to new tickets
that have come in and are unassigned, again using FIFO. When you need others to help please create an issue on
the relevant GitLab issue tracker.

### Follow up on issues posted on GitLab issue tracker

For ZenDesk issues you will have created issues on the relevant issue tracker.
Please refer to the priority as listed under [GitLab Workflow in the handbook](/handbook/#gitlab-workflow).

### GitLab.com Support Tracker

For issues specific to GitLab.com that have nothing to do with availability we have the
[Support Tracker](https://gitlab.com/gitlab-com/support-forum/issues). This forum must also be checked periodically
for new issues and to report back if an issue has been solved. Ensure that you assign the issue to yourself to enable you to keep track of the issue and also to enable other service engineers to easily pick on unassigned tasks at a glance. Some people use this forum to report issues they
are having with their on-premises installation. In that case, you should refer them to the
[CE issue tracker](https://gitlab.com/gitlab-org/gitlab-ce/issues) or to our
[Getting Help](/getting-help/) page, depending on the issue they are having.

### GitLab CE/EE/Omnibus issue trackers

It is always encouraged to take a look at all our issue trackers and respond to bug reports or feature
requests:

- [GitLab EE](https://gitlab.com/gitlab-org/gitlab-ee/issues) some customers create issues here instead of
emailing us. When a new issue is created here, a ticket is created in ZenDesk, so we always know when this is
the case.
- [GitLab CE](https://gitlab.com/gitlab-org/gitlab-ce/issues)
- [Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/issues)

See [the issue triage policies](/handbook/engineering/issues/issue-triage-policies) for the above trackers for more information on how issues should be handled.

### TODO Docker

TODO Questions from Docker's [GitLab CE](https://hub.docker.com/r/gitlab/gitlab-ce/) page flow into ZenDesk.

## Non channel work

If you have time for it please improve GitLab: fix bugs, add features, and polish the website.
You can also consider hanging out on IRC to answer questions and help people (#gitlab on freenode.net).
