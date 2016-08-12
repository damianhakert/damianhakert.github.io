---
title: "Posting to your GitLab Pages blog from iOS"
author: Angelo Stavrow
author_twitter: AngeloStavrow
categories: tutorial
image_title: '/images/unsplash/ios-writing-anywhere.png'
description: "Tutorial: Learn how to post to your GitLab Pages blog from anywhere, using your iOS device."
---

Speed and stability under load are [advantages of using a static-site generator (SSG)][1],
but because building the site and uploading the generated HTML is done on a computer,
are you stuck hauling around your laptop to post to your SSG-powered blog?
Nope! In this post we'll show you how to harness the power of [GitLab Pages][2]
update your site from your iOS device anywhere, anytime.

<!-- more -->

## Requirements

You'll need an SSG-powered site set up on GitLab.com, of course (they're free _and_
[easy to set up][3]!), but you'll also need an app for performing git operations
and for text editing on your iOS device.

In this tutorial, we'll post to a [Hugo][4]-based site using [Working Copy][5] to
handle git operations and [Editorial][6] for text-editing. There are more options
available; you can explore some of them on the [GitLab Community Applications page][7].

## Concept

GitLab Pages uses GitLab CI to automate building and deploying your SSG-powered
website when you push a commit to `master`. When GitLab CI sees a new commit, it
triggers the GitLab Runner to execute the scripts in the `.gitlab-ci.yml` file you
created when you set up your SSG for GitLab Pages.

This is why we need an app to handle committing and pushing to GitLab, but it's
also a good reason to checkout a new branch while you're working on your edits&mdash;you
don't want to be drafting a new article on your iPhone, then push it to GitLab so
that you can pick up where you left off on another device, only to have a half-finished
post published automatically!

## The details

### Cloning your site's repository

Start by logging in to your GitLab account in Working Copy and cloning your website's
repository to your iOS device by following the instructions in the app's [user guide][8].

### Creating a new branch

Next, navigate to your site's repository and create a new branch. In Editorial,
this is done by tapping the **Repository** cell, then the **Branch** cell, and then
the top-rightmost button (create new branch) in the navigation bar. Give your branch
a name (for example, something like `post_title-of-article_yyyy-mm-dd` might be
useful), and then tap on **Done**. Tap the **<** (back) button on the top-left of
the navigation bar twice to go back to your repository.

### Creating a new file for the post

Now that you're on a new branch, navigate your repository to the folder where
posts go. In Hugo, this is `/content/post`&mdash;navigating here, you should see
all of your existing posts listed. To add a new file, tap the **&#43;** button
in the top-right of the navigation bar, and from the sheet that pops up, tap
**Create text file**. Give the file a name (e.g., `title-of-article.md`). If you
like, tap on the newly-created file to view details, then go back.

### Opening the file for editing

Of course, since the file is empty, you need to edit it to draft your post. Swipe
to the left on the file in the table view to display three options: **Action**,
**Commit**, and **Delete**. Tap on **Action**, and in the share sheet that pops
up, tap **Edit** to begin editing the file in Working Copy, or&mdash;if you have
it installed&mdash;tap **Edit in Editorial** to open the file in Editorial for
writing.

The first time you do so, Working Copy will let you know what's going to happen,
and invite you to install the "Working Copy" workflow in Editorial. This will let
you send the file back to Working Copy, ready for committing.

### Adding required front matter

Hugo (and most other SSGs) require each post to have some front matter, including
a date, a title, and so on. One nice option with Editorial is that it can natively
expand [TextExpander][9] shortcuts _without_ having to switch to alternate keyboards.
You can create a template for your front matter and, upon opening the file in Editorial,
type the shortcut (e.g., `;toml` or `;yaml`), and&mdash;💥 poof 💥&mdash;the shortcut will be
expanded and ready for whatever you need to enter.

### Writing the post

You're now ready to type your article! Go ahead and type to your heart's content.
You can swipe to the left from the edge of the screen in Editorial to show a Markdown
preview of what you've written so far, in case you want to check how things are
rendering, but keep in mind that your SSG may not be using the same rendering engine
as Editorial does, so if you're using non-standard Markdown elements, the final
post may not render exactly the same.

