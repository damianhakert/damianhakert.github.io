---
layout: post
title: "Hosting on GitLab.com with GitLab Pages" # was "How to host your website on GitLab.com"
date: 2016-02-24 15:00:00
comments: true
categories: tutorial
author: Marcia Ramos
author_twitter: virtuacreative
image_title: '/images/blogimages/gitlab-pages-setup-cover.jpg'
---

In this article we provide you with detailed information about using [GitLab Pages][pages-ee] to host your website for free on [GitLab.com][sign-up].

We've prepared a step-by-step tutorial on setting up GitLab Pages so you won't get lost in the process.

We are assuming that you are familiar with [`git`][git] and with the web development process, from creation to publishing.

<!-- more -->

----------

### What's in this tutorial?

- [GitLab Pages](#GitLab-Pages)
- [Website Types](#website-types)
   - [User/Group Websites](#user-websites)
   - [Project Websites](#project-websites)
- [Setting Up GitLab Pages](#Setting-Up-GitLab-Pages)
   - [Step-by-Step](#step-by-step)
      - [Create a new project](#creating-new-project)
      - [Add the configuration file:  `.gitlab-ci.yml`](#add-gitlab-ci)
      - [Upload your website content](#upload-content)
      - [Add your custom domain](#custom-domains)
- [Examples](#examples)
- [FAQ](#faq)
- [Getting Help](#getting-help)
- [Conclusions](#conclusions) 

----

<a name="GitLab-Pages"></a>

# GitLab Pages

[GitLab 8.3][gitlab83] introduced a new feature, called **GitLab Pages**, 
which was made for providing a free, simple website hosting service.  
[GitLab Pages][pages-ee] is available through the GitLab EE. GitLab Enterprise Edition is what [GitLab.com][about-gitlab-com] runs on.

GitLab Pages supports [static websites][wiki-static-websites] and also builds [Static Site Generators (SSGs)][SSGs], as [Jekyll][], [Hugo], [Hexo], [Middleman] and many others. 

On the official docs you can understand how [GitLab Pages][pages-work] work.

<a name="website-types"></a>

# Website Types

On GitLab.com you are allowed to create and host with GitLab Pages two sorts of websites:

1. User/Group Websites
1. Project Websites

<a name="user-websites"></a>

## GitLab User &amp; Group Websites

### User Websites

Every GitLab.com user is permitted to create only one [**user website**][pages-user], 
which will be accessed via `https://username.gitlab.io`. 
Setting this website up has exactly the same process as setting **project websites** up. 
They are both deployed and build likely. The only difference is, for **user websites**, 
the repository name needs to be exactly `username.gitlab.io`, where `username` is your user name, and corresponds to your unique **namespace** on GitLab.com.

### Group Websites

Creating a [group][doc-groups] on GitLab is very useful when you have several projects with the same subject. 
Each group has with its own **namespace**, which is unique for each group.

[**Group websites**][pages-user] follow the same logic as users' do. 
If you want to deploy a website under the group namespace, 
just create a new project named `groupname.gitlab.io` 
and the website will be accessible under `https://groupname.gitlab.io/`.

<a name="project-websites"></a>

## GitLab Project Websites

Every GitLab.com user is allowed to create as many [**project websites**][pages-project] as they want. 
They will be accessed via `https://username.gitlab.io/projectname`. 
Their **repository names** (projects' names) can be chosen at the users' will.

Similarly, for each group you can assemble project 
websites which will be accessible under `https://groupname.gitlab.io/projectname`.

<a name="Setting-Up-GitLab-Pages"></a>

# Setting Up GitLab Pages

Here is an overview of the steps we'll take, assuming you have your GitLab.com account.

1. Create a new project
1. Add the configuration file - called `.gitlab-ci.yml`
1. Upload your website content
1. Add your custom domain _(non-required)_
1. Done!

<a name="step-by-step"></a>

## Step-by-Step

Now we will go through this process step-by-step.

<a name="creating-new-project"></a>

### Create a new project

This is as strait-forward as you can imagine:

- On your **dashboard** you will see a big green button called `+ New Project`. Click on it.
- Set the first things up:
   - **Project path** - your project's name, accessed via `https://gitlab.com/namespace/projectname`
   - **Privacy** - choose if you want your project to be visible and accessible just for you (`private`), just for GitLab.com users (`internal`) or free to anyone to view, clone, fork and download it (`public`)

_**Note**: you can host your website on [GitLab.com][gitlab-com] even if it is stored in a private repository. 
If you do so, you can have your project protected - only the static site will be visible 
to the public - via "Inspect Element" or "View-Source" from their web browsers._

<a name="add-gitlab-ci"></a>

### Add the configuration file: `.gitlab-ci.yml`

The key for having everything up and running as expected is the [**GitLab CI** file][doc-ciconfig] `.gitlab-ci.yml`.

What this file does is [configuring][ee-yaml-ci] how your website will be build by a _[runner][doc-config-runners]_. 
It is written in [YAML][], which has its own syntax, so we recommend you
 to follow this [quick start guide][] before setting it up. 
It needs to be placed at your project's root. 

Before you push any `.gitlab-ci.yml` to your project, you can 
validate its syntax with the tool called [CI Lint][ci-lint]. 
You need to be logged into your account to have access to this tool. 
It's easily found by navigating to `Project` -> `Builds`: there is a button at the top-right of your screen.

![CI-Lint](https://virtuacreative.gitlab.io/images/misc/CI-Lint.png)

### [GitLab-ci for plain HTML][pages-ci-html] websites

In order to build your plain `html` site with GitLab Pages, 
your `.gitlab-ci.yml` file doesn't need much:

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

What this code is doing is creating a _[job][doc-jobs]_ called _[pages][doc-contents-ciconfig]_ 
telling the _[runner][doc-shared-runners]_ to _[deploy][doc-stages]_ the website _[artifacts][doc-artifacts]_ 
to a _[public path][doc-contents-ciconfig]_, 
whenever a commit is pushed _[only][doc-only]_ to the `master` branch.

All pages are created after the build completes successfully 
and the artifacts for the pages job are uploaded to GitLab.

### [GitLab-ci for Jekyll][pages-ci-jekyll] websites

Jekyll is so far the most popular [SSG][SSGs] available, that's why we'll use it as an example 
for configuring our GitLab-ci. On the next section you'll find more [examples](#examples) for SSGs already tested with GitLab Pages. 

Jekyll is written in [Ruby][] and generates static blog aware websites. 
This means we write dynamically with [Liquid], [Markdown] and [YAML] and 
Jekyll builds the static site (HTML, CSS, JS) for us. 
You will find the same functionality for every SSG, 
yet each of them uses its own languages.

If you want GitLab Pages to build your Jekyll website, 
you can start with the simple script below. 

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

This code is requiring the _[script][doc-script]_ to run on 
the _[environment][doc-images]_ of [Ruby][] 2.1.x and 
installing and building Jekyll to the _[public path][doc-contents-ciconfig]_. 
The result is affecting _[only][doc-only]_ the master branch.
For building a regular Jekyll site, you can just 
copy this code and paste it into your `.gitlab-ci.yml`. 

If you are familiar with Jekyll, you will probably want to use [Bundler] to build your Jekyll site. 
We've prepared an [example](#examples) for that. Also, if you want to use a specific Jekyll version, you will also 
find an [example][jekyll-253-example] in our [Jekyll Themes][jekyll-examples] group. 

Here you can read the [full documentation regarding `.gitlab-ci.yml`][ee-yaml-ci].

<a name="upload-content"></a>

### Upload your website content

Push the content to your remote project and keep an eye on the build!

Don't forget: when you are using GitLab Pages to build a SSG, do not upload the folder with your site generated locally, 
otherwise you'll have duplicated contents and you might face build errors. 
For example, do not upload the `_site` folder ([Jekyll]) or the `build` folder ([Middleman]) or the `public` folder ([Hexo]). 
You can do this automatically by adding them to a `.gitignore` file, placed at your site root.

E.g. if you are building a Jekyll site, your `.gitignore` will have this line:

```ruby
_site
```

A `.gitignore` is very useful to avoid uploading to your remote repository any file or folder within your project. 
If you want to know more about it, check [`.gitignore` official docs][git-docs-gitignore].

<a name="custom-domains"></a>

### Add your custom domain

_**Note:** Custom CNAMEs with TLS support were introduced in [GitLab EE 8.5][EE-85]._

If you want, you are free to easily [add your own domain name][pages-custom-domain] to your website hosted by GitLab.com. 
It's not required though, you can always use the standard GitLab Pages subdomain accessed under `https://mynamespace.gitlab.io`.

_Features_

- Besides including your own domain, you can add your custom **subdomain** to your GitLab Pages project (e.g. `subdomain.example.com`)
- You can enter more than one domain aliases **per project** (e.g. `example.com`, 
`example.net` `my.example.org` and `another-example.com` pointing to your project under `mynamespace.gitlab.io` or 
`mynamespace.gitlab.io/myproject`). A domain alias is like having multiple front doors to one location.
- If you want to enable `https` secure connection to your domains, you can affix your own SSL/TLS digital 
certificate to **each** custom domain or subdomain you've added to your projects.

_How to do that_


- From your project's dashboard, go to `Settings` -> `Pages` -> `+ New Domain`

- Add your domain to the first field: `mydomain.com`

- If you have a SSL/TLS digital certificate and its key, just add them to their respective fields. 
If you don't, just leave the fields blank. 


- Click on `Create New Domain`.

- Finally, access your domain control panel and create a new `CNAME` [DNS record][dns-cname] pointing to `username.gitlab.io`:

```
mydomain.com CNAME username.gitlab.io
```

**Alternatively, the same procedure can be applied for custom sub domains:**

- Add the sub domain to the first field: `subdomain.mydomain.com`

- Then create the DNS record:

```
subdomain.mydomain.com CNAME username.gitlab.io
```

To add new domain aliases to the same project, just repeat these steps.

Ordinary, DNS propagation needs some time to take effect, so don't worry if you can't access your 
website under your custom domain instantaneously. Wait a few hours and check it again.

<a name="examples"></a>

# Examples

On the following tables you can explore some examples of sites 
build with GitLab Pages and hosted by GitLab.com. 

On the first table you will find some illustrative plain HTML websites; on the subsequent lists, 
some SSGs examples that we gathered for you, organized by their respective environments.

### Plain HTML Websites

| Website URL | Project URL | Configuration |  
| ----------- | ----------- | -------------- | 
| [Simple page][h-1-web] | [Source on GitLab][h-1-pro] | [Default][h-1-ci] |
| [Genius Template][h-2-web] | [Source on GitLab][h-2-pro] | [Default][h-2-ci] |
| [ArtCore Template][h-3-web] | [Source on GitLab][h-3-pro] | [Default][h-3-ci] |

### Environment: **[Ruby]**

| SSG | Website URL | Project URL | Configuration | 
| --- | ----------- | ----------- | -------------- |
| [Jekyll] | [Greyscale Theme][j-3-web] | [Source on GitLab][j-3-pro] | [Default][j-3-ci] |  
| [Jekyll] | [Default Theme][j-2-web] | [Source on GitLab][j-2-pro] | [Building Jekyll 3.1.2 with Bundler][j-2-ci] | 
| [Middleman] | [Default Theme][middle-prev] | [Source on GitLab][middle-proj] | [Default + Bundler `ENV=PRODUCTION`][middle-ci] | 

### Environment: **[Node JS][node]**

| SSG | Website URL | Project URL | Configuration | 
| --- | ----------- | ----------- | -------------- |
| [Hexo] | [Hueman Theme][hexo-prev] | [Source on GitLab][hexo-proj] | [Default + `test` job][hexo-ci] |
| [Brunch] | [Default Skeleton][brunch-prev] | [Source on GitLab][brunch-proj] | [Default][brunch-ci] |
| [Harp] | [Default Theme][harp-prev] | [Source on GitLab][harp-proj] | [Default][harp-ci] |
| [Metalsmith] | [Default Theme][metal-prev] | [Source on GitLab][metal-proj] | [Default][metal-ci] |


### Environment: **[Python]**

| SSG | Website URL | Project URL | Configuration | 
| --- | ----------- | ----------- | -------------- |
| [Lektor] | [Default Theme][lektor-prev] | [Source on GitLab][lektor-proj] | [Default][lektor-ci] |
| [Hyde] | [Default Theme][hyde-prev] | [Source on GitLab][hyde-proj] | [Default + `test` job][hyde-ci] |

### Environment: **[Go Lang][go]**

| SSG | Website URL | Project URL | Configuration | 
| --- | ----------- | ----------- | -------------- |
| [Hugo] | [Lanyon Theme][hugo-prev] | [Source on GitLab][hugo-proj] | [Default][hugo-ci] |

### **More Examples**

On the following GitLab groups you can find even more examples.

| Group | Environment | SSGs |
| ----- | ----------- | ---- |
| [GitLab CI][ci-examples] (Official) | Ruby, Node, Python, etc. | All SSGs presented on this post |
| [Jekyll Themes][jekyll-examples] | Ruby | Jekyll |
| [Middleman Themes][middle-examples] | Ruby | Middleman | 
| [Themes and Templates][themes-templates] | Miscellaneous | Miscellaneous |
| [HTML Themes][html-examples] | GitLab Default | None |

_**Note:** these themes, templates and SSGs were casually chosen and listed on this post to provide you with some distinct GitLab CI configurations._

<a name="faq"></a>

# FAQ


### Is it all of this really free to use?

Yes, it is! On [GitLab.com][sign-up] you can create your free account 
and enjoy all it's [features][gitlab-com], including unlimited private repositories, 
projects, websites and contributors. Also, you'll have 10GB disk space per project 
and unlimited total disk space. Awesome, isn't it? Why don't you take a peek at the [public projects][explore]?

### Where is the `public` folder?

When a build succeeds, you'll find your static site at `Project` -> `Builds` -> `Build ID` -> `Browse`.  
You can download the artifacts from the same screen.

![Build Artifacts - Browse or Download](https://virtuacreative.gitlab.io/images/misc/build-artifacts.png)

### Can I use other SSGs?

Yes, you can use any [SSG][SSGs] available.

### Can I use free SSL/TLS digital certificates?

Yes, absolutely! Would you need a suggestion? You can try [StartSSL] or [Let's Encrypt][lets-encrypt].

### Can I contribute to the themes?

Sure! You are very welcome to contribute to the groups mentioned above. 
To do that, please set your website up and make sure it's working as you expected. 
Then, add an issue to the group you're interested in including a link to your project. After a brief evaluation, 
we'll be glad to fork your project and present your theme to our community!

### Can I use `.php` pages and connect databases with my sites?

No. GitLab Pages host static websites only (HTML, CSS and JS).

<a name="getting-help"></a>

# Getting Help

If you need some help regarding GitLab Pages on GitLab.com, 
feel free to use one of [our channels][get-help].

<a name="conclusions"></a>

# Conclusions

Hopefully now you understand how **GitLab Pages** work and how to create your new site.

Follow [@GitLab][twitter] on Twitter and stay tuned for updates!

We're looking forward to seeing your sites!

# About guest author Marcia Dias Ramos

[Marcia] is a back-end developer specialized in WordPress and Jekyll sites at [Virtua Creative], 
though she does some front-end too. Her daily work is based on version-controlled systems for almost 15 years. 
She is driven by her thirst for knowledge and her hunger to continuously expand her horizons. 
When she is not coding, she is writing articles, studying, teaching or making a contribution to open source projects here and there. 

[doc-artifacts]: http://doc.gitlab.com/ee/ci/yaml/README.html#artifacts
[doc-ciconfig]: http://doc.gitlab.com/ee/ci/quick_start/README.html#creating-a-.gitlab-ci.yml-file
[doc-config-runners]: http://doc.gitlab.com/ee/ci/quick_start/README.html#configuring-a-runner
[doc-contents-ciconfig]: http://doc.gitlab.com/ee/pages/README.html#explore-the-contents-of-.gitlab-ci.yml
[doc-groups]: http://doc.gitlab.com/ee/workflow/groups.html
[doc-images]: http://doc.gitlab.com/ee/ci/yaml/README.html#image-and-services
[doc-jobs]: http://doc.gitlab.com/ce/ci/yaml/README.html#jobs
[doc-only]: http://doc.gitlab.com/ee/ci/yaml/README.html#only-and-except
[doc-runners]: http://doc.gitlab.com/ee/ci/runners/README.html#sts=Runners
[doc-script]: http://doc.gitlab.com/ee/ci/yaml/README.html#script
[doc-shared-runners]: http://doc.gitlab.com/ee/ci/quick_start/README.html#shared-runners
[doc-stages]: http://doc.gitlab.com/ce/ci/yaml/README.html#stages
[ee-yaml-ci]: http://doc.gitlab.com/ee/ci/yaml/README.html
[pages-ee]: http://doc.gitlab.com/ee/pages/README.html
[pages-work]: http://doc.gitlab.com/ee/pages/README.html#getting-started-with-gitlab-pages
[pages-user]: http://doc.gitlab.com/ee/pages/README.html#user-or-group-pages
[pages-project]: http://doc.gitlab.com/ee/pages/README.html#project-pages
[pages-ci-html]: http://doc.gitlab.com/ee/pages/README.html#how-.gitlab-ci.yml-looks-like-when-the-static-content-is-in-your-repository
[pages-ci-jekyll]: http://doc.gitlab.com/ee/pages/README.html#how-.gitlab-ci.yml-looks-like-when-using-a-static-generator
[pages-custom-domain]: http://doc.gitlab.com/ee/pages/README.html#add-a-custom-domain-to-your-pages-website
[quick start guide]: http://doc.gitlab.com/ee/ci/quick_start/README.html

[about-gitlab-com]: https://about.gitlab.com/
[ci-examples]: https://gitlab.com/groups/gitlab-examples#projects
[ci-lint]: https://gitlab.com/ci/lint "Try me!"
[cname-issue]: https://gitlab.com/gitlab-org/gitlab-ee/issues/134
[ee-85]: https://gitlab.com/gitlab-org/gitlab-ee/merge_requests/173
[explore]: https://gitlab.com/explore
[get-help]: https://about.gitlab.com/getting-help
[gitlab83]: https://about.gitlab.com/2015/12/22/gitlab-8-3-released
[gitlab-com]: https://about.gitlab.com/gitlab-com/
[html-examples]: https://gitlab.com/groups/html-themes
[jekyll-examples]: https://gitlab.com/groups/jekyll-themes
[jekyll-253-example]: https://gitlab.com/jekyll-themes/carte-noire
[middle-examples]: https://gitlab.com/groups/middleman-themes
[sign-up]: https://gitlab.com/users/signin "Sign Up!"
[themes-templates]: https://gitlab.com/themes-templates
[twitter]: https://twitter.com/gitlab

[Brunch]: http://brunch.io/
[Bundler]: http://bundler.io/
[Coffee Script]: http://coffeescript.org/
[dns-cname]: https://en.wikipedia.org/wiki/CNAME_record
[git]: https://git-scm.com/about
[git-docs-gitignore]: https://git-scm.com/docs/gitignore
[go]: https://golang.org/
[Harp]: http://harpjs.com/
[Hexo]: https://hexo.io/
[Hyde]: http://hyde.github.io/
[Hugo]: https://gohugo.io/
[Jekyll]: https://jekyllrb.com
[Jekyll Documentation]: http://jekyllrb.com/docs/home/
[Lektor]: https://www.getlektor.com/
[lets-encrypt]: https://letsencrypt.org/
[Liquid]: https://github.com/Shopify/liquid/wiki
[Markdown]: http://daringfireball.net/projects/markdown/
[Metalsmith]: http://www.metalsmith.io/
[Middleman]: https://middlemanapp.com/
[node]: https://nodejs.org/en/
[Python]: https://www.python.org/
[Ruby]: https://www.ruby-lang.org/
[Sass]: http://sass-lang.com/
[SSGs]: https://www.staticgen.com/
[StartSSL]: https://startssl.com/
[wiki-static-websites]: https://en.wikipedia.org/wiki/Static_web_page
[YAML]: http://yaml.org/
[Marcia]: https://gitlab.com/u/virtuacreative
[Virtua Creative]: https://virtuacreative.com.br/en/

[h-1-web]: http://gitlab-examples.gitlab.io/pages-plain-html "The simplest html example"
[h-1-pro]: https://gitlab.com/gitlab-examples/pages-plain-html
[h-1-ci]: https://gitlab.com/gitlab-examples/pages-plain-html/blob/master/.gitlab-ci.yml

[h-2-web]: http://html-themes.gitlab.io/genius/ "A beautiful gallery dark theme"
[h-2-pro]: https://gitlab.com/html-themes/genius
[h-2-ci]: https://gitlab.com/html-themes/genius/blob/master/.gitlab-ci.yml

[h-3-web]: http://html-themes.gitlab.io/artcore/ "A featured template with multiple page layouts and fancy animations"
[h-3-pro]: https://gitlab.com/html-themes/artcore
[h-3-ci]: https://gitlab.com/html-themes/artcore/blob/master/.gitlab-ci.yml

[j-2-web]: https://jekyll-themes.gitlab.io/default-bundler/ "The default Jekyll Theme"
[j-2-pro]: https://gitlab.com/jekyll-themes/default-bundler
[j-2-ci]: https://gitlab.com/jekyll-themes/default-bundler/blob/master/.gitlab-ci.yml

[j-3-web]: http://jekyll-themes.gitlab.io/grayscale/ "A single page Jekyll template"
[j-3-pro]: https://gitlab.com/jekyll-themes/grayscale
[j-3-ci]: https://gitlab.com/jekyll-themes/grayscale/blob/master/.gitlab-ci.yml

[hugo-prev]: https://gitlab-examples.gitlab.io/pages-hugo/
[hugo-proj]: https://gitlab.com/gitlab-examples/pages-hugo
[hugo-ci]: https://gitlab.com/gitlab-examples/pages-hugo/blob/master/.gitlab-ci.yml

[middle-prev]: https://middleman-themes.gitlab.io/middleman/
[middle-proj]: https://gitlab.com/middleman-themes/middleman
[middle-ci]: https://gitlab.com/middleman-themes/middleman/blob/master/.gitlab-ci.yml

[hexo-prev]: https://themes-templates.gitlab.io/hexo/
[hexo-proj]: https://gitlab.com/themes-templates/hexo
[hexo-ci]: https://gitlab.com/themes-templates/hexo/blob/master/.gitlab-ci.yml

[brunch-prev]: https://gitlab-examples.gitlab.io/pages-brunch/
[brunch-proj]: https://gitlab.com/gitlab-examples/pages-brunch
[brunch-ci]: https://gitlab.com/gitlab-examples/pages-brunch/blob/master/.gitlab-ci.yml

[harp-prev]: https://gitlab-examples.gitlab.io/pages-harp/
[harp-proj]: https://gitlab.com/gitlab-examples/pages-harp
[harp-ci]: https://gitlab.com/gitlab-examples/pages-harp/blob/master/.gitlab-ci.yml

[metal-prev]: https://gitlab-examples.gitlab.io/pages-metalsmith/
[metal-proj]: https://gitlab.com/gitlab-examples/pages-metalsmith
[metal-ci]: https://gitlab.com/gitlab-examples/pages-metalsmith/blob/master/.gitlab-ci.yml

[lektor-prev]: https://gitlab-examples.gitlab.io/pages-lektor/
[lektor-proj]: https://gitlab.com/gitlab-examples/pages-lektor
[lektor-ci]: https://gitlab.com/gitlab-examples/pages-lektor/blob/master/.gitlab-ci.yml

[hyde-prev]: https://themes-templates.gitlab.io/hyde/
[hyde-proj]: https://gitlab.com/themes-templates/hyde
[hyde-ci]: https://gitlab.com/themes-templates/hyde/blob/master/.gitlab-ci.yml
