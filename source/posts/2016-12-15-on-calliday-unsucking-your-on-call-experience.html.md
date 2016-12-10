---
title: "On-Calliday: Unsucking your on-call experience"
author: Amanda Folson
author_twitter: Ambassadorawsum
categories: inside gitlab
image_title: '/images/default-blog-image.jpg'
description: "In spirit of the rapidly approaching holidays, we figured we’d share this talk on how to schedule on-call rotations to prevent burnout. Cheers to all the folks working over the holidays."
---


<!-- more -->

My name is Amanda Folson and I’m a developer advocate at GitLab. Prior to that I worked at PagerDuty, and I've been a career developer and worked in Ops-type roles. 

Some of the content here is based on my own experiences while other stuff is industry best-practice. I realize that best practice is a pipe dream, but this is a pain point for people we should be trying to improve.

Being on call sucks because you’re losing out on sleep - people get divorced over this! There are too many things to take care of while on call

### What if I told you it could be better?

Would you believe me? We’re going to talk about some things you can do to help unburden you from your on-call experience.

There’s no silver bullet and not all of these things will apply to your organization, but leveraging a few of them can help tremendously.

Let’s talk about burnout for a second because this is what we’re trying to prevent.

This stuff is useful for you as an employee and as an employer to keep tabs on yourself and your team.

### Four Phases of Burnout
* Caution: You feel like you’re not providing value so you try to prove yourself by working more. You might feel down on yourself. 
* Warning: You start to ignore your own needs in favor of working. Sleep, family, and hobbies become secondary priorities to you. You might panic. You work all the time and sleep like crap.
* Danger: This is the point where you need to REALLY start seeking help. Your behavior starts to change at this stage. You might become aggressive or withdraw from serious commitments and social functions, or start engaging in risky behavior. You might be so anxious about all of the work you have to do that you end up not doing anything at all.
* Emergency: If you’re in this zone you need to seek help immediately. In this stage you might feel empty and engage in even riskier behaviors. Many people are depressed at this stage, and it’s not uncommon for people to have suicidal thoughts.

At this point it's worth remembering that work can actually kill you.

### Why am I bringing this up?

First of all, there’s a lot of stigma about this and I feel that talking about it helps to reduce some of that. 

Doctors in Sao Paolo did a study of physicians who were on call and found that there was an extremely high rate of burnout amongst on call professionals. You might be thinking, “But I’m not a doctor.” No, but the same rules appear to apply to non-physicians as well. It shouldn’t surprise you to hear that burnout occurs more in people who have sedentary lifestyles -- many of us do! It’s no surprise that people on call get burnt out, and this is especially true if you’re the only person who is ever on call. Stress and not sleeping will do that to a person.

Scientific American notes that burnout tends to happen in high-stress environments where needs are not met:

Not enough sleep
Not enough money
Poor diet
Catered lunches and snacks aren’t always healthy
“Quick lunch” usually means fast food
If you’re busy you’ll graze on chips
Not enough water -- a lot of us live on soda
Too much emphasis on performance over staying healthy
We work in an industry that likes to move FAST, and it’s creating a scenario where we’re all afraid of underperforming
We’ll stay late to GSD
We’ll take on more than we can handle because we’re incapable of saying no
Afraid of getting fired for saying no
We don’t take vacation because we’ll have to catch up


### So what can we do to address this and make our on call experiences suck a little less?

Being prepared is worth its weight in gold.

Simple things like keeping your laptop and phone charged go a long way.

Keep a snack handy so you’re never caught without food
This is good advice in general but it’s hard to focus on something when you’re stressed AND hungry.

Everyone *knows* they should be doing these things, but a lot of people don’t have this stuff handy when they need it.

People become complacent and don’t do this - especially if they’re burnt out.

### Before your shift begins, make sure everything is in order.

Pay important bills 
Run errands you’ve been putting off
Try to set yourself up to have an easier work week
This is all common sense stuff that people often overlook.
People forget and go to movies/events
This happens ALL THE TIME
Relax, it’s not the end of the world
If you’re ready to go, this becomes less scary
If you don’t have reception, get to a place that does and go grab your laptop.
It’s not an emergency  if you have a secondary on call person
But they might be salty if they get paged after you don’t respond
Those are things YOU can personally do to get ready

### How do we make being on call easier from an employer standpoint?

* We can start by setting better schedules.

Start and end your on call rotations in the middle of the day
Gives staff an opportunity to go over problems they experienced on shift
Gives staff a chance to actually hand off information
Gives staff a chance to ask questions about incidents that occurred

