---
layout: markdown_page
title: Service Engineer Onboarding
---

## Expectations of the support team

As members of the support team we are the first to interact with someone when they have a problem or question.
As such it is up to us to represent the company and make sure we present ourselves properly. Therefore we are
expected to:

- Always be friendly and respectful
- Be open to new ideas and points of view
- It is OK if you don't know something. You can always ask someone else
- It is OK to say no to a customer, but try to suggest a workaround and escalate to a Senior if necessary

## Support Level Agreements

- Emergency tickets should be answered within 30 minutes.
- Tickets from customers should be answered within 1 business day, preferably sooner.
- Tickets from social channels don't have a contractually set SLA, but internally we
aim for no later than next business day for tickets from Disqus and Twitter. Ideally
all other social channels should also be answered within 48 hours.

## First steps when you join the team

When you first join the team everything will be new to you. In order to get you started with GitLab quickly
you should take a look at the resources we have available at the [GitLab University](https://about.gitlab.com/university/).

The [user training](https://gitlab.com/gitlab-org/University/tree/master/training) we use for our customers
is also a great resource to get you started with the basics of Git and GitLab.

If you want to dig deeper into the inner workings of our great features, the best place to do that is
our [documentation](http://doc.gitlab.com) page.

You also need to familiarize yourself with the GitLab codebase. A great place to start is by installing the
[GitLab Development Kit](https://gitlab.com/gitlab-org/gitlab-development-kit). Any problem that our customers have will first
go through you, so you need to make sure you understand the issue and are able to radiate the information
you collect in a precise manner to the rest of the team. Make sure that you know how to install and upgrade
GitLab using our different installation methods:

- Omnibus (preferred)
- Docker
- From source

To familiarize yourself with ZenDesk, you can follow [this guide](https://support.zendesk.com/hc/en-us/articles/203921213).
This great resource written by ZenDesk Support will help you better know how ZenDesk works and how you can
use it to be more productive.

It is also encouraged to go over your colleagues' responses to previously submitted tickets, to see how they
craft their replies, and to get more insight and knowledge into topics with which you are unfamiliar.

### Training

Right after joining the team you will go through a training process with the guidance of a fellow Service Engineer.
In this training you will learn the ins and outs of GitLab, how to integrate it with the most used enterprise tools, like
LDAP, Jira, Jenkins and SAML, how to best talk to our customers, and how to best radiate information you
collect across the team. [TODO: link to SE training materials on GitLab University]

Initially, you will pick up relatively less complex tickets, and learn more about the product and the process by
responding to a large volume of these tickets. Typically, you will start by answering tickets that come in
through social media, advancing to general support tickets, and eventually subscriber, security, and emergency tickets.


## Handling tickets

### Assigning a ticket to yourself

Assign a ticket to yourself the moment you decide you are going to work on it. If the nature of the problem
requires you to investigate further, let the customer know that you need further time to investigate, assign
the ticket to yourself, and submit the reply. By assigning the ticket to yourself you are letting your team members
know that you will work with this customer and by replying to the customer, even if you need further time to
craft a proper answer, you are acknowledging their request.

### Responding to tickets

For responses to regularly asked question see the [common responses](/handbook/support/common-responses.html)
section. [Common questions should be the prime focus of better documentation, and common responses should be in the form of a
link to the documentation].

Tickets coming from our customers take a higher priority than regular support tickets and are marked as such
within ZenDesk. Make sure you take care of these tickets first. They can be seen in the `Subscribers Open`
view.

We use ZenDesk Organization Profiles to store relevant information about the customer, like environment setup,
hardware specs, usage patterns, etc, so that if you need this information, it is readily available from
within ZenDesk. To see this information, click on the link to the left of the requester's name (in our example
it's the link that says 'GitLab' right next to Haydn's name).

![ZenDesk Organizations](/images/support/zendesk-org.png)

If a customer does not have an organization set up you can create one by clicking on the field next to
the requester's name (This field says GitLab on the screenshot above, to the left of Haydn's name). When
doing this, please fill in the correct name and email domains for the new Organization.

#### Tags for Tickets

To be able to capture metrics on which topics are most frequently asked about, when you start on a ticket,
add tags to it. Currently, the tags that are to be used are:  

- bug
- feature proposal
- call - if the problem results in a screen share
- documentation (if it requires further documentation)
- LDAP
- CI
- Docker
- JIRA
- Jenkins
- SAML
- Kerberos
- Importing
- SSL

Tagging tickets will allow us to better capture what topics need to be documented in more detail,
and/or which areas of the product development can use some attention to prevent creating more requests for support.

#### After the first response

In most cases when you reply to a customer you expect a reply back. In this case the ticket should be
marked as `Pending`. If this ticket doesn't receive a reply within 7 days, you should follow up with
the customer. If this is your second response without a reply you can mark the ticket as solved at this
point, otherwise ask them if they still need help or have further questions.

When a feature request or the fix for a bug has been scheduled for a future release, you should let the
customer know about the version for which this has been scheduled and when that version is going to be
releases, e.g. June 22nd for 8.9, and add the `promised` tag to the ZenDesk ticket.

### When and how to escalate a ticket?

Do not hesitate to ask for help with a ticket, you can ask any of your colleagues to assist you. You can do this via
Slack initially. If the person you know can help you the best (expert on a specific topic) is not available on
Slack, you can assign the ticket to them, add a comment summarizing the situation, and submit the
ticket as **open**. Especially if you do are not yet fully familiar with the particular topic of the issue,
don't spend more than 30 minutes on an issue before escalating it internally.

### When to create an issue relating to a ticket?

Many tickets lead to bug reports or feature requests on the CE issue tracker.
But it can also be helpful to create an issue on the [internal issue tracker](https://dev.gitlab.org/gitlab/organization/issues/)
when dealing with a tough ticket. Creating an issue allows more people within GitLab easy access
to the questions and suggestions since not everyone is familiar with ZenDesk. When in doubt, create an issue.

### When to mark a ticket as solved?

A ticket can be marked as solved when you are certain that you were able to resolve the requester's
problem, or, as mentioned above, when many days go by without a reply from the requester.

### Receiving negative feedback

After 24 hours of marking the ticket as solved a survey is sent to our customers, where they can rate
the level of support they received. If a customer rates a ticket to which you were assigned as bad, an
email will be sent to you and the ZenDesk manager to notify you of the fact. When this happens, you should
let a Senior know about the problem and follow up with the customer to see if something you did can
be improved.

## Dedicated Service Engineers

Certain subscribers have access to a Dedicated Service Engineer. This means that
tickets that arrive in ZenDesk from people within the subscriber's organization
are routed to a dedicated SE by way of a trigger in ZenDesk. To make sure that
these subscribers are served well, even when their dedicated SE is not directly
available, there is a 'view' in ZenDesk to display all "dedicated" tickets so
that other Service Engineers can see them and jump in to avoid an SLA breach.

If you are the Dedicated Service Engineer for an account and you will be away for a
foreseeable reason (such as vacation), change the trigger in ZenDesk for the duration
of your absence. Any tickets answered by others should mention "I will be helping
you in this matter since your dedicated Service Engineer, [name], is unfortunately
currently unavailable to respond to your ticket." When you return, you should review
all tickets submitted by the subscriber during your absence, and make sure to follow-through
or follow-up as required.

## Customer Training

Service Engineers are regularly asked to provide customer training, and/or to provide answers to technical
questions from potential customers. The materials for the customer training should be kept up to date [INSERT LINK] .
Importantly, requests for Service Engineer's time for training and other non-ticket related work should be done
via the [internal issue tracker](https://dev.gitlab.org/gitlab/organization/issues/) using the 'Support' label.
If you are receiving such a request via email or Slack, please move it to an issue to allow for wider participation
or easy escalation when needed.


## Team member is unavailable

### Vacation

You are encouraged to take as many vacations days as you need, as per our [handbook](/handbook). There
are, however, some things to consider when a member of the support team takes a vacation.

**On-call schedule must be covered**

Before leaving for vacation, 2 weeks before at the latest, you should coordinate with your colleagues
to see who can take over the days when you should be on-call. This can happen via an issue in our
[Organization Repo](https://dev.gitlab.org/gitlab/organization/issues?label_name=pagerduty) or via
a Hangout that you should schedule.

**Rest of the team**

At any point in time at least half of the support team must be available to handle all our tasks, so
be sure to let everyone know about your plans as soon as you know something. This can be done in the
Availability Calendar. Vacation days are first come first served.

**Tickets assigned to you**

Try to solve as many of the tickets that are assigned to you as you can and try not to take on too many
difficult tickets right before you leave. If there are still tickets assigned to you that you will not
be able to handle, talk to your colleagues to see who can take them over.

### Illness

You should always take care of yourself and make sure you are healthy. If you need to take a sick day, let
your team members know. If there is an important ticket pending, ask one of your colleagues to help you if
you foresee that you will be unavailable for more than 1 day.

If you are on-call but ill, ask one of your colleagues to cover for you.

### Unforeseen events

If you need to take care of something urgent, there is no need to ask for permission. Just notify the team
via the #support channel in Slack. If you are on-call, ask one of your colleagues to
cover for you.
