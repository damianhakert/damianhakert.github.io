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

### Defining Social Media Sharing Information

Social Media Sharing info is set by the post or page frontmatter, by adding two variables:

```yaml
description: "short description of the post or page"
twitter_image: '/images/tweets/image.png'
```

This information is valid for the entire website, including all the webpages for about.GitLab.com, handbook, and blog posts.


#### Images

All the images or screenshots for `twitter_image` should be pushed to the [www-gitlab-com] project at `/source/images/tweets/` and must be named
after the page's file name.

For the [second post] above, note that the tweet image is the blog post cover image itself,
not the screenshot. Also, there's no `description` provided in the frontmatter, so our
Twitter Cards and Facebook's post will present the _fall back description_,
which is the same for all [about.GitLab.com].

For the handbook, make sure to name it so that it's obvious to which handbook it refers.
For example, for the Marketing Handbook, the image file name is `handbook-marketing.png`. For the Team Handbook, the image is called `handbook-gitlab.png`. For Support, it would be named `handbook-support.png`, and so on.

#### Description

The `description` meta tag [is important][description-tag]
for SEO, also is part of [Facebook Sharing][og] and [Twitter Cards]. We set it up in the
[post or page frontmatter](../blog/#frontmatter), as a small summary of what the post is about.

The description is not meant to repeat the post or page title, use your creativity to describe the content of the post or page.
Try to use about 70 to 100 chars in one sentence.

As soon as you add both description and social sharing image to a page or post, you must check and preview them with the [Twitter Card Validator]. You can also verify how it looks on the FB feed with the [Facebook Debugger].

#### Examples

To see it working, you can either share the page on Twitter or Facebook, or just test it with the [Twitter Card Validator].

- Complete post, with `description` and `twitter_image` defined:
[GitLab Master Plan](/2016/09/13/gitlab-master-plan/)
- Incomplete post, with only the `description` defined:
[Y Combinator Post](/2016/09/30/gitlabs-application-for-y-combinator-winter-2015/)
- Incomplete post, with none defined: [8.9 Release](/2016/06/22/gitlab-8-9-released/)
- Page with both defined: [Marketing Handbook](/handbook/marketing/)
- Page with only `twitter_image` defined: [Team Handbook](/handbook/)
- Page with none defined: [Blog landing page](/blog/)

## Promoting GitLab on Social Media
 
#### Twitter

- The Content Marketing Manager will give new team members access to TweetDeck 
- A tweet should contain a short hook/summary of the main takeaway of the content and should mention (@) people when characters permit 
- Examples of content to be tweeted include announcements about events, product changes, company news, new team members, blog posts, new SSGs added to Pages, and interviews/bylines of GitLab leadership in other publications
- Retweet high profile mentions, as well as occasional high quality tweets (no typos or profane usernames) from people who mention switching to GitLab, positive anecdotes about using GitLab, positive comments about blog content 

#### Facebook & LinkedIn

- Draw from Twitter content, but write longer share text and include a pull quote (when applicable) that points to the main purpose of the content
- Post on Facebook & LinkedIn more sparingly than on Twitter; no more than once per day, and probably more like ~3x per week. Focus on bigger company/product/event news and blog posts authored by company leadership

#### Scheduling Posts

- Generally schedule posts to go out between 8 am - 10 pm Pacific Standard Time
- Try to schedule posts in such an order that will maintain variety in the feed (i.e., don't have 5 new team members tweeted out in a row)


## Recycling of content on Twitter

- Re-post content that gets a good response, such as positive blog comments, front page of hacker news, or the front page of reddit programming 
- Repost up to two times after the original post, scheduling the posts to go out 1-2 weeks apart

## Event Promotion

#### After Committing to an Event

- Find relevant handles (of speakers/moderators/hosts) or hashtags (if part of bigger conference for example), or create our own; try to include across all tweets for that event, characters permitting
- Find event-related images to attach to all tweets (event logo showing GitLab sponsorship; speaker team pic; GitLab logo; or any sharable content designed for that event)
- Schedule a tweet asap announcing our participation

#### Leading up to an Event, Schedule Tweets to go out:

- 1 week before event (counting down, include registration link if our event, include speaker team pic or other event branding where applicable)
- 1 day before event (same as above)
- During event referencing something in the content of the presentation if applicable/ not redundant (x2 or more depending on length of event and amount of content)
- Need to find balance between the dev advocates promoting themselves at events and when they are speaking- maybe one of these tweets is us retweeting them?

#### While at the event:
- Take pictures of booth and/or team members at booth
- Try to tweet them out ~1 hour or more before event (mention our location in the venue if applicable/useful)

#### After the event:
- Thank those who attended or stopped by our booth in tweet with photo from the event


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
