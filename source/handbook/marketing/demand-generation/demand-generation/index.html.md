---
layout: markdown_page
title: "Demand Generation"
---

## On this page



## References

- [Q1 ‘16 Lead Generation.pptx](https://docs.google.com/presentation/d/1ePns2ln0bLb_SPodXkYC13HEWRoVrJzsOrHQ3aGWio0/edit#slide=id.p5)
- [Point webhook from mailchimp to marketo issue](https://gitlab.com/gitlab-com/www-gitlab-com/issues/427)
- [Replace wufoo forms with Marketo forms](https://gitlab.com/gitlab-com/www-gitlab-com/issues/422)
- [Marketo webhooks docs](http://developers.marketo.com/documentation/webhooks/)
- [Recurly data into Marketo](https://gitlab.com/gitlab-com/www-gitlab-com/issues/526)

## Inbound Leads

- https://about.gitlab.com/pricing/ => Recurly (not yet integrated into Marketo). Currently when someone clicks "Buy Now" it creates an account in Salesforce and the account owner is notified. Default account owner is Emily/Hank and can then be transferred. This process is being reviewed so it will flow through BDR. More info below under "New License Flow".
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

## New license flow

Below is theoretical once it is implemented.

1. "Buy Now" button on https://about.gitlab.com/pricing/ is submitted.
2. Recurly intakes lead information and sends account information to Marketo.
3. Lead information (first name, last name, email, company name) is sent to webhooks.io.
4. Webhook.io sends information to Marketo via API.
5. BDR team is notified via email that a lead has purchased via "buy now" button. Lead flows through BDR team for lead qualification process (documentation below).

Current state
1. "Buy Now" button on https://about.gitlab.com/pricing/ is submitted.
2. Recurly intakes lead information and sends account information to Salesforce.
3. Lead is assigned based on current account owner.
4. If no current account owner, Emily handles.

## Inbound Lead Flow

1. Lead comes into BDR team via one of the named Inbound Lead routes above.
2. Lead is input into Marketo.
3. Lead is assigned according to assignment rules.
4. If region is EMEA, lead goes directly to EMEA BDR team.
5. All other regions go directly to NA BDR team.
6. If outside of EMEA, large accounts and recognizable brand names are first passed directly to Enterprise Sales team via assignment in Salesforce + email alert to account owner.
7. All other leads pass through BDR lead qualification process.

## Lead qualification process

1. Unless a specific request is made, provide a useful resource that will help the person have a better GitLab experience.
2. Ask [Discovery Questions](https://about.gitlab.com/handbook/sales-qualification-questions/) to qualify lead
3. Soft-BANT is used to determine if a lead should be passed to sales or recommended CE resources. Once determined, BDR team passes all leads to sales for followup via Salesforce assignment and email notification.
4. If 2 of the 4 elements of BANT are met (budget, authority, need, timeline), BDR team will determine account owner and pass lead.
5. If further qualification is needed to understand Soft-BANT requirements, BDR team will email or schedule a phone call with lead to understand their project and initiatives.
6. If Soft-BANT isn't met and there are questions, BDR team will answer all questions or route to support.
7. If there are no questions and lead isn't qualified yet, the lead status is updated appropriately. See "lead status" above.
8. If a lead is from a Fortune 500 company, it will be automatically assigned to a senior account manager.
9. If a lead is an existing customer or a prospect that's owned/operated by an existing customer, BDR team will determine account owner and pass lead.
10. If a lead is from a company that is already in Salesforce, BDR team will determine account owner and pass lead.

## Soft-BANT

- Budget => Does the person work at a company that could afford GitLab (i.e. has revenue or funding)?
- Authority => Can the person influence a purchase decision?
- Need => Is there a legitimate use for GitLab at the company (i.e. multiple developers, etc.)?
- Timeline => Are they willing to continue communicating about GitLab in the next few weeks? If they have another solution, are they looking to replace in the next few weeks or months?

## What counts as an SQL or MQL?
1. SQL is any lead which has been both:
 a. accepted by the sales team which has met the qualification requirements; and
 b. converted to a Contact in and attached to a new Opportunity in SFDC.
2. MQL is any lead with a lead score of 20 or greater in Marketo.
 - Lead score is calculated based on behavioral and demographic data.

## Lead status

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

##Passing Qualified Leads
- Set "Lead Status" to Qualified and assign the appropriate sales team member as the new owner
- Introduce the lead to the sales team member unless inappropriate or unnecessary.
- If no action is taken by the newly assigned sales team member within 1-7 days, follow up with them and determine why no action has been taken.

## Nurture campaign process

Coming soon once process is defined. Will be signup campaign for GitLab.com, leads that don't meet Soft-BANT requirements, etc.

## Subscriptions and Newsletter

Inbound leads receive appropriate marketing emails, such as newsletters, onboarding tips (coming soon), etc. What they receive depends on how they came to find us and what we believe will be most helpful to them. For example, a person who downloaded an EE trial will receive different resources than a person who registered for a webcast. Our non-operational emails have a one-click unsubscribe button. You can manually unsubscribe a person by clicking the "Opt Out" checkbox in SFDC. SFDC also has a manual 30-Day Opt Out checkbox for a 30-day unsubscribe from non-operational emails.

## Marketo Tools Server

- This is a simple Sinatra application that receives several webhooks and forwards the relevant information to Marketo via its REST API.
- URL: http://marketo-tools.gitlap.com/ (can't access via browser)
- [Software running on it](https://gitlab.com/gitlab-com/marketo-tools/)
- [Readme of the cookbook for deployment](https://gitlab.com/gitlab-com/cookbook-marketo-tools/blob/master/README.md)
