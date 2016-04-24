---
layout: post
title: "Static Site Generators: an overview" # any ideas for a better title?
date: 2016-04-20 20:00:00 # to be replaced
comments: true
categories: technical overview
author: Marcia Ramos
author_twitter: virtuacreative
image_title: '/images/blogimages/ssg-overview-gitlab-pages-cover.jpg'
---

What is a Static Site Generator? What is this for? Why should I use one? 
Do they have limitations? How can I use them with **GitLab Pages**?

If these questions ring a bell, this post is for you!

We assume you are familiar with web development, and curious about 
Static Site Generators.

<!-- more -->

----------

### What's in this overview?
{:.no_toc}

- TOC
{: toc}

----

## Static and Dynamic Websites

### A glance at the history

About 25 years ago, in 1990, [Tim Berners-Lee][tim-bl] [published][first-site-1990] 
the [first website in history][first-website]. It was a plain [static webpage] 
with a few tags and links. Three years later, in 1993, the birth of the [dynamic web] 
took place, when the [Common Gateway Interface (CGI)][wiki-cgi] was [first introduced][first-cgi]. 
CGI was a way to let a website run scripts on the web server and display the output. 
From then on, the evolution was huge.

With the advent of processing server-side scripts, 
came forward the [Web Content Management Systems (WCMS)][wcms], allowing us to 
create and maintain databases connected to the internet. Websites with such server-side processing, 
which provide high-level interactivity with the user, are commonly referred as [web applications][web-apps]. 
Some notable examples are [WordPress], [Joomla!], [Drupal], [Magento], [Ghost], and [many others][cms-list].

Besides connecting websites with databases, the dynamic web is an important 
asset to work with [template systems][template-sys]. By using them, developers write fast, update websites faster, 
and reduce mistakes (provoked by repetition).

Unfortunately, with the growing popularity of server-side based websites, came together 
their [vulnerabilities][common-vulnerabilities].  [Security issues] are common among them, 
and there are a lot of [measures][security-web-apps] we need to take to prevent attacks of uncountable natures. 
We need to protect our users, our site, and our server. Everything in between is subjected to hackers attacks.

An intelligent counter-measure for avoiding those security threads and, at the same time, 
maintaining the benefits of templating systems, was the creation of **Static Site Generators (SSGs)**. 
With them, we write dynamically and publish statically.

SSGs came out on the early 2000's, with [Blosxom] in 2003, and [WebGen] in 2004. 
In 2008, [Tom Preston-Werner][tom-pw] released [Jekyll], by far the [most popular SSG][ssgs-list] up to now. 
The interest for Static Site Generators have increased considerably in the last few years, as you can see at 
the chart below, from [Google Trends]:

![Static Site Generators - Google Trends](/images/blogimages/ssg-overview-gitlab-pages-google-trends.png)

## Modern Static Site Generators

The most fascinating thing of any SSG is the ability to code fast, save money (on web hosting), 
and incredibly [increase the page loading time][page-load] (compared to server-side dynamic webpages). 
Also, if we have a lot of visitors at the same time, our [static sites have less chance to crash][server-crash] 
due to server overload [than dynamic ones][site-down]. 

### Structure

The structure of SSGs is a combination of features to make static sites development faster 
and less repetitive. Let's take a quick look at the list below, then describe them one by one.

- Environment
- Template engine
- Markdown engine
- Preprocessors
- Directory structure

### Environment

The **environment**, also called **platform**, consists essentially on the [programming language] 
the SSG was written in. It will make difference on the configuration, customization, and performance of the SSG. 
Examples: [Ruby], [Python], [Node JS][node].

<a name="template-engine"></a>

### Template engine

The **template engine** is very important we understand, since all the dynamic 
structure of our sites will depend on that. It's essential that we choose an SSG 
with a [templating system][template-sys] that we can use comfortably. 
Examples: [Liquid] and [Haml] for Ruby, [Twig] for PHP, [Swig] for JavaScript, [Slim] for HTML.

To give you a picture, let's see an example for an HTML file, in which we are 
using [Liquid Templating Engine][liquid]:

