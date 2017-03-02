---
layout: markdown_page
title: On-Call
---

## On this page
{:.no_toc}

- TOC
{:toc}

----

We use [PagerDuty](http://gitlab.pagerduty.com/) to
set the on-call schedules, and to route notifications to the correct on-call hero. There is one rotation for Production related emergencies (i.e. GitLab.com downtime), and another for Customer Emergencies. These each have their own schedules, on-call heroes, and escalation policies.


## Expectations for On-Call

- If you are on call, then you are expected to be available and ready to respond to PagerDuty pings as soon as possible, but certainly within any response times set by our [Service Level Agreements](https://about.gitlab.com/handbook/support/#sla) in the case of Customer Emergencies. This may require bringing a laptop and reliable internet connection with you if you have plans outside of your work space while being on call, as an example.
- We only have 1 person at any time doing on call, we avoid having fallbacks because that leads to ignore pages because "the next fallback will pick it up", we take on call seriously.
- As noted in the [main handbook](https://about.gitlab.com/handbook/paid-time-off), after being on call take time off. Being available for issues and outages will wear you off even if you had no pages, and resting is critical for proper functioning. Just let your team know.

### Swapping On-Call Duty

To swap on-call duty with a fellow on-call hero:

- create an issue on the [organization issue tracker](https://gitlab.com/gitlab-com/organization/issues/new)
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


## Customer Emergency On-Call Rotation

- We do 7 days of 8 hour shifts in a follow-the-sun style, based on your location.
- After 10 minutes, if the alert has not been acknowledged, _everyone_ on the customer on-call rotation is alerted. After a further 5 minutes, management is alerted.
- You can view the [schedule](https://gitlab.pagerduty.com/schedules#PIQ317K) and the [escalation policy](https://gitlab.pagerduty.com/escalation_policies#PKV6GCH) on PagerDuty.
- After each shift, _if_ there was an alert / incident, the on call person will send a hand off email to the next on call explaining what happened and what's ongoing, pointing at the right issues with the progress.


## Production Team On-Call Rotation

- We do 7 days of 12 hours shifts in a follow-the-sun style, based on your location.
- After each shift the on call person will send a hand off email to the next on call explaining what happened and what's ongoing, pointing at the right issues with the progress.
- If nothing happened, consider sending an email to just let the next on-call be aware that nothing has happened.
- We track metrics on uptime first, then on time to fix (TTF). We do so to understand where the pain is, and how much time are we investing in fixing a problem and use those metrics to drive automation priorities.
- Escalation will page everyone on the on call rotation in 15 minutes, and if that fails it will page up in the management chain.
- When being on call prioritize work that will make the on call better (that includes building projects, systems, adding metrics, removing noisy alerts). We strive to have nothing to do when on call and to have meaningful alerts and pages. The only way that this will happen is by investing time in automating ourselves out a job.
- The main expectation when being on call is to triage the urgency of a page: if GitLab.com is down look for the right [runbook](https://dev.gitlab.org/cookbooks/runbooks) and do your best to bring it back up, but If you don't know what to do use your phone to call someone to help out.



### How to page current production on-call

From Slack you can page by using the slash pd command, like so: `/pd message for the on call`

This will trigger high urgency notification rules and escalates as needed.

## Adding and removing people from the roster

In principle, it is straightforward to add or remove people from the on-call schedules, through the same "schedule editing" links provided above for setting overrides. However, **do not** change the timezone setting (located in the upper left corner of the image below) unless you absolutely most certainly intend to. As indicated in the image below, when editing a schedule (adding, removing, changing time blocks, etc.), make sure you keep the timezone setting in the upper left corner constant. If you change the timezone setting, PagerDuty will _not_ move the time 'blocks' for on-call duty, but instead it will assume that you meant to keep the selected time blocks (e.g. "11am to 7pm") in the _new_ timezone. As a result, your new schedule may become disjointed from the old ones (old = the schedule as set _before_ the "change on this date" selection), and gaps may appear in the schedule.

![](/handbook/on-call/changing_pagerduty.png)
