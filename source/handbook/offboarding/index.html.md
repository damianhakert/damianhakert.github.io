---
layout: markdown_page
title: "GitLab Offboarding"
---

Before starting an offboarding issue, make sure that the team member's resignation or termination has been discussed and cleared with _at least_ the member of the executive team to whom the team member (in)directly reports. For [involuntary terminations](/handbook/people-operations/#involuntary-terminations), make yourself familiar with the guidelines in the People Operations handbook.

When it is time for offboarding, create a **confidential** issue for former team member on the [People Ops Issue Tracker](https://gitlab.com/gitlab-com/peopleops/issues), and add the following checklist (edit it for applicability to the individual). This list looks strange in this handbook but this is to ensure you can copy paste it into an issue. When you paste it in an issue it will have checkboxes that you can click to complete.

Use the [Offboarding Processes](/handbook/offboarding/offboarding-processes) to assist in completing all of the tasks.


```
1. [ ] People Ops: Once the termination has taken place (whether voluntary or involuntary), as soon as possible, create a confidential issue called 'Offboarding (NAME), per (DATE)' in in the [People Ops Issue Tracker](https://gitlab.com/gitlab-com/peopleops/issues) with relevant lines of the master offboarding checklist and /cc @amatthews, @brittanyr, @jparrow.

#### For GitLab BV Belgium only

1. [ ] People Ops: Once the termination date is known verify with Senior People Operations Director or CEO that the non-competition clause is to be waived or enforced.
1. [ ] Non-competition waived: People Ops: send a letter (in French or Dutch depending on location in Belgium) via registered mail and by email to the team member within 15 days of the termination date.
1. [ ] Non-competition enforced: People Ops: to inform Financial Controller & instruct payroll to pay the team member a lump sum as stated in the contract

#### All GitLabbers

1. [ ] For this offboarding, the manager is @MENTION, People Ops is handled by @MENTION.
1. [x] _not relevant_ People Ops: Send an email to the chosen buddy letting them know that they have been chosen and include a link to the onboarding issue.
1. [ ] Google account
   1. [ ] People Ops: Switch off 2FA for the account, reset the password, and add the new credentials to the People Ops vault in 1Password.
   1. [ ] People Ops: Change the phone number and alternative email (typically personal email address) that are associated with the account.
   1. [ ] People Ops: Check with the former team member's manager if they want the former team member's email forwarded to them. If yes, then login to the team member's account and set email to forward to the manager. Note: The account cannot be suspended if emails need to be forwarded. If no, then suspend the account.
   1. [ ] People Ops: Switch 2FA back on. When asked for a phone number use your own, this is only for the purposes of turning 2FA back on.
   1. [ ] People Ops: upon manager's request (typically 4 weeks after blocking
     the Google account), transfer owned documents from Google Drive to
   manager, and delete the Google account. (automatically disables Drive access)
1. [ ] People Ops: remove former team member's email from email aliases (workflow is by suggesting in "GitLab Email Forwarding", then enacting).
1. [ ] People Ops: Block former GitLabbers' [dev.GitLab.org account](https://dev.gitlab.org/admin/users) and remove from [gitlab group](https://dev.gitlab.org/groups/gitlab/group_members).
1. [x] _not relevant_ People Ops: @mention the new team member in this onboarding issue once their dev.gitlab.org account has been made.
1. [ ] Slack
   1. [ ] People Ops disable team member in [Slack](https://gitlab.slack.com/admin).
   1. [x] _not relevant_ New team member: pick your [Slack username](https://gitlab.slack.com/account/settings#username) to be the same as your GitLab email handle, for consistency and ease of use.
   1. [x] _not relevant_ Hiring manager: please inform what [Slack groups](https://gitlab.slack.com/admin#user_groups) the new team member should be added to by adding this to the "GitLab Email Forwarding" document as a suggestion.
1. [ ] People Ops Information
   1. [ ] People Ops: Remove former team member from TriNet / Savvy and payroll if applicable.
   1. [ ] People Ops: Mark former team member as terminated in BambooHR. Use the date mentioned in this issue as final date of employment / contract.
   1. [ ] People Ops: Notify eShares administrator (CFO) of offboarding.
1. [x] _not relevant_ New team member: read [Handbooks](https://about.gitlab.com/handbook/), read the relevant onboarding pages that are linked from there, and become comfortable with Git and the GitLab workflow.
1. [ ] Calendars & Agenda
   1. [x] _not relevant_ People Ops: Add entry to availability calendar so the team can see when new people are joining.
   1. [ ] People Ops: Remove team member from GitLab availability calendar
   1. [ ] People Ops: Remove team member's birthday and work anniversary from the GitLab Birthdays calendar. Also, un-share the calendar with the team member
   1. [x] _not relevant_ People Ops: Add new team member to the next monthly GitLab 101 call
   1. [ ] People Ops: Remove team member from Team Call Agenda and re-arrange the days on which GitLabbers speak in the Team Call Agenda.
   1. [ ] People Ops: If applicable, remove the team member from the APAC team call.
   1. [ ] Hiring Manager: Add entry to Team Call agenda to announce departure of team member: 'X is no longer with GitLab'.
   1. [ ] PeopleOps: Remove former team member from the next Retro meeting and the Kickoff meeting that's scheduled and save for all events in the future.
   1. [ ] Hiring Manager: Remove team member from team meeting invitations.
   1. [ ] Hiring Manager: Cancel weekly 1:1 meetings with new team member.
   1. [x] _not relevant_ New team member: Access BambooHR, set a secure password and fill out any missing details of your profile; specifically your address, phone number(s), banking information, ethnicity and emergency contact information. Make sure to add the country code to phone numbers (i.e. all numbers should start with `+`).
1. [ ] People Ops: Remove team member from [team page](https://about.gitlab.com/team). Don't forget to remove the profile picture.
1. [ ] People Ops: If there is one, remove team member's pet from [team pets page](https://about.gitlab.com/team-pets). Don't forget to remove the picture.
1. [ ] People Ops: Remove mentions of the team member from our documentation and handbook by doing a text search for their `username` and `first_name` in the `www-gitlab-com` and `gitlab-ce` repositories
and removing them from everywhere except blog posts. If you do not have a tool of choice, try "Find in Project" using Atom.
1. [ ] People Ops: Remove team member from phishing testing platform
1. [x] _not relevant_ People Ops: Check if new team member indicated who they were referred by.
1. [ ] People Ops: Reach out to former team member to identify and retrieve any company supplies/equipment. See the [PeopleOps page](https://about.gitlab.com/handbook/offboarding/offboarding-processes/#returning-property) for further details on that process.
   1. [ ] People Ops: Inform Controller / Accounting if any items in former GitLabbers possession will not be returning, so that they can be removed from asset tracking.
1. [x] _not relevant_ Buddy: Schedule video call for first day to introduce yourself, and make sure they know that if they have questions, they can come to you. But your main job as a buddy will be to direct them to the right parts of the handbook, and/or encourage them to ask their questions of the wider group on chat, etc.
1. [x] _not relevant_ People Ops: Send brief welcome email to their personal address that directs the new team member to their GitLab email and their onboarding issue.
1. [ ] Hiring Manager: Announce in #general chat channel as soon as the chat and Google Accounts are blocked: 'As of today X is no longer with GitLab. Out of respect to their privacy I can't go into details. If you have any questions that I might be able to answer please let me know.' It is very important to send this message as soon as possible so people know that they can rely on official communication channels and not have to find out through the grapevine. Delays in announcing it are not acceptable. The policy of not commenting on circumstances is in force indefinitely. If people press for answers say you don't want to suggest that underperformance was a reason for this exit but remind them that:
    * It is stated in our general guidelines that job feedback is between an individual and their manager
    * If managers do their job right any exit should come as a surprise to everyone except the individual and the manager.
1. [x] _not relevant_ Hiring Manager: Schedule a video call with new team member at the start of their first day.
1. [ ] Manager: Organize smooth hand over of any work or tasks from former team member. Offer option to send a message to everyone in the company (i.e. forwarded by the manager), for a farewell message and/or to transmit their personal email address in case people wish to stay in touch.
1. [ ] People Ops: remove former team member from the ["1Password Shared Folders"](https://docs.google.com/a/gitlab.com/spreadsheets/d/1dSlIRbD1b8XisIBbANDK5NGe55LvVSTsWM7aHcWCOVU/edit?usp=sharing) Google Sheet.

### FROM ONBOARDING'S "ON YOUR FIRST DAY"

#### For GitLab Inc employees only

1. [x] _not relevant_People Ops: gather relevant information from new team member to enter them into the TriNet system.
1. [x] _not relevant_ People Ops: complete and submit an online Add New Hire Form
(TriNet Passport=>My Workplace=> Add New Hire/Rehire). This will generate the
welcome email to the employee at their work email on their first date of hire.
1. [x] _not relevant_ People Ops: If new team member is an hourly employee, create a timesheet, share with Finance and the new team member. Also, send an email to Finance to let them know that an hourly employee has started.
1. [x] _not relevant_ New employee: complete [New Hire TriNet Passport 7 Steps Guide](https://docs.google.com/a/gitlab.com/document/d/1CFIyByd1Kgmz5353_aASVI1D8QTyJ2Uy60ziQHEPTUI/edit?usp=sharing). The I-9 portion of this must be completed within the first two days of hire. Note- this is critical so you must contact PeopleOps if you have difficulty with this form.
1. [x] _not relevant_ People Ops: complete the employer portion of the I9 in TriNet within three days of hire
1. [x] _not relevant_ New employee: read through the [New Hire Benefits Guide](https://drive.google.com/a/gitlab.com/file/d/0B0dixQ9qzgilNlN0MnNFS29xWnB2SjNWVUk3dUV2aWlhejVR/view?usp=sharing). This will go over medical, dental, vision, and voluntary benefits. Note - If you have any questions or need help within the TriNet system please contact the Employee Solution Center at 800-638-0461 or email them at employees@trinet.com.
1. [x] _not relevant_ People Ops: Set up new hire training with TriNet (If necessary).

#### For GitLab BV employees only

1. [x] _not relevant_ People Ops: fill in this payroll information [form](https://docs.google.com/a/gitlab.com/forms/d/e/1FAIpQLSekAouLh-DQsDXVho4TYL62CsBK8Pj0NhfI--npa3L1nF8IqA/viewform) using the data the team member entered into BambooHR and send the HR Savvy.
This info is needed to get the team member's profile ready with Savvy HR in order to get pay slips and other information. People Ops will file in BambooHR.

#### All GitLabbers

1. [x] _not relevant_ New team member: Read the [security best practices](/handbook/security), and please ask questions to make sure it is all clear to you.
1. [x] _not relevant_ New team member: Enable 2FA on your GitLab email account (this should have been an option to do when you first received the invitation to the account).
1. [x] _not relevant_ New team member: If you authenticated your GitLab.com account with Google, GitHub, etc. you should either disconnect them or make sure they use two-factor authentication.
1. [x] _not relevant_ New team member: Enable [two-factor authentication](http://docs.gitlab.com/ee/profile/two_factor_authentication.html) on your GitLab.com account.
1. [x] _not relevant_ New team member: Make sure your notifications for GitLab.com aren't sent to a personal email. Send them to your `@gitlab.com` email.
1. [ ] 1Password
   1. [ ] People Ops: Remove access to 1Password; take a screenshot of the user's permissions and post it in this offboarding issue.
   1. [ ] People Ops: coordinate or actively change sensitive shared passwords. In particular:
      1. [ ] People Ops: Ping admins of department systems to see if the individuals had access.
      1. [ ] sysadmin access passwords for GitLab.com Infrastructure (ssh, chef user/key, discuss others)
      1. [ ] review what vaults former team member had access to, and discuss with vault "owners" which passwords should be changed.
1. [x] _not relevant_ New team member: Create GitLab.com account and leave a comment in this issue to tell us the name. (To clarify, this is **not** the same as your account and username on dev.gitlab.org which you already have if you can see this issue).
1. [ ] People Ops: Remove former GitLabbers' GitLab.com account from the [gitlab-com group](https://gitlab.com/groups/gitlab-com/group_members) and block from GitLab.com
   1. [ ] Manager: If the team member reaches out to regain access for personal project, review permissions, and unblock. Also make sure that a secondary email is associated with the account.
1. [x] _not relevant_ New team member: Access BambooHR, set a secure password and fill out any missing details of your profile; specifically your address, phone number(s), and emergency contact information. Make sure to add the country code to phone numbers (i.e. all numbers should start with `+`).
1. [x] _not relevant_ New team member: Set up [Calendly](https://about.gitlab.com/handbook/tools-and-tips/#calendly) and add your Calendly link to your Slack profile.
1. [ ] Twitter/TweetDeck
   1. [ ] People Ops: Remove team member from the GitLab twitter group (check with marketing).
   1. [ ] People Ops: Remove access from Tweetdeck for [at]GitHostIO (if applicable).
   1. [ ] People Ops: Remove access from Tweetdeck for [at]gitlabstatus (if applicable).
   1. [ ] People Ops: Remove access from Tweetdeck for [at]GitLabSupport (if applicable).

## FROM ONBOARDING'S "WITHIN FIRST WEEK OF STARTING"

1. [x] _not relevant_ People Ops: remove user from the [Google 'New Users' group](https://admin.google.com/gitlab.com/AdminHome?groupId=new-users@gitlab.com&chromeless=1#OGX:Group). This causes 2FA enforcement for the user.
1. [ ] People Ops: Remove from Beamy
1. [x] _not relevant_ People Ops: Order [business cards](https://about.gitlab.com/handbook/people-operations/#b-cards) for new team member.
1. [ ] People Ops: [Remove team member](https://about.gitlab.com/handbook/people-operations/#add-expensify) from Expensify (if employee).
1. [ ] People Ops: Remove team member from the info sheets of the next Summit if applicable.
1. [x] _not relevant_ New team member: Check if there is a coming [Summit](https://gitlab.com/summits/) and save the date!
1. [ ] People Ops: Remove GitLabbers profile from [Egencia](https://about.gitlab.com/handbook/people-operations/#add-egencia).
1. [x] _not relevant_ New team member: schedule 10 [Virtual Coffee break calls](https://about.gitlab.com/handbook/working-remotely/#coffee-break-calls) of 30 mins with 10 different colleagues to get to know your team. You can also schedule more calls, or ask for help on the #questions channel in slack.
1. [x] _not relevant_ New team member: Link your GitLab email address to an easily recognizable photo of yourself on [gravatar](https://en.gravatar.com/).
1. [x] _not relevant, already addressed_ New team member: [Add yourself](https://about.gitlab.com/handbook/general-onboarding/#add-yourself-to-team-page) to the [team page](https://about.gitlab.com/team/)
1, [x] _not relevant_ New team member: [Download Git](https://docs.gitlab.com/ce/gitlab-basics/start-using-git.html).
1. [ ] PeopleOps: Remove team member from the [public map](https://sundial.teleport.org/public/groups/Y3IahPR5vYjBpMyU2kZj) of everyone's location via [Sundial](https://about.gitlab.com/handbook/people-operations/#sundial-removal).
1. [x] _not relevant_ New team member: I verify that the home folder of my hard drive is encrypted (see the [security best practices](https://about.gitlab.com/handbook/security) for help).
1. [x] _not relevant_ New team member: Comment with a screenshot verifying that your hard drive is encrypted (`Command` + `Shift` + `3` on Mac).
1. [x] _not relevant_ New team member: Make an improvement to the handbook (something that you wished was there).
1. [x] _not relevant_ Follow the Git and GitLab course on [Platzi](https://courses.platzi.com/courses/git-gitlab/)
1. [x] _not relevant_ Become familiar with how GitLab works by learning our [GitLab Basics](http://doc.gitlab.com/ce/gitlab-basics/README.html)
1. [x] _not relevant_ New team member: Reach out to your onboarding buddy, or any other GitLabber to show you how to do some advanced git tasks locally. For example, configure and/or solve a merge conflict.
1. [x] _not relevant_ Set-up and familiarize yourself with our apps: [Gmail](https://mail.google.com/), [Google Calendar](https://www.google.com/calendar/), [Slack](https://gitlab.slack.com/messages/general/) and [Google Drive](https://www.google.com/drive/) where you can [download](https://tools.google.com/dlpage/drive/index.html?hl=en) to work offline. Be aware your google calendar (tied to your GitLab account) is internally viewable by default, you might want to [change this](https://support.google.com/calendar/answer/34580?co=GENIE.Platform%3DDesktop&hl=en) in your calendar settings.
1. [x] _not relevant_ New team member: Take a look at the "Reference Customers" google doc to familiarize yourself with which customer information should be kept confidential within the company.
1. [ ] Hiring Manager: Check former GitLabbers' project-level permissions and remove them as-needed.

### FOR ENGINEERING ONLY (Devs, PEs, SEs)

1. [ ] Hiring Manager: Remove former GitLabbers' GitLab.com account from the [gitlab-org group](https://gitlab.com/groups/gitlab-org/group_members)
1. [ ] Hiring Manager: Remove former GitLabbers' GitHub.com account from the [gitlabhq organization](https://github.com/orgs/gitlabhq/people) (if applicable)
1. [ ] Hiring Manager: Remove former GitLabbers' account from [Sentry](https://sentry.gitlap.com/organizations/gitlab/members/)
1. [ ] For former Developers (those who had access to part of the infrastructure), and Production GitLabbers: copy offboarding process from [infrastructure](https://dev.gitlab.org/cookbooks/chef-repo/blob/master/doc/offboarding.md) for offboarding action.
1. [x] _not relevant_ For Developer GitLabbers: Read the [developer documentation](http://docs.gitlab.com/ce/development/README.html).
1. [ ] Hiring Manager: Remove access to PagerDuty if applicable.
1. [ ] Hiring Manager (For Build Engineers): Remove team member as a member to the GitLab Dev Digital Ocean account https://cloud.digitalocean.com/settings/team

#### FOR SERVICE ENGINEERING ONLY

1. [x] _not relevant_ Hiring Manager: Open a new [support onboarding boot camp issue](https://gitlab.com/gitlab-com/support/issues) using the support [onboarding checklist](https://about.gitlab.com/handbook/support/onboarding/checklist), and provide the link in a comment below this onboarding checklist.
1. [ ] Hiring Manager: Remove access to hackerone.com
1. [ ] Hiring Manager: Remove access from Tweetdeck for [at]gitlabstatus.
1. [ ] Hiring Manager: Remove access from Tweetdeck for [at]githostio.
1. [ ] Zendesk [(general information about removing agents)](https://support.zendesk.com/hc/en-us/articles/203661156-Best-practices-for-removing-agents#2):
   1. [ ] Hiring Manager: Remove any triggers related to the agent - https://gitlab.zendesk.com/agent/admin/triggers
   1. [ ] Hiring Manager: Downgrade the agent role to "end-user" - [more information](https://support.zendesk.com/hc/en-us/articles/203661156-Best-practices-for-removing-agents#2)
        + **Warning: This will unassign all tickets from the agent** Consider reducing the "full agent" count on our Zendesk license.
   1. [ ] Hiring Manager: Schedule a date to suspend the agents account. [More information](https://support.zendesk.com/hc/en-us/articles/203661156-Best-practices-for-removing-agents#3)
   1. [x] _not relevant_ Hiring Manager: Add agent to required [support groups](https://support.zendesk.com/hc/en-us/articles/203661766-About-organizations-and-groups) in [GitLab ZenDesk](https://gitlab.zendesk.com).
1. [ ] Community Forum:
   1. [ ] Hiring Manager: Remove team member from "moderators" group on the [GitLab community forum](https://forum.gitlab.com/).
   1. [x] _not relevant_ New team member: Create new account for the [GitLab community forum](https://forum.gitlab.com/) using the sign in with GitLab option and mention the username used.
1. [ ] Hiring Manager: Remove team member as a member from the GitLab Dev DigitalOcean account https://cloud.digitalocean.com/settings/team
1. [ ] People Ops: remove team member's Zoom account.
1. [ ] Hiring Manager: Remove team member from https://timezone.io/team/gitlab-support

#### FOR UX DESIGNERS, FRONTEND DEVS, AND DESIGNERS ONLY

1. [x] _not relevant_ New team member: get the [Pixelmator app](https://itunes.apple.com/us/app/pixelmator/id407963104?mt=12&ign-mpt=uo%3D4) and expense it.
1. [x] _not relevant_ New team member: Join the [#ux](https://gitlab.slack.com/messages/ux/) channel on Slack.
1. [ ] People Ops: cancel [SketchApp](http://www.sketchapp.com/) license (?).
1. [ ] People Ops: (for Designers only, not UX Designers) remove access to [Adobe Creative Cloud](https://www.adobe.com/creativecloud.html) using the shared credential in the Secretarial vault.
1. [ ] Hiring Manager: (for UX Designers) Remove former team member's `Master` access to the [gitlab-design](https://gitlab.com/gitlab-org/gitlab-design) project on GitLab.com.
1. [ ] Hiring Manager: (for UX Designers) Remove former team member from the [GitLab Dribbble team](https://dribbble.com/gitlab).
1. [ ] People Ops: (for UX Designers) remove team member from the `@uxers` User Group on Slack.

### FOR MARKETING ONLY

1. [ ] Amara: Remove from Tweetdeck.
1. [ ] Amanda: Remove from Tweetdeck.

### FOR SALES AND FINANCE ONLY

1. [ ] Finance: Remove from Comerica (as user or viewer only if in Finance)
1. [ ] Finance: Remove from [QuickBooks users](https://about.gitlab.com/handbook/hiring/) (finance only)
1. [ ] Hiring Manager: Remove from sales meeting.
1. [ ] Hiring Manager: Remove from [Recurly](https://app.recurly.com/login)
1. [ ] People Ops: remove team member's Zoom account.
1. [ ] Hiring Manager: Remove from  [Salesforce]
1. [x] _not relevant_ New team member: Ask a colleague if they can do a screenshare the next time they process an order using Recurly and Salesforce.
1. [x] _not relevant_ Sales Manager: Grant access to the [Sales Folder](https://drive.google.com/drive/u/0/#shared-with-me) in our Google Docs. In this folder, familiarize yourself with:
1. [x] _not relevant_ New team member: In the [Sales Folder](https://drive.google.com/drive/u/0/#shared-with-me), familiarize yourself with ... (removed for brevity)
1. [x] _not relevant_ New team member: familiarize yourself with the [Support](https://about.gitlab.com/handbook/support/) process.
1. [x] _not relevant_ New team member: familiarize yourself with [giving a GitLab demo](https://about.gitlab.com/handbook/demo/)

### FOR PEOPLE OPS ONLY

* [x] _not relevant, already handled_ Manager: Add team member to applicable email addresses, ex. jobs@gitlab.com
* [ ] People Ops: Remove team member from BambooHR and Workable as an admin.
* [ ] Manager: Remove team member from TriNet and HR Savvy as an admin.
* [x] _not relevant, already handled_ People Ops: Invite team member to People Ops Confidential channel in Slack.

### FOR CORE TEAM MEMBERS ONLY

1.  [ ] People Ops: Remove e-mail address to the mailing list: https://groups.google.com/forum/#!forum/gitlab-core
1.  [x] _not relevant, People Ops: Have member sign NDA.
1.  [ ] People Ops: Remove member to #core in Slack.
1.  [ ] People Ops: Remove member developer access to [gitlab-org](https://gitlab.com/groups/gitlab-org).
1.  [ ] People Ops: Make inactive in BambooHR

```
