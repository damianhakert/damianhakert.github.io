---
layout: markdown_page
title: About Us
---

## GitLab Inc.

GitLab Inc. is a company based on the [GitLab open-source project](https://gitlab.com/gitlab-org/gitlab-ce/).
GitLab is an application to code, test, and deploy code together.
It provides Git repository management with fine grained access controls, code reviews, issue tracking, activity feeds, wikis, and continuous integration.

GitLab Inc. has 4 product offerings:

1. [GitLab Community Edition (CE)](https://about.gitlab.com/features/#community) - free, self hosted application, support from [Community](https://about.gitlab.com/getting-help/)
1. [GitLab Enterprise Edition (EE)](https://about.gitlab.com/pricing/) - paid, self hosted application, comes with additional features and support
1. [GitLab.com](https://about.gitlab.com/gitlab-com/) - free SaaS for public and private repositories, support can be purchased
1. [GitHost.io](https://about.gitlab.com/githost-io/) - a private single-tenant GitLab instance run by us

GitLab Inc. also offers:

1. [Git and GitLab Training](https://about.gitlab.com/training/)
1. [Consulting](https://about.gitlab.com/consultancy/)
1. [Custom Development work](https://about.gitlab.com/development/)

GitLab is a community project, over 1000 people worldwide have [contributed to GitLab]!
GitLab Inc. is an active participant in this community, trying to serve its needs and lead by example. For more information see [Our stewardship of GitLab CE](#stewardship) further down this page.

## A brief history of GitLab

### _2011: Start of GitLab_

In 2011 Dmitriy was unsatisfied with the options for git repository management.
So together with Valery, he started to build GitLab as a solution for this.

[This commit] was the very start of GitLab.

### _2012: GitLab.com_

Sid saw GitLab for the first time.
He thought it was natural that a collaboration tool for programmers was open source.
Being a Ruby programmer he checked out the source code and was impressed with the code quality of GitLab.
He started GitLab.com as the first SaaS offering for GitLab.

In November 2012, Dmitriy also made the [first version of GitLab CI].

### _2013: "I want to work on GitLab full time"_

In 2013, Dmitriy tweeted that he wanted to work on GitLab full time.
Sid and Dmitriy teamed up and started bootstrapping GitLab as a company.

In the same year in August, we introduced [GitLab Enterprise Edition].

### _2014: GitLab was incorporated_

In 2014 GitLab was officially incorporated as a limited liability corporation.
GitLab released a new version every month on the 22nd, just as every year before and after.
The first release of the year at January 22nd: GitLab 6.5. At the end of 2014, December 2014, GitLab 7.6 was released.

### _2015: Y Combinator_

In the very start of 2015, almost the entire GitLab team flew over to Silicon
Valley to [participate in Y Combinator].

At this point, over 1000 people worldwide have [contributed to GitLab] and more
than 100,000 organizations are using GitLab.

## Vision

At GitLab we have one vision.
**Everyone can contribute** to all digital content.
For more information see the our [strategy](https://about.gitlab.com/strategy/).

## Logo

Our <a href="https://en.wikipedia.org/wiki/Japanese_raccoon_dog">Tanuki</a> logo
symbolizes this with a smart animal that works in a group to achieve a common goal.
Please see our [press page](https://about.gitlab.com/press/) to download the logo.

## Values

Please see the [values section in our handbook](https://about.gitlab.com/handbook/#values).

## Our stewardship of GitLab CE<a name="stewardship"></a><a name="our-stewardship-of-gitlab-ce"></a>

### Business model

GitLab Inc. is a for profit company that balances the need to improve
GitLab Community Edition (CE) with the need to add features to GitLab
Enterprise Edition (EE) exclusively in order to generate income.
We have an [open core](https://en.wikipedia.org/wiki/Open_core) business model and generate almost all our revenue with [subscriptions to use Enterprise Edition](https://about.gitlab.com/pricing/).
We recognize that we need to balance the need to generate income and with the needs of the open source project.

### Promises

We promise that:

1. We won't remove features from CE in order to make the same feature exclusive in EE (features might be removed from CE due to changes in the application)
1. We won't introduce features into CE with a delay, if a feature is planned to land in both it will be released simultaneously in both
1. We will always release all tests that we have for a feature that is in CE
1. CE will have all the features that are essential to running a large 'forge' with public and private repositories
1. CE will not contain any artificial limits (repositories, users, size, performance, etc.)
1. All major features in [our scope](https://about.gitlab.com/direction/#scope) will be available in GitLab CE too
1. The majority of new features made by GitLab Inc. will be available in both CE and EE
1. CE will be available for download without leaving an email address

### What features are EE only

When we make new features we ask ourselves, is this feature **more relevant for organizations that have more than 100 potential users**?
If the answer is yes the feature is likely to be exclusive to EE.
We always make sure that CE can do all essential things and there are companies using CE with more than 10,000 users.

### Why release simultaneously in both

Sometimes people suggest having features in EE for a limited time.
An example of a limited time release strategy is the [Business Source License](https://mariadb.com/bsl) that keeps features propietary for 3 years.
At GitLab we want to give everyone access to most of the features (and all the essential ones) at the date they are announced.
We want people the option to both run and contribute to an open source edition that is maintained and that includes the most recent security fixes.
From time to time we do open source a feature that used to be EE only.
We do this in case when in hindsight we realize we made a mistake applying our criteria.
An example is when we learned that a branded homepage was an [essential feature](https://news.ycombinator.com/item?id=10931347).

### How the GitLab Inc. benefits CE

Apart from making new features GitLab Inc. does a lot of work that benefits both CE and EE:

1. [Responsible disclosure](https://about.gitlab.com/disclosure/) process and security fixes
1. [Release management](http://doc.gitlab.com/ce/release/README.html) including a monthly release of both CE and EE
1. Packaging GitLab in our [Omnibus packages](https://gitlab.com/gitlab-org/omnibus-gitlab)
1. Running a [packages server](https://packages.gitlab.com/gitlab/)
1. Dependency upgrades (Rails, gems, etc.)
1. Performance improvements

### Contributing an EE only feature to CE

When someone contributes a feature to CE that is already in EE we have a hard decision to make.
We hope that people focus on contributing features that are neither in CE nor EE.
This way both edits benefit from a new feature and GitLab Inc. don't have to make a hard decision.
The features we plan to build for EE are shared on our [direction page](https://about.gitlab.com/direction/) and we welcome people to contribute features to CE that are planned for future EE releases, if you pick one from the upcoming release please ask in the issue if someone is already working on it.
When someone does contribute a feature to CE that is already in EE we weigh a couple of factors in that decision:

1. What is the quality of the submitted code?
1. Is it a complete replacement of the EE functionality?
1. Does it meet the criteria of the [definition of done](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md#definition-of-done)?
1. Is it more relevant for organizations that have more than 100 potential users?
1. Is the person or organizating submitting this using GitLab with more or less than 100 potential users?
1. Did the person or organization submitting this contribute to GitLab before?
1. Is it something that many of our existing customers choose GitLab Enterprise Edition for?
1. Is it relevant for running a large open source forge?
1. Is it an original work or based on the EE code?
1. Is there an actively maintained fork that incorporates this?
1. How many organizations are using this code in production?
1. How frequently has this functionality been requested for CE and by whom?

We'll weight all factors and you can judge our stewardship of CE based on the outcome. So far (July 22, 2016) we had only two cases, one had low code quality and the other one copied the EE code down to the last space. If you find these or other examples please link them here so people can get an idea of the outcome.

In case we're not sure, we'll consult with the [core team](https://about.gitlab.com/core-team/) to reach a conclusion.

## Handbook

If you're interested, most of our internal procedures can be found in <a href="/handbook">publicly viewable handbooks</a>.

## Donations<a name="donations"></a>

Some people contact us because they would like to donate to GitLab.
If you have time to give please help spread the word about GitLab by mentioning us and/or <a href="https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md">contribute by creating and reviewing issues and merge requests</a>.
If you would like to give money please <a href="http://railsgirlssummerofcode.org/campaign/">donate to Rails Girls Summer of Code</a> in our name.

## Location
GitLab is a community project with people participating from all over the world.
GitLab Inc. has people in three continents to serve our customers better.
Most of our customers are in the United States.

Most of our team is distributed. We're proud to be [working remotely](https://about.gitlab.com/2014/07/03/how-gitlab-works-remotely/),
using GitLab Issues to coordinate. We have a [Remote Manifesto](https://about.gitlab.com/2015/04/08/the-remote-manifesto/),
our team members have shared their [experiences](https://about.gitlab.com/2015/06/17/highlights-to-my-first-remote-job/)
in our blog and did a Q&A for [Remote.co](https://remote.co/company/gitlab/). You can taste a bit of the GitLab team culture by visiting
our <a href="https://about.gitlab.com/culture/">culture page</a>.


[This commit]: https://gitlab.com/gitlab-org/gitlab-ce/commit/0f43e98ef8c2da8908b1107f75b67cda2572c2c4
[first version of GitLab CI]: https://gitlab.com/gitlab-org/gitlab-ci/commit/52cd500ee64a4a82b9ff6752ee85028cd419fcbe
[GitLab Enterprise Edition]: https://about.gitlab.com/2013/08/22/introducing-gitlab-6-0-enterprise-edition/
[participate in Y Combinator]: https://about.gitlab.com/2015/03/04/gitlab-is-part-of-the-y-combinator-family/
[contributed to GitLab]: http://contributors.gitlab.com/
