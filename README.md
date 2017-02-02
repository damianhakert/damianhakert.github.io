# www-gitlab-com

This is the source for the https://about.gitlab.com/ site.

## Local development

```sh
bundle install

bundle exec middleman
```

Once the Middleman server is running, you can visit
[http://localhost:4567](http://localhost:4567) in your browser to see a live,
local preview of the site. Any changes to files in the `source` directory will
be detected automatically, and your browser will even reload the page if necessary.

PDF files are not available in development mode. See below for more information.

See the [Middleman docs](https://middlemanapp.com/basics/development_cycle/) for
more information.

### Enable livereloading

When running middleman with the livereload option enabled, it watches your
repo for changes and reloads the site automatically.

Livereload can result to [slow server response times][gh-livereload], so it is
disabled by default. That means you need to manually refresh the webpage if you
make any changes to the source files. To enable it, just set the environment
variable `ENABLE_LIVERELOAD=1` before running middleman:

```
ENABLE_LIVERELOAD=1 bundle exec middleman
```

You can verify that it's enabled from the following line:

```
== LiveReload accepting connections from ws://192.168.0.12:35729
```

To permanently have livereload enabled without typing the environment variable,
just export its value in your shell's configuration file:

```
# Open your rc file (replace editor with vim, emacs, nano, atom, etc.)
editor ~/.bashrc

# Export the livereload variable
export ENABLE_LIVERELOAD=1
```

>**Note:**
You need to logout and login in order for the changes to take effect. To
temporarily use the changes, run `source ~/.bashrc`.

Next time you login, livereload will be always enabled and you can just run
`middleman` to start the local server to preview the changes.

## Contributing

### Blog posts

Please read through the [Blog Handbook] before you begin.

A new blog post likely needs to be reviewed by others before being published, so
it's best to use our standard [feature branch workflow](http://docs.gitlab.com/ee/workflow/workflow.html)
and to open a Merge Request. If you're not yet comfortable using the Git command
line, you can [create a branch in the GitLab UI](http://docs.gitlab.com/ee/gitlab-basics/create-branch.html).

Blog posts go in [`source/posts/`](./source/posts/) and **must be named to
match the following format:** `yyyy-mm-dd-the-post-title.html.md`.

Because the formatting of the filename is important and specific, it's best to
generate the file for a new blog post interactively in your terminal by using
the `new_post` Rake task:

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

Fill in the post's content using [Markdown][mkd-guide]. To preview your post locally
before publishing, see [**Local development**](#local-development) for
instructions.

[Blog Handbook]: https://about.gitlab.com/handbook/marketing/blog/
[mkd-guide]: https://about.gitlab.com/handbook/marketing/developer-relations/technical-writing/markdown-guide/

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

### Press releases page

The [press releases] page follows the same principle like the [blog archives].
It is automatically populated by the data fed into [`data/press.yml`](/data/press.yml).

As you can see, there are three values, `title`, `link` and `date`. Here's a
short explanation what each does.

| Value | Description |
| ----- | ----------- |
| `title` | The headline of the article, make sure to include it inside double quotes and remove the trailing period if any. |
| `link` | The URL that links back to the article. If a press release is hosted on our website, you must first create a blog post with the press release. Create it like any other blog post and make sure to include the `categories: press` in the [frontmatter]. The category is essential if you want the post to appear in the [press category]. That way we can have a list of press posts hosted on our website. |
| `date` | The date should be in ISO format as stated in the handbooks's [Writing Style Guidelines][] (see bullet 4). Make sure to make this right as this value is used make the links listed in descending order (newest to oldest). |

#### Create a new press release page under `/press/releases`

There are two ways to create a new press release page that will be hosted under
`/press/releases`. You can use the automatic way using the command line or
edit the files manually with your text editor.

#### Using the raketask to create a new press release page

Assuming you have cloned the repository, you have Ruby installed and have ran
`bundle install`, here are the steps needed to create a new press release page
automatically:

1. Go to the root directory of `www-gitlab-com`
1. Create a new branch: `git checkout -b press-release-branch`
1. Run the following:

    ```
    rake new_press
    ```

    You will be asked two questions, 1) the `date` of the press release in ISO
    format, 2) the `title` of the press release.

    These data will be used to automatically create a new file
    `source/press/releases/{date}-{title}.html.md` and will also populate
    `data/press.yml` with the right information.

1. Add content to the new press release file according to our [Markdown guide][md].
1. Add the changed files and commit the changes:

    ```
    git add data press
    git commit -m "New press release"
    git push origin press-release-branch
    ```

1. Create a new merge request.

#### Manually create a new press release page

You need to do 2 things:

1. Create a new file under `source/press/releases/` with its filename ending
   in `.html.md`. An example of such a page would be
   `source/press/releases/2016-01-01-new-press-release.html.md`. Its contents
   should always start with the following block:

    ```
    ---
    layout: markdown_page
    title: "New press release!"
    ---
    ```

    The only thing you may change to your liking is the title. Leave everything
    else as-is. Once you have created that block you may add the content
    according to our [Markdown guide][md].

1. Follow the steps outlined in the section [Add an internal URL to the press
   releases archive manually](#add-an-internal-url-to-the-press-releases-archive-manually)

#### Add an existing URL to the press releases archive using the raketask

1. Go to the root directory of `www-gitlab-com`
1. Create a new branch: `git checkout -b press-release-branch`
1. Run the following:

    ```
    rake add_press
    ```

    You will be asked three questions, 1) the `date` of the press release in ISO
    format, 2) the `title` of the press release, and 3) the URL of the press
    release.

    These data will be used to automatically populate `data/press.yml` with the
    right information.

