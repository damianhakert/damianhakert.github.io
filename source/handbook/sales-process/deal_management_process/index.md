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


### Price discounts

1. Only if the customer purchases a standard or plus subscription 

1. Only for 100+ users and the full amount of eventual users

1. 10 discount for buying a license two years in advance and 15% for buying a license for three years in advance

## Cancelling a subscription for a Recurly customer

Trigger: customer with a valid subscription requests a cancellation either via support or via sales

1. If requested via support channel, support forwards to sales

1. Sales asks why cancellation is requested and mentions that the customer will not be compliant to use the Enterprise Edition without a subscription

1. If possible, sales tries to address the reasons why cancellation is requested

1. Recurly > accounts > identify customer account > Subscriptions (More) > Cancel subscription

1. Full refund if request is made within 45 days of purchase, no refund otherwise, unless there is a material defect in our product or service

1. Press “Terminate subscription” or “cancel at renewal”, depending on situation

1. [Remove username from EE repo](source/handbook/sales-process/licenses#removing-access-from-ee)

1. Salesforce.com: change opportunity from won to lost


### Release invoice before subscription renews

1. Account manager sends renewal quote to Bank subscribers 30 days in advance

1. Customer sends PO before support expiry date

1. Account manager creates one time payment and ‘Posts’ invoice (which sends it to customer)

1. Account manager then manually changes renewal date of subscription 1 year hence

1. Account manager Updates and resends license key to match

1. When payment arrives for invoice, controller uses ‘Record Offline Payment’ to record the payment