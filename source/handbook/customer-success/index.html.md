---
layout: markdown_page
title: "Customer success"
---

- [Demo scripts](/handbook/sales/demo/)
- [On-boarding of large clients](large_client_on-boarding/)
- [On-boarding of premium support clients](premium_support_on-boarding/)
- [How to engage a Customer Success Engineer](engaging/)
- [Account Mapping and Expansion](account-expansion/)


## Customer Segmentation
Customer Success segments the market based on IT or TEDD employees

Strategic: 5000+ employees
Large: 750 - 4999 employees
Mid Market: 100 - 749 employees
SMB: less than 100 employees

Customer Success has two roles assigned to account coverage - Success Engineer (SE) and Account Manager

Strategic: Sr. Account Eexecutive closed deal and stays on accout for growth and renewal.  Success Engineer is assigned pre sales and stays on the account to help with adoption and growth.
Large: Sr. Account Eexecutive closed deal and stays on accout for growth and renewal.  Success Engineer is assigned pre sales and stays on the account to help with adoption and growth
Mid-market: Account Executive closes deal and transfers to Account Manager to handle renewals and growth.
SMB: Web Portal with Sales Admin oversight

## Customer On-boarding Checklist

1.	**Welcome!** — Welcome the customer aboard GitLab, introduce yourself and your purpose within the company and how you will support them throughout the relationship with the business and what they can expect from you. Provide the introduction to support and how to obtain support "For enterprise, Enterprise Edition receives next business day support via e-mail. Please submit your support request through the [support web form](https://gitlab.zendesk.com/hc/en-us/requests/new).
2.	**Personal introduction** — (2-5 days) Create a task in Salesforce to conduct a personal introduction to your new account contacts. This should be quick and informal phone call, this is not an opportunity for discovery but an outreach for you to build rapport and open lines for communication.
3.	**Installation follow-up** — (7-10 days) Create a task in Salesforce to follow-up on the installation, was it successful did they have encounter any issues, were the issues self resolved by using documentation or was the help of support required. This time is a good opportunity to share with the customer the vision of [GitLab "Idea to Production"](https://youtu.be/ZRcWCWatdas) YouTube video.
4.	**Education** — (20-30 days) Create a task in Salesforce for product education. Remind your customer that our releases are on the 22nd of each month per our [Direction](https://about.gitlab.com/direction/). Depending on your timing of this correspondence you may inform them of any major enhancements that have been released or are about to be released.
5.	**Discovery** — (60 days) Now that your customer has had some time and experience using GitLab, set out to discover the need for EE features and products by running through [EE Product Qualification Questions](/handbook/EE-Product-Qualification-Questions/).
6.	**Check-in** — (90 days) Create a task in salesforce for check-in with customer. Ask if the customer has any outstanding issues. Do they have any feature requests?  This is also an opportunity to identify if there has been any changes in the organization, or an opportunity for further user adoption for their goals. For a status check, also identify that key decision makers and license contacts are still current.  
7.	**Outlook** — (6 months) Same as 90 day Check-in task, additionally discuss what the customer roadmap and outlook looks like for the next 6 months. What can we expect in terms terms of growth, what does the customer expect in terms of our product and offerings.
8.	**Renewal/Expansion** — (10 months) Check in with the customer and let them know they are soon due for renewal. Are there any changes to who is responsible for the renewal or otherwise? Good time to ask about their team growth to see if they need more seats.  Good time to educate and develop need for GitLab Products.
9.	**Renewal** — (11 months) Check in with the customer if they have not yet renewed, if there are any blockers to renewal or any changes to expect.
10.	**Renewal** — (12 months) Follow up with the customer, if we have lost their renewal discover the reasons why we did not succeed and if any changes can be made or improved. If they have moved to another solution, which and why?
11. **Expansion** —  For Strategic Deals, an [Account Expansion Template](https://about.gitlab.com/handbook/customer-success/account-expansion/) should be created.



## Customer Engagement

When there is a new assigned account/customer to engage, start with the [Checklist](#customer-on-boarding-checklist) by sending a formal request for an informal introduction. Prior to this, become familiar with information about the customer's role within the company, how GitLab brings value to their organization, and any feedback or outstanding issues they may currently have.

Ensure that your contact records are populated with as much information as possible for data integrity. It is important to gather details and verify accuracy as early as possible. Utilize previous correspondence or additional resources such as [LinkedIn](https://www.linkedin.com/) for your core data.

1. Title
2. Role
3. Email
4. Contact number

_Note, it may be important to record the salutation of a contact/lead from APAC, where possible it should be identified._

Additionally schedule out the following for the account onboarding:
1. Create a 'task' in salesforce to follow up 30 days from the last point contact. Consider asking how they felt a issue is being handled or how it was resolved, did they have any feedback on the latest release or feature? Did they have a feature request?
2. Create a 'task' in salesforce to follow up on 60 days for **Discovery**.

_Consider creating other tasks as interactions and events occur with the particular account._

### Follow-up
So, you got a response! Now what?

Note a summary of your feedback in salesforce and any key points that you will need to follow up on your next check-in.

* We love GitLab! For positive feedback, add comments to [issue 20893](https://gitlab.com/gitlab-org/gitlab-ce/issues/20893).
* For feedback where we can work to improve, add comments to [issue 20860](https://gitlab.com/gitlab-org/gitlab-ce/issues/20860).

**Issues**
* Request the GitLab ID for your customer and create a new issue where necessary. In the [CE Issue Tracker](https://gitlab.com/gitlab-org/gitlab-ce/issues) apply the `customer` label.
* If there is good business justification for an existing issue, you can advocate on behalf of the customer.
* If the customer has a support query, log a [Zendesk](https://support.gitlab.com) ticket on their behalf for the Support team to address.

Continue with the [Checklist](#customer-on-boarding-checklist), and follow any other interaction that may arise.

### Unsuccessful Customer Engagement
You've sent your customer introduction and they do not reply. To reduce chances for unsuccessful engagement and the overall onboarding, exhaust other outreach beyond a personal introduction by deploying some of the product focused tasks below.
* Send a 'Keep in Touch' request in Salesforce.
* Create or use templates in salesforce (access via: my settings > email > email templates > customer success folder) to educate customers about Geo, File Lock and latest releases or [blog posts](https://about.gitlab.com/blog/).
* For some situations, request a submission through the [Customer Feedback](https://docs.google.com/a/gitlab.com/forms/d/17D8FZSqcw2SQeHxiru2tAN9EXZiixGYgzhdgrSxlbt4) form.
* Check the non-responsive customer's license version, let them know the benefits of the [latest release](https://about.gitlab.com/blog/) from the blog.

_Tip, use HTML format for your emails - Salesforce will let you know if your recipient has read your email._

## Using Cases in Salesforce
As mentioned in the [Sales Handbook](https://about.gitlab.com/handbook/sales/), there are multiple email addresses that will create a Case record in Salesforce.

### New Business Inquiries
* `Sales@`: this is an inquiry from a prospect requesting information on GitLab's services.

### Existing Customer Inquiries
* `ar@`: this email is the "From" address for invoices, refunds, and other financial transactions sent to customers.
* `renewals@`: this email address is the "From" address for renewal notifications from Zuora.

### Assignments
* `ar@`: these inquiries will continue to be managed by the Finance team. An AE/AM may get involved when the Case is escalated. They are created in Salesforce simply for visibility.
* `renewals@`: these inquiries will be assigned to the current Account Owner. If there is no current AE or if the account was closed via the web portal and owned by Sales Admin, then James will manage all inquiries for NCSA, Julie for all APAC regions, while Timo will handle customers located in EMEA.

### Renewal Notifications
There following are the different types of renewal notifications from Zuora. Renewal notifications are sent from `renewals@gitlab.com` and will create a CASE upon response.
* Manual Renewals: For subscriptions where Auto-Renewal is FALSE, a renewal notification is sent 60, 30, 7, and 1 day before the subscription expiration date.
* Automatic Renewals: For subscriptions where Auto-Renewal is TRUE, a renewal notification is sent 30 days before the subscription expiration date.

## Types of Inquiries and How to Handle Them
* **Request to Renew**
  * Direct the customer to the [web portal](http://customers.gitlab.com/) to renew their subscription **OR**
  * The AM or AE manually creates a renewal quote via Z-Quotes to be sent via email.
* **Request to Add Users or Product**
  * Direct the customer to the [web portal](http://customers.gitlab.com/) to add seats/products their subscription **OR**
  * The AM or AE manually creates an upsell quote via Z-Quotes to be sent via email.
* **Update Billing Information**
  * Reassign the Case to Francis Aquino and either Francis or Wilson will update Zuora with the new information.
* **Request for Refund or Erroneous Subscription Created**
  * Assignee responds and CCs `ar@` to process the refund or to resolve an erroneous subscription (a customer may have created a new subscription rather than add seats or renew their current subscription).
* **Request to Combine Multiple Subscriptions or Accounts**
  * Assignee responds and works with Francis or Wilson to resolve (inform both).
* **Unable to access account via web portal**
  * Assignee responds and works with Ruben to resolve.
* **Other Inquiry Types**
  * Reassign to Francis Aquino.

## Other Account Management Topics
- [Why the AM is Becoming the Lebron James of the Modern Sales Org](http://www.saleshacker.com/why-the-am-is-becoming-the-lebron-james-of-the-modern-sales-org/)
- [How to Succeed at Key Account Management](https://hbr.org/2012/07/how-to-succeed-at-key-account)
