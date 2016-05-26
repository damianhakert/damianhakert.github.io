---
layout: post
title: "SSGs Part 2: Modern Static Site Generators" # any ideas for a better title?
date: 2016-04-20 20:00:00 # to be replaced
comments: true
categories: technical overview
author: Marcia Ramos
author_twitter: virtuacreative
image_title: '/images/blogimages/ssg-gitlab-pages-series/ssg-overview-gitlab-pages-cover.jpg'
---

What is a Static Site Generator? What is this for? Why should I use one? Do they have limitations? How can I use them with **GitLab Pages**?

If these questions ring a bell, this **series of posts** is for you! We are preparing three articles around the same theme "**Static Site Generators (SSGs)**".

This is the **Part 2: Modern Static Site Generators**, where we provide you with an overview on the subject.

The previous post was [**Part 1: Dynamic x Static Websites**][part-1], where we explained its differences, pros and cons.

Stay tunned for the next post: **Part 3: Build any SSG site with GitLab Pages**!

**Note:** For this series, we assume you are familiar with web development, curious about 
Static Site Generators, and how to use them with GitLab Pages.
{: .note}

{::comment}
Update this for the first post too ^^^^
{:/comment}

<!-- more -->

----------

### What's in this overview?
{:.no_toc}

- TOC
{: toc}

----

## Modern Static Site Generators

{::comment}
I'm a comment that will not output a regular comment! I'm invisible! Ha! :)
{:/comment}

Static Site Generators (**SSGs**) are software created to automate web development to **output** static sites from **dynamic** writing. So, we code dynamically and publish statically. No pain, all gain.

The most fascinating thing of any SSG is the ability to code fast, save money (on web hosting), and incredibly [decrease the page loading time][page-load] (compared to server-side dynamic webpages). Also, if we have a lot of visitors at the same time, our [static sites have less chance to crash][server-crash] due to server overload [than dynamic ones][site-down].

**Note:** if you want to know more about it, read the previous article for this series: "[Static x Dynamic Websites][part-1]".
{: .note}

### Structure

The structure of SSGs is a combination of features to make static sites development faster and less repetitive. Let's take a quick look at the list below, then describe them one by one.

- Environment
- Template engine
- Markdown engine
- Preprocessors
- Directory structure

### Environment

The **environment**, also called **platform**, consists essentially on the [programming language] the SSG was written in. It will make difference on the configuration, customization, and performance of the SSG. Examples: [Ruby], [Python], [Node JS][node].

<a name="template-engine"></a>

### Template engine

The **template engine** is very important we understand, since all the dynamic structure of our sites will depend on that. It's essential that we choose an SSG with a [templating system][template-sys] that we can use comfortably. Examples: [Liquid] and [Haml] for Ruby, [Twig] for PHP, [Swig] for JavaScript, [Slim] for HTML.

To give you a picture, let's see an example for an HTML file, in which we are using [Liquid Templating Engine][liquid]:

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

As you probably guessed, we have three files for the content that **repeats** sitewide (head, header and footer), which are included to every page using this template. The only thing that is different is the `{{ content }}` of that page, which is written in separate files, and also included dynamically to the template with this tag. Finally, all the files will be **compiled** to regular HTML pages **before** being stored in the web server. This process is called **build**. GitLab Pages **builds** any SSG.

_Advantages over flat HMTL_

- Minimize typography errors ("typos"): all files are considerably reduced, improving readability
- Avoid repetition: every block repeated sitewide would be included to every page, equivalently
- Update faster: if we change something in the file `footer.html`, it will affect the entire site

### Markdown engine

The **markdown engine** is a simplified language we'll use to write our content. Generally, we are allowed to choose which markdown engine we want to use. It is set up on the site configuration. Examples: [Kramdown], [RDiscount], [Redcarpet], [RedCloth].

A blog **post** or a **page** written in [markdown] will most likely start with a **front matter** section containing information about that page or post, and then comes the content just below it. This is an `example.md` file used in a [Jekyll] site, and also an `example.html.md` file for a [Middleman] site:

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

Front matter variables, which are `title`, `date` and `author` for our example above, can be called with template tags all over the site. With Liquid, we'd use `page.title`, `page.date`, `page.author`.

The content for our example would output simply:

```html
<h1>An h1 heading</h1>
<p>Some text.</p>
```

### Preprocessors

The **preprocessors** are made for speed up our development process too. They simplify the way we code, and then compile their own files into standard ones. Examples: [Sass] and [Stylus] for CSS, [CoffeeScript] for JavaScript.

Again, just to give you a picture, check a CSS code block writen in CSS directly, and the other writen in Sass:

