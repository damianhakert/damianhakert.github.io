---
layout: markdown_page
title: Support
---

## Welcome to the GitLab Support Handbook
{: .no_toc}

----

## On this page
{:.no_toc}

- TOC
{:toc}

----

## Support Resources
{: #support-resources}

- [Service Engineer Onboarding](/handbook/support/onboarding)
   - [Onboarding Checklist](/handbook/support/onboarding/checklist)
- [Knowledge Base](/handbook/support/knowledge-base)
   - [Development Environment]

----

## Communication
{: #communication}

- [**Public issue tracker**](https://gitlab.com/gitlab-com/support/issues/); please use confidential issues for topics that should only be visible to team members at GitLab. NOTE: not for support requests, but for issues that relate to the support group.
- [**Chat channel**](https://gitlab.slack.com/archives/support); please use the `#support` chat channel for questions that don't seem appropriate to use the issue tracker or the internal email address for.

## Other support pages

- [Support Issue Tracker](https://gitlab.com/gitlab-com/support/issues)
- [Support Knowledge Base](https://gitlab.com/gitlab-com/support-kb)
- [On-Call](https://about.gitlab.com/handbook/on-call)
- [PGP Process](https://about.gitlab.com/handbook/support/pgp_process/)
- [External support resources for the team](/handbook/support/external/)
- [Mentions Channel](/handbook/support/mentions-of-gitlab)
- [Zendesk](/handbook/support/Zendesk)
- [Policies](/handbook/support/policies)

----

## Support Direction

The overall direction for Support in 2016 is set by our operations [strategy](/strategy), and
in order to meet our strategic objective, the following topics are being addressed by the team:
(also see the related [internal issue](https://dev.gitlab.org/gitlab/organization/issues/663) )

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

## Support Issue Tracker <a name="issue-tracker"></a>

The [Support project](https://gitlab.com/gitlab-com/support/issues)
hosts an issue tracker meant to improve our workflow by reporting any
problems that may arise on our tools or processes. Its also meant to
propose and discuss ideas in general.

The issue tracker is open to the community and part of the GitLab.com
group. It should not contain any sensitive information. Links to Zendesk
or other references are encouraged.

## Support Turbo

Every now and then, it may occur that we come close to breaching our SLA's.
To prevent an actual breach from occurring, the Support team can call on the help
of several 'Support Turbo' developers who are called out on the [Team Page](https://about.gitlab.com/team/).
The support team calls for help when necessary via Slack, but in case of doubt or
conflicting priorities, the Backend Lead needs to give the green light for the
support turbo developers to momentarily switch away from their other tasks.

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

## Dashboard

The [Zendesk Insight dashboard](https://gitlab.Zendesk.com/agent/reporting/analytics/period:0/dashboard:buLJ3T7IiFnr)
lists the activity for all our channels currently and summarized over the last 30 days (login to Zendesk required).

We can't fit more than 13 views in the dashboard panel.
We have 6 views that are not channels.
Meaning we have 7 views left for all our channels.
That is why some channels are combined.

## Service Level Agreements
{: #sla}

### SLA categories

The channels are sorted in order of priority, there are 4 SLA categories:

1. Emergency tickets should be answered within 30 minutes.
2. Security disclosures through regular tickets should be answered within 1 business day.
3. Disqus and Twitter: we strive to answer them within 1 business day.
4. Posted Issues through the end: we strive to answer them within two weeks but
not sooner than two days, to give the rest of the community a chance to respond.

Preferably we like to answer tickets sooner than the SLA requires.
The higher a channel is in the list the sooner it should be answered.

### Zendesk SLA settings and Breach alerts

Within Zendesk, the SLA's are set as follows. Under Business Rules in the Admin console,
Service Level Agreements are defined. Currently only one is defined, with different response times
required depending on the _priority_  of the ticket which can be Urgent, High, Normal, or Low.

Emergency tickets (SLA category 1 per the list above) are tagged as "Urgent" using a 30 minute max response time setting.

SLA category 2 items are tagged as either High or Normal priority.

- High with a max response time setting of 8 business hours: security disclosures and subscribers.
- Normal with a max response time setting of 12 business hours: general support questions via the Zendesk web form and support@ address.

An email is sent to everyone in the support team when an SLA breach is imminent, see
the [automation in Zendesk](https://gitlab.Zendesk.com/agent/admin/automations/edit/80833987).

Within Zendesk, currently we do _not_ have an SLA assigned (and no automated warnings)
to any tickets from channels in category 3 and 4, but we do track response times.

#### SLA Workflow

Service Engineers can work on any ticket they feel they can contribute to. However, tickets should be picked up in the following order to make sure that SLA's are not breached, and customers receive the proper level of service:

1. Tickets that are close to breaching "first time to reply" SLA
1. Tickets that are close to breaching "next time to reply" SLA
   - It is a courtesy to check with the assigned agent first, before "taking" one of these tickets. Ask if they can respond soon and offer to reply if they don't have the bandwidth.
1. New tickets (not close to breaching)
1. Other open tickets

When a ticket is breaching or has breached its first reply (or next reply) SLA this ticket must be picked up by any Service Engineer independently of who is assigned to it (although see the note re: courtesy in the list above). This also applies to tickets for Premium Customers (i.e. anyone picks up if close to breaching, regardless of who the Dedicated Service Engineer is).

## Support Channels

Our [service engineers](/jobs/service-engineer) handle the channels listed below.
They are sorted in order of priority (strictest SLA at top), and as a result, it is possible that channels that appear lower
in this list experience longer delays in receiving responses. We are actively [hiring](/jobs/)
more Service Engineers to strengthen the team and provide support to the community.

### Emergency Tickets <a name="emergency"></a>

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

### GitLab.com downtime <a name="downtime"></a>

When GitLab.com goes down a PD incident will be triggered as well, so the flow is the same as emergency tickets
for the first steps. If you are on call and are still working, you should keep an eye on our #infrastructure channel
in [Slack](https://gitlab.slack.com), as warning messages will often start to appear before the PD incident is triggered.

Once you acknowledge the incident, you need to pinpoint the reason for the outage. Follow the documentation
found on our [Chef Repo](https://dev.gitlab.org/cookbooks/chef-repo). A fire drill to train you in this
situation should take place before you are put on rotation. If this has not happened, please let the team know.

### Security disclosures <a name="security"></a>

We have a [Responsible Disclosure Policy](https://about.gitlab.com/disclosure/).
Emails sent to security@gitlab.com go into Zendesk and receive an autoresponder that
says: "Thank you for your responsible disclosure of a potential GitLab vulnerability.
We'll follow up with you within one business day." We also accept reports via [HackerOne](https://hackerone.com/gitlab), see [more information](/handbook/support/channels#HackerOne) on this channel.

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

### Regular Zendesk tickets <a name="regular"></a>

You should always answer the tickets in a [FIFO](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics))
manner. Make sure that you answer the tickets that are assigned to you first and then move on to new tickets
that have come in and are unassigned, again using FIFO. When you need others to help please create an issue on
the relevant GitLab issue tracker.

### Errors on GitLab.com <a name="errors-on-gitlab-com"></a>

If GitLab.com users encounter errors on GitLab.com (particularly Error 500s), it may be useful to see the encountered
error on our [Sentry instance](https://sentry.gitlap.com). You can search for a specific username in the search bar
by entering in the following:

user.username:<user ID>

For example:

user.username:sytse

This will bring up all exceptions encountered by the user.

Note that Sentry tries to group similar errors together, but it's possible
that it creates a separate entry for the same problem. If a GitLab issue
exists for that exception, it will show up by the headline as GL-XYZ, where
XYZ is some incident number defined by Sentry. You may have to search other
similar events or look on the issue tracker on GitLab.com whether a separate
GitLab issue has been created for the Sentry exception.

If the exception looks like it does not exist, feel free to create a GitLab
issue by clicking the "Create GitLab Issue" button. This will provide a
pre-filled form with all the details of the backtrace. Please clean up the
title and/or augment the description with what the user experienced when this
exception occurred to make it easier for developers to understand what
happened.

#### Scheduled calls

We also offer intake, upgrade and installation support for our customers. When these requests come in, you will schedule
a call/screen sharing session with them and either guide them through the upgrade process or take control of the
server yourself. You should make sure that the customer has a backup before you start the call, as they can take
a lot of time to complete and you don't want to do them while in the call. You should also make sure you know as
much as possible about the customer's instance as you can.

**Important information to collect**

1. Type of installation: Source/Omnibus
1. Current GitLab version
1. Version you're upgrading to (it isn't always the latest)
1. Use of GitLab CI (need to upgrade to 8.0 first, then 8.+)

We collect this information in Zendesk and link it to the organization, see the
[responding to tickets section in onboarding](/handbook/support/onboarding).

#### Unscheduled calls

While engaging with customers you should always be prepared to jump on a call with them. It is easier to get
all the information you might need on a 20 minute call than on 10 2-minute emails. If a conversation goes through
several back and forth emails and the problem still isn't close to being resolved, suggest a call via WebEx or
Google Hangouts.

If you feel too inexperienced to handle a call, ask someone more experienced to handle the call and
listen in if at all possible. After someone else had the call with the customer it is still your responsibility
to handle the ticket as long as the ticket is still assigned to you.

### Internal Support<a name="internal"></a>

Fellow GitLab team members can reach out for help from the Support Team in various ways:

1. For normal support questions (can GitLab do x, how do I do x with GitLab) email
the internal support email alias that is listed in the "GitLab Email Forwarding"
Google doc. Those emails create tickets in Zendesk.
1. For longer term or larger scope questions, such as discussing customized training
requests create an [internal issue](https://dev.gitlag.org/gitlab/organization/issues/),
adding the "Support" label and @ mentioning one or more Service Engineers.
1. If customers or users have questions advise them to contact support direct via the relevant channel.
1. For quick questions that are urgent ping the support team on the support chat channel.

### Spam

#### Flagging Issues as Spam

Many spammers use GitLab.com to create spam. Starting with 8.11, GitLab has
better integration with Akismet to check for spam whenever a user creates an
issue. This filter needs to be trained properly, however. With some effort our
spam detection should improve. If an issue is created on GitLab.com by a
spammer, before deleting the account, flag the user's issues as spam:

1. Login to GitLab.com with an admin account
2. View each issue and click on "Submit as spam"

#### Deleting Spammers

Once the issues are flagged and the user is verified to be a spammer, go to
the spammer's user profile and click on the "Report Abuse" button:

1. Login to GitLab.com with an admin account
2. Go to: https://gitlab.com/admin/abuse_reports
3. Be careful: Click on "Delete user" only if you are sure this user is a spammer.

### False positives: Ham

The Akismet filter may also flag false positives and prevent a user from
creating issues. The contents of the flagged issue get stored in the spam logs,
which is only accessible to admin users. From time to time, we may need to
submit the flagged issue as "ham" (e.g. when a user lodges a complaint on the
Support Tracker about not being able to create issues). Currently, there are
no notifications whenever an entry is flagged, so this needs to be monitored
periodically. To flag an issue as ham:

1. Login to GitLab.com with an admin account
2. Go to: https://gitlab.com/admin/spam_logs
3. Scan the contents of each log. If it appears that a user is trying to post valid
   information, click on "Submit as ham".
