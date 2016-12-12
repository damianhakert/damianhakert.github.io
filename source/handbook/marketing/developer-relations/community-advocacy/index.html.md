---
layout: markdown_page
title: "Community Advocacy"
---

## Finding the Community Advocates

- [**Public Issue Tracker**, as part of the Marketing team](https://gitlab.com/gitlab-com/marketing/issues/); please use confidential issues for topics that should only be visible to team members at GitLab.
- [**Support Issue Tracker**, issues filtered to *Community*](https://gitlab.com/gitlab-com/support/issues?label_name%5B%5D=Community+); please use this issue tracket for community interaction related issues only.
- [**Chat channel**](https://gitlab.slack.com/archives/community-advocacy); please use the `#community-advocacy` chat channel for questions that don't seem appropriate to use the issue tracker for.

## On this page
{:.no_toc}

- TOC
{:toc}

----

## Role of Community Advocacy

**Ultimate Goal: respond to every community question about GitLab asked online**

- This includes helping members of the community with _their_ questions, but also making sure that the community is heard and that the feedback from the community reaches the rest of the team at GitLab.
- Engage with the developer community in a way that is direct but friendly and authentic. Be able to carry the tone of the GitLab brand while also giving the proper answers or direction to members of the community.
- Help update the [social media guidelines](/handbook/marketing/social-media-guidelines/) and GitLab voice as new situations arise.
- Work with leadership to find a way to track and measure response time across all channels with the ideal response time being under 1 hour for all channels by the end of Q1, 2017.
- Explore different tools from Zendesk to Mentions to find a way to track all mentions of GitLab across the internet.
- Don’t be afraid of animated gifs and well-placed humor! We are not robots.
- Work within the GitLab process to help users report bugs, make feature requests, contact support, and provide feedback to the product.

## Community Interaction Archetypes

### Stability Complaints

- Apologize for the inconvenience
- Search for an active issue that could be the cause of instability (deployment downtime, load spikes, ...)
    - [Sentry](https://sentry.gitlap.com/gitlab/)
    - [Infrastructure Issue Repository](https://gitlab.com/gitlab-com/infrastructure/issues/)
    - `infrastructure` and `core` Slack channels
- Determine if the user is still affected
- Link to the relevant issue
- (Optional) Forward to support - support AT gitlab.com (be very forbearing about this!)

### Feature Requests

- Analyze the request
- Open an issue for it
- Thank the user for the contribution
- Link to the issue
- Invite the community member to provide further feedback in the issue

### General Questions / Issues

- Gauge the complexity of the question
- Search related issues / documentation
    - [GitLab CE Issues Tracker](https://gitlab.com/gitlab-org/gitlab-ce/issues/)
    - [GitLab Documentation](http://docs.gitlab.com/)
- (Optional) Forward to support - support AT gitlab.com (be very forbearing about this!)

### Mentions

- Use the `Twitter -> Mention` ZenDesk macro

### Tickets in languages other than English

- Submit the ticket as on-hold
    - If you speak the language in question - answer it

### Tickets that are out of scope from the channel they were submitted in

- EE Customer issues / GitHost customers -> Forward to support
- 2FA reset queries -> Forward to support
- User submitted feature request -> Open an issue and link back to the user
- User submitted bug report -> Reproduce, then open an issue and link back to the user

### Special Types

- Event Sponsorship Requests -> TBD
- Product Pitches -> TBD
- Investment request/interest -> TBD
- Spam -> Mark as spam

## ZenDesk Workflow

### Suggested Views for ZenDesk

- Channel: Twitter (Status: Open, Asignee: Self)
- Channel: Twitter (Status: New)
- Channel: Twitter (Status: Open, Asignee: Not Self)
- Channel: Twitter (Status: Pending)
- Channel: Twitter (Status: On-Hold)
- Group: Facebook

## Mentions

We use the [mentions-of-gitlab](https://gitlab.slack.com/messages/mentions-of-gitlab/) slack channel to track mentions of GitLab across multiple sources. This allows us to respond to user requests across various platforms.

We currently track the following sources for GitLab mentions:

1. Product Hunt
2. Tumblr
3. Hacker News
4. Reddit

These mentions get piped to the `mentions-of-gitlab` channel by [notify.ly](https://notify.ly/).

All comments on our [blog posts](https://about.gitlab.com/blog-posts) and any mention of GitLab on [Lobsters](https://lobste.rs/) also gets funneled to this channel using [zapier](https://zapier.com/).

## Specific channels

Respond to the GitLab community across the following channels in a timely manner:

- Hacker News
- Twitter (via Zendesk)
- `community@gitlab.com` email
- Disqus
- [forum.gitlab.com](https://forum.gitlab.com)
- Mailing List
- Facebook
- StackOverflow
- Reddit
- YouTube
- Quora
- Google alerts
- Comments on news stories in the media, and ....
- .... more.

### Twitter

Tweets that mention [@GitLab](https://twitter.com/GitLab),
or [@GitLabStatus](https://twitter.com/GitLabStatus), will create a ticket in Zendesk,
and show up in the "Twitter" view. All responses should be sent from Zendesk.
If a tweet is responded to from TweetDeck, this risks duplicate responses. Responding
from Zendesk also enables us to track our response times vs. [our internal SLA](/handbook/support/#sla).

Reply to almost all tweets, following the [social media guidelines](https://about.gitlab.com/handbook/marketing/social-media-guidelines/), and the guidelines on [representing GitLab on Twitter](https://about.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/#representing-gitlab-on-twitter) regardless of whether the tweet is of a technical nature or not. Follow up with the support team if the issue is too complex to handle.

#### General

- Tweets use short links which require you to visit that link to make sure you understand the context.
- Clarify if the request refers to GitLab or an externally hosted GitLab instance as we can only
handle requests for [GitLab.com](https://gitlab.com).

When resolving Twitter tickets you should:

1. Use [Play mode](https://support.zendesk.com/hc/en-us/articles/203690856-Working-with-tickets#topic_avj_hfg_vt) in the Twitter view. The default Twitter view will sort tickets by created date (ascending).
1. Not skip any tickets
1. Assign the ticket to yourself or ask in the appropriate Slack channel if you don't know how to answer it
1. Not cross assign tickets

#### Handles

- The [@GitLabStatus](https://twitter.com/GitLabStatus) account should only be used to give updates on the availability
of [GitLab.com](https://gitlab.com) and to follow up on users reporting that [GitLab.com](https://gitlab.com) is unavailable.
- Tweets directed at [@GitLabStatus](https://twitter.com/GitLabStatus) can be answered from the [@GitLab](https://twitter.com/GitLab) account.
- When a tweet mentions 1 or more of the handles described above, it should be replied to from the main handle (@GitLab).
- [@GitLabSupport](https://twitter.com/GitLabSupport) is [a deprecated handle](https://gitlab.com/gitlab-com/support/issues/253) and should not be used.

#### ZenDesk Macro Usage

- Mention - Tweets just mentioning @GitLab
- Solved by User - Tweets about problems / issues that were solved by the user
- Tweet Removed - Tweets that got removed
- GitLab.com Downtime (Public Issue) - GitLab.com Downtime with a public issue related to it
- GitLab.com Downtime - General GitLab.com Downtime
- Forward to support - Forwarding the user to the support team due to issue complexity

#### Usage of likes

Use "Likes" on Twitter for positivity RE: GitLab (the product) since we direct users there when we want to show that people really love the product. Avoid using it for anything else.

### `community@gitlab.com` email



### Disqus

_TODO: improve the process of responding to blog comments, probably by disabling the integration with Zendesk and finding a better way to stay alerted._

All the comments from our blog are handled by Disqus. Currently we have an integration in place with Zendesk, where every new
comment or reply to a comment creates a new ticket in ZenDesk. As part of your daily routine, you should
make sure that this queue is as empty as possible. Right now there is no way for us to directly reply to the
comment from ZenDesk, so if a comment you see requires a reply (that is if the ticket is not from someone on
our team, or is a question or a problem) you need to click on the link to the comment and reply directly in
the blog post. Once you have replied, you should come back to ZenDesk and mark that ticket as solved, plus
the ticket that was created for your reply.

### GitLab Forum

_TODO: improve the process of responding to forum questions, probably by disabling the integration with Zendesk and finding a better way to stay alerted._

Questions from the [GitLab Forum](https://forum.gitlab.com/) flow into ZenDesk, but can only be responded to from
within the Forum environment.

### Mailing list

Respond to questions on the [GitLab Mailing List](https://groups.google.com/forum/#!forum/gitlabhq).

### Facebook

_TODO: improve the process of responding to Facebook comments, probably by disabling the integration with Zendesk and finding a better way to stay alerted._

Messages sent to our [Facebook page](https://www.facebook.com/gitlab/) also feed into ZenDesk.

### Stack Overflow

_TODO: improve the process of responding to Stack Overflow questions, probably by disabling the integration with Zendesk and finding a better way to stay alerted._

The [Stack Overflow tagged questions](https://stackoverflow.com/questions/tagged/gitlab) that relate to GitLab
flow into Zendesk, but can only be responded to from within Stack Overflow.

After you create an account on [Stack Overflow](http://stackoverflow.com/) (if you don't already have one), you should start by 
answering a few simple questions in an area you're familiar with (a language, web framework, development platform, API, etc.), 
or in the GitLab tag(s) if you feel comfortable. The goal is to get enough ["Reputation"](http://stackoverflow.com/help/whats-reputation) and have access to a few more features.

Consider offering some of your Reputation using [bounties](http://stackoverflow.com/help/bounty) if a question is particularly advanced and you don't believe you can answer yourself, 
and the question seems deserving of an answer (e.g. if it has lots of upvotes).

### Reddit

Respond to mentions of GitLab on Reddit, especially ones in the [GitLab Subreddit](https://www.reddit.com/r/gitlab/).

### Youtube

_TODO: improve the process of responding to Youtube comments._

Repond to comments made on the [GitLab Youtube Channel](https://www.youtube.com/channel/UCnMGQ8QHMAnVIsI3xJrihhg).

### Quora

Respond to questions about GitLab on Quora, especially the ones that appear in the [GitLab Topic channel](https://www.quora.com/topic/GitLab/).


## Relevant Links

- [Social Media Guidelines](/handbook/marketing/social-media-guidelines/)
- [Support handbook](/handbook/support), with specific link to how to work in [Zendesk (for Twitter)](/handbook/support/knowledge-base/zendesk/).
