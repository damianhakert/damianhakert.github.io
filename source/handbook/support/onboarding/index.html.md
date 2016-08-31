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

- Always be friendly and respectful
- Be open to new ideas and points of view
- It is OK if you don't know something. You can always ask someone else
- It is OK to say no to a customer, but try to suggest a workaround and escalate to a Senior if necessary
- Read the guidelines on how to [respond on social media](https://about.gitlab.com/handbook/marketing/social-media-guidelines).

## Training Bootcamp Checklist
{: #bootcamp-checklist}

Every Service Engineer who starts at GitLab will enter an intense 30-day sales bootcamp.
Most of the content can be found at [GitLab University](https://university.gitlab.com/).
In addition, once a new Service Eningeer starts, their manager will create an issue
for each of the first 4 weeks, tracking the progress of the new hire.

```
## Service Engineer Boot Camp

**Goal of this entire checklist:** Set a clear path for Service Engineer training

### General Onboarding Issue Checklist

#### Goals

- Have less lists in your life



* [ ] General Onboarding Checklist

  * [ ] Finish every item on that list starting with `New team member:`
    until you are waiting for someone to answer a question or do something before
    you can continue that list.

    * [ ] Start with Stage 1 here

    * [ ] Check back daily on what was blocking you on your General Onboarding Checklist
    until that list is completely done, then focus on this one.

### Stage 1

#### Goals

- Aim to have a good overview of the Product and main features, Git and the Company

If you are already comfortable with using Git and Gitlab and you will be able to
retain a good amount of information by just reading and watching through, that is
okay. But if you see a topic that is completely new to you, stop the video and try
it out for yourself before continuing.

Cover these topics on the [GitLab University](https://university.gitlab.com/):

* [ ] Git. All Gitlab University items under the topic of `GIT`.

* [ ] GitLab Basics. All GLU items under the topic `GLB` but skip `Big files in Git`.

* [ ] GitLab Flow. All GLU items under `GLF`.

* [ ] Gitlab Compared. All GLU items under `COM` but skip the `Innersourcing article`

* [ ] Gitlab Ecosystem. Cover the Customer Use-Cases under `ECO`

Cover these topics in the [user training](https://gitlab.com/gitlab-org/University/tree/master/training) we use for our customers.

* [ ] `env_setup.md`

* [ ] `feature_branching.md`

* [ ] `explore_gitlab.md`

* [ ] `stash.md`

* [ ] `git_log.md`

* [ ] For the rest of the topics, just do a quick read over, even if you don't remember
  how to do it, just seeing it so you can remember where to find it is key.

### Stage 2

#### Goals

- Get your development machine set up.
- Familiarize yourself with the codebase
- Be prepared to reproduce issues that our users encounter.
- Be comfortable with the different installation options of GitLab
  and configuration of some of the major integrations.
- Be comfortable upgrading and downgrading to/from different versions of GitLab
- Have an installation available for reproducing customer bug reports.

#### Set up your development machine

* [ ] Install the [GDK](https://gitlab.com/gitlab-org/gitlab-development-kit)
  * [ ] [Setup OpenLDAP as part of this](https://gitlab.com/gitlab-org/gitlab-development-kit#openldap)

#### Installations

Installation from source will give you a greater understanding of the components that we employ and how everything fits together.

Sometimes we need to upgrade customers from old versions of GitLab to latest, so it's good to get some experience of doing that now.

* [ ] Perform each of the following [Installation Methods](/installation/):
  * [ ] [Docker](https://gitlab.com/gitlab-org/gitlab-ce/tree/master/docker)
  * [ ] [Source](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/install/installation.md)
* [ ] As a part of your general onboarding checklist, you should have asked for
  a Digital Ocean droplet should to be created for you, where you can install and
  maintain your own instance of GitLab
  * [ ] Install via [Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/)
  * [ ] Populate with some test data
  * [ ] Keep this up-to-date as patch and version releases become available, just like our customers would
- Try out the following installation path
  - [Install GitLab 4.2 from source](https://gitlab.com/gitlab-org/gitlab-ce/blob/d67117b5a185cfb15a1d7e749588ff981ffbf779/doc/install/installation.md)
    - External MySQL database
    - External NGINX
  - Create some test data
    - Populated Repos
    - Users
    - Groups
    - Projects
  - [Backup using our Backup rake task](http://docs.gitlab.com/ce/raketasks/backup_restore.html#create-a-backup-of-the-gitlab-system)
  - [Upgrade to 5.0 source using our Upgrade documentation](https://gitlab.com/gitlab-org/gitlab-ee/blob/master/doc/update/4.2-to-5.0.md)
  - [Upgrade to 5.1 source](https://gitlab.com/gitlab-org/gitlab-ee/blob/master/doc/update/5.0-to-5.1.md)
  - [Upgrade to 6.0 source](https://gitlab.com/gitlab-org/gitlab-ee/blob/master/doc/update/5.1-to-6.0.md)
  - [Upgrade to 7.14 source](https://gitlab.com/gitlab-org/gitlab-ee/blob/master/doc/update/6.x-or-7.x-to-7.14.md)
  - [Backup using our Backup rake task](http://docs.gitlab.com/ce/raketasks/backup_restore.html#create-a-backup-of-the-gitlab-system)
  - [Perform the MySQL to PostgreSQL migration to convert your backup](http://docs.gitlab.com/ce/update/mysql_to_postgresql.html#converting-a-gitlab-backup-file-from-mysql-to-postgres)
  - [Upgrade to Omnibus 7.14](http://doc.gitlab.com/omnibus/update/README.html#upgrading-from-a-non-omnibus-installation-to-an-omnibus-installation)
  - [Restore backup using our Restore rake task](http://docs.gitlab.com/ce/raketasks/backup_restore.html#restore-a-previously-created-backup)
  - [Upgrade to latest EE](https://about.gitlab.com/downloads-ee)
    - (GitLab inc. only) Acquire and apply a license for the Enterprise Edition product, ask in #support
- Perform a downgrade from [EE to CE](http://doc.gitlab.com/ee/downgrade_ee_to_ce/README.html)

#### Start to learn about some of the integrations that we support

Our integrations add great value to GitLab. User questions often relate to integrating GitLab with existing external services and the configuration involved

- Learn about our Integrations (specially, not only):
  - [LDAP](http://doc.gitlab.com/ee/integration/ldap.html)
  - [JIRA](http://doc.gitlab.com/ee/project_services/jira.html)
  - [Jenkins](http://doc.gitlab.com/ee/integration/jenkins.html)
  - [SAML](http://doc.gitlab.com/ce/integration/saml.html)

  Continue to look over remaining portions of the [University Overview](/) and continue on to these topics:


### Stage 3

#### Understand the gathering of diagnostics for GitLab instances

- Learn about the GitLab checks that are available
  - [Environment Information and maintenance checks](http://docs.gitlab.com/ce/raketasks/maintenance.html)
  - [GitLab check](http://docs.gitlab.com/ce/raketasks/check.html)
  - Omnibus commands
    - [Status](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/maintenance/README.md#get-service-status)
    - [Starting and stopping services](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/maintenance/README.md#starting-and-stopping)
    - [Starting a rails console](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/maintenance/README.md#invoking-rake-tasks)

#### Learn about the Support process

Zendesk is our Support Centre and our main communication line with our Customers. We communicate with customers through several other channels too

- Familiarize yourself with ZenDesk
  - [UI Overview](https://support.zendesk.com/hc/en-us/articles/203661806-Introduction-to-the-Zendesk-agent-interface)
  - [Updating Tickets](https://support.zendesk.com/hc/en-us/articles/212530318-Updating-and-solving-tickets)
  - [Working w/ Tickets](https://support.zendesk.com/hc/en-us/articles/203690856-Working-with-tickets) *Read: avoiding agent collision.*
- Dive into our ZenDesk support process by reading how to [handle tickets](https://about.gitlab.com/handbook/support/onboarding/#handling-tickets)
- Start getting real world experience by handling real tickets, all the while gaining further experience with the Product.
  - First, learn about our [Support Channels](https://about.gitlab.com/handbook/support/#support-channels)
  - Ask other Service Engineers for help, when necessary, and to review your responses
  - Start with [StackOverflow](https://about.gitlab.com/handbook/support/#stack-overflowa-namestack-overflowa) and the [GitLab forum](https://about.gitlab.com/handbook/support/#foruma-namegitlab-foruma)
  - Here you will find a large variety of queries mainly from our Users who are self hosting GitLab CE
  - Understand the questions that are asked and dig in to try to find a solution
  - [Proceed on to the GitLab.com Support Forum](https://about.gitlab.com/handbook/support/#gitlabcom-support-trackera-namesupp-foruma)
    - Here you will find queries regarding our own GitLab.com
    - Helping Users here will give you an understanding of our Admin interface and other tools
  - [Proceed on to the Twitter tickets in Zendesk](https://about.gitlab.com/handbook/support/#twitter)
    - Here you will gain a great insight into our userbase
    - Learn from any complaints and problems and feed them back to the team
    - Tweets can range from help needed with GitLab installations, the API and just general queries
  - [Proceed on to Regular email Support tickets](https://about.gitlab.com/handbook/support/#regular-zendesk-tickets-a-nameregulara)
    - Here you will find tickets from our GitLab EE Customers and GitLab CE Users
    - Tickets here are extremely varied and often very technical
    - You should be prepared for these tickets, given the knowledge gained from previous tiers and your training
- Check out your colleagues' responses
  - Hop on to the #support-live-feed channel in Slack and see the tickets as they come in and are updated
  - Read through old tickets that your colleagues have worked on
- Start arranging to pair on calls with other Service Engineers. Aim to cover a few of each type of call
  - [Learn about Cisco WebEx](https://about.gitlab.com/handbook/support/onboarding/#webexa-namewebexa)
  - Training calls
  - Information gathering calls
    - It's good to find out how new and prospective customers are going to be using the product and how they will set up their infrastructure
  - Diagnosis calls
    - When email isn't enough we may need to hop on a call and do some debugging along side the customer
    - These paired calls are a great learning experience
  - Upgrade calls
  - Emergency calls

#### Learn about the Escalation process for tickets

Some tickets need specific knowledge or a deep understanding of a particular component and will need to be escalated to a Senior Service Engineer or Developer

- Read about [Escalation](https://about.gitlab.com/handbook/support/onboarding/#create-issuesa-namecreate-issuea)
- Find the macros in Zendesk for ticket escalations
- Take a look at the [GitLab.com Team page](https://about.gitlab.com/team/) to find the resident experts in their fields

#### Learn about raising issues and fielding feature proposals

- Understand what's in the pipeline and proposed features at GitLab: [Direction Page](https://about.gitlab.com/direction/)
- Practice searching issues and filtering using [labels](https://gitlab.com/gitlab-org/gitlab-ce/labels) to find existing feature proposals and bugs
- If raising a new issue always provide a relevant label and a link to the relevant ticket in Zendesk
- Add [customer labels](https://gitlab.com/gitlab-org/gitlab-ce/issues?label_name%5B%5D=customer) for those issues relevant to our subscribers
- Take a look at the [existing issue templates](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md#issue-tracker) to see what is expected
- Raise issues for bugs in a manner that would make the issue easily reproducible. A Developer or a contributor may work on your issue

#### Goals

- Aim to have a good understanding of the problems that customers are facing
- Aim to have gained experience in scheduling and participating in calls with customers
- Aim to have a good understanding of ticket flow through Zendesk and how to interat with our various channels

### Stage 4

#### Advanced GitLab topics

Move on to understanding some of GitLab's more advanced features. You can make use of GitLab.com to understand the features from an end-user perspective and then use your own instance to understand setup and configuration of the feature from an Administrative perspective

- Set up and try [Git Annex](http://doc.gitlab.com/ee/workflow/git_annex.html)
- Set up and try [Git LFS](http://doc.gitlab.com/ee/workflow/lfs/manage_large_binaries_with_git_lfs.html)
- Get to know the [GitLab API](http://doc.gitlab.com/ee/api/README.html), its capabilities and shortcomings
- Learn how to [migrate from SVN to Git](http://doc.gitlab.com/ee/workflow/importing/migrating_from_svn.html)
- Set up [GitLab CI](http://doc.gitlab.com/ee/ci/quick_start/README.html)
- Create your first [GitLab Page](http://doc.gitlab.com/ee/pages/administration.html)
- Get to know the GitLab Codebase by reading through the source code:
  - Find the differences between the [EE codebase](https://gitlab.com/gitlab-org/gitlab-ce)
     and the [CE codebase](https://gitlab.com/gitlab-org/gitlab-ce)
- Ask as many questions as you can think of on the `#support` chat channel

#### Get initiated for on-call duty

- Read over the [public run-books to understand common tasks](https://gitlab.com/gitlab-com/runbooks)
- Create an issue on the internal Organization tracker to schedule time with the DevOps / Production team, so that you learn how to handle GitLab.com going down. Once you are trained for this, you are ready to be added to the on-call rotation.

#### Goals

- Aim to become a fully-fledged Service Engineer!

```

## First steps when you join the team
{: #first-steps}

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

### Training

Right after joining the team you will go through a [training process](https://university.gitlab.com/support/)
with the guidance of a fellow Service Engineer. In this training you will learn the ins and
outs of GitLab, how to integrate it with the most used enterprise tools, like LDAP, JIRA,
Jenkins and SAML, how to best talk to our customers, and how to best radiate information you
collect across the team.

Initially, you will pick up relatively less complex tickets, and learn more about the product and the process by
responding to a large volume of these tickets. Typically, you will start by answering tickets that come in
through social media, advancing to general support tickets, and eventually subscriber, security, and emergency tickets.

### WebEx

More often than not, WebEx will be the best tool for customer calls, so you can save yourself a step and already start
a WebEx session for a call. To do this you can use the `GitLab Support` WebEx account. Go to our
[WebEx Portal](https://gitlabmeetings.webex.com), click on the login button on the top right and use the
credentials found in the Support Vault on 1Password.

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


## Handling tickets

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

- click the "Document this" checkbox (found on the left-hand side of the ticket)
- enter an ["internal note"](https://support.zendesk.com/hc/en-us/articles/213519318-Adding-comments-to-tickets#topic_bpn_sbd_bv) describing the documentation requirements
- update the ticket

Tickets with the "Document this" option are added to a ZenDesk view ["Documentation"](https://gitlab.zendesk.com/agent/#/filters/91188447).
A [Zap](https://zapier.com/app/editor/9938098/overview) is used to add ticket details to a [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1GcQvDThsXuV_n4OFwdYNmq07oO7coiS8xkMP84_-eKo/edit#gid=0).

### Create issues

During your interaction with the customers you will most likely need to create an
issue, either for a feature request, for a bug, or for further documentation.
Since we do everything in the open, it is good practice to send the link of the
issue to the requesting customer, so that they can also keep an eye on the discussion
there, and weigh in if necessary.

Typical kinds of issues created:

- **Bug**
   - Make sure it looks like a bug - otherwise ping one of the developers to confirm.
   - Reproduce the bug
   - Assign the bug fix to the next milestone
   - Report back to customer
- **Unpaid feature request**
   - Provide maximum information and use case from customer in the issue,
mention any alternatives, how badly the customer wants it.
   - Ask a developer for opinion (do we want this feature in GitLab: yes/no, the
developer might ask more questions before answer)
- **Paid feature request**
   - Follow some process as for an unpaid feature request, AND
   - Ask for an estimate

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

Tagging tickets will allow us to better capture what topics need to be documented in more detail,
and/or which areas of the product development can use some attention to prevent creating more requests for support.

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

### Update agent signature
{: #agent-signature}

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

## Receiving feedback
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


## Customer Training

Service Engineers are regularly asked to provide customer training, and/or to provide answers to technical
questions from potential customers. The materials for the customer training should be kept up to date [INSERT LINK] .
Importantly, requests for Service Engineer's time for training and other non-ticket related work should be done
via the [internal issue tracker](https://gitlab.com/gitlab-com/support/issues) using the 'Support' label.
If you are receiving such a request via email or Slack, please move it to an issue to allow for wider participation
or easy escalation when needed.


## Team member is unavailable
{: #not-available}

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

You'll need to mark yourself as unavailable in ZenDesk when taking leave longer then 2 days. Marking yourself as unavailable allows other agents to respond to any tickets that receive a response while you're away.


1. Sign into [ZenDesk](https://gitlab.zendesk.com/agent).
1. Ensure any active tickets are in the Pending or On-Hold states and not Open.
2. View the [Out Of Office](https://gitlab.zendesk.com/agent/apps/out-of-office) app.
3. Toggle your agent status to "Unavailable".
   + Note: Do not tick **"Unassign All Open Tickets"**.
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
