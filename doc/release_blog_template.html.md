---
release_number: "X.X"
title: "Released with XXX and XXX" # Don't mention "GitLab" here.
author: Firstname Lastname
author_gitlab: GitLab.com username
author_twitter: Twitter username
categories: release
image_title: '/images/9_0/9_0-cover-image.jpeg'
description: "GitLab X.X Released with MAIN_CE_FEATURE, MAIN_EE_FEATURE, and much more!"
twitter_image: '/images/tweets/post-screenshot-image.png' # optional
extra_css:
  - release-posts.css
---
<!-- READ THE INSTRUCTIONS AT THE END OF THIS FILE -->

<!-- beginning of the blog post -->

{::options parse_block_html="true" /}

<!-- blog post intro -->
<section class="intro">

Intro (blog landing page): Lorem ipsum dolor sit amet.
Inventore incidunt consequatur blanditiis iusto laborum repudiandae,
eligendi in impedit temporibus numquam reiciendis dolor culpa repellendus.

<!-- more -->

Nisi obcaecati numquam incidunt impedit necessitatibus ipsam qui illum,
praesentium a esse. Cum porro ut id impedit expedita nostrum aut quibusdam,
accusamus laboriosam maiores nesciunt voluptas deleniti harum doloribus
tempore quasi fuga accusantium in odit facilis.

[Register for the release webcast!](link-to-webcast){:.btn .btn-lg .btn-red .webcast-button}

</section>
<!-- end of blog post intro -->

<!-- MVP section -->
<section class="mvp">

![mvp-badge](/images/mvp_badge.png)

## This month’s Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is [MVP_USER_FIRST_NAME](MVP_PROFILE_URL)

Toon contributed [CONTRIBUTION_OF_MVP_USER](CONTRIBUTION_OF_MVP_USER_MR_URL). Thanks MVP_USER_FIRST_NAME!

</section>
<!-- end of MVP section -->

<!-- FEATURE 1 block (major) -->
<section class="middle">

## Feature 1
{: .ee} or {: .ce-ee}

Major feature description

![FEATURE_IMAGE](FEATURE_IMAGE_URL){: .shadow}

[Documentation link](link)

</section>
<!-- end of FEATURE 1 block (major) -->

<!-- FEATURE 2 block -->
<!-- feature 2 text -->
<section class="left">

## Feature 2
{: .ee} or {: .ce-ee}

Feature description

[Documentation link](link)

</section>

<!-- feature 2 image -->
<section class="right">

![FEATURE_IMAGE](FEATURE_IMAGE_URL){: .shadow}

</section>
<!-- end of FEATURE 2 BLOCK -->

<!-- FEATURE 3 BLOCK -->
<!-- feature 3 image -->
<div class="small-reverse">

<section class="left">

![FEATURE_IMAGE](FEATURE_IMAGE_URL){: .shadow}

</section>

<!-- feature 3 text -->
<section class="right">

## Feature 2
{: .ee} or {: .ce-ee}

Explanation

[Documentation link](link)

</section>

</div>
<!-- end of FEATURE 3 BLOCK -->

<!-- REPEAT FEATURE 2/3 BLOCKS FOR FEATURES 4,5,... -->

<!-- OTHER FEATURES BLOCK -->
<section class="middle">

## See all other improvements to GitLab 8.14
{: .ce-ee}

This release has more improvements, including security fixes. Please check out
[the changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG.md) to see all the named changes.

</section>
<!-- end of OTHER FEATURES BLOCK -->


<!-- UPGRADE BAROMETER BLOCK -->
<section class="left vertical-align-top">


### Upgrade barometer

<!-- 

*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME **** 

-->

#### Note

We assume you are upgrading from the latest version. If not, then also consult the upgrade barometers of any intermediate versions you are skipping.
If you are upgrading from a GitLab version prior to 8.0 *and* you have CI enabled, you have to upgrade to GitLab 8.0 [first](https://about.gitlab.com/2015/09/22/gitlab-8-0-released/).

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

</section>
<!-- end of UPGRADE BAROMETER BLOCK -->

<!-- LAST BLOCK -->
<section class="right vertical-align-top">

### Installation

If you are setting up a new GitLab installation please see the
[download GitLab page](https://about.gitlab.com/installation/).

<br>

### Updating

Check out our [update page](https://about.gitlab.com/update/).

<br>

### Enterprise Edition

The mentioned EE only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE](https://about.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](https://about.gitlab.com/products/). No time to upgrade GitLab yourself? A subscription also entitles you to our upgrade and installation services.

</section>

----

[Cover image](LINK-TO-ORIG-IMG) by [Name Surname](LINK-TO-AUTHOR'S-BIO), licensed under [CC X](LINK-TO-LICENCE).
{:.note .text-right}

<!-- end of LAST BLOCK -->

<!-- end of the blog post -->





<!-- Instructions (delete them when accomplished) -->

1. Read through https://about.gitlab.com/handbook/marketing/blog/#quick-guide-for-release-posts
2. Include in the same MR an update to data/promo.yml:

```yaml
text: "GitLab X.X Released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
link: '/AAAA/MM/DD/gitlab-x-x-released/'
```

3. Embedding Videos - replace only the video URL:

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/enMumwvLAug" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

Video caption
{: .figcaption}

Caption is optional.

Ref: https://about.gitlab.com/handbook/marketing/developer-relations/technical-writing/markdown-guide/#videos

4. Screenshots: try to keep the screenshots with the same width for a nicer layout. Add shadow to them whenever they have a white background that can be confused with the post background:

![IMAGE ALT TEXT](IMAGE_URL){: .shadow}

5. Features:
  - First feature is always middle placed, after that you can alternate between features with image on the right or left and again a centered feature.
  - When you place an image in the left section it needs to be reversed on smaller viewports. The class "small-reverse" does that.

6. Align content to the top:

<!-- left aligned section block -->

<section class="left vertical-align-top">

Enter description

</section>

<!-- end of left aligned section block -->

<!-- right aligned section block -->

<section class="right vertical-align-top">

Enter description

</section>

<!-- end of right aligned section block -->

<!-- end of instructions  -->
