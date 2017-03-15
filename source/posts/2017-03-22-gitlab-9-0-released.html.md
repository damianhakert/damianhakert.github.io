---
release_number: "9.0"
title: "Released with Subgroups and Deploy Boards"
author: Victor Wu
author_gitlab: victorwu
author_twitter: victorwu416
categories: release
image_title: '/images/9_0/9_0-cover-image.jpeg'
description: "GitLab 9.0 Released with Subgroups, Deploy Boards, and much more!"
twitter_image: '/images/tweets/gitlab-9-0-released.jpg'
extra_css:
  - release-posts.css
---

<!-- READ THE INSTRUCTIONS AT THE END OF THIS FILE -->

<!-- beginning of the blog post -->

{::options parse_block_html="true" /}

<!-- blog post intro -->
<section class="middle vertical-align-top">

Today we are releasing GitLab 9.0, 18 months after [releasing 8.0](/2015/09/22/gitlab-8-0-released/). 1.5 years is a lifetime in the software world, and we've made [signficant advances to GitLab](/release-list/) during this period, shipping a minor version every single month. We're humbled by our community continuing to actively create and comment in numerous issues, as well as directly contributing source code. GitLab CE now has over 47,000 commits, more than doubling the [20,000 count back in 8.1](/2015/10/22/gitlab-8-1-released/). We've also grown quickly during this time. We had just under 25 team members in 7 countries when we shipped 8.0. Today, we have [over 150 folks spread across 37 countries](/team/). That has helped us now to ship self-hosted GitLab in three versions, [Community Edition (CE), Enterprise Edition Starter (EES), and Enterprise Edition Premium (EEP)](/products/).

We're on a [mission](/strategy/#mission) to enable *everyone to contribute*. GitLab 9.0 makes a significant step in this direction, with the arrival of **Subgroups** (groups within groups). This powerful new paradigm allows for truly team-based and team-first collaboration in even very large organizations with many different departments. GitLab helps break down silos in your organization so that indeed everyone can contribute. [More](#subgroups)

[GitLab 8.0](/2015/09/22/gitlab-8-0-released/) was a pivotal release as it fully integrated [Continuous Integration Continuous Deployment (CI/CD)](/gitlab-ci/) into the platform, giving users a complete solution to create, integrate, and deploy code changes in a single coherent product. 1.5 years later now with GitLab 9.0 EEP, we're shipping Deploy Boards, another signficant advancment in CI/CD, that helps users reliably deploy their applications to enterprise environments. [More](#deploy-boards)

[Register for the release webcast!](link-to-webcast){:.btn .btn-lg .btn-red .webcast-button}

</section>
<!-- end of blog post intro -->

<!-- MVP section -->
<section class="mvp">

![mvp-badge](/images/mvp_badge.png)

## This month’s Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is [Name Surname](https://gitlab.com/handle)

