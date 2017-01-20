---
layout: markdown_page
title: "Finance Standard Operating Procedures"
---

---

## On this page
{:.no_toc}

- TOC
{:toc}

---

## Finance Standard Operating Procedures Purpose

Processes for Finance

## Processing Payroll
<a name="payroll"></a>

### GitLab Inc. Payroll Procedures
<a name="payroll-inc"></a>

1. You will receive a reminder from TriNet the week before payroll closes for each pay period.
1. If you are handling payroll changes- the email will let you know by what date you must submit those changes.
1. Enter the dates into your calendar with a reminder for the day before the deadline.
1. Log into TriNet Passport
1. My Company=>My Workplace=>Payroll Entry & Admin
1. You are now on the payroll dashboard
1. Select the current pay period from the calendar screen in the middle of the page.
1. Each employee will have a row with the information necessary to document hours (if hourly) and other earnings (this can be commission, reimbursement, etc. There is a drop down menu of options and codes from which to choose).
1. After you have updated each employee, select the save button.
1. Do not use the Submit button. It will make adding last minute changes difficult and TriNet will take your last save when processing payroll.
1. Make sure that you calculate the hours based on the pay days (count them) for each pay period.

#### Additional Begin/End Payment (for adding payment to payroll)

1. In HR Passport click Find
1. Select find by Name
1. Click on Add’l Begin/End Payment
1. Select Action Type
1. Select Begin & End date (End date is optional.  Note: The Begin date needs to be the start of a pay period,  it cannot be in the middle or end of a pay period)
1. Enter Goal Amount (if applicable)
1. Enter the Earn Type
1. Enter the amount per pay period
1. Enter pay frequency

