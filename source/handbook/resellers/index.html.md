---
layout: markdown_page
title: "Resellers Handbook"
---

## On other pages
{:.no_toc}

- [Reseller Onboarding with Checklist](/handbook/resellers/onboarding/)
- [Main Resellers Page](/resellers)

----

## On this page
{:.no_toc}

- TOC
{:toc}

----



## Lead Referral

Leads at GitLab are valuable, and do not age well.  If we refer a lead to you, we have certain expectations on how it will be handled.

### Lead referral and follow up

When GitLab refers leads to you, the lead will have received an email introduction to you first.  That introduction may look a little like this (usually in local language):  

> Greetings `Customer Name`,  
> <br>
> I hope this finds you well.  
> <br>
> Thank you for your interest in GitLab. Since you are in `Territory`, and have begun an evaluation of GitLab EE, I wanted to introduce you to our local partner, `Partner Name`. `Partner` can be reached at `<GitLab@partnerTLD>`. If you need any assistance during your evaluation, I would encourage you to reach out to them.
> <br>
> You are, of course, welcome to contact GitLab directly should you desire.  
> <br>
> `GitLab employee signature block`

When responding to the customer, please be sure to BCC [email to sfdc](#email-to-sfdc) so that your activity is tracked.

#### Lead Aging - 1 week

If a lead is unmodified (by not having received a reply for instance) for 1 week, the lead will then receive a follow up email in English that looks like this:

> Greetings `Customer Name`  
> <br>
> I hope this finds you well.   
> I wanted to follow up on our introduction of `partner` the other day. Have you spoken with them yet? Is there anything that perhaps I can do for you?  
> <br>  
> `Gitlab employee signature block`
> <br>


#### Lead aging - 2 weeks

If the lead goes a further week without being updated or responded to; then the lead will be reassigned to either a direct sales person or another reseller.




## Closing a deal

The steps to closing a deal are:

1. [Deal Registration](#deal-registration)
2. Receive a GitLab [reseller quote](#gitlab-quote)
3. [Remitting payment to GitLab](#paying-gitlab)
4. [Execute the GitLab EULA](#gitlab-eula)

### Deal Registration

GitLab requires lead registration. This process is to let us know which deals you are working on so that we can plan accordingly, and also helps prevent channel conflict.

GitLab will not accept an order, give a quote, issue an eval license, nor pay commissions if a deal has not been registered.  


The link to the deal registration form is located in the [reseller project](https://gitlab.com/gitlab-com/resellers/). Please do not share the URL of the deal registration form with anyone outside your company.  

When you complete the form, we get notified and will do the following:  

- Check our systems for opportunity approval
- Create an opportunity in our SFDC implementation
- Send a quote to your GitLab@partnerTLD email address  
*Note: this is a reseller quote; not to be shared with the customer*
- Send an evaluation license to the GitLab@partnerTLD email address
- Send you an email with any other intelligence that we may have on this account; possibly including:
   - GitLab CE usage (if any) from [GitLab Version Check](https://about.gitlab.com/handbook/sales-process/version_check/).
   - Other usage elsewhere at that company and their affiliates
   - Contact details of the GitLab sales rep that has been working with that company in the past (if any)
   - Our SFDC opportunity name (in case you need to reference it to us)


### Receive a GitLab reseller quote
{: #gitlab-quote}

Attached below is a sample quote. When you register a deal you will receive a quote that looks like this. Yours may differ slightly. This quote reflects your reseller price exclusive of incentive bonus's and is not meant for the end customer. You will need to generate your own quote to the end customer.  

The quote will come with a sertifi link. E-signing the quote with sertifi will initiate the invoicing process and cause our systems to invoice you. Do not e-sign the quote until you are ready to be invoiced.  Do not e-sign the quote if your customer will be paying us directly.   

Note that our system will not let us generate a quote without an end user contact complete with address and postal code.  

--------------------
<br>
![image](/images/handbook/sample_reseller_invoice.png)


### Remitting payment to GitLab
{: #paying-gitlab}

You can arrange for payment either via invoice, or your customer can pay us directly.  

#### Customer pays us directly

If your customer will be paying us directly, you must inform us of that before it happens, or risk getting credit for the opportunity. If they pay us directly, then you will receive your margin with your quarterly VIR cheque.

##### By Credit Card

If your customer wishes to pay by credit card, you can simply direct them to https://about.gitlab.com/pricing/.

##### By purchase order

If your customer will be paying us via a Purchase Order, then you must email us a copy of the PO so we may invoice the customer.  The best way to do this is to forward the PO to Sales@GitLab.com, cc: the customer, and bcc: the [Email to Salesforce](#email-to-sfdc) address. This will make sure that the PO gets attached to the appropriate opportunity record.

#### Paying via Invoice

To pay via invoice, simply e-sign the [reseller quote](#gitlab-quote) to initiate an invoice then remit payment in USD to the appropriate bank:

##### Resellers in North America

````
Comerica Bank
250 Lytton Ave, 3rd Floor  
Palo Alto  
CA 94301  USA
Bank account number: 1894977527
SWIFT Code: MNBDUS33
Routing number: 121137522

Beneficiary information
GitLab, Inc
1233 Howard Street Suite 2F
San Francisco
CA 94103  USA
````


##### All other resellers
````
Rabobank
Croeselaan 18, 3500HG
Utrecht, The Netherlands
Bank account number: 153952644
SWIFT Code:  RABONL2U
Routing number: 121137522
IBAN: NL48RABO0153952644

Beneficiary information
GitLab BV
108 Ondiep, 3552 EK
Utrecht, The Netherlands
VAT #: NL853740343B01
````

###  Execute the GitLab EULA
{: #gitlab-eula}

All orders will require an executed [EULA](https://about.gitlab.com/terms/print/gitlab_subscription_terms.pdf).  There are 3 methods of obtaining a EULA:

1. Customer pays GitLab directly.  
   In this instance, GitLab will obtain the EULA from the customer.  
2. License Key Deployment
   The default for reseller orders is that the end customer will receive a link to download their license key.  The customer will have to click an acceptance of terms in order to get their key.
3. Physical signature
   Some customers may require a fully countersigned document.  When you obtain the signed document from the customer, please scan it and email it to Sales@GitLab.com, with a cc: to the customer and a bcc: to the [Email to Salesforce](#email-to-sfdc) address.

An order is not complete without a signed agreement.

## Email to SFDC
{: #email-to-sfdc}

At GitLab, we regularly review our leads for activity. In order to  make that **way** less painful than asking you to fill out a spreadsheet, or sit through a long phone call; we will enable mailto SFDC for your email accounts that will be interacting with GitLab leads.

### To use

- When replying to leads, BCC the SalesForce address that is listed in the README file of the [resellers project](https://gitlab.com/gitlab-com/resellers/).
- This will create an activity record on the contact, lead, account, and opportunity records that match the people on the to: and cc: lines.   
- This will show up on the Lead Activity report, and make everyone happy that the leads we are referring to you are showing activity.
- When SFDC communities are eventually turned on, you will be able to see all of this activity too.  

If there are any additional email addresses you want me to enable SFDC to receive email from, please let us know.

## GitLab Landing Page guidelines
{: #landing-page}

Your website will need to have a landing page with information about GitLab.  You can see what others have done from the [Resellers page](about.gitlab.com/resellers)
- We would prefer your landing page to be at `yoururl.com/GitLab` where this is not possible, we would ask you to set a redirect for that URL to the actual one.
- We highly encourage your landing page to be in local language.  There are plenty of English language resources on GitLab, so providing them in the native tounge of your customers adds value.
- You should use our [Authorised Reseller Logo](#Logo) on your page, and have it link back to us at http://about.gitlab.com/resellers
- There needs to be a “What is Gitlab?” paragraph
- Where ever you mention a GitLab product or feature, there should be a link back to our coresponding item on about.gitlab.com

Here is also a list of resources that you may find useful to include on your landing page.
* [What is GitLab](https://about.gitlab.com)
* [What is GitLab EE](https://about.gitlab.com/features/#enterprise)
* [CE vs EE comparison](https://about.gitlab.com/features/#compare)
* [GitLab CI](https://about.gitlab.com/gitlab-ci/)
* [GitLab Geo](http://docs.gitlab.com/ee/gitlab-geo/README.html)
* [Pricing](https://about.gitlab.com/pricing/)
* [GitLab Blog](https://about.gitlab.com/blog/)
* [GitLab Culture](https://about.gitlab.com/culture/)
* [Gitlab on Twitter](https://twitter.com/gitlab)


## Authorised Reseller Logos
{: #Logo}
The GitLab Authorised reseller logo should help tell your prospects and customers that we are working with you. <br>
You should use our Authorized Reseller Logo on your materials where appropriate and in accordance with our brand guidlines. <br>
The logos are avalable in the README file of the [resellers project](https://gitlab.com/gitlab-com/resellers/)