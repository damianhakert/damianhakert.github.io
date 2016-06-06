---
layout: markdown_page
title: Updating the website
---

On your onboarding issue you will be asked to add yourself to the team page or
make a change to improve the handbook. The way to do this is to follow the
[workflow] that is followed by all GitLab developers: create a new Merge Request
(MR for short) to the `www-gitlab-com` project. This may seem a daunting task
if you've never used Git or the command line before. If that's the case, then
this page is for you. We created this guide based on feedback gathered from
[this issue][658], any additional feedback is much appreciated!

Let's dive in.

1. TOC
{:toc}

## Setting up the development environment

### Getting familiar with the terminal

### Installing Git

1. Open a terminal.
1. Check your Git version by executing: `git --version`.
1. If Git is not installed, you should be prompted to install it. Follow this
  [guide](http://docs.gitlab.com/ce/gitlab-basics/start-using-git.html) to installing Git and
linking your account to Git.

### Installing Ruby

#### RVM

1. Visit [https://rvm.io](https://rvm.io/).
1. In a terminal, execute: `curl -sSL https://get.rvm.io | bash -s stable`.
1. Close terminal.
1. Open a new terminal to load the new environment.

#### Ruby and Bundler

1. In a terminal, execute: `rvm install 2.2.1` to install Ruby
   (enter your system password if prompted).
1. Execute: `rvm use 2.2.1 --default` to set your default Ruby to `2.2.1`.
1. Execute: `ruby --version` to verify Ruby is installed. You should see:
   `ruby 2.2.1p85 (2015-02-26 revision 49769)`.
1. Execute: `gem install bundler` to install [Bundler](http://bundler.io/).

### Installing the tools needed to build the website

Clone the source of the website and install its dependencies:

1. In a terminal execute: `git clone https://gitlab.com/gitlab-com/www-gitlab-com.git`
   to clone the website.
1. Execute: `cd www-gitlab-com` to change to the `www-gitlab-com` directory.
1. Execute: `bundle install` to install all gem dependencies.

To prevent newlines from causing all following lines in a file to be tagged as
changed, execute the following command in your terminal:
`git config --global core.autocrlf input`.
This is especially a problem for anyone running a Mac OSX or Windows Operating
System.

## Setting up your text editor

To edit the site locally you'll need to install a text editor. We recommend
[Sublime Text 2](http://www.sublimetext.com/2) or [Atom](https://atom.io/).

## Making your first Merge Request

TODO:

1. Create a test repo.
1. Create a test user as owner of the repo, that way people will be able to
   assign MRs to this user.
1. Create a step-by-step learning guide to making an MR.


## Adding yourself to the team page

## Updating an existing page

## Adding a new page

Two ways:

1. page.html.md
1. page/index.html.md

## Local Checks of Your Changes

This is an optional step but highly recommended. If followed, you will be able
to preview your changes before committing them and submitting an MR.

### Preview the website changes locally

1. In a terminal, execute: `bundle exec middleman`.
1. Visit <http://localhost:4567> in your browser.

### Test if all URL links in a page are valid

Until this is automated in CI, a quick way to see if there are any invalid
links inside a page is the following.

1. Install the [check-my-links] extension in Chrome (no other browsers
   support unfortunately).
1. Open the page you wish to preview (see previous step).
1. Click the newly installed extension in the upper right corner of Chrome.

A pop-up window will open and tell you how many links, if any, are invalid.
Fix any invalid links and ideally any warnings, commit, push back, test again.

## Start using GitLab

1. Here's where you can find step-by-step guides on the [basics of working with Git and GitLab](http://doc.gitlab.com/ce/gitlab-basics/README.html). You'll need those later.
1. Create your [SSH Keys](http://doc.gitlab.com/ce/gitlab-basics/create-your-ssh-keys.html).


[check-my-links]: https://chrome.google.com/webstore/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfglf/
[658]: https://gitlab.com/gitlab-com/www-gitlab-com/issues/658
