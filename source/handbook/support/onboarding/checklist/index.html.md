---
layout: markdown_page
title: Servce Engineer Bootcamp Checklist
---
## Bootcamp Checklist for Training of New Service Engineers
<a name="checklist"></a>

An issue will be created for you with the following checklist.
This list looks strange in this handbook because it is formatted to be copy-pasted.
The topics are generally ordered by priority in which they need to be tackled,
but feel free to work on later things in the list when you are waiting on something.

```
## Service Engineer Boot Camp

We need to keep iterating on this checklist so please submit MR's for any improvements
that you can think of.

If an item does not start with a role or name of someone else, it's yours to do.

**Goal of this entire checklist:** Set a clear path for Service Engineer training

### Stage 0 (GitLab Inc. only)

#### Goals

- Have all the needed user accounts and permissions for a GitLab Inc. SE

This should have been created for you as an issue by PeopleOps when you were hired

1. [ ] General Onboarding Checklist

  1. [ ] Finish every item on that list starting with `New team member:`
    until you are waiting for someone to answer a question or do something before
    you can continue that list.

    1. [ ] Start with Stage 1 here

    1. [ ] Check back daily on what was blocking you on your General Onboarding Checklist
    until that list is completely done, then focus on this one.

### Stage 1. Git and GitLab basics.

#### Goals

- Aim to have a good overview of the Product and main features, Git and the Company

If you are already comfortable with using Git and GitLab and you will be able to
retain a good amount of information by just reading and watching through, that is
okay. But if you see a topic that is completely new to you, stop the video and try
it out for yourself before continuing.

1. [ ] Just quickly check on your Zendesk account to make sure that is ready for you when you need it.
1. [ ] Let your manager know if for some reason you were not able to create an account on Zendesk.
1. [ ] Under your profile on Zendesk, it should read `Agent`. If it reads `Light Agent`, inform your manager.

Cover these topics on the [GitLab University](https://university.gitlab.com/):

1. [ ] Under the topic of Git

  1. [ ] [About Version Control](https://docs.google.com/presentation/d/16sX7hUrCZyOFbpvnrAFrg6tVO5_yT98IgdAqOmXwBho/edit#slide=id.gd69537a19_0_14)

  1. [ ] [Try Git](https://www.codeschool.com/account/courses/try-git)

1. [ ] Under the topic of GitLab Basics

  1. [ ] All the [GitLab Basics](http://docs.gitlab.com/ce/gitlab-basics/README.html) that you don't feel comfortable with. If you get stuck, see the linked videos under GLB in GitLab University

  1. [ ] [GitLab Flow](https://www.youtube.com/watch?v=UGotqAUACZA)

  1. [ ] Take a look at how the different GitLab versions [compare](https://about.gitlab.com/features/#compare)

1. [ ] Any of these that you don't feel comfortable with in the [user training](https://gitlab.com/gitlab-org/University/tree/master/training) we use for our customers.

  1. [ ] `env_setup.md`

  1. [ ] `feature_branching.md`

  1. [ ] `explore_gitlab.md`

  1. [ ] `stash.md`

  1. [ ] `git_log.md`

  1. [ ] For the rest of the topics in `user training`, just do a quick read over the file names so you start remembering where to find them.

### Stage 2. Installation and Administration basics.

1. [ ] Check back on your Zendesk account if you are not yet an `Agent`.
1. [ ] Check to make sure you were added to the `GitLab Support` Google Calendar and can see it's events.

#### Goals

- Get your development machine set up.
- Familiarize yourself with the codebase
- Be prepared to reproduce issues that our users encounter.
- Be comfortable with the different installation options of GitLab
  and configure LDAP.
- Have an installation available for reproducing customer bug reports.

#### Set up your development machine

1. [ ] Install the [GDK](https://gitlab.com/gitlab-org/gitlab-development-kit)
1. [ ] Add [OpenLDAP](https://gitlab.com/gitlab-org/gitlab-development-kit/tree/master/gitlab-openldap) to your GDK installation.

#### Installations

You will keep one installation continually updated on Digital Ocean, just like many of our clients. But you need to choose where you would like to test other installations.
### We need to list some benefits of each choice here.
1. [ ] Choose your preferred test environment between Local VM's or Digital Ocean and put in in a comment below.

Installation from source is not common but will give you a greater understanding of the components that we employ and how everything fits together.

1. [ ] Perform each of the following [Installation Methods](/installation/) on your preferred test environment you chose above:
  1. [ ] Install via [Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/)
  1. [ ] Populate with some test data: User account, Project, Issue
  1. [ ] Backup using our [Backup rake task](http://docs.gitlab.com/ce/raketasks/backup_restore.html#create-a-backup-of-the-gitlab-system)
  1. [ ] Install via [Docker](https://gitlab.com/gitlab-org/gitlab-ce/tree/master/docker)
  1. [ ] Restore backup to your Docker VM using our [Restore rake task](http://docs.gitlab.com/ce/raketasks/backup_restore.html#restore-a-previously-created-backup)
  1. [ ] Version 7 from [Source](https://gitlab.com/gitlab-org/gitlab-ce/blob/7-14-stable/doc/install/installation.md)

1. [ ] As a part of your general onboarding checklist, you should have asked for
  a Digital Ocean droplet to be created for you, where you can install and
  maintain your own instance of GitLab

  1. [ ] Install via [Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/)

  1. [ ] Populate with some test data
    1. [ ] Populated Repos
    1. [ ] Users
    1. [ ] Groups
    1. [ ] Projects
    1. [ ] You can check this box but this one never stops as long as you are a Service Engineer for GitLab. Keep this installation up-to-date as patch and version releases become available, just like our customers would.

1. [ ] Ask as many questions as you can think of on the `#support` chat channel

