---
layout: post
title: "Why move to a single code collaboration tool?"
date: 2015-02-4
comments: true
categories:
author: Marc Radulescu
---

Say your department has five teams, and each team is running it's own code collaboration tool.
One of the team is using SVN, because it's legacy, straightforward, and still working out for them.
Other teams have moved on to a DVCS solution, but the solutions they employ are different.

All the developers are happy at this time. 
They get to use their own workflow, the one they prefer.
The team leads get to manage tools that they are already comfortable with.
You don't have to deal with people complaining that their tool sucks.

But underneath all that happiness, trouble slowly brews.

<!-- more -->

## Is there anything actually wrong?

Yes

First of all, the teams are having trouble collaborating.
When one develper gets involved in another team's project, they need to accommodate their workflow, familiarize themselves with the tool and have all their credentials set-up.
And if they are working cross-teams, then they need to keep to the old instance as well.

Second, code security is complicated. 
You've got five systems to patch for security updates and five permission schemas to enforce.
And you need to decide whether this is delegated to the team leads, or if it's you assuming responsibility for it.

Third, integrating these tools into your tool stack always needs extra work.
There's five plugins, or APIs, or services to maintain.

## But say the above is figured out.

Communication across systems works.
Security does not seem to be a concern.
Tools are integrated properly.
Then congratulations, you are inefficient!

The only reason why everything works is that someone is putting extra effort in making it work.
Your admins are spending time updating five installations in timely manners.
They spend time keeping the integration with the tool stack working.
They spend time making sure everyone gets access to the correct repositories, and issue trackers.

Is anyone paying for support over these installations?
If so, that's five agreements to maintain, and five vendors in your system.

##What is there to do?

You can free up your resources by moving to a single tool for all your teams.

This way, you're improving collaboration between teams.
With GitLab EE for instance, all the project master needs to do is press two buttons, and their project is shared with another team.
For a front-facing instance, just [switch](http://doc.gitlab.com/ce/public_access/public_access.html) to "internal" privacy and your project is now available for all the company to clone and contribute to.

Keep security management high level.
One installation to patch, [one permissions schema](http://doc.gitlab.com/ce/permissions/permissions.html).

You're also freeing up your admins from maintaining five different installations.
They don't need to schedule downtime five times anymore.

Lastly, keep it simple on the commercial side.
Once point of contact for your questions, one company to deal with if you want a new feature implemented.

##Caveats?

Sure, there might be caveats.

You now have a single point of failure.
Though, [not really](https://about.gitlab.com/high-availability/).

You now need to keep people to a single workflow.
Though, [not really](http://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows).
And even if you do want to enforce the workflow, you can choose one that's [tried and tested](http://doc.gitlab.com/ee/workflow/gitlab_flow.html)

##So what are the next steps here?

Consider a subscription to GitLab!
The subscription gives you access to a self-hosted solution that is on [feature parity](https://about.gitlab.com/features/#compare) with GitHub, and that is easy to scale. 

We can help you migrate your projects from other tools.
We will help you set a GitLab instance up.

Any questions?
sales@gitlab.com, or [request a quote](https://about.gitlab.com/subscription/form.html) and give us details on your current layout.