```html
<!DOCTYPE html>
<html lang="en">
	{% include head.html %}
<body>
	{% include header.html %}
	<main class="content">
		{{ content }}
	</main>
	{% include footer.html %}
</body>
</html>
```

_Advantages over flat HMTL_

- Minimize typography errors ("typos"): all files are considerably reduced, improving readability
- Avoid repetition: every block repeated sitewide would be included to every page, equivalently
- Update faster: if we change something in the file `footer.html`, it will affect the entire site

### Markdown engine

The **markdown engine** is a simplified language we'll use to write our content.  
Generally, we are allowed to choose which markdown engine we want to use. 
It is set up on the site configuration. Examples: [Kramdown], [RDiscount], [Redcarpet], [RedCloth].

A blog **post** or a **page** written in [markdown] will most likely start with a **front matter** 
section containing information about that page or post, and then comes the content just below it. 
This is an `example.md` file used in a [Jekyll] site, and also an `example.html.md` file for a [Middleman] site:

```markdown
---
# front matter (between three-dashes block)
title: "Hello World" # post or page title
date: YYYY-MM-DD HH:MM:SS # date and time, e.g. "2016-04-30 11:00:00"
author: "Foo Bar" # a common variable to exemplify 
---

# An h1 heading

Some text.
```

<!-- should we provide a code block showing the output in html? -->

### Preprocessors

The **preprocessors** are made for speed up our development process too. They simplify 
the way we code, and then compile their own files into standard ones. 
Examples: [Sass] and [Stylus] for CSS, [CoffeeScript] for JavaScript.

### Directory structure

The **directory structure** is different for each SSG. It's important to study the 
file tree before we start working with an SSG, otherwise we might face odd build errors, 
that we won't understand solely because we didn't use its structure accordingly. 
Examples: [Hexo structure][hexo-struc], [Middleman structure][middle-struc], [Jekyll structure][jekyll-struc].

### SSGs built-in features

- Most of SSGs have a pre-installed server for previewing the site locally
- Some of them also contain in their installation package a LiveReload plugin, 
so we don't need to refresh the page every time we save it
- Most of them provide us with built-in compilers for their supported preprocessors

### Blog-Aware SSGs

A blog-aware website generator will create blog-style content, such as lists of 
content in reverse chronological order, archive lists, and other common blog-style features. 
How would an SSG do that? With its template engine.

All the posts are archived in a specific directory of the project, depending on the 
SSG directory's structure. With a `for` loop through the posts, they can be 
displayed in a single page, as illustrated below (with [Liquid]):

```liquid
  <ul>
    {% for post in site.posts %}
      <li>
        <span>{{ post.date }}</span>
        <h2>
          <a class="post-link" href="{{ post.url }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>
```

This code means that, **for each post** within the **site posts** (`{% for post in site.posts %}`), 
all of them would be displayed as items of an unordered list of posts. 

Of course, you can adapt the HTML structure according to your needs.

### Supported content

Static servers fully support any language or script interpreted by browsers, 
known as **client-side** processing. Let's just remember that a static site is 
essentially composed by three components: the structure (HTML), 
the layout and styles (CSS), and the behavior (JavaScript).

_Supported languages and file extensions_

- Common file extensions: `.html` / `.css` / `.js` / `.xml` / `.pdf` / `.txt`
- Common media files: [images], [audio], [video], [SVG]

_Supported interactive services (examples)_

- Commenting Systems (e.g., [Disqus], [Facebook Comments], and [many others][comment-systems])
- Live Chat (e.g., [JivoChat], [Tawk.to])
- [PayPal Payments Standard]
- [Facebook Social Plugins]
- [Twitter Kit]
- Google Apps (e.g., [Analytics], [Adwords], [AdSense], etc)
- Site Search Engine (e.g., [Google Search][google-cse], [Swiftype], [Tipue])
- Mailing lists and blog subscriptions (e.g., [MailChimp])

_Supported utilities (examples)_

