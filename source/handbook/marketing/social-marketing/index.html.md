---
layout: markdown_page
title: "Social Marketing Handbook"
---

### Welcome to the Social Marketing Handbook!
{:.no_toc}

----

## On this page
{:.no_toc}

- TOC
{:toc}

----

## Social Media Sharing Guidelines

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

### Images

All the images or screenshots for `twitter_image` should be pushed to the [www-gitlab-com] project
at `/source/images/tweets/` and must be named after the page's file name.

For the [second post] above, note that the tweet image is the blog post cover image itself,
not the screenshot. Also, there's no `description` provided in the frontmatter, so our
Twitter Cards and Facebook's post will present the _fall back description_,
which is the same for all [about.GitLab.com].

For the handbook, make sure to name it so that it's obvious to which handbook it refers.
For example, for the Marketing Handbook, it's name is `handbook-marketing.png`.

### Description

The `description` meta tag [is important][description-tag]
for SEO, also is part of [Facebook Sharing][og] and [Twitter Cards]. We set it up in the
[post or page frontmatter](../blog/#frontmatter), as a small summary of what the post is about.

It's not meant to repeat the post or page title, use your creativity to describe what's in the post or page.
Try to use about 70 to 100 chars in one sentence.

As soon as you add both description and social sharing image to a page or post, you must check and preview them with the [Twitter Card Validator]. You can also verify how it looks on the FB feed with the [Facebook Debugger].

## Promoting GitLab on Social Media

To be included (ref https://gitlab.com/gitlab-com/marketing/issues/524)

## Recycling of content on Twitter

To be included (ref https://gitlab.com/gitlab-com/marketing/issues/386)

## Event Promotion

To be included (ref https://gitlab.com/gitlab-com/marketing/issues/524)

<!-- Social Marketing Handbook - ref https://gitlab.com/gitlab-com/marketing/issues/524 -->

<!-- identifiers, in alphabetical order -->

[blog]: /blog/
[description-tag]: http://www.wordstream.com/meta-tags
[facebook debugger]: https://developers.facebook.com/tools/debug/
[first post]: /2016/07/19/markdown-kramdown-tips-and-tricks/
[OG]: https://developers.facebook.com/docs/sharing/webmasters#markup
[second post]: /2016/07/20/gitlab-is-open-core-github-is-closed-source/
[twitter card validator]: https://cards-dev.twitter.com/validator
[twitter cards]: https://dev.twitter.com/cards/overview
[twitter-card-comp]: /images/handbook/marketing/twitter-card-complete.jpg
[twitter-card-incomp]: /images/handbook/marketing/twitter-card-incomplete.jpg
[www-gitlab-com]: https://gitlab.com/gitlab-com/www-gitlab-com
