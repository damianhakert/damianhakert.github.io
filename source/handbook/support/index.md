---
layout: markdown_page
title: Support
---

## Other support pages

- [Service Engineer On-boarding](/handbook/support/onboarding/)
- [PagerDuty](https://about.gitlab.com/handbook/support/pagerduty/)
- [PGP Process](https://about.gitlab.com/handbook/support/pgp_process/)
- [Support and Development Process](https://about.gitlab.com/handbook/support-and-development-process)

## Contents of the page

- [Support Direction](#support-direction)
- [Service Level Agreements](#sla)
- [Support Turbo](#support-turbo)
- [Dashboard](#dashboard)
- [Support Channels](#support-channels)
   - [Emergency Tickets](#emergency)
   - [Security disclosures](#security)
   - [GitLab.com downtime](#downtime)
   - [Regular tickets](#regular)
   - [Internal Support](#internal)
   - [Disqus from blog posts](#disqus)
   - [Twitter](#twitter)
   - [Posted Issues](#issue-tracker)
   - [GitLab.com Support Forum](#supp-forum)
   - [Facebook](#facebook)
   - [CE/EE/Omnibus Issue Trackers](#product-issue-tracker)
   - [Mailing List](#mailing-list)
   - [GitLab Forum](#gitlab-forum)
   - [Stack Overflow](#stack-overflow)
   - [Reddit](#reddit)
   - [Quora](#quora)
- [Non Channel Work](#other)

## Support Direction <a name="support-direction"></a>

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

By gathering all our support channels in a central location, ZenDesk, we'll be able to tag tickets
with relevant keywords, and gather data on channel load, agent load, and topic trends. Likewise,
through implementation of Swiftype on the [documentation](https://doc.gitlab.com/) server, we'll
get a better handle on what people are looking for and/or not finding.

**Decrease Demand for Support**

By making training materials for customer trainings available on [GitLab University](/university),
making documentation easy to find and easy to search, and constantly contributing to further documentation
with the trend discovery showing where the need is greatest, we can help the community become
as self sufficient as possible. A seamless interface between the support team and developers closes the
feedback loop of user experience back to development, and provides 'network' support for the Service Engineers
for tough issues.

**Improve Customer Experience**

By triaging support effort through internal SLA's, the team can improve the support experience
for key customers while still addressing the questions of all subscribers, and the rest of the GitLab community.

## Support Turbo<a name="support-turbo"></a>

Every now and then, it may occur that we come close to breaching our SLA's.
To prevent an actual breach from occurring, the Support team can call on the help
of several 'Support Turbo' developers who are called out on the [Team Page](https://about.gitlab.com/team/).
The support team calls for help when necessary via Slack, but in case of doubt or
conflicting priorities, the Development Lead needs to give the green light for the
support turbo developers to momentarily switch away from their other tasks.

## Dashboard <a name="dashboard"></a>

The [ZenDesk Insight dashboard](https://gitlab.zendesk.com/agent/reporting/analytics/period:0/dashboard:buLJ3T7IiFnr)
lists the activity for all our channels currently and summarized over the last 30 days (login to ZenDesk required).

<!--
The iframe below also shows this dashboard, but it requires a valid session for the above link. Signing in on this page doesn't seem to work.

<iframe frameborder="0" src="https://analytics.zendesk.com/dashboard.html#project=/gdc/projects/fan67iacybmx4rawsd6jcipe01ouaxvt&dashboard=/gdc/md/fan67iacybmx4rawsd6jcipe01ouaxvt/obj/65766&nochrome=true" width="100%" height="380px" allowTransparency="false"></iframe>
-->

We can't fit more than 13 views in the dashboard panel.
We have 6 views that are not channels.
Meaning we have 7 views left for all our channels.
That is why some channels are combined.

## Service Level Agreements <a name="sla"></a>

### Priorities

The channels are sorted in order of priority, there are 4 general SLA's:

1. Emergency tickets should be answered within 30 minutes.
2. Security disclosures through regular tickets should be answered within 1 business day.
3. Disqus and Twitter: we strive to answer them within 1 business day.
4. Posted Issues through Reddit: we strive to answer them within 2 business days.

Preferably we like to answer tickets sooner than the SLA requires.
The higher a channel is in the list the sooner it should be answered.

### Breaches

Within ZenDesk, the SLA's are set as follows. Under Business Rules in the Admin console,
Service Level Agreements are defined. Currently, one is defined, with different response times
required depending on the _priority_  of the ticket which can be Urgent, High, Normal, or Low.
Emergency tickets (SLA 1 per the list above) are tagged as "Urgent" using a trigger setting,
and SLA 2 items are tagged as either High or Normal priority, depending on the exact channel.
The response times configured for the different priorities are:

- 30 minutes (Urgent),
- 12 business hours (High),
- 16 business hours (Normal),
- 24 business hours (Low)

An email is sent to everyone in the support team when an SLA breach is imminent, see
the [automation in ZenDesk](https://gitlab.zendesk.com/agent/admin/automations/edit/80833987).

Within ZenDesk, currently we do _not_ have an SLA assigned (and no automated warnings)
to any tickets from channels below Regular Tickets, but we do track response times.

## Support Channels <a name="support-channels"></a>

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
have the link to the corresponding ZenDesk issue from where you will continue the conversation with the customer.

Once acknowledged, you need to login to [ZenDesk](https://gitlab.zendesk.com), go to the corresponding ticket
and let the customer know that you will handle their case. On this response you should ask for the best way
to contact them. Usual channels are Phone, Skype, WebEx or Hangouts.

#### WebEx

More often than not, WebEx will be the best tool for the job, so you can save yourself a step and already start
a WebEx session for this call. To do this you can use the `GitLab Support` WebEx account. Go to our
[WebEx Portal](https://gitlabmeetings.webex.com), click on the login button on the top right and use the
credentials found in the Support Vault on 1password.

![WebEx Login](/images/support/web-ex-login.png)

Once logged in, click the `Enter Room` button to start the WebEx meeting and send the following link to
the customer and ask them to join the call.

```
https://gitlabmeetings.webex.com/meet/gitlabsupport
```

![WebEx Room](/images/support/web-ex-room.png)

WebEx is usually the best choice, since it allows you to see the customer's desktop and
to control it on request. It also gives the customer the possibility to join via phone and
us the possibility to use our computer audio connection.

#### Crisis Situations

If you are unable to help the customer and their instance is in a critical state (unavailable, uncertainty of
data loss, etc.), you should **escalate** the PD incident to second level support, and work through the issue
together.

If an emergency takes longer than an hour to resolve,
and/or multiple people are or need to be involved, **start a google doc** that is open to the customer and the wider team at GitLab, and keep track of the
issues and ideas there. ZenDesk's 'linear' display of communication with a customer is not as effective in crisis situations, and the
majority of developers do not have access to ZenDesk in the first place. Announce the google doc in the appropriate
slack channel (#operations, #development, #general) so that individuals can contribute solutions and ideas. When the crisis
has been resolved, be sure to transfer pertinent know-how from the google doc to relevant documentation, handbooks, and/or
issue trackers, so that the google doc can be deprecated a.s.a.p.  In addition, Service Engineers and Developers involved
in the crisis should make time to have a hangout for hand-off to make sure that everyone has the chance to recover and stay
clear-headed.

### GitLab.com downtime <a name="downtime"></a>

When GitLab.com goes down a PD incident will be triggered as well, so the flow is the same as emergency tickets
for the first steps. If you are on call and are still working, you should keep an eye on our #operations channel
in [Slack](https://gitlab.slack.com), as warning messages will often start to appear before the PD incident is triggered.

Once you acknowledge the incident, you need to pinpoint the reason for the outage. Follow the documentation
found on our [Chef Repo](https://dev.gitlab.org/cookbooks/chef-repo). A fire drill to train you in this
situation should take place before you are put on rotation. If this has not happened, please let the team know.

### Security disclosures <a name="security"></a>

We have a [Responsible Disclosure Policy](https://about.gitlab.com/disclosure/).
Emails sent to security@gitlab.com go into ZenDesk and receive an autoresponder that
says: "Thank you for your responsible disclosure of a potential GitLab vulnerability.
We'll follow up with you within one business day."

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

#### HackerOne

We also use [HackerOne](https://hackerone.com/gitlab) to manage security reports.
The HackerOne dashboard lists all reports for which you need to respond within one business day. These
reports are also piped into ZenDesk, but they need to be responded to from the HackerOne dashboard and closed manually in ZenDesk
upon completion. Remember that all researchers should receive feedback as with regular support tickets,
and you should not hesitate to triage or escalate the report. **Always** mention that they can email us at any time for an update.
Eventually each report has to be accepted and/or closed through the HackerOne dashboard even if you've followed through on ZenDesk.

If you need to grant HackerOne permissions to a new GitLab user, have an admin send
an invitation from HackerOne and add you to the Internal group. You can find out who
the admins are by asking on the #support channel.

#### PGP Process

The key used to encode/decode PGP messages is stored in our Support Vault on 1Password.
We only provide our public PGP key upon request because it makes collaborating much
harder and only a small percentage of all disclosures are serious enough to require that overhead.

See [PGP Process](/handbook/support/pgp_process) for
information about using the security PGP key pair and decrypting messages.

### Regular ZenDesk tickets <a name="regular"></a>

You should always answer the tickets in a [FIFO](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)
manner. Make sure that you answer the tickets that are assigned to you first and then move on to new tickets
that have come in and are unassigned, again using FIFO.
When you need others to help please create an issue on the relevant GitLab issue tracker.

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

We collect this information in ZenDesk and link it to the organization, see the
[responding to tickets section in onboarding](/handbook/support/onboarding).

#### Unscheduled calls

While engaging with customers you should always be prepared to jump on a call with them. It is easier to get
all the information you might need on a 20 minute call than on 10 2-minute emails. If a conversation goes through
several back and forth emails and the problem still isn't close to being resolved, suggest a call via WebEx or
Google Hangouts.

### Internal Support<a name="internal"></a>

Fellow GitLab team members can reach out for help from the Support Team in various ways:

1. For normal support questions (can GitLab do x, how do I do x with GitLab) email
the internal support email alias that is listed in the "GitLab Email Forwarding"
google doc. Those emails create tickets in ZenDesk.
1. For longer term or larger scope questions, such as discussing customized training
requests create an [internal issue](https://dev.gitlag.org/gitlab/organization/issues/),
adding the "Support" label and @ mentioning one or more Service Engineers.
1. If customers or users have questions advise them to contact support direct via the relevant channel.
1. For quick questions that are urgent ping the support team on the support chat channel.


### Disqus questions on the blog <a name="disqus"></a>

All the comments from our blog are handled by Disqus, and we have an integration in place, where every new
comment or reply to a comment creates a new ticket in ZenDesk. As part of your daily support tasks, you should
make sure that this queue is as empty as possible. Right now there is no way for us to directly reply to the
comment from ZenDesk, so if a comment you see requires a reply (that is if the ticket is not from someone on
our team, or is a question or a problem) you need to click on the link to the comment and reply directly in
the blog post. Once you have replied, you should come back to ZenDesk and mark that ticket as solved, plus
the ticket that was created for your reply.

### Twitter <a name="twitter"></a>

Tweets that mention [@GitLab](https://twitter.com/GitLab), [@GitLabSupport](https://twitter.com/GitLabSupport),
or [@GitLabStatus](https://twitter.com/GitLabStatus), will create a ticket in ZenDesk,
and show up in the "Twitter and Facebook" view. All responses should be sent from ZenDesk.
If a tweet is responded to from TweetDeck, this risks duplicate responses. Responding
from ZenDesk also enables us to track our response times vs. our internal [SLA](#sla).

Our Developer Advocates also have access to tweets through ZenDesk, and often
participate in responding to questions. The support team does not retweet or favorite
any tweets; that is handled by the marketing team. Any tweets that appear to only
"need" liking or re-tweeting will be closed in ZenDesk with a tag "RT/like" added
for the purpose of gathering metrics.

The @GitLabStatus account should only be used to give updates on the availability
of GitLab.com and to follow up on users reporting that GitLab.com is unavailable.

When a tweet mentions 1 or more of the handles described above, it should be replied to from the main handle (@GitLab).

### Facebook<a name="facebook"></a>

Messages sent to our [Facebook page](https://www.facebook.com/gitlab/) also feed into ZenDesk.

### Follow up on issues posted on GitLab issue tracker<a name="issue-tracker"></a>

For ZenDesk issues you will have created issues on the relevant issue tracker.
Please refer to the priority as listed under [GitLab Workflow in the handbook](/handbook/#gitlab-workflow).

### GitLab.com Support Forum<a name="supp-forum"></a>

For issues specific to GitLab.com that have nothing to do with availability we have the
[Support Forum](https://gitlab.com/gitlab-com/support-forum/issues). This forum must also be checked periodically
for new issues and to report back if an issue has been solved. Ensure that you assign the issue to yourself to enable you to keep track of the issue and also to enable other service engineers to easily pick on unassigned tasks at a glance. Some people use this forum to report issues they
are having with their on-premises installation. In that case, you should refer them to the
[CE issue tracker](https://gitlab.com/gitlab-org/gitlab-ce/issues) or to our
[Getting Help](/getting-help/) page, depending on the issue they are having.

### GitLab CE/EE/Omnibus issue trackers<a name="product-issue-tracker"></a>

It is always encouraged to take a look at all our issue trackers and respond to bug reports or feature
requests:

- [GitLab EE](https://gitlab.com/gitlab-org/gitlab-ee/issues) some customers create issues here instead of
emailing us. When a new issue is created here, a ticket is created in ZenDesk, so we always know when this is
the case.
- [GitLab CE](https://gitlab.com/gitlab-org/gitlab-ce/issues)
- [Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/issues)

### Mailing list<a name="mailing-list"></a>

Respond to questions on the [GitLab Mailing List](https://groups.google.com/forum/#!forum/gitlabhq).

### Forum<a name="gitlab-forum"></a>

Questions from the [GitLab Forum](https://forum.gitlab.com/) flow into ZenDesk, but can only be responded to from
within the Forum environment.

### Stack Overflow<a name="stack-overflow"></a>

The [Stack Overflow tagged questions](http://stackoverflow.com/questions/tagged/gitlab) that relate to GitLab
flow into ZenDesk, but can only be responded to from within Stack Overflow.

### Reddit<a name="reddit"></a>

Respond to mentions of GitLab on Reddit, especially ones in the [GitLab Reddit](https://www.reddit.com/r/gitlab/).

### Quora<a name="quora"></a>

Respond to questions about GitLab on Quora, especially the ones that appear in the [GitLab Topic channel](https://www.quora.com/topic/GitLab/).

## Non channel work<a name="other"></a>

If you have time for it please improve GitLab: fix bugs, add features, and polish the website.
You can also consider hanging out on IRC to answer questions and help people (#gitlab on freenode.net).
