[![build status](https://ci.gitlab.com/projects/1873/status.png?ref=master)](https://ci.gitlab.com/projects/1873?ref=master)

# Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md)

# Deploying

It is sufficient to merge or push to master and site will be automatically deployed.

Manual:

```
git remote add deploy deploy@blue-moon.gitlap.com:~/www-gitlab-com.git
git push deploy master
```

Make sure you have a right system locale otherwise you can get [error](https://gitlab.com/snippets/2327). Output of `locale` should be like:

```
LANG="en_US.UTF-8"
LC_COLLATE="en_US.UTF-8"
LC_CTYPE="en_US.UTF-8"
LC_MESSAGES="en_US.UTF-8"
LC_MONETARY="en_US.UTF-8"
LC_NUMERIC="en_US.UTF-8"
LC_TIME="en_US.UTF-8"
LC_ALL="en_US.UTF-8"
```

# Development

Serve a local build on http://localhost:4000 using:

```
bundle exec rake preview
```

or use the following to also launch Google Chrome

```
bin/view
```

# Deployment setup
Set up a build server with a bare repository and the hook in `_support/hooks`.
Install site and PDF build dependencies `sudo apt-get install texlive-latex-recommended ruby1.9.1-dev ruby1.9.1`

Unfortunately, the pandoc version that ships with Ubuntu 12.04 is too old, so we have to build from source.

```
sudo apt-get install haskell-platform
sudo su - deploy # become the user who performs the build
cabal update
cabal install pandoc # takes a while
```

Copy `_support/user/bash_profile` to `~deploy/.bash_profile` to make sure the build script picks up the pandoc executable.

# In blog posts

Use the following tag after the opening paragraph to make it an acceptable size for the index listing of all articles:

    <!-- more -->

Add your post's image to the 'images' file in this project. You'll need to do it through your local repository.

Add the following to the top of a blog post (between the --- markers) and it will format it as a full bleed image.

    image_title: '/images/unspash/hardware.jpg'

When you add information about features or changes in GitLab CE, EE or CI, make it clear on which one users will be able to find these features or changes.

# Image Guidelines
When adding images to the site, please avoid using largely sized images, as they drastically increase load on the server and make the experience poor for the user.
Also make sure to compress the images as much as possible (use online resource, Photoshop, however you'd like)

You can find images at unsplash.com and then compress them at tinypng.com.

You can link to the authors twitter account with:

    author_twitter: sytses

# Other documentation

* [Autodeploy](doc/autodeploy.md)
* [Recurly](doc/recurly.md)
* [Redirects](doc/redirect_blogposts_org_to_com.md)
* [Add a team member to GitLab's website's step by step](add_member_to_team_page.md)
* [Create a new markdown page](md_page.md)

## Create release blog post

Begin a new release blog post using template from docs.

```
bundle exec rake new_release_post["7.3"]
```

## Create blog post

Create blank blog post based on title

```
bundle exec rake new_post["Feature highlight: Groups"]
```
