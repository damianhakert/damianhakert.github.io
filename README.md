# about-gitlab-com

This project is the (temporary) home for the about.gitlab.com redesign, and
rewrite using Middleman.

It will be moved to the www-gitlab-com project at a later date.

## Contributing

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

Before building the static files, ensure you have a GitLab.com `PRIVATE_TOKEN` environment variable setup. This is required so that Middleman can automatically build the [direction page](https://about.gitlab.com/direction/).

```sh
bundle install

bundle exec middleman build
```

The above command builds the static files into the folder `public`.
