---
layout: markdown_page
title: Support Workflow
---

## Workflow for incoming support requests

#### Other important resources

- [Common responses to problems](/handbook/support/common-responses.html)
- [Interaction with the team](/handbook/support/team.html)

When handling the tasks relevant to support and [service engineering](/jobs/service-engineer) the following
items must be taken into consideration. They are sorted in order of priority.

### Emergency Tickets and GitLab.com downtime

#### Emergency Tickets

When an emergency ticket comes in, it triggers a [PagerDuty](https://gitlab.pagerduty.com) incident. All
Service Engineers must have the PagerDuty application installed on their phones once they are added to
the 24/7 rotation schedule.

When a PD incident is triggered, the alarm will go off for the person on call. You should acknowledge the
incident within 5 minutes, or the person on second level support will be alerted. The PD incident will
have the link to the corresponding ZenDesk issue where you will continue the conversation with the customer.

Once acknowledge, you need login into [ZenDesk](https://gitlab.zendesk.com), go to the corresponding ticket
and let the customer know that you will handle their case. On this response you should ask for the best way
to contact them. Usual channels are Phone, Skype, WebEx or Hangouts.

If you are unable to help the customer and their instance is in a critical state (unavailable, uncertainty of
data loss, etc.), you should escalate the PD incident to Second Level support. They will be able to assist you.

#### GitLab.com downtime

When GitLab.com goes down a PD incident will be triggered as well, so the flow is the same as emergency tickets
for the first steps. If you are on call and are still working, you should keep an eye on our #operations channel
in [Slack](https://gitlab.slack.com), as warning messages will start to appear before the PD incident is triggered.

Once you acknowledge the incident, you need to pin point the reason for the outage. Lately, the reason has been
our backend NFS server rebooting or becoming unresponsive. In any case, you should always follow the documentation
found on our [Chef Repo](https://dev.gitlab.org/gitlab/gitlabhq/issues/2624). A fire drill to train you in this
situation should take place before you are put on rotation. If this has not happened, please let the team know.

### Scheduled calls

While engaging with customers you should always be prepared to jump on a call with them. It is easier to get
all the information you might need on a 20 minute call than on 10 2-minute emails. If a conversation goes through
several back and forth emails and the problem still isn't close to being resolved, suggest a call via WebEx or
Google Hangouts.

### Maintenance/Upgrade calls

We also offer upgrade and installation support for our customers. When these requests come in, you will schedule
a call/screen sharing session with them and either guide them through the upgrade process or take control of the
server yourself. You should make sure that the customer has a backup before you start the call, as they can take
a lot of time to complete and you don't want to do them while in the call. You should also make sure you know as
much as possible about the customer's instance as you can.

**Important information to collect**

1. Type of installation: Source/Omnibus
1. Current GitLab version
1. Version you're upgrading to (it isn't always the latest)
1. Use of GitLab CI (need to upgrade to 8.0 first, then 8.+)

### Regular ZenDesk tickets

You should always answer the tickets in a [FIFO](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics))
manner. Make sure that you answer the tickets that are assigned to you first and then move on to new tickets
that have come in and are unassigned, again using FIFO.

### Questions from Social channels

#### Contact request

Questions and comments coming through our contact email are also piped through to ZenDesk and need to be handled
by us. If the request is something related to marketing, you should apply the `Marketing request` macro within
ZenDesk and mark the ticket as solved. This macro will forward the email to community@gitlab.com and the submitter
that our marketing team will handle the request.

#### Disqus

All the comments from our blog are handled by Disqus, and we have an integration in place, where every new
comment or reply to a comment creates a new ticket in ZenDesk. As part of your daily support tasks, you should
make sure that this queue is as empty as possible. Right now there is no way for us to directly reply to the
comment from ZenDesk, so if a comment you see requires a reply (that is if the ticket is not from someone on
our team, or is a question or a problem) you need to click on the link to the comment and reply directly in
the blog post. Once you have replied, you should come back to ZenDesk and mark that ticket as solved, plus
the ticket that was created for your reply.

We are looking into improving this workflow.

#### Twitter

From a support perspective the Service Engineers should only answer questions coming to
[@GitLabSupport](https://twitter.com/GitLabSupport) or [@GitLabStatus](https://twitter.com/GitLabStatus) directly.
Tweets with a mention of these accounts **anywhere** on the tweet will create a ticket in ZenDesk and they will
show up under the `Social` view.

We know that many users will still mention our main [@gitlab](https://twitter.com/gitlab) account when they
want to ask a technical question or have a problem. For those cases our marketing team, who are in charge of
the main account, will hand over the question to @GitLabSupport for us to answer and to keep the conversation
within ZenDesk.

The main account to use for support related questions is @GitLabSupport. @GitLabStatus should only be used to
give updates on the availability of GitLab.com and to follow up on users reporting that GitLab.com is unavailable.

#### GitLab.com Support Forum

For issues specific to GitLab.com that have nothing to do with availability we have the
[Support Forum](https://gitlab.com/gitlab-com/support-forum/issues). This forum must also be checked periodically
for new issues and to report back if an issue has been solved. Some people use this forum to report issues they
are having with their on-premise installation. In that case, you should refer them to the
[CE issue tracker](https://gitlab.com/gitlab-org/gitlab-ce/issues) or to our
[Getting Help](https://about.gitlab.com/getting-help/) page, depending on the issue they are having.

#### Feature request forum

We also have a [Feature request forum](http://feedback.gitlab.com/forums/176466-general) where people can propose
new features and vote for features they find interesting. You should check this forum every now and then for
request that are popular so that we can investigate if it makes sense to either implement them ourselves
or say that we are accepting merge request for it.

#### GitLab CE/EE/Omnibus issue trackers

It is always encouraged to take a look at all our issue trackers and respond to bug reports or feature
requests:

- [GitLab EE](https://gitlab.com/gitlab-org/gitlab-ee/issues) some customers create issues here instead of
emailing us. When a new issue is created here, a ticket is created in Zendesk, so we always know when this is
the case.
- [GitLab CE](https://gitlab.com/gitlab-org/gitlab-ce/issues)
- [Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/issues)

#### Other channels

If for some reason you find yourself with extra time in your hands and want to nurture the GitLab community,
you can go to the following sites to help spread the GitLab word and knowledge.

- [GitLab Mailing List](https://groups.google.com/forum/#!forum/gitlabhq)
- [GitLab Forum](https://forum.gitlab.com/)
- [StackOverflow tagged questions](http://stackoverflow.com/questions/tagged/gitlab)
- Engage with the rest of the GitLab and core team to improve GitLab
- Fix problems, add features, improve documentation, and polish the website
- IRC questions (#gitlab on freenode.net)