- HTML/CSS/JS frameworks and libraries. E.g, [Bootstrap], [Foundation], [Normalize], [Modernizr], [Skeleton], [jQuery], [HTML5 Boilerplate][html5-boiler], [Animate.css]
- [Schema.org] markup, making [search engines][schema-seo] to understand our site content better. This is [one of the numerous SEO][seo] techniques
- [Sitemaps], important for [SEO][seo-sitemaps] too. E.g., [Jekyll Sitemap plugin][jek-sitemap], [Middleman Sitemap][middle-sitemap], [Hexo Sitemap plugin][hexo-sitemap]

### Limitations

We've just described what we **can do** with SSGs. Now let's see what we **cannot**.

- Register users
- Have admin access 
- Send emails via `mail()` function
- Use any server-side language or script

### Overcoming the limitations

_Users Authentication_

Despite not having the ability to register users nor having admin access for 
ourselves, with tools like [Firebase] we can power-up our static 
site with [user authentication][firebase-user-auth]. Find more [cool stuff][firebase-cool-stuff] here, from the same source.

_Contact Forms_

Yes, we can offer contact forms in our static websites. We can't process the **server-side** 
script in our static-server, but there are some third-party services we can use for that. 
For example, you can try [Formspree], [FormKeep], [Wufoo], [FoxyForm], [Google Forms] or any 
other related service . However, if you want to take control over your mail script, 
you can try the [parse method with SendGrid][sendgrid-parse].

_JavaScript disabled_

Everything based on JavaScript is allowed to be added to our static sites. However, if 
JavaScript is disabled on the user's browser, those scripts will not work. But there is 
something we can do to minimize this issue. We can add a [`<noscript>`][no-script] tag 
to our web pages, containing a message that will be displayed only if JavaScript disabled:

```html
<noscript>Please enable JavaScript on your browser for a better experience with this website!</noscript>
```

## Build an SSG site with GitLab Pages

You can use [GitLab Pages] to host and build **any** [SSG][ssgs] available! 
You can also use custom domains, SSL/TLS certificates, create as many sites as you want, 
and deploy your site from **private repositories**. That's all for free. 
On the article "[Hosting on GitLab.com with GitLab Pages][post-pages]" you will 
find this information and a detailed step-by-step guide to walk you through the process. 
See also the [quick start guide][pages] and the [official documentation][pages-ee] for further information.

## SSGs examples

On the following tables you can explore some examples of SSGs sites **built with 
GitLab Pages** and hosted by GitLab. 

The key for building your site with GitLab Pages is the GitLab CI configuration 
file, called `.gitlab-ci.yml`.  If you are not familiar with GitLab Pages, you can 
follow through [this tutorial][post-pages] before pushing your site to GitLab.

On the tables below, there are some examples we've gathered for you, organized by their respective environments.

### Environment: [Ruby]

| SSG | Website URL | Project URL | Configuration |
| --- | ----------- | ----------- | -------------- |  
| [Jekyll] | [Default Theme][j-2-web] | [Source on GitLab][j-2-pro] | [Building Jekyll 3.1.2 with Bundler][j-2-ci] |
| [Middleman] | [Default Theme][middle-prev] | [Source on GitLab][middle-proj] | [Default + Bundler `ENV=PRODUCTION`][middle-ci] |
| [Nanoc] | [Default Theme][nanoc-prev] | [Source on GitLab][nanoc-proj] | [Default][nanoc-ci] |
| [Octopress] | [Default Theme][octo-prev] | [Source on GitLab][octo-proj] | [Default][octo-ci] |

### Environment: [Node JS][node]

| SSG | Website URL | Project URL | Configuration |
| --- | ----------- | ----------- | -------------- |
| [Hexo] | [Hueman Theme][hexo-prev] | [Source on GitLab][hexo-proj] | [Default + `test` job][hexo-ci] |
| [Brunch] | [Default Skeleton][brunch-prev] | [Source on GitLab][brunch-proj] | [Default][brunch-ci] |
| [Harp] | [Default Theme][harp-prev] | [Source on GitLab][harp-proj] | [Default][harp-ci] |
| [Metalsmith] | [Default Theme][metal-prev] | [Source on GitLab][metal-proj] | [Default][metal-ci] |
| [GitBook] | [Default Theme][book-prev] | [Source on GitLab][book-proj] | [Default][book-ci] |

