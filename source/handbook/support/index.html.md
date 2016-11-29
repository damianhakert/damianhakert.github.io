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
- [Advanced Topics](/handbook/support/advanced-topics)

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

By triaging support effort through internal SLAs, the team can improve the support experience
for key customers while still addressing the questions of all subscribers, and the rest of the GitLab community.

## Service and support we provide

For an overview of the support we provide to customers and GitLab.com users, please see the general [support page](https://about.gitlab.com/support/). What follows is a more detailed description of the level of service.

## Service Level Agreements
{: #sla}

The channels are sorted in order of priority, there are 4 SLA categories:

| SLA | Channel                | Response Time                          |
|-----|----------------------------|----------------------------------------|
| 1   | [Emergencies](/handbook/support/channels/#emergency-tickets)                | 30 minutes                             |
| 2   | [Regular Tickets](/handbook/support/channels/#regular-zendesk-tickets) and [Security](/handbook/support/#security-disclosures) | 1 business day                         |
| 3   | [Disqus](/handbook/marketing/developer-relations/community-advocacy/#disqus)  and [Twitter](/handbook/marketing/developer-relations/community-advocacy/#twitter)         | 1 business day                         |
| 4   | Posted Issues & Other      | Two weeks but not sooner than two days |

**Response time indicates the first reply time.**

Preferably we like to answer tickets sooner than the SLA requires.
The higher a channel is in the list the sooner it should be answered.

### Zendesk SLA settings and Breach alerts

SLAs are set as Business Rules within Zendesk. For more information, please refer to the specific [Zendesk Admin](/handbook/support/knowledge-base/categories/zendesk/zendesk_admin.html) page.

## How we're doing

The [Zendesk Insights dashboard](https://gitlab.Zendesk.com/agent/reporting/analytics/period:0/dashboard:buLJ3T7IiFnr)
lists the activity for all of our current channels and summarizes the last 30 days (Zendesk login required).

## Additional resources for the support team

### Breach Hawks

Breach hawks are members of the support team who help the rest of the team keep an eye out for nearly-breaching tickets, so that they can be responded to in a timely manner. Of course, any and all members of the Support Team will have a sense of how many tickets are close to breaching and how high the load is on any given day. But it can happen that you're deep into a ticket, a customer call, etc., unaware of the impending doom. That's where breach hawks come in: they tackle their tickets, but they also keep an eye out for the team at large and can call in the [Support Turbos](#support-turbo) when needed.

### fix4all

"fix4all" is a rotation where one developer - or anyone in GitLab - spends a
week of his or her time helping the support team, as described in more detail on
the ["fix4all" rotation page](/handbook/engineering/fix4all).

### Support Turbo

Every now and then, it may occur that we come close to breaching our SLAs.
To prevent an actual breach from occurring, the Support team can call on the help
of several "Support Turbo" developers who are denoted on the [Team Page](https://about.gitlab.com/team/).
Support Turbos are separate from the ["fix4all" rotation](/handbook/engineering/fix4all), in that Turbos are on an as-needed basis while the fix4all rotation is a week-long commitment per person.

The support team calls for help when necessary via Slack, but in case of doubt or
conflicting priorities, the respective team lead or VP of Engineering needs to give the green light for the
Support Turbo developers to momentarily switch away from their other tasks. As a general guideline for the Support Turbo, the order of priorities when called upon to join as a Turbo should be:

1. Direction issues
1. Turbo work
1. P1 issues

Further guidelines when rolling up your sleeves to do Turbo work:

- Turbos should attempt to pick up "single touch" tickets (though this is not always easy to recognize) whenever possible
- Since Turbos log in using a generic agent, there are some special considerations:
   - Pro-actively sign the tickets with their name, or leave an internal note so that the rest of the team knows which individual provided a response. This is helpful to be able to reach out and gain context, etc.
   - Do not [assign tickets](https://support.zendesk.com/hc/en-us/articles/203690956) to the generic agent account. Leave the assignee as the "group", otherwise these tickets will get lost.


## Calls, Trainings, Implementation Support, and Live Upgrade Assistance

As described in more detail in the [support listings](https://about.gitlab.com/support/) as well as the [support onboarding page](/handbook/support/onboarding/), we offer services beyond simply responding to tickets.

#### Implementation Support

We offer "implementation support" for new EE customers. This is similar to live upgrade assistance, except that live upgrade assistance is a Premium Support offering, while Implementation Support is an option available for purchase by _any_ EE customer.

##### Requesting Implementation Support

- The relevant account executive should open a confidential issue on the [support team issue tracker](https://gitlab.com/gitlab-com/support/issues/), and include the following information:
   - Customer name and domain name
   - Note whether customer is Premium Support, or "only" requesting Implementation Support
   - Collect from the customer, if possible, the following information:
      - Server operating system (Red Hat, CentOS, Debian, Ubuntu) and version
      - Install type:
         - Fresh install?
         - Upgrade from CE?
            - In-place or migration to new server?
            - What version are they on, and what version do they expect to upgrade to?
            - Source or Omnibus installation?
            - Available downtime window - anytime or off-hours?
   - Assign to Support Lead
   - Mark as confidential
- The account executive should make sure to add "Implementation Support" as a product field in Zuora for the customer. This allows the Support team to recognize such requests in Zendesk right away when the customer reaches out to schedule the installation.
- The account executive should then instruct/invite the customer to submit a request for Implementation Support using the [support web form](https://support.gitlab.com). From here on, it is in the hands of the Support Team.

##### What Implementation Support covers

- Pre-installation preparation over email or short call to check that everything is in place for a high probability of success with the installation. If backups need to be made for instance, this should be done before the call / installation since it can take a long time.
- Up to 4 hrs of "live" assistance for the installation, on video call with screen sharing, during regular business hours.
- Following the initial install, the customer will have access to Premium Support for a full week (1 calendar week), including 24x7 emergency support, but _not_ including a Dedicated Service Engineer.

##### What Implementation Support does not cover

- Consulting services to help determine how to set up for High Availability
  (except where separately purchased)
- Active assistance in setting up HA systems. We can currently only provide HA
  for an active/active setup as that's what we have
  [documented](https://docs.gitlab.com/ce/administration/high_availability/README.html)
- Further live upgrade assistance beyond the initial implementation (except for
  Premium Support customers)
- The installation and configuration of the underlying server, including (but
  not be limited to) account provisioning, networking, and file system
  configuration
- Establishing a third party authentication & authorization solution (such as
  LDAP, SAML). However,  it **does include** integration of supported
  authentication frameworks into GitLab

## Dedicated Service Engineers

Customers who purchased Premium Support have access to a Dedicated Service Engineer. This means that tickets that arrive in Zendesk from people within the subscriber's organization are routed to a dedicated SE by way of a trigger in Zendesk.

- The sales team requests a Dedicated Service Engineer (DSE) by creating a confidential issue on the [support issue tracker](https://gitlab.com/gitlab-com/support/issues/new), using the ["Dedicated Service Engineer" issue template](https://gitlab.com/gitlab-com/support/raw/master/.gitlab/issue_templates/Dedicated%20service%20engineer.md) (available as a template upon creating a new issue in the Support issue tracker) as soon as it is clear that a dedicated service engineer will be needed (this can be _before_ the deal is closed). The issue should be assigned to the Support Lead. Please include details that are requested in the template such as client timezone, language, specific needs, etc. to make it easier to assign an appropriate SE to the account.
   - Once agreement is reached on who the DSE should be, following a workflow that is similar to how people are added to email forwarding aliases, or vaults in 1Password, in the [Dedicated Service Engineers google doc](https://docs.google.com/spreadsheets/d/1fCQ3yTbu6y2uKMM4IIEljzAZgHX2FFeG2y9XwWy7G-g/edit#gid=0), write in the customer name and chosen DSE using the "suggesting" mode. Any of the Service Engineers with admin access in Zendesk can then [create the trigger](/handbook/support/knowledge-base/categories/zendesk/create_dse_trigger.html), and "accept" the suggestion. Having the google sheet allows for greater visibility within the organization since not everyone knows their way around Zendesk or SalesForce.
   - Related section of the [Sales handbook regarding premium support](/handbook/sales/#premium-support).
- To make sure that these subscribers are served well, even when their dedicated SE is not directly
available, there is a view in Zendesk to display all "dedicated" tickets so
that other Service Engineers can see them and jump in to avoid an SLA breach.
- If you are the Dedicated Service Engineer for an account and you will be away for a
foreseeable reason (such as vacation), change the trigger in Zendesk for the duration
of your absence. Any tickets answered by others should mention "I will be helping
you in this matter since your dedicated Service Engineer, [name], is unfortunately
currently unavailable to respond to your ticket." When you return, you should review
all tickets submitted by the subscriber during your absence, and make sure to follow-through
or follow-up as required.

## Contacting support

### Internal Support for GitLab team members

Fellow GitLab team members can reach out for help from the Support Team in various ways:

1. For normal support questions ("Can GitLab do x?", "How do I do y with GitLab?") email
the internal support email alias that is listed in the "GitLab Email Forwarding"
Google doc. Those emails create tickets in Zendesk.
1. For longer term or larger scope questions, such as discussing customized training
requests, create a [support issue](https://gitlab.com/gitlab-com/support/issues)
1. If customers or users have questions, advise them to contact support direct via the relevant channel.
1. For quick questions that are urgent ping the support team on the support chat channel.

### Support Issue Tracker

The [Support project](https://gitlab.com/gitlab-com/support/issues)
hosts an issue tracker meant to improve our workflow by reporting any
problems that may arise in our tools or processes. It's also meant to
propose and discuss ideas in general.

The issue tracker is open to the community and part of the GitLab.com
group. It should not contain any sensitive information. Links to Zendesk
or other references are encouraged.

### Support chat channels

We use our chat internally as a realtime communication tool. The support channels are as follows:

- [#questions](https://gitlab.slack.com/messages/questions) - If your question is something that you think anyone in the company could answer or is valuable to the greater company to know, ask it here!
- [#Support](https://gitlab.slack.com/messages/support) - This is the general support team channel. Don't know where to ask a question about a ticket? Start here.
- [#support-live-feed](https://gitlab.slack.com/messages/support-live-feed) - Feed of all Zendesk related events
- [#mentions-of-gitlab](https://gitlab.slack.com/messages/mentions-of-gitlab) - Mentions of GitLab from various news sources - [info](/handbook/support/channels#mentions)
- [#gitlab-issue-feed](https://gitlab.slack.com/messages/gitlab-issue-feed) - Feed of all GitLab-CE issues
