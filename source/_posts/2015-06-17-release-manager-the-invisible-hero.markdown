---
layout: post
title: Release Manager - The invisible hero
date: 2015-06-17
author: Marin Jankovski
image_title: '/images/unsplash/rm.jpeg'
author_twitter: maxlazio
---

Real heroes are sometimes unknown and we can only see their accomplishments. In GitLab we have one invisible hero every month, when we have our monthly release. As you may know, we've never failed to release a new GitLab version on the 22nd of every month. 
 
As GitLab is growing, the release process is becoming more complex and becoming a release manager is a more difficult, but necessary job.

Eight work days before the next release, and we start the countdown. A new volunteer "hero" is elected by the team.

## But, why is it such a challenging job?

<!--more-->

A release manager is the person who makes sure that everything is ready for the monthly release. He follows up on every single detail and makes sure that the new version is working perfectly, including all the improvements and features. He also needs to delegate some tasks and make sure that the procedure is being followed. 

Consider that right now, GitLab is huge. Our community dishes out around 900 commits a month on GitLab alone. Add Enterprise Edition, GitLab CI and runners and Omnibus-GitLab packages and you get several thousand changes done by hundreds of developers across projects which need to come together (and work) in one day. This is a lot of responsability for one person.
 
## So, how do we manage to make it all into a single release every month?

In GitLab we have a [release directory](https://gitlab.com/gitlab-org/gitlab-ce/tree/master/doc/release) for the release documents. The most powerful document for the release is called [monthly.md](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/release/monthly.md).

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

A release manager volunteers to work late (or early) to get the packages out or deploy the new version to one of our services. No one is forcing you to do so, but if you don't, it will complicate the following day. This is a weakness in our process, so we need to work on improving this situation.

## With all the hard work, how do we choose a volunteer release manager?

Choosing the release manager is probably one of the hardest tasks.

During our team call, release manager for the previous release mentions the subject of the need of a new release manager.

At that exact moment, there's silence and cameras start breaking down, people start forgetting the whole English language, mics stop working, there is always someone at the door so you need to open it and lots of faces are just looking around the room.

After a few minutes of silence, decision are made, but mostly because we are all friends and we don't want to see a colleague suffer for another month.

We've tried improving the desirablity of this task by making procedures easier, but that is still a challenge.

At some point I've asked what kind of reward we could put forward to make people happy to volunteer, but there are no good ideas yet.

I have some ideas about what we could do:

* Material reward: a gift might be OK for some people, but others have no need for things. In this case we could publicly thank them and acknowledge their work. 
* Spiritual reward: We do say "thank you" to the RM a lot, but this gets spent. Tweeting the name of the release manager might work as a recongnition for some, but I am afraid that it won't work for introverts in our team. Being more public might also yield more work for him.
* Buying a beer or cocktail: This feels like something that would be appreciated, but it would only work for a few employees, since we are a *very* remote company. Maybe a beer voucher could be sent.

Do you have any ideas?

With that I was out of ideas. This blog post is an attempt to say a thank you to all release managers. You know who you are and you are a true invisible hero for accomplishing the tasks to make everything go out on schedule.

### Release manager - my hero.
