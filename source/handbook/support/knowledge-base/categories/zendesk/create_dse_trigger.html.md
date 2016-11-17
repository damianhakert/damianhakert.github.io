
---
layout: markdown_page
title: Creating a DSE trigger
category: Zendesk
---

### On this page
{:.no_toc}

- TOC
{:toc}

----


### Workflow - Adding DSE triggers to ZenDesk 

##### Overview


Use this workflow when adding a DSE trigger to ZenDesk as part of the Dedicated Service Engineering policy - https://about.gitlab.com/handbook/support/#dedicated-service-engineers

______________

##### Workflow



1. Ensure the organization exists in ZenDesk
   - Search for the organization email domain in https://gitlab.zendesk.com/agent/admin/people 
   - If the organization does not exist, create a new organization
https://gitlab.zendesk.com/agent/organizations/new
 
1. Navigate to the trigger page in ZenDesk (administrator account required)
   - https://gitlab.zendesk.com/agent/admin/triggers 

1. Click “add trigger”

1. **Trigger title:** DSE: Assign {COMPANY} to {AGENT}

*Configure the trigger with the following conditions:*

```
Meet all of the following conditions:
Ticket: Organization is {COMPANY}

Perform these actions: 
Ticket: Assignee {AGENT} 
Ticket: Priority High

```
*Replace {COMPANY} with the organization name (see first step). Replace {AGENT} with the Service Engineers first name.*
