---
layout: post
title: "Feature Highlight: Todo's"
date: 2016-03-02
comments: true
categories:
author: Douglas Alexandre
author_twitter: dbalexandre
image_title: '/images/unsplash/taking-notes.jpg'
---
In this blog post I’ll give you a look at the “Todos” feature we introduced in
[GitLab 8.5](https://about.gitlab.com/2016/02/22/gitlab-8-5-released/)
and also tell you how this feature came about.

<!-- more -->

### First let’s look at this feature

When people log into GitLab they want to see where they should spend their time;
where their team members need help; where they need to take some action;
or what they need to keep an eye on; all without the mess of a lot of email notifications.

When an issue or merge request is assigned, or when someone is @mentioned in
a comment or description, this triggers a notification.
The user may get an email, depending on their notification settings,
and now it will also add a notice in their Todos list at https://gitlab.com/dashboard/todos

![Todos screenshot showing a list of items to check on](/images/blogimages/todos-screenshot.jpg)

They can then respond to the todo by doing whatever they think is needed on
the issue or MR.
They can then change the milestone, add any label, or even manually mark
the todo as “done” in which case they don’t even need to take action.

If you close/merge the related issue or MR yourself and you had a todo for that,
it will automatically get marked as done.
If someone else closed, merged or took action on the issue or MR, your todo
will remain pending.
This makes sense because you may need to give attention to an issue even if has been resolved.

You won’t have 100 todos about the same issue or MR.
There’s just one todo per issue or MR, you won’t be annoyed repeatedly.

My colleague, [Douwe](https://twitter.com/DouweM), guided me through some of these edge cases and helped me
with daily code review.
Next let’s see how this feature came about.

### How we developed this feature

It was just a few weeks before the 8.5 release when [Dmitry](https://twitter.com/dzaporozhets)
asked me to work on this.
In fact, that was a lot of work to be done in such a short time.
I actually delivered this task on the last release candidate before release day.
People were quite surprised and happy to have this feature in 8.5.

There had been a long discussion about this feature, but no one had touched it yet.
The original proposal was very complicated.
There were a lot of comments on the issue too, with a more active discussion in
the last two months.
Finally after considering all the options, [Dmitry commented on the issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/2425#note_3116626)
and greatly simplified it.

I was excited about taking on the challenge. Not only because I knew it would
be an important feature, it’s also a feature that most people will use every day.
This is the second major feature I’ve worked on since I started at GitLab in December.
Previously, I had worked on the GitHub import project which came out in 8.4.

I needed to learn quote a lot of the system to create this feature.
It was surprising then, when I was reading the code, that I discovered it was
going to be much easier than I thought.
My epiphany was that we already had the Activity feed system already in place
which I could use.
As it turns out, it was going to be very easy to implement it.

To start, I spent the first week reading the code, understanding how the system
worked: discovering the points that we needed to trigger a todo.
I wrote some guidelines about what I needed to achieve.
Then, I started writing code by the end of the week.
Most of the coding was done in one week.

I needed to investigate how the [Activity feed](https://gitlab.com/dashboard/activity) system works.

![Screenshot of activity feed](/images/blogimages/activity-feed-screenshot.jpg)

Then I plugged in another service to trigger the todo when an issue or MR is assigned, or when
someone is @mentioned in a comment or description.
After this I just needed to make sure that when someone completed whatever they thought
is needed on the issue or MR, we then marked the related todo as done.

Douwe reviewed my merge requests every day. I had to make many changes.
He helped me a lot with code review, and guided me through edge cases, and
considering aspects of the functionality.

For example, some people asked for changes which didn’t fit.
Someone asked to be notified of todos on commits.
That doesn’t really make sense, because there are no clear actions to take on
a commit, except replying to a comment.
Most of the time you’re actually working on an issue or on a merge request.

### About that name

There was a long discussion about naming the feature.
In the beginning this feature was called ‘Notification System,’ then
‘Action Center’, then ‘Todos’, then ‘Tasks’, and finally Task Queue was chosen.

But Douwe and Sytse discussed the naming for the umpteenth time, and concluded
that 'Todos' would be the best name since 'Tasks' is already used (by us and
GitHub) for the Markdown checklist, this is a checklist made in an issue
description, for example.

Todo makes more sense to me than a Task. You just need to look at it.
Tasks are obligations. A Todo is just a reminder.
Maybe this is relevant for you and maybe you just mark it as done.

### Conclusion

I’m really happy to have worked on a feature that people will use every day.
It’s a simple feature and even though we’ve only been using it a few days,
we can’t imagine how we managed without it.

This tweet from a user pretty much sums it up.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">.<a href="https://twitter.com/gitlab">@gitlab</a>&#39;s new ToDos feature is simply amazing. Simple feature but something you cannot live without once you tried it.</p>&mdash; Tero Tasanen (@ttasanen) <a href="https://twitter.com/ttasanen/status/702249244950974464">February 23, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
