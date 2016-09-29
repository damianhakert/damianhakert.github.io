---
layout: markdown_page
title: FAQ about subscriptions and licensing
---

### Is there educational pricing?

GitLab's Educational pricing is that for educational institutions, students do
not count towards the user count. The purchase of at least one subscription is
required.

### How is GitLab EE licensed?

Every person with a GitLab account that is not blocked by the administrator
is a user and should be counted in the subscription.

### What is a user
A user is defined as an individual authorized by the customer to use their GitLab 
server. Robots, bots and other automated accounts not linked to a person do not 
count towards the user count. Guests, reporters, managers and people which access
to an on-premise GitLab server DO count towards the user count, even if they do 
not have access to the source code.

### Can I get an evaluation license of EE?

It is possible to obtain a free evaluation license of our enterprise edition for
a 30 day period for up to 100 users. Please visit our [pricing page] to sign up.

[pricing page]: https://about.gitlab.com/pricing

### What will happen to my evaluation license key at the end of the trial period?

When you decide to purchase a subscription, you will be issued a new license key
dependent on the type of subscription you sign up for. Should you not take out a
subscription, your license key will expire at the end of your evaluation period.

### Can I add more users to my subscription?

GitLab follows a True-Up model so you can grow now and pay later. You can add
more users to the server than what you are licensed for at any time. For users
that are added during the year you pay half price when you renew.

### The True-Up model seems complicated, can you illustrate?

Under the true-up model you pay 50% of the annual cost of a license upon your renewal for the historical maximum number of users added during the year
and you renew for that same amount of users or higher. Example, if you have 100 active users today, you should purchase a 100 user subscription.
Suppose that when you renew next year you have added 300 users during the year (200 additonal users). When you renew you pay for the maximum user 
count, 300, and you also pay half a year for the additional 200 users that you added during the year. For Customers that have pre-paid all Fees 
for multi-year subscriptions, on each anniversary of the Effective Date during the term of this a new license key will be provided, and a True-Up 
will be conducted. All additional users purchased shall be co-terminated through the end of the original Subscription period and a new license key 
will be issued.

Example
* Original 100 seats @ $39 = $3900
* Upon renewal additional 200 users added for a total of 300 users.  300 users x $39 = $11,700 + 200 additional users x $19.50 ($39/2) = $3,900 for a total amount at renewal of $15,600

Example for prepaid multi-year deal
* Original 100 seats @ $39 for 3 years = $11,700
* Upon first annual anniversary additional 200 users added for a total of 300 users.  200 additional users x $19.50 ($39/2) for year 1 = $3,900 plus 200 additional users x $39 for year 2 and year 3 = $19,500 to be paid at first anniversary of license effective date.

### Do students have to pay or do they receive a discount?

GitLab's Educational pricing is that for educational institutions, students do
not count towards the user count. The purchase of at least one subscription is
required.

### Do non-profits have to pay for the Enterprise Edition?

Non-profits can use GitLab Community edition for free but need to purchase a
subscription to the Enterprise Edition at our published rates.

### Why does GitLab use licenses?

The code for Enterprise Edition is open and can be inspected by anyone. This
makes it easier to offer a trial of Enterprise Edition.

### Can anyone download GitLab EE?

Yes, but it will not be functional without a license key.

### How does the license key affect customers?

Customers can now download and inspect the code for the latest GitLab EE version
for free. However, they cannot use it without a valid subscription. They also
cannot make any modification to the GitLab EE code.

### Do blocked users count towards total user count?

No, only _active_ users count towards total user count. See the blue number in
the screenshot below which your administrator can find under **Administration** >
**Users**.

![Active user count](/images/active_users_screenshot.png)

### How does the license key work?

The license key is a static file which, upon uploading, allows GitLab Enterprise
Edition to run. During license upload we check that the active users on your
GitLab Enterprise Edition instance doesn't exceed the new number of users.
During the licensed period you may add as many users as you want. The license
key will expire after one year for GitLab subscribers.

### How do I upgrade GitLab EE to 7.11 or above?

After you upgrade GitLab to EE version 7.11 and higher, GitLab EE will stop
working without a license key. If you don't have a license key, please contact
[sales@gitlab.com] and request a key. Once you deploy the key, then GitLab EE
will start functioning again.

### What happens when my subscription is about to expire or has expired?

- Starting 30 days before the subscription end date, GitLab will display a
  notice to all administrators informing them of the impending expiration.
- On the day the subscription expires, nothing changes.
- 14 days after the subscription has ended, GitLab will display a notice to all
  users informing them of the expiration, and pushing code and creation of
  issues and merge requests will be disabled.

### Do I need an additional license if I run more than one server (e.g., for backup, high availability, failover, testing, and staging)?

No, if your GitLab Enterprise Edition servers cover the same users, you can use
the same license file for all of them.

### What happens if I decide to not renew my subscription?

14 days after the end of your subscription, your key will no longer work and
GitLab Enterprise Edition will not be functional anymore. You will be able to
downgrade to GitLab Community Edition, which is free to use.

### How does GitLab deal with bug fixes?

Bugs that are reported to us always have a high priority, no matter which
subscription you have. In most instances they will be fixed in the next release
or the release after that, which means the turnaround is one month or two.
Severe bugs will be fixed earlier in a patch release.