Please see People Ops for more information on [making changes in TriNet](https://about.gitlab.com/handbook/people-operations/sop/#making-changes-in-trinet).

### GitLab BV Pay Slip Distribution Process
<a name="payroll-bv"></a>

All GitLab BV employees receive their payslips within their personal portal of Savvy.
They can login and download their payslip to their computer if needed.

## Invoice Processes  

### Processing payment for invoices

1. Upon receipt of vendor invoices:
    * File a .pdf copy of the invoice to dropbox\For Approval.
    * Notify manager of new invoices to be approved by forwarding the email from the vendor.
    * Invoices are to be approved based on signed agreements, contract terms, and or purchase orders.
    * After review, manager to reply to email with “Approved”. An audit trail is required and this email will serve this purpose.
1. On approval, move the invoice from dropbox\For Approval to dropbox\Inbox
1. Post the invoice through accounting system. Before paying any vendor (for Inc. only), be sure there is a W-9 on file for them.
1. On a daily basis, generate an AP aging summary from the accounting system and identify invoices to be paid.
1. Initiate payment(s) through the bank (Comerica/Rabobank) and notify management that there is a pending payment.  Include a summary of invoices being paid.
1. Verify the payment has cleared the bank.
1. Upon verified payment of the invoice move the .pdf copy of the invoice from dropbox\Inbox to folder inbox\”vendor name”.
1. Post the payment through the accounting system.

### Netsuite

Invoices will arrive by email to ap@gitlab.com.

1. Forward email to Sytse for approval.
1. Create a .pdf copy of Sytse's approval response.
1. File the invoice and approval in dropbox\GitLab Inc\inbox.
1. Enter invoice in Netsuite

#### Entering a Bill (invoice) in Netsuite

1. Click on "+" on the Home screen
1. Click on "Bill" under  Vendors
1. Enter the vendor name.  If new, enter Company name, address, terms, and Tax Id (from w9).  Enter bank info in the "Notes" field.
1. Enter terms if not auto filled based on customer setup.
1. Enter Bill date.  The due date will auto fill.
1. Enter Bill no.
1. Enter Account
1. Enter description
1. Enter amount
1. Enter Class (Department) -  Must be entered if the account you  entered in step 7 is an expense account.
1. Add attachments: Copy of invoice and email approval
1. Save and close

## Commission Payment Process
<a name="commission"></a>

1. Each sales person will receive their own calculation template.
1. Salesperson is to complete their monthly template four days (payroll will send reminder) prior to first payroll of the month. Upon completion, salesperson will ping a manager for review and approval.
1. Approving manager will ping accounting upon approval.
1. Accounting will review and reconcile paid vs unpaid invoices.
1. Accounting will note in calculation template the amounts to be paid in commission.
1. Accounting will ping payroll that commission calculation is complete.
1. Payroll will enter commission into TriNet.

## Accounts Receivable
<a name="ar"></a>

### Invoicing

1. In Recurly, export the "Invoices All" Report. For time period, set the end date to the day prior to the current date. Download the .CSV File.
1. Open the "Revenue-Inc" Excel file found in Dropbox\GitLab Inc\Revenue. This workbook contains all the orders already invoiced in Netsuite to date. In the workbook go to worksheet named “Amortization”
1. Go back to the "Invoices All" report you just downloaded from Recurly. This is a month to date report so it will contain orders which have already been invoiced in Netsuite. Column "L" indicates the date the Recurly invoice was created. We want to select the orders which have not been invoiced in Netsuite, which would be any orders after the last Netsuite invoice batch. Copy the rows for the uninvoiced orders and "insert copied cells" to the next row after the last transaction of the "Revenue -Inc" report.
1. Open Netsuite. Click on the "+" sign at the top middle of the screen. Under "Customers" click on "Invoice"
1. In the "Revenue-Inc" workbook, locate the first invoice # to be invoiced (Column D).
1. Open the invoice in Recurly.
1.  Netsuite
    * Refer to the Recurly invoice you opened in step 6.
      * Choose the customer. If new, add new customer.
      * Choose the Terms -- Credit Card = Due on Receipt.
      * Choose the Invoice Date - Use the same invoice date as the  Recurly invoice.
      * The Due date will auto-fill depending on the terms you selected.
      * Input the invoice number to match the Recurly invoice number.
      * Choose the Product/Service from the dropdown menu.  If you need to add a product, click add new.  If adding a new license product be sure the Income Account you select is "Deferred License Revenue".
      * Enter the description if necessary.  This field auto populates, however it may not match the description of the Recurly invoice and this is what we want.  Cut and paste the description from the Recurly invoice if necessary.
      * Additionally,  add the subscription period after the description.   The period is found under the Date field on the Recurly invoice.
      * Enter the QTY from the Recurly invoice.
      * Enter the RATE from the Recurly invoice.
      * The Amount will auto-populate but ensure that it matches with Recurly.
      * CLASS field can be left blank.
      * If applicable, enter the PO number  to field “Message displayed on invoice”.
    * If this is a credit card order, the Amount Due on the Recurly invoice will show $0.00. The Netsuite invoice will show a Balance Due. This is correct as it will not show as paid until a payment is posted in the cash receipts process.
      * Save and close the invoice. You may get a warning about a missing Class field.  Click yes to proceed.
      * Proceed to invoice the remainder of new orders.  Do not invoice transactions marked “Failed”

1.  In Netsuite, export an invoice report for the batch you just invoiced.
      * Under the transactions tab on the left,  select  Sales
      * Click on Filter
      * Type = Invoices
      * Status = All statuses
      * Delivery Methond = Any
      * Date = Custom
      * From To = The date range for the invoice batch.
      * Customer = All
      * Click Apply
      * Export the report to excel.
      * Sum up column "G" and compare to the sum of column "Q" of the Recurly "invoices all" report.  If the totals match, the invoicing cycle is complete.  If the totals do not match, reconcile between the two reports and find the variance.  You may have missed an invoice or made a data entry error.

At this point the invoicing process is complete. Now, continue on to the Cash Receipt posting process for those invoices that were paid by credit card.

## Cash Receipt
<a name="cash-receipt"></a>

### Credit card customer

Follow this procedure if the customer paid by credit card.
You may recall from the invoicing process that there was still a balance due when saving the invoice.  The following steps will record the payment and remove the balance due.

1. Login to Stripe dashboard and click on Payments under Transactions (left hand side). You will see a listing of the latest Stripe transactions listed by amount, Recurly transaction, name, date, and time. There is also an option to filter the report by clicking on XXX at the top left. Click on XXX to export to excel. This will give you a workbook area and also a breakdown of the fees which we will work on later.
1. In Netsuite, click on the "Transactions" tab on the left.
    * Click on the orange "OPEN INVOICES " tab. This will bring up all open invoices listed by date, invoice #, customer, etc.
1. Match invoice #s  between the Stripe dashboard and Netsuite. If you click on a transaction in the Stripe dashboard, it will take you to a screen that shows more detail, including the invoice # being paid. You can work your way from the bottom up.
1. In Netsuite, click "Receive Payment" on the matched payment and invoice.
1.  Receiving the payment
    * Enter the payment date, which is the payment date from Stripe dashboard.
    * Payment method = Credit Card.
    * Reference no. = "Recurly Transaction ID:" found under Metadata in Stripe dashboard.
    * Deposit to = Stripe.
    * Netsuite will auto-fill the payment amount with the entire balance due. No need to change this unless the payment amount from Stripe is different.
    * Click on "Save and Close".
    * Repeat the above for all the remaining invoices that were paid by credit card.

1. Post a journal entry to record Stripe Fees.
    * In QNetsuite, click on the "+" sign. Under "Other", select "Journal Entry".
    * It is okay to leave the journal date as long as it is within the month the fees were incurred. If not, change it to the last day of the month.
    * Netsuite will auto fill the journal number. Do not change.
    * Account #1 Entry
      * Fill the "Account #1" entry with "Credit Card Transaction fees".
      * Fill the "Debits" entry with the value from the Stripe report that was exported. The value will be the sum of "Column I" in the Stripe report, which is the fee amount. Be sure to only sum the rows which you just posted payments for.
      * Leave the "Credits" entry empty.
      * Fill the "Description" entry with "To record credit card transaction fees for period (enter the date range for the transactions posted)".
      * Leave the "Name" entry empty.
      * Fill the "Class" entry with "Sales".
    * Account #2 Entry
      * Fill the "Account #2" entry with "Stripe".
      * Leave the "Debits" entry empty.
      * The "Credits" entry will autofill. This should be the same amount as the "Debits" entry for Account #1.
      * The "Description" entry will autofill. This should be the same as the "Description" entry for Account #1.
      * Leave the "Name" entry blank.
      * Leave the "Class" entry blank.
      * Click "Save".

This transaction transfers the payment obligation from the customer to Stripe.  The payment obligation from Stripe is removed when Stripe transfers  the funds to GitLab's bank account.

### Posting a payment from Stripe when a transfer is received from Stripe.

Post a journal entry:
1. Fill the "Journal Date" with the date that payment was received in the bank.
1. Fill the "Credit Account" with Stripe.
1. Fill the "Debit Account" with "Comerica Checking - GitLab Inc."
1. Leave "Name" blank.
1. Leave "Class" blank.
1. Fill the "Description" with "To record Stripe transfer (date of transfer)".
1. Click "Save".

### Posting a payment from a “bank customer”

In Netsuite:
1. Click on the “+” sign.
1. Click on “Receive Payment” under Customers.
1. Fill the "Payment Date" with the date payment was received.
1. Fill the "Payment Method" choose from the dropdown menu.
1. Fill the "Reference No." with the check # or bank reference # from incoming wire.
1. Fill the "Deposit to" with "Comerica Checking".
1. Fill the "Amount Received" with the amount received from the incoming wire.
