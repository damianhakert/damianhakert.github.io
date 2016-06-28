---
layout: markdown_page
title: "GitLab Offboarding"
---

Create issue for former team member on the dev server in the [organization issue tracker](https://dev.gitlab.org/gitlab/organization/issues/), and add the following checklist (edit it for applicability to the individual). This list looks strange in this handbook but this is to ensure you can copy paste it into an issue. When you paste it in an issue it will have checkboxes that you can click to complete.

```
* [ ] For this offboarding, the manager is @MENTION, People Ops is handled by @MENTION. cc @rspeicher, @jacobvosmaer, @patricio, @ernst.
* [ ] Robert/Jacob V/Ernst: Disable team member in Slack.
* [ ] Robert/Jacob V/Ernst: Dealing with the Google account
   * [ ] Robert/Jacob V/Ernst: Check with the former team member's manager if they
   want email forwarded. If yes, then:
   * [ ] Robert/Jacob V/Ernst: switch off 2FA for the account, reset the password,
   log on, and set email to forward to the manager. Also change the phone number
   and alternative email (typically personal email address) that are associated
   with the account. Switch 2FA back on and save login credentials in 1password (PeopleOps vault).
   * [ ] Robert/Jacob V/Ernst: upon manager's request (typically 4 weeks after blocking
     the Google account), transfer owned documents from Google Drive to
   manager, and delete the Google account. (automatically disables Drive access)
* [ ] Robert/Jacob V: Remove former team members' GitLab.com account from the [gitlab-com group](https://gitlab.com/groups/gitlab-com/group_members)
* [ ] Robert/Jacob V: Remove former team members' GitLab.com account from the [gitlab-org group](https://gitlab.com/groups/gitlab-org/group_members) (if applicable)
* [ ] Robert/Jacob V: Remove former team members' GitHub.com account from the [gitlabhq organization](https://github.com/orgs/gitlabhq/people) (if applicable)
* [ ] Robert/Jacob V/Ernst: Block former team members' [dev.GitLab.org account](https://dev.gitlab.org/admin/users) and remove from [gitlab group](https://dev.gitlab.org/groups/gitlab/group_members)
* [ ] Robert/Ernst/Jacob V: Remove access to 1Password; take a screenshot of the user's permissions and post it in this offboarding issue.
* [ ] Robert/Ernst/Jacob V: coordinate or actively change sensitive shared passwords. In particular:
   * [ ] sysadmin access passwords for GitLab.com Infrastructure (ssh, chef user/key, discuss others)
   * [ ] team call recordings password (i.e. BlueJeans login)
   * [ ] review what vaults former team member had access to, and discuss with vault "owners" which passwords should be changed.
* [ ] Manager of former team member: Organize smooth hand over of any work or tasks from former team member.
* [ ] Manager: offer option to send a message to everyone in the company (i.e. forwarded by the manager), for a farewell message and/or to transmit their personal email address in case people wish to stay in touch.
* [ ] Manager: Announce in general chat channel 'X is no longer with GitLab'
* [ ] Manager: Put on the agenda for the next team call 'X is no longer with GitLab'
* [ ] Manager: Remove access to SalesForce.
* [ ] Manager: Remove access to Recurly.
* [ ] Manager: Remove access to Netsuite.
* [ ] Manager: Remove access to ZenDesk (Service Engineering Only) - Follow the [ZD guide to removing agents](https://support.zendesk.com/hc/en-us/articles/203661156-Best-practices-for-removing-agents)
* [ ] Manager: Remove moderator status from [GitLab Forum](https://forum.gitlab.com/) account (Service Engineering Only)
* [ ] Manager: Remove access to PagerDuty.
* [ ] People Ops: Remove former team member from TriNet / Savvy and payroll if applicable.
* [ ] People Ops: Mark former team member as terminated in BambooHR. Use the date mentioned in this issue as final date of employment / contract.
* [ ] People Ops: Reach out to former team member to identify and retrieve any company
supplies/equipment. See the [PeopleOps page](https://about.gitlab.com/people-operations/#returning-property)
for further details on that process.
* [ ] People Ops: Inform Controller / Accounting if any items in former team members possession will not be returning, so that they can be removed from asset tracking.

* [ ] @wilson: Remove access to company credit card.
* [ ] People Ops: Remove from Beamy
* [ ] People Ops: Remove team member from the GitLab availability calendar.
* [ ] People Ops: Remove team member from team call invitation; and remove from Team Call Agenda.
* [ ] Ernst/Paul: Remove team member from HelloSign, if applicable.
* [ ] People Ops: Remove team member from map / Sundial.
* [ ] People Ops: Remove team member from [team page](https://about.gitlab.com/team). Don't forget to remove the profile picture.
* [ ] People Ops: Remove team member from Egencia
* [ ] People Ops: Remove team member from Summit planning documents, or inform the organizer.
* [ ] Patricio/Ernst: Remove from tweetdeck
* [ ] People Ops: Notify eShares administrator (CFO) of offboarding.
* [ ] Infrastructure: If the person is from infrastructure [remove the sysadmin](https://dev.gitlab.org/cookbooks/chef-repo/blob/master/doc/user-administration.md#remove-a-sysadmin)
```
