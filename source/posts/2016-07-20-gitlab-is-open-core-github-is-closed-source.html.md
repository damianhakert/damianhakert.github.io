---
title: "GitLab is open core, GitHub is closed source"
author: Sid Sijbrandij
author_twitter: sytses
categories: press
image_title: '/images/unsplash/sailing-5.jpg'
---

Disclosure: I'm the CEO of GitLab and we compete with GitHub.

We think of ourselves as an open source company. But today paxcoder on Hacker News rightly [remarked that calling it an open core company is more accurate](https://news.ycombinator.com/item?id=12129626).

We ship GitLab CE which is open source and GitLab EE that is closed source. We try to be [a good steward of the open source project](https://about.gitlab.com/about/#stewardship). GitLab EE is proprietary, closed source code but we try to work in a way similar to GitLab CE: the [issue tracker](https://gitlab.com/gitlab-org/gitlab-ee/issues) is publicly viewable and the [EE license](https://gitlab.com/gitlab-org/gitlab-ee/blob/master/LICENSE) allows modifications.

Another point of confusion is that [people assume that GitHub is open source](http://stackoverflow.com/questions/24254324/is-github-com-source-code-open-source), but the code that runs GitHub.com and [GitHub Enterprise](https://enterprise.github.com/home) is closed source.

Their hosted service GitHub.com is free for open source projects and has fundamentally improved open source collaboration. I wanted to make sure people understood the difference between hosting open source and open source software.

At the end of [a Spanish conference presentation video](https://vimeo.com/62219734) you see someone in the audience ask why GitHub isn't open source. The presenter's answer is that this would hurt their business. Also mentioned in the presentation is that GitHub encrypts their source code with [Ruby Encoder](https://www.rubyencoder.com/) to prevent it from being stolen. And they have a specific clause in [the license](https://enterprise.github.com/license) that forbids customers from hosting a public site with GitHub Enterprise.

Of course, GitHub has every right to close and encrypt their source code. GitHub also deserves credit for actively contributing to open source themselves, including contributions to Git and Ruby on Rails, and releasing libraries and applications like libgit2, Atom, and Hubot. We use software they open sourced to make GitLab.
