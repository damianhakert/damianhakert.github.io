---
layout: markdown_page
title: Common Responses
---

# Common Responses to support questions

## Content
* [Required information](/handbook/support/common-responses.html#required-information)    
* [HTTPS](/handbook/support/common-responses.html#https)  
* [Upgraged](/handbook/support/common-responses.html#upgrades)  
* [LDAP](/handbook/support/common-responses.html#ldap)
* [Email](/handbook/support/common-responses.html#email)


### <a name="required-information"></a> Required Information

Support requests that don’t have enough information to process require asking the user for this information. The basic 
information that is usually needed is the GitLab version, Operating System and production logs found 
at ```/var/log/gitlab/gitlab-rails/production.log```. 

***

### <a name="https"></a> HTTPS 

***

### <a name="ldap"></a> LDAP
  
***

### <a name="upgrades"></a> Upgrades
  
#### Upgrades from old versions
* Problem Description:  
Upgrades from GitLab ~6.6 encounter migration errors when trying to update to the latest 
version ~8.2. 
* Expected Behavior:  
When following the guides ate the [omnibus-gitlab](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/update/README.md#upgrading-from-a-non-omnibus-installation-to-an-omnibus-installation) 
project installation should run smoothly.
* Solution:  
Some migrations are executed out of order and are required to be ran specifically.  
Migrate with ```sudo gitlab-rake db:migrate```
If its still complicated then upgrade to 7.10 before upgrading to 8.2.    
* Reference:  
[Updating GitLab via omnibus-gitlab](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/update/README.md#upgrading-from-a-non-omnibus-installation-to-an-omnibus-installation)
 
 


***

### <a name="email"></a> Email

#### Email Confirmation Not Sent
* Problem Description: Upgrades 
* Expected Behavior:  
* Solution:  
