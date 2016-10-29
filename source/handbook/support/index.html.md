---
layout: markdown_page
title: Support
---

## Welcome to the GitLab Support Handbook
{: .no_toc}

**Looking for technical support? Please visit the [Support Page](https://about.gitlab.com/support/) instead.**
{:.no_toc}

----

### On this page
{:.no_toc}

- TOC
{:toc}

----

## <i class="fa fa-book fa-fw icon-color font-awesome" aria-hidden="true"></i> Support Resources

- [Service Engineer Onboarding](/handbook/support/onboarding)
   - [Onboarding Checklist](/handbook/support/onboarding/checklist)
- [Support Policies](/handbook/support/policies)
- [Knowledge Base](/handbook/support/knowledge-base)
- [Support Channels](/handbook/support/channels)
- [On-Call](/handbook/on-call/)

----

## <i class="fa fa-question-circle fa-fw icon-color font-awesome" aria-hidden="true"></i>  Support Direction

The overall direction for Support in 2016 is set by our operations [strategy](/strategy), and
in order to meet our strategic objective, the following topics are being addressed by the team:
(also see the related [direction issue](https://gitlab.com/gitlab-com/support/issues/40))

**Increase Capacity**

By hiring more service engineers, adding [Support Turbos](#support-turbo) when needed, and
making sure that the newly hired service engineers have training materials and pathway readily
available and defined when they join. We'll also aim to do a better job acknowledging and incentivizing
the rest of the community in their role of supporting the community at large through contributions to
documentation and participation in social channels.

**Trend discovery**

By gathering all our support channels in a central location, Zendesk, we'll be able to tag tickets
with relevant keywords, and gather data on channel load, agent load, and topic trends. Likewise,
through implementation of Swiftype on the [documentation](https://doc.gitlab.com/) server, we'll
get a better handle on what people are looking for and/or not finding.

**Empower Users**

By making training materials for customer trainings available on [GitLab University](https://university.gitlab.com/),
making documentation easy to find and easy to search, and constantly contributing to further documentation
with the trend discovery showing where the need is greatest, we can help the community become
as self sufficient as possible and empower users to problem-solve. A seamless interface between the support team and developers closes the
feedback loop of user experience back to development, and provides 'network' support for the Service Engineers
for tough issues.

**Improve Customer Experience**

By triaging support effort through internal SLA's, the team can improve the support experience
for key customers while still addressing the questions of all subscribers, and the rest of the GitLab community.

## Service Level Agreements
{: #sla}

The channels are sorted in order of priority, there are 4 SLA categories:

| SLA | Channel                | Response Time                          |
|-----|----------------------------|----------------------------------------|
| 1   | [Emergencies](/handbook/support/channels#emergency-tickets)                | 30 minutes                             |
| 2   | [Regular Tickets](/handbook/support/channels#regular-zendesk-tickets) and [Security](/handbook/support#security-disclosures) | 1 business day                         |
| 3   | [Disqus](/handbook/support#disqus)  and [Twitter](/handbook/support#twitter)         | 1 business day                         |
| 4   | Posted Issues & Other      | Two weeks but not sooner than two days |

**Response time indicates the first reply time.**

Preferably we like to answer tickets sooner than the SLA requires.
The higher a channel is in the list the sooner it should be answered.

### SLA Workflow

Service Engineers can work on any ticket they feel they can contribute to. However, tickets should be picked up in the following order to make sure that SLA's are not breached, and customers receive the proper level of service:

1. Tickets that are close to breaching "first time to reply" SLA
1. Tickets that are close to breaching "next time to reply" SLA
   - It is a courtesy to check with the assigned agent first, before "taking" one of these tickets. Ask if they can respond soon and offer to reply if they don't have the bandwidth.
1. New tickets (not close to breaching)
1. Other open tickets

When a ticket is breaching or has breached its first reply (or next reply) SLA this ticket must be picked up by any Service Engineer independently of who is assigned to it (although see the note re: courtesy in the list above). This also applies to tickets for Premium Customers (i.e. anyone picks up if close to breaching, regardless of who the Dedicated Service Engineer is).

### Breach Hawks

Breach hawks are members of the support team who help the rest of the team keep an eye out for nearly-breaching tickets, so that they can be responded to in a timely manner. Of course, any and all members of the Support Team will have a sense of how many tickets are close to breaching and how high the load is on any given day. But it can happen that you're deep into a ticket, a customer call, etc., unaware of the impending doom. That's where breach hawks come in: they tackle their tickets, but they also keep an eye out for the team at large; and can call in the [Support Turbos](#support-turbo) if and when needed.

### Support Turbo

Every now and then, it may occur that we come close to breaching our SLA's.
To prevent an actual breach from occurring, the Support team can call on the help
of several 'Support Turbo' developers who are called out on the [Team Page](https://about.gitlab.com/team/).
The support team calls for help when necessary via Slack, but in case of doubt or
conflicting priorities, the Backend Lead needs to give the green light for the
support turbo developers to momentarily switch away from their other tasks.

### Zendesk SLA settings and Breach alerts

SLA's are set as Business Rules within Zendesk. For more information, please refer to the specific [Zendesk](/handbook/support/zendesk)  page.

### Zendesk Dashboard

The [Zendesk Insight dashboard](https://gitlab.Zendesk.com/agent/reporting/analytics/period:0/dashboard:buLJ3T7IiFnr)
lists the activity for all our channels currently and summarized over the last 30 days (login to Zendesk required).

We can't fit more than 13 views in the dashboard panel.
We have 6 views that are not channels.
Meaning we have 7 views left for all our channels.
That is why some channels are combined.

## Dedicated Service Engineers

Certain subscribers have purchased Premium Support (TODO: create /support page), which gives them access to a Dedicated Service Engineer. This means that tickets that arrive in Zendesk from people within the subscriber's organization are routed to a dedicated SE by way of a trigger in Zendesk.

- The sales team requests a Dedicated Service Engineer (DSE) by creating a confidential issue on the [support issue tracker](https://gitlab.com/gitlab-com/support/issues/new), using the ["Dedicated Service Engineer" issue template](https://gitlab.com/gitlab-com/support/raw/master/.gitlab/issue_templates/Dedicated%20service%20engineer.md) (available as a template upon creating a new issue in the Support issue tracker) as soon as it is clear that a dedicated service engineer will be needed (this can be _before_ the deal is closed). The issue should be assigned to the Support Lead. Please include details that make it easier to pick an appropriate DSE, such as client timezone, language, specific needs, etc.
   - Once agreement is reached on who the DSE should be, following a workflow that is similar to how people are added to email forwarding aliases, or vaults in 1Password, in the [Dedicated Service Engineers google doc](https://docs.google.com/spreadsheets/d/1fCQ3yTbu6y2uKMM4IIEljzAZgHX2FFeG2y9XwWy7G-g/edit#gid=0), write in the customer name and chosen DSE using the "suggesting" mode. Any of the Service Engineers with admin access in Zendesk can then create the trigger, and "accept" the suggestion. Having the google sheet allows for greater visibility within the organization since not everyone knows their way around Zendesk or SalesForce.
   - Related section of the [Sales handbook](/handbook/sales/#premium-support).
- To make sure that these subscribers are served well, even when their dedicated SE is not directly
available, there is a 'view' in Zendesk to display all "dedicated" tickets so
that other Service Engineers can see them and jump in to avoid an SLA breach.
- If you are the Dedicated Service Engineer for an account and you will be away for a
foreseeable reason (such as vacation), change the trigger in Zendesk for the duration
of your absence. Any tickets answered by others should mention "I will be helping
you in this matter since your dedicated Service Engineer, [name], is unfortunately
currently unavailable to respond to your ticket." When you return, you should review
all tickets submitted by the subscriber during your absence, and make sure to follow-through
or follow-up as required.

## Security disclosures

We have a [Responsible Disclosure Policy](https://about.gitlab.com/disclosure/).
Emails sent to security@gitlab.com go into Zendesk and receive an autoresponder that
says: "Thank you for your responsible disclosure of a potential GitLab vulnerability.
We'll follow up with you within one business day." We also accept reports via [HackerOne](https://hackerone.com/gitlab), see [more information](/handbook/support/channels#hackerone) on this channel.

Please be very patient with these reports. Do not say 'there is no problem', you
might be misunderstanding something that can lead to a 0 day disclosure.
Give examples and keep asking questions until you understand the problem or until
the researcher concludes there is no problem.
If someone invested time to help us, offer to mention them on our [Security Researcher Acknowledgments page](/vulnerability-acknowledgements/)
even if there was no actual vulnerability.
If you say that we'll get back to them **always** mention that they can email us at any time for an update.
This is really important to prevent a 0 day disclosure resulting from us forgetting to respond.

If you need help from developers to diagnose the issue please open an issue on dev.gitlab.org so we can work in private.
If someone opens a public issue please leave a message:
"Thank you for helping to
make GitLab more secure! We removed the contents of your vulnerability disclosure
to keep it private. We opened an internal issue to look at your disclosure. Can
you please use our [Responsible Disclosure Policy](/disclosure/)
to send us an email that references this url so we can communicate in private?"

#### PGP Process

The key used to encode/decode PGP messages is stored in our Support Vault on 1Password.
We only provide our public PGP key upon request because it makes collaborating much
harder and only a small percentage of all disclosures are serious enough to require that overhead.

See [PGP Process](/handbook/support/pgp_process) for
information about using the security PGP key pair and decrypting messages.

## Internal Support

Fellow GitLab team members can reach out for help from the Support Team in various ways:

1. For normal support questions (can GitLab do x, how do I do x with GitLab) email
the internal support email alias that is listed in the "GitLab Email Forwarding"
Google doc. Those emails create tickets in Zendesk.
1. For longer term or larger scope questions, such as discussing customized training
requests create a [support issue](https://gitlab.com/gitlab-com/support/issues)
1. If customers or users have questions advise them to contact support direct via the relevant channel.
1. For quick questions that are urgent ping the support team on the support chat channel.

## Contacting support

### Support Issue Tracker

The [Support project](https://gitlab.com/gitlab-com/support/issues)
hosts an issue tracker meant to improve our workflow by reporting any
problems that may arise on our tools or processes. Its also meant to
propose and discuss ideas in general.

The issue tracker is open to the community and part of the GitLab.com
group. It should not contain any sensitive information. Links to Zendesk
or other references are encouraged.

### Support chat channels

We use our chat internally as a communication tool. The support channels are as follows:  

- [#Support](https://gitlab.slack.com/messages/support) - This is the general support channel. Don't know where to ask a question? Start here.
- [#support-live-feed](https://gitlab.slack.com/messages/support-live-feed) - Feed of all Zendesk related events
- [#mentions-of-gitlab](https://gitlab.slack.com/messages/mentions-of-gitlab) - Mentions of GitLab from various news sources - [info](/handbook/support/channels#mentions)
- [#gitlab-issue-feed](https://gitlab.slack.com/messages/gitlab-issue-feed) - Feed of all GitLab-CE issues
