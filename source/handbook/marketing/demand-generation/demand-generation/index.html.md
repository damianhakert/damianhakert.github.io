---
layout: markdown_page
title: "Demand Generation"
---

## On this page
* [Campaigns](#campaigns)
* [Campaign Brief Process](#campaignbrief)
* [Inbound Lead Flow](#leadFlow)
* [Lead Qualification Process](#leadQual)
* [Soft-BANT](#bant)
* [What counts as an MQL, SQL, or SAL?](#SQL)
* [SQL Qualification Criteria](#sqlQual)
* [Lead Status](#leadStatus)
* [Passing Qualified Leads](#leadPassing)
* [Nurture campaign process](#nurture)
* [Subscriptions and Newsletter](#newsletter)
* [Inbound Leads](#inbound)
* [New license flow](#licenseFlow)
* [Marketo Tools Server](#marketoTools)
* [Sales and Community Group Emails](#groupEmail)
* [Newsletters](#newsletters)
* [Webcasts](#webcasts)

## Campaigns<a name="campaigns"></a>
Demand Gen is responsible for executing marketing campaigns for GitLab.  We define a campaign as any programmed interaction with a user, customer, or prospect.  For each campaign, we will create a campaign brief that outlines the overall strategy, goals, and plans for the campaign.

## Campaign Brief Process<a name="campaignbrief"></a>
To create a campaign brief, first start with the [campaign brief template](https://docs.google.com/a/gitlab.com/document/d/1GttZqr7sjuvP9kWuIPfbif2b2VyNJtbN8CbL4tKJX2Q/edit?usp=sharing).  Fill out all fields in the brief as completely as possible.  Certain fields might not be applicable to a particular campaign.  For example, an email nurture campaign leveraging text based emails won’t have a visual design component.  This field can be left blank in that example. 

Once the campaign brief is filled out, create an issue in the GitLab Marketing project and link to the campaign brief.

On the GitLab issue, make sure to:
* Tag all stakeholders
* Use the Marketing Campaign label
* Set the appropriate due date (the due date should be the campaign launch date)
* If there are specific deliverables, create a todo list in the issue description for each stakeholder along with a due date


## Inbound Lead Flow<a name="leadFlow"></a>

1. Lead comes into BDR team via one of the named Inbound Lead routes above.
1. Lead is input into Marketo.
1. Lead is assigned according to assignment rules.
1. If region is EMEA, lead goes directly to EMEA BDR team.
1. If region is APAC, lead goes directly to APAC Sales Director.
1. All other regions go directly to NA BDR team.
1. All other leads pass through BDR lead qualification process.

## Lead qualification process<a name="leadQual"></a>

1. Unless a specific request is made, provide a useful resource that will help the person have a better GitLab experience.
2. Ask [Discovery Questions](https://about.gitlab.com/handbook/sales-qualification-questions/) to qualify lead
3. The following [criteria](#sqlQual) is used to determine if a lead should be passed to sales or recommended CE resources. Once determined, BDR team passes all leads to sales for followup via Salesforce assignment and email notification.
4. If further qualification is needed to understand SQL Qualification requirements, BDR team will email or schedule a phone call with lead to understand their project and initiatives.
5. Once a lead has met the criteria for an SQL, the BDR will schedule a discovery call with the prospect and an AE.  On the call, the BDR will provide a warm introduction and handoff the prospect to the AE.
6. If SQL criteria isn't met and there are questions, BDR team will answer all questions or route to support.
7. If there are no questions and lead isn't qualified yet, the lead status is updated appropriately. See "lead status" above.
8. If a lead is from a [Fortune 500 company](http://fortune.com/fortune500/), it will be assigned to a senior account executive.  For larger opportunities outside the US, lead will be passed to senior account executive or sales director in region.
9. If a lead is an existing customer or a prospect that's owned/operated by an existing customer _but is not using EE_, BDR team will determine account owner and pass lead.
10. If a lead is from an existing account _and is using EE_, the BDR will convert the lead to a contact in SFDC (making sure to check the “Do not create a new opportunity” box) and @mention the lead owner in SFDC to let them know of the new contact. No need to connect the lead with the owner via email.
11. If a lead is from a company that is already in Salesforce, BDR team will determine account owner and pass lead.

## Soft-BANT<a name="bant"></a>

- Budget => Does the person work at a company that could afford GitLab (i.e. has revenue or funding)?
- Authority => Can the person influence a purchase decision?
- Need => Is there a legitimate use for GitLab at the company (i.e. multiple developers, etc.)?
- Timeline => Are they willing to continue communicating about GitLab in the next few weeks? If they have another solution, are they looking to replace in the next few weeks or months?

## What counts as an MQL, SQL, or SAL?<a name="SQL"></a>
* SQL is any lead which meets the [SQL Qualification Criteria](#sqlQual)

        => when converting a qualified lead, make sure that you are creating an opportunity upon conversion. This is required to map the BDR to the opportunity.  It also helps us to track the age of an opportunity from discovery call to closed.

        => if the lead is not a new opportunity, convert to a contact and uncheck the box to create a new opportunity.
* SAL is an SQL which has been accepted by the sales team 
* MQL is any lead with a lead score of 20 or greater in Marketo (lead score is calculated based on behavioral and demographic data). Some examples of bahavior or demographic data that increase lead score are:
   * Signing up to receive the newsletter (behavioral)
   * Signing up for an account on gitlab.com (behavioral)
   * Filling out other web forms (contacts us, webinar registration, etc) (behavioral)
   * Starting an EE Trial (behavioral)
   * Working at a Fortune 500 (demographic)
   * Job title (demographic)
   
## SQL Qualification Criteria <a name="sqlQual"></a>

1. **Current Defined Need:** Does the prospect have an identified need for GitLab?  List out the current need.
2. **Current Defined Need:** What is the prospect currently doing to address their need?  What other technologies are they using?
3. **Budget:** Does the prospect have a realistic chance of securing the budget for GitLab?  Is there already a budget secured for the project?
4. **Buying Process:** Who is the decision maker for GitLab?
5. **Buying Process:** What is the buying process for procuring GitLab?
6. **Buying Process:** What is role does the prospect play in the current evaluation (function, job title)?
7. **Timeline:** What is the timeline to make a decision?  Are you currently in an existing contract that needs to expire before you can move forward? If yes, when does the contract expire?
8. **Product Fit:** Are they interested in GitLab EE?  Is GitLab EE a good fit for their need?
9. **Product Fit:** Do they currently use another version of GitLab?  Are they familiar with our product family?
10. **Scope:** How many seats are they interested in purchasing?
11. **Scope:** How many developers total (potential additional seats) do they have?
12. **Next Steps:** Is there a meeting set with an AE to discuss next steps?


## Lead status<a name="leadStatus"></a>

- Raw => Newly synced lead from Marketo to SFDC
- Open => Lead not yet contacted
- Attempt 1 => One message sent without response; after 21 days, auto-updates to Nurture
- Attempt 2 => Two messages sent without response; after 21 days, auto-updates to Nurture
- Attempt 3 => Three messages sent without response; after 21 days, auto-updates to Nurture
- Attempt 4 => Four messages sent without response; after 21 days, auto-updates to Nurture
- Qualified => Soft-BANT criteria met. Action: pass to sales team.
- Progressing => Communication is two-way, but Soft-BANT still undetermined. Any response that doesn't immediately put the lead into "Qualified", "Unqualified", or "Nurture" status should put the lead in this status.
- Unqualified => Soft-BANT criteria not met (e.g. a developer using GitLab for personal projects, a student, etc.). Action: send appropriate resources if requested; avoid sending salesy messages.
- Bad Data => Invalid email address. Note: only mark as bad data if there is no communication channel. For example, a lead who provided "Spam Spamson" as their name but still provided a valid email address is not Bad Data.
- Nurture => May become "Qualified" in the future, but communication is closed. Will receive useful marketing emails.

## Passing Qualified Leads<a name="leadPassing"></a>

1. BDR emails prospect, cc'ing AE. Email consists of a summary of the lead qual data captured above (current state, problems to solve, what they would like to learn and desired state).  This email also introduces the AE and confirms the meeting day with the prospect and informs them that a meeting invite will be sent shortly.
2. BDR checks AE availability and send invite to prospect(s) and AE with invite naming convention of Meeting Invite Naming Convention: Gitlab Discovery Call - with call in details and agenda of meeting (from summary email and notes)
3. BDR joins Discovery call and provides warm handoff

## Nurture campaign process<a name="nurture"></a>

Coming soon once process is defined. Will be signup campaign for GitLab.com, leads that don't meet Soft-BANT requirements, etc.

## Subscriptions and Newsletter<a name="newsletter"></a>

Inbound leads receive appropriate marketing emails, such as newsletters, onboarding tips (coming soon), etc. What they receive depends on how they came to find us and what we believe will be most helpful to them. For example, a person who downloaded an EE trial will receive different resources than a person who registered for a webcast. Our non-operational emails have a one-click unsubscribe button. You can manually unsubscribe a person by clicking the "Opt Out" checkbox in SFDC. SFDC also has a manual 30-Day Opt Out checkbox for a 30-day unsubscribe from non-operational emails.

## Inbound Leads<a name="inbound"></a>

- https://about.gitlab.com/pricing/ => Currently when someone clicks "Buy Now" it creates an account in Zuora and Salesforce. The account owner is notified, if account does not exist the account owner is sales admin.
- https://about.gitlab.com/free-trial/ => Free trial submits flow to BDR team. lead submits form, form sends data to Marketo, Marketo requests license key from the licensing app, lead gets email with license key from Marketo. BDR follows lead qualification process (documented below).
- https://about.gitlab.com/sales/ => When a lead submit a form to contact sales, that lead flows through marketo and notifies BDR team. BDR follows lead qualification process (documented below).
- https://about.gitlab.com/contact/ Email to community@gitlab.com - Email sends to marketing team. Leads for EMEA are handled by EMEA BDR, Leads for NA are handled by NA BDR, APAC leads are first notice, first route. When lead is followed up, please BCC community@gitlab.com so everyone knows it has been handled and we don't duplicate work. BDR follows lead qualification process (documented below).
- https://about.gitlab.com/contact/ Newsletter signup - lead is added to our semi-monthly newsletter.
- https://about.gitlab.com/contact/ Security signup - Signs up lead for security notices.
- Emails to sales@gitlab.com => Email to sales@gitlab.com - Email sends to sales team. Leads for EMEA are handled by EMEA BDR, Leads for NA are handled by NA BDR, APAC leads are first notice, first route. When lead is followed up, please BCC community@gitlab.com so everyone knows it has been handled and we don't duplicate work. BDR follows lead qualification process (documented below).
- https://about.gitlab.com/press/ press@gitlab.com => Forwards to CMO for handling with our PR team.
- https://about.gitlab.com/development/ => When a lead submit a form to request development help, that lead flows through Marketo and notifies BDR team. BDR follows lead qualification process (documented below).
- https://about.gitlab.com/training/ => When a lead submit a form for training, that lead flows through Marketo and notifies BDR team. BDR follows lead qualification process (documented below).
- https://about.gitlab.com/consultancy/ => When a  submit a form for consultancy, that lead flows through Marketo and notifies BDR team. BDR follows lead qualification process (documented below).
- GitLab.com lead signup =>
- https://about.gitlab.com/downloads/ GitLab CE Downloads newsletter signups=> Lead flows through BDR team for lead qualification process (documentation below).
- Webcast leads => Leads registered for a webcast are sent confirmation, reminder, and followup (recording link and attendee survey) emails. A new lead flows through BDR team for lead qualification process.
- Any other forms that are created simply flow through the BDR team for lead qualification process (documentation below).

## New license flow<a name="licenseFlow"></a>

Current state
1. "Buy Now" button on https://about.gitlab.com/pricing/ is submitted.
2. Zuora intakes order and sends account information to Salesforce.
3. Account owner is notifed.
4. If no current account owner, sales admin is the account owner.

## Marketo Tools Server<a name="marketoTools"></a>

- This is a simple Sinatra application that receives several webhooks and forwards the relevant information to Marketo via its REST API.
- URL: http://marketo-tools.gitlap.com/ (can't access via browser)
- [Software running on it](https://gitlab.com/gitlab-com/marketo-tools/)
- [Readme of the cookbook for deployment](https://gitlab.com/gitlab-com/cookbook-marketo-tools/blob/master/README.md)

## Sales and Community Group Emails<a name="groupEmail"></a>

- Always CC or BCC the group email list (sales@gitlab.com or community@gitlab.com) so others on the list know it's been handled.
- If a request is a new lead with questions about EE, pricing, etc., handle directly.
- If an email is a quote, forward to appropriate sales people.
- If an email is a refund or other billing request, forward to ar@gitlab.com.
- If an email is a license issue or question, forward to support@gitlab.com.
- If an email is received (contact request, account questions, etc. etc.), check in sfdc if there is an account owner. If there is, forward the email to the owner and change the case into their name if there is an open case. If the account owner is Chad or Hank, this is the default. Forward all inquiries/requests to Chad and he will take care of them. Also switch the sfdc case into Chad's name as well.

## Newsletters<a name="newsletters"></a>

- We currently send out two newsletters a month. One is is on the second Tuesday of the month and the other is on the monthly release day (22nd).
- The newsletters are scheduled to go out between 8 and 9 am Pacific time.


We generally create the issue and Marketo program for the newsletter at least a week in advance of it being sent out. This gives us ample time decide which content will go into the newsletter. The Marketo program is created by cloning the previous newsletter that was sent out.

Currently, the newsletter consists of four blocks of content. Each block of content consists of the following:
- Title/topic
- Link and call-to-action
- Description/copy

For example:

![newsletter block example](https://about.gitlab.com/images/handbook/marketing/newsletter-example-block.png)

The different content ideas are placed in the newsletter issue using the following format:

```
[Required] title/topic:

link:

copy:

[Required] link is live/available as of this comment? YES/NO
```

After the content for the newsletter is finalized, build out the newsletter in Marketo. Be sure to update all the links with the appropriate UTM tracking parameters.

Once the newsletter content is updated, send a test email to `marketing@gitlab.com` and `robert@gitlab.com` and get feedback from everyone on copy, links, layout, etc. Implement whatever changes need to be made and send new test emails until the email is ready. Once it's ready, schedule the email within Marketo.

## Webcasts<a name="webcasts"></a>

1. Create webcast in On24
   - Once the webcast is created, capture the `Event ID` from the overview page.
   - Make sure to turn off all email notifications within On24 as these will be handled by Marketo
   - Under the `Registration` tag, under `Options`, check the `Enable Login Only Option`
2. Clone the most recent webcast in Marketo
   - Title the webcast in the following format: `July 27 2016 Webcast {Webcast Title}`. For example, July 27 2016 Webcast Security Webcast w/ Yubico
   - On the webcast summary page, set the event partner with the following information:
      - Event Partner: ON24
      - Login: ON24
      - Event Id: The ID of the event from the On24 platform
3. Update `My Tokens` at the webcast program level
   - Update the add to calendar tokens
      - Create an event in Google Calendar and copy the link from `Publish Event`
      - Update the information in the iCal and Outlook calendar files (these will be identical)
   - Update the event date and time
   - Update the email body with the description of the webcast
4. Schedule the reminder emails
   - In the reminders folder, select each of the smart campaigns to send the emails
   - Under the `Smart List` tab, change the date of activity to not send the email if the user has registered for the webcast within the last 48 hours of when the email will send
   - Under the `Schedule` tab, schedule the email to go out at the appropriate time based on the smart campaign you are editing
5. Edit the landing page to have the appropriate webcast description, date, and time.
