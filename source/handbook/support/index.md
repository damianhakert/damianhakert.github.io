---
layout: markdown_page
title: Support
---

## Other support pages

- [Common responses to problems](/handbook/support/common-responses.html)
- [Service Engineer Onboarding](/handbook/support/onboarding.html)
- [Support and Development Process](https://about.gitlab.com/handbook/support-and-development-process)

## Introduction

A [service engineer](/jobs/service-engineer) handles the following channels.
They are sorted in order of priority, and as a result, it is possible that channels that appear lower 
in this list experience longer delays in receiving responses. We are actively [hiring](https://about.gitlab.com/jobs/) 
more Service Engineers to strengthen the team and provide support to the community.

### Support Turbo

Every now and then, it may occur that we come close to breaching our SLA's. 
To prevent an actual breach from occurring, the Support team can call on the help 
of several 'Support Turbo' developers who are called out on the [Team Page](https://about.gitlab.com/team/). 
The support team calls for help when necessary via Slack, but in case of doubt or 
conflicting priorities, the Development Lead needs to give the green light for the 
support turbo developers to momentarily switch away from their other tasks.

## Dashboard

The [ZenDesk Insight dashboard](https://gitlab.zendesk.com/agent/reporting/analytics/period:0/dashboard:buLJ3T7IiFnr)
lists the activity for all our channels currently and summarized over the last 30 days (login to ZenDesk required).

The iframe below also shows this dashboard, but it requires a valid session for the above link. Signing in on this page doesn't seem to work.

<iframe frameborder="0" src="https://analytics.zendesk.com/dashboard.html#project=/gdc/projects/fan67iacybmx4rawsd6jcipe01ouaxvt&dashboard=/gdc/md/fan67iacybmx4rawsd6jcipe01ouaxvt/obj/65766&nochrome=true" width="100%" height="380px" allowTransparency="false"></iframe>

## Emergency Tickets

When an emergency ticket comes in, it triggers a [PagerDuty](https://gitlab.pagerduty.com) incident. All
Service Engineers must have the PagerDuty application installed on their phones once they are added to
the on-call rotation schedule.

When a PD incident is triggered, the alarm will go off for the person on call. You should acknowledge the
incident within 5 minutes, or the person on second level support will be alerted. The PD incident will
have the link to the corresponding ZenDesk issue from where you will continue the conversation with the customer.

Once acknowledged, you need to login to [ZenDesk](https://gitlab.zendesk.com), go to the corresponding ticket
and let the customer know that you will handle their case. On this response you should ask for the best way
to contact them. Usual channels are Phone, Skype, WebEx or Hangouts.

### WebEx

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

### Crisis Situations

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

## GitLab.com downtime

When GitLab.com goes down a PD incident will be triggered as well, so the flow is the same as emergency tickets
for the first steps. If you are on call and are still working, you should keep an eye on our #operations channel
in [Slack](https://gitlab.slack.com), as warning messages will often start to appear before the PD incident is triggered.

Once you acknowledge the incident, you need to pinpoint the reason for the outage. Follow the documentation
found on our [Chef Repo](https://dev.gitlab.org/cookbooks/chef-repo). A fire drill to train you in this
situation should take place before you are put on rotation. If this has not happened, please let the team know.

## Security disclosures

We have a [Responsible Disclosure Policy](https://about.gitlab.com/disclosure/).
Emails sent to security@gitlab.com go into ZenDesk and receive an autoresponder that 
says: "Thank you for your responsible disclosure of a potential GitLab vulnerability. 
We'll follow up with you within one business day."

Please be very patient with these reports. Do not say 'there is no problem', you 
might be misunderstanding something that can lead to a 0 day disclosure.
Give examples and keep asking questions until you understand the problem or until 
the researcher concludes there is no problem.
If someone invested time to help us, offer to mention them on our [Security Researcher Acknowledgments page](https://about.gitlab.com/vulnerability-acknowledgements/) 
even if there was no actual vulnerability.
If you say that we'll get back to them **always** mention that they can email us at any time for an update.
This is really important to prevent a 0 day disclosure resulting from us forgetting to respond.

If you need help from developers to diagnose the issue please open an issue on dev.gitlab.org so we can work in private.
If someone opens a public issue please leave a message:   
"Thank you for helping to 
make GitLab more secure! We removed the contents of your vulnerability disclosure 
to keep it private. We opened an internal issue to look at your disclosure. Can 
you please use our [Responsible Disclosure Policy](https://about.gitlab.com/disclosure/) 
to send us an email that references this url so we can communicate in private?"

### HackerOne

We also use [HackerOne](https://hackerone.com/gitlab) to manage security reports. 
The HackerOne dashboard lists all reports for which you need to respond within one business day. These 
reports are also piped into ZenDesk, but they need to be responded to from the HackerOne dashboard and closed manually in ZenDesk 
upon completion. Remember that all researchers should receive feedback as with regular support tickets,
and you should not hesitate to triage or escalate the report. **Always** mention that they can email us at any time for an update. 
Eventually each report has to be accepted and/or closed through the HackerOne dashboard even if you've followed through on ZenDesk.
  
If you need to grant HackerOne permissions to a new GitLab user, have an admin send 
an invitation from HackerOne and add you to the Internal group. You can find out who 
the admins are by asking on the #support channel.   

### PGP Process

The key used to encode/decode PGP messages is stored in our Support Vault on 1Password.
We only provide our public PGP key upon request because it makes collaborating much 
harder and only a small percentage of all disclosures are serious enough to require that overhead.

See [PGP Process](/handbook/support/pgp_process.html) for
information about using the security PGP key pair and decrypting messages.

## Regular ZenDesk tickets

You should always answer the tickets in a [FIFO](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)
manner. Make sure that you answer the tickets that are assigned to you first and then move on to new tickets
that have come in and are unassigned, again using FIFO.
When you need others to help please create an issue on the relevant GitLab issue tracker.

### Scheduled calls

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
[responding to tickets section in onboarding](https://about.gitlab.com/handbook/support/onboarding.html).

### Unscheduled calls

While engaging with customers you should always be prepared to jump on a call with them. It is easier to get
all the information you might need on a 20 minute call than on 10 2-minute emails. If a conversation goes through
several back and forth emails and the problem still isn't close to being resolved, suggest a call via WebEx or
Google Hangouts.

## Disqus questions on the blog

All the comments from our blog are handled by Disqus, and we have an integration in place, where every new
comment or reply to a comment creates a new ticket in ZenDesk. As part of your daily support tasks, you should
make sure that this queue is as empty as possible. Right now there is no way for us to directly reply to the
comment from ZenDesk, so if a comment you see requires a reply (that is if the ticket is not from someone on
our team, or is a question or a problem) you need to click on the link to the comment and reply directly in
the blog post. Once you have replied, you should come back to ZenDesk and mark that ticket as solved, plus
the ticket that was created for your reply.

## Twitter

From a support perspective the Service Engineers should only answer questions coming to
[@GitLabSupport](https://twitter.com/GitLabSupport) or [@GitLabStatus](https://twitter.com/GitLabStatus) directly.
Tweets with a mention of these accounts **anywhere** in the tweet will create a ticket in ZenDesk and they will
show up under the `Social` view.

We know that many users will still mention our main [@gitlab](https://twitter.com/gitlab) account when they
want to ask a technical question or have a problem. For those cases our marketing team, who are in charge of
the main account, will hand over the question to @GitLabSupport for us to answer and to keep the conversation
within ZenDesk.

The main account to use for support related questions is @GitLabSupport. When responding to 
tweets that are forwarded by @gitlab, the response from Twitter will always start with @gitlab as well but
you must make sure to **@ mention the user** who tweeted their question to @gitlab in the first place.

The @GitLabStatus account should only be used to
give updates on the availability of GitLab.com and to follow up on users reporting that GitLab.com is unavailable.

## Follow up on issues on GitLab issue tracker

For ZenDesk issues you will have created issues on the relevant issue tracker.
Please refer to the priority as listed under [GitLab Workflow in the handbook](https://about.gitlab.com/handbook/#gitlab-workflow).

## GitLab.com Support Forum

For issues specific to GitLab.com that have nothing to do with availability we have the
[Support Forum](https://gitlab.com/gitlab-com/support-forum/issues). This forum must also be checked periodically
for new issues and to report back if an issue has been solved. Some people use this forum to report issues they
are having with their on-premises installation. In that case, you should refer them to the
[CE issue tracker](https://gitlab.com/gitlab-org/gitlab-ce/issues) or to our
[Getting Help](https://about.gitlab.com/getting-help/) page, depending on the issue they are having.

## Facebook

Messages sent to our [Facebook page](https://www.facebook.com/gitlab/) also feed into ZenDesk.

## GitLab CE/EE/Omnibus issue trackers

It is always encouraged to take a look at all our issue trackers and respond to bug reports or feature
requests:

- [GitLab EE](https://gitlab.com/gitlab-org/gitlab-ee/issues) some customers create issues here instead of
emailing us. When a new issue is created here, a ticket is created in ZenDesk, so we always know when this is
the case.
- [GitLab CE](https://gitlab.com/gitlab-org/gitlab-ce/issues)
- [Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/issues)

## Mailing list

Respond to questions on the [GitLab Mailing List](https://groups.google.com/forum/#!forum/gitlabhq).

## Forum

Questions from the [GitLab Forum](https://forum.gitlab.com/) flow into ZenDesk, but can only be responded to from 
within the Forum environment. 

## Stack Overflow

The [Stack Overflow tagged questions](http://stackoverflow.com/questions/tagged/gitlab) that relate to GitLab 
flow into ZenDesk, but can only be responded to from within Stack Overflow.

## Reddit

Respond to mentions of GitLab on Reddit, especially ones in the [GitLab Reddit](https://www.reddit.com/r/gitlab/).

## Non channel work

If you have time for it please improve GitLab: fix bugs, add features, improve documentation, and polish the website.
You can also consider hanging out on IRC to answer questions and help people (#gitlab on freenode.net).