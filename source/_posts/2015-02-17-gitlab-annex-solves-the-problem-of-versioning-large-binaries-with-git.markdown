---
layout: post
title: "GitLab Annex solves the problem of versioning large binaries with git"
date: 2015-02-17
comments: true
author: "Sytse Sijbrandij"
categories: 
---

The biggest limitation of git compared to some older centralized version control systems has been the maximum size of the repositories.
The general recommendation is to not have git repositories larger than 1GB to preserve performance.
Although GitLab has no limit (some repositories in GitLab are over 50GB!) we subscribe to the advise to keep repositories as small as you can.

Not being able to version control large binaries is a big problem for many larger organizations.
Video, photo's, audio, compiled binaries and many other types of files are too large.
People work around the problem by keeping working in progress artwork in a Dropbox folder and only checking in the final result.
This results in using outdated files, not having a complete history and the risk of losing work.

In GitLab 7.8 Enterprise Edition this problem is solved by integrating the awesome [git-annex](https://git-annex.branchable.com/).
Git-annex allows managing large binaries with git, without checking the contents into git.
You check in only a symlink that contains the sha1 of the large binary.
If you need the large binary you can sync it from the GitLab server over rsync, a very fast file copying tool.

Example of a user uploading a large file to GitLab:

```bash
git clone git@gitlab.example.com:group/project.git
git annex init 'My Laptop'            # initialize the annex project
cp debian.iso ./                      # copy a large file
git annex add .                       # add it to git annex
git commit -am"Added Debian"          # commit the file meta data
git annex sync --content              # sync the git repo and large file to the gitlab server
```

Example of a user downloading a large file from GitLab:

```bash
git clone git@gitlab.example.com:group/project.git
git annex sync                        # find the whereabouts of the large file
git annex get .                       # download the large file
```

By integrating git-annex into GitLab it becomes much easier and safer to use.
You don't have to setup git-annex on a separate server or add annex remotes to the repository.
Git-annex without GitLab gives everyone that can access the server access to the files of all projects.
GitLab annex ensures you can only acces files of projects you work on (developer, master or owner role).

As far as we know GitLab is the first git repository management solution that integrates git-annex.
This is possible because both git-annex and GitLab stay very close to the unix paradigms.
Internally GitLab uses [GitLab Shell](https://gitlab.com/gitlab-org/gitlab-shell) to handle ssh access and this was a great integration point for git-annex.
We've added a setting to GitLab Shell so you can disable GitLab Annex support if you don't want it.

Of course we are very thankful for the awesome git-annex software that makes all of this possible.
It was mainly written by Joey Hess who's work is sponsered by [community fundraisers](https://campaign.joeyh.name/).
It is maybe interesting to know that git-annex is [written in Haskell](http://joeyh.name/screencasts/git-annex_coding_in_haskell/), making it very fast and reliable.

To use GitLab annex you have to use GitLab Enterprise Edition 7.8 (which will release on Februari 22) or GitLab.com.
Obviously you'll have to use ssh style links for to git remote to your GitLab server instead of https style links.
We look forward to feedback and enhancements from the rest of the community.
For example, it would be nice if the GitLab UI shows the file size of the large file instead of the symlink.
But lets first celerate this milestone, being able to easily version control your large files! 
