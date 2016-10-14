---
layout: markdown_page
title: Security Handbook
---

## Best Practices<a name="best-practices"></a>

1. **Never reuse** a password you use on a company account, not for another
   GitLab service nor for a personal account.
1. Set up [1Password] as your password manager and set a **strong and unique**
   master password.
1. Use 1Password to [generate strong passwords] for any new accounts.
1. When signing up for a new service ask yourself which team members you need to
   **share access** with. There are three types of account access for these services:
   1. Individual accounts (created manually for you, such as Slack, Google): keep your credentials to yourself by storing them in your 'Personal' vault.
   1. Shared accounts (services that don't allow individual accounts or where it is too expensive): store your credentials in an appropriate company 1Password vault so that your colleagues can sign in using your credentials.
   1. OAuth accounts (authentication through GitLab or Google, such as for checkmk monitoring and grafana).<br>
For all credentials that are not stored in a shared vault on 1Password there should be one secure note in the 'Shared' vault. This can be services that have individual
accounts or OAuth access. Locate the 'secure note' in the team's 'Shared' vault with the name of the service you are trying to access. The note should list whom can give you access in case it has
individual accounts, or it may link to the onboarding checklist. You should be added to most of these services during onboarding.
1. If 2FA should be on for the new user account, make sure to store recovery codes in the login, and consider using [auto-generated TOTP] if useful.
1. If you need to give more people access to credentials [move them](https://discussions.agilebits.com/discussion/comment/133692/#Comment_133692) to a vault that they can access. Never duplicate credentials! If needed put them in the 'Shared' vault that the whole company can access or make a suggestion to create a new vault in the "1Password Shared Folders" Google Sheet. Do not share passwords on a per person basis by sharing them via 1Password, this makes it hard to reason about the sharing and doesn't change when the responsibilities change.
1. When asked security questions (what is your favorite pet, etc.) do not answer truthfully since that is easy to research. Make up an answer and write both the question and answer in 1Password.
1. Do not share credentials via email, issue comments, chat etc. This includes
   email addresses to login and API keys. Use 1Password vaults for this. You
   will be invited to applicable vaults after joining the company.
1. If you want to see your vaults or ask to be added to a new one please leave
   a comment in the "1Password Shared Folders" Google Doc.
1. If you're missing an appropriate vault [make a suggestion to mark the relevant cell](https://support.google.com/docs/answer/6033474?hl=en) in the
   "1Password Shared Folders" Google Sheet.
1. Refer to the items with NAME_OF_SITE credentials in VAULT_NAME. For example:
   "for access please see the AOL credentials in the Luddite vault".
1. Do not
   store credentials in a vault if everyone has their own user account for the
   service.
1. Do not let your password manager store the **master password**. It is okay to
   store the login.
1. Enable two-factor authentication (2FA) with 1Password [auto-generated TOTP] for your Google, Slack, GitLab.com, and dev.gitlab.org accounts. The nice thing about 1Password is that it migrates when you have a new phone, unlike Google Authenticator.
1. You can also consider using a [Yubikey](https://about.gitlab.com/2016/06/22/gitlab-adds-support-for-u2f/) with GitLab.
1. **Encrypt** your computer's home folder. For Mac users: Use [FileVault] to
   encrypt the entire disk.<a name="encrypt-home-folder"></a>
1. Set up a screen saver with **password lock** on your laptop. The timeout
   can depend on how you use your laptop.
1. Never leave your unlocked computer **unattended**. Activate the screensaver,
   lock the desktop, or close the lid.
1. **Report** suspect situations to an officer of the company.
1. If you have security **suggestions** put them on the [team call agenda].
1. Never **dismiss** a security report as invalid. Keep asking questions until
   the researcher comes to the same conclusion or stops responding.
1. Do not **forward** company emails (@gitlab.com) to a non-company email address.
1. Do not click on links in emails you did not request yourself (requested
   password reset is OK, anything else is suspect).
   **Exception:** During the onboarding process you may receive account
   registration emails for various services GitLab uses. Before clicking these
   links confirm with People Operations that they initialized the process.
   Clicking itself is a problem even when you don't enter a password, because a
   visit can already be used to execute a [0-day attack]. We simulate phishing
   attacks by having an external service send emails to our company email
   addresses to ensure everyone is aware of the threat.
1. The CEO will not send you an [email to wire cash]. Feel free to verify any
   unusual requests with a video call.
1. During offboarding, your 1Password account is deleted. If you want to
   store your personal passwords please store them in your 'Primary' vault
   (local storage) or your separate individual account, not in the GitLab team account.
1. We will configure applications of which we store the passwords in 1Password to [not periodically reset passwords](https://www.cesg.gov.uk/articles/problems-forcing-regular-password-expiry).
1. Do not install software with many known security vulnerabilities (as [listed in the handbook](/handbook/#do-not-use)). When in doubt, do not install until after checking with the team by discussing in an issue, and then document the verdict in the handbook.

[1Password]: https://1password.com
[generate strong passwords]: https://support.1password.com/guides/mac/generate-a-strong-password.html
[auto-generated TOTP]: https://blog.agilebits.com/2015/01/26/totp-for-1password-users/
[Google Authenticator]: https://support.google.com/accounts/answer/1066447?hl=en
[FileVault]: https://support.apple.com/en-us/HT204837
[team call agenda]: https://docs.google.com/document/d/1JiLWsTOm0yprPVIW9W-hM4iUsRxkBt_1bpm3VXV4Muc/edit
[0-day attack]: https://en.wikipedia.org/wiki/Zero-day_(computing)
[email to wire cash]: http://blog.centrify.com/ceo-fraud-business-email-compromise/

## 1Password Guide<a name="1password-guide"></a>

1Password is a password manager. Ideally you memorize one strong password -
hence the name - and let 1Password generate and manage strong, unique passwords
for every site for which you have a login.

### Terminology<a name="1password-terms"></a>

Following this guide, it will be helpful to understand a few terms we'll be
using throughout.

- **App:** A native 1Password application (OSX, iOS, Windows, Android).
- **Extension:** A web browser extension/plugin that communicates with the
  **App** to provide access to your passwords securely without leaving the
  browser.
- **Vault:** What 1Password calls any grouping of secure data, such as logins or
  secure notes. Sometimes called a "keychain".

### 1Password<a name="1password"></a>

1Password can be used in two different ways - as a standalone application
(by purchasing a standalone license) or as a hosted service (by subscribing).
GitLab uses 1Passwords for Teams which is a hosted service. If you want to
use 1Password for your private accounts not related to your work at GitLab you can
choose a standalone license or start an individual subscription.

Please bear in mind that if you decide to purchase a standalone license your data is
stored only in a local folder on your computer. You can optionally sync this
folder to Dropbox or iCloud (if you are using a Mac/iOS) to make it available
on your phone's 1Password app, or on another computer.

Signing up for a subscription seems to be the solution now recommended by the
company behind 1Password.

### 1Password for Teams<a name="1password-for-teams"></a>

1Password for Teams stores all **Vaults** on the 1Password servers and allows
for sharing between multiple people on the same team.

Everyone at GitLab should already be signed up for our [Teams account]. This
gives you access to the web interface, allowing you to view the Vaults we've
configured and given you access to.

In addition to the shared vaults such as **Shared**, **Support**,
**Marketing**, each member of the team has a vault called **Personal** which
*only you can see*, and allows you to store personal credentials within our
team's account.

To really get the full benefit of 1Password, you'll need to hook our Teams
account up to one of the native apps.

### Adding the GitLab Team to a 1Password app<a name="1password-add-team"></a>

This guide will cover setting up the [OSX app]. It's their lead platform and is
the most up-to-date. These instructions may or may not work for the Windows
version.

1. Download and install the 1Password [OSX app].
1. Launch the app.
1. Click "Sign in to your 1Password account" button. If there is no such button
please follow the instructions for [updating 1Password](#1password-update).

Now you'll need the **Emergency Kit** PDF that 1Password told you to save when
you registered your **Teams** account.

If you saved it as a digital PDF file:

1. Open the PDF file
1. Click **Scan QR Code**
1. Drag the scanner window over the QR code on the PDF sheet

If you printed the PDF:

1. Click **Sign In Manually**
1. For **Team URL** enter **gitlab.1password.com**
1. For **Account Key** enter the Account Key from your Emergency Kit
1. For **Email Address** enter your `@gitlab.com` email
1. For **Master Password** enter the password to your **Teams** account (*not*
   the password you created above when you chose "I'm a new user")

After the Team is added, you should see some notifications about vaults being
added to 1Password. By default you'll have **Shared** and **Personal**, and
may have access to others.

### Updating 1Password to support the Teams feature<a name="1password-update"></a>

*Read this section only if you could not follow the instructions in "Adding
the GitLab Team to a 1Password app" section.*

1. At the prompt, choose "I'm a new user". *Note:* This is one source of
   confusion. "I created my Teams account, I'm not new!" Just go with it.
1. Enter a master password, confirmation, and hint. This can (and should) be
   different from the password you used for our **Teams** account. This password
   gates access to your **local, private** Vault on your computer and/or phone.
1. Skip over the remaining dialogs (syncing, newsletter, etc.)
1. You should now have an empty vault called **Primary**.

Because the Teams feature is not available in your current version of 1Password,
we need to update the app to the latest version:

1. Go to **Preferences**
1. Go to **Updates**
1. Click **Check Now**
1. Install the update and relaunch
1. After relaunch, go to **Preferences** again
1. Go to **Teams**
1. Click the **+** icon

### Vaults<a name="1password-vaults"></a>

Click the **Vault Selector** in the upper-left corner of the window:

![Vault Selector](/handbook/security/1password-vault-selector.png)

**Personal** is your *remote, private* vault that *is* synced to the GitLab
1Password for Teams account, and *can not* be viewed by anyone else on the team,
including admins.

**Shared** is a vault that everyone on the GitLab Teams account has access to
both read and write.

### Browser Extension<a name="1password-browser-extensions"></a>

Go to [Browser extensions](https://agilebits.com/onepassword/extensions) and
install the extension for whatever browser you're using. You *should not* need a
beta version here.

With the extension installed, you should be able to go to a site that has
credentials stored in our Team vault and log in:

![Mailchimp Login](/handbook/security/1password-login.gif)

---

If you don't see the site listed in the results window, make sure you're using
the correct vault:

![Vault switching](/handbook/security/1password-vault-change.gif)

### Saving Logins<a name="1password-saving-logins"></a>

When 1Password detects a login form submission, it may ask if you want to save
the login with a dialog like this:

![Save login](/handbook/security/1password-save-login.png)

If you do want to save it, make sure the appropriate **Vault** is selected
first.

### Several accounts and unlocking the app<a name="1password-several-accounts"></a>

Please refer to [1Password FAQ](https://support.1password.com/faq/#i-have-several-accounts-and-vaults-which-password-do-i-use-to-unlock-1password).

This means that if you are planning to use both GitLab team account and a
separate individual account you should first sign in to the individual
account. By doing this you will be able to unlock 1Password app using
Master Password of the individual account.

### Example Usage<a name="1password-example-usage"></a>

This is an example of how <a href="https://gitlab.com/u/rspeicher">Robert</a>,
one of our developers, uses 1Password:

> Once you fully commit to using 1Password to manage all of your security
> information, it really does make life easier.

> I memorize one strong password and let the app generate
> everything else. Every site I use has a unique password that I can't
> compromise because I don't even know it, and a hacked site can't compromise
> it because the password is never re-used on another site.

> I store my shipping and credit card info in 1Password and use the browser
> extension to quickly fill out shipping and billing information on shopping
> sites.

> I store my passport data, along with a digital scan, in 1Password; drivers
> license info and scan; insurance info; software license keys; any important
> information that needs to be secure but still easily accessible when I need it,
> from anywhere. I sync my personal vault to my personal Dropbox so it's
> available on my phone, tablet, laptop, and desktop.

> Even my 1Password for Teams account information is stored in my personal
> **Primary** vault, with the Emergency Kit PDF as a secure attachment:

> ![Teams Login](/handbook/security/1password-teams-login.png)

> I have no idea what the password is. I've never actually typed it. And that's
> the idea.

[1Password for Teams]: https://blog.agilebits.com/2015/11/03/introducing-1password-for-teams/
[Teams account]: https://gitlab.1password.com/
[OSX app]: https://agilebits.com/downloads