### Stage 3. Customer Interaction through Zendesk

#### Goals

- Have a good understanding of ticket flow through Zendesk and how to interat with our various channels
- See some common issues that our customers are facing and how to resolve them.

#### Initial Zendesk training

1. [ ] Complete Zendesk Agent training (allow 40 minutes for completion)
  1. Navigate to [Zendesk university](https://university.zendesk.com/#/purchase/category/34942) and order the **"Agents: Zendesk Fundamentals Online"** course
     1. Add the **"Agents: Zendesk Fundamentals Online"** course to your cart and click "Proceed to Checkout"
     1. Follow the prompts and finalise your order.
     1. You'll receive an email with information on accessing the Zendesk course
  1. Proceed to complete the **"Agents: Zendesk Fundamentals Online"** course
1. [ ] Review additional Zendesk resources   
  1. [UI Overview](https://support.zendesk.com/hc/en-us/articles/203661806-Introduction-to-the-Zendesk-agent-interface)
  1. [Updating Tickets](https://support.zendesk.com/hc/en-us/articles/212530318-Updating-and-solving-tickets)
  1. [Working w/ Tickets](https://support.zendesk.com/hc/en-us/articles/203690856-Working-with-tickets) *Read: avoiding agent collision.*

#### Learn about the Support process

Zendesk is our Support Centre and our main communication line with our Customers. We communicate with customers through several other channels too

1. [ ] Ask different people in your team if they would be willing to do a 45 minute screen share with you as they answer tickets on Zendesk, thinking out loud as much as they can and answering your questions. Continue with the rest of the list while you wait for these to get scheduled.

  1. [ ] call with ___
  1. [ ] call with ___
  1. [ ] call with ___
  1. [ ] call with ___
  1. [ ] call with ___
  1. [ ] call with ___
  1. [ ] call with ___
  1. [ ] call with ___
  1. [ ] call with ___
  1. [ ] call with ___

1. [ ] Dive into our ZenDesk support process by reading how to [handle tickets](https://about.gitlab.com/handbook/support/onboarding/#handling-tickets)
1. [ ] Start getting real world experience by handling real tickets, all the while gaining further experience with the Product.
   1. [ ] First, learn about our [Support Channels](https://about.gitlab.com/handbook/support/#support-channels)
    1. [ ] Start with [StackOverflow](https://about.gitlab.com/handbook/support/#stack-overflowa-namestack-overflowa) and the [GitLab forum](https://about.gitlab.com/handbook/support/#foruma-namegitlab-foruma)
      1. Here you will find a large variety of queries mainly from our Users who are self hosting GitLab CE
      1. [ ] Answer one by understanding a question dig in to try to find a solution
  1. [ ] [Proceed on to the GitLab.com Support Tracker](https://about.gitlab.com/handbook/support/#gitlabcom-support-trackera-namesupp-foruma)
     1. Here you will find queries regarding our own GitLab.com
     1. [ ] Find a user you can help and help them, this will give you an understanding of our Admin interface and other tools
  1. [ ] [Proceed on to the Twitter tickets in Zendesk](https://about.gitlab.com/handbook/support/#twitter)
     1. Here you will gain a great insight into our userbase
     1. Tweets can range from help needed with GitLab installations, the API and just general queries
     1. [ ] Find a complaint or problem and feed them back to the team
  1. [ ] [Proceed on to Regular email Support tickets](https://about.gitlab.com/handbook/support/#regular-zendesk-tickets-a-nameregulara)
     1. Here you will find tickets from our GitLab EE Customers and GitLab CE Users
     1. Tickets here are extremely varied and often very technical
     1. You should be prepared for these tickets, given the knowledge gained from previous tiers and your training
1. [ ] Check out your colleagues' responses
   1. [ ] Hop on to the #support-live-feed channel in Slack and see the tickets as they come in and are updated
   1. [ ] Read through about 20 old tickets that your colleagues have worked on and their responses

#### Learn about the Escalation process for tickets

Some tickets need specific knowledge or a deep understanding of a particular component and will need to be escalated to a Senior Service Engineer or Developer

1. [ ] Read about [Escalation](https://about.gitlab.com/handbook/support/onboarding/#create-issuesa-namecreate-issuea)
1. [ ] Find the macros in Zendesk for ticket escalations
1. [ ] Take a look at the [GitLab.com Team page](https://about.gitlab.com/team/) to find the resident experts in their fields

#### Learn about raising issues and fielding feature proposals

1. [ ] Understand what's in the pipeline and proposed features at GitLab: [Direction Page](https://about.gitlab.com/direction/)
1. [ ] Practice searching issues and filtering using [labels](https://gitlab.com/gitlab-org/gitlab-ce/labels) to find existing feature proposals and bugs
1. [ ] If raising a new issue always provide a relevant label and a link to the relevant ticket in Zendesk
1. [ ] Add [customer labels](https://gitlab.com/gitlab-org/gitlab-ce/issues?label_name%5B%5D=customer) for those issues relevant to our subscribers
1. [ ] Take a look at the [existing issue templates](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md#issue-tracker) to see what is expected
1. [ ] Raise issues for bugs in a manner that would make the issue easily reproducible. A Developer or a contributor may work on your issue

1. [ ] Schedule three 45 minute blocks with your trainer where you share your screen with them while you answer tickets on Zendesk, they give you feedback and answer your questions.

  1. [ ] call with ___
  1. [ ] call with ___
  1. [ ] call with ___

### Congratulations. You now have your Zendesk Wings!

### From now on you can spend most of your work time answering tickets on Zendesk, try to set aside 2 hours per day to make it through **Stage 4-6** of this list.

1. [ ] Ask as many questions as you can think of on the `#support` chat channel

### Stage 4. Customer Calls

- Gain experience in scheduling and participating in calls with customers

Look at the `GitLab Support` Google Calendar to find customer calls you can listen in on. Contact the person leading the call to check if it is okay for you to jump in on the call, and if they could stay on with you for a few minutes after the call, for you to ask them a few questions about things you didn't understand, and them to ask you a few questions to make sure you understood the items they want you to take away.

1. [ ] Start arranging to pair on calls with other Service Engineers. Aim to cover two of each type of call
   1. [ ] [Learn about Cisco WebEx](https://about.gitlab.com/handbook/support/onboarding/#webexa-namewebexa)
   1. [ ] Training calls
     1. [ ] call with ___
     1. [ ] call with ___
   1. [ ] Information gathering calls
       1. It's good to find out how new and prospective customers are going to be using the product and how they will set up their infrastructure
     1. [ ] call with ___
     1. [ ] call with ___
  1. [ ] Diagnosis calls
      1. When email isn't enough we may need to hop on a call and do some debugging along side the customer
      1. These paired calls are a great learning experience
     1. [ ] call with ___
     1. [ ] call with ___
  1. [ ] Upgrade calls
     1. [ ] call with ___
     1. [ ] call with ___
  1. [ ] Emergency calls
     1. [ ] call with ___
     1. [ ] call with ___

1. [ ] Ask as many questions as you can think of on the `#support` chat channel

### Stage 5. Gathering Diagnostics

#### Understand the gathering of diagnostics for GitLab instances

1. [ ] Learn about the GitLab checks that are available
  1. [ ] [Environment Information and maintenance checks](http://docs.gitlab.com/ce/raketasks/maintenance.html)
  1. [ ] [GitLab check](http://docs.gitlab.com/ce/raketasks/check.html)
  1. [ ] Omnibus commands
    1. [ ] [Status](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/maintenance/README.md#get-service-status)
    1. [ ] [Starting and stopping services](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/maintenance/README.md#starting-and-stopping)
    1. [ ] [Starting a rails console](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/maintenance/README.md#invoking-rake-tasks)

1. [ ] Ask as many questions as you can think of on the `#support` chat channel

### Stage 6. On Call Duty

#### Goals

- Aim to become a fully-fledged Service Engineer!

#### Get initiated for on-call duty

1. [ ] Read over the [public run-books to understand common tasks](https://gitlab.com/gitlab-com/runbooks)
1. [ ] Create an issue on the internal Organization tracker to schedule time with the DevOps / Production team, so that you learn how to handle GitLab.com going down. Once you are trained for this, you are ready to be added to the on-call rotation.

### Stage 7. Optional Advanced GitLab Topics

Discuss with your training manager if you should stop here and close your issue
or continue. Also discuss which of the advanced topics should be followed. Do
not just do all of them as they might not be relevant to what customers need
right now and can be a significant time investment.

These are some of GitLab's more advanced features. You can make use of
GitLab.com to understand the features from an end-user perspective and then use
your own instance to understand setup and configuration of the feature from an
Administrative perspective

- [ ] Set up and try [Git Annex](https://docs.gitlab.com/ee/workflow/git_annex.html)
- [ ] Set up and try [Git LFS](https://docs.gitlab.com/ee/workflow/lfs/manage_large_binaries_with_git_lfs.html)
- [ ] Get to know the [GitLab API](https://docs.gitlab.com/ee/api/README.html), its capabilities and shortcomings
- [ ] Learn how to [migrate from SVN to Git](https://docs.gitlab.com/ee/workflow/importing/migrating_from_svn.html)
- [ ] Set up [GitLab CI](https://docs.gitlab.com/ee/ci/quick_start/README.html)
- [ ] Create your first [GitLab Page](https://docs.gitlab.com/ee/pages/administration.html)
- [ ] Get familiar with the GitLab source code by finding the differences
between the [EE codebase](https://gitlab.com/gitlab-org/gitlab-ee) and the [CE codebase](https://gitlab.com/gitlab-org/gitlab-ce)
- [ ] Ask as many questions as you can think of on the `#support` chat channel
```
