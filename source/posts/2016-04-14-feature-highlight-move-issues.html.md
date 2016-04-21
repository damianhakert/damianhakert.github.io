---
layout: post
title: "Feature highlight: Move issues between projects"
date: 2016-04-20 12:00
comments: true
author: Grzegorz Bizon
author_twitter: GrzegorzBizon
image_title: /images/unsplash/truck.jpg
---


In [8.6][releasepost] we added a feature allowing you to move issues between projects.

If you work on multiple projects, it's possible to accidentally create an issue 
in the wrong issue tracker. It's a seemingly simple mistake that is easy to miss.
Let's say you don't catch it right away and you do a decent amount of work
on the wrong project. Now, your "seemingly simple" mistake just became a bigger one. 
We've all been in this position before. With our 8.6 release, we want to avoid the
panic that can be cause with creating an issue in the wrong project. Now, if you 
create an issue in the wrong project, you can easily move it to the right one. 

<!-- more -->

![Move issues between projects](/images/8_6/move-issue.png)

When you move the issue, the original issue will be copied, closed, and then referenced.
This process makes sure nothing is lost in the move.

Additionally, anyone who is subscribed to the issue will get a notification that the
image was moved, with a link to the new location. This will, of course,
depend on your notification settings.

![Moved issue email](/images/blogimages/moved-issue-email.png)

It's a relatively simple feature, but it was tricky to implement.

## Behind the scenes: Moving issues between projects

At first, moving issue between projects seemed like an easy task. However,
we encountered a tricky [wicked problem], references in the issue description or comments. 

Here's an example of the challenge, let's say that you create an issue with text like this:

```markdown
Hey, this issue is related to #123 and the solution is implemented in !456
```

The references `#123` and `!456` are tightly coupled with the context of the project
your created the issue in. Essentially, each of these references use a link
that is related to the project the issue was created in.

Additionally, GitLab users are able to reference merge requests, snippets, labels,
other issues, commits, commit ranges, etc. All of these references would become
invalid, when changing the "context of the project" - moving and issue to another project
does exactly that.

At this point, we knew that we should unfold these references to work with a
cross-project format.
But not all of the *referrables* we have in GitLab would support a cross-project format.
For example, labels did not support a cross-project reference. We need to change 
that in [Merge request !2996].

Another step was simply substituting `#123` with `gitlab-org/gitlab-ce#123`.
But you might have text like:

```markdown
Hi, this is a duplicate of http://gitlab.com/gitlab-org/gitlab-ce/issues/123.
Also see documentation docs.gitlab.com/ce/some-page#123. Also take a look at this code:

    puts 'some code' #123 is a comment
```

So we know that this description holds a reference to issue 123 but we do not
know *where it is*, or how to substitute it in the right place. We needed to modify
the source text. However, changing the source text would interfere with Markdown.
This was a tricky problem since we depend on syntax of the Markdown and it's lexical
rules.

To solve this, I tried some prototypes but couldn't find a better solution than
writing yet another parser for Markdown. This time, it would support the full
Abstract Syntax Tree of Markdown with additional support for mutable nodes in
a syntax tree (like you can modify nodes in a tree).

However, once I started this work, I felt that this was a complicated solution so
I decided to look for a [boring solution][values]. I reached out to my fellow 
developers on the team to find a better boring solution. After sometime, 
[Kamil] helped me [with this][helped] and his suggestion worked! In the end, we
are happy to be able to deliver a feature that makes moving issues between projects possible.

[Kamil]: https://twitter.com/ayufanpl
[helped]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/2831#note_4189430
[values]: https://about.gitlab.com/handbook/#values
[releasepost]: https://about.gitlab.com/2016/03/22/gitlab-8-6-released/
[wicked problem]: https://en.wikipedia.org/wiki/Wicked_problem
[Merge request !2996]: https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/2966
