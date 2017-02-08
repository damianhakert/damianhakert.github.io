---
title: "How-to: Integrate GitLab with Active Directory via LDAP"
author: Chris Wilson
author_twitter: IsChrisW
author_gitlab: MrChrisW
image_title: '/images/blogimages/gitlab-ldap/ldap_office.jpg'
twitter_image: '/images/blogimages/gitlab-ldap/ldap_twitter.jpg'
comments: true
categories: technical overview
description: "Integrate GitLab with your Active Directory server via LDAP"
extra_js:
  - https://cdnjs.cloudflare.com/ajax/libs/Readmore.js/2.2.0/readmore.min.js
---

GitLab integrates with your Active Directory or LDAP (Lightweight Directory Access Protocol) servers. Users in your organization can use their existing LDAP credentials to access GitLab.

<!-- more -->

----

### What's in this tutorial?
{: .no_toc}

- TOC
{:toc}

----

## Introduction

Managing a large number of users in GitLab can become a burden for system administrators. As an organisation grows so do user accounts. Keeping these user accounts in sync across multiple enterprise applications becomes a manual and often time consuming task.

In this blog post we will focus on configuring GitLab with Active Directory. [Active Directory](https://en.wikipedia.org/wiki/Active_Directory) is a popular directory service provided by Microsoft, it is included in all modern Windows Server operating systems.

GitLab has supported LDAP integration since version 2.2. With GitLab LDAP [group syncing](#group-syncing-ee) being added to GitLab Enterprise Edition in version 6.0. LDAP integration has become one of the most popular features in GitLab.



## Getting Started

### Choosing an LDAP Server

The main reason organizations choose to utilise a Lightweight Directory Access Protocol (LDAP) server is to keep the entire organizations user base consolidated into a central repository. Users can access multiple applications and systems across the environment using a single login. Because LDAP is an open, vendor-neutral, industry standard application protocol the number of applications using LDAP authentication continues to increase.

There are many commercial and open source directory servers that support the LDAP protocol. Deciding on the right directory server highly depends on the existing environment in which the server will be integrated.

For example; [Active Directory](https://technet.microsoft.com/en-us/library/hh831484(v=ws.11).aspx) is generally favored in a primarily Windows environment as this allows quick integration with a existing services. Other popular directory services include:

+ [Oracle Internet Directory](http://www.oracle.com/technetwork/middleware/id-mgmt/overview/index-082035.html)

+ [OpenLDAP](http://www.openldap.org/)

+ [389 Directory](http://directory.fedoraproject.org/)

+ [OpenDJ](https://forgerock.org/opendj/)

+ [ApacheDS](https://directory.apache.org/)


GitLab uses the [Net::LDAP](https://rubygems.org/gems/net-ldap) library under the hood. This means it supports all [IETF](https://tools.ietf.org/html/rfc2251) compliant LDAPv3 servers.
{: .alert .alert-info }

### Getting Started with Active Directory (AD)

We won't cover the installation and configuration of Windows Server or Active Directory Domain Services in this tutorial. There are a number of resources online to guide you through this process:

<i class="fa fa-windows" aria-hidden="true"></i> Install Windows Server 2012  - (_technet.microsoft.com_) - [Installing Windows Server 2012 ](https://technet.microsoft.com/en-us/library/jj134246(v=ws.11).aspx)

<i class="fa fa-server" aria-hidden="true"></i> Install Active Directory Domain Services (AD DS) (_technet.microsoft.com_)- [Install Active Directory Domain Services](https://technet.microsoft.com/windows-server-docs/identity/ad-ds/deploy/install-active-directory-domain-services--level-100-#BKMK_PS)

**Shortcut:** You can quickly install AD DS via PowerShell using
`Install-WindowsFeature AD-Domain-Services -IncludeManagementTools`
{: .alert .alert-info }

#### Security Improvements (LDAPS)

Security is an important aspect when deploying an LDAP server. By default, LDAP traffic is transmitted unsecured. LDAP can be secured using SSL/TLS called LDAPS, or commonly "LDAP over SSL".

Securing LDAP (enabling LDAPS) on Windows Server 2012 involves installing a valid SSL certificate. For full details see Microsoft's guide [How to enable LDAP over SSL with a third-party certification authority](https://support.microsoft.com/en-us/help/321051/how-to-enable-ldap-over-ssl-with-a-third-party-certification-authority)

By default a LDAP service listens for connections on TCP and UDP port 389. LDAPS (LDAP over SSL) listens on port 636
{: .alert .alert-info }

#### Creating an AD OU structure

Configuring organizational units (OUs) is an important part of setting up Active Directory. OUs form the base for an entire organizational structure. Using GitLab as an example we have designed the OU structure below using the geographic OU model. In the Geographic Model we separate OUs for different geographic regions.

{: .text-center}

GitLab OU Design            |  GitLab AD Structure
:-------------------------:|:-------------------------:
![](/images/blogimages/gitlab-ldap/gitlab_ou.svg)  |  ![](/images/blogimages/gitlab-ldap/ldap_ou.gif)


Using PowerShell you can output the OU structure as a table (_all names are examples only_):

```ps
Get-ADObject -LDAPFilter "(objectClass=*)" -SearchBase 'OU=GitLab INT,DC=GitLab,DC=org' -Properties CanonicalName | Format-Table Name,CanonicalName -A
```

<pre id="ou_layout_ps" class="highlight plaintext">
OU                CanonicalName
----              -------------
GitLab INT        GitLab.org/GitLab INT
United States     GitLab.org/GitLab INT/United States
Developers        GitLab.org/GitLab INT/United States/Developers
Gary Johnson      GitLab.org/GitLab INT/United States/Developers/Gary Johnson
Ellis Matthews    GitLab.org/GitLab INT/United States/Developers/Ellis Matthews
William Collins   GitLab.org/GitLab INT/United States/Developers/William Collins
People Ops        GitLab.org/GitLab INT/United States/People Ops
Margaret Baker    GitLab.org/GitLab INT/United States/People Ops/Margaret Baker
Libby Hartzler    GitLab.org/GitLab INT/United States/People Ops/Libby Hartzler
Victoria Ryles    GitLab.org/GitLab INT/United States/People Ops/Victoria Ryles
The Netherlands   GitLab.org/GitLab INT/The Netherlands
Developers        GitLab.org/GitLab INT/The Netherlands/Developers
John Doe          GitLab.org/GitLab INT/The Netherlands/Developers/John Doe
Jon Mealy         GitLab.org/GitLab INT/The Netherlands/Developers/Jon Mealy
Jane Weingarten   GitLab.org/GitLab INT/The Netherlands/Developers/Jane Weingarten
Production        GitLab.org/GitLab INT/The Netherlands/Production
Sarah Konopka     GitLab.org/GitLab INT/The Netherlands/Production/Sarah Konopka
Cynthia Bruno     GitLab.org/GitLab INT/The Netherlands/Production/Cynthia Bruno
David George      GitLab.org/GitLab INT/The Netherlands/Production/David George
United Kingdom    GitLab.org/GitLab INT/United Kingdom
Developers        GitLab.org/GitLab INT/United Kingdom/Developers
Leroy Fox         GitLab.org/GitLab INT/United Kingdom/Developers/Leroy Fox
Christopher Alley GitLab.org/GitLab INT/United Kingdom/Developers/Christopher Alley
Norris Morita     GitLab.org/GitLab INT/United Kingdom/Developers/Norris Morita
Support           GitLab.org/GitLab INT/United Kingdom/Support
Laura Stanley     GitLab.org/GitLab INT/United Kingdom/Support/Laura Stanley
Nikki Schuman     GitLab.org/GitLab INT/United Kingdom/Support/Nikki Schuman
Harriet Butcher   GitLab.org/GitLab INT/United Kingdom/Support/Harriet Butcher
Global Groups     GitLab.org/GitLab INT/Global Groups
DevelopersNL      GitLab.org/GitLab INT/Global Groups/DevelopersNL
DevelopersUK      GitLab.org/GitLab INT/Global Groups/DevelopersUK
DevelopersUS      GitLab.org/GitLab INT/Global Groups/DevelopersUS
ProductionNL      GitLab.org/GitLab INT/Global Groups/ProductionNL
SupportUK         GitLab.org/GitLab INT/Global Groups/SupportUK
People Ops US     GitLab.org/GitLab INT/Global Groups/People Ops US
Global Admins     GitLab.org/GitLab INT/Global Groups/Global Admins
</pre>

See [more information](https://technet.microsoft.com/en-us/library/ff730967.aspx) on searching Active Directory with Windows PowerShell from [The Scripting Guys](https://technet.microsoft.com/en-us/scriptcenter/dd901334.aspx)
{: .alert .alert-info }

### GitLab LDAP Configuration

The initial configuration of LDAP in GitLab requires changes to the `gitlab.rb` configuration file. Below is an example of a fully configured LDAP server using Active Directory. The two Active Directory specific values are `active_directory: true` and `uid: 'sAMAccountName'`. The `sAMAccountName` is an attribute returned by Active Directory. See the example output from `ldapsearch` for a full list of attributes a "person" object has in AD - [ldapsearch example](#testing-ldap-with-)

You can find more information on configuring LDAP in our documentation:

+ <https://docs.gitlab.com/ee/administration/auth/ldap.html>
+ <https://docs.gitlab.com/ee/administration/auth/ldap-ee.html>

#### Example `gitlab.rb` LDAP

```yml
gitlab_rails['ldap_enabled'] = true
gitlab_rails['ldap_servers'] = YAML.load <<-'EOS'
   main:
     label: 'GitLab AD'
     host: 'ad.example.org'
     port: 636
     uid: 'sAMAccountName'
     method: 'ssl'
     bind_dn: 'CN=GitLabSRV,CN=Users,DC=GitLab,DC=org'
     password: 'Password1'
     active_directory: true
     allow_username_or_email_login: true
     base: 'OU=GitLab INT,DC=GitLab,DC=org'
     group_base: 'OU=Global Groups,OU=GitLab INT,DC=GitLab,DC=org'
     admin_group: 'Global Admins'
EOS
```

Remember to run a `gitlab-ctl reconfigure` after modifying the `gitlab.rb` file
{: .alert .alert-warning }

#### Testing LDAP with `ldapsearch`

You can use the `ldapsearch` utility (on Unix based systems) to test that your LDAP server is accessible and authentication is working correctly. This utility is included in the [`ldap-utils`](https://wiki.debian.org/LDAP/LDAPUtils) package.

**Return all objects** - `objectclass=*`

```sh
ldapsearch -D "CN=GitLabSRV,CN=Users,DC=GitLab,DC=org" \
-w Password1 -p 389 -h ad.example.org \
-b "OU=GitLab INT,DC=GitLab,DC=org" \
-s sub "(objectclass=*)"
```

**Return single object using filter** - `CN=Leroy Fox`

```sh
ldapsearch -D "CN=GitLabSRV,CN=Users,DC=GitLab,DC=org" -w Password1 -p 389 -h ad.example.org -b "OU=GitLab INT,DC=GitLab,DC=org" -s sub "CN=Leroy Fox"
```

**Full output of `ldapsearch` command:** - _CN=Leroy Fox_

<pre id="leroy_output" class="highlight plaintext">
# LDAPv3
# base <OU=GitLab INT,DC=GitLab,DC=org> with scope subtree
# filter: CN=Leroy Fox
# requesting: ALL
#

# Leroy Fox, Developers, United Kingdom, GitLab INT, GitLab.org
dn: CN=Leroy Fox,OU=Developers,OU=United Kingdom,OU=GitLab INT,DC=GitLab,DC=or
 g
objectClass: top
objectClass: person
objectClass: organizationalPerson
objectClass: user
cn: Leroy Fox
sn: Fox
givenName: Leroy
distinguishedName: CN=Leroy Fox,OU=Developers,OU=United Kingdom,OU=GitLab INT,
 DC=GitLab,DC=org
instanceType: 4
whenCreated: 20170210030500.0Z
whenChanged: 20170213050128.0Z
displayName: Leroy Fox
uSNCreated: 16790
memberOf: CN=DevelopersUK,OU=Global Groups,OU=GitLab INT,DC=GitLab,DC=org
uSNChanged: 20812
name: Leroy Fox
objectGUID:: rBCAo6NR6E6vfSKgzcUILg==
userAccountControl: 512
badPwdCount: 0
codePage: 0
countryCode: 0
badPasswordTime: 0
lastLogoff: 0
lastLogon: 0
pwdLastSet: 131311695009850084
primaryGroupID: 513
objectSid:: AQUAAAAAAAUVAAAA9GMAb7tdJZvsATf7ZwQAAA==
accountExpires: 9223372036854775807
logonCount: 0
sAMAccountName: Leroyf
sAMAccountType: 805306368
userPrincipalName: Leroyf@GitLab.org
objectCategory: CN=Person,CN=Schema,CN=Configuration,DC=GitLab,DC=org
dSCorePropagationData: 16010101000000.0Z
lastLogonTimestamp: 131314356887754250

# search result
search: 2
result: 0 Success

# numResponses: 2
# numEntries: 1
</pre>

### Basic User Authentication

After enabling and configuring LDAP, basic authentication will be available. Users can then login using their directory credentials. An extra tab is added to the GitLab login screen for the configured LDAP server (e.g "**GitLab AD**").

{: .text-center}
![GitLab OU Structure](/images/blogimages/gitlab-ldap/user_auth.gif)

Users that are removed from the LDAP base group (e.g `OU=GitLab INT,DC=GitLab,DC=org`) will be **Blocked** in GitLab. [More information](https://docs.gitlab.com/ee/administration/auth/ldap.html#security) on LDAP security.

If `allow_username_or_email_login` is enabled in the LDAP configuration, GitLab will ignore everything after the first '@' in the LDAP username submitted by the user on login. Disable this setting if you use `userPrincipalName` as the `uid`
{: .alert .alert-info }

### Administrator Sync (EE)

GitLab administrators can be configured using the `admin_group` setting, this attribute takes the name of a group found in the `group_base` (e.g `OU=Global Groups,OU=GitLab INT,DC=GitLab,DC=org`). In the [example above](#example--ldap) we're using the group `Global Admins`.

{: .text-center}
![GitLab OU Structure](/images/blogimages/gitlab-ldap/admin_group.png)

All members of the group `Global Admins` will be given **administrator** access to GitLab, allowing them to view the `/admin` dashboard.

### Group Syncing (EE)

Group syncing is configured using the `group_base` DN (`'OU=Global Groups,OU=GitLab INT,DC=GitLab,DC=org'`). This OU contains all groups that will be associated with [GitLab groups](https://docs.gitlab.com/ce/workflow/groups.html).

In the example below we have the "UKGov" GitLab group. As this group deals with confidential information it is important users of this groups are given the correct [permissions](http://docs.gitlab.com/ce/user/permissions.html) to projects. Granular group permissions can be applied based on the AD group.

**UK Developers** are given the **"developer"** permission.

*The developer permission allows the development staff to effectively manage all project code, issues & merge requests.*

**UK Support** staff are given the **"reporter"** permission.

*The reporter permission allows support staff to manage issues, labels and review project code.*

**US People Ops** staff are given the **"guest"** permission.

*The guest permission allows people ops staff to review and lodge new issues while allowing no access to project code.*

See the [permission list](http://docs.gitlab.com/ce/user/permissions.html).

Using this permission structure allows only UK staff access to potentially sensitive information stored in the projects code, while still allowing other teams to work effectively.

#### Creating Group Links - Example

<video style="display:block; margin: 0 auto;" controls autoplay loop muted poster="/images/blogimages/gitlab-ldap/linking.png">
   <source src="/images/blogimages/gitlab-ldap/group_linking.mp4" type="video/mp4">
   <source src="/images/blogimages/gitlab-ldap/group_linking.webm" type="video/webm">
   <source src="/images/blogimages/gitlab-ldap/group_linking.ogv" type="video/ogg">
   Sorry your browser does not support the HTML5 video tag.
</video>

#### Group Permissions

{: .text-center}
![GitLab OU Structure](/images/blogimages/gitlab-ldap/group_link_final.png)

[More information](https://docs.gitlab.com/ee/administration/auth/ldap-ee.html#group-sync) on group syncing.

### Updating User Permissions - New Feature

Since GitLab [v8.15](https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/822) LDAP user permissions can now be manually overridden by an admin user. To override a user's permissions visit the groups **Members** page and select **Edit permissions**.

<video style="display:block; margin: 0 auto;" controls autoplay loop muted poster="/images/blogimages/gitlab-ldap/manual_permissions.png">
   <source src="/images/blogimages/gitlab-ldap/manual_permissions.mp4" type="video/mp4">
   <source src="/images/blogimages/gitlab-ldap/manual_permissions.webm" type="video/webm">
   <source src="/images/blogimages/gitlab-ldap/manual_permissions.ogv" type="video/ogg">
   Sorry your browser does not support the HTML5 video tag.
</video>

## Conclusion

Integration of GitLab with Active Directory (LDAP) reduces the complexity of user management.
It has the advantage of improving user permission controls, whilst easing the deployment of GitLab into an existing environment.

With the assistance of the [GitLab Support](https://about.gitlab.com/support) team, setting up GitLab with an existing AD/LDAP solution will be a smooth and painless process.

____

_Image: "[Office](https://commons.wikimedia.org/wiki/File:New_office.jpg)" by [Phil Whitehouse](https://www.flickr.com/people/19451080@N00) is licensed under [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)_

<script type="text/javascript">
// Custom JS to load readmore when JQuery is loaded
 (function defer() {
      if (window.jQuery) {
            $('#ou_layout_ps').readmore({
              moreLink: '<a href="#">Expand output</a>',
              lessLink: '<a href="#">Close output</a>'
              });
            $('#leroy_output').readmore({
              collapsedHeight: 85,
              moreLink: '<a href="#">Expand output</a>',
              lessLink: '<a href="#">Close output</a>'
            });
      } else {
           setTimeout(function() { defer() }, 50);
      }
 })();
</script>