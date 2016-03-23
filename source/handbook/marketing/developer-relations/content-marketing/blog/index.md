---
layout: markdown_page
title: "Content Marketing - Blogging"
---

- [Objective](#objective)
- [Topics](#topics)
- [Get published](#getpublished)
- [Publishing checklist](#checklist)

## <a name="objective"></a>Objective

The [blog](/blog) is our main publishing outlet.

- We aim to publish content multiple times a week, with a reliable publishing
schedule
- We also want to bring in voices from all
throughout the company, as well as from GitLab users and our customers.
- Content should communicate the benefits of GitLab's unique innovations and tools (CI)

## <a name="topics"></a>The topics we write about

### Formats

- Short form articles
- Long form articles
- Release announcements
- Feature highlights
- Tutorials
- Inside GitLab

### Product-specific topics

- Tutorials on using GitLab, GitLab CI, etc.
- Feature highlights bring attention to specific features at GitLab.

### User Stories

* Contributor stories 'why I contribute to GitLab'
* Use case stories 'how we use GitLab'
* Boss stories 'how GitLab enabled innersourcing'
* Inception stories 'how GitLab uses GitLab'
* Adoption stories 'how we switched from SVN to GitLab'
* Customer stories 'why we choose GitLab'

## <a name="getpublished"></a>Getting published on the blog

Anyone from GitLab, Inc or within the community can propose an topic on the
GitLab [Blog Post Issue Tracker][blog-tracker].

We invite guest posts and also offer compensation through the [Community Writers](https://about.gitlab.com/community/writers) program.

1. Submit an issue on the [Blog post issue tracker][blog-tracker].
2. You'll get feedback on your proposal and outline.
3. Write your draft as a WIP MR (work in progress merge request) in the [GitLab website project][gitlabwww].
4. You'll get reviewed and feedback from our editors.

### About the Blog Post Issue Tracker

- Anything not assigned to a person is in the [backlog](https://dev.gitlab.org/gitlab/blog-posts/issues?milestone_id=&scope=all&sort=created_desc&state=opened&utf8=%E2%9C%93&author_id=&assignee_id=0&milestone_title=&label_name=)
- Anything that is assigned to a person in 'in progress'
- Anything that has a WIP MR is ready for review

### <a name="checklist"></a>Blog post publishing checklist

Before you write, make sure you're on a new branch cloned from master.
Check these before you publish:

- First instance of GitLab should be linked to [GitLab](http://about.gitlab.com)
- Follow the [Blog post style guide](https://gitlab.com/gitlab-com/blog-posts/blob/master/STYLEGUIDE.md)
- Check all links.
- Check the date on the file name.
- Check the date in the post.
- Check the image is crunched down. Use [tinypng](http://tinypng.com).
- Check the blog appears good locally.
- When you have double checked, you can merge!

It takes about 5 mins for the blog post to appear as published.

After the blog post is published we should tweet immediately from the GitLab
Twitter account, and schedule follow up tweets and LinkedIn and Facebook.


## <a name="ideas"></a>Blog ideas

* The content doesn't have to be about GitLab, it can also be other content aimed at developers, Hacker News or team leads.
* When submitting to Hacker News please add a ? to the url and do not announce it anywhere to prevent setting off the voting ring detector.
* You need to have high quality and high volume, great times are in the [Priceonomics content marketing handbook](http://priceonomics.com/the-content-marketing-handbook/).
* What worked for Apigee was the 'collaboration in the 21st century' theme
* Videos with good screencasts, great subtitles, and narratives are expensive but popular, and hard to copy (what does happens to written content), Realm.io does a lot of good videos, for example [about Swift](https://realm.io/news/top-5-swift-videos-of-2014/)
* A reading club such as [a NoSQL summer](http://nosqlsummer.org/)
* Milk [GitLab Flow](http://doc.gitlab.com/ee/workflow/gitlab_flow.html) for more blog posts and videos
* CI for mobile is painful (Gradle files for Android, loads of assets such as Xcode binaries) and the best current option is customizing Jenkins, mobile is a small circle that moves fast, collaborate with leading projects such as [CocoaPods](https://cocoapods.org/) for iOS (Sid can contract [Eloy Durán](https://twitter.com/alloy) and [Gradle](https://gradle.org/) for Android to create a great CI experience and blog about it
* Can accelerate the above with free CI runners
* Offer $100 per blog post and use a public issue tracker to gather idea's and tag them as acceptable.
* Encourage guest posts on our blog

[blog-tracker]: https://gitlab.com/gitlab-com/blog-posts/issues
[gitlabwww]: https://gitlab.com/gitlab-com/www-gitlab-com
