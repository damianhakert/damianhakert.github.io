---
title: "Feature Highlight: LDAP Authentication"
author: Chris Wilson
author_twitter: IsChrisW
image_title: '/images/blogimages/.png'
twitter_image: '/images/tweets/.png'
comments: true
categories: technical overview
description: "Learn how to set up LDAP authentication with GitLab."
---


#### 80 words intro/summary description

Group sync since EE version 6.0

LDAP authentication since 2.2

Atlassian Jira is a leading application for issue tracking, bug tracking and project management. Managing users for Jira can be a manual chore resulting in extra time and effort – and, potentially a security risk. The on premise deployment of Jira natively supports managing users through LDAP. By connecting Jira to LDAP via Directory-as-a-Service, IT admins benefit in a number of ways:

One central place to manage your users – saves time and effort
Your users effectively get single sign-on for their technical applications
Increased security – reduced risk of users having access that shouldn’t
JumpCloud’s Directory-as-a-Service makes it easy to manage Jira users. Through our hosted LDAP solution, users can be populated in our directory and then Jira can authenticate users via a secure LDAP endpoint with minimal configuration necessary on the application side.

User management can be an issue and a burden for the administrator even small-sized business: without a "user registry", the complexity of keeping in sync user accounts throughout the organization grows both with the number of accounts and with the number of environments to be kept in sync (such as workstations, servers, applications, etc.).

To solve this problem, organizations often centralize the administration of user accounts on some sort of "user registries" integrated with all of their environments, from operating systems to applications. Nowadays, LDAP is one of the most commonly used protocol to integrate such registries and it is supported by almost any enterprise-level operating system and many enterprise applications.

Up to version 4.2, Atlassian JIRA could integrate with an LDAP directory just for authentication: this factored out only part of the user management complexity (basically, the management of an user's credentials) but administrators still had to provision JIRA with user accounts (and all of their attributes).

The following article is intended to show how the directory service integration works with the current release of Adobe Connect 9.1 and how it relates to setting up a synchronization. I will follow this article up with another regarding Authentication.  For the most part, this is applicable for any flavor of Adobe Connect 8 or 9.

Adobe Connect lets on-premise (licensed) customers integrate their own company’s LDAP directories with the Adobe Connect database and  synchronize users and groups from their directory into Adobe Connect for easy user account management.  Any LDAP v.3 directory server may integrate with Adobe Connect, however the following are directory servers that have been officially tested by Adobe to work with Connect:

Binding to an existing LDAP directory or Microsoft Active Directory (AD) allows you to reuse the user accounts that you already have in the directory, without having to create new accounts in GitLab. It is therefore one of the most frequently wanted features when deploying GitLab on top of an existing infrastructure., even more so if you have e.g. a Windows environment where access to files is managed with AD accounts, and you want to use those file servers as backend storage.

<!-- more -->


## LDAP Support

GitLab supports:

+ [Active Directory DS](https://technet.microsoft.com/en-us/library/hh831484(v=ws.11).aspx)

+ [OpenLDAP](http://www.openldap.org/)

+ [389 Directory](http://directory.fedoraproject.org/)

+ [OpenDJ](https://forgerock.org/opendj/)

+ [ApacheDS](https://directory.apache.org/)


+ GitLab
+ Windows Server 2012

## The Configuration


