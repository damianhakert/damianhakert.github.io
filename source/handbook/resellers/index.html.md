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

Leads at GitLab are valuable, and do not age well. If we refer a lead to you, we have certain expectations on how it will be handled.

### Lead referral and follow up

When GitLab refers leads to you, the lead will have received an email introduction to you first.  That introduction may look a little like this (usually in local language):

> Greetings `Customer Name`,
>
> I hope this finds you well.
>
> Thank you for your interest in GitLab. Since you are in `Territory`, and have begun an evaluation of GitLab EE, I wanted to introduce you to our local partner, `Partner Name`. `Partner` can be reached at `<GitLab@partnerTLD>`. If you need any assistance during your evaluation, I would encourage you to reach out to them.
>
> You are, of course, welcome to contact GitLab directly should you desire.
>
> `GitLab employee signature block`

When responding to the customer, please be sure to BCC [email to SFDC](#email-to-sfdc) so that your activity is tracked.

#### Lead Aging - 1 week

If a lead is unmodified (by not having received a reply for instance) for 1 week, the lead will then receive a follow up email in English that looks like this:

> Greetings `Customer Name`
>
> I hope this finds you well.
> I wanted to follow up on our introduction of `partner` the other day. Have you spoken with them yet? Is there anything that perhaps I can do for you?
>
> `GitLab employee signature block`

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

GitLab will not accept an order, give a quote, issue an evaluation license, nor pay commissions if a deal has not been registered.


The link to the deal registration form is located in the [reseller project](https://gitlab.com/gitlab-com/resellers/). Please do not share the URL of the deal registration form with anyone outside your company.

When you complete the form, we get notified and will do the following:

- Check our systems for opportunity approval
- If approved provide deal protection
- Create an opportunity in our SFDC implementation
- Send a quote to your `GitLab@partnerTLD` email address <br>
*Note: this is a reseller quote, not to be shared with the customer.*
- Send an evaluation license to the `GitLab@partnerTLD` email address
- Send you an email with any other intelligence that we may have on this account; possibly including:
   - GitLab CE usage (if any) from [GitLab Version Check](https://about.gitlab.com/handbook/sales-process/version_check/).
   - Other usage elsewhere at that company and their affiliates
   - Contact details of the GitLab sales rep that has been working with that company in the past (if any)
   - Our SFDC opportunity name (in case you need to reference it to us)

### Receive a GitLab reseller quote
{: #gitlab-quote}

Attached below is a sample quote. When you register a deal you will receive a quote that
looks like this. Yours may differ slightly. This quote reflects your reseller price
exclusive of incentive bonus's and is not meant for the end customer. You will need to
generate your own quote to the end customer.

The quote will come with a [Sertifi](http://corp.sertifi.com/) link. E-signing the quote
with Sertifi will initiate the invoicing process and cause our systems to invoice you.
Do not e-sign the quote until you are ready to be invoiced.  Do not e-sign the quote if
your customer will be paying us directly.

Note that our system will not let us generate a quote without an end user contact complete with address and postal code.

![sample reseller invoice](/images/handbook/sample_reseller_invoice.png){: .shadow}

### Remitting payment to GitLab
{: #paying-gitlab}

You can arrange for payment either via invoice, or your customer can pay us directly.

#### Customer pays us directly

If your customer will be paying us directly, you must inform us of that before it happens,
or risk getting credit for the opportunity. If they pay us directly, then you will receive
your margin with your quarterly VIR cheque.

##### By Credit Card

If your customer wishes to pay by credit card, you can simply direct them to `https://about.gitlab.com/pricing/`.

##### By purchase order

If your customer will be paying us via a Purchase Order, then you must email us a copy of
the PO so we may invoice the customer.  The best way to do this is to forward the PO to
`sales@gitlab.com`, `cc`: the customer, and `bcc`: the [Email to Salesforce](#email-to-sfdc)
address. This will make sure that the PO gets attached to the appropriate opportunity record.

#### Paying via Invoice

To pay via invoice, simply e-sign the [reseller quote](#gitlab-quote) to initiate an
invoice then remit payment in USD to the appropriate bank:

{::options parse_block_html="true" /}

<div class="panel panel-info">
##### Resellers in North America
{: .panel-heading #resellers-north-america}
<div class="panel-body">
**Comerica Bank** <br>
250 Lytton Ave, 3rd Floor <br>
Palo Alto <br>
CA 94301 USA <br>
Bank account number: 1894977527 <br>
SWIFT Code: MNBDUS33 <br>
Routing number: 121137522

**Beneficiary information** <br>
GitLab, Inc. <br>
1233 Howard Street Suite 2F <br>
San Francisco <br>
CA 94103 USA
</div>
</div>

<div class="panel panel-info">
##### Resellers outside North America
{: .panel-heading #world-resellers}
<div class="panel-body">
**Rabobank** <br>
Croeselaan 18, 3500HG <br>
Utrecht, The Netherlands <br>
Bank account number: 153952644 <br>
SWIFT Code:  RABONL2U <br>
Routing number: 121137522 <br>
IBAN: NL48RABO0153952644

**Beneficiary information** <br>
GitLab BV <br>
108 Ondiep, 3552 EK <br>
Utrecht, The Netherlands <br>
VAT #: NL853740343B01
</div>
</div>

###  Execute the GitLab EULA
{: #gitlab-eula}

All orders will require an executed [EULA](https://about.gitlab.com/terms/print/gitlab_subscription_terms.pdf). There are 3 methods of obtaining a EULA:

1. **Customer pays GitLab directly**
   In this instance, GitLab will obtain the EULA from the customer.  
2. **License Key Deployment**
   The default for reseller orders is that the end customer will receive a link to download their license key.  The customer will have to click an acceptance of terms in order to get their key.
3. **Physical signature**
   Some customers may require a fully countersigned document.  When you obtain the signed document from the customer, please scan it and email it to `sales@gitlab.com`, with a `cc`: to the customer and a `bcc`: to the [Email to Salesforce](#email-to-sfdc) address.

An order is not complete without a signed agreement.

## Email to SFDC
{: #email-to-sfdc}

At GitLab, we regularly review our leads for activity. In order to make that **way**
less painful than asking you to fill out a spreadsheet, or sit through a long phone call;
we will enable `mailto` SFDC for your email accounts that will be interacting with
GitLab leads.

### To use

- When replying to leads, `bcc` the SalesForce address that is listed in the README file of the [resellers project](https://gitlab.com/gitlab-com/resellers/).
- This will create an activity record on the contact, lead, account, and opportunity records that match the people on the `to`: and `cc`: lines.
- This will show up on the Lead Activity report, and make everyone happy that the leads we are referring to you are showing activity.
- When SFDC communities are eventually turned on, you will be able to see all of this activity too.  

If there are any additional email addresses you want me to enable SFDC to receive email from, please let us know.

## Technical Support

While we do not require them to, we do expect that your customers will, for the most part, contact you if they need help.
It is in both of our best interest that they do so, as the more touch points you have with them, the more likely you are to further develop business with them.
We do not expect you to be as knowledgeable about our products as our own support staff, and do expect that you will need to escalate some issues to our support staff.
To facilitate this, you will be assigned a [Designated Support Engineer (DSE)](https://about.gitlab.com/handbook/support/#dedicated-service-engineers) to help your staff troubleshoot and resolve any issues that your customers may encounter.
We will make every attempt to assign you a DSE that is in your time zone and if possible, having appropriate language skills.

You may contact your DSE at the email address in the README file of the [resellers project](https://gitlab.com/gitlab-com/resellers/).
This address is only for post-sales technical support. For pre-sales technical issues, please contact your local GitLab sales team.

Due to vacations, holidays, etc., sometimes your DSE will not be available, or they may need to involve others at GitLab.
For this reason, all correspondence should be in English as that is the language in common for our support staff worldwide.

When contacting your DSE, you will need to include the following for each incident:

- Name and email address of the end user reporting the problem, their GitLab.com user ID (if they have one), and their company name.
- What EE version they are using
- Salient details about their setup
- First date of issue occurrence
- Any related open bug reports, feature requests, etc. on the gitlab-ce or gitlab-ee issue trackers

Do not escalate GitLab.com or GitLab CE incidents to your DSE; instead please refer them to the normal support channels.

## GitLab Landing Page guidelines
{: #landing-page}

Your website will need to have a landing page with information about GitLab. You can see what others have done from the [Resellers page](https://about.gitlab.com/resellers).

- We would prefer your landing page to be at `yoururl.com/GitLab` where this is not possible, we would ask you to set a redirect for that URL to the actual one.
- We highly encourage your landing page to be in local language.  There are plenty of English language resources on GitLab, so providing them in the native tounge of your customers adds value.
- You should use our [Authorized Reseller Logo](#Logo) on your page, and have it link back to us at `https://about.gitlab.com/resellers`
- There needs to be a _“What is GitLab?”_ paragraph
- Where ever you mention a GitLab product or feature, there should be a link back to our corresponding item on `https://about.gitlab.com`

Here is also a list of resources that you may find useful to include on your landing page.

- [What is GitLab](https://about.gitlab.com)
- [What is GitLab EE](https://about.gitlab.com/features/#enterprise)
- [CE vs EE comparison](https://about.gitlab.com/products/#compare-options)
- [GitLab CI](https://about.gitlab.com/gitlab-ci/)
- [GitLab Geo](https://about.gitlab.com/features/gitlab-geo/)
- [Pricing](https://about.gitlab.com/products/)
- [GitLab Blog](https://about.gitlab.com/blog/)
- [GitLab Culture](https://about.gitlab.com/culture/)
- [Gitlab on Twitter](https://twitter.com/gitlab)
- [GitLab Team Handbook](https://about.gitlab.com/handbook/)

## Authorized Reseller Logos
{: #Logo}

The GitLab Authorized reseller logo should help tell your prospects and customers that we are working with you.

You should use our Authorized Reseller Logo on your materials where appropriate and in accordance with our brand guidelines.

The logos are available in the README file of the [resellers project](https://gitlab.com/gitlab-com/resellers/).


## Marketing

GitLab will strive to support you in your marketing efforts. Marketing activities should be focused on GitLab EE, and will usually fall into 1 of 3 categories:

### Event Funds Requests

We would like to sponsor events related to issues and solutions that GitLab users face every day, such as DevOps, open source and collaboration. Meetups, drink ups, hackathons, trade shows, and seminars are all examples of events that we may help you with. Leads gathered at an event that we help fund or promote are required to be shared with us. These leads will be assigned to you in SalesForce.

We will endeavor to provide funds to support up one event per reseller per quarter. We may also be able to provide speakers, promote your event, provide swag, and/or artwork for an event. Please note that a request does not mean that funds will automatically be allocated.  We need to see value in an event to provide support. **Please submit the request for event sponsorship no later than one month before the date of the event.**

*If request for sponsorship is accepted, you will be asked to provide photos of the event, participate in a blog post writing about your of the event, and provide a summary of the number of opportunities/leads gained.*

Please submit your application for event support [here](https://docs.google.com/a/gitlab.com/forms/d/1np6zx17MZ4bEwto6NR8mEv0YLprU-V_BMETX-XIRzj8/edit)

### Online Marketing Support Requests

GitLab may, at our discretion, also assist you with your advertising campaigns by providing online marketing support in your region. When requesting assistance, be as complete as you can in describing what you need, who the audience is, channels, and the expected ROI. Please apply [here](stephane@gitlab.com)

### Swag Requests
Please submit your application for GitLab branded swag [here](https://docs.google.com/forms/d/1x2qP8EyEu2Y_XmIt7txudUYh-PP_Tst6hRuNq3a7Ruc/edit?usp=sharing)
We have been known to co-fund co-branded or locally produced SWAG. Send us your idea to Stephane (stephane@ company domain).


<style>
  blockquote p {
   font-style: italic !important;
  }
</style>
