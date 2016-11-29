---
layout: markdown_page
title: Service Engineer Onboarding
---

## On this page
{:.no_toc}

- TOC
{:toc}

----

## Expectations of the support team
{: #expectations}

As members of the support team we are the first to interact with someone when they have a problem or question.
As such it is up to us to represent the company and make sure we present ourselves properly. Therefore we are
expected to:

- Always be friendly and respectful.
- Be open to new ideas and points of view.
- It is OK if you don't know something. You can always ask someone else.
- It is OK to say no to a customer, but try to suggest a workaround and escalate to a Senior if necessary.
- Read the guidelines on how to [respond on social media](https://about.gitlab.com/handbook/marketing/social-media-guidelines).

## Service Engineering Bootcamp
{: #se-bootcamp}

When you first join the team everything will be new to you. In order to get you
started with GitLab quickly a [Service Engineering Bootcamp Checklist](https://about.gitlab.com/handbook/support/onboarding/checklist)
will be created for you to help guide you through your training.

## Tools

We use Zendesk to handle tickets, and we will sometimes schedule calls. That is most often done through Zoom, but can also be done through WebEx if the customer's system does not allow them to install the Zoom plugin.

### Zendesk

For more detail on Zendesk, see the Zendesk section of our [Knowledge Base](/handbook/support/knowledge-base/).

### Zoom

Zoom is a powerful and light-weight videoconferencing tool that works for 90% of the customer calls (see the bit about WebEx for the other 10%). As part of your support boot camp, you should have received a Pro account there so that you can schedule your own calls. To start a call, log on to [gitlab.zoom.us](https://gitlab.zoom.us/) using your personal credentials and click on "My Meetings" for a link to your personal meeting room. Share this with the customer.

Zoom allows you to see the customer's desktop and
to control it on request; and it also offers the option of recording the call (we do not typically do this, be certain to ask for the customer's permission of you have a good reason for recording). It also gives the customer the possibility to join via phone and
us the possibility to use our computer audio connection.

### WebEx

For some customers, only Cisco systems are allowed and for those cases, WebEx will be the best tool for calls. To start a call / session use the `GitLab Support` WebEx account. Go to our
[WebEx Portal](https://gitlabmeetings.webex.com), click on the login button on the top right and use the
credentials found in the Support Vault on 1Password.

![WebEx Login](/images/support/web-ex-login.png)

Once logged in, click the `Enter Room` button to start the WebEx meeting and send the following link to
the customer and ask them to join the call.

```
https://gitlabmeetings.webex.com/meet/gitlabsupport
```

![WebEx Room](/images/support/web-ex-room.png)

WebEx allows you to see the customer's desktop and
to control it on request. It also gives the customer the possibility to join via phone and
us the possibility to use our computer audio connection.

## Update ZenDesk agent signature

Your personal ZenDesk signature is shown at the end of every ticket response.
You can update this to include a personalized valediction like "Thanks" or "Best Regards" by following these steps.

* In Zendesk, click your user icon in the upper-right corner and select View Profile Page .
* Under Signature in the left sidebar, enter the signature text.

An example agent signature:

```
Thanks,

{{agent.name}}
GitLab, Inc.
```

## Digital Ocean account access

As part of onboarding SE team members will be given access to the GitLab Digital Ocean team account.
This can be used for testing and to reproduce customer problems. Please consider the following when using this account:

+ Do not destroy, stop or modify droplets that you haven't created
+ Always include your name in the droplet hostname - e.g `user-ldap-testing-box`
+ Use resources sparingly and remove droplets that have served a purpose and are no longer in use
+ Do not create droplets unrelated to GitLab (personal projects)

## Customer Calls Best Practices

### Before a Call

After sending the WebEx Invite, go to the ticket and ask for confirmation. Having the customer confirmation will also help to detect errors on the scheduling process such as an incorrect timezone, date, etc.

Add the call with description and duration to the Support Team Calendar.

### During a Call

Once you started the call and the client connects, indentify yourself. Example:

> Hi {customer name}, this is {agent name} from GitLab Support.

If you started the call and the client doesn't join, wait for a couple minutes. After 10 minutes of waiting
go to the ticket and send a reply to check if the customer is having either issues with the scheduled time
or connecting to the WebEx Platform.

If after another 10 minutes you don't get answer, go ahead and re-schedule.

If a call takes too long (> 1 hour), and/or if you're not making progress, discuss with the customer the need to re-schedule.

+ If you were having problems helping the customer, make sure to contact a teammate to join you on the re-scheduled call (Call Escalation)
+ If the customer had problems either with their setup, environment or connectivity, remember him to solve them before the new
call when re-scheduling.

### After a Call

Update the ticket with a brief description of what was accomplished or not during the call making sure to point out the missing
information to solve the ticket.

## Customer Training

Service Engineers are regularly asked to provide customer training, and/or to provide answers to technical
questions from potential customers. The materials for the customer training should be kept up to date
[here](https://gitlab.com/gitlab-org/University/tree/master/training).
Importantly, requests for Service Engineer's time for training and other non-ticket related work should be done
via the [internal issue tracker](https://gitlab.com/gitlab-com/support/issues) using the 'Support' label.
If you are receiving such a request via email or Slack, please move it to an issue to allow for wider participation
or easy escalation when needed.

## Keeping up to date with new GitLab versions

Since we ship a new release each month on the 22nd, and since we manage to fit _a lot_ of great new features and fixes into each release, it is sometimes difficult for the Support Team to keep up to date with key changes.

In general, it is the responsibility of each Service Engineer individually to read the release blog post, dig deeper where you need to or want to, and keep yourself up to date. However, to facilitate this further, we have a Pre-Release Call every third Thursday of the month (it is listed on the GitLab Support calendar). During the call, key parts of the product that are expanding rapidly or add more complexity than usual will be reviewed together by reading the draft release-post and inviting on team leads to walk the Service Engineers through major changes, e.g. in CI.  

## Team member is unavailable
{: #not-available}

### Vacation

You are encouraged to take as many vacations days as you need, as per our [handbook](/handbook). There
are, however, some things to consider when a member of the support team takes a vacation.

**On-call schedule must be covered**

Before leaving for vacation, 2 weeks before at the latest, you should coordinate with your colleagues
to see who can take over the days when you should be on-call. This can happen via an issue in our
[support issue tracker](https://gitlab.com/gitlab-com/support/issues) or via
a Hangout that you should schedule.
See the [on-call](https://about.gitlab.com/handbook/on-call/#swapping-on-call-duty) page for more information.

**Rest of the team**

At any point in time at least half of the support team must be available to handle all our tasks, so
be sure to let everyone know about your plans as soon as you know something. This can be done in the
Availability Calendar. Vacation days are first come first served.

**Tickets assigned to you**

As a courtesy to other team members, please try to address all "Open" tickets (awaiting a response from the customer) in your queue.

When taking leave longer then 1 day, you should mark yourself as unavailable in Zendesk.
Do this at the end of your last work day this will ensure tickets flow correctly to other agents.

Marking yourself as unavailable in Zendesk:

1. Sign into [ZenDesk](https://gitlab.zendesk.com/agent).
1. Try to ensure any active tickets are in the **Pending** or **On-Hold** states and not **Open**.
2. View the [Out Of Office](https://gitlab.zendesk.com/agent/apps/out-of-office) app.
3. Toggle your agent status to "Unavailable".
   + Note: Only tick **"Unassign All Open Tickets"** if you have **Open** tickets that are still awaiting a response from the support team.
5. Click "Set to Unavailable"

### Illness

You should always take care of yourself and make sure you are healthy. If you need to take a sick day, let
your team members know. If there is an important ticket pending, ask one of your colleagues to help you if
you foresee that you will be unavailable for more than 1 day.

If you are on-call but ill, ask one of your colleagues to cover for you.

### Unforeseen events

If you need to take care of something urgent, there is no need to ask for permission. Just notify the team
via the #support channel in Slack. If you are on-call, ask one of your colleagues to
cover for you.
