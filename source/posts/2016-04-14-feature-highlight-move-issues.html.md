---
layout: post
title: "Feature highlight: Move issues between projects"
date: 2016-04-14 12:00
comments: true
author: Grzegorz Bizon
author_twitter: GrzegorzBizon
image_title: /images/unsplash/truck.jpg
---


In [8.6][releasepost] we added a feature allowing you to move issues between projects.

If you have your team working on several projects, it's not unusual to have an issue
added to the wrong issue tracker. Now, when that happens you can opt to move
it to the right project.

<!-- more -->

![Move issues between projects](/images/8_6/move-issue.png)

The original issue will be copied, closed and referenced, making sure nothing
or no one will be confused with the move.

If you were subscribed to the issue, you'll also get a notification that the
image was moved, with a link to the new location. This will, of course,
depend on your notification settings.

![Moved issue email](/images/blogimages/moved-issue-email.png)

It's a relatively simple feature, but it was tricky to implement.

## Behind the scenes: Moving issues between projects

At first moving issue to another project seemed like an easy task to do.
But we encountered a tricky [wicked problem]. This problem was related to
references inside the issue description and comments. Incidentally, also system
notes that may appear there too.

Say for example you create an issue with text like this:

```markdown
Hey, this issue is related to #123 and the solution is implemented in !456
```

The references `#123` and `!456` are tightly coupled with the context of the
given issue. What issue does this project belong to? The link is relative to
the project you're making the issue in.

Besides that, we can have references to merge requests, snippets, labels,
other issues, commits, commit ranges, etc. And those references would become
invalid, when changing context of the project - moving issue to another project
does exactly it.

At this point we knew that we should unfold these references to work with a
cross-project format.
But not all *referrables* we have in GitLab supported it.
For example, there was a problem with Labels. These didn't support cross-project
reference. We need to change that in [Merge request !2996].

Another step was simply substituting `#123` with `gitlab-org/gitlab-ce#123`.
But you might have text like:

```markdown
Hi, this is a duplicate of http://gitlab.com/gitlab-org/gitlab-ce/issues/123.
Also see documentation docs.gitlab.com/ce/some-page#123. Also take a look at this code:

    puts 'some code' #123 is a comment
```

So we know that this description holds a reference to issue 123 but we do not
know *where it is*, and how to substitute it in the right place.
This is a tricky problem, because we depend on syntax of the markdown, and
some lexical rules it has, and we need to modify source text.

To solve this, I tried some prototypes, and couldn't find better solution than
writing yet another parser for Markdown, that would, this time, support the full
Abstract Syntax Tree of Markdown with additional support for mutable nodes in
a syntax tree (like you can modify nodes in a tree).

But this seemed very complicated. So when I started this work, I also decided
that I needed to look for a [boring solution][values] in the meantime.

I've did some coding, and started communicating with other developers on the team,
to find a better boring solution. After sometime, [Kamil] helped me [with this][helped],
and his suggestion worked!



[Kamil]: https://twitter.com/ayufanpl
[helped]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/2831#note_4189430
[values]: https://about.gitlab.com/handbook/#values
[releasepost]: https://about.gitlab.com/2016/03/22/gitlab-8-6-released/
[wicked problem]: https://en.wikipedia.org/wiki/Wicked_problem
[Merge request !2996]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/2966
