---
layout: markdown_page
title: Service Engineer On-boarding
---

## On this page
- [Expectations of the support team](#expectations)
- [First steps when you join the team](#first-steps)
   - [Training](#training)
- [Handling tickets](#handling-tickets)
   - [Assigning a ticket to yourself](#assign-yourself)
   - [Point to documentation, or make it](#document-it)
   - [Create issues](#create-issue)
   - [Recording information about the organization](#fix-organization)
   - [Tags tickets](#tags)   
   - [After the first response](#first-response)   
   - [When and how to escalate a ticket?](#when-escalate)
   - [When to mark a ticket as solved?](#when-solved)
   - [Clearing out suspended tickets](#clear-suspended)
   - [Allowing teammates to adopt a ticket](#allow-others)
- [Receiving feedback](#feedback)
- [Dedicated Service Engineers](#dse)
- [Customer Training](#customer-training)
- [Team member is unavailable](#not-available)


## Expectations of the support team<a name="expectations"></a>

As members of the support team we are the first to interact with someone when they have a problem or question.
As such it is up to us to represent the company and make sure we present ourselves properly. Therefore we are
expected to:

- Always be friendly and respectful
- Be open to new ideas and points of view
- It is OK if you don't know something. You can always ask someone else
- It is OK to say no to a customer, but try to suggest a workaround and escalate to a Senior if necessary
- Read the guidelines on how to [respond on social media](https://about.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/social-media/).

## First steps when you join the team <a name="first-steps"></a>

When you first join the team everything will be new to you. In order to get you started with GitLab quickly
you should take a look at the resources we have available at the [GitLab University](https://university.gitlab.com/).

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

### Training<a name="training"></a>

Right after joining the team you will go through a [training process](https://university.gitlab.com/support/)
with the guidance of a fellow Service Engineer. In this training you will learn the ins and
outs of GitLab, how to integrate it with the most used enterprise tools, like LDAP, JIRA,
Jenkins and SAML, how to best talk to our customers, and how to best radiate information you
collect across the team.

Initially, you will pick up relatively less complex tickets, and learn more about the product and the process by
responding to a large volume of these tickets. Typically, you will start by answering tickets that come in
through social media, advancing to general support tickets, and eventually subscriber, security, and emergency tickets.


## Handling tickets <a name="handling-tickets"/>

### Assigning a ticket to yourself<a name="assign-yourself"></a>

Assign a ticket to yourself the moment you decide you are going to work on it. If the nature of the problem
requires you to investigate further, let the customer know that you need further time to investigate, assign
the ticket to yourself, and submit the reply. By assigning the ticket to yourself you are letting your team members
know that you will work with this customer and by replying to the customer, even if you need further time to
craft a proper answer, you are acknowledging their request.


### Point to documentation, or make it<a name="document-it"></a>

As a general rule, you should always include a link to the applicable documentation as
part of your response to a ticket. If the documentation does not exist yet, then
_make_ the documentation and send the link in the response. For those situations
where making documentation is a more time consuming exercise:

- add the "documentation" tag to the ticket,
- respond to the ticket,
- create an issue on the [GitLab CE](https://gitlab.com/gitlab-org/gitlab-ce/) or
[GitLab EE](https://gitlab.com/gitlab-org/gitlab-ee/) repo linking to the ZenDesk
ticket and add the "Documentation" label, and
- add the link to this issue in the ZenDesk ticket.

### Create issues<a name="create-issue"></a>

During your interaction with the customers you will most likely need to create an
issue, either for a feature request, for a bug, or for further documentation.
Since we do everything in the open, it is good practice to send the link of the
issue to the requesting customer, so that they can also keep an eye on the discussion
there, and weigh in if necessary.

Sometimes it is helpful to create an issue on the [internal issue tracker](https://dev.gitlab.org/gitlab/organization/issues/)
when dealing with a **tough ticket**. Creating an issue allows more people within
GitLab easy access to the questions and suggestions since not everyone is familiar
with ZenDesk. When in doubt, create an issue. Also see the section on [when to escalate](#when-escalate).

#### Ticket fields

The only custom ticket field we use is the `GitLab issues` field. In here you will fill in every
related GitLab issue that is related to this ticket as a way to cross-link between them.

Every issue you mention here must also contain a link to the ticket in question, either in the
description or in a comment.

Use this field as a reminder of when and where to follow up.

### Recording information about the organization<a name="fix-organization"></a>

We use ZenDesk Organization Profiles to store relevant information about the customer, like environment setup,
hardware specs, usage patterns, etc, so that if you need this information, it is readily available from
within ZenDesk. To see this information, click on the link to the left of the requester's name (in our example
it's the link that says 'GitLab' right next to Haydn's name).

![ZenDesk Organizations](/images/support/zendesk-org.png)

If a customer does not have an organization set up you can create one by clicking on the field next to
the requester's name (This field says GitLab on the screenshot above, to the left of Haydn's name). When
doing this, please fill in the correct name and email domains for the new Organization.

On the organization view, use the `Notes` field to write relevant information about the Organization
in question.

![Organization Details](/images/support/org-details.png)

### Tag tickets<a name="tags"></a>

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

### After the first response<a name="first-response"></a>

In most cases when you reply to a customer you expect a reply back. In this case the ticket should be
marked as `Pending`. If this ticket doesn't receive a reply within 7 days, you should follow up with
the customer. If this is your second response without a reply you can mark the ticket as solved at this
point, otherwise ask them if they still need help or have further questions.

When a feature request or the fix for a bug has been scheduled for a future release, you should let the
customer know about the version for which this has been scheduled and when that version is going to be
releases, e.g. June 22nd for 8.9, and add the `promised` tag to the ZenDesk ticket.

Sometimes a customer will send an email to ask for a response to an issue that was
already created on a public issue tracker. In such
cases, include the link to the given issue in the "GitLab Issue" box, go ahead and
reply from the issue tracker, but also follow-up through ZenDesk by providing a link
to your comment in the issue tracker. Providing the response to the customer is
what sets the "first response time" metric, and allows the tickets to be closed
when appropriate.

### When and how to escalate a ticket?<a name="when-escalate"></a>

Do not hesitate to ask for help with a ticket, you can ask any of your colleagues to assist you. You can do this via
Slack initially. If the person you know can help you the best (expert on a specific topic) is not available on
Slack, you can assign the ticket to them, add a comment summarizing the situation, and submit the
ticket as **open**. Especially if you do are not yet fully familiar with the particular topic of the issue,
don't spend more than 30 minutes on an issue before escalating it internally.

### When to mark a ticket as solved?<a name="when-solved"></a>

A ticket can be marked as solved when you are certain that you were able to resolve the requester's
problem, or, as mentioned above, when many days go by without a reply from the requester. The exception
to this rule is in social media support channels that do not integrate well with ZenDesk such as Disqus,
the Forum, Stack Overflow, and others, where each comment creates a new ticket. In those cases, you can
close the ticket as soon as you have provided a response (and also close the ticket created by your own response).

### Clearing out Suspended Tickets<a name="clear-suspended"></a>

In ZenDesk, various filters send a ticket straight to "suspended" status. This is mostly useful
to remove spam and it works quite well. However, it is possible that actual tickets
are accidentally routed to Suspended Tickets, so it is important to check the new Suspended Ticket queue
at least once a day. Doing this on a regular basis also keeps that queue manageable.

### Allowing teammates to adopt a ticket<a name="allow-others"></a>

When you are viewing a ticket teammates see an eye icon on the left of the ticket in the Views Screen.

![Organization Details](/images/support/zd-eye-icon.png)

This implies that you're reading or working on the ticket so if your not going
to handle it make sure to close it by closing the tab at the upper section of the
screen that has the ticket's title.

If you see a ticket with this icon that either you feel you can add value to it,
or has been open for too long then please ask your teammate through Slack if he
or she is still working on it. The person's name appears by hovering over the,
ticket's title on the list view or by selecting the ticket and reading the
"Also on this ticket" section on the top left. Notice that if a general account
like GitLab Support is being used there is no name to refer to so you might want
to ask on the support and/or general chat channel with the ticket's link.

## Receiving feedback<a name="feedback"></a>

After 24 hours of marking the ticket as solved a survey is sent to our customers, where they can rate
the level of support they received. If a customer rates a ticket to which you were assigned as bad, an
email will be sent to you and the ZenDesk manager to notify you of the fact. When this happens, you should
let a Senior know about the problem and follow up with the customer to see if something you did can
be improved.

You will also receive a message if the feedback is positive, and it is encouraged to
celebrate those "wins" with the rest of the team through the #support or #thanks
chat channel. Read the positive feedback carefully, often it contains a question
or suggestion for improvement which should be followed up on.

## Dedicated Service Engineers<a name="dse"></a>

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

## Customer Training<a name="customer-training"></a>

Service Engineers are regularly asked to provide customer training, and/or to provide answers to technical
questions from potential customers. The materials for the customer training should be kept up to date [INSERT LINK] .
Importantly, requests for Service Engineer's time for training and other non-ticket related work should be done
via the [internal issue tracker](https://dev.gitlab.org/gitlab/organization/issues/) using the 'Support' label.
If you are receiving such a request via email or Slack, please move it to an issue to allow for wider participation
or easy escalation when needed.


## Team member is unavailable<a name="not-available"></a>

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
