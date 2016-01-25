---
layout: markdown_page
title: "Demand Generation"
---

## References

- [Q1 ‘16 Lead Generation.pptx](https://docs.google.com/presentation/d/1ePns2ln0bLb_SPodXkYC13HEWRoVrJzsOrHQ3aGWio0/edit#slide=id.p5)
- [Point webhook from mailchimp to marketo issue](https://gitlab.com/gitlab-com/www-gitlab-com/issues/427)
- [Replace wufoo forms with Marketo forms](https://gitlab.com/gitlab-com/www-gitlab-com/issues/422)
- [Marketo webhooks docs](http://developers.marketo.com/documentation/webhooks/)
- [Recurly data into Marketo](https://gitlab.com/gitlab-com/www-gitlab-com/issues/526)

## Incoming Leads

- https://about.gitlab.com/pricing/ => Recurly (not yet integrated into Marketo). Currently when someone clicks "Buy Now" it creates an account in Salesforce and the account owner is notified. Default account owner is Emily/Hank and can then be transferred. This process is being reviewed so it will flow through BDR.
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
- Webcast leads => Lead flows through BDR team for lead qualification process (documentation below).
- Any other forms that are created simply flow through the BDR team for lead qualification process (documentation below).

##Lead status explanation
- Coming soon

## New license flow

1. "Buy Now" button on https://about.gitlab.com/pricing/
1. Recurly
1. webhooks.io
1. marketo-tools
1. Marketo

## Trial license flow

1. Form on website is posted to Marketo
1. Marketo creates a lead and posts to version.gitlab.com
1. version.gitlab.com sends an email to the customer with a license

## New GitLab.com lead

1. Creates an account on GitLab.com and posts to X
1. lead is added to the Y mailing list in Marketo

## Lead qualification process

1. SDR marks the prospect
1. Account manager is assigned based on geo (EMEA/US) and round robin
1. Account manager is emailed and a slack message is generated

## Sales to Nurture

If a lead is in an "Attempt #" Lead Status for 21 days without being changed, it will auto-update the Lead Status to "Nurture" This starts Tuesday, but will only affect one lead so far

## Marketo Tools Server

- This is a simple Sinatra application that receives several web hooks and forwards the relevant information to Marketo via its REST API.
- URL: http://marketo-tools.gitlap.com/ (can't access via browser)
- [Software running on it](https://gitlab.com/gitlab-com/marketo-tools/)
- [Readme of the cookbook for deployment](https://gitlab.com/gitlab-com/cookbook-marketo-tools/blob/master/README.md)