1. Add the changed file and commit the changes:

    ```
    git add data
    git commit -m "New press release"
    git push origin press-release-branch
    ```

1. Create a new merge request.

#### Add an existing URL to the press releases archive manually

To add an existing URL under `about.gitlab.com` in the press releases page,
follow the steps below:

1. Open `data/press.yml` with an editor (do **not** use Microsoft Word).
1. Copy paste the previous block leaving a newline between.
1. Add your own `title`, `date` and `link`.
1. Visit <http://localhost:4567/press/releases/> and make sure it appears in
   the list.
1. When ready, commit the changes, push to the repository and open a MR for
   review.

[frontmatter]: https://about.gitlab.com/handbook/marketing/blog/#frontmatter
[Writing Style Guidelines]: https://about.gitlab.com/handbook/#writing-style-guidelines
[press releases]: https://about.gitlab.com/press/releases/
[press category]: https://about.gitlab.com/blog/categories/press
[blog archives]: https://about.gitlab.com/blog/archives.html
[md]: https://about.gitlab.com/handbook/marketing/developer-relations/technical-writing/markdown-guide

### Update the features comparison page (under `/features`)

The feature page grabs its content automatically from the file
`/data/features.yml`. 

### Update the release list page (under `/release-list`)

The release list page grabs its content automatically by crawling the blog and
retrieving the headers from the blog post.

Edit `/generators/release_list.rb` and modify two elements:

1. Add the new version to the table listing the versions
    ```
    VERSIONS = [
      "8.11", "8.10", "8.9", "8.8", "8.7", "8.6", "8.5", "8.4", "8.3","8.2","8.1","8.0","7.14","7.13","7.12","7.11","7.10",
      "7.9","7.8"
    ]
    ```

2. Update the year and month according to the current date. Note that you should
only indicate a month for which we already have a public blog post announcing the
release. That means, if we are on Sept 19th and the next release scheduled for
the 22th is 8.12, the month should be 8 (i.e August for 8.11), not 9.

    ```
    year = 2016
    month = 8
    ```

3. Commit the changes.

The release-list page will be updated after `bundle exec rake build`.

## Production build

