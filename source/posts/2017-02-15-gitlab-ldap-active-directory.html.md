---
title: "How to Integrate GitLab with Active Directory via LDAP"
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
extra_css:
  - https://cdnjs.cloudflare.com/ajax/libs/hint.css/2.4.1/hint.min.css
---

GitLab integrates with your Active Directory or [LDAP](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol) (Lightweight Directory Access Protocol) servers. Users in your organization can use their existing LDAP credentials to access GitLab.

<!-- more -->

----

## What's in this tutorial?
{: .no_toc}

- TOC
{:toc}

----

## Introduction

Managing a large number of users in GitLab can become a burden for system administrators. As an organization grows so do user accounts. Keeping these user accounts in sync across multiple enterprise applications often becomes a time consuming task.

In this guide we will focus on configuring GitLab with Active Directory. [Active Directory](https://en.wikipedia.org/wiki/Active_Directory) is a popular LDAP compatible directory service provided by Microsoft, included in all modern Windows Server operating systems.

GitLab has supported LDAP integration since [version 2.2](https://about.gitlab.com/2012/02/22/gitlab-version-2-2/). With GitLab LDAP [group syncing](#group-syncing-ee) being added to GitLab Enterprise Edition in [version 6.0](https://about.gitlab.com/2013/08/20/gitlab-6-dot-0-released/). LDAP integration has become one of the most popular features in GitLab.

## Getting Started

### Choosing an LDAP Server

The main reason organizations choose to utilize a LDAP server is to keep the entire organization's user base consolidated into a central repository. Users can access multiple applications and systems across the  IT environment using a single login. Because LDAP is an open, vendor-neutral, industry standard application protocol, the number of applications using LDAP authentication continues to increase.

There are many commercial and open source [directory servers](https://en.wikipedia.org/wiki/Directory_service#LDAP_implementations) that support the LDAP protocol. Deciding on the right directory server highly depends on the existing IT environment in which the server will be integrated with.

For example, [Active Directory](https://technet.microsoft.com/en-us/library/hh831484(v=ws.11).aspx) is generally favored in a primarily Windows environment, as this allows quick integration with existing services. Other popular directory services include:

- [Oracle Internet Directory](http://www.oracle.com/technetwork/middleware/id-mgmt/overview/index-082035.html)
- [OpenLDAP](http://www.openldap.org/)
- [389 Directory](http://directory.fedoraproject.org/)
- [OpenDJ](https://forgerock.org/opendj/)
- [ApacheDS](https://directory.apache.org/)

GitLab uses the [Net::LDAP](https://rubygems.org/gems/net-ldap) library under the hood. This means it supports all [IETF](https://tools.ietf.org/html/rfc2251) compliant LDAPv3 servers.
{: .alert .alert-info }

<<<<<<< Updated upstream
### Step 1: Getting Started with Active Directory (AD)
=======
### Getting Started with Active Directory (AD)
>>>>>>> Stashed changes

We won't cover the installation and configuration of Windows Server or Active Directory Domain Services in this tutorial. There are a number of resources online to guide you through this process:

- <i class="fa fa-windows fa-fw" aria-hidden="true"></i> Install Windows Server 2012  - (_technet.microsoft.com_) - [Installing Windows Server 2012 ](https://technet.microsoft.com/en-us/library/jj134246(v=ws.11).aspx)

- <i class="fa fa-server fa-fw" aria-hidden="true"></i> Install Active Directory Domain Services (AD DS) (_technet.microsoft.com_)- [Install Active Directory Domain Services](https://technet.microsoft.com/windows-server-docs/identity/ad-ds/deploy/install-active-directory-domain-services--level-100-#BKMK_PS)

**Shortcut:** You can quickly install AD DS via PowerShell using
`Install-WindowsFeature AD-Domain-Services -IncludeManagementTools`
{: .alert .alert-info }

#### Creating an AD **OU** structure

Configuring organizational units (**OU**s) is an important part of setting up Active Directory. **OU**s form the base for an entire organizational structure. Using GitLab as an example we have designed the **OU** structure below using the geographic **OU** model. In the Geographic Model we separate **OU**s for different geographic regions.

GitLab **OU** Design            |  GitLab AD Structure
:-------------------------:|:-------------------------:
![GitLab OU Design][gitlab_ou]  |  ![GitLab AD Structure][ldap_ou]

Using PowerShell you can output the **OU** structure as a table (_all names are examples only_):

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

The initial configuration of LDAP in GitLab requires changes to the `gitlab.rb` configuration file. Below is an example of a complete configuration using an Active Directory.

The two Active Directory specific values are `active_directory: true` and `uid: 'sAMAccountName'`. `sAMAccountName` is an attribute returned by Active Directory used for GitLab usernames. See the example output from `ldapsearch` for a full list of attributes a "person" object (user) has in **AD** - [ldapsearch example](#using-ldapsearch-unix)

Both group_base and admin_group configuration options are only available in GitLab Enterprise Edition. See [GitLab EE - LDAP Features](#gitlab-enterprise-edition---ldap-features)

**Hover ![Hover mouse](/images/blogimages/gitlab-ldap/hover.png) over the configuration for more details**

#### Example `gitlab.rb` LDAP

<pre class="highlight ruby"><code><span class="n">gitlab_rails</span><span class="p">[</span><span class="s1">'ldap_enabled'</span><span class="p">]</span> <span class="o">=</span> <span class="kp">true</span>
<span class="n">gitlab_rails</span><span class="p">[</span><span class="s1">'ldap_servers'</span><span class="p">]</span> <span class="o">=</span> <span class="p">{</span>
<span class="hint--bottom hint--rounded hint--no-animate hint--large" style="position: absolute" aria-label="'main' - is the GitLab 'provider ID' of this LDAP server"><span class="s1">'main'</span> <span class="o">=&gt;</span> <span class="p">{</span></span>
 <span class="hint--bottom hint--rounded hint--no-animate hint--large" style="position: absolute" aria-label="'label' - A human-friendly name for your LDAP server. Shown on the GitLab login page."> <span class="s1">'label'</span> <span class="o">=&gt;</span> <span class="s1">'GitLab AD'</span><span class="p">,</span></span>
  <span class="hint--bottom hint--rounded hint--no-animate hint--large" style="position: absolute" aria-label="'host' - The hostname/FQDN used to connect to the LDAP server."><span class="s1">'host'</span> <span class="o">=&gt;</span>  <span class="s1">'ad.example.org'</span><span class="p">,</span></span>
  <span class="hint--bottom hint--rounded hint--no-animate hint--large" style="position: absolute" aria-label="'port' - The port number used to connect to the LDAP server. 389 (LDAP) | 636 (LDAPS)"><span class="s1">'port'</span> <span class="o">=&gt;</span> <span class="s1">636</span><span class="p">,</span></span>
  <span class="hint--bottom hint--rounded hint--no-animate hint--large" style="position: absolute" aria-label="'uid' - The LDAP attribute used for the users 'username' in GitLab."><span class="s1">'uid'</span> <span class="o">=&gt;</span> <span class="s1">'sAMAccountName'</span><span class="p">,</span></span>
  <span class="hint--bottom hint--rounded hint--no-animate hint--large" style="position: absolute" aria-label="'method' - The connection method used when communicating with the LDAP server. Values: 'plain', 'tls' or 'ssl'"><span class="s1">'method'</span> <span class="o">=&gt;</span> <span class="s1">'ssl'</span><span class="p">,</span></span>
  <span class="hint--bottom hint--rounded hint--no-animate hint--large" style="position: absolute" aria-label="'bind_dn' - The full DN of a user used to authenticate with the LDAP server."><span class="s1">'bind_dn'</span> <span class="o">=&gt;</span> <span class="s1">'CN=GitLabSRV,CN=Users,DC=GitLab,DC=org'</span><span class="p">,</span></span>
  <span class="hint--bottom hint--rounded hint--no-animate hint--large" style="position: absolute" aria-label="'password' - The bind_dn users password. Used to authenticate with the LDAP server."><span class="s1">'password'</span> <span class="o">=&gt;</span> <span class="s1">'Password1'</span><span class="p">,</span></span>
  <span class="hint--bottom hint--rounded hint--no-animate hint--large" style="position: absolute" aria-label="'active_directory' - Optional value, used to support an Active Directory server."><span class="s1">'active_directory'</span> <span class="o">=&gt;</span> <span class="kp">true</span><span class="p">,</span></span>
  <span class="hint--bottom hint--rounded hint--no-animate hint--large" style="position: absolute" aria-label="'base' - DN base where GitLab can search for users on the LDAP server."><span class="s1">'base'</span> <span class="o">=&gt;</span> <span class="s1">'OU=GitLab INT,DC=GitLab,DC=org'</span><span class="p">,</span></span>
  <span class="hint--bottom hint--rounded hint--no-animate hint--large" style="position: absolute" aria-label="'group_base' - DN base where GitLab can search for groups on the LDAP server."><span class="s1">'group_base'</span> <span class="o">=&gt;</span> <span class="s1">'OU=Global Groups,OU=GitLab INT,DC=GitLab,DC=org'</span><span class="p">,</span></span>
  <span class="hint--bottom hint--rounded hint--no-animate hint--large" style="position: absolute" aria-label="'admin_group' - The CN of a group containing GitLab administrators. Only use a CN."><span class="s1">'admin_group'</span> <span class="o">=&gt;</span> <span class="s1">'Global Admins'</span></span>
  <span class="p">}</span>
<span class="p">}</span>
</code></pre>

> **Note:** Remember to run  `gitlab-ctl reconfigure` after modifying `gitlab.rb`

### Security Improvements (LDAPS)

Security is an important aspect when deploying an LDAP server. By default, LDAP traffic is transmitted unsecured. LDAP can be secured using SSL/TLS called LDAPS, or commonly "LDAP over SSL".

Securing LDAP (enabling LDAPS) on Windows Server 2012 involves installing a valid SSL certificate. For full details see Microsoft's guide [How to enable LDAP over SSL with a third-party certification authority](https://support.microsoft.com/en-us/help/321051/how-to-enable-ldap-over-ssl-with-a-third-party-certification-authority)

>By default a LDAP service listens for connections on TCP and UDP port 389. LDAPS (LDAP over SSL) listens on port 636

### Testing you AD Server

#### Using **AdFind** (Windows)

You can use the [`AdFind`](https://social.technet.microsoft.com/wiki/contents/articles/7535.adfind-command-examples.aspx) utility (on Windows based systems) to test that your LDAP server is accessible and authentication is working correctly. This is a freeware utility built by [Joe Richards](http://www.joeware.net/freetools/tools/adfind/index.htm).

**Return all objects**

You can use the filter `objectclass=*` to return all directory objects.

```sh
adfind -h ad.example.org:636 -ssl -u "CN=GitLabSRV,CN=Users,DC=GitLab,DC=org" -up Password1 -b "OU=GitLab INT,DC=GitLab,DC=org" -f (objectClass=*)
```

**Return single object using filter**

You can also retrieve a single object by **specifying** the object name or full **DN**. In this example we specify the object name only `CN=Leroy Fox`.

```sh
adfind -h ad.example.org:636 -ssl -u "CN=GitLabSRV,CN=Users,DC=GitLab,DC=org" -up Password1 -b "OU=GitLab INT,DC=GitLab,DC=org" -f (&(objectcategory=person)(CN=Leroy Fox))”
```

#### Using **ldapsearch** (Unix)

You can use the `ldapsearch` utility (on Unix based systems) to test that your LDAP server is accessible and authentication is working correctly. This utility is included in the [`ldap-utils`](https://wiki.debian.org/LDAP/LDAPUtils) package.

**Return all objects**

You can use the filter `objectclass=*` to return all directory objects.

```sh
ldapsearch -D "CN=GitLabSRV,CN=Users,DC=GitLab,DC=org" \
-w Password1 -p 636 -h ad.example.org \
-b "OU=GitLab INT,DC=GitLab,DC=org" -Z \
-s sub "(objectclass=*)"
```

**Return single object using filter**

You can also retrieve a single object by **specifying** the object name or full **DN**. In this example we specify the object name only `CN=Leroy Fox`.

```sh
ldapsearch -D "CN=GitLabSRV,CN=Users,DC=GitLab,DC=org" -w Password1 -p 389 -h ad.example.org -b "OU=GitLab INT,DC=GitLab,DC=org" -Z -s sub "CN=Leroy Fox"
```

**Full output of `ldapsearch` command:** - Filtering for _CN=Leroy Fox_

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

After configuring LDAP, basic authentication will be available. Users can then login using their directory credentials. An extra tab is added to the GitLab login screen for the configured LDAP server (e.g "**GitLab AD**").

{: .text-center}
![GitLab OU Structure](/images/blogimages/gitlab-ldap/user_auth.gif)

Users that are removed from the LDAP base group (e.g `OU=GitLab INT,DC=GitLab,DC=org`) will be **blocked** in GitLab. [More information](https://docs.gitlab.com/ee/administration/auth/ldap.html#security) on LDAP security.

If `allow_username_or_email_login` is enabled in the LDAP configuration, GitLab will ignore everything after the first '@' in the LDAP username used on login. Example: The username `jon.doe@example.com` is converted to `jon.doe` when authenticating with the LDAP server. Disable this setting if you use `userPrincipalName` as the `uid`
{: .alert .alert-info }

### GitLab Enterprise Edition - LDAP Features

GitLab Enterprise Edition (EE) has a number of advantages when it comes to integrating with Active Directory (LDAP):

- [Administrator Sync](#administrator-sync): As an extension of group sync, you can automatically manage your global GitLab administrators. Specify a group CN for `admin_group` and all members of the LDAP group will be given administrator privileges.
- [Group Sync](#group-sync): This allows GitLab group membership to be automatically updated based on LDAP group members.
- [Multiple LDAP servers](#multiple-ldap-servers): The ability to configure multiple LDAP servers. This is useful if an organization has different LDAP servers within departments. This is not designed for failover. We're working on supporting this in GitLab 9.0. See [gitlab-ee#139](https://gitlab.com/gitlab-org/gitlab-ee/issues/139)
- Daily user synchronization: Once ~~per~~ {+a+} day, GitLab will run a synchronization to check and update GitLab users against LDAP. This process updates all user details automatically.

On the following section, you'll find a description for each of these features. Read through [LDAP GitLab EE docs](https://docs.gitlab.com/ee/administration/auth/ldap-ee.html) for complementary information.

{: .text-center}
![GitLab OU Structure](/images/blogimages/gitlab-ldap/admin_group.png)

All members of the group `Global Admins` will be given **administrator** access to GitLab, allowing them to view the `/admin` dashboard.

#### Group Sync

Group syncing allows AD (LDAP) groups to be mapped to GitLab groups. This provides more control over per-group user management. To configure group syncing edit the `group_base` **DN** (`'OU=Global Groups,OU=GitLab INT,DC=GitLab,DC=org'`). This **OU** contains all groups that will be associated with [GitLab groups](https://docs.gitlab.com/ce/workflow/groups.html).

As an example, let's suppose we have a "UKGov" GitLab group, which deals with confidential government information. Therefore, it is important that users of this group are given the correct permissions to projects contained within the group. Granular group permissions can be applied based on the AD group.

**UK Developers** of our "UKGov" group are given **"developer"** permissions.

*The developer permission allows the development staff to effectively manage all project code, issues, and merge requests.*

**UK Support** staff of our "UKGov" group are given **"reporter"** permissions.

*The reporter permission allows support staff to manage issues, labels, and review project code.*

**US People Ops** of our "UKGov" group are given **"guest"** permissions.

*The guest permission allows people ops staff to review and lodge new issues while allowing no read or write access to project code or *[confidential issues](https://docs.gitlab.com/ee/user/project/issues/confidential_issues.html#permissions-and-access-to-confidential-issues) created by other users.

See the [permission list](http://docs.gitlab.com/ce/user/permissions.html) for complementary info.

Using this permission structure in our example allows only UK staff access to sensitive information stored in the projects code, while still allowing other teams to work effectively. As all permissions are controlled via AD groups new users can be quickly added to existing groups. New users will then automatically inherit the required permissions.

#### Creating Group Links - Example

<figure class="video_container">
<video style="display:block; margin: 0 auto;" controls autoplay loop muted poster="/images/blogimages/gitlab-ldap/linking.png">
   <source src="/images/blogimages/gitlab-ldap/group_linking.mp4" type="video/mp4">
   <source src="/images/blogimages/gitlab-ldap/group_linking.webm" type="video/webm">
   <source src="/images/blogimages/gitlab-ldap/group_linking.ogv" type="video/ogg">
   Sorry your browser does not support the HTML5 video tag.
</video>
</figure>

#### Group Permissions

{: .text-center}
![GitLab OU Structure](/images/blogimages/gitlab-ldap/group_link_final.png)

[More information](https://docs.gitlab.com/ee/administration/auth/ldap-ee.html#group-sync) on group syncing.

### Updating User Permissions - New Feature

Since GitLab [v8.15](https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/822) LDAP user permissions can now be manually overridden by an admin user. To override a user's permissions visit the groups **Members** page and select **Edit permissions**.

<figure class="video_container">
<video style="display:block; margin: 0 auto;" controls autoplay loop muted poster="/images/blogimages/gitlab-ldap/manual_permissions.png">
   <source src="/images/blogimages/gitlab-ldap/manual_permissions.mp4" type="video/mp4">
   <source src="/images/blogimages/gitlab-ldap/manual_permissions.webm" type="video/webm">
   <source src="/images/blogimages/gitlab-ldap/manual_permissions.ogv" type="video/ogg">
   Sorry your browser does not support the HTML5 video tag.
</video>
</figure>

#### Multiple LDAP servers

GitLab EE can support multiple LDAP servers. Simply configure another server in the `gitlab.rb` file within the `ldap_servers` block. In the example below we configure a new secondary server with the label **GitLab Secondary AD**. This is shown on the GitLab login screen. Large enterprises often utilize multiple LDAP servers for segregating organizational departments.

{: .text-center}
![Multiple LDAP Servers Login](/images/blogimages/gitlab-ldap/multi_login.gif)


**Multi LDAP Configuration - Example**

<pre id="multi_output" class="highlight ruby">
gitlab_rails['ldap_enabled'] = true
gitlab_rails['ldap_servers'] = {
'main' => {
  'label' => 'GitLab AD',
  'host' =>  'ad.example.org',
  'port' => 636,
  'uid' => 'sAMAccountName',
  'method' => 'ssl',
  'bind_dn' => 'CN=GitLabSRV,CN=Users,DC=GitLab,DC=org',
  'password' => 'Password1',
  'active_directory' => true,
  'base' => 'OU=GitLab INT,DC=GitLab,DC=org',
  'group_base' => 'OU=Global Groups,OU=GitLab INT,DC=GitLab,DC=org',
  'admin_group' => 'Global Admins'
  },

'secondary' => {
  'label' => 'GitLab Secondary AD',
  'host' =>  'ad-secondary.example.net',
  'port' => 636,
  'uid' => 'sAMAccountName',
  'method' => 'ssl',
  'bind_dn' => 'CN=GitLabSRV,CN=Users,DC=GitLab,DC=com',
  'password' => 'Password1',
  'active_directory' => true,
  'base' => 'OU=GitLab Secondary,DC=GitLab,DC=com',
  'group_base' => 'OU=Global Groups,OU=GitLab INT,DC=GitLab,DC=com',
  'admin_group' => 'Global Admins'
  }
}
</pre>

## Conclusion

Integration of GitLab with Active Directory (LDAP) reduces the complexity of user management.
It has the advantage of improving user permission controls, whilst easing the deployment of GitLab into an existing [IT environment](https://www.techopedia.com/definition/29199/it-infrastructure). GitLab EE offers advanced group management and multiple LDAP servers.

With the assistance of the [GitLab Support](https://about.gitlab.com/support) team, setting up GitLab with an existing AD/LDAP solution will be a smooth and painless process.

____

Cover image: "[Office](https://commons.wikimedia.org/wiki/File:New_office.jpg)",
by [Phil Whitehouse](https://www.flickr.com/people/19451080@N00),
licensed under [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/).
{:.note}

Tooltips used in LDAP configuration example: "[Hint.css](http://kushagragour.in/lab/hint/)",
by [Kushagra Gour](http://kushagragour.in)
{:.note}

[gitlab_ou]: /images/blogimages/gitlab-ldap/gitlab_ou.png
[ldap_ou]: /images/blogimages/gitlab-ldap/ldap_ou.gif

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
            $('#multi_output').readmore({
              collapsedHeight: 100,
              moreLink: '<a href="#">Expand config</a>',
              lessLink: '<a href="#">Close config</a>'
            });
      } else {
           setTimeout(function() { defer() }, 50);
      }
 })();
</script>