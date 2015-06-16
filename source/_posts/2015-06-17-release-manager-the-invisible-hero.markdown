---
layout: post
title: Release Manager - The invisible hero
date: 2015-06-17
author: Marin Jankovski
author_twitter: maxlazio
---

GitLab has a monthly release cycle, every 22nd of the month a new version is released.

With GitLab growth comes a price. That price comes in a form of more complex and challenging release process.

One (work) week before the release GitLab B.V. part of the GitLab community chooses a release manager to guide the release process.
Read on to find out what this means and what release manager tasks are.

<!--more-->

## Tasks

Most of our release documents can be found [under release directory in GitLab repository](https://gitlab.com/gitlab-org/gitlab-ce/tree/master/doc/release). The most important document for the monthly release is [monthly.md](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/release/monthly.md).

Every release manager tries to update the documentation to make it easier for the next RM. This way release process gets a bit better with every release and a bit easier to do.

Release manager doesn't have to do all the work themselves, their task is to delegate work and make sure that the procedure is being followed.

Release manager tasks can be broken down into:

1. Make sure that GitLab CE, EE and GitLab CI repositories have updated installation and upgrade guides
1. Make sure that omnibus-gitlab package will be ready for the release
1. Release RC version, do QA, deploy on GitLab.com and ci.gitlab.com
1. Follow reported regressions and make sure that developers are aware/working on a fix
1. Decide which fixes can go into the release
1. Coordinate package building
1. Make sure that blog post contains all the necessary information
1. Do the final release
1. Decide if there needs to be a patch release
1. Coordinate patch release

Now, this does not seem like a lot of work when it is written down in a form of bullets but keep in mind that GitLab community dishes out around 900 commits a month on GitLab alone. Add Enterprise Edition, GitLab CI and runners and omnibus-gitlab packages and you get several thousand changes done by hundreds of developers across projects which need to come together (and work) in one day, this is a lot of work(and stress) for one person.
Number of times you need to work late(or early) to get the packages out or deploy the new version to one of our services. No one is forcing you to do so but if you don't do it then it will complicate the following day.

## History

I don't know exact date when release manager duty was thought off but it was [around version 6.4](https://gitlab.com/gitlab-org/gitlab-ce/commit/223070b3fe9cb302d3d47ba5a616d90bab8910fd)

At that time we had couple of other things that where a release manager task: Notify everyone of the code-freeze(nothing was merged to master during this time), enforce it and build the packages *manually*. Yes, manually. This meant connecting to all machines separately and doing few commands to initiate package building. GitLab.com had a separate repository with some custom code so the deploy needed to be done manually too. I still have nightmares as a result of these 2 things.

As you can imagine, this made a Release manager task very undesirable and limited to few people. Even with all the improvements that followed, this job is still not popular.

## Improvements

Since the painful beginings of Release manager tasks we done number of improvements:

1. Code freeze is removed so there is no need to watch over anyones shoulders
1. Syncing repositories is now a one-line script where the argument is the version that is being released
1. Omnibus-gitlab packages infrastructure got build so only supplying the shas of the release version is enough to kick off the automatic builds on all platforms and machines
1. Infrastructure for deploying GitLab.com and ci.gitlab.com got created and they are being updated by using a few lines of commands and packages
1. The release documentation has been updated so many times that room for error is minimal(if you follow the steps closely)

You would expect that all these improvements will make the Release manager job more appealing, afterall you get to:

* Boss arround over *all* your colleagues, this includes the project lead and the CEO. It is especially sweet when you can say NO to an unreasonable request. After all, all requests are unreasonable but your own and now you get to push that through.
* You decide at your leasure when something will be included and pushed
* You are *the* boss of everything(for a period of time) because everyone says: "Hey, you are the release manager, your call."

## Choosing the Release manager

However, even with all the benefits noted above, choosing the Release manager is quite a task.

During our team call, Release manager for the previous release puts forward a subject of a new Release manager.
At that moment usually cameras start breaking down, people are forgetting the whole English language, mics are not working, there is always someone at the door so you need to open it and lots of faces looking around the room.
After a few minutes of silence decision gets made but mostly because we are all friends and do not want to see a colleague suffer for another month.

We've tried improving the desirablity of this task but making procedures easier but that is (still) not working.

At some point I've asked what kind of reward can be put forward to make people volunteer but no ideas came up.

I was thinking about this:

* Material reward: buying a thing and gifting it might be ok for some but others have no need for things.
* Spiritual reward: We do say a lot of thank yous to the RM but this gets spent. Tweeting the name of the Release manager might work as a recongnition for some but I am afraid for introverts in our team. More publicity might also yield more work for the Release manager.
* Buying a beer/coctail: Since we are a remote company this feels like something that would be appreciated but it would only work for a few employees as we are a *very* remote company.

With that I was out of ideas. This blog post is an attempt to say a thank you to all Release managers. You know who you are and you are a true invisible hero for doing this task to make everything go out on schedule.

Release manager - my hero.

