---
layout: markdown_page
title: "Sales Process"
---
## Helpful links for prospects and customers

1. [GitLab subscription page](https://about.gitlab.com/subscription/)

1. [GitLab HA page](https://about.gitlab.com/high-availability/)

1. [EE repo members](https://gitlab.com/subscribers/gitlab-ee/team)

1. [Standard subscribers list](https://gitlab.com/groups/standard/members)

1. [GitLab CE issues list](https://gitlab.com/gitlab-org/gitlab-ce/issues)

1. [GitLab.com support forum](https://gitlab.com/gitlab-com/support-forum/issues)

1. [GitLab feedback tracker](http://feedback.gitlab.com/forums/176466-general)

1. [GitLab documentation](http://doc.gitlab.com/)

1. [Offer for university students](https://about.gitlab.com/2014/05/19/students-now-free/)

1. [Youtube page](https://www.youtube.com/channel/UCnMGQ8QHMAnVIsI3xJrihhg)

1. [GitLab architecture for noobs (office analogy)](https://dev.gitlab.org/gitlab/gitlabhq/blob/master/doc/development/architecture.md)

1. [GitLab flow](https://about.gitlab.com/2014/09/29/gitlab-flow/)

1. [Free GitLab workshop on Platzi (Job as trainer)](https://courses.platzi.com/courses/git-gitlab/)

## Migrating from Highrise to Streak

1. All new emails go to Streak;

1. Highrise pending deal: make box when a pending deal task is addressed.

1. Highrise completed deal: make box when renewal is due (3 months in)

## Streak workflow

1. All leads get boxes;

1. Leads transform to opportunities and are included in the forecast when they become Sales Qualified Leads.

1. An organization is created in the organization pipeline when one company gets more than one opportunity;

1. Opportunities are created for renewal and updates;

1. Follow-up tasks are made just for Opportunities

## Generating leads
[Types of leads](/handbook/sales_process/generating_leads.md)

## Creating deals

Every time a deal is created, a task is also created. The task succinctly describes next action.

### Create from leads

To reduce clutter, sales makes some judgement calls about which leads get transformed into a deal:

1. RFQ's which are in a foreign language and have close to no information about company, size of deal and type of subscription do not get a deal;

1. Add a note in the deal of whether the customer already runs CE

### Deal name

Deal name follows the following rules:

1. Subscription: [name of company] [type of subscription] [number of packs] 
example: MicahTek, Inc. basic 1

1. Consulting: [name of company] [type of consulting: consultancy/development/training] [number of hours] 
example: First Community Credit Union development 10

1. Any deal coming from Gitorious has “(from Gitorious)” added

### Create for Recurly subscribers

Every Recurly subscriber needs to have a corresponding deal set to won.

1. Customer subscribes via Recurly;

1. Deal is created 

1. Won deal procedure

1. Automatic email to sales@gitlab.com is assigned to the deal;

### Renewals

Except for small Recurly orders from small nameplates, as soon as a customer subscribes, Sales creates a pipeline entry for the renewal together with a reminder to ping the customer 60 days prior to the subscription expiration. If the customer has a large subscription or a small subscription from a well known name plate, Sales sets an additional reminder 6 months prior to their subscription expiration to check in and make sure they are happy with GitLab and also get user information. If their active user count is more than what they subscribed for then they will need to make a purchase.

When a renewal is due, sales inquires about the CURRENT number of users.

If current number of users exceeds the number of users in the current subscription, sales [notifies](https://docs.google.com/document/d/1xholewfn3PrzdRIFrxCE-0hQdQdryXuBnlUYGmm76iA/edit#heading=h.cnwgo73omhuz) the customer that they will be charged back on the difference.

Sales invoices on the difference:

* Recurly: one-time charge is created on the credit card. Bank transfer: create regular invoice

* The difference is calculated as (date of the invoice - date of latest upgrade) in months * 1/24 * price of user packs difference.
example: a customer that subscribed 1 year ago for 20 users and is currently asking for 40 users will pay 12 months * 1/24 * $398 = $199

* No new deal is created for this

* Sales sheet not amended with new invoice number and date.

### Credit card payment declined

* Create renewal deal;

* Email customer about no payment;

* If no reply in 2 days: call;

* If no answer, call weekly;

* If still no answer and not top subscriber:

** Cancel subscription after 1 month;

** Remove user from EE repo;

** Mark renewal deal as lost;

** Remove user from sales sheet

### Renewal process for Bank customers and Recurly $2000 and up

1. 90 days before the renewal, sales creates renewal deal

1. 90 days before renewal, sales gets in touch to verify contact information and the subscription information (type and number of packages)’

1. Renewal quote if needed for bank customers;

1. Invoice date one day after the expiry date of previous invoice.

1. Make draft sale in twinfield when the payment was done

## Upgrading deals

Every time a customer asks for an upgrade (additional subscription packs, or subscription upgrade) we create a new deal

### Recurly customer asks for additional subscription packs

1. Customer asks for additional subscription packs

1. Sales opens user’s account in Recurly

1. Account - More - Edit(top right) - change quantity - apply immediately

1. A charge is made on customers’ credit card, pro-rated for the difference in quantity until the end of the current subscription

1. At renewal time, customer receives one invoice with all the subscription packs.

### Bank customer asks for additional subscription packs

1. Customer asks for additional subscription packs

1. Sales calculates the prorated amount for the subscription packs [here](https://docs.google.com/spreadsheet/ccc?key=0Am5WZPWXUTUAdFctUkhoM0lUVjlCWl9kYmZzTHpKemc&usp=drive_web#gid=2)

1. Sales creates invoice

## Prioritization/qualification

### Prepaid consultancy procedure

For clients that meet the following:

1. Company size <20

1. Low-wage country

1. Asking questions that are clearly documented

The minimum for a consultancy contract is 3 hours (call + preparation time).

For consultancy contracts of 3 hours, we request upfront payment following this process:

1. Customer agrees to pay upfront

1. Sales requests company information

1. Sales issues invoice

1. Once the invoice is paid, customer is transferred to support to handle the call.

### Resellers

No reseller discounts at the moment;

No standard reseller agreements at the moment;

When reseller gets in touch on behalf of customer:

1. Create new account in Streak if none already exist

1. Create deal using Reseller name - End User name (if end user is not known, use Sales Rep name plus any other distinct info such as location)

1. Create End User account and add Deal URL to ‘Background info’

1. Quote to reseller has name of end user

1. GitLab subscription terms are for the end user, not the reseller

1. When deal is ‘Won’ add end user name to end user account

## Deal management process

### Handover from sales to support for future support calls

1. Support call is offered in a sales call

1. Sales either bcc’s support@gitlab.com or send separate email to support@gitlab.com to inform on the future support call.

### User count

Good advice to give to customers for performing the user count:

* /admin/users;

* count active users.

The above is a good estimate, because it lists only users that are not blocked, even if they last logged in more than 30 days ago.

### Managing potential customer technical questions
GitLab is so affordable because we make very good use of our HR. Therefore, we try our best to address customer questions via channels other than on-site meetings.
The GitLab remote manifesto: https://about.gitlab.com/2015/04/08/the-remote-manifesto/

1. Sales gets a list of technical questions from the potential customer (either via email, or via a call);

1. Sales attempts to answer as many questions as possible by using the online resources available (especially doc.gitlab.com).

1. For any questions that sales cannot answer, they reach out to the appropriate person in the company, and then documents their answer;

1. If some corner cases or a complex discussion, then sales brokers a call with a service engineer;

1. On-site meetings with service engineers only an option if neither email conversation, nor phone/video calls answered the questions.

### Custom agreements

The [GitLab Terms](https://about.gitlab.com/terms/ are the standard). In cases where sales considers it’s warranted, we can accept custom agreements. All custom agreements should contain the text:

If there is a conflict between the terms of this Agreement and any text on the GitLab quote or the GitLab invoice, the terms of this Agreement prevail over those in either the quote or the invoice.

### Pricing and discounts

1. We do not offer reseller pricing. We accept resellers buying in the name of another company.

1. We do not offer tiered pricing (i.e. discount per larger volumes)

1. Current prices are listed in the [sales sheet](https://docs.google.com/spreadsheets/d/1rwYhbIYkd09CtIyp1LXdoW-cW-zZ_HVhLzF9AIcrNVI/edit#gid=2); if the prices change, they need to be amended there as well.

Case study and prepayment discounts are detailed in the [sales sheet](https://docs.google.com/spreadsheets/d/1rwYhbIYkd09CtIyp1LXdoW-cW-zZ_HVhLzF9AIcrNVI/edit#gid=2).

#### Volume discounts

1. Only if the customer insists and would likely go for a basic subscription instead

1. Only for 100+ users and the full amount of eventual users

1. 50% discount for buying the full license early

1. Only on standard and plus subscriptions

1. Always contain a minimum amount of users

1. Always contain a deadline (end of next month)

1. Never contain a price per user

1. Prepay discounts do still apply

1. Valid for the first year, prepay to get for multiple years

#### Pay later subscription model

This model is an alternative to the yearly payment model.

1. The year is split in equal time-slots (e.g. twice a year, quarterly, etc) or just yearly;

1. At the start, the customer pays the full subscription for the current number of users;

1. There is no further purchase until the end of the first time-slot;

1. At the beginning of the new time-slot, the customer counts the users;

1. Customer purchases any new subscription packs for the upcoming period;

1. Customer pays 50% of the new subscription packs retroactively

#### True-up subscription model

1. At least for 3 years;

1. Only for +1000 users;

1. We agree on a minimum number of users with the customer;

1. The customer can add as many users as they desire without paying extra;

1. At renewal time, customer purchases additional subscriptions, and they also pay for the minimum number previously agreed.

## Won subscription deal procedure / invoicing

* Make sure you are certain whether the user wants to pay by credit card (Recurly orders) or by bank transfer (Bank transfer)

* For consultancy deals, go to Development work management.

* For consolidated invoices, go to Consolidated invoices.

### Recurly orders

1. Customer subscribes via Recurly

1. Add customer to [sales sheet](https://docs.google.com/spreadsheets/d/1755SblMccalWXSahspOrfzBwjGp4F8TkwlB8dOXCGlU/edit#gid=11) (include Recurly invoice date and nr.)

1. Add customer to [Mailchimp GitLab Newsletter list](https://login.mailchimp.com/?referrer=%2Flists%2Fmembers%2Fadd%3Fid%3D107301&wcookie=6a4656f83b552f2e94f0) (Customer automatically subscribed to Mailchimp Subscribers List)

1. For EU clients do a EU VAT VIES check (no need if Dutch client). If not, skip to step 6

1. If no VAT number list but client is from EU but outside NL (if it is a Recurly order it will have automatically added VAT), send email to double-check if they don’t want VAT number listed

1. Create a draft sale (not invoice) in Twinfield 

1. If standard subscriber, add to [subscribers group](https://gitlab.com/groups/standard/members) and for standard subscriber send [onboarding email](https://docs.google.com/document/d/1xholewfn3PrzdRIFrxCE-0hQdQdryXuBnlUYGmm76iA/edit#heading=h.hlqhlshslrxi). If basic subscriber, do not add.

1. Forward Recurly invoice to customer as safeguard against going to spam. Also reinterate to sign up on GitLab.com and send user name.

1. Generate license keys

1. Mark deal as PO (deal won) in Streak (the above steps must be completed, make a deal if none exist)

1. Make a task for the follow up (if needed)

1. Implicit handover between sales and finance is sending the invoice (Sytse)

### Bank Transfer

1. Sales receives an order

1. If order is signed quote or written agreement, ask if there is a PO pending and get the PO number;

1. Add customer to [Mailchimp Subscribers list](https://us5.admin.mailchimp.com/lists/members/add?id=127833)

1. Add customer to [Mailchimp GitLab Newsletter list](https://us5.admin.mailchimp.com/lists/members/add?id=107301)

1. For EU clients do a VAT check

1. If no VAT but client is from EU outside NL, send email to double-check if they don’t want VAT number listed

1. Send "invoice" to customer with one of the two [onboarding emails](https://docs.google.com/document/d/12X6Cvjwe_jvFi41gvXMLlq91lDgh5oSrRFdQEuEwhl8/edit)

1. Forward Recurly invoice to customer as safeguard against going to spam. Also reinterate to sign up on GitLab.com and send user name.

1. Create "draft sale" in Twinfield

1. Add customer to [sales sheet](https://docs.google.com/spreadsheets/d/1755SblMccalWXSahspOrfzBwjGp4F8TkwlB8dOXCGlU/edit#gid=11) (include invoice date and nr.)

1. If standard subscriber, add to [subscribers group](https://gitlab.com/standard/standard-subscriber-information/project_members)

1. Generate "license keys"

1. Mark opportunity as PO (deal won) in Streak (the above steps must be completed, make an opportunity if none exist)

1. Make a task for the follow up (if needed)

1. Implicit handover between sales and finance is sending the invoice (Sytse)

### Cancelling a subscription for a Recurly customer

Trigger: customer with a valid subscription requests a cancellation either via support or via sales

1. If requested via support channel, support forwards to sales;

1. Sales asks why cancellation is requested and mentions that the customer will not be compliant to use the Enterprise Edition without a subscription;

1. If possible, sales tries to address the reasons why cancellation is requested.

1. Recurly > accounts > identify customer account > Subscriptions (More) > Cancel subscription;

1. Full refund if request is made within 45 days of purchase, no refund otherwise, unless there is a material defect in our product or service;

1. Press “Terminate subscription” or “cancel at renewal”, depending on situation;

1. Twinfield: if twinfield entry still in draft (cancellation happens same quarter as the subscription) identify draft sale and amend amount to “0”;

1. Twinfield: if twinfield entry final, then create a draft sale with negative amount. write Recurly and number of original invoice in Description field

1. Remove username from EE repo;

1. Sales sheet: mark deal as lost;

1. Streak: change  deal from won to  lost

## Account management

### Touching base with standard subscribers

### Preparing renewal

### What is an order?

1. A Purchase Order (PO) issued by the company

1. A signed quote (the quote that we send).

1. An e-mail agreement (“we accept the quote/subscription/etc”) or any other written statement.

### Development work management

Do NOT invoice before feature/work is completed.

1. Feature is requested by customer

1. Sales creates issue in issue tracker that links to the email (tags: company name, feature, estimate) and, if needed, mentions in agenda. Issue is assigned to sales milestone; 

1. Dev makes estimate/gives feedback

* Estimate: between x and y hours (if it takes much time to do an estimate and we doubt if the customer will order)

* Quote: x number of hours (in all other cases)

1. Sales communicates estimate to customer; 

1. Repeat 3 and 4 in case of a range estimate;

1. If customer agrees with estimate and feedback, then:

* Add estimate and order to the hourly tab of the Sales sheet

* Sales removes estimate label and adds promised label

* Sales adds comment on milestone and context of developer agreeing on the milestone, changes milestone in the issue

* Adds the issue name and link to the feature in the deal

1. If customer does not commit in a reasonable time, issue is marked as closed and sales follows up through the deal.

1. If feature will not be done, sales marks issue as closed

1. Once feature is delivered, adds number of hours spent in the deal, sales announces customer, closes feature with link to email.

1. Sales adds the real number of hours spent to the sales sheet

1. Sales invoices customer (credit card or bank) for the quoted number of hours.

1. Deal is marked won

1. Implicit handover between sales and finance is sending the invoice (Sytse)

###Consultancy work management

1. Customer contacts sales for consultancy work;

1. Sales sends email to support@ with details and time estimate;

1. Support will OTB (OK to book) or ask for more information;

1. If more information is needed sales will ask it and add to the Zendesk ticket;

1. If OTB and customer agrees with the estimate, sales will ask the customer to contact support@ for booking time and adds to the sales sheet 'Hourly' as quoted;

1. After ordering, sales marks deal as won and amends sales sheet;

1. If, during the call, the time allocated on the quote is exceeded, the service engineer will inform the client that they are going overtime, and that all overtime will be invoiced to the client at normal consultancy rate;

1.If an unforeseen GitLab bug needs to be fixed in order to address the consultancy request, the service engineer will inform the client that GitLab B.V. will make the fix, and that the additional hours spent will be invoiced to the client at normal consultancy rate;

1. If the work is finished or the client decides to stop the consultancy process, support logs the hours spent in the ‘Hourly’ sales sheet, column “Realized” and informs sales via email or Highrise;

1. Support notifies customer via Zendesk that Sales will be in touch with them;

1. Sales creates invoice corresponding to the number of hours in the “Realized” column.

### Handover from sales to support for subscription clients

1. Sales includes a link to the relevant Highrise deal

1. Support looks in the highrise deal, if the conversation is too long they leave a note in Highrise asking for a summary

### Support for potential customers

1. Sales hears about a bug / issue the potential customer is having and decides that GitLab B.V. should try to solve it in the interest of winning the deal

1. Sales asks the customer to email support regarding their issue

## Emailing

### Email and Highrise guidelines

1. Always reply, do not start a new thread

1. Always bcc: Sytse and the highrise dropbox

1. Use ctrl+shift+v to ensure the font is the same

1. Always send from the sales@ address

1. Always reply unless they send a one word email

1. If one company has more deals, assign email to specific deal.

1. All emails can be seen in the company page.

1. Keep all notes & status info in Highrise (including call preparation), no editors or sheets

### Follow-up on incoming sales e-mails

1. Reply to emails as the first thing of the day and don't do anything else before all emails are answered.

1. Prioritize emails from larger (potential) customers that can quickly be answering if the answering  takes more than a few hours.
1. All emails should be answered in 24 hours after they are received.

1. If Marc is overloaded and can't reply in 24 hours he will inform Sytse by email

1. In case any other team member receives a sales/commercial e-mail that is not addressed to the sales@gitlab.com address, they should forward it to Highrise and create a Highrise task assigned to Marc.

### Follow-up on customers

1. See Incoming orders for setting the highrise task

1. Follow-up on customers is done by Marc

1. Follow-up on orders of more than $1000,-: 2 to 4 week after paying

1. Follow-up is not needed immediately after customer pays, because Recurly automatically sends an email with relevant information

### Prioritizing responses

1. Estimate by size of company * percentage developers * $20 per year

1. Bigger deals: always reach out to other people

1. Biggest deals: reach out to a third person or more

1. Respond to incoming big leads in the same day

1. Lead is big if: important name or many users

### [Email templates](https://docs.google.com/document/d/1xholewfn3PrzdRIFrxCE-0hQdQdryXuBnlUYGmm76iA/edit)

## Accounting
### Manual invoicing in Recurly for subscribers paying by bank transfer

1. [New account](https://gitlab.recurly.com/accounts/new)

* Account code: customer contact email address

* Username: can be blank

* Fill in First name and Last name of our contact;

* Fill in company

* Fill in VAT field (if needed);

* Tax exempt? - leave unchecked;

* Fill in the rest of the company information, and add company billing address to address information area

* Press Create account

1. Press “Add subscription”;

1. Select Plan Details and Quantity

1. BIlling Details -> +Edit;

1. Collection method: Manual;

1. Add PO number

1. Terms: Net 30 (or 60 for exceptions);

1. Terms and conditions copy and paste one of the following:

* For non-EU clients: No VAT according to article 44 and 59 of the European VAT Directive.

* For EU clients: VAT shifted to recipient according to article 44 and 196 of the European VAT Directive.

* Dutch clients: leave blank

Add the below to the terms and conditions:

This order is subject to the GitLab Terms: http://about.gitlab.com/terms/
Payment via check is not possible
Please pay this invoice by bank transfer:
Bank: Rabobank, Croeselaan 18, 3500HG Utrecht, Utrecht, The Netherlands, +31302160000 SWIFT / BIC code: RABONL2U, Bank account number: 153952644, IBAN: NL48RABO0153952644

1. Press Add subscription button.

### Manual invoicing in Recurly for consultancy / development / training customers

1. [New account](https://gitlab.recurly.com/accounts/new)

* Account code: customer contact email address

* Username: can be blank

* Fill in First name and Last name of our contact;

* Fill in company

* Fill in VAT field (if needed);

* Tax exempt? - leave unchecked;

* Fill in the rest of the company information, and add company billing address to address information area

* Press Create account

1. Press “add charge” button;

1. Enter the unit amount and any other relevant details, then click the Add Charge button (it’s a good rule of thumb to include a description with the charge. The description will display with the line item on the customer’s invoice);

1. “Digital product”;

1. “Collect Sales tax” checked;

1. Press “Create invoice”;

1. Back to the account, press “Generate invoice”

1. Collection method: Manual;

1. Terms: Net 30 (or 60);

1. Terms and conditions:

* For non-EU clients: No VAT according to article 44 and 59 of the European VAT Directive.

* For EU clients: VAT shifted to recipient according to article 44 and 196 of the European VAT Directive.

* Dutch clients: leave blank

Add the below to the terms and conditions:

Payment via check is not possible
Please pay this invoice by bank transfer:
Bank: Rabobank, Croeselaan 18, 3500HG Utrecht, Utrecht, The Netherlands, +31302160000 SWIFT / BIC code: RABONL2U, Bank account number: 153952644, IBAN: NL48RABO0153952644

1. Create draft sale in Twinfield

### Change customer from credit card payment to bank transfer payment
1. Customer account

1. Subscriptions -> More;

1. Press Edit button;

1. Billing -> + Edit

1. Choose “on next renewal”

1. Change to “manual invoice” and add invoice details

1. Press “Update subscription”

1. Invoice will be created on the date of the renewal.

### Draft sale in Twinfield for clients paying by with Recurly

1. This is part of the "won deal procedure", you should have done a VIES check already.

1. These are linked to Recurly transactions one-on-one, so in case of an upgrade do create a new one, do not amend the original one.

1. [Twinfield](https://login.twinfield.com/) (Login: SUPER, password, Organization: COMCOASTER, Nederlands)

1. "Browser not supported" click on “Ga door naar Twinfield”

1. Select GitLab.com / GitLab B.V.

1. Google for "1 EUR in USD"

1. General => Company => Currencies => USD => Exchange rates => +Line => Save

1. Start with Accounting > Data entry > Verkoopfactuur

1. First, select a customer. If customer doesn’t exist, press asterisk button and then press “First free code”

1. Name: first their legal company name and then their filled out name in brackets 

1. Create a billing address on the basis of their recurly order (add the state to the zipcode)

1. Fill in the t.a.v. with name of contact person

1. Don't fill in the email address

1. BTW nummer (VAT number): to be filled for EU clients

1. No need to add KVK number

1. Click save

1. Currency: USD (or EUR in rare cases)

1. Amount (incl VAT): Total amount from Recurly invoice (incl VAT if invoiced)

1. Factuurdatum/Invoice date: date from Recurly

1. Factuurperdiode: equal to the month of the Recurly order

1. Due date: can leave blank 

1. Not in collection run: leave blank (default)

1. Credit verkoopfactuur: leave blank (default)

1. Invoice nr.: enter the invoice number from Recurly

1. General ledger account for GitLab B.V.

* Subscriptions -> 80000 Omzet Abonnementen

* Hourly -> 80100 Omzet consultancy and development

VAT: IMPORTANT TO CHECK THAT CATEGORY MATCHES THE COUNTRY IN THE INVOICE!
	
Category
GitLab.com
GitLab B.V.
Outside EU
Verkopen buiten EU
VN - Sale of services outside EU
within EU but outside NL
VBIEU
ICL - Sale inside EU
within NL or within EU but outside NL with no VAT number
21%
VH - Sale inside NL

1. VAT category: Always diensten / services and date is date of invoice.

1. If VAT Country and VAT number are not auto-populated under VAT category, just refresh

1. Line Amount(excl. VAT): amount from Recurly

1. Delete the second line

1. As a description (in both fields) use: Recurly xxxx (invoice #)

1. Provisional (no need to make final)

1. Message saying that a provisional sale was created appears on the screen.

1. For hourly invoices add the invoice nr. to the [GitLab Sales Sheet](https://docs.google.com/spreadsheets/d/1rwYhbIYkd09CtIyp1LXdoW-cW-zZ_HVhLzF9AIcrNVI/edit#gid=1)

### EU VAT VIES check
Do the VIES check before sending an invoice to a EU client (not needed for Dutch clients)[VAT request](http://ec.europa.eu/taxation_customs/vies/vatRequest.html) print to PDF, email the resulting page to Sytse with the invoice.
GitLab.com VAT nr. is NL 137696735B02
GitLab B.V. VAT nr is NL 853740343B01

### Consolidated invoices

1. If a customer decides to commit both to a subscription and development work in one go, then we create a consolidated invoice immediately after the PO.

* In case we worked extra for the development, we create new invoice with extra amount.

* In case we worked less, we issue a credit invoice for the reminder.

It is preferred to avoid both the above cases (extra work for us).

### Correcting an invoice for a customer who forgot to add VAT number when subscribing via Recurly

1. Check whether customer want the VAT number added;

1. Perform the EU VAT VIES check;

1. Recurly -> Accounts -> identify account -> invoice -> refund invoice -> uncheck Prorate -> Refund invoice;

1. Update Billing info with VAT number;

1. Charges and Credits -> Add charge

* Amount (per Unit): same as on original invoice;

* Tax Type: Digital product

* Quantity: same as on original invoice;

* Description: same as on original invoice

1. Add charge;

1. Generate invoice -> Post invoice

1. Twinfield: create three draft sales, one for each invoice (original one but with line item price changed so that VAT checks out, credit one but with line item price changed so that VAT checks out, correct one)

### Crediting an old Recurly transaction (more than 1 Q old)

1. Assuming new invoicing dashboard

1. New invoice

1. Identify old Recurly invoice

1. Date is date of original invoice

1. Top text: in-depth explanation on the reason behind the credit invoice

1. Items just like in original invoice, but with negative amounts

1. Fill out the ICL details if needed (Services, date of new invoice)

1. Send PDF

1. Send the credit invoice to the customer (this is legally required)

### Crediting a transaction made in Recurly from about.gitlab.com

1. [Invoice refunds](https://docs.recurly.com/invoices#invoice_refunds)

1. Create a "draft sale" in twinfield with negative amount from invoice

### Customer accidentally created a new subscription instead of updating the new one, both in the same account

1. Customer account -> find new subscription -> More;

1. “Cancel Subscription”, full refund;

1. Find original subscription -> More;

1. Change to correct number of user packs;

1. Press “Update subscription;

1. Inform customer of the changes;

1. Draft sale in Twinfield

### Using Recurly to invoice hourly clients (or special order) by credit card

1. For an existing client you can skip the first two steps.

1. We create an account for the customer on Recurly.

1. We email them a link to their hosted account management page to enter billing information.

1. We open the customer’s account and click the Add Charge button in the Charges and Credits section;

1. Enter the unit amount and any other relevant details, then click the Add Charge button (it’s a good rule of thumb to include a description with the charge. The description will display with the line item on the customer’s invoice);

1. Keep the “Collect Sales Tax” button checked; Type: Digital Product

1.This will create an uninvoiced charge on the customer’s account. By default, this charge will be automatically rolled into the customer’s next subscription renewal invoice. If you’d like to collect this charge immediately, click the Generate Invoice button on the customer’s main account page.

1. Customer notes:

* Non-EU clients: No VAT according to article 44 and 59 of the European VAT Directive.

* For EU clients: VAT shifted to recipient according to article 44 and 196 of the European VAT Directive.

* Dutch clients: leave blank

1. Review the invoice details and click the Post Invoice button.

1. Draft sale in Twinfield

1. Once the invoice is posted, Recurly will automatically collect on the invoice during our next automatic bill run (typically at the top of every hour). You will see the account’s balance go back to $0.00 when this charge is successfully processed.

### Customer wants to update their Recurly account or billing information

Each Recurly account has a hosted account page where they can manage their information. The link is in Recurly -> accounts -> account name -> Hosted pages information.
Use the Hosted Account Management URL to go directly to the page without logging in.
Additional documentation [here](https://docs.recurly.com/hosted-account-management)

### Email templates customization
In the Recurly email templates for "New Subscription", "Payment Confirmation" and "Payment Declined" we added the following:
This subscription is subject to the [GitLab Subscription Terms](http://www.gitlab.com/terms/#subscription)

For companies outside the EU: No VAT according to article 44 and 59 of the European VAT Directive. For companies within the EU where no VAT is invoiced: VAT shifted to recipient according to article 44 and 196 of the European VAT Directive.

### Coupon code for special pricing

1. Go to [new coupons](https://gitlab.recurly.com/coupons/new)

1. Coupon name: organization name (e.g. Penn State)

1. Coupon code: half-random, recognizable as custom (e.g. pennstate123abc)

1. Discount: percentage

1. Lifespan: Forever (default)

1. Limit to specific plans: yes

1. Max Redemptions: 1

1. Redeem by Date: in 60 days

1. Include the coupon code in the quote

## Licenses

### How does a license get created?

[Reference](https://dev.gitlab.org/gitlab/license-app/merge_requests/6)

1. License-app

1. Sales pulls [subscription id](https://license.gitlab.com/subscriptions) from Recurly and presses awesome green button 

1. If customer did not receive [license email](https://license.gitlab.com/licenses), choose customer, and re-send email

## EE access

All access to the Enterprise Edition is offered only along with the [terms](https://about.gitlab.com/terms/), either with a subscription, or an evaluation.

### Evaluation/Trial access rules

1. Small opportunity (small organization and less than 1 standard pack/10 basic packs): Trial is not available. [Send template email](https://docs.google.com/document/d/1xholewfn3PrzdRIFrxCE-0hQdQdryXuBnlUYGmm76iA/edit#heading=h.t1uw2df6jz6e).

1. Large opportunity (large organization or more than 1 standard pack/10 basic packs): 45 day trials are available and can be extended if needed. Prospect should sign the [Evaluation Agreement](https://docs.google.com/document/d/1YvYWlou1OUsQTEhwYZzj8WXPv9bwPhlcVnLI2euA7EQ/edit?usp=sharing). Print Google Doc as PDF and send to prospect. Signed copies should be saved in Drive with file name as exampleco_eval_agreement_signed032615. End of trial is listed in “Renewal date” of the sales sheet. Sales follows-up until a firm response (yes/no). If answer is no, then access is removed, and customer is informed to remove GitLab Enterprise Edition from their server.

1. For users that already have access: sales follows-up until firm response

### Who gets access to ee?

1. Access is granted if user requests it

1. Support handles access

1. If recurly - user told about access through automatic e-mail

1. If bank - sales sends the following [template text](https://docs.google.com/document/d/1F0vXw58ctLfk9LKrh35kOSjYvdah4skGGUt46l1-4GM/edit#heading=h.yijkiyyclmzs) via e-mail

### Giving access to EE

1. Recurly subscribers receive automatic message telling them to contact support for access to EE

1. If customer was not informed already, send email about [information to get access](https://docs.google.com/document/d/1xholewfn3PrzdRIFrxCE-0hQdQdryXuBnlUYGmm76iA/edit#heading=h.95yak5j1r9m2)

1. Go to gitlab.com > Subscribers / GitLab Enterprise Edition > Settings > Members> New Project member and add respective username

1. Give access “Developer”

1. Add user to the sales sheet, so we can see which company they belong to

1. Send e-mail to inform the user

### Giving access to the standard subscribers documentation

1. Gitlab.com > groups > Standard > Members > Add members

1. Give access “Developer”

1. Send email to inform the user

### Removing access from EE

1. Find username in GitLab sales sheet - EE access

1. Go to gitlab.com, Subscribers/Enterprise Edition, Settings, Members, remove the member

1. Add text “removed” in EE status column in sales sheet

1. Make note in highrise deal

## Support-sales flow

1. Support receives sales email

1. Support forwards email (Zendesk ticket) to sales

1. Support informs user that sales will get in touch (implicit handover to sales)

1. Support closes ticket (Solved)

## Deprecated

### Invoice in Twinfield for clients paying by bank (non-Recurly)

1. This is part of the 'won deal procedure', you should have done a VIES check already if EU client

1. [Login Twinfield](https://login.twinfield.com/) (SUPER, het wachtwoord, COMCOASTER, Nederlands)

1. "Browser not supported" click on “Ga door naar Twinfield”

1. Select GitLab B.V.

1. Make sure you have an invoice address and for EU countries a VAT number

1. If payment will be made in USD, then google for "1 EUR in USD"

1. General => Company => Currencies => USD => Exchange rates => +Line

1. Credit management > Sales Invoice Dashboard > Sales > New invoice

1. First, select a customer. If customer does not exist, press + New customer

1. Name: Company name

1. Billing email: leave blank

1. Fill in address, no need to fill in bank information

1. Make sure to insert VAT number if EU customer

1. Press “create”

1. Reference: PO number if PO exists

1. Invoice date: today (always effective date of today)

1. Due date: 30 days from invoice date

1. Quantity: Number of packs for subscription, number of hours for consultancy

1. Description: Options self explanatory. If item does not exist, create it together with Sytse

1. Price: change to $, add correct price

1. VAT:

IMAGE

1. If ICL was chosen, press services

1. Add closing text: 

* For non-EU clients: No VAT according to article 44 and 59 of the European VAT Directive.

* For EU clients: VAT shifted to recipient according to article 44 and 196 of the European VAT Directive.

* Dutch clients: leave blank

1. Press “create” to create a provisional invoice;

1. Press “send by email as PDF” to finalize, in popup email write own email address.

### Crediting an invoice made in Twinfield (DEPRECATED)

1. If you are correcting a mistake,keep the credit invoice in draft for review.

1. Assuming the new invoicing dashboard

1. Open the old invoice

1. Press the credit button

1. Set invoice date to today if the customer cancelled, if you are undoing a mistake put in the same date as the incorrect invoice

1. Fill out the ICL details if needed (Services, date of new invoice)
Send PDF
Send the credit invoice to the customer (this is legally required)