Before building the static files, ensure you have a GitLab.com `PRIVATE_TOKEN`
environment variable setup. This is required so that Middleman can automatically
build the [direction page](https://about.gitlab.com/direction/).

```sh
bundle install

bundle exec rake build
# To also build PDFs:
bundle exec rake pdfs
```

The above command builds the static files and PDFs into the folder `public`.

## PDF files

This site includes some dynamically generated PDF files. For example,
`terms/print/gitlab_subscription_terms.pdf`. Each of these files is
derived from a corresponding 'printable' HTML file, such as
`terms/print/gitlab_subscription_terms.html`.

The PDF files are generated by [pandoc](http://pandoc.org/) using
[LaTeX/XeTeX](http://xetex.sourceforge.net/). Global PDF parameters such
as page margins are configured in pdf_template.tex.

### Install PDF dependencies

On OS X: run `brew install pandoc` and install [Basic
TeX](https://tug.org/mactex/morepackages.html).

### PDF development

You can tweak the 'printable HTML' files in Middleman's development
mode if you enter the correct URL in your browser (e.g.
`http://localhost:4567/terms/print/gitlab_subscription_terms.html`).
If you want to tweak pdf_template.tex run `rake build` once, and
`rake pdfs` as often as needed.

If you want to tweak the source HAML/Markdown/HTML and see the changes
in the final PDF you have to run `rake build pdfs` after each source
change.

To remove the generated PDFs run:

```
rake rm_pdfs
```

### Add a new PDF file

In order to make a page be saved as pdf at a location reachable through the
website, you have to:

1. Open [Rakefile](./Rakefile) with your editor and add the location of the
   generated PDF file (prepend with `public/`) under the `PDFS = %w{` section.
   Save the file and exit.

1. Make sure the file exists locally in the location you chose the pdf to be
   saved. For example, a page in `source/my-page/page.html.haml` should have an
   entry of `public/my-page/page.pdf` in the `Rakefile` (previous step).

1. The file to be printed must have the `print` layout set in the yaml frontmatter.
   For example:

    ```
    ---
    layout: print
    title: "The title of the page"
    ---
    ```

## Custom Generators

There are a few custom, static generators specified in `config.rb`. For
example, there are generators that produce the direction issue list,
release list, and organization chart dynamically.

These pages cannot be viewed directly via the Middleman server
(e.g. http://localhost:4567) because there are explicit rules that
tell Middleman to defer the generation to other scripts. These
special URLs (e.g. /release-list/index.html) usually have two
Middleman keywords:

1. [`proxy`](https://middlemanapp.com/advanced/dynamic_pages/)

    This tells Middleman to output a static file based on the provided template.

2. [`ignore`](https://www.relishapp.com/middleman/middleman-core/docs/ignoring-paths)

    This tells Middleman server not to handle this URL. The external generator will
    build the static files.

To preview these custom-generated pages locally, you must first rebuild the files:

```
bundle exec middleman build
```

To test out the site, you must run another Web server from the
`public` directory:

```
cd public
python -m SimpleHTTPServer 8000
```

This will start a Web server on port 8000 (you may omit the port number). You can preview the site
by pointing your browser to http://localhost:8000.

[gh-livereload]: https://github.com/middleman/middleman-livereload/issues/60

## Conclusion

In case someone forgot the most important commands and is catting this file from the command line we end by listing them:

```
bundle exec rake new_post
bundle exec middleman
```

## Review Apps

Thanks to the [Review Apps], the `www-gitlab-com` project supports live reviewing
of any website changes with every merge request. When a branch is pushed and
the pipeline is successfully run, you can see a link pointing to the live
environment in your merge request. The URL will be of the following scheme:
`<branch-name>.about.gitlab.com`.

Beware that:

- To successfully deploy a Review App, the branch must exist in the
  `www-gitlab-com` repository. That means that branches from forks will not
  deploy a Review App (hence MRs from contributors). For that case, you should
  have at least Developer access to the `www-gitlab-com` project or
  `gitlab-com` group.
- The generation of the direction, wishlist and release list pages is omitted
  in branches and is run only on master. This helps to shave off some time from
  the build process. That means you won't be able to preview these pages with
  Review Apps.

[review apps]: https://docs.gitlab.com/ce/ci/review_apps/
