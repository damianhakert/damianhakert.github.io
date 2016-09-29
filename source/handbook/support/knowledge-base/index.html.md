---
layout: markdown_page
title: Knowledge Base
---

## On this page
{:.no_toc}

- TOC
{:toc}

----

## Customer calls

### Scheduled calls

We offer intake, upgrade and installation support for our customers. When these requests come in, you will schedule
a call/screen sharing session with them and either guide them through the upgrade process or take control of the
server yourself. You should make sure that the customer has a backup before you start the call, as they can take
a lot of time to complete and you don't want to do them while in the call. You should also make sure you know as
much as possible about the customer's instance as you can.

**Important information to collect**

1. Type of installation: Source/Omnibus
1. Current GitLab version
1. Version you're upgrading to (it isn't always the latest)
1. Use of GitLab CI (need to upgrade to 8.0 first, then 8.+)

We collect this information in Zendesk and link it to the organization, see the
[responding to tickets section in onboarding](/handbook/support/onboarding).

### Unscheduled calls

While engaging with customers you should always be prepared to jump on a call with them. It is easier to get
all the information you might need on a 20 minute call than on 10 2-minute emails. If a conversation goes through
several back and forth emails and the problem still isn't close to being resolved, suggest a call via WebEx or
Google Hangouts.

If you feel too inexperienced to handle a call, ask someone more experienced to handle the call and
listen in if at all possible. After someone else had the call with the customer it is still your responsibility
to handle the ticket as long as the ticket is still assigned to you.

## Zendesk

We use Zendesk to manage all customer queries. See the [Zendesk](/handbook/support/zendesk) page for more information on using Zendesk day to day.

For additional resources see the "Initial Zendesk training" section of the support [onboarding checklist](/handbook/support/onboarding/checklist)

## Errors on GitLab.com

If GitLab.com users encounter errors on GitLab.com (particularly Error 500s), it may be useful to see the encountered
error on our [Sentry instance](https://sentry.gitlap.com). You can search for a specific username in the search bar
by entering in the following:

user.username:<user ID>

For example:

user.username:sytse

This will bring up all exceptions encountered by the user.

Note that Sentry tries to group similar errors together, but it's possible
that it creates a separate entry for the same problem. If a GitLab issue
exists for that exception, it will show up by the headline as GL-XYZ, where
XYZ is some incident number defined by Sentry. You may have to search other
similar events or look on the issue tracker on GitLab.com whether a separate
GitLab issue has been created for the Sentry exception.

If the exception looks like it does not exist, feel free to create a GitLab
issue by clicking the "Create GitLab Issue" button. This will provide a
pre-filled form with all the details of the backtrace. Please clean up the
title and/or augment the description with what the user experienced when this
exception occurred to make it easier for developers to understand what
happened.

## Spam

### Flagging Issues as Spam

Many spammers use GitLab.com to create spam. Starting with 8.11, GitLab has
better integration with Akismet to check for spam whenever a user creates an
issue. This filter needs to be trained properly, however. With some effort our
spam detection should improve. If an issue is created on GitLab.com by a
spammer, before deleting the account, flag the user's issues as spam:

1. Login to GitLab.com with an admin account
2. View each issue and click on "Submit as spam"


### Deleting Spammers

Once the issues are flagged and the user is verified to be a spammer, go to
the spammer's user profile and click on the "Report Abuse" button:

1. Login to GitLab.com with an admin account
2. Go to: https://gitlab.com/admin/abuse_reports
3. Be careful: Click on "Delete user" only if you are sure this user is a spammer.

### False positives: Ham

The Akismet filter may also flag false positives and prevent a user from
creating issues. The contents of the flagged issue get stored in the spam logs,
which is only accessible to admin users. From time to time, we may need to
submit the flagged issue as "ham" (e.g. when a user lodges a complaint on the
Support Tracker about not being able to create issues). Currently, there are
no notifications whenever an entry is flagged, so this needs to be monitored
periodically. To flag an issue as ham:

1. Login to GitLab.com with an admin account
2. Go to: https://gitlab.com/admin/spam_logs
3. Scan the contents of each log. If it appears that a user is trying to post valid
   information, click on "Submit as ham".

## Sidekiq support

With our subscription to Sidekiq, GitLab is in principle entitled to [one support request per quarter](https://github.com/mperham/sidekiq/wiki/Commercial-Support#priority-support).

To get assistance with issues relating to Sidekiq:

- file issues on https://github.com/mperham/sidekiq if you're seeing behavior that looks like a Sidekiq bug,
- link to that from our GitLab.com issue, and
- email support [at] contribsys.com with a link to the Sidekiq issue.

Of course don't abuse the support email for configuration questions.

  