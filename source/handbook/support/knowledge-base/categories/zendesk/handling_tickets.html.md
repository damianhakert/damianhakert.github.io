---
layout: markdown_page
title: Handling Tickets
category: Zendesk
---

### On this page
{:.no_toc}

- TOC
{:toc}

----

## Tiered Support

GitLab operates with three tiers of customer support. Each tier has a set of responsibilities as outlined below.

### SLA Workflow

Service Engineers should work on tickets within their assigned support tier as a first priority. After these are addressed they can work on tickets in any tier. Tickets should be picked up in the following order to make sure that SLAs are not breached, and customers receive the proper level of service:

1. Tickets that are close to breaching "first time to reply" SLA
1. Tickets that are close to breaching "next time to reply" SLA
   - It is a courtesy to check with the assigned agent first, before "taking" one of these tickets. Ask if they can respond soon and offer to reply if they don't have the bandwidth.
1. New tickets (not close to breaching)
1. Other open tickets

When a ticket is breaching or has breached its first reply (or next reply) SLA this ticket must be picked up by any Service Engineer independently of who is assigned to it (although see the note re: courtesy in the list above). This also applies to tickets for Premium Customers (i.e. anyone picks up if close to breaching, regardless of who the Dedicated Service Engineer is).

### Tier 1 Support

+ Provide a resolution to the customer, resolved at first point of contact (FPOC).
+ Document information from the customer in relation to the problem.
+ Tickets the service engineer is unable to resolve at Tier 1 level should be escalated to Tier 2. The following types of escalations can apply:
   + Resolution was attempted at Tier 1 but the problem persists (interaction with the customer)
   + First reply SLA is breaching and the ticket is not within Tier 1 support scope, inform the customer and escalate to Tier 2.
   + Ticket is not within Tier 1 support scope, escalate to Tier 2.

**Examples of requests solved at Tier 1**

+ Known issues/bugs (_A GitLab issue already exists_)
+ Requests for information (customer questions)
   + Quick configuration changes - "How do I enable this feature?"
   + Any other questions, e.g "Does GitLab support this?"

### Tier 2 Support

+ Unknown issues/problems that require investigation. Follow up with customers over multiple interactions. Report the ongoing status of a pending issue/bug fix.
+ Provide workarounds (_where applicable_) to address the problem and quickly resolve any production critical issues.
+ In situations where a bug is found or a new feature is requested the engineer will create a GitLab project issue and track the changes providing an update when necessary.
+ Escalate unresolved support requests to the GitLab Development team. Work closely with developers to analyze, troubleshoot, and resolve difficult issues.

### Tier 3 Support

Support requests escalated to tier 3:

