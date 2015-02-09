---
layout: post
title: "GitLab reduced merge conflicts by 90% with changelog placeholders"
date: 2015-02-10
comments: true
categories: 
author: Sytse Sijbrandij
---



GitLab has a very active development cycle with many features being added to its monthly release by [more than 700 contributors](http://contributors.gitlab.com/).
Like many projects it has a [changelog file](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG) that details all significant new features, bugfixes and changes to behaviour.
Every pull/merge request author is [encouraged](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md#merge-request-guidelines) to add a line to this changelog.

The order in which merge requests are accepted is not know in advance.
Most merge request added a new line to the changelog the end of the upcoming version.
When one of the merge quests gets merged all the unmerged ones were broken since they modify the same line.
They had to solve the merge conflict with a commit or rebase before they could be merged in the web UI.

At GitLab we solved the above problem by adding a 100 lines with just a hyphen placeholder at the top of the changelog.
People can insert their changelog line at a random location in the changelog.
There is still a chance of conflict when two merge requests change the same line but it is greatly reduced.
It looks a bit strange to have these empty lines on top so we added a [comment to explane their purpose on top](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CHANGELOG#L1).
We removed the version from the top as well so that there is even less chance of 

As [part of the monthly release process](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/release/monthly.md#prepare-changelog-for-next-release) all the empty lines are removed and new ones for the upcoming release are added.
The placeholders ensure that lead GitLab developer Dmitriy can merge new contributions easily from his iPad.
Which has lead to more late-night merging activity making everyone happy.
We hope this article inspires other open and closed source projects to reduce their merge conflicts.
Or if you don't have a changelog yet to start maintaining one, it sure beats doing git diffs all the time.
Please let us know if you are inspired or if you have any other tricks to share in the comments.
