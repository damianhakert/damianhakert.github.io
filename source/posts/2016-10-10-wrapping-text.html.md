---
title: To Wrap or Not to Wrap: One of Live's Greatest Questions
author: Danielle Barrios
author_twitter: 
categories: 
image_title: '/images/blogimages/--.jpeg'
description: 
twitter_image:
---

Whether and how we should be making line breaks is currently a controversial topic amongst the GitLab folk; 
it's an issue of style as well as ease of use. In this post we’re presenting the two current views held, and 
giving you the opportunity to speak your mind (in the comments or [on Twitter][twitter]) about how we should 
handle this in our [style guide][style-guide].
 
The current policy laid out in the style guide is that you should “Split up long lines, this makes it much easier to review and edit. 
Only double line breaks are shown as a full line break in [GitLab markdown][markdown]. 80-100 characters is a good line length.” 
The understanding is that you if you create a line break after 80 characters, the text becomes easier to review.

<!-- more -->
 
However, quite a few people feel that this isn’t helpful and creates stylistic and/or visual messiness when, 
for example, edits are made which cause the line breaks to go amok. Basically there are two options if your line exceeds 80 characters:
 
1. Wrap the text as the author of the code.
1. Rely on the user to wrap the text with their local editor, and insert a new line for every sentence.
 
## DON’T WRAP IT.
 
Our CEO, [Sid Sijbrandij][sid-twitter] is in the don’t-wrap camp, positing that it’s better to rely on the user. 
If you modify text, you don’t want to have to realign the rest of the text when edits ares made because the line 
breaks are uneven. Rewrapping requires a feature that some editors (including GitLab) don’t have. Some people 
might have it but not know they have it, or not know where to find it in their editor. If you do rewrap with you editor, 
the diff might get messy and make it hard to work out what's visually changed. Plus, that 80- to 100-character limit is 
more of a guess than an exact limit. It can be different depending on your editor/screen size.
 
 
## DO WRAP IT.
 
The company’s official position is of the *do-wrap variety*, with the main reason that when people view and edit the text, 
they can do so without scrolling horizontally ad infinitum, which drives some people nuts. As a result, the comment 
box sometimes extends beyond the edge of the viewport, making it difficult to use any of the buttons on the right-hand side. 

Here’s what the wrapped version looks like:
 
![wrapped text example](/images/blogimages/wrapped-text-exmaple.png)
 
There are a few routes we could take going forward:
 
- Revert changes to go back to all diff code wrapping
- Have README files wrap, but continue use of scrolling for all other files
- Set a max-width on the comment box container so that it remains in a usable state, regardless of code length
 
Other ideas? We’re open to them. Let us know what you think.
 
 
*Note*: Currently for blog post technical articles we follow the Style Guide, but the Blog Post Style Guide is an override or addendum to that. The consensus has been that wrapped text facilitates review. We have a lot of guest writers and many reviewers, and this seems to be their preference, so we’ve tried to honor that.

<!-- indentifiers -->

[markdown]: https://docs.gitlab.com/ce/user/markdown.html
[sid-twitter]: https://twitter.com/sytses
[style-guide]: https://docs.gitlab.com/ce/development/doc_styleguide.html#text
[twitter]: https://twitter.com/gitlab


 
