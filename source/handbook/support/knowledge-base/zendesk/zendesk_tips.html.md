---
layout: markdown_page
title: Managing Tickets
category: Zendesk
---

### On this page
{:.no_toc}

- TOC
{:toc}

----

## Adding / Removing Agents in Zendesk

To add or remove "full" agents to our Zendesk account, contact Zendesk support through the email address contained in the Support vault on 1Password titled "Zendesk Account Manager". This makes sure that the request is routed more quickly than if it is just sent in via their generic support address. Since we are on an annual contract, changes typically require a purchase order to be signed by the [VP of Engineering](/jobs/vp-of-engineering), but the change request can be initiated by any current "full" agent.

## Tips to find important tickets

Zendesk is an expansive tool and it can be easy to lose track of important
tickets. Use these tips to learn how to easily find tickets assigned
to you.

### View your assigned tickets

A good place to view all tickets, including Open, Pending, Solved, and On-Hold,
is your user profile. Click your avatar in the top right corner and then choose
'View profile' at the top of the dropdown.

On the profile page you will see all your tickets. Open tickets are shown first,
followed by Pending, On-Hold, Solved, and Closed. This is a quick way to see the
most recent Open and Pending tickets.

![Zendesk profile page](/images/handbook/support/zendesk_profile_page.png)

### View open tickets and SLA badge

One important piece of information the profile page does not show is the SLA
badge. It's often important to check the SLA for open tickets to ensure
we respond within a reasonable amount of time.

To view your assigned tickets plus the SLA badge, go to the 'Open Support Tickets'
view, then look for the tickets grouped by your name. Watch for tickets that
are nearing breach or actually breaching and respond to those first.

![Zendesk Open Support Tickets](/images/handbook/support/zendesk_open_support_tickets.png)

### View your On-Hold tickets

Tickets are placed On-Hold is they are awaiting a response from GitLab. For
example, maybe it's a feature request waiting to be scheduled. We don't need
to respond to these within the 24 hour response time but it's still important
to go through them periodically and ensure we're making progress.

To view your On-Hold tickets, go to the 'My On-Hold Tickets' view.

![Zendesk My On-Hold Tickets](/images/handbook/support/zendesk_my_on_hold_tickets.png)

### View all tickets Pending/On-Hold < 7 days

In addition to viewing your own tickets On-Hold, it may be beneficial to look
at *all* tickets that have been On-Hold or Pending for more than 7 days.

In the case of Pending tickets, an agent may need to follow up and close the
ticket or send the customer another message asking if they still need help.
For On-Hold tickets, we need to ensure *someone* is periodically updating the
customer on the status of their request.

To view these tickets, go to 'On-Hold > 7 Days' or 'Pending > 7 Days'.

![Zendesk 7 day tickets](/images/handbook/support/zendesk_7_day_tickets.png)

## Zendesk settings

### Service Level Agreements set as Business Rules

Within Zendesk, the SLAs are set as follows. Under Business Rules in the Admin console,
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
