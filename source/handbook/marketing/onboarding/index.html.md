---
layout: markdown_page
title: Marketing Team Onboarding
---

## On this page
{:.no_toc}

- TOC
{:toc}

----


## Expectations of the marketing team
{: #expectations}

As members of the marketing team we are the first to interact with potential customers and community members.
As such it is up to us to represent the company and make sure we present ourselves properly. Therefore we are
expected to:

- Always be friendly and respectful
- Be open to new ideas and points of view
- It is OK if you don't know something. You can always ask someone else
- It is OK to say no to a customer, but try to suggest a workaround and escalate to a Senior if necessary
- Read the guidelines on how to [respond on social media](https://about.gitlab.com/handbook/marketing/social-media-guidelines).

## Marketing Bootcamp?
{: #marketing-bootcamp}

When you first join the team everything will be new to you. In order to get you
started with GitLab quickly a [Marketing Bootcamp Checklist](https://about.gitlab.com/handbook/support/onboarding/checklist)
will be created for you to help guide you through your training.

## Handling tickets

### Point to documentation, or make it
{: #document-it}

As a general rule, you should always include a link to the applicable documentation as
part of your response to a question. If the documentation does not exist yet, then
_make_ the documentation and send the link in the response.

### Create issues

During your interaction with the customers you will most likely need to create or update an
issue, either for a feature request, for a bug, or for further documentation.
Since we do everything in the open, it is good practice to send the link of the
issue to the requesting customer, so that they can also keep an eye on the discussion
there, and weigh in if necessary.


Workflow for creating an issue:

- Visit the issues page of the project, [CE example here](https://gitlab.com/gitlab-org/gitlab-ce/issues)
- Search to make sure the issue doesn't already exist
- Click **New Issue**
- Choose a template from the **Choose a template** dropdown and take a look at the
**Typical kinds of issues created** below.
- Fill in all the relevant sections
- @mention someone in the issue to attract attention to it. Choose an expert [here](https://about.gitlab.com/team/) or feel free to ask
in the #support channel on slack who it should be reviewed by. Do not worry that you are poking
someone to review a job when you don't even know them and they might be much more senior than you,
if it's not appropriate for them, they will know the right person to pass it along to and do that.

Typical kinds of issues created:

- **Bug**
   - Make sure it looks like a bug - otherwise ping one of the developers to confirm.
   - Reproduce the bug
   - Assign the bug fix to the next milestone
   - Report back to customer with a link to the issue
- **Proposed feature request**
   - Provide maximum information and use case from customer in the issue,
mention any alternatives, how badly the customer wants it.
   - Ask a developer for opinion (do we want this feature in GitLab: yes/no, the
developer might ask more questions before answer)
   - Report back to customer with a link to the issue

Typical workflow for updating an existing issue:

1. Comment on the issue that another customer is having a problem, adding relevant details
and a link to the ZenDesk ticket. Also if it is an EE customer, add the `~customer`
label to the ticket.
1. Send the customer a link to the issue and invite them to comment.
1. If the customer replies with satisfaction that their concern is
being addressed after seeing the issue, ask them if it would be okay to mark
the ticket as resolved and to instead continue the conversation on the issue.

Sometimes it is helpful to create an issue on the [support issue tracker](https://gitlab.com/gitlab-com/support/issues)
when dealing with a **tough ticket**. Creating an issue allows more people within
GitLab easy access to the questions and suggestions since not everyone is familiar
with ZenDesk. When in doubt, create an issue. Also see the section on [when to escalate](#when-escalate).

### Recording information about the organization (for BDRs?)
{: #fix-organization}


### After the first response?
{: #first-response}

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

### When and how to escalate (an issue)?
{: #when-escalate}

Do not hesitate to ask for help with a ticket, you can ask any of your colleagues to assist you. You can do this via
Slack initially by [@mentioning](https://get.slack.help/hc/en-us/articles/205240127-Using-mentions) their name and providing a link to the description with an overview of the issue.
If the person you know can help you the best (expert on a specific topic) is not available on
Slack, you can assign the ticket to them, add a comment summarizing the situation, and submit the
ticket as **open**. Especially if you do are not yet fully familiar with the particular topic of the issue,
don't spend more than 30 minutes on an issue before escalating it internally.

### When to mark (an issue?) as solved?
{: #when-solved}

A ticket can be marked as solved when you are certain that you were able to resolve the requester's
problem, or, as mentioned above, when many days go by without a reply from the requester. The exception
to this rule is in social media support channels that do not integrate well with ZenDesk such as Disqus,
the Forum, Stack Overflow, and others, where each comment creates a new ticket. In those cases, you can
close the ticket as soon as you have provided a response (and also close the ticket created by your own response).


### Allowing teammates to adopt an issue?
{: #allow-others}

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

### How to handle emails forwarded from others at GitLab

Every now and then, a GitLab team member will forward a question from a customer, prospective customer, user, etc. Always reply directly to the original requester, keeping the person who forwarded it in the cc.

## Customer Training ?

Service Engineers are regularly asked to provide customer training, and/or to provide answers to technical
questions from potential customers. The materials for the customer training should be kept up to date
[here](https://gitlab.com/gitlab-org/University/tree/master/training).
Importantly, requests for Service Engineer's time for training and other non-ticket related work should be done
via the [internal issue tracker](https://gitlab.com/gitlab-com/support/issues) using the 'Support' label.
If you are receiving such a request via email or Slack, please move it to an issue to allow for wider participation
or easy escalation when needed.

### Vacation

You are encouraged to take as many vacations days as you need, as per our [handbook](/handbook). There
are, however, some things to consider when a member of the support team takes a vacation.

**On-call schedule must be covered ? relevant for BDRs?**

Before leaving for vacation, 2 weeks before at the latest, you should coordinate with your colleagues
to see who can take over the days when you should be on-call. This can happen via an issue in our
[Organization Repo](https://dev.gitlab.org/gitlab/organization/issues?label_name=pagerduty) or via
a Hangout that you should schedule.

**Rest of the team ?**

At any point in time at least half of the support team must be available to handle all our tasks, so
be sure to let everyone know about your plans as soon as you know something. This can be done in the
Availability Calendar. Vacation days are first come first served.

### Illness

You should always take care of yourself and make sure you are healthy. If you need to take a sick day, let
your team members know. If there is an important ticket pending, ask one of your colleagues to help you if
you foresee that you will be unavailable for more than 1 day.

If you are on-call but ill, ask one of your colleagues to cover for you.

### Unforeseen events

If you need to take care of something urgent, there is no need to ask for permission. Just notify the team
via the #marketing channel in Slack. If you are on-call, ask one of your colleagues to
cover for you.
