---
layout: markdown_page
title: "GitLab Onboarding"
---

## Other pages

* [Sales onboarding](/handbook/sales-onboarding)
* [Developer onboarding](/handbook/developer-onboarding)
* [Service engineer onboarding](/handbook/support/onboarding/)
* [Offboarding](/handbook/offboarding/)

## This page

* [Master Checklist for Onboarding of New Hires](#checklist)
* [Onboarding Topics That Apply to Everyone](#everyone)
  * [General](#general)
  * [GitLab Instances](#gitlab-instances)
  * [Security](#security)
  * [Git Quiz!](#quiz)


## Master Checklist for Onboarding of New Hires <a name="checklist"></a>

Create issue for new hire in organization with following checklist.
This list looks strange in this handbook but this is to ensure you can copy paste it into an issue.
When you paste it in an issue it will have checkboxes that you can click to complete.
The topics are ordered by priority in which they need to be tackled, and the main person responsible is called out at the beginning of each task.

```
### BEFORE STARTING AT GITLAB

* [ ] People Ops: Once the contract is signed, as soon as possible, create issue called 'Onboarding (NAME), starting (DATE), as (ROLE)' in
[organization](https://dev.gitlab.org/gitlab/organization/issues) with relevant
lines of the master checklist, paste the private email address of the hire in
there and /cc @rspeicher, @jacobvosmaer, @patricio, @ernst, @kirsten, and @tiffanie.
* [ ] Hiring manager is (FILL IN WITH @ HANDLE), buddy is (FILL IN WITH @HANDLE (Nominate someone preferably in similar timezone but different functional group)), and People Ops is tackled by (FILL IN WITH @ HANDLE).
* [ ] People Ops: Add entry to availability calendar so the team can see when new people are joining.
* [ ] People Ops: Add blank entry to team page (only the start date and position, use "logo-extra-whitespace.png" for the picture) so the team can see when new people are joining.
* [ ] People Ops: Add entry to Team Call agenda to introduce the new team member, and make sure to include the new team members NAME as well as TITLE in the agenda item.
* [ ] New team member: provide scan of photo ID to People Ops.
* [ ] New team member: read [Handbooks](https://about.gitlab.com/handbook/), read
the relevant onboarding pages that are linked from there, and become comfortable
with Git and the GitLab workflow.
* [ ] People Ops: create new profile for team member in BambooHR, and input relevant data (title, dates, contract type, compensation) into the team members profile tabs "Job". Be sure to enable "self-service" before saving the newly entered information.
* [ ] People Ops: file signed contract with PIAA or NDA+IP agreements in BambooHR profile under "Documents"-->"Signed Contract/Offer Letter". Set the uploaded documents to "shared" so that the team member can also view them.
* [ ] People Ops: when applicable, file photo ID in BambooHR profile under "Documents"--> "Verification Docs"
* [ ] People Ops: list any stock options that were part of the offer in BambooHR profile under "Benefits"--> "Stock Options"
* [ ] Robert/Jacob/Ernst: create Google account, `firstname@gitlab.com` or `initial(s)@gitlab.com`, email instructions to private email address, comment with private email below this issue, turn off [2FA enforcement](https://admin.google.com/gitlab.com/AdminHome#ServiceSettings/notab=1&service=securitysetting&subtab=org) and schedule reenabling it
* [ ] Robert/Jacob/Ernst: inform Hiring manager that Google account has been created by mentioning them with a comment in the issue.
* [ ] Robert/Jacob/Ernst: Create a [new dev.GitLab.org account](https://dev.gitlab.org/admin/users/new) and invite to the [gitlab group](https://dev.gitlab.org/groups/gitlab/group_members) as a developer
* [ ] Robert/Jacob/Ernst: @mention the new team member in this onboarding issue once their dev.gitlab.org account has been made.
* [ ] Robert/Jacob/Ernst: Add to [Slack](https://gitlab.slack.com/admin)
* [ ] People Ops: Give team member access to the GitLab availability calendar
* [ ] People Ops: Add new team member to the next monthly GitLab 101 call
* [ ] People Ops: Invite to team meeting, and re-arrange the days on which team members speak in the Team Call Agenda.
* [ ] People Ops: reach out to the new team member to identify and order any necessary supplies/equipment.
* [ ] People Ops: Assign buddy and explain to buddy what that means: "If she/he
has questions she/he can come to you. But your main job as a buddy will be to
direct her/him to the right parts of the handbook, and/or encourage her/him to
ask her/his questions of the wider group on Slack, etc."
* [ ] People Ops: Send brief welcome email to their personal address that directs
the new team member to their GitLab email and their onboarding issue. Template text:
"Welcome to GitLab, we are happy to have you on the team! You should have received
an invitation to your GitLab email account; please let me know if that is not the case.
Everything you need to get started is listed in your onboarding issue (insert link).
We're looking forward to seeing you on our daily Team Call! The first time that you
join, please make sure that you connect at least 10 minutes before the call and
make sure that your camera and microphone are working properly. We'd like you to
introduce yourself to the team so please prepare some talking points for yourself.
Some tips to help you out here: tell us about where you were before GitLab, why
you wanted to join our team, just a little something about your background and
of course something on what you like to do in your spare time."


### ON YOUR FIRST DAY

#### For GitLab Inc employees only

* [ ] People Ops: gather relevant information from new team member to enter them into the TriNet system.
* [ ] People Ops: complete and submit an online Add New Hire Form
(TriNet Passport=>My Workplace=> Add New Hire/Rehire). This will generate the
welcome email to the employee at their work email on their first date of hire.
* [ ] New employee: complete [New Hire TriNet Passport 7 Steps Guide](https://docs.google.com/a/gitlab.com/document/d/1CFIyByd1Kgmz5353_aASVI1D8QTyJ2Uy60ziQHEPTUI/edit?usp=sharing). The I-9 portion of this must be completed with the first two days of hire. Note- this is critical so you must contact PeopleOps if you have difficulty with this form.
* [ ] New employee: read through the [New Hire Benefits Guide](https://drive.google.com/a/gitlab.com/file/d/0B0dixQ9qzgilNlN0MnNFS29xWnB2SjNWVUk3dUV2aWlhejVR/view?usp=sharing). This will go over medical, dental, vision and voluntary benefits. Note - If you have any questions or need help within the TriNet system please contact the Employee Solution Center at 800-638-0461 or email them at employees@trinet.com.
* [ ] People Ops: Set up new hire training with TriNet (If necessary).

#### For GitLab BV employees only

* [ ] New team member: fill in this payroll information [form](https://docs.google.com/a/gitlab.com/forms/d/1mExVeTRn1cd0MtnNuvMSy7UJ8WazI5D6_snq3R6bsmI/viewform)
This info is needed to get your profile ready with Savvy HR in order to get you your payslips and other information.
Next to Savvy, the People Ops team will also get a copy of the form info for your employee file on BambooHR

#### All team members

* [ ] New team member: Register on 1Password by clicking on the link in the shared Google Doc titled "Link to 1Password Sign-Up"
and then ping @rspeicher to confirm your account. You can find this (and other) shared Google Docs by using [`Search <your domain>`](https://support.google.com/a/answer/3187967?hl=en) in Google Drive.
* [ ] New team member: once you are registered on 1Password, ping your hiring manager to grant you access
to the proper shared Vaults by making a suggestion in the relevant cell in the "1password Shared Folders" Google Sheet.
* [ ] New team member: Set up [secure passwords per the handbook](https://about.gitlab.com/handbook/security/).
* [ ] New team member: Create GitLab.com account and leave a comment in this issue with the handle. (To clarify, this is **not** the same as your account and username on dev.gitlab.org which you already have if you can see this issue).
* [ ] Robert/Jacob/Ernst: Invite team members' GitLab.com account to the [gitlab-com group](https://gitlab.com/groups/gitlab-com/group_members) as a developer.
* [ ] New team member: Use the "reset your password" email of BambooHR to set a password and access your profile.
* [ ] New team member: Add your Address, Phone number, private email and emergency contact to your BambooHR profile page.
* [ ] New team member: Set up [Calendly](https://about.gitlab.com/handbook/#calendly) and add your Calendly link to your Slack profile.

### WITHIN FIRST WEEK OF STARTING

* [ ] PeopleOps: Invite to autoconnect on [Beamy](https://about.gitlab.com/handbook#beamy-guidelines).
* [ ] PeopleOps: Order business cards for new team member.
* [ ] PeopleOps: Add team member to Expensify (if employee).
* [ ] PeopleOps: Add new team member to the info sheets of the Austin Summit.
* [ ] PeopleOps: Send the new team member the "reset password" email for their BambooHR profile.
* [ ] PeopleOps: Create a profile on [Egencia](https://about.gitlab.com/handbook/travel/) for new team member.
* [ ] New team member: schedule 10 calls of 30 mins with 10 different colleagues to get to know our team.
   * [ ] 1. call with ___
   * [ ] 2. call with ___
   * [ ] 3. call with ___
   * [ ] 4. call with ___
   * [ ] 5. call with ___
   * [ ] 6. call with ___
   * [ ] 7. call with ___
   * [ ] 8. call with ___
   * [ ] 9. call with ___
   * [ ] 10. call with ___
* [ ] New team member: Link your GitLab email address to an easily recognizable photo of yourself on [gravatar](https://en.gravatar.com/) (don't use an avatar, stock photo or something with sunglasses).
* [ ] New team member: [Add yourself](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/add_member_to_team_page.md) to the [team page](https://about.gitlab.com/team/) with an easily recognizable photo. In the description of the merge request, add the template text for the tweet that announces your entry to the team: "Very happy to announce that [NAME] joined our #[TEAM] team! Welcome [TWITTER HANDLE]! https://about.gitlab.com/team/". Assign the merge request to your hiring manager, and @ mention Amara so that she can schedule the tweet to announce you!
* [ ] Amara: Send out or schedule a tweet about the new hire when the addition to the team page has been merged. Make screenshot of the profile and include that in the tweet.
* [ ] New team member: Add yourself to the [public map](https://sundial.teleport.org/public/groups/Y3IahPR5vYjBpMyU2kZj) of everyone's location via [Sundial](https://docs.google.com/a/gitlab.com/document/d/1U0ZYlKgX_VZVCKUozRYehRSiNquzIN1hg8B2RP19QCw/edit?usp=sharing).
* [ ] New team member: I verify that the home folder of my hard drive is encrypted (see the [security handbook](https://about.gitlab.com/handbook/security) for help).
* [ ] New team member: Read the [Summit page](https://gitlab.com/summits/Austin-Summit-2016-project/) and save the date!
* [ ] New team member: Make an improvement to the handbook (something that you wished was there), assign the merge request (MR) to your manager and link the MR url in this onboarding issue.


### FOR ENGINEERING ONLY (Devs, PEs, SEs)

* [ ] Patricio/Robert/Jacob: Add new team member to the [gitlab-org](https://gitlab.com/groups/gitlab-org/group_members) group on GitLab.com as a `Developer`.
* [ ] For Production Engineering team members: Hiring manager: add the [sysadmin onboarding checklist](https://dev.gitlab.org/cookbooks/chef-repo/blob/master/doc/onboard-new-sysadmin.md).
* [ ] PeopleOps: Add the new team member to the next Retro meeting and the Kickoff meeting that's scheduled and save for all events in the future.

#### FOR SERVICE ENGINEERING ONLY

* [ ] Patricio/Robert/Jacob: Create GitLab.com admin account.
* [ ] Patricio/Ernst: Add to Tweetdeck for `@gitlabstatus`.
* [ ] Jose: add to slack handle `@supportteam`
* [ ] Jose: invite to support team call
* [ ] Jose: use the "GitLab Email Forwarding" google doc to request that the new team member is added to the alias for the support team.

#### FOR UX/UI DESIGNERS AND FRONTEND ENGINEERING ONLY

* [ ] Hiring Manager: leave note below if an Adobe Creative Cloud license is needed, ping Ernst.
* [ ] Hiring Manager: leave note below if an Antetype license is needed, ping Ernst.

### FOR MARKETING ONLY

* [ ] Patricio/Ernst: Add to Tweetdeck.

### FOR SALES AND FINANCE ONLY

* [ ] Finance: Add to Comerica (as user or viewer only if in Finance)
* [ ] Finance: Add to [QuickBooks users](https://about.gitlab.com/handbook/hiring/) (finance only)
* [ ] People Ops: Order company credit card (for all sales team members who are employees)
* [ ] People Ops: If credit card holder, add to expense report calendar reminder
* [ ] CFO / Ernst: Add to [Hellosign](https://hellosign.com) as a team member
* [ ] Hiring Manager: Invite to sales meeting.
* [ ] Hiring Manager: Add to [Recurly](https://app.recurly.com/login)
* [ ] Hiring Manager: Add to  [Salesforce]
* [ ] New team member: Ask a colleague if they can do a screenshare the next time they process an order using Recurly and Salesforce.
* [ ] Sales Manager: Grant access to the [Sales Folder](https://drive.google.com/drive/u/0/#shared-with-me) in our Google Docs. In this folder, familiarize yourself with:
* [ ] New team member: In the [Sales Folder](https://drive.google.com/drive/u/0/#shared-with-me), familiarize yourself with
  1. [Our Sales Process](https://docs.google.com/document/d/1F0vXw58ctLfk9LKrh35kOSjYvdah4skGGUt46l1-4GM/edit)
  1. [Our Sales Agenda](https://docs.google.com/document/d/1l1ecVjKAJY67Zk28CYFiepHAFzvMNu9yDUYVSQmlTmU/edit)
  1. [The Sales Sheet](https://docs.google.com/spreadsheets/d/1755SblMccalWXSahspOrfzBwjGp4F8TkwlB8dOXCGlU/edit#gid=11) - add any targets to the Target tab
  1. Competition https://about.gitlab.com/comparison/
  1. [Our Sales Communication Guide](https://docs.google.com/document/d/1IMDzTj3hZrnsA417z9Ye7WBa8yLkWxGzaLZNJ3O_nVA/edit#heading=h.3nffcmsbeqo7)
* [ ] New team member: familiarize yourself with the [Support](https://about.gitlab.com/handbook/support/) process.
* [ ] New team member: familiarize yourself with [giving a GitLab demo](https://about.gitlab.com/handbook/demo/)

```

Please update this list as more steps arise.

## Onboarding topics that apply to everyone<a name="everyone"></a>

### General<a name="general"></a>

* The first month at a remote first company is hard, especially if you have not worked remote before and/or if you're unfamiliar with the tools used (mainly GitLab, chat, and video calling). If you feel lonely feel free to schedule 1 on 1 video calls to get to know people. If you need help with the tools ask people for help. If you don't know who to ask for help use the #questions chat channel. If you're not happy please let your manager know so we can take action.
* We've set up a monthly GitLab 101 call to explain our history and have some time for Q&A.
* We use [Slack](https://gitlab.slack.com/messages/general/), [Google Docs](https://www.google.com/docs/about/) and [dev.gitlab.org](https://dev.gitlab.org) to communicate.
* Check out our [about page](https://about.gitlab.com/about/), [How we use GitLab to build GitLab](https://about.gitlab.com/2015/07/07/how-we-use-gitlab-to-build-gitlab/).
* Follow the Git and GitLab course on [Platzi](https://courses.platzi.com/courses/git-gitlab/)
* Become familiar with how GitLab works by learning our [GitLab Basics](http://doc.gitlab.com/ce/gitlab-basics/README.html)
* Read our [Team Handbook](https://about.gitlab.com/handbook/)
* Set-up and familiarize yourself with our apps: [Gmail](https://mail.google.com/), [Google Calendar](https://www.google.com/calendar/), [Slack](https://gitlab.slack.com/messages/general/) and [Google Drive](https://www.google.com/drive/)
* Be aware your google calendar (tied to your GitLab account) is internally viewable by default, you might want to [change this](https://support.google.com/calendar/answer/34580?co=GENIE.Platform%3DDesktop&hl=en) in your calendar settings.
* You can [download](https://tools.google.com/dlpage/drive/index.html?hl=en) Google Drive for your computer to access offline
* You should have been provided access to our [Internal GitLab Server](https://dev.gitlab.org). Take a moment to familiarize yourself with:
  1. The Dashboard
  1. The Projects
  1. The Issue Tracker
* Become familiar with the README.md’s for these projects:
  1. [GitLab Enterprise Edition](https://dev.gitlab.org/gitlab/gitlab-ee)
  1. [GitLab HQ](https://dev.gitlab.org/gitlab/gitlabhq)
  1. [GitLab www-gitlab-com](https://dev.gitlab.org/gitlab/www-gitlab-com)
* Create an account on our external / public [GitLab Server](https://gitlab.com) and have your manager grant access to the GitLab Enterprise Edition Project, Standard Subscribers Group and other projects / groups relevant to your role
* Review our [Team Agenda](https://docs.google.com/document/d/1JiLWsTOm0yprPVIW9W-hM4iUsRxkBt_1bpm3VXV4Muc/edit) for daily call
* Become familiar with [GitLab's Website](https://about.gitlab.com) and the following links:
  1. [Documentation](https://about.gitlab.com/documentation/)
  1. [EE Pricing](https://about.gitlab.com/pricing/)
  1. [Blog](https://about.gitlab.com/blog/)
  1. [About Us](https://about.gitlab.com/about/)
* Connect with GitLab's social media sites:
  1. [LinkedIn](https://www.linkedin.com/company/gitlab-com)
  1. [Twitter](https://twitter.com/gitlab)
  1. [Facebook](https://www.facebook.com/gitlab)
  1. [YouTube](https://www.youtube.com/channel/UCnMGQ8QHMAnVIsI3xJrihhg)
* Learn how to use our Internal Issue Trackers:
We use GitLab Issues to raise awareness, discuss and propose solutions for various issues related to any aspect of our business.
The most common Issues are created in the following projects:
  1. [GitLab Enterprise Edition](https://dev.gitlab.org/gitlab/gitlab-ee) - Issues related to GitLab Enterprise Edition
  1. [GitLab HQ](https://dev.gitlab.org/gitlab/gitlabhq) - customer requests
  1. [GitLab www-gitlab-com](https://dev.gitlab.org/gitlab/www-gitlab-com) - Issues related to our website
* Add issues in the correct Issue Tracker:
  1. Public issues related to GitLab website: use [www-gitlab-com](https://gitlab.com/gitlab-com/www-gitlab-com)
  1. Internal issues related to documentation and gitlab.com usage: Use [GitLab HQ](https://dev.gitlab.org/gitlab/gitlabhq)
  1. Internal issues related to the organization: Use [GitLab Organization](https://dev.gitlab.org/gitlab/organization)
  1. Internal issues relate to Enterprise Edition: Use [GitLab EE](https://dev.gitlab.org/gitlab/gitlab-ee)

### GitLab Instances<a name="gitlab-instances"></a>
We have two GitLab instances that we use primarily, namely the 'dev' server and the free SaaS of GitLab at GitLab.com.

#### dev.gitlab.org
* This server is only accessible to people from GitLab the company.
* This is the instance we use for customers development.
* In addition, all our internal (company) issues are found here as well.
* This server is updated from master every night, so we quickly see if we broke something.
* Often referred to as `dev`.

#### GitLab.com
* This is the SaaS of GitLab. Everyone can host their repository for free here and
this is where the majority of open source contributions come in. Unless there's
a good reason not to (customer information disclosure, undisclosed security
issues, etc.), do your development and submit your merge requests here [in the open](https://about.gitlab.com/2015/08/03/almost-everything-we-do-is-now-open/).

#### Other instances
Many developers set up their own private GitLab instance somewhere, for instance
to test and work with LDAP or Active Directory, to give demos, or for various
other reasons.

### Security<a name="security"></a>

See the [security handbook](https://about.gitlab.com/handbook/security).

### Quiz<a name="quiz"></a>
Employees should answer GitLab quiz questions in the first 2 weeks of working in
the company. If the answers are not accurate, you may retest once: [GitLab Quiz](https://about.gitlab.com/handbook/questions/)
Please schedule a call with your hiring manager.
