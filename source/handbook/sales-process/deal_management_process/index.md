---
layout: markdown_page
title: "Deal Management Process"
---

## Handover from sales to support for future support calls

1. Support call is offered in a sales call

1. Sales either bcc’s support@ gitlab.com or send separate email to support@ gitlab.com to inform on the future support call

## User count

Good advice to give to customers for performing the user count:

- /admin/users

- count active users

The above is a good estimate, because it lists only users that are not blocked, even if they last logged in more than 30 days ago.

## Managing potential customer technical questions

GitLab is so affordable because we make very good use of our HR. Therefore, we try our best to address customer questions via channels other than on-site meetings.
[The GitLab Remote Manifesto](https://about.gitlab.com/2015/04/08/the-remote-manifesto/)

1. Sales gets a list of technical questions from the potential customer (either via email, or via a call)

1. Sales attempts to answer as many questions as possible by using the online resources available (especially doc.gitlab.com)

1. For any questions that sales cannot answer, they reach out to the appropriate person in the company, and then documents their answer

1. If some corner cases or a complex discussion, then sales brokers a call with a service engineer

1. On-site meetings with service engineers only an option if neither email conversation, nor phone/video calls answered the questions

## Custom agreements

[The GitLab Terms](https://about.gitlab.com/terms/) are the standard. In cases where sales considers it’s warranted, we can accept custom agreements. All custom agreements should contain the text: "If there is a conflict between the terms of this Agreement and any text on the GitLab quote or the GitLab invoice, the terms of this Agreement prevail over those in either the quote or the invoice."

## Pricing and discounts

1. We do not offer reseller pricing. We accept resellers buying in the name of another company

1. We do not offer tiered pricing (i.e. discount per larger volumes)

1. Current prices are listed in the [sales sheet](https://docs.google.com/spreadsheets/d/1755SblMccalWXSahspOrfzBwjGp4F8TkwlB8dOXCGlU/edit#gid=11); if the prices change, they need to be amended there as well

Case study and prepayment discounts are detailed in the [sales sheet](https://docs.google.com/spreadsheets/d/1755SblMccalWXSahspOrfzBwjGp4F8TkwlB8dOXCGlU/edit#gid=11)

### Volume discounts

1. Only if the customer insists and would likely go for a basic subscription instead

1. Only for 100+ users and the full amount of eventual users

1. 50% discount for buying the full license early

1. Only on standard and plus subscriptions

1. Always contain a minimum amount of users

1. Always contain a deadline (end of next month)

1. Never contain a price per user

1. Prepay discounts do still apply

1. Valid for the first year, prepay to get for multiple years

### Pay later subscription model

This model is an alternative to the yearly payment model

1. The year is split in equal time-slots (e.g. twice a year, quarterly, etc) or just yearly

1. At the start, the customer pays the full subscription for the current number of users

1. There is no further purchase until the end of the first time-slot

1. At the beginning of the new time-slot, the customer counts the users

1. Customer purchases any new subscription packs for the upcoming period

1. Customer pays 50% of the new subscription packs retroactively

### True-up subscription model

1. At least for 3 years

1. Only for +1000 users

1. We agree on a minimum number of users with the customer

1. The customer can add as many users as they desire without paying extra

1. At renewal time, customer purchases additional subscriptions, and they also pay for the minimum number previously agreed

## Won subscription deal procedure / invoicing

* Make sure you are certain whether the user wants to pay by credit card (Recurly orders) or by bank transfer (Bank transfer)

* For consultancy deals, go to [Development work management](source/handbook/sales-process/account_management#development-work-management)

* For consolidated invoices, go to [Consolidated invoices](source/handbook/sales-process/accounting#consolidated-invoices)

### Recurly orders

1. Customer subscribes via Recurly

1. Add customer to [sales sheet](https://docs.google.com/spreadsheets/d/1755SblMccalWXSahspOrfzBwjGp4F8TkwlB8dOXCGlU/edit#gid=11) (include Recurly invoice date and nr.)

1. Add customer to [Mailchimp GitLab Newsletter list](https://login.mailchimp.com/?referrer=%2Flists%2Fmembers%2Fadd%3Fid%3D107301&wcookie=6a4656f83b552f2e94f0) (Customer automatically subscribed to Mailchimp Subscribers List)

1. For EU clients do a [VAT check](source/handbook/sales-process/accounting) (no need if Dutch client). If not, skip to step 6

1. If no VAT number list but client is from EU but outside NL (if it is a Recurly order it will have automatically added VAT), send email to double-check if they don’t want VAT number listed

1. If standard subscriber, add to [subscribers group](https://gitlab.com/groups/standard/members) and for standard subscriber send [onboarding email](https://docs.google.com/document/d/12X6Cvjwe_jvFi41gvXMLlq91lDgh5oSrRFdQEuEwhl8/edit). If basic subscriber, do not add

1. Forward Recurly invoice to customer as safeguard against going to spam. Also reinterate to sign up on GitLab.com and send user name

1. [Generate license keys](source/handbook/sales-process/licenses)

1. Mark deal as PO (deal won) in Streak (the above steps must be completed, make a deal if none exist)

1. Make a task for the follow up (if needed)

1. Implicit handover between sales and finance is sending the invoice (Sytse)

### Bank Transfer

1. Sales receives an [order](source/handbook/sales-process/account_management)

1. If order is signed quote or written agreement, ask if there is a PO pending and get the PO number

1. Add customer to [Mailchimp Subscribers list](https://us5.admin.mailchimp.com/lists/members/add?id=127833)

1. Add customer to [Mailchimp GitLab Newsletter list](https://us5.admin.mailchimp.com/lists/members/add?id=107301)

1. For EU clients do a [VAT check](source/handbook/sales-process/accounting)

1. If no VAT but client is from EU outside NL, send email to double-check if they don’t want VAT number listed

1. [Send invoice](source/handbook/sales-process/accounting) to customer with one of the two [onboarding emails](https://docs.google.com/document/d/12X6Cvjwe_jvFi41gvXMLlq91lDgh5oSrRFdQEuEwhl8/edit)

1. Forward Recurly invoice to customer as safeguard against going to spam. Also reinterate to sign up on GitLab.com and send user name

1. Add customer to [sales sheet](https://docs.google.com/spreadsheets/d/1755SblMccalWXSahspOrfzBwjGp4F8TkwlB8dOXCGlU/edit#gid=11) (include invoice date and nr.)

1. If standard subscriber, add to [subscribers group](https://gitlab.com/standard/standard-subscriber-information/project_members)

1. [Generate license keys](source/handbook/sales-process/licenses)

1. Mark opportunity as PO (deal won) in Streak (the above steps must be completed, make an opportunity if none exist)

1. Make a task for the follow up (if needed)

1. Implicit handover between sales and finance is sending the invoice (Sytse)

## Cancelling a subscription for a Recurly customer

Trigger: customer with a valid subscription requests a cancellation either via support or via sales

1. If requested via support channel, support forwards to sales

1. Sales asks why cancellation is requested and mentions that the customer will not be compliant to use the Enterprise Edition without a subscription

1. If possible, sales tries to address the reasons why cancellation is requested

1. Recurly > accounts > identify customer account > Subscriptions (More) > Cancel subscription

1. Full refund if request is made within 45 days of purchase, no refund otherwise, unless there is a material defect in our product or service

1. Press “Terminate subscription” or “cancel at renewal”, depending on situation

1. [Remove username from EE repo](source/handbook/sales-process/licenses#removing-access-from-ee)

1. Sales sheet: mark deal as lost

1. Streak: change  deal from won to  lost

### Release invoice before subscription renews

1. Account manager sends renewal quote to Bank subscribers 30 days in advance

1. Customer sends PO before support expiry date

1. Account manager creates one time payment and ‘Posts’ invoice (which sends it to customer)

1. Account manager then manually changes renewal date of subscription 1 year hence

1. Account manager Updates and resends license key to match

1. When payment arrives for invoice, controller uses ‘Record Offline Payment’ to record the payment