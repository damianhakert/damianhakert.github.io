---
layout: markdown_page
title: "Accounting"
---

## Manual invoicing in Recurly for subscribers paying by bank transfer

1. [New account](https://gitlab.recurly.com/accounts/new)

* Account code: customer contact email address

* Username: can be blank

* Fill in First name and Last name of our contact;

* Fill in company

* Fill in VAT field (if needed)

* Tax exempt? - leave unchecked

* Fill in the rest of the company information, and add company billing address to address information area

* Press Create account

1. Press “Add subscription”

1. Select Plan Details and Quantity

1. BIlling Details -> +Edit

1. Collection method: Manual

1. Add PO number

1. Terms: Net 30 (or 60 for exceptions)

1. Terms and conditions copy and paste one of the following:

* For non-EU clients: No VAT according to article 44 and 59 of the European VAT Directive

* For EU clients: VAT shifted to recipient according to article 44 and 196 of the European VAT Directive

* Dutch clients: leave blank

Add the following information to the terms and conditions:
This order is subject to the GitLab Terms: http://about.gitlab.com/terms/
Payment via check is not possible
Please pay this invoice by bank transfer:
Bank: Rabobank, Croeselaan 18, 3500HG Utrecht, Utrecht, The Netherlands, +31302160000 SWIFT / BIC code: RABONL2U, Bank account number: 153952644, IBAN: NL48RABO0153952644

1. Press Add subscription button

## Manual invoicing in Recurly for consultancy / development / training customers

1. [New account](https://gitlab.recurly.com/accounts/new)

* Account code: customer contact email address

* Username: can be blank

* Fill in First name and Last name of our contact

* Fill in company

* Fill in VAT field (if needed)

* Tax exempt? - leave unchecked

* Fill in the rest of the company information, and add company billing address to address information area

* Press Create account

1. Press “add charge” button

1. Enter the unit amount and any other relevant details, then click the Add Charge button (it’s a good rule of thumb to include a description with the charge. The description will display with the line item on the customer’s invoice)

1. “Digital product”

1. “Collect Sales tax” checked

1. Press “Create invoice”

1. Back to the account, press “Generate invoice”

1. Collection method: Manual

1. Terms: Net 30 (or 60)

1. Terms and conditions:

* For non-EU clients: No VAT according to article 44 and 59 of the European VAT Directive

* For EU clients: VAT shifted to recipient according to article 44 and 196 of the European VAT Directive

* Dutch clients: leave blank

Add the following information to the terms and conditions:
Payment via check is not possible
Please pay this invoice by bank transfer:
Bank: Rabobank, Croeselaan 18, 3500HG Utrecht, Utrecht, The Netherlands, +31302160000 SWIFT / BIC code: RABONL2U, Bank account number: 153952644, IBAN: NL48RABO0153952644

1. Create draft sale in Twinfield

## Change customer from credit card payment to bank transfer payment

1. Customer account

1. Subscriptions -> More

1. Press Edit button

1. Billing -> + Edit

1. Choose “on next renewal”

1. Change to “manual invoice” and add invoice details

1. Press “Update subscription”

1. Invoice will be created on the date of the renewal

## Draft sale in Twinfield for clients paying by with Recurly

1. This is part of the "won deal procedure", you should have done a VIES check already

1. These are linked to Recurly transactions one-on-one, so in case of an upgrade do create a new one, do not amend the original one

1. [Twinfield](https://login.twinfield.com/) (Login: SUPER, password, Organization: COMCOASTER, Nederlands)

1. "Browser not supported" click on “Ga door naar Twinfield”

1. Select GitLab.com / GitLab B.V.

1. Google for "1 EUR in USD"

1. General => Company => Currencies => USD => Exchange rates => +Line => Save

1. Start with Accounting > Data entry > Verkoopfactuur

1. First, select a customer. If customer doesn’t exist, press asterisk button and then press “First free code”

1. Name: first their legal company name and then their filled out name in brackets 

1. Create a billing address on the basis of their recurly order (add the state to the zipcode)

1. Fill in the t.a.v. with name of contact person

1. Don't fill in the email address

1. BTW nummer (VAT number): to be filled for EU clients

1. No need to add KVK number

1. Click save

1. Currency: USD (or EUR in rare cases)

1. Amount (incl VAT): Total amount from Recurly invoice (incl VAT if invoiced)

1. Factuurdatum/Invoice date: date from Recurly

1. Factuurperdiode: equal to the month of the Recurly order

1. Due date: can leave blank 

1. Not in collection run: leave blank (default)

1. Credit verkoopfactuur: leave blank (default)

1. Invoice nr.: enter the invoice number from Recurly

1. General ledger account for GitLab B.V.

* Subscriptions -> 80000 Omzet Abonnementen

* Hourly -> 80100 Omzet consultancy and development

VAT: IMPORTANT TO CHECK THAT CATEGORY MATCHES THE COUNTRY IN THE INVOICE!

![VAT](images_sales_process/vat1_sales_process.png) 

1. VAT category: Always diensten / services and date is date of invoice

1. If VAT Country and VAT number are not auto-populated under VAT category, just refresh

1. Line Amount(excl. VAT): amount from Recurly

1. Delete the second line

1. As a description (in both fields) use: Recurly xxxx (invoice #)

1. Provisional (no need to make final)

1. Message saying that a provisional sale was created appears on the screen

1. For hourly invoices add the invoice nr. to the [GitLab Sales Sheet](https://docs.google.com/spreadsheets/d/1rwYhbIYkd09CtIyp1LXdoW-cW-zZ_HVhLzF9AIcrNVI/edit#gid=1)

## EU VAT VIES check

Do the VIES check before sending an invoice to a EU client (not needed for Dutch clients)[VAT request](http://ec.europa.eu/taxation_customs/vies/vatRequest.html) print to PDF, email the resulting page to Sytse with the invoice.

GitLab.com VAT nr. is NL 137696735B02

GitLab B.V. VAT nr is NL 853740343B01

## Consolidated invoices

1. If a customer decides to commit both to a subscription and development work in one go, then we create a consolidated invoice immediately after the PO

* In case we worked extra for the development, we create new invoice with extra amount

* In case we worked less, we issue a credit invoice for the reminder

It is preferred to avoid both the above cases (extra work for us)

## Correcting an invoice for a customer who forgot to add VAT number when subscribing via Recurly

1. Check whether customer want the VAT number added

1. Perform the EU VAT VIES check

1. Recurly -> Accounts -> identify account -> invoice -> refund invoice -> uncheck Prorate -> Refund invoice

1. Update Billing info with VAT number

1. Charges and Credits -> Add charge

* Amount (per Unit): same as on original invoice

* Tax Type: Digital product

* Quantity: same as on original invoice

* Description: same as on original invoice

1. Add charge

1. Generate invoice -> Post invoice

1. Twinfield: create three draft sales, one for each invoice (original one but with line item price changed so that VAT checks out, credit one but with line item price changed so that VAT checks out, correct one)

## Crediting an old Recurly transaction (more than 1 Q old)

1. Assuming new invoicing dashboard

1. New invoice

1. Identify old Recurly invoice

1. Date is date of original invoice

1. Top text: in-depth explanation on the reason behind the credit invoice

1. Items just like in original invoice, but with negative amounts

1. Fill out the ICL details if needed (Services, date of new invoice)

1. Send PDF

1. Send the credit invoice to the customer (this is legally required)

## Crediting a transaction made in Recurly from about.gitlab.com

1. [Invoice refunds](https://docs.recurly.com/invoices#invoice_refunds)

1. Create a "draft sale" in twinfield with negative amount from invoice

## Customer accidentally created a new subscription instead of updating the new one, both in the same account

1. Customer account -> find new subscription -> More

1. “Cancel Subscription”, full refund

1. Find original subscription -> More

1. Change to correct number of user packs

1. Press “Update subscription

1. Inform customer of the changes

1. Draft sale in Twinfield

## Using Recurly to invoice hourly clients (or special order) by credit card

1. For an existing client you can skip the first two steps

1. We create an account for the customer on Recurly

1. We email them a link to their hosted account management page to enter billing information

1. We open the customer’s account and click the Add Charge button in the Charges and Credits section

1. Enter the unit amount and any other relevant details, then click the Add Charge button (it’s a good rule of thumb to include a description with the charge. The description will display with the line item on the customer’s invoice)

1. Keep the “Collect Sales Tax” button checked; Type: Digital Product

1.This will create an uninvoiced charge on the customer’s account. By default, this charge will be automatically rolled into the customer’s next subscription renewal invoice. If you’d like to collect this charge immediately, click the Generate Invoice button on the customer’s main account page

1. Customer notes:

* Non-EU clients: No VAT according to article 44 and 59 of the European VAT Directive

* For EU clients: VAT shifted to recipient according to article 44 and 196 of the European VAT Directive

* Dutch clients: leave blank

1. Review the invoice details and click the Post Invoice button

1. Draft sale in Twinfield

1. Once the invoice is posted, Recurly will automatically collect on the invoice during our next automatic bill run (typically at the top of every hour). You will see the account’s balance go back to $0.00 when this charge is successfully processed

## Customer wants to update their Recurly account or billing information

1. Each Recurly account has a hosted account page where they can manage their information. The link is in Recurly -> accounts -> account name -> Hosted pages information.

1. Use the Hosted Account Management URL to go directly to the page without logging in.

Additional documentation [here](https://docs.recurly.com/hosted-account-management)

## Email templates customization
In the Recurly email templates for "New Subscription", "Payment Confirmation" and "Payment Declined" we added the following:
This subscription is subject to the [GitLab Subscription Terms](http://www.gitlab.com/terms/#subscription)

* For companies outside the EU: No VAT according to article 44 and 59 of the European VAT Directive. 

* For companies within the EU where no VAT is invoiced: VAT shifted to recipient according to article 44 and 196 of the European VAT Directive.

### Coupon code for special pricing

1. Go to [new coupons](https://gitlab.recurly.com/coupons/new)

1. Coupon name: organization name (e.g. Penn State)

1. Coupon code: half-random, recognizable as custom (e.g. pennstate123abc)

1. Discount: percentage

1. Lifespan: Forever (default)

1. Limit to specific plans: yes

1. Max Redemptions: 1

1. Redeem by Date: in 60 days

1. Include the coupon code in the quote