+ Production critical problems faced by "GitLab Plus" customers.
+ Problems that cannot be resolved at tier 2 within a reasonable amount of time (internal SLA).
+ Requests that require direct input from the [VP of Engineering](https://about.gitlab.com/jobs/vp-of-engineering/) or from the [Support Lead](https://about.gitlab.com/jobs/support-lead/).

#### Escalating between Tiers

We use 3 Zendesk [macros](https://support.zendesk.com/hc/en-us/articles/203690796#topic_kda_eew_uf) to escalate between support tiers. These macros are located under the "Escalations" category in the ZD macros list.

+ `Escalations::Tier 1`
+ `Escalations::Tier 2`
+ `Escalations::Tier 3`

Applying any of these macros will move the ticket to the tier group selected.

### Assigning a ticket to yourself
{: #assign-yourself}

Assign a ticket to yourself the moment you decide you are going to work on it. If the nature of the problem
requires you to investigate further, let the customer know that you need further time to investigate, assign
the ticket to yourself, and submit the reply. By assigning the ticket to yourself you are letting your team members
know that you will work with this customer and by replying to the customer, even if you need further time to
craft a proper answer, you are acknowledging their request.

### Point to documentation, or make it
{: #document-it}

As a general rule, you should always include a link to the applicable documentation as
part of your response to a ticket. If the documentation does not exist yet, then
_make_ the documentation and send the link in the response. For those situations
where making documentation is a more time consuming exercise:

- Click the "Document this" checkbox (found on the left-hand side of the ticket)
- Enter an ["internal note"](https://support.zendesk.com/hc/en-us/articles/213519318-Adding-comments-to-tickets#topic_bpn_sbd_bv) describing the documentation requirements
- Update the ticket
- Do not just look at the Docs and see how other directories and files were
structured, we are trying to change some of that so please follow the [documentation styleguide](https://docs.gitlab.com/ce/development/doc_styleguide.html#location-and-naming-of-documents)

Tickets with the "Document this" option are added to a ZenDesk view ["Documentation"](https://gitlab.zendesk.com/agent/#/filters/91188447).
A [Zap](https://zapier.com/app/editor/9938098/overview) is used to add ticket details to a [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1GcQvDThsXuV_n4OFwdYNmq07oO7coiS8xkMP84_-eKo/edit#gid=0).

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

#### Ticket fields

The only custom ticket field we use is the `GitLab issues` field. In here you will fill in every
related GitLab issue that is related to this ticket as a way to cross-link between them.

Every issue you mention here must also contain a link to the ticket in question, either in the
description or in a comment.

Use this field as a reminder of when and where to follow up.

### Recording information about the organization
{: #fix-organization}

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

### Tag tickets
{: #tags}

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
- UX/UI

Tagging tickets will allow us to better capture what topics need to be documented in more detail,
and/or which areas of the product development can use some attention to prevent creating more requests for support.

#### Adding tags

The above tags can be added to tickets using the [Tag Locker](https://www.zendesk.com/apps/tag-locker/) app. Tag Locker can be found on the right side when viewing a ticket. Click the menu button or search for a tag and click the tag text.

![Tag Locker](/images/support/tag_locker.png)

### After the first response
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

### When and how to escalate a ticket?
{: #when-escalate}

Do not hesitate to ask for help with a ticket, you can ask any of your colleagues to assist you. You can do this via
Slack initially by [@mentioning](https://get.slack.help/hc/en-us/articles/205240127-Using-mentions) their name and providing a link to the description with an overview of the issue.
If the person you know can help you the best (expert on a specific topic) is not available on
Slack, you can assign the ticket to them, add a comment summarizing the situation, and submit the
ticket as **open**. Especially if you do are not yet fully familiar with the particular topic of the issue,
don't spend more than 30 minutes on an issue before escalating it internally.

### When to mark a ticket as solved?
{: #when-solved}

A ticket can be marked as solved when you are certain that you were able to resolve the requester's
problem, or, as mentioned above, when many days go by without a reply from the requester. The exception
to this rule is in social media support channels that do not integrate well with ZenDesk such as Disqus,
the Forum, Stack Overflow, and others, where each comment creates a new ticket. In those cases, you can
close the ticket as soon as you have provided a response (and also close the ticket created by your own response).

### Clearing out Suspended Tickets
{: #clear-suspended}

In ZenDesk, various filters send a ticket straight to "suspended" status. This is mostly useful
to remove spam and it works quite well. However, it is possible that actual tickets
are accidentally routed to Suspended Tickets, so it is important to check the new Suspended Ticket queue
at least once a day. Doing this on a regular basis also keeps that queue manageable.

### Allowing teammates to adopt a ticket
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

Every now and then, a GitLab team member will forward a support request from a customer, prospective customer, user, etc. These requests then appear as tickets from the team member, instead of from the original requestor. Always reply directly to the original requester, keeping the person who forwarded it in the cc. You will need to manually alter the "Requester" field of the ticket, by clicking on the "(change)" link next to the email address of the apparent requester in the ticket title.

### Receiving feedback
{: #feedback}

After 24 hours of marking the ticket as solved a survey is sent to our customers, where they can rate
the level of support they received. If a customer rates a ticket to which you were assigned as bad, an
email will be sent to you and the ZenDesk manager to notify you of the fact. When this happens, you should
let a Senior know about the problem and follow up with the customer to see if something you did can
be improved.

You will also receive a message if the feedback is positive, and it is encouraged to
celebrate those "wins" with the rest of the team through the #support or #thanks
chat channel. Read the positive feedback carefully, often it contains a question
or suggestion for improvement which should be followed up on.