### Environment: [Python]

| SSG | Website URL | Project URL | Configuration |
| --- | ----------- | ----------- | -------------- |
| [Pelican] | [Default Theme][pelican-prev] | [Source on GitLab][pelican-proj] | [Default][pelican-ci] |
| [Lektor] | [Default Theme][lektor-prev] | [Source on GitLab][lektor-proj] | [Default][lektor-ci] |
| [Hyde] | [Default Theme][hyde-prev] | [Source on GitLab][hyde-proj] | [Default + `test` job][hyde-ci] |

### Environment: [Go Lang][go]

| SSG | Website URL | Project URL | Configuration |
| --- | ----------- | ----------- | -------------- |
| [Hugo] | [Lanyon Theme][hugo-prev] (Default) | [Source on GitLab][hugo-proj] | [Default][hugo-ci] |

### More Examples
{: #groups}

On the following GitLab groups you can find even more examples.

| Group | Environment | SSGs |
| ----- | ----------- | ---- |
| [Pages][ci-examples] (Official) | Ruby, Node, Python, etc. | All SSGs presented on this post |
| [Jekyll Themes][jekyll-examples] | Ruby | Jekyll |
| [Middleman Themes][middle-examples] | Ruby | Middleman |
| [Themes and Templates][themes-templates] | Miscellaneous | Miscellaneous |

_**Note:** these themes, templates, and SSGs were casually chosen, and listed on 
this post to provide you with some distinct GitLab CI configurations._

## FAQ: which SSG should I get started with?

This is a tricky question. There is no easy answer for it. Perhaps the best way 
to choose an SSG is installing three or four of them locally and give them a try. [This list][ssgs-more] might help too. 

However, if you don't know where to start, and you never used any Static Site Generator 
before, I suggest you to get started with [Jekyll]. Why?

- It's very well documented
- If you search the web for information you'll find plenty
- Its template engine is rigid. Meaning, there's no chance to mess up the code
- It is easy to learn

But this was merely a suggestion. There are better ways to choose. For example, 
if you are a programmer, you could choose the SSG according to the language it's 
written in (Ruby, Node JS, Python, etc), picking up one you're familiar with. 
If you are a PHP developer, you might want to choose an SSG with a PHP template engine. And so on.

## Getting Help

If you need some help regarding GitLab Pages on GitLab.com,
feel free to use one of [our channels][get-help]. You can also 
open an issue on the [Pages][pages-issues] group.

## Conclusions

<!-- TO BE IMPROVED -->

Hopefully, we got you inspired to start working with Static Site 
Generators and you comprehend what they are and how do they work. 

If you already work with an SSG, please [let us know][CTA] which one you prefer. 
It's a quick survey that will only take a minute, and your participation means a lot to us!

<!-- REVIEWER: PLEASE CHECK THIS GOOGLE FORM! IF WE DECIDE TO USE IT, 
I WILL NEED TO ADD SOMEONE FROM GITLAB AS COLLABORATOR OR OWNER -->

You are invited to contribute with new SSGs, or with your cool themes and 
templates, to the [groups](#groups) mentioned earlier.

Don't you have an account on [GitLab.com][sign-up] yet? Let's create one! 
Remember, we can use GitLab Pages to [build any SSG][post-pages] for us and host it for free!

Follow [@GitLab][twitter] on Twitter and stay tuned for updates!

## About guest author Marcia Ramos
{:.no_toc}

[Marcia] is a back-end developer specialized in WordPress and Jekyll sites at [Virtua Creative],
though she does some front-end too. Her daily work is based on version-controlled 
systems for almost 15 years.  She is also experienced in technical writing.

<!-- Cover image: https://unsplash.com/photos/6g0KJWnBhxg -->

<!-- "host for free" is repeated 3 times as a SEO keyword -->

<!-- IDENTIFIERS --> 

<!-- Alphabetical, miscellaneous -->

[AdSense]: https://support.google.com/adsense/answer/181950
[Adwords]: https://support.google.com/adwords/answer/6331314
[Analytics]: https://developers.google.com/analytics/devguides/collection/analyticsjs/
[audio]: //www.w3schools.com/html/html5_audio.asp
[cms-list]:  https://en.wikipedia.org/wiki/List_of_content_management_systems
[comment-systems]: //brianshim.com/webtricks/add-a-comment-wall-to-your-website/
[common-vulnerabilities]:  https://www.toptal.com/security/10-most-common-web-security-vulnerabilities
[Disqus]: https://disqus.com/
[drupal]: https://www.drupal.org/
[dynamic web]:  https://en.wikipedia.org/wiki/Dynamic_web_page
[Facebook Comments]: https://developers.facebook.com/docs/plugins/comments
[Facebook Social Plugins]: https://developers.facebook.com/docs/plugins
[firebase]: https://www.firebase.com/
[firebase-cool-stuff]: https://www.firebase.com/docs/web/examples.html
[firebase-user-auth]: //jsfiddle.net/firebase/a221m6pb/
[first-cgi]:  //royal.pingdom.com/2007/12/07/a-history-of-the-dynamic-web/
[first-site-1990]:  //www.telegraph.co.uk/technology/internet/12061803/The-worlds-first-website-went-online-25-years-ago-today.html
[first-website]: //info.cern.ch/hypertext/WWW/TheProject.html
[FormKeep]: https://formkeep.com/
[Formspree]: https://formspree.io/
[foxyform]: //www.foxyform.com/
[ghost]: https://ghost.org/
[google-cse]: https://support.google.com/customsearch/answer/4513751?hl=en&ref_topic=4513742&rd=1
[Google Forms]: https://www.google.com/forms/about/
[google trends]: //www.google.com.br/trends/explore?hl=en-US#q=%22static+site+generator%22&cmpt=q&tz=Etc/GMT%2B3&tz=Etc/GMT%2B3
[HTML5]: //www.w3schools.com/html/html5_intro.asp
[images]: //vormplus.be/blog/article/using-images-in-your-html5-document
[JivoChat]: https://www.jivochat.com/
[joomla!]: https://www.joomla.org/
[MailChimp]: //mailchimp.com/
[magento]: https://magento.com/
[no-script]: //www.w3schools.com/tags/tag_noscript.asp
[page-load]: https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/#dynamic-websites-and-caching
[PayPal Payments Standard]: https://developer.paypal.com/docs/classic/button-manager/integration-guide/SOAP/ButtonMgrOverview
[programming language]: https://en.wikipedia.org/wiki/Programming_language
[Schema.org]: //schema.org/
[schema-seo]: //schema.org/docs/gs.html
[security issues]: https://www.cs.columbia.edu/~smb/classes/f06/l09.pdf
[security-web-apps]: https://msdn.microsoft.com/en-us/library/zdh19h94.aspx
[sendgrid-parse]: https://sendgrid.com/blog/send-email-static-websites-using-parse/
[SEO]: //www.wordstream.com/blog/ws/2014/03/20/schema-seo
[seo-sitemaps]: //www.webconfs.com/importance-of-sitemaps-article-17.php
[server-crash]: //noahveltman.com/static-dynamic/
[sitemaps]: https://support.google.com/webmasters/answer/156184?hl=en
[site-down]: //www.sitepoint.com/wordpress-vs-jekyll-might-want-make-switch/#2-wordpress-struggles-under-heavy-load
[ssgs-list]: https://staticsitegenerators.net/
[ssgs-more]: https://iwantmyname.com/blog/2014/05/the-updated-big-list-of-static-website-generators-for-your-site-blog-or-wiki
[static webpage]: https://en.wikipedia.org/wiki/Static_web_page
[SSGs]: https://www.staticgen.com/
[svg]: https://en.wikipedia.org/wiki/Scalable_Vector_Graphics
[swiftype]: https://swiftype.com/
[Tawk.to]: https://www.tawk.to/
[template-sys]: https://en.wikipedia.org/wiki/Web_template_system
[tim-bl]: https://en.wikipedia.org/wiki/Tim_Berners-Lee
[tipue]: //www.tipue.com/
[tom-pw]: https://en.wikipedia.org/wiki/Tom_Preston-Werner
[Twitter Kit]: https://dev.twitter.com/web/overview
[video]: //www.w3schools.com/html/html5_video.asp
[wcms]: https://en.wikipedia.org/wiki/Web_content_management_system
[web-app-security]: https://en.wikipedia.org/wiki/Web_application_security
[web-apps]: https://en.wikipedia.org/wiki/Web_application
[webgen]: //webgen.gettalong.org/news.html#webgen-0-1-0-released
[wiki-cgi]:  https://en.wikipedia.org/wiki/Common_Gateway_Interface
[wiki-static-websites]: https://en.wikipedia.org/wiki/Static_web_page
[wordpress]: https://wordpress.org/
[Wufoo]: //www.wufoo.com/
[Marcia]: https://gitlab.com/u/virtuacreative
[Virtua Creative]: https://virtuacreative.com.br/en/

<!-- GitLab -->

[CTA]: https://docs.google.com/forms/d/1I_0PFB7MFm140hoFro-SfeMpU-VS71QmMfO8_4fj2pM/viewform

[about-gitlab-com]: https://about.gitlab.com/
[get-help]: https://about.gitlab.com/getting-help
[gitlab-com]: https://about.gitlab.com/gitlab-com/
[pages]: https://pages.gitlab.io
[pages-ee]: //doc.gitlab.com/ee/pages/README.html
[pages-issues]: https://gitlab.com/pages/pages.gitlab.io/issues
[post-pages]: https://about.gitlab.com/2016/04/07/gitlab-pages-setup/
[sign-up]: https://gitlab.com/users/sign_in "Sign Up!"
[twitter]: https://twitter.com/gitlab

<!-- SSGs -->

[blosxom]: //blosxom.sourceforge.net/
[Brunch]: //brunch.io/
[GitBook]: https://www.gitbook.com/
[Harp]: //harpjs.com/
[Hexo]: https://hexo.io/
[Hyde]: //hyde.github.io/
[Hugo]: https://gohugo.io/
[Jekyll]: https://jekyllrb.com
[Lektor]: https://www.getlektor.com/
[Metalsmith]: //www.metalsmith.io/
[Middleman]: https://middlemanapp.com/
[Nanoc]: //nanoc.ws/
[Octopress]: //octopress.org/
[Pelican]: //blog.getpelican.com/

[hexo-struc]: https://hexo.io/docs/setup.html
[jekyll-struc]: https://jekyllrb.com/docs/structure/
[middle-struc]: https://middlemanapp.com/basics/directory-structure/

[jek-sitemap]: https://github.com/jekyll/jekyll-sitemap
[middle-sitemap]: https://middlemanapp.com/advanced/sitemap/
[hexo-sitemap]: https://github.com/hexojs/hexo-generator-sitemap

<!-- Languages, preprocessors, libraries and frameworks -->

[animate.css]: https://daneden.github.io/animate.css/
[Bootstrap]: //getbootstrap.com
[CoffeeScript]: //coffeescript.org/
[Foundation]: //foundation.zurb.com/
[go]: https://golang.org/
[haml]: //haml.info/
[html5-boiler]: https://html5boilerplate.com/
[jquery]: //code.jquery.com/
[kramdown]: //kramdown.gettalong.org/
[liquid]: https://shopify.github.io/liquid/
[markdown]: https://en.wikipedia.org/wiki/Markdown
[modernizr]: https://modernizr.com/
[node]: https://nodejs.org/en/
[normalize]: https://necolas.github.io/normalize.css/
[Python]: https://www.python.org/
[rdiscount]: //dafoster.net/projects/rdiscount/
[redcarpet]: https://github.com/vmg/redcarpet
[redcloth]: //redcloth.org/
[Ruby]: https://www.ruby-lang.org/
[Sass]: //sass-lang.com/
[skeleton]: http://getskeleton.com/
[Slim]: //slim-lang.com/
[Stylus]: //stylus-lang.com/
[swig]: //paularmstrong.github.io/swig/
[twig]: //twig.sensiolabs.org/

<!-- Groups -->

[ci-examples]: https://gitlab.com/groups/pages
[jekyll-examples]: https://gitlab.com/groups/jekyll-themes
[middle-examples]: https://gitlab.com/groups/middleman-themes
[themes-templates]: https://gitlab.com/themes-templates

<!-- Examples -->

[j-2-web]: https://jekyll-themes.gitlab.io/default-bundler/ "The default Jekyll Theme"
[j-2-pro]: https://gitlab.com/jekyll-themes/default-bundler
[j-2-ci]: https://gitlab.com/jekyll-themes/default-bundler/blob/master/.gitlab-ci.yml

[j-3-web]: https://jekyll-themes.gitlab.io/grayscale/ "A single page Jekyll template"
[j-3-pro]: https://gitlab.com/jekyll-themes/grayscale
[j-3-ci]: https://gitlab.com/jekyll-themes/grayscale/blob/master/.gitlab-ci.yml

[hugo-prev]: https://pages.gitlab.io/hugo/
[hugo-proj]: https://gitlab.com/pages/hugo
[hugo-ci]: https://gitlab.com/pages/hugo/blob/master/.gitlab-ci.yml

[middle-prev]: https://middleman-themes.gitlab.io/middleman/
[middle-proj]: https://gitlab.com/middleman-themes/middleman
[middle-ci]: https://gitlab.com/middleman-themes/middleman/blob/master/.gitlab-ci.yml

[hexo-prev]: https://themes-templates.gitlab.io/hexo/
[hexo-proj]: https://gitlab.com/themes-templates/hexo
[hexo-ci]: https://gitlab.com/themes-templates/hexo/blob/master/.gitlab-ci.yml

[brunch-prev]: https://pages.gitlab.io/brunch/
[brunch-proj]: https://gitlab.com/pages/brunch
[brunch-ci]: https://gitlab.com/pages/brunch/blob/master/.gitlab-ci.yml

[harp-prev]: https://pages.gitlab.io/harp/
[harp-proj]: https://gitlab.com/pages/harp
[harp-ci]: https://gitlab.com/pages/harp/blob/master/.gitlab-ci.yml

[metal-prev]: https://pages.gitlab.io/metalsmith/
[metal-proj]: https://gitlab.com/pages/metalsmith
[metal-ci]: https://gitlab.com/pages/metalsmith/blob/master/.gitlab-ci.yml

[lektor-prev]: https://pages.gitlab.io/lektor/
[lektor-proj]: https://gitlab.com/pages/lektor
[lektor-ci]: https://gitlab.com/pages/lektor/blob/master/.gitlab-ci.yml

[hyde-prev]: https://pages.gitlab.io/hyde/
[hyde-proj]: https://gitlab.com/pages/hyde
[hyde-ci]: https://gitlab.com/pages/hyde/blob/master/.gitlab-ci.yml

[nanoc-prev]: https://pages.gitlab.io/nanoc/
[nanoc-proj]: https://gitlab.com/pages/nanoc
[nanoc-ci]: https://gitlab.com/pages/nanoc/blob/master/.gitlab-ci.yml

[pelican-prev]: https://pages.gitlab.io/pelican/
[pelican-proj]: https://gitlab.com/pages/pelican
[pelican-ci]: https://gitlab.com/pages/pelican/blob/master/.gitlab-ci.yml

[book-prev]: https://pages.gitlab.io/gitbook/
[book-proj]: https://gitlab.com/pages/gitbook
[book-ci]: https://gitlab.com/pages/gitbook/blob/pages/.gitlab-ci.yml

[octo-prev]: https://pages.gitlab.io/octopress/
[octo-proj]: https://gitlab.com/pages/octopress
[octo-ci]: https://gitlab.com/pages/octopress/blob/master/.gitlab-ci.yml