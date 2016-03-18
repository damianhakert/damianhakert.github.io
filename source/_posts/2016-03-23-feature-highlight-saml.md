---
layout: post
title: "Feature Highlight: SAML and its future within GitLab"
date: 2016-03-23
comments: true
author: Patricio Cano
author_twitter: suprnova32
filename: 2016-03-23-feature-highlight-saml.md
image_title: /images/unsplash/galaxy.jpg
---

It's been a long time since I last wrote on this blog. I've been involved with
other projects that have kept me really busy. One of the tasks that I have been
really involved with is SAML and its integration with GitLab. As a Service Engineer
I'm in constant contact with customers and their needs and I've seen an steadily
increasing interest in SAML from our Enterprise Customers, so I decided to dive
a little deeper into th topic in an effort to improve our integration with SAML,
to add better documentation, and to help our customers and our community to better
understand this feature.

In this blog post I'll give you an overview of what I've been working on, how it
affects GitLab and what we plan to do with SAML in the future.

<!-- more -->

### What is SAML?

SAML stands for Security Assertion Markup Language, it is an XML standard that
allows secure web domains to exchange user authentication and authorization data.
Using SAML, an online service provider can contact a separate online identity
provider to authenticate users who are trying to access secure content.
[[1]](https://developers.google.com/google-apps/sso/saml_reference_implementation)

This gives you the ability to add users to your service without having to know
anything about them beforehand. You just need to trust the identity provider.

It also provides you with the ability to enable Single Sign On (SSO) for your
GitLab instance, allowing your users to access your GitLab instance without
having to create a new account and set a password.

Here is an example on how the SAML request and response work. In the example
GitLab would be the "Service Provider":

![SAML Workflow Example](/images/saml_workflow_vertical.gif)

### SAML & GitLab

#### The beginnings

SAML was first introduced on version [7.12](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/722/diffs)
via a contribution from our amazing community. The feature was contributed by [CERN](http://home.cern/)
almost 10 moths ago. Since the original contribution, not much changed around the
SAML support offered by GitLab. But interest from our users our customers really
increased. You can check all SAML related merge requests
[here](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests?utf8=%E2%9C%93&issue_search=saml&state=merged&scope=all&assignee_id=&author_id=&milestone_id=&label_id=).

Due to the increased interest, I decided to dive into all the parts required to
get GitLab to speak SAML. The first component required for this is `omniauth-saml`.

#### omniauth-saml

GitLab relies on [omniauth-saml](https://github.com/omniauth/omniauth-saml) to
provide the integration with a SAML Identity Provider (IdP). As you know, GitLab uses
[Devise](https://github.com/plataformatec/devise) as an authentication platform.
Devise allows you to extend its authentication mechanism using Omniauth.
`omniauth-saml` is an strategy that allows Omniauth to retrieve user information
from a SAML IdP and relay this information to GitLab to either create a new user,
or bind this new authentication mechanism to an existing user (if GitLab is
[configured](http://doc.gitlab.com/ce/integration/saml.html) to do so).

The `omniauth-saml` gem was originally developed and maintained by Practically
Green, but in the last couple of months it lost momentum from its maintainers.
The gem on which this one is based, `ruby-saml`, started to add new features
recently and merge requests were made on the `omniauth-saml` repo to add this
new features here as well, but they went without review from the maintainers
for quite some time.

Luckily the maintainers realized that there was still a lot of interest in the
`omniauth-saml` gem and [decided](https://github.com/omniauth/omniauth-saml/issues/67)
to give control of the gem to the community. Since I was one of the people
involved in the latest merge requests, I was included in the list of people
given owner access. This allowed a small group of passionate people to continue
the amazing work that the developers at Practically Green started almost 5
years ago.

Once this process was completed we immediately got to work reviewing pending pull
requests, asking community members to update their code to resolve conflicts,
solving old issues, updating dependencies, and adding a continuous integration
service. All this work culminated a few weeks ago when we released `omniauth-saml`
version [1.5.0](https://github.com/omniauth/omniauth-saml/blob/master/CHANGELOG.md#150-2016-02-25)
with support for [Custom Attributes](http://doc.gitlab.com/ce/integration/saml.html#attribute_statements),
better error handling, and a couple of bug fixes.

The inclusion of these features, specially the Custom Attributes, are of great
use to GitLab users. You no longer need to change your IdP server to match the
parameters that GitLab is expecting, you can now tell `omniauth-saml`, and therefor
GitLab, where to look for them.

Along with the inclusion of better SAML documentation, these changes will help
users and admins better integrate their GitLab installation with their SAML provider,
and more easily detect and troubleshoot any errors.

#### ruby-saml

[`ruby-saml`](https://github.com/onelogin/ruby-saml) is a Ruby based library for
implementing client-side SAML authorization. `omniauth-saml` relies on this library
for initialization and validation of a SAML request/response protocol. `ruby-saml`
is maintained by the amazing people at [OneLogin](https://www.onelogin.com/).

I didn't dive as deep into this library as I would have liked. The entry barrier
is a bit higher, given that the code is a bit more complex than what I'm accustomed
to and I will take me more time to get familiar with this code, but this will be
needed soon because of the plans we have for the future. Direct use of `ruby-saml`
will be required.

### The future

We recently started [separating SAML](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/2882/)
from the rest of the regular Omniauth providers to give us some room to improve
the integration between SAML and GitLab.

At the moment SAML only functions as an authentication provider, but with SAML 2.0
(the only version of SAML supported by GitLab) you can also retrieve Group Membership
information from the Identity Provider, if the IdP server supports this feature
and is configured to respond with this information. For this the membership
information needs to be added to the SAML response as a SAML Attribute in
the generated SAML 2.0 Assertion.

If we leverage this feature, we would be able to manage GitLab Group Memberships
via SAML, in the same way that it is done right to for LDAP within the Enterprise
Edition. This would allow admins to off-load the management of the groups to a
different service, offer their users an SSO system, and not have to worry about
setting up LDAP as well as SAML to accomplish both.

We still need to investigate quite a bit how to best approach this endeavour and
see how much work it would be. But our plan is to bring SAML up to par with the
features that LDAP offers within GitLab.

---


