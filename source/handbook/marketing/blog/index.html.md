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

**All** blog posts should always have an **author name**. When applicable, add a section "Acknowledgments" to the end of the post to thank contributors.

### Publishing process for GitLab Team members

1. Choose a [topic](#blog-content)
1. Define the target audience, knowledge level and system requirements ([example])
1. Create outlines (a few items describing what you want to discuss along the post)
1. Submit an issue on the [blog posts issue tracker][blog-tracker] containing the previous items
1. Mention @amara for feedback on your proposal and on your outlines
1. Amara will evaluate the priority and estimate a due date for publishing
1. Write the post according to the [Professional Writing Techniques][writing-tech]
1. Submit your draft as a WIP MR (work in progress merge request) in the [GitLab website project][gitlabwww]
1. You'll get reviewed and feedback from our Marketing Team:
   - Assign Marcia (@virtuacreative) for a general review
   - When done, Marcia will reassign to Axil (if technical), or Amara (if non-technical)
   - Amara gives the last check and approval to merge
1. Your post will be published
1. Marketing Team will post on social media (Twitter/Facebook)

Not a GitLab Team member? Check the process for Community Writers below.

### Publishing process for Community Writers

For our [community writers], we will follow the Scalable Writing System described below.

1. Community Writer - choose a subject:
   - Make sure you are familiar with [GitLab Workflow]
   - Select an issue from <https://gitlab.com/gitlab-com/blog-posts/issues> or create a new one.
   - Leave a comment "@amara I would like to write this and I accept the terms on [Community Writers Program][Community Writers]. Below follows my writing sample."
2. Content Marketing - analyse the proposal:
  - Amara will evaluate the writer's sample and discuss anything necessary before start writing
  - When the guest writer is approved to get started, Amara will leave a comment "@username, you got it!" and assign the issue to the writer
3. Community Writer: prepare local environment and submit the article
  - Fork <https://gitlab.com/gitlab-com/www-gitlab-com/> and run it locally
  - Write according to the [Professional Writing Techniques][writing-tech]
  - Submit a [WIP MR] with the proposal and assign it to Amara
4. Reviewers:
  - Amara will take a first look to approve the article for review, and assign Marcia for the first review
  - When first review is finished, Marcia will assign Axil for a detailed technical review
  - When finished, Axil will reassign the merge request to Amara, who will follow the [check list](#check-list-before-merging) and approve the content for publishing
5. Content Marketing: publish
  - Content Marketing will place the date for publishing
  - Amara will merge and tweet/Facebook
6. Content Marketing / Account Ops: pay the writer
  - Amara email the writer to wire the money
  - Guest writer will get paid

Important: make sure the last section of the post is "About the guest author", describing in two or three sentences the author's background on the post's subject. It should be written by the author him/herself. Examples: check [this post][post-convox] and [this post][post-iOS] for reference.


### Blog Post Issue Tracker

To keep things clear for everyone, we assume:

- Anything not assigned to a person is in the [backlog]
- Anything that is assigned to a person is "in progress"
- Anything that has a WIP MR is ready for review

### Styles

Check out our [styles guidelines].

### Forked project

Before you write, make sure you forked [`www-gitlab-com`], cloned to your computer, and were able to preview it locally by running `bundle exec middleman`.
Before making any change, create a new branch `git checkout -b branchname` cloned from `master`.

### Check list before merging

Reviewer - check these before you publish:

- Follow the [Blog Style Guide](#styles-guidelines)
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
Twitter account, and schedule follow up tweets and LinkedIn and Facebook.
[Validate the Twitter Card][twitter card validator] before tweeting!

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

### Style Guide

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

Choose a cover image for your post. Try any public domain resource that reflects somehow your post's subject. In the absence
of an image, use one of these:

- GitLab Default: `'/images/default-blog-image.png'` (purple background and the Tanuki logo)
- Blog Default: `'/images/blogimages/gitlab-blog-cover.png'` (purple background, the Tanuki logo and "GitLab")

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
[Community Writers]: https://about.gitlab.com/community/writers
[example]: /handbook/marketing/developer-relations/technical-writing/#st-subject-audience-requirements
[GitLab]: //about.gitlab.com
[GitLab Flow]: //doc.gitlab.com/ee/workflow/gitlab_flow.html
[GitLab Workflow]: https://www.youtube.com/watch?v=enMumwvLAug "Introduction to GitLab Workflow"
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
[about.GitLab.com]: https://about.gitlab.com/
[android-doc]: http://developer.android.com/intl/pt-br/tools/help/emulator.html
[android-emulator]: http://developer.android.com/intl/pt-br/tools/devices/emulator.html
[blog-tracker]: https://gitlab.com/gitlab-com/blog-posts/issues
[blog]: /blog/
[bundler]: http://bundler.io/
[css-shadow]: /handbook/marketing/developer-relations/technical-writing/markdown-guide/#special-classes
[description-tag]: http://www.wordstream.com/meta-tags
[documentation]: http://docs.gitlab.com/
[facebook debugger]: https://developers.facebook.com/tools/debug/
[first post]: /2016/07/19/markdown-kramdown-tips-and-tricks/
[gifs-post]: /2016/08/19/posting-to-your-gitlab-pages-blog-from-ios/
[Giphy Capture]: https://itunes.apple.com/us/app/giphy-capture.-the-gif-maker/id668208984?mt=12
[git]: https://git-scm.com/
[issue-docs]: https://gitlab.com/gitlab-org/gitlab-ce/issues/
[Mac screenshot]: https://support.apple.com/en-us/HT201361
[Making Gifs]: /handbook/product/making-gifs
[Markdown Style Guide]: /handbook/marketing/developer-relations/technical-writing/markdown-guide/
[marketing-blog]: #blog
[middleman]: https://middlemanapp.com/basics/install/
[MR-description]: https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/2740/
[Nimbus Screenshot]: http://nimbus.everhelper.me/screenshot.php
[OG]: https://developers.facebook.com/docs/sharing/webmasters#markup
[Screenshot Tool]: https://help.ubuntu.com/lts/ubuntu-help/screen-shot-record.html
[second post]: /2016/07/20/gitlab-is-open-core-github-is-closed-source/
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