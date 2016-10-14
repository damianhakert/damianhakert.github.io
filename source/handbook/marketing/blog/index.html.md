---
layout: markdown_page
title: "Blog Handbook"
---

### Welcome to the GitLab Blog Handbook!
{:.no_toc}

----

## On this page
{:.no_toc}

- TOC
{:toc}

----

## GitLab Blog
{: #blog}

Our [Blog] is orchestred by the [Product Marketing][prod] and the [Developer Relations][dev-rel] Marketing Team.

<div class="alert alert-purple center"><h3 class="purple"><i class="fa fa-gitlab" style="color:rgb(252,109,38); font-size:.85em" aria-hidden="true"></i> &nbsp;&nbsp;<strong>EVERYONE CAN CONTRIBUTE</strong>&nbsp;&nbsp; <i class="fa fa-gitlab" style="color:rgb(252,109,38); font-size:.85em" aria-hidden="true"></i></h3></div>

### Objectives &amp; Purposes

- Encourage potential users to try GitLab
- Motivate our community to explore what's best from GitLab features
- Provide accurate, interesting and new information

### Important considerations

The [blog](/blog) is our main publishing outlet. Let's do our best to show what's best!

- Content should communicate the benefits of GitLab's unique innovations and tools (e.g., CI)
- We want to bring in voices from all throughout the company, as well as
from GitLab users and our customers.
- As always, **everyone can contribute** - GitLab Team members and [Community Writers]

### Posts Formats

We aim to publish content multiple times a week, with a reliable publishing schedule. The user will most likely have a
pleasant experience if we combine multiple posts formats, trying never to be too much repetitive. Repetition is boring.
<!-- According to our [Content Marketing Strategy][WE'D NEED A LINK], --> We'll alternate between the following formats:

- Short form articles
- Long form articles
- Release announcements
- Feature highlights
- Tutorials
- Inside GitLab

## Blog Content

It is important to have in mind that a good post can considerably reach a lot of people and acquire more users.
With well written articles, we have the opportunity to expose and explore, in a friendly language, all the features GitLab provides.

Try to think about what our users might have interest in reading before picking up a subject to work on.
And remember, our users do not need to be super advanced programmers. They can be newbie folks with limited experience, students,
technology enthusiasts, and people not used to Git, version control and continuous integration. That's why we need to [define a target audience][tech-writing-audience] before start writing.

Our audience will probably be interested in the topics listed below.

### Product-specific topics

- Tutorials on using GitLab, GitLab CI, GitLab Runners, GitLab Geo, GitLab Pages, etc.
- Feature highlights bring attention to specific features at GitLab
- GitLab Workflow
- Key features overviews
- New feature releases

### User Stories

- Contributor stories "why I contribute to GitLab"
- Use case stories "how we use GitLab"
- Boss stories "how GitLab enabled innersourcing"
- Inception stories "how GitLab uses GitLab"
- Adoption stories "how we switched from SVN to GitLab"
- Customer stories "why we choose GitLab"

Do you have a better idea? Don't hesitate, [create an issue][blog-tracker] with your proposal and we'll be glad to look into it.

### Media

- Videos with good screencasts, great subtitles, and narratives are expensive but popular, and hard to copy (what does happens to written content). For reference, [Realm.io] does a lot of good videos, for example [about Swift]
<!-- - Check out our "Screencast Guidelines", if that's the case => CREATE SCREENCAST GUIDELINES -->
- Try to work with images. At least choose one for the page cover
- Do not use an image if you are not certain that it is [public domain]
- Always provide a link to the original source of the image
- Compress your image. Use [TinyPNG] or a similar tool

## Technical Aspects

**All** blog posts should always have a real **author name**. When applicable, add a section "Acknowledgments" to the end of the post to thank contributors.

### Types of Blog Posts

{::options parse_block_html="true" /}

In our [Blog], you will find 8 types of blog posts:

<div class="panel panel-gitlab-orange">
#### <i class="fa fa-globe fa-fw" style="color:rgb(252,109,38); font-size:.85em" aria-hidden="true"></i> Release Posts
{: .panel-heading #release-posts}
<div class="panel-body">
Every 22nd of each month, GitLab promotes a new release of our main instances:
[GitLab CE] and [GitLab EE]. GitLab.com runs on GitLab EE, therefore, it gets the same
enhancement GitLab EE does. We use our blog to communicate the new features,
upgrades, and alterations. These posts are created by the Product Team or by the
developers themselves, and they're reviewed by a lot of team members involved.

Release posts target the entire GitLab community, and they are usually cheered by
the everyone. They are special posts, we love them, and we hope you
love them too!

Once and awhile, you'll find patch-release posts as well. They are prepared by the
same team as the major release posts, to communicate new features, rollbacks, and
anything else relevant for the community.

When we find important security issues, we publish security release posts in the same
way. They communicate relevant changes that reflect in the system security and
related subjects.

Examples: [release] posts, [security release] posts.
</div>
</div>

<div class="panel panel-gitlab-purple">
#### <i class="fa fa-gitlab fa-fw" style="color:rgb(252,109,38); font-size:.85em" aria-hidden="true"></i> Team Member's Posts
{: .panel-heading #team-members-posts}
<div class="panel-body">
Whenever we have something interesting to talk about, we encourage our own team
members to write their stories. And there are a lot of awesome ones! Even if you are not a
writer, you are very welcome to write, and our reviewers will be happy to help
you with the language, the technical aspects, the markup, the concepts and whatever
else you might need.

If you are part of the [GitLab Team](/team/), please contribute! The review process is simple,
please take a look at the [General Publishing Process] below.
</div>
</div>

<div class="panel panel-success">
#### <i class="fa fa-hashtag fa-fw" style="color:rgb(252,109,38); font-size:.85em" aria-hidden="true"></i> Events Posts
{: .panel-heading #events-post}
<div class="panel-body">
Every 1st working day of the month we publish a post communicating the events for that following
month. They are written by our Field Marketing Manager & Swag Queen, [Emily Kyle], who always have a lot
of fun stories to share with us. Stay tuned for the next event near you, so you can pass by our
booth to say hello, grab your swag, and share your thoughts with Emily and other team members!

Events posts are also submitted to [General Reviews].
</div>
</div>

<div class="panel panel-info">
#### <i class="fa fa-heart fa-fw" style="color:rgb(252,109,38); font-size:.85em" aria-hidden="true"></i> Community Posts
{: .panel-heading #community-posts}
<div class="panel-body">
If you are not a GitLab Team member, you're also very welcome to write for us. There are a few aspects to consider,
described on the section [Community Writers](community-writers/).

If you are a GitLab happy customer or a happy user, we'll be delighted to see your post in
our Blog! And to make you even happier, we **compensate** you for your contributions, under
specific circumstances. Note that this is the only type of post that offers financial compensation.

The community posts follow a particular [publishing process](#publishing-process-for-community-writers).

If you are looking for examples for community posts, check [Setting up GitLab CI for iOS projects][post-iOS-CI],
[Hosting on GitLab.com with GitLab Pages][post-pages], and [Tutorial: Securing your GitLab Pages with TLS and Let's Encrypt][post-lets-encrypt].

**Note:** if you want to describe **your own product**, and how to use it with GitLab, we'll be happy to publish your
article as a [GitLab Guest Post](#guest-posts), not as a community post. If you are a GitLab official partner,
we'll be happy to see your post too! Please check, we have specific procedures for both [Guest Posts](#guest-posts) and [Partner Posts](#partner-posts).
{: .note}
</div>
</div>

<div class="panel panel-warning">
#### <i class="fa fa-rocket fa-fw" style="color:rgb(252,109,38); font-size:.85em" aria-hidden="true"></i> Guest Posts
{: .panel-heading #guest-posts}
<div class="panel-body">
These posts are specific for community members that want to write about their own tools,
features, and software integrations with GitLab. They can be written by the owners,
executives or any team members of those companies, and will be reviewed by the GitLab
Blog Editors according to the [Publishing Process for Guest Writers](#publishing-process-for-guest-writers).

For instance, we've had the post on [Integrating GitLab with Microsoft Azure][azure-post]. It was
written by one of Microsoft's employees, then reviewed and polished by our own Technical
Writers. A similar process occurred to publish the post on [Continuous Delivery with GitLab and Convox][convox-post].

**Note:** we do not offer compensation for Guest Posts.
{:.note}
</div>
</div>

<div class="panel panel-danger">
#### <i class="fa fa-institution fa-fw" style="color:rgb(252,109,38); font-size:.85em" aria-hidden="true"></i> Partner Posts
{: .panel-heading #partner-posts}
<div class="panel-body">
These posts are specific for official GitLab Partners. The drill for these posts is flexible, and 
can be adapted case by case. We usually write the post and publish according to a
schedule pre-defined by the GitLab Marketing Team and the partner.

Examples: integration with [Koding], [Digital Ocean], [Yubico], [Mattermost], [Pivotal Cloud Foundry].
</div>
</div>

<div class="panel panel-gitlab-orange">
#### <i class="fa fa-refresh fa-fw" style="color:rgb(252,109,38); font-size:.85em" aria-hidden="true"></i> Ghost Posts
{: .panel-heading #ghost-posts}
<div class="panel-body">
Ghost posts are part of a special category of posts, written by ghostwriters contracted by
GitLab with this specific purpose. They are based on interviews with GitLab Executives,
reviewed by GitLab Team members and Blog Editors, and approved by the GitLab Team member assigned as
author of the post.

Check the section [Publishing Process for Ghost Writers](#publishing-process-for-ghost-writers) below for more details.
</div>
</div>

<div class="panel panel-gitlab-purple">
#### <i class="fa fa-rss fa-fw" style="color:rgb(252,109,38); font-size:.85em" aria-hidden="true"></i> Crossposts
{: .panel-heading #crossposts}
<div class="panel-body">
These are great posts written by our community and published originally by another communication channel.
The writer is invited to reach us via Twitter or email (`community@gitlab.com`) asking to repost his/her
article in our blog. Your post will be evaluated by our Editors and, if accepted, will follow a [particular
publishing process](#publishing-process-for-crossposts) for crossposts. 

If we find your post ourselves, we'll reach you out and ask for your approval for cross-posting it. If you
are interested and agree with the [publishing process](#publishing-process-for-crossposts) and the quick review, your post will get reposted.

Everyone wins when we crosspost: we win, as it's interesting for our community; and you win, as your post will
gain extra visibility across the web!

Examples: [Moving to GitLab! Yes, it's worth it!][cross-1], [Building an Elixir Release into a Docker image using GitLab CI - Part 1][cross-2], [Applying GitLab Labels Automatically][cross-3].
</div>
</div>

### GitLab Community Writers Program
{: #community-writers}

Read through the terms on the [Community Writers Program](community-writers/).

### Publishing Processes

#### Blog Editorial Team

The publishing process is simple and is conducted for our Blog Editors and reviewers. Check their roles:

- **Blog Editorial Manager:** Erica Lindberg ([@Lindberg]), Content Marketing Manager
  - Blog Content Calendar manager
  - Content strategy
  - Content priority
  - Content approval
  - English review and approval
  - Social media promotion
- **Blog Technical Editorial:** Marcia Ramos ([@marcia]), Technical Writer
  - Technical review and approval
  - Markdown, structure, and flow review and approval
  - Merge to master
- **Blog Technical Reviewers:** any GitLab Team member with technical expertize on the post's subject
  - Technical review and approval
  - Test and reproduce methods and procedures

#### General Publications

1. Choose a [topic](#blog-content)
1. Define the target audience, knowledge level and system requirements ([example])
1. Create outlines (a few items describing what you want to discuss along the post)
1. Submit an issue on the [blog posts issue tracker][blog-tracker] containing the previous items (or pick up one of the existing issues)
1. Mention Erica @Lindberg for feedback on your proposal and on your outlines
  - If necessary, Erica will assign Marcia for evaluating your proposal and outlines
  - Erica will ask for an ETA on your first draft
  - Erica will evaluate the priority, and estimate a due date for publishing (issue due date)
  - Erica will give you a thumbs up 👍 to start writing (@mention you saying "you're good to go!")
1. Write the post according to the [Professional Writing Techniques][writing-tech] and to the [Markdown Guide]
1. Submit your draft as a WIP MR (Work in Progress Merge Request) to the [GitLab website project][gitlabwww]
1. You'll get [reviewed](#general-reviews) and feedback from our Editorial Team
1. Your post will be published
1. Marketing Team will promote on social media (Twitter/Facebook)

#### General Reviews

- 1st review: Marcia (when technical), Erica (when non-technical)
- Structural review: post structure, flow, and markdown: Marcia
- Technical review: Marcia, [Axil], [Sean], and/or one of the developers (depending on the content)
- Last review (content, English): Erica
- Last [check](#check-list-before-merging) (preview, markdown, images, date, build) and merge: Marcia or Erica

Read the section [Performing Reviews](#performing-reviews) for further details.

#### Publishing process for Community Writers

For our [community writers], we will follow the Scalable Writing System described below, coordinated by the [Blog Editorial Team].

1. Community Writer - choose a subject:
   - Make sure you are familiar with the [GitLab Workflow]
   - Select an issue from <https://gitlab.com/gitlab-com/blog-posts/issues> [labeled](#labels) with `up-for-grabs` or create a new one (only if your proposal is relevant for one of the [current important topics](#topics-community-writers)).
   - Leave a comment "@Lindberg I would like to write this post and I accept the terms on the [Community Writers Program][Community Writers]. Below follows my [writing sample](#sample) and the [proposed outlines](#outlines)."
1. Content Marketing - analyses the proposal:
  - Erica will evaluate the writer's sample and discuss anything necessary before the author start writing
  - If necessary, Erica will assign Marcia for evaluating your proposal and outlines
  - If the issue isn't already labeled with the [compensation labels](#compensation-labels) (`$100`, `$200`, `TOP PRIORITY`), Erica will define the compensation the post is worth and attribute the correct label.
  - When the community writer is approved to get started, Erica will leave a comment "@username, you got it!" and label the issue `on it` and `community post`.
  - Erica will ask for an ETA on your first draft
  - Erica will evaluate the priority, and estimate a due date for publishing (issue due date)
1. Community Writer: prepare your local environment and submit the article
  - Fork <https://gitlab.com/gitlab-com/www-gitlab-com/> and run it locally
  - Write according to the [Professional Writing Techniques][writing-tech], and to the [Markdown Guide]
  - Submit a [Work in Progress Merge Request (WIP MR)][WIP MR] with the proposal and mention @Lindberg for the first pass
1. GitLab: Erica will make sure the MR description contains the [issue closing pattern][issue-close] (`Closes #xxx`) and the label `community post`, and start the review process
1. GitLab - [General Review](#general-reviews)
1. GitLab - When your post gets ready:
  - Marcia will change your MR from your branch into `gitlab.com: master` to another branch `gitlab.com: feature-branch`
  - Marcia will merge your MR into the new `feature-branch` and:
       - Create a new MR to `master`, which closes the blog post issue (link to the original MR)
       - Preview the post locally
       - Upload the preview screenshot to the new MR thread
  - Marcia and Erica can make any necessary adjustments to the post in the new MR (date, typos, grammar, broken links, and other changes that won't affect substantially the content)
  - Erica will place the final date for publishing and create the copyedit for social media (140 chars tops, including the post link)
1. On the publishing date:
  - Marcia or Erica will merge your post into `master`
  - Erica or Marcia will promote in social media: Twitter and/or Facebook
1. After the publishing date: compensate the writer (when compensation applies)
  - Author send an email to Erica (at `community@gitlab.com`) requesting the compensation for the post, adding a link to the issue, to the original MR, and to the published post
  - Erica replies the writer to [start the process](community-writers/#get-paid) to wire the money
  - Community writer will get paid

**Important:** make sure the last section of the post is "About the Community Author", describing in two or three sentences the author's background on the post's subject. It should be written by the author him/herself. Examples: check [this post][post-convox] and [this post][post-iOS] for reference.
{: .alert .alert-warning}

**Important:** never write your draft on pre-styled text editors like Google Docs or Microsoft Word. They don't use the same
character encoding as markdown does (UTF-8), and it may cause issues when rendering markdown into HTML. Please use one of
the [recommended code editors][code-editors].
{: #sample .alert .alert-warning}

**Sample:** your writing sample can be any technical article or post already written by yourself, or a sample of ~200 words on a related topic.
{: #sample .alert .alert-info}

**Outlines:** draw the post outlines, which is the sequence of topics to write about, as a skeleton with the headings you propose to follow along in your post. The blog editors will discuss them with you, and review if necessary.
{: #outlines .alert .alert-info}

#### Publishing process for Guest Writers

To be included

#### Publishing process for Ghost Writers

To be included

#### Publishing process for CrossPosts

To be included

### Labels Strategy
{: #labels}

Every blog post should carry a label, in both issues and merge requests:

- [Release]
- [Team Post][team] (for GitLab team members)
- [Events Post][Events]
- [Community Post]
- [Guest Post]
- [Partner Post]
- [Ghost Post]
- [Crosspost]
- [Up-for-grabs][]: posts opened to the team, community, and guests
- [On-it][]: posts that are being written

#### Labels Exclusive for Community Posts
{: #compensation-labels}

The following labels define the [compensation](community-writers/#compensation) the post is worth it, corresponding to its length, importance to our Content Strategy, and to our community. They should be applied to every compensated community post, only in the [Blog Posts issue tracker][blog-tracker].

- [`$100`][$100] = post worth USD 100.00: short tutorials of 800-1500 words
- [`$200`][$200] = post worth USD 200.00: in-depth tutorials or opinion pieces of 1,500+ words
- [`TOP PRIORITY`][TOP PRIORITY] = top priority posts, worth USD 200.00 regardless of length

**Important:** these exclusive labels should be added by the [Blog Editors][Blog Editorial Team] only. If you find a post that you think should receive one of these labels, please @mention one of the editors in the issue or MR. They will evaluate your request and attribute the proper label.

### Blog Post Issue Tracker

To keep things clear for everyone in the [issue tracker][blog-tracker], we assume:

- Anything not assigned to a person is in the [backlog]
- Anything that is assigned to a person or labels with `on it` is "in progress"
- Anything that has a `WIP` MR is ready for review
- Any MR that does not have a `WIP` is ready to be merged

### Performing Reviews

To be included

### Styles

Check out our [styles guidelines].

### Forked project

Before you write, make sure you forked [`www-gitlab-com`], cloned to your computer, and were able to preview it locally by running `bundle exec middleman`.
Before making any change, create a new branch `git checkout -b branchname` cloned from `master`.

### Check list before merging

Reviewer - check these before you publish:

- Check if the post follows the [Blog Style Guide](#styles-guidelines)
- Check all links - make sure none is broken
- Check the file extension `.html.md`
- Check the date on the file name
- Check the date in the post
- Check the image(s) is(are) crunched down.
- Check the blog appears good locally
- When you have double checked, you can merge

It takes about 7-10 mins for the blog post to appear as published after merged. As soon as it's live, check the
post for broken links using this tool (or similar): <http://www.deadlinkchecker.com/>. Fix anything _before_ sharing
in any communication channel or social media network.

After the blog post is published we should tweet immediately from the GitLab
Twitter account, and schedule follow up tweets, and LinkedIn and Facebook posts.
Just **make sure** to [validate the Twitter Card][twitter card validator] before tweeting!

## Get inspired

- The content doesn't have to be about GitLab, it can also be other content aimed at developers, Hacker News or team leads
- You need to have high quality and high volume, great times are in the [Priceonomics content marketing handbook]
- When submitting to Hacker News please add a ? to the url and do not announce it anywhere to prevent setting off the voting ring detector. Trying to work around the voting ring detector by upvoting from the new page is not reliable, just don't announce nor ask for votes.
- What worked for Apigee was the 'collaboration in the 21st century' theme
- Explore a reading club such as [a NoSQL summer]
- Milk [GitLab Flow] for more blog posts and videos

## Inspire

We invite and encourage guest writers and also offer compensation through the [Community Writers] program.

----

## Blog Style Guidelines
{: #styles-guidelines}

This style guide is specifically for blog posts on [about.GitLab.com/blog][blog].

### Assumptions

Every blog post must start from the documentation, never the opposite. Thus, if the subject you want to write about
is not documented, please consider contributing to the docs first, or bring it to our attention by
[creating a new issue][issue-docs], so we can take action to make it documented properly.

Before writing, make sure you've read through this Style Guidelines, the [Blog directives][marketing-blog], the [Technical Aspects], the
[Professional Writing Techniques][writing-tech] and the [Markdown Style Guide].

Before submitting your post for review, make sure you:

- Forked the project [www-gitlab-com] and cloned your fork to your computer
- Have [Git], [Bundler] and [Middleman] installed locally
- Have all the project dependencies installed, by running `bundle install` in your terminal
- Have previewed your post locally by running `bundle exec middleman`, then accessing it under <http://localhost:4567/blog/>

### File

The blog posts are located in the project [www-gitlab-com], under `/source/posts/`.

The file name must have this structure: `yyyy-mm-dd-title-of-the-post.html.md`. The date can be
changed just before publishing, so don't worry if it is accurate or not. Future dates are accepted,
in case you have estimated the publishing date, which is defined by the Marketing Team.

In all file names, prefer using dashes `-` than underscores `_`. Do not leave blank spaces in file names, ever.

### Markdown

All posts are written in markdown Kramdown. Please read through the [Markdown Style Guide] for reference.

### Frontmatter

The post **frontmatter** is the first part of any post. It is standard and cannot be changed, so please make
sure to provide the correct information, and do not add nor remove anything from the default template:

```yaml
---
title: "This is the post title"
author: Firstname Lastname
author_twitter: userID
categories: technical overview
image_title: '/images/blogimages/post-cover-image.jpg'
description: "Short description for the blog post" # included in August, 2016
---
```

<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> New frontmatter! Social Media information: `twitter_image` and `description`!
{: .alert .alert-warning .ambar}

```yaml
---
title: "This is the post title"
author: Firstname Lastname
author_twitter: userID
categories: technical overview
image_title: '/images/blogimages/post-cover-image.jpg'
description: "Short description for the blog post"
twitter_image: '/images/tweets/post-screenshot-image.png'
---
```

#### Title

Make sure the post title represents very well the subject, and make it as short as possible.
Do the same for headings.

#### Author Name

Use the author's full name. If the name has special chars, type it within
double quotes `"Full Name"`.

#### Twitter Handle

Don't worry if you don't have an account on Twitter. Leave the field `author_twitter` blank.

#### Categories

Use only **one** of the following categories per post.
**Do not** capitalize nor pluralize them, nor change any letter,
otherwise you'll create another category, which is somenthing we don't want to do unpurposely.

- concepts _(use it when your post in on continuous integration, innersource, open source, version control, SaaS, etc)_
- events
- git
- GitLab _(all GitLab products/features: Geo, GDK, Pages, LDPA, Hooks, etc.)_
- GitLab CI
- GitLab CE _(use it when highlighting CE features, advantages, etc.)_
- GitLab EE _(EE-only features)_
- GitLab workflow _(issues, merge requests, confidential issues, milestones, todos, etc.)_
- inside GitLab _(remote-first, remote work, team interview, work experience, etc.)_
- integration _(GitLab + something else)_
- press
- release
- security release _(when the main objective is GitLab security)_
- technical overview
- tutorial

We'll improve it, but by now you can find posts under the same category by navigating to
`https://about.gitlab.com/blog/categories/category-name/`. Dashes will be automatically added
to multi-word categories and all of them will be lowercased in the URL. For example, the
category "GitLab CE" will be available under `https://about.gitlab.com/blog/categories/gitlab-ce/`.

If you think we are missing an important category, please let us know by adding a comment
to this issue: <https://gitlab.com/gitlab-com/www-gitlab-com/issues/721>.

#### Cover Image
{: #cover-image-frontmatter}

Do not leave the post without a cover image (`image_title`), unless you have a strong reason to do so.
Read more about it [below](#cover-image).

#### Description

The `description` meta tag [is important][description-tag]
for SEO, also is part of [Facebook Sharing][og] and [Twitter Cards]. We set it up in the
[post frontmatter](#frontmatter), as a small summary of what the post is about.

It's a way of making the post title shorter, then add complementary information in the description.
It's not meant to repeat the post title, use your creativity to describe what's in the post.
Try to use about 70 to 100 chars in one sentence.

It is mandatory for all the new posts, and it [has been included][MR-description] in the default post
frontmatter generated by [the command `rake new_post`](#create-a-new-post).

Use this syntax:

```yaml
description: "This is an example description for a blog post."
```

See the following section "Social Media Info" for more information.

#### Social Media Info

When you post a link on Facebook or Twitter, either you can
see only a link, or a full interactive card, which displays
information about that link: title, **description**, **image** and URL.

For Facebook these cards are configured via [OpenGraph Meta Tags][OG].
[Twitter Cards] were recently setup for our website as well.

Please compare the following images illustrating post's tweets.

A complete card will look like this:

![Twitter Card example - complete][twitter-card-comp]

An incomplete card will look like this:

![Twitter Card example - incomplete][twitter-card-incomp]

Note that the [first post] has a **specific description** and the image is a **screenshot**
of the post's cover image, taken from the [Blog landing page][blog]. This screenshot
can be taken locally when previewing the site at `localhost:4567/blog/`.

All the screenshots for `twitter_image` should be pushed to the [www-gitlab-com] project
at `/source/images/tweets/` and must be named after the post's file name.
If the post is called `2016-03-20-hello-world.html.md`, the tweet image
must be named `hello-world.png` (or `.jpg`).

For the [second post] above, note that the tweet image is the blog post cover image itself,
not the screenshot. Also, there's no `description` provided in the frontmatter, so our
Twitter Cards and Facebook's post will present the _fall back description_,
which is the same for all [about.GitLab.com].

The `description` is a [mandatory field](#description), though the `twitter_image` is optional.
Whenever possible, provide the post screenshot image to make it easier to our audience to identify
a GitLab Blog Post straight away when scrolling their feed.

You can check and preview them with the [Twitter Card Validator]
and the [Facebook Debugger].

#### Comments

Comments are present in all posts by default. Set it to false only if you have a strong reason to
do so (`comments: false`). They are our best source of feedback on posts.

#### Date

The variable `date: yyyy-mm-aa hh:mm:ss` is not necessary in the frontmatter anymore, unless you want
to set an specific time. If you do, just make sure that the date in the file name matches with
the date in the frontmatter, otherwise the build will fail. It's going to be necessary when publishing
more than one post per day. The latest will stay on the top of the [blog landing page][blog].

### Create a new post

You can create a new post however you prefer: adding a new file to `/source/posts/`, duplicating
an existing post, or using the command line, which is the safest way to do so. Just is type
into your terminal (opened in your local project directory):

```sh
rake new_post
```

Hit **enter** or **return**, then you'll be prompted to enter the post title. Type in the title exactly as you
want it, for example "Hello World - I'm a new post" and rake will take care of the file name for you.
Then you just open the file, fill in with your name, Twitter handle, and the post category, then you'll be
good to start writing.

### Writing Style

At GitLab, we use American English as the standard written language. 

GitLab content primarily follows [AP Style](http://www.apstylebook.com/online/?do=chapter), the guide for which is searchable online. Any questions that cannot be answered by the AP Stylebook may be resolved by referring to the [Chicago Manual of Style](http://www.chicagomanualofstyle.org/home.html). To learn about GitLab's advanced formatting system, check out our [Markdown Guide](https://gitlab.com/help/user/markdown.md). 

### Body structure

Just below the frontmatter, start writing your post, including the sections as follows:

- Introduction. State the problem, audience and purpose of the article.
- Add the `<!-- more -->` separator. This is going to separate the visible part on the landing
page <https://about.GitLab.com/blog/> from the rest of the article body.
- Software and hardware requirements - explain what the reader needs before following your steps.
- Concepts - state and explain the concepts needed to follow through your post.
- Article body - develop the subject of your post.
- Section `## Conclusion` - summarize the article.
- Section `## About guest author` - when the author is not a GitLab Team member, add this section telling
in 3 or 4 sentences who is the guest author, and what is her/his background on the post's subject.
It must be written by the author her/himself.
- Section `## Acknowledgments` - whenever there are more people deeply involved in having the post ready to go,
you can add this section to show your gratitude to your colleagues.

If the article is part of a series, make sure to link back among all articles
in the series to each one after they get published.

### Tutorials

When writing tutorials, be clear on the steps needed to follow through.
Break the tutorial into small steps and the steps into tasks, but bare
in mind that long lists of steps have the downside of being hard to follow
and refer back to. So, consider serializing posts if needed.

### References

As explained on the [Professional Writing Techniques][writing-tech], always provide source for your statements.

### Illustration

Illustrate your examples, with code blocks or screenshots. Be consistent along your examples. E.g., if you are using a generic URL
to exemplify your steps `domain.com`, be consistent and keep it `domain.com`, throughout the post.

**Important security point:** Do not expose your personal details by using your real tokens or
security credentials.
Use placeholders such as `[project's CI token]` stub instead. Or blur them if displayed on screenshots.

### Images

#### Creating images
{: .no_toc}

- Static images should be used to illustrate concepts, provide diagrams, elements of the UI or orient the reader.
- Images should not be used to render commands or configuration which would prevent
someone being able to copy and paste.
- Animated GIFs can be used sparingly where you need to show a process or some event
happening over the course of time or several actions, though they should not replace text descriptions or instructions.
- Use screenshots to identify and localize specific parts of the screeen. There are great tools
for doing so. For example, [Nimbus Screenshot]  (browser extention), [Mac screenshot],
[Snipping Tool] for Windows, and [Screenshot Tool] for Ubuntu.

#### Preparing images
{: .no_toc}

For the blog, images should be cropped in a 1.7 width/height pixel *proportion* (ideally 1275px x 750px)
so the image doesn't get clipped when displayed as a lead image in the blog list.
This includes the cover image.
Compress the image, for example using [TinyPNG.com][tinypng] or any other image editor.
To preserve the harmony along the post, try to keep all the images with the same width
(e.g., the ones used in [this post][width-post]).

The only images accepted for about.GitLab.com are public domain images and
screenshots. Whenever you choose an image which is not a screenshot, add a
link to the original image to the merge request description and as an HTML comment:

```html
<!-- image: image-url -->
```

Do the same for [cover images](#cover-image), adding a link to the original image
to the end of the post as a comment and to the MR description:

```html
<!-- cover image: image-url -->
```

#### Image shadow

It is important to highlight the image so that it can easily be recognized as image, and not as part of the text.
The way we use is adding a [CSS custom class][css-shadow] called `shadow`. You do that by adding the markup `{: .shadow}`
right besides the image markup:

```md
![Image Alternative Text](/path/to/image.png){: .shadow}
```

#### Where to place images
{: .no_toc}

Images used to illustrate articles should be placed in the `/source/images/blogimages/` directory.
Unless they are 'free to use' lead images from [Unsplash][unsplash], which should be placed in the
`/source/images/unsplash` directory.

#### Naming images
{: .no_toc}

If you are using a set of images, create a **new directory** under `/source/images/blogimages/`, name it according to
your post's title and add all the images there. For example, if your post has a file name
`2015-03-20-my-awesome-post.html.md`, your new folder should be named `/my-awesome-post/`.

If you use just a couple images, you can add them directly to `/source/images/blogimages/`, but make sure they begin with the same
name as you post's. This way it's easy to anyone know which image is related to each post. Name the files according to the previous example.
So, following the same logic, your cover image would be named `my-awesome-post-cover.png`, accessed under
`/source/images/blogimages/my-awesome-post-cover.png`.

#### Cover image
{: .no_toc}

Choose a cover image for your post. Try any public domain resource that
reflects somehow your post's subject. In the absence of an image, use one of these:

- GitLab Default: `'/images/default-blog-image.png'` (purple background and the Tanuki logo)
- Blog Default: `'/images/blogimages/gitlab-blog-cover.png'` (purple background, the Tanuki logo and "GitLab")

The cover image has the following proportions:

On the [blog landing page][blog]: 1275px x 750px w/h = 1.7
On blog post page (widescreen): 1920px x 550px w/h = 3.5

Try to have them harmonically aligned with the title,
which overlays the background image in both cases.

#### Creating GIFs
{: .no_toc}

Animated GIFs are very useful to illustrate short dynamic processes, which might be easier to understand with this kind of resource.
There are a few ways to create animated GIFs, one of them is using [Giphy Capture], a light-weight app for Mac.

Avoid GIFs with a huge file size, they will be difficult to load for users with bad internet connection. In those cases,
you can either cut the GIFs in smaller pieces, or record a video, or use a sequential image (e.g., the ones used in [this post][gifs-post]).

Read more on [Making Gifs] in the Product Handbook.

### GitLab Specific Terms

- **GitLab** is always spelled with capital "G" and "L".
- If you're writing about the CI feature, it's not a separate product.
For example don't refer to "Gitlab CI's runner" please refer to "GitLab Runner", capital "R".
- **GitLab, Inc.** is the company. **GitLab** is the SaaS, which refers to **GitLab.com**, **GitLab EE** and **GitLab CE**.
- We refer to **GitLab team members** instead of staff.
- Make sure the CI configuration file is spelled ``` `.gitlab-ci.yml` ```, with the leading period and backticks.
- When we refer to specific configuration sections or pages in GitLab they should be in **bold**.
- Refer to this website as **about.GitLab.com**, with capital "G" and "L", as always. **GitLab.com** is not the website, is the SaaS.

----

## Blog Content Calendar

In the spreadsheet below you'll find posts recently published (From 2016, June 1st on), together with some other posts that are queued for writing, reviewing and publishing. This calendar was implemented not long ago and is still being improved, it's opened to eventual changes and contributions.

The link attached to the post title will lead you to the Merge Request, while the link on "Published" will lead you to the post itself.

<figure class="video_container">
<iframe width="402" height="346" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?cid=696487FB19CE5807&resid=696487FB19CE5807%21999&authkey=AG3_C1jCZa8qMWo&em=2&ActiveCell='Content%20Queue'!B1&wdHideGridlines=True"></iframe>
</figure>

<br>

**Note:** Main Content Pillars, subjects, categories, names, content distribution, and other
specific matters are still being discussed and polished.
{: .note}


<!-- Identifiers, in alphabetical order -->

<!-- INTRO -->

[dev-rel]: /handbook/marketing/developer-relations/
[prod]: /handbook/marketing/product-marketing/

<!-- GITLAB BLOG DIRECTIVES -->

[a NoSQL summer]: //nosqlsummer.org/
[about Swift]: https://realm.io/news/top-5-swift-videos-of-2014/
[backlog]: https://dev.gitlab.org/gitlab/blog-posts/issues?milestone_id=&scope=all&sort=created_desc&state=opened&utf8=%E2%9C%93&author_id=&assignee_id=0&milestone_title=&label_name=
[Blog post style guide]: https://gitlab.com/gitlab-com/blog-posts/blob/master/STYLEGUIDE.md
[blog-tracker]: https://gitlab.com/gitlab-com/blog-posts/issues
[Community Writers]: community-writers/
[example]: /handbook/marketing/developer-relations/technical-writing/#st-subject-audience-requirements
[GitLab Flow]: //doc.gitlab.com/ee/workflow/gitlab_flow.html
[GitLab Workflow]: https://www.youtube.com/watch?v=enMumwvLAug "Introduction to GitLab Workflow"
[GitLab]: /
[gitlabwww]: https://gitlab.com/gitlab-com/www-gitlab-com
[Kramdown]: //kramdown.gettalong.org/
[post-convox]: https://about.gitlab.com/2016/06/09/continuous-delivery-with-gitlab-and-convox/#about-guest-author-noah-zoschke
[post-iOS]: https://about.gitlab.com/2016/03/10/setting-up-gitlab-ci-for-ios-projects/#about-guest-author-angelo-stavrow
[Priceonomics content marketing handbook]: http://priceonomics.com/the-content-marketing-handbook/
[public domain]: https://en.wikipedia.org/wiki/Public_domain
[Realm.io]: //realm.io
[styles guidelines]: #styles-guidelines
[tech-writing-audience]: /handbook/marketing/developer-relations/technical-writing/#st-subject-audience-requirements
[tinypng]: //tinypng.com
[WIP MR]: http://docs.gitlab.com/ce/workflow/wip_merge_requests.html "Work In Progress Merge Request"
[writing-tech]: /handbook/marketing/developer-relations/technical-writing/#professional-writing-techniques
[`www-gitlab-com`]: https://gitlab.com/gitlab-com/www-gitlab-com/

<!-- BLOG STYLE GUIDELINES -->

[(key)words]: http://www.wordstream.com/seo-keyword
[@Lindberg]: https://gitlab.com/u/Lindberg
[@marcia]: https://gitlab.com/u/marcia
[about.GitLab.com]: https://about.gitlab.com/
[android-doc]: http://developer.android.com/intl/pt-br/tools/help/emulator.html
[android-emulator]: http://developer.android.com/intl/pt-br/tools/devices/emulator.html
[Axil]: https://gitlab.com/u/axil
[azure-post]: /2016/07/13/how-to-setup-a-gitlab-instance-on-microsoft-azure/
[Blog Editorial Team]: #blog-editorial-team
[Blog Editorial Team]: #blog-editorial-team
[blog-tracker]: https://gitlab.com/gitlab-com/blog-posts/issues
[blog]: /blog/
[bundler]: http://bundler.io/
[code-editors]: /handbook/marketing/developer-relations/technical-writing/markdown-guide/#markdown-editors
[convox-post]: /2016/06/09/continuous-delivery-with-gitlab-and-convox/
[cross-1]: /2016/08/04/moving-to-gitlab-yes-its-worth-it/
[cross-2]: /2016/08/11/building-an-elixir-release-into-docker-image-using-gitlab-ci-part-1/
[cross-3]: /2016/08/19/applying-gitlab-labels-automatically/
[css-shadow]: /handbook/marketing/developer-relations/technical-writing/markdown-guide/#special-classes
[description-tag]: http://www.wordstream.com/meta-tags
[Digital Ocean]: /2016/04/19/gitlab-partners-with-digitalocean-to-make-continuous-integration-faster-safer-and-more-affordable/
[documentation]: http://docs.gitlab.com/
[Emily Kyle]: https://twitter.com/emilylucie
[facebook debugger]: https://developers.facebook.com/tools/debug/
[first post]: /2016/07/19/markdown-kramdown-tips-and-tricks/
[General Publishing Process]: #general-publications
[General Reviews]: #general-reviews
[gifs-post]: /2016/08/19/posting-to-your-gitlab-pages-blog-from-ios/
[Giphy Capture]: https://itunes.apple.com/us/app/giphy-capture.-the-gif-maker/id668208984?mt=12
[git]: https://git-scm.com/
[GitLab CE]: https://gitlab.com/gitlab-org/gitlab-ce/
[GitLab EE]: https://gitlab.com/gitlab-org/gitlab-ee/
[issue-close]: https://docs.gitlab.com/ce/user/project/issues/automatic_issue_closing.html
[issue-docs]: https://gitlab.com/gitlab-org/gitlab-ce/issues/
[Koding]: /2016/07/26/koding-and-gitlab-integrated/
[Mac screenshot]: https://support.apple.com/en-us/HT201361
[Making Gifs]: /handbook/product/making-gifs
[Markdown Guide]: /handbook/marketing/developer-relations/technical-writing/markdown-guide/
[Markdown Style Guide]: /handbook/marketing/developer-relations/technical-writing/markdown-guide/
[marketing-blog]: #blog
[Mattermost]: /2015/08/18/gitlab-loves-mattermost/
[middleman]: https://middlemanapp.com/basics/install/
[MR-description]: https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/2740/
[Nimbus Screenshot]: http://nimbus.everhelper.me/screenshot.php
[OG]: https://developers.facebook.com/docs/sharing/webmasters#markup
[Pivotal Cloud Foundry]: /2015/11/03/pivotal-cloud-foundry-tile-for-gitlab-ee/
[post-iOS-CI]: /2016/03/10/setting-up-gitlab-ci-for-ios-projects/
[post-lets-encrypt]: /2016/04/11/tutorial-securing-your-gitlab-pages-with-tls-and-letsencrypt/
[post-pages]: /2016/04/07/gitlab-pages-setup/
[release]: /blog/categories/release/
[Screenshot Tool]: https://help.ubuntu.com/lts/ubuntu-help/screen-shot-record.html
[Sean]: https://gitlab.com/u/SeanPackham
[second post]: /2016/07/20/gitlab-is-open-core-github-is-closed-source/
[security release]: /blog/categories/security-release/
[Snipping Tool]: https://support.microsoft.com/en-us/help/13776/windows-use-snipping-tool-to-capture-screenshots
[synonyms]: http://www.thesaurus.com/
[tech-writing-wiki]: https://en.wikipedia.org/wiki/Technical_writing
[technical aspects]: #technical-aspects
[technical writers]: /jobs/technical-writer/
[tinypng]: https://tinypng.com/
[twitter card validator]: https://cards-dev.twitter.com/validator
[twitter cards]: https://dev.twitter.com/cards/overview
[twitter-card-comp]: /images/handbook/marketing/twitter-card-complete.jpg
[twitter-card-incomp]: /images/handbook/marketing/twitter-card-incomplete.jpg
[unsplash]: https://unsplash.com/
[width-post]: /2016/08/05/feature-highlight-set-dates-for-issues/
[WIP MR]: http://docs.gitlab.com/ce/workflow/wip_merge_requests.html "Work In Progress Merge Request"
[www-gitlab-com]: https://gitlab.com/gitlab-com/www-gitlab-com/
[Yubico]: /2016/08/31/gitlab-and-yubico-security-webcast/

<!-- Labels -->

[$100]: https://gitlab.com/gitlab-com/blog-posts/issues?label_name%5B%5D=%24+100
[$200]: https://gitlab.com/gitlab-com/blog-posts/issues?label_name%5B%5D=%24200
[TOP PRIORITY]: https://gitlab.com/gitlab-com/blog-posts/issues?label_name%5B%5D=TOP+PRIORITY
[Release]: https://gitlab.com/gitlab-com/www-gitlab-com/issues?label_name%5B%5D=release
[team]: https://gitlab.com/gitlab-com/blog-posts/issues?label_name%5B%5D=Team+Post
[Events]: https://gitlab.com/gitlab-com/www-gitlab-com/issues?label_name%5B%5D=Events
[Community Post]: https://gitlab.com/gitlab-com/www-gitlab-com/issues?label_name%5B%5D=release
[Guest Post]: https://gitlab.com/gitlab-com/blog-posts/issues?label_name%5B%5D=Guest+Posts
[Partner Post]: https://gitlab.com/gitlab-com/blog-posts/issues?label_name%5B%5D=Partner+Post
[Ghost Post]: https://gitlab.com/gitlab-com/blog-posts/issues?label_name%5B%5D=Ghost+Posts
[Crosspost]: https://gitlab.com/gitlab-com/blog-posts/issues?label_name%5B%5D=Crosspost
[Up-for-grabs]: https://gitlab.com/gitlab-com/blog-posts/issues?label_name%5B%5D=up-for-grabs
[On-it]: https://gitlab.com/gitlab-com/blog-posts/issues?label_name%5B%5D=On-it

<!-- Styles -->

<style>
 .center {
   text-align: center;
   display: block;
   margin-right: auto;
   margin-left: auto;
 }
 .alert-purple {
   color: rgb(107,79,187);
   background-color: #fff;
   border-color: rgba(107,79,187,.5);
 }
  .purple {
   color: rgb(107,79,187) !important;
 }
   .ambar {
    color: rgb(138,109,59) !important;
 }
 </style>
