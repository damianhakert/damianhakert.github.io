---
layout: markdown_page
title: On-Call
---

We use [PagerDuty](http://gitlab.pagerduty.com/) to
set the schedule, and to route the notification to the right on-call hero.

Rotation is currently set to be a weekly-follow-the-sun schedule, with weekends handled separately.

## Expectations for On-Call

Our [main on-call schedule](https://gitlab.pagerduty.com/schedules#PIQ317K) "follows the sun"
meaning that in principle people are on-call who are already awake. In the weekends, one individual
has 24/7 duty, but this happens every _N_ weekends, where _N_ is the number of on-call heroes.
If you are on call on the main schedule, then you are expected to be available and
ready to respond to emergency tickets or GitLab.com downtime reports as soon as possible,
but certainly within any response times set by our [Service Level Agreements](https://about.gitlab.com/handbook/support/#sla). This may require bringing
a laptop and reliable internet connection with you if you have plans outside of your work space
while being on call, as an example.

There are three fallback schedules; named fallback 1, 2, and 3. The first two are also
"follow-the-sun" schedules, while the 3rd provides 24/7 coverage for a week at a time.
People who are on the fallback schedules will receive a ping from PagerDuty if the main on-call
person does not respond quickly enough (5 mins). After some more time, the ping goes to Fallback 2, and
so on. You can view this [escalation policy](https://gitlab.pagerduty.com/escalation_policies#PKV6GCH)
on PagerDuty. If you are on any of the fallback schedules, you are expected to respond
if PagerDuty pings you, if possible, since it means that all of our response layers
before yours were unable to get to PagerDuty quickly enough to acknowledge the emergency.
However, if you are on a fallback schedule, then you do not need to adapt your plans
as would be expected if you are on the main schedule.

_As noted in the [main handbook](https://about.gitlab.com/handbook/#paid-time-off), please make sure you take off time after dealing with an incident outside of your regular business hours, so that you can continue your day and work well-rested._

## Swapping On-Call Duty

To swap on-call duty with a fellow on-call hero:

- create an issue on our [internal issue tracker](https://dev.gitlab.org/organization/issues/new)
to announce for what block of duty you need to make a swap. Do this as far as possible in advance,
but certainly no later than 2 weeks before the swap needs to be made. @mention your colleagues.
- once a replacement has been found, input this as an override on the main schedule in PagerDuty.
This is done by clicking on the relevant block of time in PagerDuty, selecting "override" and
filling in the name of the person you swapped with. Also see [this article](https://support.pagerduty.com/hc/en-us/articles/202830170-Creating-and-Deleting-Overrides) for reference.
- use the "GitLab Pagerduty Override Balance" google sheet to note your swaps: it
is set up so that you can incur a positive ('pay it forward') or negative balance of on-call blocks
taken over for others which allows for more flexibility and prevents having to
negotiate around undesirable days as may occur when doing direct swaps. However,
you can also do a direct swap with a team member, and there is no need to mark that in the sheet.
