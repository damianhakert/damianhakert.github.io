---
layout: markdown_page
title: "Sales Handbook"
---

## Communication<a name="reach-sales"></a>

- [**Public Issue Tracker**](https://gitlab.com/gitlab-com/sales/issues/); please use confidential issues for topics that should only be visible to team members at GitLab.
- You can also send an email to the Sales team via sales [at] gitlab.com
- [**Chat channel**](https://gitlab.slack.com/archives/sales); please use the `#sales` chat channel for questions that don't seem appropriate to use the issue tracker or the internal email address for.

## On this page

* [Pages inside Sales Handbook](#pages)
* [Pages outside Sales Handbook](#pages-outside)
* [GitLab Version Check](#version_check)
* [Parent and Child Accounts](#parent)
* [When to create an Opportunity](#opportunity)
* [Reseller Opportunities](#reseller)
* [Opportunity Naming Convention](#naming)
* [Opportunity Types](#types)
* [Opportunity Stages](#stages)
* [Processing Orders](#processing)
* [Closing A Won Deal](#closing)
* [Using Cases in Salesforce](#cases)
* [Process after you sell a Premium Support Subscription](#premium-support)
* [Escalation to Support](#escalation-support)
* [Contributing to EE Direction](#EE-Direction)
* [Export Control Classification, and Countries We Do Not Do Business In](#export-control)

## Pages inside Sales Handbook <a name="pages"></a>

* [Sales Onboarding](https://about.gitlab.com/handbook/sales-onboarding/)
* [Sales Training](https://about.gitlab.com/handbook/sales-training/)
* [Lead Qual & Demand Gen](https://about.gitlab.com/handbook/marketing/demand-generation/)
* [Sales Discovery Questions](https://about.gitlab.com/handbook/sales-qualification-questions/)
* [EE Product Qualification Questions](https://about.gitlab.com/handbook/EE-Product-Qualification-Questions/)
* [GitLab Positioning](https://about.gitlab.com/handbook/positioning-faq/)
* [FAQ from prospects](https://about.gitlab.com/handbook/sales-faq-from-prospects/)
* [Client Use Cases](https://about.gitlab.com/handbook/use-cases/)
* [Sales demo script](/handbook/sales/demo/)
* [POC Template](/handbook/sales/POC/) to be used to help manage a trial/proof of concept with success criteria
* [Demo: Idea to Production](/handbook/sales/idea-to-production)
* [Vision Demo: Idea to Production](/handbook/sales/vision-demo)

### Pages outside Sales Handbook <a name="pages-outside"></a>

* [Resellers Handbook](/handbook/resellers/)
* [Customer Reference Sheet](https://docs.google.com/spreadsheets/d/1Off9pVkc2krT90TyOEevmr4ZtTEmutMj8dLgCnIbhRs/edit#gid=0)
* [GitLab University](https://university.gitlab.com/)
* [Our Support Handbook](https://about.gitlab.com/handbook/support/)

### GitLab Version Check <a name="version_check"></a>

Before prospecting and engaging with a prospect, check to see if they are using CE. To do this, use GitLab Version Check. Everything about [GitLab Version Check](/handbook/sales-process/version_check).

### Parent and Child Accounts <a name="parent"></a>

* A Parent Account is the business/organization which owns another business/organization.  Example: The Walt Disney Company is the parent account of Disney-ABC Television Group and Disney.com.
* A Child Account is the organization you may have an opportunity with but is owned by the Parent Account. A Child Account can be a business unit, subsidiary, or a satellite office of the Parent Account.
* You may have a opportuity with the Parent account and a Child Account.  Example: Disney and ESPN may both be customers and have opportunities. However, the very first deal with a Parent Account, whether it is with the Parent Account or Child Account, should be marked as "New Business". All other deals under the Parent Account will fall under Add-On Business, Existing Account - Cross-Sell, or Renewal Business (see Opportunity Types section).
* If the Parent and Child accounts have the same company name, either add the division, department, business unit, or location to the end of the account name. For example, Disney would be the name of the Parent Account, but the Child Account would be called The Walt Disney Company Latin America or The Walt Disney Company, Ltd Japan.
* When selling into a new division (which has their own budget, different mailing address, and decision process) create a new account.  This is the Child Account.  For every child account, you must select the parent account by using the parent account field on the account page. If done properly, the Parent/Child relationship will be displayed in the Account Hierarchy section of the account page.
* Remember that a child account can also be a parent account for another account. For example, Disney-ABC Television Group is the child for The Walt Disney Company, but is the parent for ABC Entertainment Group.
* We want to do this as we can keep each opportunity with each child account separate and easily find all accounts and opportunities tied to a parent account, as well as roll-up all Closed Won business against a Parent Account.

### When to create an Opportunity <a name="opportunity"></a>

Before a lead is converted or an opportunity is created the following must occur:

* Identified problem GitLab can solve - happens during introductory call
* Interest by prospect to learn more about GitLab - moving to discovery stage
* Discovery call scheduled with prospect - moving to discovery stage
* Interest by GitLab salesperson to pursue the opportunity
* If you have given a quote (pricing) please convert as this is now a sales opportunity

### Reseller Opportunities <a name="reseller"></a>

Opportunities utilising a reseller require slightly different data:

* Opportunity Name:  
If the partner is an authorised reseller, rename the opportunity with the partner’s nick-name in front, then a dash.  For instance; if it is a Perforce deal, the opportunity name should start with P4 - (whatever your opportunity name is)  This is important for the workflow that solicits updates from the reseller.  

* Account Name:  
It is important that opportunities using a reseller are created on the END CUSTOMER’s account, and not the reseller’s account.  The account name on an opportunity is never a reseller.  Resellers do not buy licenses; they purchase them on the behalf of an end customer.  For instance, the account name field on an opportunity should never be SHI.

* Opportunity Owner:  
Should be the name of the AE who is working the deal with the reseller

* Associating Contact Roles:  
After creating the opportunity, click “New” in the contact section to associate contacts with the opportunity.
 - The primary contact should always be a contact at the end user’s account and not a contact at the reseller.  This is important as resellers come and go, and if we do not capture the contact at the end user account, we will not be able to sell to this account if the reseller ends their relationship with us or with the end account.
 - A reseller contact (say, the sales rep at ReleaseTEAM) can, and should be added to the opportunity with the role of Influencer.  NOTE: A contact that works for a reseller should never be added to an end user account.  For instance an employee of SoftwareOne should be a contact of the SoftwareOne account only, and not the Boeing account.  

* Associating Partners to an Opportunity:  
After creating the opportunity, click “New” in the Partners section to associate the reseller with the opportunity.
 - You can associate multiple partners with an opportunity if there is more than one reseller involved in the opportunity.  This is not uncommon for government opportunities, or opportunities where the customer is asking multiple fulfillment houses (like SHI and SoftwareOne) to fulfill the order.

### Opportunity Naming Convention <a name="naming"></a>

Opportunities for subscriptions will use the following guidelines:
* New Business/Existing Customer - Cross-Sell:
 - [Name of Company]- [Quantity] [Abbreviations of Product]
 - Example: Acme, Inc- 50 EE
 - Example: Acme, Inc- 50 EE/Geo
* Add-On Business (seats only):
 - [Name of Company]- Add [Quantity] [Abbreviations of Product]
 - Example: Acme, Inc- Add 25 EE
 - Example: Acme, Inc- Add 25 EE/Geo
* Add-On Business (new products):
 - [Name of Company]- Add [Quantity] [Abbreviations of Product]
 - Example: Acme, Inc- Add 25 PS
* Renewal Business (no changes):
 - [Name of Company]- [Quantity] [Abbreviations of Product] Renewal [MM/YY]
 - Example: Acme, Inc- 50 EE Renewal 01/17
 - Example: Acme, Inc- 50 EE/Geo Renewal 01/17
* Renewal Business + Add On Business (seats):
 - [Name of Company]- [Quantity] [Abbreviations of Product] Renewal [MM/YY]+ Add [Quantity]
 - Example: Acme, Inc- 50 EE Renewal 01/17 + Add 25
* Renewal Business + Add On Business (new products):
 - [Name of Company]- [Quantity] [Abbreviations of Product] Renewal [MM/YY]+ Add [Abbreviation of Product]
 - Example: Acme, Inc- 50 EE Renewal 01/17 + Add Geo

Abbreviation of Products:
* EE- Enterprise Edition
* FL- File Locking
* Geo- GitLab Geo
* GH- GitHost
* PS- Premium Support
* PT- Pivotal Tile

Opportunities for Training will use the following guidelines:
* Training
 - [Name of company]- [Type of training]
 - Example: Acme Inc- User Training. 
 - **Note** to set up the actual training, follow the workflow described on the [Support handbook](https://about.gitlab.com/handbook/support/).

Types of Training:
* User Training
* Git Workshop
* GitLab Flow
* GitLab Admin

Gitorious Opportunities:
* Any deal coming from Gitorious has “(Gitorious)” added.  
* Example Acme, Inc-Gitorious- 50 EE

### Opportunity Types <a name="types"></a>

1. New Business - This type should be used for any new account (business) who signs up either through the sales team or via the web portal. Paid training also falls under this type if the organization does not have an enterprise license.
1. Add-on Business- This type should be used for any incremental/upsell business sold into an existing account and division mid term, meaning not at renewal.
1. Existing Account - Cross-Sell- This type should be used for new business sold into an existing account but a new division, a new puchasing group.
1. Renewal - This type should be used for an existing account renewing their license with GitLab.  Renewals can have their value increased, decreased or stay the same.  We capture growth/loss as a field in Salesforce.com

### Opportunity Stages <a name="stages"></a>

1. Discovery - research, fact finding, identify contacts, current situation,
1. Developing - isolate the opportunities, assess needs, qualify the opportunities, build rapport, access decision makers, understand decision process and criteria, Collaborate on solutions, define the business case, assess competition
1. Present Solution - Tailor the presentation, coordinate the team, present recommendations, present pricing, isolate value proposition, gain feedback
1. Negotiating - negotiate business terms resolve objections, set close plan (sequence of events), gain commitment
1. Verbal Commitment - how a company approves s business teams desire to purchase, how the company vets purchases from a legal, info security, risk, compliance and vendor management perspective
1. Won - Deal won and booked
1. Lost - Opportunity not won at this time
1. Unqualified - This should only be used when an opportunity is passed from the BDR team, but does not meet our stanard qualification criteria. Once you've moved the opportunity to Discovery or later, the opportunity can no longer be marked as Unqualified.

### Processing Orders <a name="processing"></a>

#### Step 1 - New Account
1. Click on the Accounts tab
1. Click on New button to Create Account
1. Select either Standard or Channel record Type. Each record type will have a different Account layout based on our engagement.
1. Stanard Record Type should be used for all non-reseller partner accounts.
1. Channel Record Type should be used for all reseller partner accounts.
1. Create Account Screen – Enter all mandatory fields and click on Save – Account is created
1. A specific custom field has been created to capture the Entity information. This Entity information is important when drafting quotes as the entity's contact, banking, and beneficiary information will populate on the order form.
 * NL
 * US
1. Sales rep will choose the Entity from the Dropdown

#### Step 2 - Contacts
1. Create Contacts, by clicking on the new contact button
1. Make sure to add in the address for any contacts associated with the quote (Bill To and Sold To)

#### Step 3 -  Opportunity
1. Create Opportunity by navigating to the Opportunity Related list and click on New button
1. Select the Opportunity Record Type. Like Accounts, the options are Standard and Channel.
1. Standard should be selected when engaged in a Sales opportunity.
1. Channel should be selected when engaged in a Reseller opportunity (attempting to sign a reseller partner in a new territory, not Sales opportunities where resellers are involved).
1. Enter all the required fields based on your business process and click on Save Button

#### Step 4 - Zquotes – New QUOTE
1. Click on New Quote button within the opportunity
1. Enter all details and click on Next and select products to complete the Quote creation process
1. All the fields marked in red are mandatory fields, below are fields description
1. Valid Date – Date until when Quote is valid; This is auto set to 30 days from today’s date
1. Quote Template – click on the button to select the Quote template
1. Bill To contact  - Click on the vlookup button to enter the Bill To contact information. This will bring up a pop-up window that will list all the contact that were created during Step 2 of the process. Bill To person would be the contact to whom the bill will be sent
1. Sold To Contact - Click on the vlookup button to enter the Sold To contact information. This will bring up a pop-up window that will list all the contact that were created during Step 2 of the process. Sold To person would be the contact to whom the product was sold
1, Invoice Owner -
* This field will only be used incase of creating a Quote created for a End Customer that involves a Partner; Please see [Creating a Quote for Partner Section](#resellerQuote)
1. Payment method -  refers to the type of payment the customer is using for paying this Quote/Subscription
1. Payment Methods currently defined are as follows –
 * Credit Card
 * ACH
 * Check
 * Wire Transfer
1. Currency - by default below are the fields available, the currencies can be removed/Added or hidden based on your business needs
 * USD
 * EUR
1. Click Thru EULA - is used when an agreement has not been signed; A use case being a product(EE ) is sold through a partner
1. Start Date -  Specify the date on which this subscription, or contract, is effective. This date becomes the Contract Effective Date of the subscription in Zuora. Note: Customers can purchase in advance of the subscription Start Date. In this case, when the Quote is pushed to Z-billing the license generated will be encrypted with the furure Start Date and will not function until then.
1. Subscription Term Type:
 * By default set as Termed
1. Initial Term and Renewal Term -  Specify initial term and the renewal term in months
1. Auto Renew -  it is checked by Default; Subscription automatically renew when the initial term for a subscription is over.
1. Tax Exempt - Need to check with client to make sure they are tax exempt and load tax exempt certificate into their account in SFDC.
1. Tax Exempt - If tax exempt click yes on drop down menu and add additional notes if needed.
1. Special Terms and Notes - Enter any additional notes that is not specified by the above settings.
1. Click on Next to make the product selection
1. Product Selector Page
1. Click on Product Vlookup Button to make the product selection
1. Click on Rate plan Vlookup Button to make the rate plan selection
 * GitLab Enterprise Edition is the rate plan when selling per license seats @ $39
1. In the Discount field, enter the discount in percentage (%) you wish to apply. This will automatically update the Effective Price field.
1. Conversely, if you wish to apply a specific price to a product, enter the price in the Effective Price field. This will update the Discount (%) field.
2. Enter the quantity of the product.
1. After you hit enter, the Total Price of the line item will update.
1. Finally, enter the Period of the line item.
1. Click Save to save the changes you made to the line item.
1. If you need to add additional products to the quote, click New Product Button and repeat the steps of adding a product, rate plan, discount, price, and quantity.
1. After you've completed adding all products to a quote, click Next Button and you will be taken back to the Quote record detail screen.
1. Once the quote has been created, you can modify it, delete it, or send it from Salesforce to Z-Billing to create a subscription.

#### Step 5 – Generate PDF
1. Upon creation of a Quote, click Generate PDF.  The PDF will be saved as an attachment under the opportunity object.

#### Step 6 – Send for signature via Sertifi
1. Within the ZQuote object, click Sertifi E-Sign button near the top of page.
1. 1st signer will be auto-populated with the bill to contact.  You can change if needed.  
1. Add in the 2nd signer and click add participant. Second signer is GitLab executive. Click Next
1. You will now be asked to attach the Quote PDF.  Under the drop down for Related Notes and Attachments.  Select the quote for signature and click send for signature.
1. Once all parties have signed, the fully executed document will be saved as an attachment.

#### Step 7 – Send to Z-billing
1. Once the Quote is signed, Sales rep will click on Send to Z-billing button to send the Quote to Zuora

##### Quote Metrics
The following quote metrics are available:

 * MRR (Monthly Recurring Revenue) - Monthly recurring revenue (MRR) calculates subscription recurring fees normalized to a monthly value.
 * Delta MRR - Delta of the total MRRs between the original subscription and the amendment.
 * TCV (Total Contract Value) - Total contract value (TCV) calculates the total recurring charges over the lifetime of a subscription.
 * Delta TCV - Delta of the TCVs between the original subscription and the amendment.
 * Sub-total - The quote subtotal for the specified billing periods, excluding discount charges and taxes.
 * Discount - The sum of all discount charges for the specified billing periods.
 * Tax - The tax calculated for the specified billing periods.
 * Total - The quote total for the specified billing periods, including discount charges and taxes.

##### Edit Quote Button
 * You can only edit a quote before it is sent to Z-Billing. After a quote is sent to Z-Billing and its subscription is created, you can no longer edit the quote in Salesforce.

##### Edit a Quote
 * To Edit a Quote, click Edit Quote Details.
 * On Edit Quote Details page, make the desired changes.
 * Click Save

##### Select products Button
 * To add, remove, or update products, rate plans, and charges for a quote sales rep can click Select Products.
 * Make necessary changes to products, rate plans, and charges
 * Click Save.

##### Delete Button
 * On the Quote Detail page, click Delete Quote Details to delete a quote that was created.
 * A message would appear to confirm on delete on click of ok quote gets deleted

##### Generate PDF Button
 * This will allow the sales rep to Generate a quote pdf
 * On click of Generate PDF – Quote PDF gets generated

#####  Send to Z-Billing Button
 * On the Order Preview page that opens, review the information, and then click Submit to send the quote to Z-Billing.
 * A confirmation popup shows up, Zuora Quotes has successfully sent your quote to the Z-Billing and a subscription was created

#### Step 8 – Close Won an Opportunity
1. Once quote is signed and attached to opportunity, via Sertifi or manually and quote has been successfully sent to z-billing, go into the opportunity and change the stage to closed won.
1. A renewal opportunity will be automatically created for the account

#### Closing Deals for Educational Institutions receiving educational pricing
 * The customer should purchase a license as normal through Zuora, except that the number of users purchased should only include non-student users (as described in [Educational Pricing](https://about.gitlab.com/license-faq/)).
 * After the customer purchases the license, the account executive then manually creates and sends a license that includes the total number of users, where `total # of users = students + non-students`.

### Returning Customer Creation Process(Upgrade/Renewals/Cancellations)
1. Create an Opportunity for an Add-on or Renewal.  If a cancellation, click on Oportunity they want to cancel.
1. Click on New Quote button within the opportunity.
1. Since this is a returning customer, sales rep will see a screen showing the current subscription.
1. This screen determines that this customer is already established in Zuora and will allow the sales rep to perform on the 4 actions –

#### Updating Subscription for the account
1. Amend existing subscription for this billing account
2. Renew existing subscription for this billing account
3. Cancel existing subscription for this billing account

##### New Subscription for the account
1. This will allow the Sales rep to create a new subscription for the existing billing account.
1. Clicking on Next will take the sales rep thru the same Quoting flow that was seen the new Quote creation process

##### Amend existing subscription for the billing account
1. This process is used to perform any Upgrades on an existing subscription. 
1. Choosing “Amend existing subscription for billing account”, will allow sales rep to perform amendment to an existing subscription.(Upgrades)
1. Clicking on the this radio button will list all subscriptions that are tied to the customer
1. Click to choose the subscription for performing an Amendment and hit on Next button

##### Cancel existing subscription for the billing account
1. This process is used to cancel an existing subscription. (Note that if a customer purchases seats for the wrong billing account, please see the next section.)
1. Click on Opportunity to cancel.
1. Click on New Quote
1. Since this is a returning customer, sales rep will see a screen showing the current subscription.
1. Choosing “Cancel existing subscription for billing account”,
1. Clicking on the this radio button will list all subscriptions that are tied to the customer
1. Click the subscription for performing a cancellation and hit on Next button
1. Select cancellation date and click Next Button.

##### Cancel an erroneous subscription for the billing account
1. This process is used to cancel an erroneous subscription. 
1. For example, a customer may purchase additional seats or products via the web portal which was originally intended as on add-on to an existing subscription.
1. Provide Finance or Sales Operations with the erroneously created Zuora Subscription ID, invoice number and the correct Zuora Subscription ID.
1. Finance will cancel the subscription and either refund the invoice (if a credit card purchase) or cancel the invoice (if check or other payment method).
1. Finance will then amend the correct Zuora Subscription ID and will either charge the card on file or send the invoice via email.

#### Zuora Supporting 4 types of Amendments –
1. Terms and Conditions amendment – The sales rep will be able to change the terms and conditions of an existing subscription;
1. Remove product Amendment – The sales rep will be be able to perform a Remove a product Amendment;
 * In this case, sales rep will have to Set the Start date (Contract effective date in Zuora terms) when the remove product amendment should happen
 * Click on Next
 * This will take them to the product selector page and displays the original product that was purchased within the subscription
 * Sales rep can now remove the product
1. Add product Ammendment – Sales rep can add a new product from the product selector page
1. Update Product Amendment – Sales rep can update the existing product of the existing selected product
 * Note: Do not change the Terms and conditions unless you are performing a terms and conditions amendment(except for start date).
       Let's take an example - Let's say a customer once to add more seats to their license.  
       1. Set the start date
       1. Change the quantity field to reflect the new total number of seats
         * Hit on Save

Once on the Quote Summary, will click on generate PDF to generate a Quote PDF
Send it to the customer - only if there is no record of a signed quote. If customer purchased online, they agreed to our terms and condition, so no need to have them sign a quote.  It is ideal though.
Upon Sign-off, or existing signed quote, click on the Send to Z-billing button to send the Quote over to Zuora

##### Renew existing subscription for the billing account
1. This process is used to perform Renewal on an existing subscription; this is only created if the AUTO RENEW Flag is set to “NO” for a subscription initially.
1. Choosing “Renew existing subscription for billing account”, will allow sales rep to perform Renewal to an existing subscription;
1. Clicking on the this radio button will list all subscriptions that are tied to the customer
1. Clicking on next will take the sales to the Create Renewal Quote page
1. Sales rep will select the renewal Quote Template from the list
1. Enter the Renewal term in months
1. Will hit on Next
1. Skip the product selector page, unless want to update the QTY or want to add a new product
 * if they are adding more seats, change the quantity field to reflect the new total number of seats
1. Once on the Quote Summary, will click on generate PDF to generate a Quote PDF
1. Send it to the customer, via Sertifi button within Zquote screen
1. Upon Sign-off will click on the Send to Z-billing button to send the Quote over to Zuora
1. Close Won the opportunity

##### Renew existing subscription wth a "true-up" for the billing account
1. This process is used to perform a Renewal on an existing subscription and to add a one time charge for true up; this is only created if the AUTO RENEW Flag is set to “NO” for a subscription initially.
1. Choosing “Renew existing subscription for billing account”, will allow sales rep to perform Renewal to an existing subscription;
1. Clicking on the this radio button will list all subscriptions that are tied to the customer
1. Clicking on next will take the sales to the Create Renewal Quote page
1. Sales rep will select the renewal Quote Template from the list
1. Enter the Renewal term in months
1. Will hit on Next
1. On the product selector page, add the true up product
 * enter the number of seats they will true-up.  Add in the price of the seat, 50% of price they paid.
1. Next, update their current subscription to reflect the new total number of seats they will be renewing for which will be equal or greater than the amount they had with their subscription plus the true up amount.
1. Once on the Quote Summary, will click on generate PDF to generate a Quote PDF
1. Send it to the customer, via Sertifi button within Zquote screen
1. Upon Sign-off will click on the Send to Z-billing button to send the Quote over to Zuora
1. Close Won the opportunity

### Creating a Quote for a Partner <a name="resellerQuote"></a>
A reseller quote has a few different things than a regular quote:

* Quote Name Field:  append “via reseller name” to the Quote name (ie: “Quote for Federal Reserve via ReleaseTEAM”
* Quote Template:  Needs to be a reseller template.  Since resellers cannot accept terms for their customers, the reseller template contains different language around acceptance.  There is currently an issue with the reseller templates  Please see [Workaround for the lack of a reseller quote template](#ResellerTemplateWorkaround) below
* Sold To Contact and Bill To Contact fields both need to be a person at the end customer.  This is who will accept the EULA.
* Invoice Owner Field:  This needs to be the resellers account.  If you do not see the reseller listed, then you need to send the SFDC URL of the reseller’s billing contact to finance and for an Invoice Owner record to be created.
* Click Through EULA required: Set this to Yes.  This will cause a URL to be sent to the customer where they agree to our Terms and Conditions before getting their license key.  This is important as a reseller cannot agree to terms on behalf of the end user.  Alternatively, the reseller could obtain a physical signature and send it to you.
* Discount: Authorised resellers all have pre-defined discounts depending upon the market they serve and the services they provide to GitLab.  GitHost is never discounted as our margin after paying Digital Ocean is very small.  We do not give discounts to fullfillment houses like SHI, Insights or other resellers that are not authorised resellers.  Reseller discounts can be found on the first page of the [Resellers List](https://docs.google.com/spreadsheets/d/1tQjPMRUuzsDR4mNj74aY-W8jBQH4u9h7PpEsw088Zx0/edit#gid=1395032632)
When in doubt please consult the reseller team.

### Workaround for the lack of a reseller quote template:<a name="ResellerTemplateWorkaround"></a>
1. When creating the quote, create the word doc version.  
2. Download and open the quote in word
3. Then cut and paste the appropriate data into the template at: [https://drive.google.com/open?id=0B5Yzx31C60SST2pKbWxOdi00Ync]
4. Attach this new word doc to the opportunity
5. Delete the original attachment
6. Send the new attachment to the reseller contact with Sertifi as normal

### Closing a Won Deal <a name="closing"></a>

In order to close a deal in Salesforce.com, one of the following must happen:

1. Client paid via Credit Card through the web portal (terms are agreed upon sign up)
  * Renewals for clients who made their purchase via the web portal; they have agreed to terms of service, therefore a signed quote is not necessary to close the opportunity.  Just need to make sure an invoice (Credit Card) was charged.   
1. Prospect has returned a signed quote (attach to the opportunity). Quote required for all purchases not made via web portal in order to confirm products purchased, # of seats, term and pricing.  Quote is also needed to confirm they agree to terms and conditions.  
  * If a PO is received, we need to receive a signed quote showing the products, # of users, term and pricing of the subscription.  The acceptance of terms language can be removed but click-thru EULA needs to be checked when sending out the license key.

Once the above has happened, please make sure the following actions are done:

1. Attach any signed agreement, PO, and/or quote as an attachment to the opportunity page/object in Salesforce.com.  If sent/signed via sertifi, this will happen automatically.
1. Add in the competition we were up against in the opportunity.  This can be the legacy SCM solution they had and/or who they were evaluating along side of us. This can also be ourselves, meanign GitLab CE or .com
1. Create an add-on or Existing Account (new division) opportunity if there has been one identified by you at this time.
1. An automated task is created to check in with the Account, 30 days after the deal closes.  The purpose for this check in is to make sure they are happy, address any questions they have, ask them to be a reference or to speak with our product marketing team on how they use GitLab.
1. If the customer agrees to be a reference, please complete the following steps:
  * In the Referenceable Customer field on the account page, change the picklist value to "Yes".
  * Select all the Reference Types they are willing to offer (please see the next section for an explanation of the Reference Types).
  * Enter any Reference Comments related to the customer's willingness to be a reference.
  * Also go to the contact object who agreed to be a reference and under the field "role" please select "reference - investors and prospects".
  * If customer agrees to speak with product marketing about how they use GitLab, please email product marketing manager.
1. If the customer declines to be a reference in any way, please note that we cannot mention them in any external conversations with prospects or investors. Please make sure to add notes in the Reference Notes field on why the customer declined.
1. Once the opportunity is closed won, the field "type" on the account object will change to "Customer".
1. A task will be auto created in Salesforce.com reminding you to update the Technology Stack field on the account to reflect the GitLab Tools they are using. Example: GitLab Issue Tracker, CI, Wiki

Reference Types
* Homepage: The customer allows GitLab to use their logo on the GitLab homepage. Please obtain an image file with their logo, or gain customer acceptance of a logo to be used on the GitLab website.
* Customer Story: The customer allows GitLab to share their story and use case with prospects and investors.
* Case Study: The customer allows GitLab's marketing team to draft content highlighting their business challenges and how GitLab solved those challenges.
* Verbal Reference: The customer agrees to speak with either investors or prospective customers on their experience with GitLab.

#### View and download invoices in Salesforce:

As soon as an invoice was generated, the sales rep can view and download it as a PDF in Salesforce. Scroll to the bottom within the Salesforce-Account and click on the invoice number under "Invoices". Then on the bottom of the invoice view, click "Invoice PDF".

### Using Cases in Salesforce <a name="cases"></a>

A case is a question or feedback from a prospect or customer. Each of us can review cases to see how we can deliver better service.

When a case is submitted, if the contacts email address is in salesforce, the contact owner will be assigned to the case.  If there is no match, the case will go to our [BDR Queue](https://na34.salesforce.com/500?fcf=00B610000042ioq). Anyone can check this queue and reassign to yourself if this is your contact or respond to this case.

Cases display in an Emails related list. The Emails related list includes all emails sent by your customer regarding a particular case, as well the email threads between you and your customer. The first 77 characters of an email message appear in the related list so that you can see what the message is about without having to click on it.

#### To work with Email-to-Case or On-Demand Email-to-Case emails:
* Click Send An Email to send an email to a contact, another user, or any other email address. Select a "From Address".  Preferrably use sales@ address.
* Click Reply to respond to an email. The email response automatically includes the email body as received from the customer. Enter your response and click Send.
* Click To All to respond to all participants on an email thread.
* The email address of the contact who created the case automatically appears in the To field, as long as the creator is an existing contact. To add more recipients, click Lookup icon to look up an address, or type or paste email addresses or names in the To field.
* When you enter an email address or name that matches one contact or user, the address appears as a button with the person’s name.
* To add several addresses at once, copy and paste them separated by spaces or commas. These email addresses appear as buttons, and, if they’re associated with a contact or user, show the contact’s name.
* When you enter an email address that matches multiple contacts or users, the address appears as a button. Clicking the button brings up a list of people associated with the email address so you can choose the one you want to associate with the message.
* If you need to copy other people on the message, click Add Cc or Add Bcc.
* By default, the email subject is the name of the case it’s related to. You can edit the subject if you need to.

* Click the subject of the email to view the email. From the email, you can reply to the sender, reply to everyone, forward the email, or delete it.
* While viewing an email, you can display a list of all the emails associated with the case by clicking Email Message List, and you can navigate to the case's other emails by clicking Next or Previous.
* While viewing an email, click Forward to forward it. The email automatically includes the email body as received from the customer. Optionally, enter text and click Send.

#### Closing a Case
* Before closing a case, make sure that the account is associated with the case
* Choose the case reason before you close

### Process after you close a Premium Support Subscription <a name="premium-support"></a>

Once you close a deal that includes Premium Support, you need to:

1. [Request a Dedicated Service Engineer](/handbook/support/#dedicated-service-engineers) as described in the Support Handbook.
1. Once this is determined, please add the Dedicated Service Engineer to the Salesforce account with the drop down.
1. The next step is to introduce your client to their Dedicated Engineer, and if necessary, work together to schedule an on-boarding call to cover any questions, and give an overview of the support they are entitled to.
1. You would have probably brought this up prior to the deal closing, but if the client is interested in joining the Slack support channel, please work with the Dedicated Engineer to make this happen.

#### Escalation to Support <a name="escalation-support"></a>

Customers that require technical assistance or have questions that are not within the scope of sales can have their queries escalated to the GitLab support team via the following channels. 

1. For quick questions, see the [internal support](https://about.gitlab.com/handbook/support/#internal-supporta-nameinternala) section of the support handbook.
1. Forward a customer question via email to the **support** email address. - It's important the email is **forwarded** and not CC'd to avoid additional changes required once the support request is lodged.
1. Create a new ticket on behalf of the customer in the [Zendesk](https://gitlab.zendesk.com) UI - [more information](https://support.zendesk.com/hc/en-us/articles/203690946)


#### Contributing to EE Direction <a name="EE-Direction"></a>
Being in a customer facing role, salespeople are expected to contribute to [GitLab Direction](https://about.gitlab.com/direction/).  Each day we talk to customers and prospects we have the opportunity to hear of a feature they find valuable or to give feedback (positive and constructive) to an EE feature that there is an issue for.
When you hear of feedback or you personally have feedback, we encourage you to comment within the issue, if one exists, or create your own issue on our [EE Issue Tracker](https://gitlab.com/gitlab-org/gitlab-ee/issues). Checking the [GitLab Direction](https://about.gitlab.com/direction/) page and the [EE Issue Tracker](https://gitlab.com/gitlab-org/gitlab-ee/issues) should happen throughout the week.

### Export Control Classification, and Countries We Do Not Do Business In <a name="export-control"></a>

GitLab's Export Control Classification (or ECCN) is 5D002.c.1
with CCATS number G163509.
This means that GitLab source code can be exported and re-exported under the
authority of license exception TSU of section [740.13(e)](https://www.bis.doc.gov/index.php/forms-documents/doc_view/986-740) of the export administration regulations (EAR).

Per [740.13(e)(2)(ii)](https://www.bis.doc.gov/index.php/forms-documents/doc_view/986-740) of the EAR, there are restrictions on "Any knowing export or reexport
to a country listed in [Country Group E:1 in Supplement No. 1 to part 740 of the EAR](https://www.bis.doc.gov/index.php/forms-documents/doc_download/944-740-supp-1)".

As a consequence of this classification, we currently do not do business in:
Iran, Sudan (excluding South Sudan), Syria, North Korea, and Cuba.
