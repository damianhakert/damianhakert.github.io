---
layout: post
title: "GitLab 7.12 released with MAIN_CE_FEATURE and MAIN_EE_FEATURE"
date: 2015-06-22
comments: true
categories:
author: ADD_YOUR_FULL_NAME
filename: FILENAME.MARKDOWN
image_title: /images/7_X/PICTURE.PNG
---

GitLab is open source software to collaborate on code.
Today we announce the release of a new version of GitLab Community Edition (CE) and GitLab Enterprise Edition (EE), with new features, usability and performance improvements, and bug fixes.
The biggest new features in Community Edition are ***MAIN_CE_FEATURES***.
In addition to the updates from Community Edition, GitLab Enterprise Edition has gained ***MAIN_EE_FEATURES***.

This month's Most Valuable Person ([MVP](https://about.gitlab.com/mvp/)) is ***MVP_USER*** ***CONTRIBUTION_OF_MVP_USER***.
Thanks ***MVP_USER_FIRST_NAME***!

<!--more-->

### ***MAIN_CE_FEATURE***

***DESCRIPTION***

[![screenshot](/images/7_12/feature.png)](/images/7_12/feature.png) ***7_12 is the version of GitLab being released***


### ***NEW_CE_FEATURE***

***DESCRIPTION***

[![screenshot](/images/7_12/feature.png)](/images/7_12/feature.png) ***7_12 is the version of GitLab being released***


### NEW_CE_FEATURE

***DESCRIPTION***

[![screenshot](/images/7_12/feature.png)](/images/7_12/feature.png) **+7_12 is the version of GitLab being released***

### NEW_SPONSORED_FEATURE

Thanks to sponsoring by ***COMPANY_NAME*** it is now possible to ***DESCRIPTION_OF_THE_FEATURE*** [LINK TO CHAGELOG](https://gitlab.com/gitlab-org/gitlab-ce/blob/7-12-stable/CHANGELOG#L18).

### ***MAIN_EE_FEATURE*** (EE only feature)

***DESCRIPTION***

[![screenshot](/images/7_12/feature.png)](/images/7_12/feature.png) ***7_12 is the version of GitLab being released***

### ***EE_FEATURE*** (EE only feature)

***DESCRIPTION***

[![screenshot](/images/7_12/feature.png)](/images/7_12/feature.png) ***7_12 is the version of GitLab being released***


## .gitlab-ci.yml file replaces jobs

As [announced on May 6](https://about.gitlab.com/2015/05/06/why-were-replacing-gitlab-ci-jobs-with-gitlab-ci-dot-yml/) we're replacing GitLab CI jobs with a .gitlab-ci.yml stored in the code repository. The advantages are listed in the announcement but the main ones are:

1. Since build script is version controlled more people can see it and to propose changes
1. Older and newer branches build correctly since they can contain a different build file
1. Forks automatically get a proper build script that gets updated when they merge upstream in

HOW IT WORKS AND THE SYNTAX

IMPORTING OLD JOBS AND TEMPORARY YML FILE

The new format is inspired by the work of Travis CI and Circle CI who are already using yml files.
We considered using the open source modules of Travis CI to build our functionality.
After starting like that we ended up writing our own because we wanted to offer the following:

1. Deploy jobs should be customizable
1. Jobs should be able to run on metal, vm's and docker images
1. Jobs should be able to run on same machine each time (for example for performance testing)
1. Jobs should be able to run on special architectures (for example a Raspberry Pi 2)
1. Jobs should be able to run on machines in a special place or with certain credentials
1. The yml file should have a simple and shallow syntax
1. Each job should be named so you can recognize it everywhere

Because of the above requirements the 'one image per architecture and thats it' approach was not an option.
Being able to tag runners and jobs allows for a lot of freedom on assigning a job to a certain runner.
We hope the new format that combines the freedom of Jenkins the userfriendliness of Travis CI.

[![screenshot](/images/7_12/feature.png)](/images/7_12/feature.png) ***7_12 is the version of GitLab CI being released***

## ***NEW_CI_FEATURE***

***DESCRIPTION***

[![screenshot](/images/7_12/feature.png)](/images/7_12/feature.png) ***7_12 is the version of GitLab CI being released***


## NEW_CI_FEATURE

***DESCRIPTION***

[![screenshot](/images/7_12/feature.png)](/images/7_12/feature.png) **+7_12 is the version of GitLab CI being released***

## NEW_SPONSORED_FEATURE

Thanks to sponsoring by ***COMPANY_NAME*** it is now possible to ***DESCRIPTION_OF_THE_FEATURE*** [LINK TO CHAGELOG](https://gitlab.com/gitlab-org/gitlab-ce/blob/7-12-stable/CHANGELOG#L18).

### Other changes

This release has more improvements, including security fixes, please check out [the Changelog](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) to see the all named changes.


### Upgrade barometer

*** DESCRIBE HOW INVOLVED THE MIGRATIONS ARE. CAN USERS EXPECT MUCH DOWNTIME? ***
*** CHECK IF THERE ARE ANY MIGRATIONS THAT REMOVE OR CHANGE COLUMNS. ***
*** IF THERE ARE ONLY ADDITIONS OR NO MIGRATIONS CONFIRM THAT DEPLOY CAN BE WITHOUT DOWNTIME ****

- - -

## Installation

If you are setting up a new GitLab installation please see the [installing GitLab page](https://www.gitlab.com/installation/).

## Updating

Check out our [update page](https://about.gitlab.com/update/).

## Enterprise Edition

The mentioned EE only features and things like LDAP group support can be found in GitLab Enterprise Edition.
For a complete overview please have a look at the [feature list of GitLab EE](http://www.gitlab.com/gitlab-ee/).

Access to GitLab Enterprise Edition is included with a [subscription](http://www.gitlab.com/pricing/).
No time to upgrade GitLab yourself?
A subscription also entitles you to our upgrade and installation services.

- - -