Name contributed to [feature](#CONTRIBUTION_OF_MVP_USER_MR_URL). Thanks Name!

</section>
<!-- end of MVP section -->

<!-- FEATURE 1 block (major) -->
<section class="middle">

## Subgroups
{: .ce}

GitLab has always been the simplest way for people to collaborate on code in a project. Just create a project, and you're on your way from idea to production. Users have _also_ told us that they want GitLab to be a team-based collaboration tool that supports hierarchal team structures sharing different code repositories. With 9.0, we are excited to ship our brand new version of GitLab groups that allows for groups within groups, i.e. "subgroups". In fact, you can now create 20 levels down of groups. Each group at each level is itself as a first-class citizen GitLab group, with the ability to have multiple projects. The new version of groups thus enables you to have a hierarchy of code repositories.

In this example, the organization represented by the `gitlab-nested` group has a design team, a backend team, and a frontend team, each represented by a group within the `gitlab-nested` group. The `design` and `backend` groups have further groups within them.

![Subgroups](/images/9_0/gitlab-nested.png){: .shadow}

Feel free to look at and provide feedback on what we are working on for [groups in future releases of GitLab]((https://gitlab.com/gitlab-org/gitlab-ce/issues?label_name%5B%5D=nested+groups)).

[Documentation link](https://docs.gitlab.com/ce/user/group/subgroups/)

</section>
<!-- end of FEATURE 1 block (major) -->

<!-- FEATURE 2 block -->
<!-- feature 2 text -->
<section class="left">

## Deploy Boards
{: .eep}

We're introducing Deploy Boards for GitLab Enterprise Edition Premium (EEP).

XXXXXXXXX MISSING!!!!!!!!! XXXXXXXXX

Accusantium quos distinctio assumenda, officiis ullam alias quia placeat est! Suscipit consequuntur vitae obcaecati assumenda provident, ut doloremque accusantium laudantium quos accusamus nulla aliquid voluptatibus corrupti dolor officiis repudiandae possimus, vero incidunt eligendi dolores illo aperiam! Ullam beatae expedita cumque provident suscipit veniam ipsa, eius consequatur! Ab, ducimus. Quam ducimus modi ullam, ad natus recusandae et eveniet ea veniam cumque vel facere cupiditate tempore facilis repellendus quod dolorem nemo magni ab corrupti voluptatum! Cum ab, facilis, fugiat qui ea, hic, minus mollitia itaque illum perspiciatis vel fugit facere magni nisi inventore autem! Accusamus dolorum, iure earum quae eligendi deserunt atque.

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

## Export Issues
{: .ees}

Feature description

XXXXXXXXX MISSING!!!!!!!!! XXXXXXXXX

Accusantium quos distinctio assumenda, officiis ullam alias quia placeat est! Suscipit consequuntur vitae obcaecati assumenda provident, ut doloremque accusantium laudantium quos accusamus nulla aliquid voluptatibus corrupti dolor officiis repudiandae possimus, vero incidunt eligendi dolores illo aperiam! Ullam beatae expedita cumque provident suscipit veniam ipsa, eius consequatur! Ab, ducimus. Quam ducimus modi ullam, ad natus recusandae et eveniet ea veniam cumque vel facere cupiditate tempore facilis repellendus quod dolorem nemo magni ab corrupti voluptatum! Cum ab, facilis, fugiat qui ea, hic, minus mollitia itaque illum perspiciatis vel fugit facere magni nisi inventore autem! Accusamus dolorum, iure earum quae eligendi deserunt atque.

[Documentation link](link)

</section>

</div>
<!-- end of FEATURE 3 BLOCK -->

<!-- REPEAT FEATURE 2/3 BLOCKS FOR FEATURES 4,5,... -->

<!-- FEATURE 4 block -->
<!-- feature 4 text -->
<section class="left">

## Performance Monitoring
{: .ee}

(Improvements to Prometheus)

XXXXXXXXX MISSING!!!!!!!!! XXXXXXXXX

Accusantium quos distinctio assumenda, officiis ullam alias quia placeat est! Suscipit consequuntur vitae obcaecati assumenda provident, ut doloremque accusantium laudantium quos accusamus nulla aliquid voluptatibus corrupti dolor officiis repudiandae possimus, vero incidunt eligendi dolores illo aperiam! Ullam beatae expedita cumque provident suscipit veniam ipsa, eius consequatur! Ab, ducimus. Quam ducimus modi ullam, ad natus recusandae et eveniet ea veniam cumque vel facere cupiditate tempore facilis repellendus quod dolorem nemo magni ab corrupti voluptatum! Cum ab, facilis, fugiat qui ea, hic, minus mollitia itaque illum perspiciatis vel fugit facere magni nisi inventore autem! Accusamus dolorum, iure earum quae eligendi deserunt atque.

[Documentation link](link)

</section>

<!-- feature 4 image -->
<section class="right">

![FEATURE_IMAGE](FEATURE_IMAGE_URL){: .shadow}

</section>
<!-- end of FEATURE 4 BLOCK -->

<!-- OTHER FEATURES BLOCK -->
<section class="middle">

## Other Improvements in GitLab 9.0

### Performance Improvements
{: .ce}

As with every release, we've worked hard to make GitLab faster. With 9.0 in particular, we've put a particular focus on noticeable performance improvements across the board. Most notably searching with ElasticSearch as well as dealing with issue labels.

[Take a look](https://gitlab.com/gitlab-org/gitlab-ce/issues?label_name%5B%5D=performance&milestone_title=9.0&scope=all&state=closed) at the full list of performance improvements in 9.0 and keep an eye out for further improvements in upcoming releases as GitLab continues to get faster, especially for large installations.

Did you know, [Gitlab.com](https://gitlab.com) is "merely" a massive-scale implementation of GitLab EE with hundreds of thousands of users? This just shows the level of scale that you can run GitLab EE and these performance improvements should start making a noticeable difference to the speed and reliability of GitLab.com.


### Updated Navigation
{: .ce}

Here at GitLab, most of our business functions (not just product development) occur in GitLab.com itself. So we definitely understand the importance of navigation. We want to make it frictionless, intuitive, and efficient for you to perform your daily tasks, especially if you are using GitLab for several hours each day.

Navigation design is a crucial component in achieving that, and with 9.0, we have modernized the interface, leveraging best practices from our design team, as well as incorporating feedback from our user research. At first glance, it doesn't like a lot has changed. But that was intentional. We meticuolously anlayzed what was already working well, and changed only the problem areas.

One major change is the pop-in sidebar. That has been now replaced by a less intrusive dropdown menu in the top left, that doesn't unnecessarily cover too much screen content. Previously there was a dropdown menu for settings, accessed from a cog icon at the top right for the project and group pages. These have been now pulled into the existing tabbed menu interface, harmonizing and simplifying the entire experience. We also brought back the ability the create a new project quickly, by simply clicking the `+` button at the top right.

![Navigation](/images/9_0/navigation.png){: .shadow}

### Reorder Issues in Board List
{: .ce}

[Issue Boards](/solutions/issueboard/) are a great way to manage issues moving through the different stages ("lists" in GitLab), in order to quickly get an idea to production. But users often want to further represent order or priority of issues within a single list. With 9.0, you can now reorder issues within lists, using the intutitive and existing drag and drop mechanism. Learn more in the [documentation](https://docs.gitlab.com/ce/user/project/issue_board.html).

![Boards Reorder](/images/9_0/boards_reorder.gif){: .shadow}

### Boards with Milestones
{: .ees}

A GitLab Issue Board enables you manage a group of issues within a single milestone, but requires you to select the associated milestone filter each time you navigate to it. With GitLab 9.0 EES, you can now create an Issue Board that is associated to a specific milestone. This allows you to create unique boards for individual milestones. As you plan and execute work in each new milestone, we suggest you keep creating new boards. This allows you to conveniently work in multiple boards if you are straddling between milestones, and it also allows you to save and look back at previous completed milestones too. Learn more in the [documentation](https://docs.gitlab.com/ce/user/project/issue_board.html).

![Boards Milestone](/images/9_0/boards_milestone.gif){: .shadow}

### Tokenized Filter and Search in Issues and Merge Requests
{: .ees}

We first introduced the new streamlined filter and search interface for issues in [8.16](/2017/01/22/gitlab-8-16-released/). With 9.0, we are tokenizing the filter attributes for even more visual clarity. Many other places in GitLab deserve this new interface. We're bringing it to merge requests in 9.0, and will roll it out to other parts of GitLab in future releases.

![Merge Requests New Search Interface](/images/9_0/mr_new_search_interface.png){: .shadow}

### New Branch for Bare Projects
{: .ce}

When you click the `New branch` button in an issue, you may want to start creating code right away.
But for a project with an empty repository, GitLab, prior to 9.0, stubbornly sends you back to the main project view when you click the button.
With 9.0, when you do click the `New branch` in an empty repository project, GitLab automatically creates the master branch, commits a blank `README.md` file to it, and creates and redirects you to a new branch based on the issue title.
If your [project is already configured with a deployment service][project-services-doc] (e.g. Kubernetes), GitLab takes one step further and prompts you to set up [auto deploy][auto-deploy-doc] by helping you create a `.gitlab-ci.yml` file.

[project-services-doc]: https://docs.gitlab.com/ce/user/project/integrations/project_services.html
[auto-deploy-doc]: https://docs.gitlab.com/ce/ci/autodeploy/index.html

![New Branch for Repo-less Projects in GitLab 9.0](/images/9_0/no_repo_new_branch.png){: .shadow}

### Native Unicode Emojis 🔥

Unicode emojis allow for a more consistent feel with the rest of your OS and equates to you being add add emojis faster 😉. We were able to get rid some of the hefty images and JSON payloads and generate the awards emoji menu immediately instead of having a loading spinner to wait for an async response. 👯 ✨ 🏋 👌

![](/images/9_0/native_unicode_emojis.gif){: .shadow}

### GitLab CI

To follow conventions of naming across GitLab, and to further move away from the
`build` term and toward `job`, CI variables [have been renamed](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/9756) for the 9.0
release.

| 8.X name | 9.0 name |
|----------|----------|
| `CI_BUILD_ID` | `CI_JOB_ID` |
| `CI_BUILD_REF` | `CI_COMMIT_SHA` |
| `CI_BUILD_TAG` | `CI_COMMIT_TAG` |
| `CI_BUILD_REF_NAME` | `CI_COMMIT_REF_NAME` |
| `CI_BUILD_REF_SLUG` | `CI_COMMIT_REF_SLUG` |
| `CI_BUILD_NAME` | `CI_JOB_NAME` |
| `CI_BUILD_STAGE` | `CI_JOB_STAGE` |
| `CI_BUILD_REPO` | `CI_REPOSITORY` |
| `CI_BUILD_TRIGGERED` | `CI_PIPELINE_TRIGGERED` |
| `CI_BUILD_MANUAL` | `CI_JOB_MANUAL` |
| `CI_BUILD_TOKEN` | `CI_JOB_TOKEN` |

The old variables will still work, but will be deprecated soon.

### Impersonation Tokens

Alongside the new API, we've also added [Impersonation tokens](https://gitlab.com/gitlab-org/gitlab-ce/issues/25367). If you've ever built a bot or a piece of functionality with our API, you'll often have to retrieve a token via oAuth. This can sometimes be undesirable and cumbersome to have to go through a UI flow in order to retrieve this token. Administrators of a GitLab instance can now retrieve an impersonation token on behalf of a user to make this process a lot easier and centrally controlled. This process will also alleviate any issues caused by users inadvertently invalidating tokens in use for other applications.

### Create Mattermost Team when Creating GitLab Group
{: .ce}

Sometimes chatting with your workgroup is the best way to get an idea rolling. To help you with that, GitLab integrates with [Mattermost](https://about.mattermost.com/). With GitLab 9.0, setting up a [Mattermost team](https://docs.gitlab.com/omnibus/gitlab-mattermost/README.html#gitlab-mattermost) for your GitLab group to chat and collaborate is effortless. When creating a GitLab group, select the appropriate checkbox, and GitLab will tell your Mattermost instance to create a team with the same name.

![Create GitLab Group Create Mattermost Team](/images/9_0/group-creation-mm.png){: .shadow}

### More control over HTTP Strict Transport Security settings

Now you fine tune your Strict Transport Security enforcement just by changing settings in your Omnibus GitLab config.
[Learn more][hsts-settings-doc] how you can use HTTP Strict Transport Security to provide your installation with even better protection against MITM attacks.

[hsts-settings-doc]: https://docs.gitlab.com/omnibus/settings/nginx.html#setting-http-strict-transport-security

### API V4

Our [API](https://docs.gitlab.com/ee/api/) is a great way to automate tasks, control and automate GitLab in new and powerful ways. Over time, we have continued to improve our API to make it more complete and support the new features we add every month to make GitLab the best end-to-end development environment.

This constant iteration has resulted in a few inconsistencies in our existing API. Today we are announcing V4 of our API, which aims to make the API more consistent and more RESTful. [Take a look](https://docs.gitlab.com/ee/api/v3_to_v4.html) at the changes in V4 to see what's different.

We will continue to support v3 of the API until August 2017 and so we encourage you to make any necessary changes to applications that use the V3 API.

### Omnibus GitLab Package Improvements

#### Raspberry Pi 2 changes

Due to a fault in release process that was caused by changes in build infrastructure,
packages for Raspberry Pi 2 [were tagged under Debian distribution instead of Raspbian](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1303).

We've resolved this issue and also synced all latest versions of packages
to `Raspbian` distribution.

Going forward, we will only release Raspberry Pi 2 packages under `Raspbian` distribution.
Further more, as [announced in 8.17 release post](/2017/02/22/gitlab-8-17-released/#raspbian-wheezy-package),
we will provide only Jessie packages for Rasperry Pi 2.

If you did any manual changes to the apt repository as a workaround, you will need to change the distribution.
You can do this by running:

`sed -i 's/debian/raspbian/g' /etc/apt/sources.list.d/gitlab_raspberry-pi2.list`

<!-- changelog -->

Please check out [the changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG.md) to see all the named changes.

</section>
<!-- end of OTHER FEATURES BLOCK -->

<!-- UPGRADE BAROMETER BLOCK -->
<div class="upgrade-install">
<section class="left vertical-align-top">

### Upgrade barometer

XXXXXXXXX MISSING!!!!!!!!! XXXXXXXXX

*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****

#### Note

We assume you are upgrading from the latest version. If not, then also consult the upgrade barometers of any intermediate versions you are skipping.
If you are upgrading from a GitLab version prior to 8.0 *and* you have CI enabled, you have to upgrade to GitLab 8.0 [first](/2015/09/22/gitlab-8-0-released/).

Please be aware that by default the Omnibus packages will stop, run migrations,
and start again, no matter how “big” or “small” the upgrade is. This behavior
can be changed by adding a [`/etc/gitlab/skip-auto-migrations`
file](http://doc.gitlab.com/omnibus/update/README.html).

</section>
<!-- end of UPGRADE BAROMETER BLOCK -->

<!-- LAST BLOCK -->
<section class="right vertical-align-top">

### Installing and Updating

If you are setting up a new GitLab installation please see the
[download GitLab page](/installation/).

Check out our [update page](/update/).

### GitLab Products

We offer four different [products](/products/) for you and your company:

- {: #CE} **GitLab Community Edition (CE)**: [Open source](https://gitlab.com/gitlab-org/gitlab-ce), self-hosted solution of GitLab. Ideal for personal projects or small teams with minimal user management and workflow control needs. Every feature available in GitLab CE, is also available on GitLab Enterprise Edition (Starter and Premium), and GitLab.com.
- {: #EE} **[GitLab Enterprise Edition](/gitlab-ee/) (EE)**: [Open core](https://gitlab.com/gitlab-org/gitlab-ee/), self-hosted, fully featured solution of GitLab. Available in two different subscriptions:
  - {: #EES} **GitLab Enterprise Edition Starter (EES)**: Ideal for co-located teams who need additional security and workflow controls for their professional projects.
  - {: #EEP} **GitLab Enterprise Edition Premium (EEP)**: Ideal for distributed teams who need advanced workflow controls, premium features, High Availability, and Premium Support.
- {: #gitlab-dot-com} **[GitLab.com](/gitlab-com/)**: Free GitLab solution, which runs on top of GitLab EES, hosted by GitLab, Inc. Ideal for individuals who want to get their projects up and running quickly. Administrated by GitLab (users don't have access to admin settings).

<!-- - {: #gitlab-hosted} **[GitLab Hosted](/gitlab-hosted/)**: Ideal for teams who want their own private and secure GitLab instance without having to worry about installation, hosting, or upgrades. -->

</section>
</div>


[Cover image](https://www.pexels.com/photo/landscape-nature-mountain-lake-37650/) licensed under [CC0](https://www.pexels.com/photo-license/).
{:.note .text-right}

<!-- end of LAST BLOCK -->

<!-- end of the blog post -->






<!-- Instructions (delete them when accomplished) -->

<section style="display: none;">

## Instructions

This is how the post will look like: https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/source/images/new-release-post-example.jpg

1. Read through https://about.gitlab.com/handbook/marketing/blog/#quick-guide-for-release-posts
2. Include in the same MR an update to data/promo.yml:

```yaml
text: "GitLab X.X Released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
link: '/AAAA/MM/DD/gitlab-x-x-released/'
```

3. Embedding Videos

To embed videos, use the figure tag with the video_container class. It will guarantee
that the video is responsive. Replace only the video URL:

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
  - Apply the classes `{: .ce-ee}` (CE features), `{: .ees}` (EE Starter features), or `{: .eep}` (EE Premium features) to features' headings accordingly.

6. Aligning content to the top:

Whenever you need to align content to the top of each column, apply
the class `vertical-align-top` to both `left` and `right` sections:

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

7. Release webcasts

Once the release webcast is published on YouTube, if you want to include the recording
into the blog post, replace the section "blog post intro" with the following block.

Don't forget to replace the Lorem Ipsum text with the actual intro. For the video tag,
replace **only** the video URL.

<!-- intro section (with video) -->
<section class="left vertical-align-top">

Intro (visible on blog landing page) Lorem ipsum dolor sit amet.
Inventore incidunt consequatur blanditiis iusto laborum repudiandae,
eligendi in impedit temporibus numquam reiciendis dolor culpa repellendus.

<!-- more -->

Nisi obcaecati numquam incidunt impedit necessitatibus ipsam qui illum,
praesentium a esse. Cum porro ut id impedit expedita nostrum aut quibusdam,
accusamus laboriosam maiores nesciunt voluptas deleniti harum doloribus
tempore quasi fuga accusantium in odit facilis.

</section>
<section class="right vertical-align-top">

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/Ho-9sPthILc" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

The release webcast recording
{: .figcaption}

</section>
<!-- end of intro section (with video) -->

</section>
<!-- end of instructions -->
