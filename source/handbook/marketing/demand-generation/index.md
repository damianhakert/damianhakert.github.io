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

## Contact methods on website

- https://about.gitlab.com/pricing/ => Recurly
- https://about.gitlab.com/free-trial/ => Marketo License
- https://about.gitlab.com/sales/ => Marketo SDR
- https://about.gitlab.com/sales/ => Marketo SDR
- https://about.gitlab.com/contact/ Newsletter => Marketo newsletter signup
- https://about.gitlab.com/contact/ Security notices => Marketo security notice signup
- https://about.gitlab.com/press/ press@gitlab.com => Forwards to Ashley
- https://about.gitlab.com/development/ => Marketo SDR?
- please add more

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

## New GitLab.com user

1. Creates an account on GitLab.com and posts to X
1. User is added to the Y mailing list in Marketo

## SDR to Sales

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
