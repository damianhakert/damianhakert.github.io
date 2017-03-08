---
layout: markdown_page
title: "Hiring"
---

## On this page
{:.no_toc}

- TOC
{:toc}

## Hiring Introduction

GitLab is committed to hiring the best talent through an open and fair hiring process. Our hiring is managed by our [Global Recruiters](https://about.gitlab.com/jobs/recruiter/) as part of People Operations. The following information on our process has two main objectives:
1. It is meant to be instructive for GitLab employees on how to conduct interviews and best hiring practices.
1. It acts as an informative tool for applicants during the process to better anticipate and prepare for interviews and next steps. For job-specific hiring information, applicants can now reference the *hiring process* section of each job description. For general information review the [typical process](#typical-process) and for details on our interviews refer to [screening](#screening-call), [interviewing](#interviewing), and [interview questions](#ceo-interview-questions).


## Equal Employment Opportunity

 Diversity is one of GitLab's core [values](https://about.gitlab.com/handbook/values) and
 GitLab is dedicated to providing equal employment opportunities (EEO) to all team members
 and applicants for employment without regard to race, color, religion, sex,
 national origin, age, disability, or genetics. One example of how put this into practice
 is through sponsorship of [diversity events](https://about.gitlab.com/2016/03/24/sponsorship-update/)

 GitLab complies with all applicable laws governing nondiscrimination in employment. This policy applies to all terms and conditions of employment, including recruiting, hiring, placement, promotion, termination, layoff, recall, transfer,
 leaves of absence, compensation, and training. GitLab expressly prohibits any form of workplace harassment.
 Improper interference with the ability of GitLab’s team members to perform their job duties
 may result in discipline up to and including discharge. If you have any complaints, concerns,
 or suggestions to do better please [contact People Ops](/handbook/people-operations/#reach-peopleops).

## Vacancy Creation Process

If you want to hire for a position please [make a job description](#vacancy-creation-process) and ensure there is a [vacancy](#vacancy-creation-process) on our jobs page before we start interviewing. A job description helps you vet candidates accurately. Opening it up helps people find us.

The CEO must authorize any new job positions/searches.

1. Hiring manager identifies the need for a new or replacement team member and contacts the People Ops Generalist to review their strategic hiring plan.
1. If a job description does not already exist, the hiring manager will work with the People Ops Generalist and Global Recruiters to create an accurate job description for the website including location or timezone specification if required, requirements, preferences, and hiring process.
    1. Create the relevant page in `https://about.gitlab.com/jobs/[name-of-job]`, being sure to use only lower case in naming your directory
       if it doesn't already exist. If the location of the applicant is important, then the location and a compensation range corresponding to that location can be provided as part of the job posting.
    1. In the [`data/jobs.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/jobs.yml) file, open the position or add a new entry for it. Positions are automatically sorted alphabetically by `title` on the [jobs page](/jobs/). When someone views the job's description page, an "Apply" button will be shown for that position if we're currently hiring for it.
          - Adding a new position: add an entry with the following format:

            ```
            - title: "Chief Happiness Officer"
              description: /jobs/chief-happiness-officer/
              salary:
              apply: https://gitlab.workable.com/jobs/12345/candidates/new
              open: true
            ```

          - Opening an existing position: If the position is already listed in the `jobs.yml` file but not "open", simply change `open: false` to `open: true` to have the position appear on the [listings](/jobs/).
          - Closing an existing position: If we're no longer hiring for a particular position change `open: true` to `open: false` for that position to hide it from the listings.
          - Note: You can leave the apply workable link blank until you have created it (see instructions below).
1. People Ops Generalist pings the  VP of Scaling (for now) and People Ops Specialist to propose an appropriate NYC benchmark compensation for the role, and they submit the proposal to the [compensation committee](/handbook/people-operations/global-compensation-calculator/#compensation-committee) for approval.
   - For any position, filling in the NYC benchmark salary in the `jobs.yml` file will automatically cause the [Compensation Calculator](/handbook/people-operations/global-compensation-calculator) to show at the bottom of the job description page.
   - For some positions, it may be possible or desirable to exclusively seek candidates outside of higher cost regions. This is a role by role decision between the Hiring Manager and People Operations. _If_ it is decided to seek candidates outside of higher cost regions, then that needs to be explicitly communicated on the job description page in order to set fair expectations for candidates and recruiters alike. Sample text to consider placing on the job description page: "Globally, xx % of people live in metro areas with a rent index greater than yy, while at GitLab, this is zz % of people in this role currently. Therefore, in line with our value of staying [frugal](/handbook/values), we are now focusing on only hiring in metro areas with a **rent index lower than yy**. Please bear this in mind when using the compensation calculator below." (obviously, fill in the missing numbers).
1. People Ops Generalist pushes a merge request to the CEO to approve the job requisition; which at this point includes the title, requirements for the role, and details on compensation as applicable.
1. Once the job description and posting have been approved, one of the Global Recruiters will create the job in [Workable](https://gitlab.workable.com/backend), using the exact same job title. If this step is completed out of order, people are able to apply even though the job posting may not have been approved yet.
   * For location, select "Telecommute".
   * For the description, write `For the job description, see [URL of relevant jobs page on about.gitlab.com]`
   * Indicate what applicants need to provide with their application. By default, this will include their resumé, a cover letter, but it may also include qualifying questions such as "What timezone are you in?".
   * Get one of the admins (People Ops and CEO) to "Publish" the job, and follow the links to the application form (you will need this URL).
   * Add the URL to the application form into the merge request for the `data/jobs.yml` file.
 1. As soon as the posting is live on our website, a Global Recruiter will announce it on the next team call, post it in the `#general` chat channel and on Twitter. Also consider the additional [advertising methods](#publicize-the-job) below as a means to communicate the open position to a desired audience.
 1. All job openings must be posted on our careers page for at least 5 business days before we can make an offer; this includes all new positions and [promotions](/handbook/people-operations/#promotions).
 1. Jobs will be closed after 15 business days to evaluate candidates in the pipeline, and will reopen if a candidate is not selected from the initial pool.


## Publicize the job

The hiring manager should always ask the team for passive referrals for open positions. GitLab team members can refer candidates through our [referral program](/handbook/incentives/#referral-bonuses)

The recruiting team will **always** publicize the job through the following means:

1. Announce it on team call and on the #general chat channel.
1. Tweet the new job post with the help of the content marketing manager and team.
1. Request "soft” referrals by encouraging all GitLab team members to post links to the jobs site on their LinkedIn profiles.
1. Use the [Workable Clipper](http://resources.workable.com/the-workable-clipper) to source candidates directly from LinkedIn.

**Note**: The recruiting team will advertise the job through the following sites:

1. [PowerToFly](https://www.powertofly.com) Helping us connect with 100k+ women in tech
1. [Hacker News Who's Hiring](https://news.ycombinator.com/ask): On the first of the month, include a note for GitLab in the Hacker News thread of "Who's Hiring" . Template text:
`REMOTE ONLY GitLab - We're hiring production engineers, developers, designers, and more, see https://about.gitlab.com/jobs/ We're a remote only company so everyone can participate and contribute equally. GitLab Community Edition is an open-source Ruby on Rails project with over 1000 contributors.`
1. [Hacker News Jobs](https://news.ycombinator.com/jobs) as a Y Combinator alumni we can post directly to the front page. The EA vault has credentials so ask an EA to post. Template text: `GitLab (YC W15) is hiring XXX and more - Remote Only`
1. [WeWorkRemotely](https://weworkremotely.com) ($200 for 30 days, per position).
1. [RemoteOK](https://remoteok.io) ($200 for 90 days, per position)
1. [RemoteBase](https://remotebase.io/) (Free. Job descriptions are synced directly to our respective job description sites)
1. [StackOverflow](http://stackoverflow.com/jobs) (Able to post 3 jobs simultaneously, please mention to recruiting team if you want your role listed here)
1. [Indeed Prime](http://www.indeed.com/) (Primarily used for non-engineering roles)

### Sourcing for Open Positions

On difficult or hard-to-fill positions, the recruiting team will use available tools to source for additional candidates. Please communicate with the recruiting team if sourcing is needed for a strategic, specialized, or difficult to fill position.


## Hiring Process

### General points about moving applicants through the process

**Remember to inform applicants about what stage they are in.** So, for example, if in the hiring process for the particular position / team you've agreed that there will be four stages, be sure to inform the applicant of where they are in the process during each call / stage: "You are in stage X and will be moving to stage Y next." Some brief feedback from the previous stage can also be included to help the candidate gauge their progress.

**The process can differ from team to team and from position to position.** If an applicant submits a resume to a particular position and is later moved into an open application, send a short update notifying them that their process may be slightly different or delayed.

**Send Calendly link of the next person in the process.** If you have decided to move the applicant on in the process, save time by sending the next interviewer's Calendly link to the applicant. This saves the time it would otherwise take the next interviewer to send the link.

**Compensation is discussed at start and end but not in between.** Compensation expectations are asked about during the [screening call](#screening-call). If the expectations seem unworkable to the hiring manager or recruiter (based on what had been approved by the compensation committee at the [creation of the vacancy](#vacancy-creation-process)), then the recruiter can send a note to the candidate explaining that salary expectations are too far apart. If expectations are aligned, then the topic of compensation should not re-surface until an [offer is discussed internally](#offer-authorization). Following this guideline avoids conflating technical and team interviews with contract discussions and keeps the process flowing smoothly.

**The CEO authorizes all offers.** <a name="offer-authorization"></a>The hiring manager proposes a suggestion for an offer (including bonus structure if applicable, etc., using the [global compensation framework](/handbook/people-operations/global-compensation-calculator)) as an internal comment in Workable and informs the CEO on its details depending on what is applicable.

Be aware that the visibility of internal comments in Workable can be switched between hiring team _managers_ only, or _all_ members of the hiring team.

If you have completed your portion of the hiring process and would like to stop receiving notifications about a candidate from Workable, remove yourself as a follower. To do this go to the candidate's profile, under timeline there are boxes with the photo of each follower. Uncheck your photo/name, and this will remove you from the Workable emails. You will be added to each candidate profile upon being mentioned, so you might have to remove yourself each time.


### Typical process

An applicant should expect to wait 2-3 business days between each step of the process. An applicant, at any time, is welcome to contact the recruiter they are working with for an update on their candidacy.

1. **Confirmation of the application**: applicants automatically receive confirmation of their application, thanking them for submitting their information. This is an automated message from Workable. If the person came through another channel they must be added to Workable before continuing the process. There are various ways to do this, see [Workable's documentation](https://resources.workable.com/adding-candidates).
1. Recruiting team does a **first round of evaluations**. Disqualified candidates should be sent a note informing them of the [rejection](#rejecting-applicants). There are templates in Workable to assist, but messages can be tailored as appropriate: place yourself on the receiving end of the message. If more information is required to make the determination, feel free to specifically ask for it (e.g. a cover letter). (If you don't see the templates, you probably haven't [linked your email account to Workable](https://resources.workable.com/support/connecting-gmail-with-workable) yet.)
1. **Pre-screening Questionnaire** Applicants will be sent a pre-screening questionnaire relating to the position by either the recruiting team or the hiring manager to complete and return to the sender. Responses will be added to the candidate's Workable profile.
1. [**Screening call**](#screening-call): in Workable,
   1. Our [Global Recruiters](https://about.gitlab.com/jobs/global-recruiter/) will do a screening call;
   1. move the applicant to the "screening call" stage in Workable.
   1. send the applicant the Calendly link for the Recruiters, there is a template in Workable.
Depending on the outcome of the screening call, the hiring manager can either [reject an applicant](#rejecting-applicants), or move the applicant to the interview stage in Workable.
1. **Technical interview (optional)**: As described on the [Jobs](/jobs/) page, certain positions require [technical interviews](/jobs/#technical-interview).
1. **Further interviews** that would typically follow the reporting lines up to the CEO. So for instance, the technical interview would be by a co-worker, next interviews would be with the manager / team lead, executive team member, and then the CEO. See below for [sample questions](#interview-questions). The candidate should be interviewed by at least one female GitLab team member.
1. **Reference calls**: Make [reference calls](#reference-calls) for promising candidates. This process can start at an earlier stage, but should happen before an offer is made. At minimum two reference calls should be completed - one to a manager, the other to a colleague. Move the candidate to the "Reference Call" stage in Workable, and ping the relevant person from People Ops to get it going.
1. **CEO interview**: the CEO, as the primary culture carrier of the company, interviews all final round candidates.
Before the CEO has the final call with the applicant the hiring manager will write the following info in an internal note in our ATS:
    * who will extend the offer (CEO is fine with doing this since it is the most speedy for the applicant, but up to the hiring manager)
    * the proposed offer (in all cases, so also when someone else than the CEO makes the offer)
    * in case there are steps before making the final offer (more applicants in the running for the position) this should be noted <br>
1. When the CEO or hiring manager makes the **offer**, this can be done verbal during the call with the applicant, but is always followed quickly with the written offer as described in [the section on preparing offers and contracts](#prep-contracts).
1. People Ops will draft a contract based upon the written offer that was extended.
1. Hiring manager follows up to ensure that the offer is accepted, and that the contract is signed.
1. People Ops [starts the onboarding process](#move-to-onboarding).
1. Hiring manager considers [closing the vacancy](#closing-a-vacancy).

### Rejecting applicants

1. At any time during the hiring process the applicant can be rejected.
1. The applicant should always be notified of this. The recruiting team is primarily
responsible for declining candidates.
1. If the applicant asks for further feedback only offer frank feedback. This
is hard, but it is part of our [company values](/handbook/values).
    * All feedback should be constructive and said in a positive manner. Keep it short and sweet.
    * Feedback should always be applicable to the skill set of the position the candidate applied and interviewed for.
    * Feedback and rejection should always be based on the job requirements.
    * If you feel uncomfortable providing feedback for whatever reason, reach out to People Ops for assistance.
1. If people argue with the feedback that we provided:
    * Do not argue with or acknowledge the validity of the contents of the feedback.
    * Share their feedback with the people involved in the interviews and the decision.
    * Template text: "I've shared your feedback with the people involved in the interviews and the decision. We do not expect to revert the decision based on your feedback. In our hiring process we tend to error on being too cautious. We rather reject someone by mistake than hire someone by mistake, since a wrong hire is much more disruptive. Organizations can reject people with great potential http://thehustle.co/whatsapp-founder-got-rejected-by-both-twitter-and-facebook-before-19-billion-buyout so please don't be discouraged from seeking a great job."
1. The recruiting team will send out an inquiry to all candidates to gather feedback after they have exited the hiring process. The feedback survey should be sent out within 2 days after the applicant has been notified of the rejection or hire.
   * People Ops will review all feedback and use it to improve the hiring process.

## Screening Call

We conduct screening calls for all positions. This call will be completed by our [Global Recruiters](https://about.gitlab.com/jobs/global-recruiter/).

Questions are:

1. Why are they looking for a new job?
1. Why did they apply with GitLab?
1. What is your experience with X? (do for each of the skills asked in the job description)
1. Current address? (relevant in context of comp, and in case of contract we will need that information)
1. Full legal name? (relevant in case an offer would be made)
1. How do they feel about working remotely and do they have experience with it?
1. Compensation expectation.
1. Notice period needed
1. STAR questions and simple technical questions may also be asked during the screening call if applicable.

[An example of the output of a good screening call](https://gitlab.workable.com/backend/jobs/128446/browser/applied/candidate/7604850) (need workable account).

At the end of the screening call applicant should be told what the timeline is for what the next steps are (if any).
An example message would be "We are still reviewing applications, but our goal is to let you know in 3 business days from today whether you've been selected for the next round or not. Please feel free to ping us if you haven't heard anything from us by then."

## Interviewing

Interviewing is hard, it's hard for both sides. In less than one hour you both need to get to know each other and
both will have to make the decision if you want to work with this person.
This is an effort to provide a set of guidelines to make interviewing a bit less traumatizing.

Note: So you are about to interview folks for a job at GitLab? Please take a moment to carefully read
[this document on keeping it relevant and legal, including a self-test](https://docs.google.com/document/d/1JNrDqtVGq3Y652ooxrOTr9Nc9TnxLj5N-KozzK5CqXw)(please note this document is internal to GitLab while we edit it to make it fit for general audiences). For example, if there is a gap in employment history on a CV, you can ask the candidate what they did during that time to keep their skills current. You may not ask why they were absent from work as it may be related to a medical or family issue which is protected information.

### Before the interview

* Screening - writing a good resume is an art, and not many people master it. When you read a resume look for evolution rather than buzzwords, and if something sparks your curiosity, ask.
* If the process is taking too long, apologize and explain what is going on. It is really frustrating to not hear anything from the other side, and then resume conversations like nothing has happened. Show respect for the time of the candidate.
* If the process ends at this stage, be kind, and if the interviewee asks for feedback, give honest constructive feedback that explains why have we taken our decision.

### During the interview

1. There is an unbalanced power relationship during the interview. The interviewer is in a powerful position. It will decide if this candidate will get an offer or not. Be mindful of this. Be as friendly and approachable as you can. Be frank about what is going on, explain how the interview is going to be and set clear expectations: tell it like it is. This has the added value of getting people comfortable (over time) and allows you to get much better data.
1. Communication is really hard, don't expect perfect answers. Every person is different and they will express things differently, they are not listening to your train of thought so they will say things differently than what you expect, work on approaching to what they are trying to say rather than demanding them to approach to you. Once you have an answer validate your assumptions by explaining to the interviewed what you understood and allow the candidate to correct your story.
1. Don't go checking for perfect theoretical knowledge that the interviewee can google when needed, or give a problem that took you 2 months to dominate yet you expect your interviewee to master in a 30 minutes conversation. Be fair.
1. Aim to at the end of the interview to know if you want to work with this person.
1. Interview for soft skills, really, do it. Pick some behavioral questions to get data on what has the candidate done before and how his behavior aligns to the company values. We are all going to be much happier if we all naturally agree on how things should be.
1. Consider having more people interviewing with you, different people see and value different things. More data helps making better decisions and ends up being a better use of interviewing time for both the candidate and the company.
1. Always let the interviewee ask questions at the end, and be frank in your answers.

#### Technical interviews

1. Try to get a real sample of work (which we already do for developers by working on GitLab issues) Avoid puzzles or weird algorithm testing questions. Probing for data structures is fine as long as it is relevant to the job the person is going to do.
1. Be mindful of the background of the candidate, someone who knows 10 languages already (and some languages in particular, Perl for ex), may pick up Ruby in a second given the right chance. Don't assume that someone with a Java background will not be capable of moving to a different stack. Note that individual positions may have stricter requirements; the Backend Developer position [requires Ruby experience](/jobs/developer/#ruby-experience), for example.
1. Consider including non-engineering people to ask soft skills questions. Because technical people should be capable of talking to non-engineering just fine, we should assess it.

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

For a brief explanation about how behavioral interviews work refer to [this video](https://drive.google.com/a/gitlab.com/file/d/0B0peM56mhGBEcXk2N2U3b05NNWc/view?usp=sharing) (GitLab's internal use only)

### Interview feedback

Always leave feedback, this will help everyone to understand what happened and how you came to your decision.

One way of writing the feedback is as follows:

> Vote: Inclined, Semi-Inclined or Not Inclined to Hire

> Score: Rate a candidate as 1-5 out of 5

>  Summary: Include your general impressions, a brief description on what have experienced during interviews, where you stand and why you have this prospective. Bullet points are fine.
Pros: What is good and where did you hear it during the interview?
Cons: Where are the candidate's weaknesses specific to the requirements of the job? Identify how the candidate fell short of your expectations and why. Consider that some things can be taught or learned.
Interview notes: What questions were asked and what story did you got back? Ex.
>   Tell me about a time when you did X
>   The candidate told me a story when she was working in his current gig doing... They had to do... It went well because she took the leadership and .... In the end they increased their sales in a 30%, she measured it by doing ...

The vote and score are critical as they tell the rest of the hiring team your opinion on this hire.

Scoring can be defined as follows:

5 - Certainly would hire (meets all requirements, aligns with values, no flags)
4 - Likely to hire (meets most requirements, aligns with values)
3 - Neutral (may meet some requirements, has some yellow flags)
2 - Not likely to hire (meets few requirements, has many yellow flags, may not align with values well)
1 - Would not hire (does not meet requirements, red flags, not aligned with values)

## CEO Interview Questions

The questions are available in a [Google form](https://docs.google.com/forms/d/1lBq_oXaqpQRs-SeEs3EvpxFGK55Enqn_nzkLq2l3Rwg/viewform) which can be used to save time during the actual interview.
All candidates are asked to fill out the form when they are scheduled for an interview with our CEO to discuss during their call with the CEO.

## Reference calls

As part of our hiring process we will ask applicants to provide us with two or more
references to contact. These reference calls are completed by our [Global Recruiters](https://about.gitlab.com/jobs/global-recruiter/) following [these guidelines](http://www.bothsidesofthetable.com/2014/04/06/how-to-make-better-reference-calls/).

## Getting Offers and Contracts Ready, Reviewed, and Signed
{: #prep-contracts}

Offers made to new team members should be documented in Workable through the email thread between the person authorized to make the offer and the applicant.

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
   1. has the contract reviewed and approved by another member of PeopleOps as a quality check. The Global Recruiter who did not create the contract will conduct the quality check. Backups for approval are the People Ops Generalist, then the People Ops Specialist, and lastly the Sr. Director of People Operations.
   1. stages the contract in HelloSign and emails offer to the signing parties, cc PeopleOps
1. When the contract is signed, the People Ops team member should move the candidate in Workable to the "Hired" bucket of the "Hired Team Members (admin access only)" job. This accomplishes two goals. First, thanks to an integration between Workable and BambooHR, it will automatically add an entry for the new team member in BambooHR. However, in the automatic move, "self-service" is switched off in BambooHR by default, so this must be switched on explicitly within BambooHR. Second, by keeping the application and interview notes of successful applicants in a more restricted area of Workable we are able to maintain confidentiality if/when the applicant becomes involved in the hiring process for their peers.
1. This same person from People Operations files the signed contract in the appropriate place, and starts the [**onboarding issue**](/handbook/general-onboarding/).
1.Candidates will start the onboarding process no more than 30 days before her/his start date.

Note for People Operations:<br>
- the type of contract required (employee or contractor; BV or Inc) is clarified by the guideline on the
[Contracts page](/handbook/contracts).
- Onboarding info for the PeopleOps system, BambooHR, can be found on the [PeopleOps](/handbook/people-operations) page.

## Closing a vacancy

To close a vacancy:

1. The recruiting team will clear the pipeline of candidates in all stages of application. Consider adding tags to candidates who were interesting but were passed over in this hiring process. Adding tags makes it easier to find them in Workable later on if you are recruiting for the same or a similar position.
1. Ask a Workable admin (People Ops) to close the position in Workable. People Ops: consider archiving the job posting to reduce number of positions GitLab is charged for by Workable.
1. Recruiting team will create a merge request, in which you remove the application URL for Workable, and set the listing flag in the `jobs.yml` file to `open: false`. See ["vacancy creation process"](#vacancy-creation-process) for reference).

If the position was posted on any job site (i.e. Stack Overflow, PowerToFly) the recruiting team will email the partner or remove the position from that site.


## Visas & Work Permits

GitLab does not offer full sponsorship for obtaining a H1B visa at this time.
If you already have an H1B visa and were hired, based on proven performance in the role, we would review and consider providing support for transferring your existing H1B. For questions on how to go about transferring an H1B Visa please see [People Operations](https://about.gitlab.com/handbook/people-operations/visas/#h1b-visa-processing).

For work permits and visas in The Netherlands please refer to [Dutch Work Permits](https://about.gitlab.com/handbook/people-operations/#dutch-work-permits) in our handbook.
