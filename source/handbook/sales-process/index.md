---
layout: markdown_page
title: "Sales Process"
---
* [Lead Qualification Process](#leadqual)
* [Sales Qualification Questions](#salesqual)
* [Client Use Cases](#client)
* [Parent and Child Accounts](#parent)
* [Opportunity Naming Convention](#naming)
* [Opportunity Types](#types)
* [Adding Products to an Opportunity](#products)
* [Opportunity Stages](#stages)
* [Submitting Quotes in Salesforce.com](#quotes)
* [Closing A Won Deal](#closing)
* [Processing Orders in Recurly](#processing)
* [Expanding Deals](#expanding)
* [Managing an Account](#managing)
* [Licences](#licences)
* [Sales Best Practice Training](https://about.gitlab.com/handbook/sales-training/)
* [Export Control Classification, and Countries We Do Not Do Business In](#export-control)
* [Sales Automation Flow](#automation)
* [Helpful Links](#helpful)


### Lead Qualification Process <a name="leadqual"></a>

1. All marketing leads added to salesforce.com as a lead object.  These are called marketing qualified leads.

1. Leads will be assigned round-robin in both the US and International Regions, with the exception being large Enterprise leads (Fortune 500) assigned to Sr. Enterprise Account Managers.

1. To ensure data integrity and a excellent customer experience, salesperson will conduct a quick search within Salesforce.com search field.  Salesperson will type in a portion of the account name and lead name.  Less is more when searching in Salesforce.com.
    * If the lead already exists in Salesforce.com by either the same contact name or an account with the same business entity name, the salesperson will change ownership to the existing salesperson and add commentary to the chatter field within the lead object.

1. If lead is unique, Salesperson will check https://version.gitlab.com before reaching out to prospect. See [Version Check page](/handbook/sales-process/version_check) for more information.

1.  Salesperson will attempt to contact lead 4 times with 10 business days. Attempt 1 - within 1 business day. Attempt 2 - 3rd business day. Attempt 3- 6th business day. Attempt 4 - 10th business day.
    * For each attempt, salesperson will change lead status field within lead to correspond to which attempt they have completed
    * On the 4th attempt and 10th business day, salesperson will send last email and move lead status to nurture.  In this stage marketing will continue to nurture lead back to a sales ready lead.
    * If lead is a Free Trial, Salesperson will convert lead to an opportunity immediately and pursue the opportunity.  Opportunity close date for Free Trails will be the expiration of their free trial.  Salesperson shall add Free Trial within the lead source field of the opportunity object.
    * For Free Trial leads, Salesperson will follow the lead outreach cadence and then weekly outreach, until trial expires.

1. Leads convert to opportunities once salesperson validates problem, we can solve and interest from buyer to pursue a solution.  These are called sales qualified leads.

1. Upon lead conversion, salesperson checks to ensure the lead does not exist as an Account already.  If no, convert lead and an Account is created automatically.  If yes, salesperson selects "add to existing account".  An opportunity will be created under the existing account.  These are now part of the sales pipeline.

1. Salesperson shall have a follow-up tasks for every open lead

1. All leads should be in a lead status of nurture, disqualified or converted to an opportuity within 20 days of the lead being created.  

### Sales Qualification Questions <a name="salesqual"></a>

[Sales Qualification Questions](https://about.gitlab.com/handbook/sales-qualification-questions/)

### Client Use Cases <a name="client"></a>

[Client Use Cases](https://about.gitlab.com/handbook/use-cases/)

### Parent and Child Accounts <a name="parent"></a>

* A Parent account is the business/organization which owns another business/organization.  Example: Disney is the parent account of ESPN and ABC.
* A Child Account is the organization you may have an opportunity with but is owned by the Parent Account.
* You may have a opportuity with the Parent account and a Child Account.  Example: Disney and ESPN may both be customers and have opportunities.
* When selling into a new division (which has their own budget, different mailing address, and decision process) create a new account.  This is the Child Account.  For every child account, you must select the parent account by using the parent account field on the account page.
* We want to do this as we can keep each opportunity with each child account separate and easily find all accounts and opportunities tied to a parent account.

### Opportunity Naming Convention <a name="naming"></a>

Opportunities will follow the following rules:

* Subscription: [name of company] [type of subscription] [number of packs]. Example: MicahTek, Inc.-Standard-1
* Training: [name of company] [type of training: User Training/Git Workshop/GitLab Flow/GitLab Admin]. Example: First Community Credit Union User-Training
* Any deal coming from Gitorious has “(from Gitorious)” added.  Example MicahTek, Inc.-Gitorious-Standard-1

### Opportunity Types <a name="types"></a>

1. New Business - This type should be used for any new account (business) who signs up
1. Web Direct -  This type should be used for any new business who pays directly online
1. Add-on - This type should be used for any incremental/upsell business sold into an existing account and division mid term, meaning not at renewal.
1. Exisiting Account (new divsion) - This type should be used for new business sold into an existing account but a new division, a new puchasing group.
1. Renewal - This type should be used for an existing account renewing their license with GitLab.  Renewals can have their value increased, decreased or stay the same.  We capture growth/loss as a field in Salesforce.com

### Adding Products to an Opportunity <a name="products"></a>

1. When creating an opportunity, you will be required to add in a product for the opportunity.
1. Select the product the prospect is interested in.  The product you choose should match the plan you added in the Opportunity Name.
    * If selling a 24 or 36 month deal, please select the correct product.  Each plan has a 12, 24 and 36 month product.  
    * Please note that the discount (10% for 24 month pre-paid and 15% for 36 month pre-paid) has already been applied to the product amount when you select it. You may change the sales price of the pack if you are giving a further discount or if no discount at all.
1. If selling more than one pack, please note the number of packs you are selling in the quantity field.  
1. Once you select a product you can edit the quantity and the sales price. 
1. If you want to change the product, you must first delete the product you have currently in the opportunity, then add in the new product.

### Opportunity Stages <a name="stages"></a>

1. Discovery - research, fact finding, identify contacts, current situation, 
1. Developing - isolate the opportunities, assess needs, qualify the opportunities, build rapport, access decision makers, understand decision process and criteria, Collaborate on solutions, define the business case, assess competition
1. Present Solution - Tailor the presentation, coordinate the team, present recommendations, present pricing, isolate value proposition, gain feedback
1. Negotiating - negotiate business terms resolve objections, set close plan (sequence of events), gain commitment
1. Verbal Commitment - how a company approves s business teams desire to purchase, how the company vets purchases from a legal, info security, risk, compliance and vendor management perspective
1. Won - Deal won and booked
1. Lost - Opportunity not won at this time

### Submitting Quotes in Salesforce.com <a name="quotes"></a>

To create a quote, you must be in the opportunity object

1. Click New Quote
1. Name the Quote Suggested format “ GitLab/Company name/Type of Subscription. Customers will see the name of the quote.
1. Enter expiration date if required - It can be left blank.
1. In "Prepared for” search for the contact name and ensure email address is correct.
1. Check correct mailing address this will be pulled from account page. If there is no address, add on to the account page
1. Save  Quote
1. Now in the quote "Create PDF” and choose the type of subscription template; Basic,Standard or Plus.
1. Either "save quote" this allows you to send pdf from your mail client or "save and email quote" this will send from with sfdc mail client.

### Closing a Won Deal <a name="closing"></a>

In order to close a deal in Salesforce.com, one of the following must happen:

1. Cient paid via Credit Card
1. PO has been received
1. Prospect has returned a signed quote (attach to the opportunity). 

Once the above has happened, please make sure the following actions are done:

1. Process order in Recurly
1. Add Invoice Number in the Invoice Number field within the opportunity
1. Make sure opportunity close date matches invoice date in Recurly
1. Make sure opportunity product matches subscription plan in Recurly
1. Make sure opportunity amount matches amount in Recurly
1. Add in the competition we were up against in the opportunity.  This can be the legacy SCM solution they had and/or who they were evaluating along side of us.
1. Create a renewal opportunity opportunity by cloning the current opportunity and changing the close date to be 12, 24 or 36 months out.
1. Create an add-on or Existing Account (new division) opportunity if there has been one identified by you at this time.
1. Create a task 30 days later, to check in with Account to make sure they are happy, address any questions they have and to explore any growth opportunity in the account.  Example: new divisions, more users on the exisiting team.
    * If an add-on or existing account (new division) opportunity has been identified and recorded in Salesforce, create a task for the day you and the client will meet to explore the growth opportunity.
1. Check to make sure the Type field on the Account page now says Customer.  If not, please manually change it.
1. Update the Technology Stack field on the account to reflect the GitLab Tools they are using. Example: GitLab Issue Tracker, CI, Wiki

### Processing Orders in Recurly <a name="processing"></a>

#### Credit Card orders via Recurly
1. Order comes in via email from recurly and will always have an invoice # on it.
1. Customer subscribes via Recurly (this happens automatically via the online credit card order form)
1. Sales Admin to check to see if Salesforce.com record already exists (or not) by searching for the company as shown on the Recurly invoice within the search field of Salesforce.com. If an account already exists, then add an opportunity to the account. If one does not exist, create a new account, contact and opportunity for the name on the invoice.
1. If standard subscriber: (note - you must have their gitlab.com user name to add them to the subscribers group. You must ask the customer for their user name)
    * Add to subscribers group (to add subscribers, you need access)
      1. Click the green button to the right “Add members”
      1. Copy and paste the customers GitLab.com user name into the field next to People.
      1. The customers login info will appear as a drop down which you select by clicking
      1. Then go down to the next field next to Group Access where the default access level is Guest. Click on the field and select Developer from the options
      1. Then click the green button immediately below “Add users to group”
    * Send onboarding email. If basic subscriber, do not add.
1. Generate license keys - the license key should be auto-generated.  If not, follow these steps:
    * Go to https://license.gitlab.com
    * Select the sign in with gitlab green button
    * Select the New License green button
    * Enter the Recurly subscription ID - follow these steps:
      1. Go to Recurly login and log in
      1. Select the Accounts tab at the top of the menu on the left
      1. Type in the name of the account in the search bar on the right
      1. Account will show up and select the account
      1. In the Subscriptions pane, select the More button
      1. Copy the portion of the URL after subscriptions/ (do not include the /). This portion is the Subscription ID
      1. Return to https://license.gitlab.com
      1. Paste the subscription ID (what you just copied from the URL) into the Recurly Subscription ID field (box)
      1. Select the Make license from Recurly subscription button
1. Task created for Account Owner to reach out to new client, thanking them for their business and asking for time to learn more about their initiatives for account development opportunities and to ensure their experience is great.

### Invoiced Clients 

#### New Business Order
1. Sales receives an order (one of the three options):
    * a Purchase Order (PO) issued by the company
    * a signed quote (the quote that we sent).
    * an e-mail agreement (“we accept the quote/subscription/etc”) or any other written statement. If order is a signed quote or written agreement, email and ask if there is a PO pending and get the PO number
1. If no Subscription Agreement accompanies PO, only send 30 day temp license and request signed Agreement be returned in that time
1. Send invoice to customer with one of the two onboarding emails or a renewal email Forward Recurly invoice to customer as safeguard against going to spam. Also reinterate to sign up on GitLab.com and send user name.
1. PROCESS for bank transfer renewals with PO received before renewal date:
    * Create a one-off invoice in Recurly and send to customer:
    * Customer account;
    * Charges and credits area -> add charge;
    * In the description, write the exact name of the subscription plan;
    * Update subscription to start one year from current renewal time
1. If standard subscriber, add to subscribers group
1. License keys auto-generated
1. Sales Admin to check to see if Salesforce.com record already exists (or not) by searching for the company as shown on the Recurly invoice within the search field of Salesforce.com. If an account already exists, then add an opportunity to the account. If one does not exist, create a new account, contact and opportunity for the name on the invoice.
1. Task created for Account Owner to reach out to new client, thanking them for their business and asking for time to learn more about their initiatives for account development opportunities and to ensure their experience is great.
	
#### Renewals

PO order for additional seats when past due:

1. Get GitLab quote signed and upload to salesforce account
1. Get PO from customer with their internal PO number included
1. In Recurly, click “Add Charge” add quantity, it 2 or 3 years, then add 2 or 3 in quantity then use number that includes any discounts from upfront payments
1. Click submit, then click manual billing
1. Add the customers PO number under “PO Number” field, and make sure the number is updated on preview to the right
1. Click submit, then PO will go to client for them to pay in net30. If they do not, then rep will need to follow up to get payment (will see list in Aging report)
1. Go to License Key and update for one year

Renewal in Advance- before renew date:

1. Add charge for renewal amount and process
1. Click Subscription- Manually change renewal date 
1. Double check license key is sent
       
Renewal in Advance- plus add users:

1. Go into account and click add charge- add total number (existing plus added seats) include details in description field. 
1. Click Subscription and manually change renewal date
1. Click Edit Subscription, add pack with zero charge
1. Confirm license key matches subscription 

Adding users to current subscription as a separate department:

1. Need to make sure it’s a different division as you will need to issue a second license key 
1. Click Add Subscription on main account page
1. Process order 
1. Makes sure you see two separate subscriptions on the main page in Recurly
1. Make sure a second license key is sent to the contact
	
Additional billing situations [Accounting procedures](/handbook/sales-process/accounting)

### Expanding Deals <a name="expanding"></a>

Find out [how to manage deals](/handbook/sales-process/deal_management_process) with potential customers.

### Managing an Account <a name="managing"></a>

Aspects to consider when [managing an account](/handbook/sales-process/account_management).

### Licences <a name="licenses"></a>

Everything about [licenses and EE access](/handbook/sales-process/licenses).

### Export Control Classification, and Countries We Do Not Do Business In <a name="export-control"></a>

GitLab's Export Control Classification (or ECCN) is 5D002.c.1.  
This means that GitLab source code can be exported and re-exported under the 
authority of license exception TSU of section [740.13(e)](https://www.bis.doc.gov/index.php/forms-documents/doc_view/986-740) of the export administration regulations (EAR).  

Per [740.13(e)(2)(ii)](https://www.bis.doc.gov/index.php/forms-documents/doc_view/986-740) of the EAR, there are restrictions on "Any knowing export or reexport 
to a country listed in [Country Group E:1 in Supplement No. 1 to part 740 of the EAR](https://www.bis.doc.gov/index.php/forms-documents/doc_download/944-740-supp-1)".  

As a consequence of this classification, we currently do not do business in:  
Iran, Sudan (excluding South Sudan), Syria, North Korea, and Cuba.

### Sales Automation Flow (Lead to Customer) <a name="automation"></a>

* Free Trial

Free Trial form (Marketo) -> License Sent via App -> Lead added to Salesforce.com -> Opportunity Created -> Opportunity Closed Won -> Account invoiced or Credit Card added

* Web Direct Purchase

Order placed (Recurly) -> Account billed via Credit Card -> License Sent via App -> Sales Admin creates Account and opportunity in SF

* Contact Us Form

Contact Us Form (Marketo) -> Lead added to Salesforce.com - Opportunity Created if qualifed -> Opportunity Closed Won -> Account invoiced or Credit Card added.

### GitLab Version Check <a name="version_check"></a>

Everything about [GitLab Version Check](/handbook/sales-process/version_check).

### Helpful Links <a name="helpful"></a>
1. [GitLab subscription page](https://about.gitlab.com/subscription/)

1. [GitLab HA page](https://about.gitlab.com/high-availability/)

1. [EE repo members](https://gitlab.com/subscribers/gitlab-ee/team)

1. [Standard subscribers list](https://gitlab.com/groups/standard/members)

1. [GitLab CE issues list](https://gitlab.com/gitlab-org/gitlab-ce/issues)

1. [GitLab.com support forum](https://gitlab.com/gitlab-com/support-forum/issues)

1. [GitLab feedback tracker](http://feedback.gitlab.com/forums/176466-general)

1. [GitLab documentation](http://doc.gitlab.com/)

1. [Offer for university students](https://about.gitlab.com/2014/05/19/students-now-free/)

1. [YouTube page](https://www.youtube.com/channel/UCnMGQ8QHMAnVIsI3xJrihhg)

1. [GitLab architecture for noobs (office analogy)](https://dev.gitlab.org/gitlab/gitlabhq/blob/master/doc/development/architecture.md)

1. [GitLab flow](https://about.gitlab.com/2014/09/29/gitlab-flow/)

1. [Free GitLab workshop on Platzi (Job as trainer)](https://courses.platzi.com/courses/git-gitlab/)