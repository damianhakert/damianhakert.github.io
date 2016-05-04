# www-gitlab-com

This is the source for the https://about.gitlab.com/ site.

## Local development

```sh
bundle install

bundle exec middleman
```

Once the Middleman server is running, you can visit `http://localhost:4567/` in
your browser to see a live, local preview of the site. Any changes to files in
the `source` directory will be detected automatically, and your browser will
even reload the page if necessary.

See the [Middleman docs](https://middlemanapp.com/basics/development_cycle/) for
more information.

## Contributing

### Blog posts

Blog posts go in [`source/posts/`](./source/posts/) and **must be named to
match the following format:** `yyyy-mm-dd-the-post-title.html.md`.

You can generate the file for a new blog post interactively by using the
`new_post` Rake task:

```shell
bundle exec rake new_post
```

When prompted, enter the blog post title, _without a date_, and press
<kbd>Enter</kbd>. A message will be printed to tell you the path to the new
file.

Open the file in your text editor of choice. The file will be empty except for a
few lines at the top, surrounded by a pair of three hyphens (`---`). These lines
are called [**Frontmatter**](https://middlemanapp.com/basics/frontmatter/).

The `title` attribute has already been filled out by the `new_post` Rake task.
Fill in the others as needed, or remove any that aren't applicable to your post
(not every post needs an `image`, for example).

If you need more fine-grained control over blog post ordering, or publication
time, add a `date` attribute to the frontmatter with a UTC-based time. For
example:

```yaml
---
title: "Example Blog Post"
date: 2017-04-01 15:45
---
```

If no `date` attribute is supplied, it will be inferred from the filename.

When adding timestamps to blog posts, **be warned:** setting it too far into the
future will cause the post to not be published until that time has passed.
Because builds are only triggered on new commits to `master`, you might set a
blog post to publish in a few hours, but it might not be published for days if
no one makes a new commit after that time has passed.

When in doubt, either don't give it a timestamp, or set it to a time that has
already passed.

Fill in the post's content using [Markdown][gfm]. To preview your post locally
before publishing, see [**Local development**](#local-development) for
instructions.

[gfm]: http://doc.gitlab.com/ce/markdown/markdown.html

### Adding yourself to the team page

Edit [`data/team.yml`](./data/team.yml) and add a new entry for yourself (or
update the placeholder with your initials).

Images should be uploaded to [`source/images/team`](./source/images/team).

### Adding a pet to the team pets page

Edit [`data/pets.yml`](./data/pets.yml) and add a new entry.

Images should be uploaded to [`source/images/team/pets`](./source/images/team/pets).

### Updating the promotion link

This link appears at the top of the homepage and can be used to promote new
versions or upcoming events.

Edit [`data/promo.yml`](./data/promo.yml) to update the `link` and `text`
properties.

## Production build

Before building the static files, ensure you have a GitLab.com `PRIVATE_TOKEN`
environment variable setup. This is required so that Middleman can automatically
build the [direction page](https://about.gitlab.com/direction/).

```sh
bundle install

bundle exec middleman build
```

The above command builds the static files into the folder `public`.