CSS:

```css
h1 {
  color: #333;
  padding-top: 30px;
}
p {
  color: #333;
}
```

Sass:

```sass
$clr = #333
h1 
  color: $clr
  padding-top: 30px
p 
  color: $clr
```

In a large-scale styling, saving all curly brackets `{ }` and semi-colons `;` make a lot of difference for who is typing. Also, with Sass variables (e.g., `$clr` above), we can define some standards and apply them all over our stylesheets. In the end, everything will be compiled to regular CSS.

By the way, this Sass example will be compiled exactly to the CSS code above it.

### Directory structure

The **directory structure** is different for each SSG. It's important to study the file tree before we start working with an SSG, otherwise we might face odd build errors that we won't understand solely because we didn't use its structure accordingly. Examples: [Hexo structure][hexo-struc], [Middleman structure][middle-struc], [Jekyll structure][jekyll-struc]. So, just make sure you add new files to the correct directories.

### SSGs built-in features

- Most of SSGs have a pre-installed server for previewing the sites locally
- Some of them also contain in their installation package a LiveReload plugin, so we don't need to refresh the page in our browser every time we save it
- Most of them provide us with built-in compilers for their supported preprocessors

### Blog-Aware SSGs

A blog-aware website generator will create blog-style content, such as lists of content in reverse chronological order, archive lists, and other common blog-style features. How would an SSG do that? 

With their file tree and their template engine. The file tree defines the specific directory for `posts` and the template engine call the posts dynamically.

With a `for` loop through the posts, they can be displayed in a single page, as illustrated below (with [Liquid]):

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

This code means that, **for each post** within the **site posts** (`{% for post in site.posts %}`), all of them would be displayed as items of an unordered list of posts, within links for their respective paths.

Of course, you can adapt the HTML structure according to your needs.

### Supported content

Static servers fully support any language or script interpreted by browsers, known as **client-side** processing. Let's just remember that a static site is essentially composed by three components: the structure (HTML), the layout and styles (CSS), and the behavior (JavaScript).

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

Despite not having the ability to register users nor having admin access for ourselves, with tools like [Firebase] we can power-up our static site with [user authentication][firebase-user-auth]. Find more [cool stuff][firebase-cool-stuff] here, from the same source.

_Contact Forms_

Yes, we can offer contact forms in our static websites. We can't process the **server-side** script in our static-server, but there are some third-party services we can use for that. For example, you can try [Formspree], [FormKeep], [Wufoo], [FoxyForm], [Google Forms] or any other related service . However, if you want to take control over your mail script, you can try the [parse method with SendGrid][sendgrid-parse].

_JavaScript disabled_

Everything based on JavaScript is allowed to be added to our static sites. However, if JavaScript is disabled on the user's browser, those scripts will not work. But there is something we can do to minimize this issue. We can add a [`<noscript>`][no-script] tag to our web pages, containing a message that will be displayed only if JavaScript disabled:

```html
<noscript>Please enable JavaScript on your browser for a better experience with this website!</noscript>
```

## Windup

Hopefully now you understand the logic of Static Site Generators, how can we use them wisely, and what we can and cannot do with them.

In the third post of this series we will bring you a lot of examples for SSGs already running on GitLab Pages, so you'll be able to see and understand different GitLab CI configurations, and create your own.

We already have prepared a bunch of SSGs example projects, you'll find them in the [GitLab Pages][ci-examples] official group. You are very welcome to [contribute][pages-contribute] with new SSGs.

Don't you have an account on [GitLab.com][sign-up] yet? Let's create one! Remember, we can use GitLab Pages to [build any SSG][post-pages] for us and host it for free!

Follow [@GitLab][twitter] on Twitter and stay tuned for updates!

### Useful links

- [GitLab Pages Quick Start][pages] - learn how to get started with GitLab Pages by forking an existing project
- [GitLab Pages on GitLab.com][post-pages] - learn how to setup a GitLab Pages project from strach
- [SSGs Part 1: Static vs Dynamic Websites][part-1] - the first post of this series
- [GitLab Pages Docs][pages-ee] - the official documentation with all the details you might be interested in


<!-- Cover image: https://unsplash.com/photos/6g0KJWnBhxg -->

<!-- IDENTIFIERS --> 

<!-- Alphabetical, miscellaneous -->

[part-1]: #ADD-LINK-HERE

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
[static-x-dynamic-video]: https://www.youtube.com/watch?v=zC03bcuVZHY
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
[pages-contribute]: https://gitlab.com/pages/pages.gitlab.io/blob/master/CONTRIBUTING.md
[themes-templates]: https://gitlab.com/themes-templates
