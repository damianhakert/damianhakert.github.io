
#### HackerOne

We also use [HackerOne](https://hackerone.com/gitlab) to manage security reports.
The HackerOne dashboard lists all reports for which you need to respond within one business day. These
reports are also piped into ZenDesk, but they need to be responded to from the HackerOne dashboard and closed manually in ZenDesk
upon completion. Remember that all researchers should receive feedback as with regular support tickets,
and you should not hesitate to triage or escalate the report. **Always** mention that they can email us at any time for an update.
Eventually each report has to be accepted and/or closed through the HackerOne dashboard even if you've followed through on ZenDesk.

After a report has been closed as resolved or informative it can be [publicly disclosed](https://dev.gitlab.org/gitlab/organization/issues/805#note_72812).
This is can be requested either by GitLab or the reporter. If the reporter requests this then it will be released when you accept it
or 30 days after the request is submitted. Prior to publication you should edit the report and make sure that it has:

1. No sensitive information.
1. A link to the merge request that fixed the issues.

If you need to grant HackerOne permissions to a new GitLab user, have an admin send
an invitation from HackerOne and add you to the Internal group. You can find out who
the admins are by asking on the #support channel.

### Disqus questions on the blog <a name="disqus"></a>

All the comments from our blog are handled by Disqus, and we have an integration in place, where every new
comment or reply to a comment creates a new ticket in ZenDesk. As part of your daily support tasks, you should
make sure that this queue is as empty as possible. Right now there is no way for us to directly reply to the
comment from ZenDesk, so if a comment you see requires a reply (that is if the ticket is not from someone on
our team, or is a question or a problem) you need to click on the link to the comment and reply directly in
the blog post. Once you have replied, you should come back to ZenDesk and mark that ticket as solved, plus
the ticket that was created for your reply.

### Twitter <a name="twitter"></a>

Tweets that mention [@GitLab](https://twitter.com/GitLab), [@GitLabSupport](https://twitter.com/GitLabSupport),
or [@GitLabStatus](https://twitter.com/GitLabStatus), will create a ticket in ZenDesk,
and show up in the "Twitter and Facebook" view. All responses should be sent from ZenDesk.
If a tweet is responded to from TweetDeck, this risks duplicate responses. Responding
from ZenDesk also enables us to track our response times vs. our internal [SLA](#sla).

Our Developer Advocates also have access to tweets through ZenDesk, and often
participate in responding to questions. The support team does not retweet or favorite
any tweets; that is handled by the marketing team. Our support team _does_ reply
to almost all tweets, following the [social media guidelines](https://about.gitlab.com/handbook/marketing/social-media-guidelines/), regardless of whether
the tweet is of a technical nature or not. The marketing team's decision to favorite
and/or retweet is independent of the reply provided by the support team; so a tweet
may be responded to from ZenDesk, and separately favorited from TweetDeck, as an
example.

From time-to-time, we also receive tweets that mention competitors or negative events
related to them. In principle, we don't acknowledge these tweets as also described in
the [developer advocacy](https://about.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/#representing-gitlab-on-twitter)
section.

The @GitLabStatus account should only be used to give updates on the availability
of GitLab.com and to follow up on users reporting that GitLab.com is unavailable.

When a tweet mentions 1 or more of the handles described above, it should be replied to from the main handle (@GitLab).

Tweets use short links which require you to visit that link to make sure you understand the context.
To clarify if the request refers to GitLab or an externally hosted GitLab instance as we can only
handle requests for gitlab.com.

When resolving Twitter tickets you should:

1. Use [Play mode](https://support.zendesk.com/hc/en-us/articles/203690856-Working-with-tickets#topic_avj_hfg_vt) in the Twitter view. The default Twitter view will sort tickets by created date (ascending).
1. Not skip any tickets
1. Assign the ticket to yourself and ask on the appropriate Slack
   channel if you don't know the answer
1. Not cross assign tickets

### Facebook<a name="facebook"></a>

Messages sent to our [Facebook page](https://www.facebook.com/gitlab/) also feed into ZenDesk.

### Follow up on issues posted on GitLab issue tracker<a name="issue-tracker"></a>

For ZenDesk issues you will have created issues on the relevant issue tracker.
Please refer to the priority as listed under [GitLab Workflow in the handbook](/handbook/#gitlab-workflow).

### GitLab.com Support Tracker<a name="supp-forum"></a>

For issues specific to GitLab.com that have nothing to do with availability we have the
[Support Tracker](https://gitlab.com/gitlab-com/support-forum/issues). This forum must also be checked periodically
for new issues and to report back if an issue has been solved. Ensure that you assign the issue to yourself to enable you to keep track of the issue and also to enable other service engineers to easily pick on unassigned tasks at a glance. Some people use this forum to report issues they
are having with their on-premises installation. In that case, you should refer them to the
[CE issue tracker](https://gitlab.com/gitlab-org/gitlab-ce/issues) or to our
[Getting Help](/getting-help/) page, depending on the issue they are having.

### GitLab CE/EE/Omnibus issue trackers<a name="product-issue-tracker"></a>

It is always encouraged to take a look at all our issue trackers and respond to bug reports or feature
requests:

- [GitLab EE](https://gitlab.com/gitlab-org/gitlab-ee/issues) some customers create issues here instead of
emailing us. When a new issue is created here, a ticket is created in ZenDesk, so we always know when this is
the case.
- [GitLab CE](https://gitlab.com/gitlab-org/gitlab-ce/issues)
- [Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/issues)

See [the issue triage policies](/handbook/engineering/issues/issue-triage-policies.html) for the above trackers for more information on how issues should be handled.

### Mailing list<a name="mailing-list"></a>

Respond to questions on the [GitLab Mailing List](https://groups.google.com/forum/#!forum/gitlabhq).

### Forum<a name="gitlab-forum"></a>

Questions from the [GitLab Forum](https://forum.gitlab.com/) flow into ZenDesk, but can only be responded to from
within the Forum environment.

### TODO Docker<a name="docker"></a>

TODO Questions from Docker's [GitLab CE](https://hub.docker.com/r/gitlab/gitlab-ce/) page flow into ZenDesk.

### Stack Overflow<a name="stack-overflow"></a>

The [Stack Overflow tagged questions](http://stackoverflow.com/questions/tagged/gitlab) that relate to GitLab
flow into ZenDesk, but can only be responded to from within Stack Overflow.

### Reddit<a name="reddit"></a>

Respond to mentions of GitLab on Reddit, especially ones in the [GitLab Reddit](https://www.reddit.com/r/gitlab/).

### Quora<a name="quora"></a>

Respond to questions about GitLab on Quora, especially the ones that appear in the [GitLab Topic channel](https://www.quora.com/topic/GitLab/).

## Non channel work<a name="other"></a>

If you have time for it please improve GitLab: fix bugs, add features, and polish the website.
You can also consider hanging out on IRC to answer questions and help people (#gitlab on freenode.net).


