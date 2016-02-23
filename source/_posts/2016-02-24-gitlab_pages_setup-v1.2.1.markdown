---
layout: post
title: "Hosting on GitLab.com with GitLab Pages" # was "How to host your website on GitLab.com"
date: 2016-02-24 15:00:00
comments: true
categories: tutorial
author: Guest author Marcia Ramos
author_twitter: virtuacreative
image_title: '/images/blogimages/gitlab-pages-setup-cover.jpg'
---

In this tutorial we provide you with detailed information about using [GitLab Pages][pages-ee] to host your website for free on [GitLab.com][gitlab-com].

We've prepared a step-by-step tutorial on setting up GitLab Pages so you won't get lost in the process.

We assume you are familiar with `git` and with the web development process, from creation to publishing.

<!-- more -->

----------

### What's in this tutorial?

- [GitLab.com](#GitLab-com)
- [GitLab Pages](#GitLab-Pages)
  - [Comprehending GitLab Pages](#Comprehending-GitLab-Pages)
     - [Website Types](#website-types)
         - [User Websites](#user-websites)
         - [Project Websites](#project-websites)
 - [Setting Up GitLab Pages](#Setting-Up-GitLab-Pages)
     - [Step-by-Step](#step-by-step)
         - [Create a new project](#creating-new-project)
         - [Add the `.gitlab-ci.yml` configuration file](#creating-gitlab-ci)
         - [Configure runners](#enable-runners)
         - [Upload your website content](#upload-content)
      - [Getting Help](#getting-help)
  - [Examples](#examples)
- [Conclusions](#conclusions) 

----

<a name="GitLab-com"></a>

# GitLab.com

[GitLab.com][gitlab-com] is a web-based [Git][git] repository manager, 
offering a **free** and powerful service for hosting code projects. 
You can host the [GitLab open source][gitlab-ce] code anywhere, 
but GitLab.com itself is especially useful for coders and programmers who contribute to each other's work. 
Anyone with internet access can [use it for free][sing-up] - no credit cards required, ever! 

Check it out the [main advantages of using GitLab.com][gitlab-com].

<a name="GitLab-Pages"></a>

# GitLab Pages

[GitLab 8.3][gitlab83] introduced a new feature, called **GitLab Pages**, 
which was made for providing a free, simple website hosting service.  
[GitLab Pages][pages-ee] is available through the GitLab EE. GitLab Enterprise Edition is what GitLab.com runs on.

GitLab Pages supports [static websites][wiki-static-websites] and also builds [Jekyll][]. 

Jekyll is software written in [Ruby][] which generates static blog aware websites. 
This means we write dynamically with [Liquid][], [Markdown][] and [YAML][] and Jekyll builds the static site (HTML, CSS, JS) for us. 
It offers full support for preprocessors like [Sass][] and [Coffee Script][]. 
You can find all of it on [Jekyll Documentation][].
 
On the official docs you can understand how [GitLab Pages][pages-work] work.

<a name="Comprehending-GitLab-Pages"></a>

## Comprehending GitLab Pages

<a name="website-types"></a>

### Website Types

On GitLab.com you are allowed to create and host with GitLab Pages two sorts of websites:

1. User Websites
1. Project Websites

<a name="user-websites"></a>

#### GitLab User Websites

Every GitLab.com user is permitted to create only one **user website**, 
which will be accessed via `https://username.gitlab.io`. 
Setting this website up has exactly the same process as setting **project websites** up. 
They are both deployed and build likely. The only difference is, for **user websites**, 
the repository name needs to be exactly `username.gitlab.io`.

<a name="project-websites"></a>

#### GitLab Project Websites

Every GitLab.com user is allowed to create as many **project websites** as they want. 
They will be accessed via `https://username.gitlab.io/projectname`. 
Their **repository names** (projects' names) can be chosen at the users' will.

<a name="Setting-Up-GitLab-Pages"></a>

## Setting Up GitLab Pages

Here is an overview of the steps we'll take, assuming you have your GitLab.com account.

1. Create a new project
1. Add the configuration file - called `.gitlab-ci.yml`
1. Configure runners
1. Upload your website content
1. Done!

<a name="step-by-step"></a>

### Step-by-Step

Now we will go through this process step-by-step.

<a name="creating-new-project"></a>

#### Create a new project

This is as strait-forward as you can imagine:

- On your **dashboard** you will see a big green button called `+ New Project`. Click on it.
- Set the first things up:
   - **Project path** - your project's name, accessed by `https://gitlab.com/username/projectname`
   - **Privacy** - choose if you want your project to be visible and accessible just for you (`private`), just for GitLab.com users (`internal`) or free to anyone to view, clone, fork and download it (`public`)

**Important**: you can host your website on [GitLab.com][gitlab-com] even if it is stored in a **private** repository! 
If you do so, you can have your project **protected** - only the `html` compiled site will be visible 
to the public - via _Inspect Element_ or _View-Source_ from their web browsers.

<a name="creating-gitlab-ci"></a>

#### Add the `.gitlab-ci.yml` configuration file

The key for having everything up and running as expected is [**GitLab CI** configuration file][doc-ciconfig] `.gitlab-ci.yml`.

What this file does is [configuring][ee-yaml-ci] how your website will be build by a _[runner][doc-runners]_. 
It is written in [YAML][] and has its own syntax, so we recommend you to follow this [quick start guide][] before setting it up. 

Every time you push content to your repository,  `.gitlab-ci.yml` will build it.

This file has to be added to the **root** of your project. 
You can have a distinct `.gitlab-ci.yml` for each repository - even for each `branch`. 
This means you can test your script in parallel branches before pushing to your `master` branch. 
If the build succeed, you merge. If it doesn't, you can make adjustments and try building again 
without messing up with you `master` branch.

Before you push any `.gitlab-ci.yml` to your project, you can 
validate its syntax with the tool called [CI Lint][ci-lint]. 
You need to be logged into your account to have access to this link.

#### GitLab-ci for plain HTML websites

In order to build your plain `html` site with GitLab Pages, 
your `.gitlab-ci.yml` file doesn't need much. 
The only thing to do is a _job_ telling the _runner_ to deploy the website to a public path.

```yaml
pages:
  stage: deploy
  script:
  - mkdir .public
  - cp -r * .public
  - mv .public public
  artifacts:
    paths:
    - public
  only:
  - master
```

<!-- If I may, I'd like to ask you reviewed carefully the section below ("scripts" and "artifacts"), as I'm not 100% sure that what I understood is right -->

<a name="html-code"></a>

What is this code doing?

**Job**
- [`pages`][doc-contents-ciconfig]:  this is the _[job][doc-jobs]_ name and it's 
particularly related to process of publishing websites with GitLab Pages.

**Stage**
- `stage: deploy` - on GitLab you can set up multiple [stages][doc-stages]. 
In this case, the job `pages` is _deploying_ the website. 
If a job doesn't specify stage, the job is assigned the `test` stage by default.

**Script**
- [`script:`][doc-script]  is telling the _runner_ to use the script listed there. 
In this case, it is creating the `.public` directory, 
recursively copying of all files and directories in source directory tree 
and finally moving these files to the `public` dir.  
The `.public` workaround is so `cp` doesn’t also copy `public/` to itself in an infinite loop.

**On success**
- [`artifacts:`][doc-artifacts]  is specifying the list of files and directories which 
should be attached to build after success. 
In this case, it's attaching all published site files to the `public` path.

**Affected branches**
- [`only:`][doc-only]  the current script is affecting _only_ the branch listed there. In this case, `master`.

#### GitLab-ci for Jekyll websites

If you want GitLab Pages to build your Jekyll website, you can start with the simple script below. 
Just copy this code and paste it to your `.gitlab-ci.yml`. 

```yaml
image: ruby:2.1

pages:
  script:
  - gem install jekyll
  - jekyll build -d public/
  artifacts:
    paths:
    - public
  only:
  - master
```

What is this code doing?

**Ruby**
- [`image: ruby:2.1`][doc-images] - running the script on the environment of [Ruby] 2.1.x

**Job**
- [`pages`][doc-contents-ciconfig]: alike [html](#html-code).  <!-- "alike html" ? any suggestion here? It's visually ugly, isn't it? -->

**Stage**
- In this case, as this job doesn't specify stage, 
the job is assigned the `test` stage by default.

**Script**
- [`script:`][doc-script] is telling Ruby to run the script listed below it. 
In this case, it's  installing Jekyll first, 
then building the site to that specific `public/` path.

**On success**
- [`artifacts:`][doc-artifacts] alike [html](#html-code).

**Affected branches**
- [`only:`][doc-only]  alike [html](#html-code).

All pages are created after the build completes successfully 
and the artifacts for the pages job are uploaded to GitLab.

If you are an experienced Jekyll developer, 
you might want more information about configuring `.gitlab-ci.yml`. 
But this an introductory article, so advanced Jekyll builds will be left for a future tutorial. 
Until then, you're invited to try it by yourself. 
Just follow the logic and your intuition and 
you'll be surprised how useful is controlling your own builds!

Here you can read the [full documentation regarding `.gitlab-ci.yml`][ee-yaml-ci].

<a name="enable-runners"></a>

#### Configure _Runners_

This step is quite simple.

A "runner" is a process which runs a build; that's why we need it. 
To enable [runners][doc-config-runners] to your project, simply go to your project's dashboard, 
click on `Settings` -> `Runners` -> [`Enable Shared Runners`][doc-shared-runners]. 
These are special virtual machines that run on GitLab's infrastructure and can build any project.

If you want to know more about runners, you can read the [quick start guide][] and the [runners][doc-runners] documentation.

<a name="upload-content"></a>

#### Upload your website content

Push the content to your project and keep an eye on the build!

<a name="getting-help"></a>

### Getting Help

If you need some help regarding GitLab Pages on GitLab.com, 
feel free to use one of [our channels][get-help].

<a name="examples"></a>

## Examples

Let's see a few examples of plain HTML and Jekyll sites build with GitLab Pages and hosted by GitLab.com to get you inspired!

**Plain HTML Template Websites**

| Website URL | Project URL | .gitlab-ci.yml | Configuration | 
| ----------- | ----------- | -------------- | -------------- |
|[Simple page][h-1-web]|[Source on GitLab][h-1-pro]|[.gitlab-ci.yml][h-1-ci]| Default
|[Genius Template][h-2-web]|[Source on GitLab][h-2-pro]|[.gitlab-ci.yml][h-2-ci]| Default
|[ArtCore Template][h-3-web]|[Source on GitLab][h-3-pro]|[.gitlab-ci.yml][h-3-ci]| Default

**Jekyll Websites**

| Website URL | Project URL | .gitlab-ci.yml | Configuration | 
| ----------- | ----------- | -------------- | -------------- |
|[Default Theme][j-1-web]|[Source on GitLab][j-1-pro]|[.gitlab-ci.yml][j-1-ci]| Markdown: `redcarpet` 
|[Greyscale Theme][j-2-web]|[Source on GitLab][j-2-pro]|[.gitlab-ci.yml][j-2-ci]| Default 
|[Creative Theme][j-3-web]|[Source on GitLab][j-3-pro]|[.gitlab-ci.yml][j-3-ci]| Deploing via `pages` branch 
|[Carte Noire Theme][j-4-web]|[Source on GitLab][j-4-pro]|[.gitlab-ci.yml][j-4-ci]| Building Jekyll v 2.5.3 with `bundler`

_**Note**: these  themes were randomly chosen and listed on this post 
to provide you with some distinct configurations for helping you to create your own. _

You can find more [GitLab CI examples][ci-examples] in this group.

<a name="conclusions"></a>

# Conclusions

Hopefully now you understand how **GitLab Pages** work and how to create your new site.

Pointing **custom domain names** to GitLab Pages is a feature that 
is already fully functional on [GitLab EE][pages-ee]. 
It's currently [under development][cname-issue] and 
will be available soon via **CNAME** on GitLab.com.

Follow [GitLab on Twitter][twitter] to stay thunned for updates!

We're looking forward to seeing your sites!

[doc-artifacts]: http://doc.gitlab.com/ee/ci/yaml/README.html#artifacts
[doc-ciconfig]: http://doc.gitlab.com/ee/ci/quick_start/README.html#creating-a-.gitlab-ci.yml-file
[doc-config-runners]: http://doc.gitlab.com/ee/ci/quick_start/README.html#configuring-a-runner
[doc-contents-ciconfig]: http://doc.gitlab.com/ee/pages/README.html#explore-the-contents-of-.gitlab-ci.yml
[doc-images]: http://doc.gitlab.com/ee/ci/yaml/README.html#image-and-services
[doc-jobs]: http://doc.gitlab.com/ce/ci/yaml/README.html#jobs
[doc-only]: http://doc.gitlab.com/ee/ci/yaml/README.html#only-and-except
[doc-runners]: http://doc.gitlab.com/ee/ci/runners/README.html#sts=Runners
[doc-script]: http://doc.gitlab.com/ee/ci/yaml/README.html#script
[doc-shared-runners]: http://doc.gitlab.com/ee/ci/quick_start/README.html#shared-runners
[doc-stages]: http://doc.gitlab.com/ce/ci/yaml/README.html#stages
[ee-yaml-ci]: http://doc.gitlab.com/ee/ci/yaml/README.html
[pages-ee]: http://doc.gitlab.com/ee/pages/README.html
[pages-work]: http://doc.gitlab.com/ee/pages/README.html#understanding-how-gitlab-pages-work
[quick start guide]: http://doc.gitlab.com/ee/ci/quick_start/README.html

[ci-examples]: https://gitlab.com/groups/gitlab-examples#projects
[ci-lint]: https://gitlab.com/ci/lint "Try me!"
[cname-issue]: https://gitlab.com/gitlab-org/gitlab-ee/issues/134
[get-help]: https://about.gitlab.com/getting-help
[gitlab83]: https://about.gitlab.com/2015/12/22/gitlab-8-3-released
[gitlab-ce]: https://gitlab.com/gitlab-org/gitlab-ce
[gitlab-com]: https://about.gitlab.com/gitlab-com/
[sing-up]: https://gitlab.com/users/signin "Sign Up!"
[twitter]: https://twitter.com/gitlab

[Coffee Script]: http://coffeescript.org/
[git]: https://git-scm.com/about
[Jekyll]: https://jekyllrb.com
[Jekyll Documentation]: http://jekyllrb.com/docs/home/
[Liquid]: https://github.com/Shopify/liquid/wiki
[Markdown]: http://daringfireball.net/projects/markdown/
[Ruby]: https://www.ruby-lang.org/
[Sass]: http://sass-lang.com/
[wiki-static-websites]: https://en.wikipedia.org/wiki/Static_web_page
[YAML]: http://yaml.org/

[h-1-web]: http://gitlab-examples.gitlab.io/pages-plain-html "The simplest html example"
[h-1-pro]: https://gitlab.com/gitlab-examples/pages-plain-html
[h-1-ci]: https://gitlab.com/gitlab-examples/pages-plain-html/blob/master/.gitlab-ci.yml

[h-2-web]: https://virtuacreative.gitlab.io/genius/ " A beautiful gallery dark theme"
[h-2-pro]: https://gitlab.com/virtuacreative/genius
[h-2-ci]: https://gitlab.com/virtuacreative/genius/blob/master/.gitlab-ci.yml

[h-3-web]: https://virtuacreative.gitlab.io/artcore/ "A featured template with multiple page layouts and fancy animations"
[h-3-pro]: https://gitlab.com/virtuacreative/artcore
[h-3-ci]: https://gitlab.com/virtuacreative/artcore/blob/master/.gitlab-ci.yml

[j-1-web]: https://gitlab.com/gitlab-examples/pages-jekyll "The default Jekyll Theme"
[j-1-pro]: https://gitlab.com/gitlab-examples/pages-jekyll
[j-1-ci]: https://gitlab.com/gitlab-examples/pages-jekyll/blob/master/.gitlab-ci.yml

[j-2-web]: https://virtuacreative.gitlab.io/grayscale/ "A single page Jekyll template"
[j-2-pro]: https://gitlab.com/virtuacreative/grayscale
[j-2-ci]: https://gitlab.com/virtuacreative/grayscale/blob/master/.gitlab-ci.yml

[j-3-web]: https://steko.gitlab.io/test/ "A beautiful Start Bootstrap Theme"
[j-3-pro]: https://gitlab.com/steko/test/tree/pages
[j-3-ci]: https://gitlab.com/steko/test/blob/pages/.gitlab-ci.yml

[j-4-web]: https://virtuacreative.gitlab.io/carte-noire/ "A dark blog theme with Jekyll Plugins"
[j-4-pro]: https://gitlab.com/virtuacreative/carte-noire
[j-4-ci]: https://gitlab.com/virtuacreative/carte-noire/blob/master/.gitlab-ci.yml