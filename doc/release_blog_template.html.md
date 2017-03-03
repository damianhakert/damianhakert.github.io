---
release_number: "X.X"
title: "Released with XXX" # Don't mention "GitLab" here.
author: Firstname Lastname
author_gitlab: GitLab.com username
author_twitter: Twitter username
categories: release
image_title: '/images/9_0/9_0-cover-image.jpeg'
description: "With this release XXX"
twitter_image: '/images/tweets/post-screenshot-image.png' # optional
#cta_button_text: 'Watch the <strong>XXX release webcast</strong> live!' # optional
#cta_button_link: 'https://page.gitlab.com/xxx.html' # optional
guest: false # required when the author is not a GitLab Team Member
extra_css:
  - release-posts.css
---


** Read through https://about.gitlab.com/handbook/marketing/blog/#quick-guide-for-release-posts **

** Include in the same MR an update to data/promo.yml: **

```yaml
text: "GitLab X.X Released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
link: '/AAAA/MM/DD/gitlab-x-x-released/'
```

{::options parse_block_html="true" /}








<section class="left vertical-align-top">

Intro and introduce main features here.

<!-- more -->

</section>









<section class="right vertical-align-top">

Replace the youtube url, with the live stream url of release webcast.

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/enMumwvLAug" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

Tune in on DATE for our X.X release webcast with a live demo of X
{: .figcaption}

</section>








<section class="mvp">

![mvp-badge](/images/mvp_badge.png)

### This month’s Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is [MVP_USER_FIRST_NAME](MVP_PROFILE_URL)

Toon contributed [CONTRIBUTION_OF_MVP_USER](CONTRIBUTION_OF_MVP_USER_MR_URL). Thanks MVP_USER_FIRST_NAME!

</section>

<!--more-->






** First feature is always middle placed, after that you can alternate bewteen features with image on the right or left and again a centered feature **

<section class="middle">

## Feature 1
{: .ee} or {: .ce-ee}

Explanation

![FEATURE_IMAGE](FEATURE_IMAGE_URL){: .shadow}

[Documentation link](link)

</section>








<section class="left">

## Feature 2
{: .ee} or {: .ce-ee}

Explanation

[Documentation link](link)

</section>

<section class="right">

![FEATURE_IMAGE](FEATURE_IMAGE_URL){: .shadow}

</section>






** When you place an image in the left section it needs to be reversed on smaller viewports. This div does that. **

<div class="small-reverse">

<section class="left">

![FEATURE_IMAGE](FEATURE_IMAGE_URL){: .shadow}

</section>

<section class="right">

## Feature 2
{: .ee} or {: .ce-ee}

Explanation

[Documentation link](link)

</section>

</div>










<section class="middle">

## See all other improvements to GitLab 8.14
{: .ce-ee}

This release has more improvements, including security fixes. Please check out
[the changelog] to see all the named changes.

[the changelog]: https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG.md

</section>

<section class="left vertical-align-top">

### Upgrade barometer

*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****

#### Note

We assume you are upgrading from the latest version. If not, then also consult the upgrade barometers of any intermediate versions you are skipping.
If you are upgrading from a GitLab version prior to 8.0 *and* you have CI enabled, you have to upgrade to GitLab 8.0 [first](https://about.gitlab.com/2015/09/22/gitlab-8-0-released/).

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

</section>

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

[Cover image](LINK-TO-ORIG-IMG) by [Name Surname](LINK-TO-AUTHOR'S-BIO), licensed under [CC X](LINK-TO-LICENCE).
{:.note}

{::options parse_block_html="false" /}
