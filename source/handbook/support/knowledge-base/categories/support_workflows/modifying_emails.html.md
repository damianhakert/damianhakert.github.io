---
layout: markdown_page
title: Modifying Emails
category: Support Workflows
---

### On this page
{:.no_toc}

- TOC
{:toc}

----

##### Overview

Use this when a user made a typo in their email address while signing up on GitLab.com and are unable to receive confirmation emails.


______________

##### Workflow

1. If it's a new account and there is a typo in the email address, follow [Fix email address](#fix-email-address).
2. If the email address is correct, but the user is not receiving the confirmation email, follow [Check emails in mailgun](#check-emails-in-mailgun).
3. If the account has data, follow [Account has data](#account-has-data).

##### Fix email address

Email address for an account can be changed via the GitLab.com Users Admin area.

1. Go to https://gitlab.com/admin/users and search the account.
2. Click `Edit`.
3. Fix the email address to the correct one and save your changes.
4. Send a confirmation email to the user from https://gitlab.com/users/confirmation/new.
5. Respond to the user.

##### Check emails in mailgun

1. Login into mailgun.com using `supportteam` credentials in Support vault.
2. Go to https://mailgun.com/app/logs/mg.gitlab.com
3. Search logs for the particular email address and see if email is being bounced or delayed.
    + If email is delayed, respond to the user and ask them to wait.
    + If email is bounced, we remove the email from the suppressions list here: https://mailgun.com/app/suppressions/mg.gitlab.com/bounces

##### Account has data

In this case, we verify the existing email or user's identity.

1. Apply the ID Verification Macro
2. Mark the ticket as "Pending"

##### User responds with ID verification 

1. Ensure the provided photo includes the persons face and ID.

2. Ensure the provided ID is one of the following:
    + Driver's License
    + Passport
    + Military/Government ID
    + Permanent Resident Cards

3. Confirm the ID matches the users last and first name on the GitLab.com account.

4. Provided the ID matches, use the **Account::ID Verification - GitLab.com - Successful** Macro
5. Mark the ticket as "Solved"


##### User responds with repository verification 

1. Verify the file uploaded
    + File contains the provided text string.
    + File has been uploaded to a "Personal Repository"

2. Apply an "Internal Comment" with a link to the commit (if not already included)
3. Apply the ID matches, use the **Account::ID Verification - GitLab.com - Successful** Macro

##### Failed to verify provided ID or repository 

1. Apply the **Account::ID Verification - GitLab.com - Failed** Macro


##### User is unable to provide verification

If the user claims they're unable to provide identification we should review the matter internally (Support Team) and determine the best course of action. 

__________________

**Macros**

* [Account::2FA Removal Verification - GitLab.com](https://gitlab.zendesk.com/agent/admin/macros/103721068)
* [Account::2FA Removal Verification - GitLab.com - Failed](https://gitlab.zendesk.com/agent/admin/macros/103790308)
* [Account::2FA Removal Verification - GitLab.com - Successful](https://gitlab.zendesk.com/agent/admin/macros/103772548)
