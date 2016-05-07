---
layout: markdown_page
title: Team Handbook
---

## Feedback<a name="feedback"></a>

Please make a <a href="https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests">merge request</a> to suggest improvements or add clarifications.
Please use <a href="https://gitlab.com/gitlab-com/www-gitlab-com/issues">issues</a> to ask questions.

## Other main pages in the team handbook

* [Onboarding](/handbook/general-onboarding)
* [People Operations](/handbook/people-operations)
* [Benefits](/handbook/benefits)
* [Hiring](/handbook/hiring)
* [Travel](/handbook/travel)
* [Sales process](/handbook/sales-process)
* [Infrastructure](/handbook/infrastructure)
* [Accounting](/handbook/accounting)
* [Stock Options](/handbook/stock-options)
* [Marketing](/handbook/marketing)
* [Security](/handbook/security)
* [Support](/handbook/support)
* [Leadership](/handbook/leadership)
* [GitLab University](https://university.gitlab.com/)
* [Social Media Guidelines](/handbook/social-media-guidelines)

## This page

* [Values](#values)
* [General Guidelines](#general-guidelines)
* [Communication](#communication)
   * [Internal Communication](#internal-communication)
   * [GitLab Workflow](#gitlab-workflow)
   * [Team Call](#team-call)
   * [Scheduling Meetings](#scheduling-meetings)
   * [Video Calls](#video-calls)
   * [User Communication Guidelines](#user-communication-guidelines)
   * [Writing Style Guidelines](#writing-style-guidelines)
   * [Beamy Guidelines](#beamy-guidelines)
   * [Company Phone Number](#phone-number)
* [On Call Rotation and Schedule](#on-call)
* [Intellectual Property](#intellectual-property)
* [Spending Company Money](#spending-company-money)
* [Paid Time Off](#paid-time-off)
* [Incentives](#incentives)
   * [Sales Target Dinner Bonus](#sales-target-dinner)
   * [Discretionary Bonuses](#discretionary-bonuses)
   * [Referral Bonuses](#referral-bonuses)
   * [Work Remotely Travel Grant](#travel-grant)
* [Signing Legal Documents](#signing-legal-documents)
* [Tools](#tools)
* [Using Git to update this website](#starting-with-git)

## Values<a name="values"></a>

We value results, transparency, sharing, freedom, efficiency, frugality,
collaboration, directness, kindness, diversity, quirkiness, boring solutions, and quirkiness:

1. Results: We care about what you achieve; the code you shipped, the user you
made happy, and the team member you helped. Do not compete by proclaiming how many
hours you worked yesterday because we don't want someone who took the afternoon
off to feel like they did something wrong. Instead celebrate the achievements of
yourself and your teammates. We want people to have the desire to ship.
1. Transparency: Be open about as many things as possible. By making information
public we can reduce the threshold to contribution and make collaboration easier.
An example is the [public repository of this website](https://gitlab.com/gitlab-com/www-gitlab-com/)
that also contains this [company handbook](https://about.gitlab.com/handbook/).
Everything we do is public by default, for example the [GitLab CE](https://gitlab.com/gitlab-org/gitlab-ce/issues) and [GitLab EE](https://gitlab.com/gitlab-org/gitlab-ee/issues) issue takers, but also [marketing](https://gitlab.com/gitlab-com/marketing/issues) and [operations](https://gitlab.com/gitlab-com/operations/issues). Transparency creates awareness for GitLab, allows us to recruit people that care about our culture, it gets us more and faster feedback from people outside the company, and makes it easier collaborate with them.
On a personal level you should tell it like it is instead of putting up a poker face. Don't be afraid to admit you made a mistake or were wrong. When something went wrong it is a great opportunity to say 'what’s the [kaizen](https://en.wikipedia.org/wiki/Kaizen) moment here' and find a better way without hurt feelings.
1. Sharing: We care about giving great software, documentation, examples, lessons,
and processes to the world. An example is the MIT licensed [GitLab CE](https://about.gitlab.com/features/). We believe that open source creates more value than it captures. We are grateful to our customers, users, partners, investors, and the open source ecosystem.
1. Freedom: You should have clear objectives and the freedom to work on them as you
see fit. Any instructions are open to discussion. You don't have to defend how you
spend your day. We trust team members to do the right thing instead of having rigid rules.
1. Efficiency: We care about working on the right things, not doing more than needed,
and not duplicating work. This enables us to achieve more progress with less people
and makes our work more fulfilling. We think of how we can make the company better instead of being territorial or defensive.
1. Frugality: [Amazon states it best](http://www.amazon.jobs/principles) with:
"Accomplish more with less. Constraints breed resourcefulness, self-sufficiency
and invention. There are no extra points for growing headcount, budget size or
fixed expense."
1. Collaboration: Helping others is a priority. You are expected to ask others for
help and advise. Anyone can chime in on any subject. You don't have to comply with
all feedback but you should always take it seriously. An example is the inclusion
of people from outside GitLab Inc. in the [core team](https://about.gitlab.com/core-team/).
1. Directness: We try to channel our inner Ben Horowitz by being [both straightforward
and kind, an uncommon cocktail of no-bullshit and no-asshole](https://medium.com/@producthunt/ben-horowitz-s-best-startup-advice-7e8c09c8de1b).
1. Kindness: We don't want [jerks](http://bobsutton.typepad.com/my_weblog/2006/10/the_no_asshole_.html) in our team.
Some companies say [Evaluate People Accurately, Not "Kindly"](http://www.bwater.com/Uploads/FileManager/Principles/Bridgewater-Associates-Ray-Dalio-Principles.pdf).
We're all for accurate assessment but we think it must be done in a kind way.
Give as much positive feedback as you can and do it in a public way. Give negative
feedback in the smallest setting possible, one-on-one video calls are preferred.
Clearly make negative feedback about the work itself, not the person. When giving
feedback always provide at least one clear and recent example. If a person is
going through a hard time in their personal life, then take that into account. An example of
giving positive feedback is our [thanks chat channel](https://about.gitlab.com/handbook/#internal-communication).
1. Diversity: The community consists of people from all over the world, with different
backgrounds and opinions. Make everyone feel welcome. Work to increase the participation
of underrepresented minorities and nationalities in our community and company. An
example is our sponsorship of [diversity events](https://about.gitlab.com/2016/03/24/sponsorship-update/).
1. Boring solutions: Use the most simple and boring solution for a problem. You
can always make it more complex later if that is needed. The speed of innovation
for our organization and product is constrained by the total complexity we added
so far, so every little reduction in complexity helps.
Don't pick an interesting technology just to make your work more fun, using code that is popular will ensure many bugs are already solved and its familiarity makes it easier for others to contribute.
1. Quirkiness: Unexpected and unconventional things make life more interesting.
Celebrate and encourage quirky gifts, habits, behavior, and points of view. An example
is our [team call](https://about.gitlab.com/handbook/#team-call) where we spend most
of our time talking about what we did in our private lives, from fire-throwing to
knitting. Open source is a great way to interact with interesting
people. We try to hire people who think work is a great way to express themselves.

## General Guidelines<a name="general-guidelines"></a>

1. Working at GitLab Inc. is cooperating with the most talented people you've ever worked with, being the **most productive** you'll ever be, and creating software that is helping the most people you've ever reached.
1. We recognize that inspiration is perishable, so if you’re **enthusiastic** about something that generates great results in relatively little time feel free to work on that.
1. Do what is right for our **customers** and the rest of the GitLab community, do what is best over the long term, don't be evil.
1. We create **simple** software to accomplish complex collaborative tasks.
1. We **use** our own software to accomplish complex collaborative tasks. 
1. Do **not** make jokes or unfriendly remarks about race, ethnic origin, skin colour, gender or sexual orientation.
1. Use **inclusive** language. For example, prefer 'Hi everybody' or 'Hi people' to 'Hi guys'.
1. Share problems you run into, ask for help, be forthcoming with information and **speak up**.
1. Work out in the **open**, try to use public issue trackers and repositories when possible.
1. Most things are **public** unless there is a reason not to, not public by default are: financial information, job applications/compensation/feedback and partnerships with other companies.
1. Share solutions you find and answers you receive with the **whole community**.
1. If you need to discuss with a team member for help please realize that probably the majority of the community also doesn't know, be sure to **document** the answer to radiate this information to the whole community. After the question is answered discuss where it should be documented and who will do it. You can remind other people of this by asking 'who will document this'?
1. To change a guideline or process, **suggest an edit** in the form of a merge request.
After it is merged you can talk about it during the team call if applicable.
Communicate process changes by linking to the commit. Do not change the process first,
and then view the documentation as a lower priority task as this inevitably leads to duplicate work communicating the change and outdated documents.
1. If you make a mistake, don't worry, correct it and **proactively** let the affected party, your team, and the CEO know what happened, how you corrected it and how, if needed, you changed the process to prevent future mistakes.
1. You can always **refuse** to deal with people that treat you badly and get out of situations that make you feel uncomfortable.
1. Everyone can **remind** anyone in the company about these guidelines. If there is a disagreement about the interpretations, the discussion can be escalated to more people within the company without repercussions.
1. If you are unhappy with anything (your duties, your colleague, your boss, your salary, your location, your computer) please let your boss, or the CEO, know as soon as you realize it. We want to solve problems while they are **small**.
1. We want to have a great company so if you meet people that are **better** than yourself try to recruit them to join the company.
1. Make a conscious effort to **recognize** the constraints of others within the team. For example, sales is hard because you are dependent on another organization, and Development is hard because you have to preserve the ability to quickly improve the product in the future.
1. Our **strategy** is detailed on the [Strategy page](https://about.gitlab.com/strategy/), please read it and contribute.
1. For each action or comment, it helps to ask yourself (i) does this 
help the company achieve its strategic goals? (ii) is this in the company's interest, 
and finally, (iii) how can I contribute to this effort/issue in a constructive way?
1. There is no need for **consensus**, make sure that you give people that might have good insights a chance to respond (by /cc'ing them) but make a call yourself because [consensus doesn't scale](https://twitter.com/sama/status/585950222703992833).
1. Everyone at the company cares about your **output**. Being away from the keyboard during the workday, doing private browsing or making personal phone calls is fine and encouraged.
1. If you fix something for GitLab.com or one of our users make sure to make that the default (preferred) and **radiate** the information in the docs. We should run GitLab.com with the default settings and setup our users would also have.
1. Everything is **always in draft** and subject to change, including this handbook. So do not delay documenting things and do not include draft in the titles of documents. Ensure everyone can read the current state, nothing will ever be finished.
1. If you copy content please remove it at the origin place and replace it with a link to the new content. Duplicate content leads to updating it in the wrong place, keep it [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).
1. Explicitly note what **next action** you propose or expect and from whom.
1. When you **reply** to a request please do so after you have completed the request or
indicate when you plan to do it. In the latter case always send a second message
when the request is complete.
1. Respect the privacy of our users and your fellow team members. Secure our production data at all times. Only work with production data when this is needed to perform your job. Looking into production data for malicious reasons (for example [LOVEINT](https://en.wikipedia.org/wiki/LOVEINT) or spying on direct messages of team members) is a fireable offense.
1. Most guidelines in this handbook are meant to help and unless they state otherwise it is meant to help more than a absolute rule. Don't be afraid to do something because you can't oversee all guidelines. Be gentle when reminding people about these guidelines, for example say: "It is not a problem, but next time please consider the following guideline from the handbook".


## Communication<a name="communication"></a>

We're a **distributed**, **remote-first** company where people work remote without missing out.
For this, we use **asynchronous communication** and are as open as we can be by communicating through public issues, chat channels,
and placing an emphasis on ensuring that conclusions of offline conversations are written down.
These communication guidelines are meant to facilitate smooth communication in an
ever-growing remote-first company.
Please keep in mind that you represent GitLab and our culture, also on Social Media.
When commenting on posts please keep in mind: "Don't argue but represent."

### Internal Communication<a name="internal-communication"></a>

1. All written communication happens in English, even when sent one on one,
because sometimes you need to forward an email or chat.
1. Use **asynchronous communication** when possible (issues and email instead of
chat), issues are preferred over email, email is preferred over chat, announcements happen on the team call agenda, and [people should be able to do their work without getting interrupted by chat](https://m.signalvnoise.com/is-group-chat-making-you-sweat-744659addf7d#.21t7089jk).
1. It is very OK to ask as many questions as you have, but ask them so many
people can answer them and many people see the answer (so use issues or public
chat channels instead of private messages or one-on-one emails) and make sure
you try to document the answers.
1. If you have to use email please send one email per subject as multiple items
in one email will cause delays (have to respond to everything) or misses (forgot
one of the items).
1. If you mention something (a merge request, issue, commit, webpage, comment,
etc.) please include a link to it.
1. Always reply to emails, even when no action is needed. This lets the other
person know that you received it. A thread is done when there is a single word
reply, such as OK, thanks, or done.
1. If you forward an email without other comments please add FYI (for your
information) or FYA (for your action). If you forward an external request with FYA it doesn't mean that the company should do whatever is proposed, it just means the person who forwarded it will not follow up on the request.
1. If you want to create, or be added or removed from an internal email alias (e.g.
`sales@gitlab.com`) please see the shared "GitLab Email Forwarding" doc.
1. If you use chat please use a public channel whenever possible, mention the
person you want to reach if it is urgent. This ensures it is easy for other people
to chime in, and easy to involve other people, if needed.
1. In chat try to keep the use of keywords that mention the whole channel to a minimum. They should only be used for pings that are both urgent as well as important. By overusing channel mentions you make it harder to respond to personal mentions in a timely manner since people get pinged too frequently.
1. If you agree in a chat to start a video call (typically by asking 'call?')
the person that didn't leave the last comment starts the call. So either respond
to the 'call?' request with a video link or say 'yes' and let the other person
start it. Don't say 'yes' and start a call 5 seconds later since it is likely
you'll both be creating a video call link at the same time.
1. All company data should be **shareable** by default. Don't use a local text
file but leave comments on an issue. Use merge requests to edit the website, don't use
Google Docs. If you _do_ need a Google Doc, then create the doc with your company Google
Apps account. By default share Google docs with the whole company 'anyone at
GitLab can find and access' with edit (preferred) or comment access for everyone.
An easy way to do this, is to create your Google docs in a Shared Folder in
Google Drive.
1. When referring to a Google Doc in the handbook, refrain from providing the direct link.
Instead, write the name of the Google Doc. In the past, giving the URL of a doc
has led to inadvertent opening of sharing settings beyond what was intended, and it also helps
prevent spam from people outside of GitLab who request access to the doc when they see the link.
1. If you are having trouble finding a shared Google Doc, make sure you ["Search <your domain>"](https://support.google.com/a/answer/3187967?hl=en) in Google Drive.
1. All our procedures and templates are stored in (mostly public) git repositories
instead of Google/Word documents. This makes them easier to find and suggest
changes to with the organization and shows our commitment to open collaboration
outside the organization.
1. Use video calls if you find yourself going back and forth in an issue/via email
or over chat.
1. Having pets, children, significant others, friends and family visible during
video chats is encouraged. If they are human, ask them to wave at your remote
team member to say 'Hi'.
1. Email forwarding rules are specified in the shared "GitLab Email Forwarding" Google doc accessible to people in the company, if you want to change a rule or add a forwarding email alias, please [make a suggestion](https://support.google.com/docs/answer/6033474?hl=en) in the document.
1. Emails are asynchronous, for example if your manager emails you on a weekend
it is fine to reply during the workweek.
1. If an email is or has become urgent feel free to ping people via chat referencing
the subject of the email.
1. Thank people that did a great job in our 'Thanks' chat channel. If someone is
an employee just "@" mention them. If multiple people were working on something
try mentioning each person by "@" name. 'Thanks everyone' does not say much. If
someone is not an employee mention our office manager, their name, a quirky gift
and link to their work. For example: _"@sytse Joe deserves a lawnmower for LINK"_.
The office manager will approach the people for their address saying we want to send
some swag. We'll ship it in gift wrap with "Thanks for your great work on LINK, love
from @gitlab". Don't thank the CEO or other executives for something that the company
paid for, thank GitLab instead.
1. If there is something that you want to discuss, but you do not feel that it is
a reasonable option to discuss with either your manager or CEO, then you can reach
out to any of the other C-level team members or our board member Bruce Armstrong.

### GitLab Workflow<a name="gitlab-workflow"></a>

1. Always **create** an issue for things you work on. If it is worth spending time on, it is worth creating an issue for it since that enables other people to learn and help. You can always edit the description or close it when the problem is something different or disappears.
1. **'Double link'** issues to prevent internal confusion and us failing to report back to the reporters. For example, open an issue with link to ZenDesk and close the issue with copy of the response. Or add 'Report: ' lines to the description with links to relevant issues and feature requests and ensure they are closed and note this with a comment. If you are not responsible for reporting back please do not close an issue, instead reassign it.
1. If issues are related, **crosslink** them (a link from each issue to the other one). Put the links at the top of the issues' description with a short mention of the relationship (Report, etc.). If there are more than 2 issues, use one issue as the central one and crosslink all issues to this one. Please, also crosslink between ZenDesk and GitLab issues.
1. After a discussion about a feature **update the issue body** with the consensus or final conclusions. This makes it much easier to see the current state of an issue for everyone involved in the implementation and prevents confusion and discussion later on.
1. Give the community the **chance to help**. For example: place issues on the feedback tracker, leave comments in rake check tests about what you can run manually and ask 'Can you send a merge request to fix this?'.
1. Submit the **smallest** item of work that makes sense. When creating an issue describe the smallest fix possible, put suggestions for enhancements in separate issues and link them. If you're new to GitLab and are writing documentation or instructions submit your first merge request for at most 20 lines.
1. Do not leave issues open for a long time, issues should be **actionable** and realistic. If you are assigned but don't have time, assign it to someone else. If nobody is assigned and it is not a priority, please ensure the community can help and close it.
1. Make a conscious effort to **prioritize**<a name="prioritize"></a> your work. The priority of items depends on multiple factors: is there a team member waiting for the answer, what is the impact if you delay it, how many people does it affect, etc. The priority starting from urgent is:
    1. @mentions from team members and the rest of the community
    1. Issues assigned to the upcoming milestone
    1. Issues assigned to future milestones
    1. Issues not assigned to a milestone
1. Within the same milestone the priority<a name="priority"></a> starting from urgent is:
    1. **Emergency** issues (a service engineer will probably contact you via chat)
    1. [**Security**](https://gitlab.com/groups/gitlab-org/issues?milestone_title=%23upcoming&label_name[]=security) issues
    1. [**Data integrity**](https://gitlab.com/groups/gitlab-org/issues?milestone_title=%23upcoming&label_name[]=data+integrity) issues (preventing data loss)
    1. [**Regression**](https://gitlab.com/groups/gitlab-org/issues?label_name=regression) issues (used to work in a previous release)
    1. [**Promised**](https://gitlab.com/groups/gitlab-org/issues?milestone_title=%23upcoming&label_name[]=promised) issues (promised to a customer)
    1. Other [**customer**](https://gitlab.com/groups/gitlab-org/issues?milestone_title=%23upcoming&label_name[]=customer) issues
    1. [**Direction**](https://gitlab.com/groups/gitlab-org/issues?milestone_title=%23upcoming&label_name[]=direction) issues (listed on [the direction page](https://about.gitlab.com/direction/))
    1. [**Bug**](https://gitlab.com/groups/gitlab-org/issues?milestone_title=%23upcoming&label_name[]=bug) issues (things)
    1. [Issues](https://gitlab.com/groups/gitlab-org/issues?milestone_title=%23upcoming) without a label listed above.
1. Use the public issue trackers on GitLab.com for anything related to our software since [we work out in the open](https://about.gitlab.com/2015/08/03/almost-everything-we-do-is-now-open/).
1. Our internal dev.gitlab.org server is used for [security issues](https://dev.gitlab.org/gitlab/gitlabhq/issues) (but do create a double linked tracking issue on GitLab.com), for [infrastructure](https://dev.gitlab.org/cookbooks/chef-repo/issues) and for [organizational](https://dev.gitlab.org/gitlab/organization/issues) issues.
1. Pick issues from the current [milestone](https://gitlab.com/groups/gitlab-org/milestones).
1. We try not to assign issues to people but to have people **pick issues** in a milestone themselves.
1. Assign an issue to yourself as soon as you start to work on it, but not before
that time. If you complete part of an issue and need someone else to take the next
step, **re-assign** the issue to that person.
1. When reassigning an issue, make sure that the issue body contains the latest information. The issue body should be the single source of truth.
1. We keep our **promises** and do not make external promises without internal agreement.
1. Even when something is not done, share it internally so people can comment early and prevent rework. Mark the merge request **[Work In Progress](https://about.gitlab.com/2016/01/08/feature-highlight-wip/)** so it is not merged by accident.
1. When you create a merge request, **mention** the issue(s) that it solves in the description. If any followup actions are required on the issue after the merge request is merged, like reporting back to any customers or writing documentation, avoid auto closing it by saying `Fixes #1` or `Closes #1`.
1. Once merge request is created, make sure to assign it to the proper person:
    1. For example a merge request that fixes a frontend issue should have the `Frontend` label and be assigned to a Frontend Engineer for review. For other workflow labels please see [PROCESS.md](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/PROCESS.md#workflow-labels).
    1. A merge request that is related to Continuous Integration should be assigned to the GitLab CI lead.
    1. All other merge requests should be assigned for review to one of merge request "endbosses". You can find all the roles listed on the [team page](https://about.gitlab.com/team/).
1. When a merge request is done, remove the WIP prefix and **assign** the merge request to someone to review and merge it. A WIP merge request will never be merged, an unassigned non-WIP merge request can be merged by anyone if it looks ready, an assigned non-WIP will only be merged by the assigned reviewer.
1. When a merge request is done, set milestone to the version it should be included in.
1. If you are assigned to review and merge a merge request and would like the creator to make some **changes**, comment on the merge request and assign it back to the creator. When they have addressed the concern, they will reassign it to the reviewer.
1. If you are assigned to merge a merge request and there is a **merge conflict**, consider trying to resolve it **yourself** instead of asking the MR creator to resolve the conflict. If it is easy to resolve you avoid a round trip between you and the creator, and the MR gets merged sooner. This is a suggestion, not an obligation.
1. If you ask a question to a specific person, always start the comment by mentioning them; this will ensure they see it if their notification level is mentioned and other people will understand they don't have to respond.
1. Do not close an issue until it is fully done, which means code has been merged, it has been **reported** back to any customers and the community, all issue trackers are updated and any documentation is written and merged.
1. When **closing** an issue leave a comment explaining why you are closing the issue.
1. If a user suggests an enhancement, try and find an existing issue that addresses their concern, or create a new one. Ask if they'd like to elaborate on their idea in one of these issues.

### Team Call<a name="team-call"></a>

1. The team call is every workday except Friday from 8:30am to 9:00am Pacific Time (mostly 5:30pm - 6:00pm Central European Time).
1. We use BlueJeans for the call since Hangouts is capped at 15 people, link is in the calendar invite.
1. If you have previously logged on to Bluejeans with different credentials, make sure to log out before joining the call as yourself.
1. We start on time and will not wait for people.
1. Person who has first item on the agenda starts the call.
1. If you are unable to attend just add your name to the [Team Agenda](https://docs.google.com/document/d/1JiLWsTOm0yprPVIW9W-hM4iUsRxkBt_1bpm3VXV4Muc/edit) as 'Not attending'.
1. We start by discussing the subjects that are on the agenda for today.
   * Everyone is free to add subjects. Please start with your name and be sure to link to an issue, merge request or commit if that is relevant.
   * When done with a point mention the subject of the next item and hand over to the next person.
1. We have functional group updates (1 group per call) for the following groups: Marketing, Sid, Product, Sales, Ops, Support, HR, Finance, Development, Front-end, UX/UI.
1. We ask 10-15 people per day to share updates about the most exciting thing from your past or upcoming week/weekend. If anyone has something they'd like to talk about, last person in the list will ask the group if they have anything else to share.
   * The [Team Agenda](https://docs.google.com/document/d/1JiLWsTOm0yprPVIW9W-hM4iUsRxkBt_1bpm3VXV4Muc/edit) lists who is meant to speak on which day; this can be altered daily if conflicts arise.
   * There is no need to excuse yourself with "I didn't do anything interesting", "I just watched television" or "that's all", it is not a competition. Instead share the most interesting detail, for example what television show you watched, book you are reading, video game you played or what recipe you cooked.
1. Sequence of asking people is in order of joining the company, same as on the [team page](https://about.gitlab.com/team/). If there are non-team page people in the call we end with those.
1. It is OK with talk over people or interrupt people to ask questions, cheer for them or show your compassion. This to encourage more conversation and feedback in the call.
1. Please look if the person you hand over to is present in the participant list so you don't hand over to someone who is not present.
1. Last person wishes everyone a good day.
1. Even if you cannot join the call, read through the team agenda and the links from there. We often use the team call to make announcements or
discuss changes in processes, so make sure to catch up on the news if you have missed a team call (or more).

### Scheduling meetings<a name="scheduling-meetings"></a>

1. If you want to ask team members if they are available for an event please send a new calendar appointment from and to the company address. This makes it easier for people to check availability and to put on their calendar. It automatically shows up on calendars even when the email is not opened. It is easier to signal presence and to see the status of everyone. Please respond quickly to invites so people can make plans.
1. If there are materials relevant for a calendar meeting (for example a Google Doc) please add the URL to the meeting invite description.
1. If you want to check if a team member is available for an outside meeting, create a calendar appointment and invite the team member only, after they respond yes then invite outside people.
1. When scheduling a call with multiple people, invite them using a Google Calendar that is your own, or one specific to the people joining, so the calendar item
doesn't unnecessarily appear on other people's calendars.
1. If you want to move a meeting just move the calendar appointment instead of reaching out via other channels, note the change at the top of the description.
1. Please click 'Guests can modify event' so people can update the time in the calendar instead of having to reach out via other channels. You can install [the Google-Calendar-Guests-Can-Modify-Event-By-Default plugin in Chrome](https://github.com/robin-drexler/Google-Calendar-Guests-Can-Modify-Event-By-Default) to do this automatically.
1. If you want to schedule a meeting with a person not on the team please use [Calendly](#calendly).

### Video calls<a name="video-calls"></a>

1. For smaller meetings we use Google Hangouts, for larger meetings we prefer Bluejeans (Google Hangouts technical limit is 15 for scheduled meetings).
1. For meetings that are scheduled via calendar there is automatically a Google Hangout URL added, this is the meeting place. Having a url in advance is much more reliable than trying to call via hangouts as the meeting start.
1. Use a headset with a microphone, [Apple Earpods](http://www.apple.com/shop/product/MD827LL/A/apple-earpods-with-remote-and-mic) are great. Do not use computer speakers, they cause an echo. Do not use your computer microphone, it accentuates background noise. If you want to use your [Bose headphones](https://www.bose.com/en_us/products/headphones/over_ear_headphones/quietcomfort-25-acoustic-noise-cancelling-headphones-apple-devices.html#v=qc25_black) that is fine but please ensure the microphone is active.
1. Consider using a utility to easily mute/unmute yourself, see [Shush](#shush) in the tools section.
1. In video calls everyone should own camera and headset, even when they are in the same room. This helps to see the person that is talking clearly on the camera and their name in the list. It also allows people to easily talk and mute themselves. And using a headset prevents an echoing. You wouldn't share an office seat together, don't share your virtual seat at the table.

### User Communication Guidelines<a name="user-communication"></a>

1. Keep conversations positive, friendly, real and productive while adding value.
1. If you make a mistake, admit it. Be upfront and be quick with your correction. If you're posting to a blog, you may choose to modify an earlier post, just make it clear that you have done so.
1. There can be a fine line between healthy debate and incendiary reaction. Try to frame what you write to invite differing points of view without inflaming others. You don’t need to respond to every criticism or barb. Be careful and considerate.
1. Answer questions, thank people even if it’s just a few words. Make it a two way conversation.
1. Appreciate suggestions and feedback.
1. Don't make promises that you can't keep.
1. Guide users who ask for help or give a suggestion and share links. [Improving Open Development for Everyone](https://about.gitlab.com/2015/12/16/improving-open-development-for-everyone/), [Types of requests](https://about.gitlab.com/2014/12/08/explaining-gitlab-bugs/).
1. When facing negative comment, respond patiently and treat every user as an individual, people with the strongest opinions can turn into [the strongest supporters](https://about.gitlab.com/2015/05/20/gitlab-gitorious-free-software/).

### Writing Style Guidelines<a name="writing-style-guidelines"></a>

1. Do not use rich text, it makes it hard to copy/paste. Use [Markdown](http://doc.gitlab.com/ce/markdown/markdown.html) instead.
1. We use Unix style (lf) line endings, not Windows style (crlf), please ensure `*.md text eol=lf` is set in the repository's `.gitattributes` and run `git config --global core.autocrlf input` on your client.
1. Do not create links like "here" or "click here". All links should have relevant anchor text that describes what they link to, such as: "GitLab CI source installation documentation".
1. Always use [ISO dates](http://xkcd.com/1179/) in all writing and legal documents, `yyyy-mm-dd`, e.g., 2015-04-13, and never 04-13-2015 or 13-04-2015
1. If you have multiple points in a comment or email, please number them to make replies easier.
1. When you reference an issue, merge request, comment, commit, page, doc, etc. and you have the URL available please paste that in.
1. In URLs, always prefer hyphens to underscores.
1. The community include users, contributors, core team members, customers, people working for GitLab Inc., and friends of GitLab. If you want to refer to 'people not working for GitLab Inc.' just say that and don't use the word community. If you want to refer to people working for GitLab Inc. you can also use 'the GitLab Inc. team' but don't use the 'GitLab Inc. employees'.
1. All people working for GitLab the company are the [GitLab team](https://about.gitlab.com/team/), we also have the [Core team](https://about.gitlab.com/core-team/) that is part GitLab team, part volunteers.
1. Please always refer to GitLab Inc. people as team members, not employees.
1. Always write GitLab with a capitalized G and L, even when writing GitLab.com.
1. Monetary amounts shouldn't have one digit, so prefer $19.90 to $19.9
1. If an email needs a response write the ask at the top of it.
1. Use the future version of words, just like we don't write internet with a capital anymore, we write frontend and webhook without a hyphen or space.
1. Our homepage is https://about.gitlab.com/ (with the `about.` and with `https`).
1. Try to use the [active voice](https://writing.wisc.edu/Handbook/CCS_activevoice.html) whenever possible.
1. Please refer to self-hosted installations as on-premises, not on-premise.
1. If you use headers properly format them (`##` in Markdown, "Heading 2" in Google docs), start at the second header level because header level 1 is for titles, do not end headers with a colon.
1. Always use an [Oxford comma](https://en.wikipedia.org/wiki/Serial_comma) in lists of three or more terms.
1. Read our [Documentation Styleguide](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc_styleguide.md) for more information when writing documentation.

### Beamy Guidelines<a name="beamy-guidelines"></a>

Beamy is our company conference call robot. It lives in the San Francisco Howard St. office.
Its main purpose is to allow those outside of the office a view into the space and people.
When you call in to the beam your face will appear on the screen (so make sure your webcam
works) and you can drive the robot around the office. It simulates being in the space without
physically being there. It is really cool and everyone should try it and have fun with it.

* You need an invite email to connect and to download a desktop client, please @mention Emily in the #general channel if you don't have the invite yet.
* Beamy times: 8am until 6pm Pacific time on workdays and during all company events, for other times
please @mention Sytse in the #valley channel to see if it is OK. It is on auto connect
so you'll beam right in.
* Once you are sent an invite you can beam in at any time and drive around our beam.
Don’t forget to park it back on the charger when you are done. You can do so by driving
up to the charger, when you see a green outline press AND HOLD 'p' until it's parked.
Make sure it is charging, otherwise try again.
* If you don't use headphones be careful about your volume and microphone placement, it might start singing, if so immediately mute your microphone and switch to headphones.
* More info can be found at https://www.suitabletech.com/
* Please report any questions or issues you have about the beam by @mentioning Emily in the #general channel.

### Company phone number<a name="phone-number"></a>

If you need to provide the details of GitLab's contact information you can take the [address of the office](https://about.gitlab.com/visiting/) for reference; or the [mailing address](https://about.gitlab.com/handbook/people-operations/#addresses) of the office in the Netherlands if that is more applicable.

If a phone number is required, leave this field empty by default. If that is not possible, then use
the general number (+1-415-761-1791), but be aware that this number simply guides to a voice message that refers the caller back to contacting us via email.

## On-Call Rotation and Scheduling<a name="on-call"></a>

We have on-call heroes (see the [team page](https://about.gitlab.com/team/)) to
respond quickly to GitLab.com downtime, and customer emergencies. Details about the schedule
and how to swap duty in the [PagerDuty](https://about.gitlab.com/handbook/support/pagerduty/) page.

## Intellectual Property<a name="intellectual-property"></a>

1. Take proper care of any **confidential** information you get from our customers.
1. If you copy code always **check** the license and attribute when needed or appropriate.
1. Check community **contributions** and do not merge it when there can be doubt about the ownership.
1. Only the CEO of the company **signs** legal documents such as NDAs. Sales people and the business office manager can upload them via HelloSign.
1. View our [DMCA policy](https://about.gitlab.com/dmca) in regards to copyright /
intellectual property violations
1. Comply with the [GitLab Inc. Proprietary Information and Assignment Agreement](Proprietary Information and Assignment Agreement) and/or [GitLab B.V. NDA and IP Agreements](https://about.gitlab.com/handbook/contracts/#bv-nda-ip).

## Spending Company Money<a name="spending-company-money"></a>

1. Spend company money like it is your **own** money.
1. You don't have to ask permission before making purchases in the interest of the
company. When in doubt, do **inform** your manager before the purchase, or as soon as possible after the purchase.
1. **File** your expense report no later than 7 days after the end of the calendar quarter that you made the purchase in.
1. Any non-company expenses paid with a company credit card will have to be reported
to your manager as soon as possible and **refunded** in full within 14 days.
1. **Mileage** is reimbursed according to local law: [US rate per mile](http://www.irs.gov/Tax-Professionals/Standard-Mileage-Rates),
or [rate per km](http://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/auto_en_vervoer/auto_van_de_onderneming/autokosten/u_rijdt_in_uw_eigen_auto) in the Netherlands.
1. The company will pay for the following **items** if you need it for work or use
it mainly for business, and local law allows us to pay for it without incurring
payroll taxes (links are to sample items, other options can be considered):
    *  Notebook: we recommend getting a [MacBook Pro 13-inch retina with 512GB](http://www.apple.com/shop/buy-mac/macbook-pro) for engineers and a [Macbook 256GB](http://www.apple.com/shop/buy-mac/macbook-pro) for non-engineers. Running Unix makes it easier to work with git from the command line so we strongly recommend against Windows laptops. WebEx screen sharing does not work from a Linux platform while it is one of the more common conferencing tools used with customers that we all need to interact with from time to time. Additionally 1password doesn't have a native client for Linux and the web interface in Firefox is not that good. If you have strong reasons to want to deviate from this guideline just ask your manager.
    *  [Notebook carrying bag](http://www.amazon.com/Under-Armour-Hustle-Backpack-Royal/dp/B00OQSL6LO/ref=sr_1_27?s=office-products&ie=UTF8&qid=1458505246&sr=1-27&keywords=laptop+backpack)
    *  External [monitor](http://www.amazon.com/gp/product/B009C3M7H0?psc=1&redirect=true&ref_=oh_aui_detailpage_o04_s00), [monitor-cable](http://www.amazon.com/Monoprice-32AWG-Mini-DisplayPort-Cable/dp/B0034X6SCY/ref=sr_1_1?ie=UTF8&qid=1442231319&sr=8-1&keywords=Monoprice+6ft+32AWG+Mini+DisplayPort+to+DisplayPort+Cable+-+White),
    * [webcam](http://www.amazon.com/Microsoft-LifeCam-HD-6000-Webcam-Notebooks/dp/B00372567A/ref=sr_1_88?s=pc&rps=1&ie=UTF8&qid=1458505751&sr=1-88&keywords=webcam&refinements=p_85%3A2470955011%2Cp_72%3A1248879011) and ethernet connector
    *  [Headset](http://www.amazon.com/Microsoft-LifeChat-LX-3000-Headset-JUG-00013/dp/B00906E03I?ie=UTF8&keywords=microsoft%20headset&qid=1459468311&ref_=sr_1_1&sr=8-1)
    * Keyboard and mouse [set](http://www.amazon.com/Logitech-Wireless-Combo-Mk520-Keyboard/dp/B003VANO7C/ref=sr_1_31?ie=UTF8&qid=1458505505&sr=8-31&keywords=keyboard)
    *  Height adjustable [desk](http://www.amazon.com/ApexDesk-Electric-Height-Adjustable-Standing/dp/B00WRJMYPG/ref=sr_1_40?s=office-products&ie=UTF8&qid=1458506071&sr=1-40&keywords=desk)
    *  Ergonomic [chair](http://www.amazon.com/dp/B00S7EMFN6?psc=1)
    *  Internet connection, for employees in the Netherlands see [Regeling Internet Thuis](https://docs.google.com/a/gitlab.com/document/d/1J70geARMCjRt_SfxIY6spdfpTbv_1v_KDeJtGRQ6JmM/edit#heading=h.5x5ssjstqpkq)
    *  Mobile phone and subscription
    *  Telephone land line
    *  Skype calling credit, we can autofill your account
    *  Google Hangouts calling credit
    *  Office space (if working from home is not practical)
    *  Work-related online courses
    *  Work-related books
    *  Work-related conferences (please get permission in advance if total costs are more than $500)
    *  Business travel upgrades:
        * Up to the first [EUR 300](https://www.google.com/search?q=300+eur+in+usd) for an upgrade to Business Class on flights longer than 8 hours.
        * Upgrade to Economy Plus if you’re taller than 1.95m / 6’5” for flights longer than 2 hours.
        * Up to the first [EUR 100](https://www.google.com/search?q=100+eur+in+usd) for an upgrade to Economy Plus (no height restriction) on flights longer than 8 hours.
    * Anything else you need? Please ask!
    * To order please send a screenshot of what you need to People Ops.
1. **Expense Reimbursement**
    *  If you are a contractor, please submit an invoice with receipts attached to <ap@gitlab.com>.
    *  If you are an employee, GitLab uses Expensify to facilitate the reimbursement of your expenses.
    You will receive an invitation by email to join GitLab's account. Please set up your account
    by following the instructions in the invitation.
    *  If you are new to Expensify and would like a brief review, please see [Getting Started](http://help.expensify.com/getting-started/)
    *  For step by step instructions on creating, submitting and closing a report
    please see [Create, Submit, Close](http://help.expensify.com/reports-create/)
    *  If you are an employee with a company credit card, your company
    credit card charges will automatically be fed to a new Expensify report each month.
    Please attach receipts for these expenses (per the Expense Policy, see below) within 5 business days after the end of the month.
    These amounts will not be reimbursed to you but Expensify provides a platform for documenting your charges correctly.
   * **Expense Policy**
      * Max Expense Amount - 5,000 USD or 5,000 EUR
      * Receipt Required Amount - 25 USD or 25 EUR

## Paid Time Off<a name="paid-time-off"></a>

1. Don't frown on people taking time off, but rather encourage that people take care of themselves and others.
1. Working hours are flexible, you are invited to the [team call](#team-call) if you are available, and we encourage you to post to the #working-on chat channel when you start your day so others can offer suggestions.
1. You don't need to worry about taking time off to go to the gym, [take a nap](https://m.signalvnoise.com/sleep-deprivation-is-not-a-badge-of-honor-f24fbff47a75#.hl1x9zh15), go grocery shopping, doing household chores, helping someone, taking care of a loved one, etc. If something comes up or takes longer than expected and you have urgent tasks and you're able to communicate, just ensure the rest of the team **knows** and someone can pick up any urgent tasks.
1. We have an "unlimited" time off policy. This means that:
    * You do not need to ask permission to take time off unless you want to take more than 25 consecutive calendar days.
    * Always make sure that your job responsibilities are covered while you are away.
    * We strongly recommended to take at least a minimum of 2 weeks of vacation per year, if you take less your manager might follow up to discuss your work load.
1. You do need to ensure that not more than **half** of the people that can help with availability emergencies (the on-call heroes), regular support, sales, or development are gone at any moment. You can check for this on the availability calendar, so be sure to add appointments early.
1. Please see the [PagerDuty](https://about.gitlab.com/handbook/support/pagerduty/)
page for information on how to handle scheduled leave for someone from the [on-call](#on-call) team.
1. Add an **appointment** to the GitLab availability calendar as you know your plans, you can always change it later.
1. In case it can be useful add your planned time off as a **FYI** on the next agenda of the team call.
1. We will **help** clients during official days off, unless they are official days off in both the Netherlands and the U.S. We try to have people working who are in a country that don't have an official day off. If you need to work during an official day off in your country, you should take a day off in return.
1. If you have to respond to an incident while being on-call outside of your regular working hours, you should feel free to take off some time the following day to recover and be well-rested. If you feel pressure to _not_ take the time off to rest, refer to this part of the handbook and explain that you had to handle an incident.

## Incentives<a name="incentives"></a>

The following incentives are available for GitLab team members.

### Sales Target Dinner Bonus<a name="sales-target-dinner"></a>

Since reaching sales targets is a team effort that integrates everything from making a great product
to providing top notch customer support and everything in between, we reward all
team members for every month that we reach our Sales Targets. The reward is [100 USD](https://www.google.com/search?q=100+usd+in+eur)
to each team member, towards a dinner of each team member's own choice. Enjoy!

- The CEO, or CRO will announce on the team call if the target was met.
- To claim the bonus, please submit your receipt through Expensify or include on your contractor invoice as a reimbursable expense.
- You should spend the bonus on eating out, and can be reimbursed _up to_ the maximum of 100 USD.
- Use the bonus in the month following the announcement. So for example, if we reach our target in March, use your bonus in April.
- If you cannot, or decide not to, use the bonus in the expected month, you can carry it over to the next month by notifying Accounts Payable before the 22nd of the month (release day!). You can only carry over one month in this way.


### Discretionary Bonuses<a name="discretionary-bonuses"></a>

1. Every now and then, individual team members really shine as they go above and beyond their regular responsibilities and tasks.
   * We recognize this through the #thanks channel, and sometimes also through a discretionary bonus.
   * Managers can recommend their team members to the CEO for a $1,000 bonus.
   * On team call, the manager announces the “who” and “why” of the bonus; and the "why"
   should be tied to our [values](#values).
1. If you think you are meeting the requirements for another title, want to change
jobs within the company, or think your growth should be reflected in your compensation please feel free to discuss with your manager.

### Referral Bonuses<a name="referral-bonuses"></a>

Chances are that if you work at GitLab, you have great friends and peers who would
also be fantastic additions to our [Team](https://about.gitlab.com/team/) and who
may be interested in one of the current [Job Openings](https://about.gitlab.com/jobs/).
To help us grow the team with exceptional people, we have referral bonuses that work as follows:

1. If you refer a great candidate and they are hired, then you receive a $1,000 bonus
once the new team member has been with the company for 3 months.
1. If the new team member receives a [discretionary bonus](#discretionary-bonuses) within the
first 6 months of their hire, then you *also* get a $1,000 bonus.
1. Exceptions: no bonuses for hiring people who report to you, and no bonus for the executive team.
1. When your referral applies for an opening, make sure that they enter your name on the application form.

### Work Remotely Travel Grant<a name="travel-grant"></a>

GitLab is a [remote-first company](http://zachholman.com/posts/remote-first/)
with team members all over the world (see the map on our [Team
page](https://about.gitlab.com/team/) ). If you want to visit a colleague in
another part of the world, or promote GitLab at events in another country,
then present your travel plan to your manager or the CEO, and you can receive
*up to* $2,000 in support for your plan!

As an example, the first grant was handed to a team member who will be
traveling to 6 team members in different countries during 6 months, and this
team member will receive the maximum grant of $2,000.

## Signing Legal Documents<a name="signing-legal-documents"></a>

If you need to sign, fill out, send or retrieve documents electronically, please
send a copy of the document to legal@gitlab.com with the following information:

1. Names of those who need to sign the document.
2. Email addresses of any non-GitLab employees needing to sign the document.
3. Any contractual information that needs to be included in the document.
4. Deadline by which you need the document prepared.
5. Deadline by which you need the document to be signed, dated and submitted.

The document will be managed through HelloSign, a cloud-based electronic
signature tool. Only C-level executives can sign legal documents, with the
exception of NDAs covering a physical visit of another organization.

## Tools<a name="tools"></a>

A lot of tools we use are described in the rest of the handbook (GitLab, Google Docs, Google Hangouts, 1Password, etc.).
This section is for tools that don't fit anywhere else.

### Calendly<a name="calendly"></a>

[Calendly](https://calendly.com/) connects to your Google calendar so people can book a time with you without having a Google Account.

1. Set up a [Calendly](https://calendly.com/) account
1. Link it to your GitLab Google Calendar to make it possible for people to schedule a call with you
1. All meetings will have the same Google Hangout URL on your calendar based on your @gitlab.com email handle. You can use that in the booking text above. Events on your calendar will automatically have the Google Hangout URL added, so you can use [the plus landing page](https://plus.google.com/hangouts/_/gitlab.com) to quickly jump into the call. Please note that the appointment will show up in other peoples calendar with a different link, to it is essential that you set a text with the link for your time slot as specified below.
1. Set up the 45 minute time slot with the text: "This will be a Google Hangout at https://plus.google.com/hangouts/_/gitlab.com/XXXXX Question? Please email me. GitLab Primer: https://about.gitlab.com/primer/"
1. For people outside of GitLab Inc, send them your Calendly link that links directly to the 45 minute time slot: "Are any of the times on https://calendly.com/XXXXX/45min/ convenient for you? If so please book one, if not please let me know what times are good for you and we'll find an alternative."
1. Update you availability on [Calendy Event Types](https://calendly.com/event_types/)
1. Consider adding your Calendly link to your [Slack profile](https://get.slack.help/hc/en-us/articles/204092246-Editing-your-profile) For `Display Text`, use this line: `Schedule a meeting with me!` so team members can schedule a 1:1 call with you in GitLab, by simply click your Calendly link in your Slack profile.

### Shush<a name="shush"></a>

[$4.99 tool for OSX](http://mizage.com/shush/) that allows you to use you fn key as a push to talk or push to mute.
Never again will you have switch window focus to Google Hangout or Bluejeans to speak or mute.
The icon will show the current state of your mic input (x means muted).
With a right click you can switch from push to talk to push to mute.
Don't forget to unblock your mike in Bluejeans/Google hangouts immediately after joining.
Be warned that page up with fn+down arrow will activate it.
Use space for page down instead of fn+up arrow.

### Google Calendar Guest Modify Event Default

[This Chrome extension](https://chrome.google.com/webstore/detail/google-calendar-guests-mo/hjhicmeghjagaicbkmhmbbnibhbkcfdb?hl=en) will allow guests to modify calendar appointments by default.

### Bluejeans

Please add instructions how to set up a Bluejeans meeting, how to record it and how to add the resulting video to our YouTube channel.

### Gmail

#### Filters

It might be useful to add a Gmail filter that adds a label to any GitLab
notification email in which you are specifically mentioned, as opposed to a
notification that you received simply because you were subscribed to the issue
or merge request.

1. Search for `@your_gitlab_username` in Gmail
1. Click the down arrow on the right side of the search field
1. Click "Create filter with this search"
1. Check "Apply the label:" and select a label to add, or create a new one, such
   as "Mentioned"
1. Check "Also apply filter to matching conversations."
1. Click "Create filter"

If your username on dev.gitlab.org is different from your username on
GitLab.com, you might want to create a similar filter for that username as well.

### Hangouts on air

Hangouts on Air probably only works with a maximum of 15 people for scheduled calls (same limit as normal Google Hangouts).

Potential problem: even when I logged in as GitLab and got the bar below the call, I could not switch it too on-air!
I did notice that the time was not properly set (anymore?).
I did a test event before and that seemed to work OK.
I'll try one more time to see if it works.

Potential problem 2: the video showed up as listed by default

Go to [My live events on YouTube](https://www.youtube.com/my_live_events) and switch to the GitLab account on the top right (you need to be a manager of our YouTube channel).

Go to => life streaming => events and create a new one with the attributes:

- type => quick (using Google Hangouts on Air)
- advanced: promotions: disable both checkboxes
- time needs to be set correctly

The view on watch page URL only allows for people to watch it.
Window that pops up when you press the start hangout on air button has the proper URL that you can send to other people and/or add it to the calendar invite, it is structured like: https://plus.google.com/hangouts/_/ytl/LONGHASH.
When people join the event they have to [accept a warning](https://gitlab.com/snippets/16245).

[Completed live events](https://www.youtube.com/my_live_events?filter=completed) will show the video and you can click the image to view it.
You can use actions to make it public here

BTW Trying to set this up via Google+ via [https://plus.google.com/hangouts/onair](Hangouts on Air) instead of via YouTube doesn't seem to connect to the right YouTube channel, even if you selected the right account on the top right.

### One Tab

[One Tab](https://www.one-tab.com/) tames tabs into a list which can be sorted and exported.

### Check which process occupies a given port

When the GitLab Development Kit cannot start using the `./run` command and
Unicorn terminates because port 3000 is already in use, you will have to check
what process is using it. Running `sudo lsof -i -n -P | grep TCP | grep 3000`
will yield the offender so this process can be killed. It might be wise to alias
this command in your `.bash_profile` or equivalent for your shell.

### MobileDay

If you install [MobileDay](https://mobileday.com/) on your phone and give it access to your Google Calendar it can dial into conference calls for you. It is very good at detecting the number and password from the calendar invite.

## Using Git to update this website<a name="starting-with-git"></a>

### Start using GitLab

1. Follow the step-by-step guides on the [basics of working with Git and GitLab](http://doc.gitlab.com/ce/gitlab-basics/README.html).
1. You will need to [create your SSH Keys](http://doc.gitlab.com/ce/gitlab-basics/create-your-ssh-keys.html).

### Install Git

1. Open a terminal.
1. Check your Git version by executing: `git --version`.
1. If Git is not installed, you should be prompted to install it.

### Install RVM

1. Visit [https://rvm.io](https://rvm.io/).
1. In a terminal, execute: `curl -sSL https://get.rvm.io | bash -s stable`.
1. Close terminal.
1. Open a new terminal to load the new environment.

### Install Ruby and Bundler

1. In a terminal, execute: `rvm install 2.2.1` to install Ruby
   (enter your system password if prompted).
1. Execute: `rvm use 2.2.1 --default` to set your default Ruby to `2.2.1`.
1. Execute: `ruby --version` to verify Ruby is installed. You should see:
   `ruby 2.2.1p85 (2015-02-26 revision 49769)`.
1. Execute: `gem install bundler` to install [Bundler](http://bundler.io/).

### Clone the source of the website and install its dependencies

1. In a terminal execute: `git clone https://gitlab.com/gitlab-com/www-gitlab-com.git`
   to clone the website.
1. Execute: `cd www-gitlab-com` to change to the `www-gitlab-com` directory.
1. Execute: `bundle install` to install all gem dependencies.

### Prevent newlines from causing all following lines in a file to be tagged as changed

This is especially a problem for anyone running a Mac OSX operating system. The
command to 'tame' git is `git config --global core.autocrlf input`

### Read the instructions

Instructions on how to update the website are in the [readme of www-gitlab-com](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/README.md).

### Preview website changes locally

1. In a terminal, execute: `bundle exec middleman`.
1. Visit http://localhost:4567 in your browser.
1. To edit the site locally you'll need to install a text editor. We recommend
   [Sublime Text 2](http://www.sublimetext.com/2).

### Test if all URL links in a page are valid

Until this is automated in CI, a quick way to see if there are any invalid
links inside a page is the following.

1. Install the [check-my-links][] extension in Chrome (no other browsers
   support unfortunately).
1. Open the page you wish to preview (see previous step).
1. Click the newly installed extension in the upper right corner of Chrome.

A pop-up window will open and tell you how many links, if any, are invalid.
Fix any invalid links and ideally any warnings, commit, push back, test again.

[check-my-links]: https://chrome.google.com/webstore/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfglf/