When you're at a point where you want to save and commit your progress, tap the
🔧 icon in the top-right of the navigation bar in Editorial, then tap the **Working
Copy** workflow, and you'll be taken back to Working Copy, ready to commit. Enter
a commit message and tap **Commit** in the navigation bar to commit your changes.

### Adding images to your post

Want to add an image to your post? You can save a photo to your repository in Working
Copy by navigating to the right folder (in Hugo, images should be saved in the
`static` folder; other SSGs will vary), tapping the **&#43;** button, and tapping
on **Import image** in the pop-up sheet. Select the images you want to add from
your photos (you may have to give Working Copy permission to access the library
first), and it'll be added to the repository. You then just have to reference them
appropriately in your Markdown file.

### Committing your changes and pushing the content back to GitLab

Once you're ready to commit, tap the **Repository** field in Working Copy's repository
navigator, then tap on the **Commit changes** button. You'll be prompted to enter
a short summary, as well as an (optional) detailed explanation of the changes. Below
the text fields, you'll see a list of files to commit.

Once you've entered a commit message, the **Commit** button will be enabled in the
top-right of the navigation bar. Next to it is a **&#43;Push** toggle; if it's
highlighted in blue, tapping on the commit button will commit the changes and push
them to GitLab; otherwise, the commit will only take place on your iOS device. Tap
the **&#43;Push** button to toggle this behavior.

### Merging the post branch into master to trigger CI and publish

So you've written your post, added some images, and pushed the changes to GitLab.
Want to publish from your iPhone? You can easily do so from GitLab! Launch
Safari and log in to GitLab, and create a new Merge Request as you normally
would to merge the changes in your `post_title-of-article_yyyy-mm-dd` branch to
`master`. Accept the merge and GitLab CI will pick up the changes, execute the
required scripts, and publish the changes to your site!

## Final thoughts

Is it really worth doing this? It depends on your writing style. If you're the type
to be struck by inspiration and want to be able to draft something quickly, or if
you're often away from your computer (or use iOS devices in place of computers),
this is a very convenient way to use a SSG for its benefits without giving up your
ability to work from anywhere.

However, there are some caveats to consider. For one, you can't render site locally
to preview what your post (or other changes, for that matter) will look like when
it goes live. If you're still in the process of tweaking things, or you haven't
fully explored your SSG's Markdown rendering engine, that can be a bit
troublesome&mdash;for example, you may only find out after the post goes live that
it will correctly render an HTML entity by code (e.g., `&#43;`) but not by description
(e.g., `&plus;`). Oops.

Additionally, if you're using your iPhone, the screen and virtual keyboard size
may be uncomfortable for typing longer posts. You can of course use an external
Bluetooth keyboard, but this may not be practical, and it doesn't change the size
of your phone's screen!

Finally, while Working Copy and Editorial are both excellent, professional-level
apps, they may not be in your budget. Fortunately, you can always do everything
outline here via the GitLab website so long as you have an internet connection;
if you want to continue writing while offline, you can always copy and paste into
iOS's Notes app (which, it should be noted, lacks Markdown preview rendering).

Whatever method you choose, it's comforting to know that GitLab has you covered
should you want to post to your SSG-powered blog from your iOS device!

## About the author

[Angelo](http://angelostavrow.com) is a Quality Engineer and Software Developer
living in Montreal, Canada. He believes that open, honest, collaboration is the
best path towards building great things _and_ great teams.

<!-- cover image: https://unsplash.com/photos/hkN2Zde2ga4 -->

[1]: https://about.gitlab.com/2016/06/03/ssg-overview-gitlab-pages-part-1-dynamic-x-static/
[2]: https://pages.gitlab.io/
[3]: https://about.gitlab.com/2016/04/07/gitlab-pages-setup/
[4]: http://gohugo.io
[5]: http://workingcopyapp.com/
[6]: http://omz-software.com/editorial/
[7]: https://about.gitlab.com/applications/
[8]: http://workingcopyapp.com/manual.html
[9]: https://textexpander.com/