Start and end your shifts mid week
Avoids many bank holidays
Gives people time to triage issues they saw over the weekend before someone else takes over

Don’t start or end shifts on a weekend
You miss out on everything mentioned above

Be mindful of holidays
Never start/end a shift on a holiday -- people aren’t around
If you have international staff, see if they can cover this
Not all US holidays are holidays elsewhere!
Share the load across the team if you can so that one person isn’t on call the whole day
Gives employees a chance to spend holidays with family and not stress out

* Vacation
Keep track of how many people are taking vacation days/when
Actually take vacation. Force people to if you need to.
This is extremely important for recovering and preventing burn out
This will make going on call suck less

* Select the right shift length 

Common shift lengths
   * 8 hours
Great for people who are covering a business day. Might start at when someone comes in and end when they leave (or up to 3 hours after leaving) before another team takes over. 3 hours after leaving so that work they did during the day has time to settle. Useful for people who are doing deploys during the day as they’re around to fix issues that arise without anyone else getting paged for it
   * 12 hours
Great for people who are covering an overnight
Swing shifts
Follow-the-sun rotations. What do I mean by follow the sun? Just as it sounds, rotation that follows daylight. Everyone is on call during their local business hours. Someone starts at 9am, someone starts at 9pm -- Still allows for a hand off and isn’t middle of the night.
   * 24 hours
Really common and relatively low stress if you have several people on a team. No one has a “rough week” -- equal opportunity for everyone to have a rough night. Shift is over before you know it.
   * 1 week
Typical for small AND large teams
Great if you want to have longer periods of rest between shifts
4 people means you’re off call for 3 weeks at a time
BAD STUFF:
LONG, especially if stuff is on fire multiple nights
Most likely to lead to burnout

* What length rotation should I use? 
There’s no one-size-fits-all solution to scheduling.
Typically tell people to not do weekly rotations unless they have mature monitoring in place
It’s better to proactively monitor and adjust schedules as needed

* Scheduling Overrides
Never be afraid to adjust the schedule
Think of schedules as a living calendar that’s flexible and open to improvement
Even the best theoretical schedule won’t stand up to actual use -- iterate!
A lot of people “set it and forget it” which is absolutely the wrong approach to schedule management
People are dynamic and their needs change. You schedule should reflect that.

### Don't make the pain in vain

A chance of being woken up in the middle of the night is never going to be amazing. You can do a lot to decrease the likelihood of it. If you have to be woken up, make it worth the pain and make the time count. 

### Make the data count

Many companies rely on being woken up and the buck stops there.
They have basic monitoring set up but don’t do anything with the data
Collect data -- you can’t afford not to.
Lots of utilities exist to help you collect data and make use of it
You should be auditing this information
DO POST MORTEMS -- TALK ABOUT ISSUES AND LOOK FOR PATTERNS
FIX ISSUE PATTERNS
If you notice that something happens at 2am every few days, you can dig in and fix that

### Tooling matters
Many tools exist to help you manage scheduling and data aggregation
I worked at PD, but this isn’t a plug for them. Plenty of alternatives exist.
You should definitely be using one of these to help you, even if you’re only one person
All of these tools will help you schedule rotations, all of them allow you to set up complex schedules
Every single one of them is designed to tell you when people are getting woken up and what’s waking them up

### Keep your staff sharp
Keep your staff on their toes. Run drills where you knock things over in a controlled environment and practice putting out those fires.

### Incident response

Learn how to do incident response
You can actually learn a lot from ACTUAL firefighters
I learned a lot from 3 guys at Blackrock
They were actual firefighters turned ops guys who go around teaching ops orgs how to handle incidents better
When there’s a fire, there’s an incident commander
Someone in charge of directing everyone else
THIS DOES NOT HAVE TO BE A MANAGER, RANK DOES NOT MATTER HERE
This person is responsible for checking in on everyone for status updates
This person assigns a scribe to take notes -- they should NOT be taking notes at this time
Sometimes it’s unavoidable for them to take notes -- try to record calls if you can for better notes later

### You write it, you wear it
The people who are writing the code, deploying the infrastructure, or touching the guts should be involved in the on-call rotation somehow.
These are the best people to fix issues -- they’re the ones that know it in and out
If you don’t have these people on call, I’m going to boldly say you’re doing it wrong
If you do nothing else in this talk, do this.




_Tweet us [@GitLab](https://twitter.com/gitlab), and check out our [job openings](https://about.gitlab.com/jobs/)_

_Follow Amanda [@AmbassadorAwsum](https://twitter.com/AmbassadorAwsum) on Twitter_




