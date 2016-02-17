---
layout: post
title: "How to host your website on GitLab.com"
date: 2016-02-24 15:00:00
comments: true
categories: tutorial
author: Guest author Marcia Ramos
author_twitter: virtuacreative
image_title: '/images/blogimages/gitlab-pages-setup-cover.jpg'
---

In this tutorial we provide you with detailed information about using
[GitLab Pages][] to host your website for free on [GitLab.com][].

If you're not familiar with `git` or with GitLab itself, don't worry,
everything is briefly explained.
After that we'll go through a full step-by-step tutorial so you won't get lost in the process.

To get the most out of this tutorial you'll need to know the basics of the
web development process, from creation to publishing.
However, there's nothing too complex that a beginner or an intermediate developer can't handle.

<!-- more -->

### What's in this tutorial?

* [GitLab.com](#GitLab-com)
* [GitLab Pages](#GitLab-Pages)
* [Main GitLab Pages Features](#GitLab-Pages-Features)
  * [Technical overview of GitLab Pages](#technical-overview-gitlab-pages)
     * [Supported Languages &amp; Files](#supported-languages-and-files)
     * [Jekyll Static Website Generator](#jekyll)
* [Domain &amp; Subdomain names](#domains-and-subdomains)
  * [Website Types](#website-types)
     * [User Websites](#user-websites)
     * [Project Websites](#project-websites)
* [Setting Up GitLab Pages](#Setting-Up-GitLab-Pages)
  * [Step-by-Step](#step-by-step)
     * [Create a new project](#creating-new-project)
     * [Create the `.gitlab-ci.yml` configuration file](#creating-gitlab-ci)
     * [Enable Shared Runners](#enabling-shared-runners)
     * [Upload your Website Content](#uploading-website-content)
* [Building Process](#building-process)

----

<a name="GitLab-com"></a>

## GitLab.com

[GitLab.com][] is a **free** and powerful service for hosting code projects.
You can host the GitLab open source code anywhere, but GitLab.com itself is
especially useful for coders and programmers who contribute to each other's work.
Anyone with internet access can use it for free - no credit cards required, ever!

Check it out the [main advantages of using GitLab.com](https://about.gitlab.com/gitlab-com/).

[Creating an account on GitLab.com][4] couldn't be easier.
You'll only need internet access, an e-mail account and a username.

<a name="GitLab-Pages"></a>

## GitLab Pages

[GitLab 8.3][gitlab83] introduced a new feature, called **GitLab Pages**,
which was made for providing a free, simple website hosting service.  
GitLab Pages is a feature available through the GitLab EE (Enterprise Edition is what GitLab.com runs.)
That means if you have your own GitLab EE instance your users can create GitLab pages
whether you host on premises or with [GitHost.io][https://githost.io].

<a name="GitLab-Pages-Features"></a>

### Main GitLab Pages Features

- **Supports any static website** (HTML/CSS/JS)
- **Supports and builds [Jekyll][]**:
   * Multiple Jekyll Versions - no more unpleasant site breaks due to Jekyll Upgrades.
   * Multiple Plugins - you make a request, GitLab.com builds.
- Your website will be automatically **digital certified** by [Comodo](https://www.comodo.com/) -
meaning a secure `https` connection for your site  - `https://you.gitlab.io`
- **Control over the building process** - you can run your own script however you like.
- **Shared runners** - you don't need to rely on just one computer to run your script.
You can enable shared runners or install one for yourself.

<a name="technical-overview-gitlab-pages"></a>

### Technical overview of GitLab Pages

<a name="supported-languages-and-files"></a>

#### Supported Languages &amp; Files

As a static website hosting provider, **GitLab Pages** fully supports:

- `.html` / `.css` / `.js` / `.xml`
- Images, Audio, Video
- SVG Icons
- Live Chat (using services like [JivoChat](https://www.jivochat.com/),
[Tawk.to](https://www.tawk.to/) and many others)
- [PayPal Payments Standard](https://developer.paypal.com/docs/classic/button-manager/integration-guide/SOAP/ButtonMgrOverview/)
- [Facebook Social Plugins](https://developers.facebook.com/docs/plugins/like-button)
- [Twitter Kit](https://dev.twitter.com/web/overview)
- Google Apps ([Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/), [Adwords](https://support.google.com/adwords/answer/6331314), [AdSense](https://support.google.com/adsense/answer/181950), etc)

<a name="jekyll"></a>

#### Jekyll Static Website Generator

[Jekyll][] is software written in [Ruby][] that generates static blog aware websites.
This means we write dynamically and Jekyll `build`s the static site (HTML, CSS, JS) for us.

[Jekyll][] is based on:

- [Markdown][], `.md`, which is a simple textile file easy to read;
- [YAML][], `.yml`, responsible for configuring variables and their values;
- [Liquid][], which dynamically calls the YAML variables defined by Jekyll itself or by yourself.

You also will need to handle some HTML, CSS and JavaScript files.

If you aren't familiar with Jekyll, it's worth a try.
You can play around with `includes`, `loops`, `if` statements, `code blocks` and a lot more.
You can find all of it on [Jekyll Documentation](http://jekyllrb.com/docs/home/).
Jekyll also offers full support for preprocessors like [Sass](http://jekyllrb.com/docs/assets/#sassscss) and [Coffee Script](http://jekyllrb.com/docs/assets/#coffeescript).

In order to run your Jekyll website locally, you will need to [install Jekyll](http://jekyllrb.com/docs/installation/) and its dependencies to your computer.
Once installed, it's pretty fast to learn and easy to use.

<a name="domains-and-subdomains"></a>

### Domain &amp; Subdomain names

Using custom domain and subdomain names pointing to your website hosted
by **GitLab Pages** is a feature that is already implemented to [GitLab EE][]
and it is currently under development by GitLab team to make it
available to [GitLab.com][] users.

As soon as it is released for GitLab.com we'll bring you a tutorial with
the steps to configure your site.
Follow [GitLab on Twitter][3] and stay tuned for updates.

<a name="Comprehending-GitLab-Pages"></a>

## Comprehending GitLab Pages

<a name="website-types"></a>

### Website Types:

On GitLab.com you are allowed to create and host with GitLab Pages two sorts of websites:

1. User Websites
2. Project Websites

<a name="user-websites"></a>

#### GitLab User Websites

Every GitLab.com user is permitted to create only one **user website**,
which will be accessed via `https://username.gitlab.io`.
Setting this website up has exactly the same process as setting **project websites** up.
They are both deployed and build likely.
The only difference is, for **user websites**, the repository name needs
to be exactly `username.gitlab.io`, where `username` is, of course, your user name.

<a name="project-websites"></a>

#### GitLab Project Websites

Every GitLab.com user is allowed to create as many **project websites** as they want.
They will be accessed via `https://username.gitlab.io/projectname`.
Their **repository names** (projects' names) can be chosen at the users' will.

<a name="Setting-Up-GitLab-Pages"></a>

## Setting Up GitLab Pages

Here is an overview of the steps we'll take, assuming you have your GitLab.com account.

1. Create a new project
2. Add the configuration file - called `.gitlab-ci.yml`
3. Enable `shared runners`
4. Upload your website content
5. Done!

<a name="step-by-step"></a>

### Step-by-Step

Now we will go through this process step-by-step.

<a name="creating-new-project"></a>

#### Create a new project

This is as strait-forward as you can imagine:

- On your **dashboard** you will see a big green button called `+ New Project`. Click on it.
- Set the first things up:
   - **Project path** - your project's name, accessed by `https://gitlab.com/username/projectname`:
   - **Privacy** - choose if you want your project to be visible and accessible just for you (`private`), just for GitLab.com users (`internal`) or free to anyone to view, clone, fork and download it (`public`)

**Important**: you can host your website on [GitLab.com][] even if it is
stored in a **private** repository!
If you do so, you can have your [Jekyll][] project **protected** -
only the `html` compiled site will be visible to the public -
via _Inspect Element_ or _View-Source_ from their web browsers.

<a name="creating-gitlab-ci"></a>

#### Add the `.gitlab-ci.yml` configuration file

The key for having everything up and running as expected is [**GitLab CI** configuration file][doc-ciconfig] `.gitlab-ci.yml`.
Every time your repository content is updated,  `.gitlab-ci.yml` will be called by the _runners_ to build it.

This file has to be added to the **root** of your project.
You can have a distinct `.gitlab-ci.yml` for each repository - even for each `branch`.
This means you can test your script in parallel branches before pushing to your `master` branch.
If the build succeed, you merge.
If it doesn't, you can make adjustments and try building again without messing up with you `master` branch.

#### GitLab-ci for plain HTML websites

In order to build your plain `html` site with GitLab Pages.
your `.gitlab-ci.yml` file doesn't need much.
Just copy the following code and paste it to your file.

```ruby
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

What this code is doing is:

- `stage: deploy` - on GitLab you can have three [stages][doc-stages]: build, test and deploy
- `script:` - running the commands below
- `artifacts`- it's creating a public path to the build project
- `only:` - the previous script is affecting only the following branches

**Examples**: plain HTML Template Websites:

- [Genius Template](https://virtuacreative.gitlab.io/genius/) - [View Project on GitLab](https://gitlab.com/virtuacreative/genius)
- [ArtCore Template](https://virtuacreative.gitlab.io/artcore/) - [View Project on GitLab](https://gitlab.com/virtuacreative/artcore)

#### GitLab-ci for Jekyll websites

If you want GitLab Pages to build your Jekyll website, you will need to start with this simple script:

```ruby
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

Just copy this code and paste it to your `.gitlab-ci.yml`.

What this code is doing is:

- `image: ruby:2.1` - running the script with [Ruby] 2.1.x
- `script:` - telling Ruby to run the commands below
- `artifacts`- it's creating a public path to the build project
- `only:` - the previous script is affecting only the following branches

**Examples**: Jekyll Websites:

- [Creative Theme](https://steko.gitlab.io/test/) - [View source on GitLab](https://gitlab.com/steko/test/tree/pages) - [View `.gitlab-ci.yml`](https://gitlab.com/steko/test/blob/pages/.gitlab-ci.yml) - deploying via `pages` branch.
- [Greyscale Theme](https://virtuacreative.gitlab.io/grayscale/) - [View project on GitLab](https://gitlab.com/virtuacreative/grayscale) - [View `.gitlab-ci.yml`](https://gitlab.com/virtuacreative/grayscale/blob/master/.gitlab-ci.yml) - default configuration.
- [Carte Noire Theme](https://virtuacreative.gitlab.io/carte-noire/) - [View project on GitLab](https://gitlab.com/virtuacreative/carte-noire) - [View `.gitlab-ci.yml`](https://gitlab.com/virtuacreative/carte-noire/blob/master/.gitlab-ci.yml) - building Jekyll with `bundler`.

If you are an experienced Jekyll developer, you might want more information about configuring `.gitlab-ci.yml`.
But this an introductory article, so advanced Jekyll builds will be left for a future tutorial.
Follow [GitLab on Twitter][3] to receive updates.

Here you can read the [full documentation regarding `.gitlab-ci.yml`](http://doc.gitlab.com/ee/ci/yaml/README.html).

<a name="enabling-shared-runners"></a>

#### Enable Shared Runners

> A 'runner' is a process which runs a build. You can setup as many runners as you need. Runners can be placed on separate users, servers, and even on your local machine.

Now you will need to configure [runners][doc-runners] to build your website
based on the `.gitlab-ci.yml` configuration.
This step is quite simple.

Go to your dashboard and click on a GitLab Pages project.
Then click on `Settings` -> `Runners` and you will see the option `Enable Shared Runners`.
Click on that and you're done!

You can also [install and configure your own runner](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/README.md).
This is a non-required step and it's up to you to using this feature or not.

<a name="uploading-website-content"></a>

#### Upload your Website Content

You have two ways of inserting content to your projects:

1. Via the web interface ([GitLab.com][5])
2. Via command line

**Via the web interface**

Via the web interface is the most straight-forward way for this task.
To start, select your project.

If your project is new and it's empty:

- Click on the ` + ` sign (on the right side of the repo's download button)
- Click on `add new file`
- Add a name for your file, insert the content and commit your changes
- Done!

If your project already has content:

- Click on `Files` (on the sidebar menu)
- Click on the ` + ` sign and you will see the following options:

![Adding content to GitLab.com projects via web interface](/images/blogimages/gitlab-adding-new-file-web.png)

- Choose one of the options (New file, Upload file, New directory, New branch or New tag)
- Commit your changes
- Done!


**Via Command Line**

In order to connect your computer to remote `git` services, you'll need to [install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) locally.

If you are not familiar with the command line, don't be discouraged.
You won't need to do too much to make things work.
If you really don't have any idea how it works, you can search for
_"how to use command line"_ and you'll find a lot of tutorials to guide you through.
It's a very useful skill to acquire.

After installing [Git][], you need to proceed as the following:

**First**: Clone your project.
This downloads a copy, which you'll need before you can upload any content.

Via the web interface, copy the `https` path of the project you want to clone:

**Choose `https`:**

![GitLab Clone Repo via https link](/images/blogimages/gitlab-clone-repo-https-link.jpg)

**Then copy it:**

![GitLab Clone Repo via https link copy](/images/blogimages/gitlab-clone-repo-https-link-copied.jpg)

<a name="git-config-global"></a>

- Open the terminal
- Introduce yourself to `git` by typing:

```posh
git config --global user.name _Your Name Goes Here_
git config --global user.email _your-email@example.com_
```

- Choose a folder where you want to store your project and navigate into it
(via `cd path/to/path` and `cd..` to go back to a previous level)
- Type `git clone <path>` - where `<path>` is the `https` link copied from your
project (**tip**: you cannot paste any command to the terminal via `Ctrl + V`
  but you can do that by right-clicking on the terminal with your mouse)
- The terminal will ask for your credentials.
Enter your GitLab.com username, press `enter` or `return`, enter your password and press that again
- Done!

Great! Now your repository will be cloned (meaning downloaded) to your local computer,
in the folder you had chosen before.
Make the adjustments you need such as adding or deleting files.

----

**Second**: Whenever you need to **upload** content again to update your project online:

- Open the terminal, navigate to your local folder and [introduce yourself](#git-config-global)
- Type `git pull` - this command will download any files changed via web interface
- Type `git status` - you will see all the changes made locally compared to the previous pull request
- Type `git add <file>` - to add a specific file, or `git add .` - to add all the files at the same time
- Type `git commit -m "my message"` - to commit your changes
- Type `git push` - to upload everything you had added and committed to the repository
- Most likely the system will require your credentials again, so just type your
username and password (the same you use to sign into GitLab.com)
- Done!

There are many [useful `git` commands](https://www.kernel.org/pub/software/scm/git/docs/)
to run via terminal but we won't get into this subject on this article.
You can find here a [Git Cheat Sheet](https://www.git-tower.com/blog/git-cheat-sheet/).

<a name="building-process"></a>

## Building Process

The GitLab.com building process is controlled by yourself, through `.gitlab-ci.yml` configurations. If you want to monitor the process while it's running, just follow these few steps:

- Sign into your GitLab.com account and open the project you want to view.
- On the sidebar menu, click on `Builds`.
- There you can view a grid with all your builds.
- Look for the second column, `Build ID` and click on the first id `#00000` - which is your last build.
You'll be able to see it running.
- If the build has already finished, you can always access its script on this screen.

_______

That's it!

Hopefully you understand how **GitLab Pages** work and how to create your new site.
We're looking forward to seeing your sites!


[doc-runner]: http://doc.gitlab.com/ce/ci/runners/README.html#sts=Runners
[doc-stages]: http://doc.gitlab.com/ce/ci/yaml/README.html#stages
[doc-ciconfig]: http://doc.gitlab.com/ee/ci/quick_start/README.html#creating-a-.gitlab-ci.yml-file
[gitlab83]: https://about.gitlab.com/2015/12/22/gitlab-8-3-released
[GitLab.com]: https://about.gitlab.com/gitlab-com/
[Git]: https://git-scm.com/
[GitLab Pages]: http://doc.gitlab.com/ee/pages/README.html
[GitLab EE]: http://doc.gitlab.com/ee/pages/README.html
[GitLab Team]: https://about.gitlab.com/team/
[Jekyll]: https://jekyllrb.com
[Markdown]: http://daringfireball.net/projects/markdown/basics
[YAML]: http://yaml.org/
[Liquid]: https://github.com/Shopify/liquid/wiki
[Ruby]: https://www.ruby-lang.org/

[1]: https://about.gitlab.com/about/
[2]: https://about.gitlab.com/2015/05/18/simple-words-for-a-gitlab-newbie/
[3]: https://twitter.com/gitlab
[4]: https://gitlab.com/users/signin "Sign Up!"
[5]: https://gitlab.com
