---
layout: markdown_page
title: "GitLab Onboarding"
---
## Onboarding Topics
* [Master Checklist for Onboarding of New Hires](#checklist)
* [Onboarding Topics That Apply to Everyone](#everyone)
  * [General](#general)
  * [Security](#security)
  * [Git Quiz!](#quiz)
* [Onboarding Topics for Developers](#developers)
* [Offboarding](#offboarding)

## Master Checklist for Onboarding of New Hires <a name="checklist"></a>

Create issue for new hire in organization with following checklist.
This list looks strange in this handbook but this is to ensure you can copy paste it into an issue.
When you paste it in an issue it will have checkboxes that you can click to complete.
The topics are ordered by priority in which they need to be tackled, and the main person responsible is called out at the beginning of each task.

```
### BEFORE STARTING AT GITLAB

* [ ] People Ops: Create issue called 'Onboarding (NAME), starting (DATE), as (ROLE)' in 
[organization](https://dev.gitlab.org/gitlab/organization/issues) with relevant 
lines of the master checklist, paste the private email address of the hire in 
there and /cc @rspeicher, @jacobvosmaer, @patricio, and @sytse.
* [ ] People Ops: Add entry to availability calendar so the team can see when new people are joining.
* [ ] Hiring manager is (FILL IN WITH @ HANDLE), buddy is (FILL IN WITH @ HANDLE), and People Ops is tackled by (FILL IN WITH @ HANDLE).
* [ ] Hiring manager: cc new team member on the issue once they have a dev.GitLab.org account.
* [ ] Robert/Jacob/CEO: create Google account, firstname@gitlab.com or initial(s)@gitlab.com, email instructions to private email address, comment with private email below this issue, turn off [2FA enforcement](https://admin.google.com/gitlab.com/AdminHome#ServiceSettings/notab=1&service=securitysetting&subtab=org) and schedule reenabling it
* [ ] Robert/Jacob/CEO: inform Hiring manager that Google account has been created by mentioning them with a comment in the issue.
* [ ] Hiring manager: send an email to company address 'Please read https://about.gitlab.com/handbook/ and the relevant onboarding pages that are linked from there and let me know if you have any questions.'
* [ ] New team member: read [Handbooks](https://about.gitlab.com/handbook/), and become comfortable with Git and the GitLab workflow.
* [ ] New team member: provide signed contract (including signed proprietary information and assignment agreement (PIAA)) to People Ops. 
* [ ] New team member: provide scan of photo ID to People Ops.
* [ ] People Ops: file signed contract, PIAA, and photo ID in Dropbox and confirm receipt by commenting in the issue.
* [ ] Robert/Jacob/CEO: Add to [Slack](https://gitlab.slack.com/admin)
* [ ] People Ops: Assign buddy and explain to buddy what that means: "What it 
means is that if she/he has questions she/he can come to you. But your main job 
as a buddy will be to direct her/him to the right parts of the handbook, and/or 
encourage her/him to ask her/his questions of the wider group on Slack, etc."

### WITHIN TWO DAYS OF STARTING

#### For GitLab Inc employees only

* [ ] People Ops: complete and submit an online Add New Hire Form 
(TriNet Passport=>My Workplace=> Add New Hire/Rehire). This will generate the 
welcome email to the employee at their work email on their first date of hire.
* [ ] New employee: complete [New Hire TriNet Passport 7 Steps Guide](https://docs.google.com/a/gitlab.com/document/d/1CFIyByd1Kgmz5353_aASVI1D8QTyJ2Uy60ziQHEPTUI/edit?usp=sharing). The I-9 portion of this must be completed with the first two days of hire. Note- this is critical so you must contact HR@gitlab.com if you have difficulty with this form.
* [ ] New employee: submit a completed [New Employee Personal Information Form](https://docs.google.com/a/gitlab.com/document/d/1oK_-me8inC6pyODjITxMHiq5C5NC88xQw6cwUBU5g1g/edit?usp=sharing) to HR@gitlab.com
* [ ] New employee: read through the [New Hire Benefits Guide](https://drive.google.com/a/gitlab.com/file/d/0B0dixQ9qzgilNlN0MnNFS29xWnB2SjNWVUk3dUV2aWlhejVR/view?usp=sharing). This will go over medical, dental, vision and voluntary benefits. Note - If you have any questions or need help within the TriNet system please contact the Employee Solution Center at 800-638-0461 or email them at employees@trinet.com.
* [ ] People Ops: Set up new hire training with TriNet (If necessary).
* [ ] People Ops: Add new employees to [Inc payroll](https://docs.google.com/document/d/1osAcaVUKU6v3GbuenygxSMqlFBuX7IxF5dI4AaxdeQc/edit#heading=h.8vrvk3l6lfzl).


#### For GitLab BV employees only

* [ ] New employee: provide People Ops with your BSN (burger service nummer), bank account information (IBAN code), the basics (name, address, date of birth), and if you are based in the Netherlands, please indicate whether you want "loonheffingskorting" to be applied or not.
* [ ] People Ops: Add new employees to [BV payroll](https://docs.google.com/document/d/1g6nZ7w1RqkSvD6VbyuRPauDTUuyTp4mDaHrUY2UVY-A/edit).


### WITHIN FIRST WEEK OF STARTING

* [ ] People Ops: reach out to the new team member to identify and order any necessary supplies/equipment.
* [ ] Patricio/CEO: Add to tweetdeck
* [ ] New team member: Link your GitLab email address to an easily recognizable photo of yourself on [gravatar](https://en.gravatar.com/) (don't use an avatar or stock photo).
* [ ] New team member: Create GitLab.com account and leave a comment in this issue with the handle
* [ ] Hiring manager: /cc the new user in the organization issue with this checklist that was created for them.
* [ ] Robert/Jacob/CEO: Invite team members' Gitlab.com account to the [gitlab.com group](https://gitlab.com/groups/gitlab-com/group_members) as a developer
* [ ] Robert/Jacob/CEO: Create a [new dev.GitLab.org account](https://dev.gitlab.org/admin/users/new) and invite to the [gitlab group](https://dev.gitlab.org/groups/gitlab/group_members) as a developer
* [ ] People Ops: Invite to team meeting
* [ ] People Ops: Send [People Information sheet](https://docs.google.com/spreadsheets/d/1vpFL7pPD6DYg9bgnW9JOFUKTg1XkTs10yOOyB7KqWxM/edit#gid=0) and instruct to return answers via email or slack
* [ ] People Ops: [Add to 1Password](https://gitlab.1password.com/admin/people/members) and create an item for new hire in profiles vault
* [ ] People Ops: Put People Information into Profiles in 1Password
* [ ] New team member: Register on 1Password by clicking [this link](https://gitlab.1password.com/teamjoin/invitation/J2KWH3CJDRFA7KTFDVVXXDSCMY)
and then ping @rspeicher to confirm your account.
* [ ] New team member: Set up [secure passwords per the handbook.](https://about.gitlab.com/handbook/general-onboarding/#security)
* [ ] People Ops: Add to Dropbox folders (if necessary)
* [ ] People Ops: Invite to autoconnect on Beamy
* [ ] People Ops: Order business cards for new team member.
* [ ] New team member: [Add yourself](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/add_member_to_team_page.md) to the [team page](https://about.gitlab.com/team/)
* [ ] CEO: Add team member to the GitLab availability calendar
* [ ] New team member: I verify that the home folder of my harddrive is encrypted.

### FOR ENGINEERING ONLY (Devs, DevOps, SEs)

* [ ] Patricio/Robert/Jacob: Add new team member to the [gitlab-org](https://gitlab.com/groups/gitlab-org/group_members) group on GitLab.com as a `Developer`.

### FOR SALES AND FINANCE ONLY

* [ ] Finance: Add to Comerica (as user or viewer only if in Finance)
* [ ] Finance: Add to [QuickBooks users](https://about.gitlab.com/handbook/hiring/) (finance only)
* [ ] People Ops: Order company credit card (for all sales team members who are employees)
* [ ] People Ops: If credit card holder, add to expense report calendar reminder
* [ ] Hiring Manager: Add to [Recurly](https://app.recurly.com/login)
* [ ] Hiring Manager: Add to  [Salesforce]
* [ ] New team member: Ask a colleague if they can do a screenshare the next time they process an order using Recurly and Salesforce.
* [ ] Hiring Manager: Invite to sales meeting.
* [ ] Sales Manager: Grant access to the [Sales Folder](https://drive.google.com/drive/u/0/#shared-with-me) in our Google Docs. In this folder, familiarize yourself with:
* [ ] New team member: In the [Sales Folder](https://drive.google.com/drive/u/0/#shared-with-me), familiarize yourself with
  1. [Our Sales Process](https://docs.google.com/document/d/1F0vXw58ctLfk9LKrh35kOSjYvdah4skGGUt46l1-4GM/edit)
  1. [Our Sales Agenda](https://docs.google.com/document/d/1l1ecVjKAJY67Zk28CYFiepHAFzvMNu9yDUYVSQmlTmU/edit)
  1. [The Sales Sheet](https://docs.google.com/spreadsheets/d/1755SblMccalWXSahspOrfzBwjGp4F8TkwlB8dOXCGlU/edit#gid=11) - add any targets to the Target tab
  1. Competition https://about.gitlab.com/comparison/
  1. [Our Sales Communication Guide](https://docs.google.com/document/d/1IMDzTj3hZrnsA417z9Ye7WBa8yLkWxGzaLZNJ3O_nVA/edit#heading=h.3nffcmsbeqo7)
* [ ] New team member: familiarize yourself with the [Support and Development Process](https://about.gitlab.com/handbook/support-and-development-process)
* [ ] New team member: familiarize yourself with [giving a GitLab demo](https://about.gitlab.com/handbook/demo/)

```

Please update this list as more steps arise.

## Onboarding topics that apply to everyone<a name="everyone"></a>

### General<a name="general"></a>

* The first month at a remote first company is hard, especially if you have not worked remote before and/or if you're unfamiliar with the tools used (mainly GitLab, chat, and video calling). If you feel lonely feel free to schedule 1 on 1 video calls to get to know people. If you need help with the tools ask people for help. If you don't know who to ask for help use the #questions chat channel. If you're not happy please let your manager know so we can take action.
* We use [Slack](https://gitlab.slack.com/messages/general/), [Google Docs](https://www.google.com/docs/about/) and [dev.gitab.org](https://dev.gitlab.org) to communicate.
* Check out our [about page](https://about.gitlab.com/about/), [How we use GitLab to build GitLab](https://about.gitlab.com/2015/07/07/how-we-use-gitlab-to-build-gitlab/) and [Life as a non technical employee at GitLab](https://about.gitlab.com/2015/06/30/life-as-a-non-technical-employee-at-gitlab/)
* Follow the Git and GitLab course on [Platzi](https://courses.platzi.com/courses/git-gitlab/)
* Become familiar with how GitLab works by learning our [GitLab Basics](http://doc.gitlab.com/ce/gitlab-basics/README.html)
* Add yourself to our [Email, Phone and Emergency Contact Sheet](https://docs.google.com/spreadsheets/d/1kMPW_eGEOz9HOIHbD8uPCzDWljsDHovS4H5XY8Q12wo/edit#gid=0)
* Read our [Team Handbook](https://about.gitlab.com/handbook/)
* Add yourself to our [Employee Phone List](https://docs.google.com/spreadsheets/d/1kMPW_eGEOz9HOIHbD8uPCzDWljsDHovS4H5XY8Q12wo/edit#gid=0)
* Set-up and familiarize yourself with our apps: [Gmail](https://mail.google.com/), [Google Calendar](https://www.google.com/calendar/), [Slack](https://gitlab.slack.com/messages/general/) and [Google Drive](https://www.google.com/drive/)
* Have your manager provide access to our [Internal GitLab Server](https://dev.gitlab.org) and familiarize yourself with:
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

### Security<a name="security"></a>
<ol>
<li>When you are offboarded the 1Password account is deleted, if you want to store your non-work passwords please store them in your 'Primary' vault, not the vault named 'Your Vault'.</li>
 <li><b>Never reuse</b> a password you use on a company account, not for another GitLab service nor for a personal account.</li>
<li>Set up <a href="https://agilebits.com/onepassword">1Password</a> as your password manager and set a strong and unique master password.</li>
<li>Use 1Password to <a href="https://support.1password.com/guides/mac/generate-a-strong-password.html">generate <b>strong passwords</b></a> for any new company accounts.</li>
<li>
<p>
When signing up for a new service ask yourself which team members you need to <b>share access</b> with.
If the service has a built-in way of creating other user accounts, use that.
If not, then store your credentials in an appropriate company 1Password vault so that your colleagues can sign in using your credentials.
</p>
<p>
Do not share credentials via email, issue comments, chat etc.
This includes email addresses to login and API keys.
Use 1Password vaults for this.
You should be invited to a few vaults after joining the company.
</p>
<p>
If you're missing an appropriate vault ask the CEO to create a new vault.
Refer to the items with NAME_OF_SITE credentials in VAULT_NAME. For example: "for access please see the AOL credentials in the Luddite vault".
Do not store credentials in a vault if everyone has their own user account for the service.
</p>
</li>
<li>Do not let your password manager store the <b>master password</b> (it is ok to store the login).</li>
<li>Enable 2 factor authentication (2FA) with <a href="https://support.google.com/accounts/answer/1066447?hl=en">Google Authenticator</a> (not SMS) for your Google, Slack and GitLab accounts. These can be added to 1Password via 'Add new one-time password'.</li>
<li><b>Encrypt</b> your home folder (easy on Ubuntu/Debian, on OS X use FileVault2 full disk encryption).</li>
<li>Set up a screen saver with password <b>lock</b> on your notebook. The timeout can depend on how you use your laptop.</li>
<li><b>Report</b> suspect situations to an officer of the company.</li>
<li>If you have security <b>suggestions</b> put them on the <a href="https://docs.google.com/document/d/1JiLWsTOm0yprPVIW9W-hM4iUsRxkBt_1bpm3VXV4Muc/edit">team call agenda</a>.</li>
<li>Never <b>dismiss</b> a security report as invalid. Keep asking questions until the researcher comes to the same conclusion or stops responding.</li>
<li>Do not <b>forward</b> company emails (@gitlab.com) to a non-company email address.</li>
<li>
  Do not click on links in emails you did not request yourself (requested password reset is OK, anything else is suspect).
  Clicking itself is a problem even when you don't enter a password, because a visit can already be used to execute a zero day.
  We simulate phishing attacks by having an external service send emails to our company email addresses to ensure everyone is aware of the threat.
</li>
<li>All access to vaults is noted in [a Google Sheet](https://docs.google.com/spreadsheets/d/1dSlIRbD1b8XisIBbANDK5NGe55LvVSTsWM7aHcWCOVU/edit#gid=0) use this to request access, ping the relevant administrator after you updated the sheet</li>
<li>The CEO will not send you a [email to wire cash](http://blog.centrify.com/ceo-fraud-business-email-compromise/), feel free to verify any strange request with a video call.</li>
</ol>

### Quiz<a name="quiz"></a>
Employees should answer GitLab quiz questions in the first 2 weeks of working in
the company. If the answers are not accurate, you may retest once:
<a href="https://about.gitlab.com/handbook/questions/">GitLab Quiz.</a>
Please schedule a call with your hiring manager.</li>

##Onboarding Topics for Developers<a name=#developers></a>
Awesome! You're about to become a GitLab developer!
Make sure you've checked out our [handbook](https://about.gitlab.com/handbook)
beforehand, so you get a feeling of how we work at GitLab. Below you'll find
everything you need to start developing.
If something is missing, add it (as goes with everything at GitLab)!

### GitLab instances

We have two GitLab instances that we use primarily:

#### dev.gitlab.org

This server is only accessible to people from GitLab the company.
This is the instance we use for customers development.
In addition, all our internal (company) issues are found here as well.
This server is updated from master every night, so we quickly see if we broke something.

Often referred to as `dev`.

#### GitLab.com

This is the SaaS of GitLab. Everyone can host their repository for free here and this is where the majority of open source contributions come in.
If you can, do you development and create your merge requests here.

#### Other instances

Many developers set up their own private GitLab instance somewhere, for instance to test and work with LDAP or Active Directory, give demos and other reasons.

### Getting started with GitLab development

To start development, simply follow the instructions at the [GitLab Development Kit](https://gitlab.com/gitlab-org/gitlab-development-kit).

### GitLab Repositories

Almost all repos are available on both GitLab.com as well as dev.
For the most popular projects, you can also find them on GitHub.com, this makes it easier for people to contribute.

#### GitLab Community Edition (CE)

This is the community edition of GitLab. Most of the development happens here, then gets merged into GitLab EE once in a while. If you do something general, that doesn't restricts itself to EE, do it in GitLab CE.

- [dev.gitlab.org/gitlab/gitlabhq]
- [gitlab.com/gitlab-org/gitlab-ce]
- [https://github.com/gitlabhq/gitlabhq](https://github.com/gitlabhq/gitlabhq)

#### GitLab Enterprise Edition (EE)

This is _not_ an open source project, but we made the source code available for viewing and contributions. It requires a license key to be used (since GitLab 7.11 EE).

It exists in three places. The subscribers repository is deprecated and used to be
used as a private repository for customers:

- [dev.gitlab.org/gitlab/gitlab-ee] Most development in EE happens here.
- [gitlab.com/gitlab-org/gitlab-ee] Public repo of EE.
- [gitlab.com/subscribers/gitlab-ee] Deprecated private and no longer update repo.

#### GitLab Continuous Integration (CI)

GitLab CI is the CI tool that runs the tests in your repositories, does deploys and anything you program it to do. It comes bundled with every GitLab package.

Available on both instances:

- [https://dev.gitlab.org/gitlab/gitlab-ci](https://dev.gitlab.org/gitlab/gitlab-ci)
- [https://gitlab.com/gitlab-org/gitlab-ci](https://gitlab.com/gitlab-org/gitlab-ci)
- [https://github.com/gitlabhq/gitlab-ci](https://github.com/gitlabhq/gitlab-ci)

#### GitLab Shell

GitLab Shell handles git commands for GitLab. It's an essential part of GitLab.

- [https://dev.gitlab.org/gitlab/gitlab-shell](https://dev.gitlab.org/gitlab/gitlab-shell)
- [https://gitlab.com/gitlab-org/gitlab-shell](https://gitlab.com/gitlab-org/gitlab-shell)

#### Omnibus GitLab

Omnibus GitLab creates the packages for GitLab.

- [https://gitlab.com/gitlab-org/omnibus-gitlab](https://gitlab.com/gitlab-org/omnibus-gitlab)
- [https://dev.gitlab.org/gitlab/omnibus-gitlab](https://dev.gitlab.org/gitlab/omnibus-gitlab)
- [https://github.com/gitlabhq/omnibus-gitlab](https://github.com/gitlabhq/omnibus-gitlab)

### Cloud infrastructure

GitLab.com runs on Amazon Web Services (AWS). Many people in GitLab also have instances on DigitalOcean. If you need a VPS for any reason, it's probably easiest to set one up at DigitalOcean. Ask another developer for access.

### Operations

For everything related to operations, check out the [Operations handbook](https://about.gitlab.com/handbook/operations).

[handbook]: https://about.gitlab.com/handbook
[dev.gitlab.org/gitlab/gitlabhq]: https://dev.gitlab.org/gitlab/gitlabhq
[gitlab.com/gitlab-org/gitlab-ce]: https://gitlab.com/gitlab-org/gitlab-ce
[dev.gitlab.org/gitlab/gitlab-ee]: https://dev.gitlab.org/gitlab/gitlab-ee
[gitlab.com/gitlab-org/gitlab-ee]: https://gitlab.com/gitlab-org/gitlab-ee
[gitlab.com/subscribers/gitlab-ee]: https://gitlab.com/subscribers/gitlab-ee


## Offboarding<a name="offboarding"></a>
Create issue for former team member on the dev server in the organization project and add the following checklist (edit it for applicability to the individual).
This list looks strange in this handbook but this is to ensure you can copy paste it into an issue.
When you paste it in an issue it will have checkboxes that you can click to complete.

```
* [ ] Manager of former team member: Organize smooth hand over of any work or tasks from former team member.
* [ ] Jacob/CEO: Block Google account, firstname@gitlab.com or initial(s)@gitlab.com
* [ ] Jacob/CEO: 2 weeks after blocking the Google account, delete it.
* [ ] Manager/CEO: Inform former team member that Google account has been removed by emailing to their personal email address.
* [ ] Jacob/CEO: Delete from Slack
* [ ] People Ops: Remove former team member from TriNet and payroll if applicable.
* [ ] People Ops: Reach out to former team member to identify and retrieve any company supplies/equipment.
* [ ] People Ops: Inform Controller / Accounting if any items in former team members possession will not be returning, so that they can be removed from asset tracking.
* [ ] Jacob/CEO: Remove former team members' Gitlab.com account from the [gitlab.com group](https://gitlab.com/groups/gitlab-com/group_members) as a developer
* [ ] Jacob/CEO: Block former team members' [dev.GitLab.org account](https://dev.gitlab.org/admin/users/new) and remove from [gitlab group](https://dev.gitlab.org/groups/gitlab/group_members) as a developer
* [ ] People Ops: Remove team member access to 1Password.
* [ ] People Ops: Remove team member access to Dropbox.
* [ ] Manager/CEO: Remove access to SalesForce.
* [ ] Manager/CEO: Remove access to Recurly.
* [ ] Manager/CEO: Remove access to Quickbooks.
* [ ] People Ops: Remove access to company credit card if applicable.
* [ ] People Ops: Remove from Beamy
* [ ] CEO: Remove team member from the GitLab availability calendar.
* [ ] CEO: remove team member from team call invitation.
* [ ] Patricio/Jacob/CEO: Remove from tweetdeck
* [ ] COO: Note final date of employment / contract in the [Organizational Chart and Hiring](https://docs.google.com/spreadsheets/u/1/d/1Ru1hUAlF2Z2D2ILDzzqdmOGFbzov6eDSqSwHdM6buzQ/edit?usp=sheets_home) sheet.
* [ ] People Ops: Remove team member from [team page](https://about.gitlab.com/team)
```