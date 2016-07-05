---
layout: markdown_page
title: "Technical Writing"
---

### Welcome to the Technical Writing Handbook!
{:.no_toc}

----

## On this page
{:.no_toc}

* Will be replaced with the ToC, excluding the "On this page" header
{:toc}

----

## Technical Writing

[Technical Writers] are part of the Developer Relations Marketing Team. Their mission is to
help GitLab to:

- have all features well documented
- ensure the information regarding GitLab CE/EE/CI and its particularities are up to date
- write guides, recipes and blog content
- assist the team with documentation and non-documentation tasks
- review every technical content published in the channels we use

[Documentation] helps the GitLab community to:

- setup and administrate their accounts
- setup and update GitLab instances
- use every tool and feature
- handle integrations, services and tools

Docs are written technically, methodically,
programmatically, clearly and practically.

[Blog posts][blog] have the same purpose of assisting the GitLab community,
but with a more flexible and reader-friendly language. Also,
besides the technical content, posts can be informative, tell use-case stories,
customer experience, and present a much more diverse
sort of content, since it's somehow interesting for our audience.

Whenever we write for GitLab, it's necessary to keep in mind that we are writing _on behalf_ of GitLab. We are representing the
company. Therefore, it's important to keep our personal opinions, tendencies, and point of views apart, and try to be clear, direct, concise, and professional above all. This is detailed right below, on the section [Professional Writing Techniques].
Make sure to read this through before writing for GitLab.

Also, our content is written in markdown Kramdown. Make sure to read the [Markdown Style Guide] before adventuring yourself writing for
our website [about.GitLab.com] and our [Blog], which are our "faces to the world".

