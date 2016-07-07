---
layout: markdown_page
title: Support
---

## Communication<a name="reach-support"></a>

- [**Public Issue Tracker**](https://gitlab.com/gitlab-com/support/issues/); please use confidential issues for topics that should only be visible to team members at GitLab. NOTE: not for support requests, but for issues that relate to the support group.
- [**Chat channel**](https://gitlab.slack.com/archives/support); please use the `#support` chat channel for questions that don't seem appropriate to use the issue tracker or the internal email address for.

## Other support pages

- [Support Issue Tracker](https://gitlab.com/gitlab-com/support/issues)
- [Support Knowledge Base](https://gitlab.com/gitlab-com/support-kb)
- [Service Engineer Onboarding](/handbook/support/onboarding/)
- [PagerDuty](https://about.gitlab.com/handbook/support/pagerduty/)
- [PGP Process](https://about.gitlab.com/handbook/support/pgp_process/)
- [External support resources for the team](/handbook/support/external/)
- [Mentions Channel](/handbook/support/mentions-of-gitlab)

----

## Contents of the page
{:.no_toc}

- TOC
{:toc}

----

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

By making training materials for customer trainings available on [GitLab University](https://university.gitlab.com/),
making documentation easy to find and easy to search, and constantly contributing to further documentation
with the trend discovery showing where the need is greatest, we can help the community become
as self sufficient as possible. A seamless interface between the support team and developers closes the
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
group. It should not contain any sensitive information. Links to ZenDesk
or other references are encouraged.

## Support Turbo<a name="support-turbo"></a>

Every now and then, it may occur that we come close to breaching our SLA's.
To prevent an actual breach from occurring, the Support team can call on the help
of several 'Support Turbo' developers who are called out on the [Team Page](https://about.gitlab.com/team/).
The support team calls for help when necessary via Slack, but in case of doubt or
conflicting priorities, the Backend Lead needs to give the green light for the
support turbo developers to momentarily switch away from their other tasks.

## Dashboard <a name="dashboard"></a>

The [ZenDesk Insight dashboard](https://gitlab.zendesk.com/agent/reporting/analytics/period:0/dashboard:buLJ3T7IiFnr)
lists the activity for all our channels currently and summarized over the last 30 days (login to ZenDesk required).

We can't fit more than 13 views in the dashboard panel.
We have 6 views that are not channels.
Meaning we have 7 views left for all our channels.
That is why some channels are combined.

## Dormant Usernames <a name="dormantusers"></a>

Support often gets requests from gitlab.com users to release a username.
This can be implemented if the following criteria are met:

1. The account in question has no data.
1. There hasn't been any activity on the account (i.e. code, issues, MRs)
   for six months. This considers activity on projects the account owns
   as well as activity on projects the account participants in.
1. Support has had four failed attempts to  contact the user within a
 two week period.   
1. The user cannot be an owner of any active project.

Usernames will be prefixed with `idle` to keep the account active but
release the namespace.

## Service Level Agreements <a name="sla"></a>

### SLA categories

The channels are sorted in order of priority, there are 4 SLA categories:

1. Emergency tickets should be answered within 30 minutes.
2. Security disclosures through regular tickets should be answered within 1 business day.
3. Disqus and Twitter: we strive to answer them within 1 business day.
4. Posted Issues through the end: we strive to answer them within two weeks but
not sooner than two days, to give the rest of the community a chance to respond.

Preferably we like to answer tickets sooner than the SLA requires.
The higher a channel is in the list the sooner it should be answered.

### ZenDesk SLA settings and Breach alerts

Within ZenDesk, the SLA's are set as follows. Under Business Rules in the Admin console,
Service Level Agreements are defined. Currently only one is defined, with different response times
required depending on the _priority_  of the ticket which can be Urgent, High, Normal, or Low.

Emergency tickets (SLA category 1 per the list above) are tagged as "Urgent" using a 30 minute max response time setting.

SLA category 2 items are tagged as either High or Normal priority.

- High with a max response time setting of 8 business hours: security disclosures and subscribers.
- Normal with a max response time setting of 12 business hours: general support questions via the zendesk web form and support@ address.

An email is sent to everyone in the support team when an SLA breach is imminent, see
the [automation in ZenDesk](https://gitlab.zendesk.com/agent/admin/automations/edit/80833987).

Within ZenDesk, currently we do _not_ have an SLA assigned (and no automated warnings)
to any tickets from channels in category 3 and 4, but we do track response times.

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
to contact them. Usual channels are Phone, Skype, [WebEx](/handbook/support/onboarding/#webex) or Hangouts.

#### Crisis Situations

If you are unable to help the customer and their instance is in a critical state (unavailable, uncertainty of
data loss, etc.), you should **escalate** the PD incident to second level support, and work through the issue
together.

If an emergency takes longer than an hour to resolve,
and/or multiple people are or need to be involved, **start a google doc** that is open to the customer and the wider team at GitLab, and keep track of the
issues and ideas there. ZenDesk's 'linear' display of communication with a customer is not as effective in crisis situations, and the
majority of developers do not have access to ZenDesk in the first place. Announce the google doc in the appropriate
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

After a report has been closed as resolved or informative it can be [publicly disclosed](https://dev.gitlab.org/gitlab/organization/issues/805#note_72812).
This is can be requested either by GitLab or the reporter. If the reporter requests this then it will be released when you accept it
or 30 days after the request is submitted. Prior to publication you should edit the report and make sure that it has:

1. No sensitive information.
1. A link to the MR that fixed the issues.

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
any tweets; that is handled by the marketing team. Our support team _does_ reply
to almost all tweets, following the [social media guidelines](https://about.gitlab.com/handbook/marketing/social-media-guidelines/), regardless of whether
the tweet is of a technical nature or not. The marketing team's decision to favorite
and/or retweet is independent of the reply provided by the support team; so a tweet
may be responded to from ZenDesk, and separately favorited from TweetDeck, as an
example.

From time-to-time, we also receive tweets that mention competitors or negative events
related to them. In principle, we don't acknowledge these tweets as also described in
the [developer advocacy](https://about.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/#representing-gitlab-on-twitter)
section.

The @GitLabStatus account should only be used to give updates on the availability
of GitLab.com and to follow up on users reporting that GitLab.com is unavailable.

When a tweet mentions 1 or more of the handles described above, it should be replied to from the main handle (@GitLab).

Tweets use short links which require you to visit that link to make sure you understand the context.
To clarify if the request refers to GitLab or an externally hosted GitLab instance as we can only
handle requests for gitlab.com.

When resolving Twitter tickets you should:

1. Use [Play mode](https://support.zendesk.com/hc/en-us/articles/203690856-Working-with-tickets#topic_avj_hfg_vt) in the Twitter view. The default Twitter view will sort tickets by created date (ascending).
1. Not skip any tickets
1. Assign the ticket to yourself and ask on the appropriate Slack
   channel if you don't know the answer
1. Not cross assign tickets

### Facebook<a name="facebook"></a>

Messages sent to our [Facebook page](https://www.facebook.com/gitlab/) also feed into ZenDesk.

### Follow up on issues posted on GitLab issue tracker<a name="issue-tracker"></a>

For ZenDesk issues you will have created issues on the relevant issue tracker.
Please refer to the priority as listed under [GitLab Workflow in the handbook](/handbook/#gitlab-workflow).

### GitLab.com Support Tracker<a name="supp-forum"></a>

For issues specific to GitLab.com that have nothing to do with availability we have the
[Support Tracker](https://gitlab.com/gitlab-com/support-forum/issues). This forum must also be checked periodically
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

## Code of Conduct<a name="coc"></a>

Just as service engineers are expected to adhere to the [Code of
Conduct](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md#code-of-conduct), we
also expect customers to treat service engineers with the same level of respect.

If you receive threatening or hostile emails from a user, please create a
confidential issue in the [GitLab Support Issue Tracker](https://gitlab.com/gitlab-com/support/issues)
and include:

1. A history of the user's communication
1. Relevant links
1. Summary of the high-level issues

Include the Support Lead, VP of Engineering, and Director of PeopleOps in this issue. Together we will
evaluate on a case-by-case basis whether to take action (e.g. ban the user from the forums
for violating the Code of Conduct).
