---
title: "Security Webcast with Yubico"
author: Amara Nwaigwe
author_twitter: its_amaracle 
categories: 
image_title: '/images/blogimages/fido-u2f-yubikey.jpg'
description: GitLab and Yubico discuss security best practices for Git users.
---

Git is distributed, meaning that people can maintain a copy of the source code. While Git’s distributed nature is what makes it so
popular amongst developers, it is also what makes it a security concern to enterprises. The concern is that your source code is only
as secure as the machine it’s been copied. Each of these devices could be a point of exposure to risk. We understand how important it 
is to maintain the integrity of your source code. With the release of GitLab 8.9 we announced that we partnered with Yubico to help 
customers strengthen their authentication process with YubiKeys. YubiKeys are a single key providing universal 2nd factor 
authentication into an unlimited number of applications. After our announce, we asked Yubcco to join us on a webcast. In this 
webcast, we talk about common security threats and how you can use GitLab and Yubico to avoid information breach of your private data 
and to provide a secure Git repo that you can trust as a single source of truth.

<!-- more -->

## In this webcast

- Top security threats
-  Inside look at how YubiKeys work
- Demo of setting up and using a YubiKey with GitLab
- Demo GitLab’s additional security capabilities beyond authentication
- industry best practices for securing your Git repository

## The recording and slides 

<iframe width="853" height="480" src="https://www.youtube.com/embed/pO9-7R3N5Ok" frameborder="0" allowfullscreen></iframe>

<iframe src="https://docs.google.com/presentation/d/175zQz9CcQf3fQ65rbYFH_ysgllEkXrtnjYpAH_CDcrc/embed?start=false&loop=false&delayms=5000" frameborder="0" width="1280" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Key Takeaways

If you don’t have time to watch the full video, here are the highlights.

**Definition of a YubiKey**

A YubiKey is a small hardware device that offers two-factor authentication with a simple touch of a button.

**Reasons YubiKeys are preferred over 2FA via SMS**

From a security standpoint, push notifications and SMS codes (a form of One Time Passwords) are all vulnerable to phishing attacks, 
and replay attacks. Getting a bit technical here, if you are using the U2F protocol with the YubiKey, a properly implemented U2F 
registration flow contains Origin (phishing protection!) information as well as TLS Channel Identification information (Man in the 
Middle attack protection). Finally, the challenge-response piece of the U2F protocol provides complete replay attack protection.

**GitLab + YubiKey** 

Our goal is to secure our customer’s work with proven, seamless solutions. The YubiKey provides one-touch authentication, reducing 
the number of steps users have to take to access their accounts. Remembering and entering passwords or pins can be a cumbersome 
process. Hopefully, YubiKeys can reduce some of that friction and encourage more teams to secure their GitLab instance.

**GitLab's additional security capabilities beyond authentication**

- Access and permissions: Control who has access to your repositories
- Workflow management: Control what changes are being made to your repositories
- Audit Trail: Keep a record of what happened within you GitLab instance

**Nine security best practices**

Of course there are many more than just nine. These were the ones that stuck out to us but for more resources take a look at 
[InfoSec’s article on security best practices for Git users](http://resources.infosecinstitute.com/security-best-practices-for-git-users/) and you can also check out the [security section](https://about.gitlab.com/handbook/security/) of our employee handbook.

1. Assign strong passwords and store in an encrypted value (e.g. 1Password).
2. Never reuse your passwords across accounts.
3. Ensure proper user identity by restricting the use of shared or system accounts.
4. Enforce two-factor authentication.
5. Maintain a single secure repository.
6. Assign and review the proper access and permissions levels to projects.
7. Only use https or SSH to access git repositories, git repository management software, CI systems and ticketing / bug tracking systems.
8. Enforce integrity checks on all incoming objects by setting transfer.fsckObjects, fetch.fsckObjects and receive.fscObjects to true.
9. Enforce usage of .gitignore files by providing a proper .gitignore file content to all current and future projects.

As always, if you have any questions feel free to comment on this post or [tweet at us](twitter.com/gitlab?lang=en). 