On the [Content Marketing Handbook][marketing-blog], you'll find out more about the GitLab
Blog directive, and at the end of this page, you'll find
the [Blog Style Guidelines](#styles-guidelines).

## Markdown Style Guide for about.GitLab.com

Check out our [Markdown Style Guide] for the markup used throughout about.GitLab.com, including any markdown page and blog post. You'll
find useful information there, some [Kramdown] magic, and it might save you a lot of typing.

----

## Professional Writing Techniques

When writing professionally, it's important to understand some standards to follow through, for the purpose of achieving high quality work in a optimum time for conclusion.

Technical papers have the characteristic of being less personal and more formal: they're not the right place to express our opinions, nor to give advice. Accuracy matters most.

For classical scientific papers, the rules are much more restrictive and the language is absolutely formal. For blog posts, we need to use a middle term. Be clear, precise and professional, but be empathetic and "reader-friendly". A discrete and occasional touch of humor is also welcome.

When writing non-technical blog posts, we can be less formal and more personal, depending on the subject we are writing about. In any case, though, we need to be professional. Meaning, we can be friendly and personal, but we need to focus on the point. The method suggested in this document is valid for both technical and non-technical themes, once it's related to the process of writing, not to the content itself.

Before writing on behalf of GitLab, make sure you've read through this [guide][marketing-blog].

### Technical Blog Posts

Are considered [technical][tech-writing-wiki] posts: tutorials, guides, overviews, techniques, methods, processes, and anything else which requires some sort of technical knowledge or standard procedure. For them, follow all the steps described in the [writing method](#method).

### Non-Technical Blog Posts

For non-technical post, we won't need to get into all the [steps](#method) below. Check which category matches best with the subject you'll be working on to know how to proceed.

- **Personal Experience**
   - _Personal content_: user stories, user experience, opinion-based overviews and comparisons, etc.
   - _Inside GitLab_

   Skip the steps: [4th. Research](#th-research) and [7th. Test](#th-test).

- **Information** (If the content is not a tutorial or a guide, but it has informative purposes)
   - _Feature overviews_
   - _Product comparisons_
   - _Case studies_

   The [7th](#th-test) step can be skipped. For the [4th](#th-research) step, provide links to corroborate your information.

- **Quick Announcements**
   - _Release announcements_
   - _Feature highlights_

   All the steps can be skipped, **except**: 1st, 6th, 8th, 9th, and 10th.

- **Other**

   If your chosen subject doesn't match any previous category, read through the method, and try to use your sense to adapt it according to your case. Fell free to ask for help if needed.

### Writing Method

The following method suggests steps to take in order to create high quality written productions. This approach is recommended, but flexible. Feel free to adapt it to your needs.

#### 1st. Subject, Audience, Requirements

The first step to take if defining the subject, the audience, the knowledge level, and the requirements.

- Choose a subject you are very familiar with and comfortable to explain it in deep details.
- Create a title for your article, based on the previous step. A good title is very short, and accurate.
- Choose the audience:
   - Who might have interest on this subject? Which instance of GitLab would be involved? GitLab EE, CE?
   - What is the expertise level necessary to follow your steps? The user needs to be familiar with the subject, or comfortable with, or need to be an expert?
   - What is required o make it work locally for the user? Specify the Operational System, any necessary software, any hardware condition.
- Add this information to a new issue on the [blog posts issue tracker][blog-tracker]
- Mind that you'll need to create a sentence to be included in the beginning of the article with this information. It can be explicit or subjective.
  For example, for a tutorial for Android: _"We assume you know the process of creating an Android App, you already have projects running locally, and you are familiar with the GitLab UI"_. This would tell the reader that he needs to be an intermediate/advanced app developer, he/she needs to have every software necessary to run an Android application installed locally, and he/she has used GitLab before.


#### 2nd. Brainstorm

Think about everything that is possible for the subject you want to follow through. Write down every piece of information, every detail, every cool stuff that can be achieved, schemes, key processes, any knowledge that can be included in a text about your theme. Doesn't matter the order, if it's important or not, if makes absolute sense or not. Free your brain and let it work with no boundaries. Here the creativity and originality matters most.

#### 3rd. Plan

Perfect. Now you have a lot of ideas to organize. On this part you will filter the important things from your brainstorming notes, arrange them in some logic, and cut off what's not necessary. You'll do that by creating the _outlines_ for your article. Organize the headings in titles, subtitles, bullet points, brief descriptions, and include important [(key)words] that popped up into your head and you want to include in your article.

Keep in mind the audience you'd chosen before. Do not complicate things if you are writing for beginners, nor simplify too much if you're targeting advanced personal.

#### 4th. Research

Now that you know what you want to include in your paper, it's time to find reliable sources to support your scheme. You know the process, but you need to include sources for technical information.

For example, let's consider a post about Android Apps. If you say that you need an emulator for previewing your Android app locally, provide a link to the [official Android documentation][android-doc] where it's said that you need an emulator, and also add a link for the [emulator][android-emulator] itself.

Search for the sources you already know you'll need. Copy and paste the links with interesting information to a text document, or bookmark them, however you prefer. Gather the links in a way you can find them easily, to include them while you draft.

Mind that this step will end only when your post is published. You will need to come back to search for sources again and again, until the end.

A _reliable source_ is officially documented information, content described in books, newspaper's articles, scientific papers, etc. <!-- some ideas to make a better sentence here?  -->

#### 5th. Draft

Now that you have a skeleton for your article, and some links to guide you through, you'll start to write, filling the gaps along the structure you'd planned before.

Never make a statement without providing the source for that information, unless it is your own conclusion, and you have the expertise to defend it. This posture will avoid mistrust and lost of credibility. Follow the [Writing Tips](#writing-tips) below.

It's much quicker to write with a previous plan. Go on and write everything you need. Don't try to review every sentence or to think too much before writing down. You'll have time to review afterwards.

#### 6th. Improve

After you finished, read everything again, and see if you're not repeating yourself, or if there is some unnecessary information. Cut off everything nonessential. This will have been your first review.

After your first review, try to do other things to intentionally deviate your attention from the text. Preferably, close the file and open it just in the next day, after some sleep. This will help you to clear your head, then you'll catch mistakes you wouldn't have after several hours working on the same thing.

Now, along your second review, it's time to spot typos and grammar mistakes. Check if the text sounds clear, easy to understand and if it's not boring. Make any necessary adjustments, then start the review over again.

#### 7th. Test

If you wrote a tutorial or any procedure that can be tested, test it. Go over your steps **exactly as you described them**, and check if you succeed following your own steps. Preferably test in as many conditions as possible: using different Operational Systems, distinct configurations, different versions, whatever applies to your case. If you have someone close to you that could contribute testing it for you too, better yet. After testing, go through the steps 4th to 6th again, if necessary.

#### 8th. Submit

When you're happy with your draft, submit it in a [WIP][WIP MR] (Work In Progress) merge request.

#### 9th. Review

Mind that your reviewers will probably ask for changes, make difficult questions, insist in some points. Do not be discouraged by the review. It will only help you to succeed even more, and to enhance the quality of your work.

If you don't agree with the reviewer at some point, just say it. Discuss your matter and defend your point of view, until you both agree with each other.

#### 10th. Publish

After you adjust the post according to the reviewers' requests, it will get published and everybody will be happy for you!

### Writing Tips

There is a simple list below, for things to do and to avoid when writing. It's not a exact science, though. Try to balance between what's best and what's possible, be yourself, and use your sense.

- Be original: do not repeat yourself - nor repeat other posts and documentation
- Be concise: say what you need to say. Not more, nor less
- Be attentive: do not repeat the same word, use [synonyms]
- Be smart: try to predict questions - and answer them along the text
- Be precise: do not make any statement if you don't have a reliable source or the expertise to defend it
- Be clear: everything seems to be logic for whom is writing. Not necessarily for those reading
- Be organized: in tutorials, do not jump over a step presuming the audience knows that. It breaks logic and looses engrossment
- Be consistent: try to adopt patterns to facilitate the comprehension
- Be professional: prefer "it is" over "I think"
- Be inclusive: use "we" rather then "you" or "I"
- Be creative: think _out-of-the-box_ and explore things _out-of-the-blue_

----

## Blog Style Guidelines
{: #styles-guidelines}

This style guide is specifically for blog posts on [about.GitLab.com/blog][blog]. 

### Assumptions

Every blog post must start from the documentation, never the opposite. Thus, if the subject you want to write about
is not documented, please consider contributing to the docs first, or bring it to our attention by
[creating a new issue][issue-docs], so we can take action to make it documented properly.

Before writing, make sure you've read through this Style Guidelines, the [Blog directives][marketing-blog], the [Technical Aspects], the
[Professional Writing Techniques] and the [Markdown Style Guide].

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

All posts are written in markdown Kramdown. Please read through the [Markdown Style Guide] for reference.

### Frontmatter

The post **frontmatter** is the first part of any post. It is standard and cannot be changed, so please make
sure to provide the correct information, and do not add nor remove anything from the default template:

```
---
title: "This is the post title"
author: Firstname Lastname
author_twitter: userID
categories: technical overview
image_title: '/images/blogimages/post-cover-image.jpg'
---
```

#### Title
{: .no_toc}

Make sure the post title represents very well the subject, and make it as short as possible.
Do the same for headings.

#### Author Name
{: .no_toc}

Use the author's full name. If the name has special chars, type it within
double quotes `"Full Name"`.

#### Twitter Handle
{: .no_toc}

Don't worry if you don't have an account on Twitter. Leave the field `author_twitter` blank.

#### Categories
{: .no_toc}

Use only **one** of the following categories per post.
**Do not** capitalize nor pluralize them, nor change any letter,
otherwise you'll create another category, which is somenthing we don't want to do unpurposely.

- concepts _(use it when your post in on continuous integration, innersource, open source, version control, SaaS, etc)_
- git
- GitLab _(all GitLab products/features: CI, Geo, GDK, Pages, LDPA, Hooks, etc.)_
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
{: .no_toc #cover-image-frontmatter}

Do not leave the post without a cover image (`image_title`), unless you have a strong reason to do so.
Read more about it [below](#cover-image).

#### Comments
{: .no_toc}

Comments are present in all posts by default. Set it to false only if you have a strong reason to
do so (`comments: false`). They are our best source of feedback on posts.

#### Date
{: .no_toc}

The variable `date: yyyy-mm-aa hh:mm:ss` is not necessary in the frontmatter anymore, unless you want
to set an specific time. If you do, just make sure that the date in the file name matches with
the date in the frontmatter, otherwise the build will fail.

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

As explained on the [Professional Writing Techniques] above, always provide source for your statements.

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

For the blog, images should be cropped in a 700 x 490 pixel *proportion* 
so the image doesn't get clipped when displayed as a lead image in the blog list.
This includes the cover image.
Compress the image, for example using [TinyPNG.com][tinypng] or any other image editor.

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

### GitLab Specific Terms 

- **GitLab** is always spelled with capital "G" and "L".
- If you're writing about the CI feature, it's not a separate product. 
For example don't refer to "Gitlab CI's runner" please refer to "GitLab Runner", capital "R".
- **GitLab, Inc.** is the company. **GitLab** is the SaaS, which refers to **GitLab.com**, **GitLab EE** and **GitLab CE**.
- We refer to **GitLab team members** instead of staff. 
- Make sure the CI configuration file is spelled ``` `.gitlab-ci.yml` ```, with the leading period and backticks.
- When we refer to specific configuration sections or pages in GitLab they should be in **bold**.
- Refer to this website as **about.GitLab.com**, with capital "G" and "L", as always. **GitLab.com** is not the website, is the SaaS.

<!-- Identifiers, in alphabetical order -->

[about.GitLab.com]: https://about.gitlab.com/
[android-doc]: http://developer.android.com/intl/pt-br/tools/help/emulator.html
[android-emulator]: http://developer.android.com/intl/pt-br/tools/devices/emulator.html
[blog]: https://about.gitlab.com/blog
[blog-tracker]: https://gitlab.com/gitlab-com/blog-posts/issues
[bundler]: http://bundler.io/
[documentation]: http://docs.gitlab.com/
[git]: https://git-scm.com/
[issue-docs]: https://gitlab.com/gitlab-org/gitlab-ce/issues/
[(key)words]: http://www.wordstream.com/seo-keyword
[Kramdown]: http://kramdown.gettalong.org
[Mac screenshot]: https://support.apple.com/en-us/HT201361
[Markdown Style Guide]: markdown-guide/
[marketing-blog]: ../../product-marketing/content-marketing/#blog
[middleman]: https://middlemanapp.com/basics/install/
[Nimbus Screenshot]: http://nimbus.everhelper.me/screenshot.php
[Professional Writing Techniques]: #professional-writing-techniques
[Screenshot Tool]: https://help.ubuntu.com/lts/ubuntu-help/screen-shot-record.html
[Snipping Tool]: https://support.microsoft.com/en-us/help/13776/windows-use-snipping-tool-to-capture-screenshots
[synonyms]: http://www.thesaurus.com/
[technical aspects]: https://about.gitlab.com/handbook/marketing/product-marketing/content-marketing/#technical-aspects
[technical writers]: /jobs/technical-writer/
[tech-writing-wiki]: https://en.wikipedia.org/wiki/Technical_writing
[tinypng]: https://tinypng.com/
[unsplash]: https://unsplash.com/
[WIP MR]: http://docs.gitlab.com/ce/workflow/wip_merge_requests.html "Work In Progress Merge Request"
[www-gitlab-com]: https://gitlab.com/gitlab-com/www-gitlab-com/
