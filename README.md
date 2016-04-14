# www-gitlab-com

This is the source for the https://about.gitlab.com/ site.

## Contributing

### Blog posts

When adding timestamps to blog posts, **be warned:** setting it too far into the
future will cause the post to not be published until that time has passed.

Because builds are only triggered on new commits to `master`, you might set a
blog post to publish in a few hours, but it might not be published for days if
no one makes a new commit after that time has passed.

When in doubt, either don't give it a timestamp, or set it to a time that has
already passed.

### Create a new blog post

You can use the rake command below to create a draft post with the YAML
frontmatter pre-filled:

```
bundle exec rake new_post
```

Enter the title of the blog post and hit Enter. A new file will be created
under `source/posts/` for you to edit. Keep in mind that the date and time is
set to the one when you issued the above command. You might want to change it
to a later date depending on when you want the post to be published.

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

## Development

```sh
bundle install

bundle exec middleman

open http://localhost:4567
```

See the [Middleman docs](https://middlemanapp.com/basics/development_cycle/) for
more information.

## Production build

Before building the static files, ensure you have a GitLab.com `PRIVATE_TOKEN`
environment variable setup. This is required so that Middleman can automatically
build the [direction page](https://about.gitlab.com/direction/).

```sh
bundle install

bundle exec middleman build
```

The above command builds the static files into the folder `public`.
