---
layout: markdown_page
title: "Hiring"
---

## On this page
{:.no_toc}

- TOC
{:toc}

## General note on hiring

If you want to hire for a position please [make a job description](#vacancy-creation-process) and ensure there is a [vacancy](#vacancy-creation-process) on our jobs page before we start interviewing. A job description helps you vet candidates. Opening it up helps people find us. If selection of candidates is a lot of work feel free to ask People Ops to help.


## Vacancy Creation Process
<a name="vacancy-creation-process"></a>

The CEO needs to authorize any new job positions/searches, and agree on the proposed hiring team.

1. Define role and ask People Ops for compensation baselines / bands / guidelines. People Ops proposes a compensation range and submits this to the [compensation committee](/handbook/people-operations/#compensation-committee) for approval.
1. CEO approves the job requisition, which at this point includes title, role, and target compensation range.
1. Define hiring team. Roles can be assigned fluidly (see below for the
   [Hiring Process](#hiring-process)), depending on who is available, bearing in
   mind that the most time-consuming aspect tends to be review of the first wave
   of applicants.
1. If there is not already a job description, create the job description on our website; assign the merge request to the CEO as a way to obtain authorization.
    1. Create the relevant page in `https://about.gitlab.com/jobs/[name-of-job]`, being sure to use only lower case in naming your directory
       if it doesn't already exist. If the location of the applicant is important, then the location and a compensation range corresponding to that location can be provided as part of the job posting.
    1. In the [`data/jobs.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/jobs.yml) file, open the position or add a new entry for it. Positions are automatically sorted alphabetically by `title` on the [jobs page](/jobs/). When someone views the job's description page, an "Apply" button will be shown for that position if we're currently hiring for it.
          - Adding a new position: add an entry with the following format:

            ```yaml
            - title: "Chief Happiness Officer"
              description: /jobs/chief-happiness-officer/
              apply: https://gitlab.workable.com/jobs/12345/candidates/new
              open: true
            ```

          - Opening an existing position: If the position is already listed in the `jobs.yml` file but not "open", simply change `open: false` to `open: true` to have the position appear on the [listings](/jobs/).
          - Closing an existing position: If we're no longer hiring for a particular position change `open: true` to `open: false` for that position to hide it from the listings.
          - Note: You can leave the apply workable link blank until you have created it (see instructions below).
1. Once the job description and posting have been approved, create the job in [Workable](https://gitlab.workable.com/backend), using the exact same job title. If you do this step earlier, people will be able to apply even though the job posting may not have been approved yet.
   * For location, select "Telecommute".
   * For the description, write `For the job description, see [URL of relevant jobs page on about.gitlab.com]`
   * Indicate what applicants need to provide with their application. By default, this will include their resumé, a cover letter, but it may also include qualifying questions such as "What timezone are you in?".
   * Get one of the admins (People Ops and CEO) to "Publish" the job, and follow the links to the application form (you will need this URL).
   * Add the URL to the application form into the merge request for the `data/jobs.yml` file.
 1. As soon as the new job description / posting is live on our website, the hiring manager should announce it on the team call, in the #general chat channel, and via Twitter. Also consider your additional available [advertising methods](#job-advertising) below.


## Advertising the job
<a name="job-advertising"></a>

**Always** advertise the job through the following means:

1. Announce it on team call, and on the #general chat channel.
1. Tweet the new job posting.
1. "Soft” referral, e.g. encourage all GitLab team members to post links to the jobs site on their LinkedIn profiles.
1. Use the [Workable Clipper](http://resources.workable.com/the-workable-clipper) to help source candidates directly from LinkedIn, and  familiarize yourself with the Workable environment, work flow, features, and support desk.

**Consider** advertising the job through the following sites (People Ops can help with the listings, but the hiring manager should determine whether it is the right place to advertise, and at the right cost):

1. [PowerToFly](https://www.powertofly.com)
1. [Hacker News](https://news.ycombinator.com/ask): On the first of the month, include a note for GitLab in the Hacker News thread of "Who's Hiring" . Template text:
`REMOTE ONLY GitLab - We're hiring production engineers, developers, designers, and more, see https://about.gitlab.com/jobs/ We're a remote only company so everyone can participate and contribute equally. GitLab Community Edition is an open-source Ruby on Rails project with over 1000 contributors.`
1. [WeWorkRemotely](https://weworkremotely.com) ($200 for 30 days, per position).
1. [RemoteOK](https://remoteok.io) ($200 for ?? days, per position)
1. [RemoteBase](https://remotebase.io/) (Free. Job descriptions are synced directly to our respective job description sites)
1. [StackOverflow](http://stackoverflow.com/jobs); ask People Ops to help
1. [Tech Ladies](http://www.hiretechladies.com/) ($299 for 30 days, 2,000+ women in the database, current concentration in SF and NY)
1. [Support Driven Jobs](http://jobs.supportdriven.com/) $150 for 30 days, $250	for 45 days + highlight


## Hiring Process
<a name="hiring-process"></a>

### General points about moving applicants through the process
<a name="general-points"></a>

**Inform applicants about what stage they are in.** So for example, if in the hiring process for the particular position / team you've agreed that there will be 4 stages, make sure to inform the applicant of this during each call / stage: "You are in stage X, and will be moving to stage Y". The process can differ from team to team, and from position to position. If an applicant submits a resume to a particular position, and is later moved into an open application, send a short update notifying them that their process may be slightly different or delayed.

**Send Calendly link of the next person in the process.** If you have decided to let the applicant move on to the next interview, save time by sending the next interviewer's Calendly link to the applicant. This saves the time that it would otherwise take for the next interviewer to get around to sending the link, and it thus works in everyone's benefit.

**Compensation is discussed at start and end, but not in between.** Compensation expectations are asked about during the [screening call](#screening-call). If the expectations seem unworkable to the hiring manager (based on what had been discussed with the compensation committee at the [creation of the vacancy](#vacancy-creation-process)), then the hiring manager can send a note (or ask People Ops to send a note) to the candidate explaining that the expectations are too far apart. If the expectations are aligned, then the topic of compensation should not re-surface until an [offer is discussed internally](#offer-authorization). Following this guideline avoids conflating technical and team interviews with contract discussions, and keeps the process flowing smoothly.

**The CEO authorizes offers.** <a name="offer-authorization"></a>The hiring manager proposes a suggestion for an offer (including bonus structure if applicable, etc.) as an internal comment in Workable, and informs the CEO on its details depending on what is applicable. This may change if/when we have a [global compensation framework](/handbook/people-operations/#compensation-principles) in place.

Be aware that the visibility of internal comments in Workable can be switched between hiring team _managers_ only, or _all_ members of the hiring team.


### Typical process
<a name="typical-process"></a>

1. **Confirmation of the application**: applicants automatically receive confirmation of their application, thanking them for submitting their information. This is an automated message from Workable. If the person came through another channel please add them to Workable before continuing the process. There are various ways to do this, see [Workable's documentation](https://resources.workable.com/adding-candidates).
1. Hiring manager does a **first round of evaluations**. Disqualified candidates should be sent a note informing them of the [rejection](#rejecting). There are templates in Workable to assist, but messages can be tailored as appropriate: place yourself on the receiving end of the message. If more information is required to make the determination, feel free to specifically ask for it (e.g. a cover letter). (If you don't see the templates, you probably haven't [linked your email account to Workable](https://resources.workable.com/support/connecting-gmail-with-workable) yet.)
1. [**Screening call**](#screening-call): in Workable,
   1. ping our [People Ops Coordinator](https://about.gitlab.com/jobs/people-ops-coordinator/) to do a screening call;
   1. move the applicant to the "screening call" stage in Workable.
   1. send the applicant the calendly link of the People Ops Coordinator.
Depending on the outcome of the screening call, the hiring manager can either [reject an applicant](#rejecting), or move the applicant to the interview stage in Workable.
1. **Technical interview (optional)**: As described on the [Jobs](/jobs/) page, certain positions require [technical interviews](/jobs/#technical-interview).
1. **Further interviews** that would typically follow the reporting lines up to the CEO. So for instance, the technical interview would be by a co-worker, next interviews would be with the manager / team lead, executive team member, and then the CEO. See below for [sample questions](#interview-questions). The candidate should be interviewed by at least one female GitLab team member.
1. **Reference calls (optional)**: Make [reference calls](#reference-calls) for promising candidates. This process can start at an earlier stage, but should happen before an offer is made. At minimum two reference calls should be completed - one to a manager, the other to a colleague. Move the candidate to the "Reference Call" stage in Workable, and ping the relevant person from People Ops to get it going.
1. **CEO interview**: the CEO, as the primary culture carrier of the company, interviews all final round candidates.
Before the CEO has the final call with the applicant the hiring manager will write the following info in an internal note in our ATS:
    * who will extend the offer (CEO is fine with doing this since it is the most speedy for the applicant, but up to the hiring manager)
    * the proposed offer (in all cases, so also when someone else than the CEO makes the offer)
    * in case there are steps before making the final offer (more applicants in the running for the position) this should be noted <br>
1. When the CEO or hiring manager makes the **offer**, this can be done verbal during the call with the applicant, but is always followed quickly with the written offer as described in [the section on preparing offers and contracts](#prep-contracts).
1. People Ops will draft a contract based upon the written offer that was extended.
1. Hiring manager follows up to ensure that the offer is accepted, and that the contract is signed.
1. People Ops [starts the onboarding process](#move-to-onboarding).
1. Hiring manager considers [closing the vacancy](#closing-vacancy).

### Rejecting applicants
<a name="rejecting"></a>

1. At any time during the hiring process the applicant can be rejected.
1. The applicant should always be notified of this. The hiring manager is primarily
responsible for this, but People Ops can help and does a weekly check-up in Workable.
1. If the applicant asks for further feedback always offer frank feedback. This
is hard, but it is part of our [company values](/handbook/#values).
    * All feedback should be constructive and said in a positive manner. Keep it short and sweet.
    * Feedback should always be applicable to the skill set of the position the candidate applied and interviewed for.
    * Feedback and rejection should not be based on soft skills.
    * If you feel uncomfortable providing feedback for whatever reason, reach out to People Ops for assistance.
1. TODO: If the candidate is not hired, People Ops sends out an email to ask for feedback.
   * There is a "gathering applicant feedback" template in Workable with these questions.
The feedback survey should be sent out about 3 days after the applicant has been
notified of the rejection.
   * PeopleOps will receive the feedback and will use this to improve the hiring process.

## Screening Call
<a name="screening-call"></a>

For some positions, we conduct screening calls. This call is typically done by our [People Ops Coordinator](https://about.gitlab.com/jobs/people-ops-coordinator/).

Questions are:

1. Why are they looking for a new job?
1. What is your experience with X? (do for each of the skills asked in the job description)
1. Current address? (relevant in context of comp, and in case of contract we will need that information).
1. How do they feel about working remotely and do they have experience with it?
1. Compensation expectation and compensation in current/last job.
1. STAR questions and simple technical questions may also be asked during the screening call if applicable.

[An example of the output of a good screening call](https://gitlab.workable.com/backend/jobs/128446/browser/applied/candidate/7604850) (need workable account).

At the end of the screening call applicant should be told what the timeline is for what the next steps are (if any).
An example message would be "We are reviewing applications through the end of next week, and will let you know by the end of two weeks from today whether you've been selected for the next round or not. Please feel free to ping us if you haven't heard anything from us by then."

## Interviewing
<a name="interviewing"></a>

Interviewing is hard, it's hard for both sides. In less than one hour you both need to get to know each other and
both will have to make the decision if you want to work with this person.
This is an effort to provide a set of guidelines to make interviewing a bit less traumatizing.


### Before the interview

* Screening - writing a good resume is an art, and not many people master it. When you read a resume look for evolution rather than buzzwords, and if something sparks your curiosity, ask.
* Spend some time talking through email to get to know each other. Since GitLab is remote-only company, most of our interactions happen on written form. Check that this person can communicate efficiently this way. If it is for a technical position, ask open ended technical questions. The value of these questions is that there is no absolute good answer, it lets you see how this person thinks.
* If the process is taking too long, apologize and explain what is going on. It is really frustrating to not hear anything from the other side, and then resume conversations like nothing has happened. Show respect for the time of the candidate.
* If the process ends at this stage, be kind, and if the interviewee asks for feedback, give honest constructive feedback that explains why have we taken our decision.

### During the interview

1. There is an unbalanced power relationship during the interview. The interviewer is in a powerful position. It will decide if this candidate will get an offer or not. Be mindful of this. Be as friendly and approachable as you can. Be frank about what is going on, explain how the interview is going to be and set clear expectations: tell it like it is. This has the added value of getting people comfortable (over time) and allows you to get much better data.
1. Communication is really hard, don't expect perfect answers. Every person is different and they will express things differently, they are not listening your train of thought so they will say things differently than what you expect, work on approaching to what they are trying to say rather than demanding them to approach to you. Once you have an answer validate your assumptions by explaining to the interviewed what did you understood and allow the candidate to correct your story.
1. Don't go checking for perfect theoretical knowledge that the interviewee can google when needed, or give a problem that took you 2 months to dominate yet you expect your interviewee to master in a 30 minutes conversation. Be fair.
1. Aim to at the end of the interview know if you want to work with this person.
1. Interview for soft skills, really, do it. Pick some behavioral questions to get data on what has the candidate done before and how his behavior aligns to the company values. We are all going to be much happier if we all naturally agree on how things should be.
1. Consider having more people interviewing with you, different people see and value different things. More data helps making better decisions and ends up being a better use of interviewing time for both the candidate and the company.
1. Always let the interviewee ask questions at the end, and be frank in your answers.

#### Technical interviews

1. Try to get a real sample of work (which we already do for developers by working on GitLab issues) Avoid puzzles or weird algorithm testing questions. Probing for data structures is fine as long as it is relevant to the job the person is going to do.
1. Be mindful of the background of the candidate, someone who knows 10 languages already (and some languages in particular, Perl for ex), may pickup ruby in a second given the right chance. Don't assume that someone with a Java background will not be capable of moving to a different stack.
1. Consider including non technical people performing soft skills questions. Because technical people should be capable of talking to non-technical just fine, we should assess it.

### Behavioral questions (STAR)

The goal of these questions is to get the candidate to share something they did in the past. Previous behavior is considered the best way to predict how a person is going to act in the future.

They usually start with the form "Can you tell me about a time when...". The kind of answer that we are looking for is to get a story that is structured following the Situation, Task, Action, Result.

There is no right answer, what matters here is to hear the candidate and gather data on how is it telling the story.

Some things to pay attention to:

* What was the candidate role? Was it a leader? A follower? Why?
* What is it highlighting as important? Did it matter?
* Is it clearly explained? Is the story well told? If it is a technical story and the interviewer is a non-technical person, are things being explained in a way that make sense?
* If you ask "why?" will you get an actual explanation?
* Is the Task and the Action clear? Is it well reasoned?
* Is there a result or was the story left unfinished? Is it still going on?
* Was the result measured in any way? How does the candidate know that the result matches the expectation? Was there an expectation?

These questions can be quite unbalancing and can increase the stress during the interview. Again, be kind and help the candidate understand what are you looking for, provide a sample if it is needed and you notice that the candidate is blocked.

It can also happen that the candidate does not have a story to share with you, that is OK. It's just another data point that should be added to the feedback (I failed to get data on ...), just move to the next question, just be sure to have a few questions as a backup.

These questions should be aligned with our company values. What we are looking for is understanding how this candidate behaves, and if this behavior matches the one we look for in our company values.

Once you have your notes, tell the candidate what you understood, repeat the story, and let them correct you as needed.

### Interview feedback

Always leave feedback, this will allow the rest people to understand what happened and why you took the decision you took.

One way of writing the feedback is as follows:

> Vote: inclined/not inclined
> Summary: your general impressions, a brief description on what have you seen, where you stand, and why.
> Pros: what is good, and where did you found it during the interview, bullet points is fine.
> Cons: weak spots. Where the candidate failed to you, why, consider that some things can be taught or learnt.
> Interview notes: What questions were asked, what story you got back. Ex.
>   Tell me about a time when you did X
>   The candidate told me a story when she was working in his current gig doing... They had to do... It went well because she took the leadership and .... In the end they increased their sales in a 30%, she measured it by doing ...

The vote is critical as it is telling the rest of the people what is your final thinking here. The rest should explain why do you think so.

## Interview Questions
<a name="interview-questions"></a>

Note: So you are about to interview folks for a job at GitLab? Please take a moment to carefully read
[this document on keeping it relevant and legal, including a self-test](https://docs.google.com/document/d/1JNrDqtVGq3Y652ooxrOTr9Nc9TnxLj5N-KozzK5CqXw).

1. Thanks for taking the time to interview with us. I would like to take notes during this interview. This might cause me to look distracted since I'll be looking at another screen. What do you think?
1. Do you have any questions about the job, our organization, our strategy, or me personally?
1. Why did you apply to GitLab?
1. For each significant study and job I will ask: why did you select this one and why you moved on? Please give a short answer in 1 or 2 sentences. I will ask if I want to know more. You don't have to say what you did during the job, you already passed your technical interview.
1. What were you most satisfied with in your recent/current position?
1. What did you like least about your recent/current position?
1. Take each skill required for the job and do a [STAR](https://en.wikipedia.org/wiki/Situation,_Task,_Action,_Result) for a couple of situations.
1. What professional achievements are you most proud of?
1. Whose careers have you made better?
1. How do you keep up-to-date with developments in your profession?
1. If you don't get this job what will you do instead?
1. Are you interviewing anywhere else?
1. How can we change GitLab as a software product to make it better?
1. What can we change in GitLab as an organization to make it better, for example the hiring process or the handbook?
1. What do you expect to achieve in your first month at GitLab?
1. Where do you want to be in three years from now?
1. How do you feel about working remotely?
1. If you get hired, when can you start?
1. What compensation would you feel comfortable with?
1. Do you have any questions for me?

These questions are also available in a [Google form](https://docs.google.com/forms/d/1lBq_oXaqpQRs-SeEs3EvpxFGK55Enqn_nzkLq2l3Rwg/viewform) which can be used to save time during the actual interview.

## Reference calls
<a name="reference-calls"></a>

As part of our hiring process we may ask applicants to provide us with one or more
references to contact. These reference calls are typically be done by our [People Ops Coordinator](https://about.gitlab.com/jobs/people-ops-coordinator/) or the hiring
 manager for that specific vacancy following [these guidelines](http://www.bothsidesofthetable.com/2014/04/06/how-to-make-better-reference-calls/).

## Getting Offers and Contracts Ready, Reviewed, and Signed
<a name="prep-contracts"></a>

Offers made to new team members should be documented in the email thread between the person authorized to make the offer (e.g. CEO) and the applicant.

1. Email example is in the "Offer letter" template in Workable. When using the template:
   1. make sure that you offer the correct [contract type and entity](/handbook/contracts/#how-to-use), ask People Ops if in doubt;
   1. include the People Ops alias in the cc (when you are ready for a written contract to be made), and
   1. change the subject line of the email. The default subject line in Workable is "{position name} - GitLab", but when making multiple hires for the same position, this can cause confusion in a Gmail inbox that collects conversation threads based on subject line. So for example make it "{first name of applicant} - offer for {position name} at GitLab" (this is something that we cannot do in the Workable template, unfortunately).
   1. Note: the number of proposed stock options must always be mentioned specifically, even when it is 0.
1. One person from People Operations will reply-to-all to everyone in the thread (including the applicant) to confirm that they will make the contract. Speed matters: if you are in People Operations and you can tackle this, then raise your hand and hit reply-all.
1. This person from People Operations
   1. checks all aspects of the offer:
      - was it approved by the CEO?
      - do the contract type and entity make sense?
      - is it clear how many (if any) stock options this person should receive?
      - is all necessary information (start date, salary, location, etc.) clearly available and agreed to?
   1. makes the contract based on the details found in the Workable platform, using reply-all to gather any missing pieces of information,
   1. has the contract reviewed by the VP of Scaling, CEO, or CFO (should not be the same as the person making the offer)
   1. confirms with a reply-to-all when the contract is sent.
1. When the contract is signed, the People Ops team member or hiring manager should move the candidate in Workable to the "Hired" bucket of the "Hired Team Members (admin access only)" job. This accomplishes two goals. First, thanks to an integration between Workable and BambooHR, it will automatically add an entry for the new team member in BambooHR. However, in the automatic move, "self-service" is switched off in BambooHR by default, so this must be switched on explicitly within BambooHR. Second, by keeping the application and interview notes of successful applicants in a more restricted area of Workable we are able to maintain confidentiality if/when the applicant becomes involved in the hiring process for their peers.
1. This same person from People Operations files the signed contract in the appropriate place, and starts the [**onboarding issue**](/handbook/general-onboarding/).

Note for People Operations:<br>
- the type of contract required (employee or contractor; BV or Inc) is clarified by the guideline on the
[Contracts page](/handbook/contracts).
- Onboarding info for the PeopleOps system, BambooHR, can be found on the [PeopleOps](/handbook/people-operations) page.

## Closing a vacancy
<a name="closing-vacancy"></a>

To close a vacancy:

1. Hiring manager to clear the pipeline of candidates in all stages of application. Consider adding tags to candidates who were interesting but were passed over in this hiring process. Adding tags makes it easier to find them in Workable later on if you are recruiting for the same or a similar position.
1. Ask a Workable admin (People Ops) to close the position in Workable. People Ops: consider archiving the job posting to reduce number of positions GitLab is charged for by Workable.
1. Create a merge request, in which you remove the application URL for Workable, and set the listing flag in the `jobs.yml` file to `open: false`. See ["vacancy creation process"](#vacancy-creation-process) for reference).

If the position was posted on RemoteBase, People Ops should email hello@remotebase.io to remove the job posting.

## Underperformance
<a name="underperformance"></a>

See [underperformance guidelines](/handbook/underperformance).
