---
layout: markdown_page
title: "Creating Deals"
---

## Create from leads

To reduce clutter, sales makes some judgement calls about which leads get transformed into a deal:

1. RFQ's which are in a foreign language and have close to no information about company, size of deal and type of subscription do not get a deal

1. Add a note in the deal of whether the customer already runs CE

## Deal name

Deal name follows the following rules:

1. Subscription: [name of company] [type of subscription] [number of packs]. Example: MicahTek, Inc. basic 1

1. Consulting: [name of company] [type of consulting: consultancy/development/training] [number of hours]. Example: First Community Credit Union development 10

1. Any deal coming from Gitorious has “(from Gitorious)” added

## Create for Recurly subscribers

Every Recurly subscriber needs to have a corresponding deal set to won.

1. Customer subscribes via Recurly

1. Deal is created 

1. Follow [won subscription deal procedure](source/handbook/sales-process/deal_management_process#won-subscription-deal-procedure-invoicing)

1. Automatic email to sales@gitlab.com is assigned to the deal

## Renewals

1. Except for small Recurly orders from small nameplates, as soon as a customer subscribes, Sales creates a pipeline entry for the renewal together with a reminder to ping the customer 60 days prior to the subscription expiration. If the customer has a large subscription or a small subscription from a well known name plate, Sales sets an additional reminder 6 months prior to their subscription expiration to check in and make sure they are happy with GitLab and also get user information. If their active user count is more than what they subscribed for then they will need to make a purchase.

1. When a renewal is due, sales inquires about the CURRENT number of users.

1. If current number of users exceeds the number of users in the current subscription, sales [notifies](https://docs.google.com/document/d/12X6Cvjwe_jvFi41gvXMLlq91lDgh5oSrRFdQEuEwhl8/edit) the customer that they will be charged back on the difference.

### Sales invoices on the difference:

1. Recurly: one-time charge is created on the credit card. Bank transfer: create regular invoice

1. The difference is calculated as (date of the invoice - date of latest upgrade) in months * 1/24 * price of user packs difference.
example: a customer that subscribed 1 year ago for 20 users and is currently asking for 40 users will pay 12 months * 1/24 * $398 = $199

1. No new deal is created for this

1. Sales sheet not amended with new invoice number and date

### Credit card payment declined

1. Create renewal deal

1. Email customer about no payment

1. If no reply in 2 days: call

1. If no answer, call weekly

1. If still no answer and not top subscriber:

* Cancel subscription after 1 month

* Remove user from EE repo

* Mark renewal deal as lost

* Remove user from sales sheet

### Renewal process for Bank customers and Recurly $2000 and up

1. 90 days before the renewal, sales creates renewal deal

1. 90 days before renewal, sales gets in touch to verify contact information and the subscription information (type and number of packages)

1. Renewal quote if needed for bank customers

1. Invoice date one day after the expiry date of previous invoice

1. Make draft sale in twinfield when the payment was done

## Upgrading deals

Every time a customer asks for an upgrade (additional subscription packs, or subscription upgrade) we create a new deal.

### Recurly customer asks for additional subscription packs

1. Customer asks for additional subscription packs

1. Sales opens user’s account in Recurly

1. Account - More - Edit(top right) - change quantity - apply immediately

1. A charge is made on customers’ credit card, pro-rated for the difference in quantity until the end of the current subscription

1. At renewal time, customer receives one invoice with all the subscription packs

### Bank customer asks for additional subscription packs

1. Customer asks for additional subscription packs

1. Sales calculates the prorated amount for the subscription packs [here](https://docs.google.com/spreadsheets/d/1755SblMccalWXSahspOrfzBwjGp4F8TkwlB8dOXCGlU/edit#gid=11)

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

1. Once the invoice is paid, customer is transferred to support to handle the call

### Resellers

1. No reseller discounts at the moment

1.  standard reseller agreements at the moment

1. When reseller gets in touch on behalf of customer:

* Create new account in Streak if none already exist

* Create deal using Reseller name - End User name (if end user is not known, use Sales Rep name plus any other distinct info such as location)

* Create End User account and add Deal URL to ‘Background info’

* Quote to reseller has name of end user

* GitLab subscription terms are for the end user, not the reseller

* When deal is ‘Won’ add end user name to end user account