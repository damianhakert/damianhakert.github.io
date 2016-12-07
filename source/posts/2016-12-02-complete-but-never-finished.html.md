---
title: "Complete, but never finished"
author: Mark Pundsack
author_twitter: MarkPundsack
categories: gitlab
image_title: 
description: A behind-the-scenes look at iterating on Review Apps
---
I’m now going to try something new here, and give a little behind-the-scenes look at how we iterated and shipped review apps over the last 3 releases.

A bunch of us knew review apps were really important. Full disclosure: I used to work at Heroku on the team that shipped Heroku Review Apps, and some of that work was inspired by a tool called Fourchette, which was created by the great folks at RainforestQA. But even outside of my personal bias, Sid, Kamil, and others had seen things like this elsewhere and saw how it transformed a developer’s flow. So even though this wasn’t something that a lot of customers asked for, we knew we had to tackle it. And we knew that tightly integrating it into GitLab would be even more amazing.

Now, there are a ton of different ways we could have shipped it. We started months ago, mostly discussing asynchronously on GitLab issues, with big ideas which made Review Apps seem kind of daunting. We had ideas for black magic to detect Kubernetes settings, configure all the review app stuff for you, make them work only for merge requests, not for every branch, etc. It felt like something that might not ship for months, if not years, because of all the complexity and dependencies.

But then a few of us got together to see how we could simplify, starting with a written proposal, then collaborating in a Google Doc, then a live chat over Google Hangouts, and we came up with what we felt would be the smallest thing we could do to enable the functionality. We shared that proposal back on the public issue. After a couple days, we pushed it even further and really cut scope.

On the slide, I’ve put links to a few of the issues we went through, starting with a large meta issue, down to a concrete proposal and then counterproposal, until finally, the winning proposal.

* [#3286](https://gitlab.com/gitlab-org/gitlab-ce/issues/3286) - [Epic] GitLab Deploy, opened a year ago
* [#14698](https://gitlab.com/gitlab-org/gitlab-ce/issues/14698) - Container scheduler for 4 use cases, 8 months ago
* [#20255](https://gitlab.com/gitlab-org/gitlab-ce/issues/20255) - [Meta] Review Apps, 4 months ago
* [#20054](https://gitlab.com/gitlab-org/gitlab-ce/issues/20054) - Review apps as Runner job, 4 months ago
* [#21411](https://gitlab.com/gitlab-org/gitlab-ce/issues/21411) - How do we do deploys, 3 months ago
* [#21971](https://gitlab.com/gitlab-org/gitlab-ce/issues/21971) - Dynamic environments aka review apps, 2 months ago

At that point, we had reduced it down to just a one or two seemingly small changes to the `.gitlab-ci.yml` format. Specifically, to let you specify the URL of an environment in `.gitlab-ci.yml` (rather than just in the web UI), and to let you use variables within the environment name and URL. Trivial right? One extra keyword and another small change. But that enabled environments to now be “dynamic”, which is the core of review apps.

**8.12**

```
review_apps:
  environment:
    name: review/$CI_BUILD_REF_NAME
    url: http://$CI_BUILD_REF_NAME.review.gitlab.com/
```

So we initially offered experimental support for Review Apps in GitLab 8.12. Then in 8.13 we implemented another key piece; the ability to delete or stop apps. Again, there were all sorts of complex ideas for how to solve this, but we settled on the smallest change possible that enables the feature, and that was reusing our existing concept of manual actions, or jobs that run in a pipeline only when a user triggers them manually from the web UI. And so we said, if you can script how to delete your app, just create a manual action job for it. Then we added a new keyword in `.gitlab-ci.yml` so you could identify which of these jobs stopped the environment, and we displayed a different UI for that. Now you get a little square stop button instead of the triangle play button. Again, pretty trivial.

**8.13**

```
review:
  environment:
    name: review/$app
    on_stop: stop_review

stop_review:
  script: echo Delete My App
  when: manual
  environment:
    name: review/$app
    action: stop
```

Then most recently, in this release, 8.14, we made it so that we automatically detect when a branch is deleted, and run that previously-manual action automatically for you. We also realized that with tons of review apps, your environments list might get unmanageable, so we came up with the convention, that if you named your review app starting with a common name and then a slash, we’d treat that like a folder to group your apps  by, so the interface can show a bunch of review apps behind a collapsed folder. Again, relatively small changes.

**8.14**

* Auto-stop on branch delete
* Folders in environment list

So, this really complex, life changing feature, was broken down into 3 releases of the minimal viable change.

While we say Review Apps is now complete, it’s not finished. In fact, we have a saying that nothing is ever finished because we’re always looking for the minimal change, and then iterating. By shipping smaller pieces, we not only deliver faster, but we learn from what’s been shipped, and then iterate smarter.

* [#25138](https://gitlab.com/gitlab-org/gitlab-ce/issues/25138) - Simplify `.gitlab-ci.yml` syntax for stopping review apps
* [#24197](https://gitlab.com/gitlab-org/gitlab-ce/issues/24197) - Smart deploy
* [#23580](https://gitlab.com/gitlab-org/gitlab-ce/issues/23580) - Auto deploy

We’ve now got follow-on issues to look at simplifying the `.gitlab-ci.yml` syntax for review apps, and even adding back some of that magic we originally envisioned. We’ll continue to iterate, and your feedback is key to us shipping better.
