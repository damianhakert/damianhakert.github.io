---
layout: markdown_page
title: "Sales Process"
---
## Lead Process

1. All marketing leads added to salesforce.com as a lead object.  These are called marketing qualified leads.

1. Leads will be assigned round-robin in both the US and International Regions, with the exception being large Enterprise leads (Fortune 500) assigned to Sr. Enterprise Account Managers.

1. To ensure data integrity and a excellent customer experience, salesperson will conduct a quick search within Salesforce.com search field.  Salesperson will type in a portion of the account name and lead name.  Less is more when searching in Salesforce.com.
    * If the lead already exists in Salesforce.com by either the same contact name or an account with the same business entity name, the salesperson will change ownership to the existing salesperson and add commentary to the chatter field within the lead object.

1. If lead is unique, Salesperson will check https://version.gitlab.com before reaching out to prospect

1.  Salesperson will attempt to contact lead 4 times with 10 business days. Attempt 1 - within 1 business day. Attempt 2 - 3rd business day. Attempt 3- 6th business day. Attempt 4 - 10th business day.
    * For each attempt, salesperson will change lead status field within lead to correspond to which attempt they have completed
    * On the 4th attempt and 10th business day, salesperson will send last email and move lead status to nurture.  In this stage marketing will continue to nurture lead back to a sales ready lead.
    * If lead is a Free Trial, Salesperson will convert lead to an opportunity immediately and pursue the opportunity.  Opportunity close date for Free Trails will be the expiration of their free trial.  Salesperson shall add Free Trial within the lead source field of the opportunity object.
    * For Free Trial leads, Salesperson will follow the lead outreach cadence and then weekly outreach, until trial expires.

1. Leads convert to opportunities once salesperson validates problem, we can solve and interest from buyer to pursue a solution.  These are called sales qualified leads.

1. Upon lead conversion, salesperson checks to ensure the lead does not exist as an Account already.  If no, convert lead and an Account is created automatically.  If yes, salesperson selects "add to existing account".  An opportunity will be created under the existing account.  These are now part of the sales pipeline.

1. Salesperson shall have a follow-up tasks for every open lead

1. All leads should be in a lead status of nurture, disqualified or converted to an opportuity within 20 days of the lead being created.  

## Sales Qualification Questions

[Sales Qualification Questions](https://about.gitlab.com/handbook/sales-qualification-questions/)

## Opportunity Stages
1. Discovery - research, fact finding, identify contacts, current situation, 
1. Developing - isolate the opportunities, assess needs, qualify the opportunities, build rapport, access decision makers, understand decision process and criteria, Collaborate on solutions, define the business case, assess competition
1. Present Solution - Tailor the presentation, coordinate the team, present recommendations, present pricing, isolate value proposition, gain feedback
1. Negotiating - negotiate business terms resolve objections, set close plan (sequence of events), gain commitment
1. Verbal Commitment - how a company approves s business teams desire to purchase, how the company vets purchases from a legal, info security, risk, compliance and vendor management perspective
1. Won - Deal won and booked
1. Lost - Opportunity not won at this time

## Opportunity Types
1. New Business - This type should be used for any new account (business) who signs up
1. Web Direct -  This type should be used for any new business who pays directly online
1. Add-on - This type should be used for any incremental/upsell business sold into an existing account and division mid term, meaning not at renewal.
1. Exisiting Account (new divsion) - This type should be used for new business sold into an existing account but a new division, a new puchasing group.
1. Renewal - This type should be used for an existing account renewing their license with GitLab.  Renewals can have their value increased, decreased or stay the same.  We capture growth/loss as a field in Salesforce.com

## Opportunity Naming Convention
Opportunities will follow the following rules:

Subscription: [name of company] [type of subscription] [number of packs]. Example: MicahTek, Inc.-Standard-1

Training: [name of company] [type of training: User Training/Git Workshop/GitLab Flow/GitLab Admin]. Example: First Community Credit Union User-Training

Any deal coming from Gitorious has “(from Gitorious)” added.  Example MicahTek, Inc.-Gitorious-Standard-1

## Sales Ordering Process

### Web Direct orders via Recurly

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

### Invoiced Clients - Bank Transfer

1. Sales receives an order (one of the three options):
    * a Purchase Order (PO) issued by the company
    * a signed quote (the quote that we sent).
    * an e-mail agreement (“we accept the quote/subscription/etc”) or any other written statement. If order is a signed quote or written agreement, email and ask if there is a PO pending and get the PO number
1. If no Subscription Agreement accompanies PO, only send 30 day temp license and request signed Agreement be returned in that time
1. Send invoice to customer with one of the two onboarding emails or a renewal email Forward Recurly invoice to customer as safeguard against going to spam. Also reinterate to sign up on GitLab.com and send user name.
1. PROCESS for bank transfer renewals with PO received before renewal date:
  1. Create a one-off invoice in Recurly and send to customer:
    1. Customer account;
    1. Charges and credits area -> add charge;
    1. In the description, write the exact name of the subscription plan;
  1. Update subscription to start one year from current renewal time
1. If standard subscriber, add to subscribers group
1. License keys auto-generated
1. Sales Admin to check to see if Salesforce.com record already exists (or not) by searching for the company as shown on the Recurly invoice within the search field of Salesforce.com. If an account already exists, then add an opportunity to the account. If one does not exist, create a new account, contact and opportunity for the name on the invoice.
1. Task created for Account Owner to reach out to new client, thanking them for their business and asking for time to learn more about their initiatives for account development opportunities and to ensure their experience is great.

## Deal management process

Find out [how to manage deals](/handbook/sales-process/deal_management_process) with potential customers.

## Account management

Aspects to consider when [managing an account](/handbook/sales-process/account_management).

## Accounting

[Accounting procedures](/handbook/sales-process/accounting).

## Licenses

Everything about [lincenses and EE access](/handbook/sales-process/licenses).

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

1. [YouTube page](https://www.youtube.com/channel/UCnMGQ8QHMAnVIsI3xJrihhg)

1. [GitLab architecture for noobs (office analogy)](https://dev.gitlab.org/gitlab/gitlabhq/blob/master/doc/development/architecture.md)

1. [GitLab flow](https://about.gitlab.com/2014/09/29/gitlab-flow/)

1. [Free GitLab workshop on Platzi (Job as trainer)](https://courses.platzi.com/courses/git-gitlab/)