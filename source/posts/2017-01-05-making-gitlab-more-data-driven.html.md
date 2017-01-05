---
title: "Making GitLab more data-driven"
author: Regis Freyd
author_twitter: djaiss
categories:
description: We would like to collect usage data from Community Edition instances, as we already do for Enterprise Edition.
---

GitLab is used massively out there. We have millions of users, and hundred of
thousands installations. We pride ourselves to listen to both our community and
customers to create a product that fits their needs. We usually know what people
 want, and we also know where we want to go with the product ourselves.

Everything we add or change in the product has an impact on how you use GitLab.
Moreover, we ship a lot of new features, and often. Every time, we make a lot of
assumptions on how people are using the product.

We don't like making assumptions, because it's just guessing. And when we think
that something is heavily used, we might be completely wrong. We can't let our
instinct or perceptions, which can be biased, dictate how we should change the
product or what we should focus on next. We need to back our guesses with real
usage data, taken straight from our users who actually use GitLab.

To help us become a more data-driven company, we've released
[an updated version](https://gitlab.com/gitlab-org/gitlab-ee/issues/997) of a
feature called Usage Ping in 8.13 that lets us collect anonymous, aggregated
data from the GitLab instances of our customers. This feature is opt-out and
available on the Enterprise Edition. We make it very clear to show in the
interface what we collect, and when this data will be sent.

But it's not enough. While we have many installations from our customers, we
have even more downloads of our Community Edition.  We are talking about
millions of users that use GitLab without us knowing how they use it. From a
product perspective, this is not a situation we want to be in. We would like
your help to let us understand what you do with GitLab, in order to create an
even better GitLab.

We want to bring this Usage Ping to the Community Edition. To be perfectly
clear, data will be completely anonymous, and every week we would send the
total number of

* Comments
* Groups
* Users
* Projects
* Issues
* Labels
* CI builds
* Snippets
* Milestones
* Todos
* Pushes
* Merge requests
* Environments
* Triggers
* Deploy keys
* Pages
* Project Services
* Issue Boards
* CI Runners
* Deployments
* Geo Nodes
* LDAP Groups
* LDAP Keys
* LDAP Users
* LFS objects
* Protected branches
* Releases
* Remote mirrors
* Web hooks

You will be able to see the JSON payload we send on a weekly basis in the
administration panel of the instance, and you will be able to disable sending
this information entirely if you choose to do so.

We know that sending data to us is a delicate topic. However, as everything we
do with GitLab, you will be able to verify, in the code, that we really care
about your privacy, and that we don't take something that we are not supposed to
take in the first place.

Feel free to comment on this topic in the comments below, or
[in the issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/23361) directly.
