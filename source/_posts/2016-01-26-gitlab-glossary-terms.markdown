---
layout: post
title: "A rosetta stone of confusing terminology"
date: 2016-01-22
comments: true
categories:
author: Heather McNamee
author_twitter: nearlythere
filename: 
image_title: /images/unsplash/trees-raysoflight.jpg
---

Developers rely on multiple platforms to manage repositories, depending on client and project needs.
One client may have on-premises GitLab, another has a 
community project on GitHub, and yet another has a legacy 
project in mercurial on Bitbucket.
Confusion can arise when you switch between platforms.
In this post, we have a handy reference guide to explain 
some potentially confusing terms, especially if you're new 
to GitLab.

<!--more-->

With the [8.4 Release][release], GitLab has improved migration support for those coming from GitHub to GitLab.
GitLab now imports your repositories, wikis, issues and 
pull requests from GitHub.
While most terminology is shared 
between the platforms, some differences lead to confusion 
for users.
Git-specific terms like commits, push, and so forth are the same.
Common features most repository managers have are also the same: such as users, issues, webhooks, etc.

However there are some features have different names.
For example a “pull request” in GitHub and Bitbucket is called a “merge request” in GitLab.
We figured since you're often making a request to `merge` a feature branch into the master branch, we call this a 
"merge request" and you'll hear us talk about MRs and not PRs.

If you’re brand new to GitLab, we’ve made this handy cheat-sheet to help you orient yourself and clear things up.

(graphic here)

## Projects v Repositories v Organizations

With the recent additions of “Projects” in Bitbucket, there’s fresh confusion.
Weren’t “repos” actually projects?
In GitHub, "repositories" contain the git/svn repository, and the project assets such as issues, contribution metrics, etc.
However users often refer to repos as *projects* interchangeably in both GitHub and Bitbucket.

So in GitLab, we call that container a Project.
That includes the git repository, issues, MRs, etc.
When you configure a project, you can...

- Choose [project features][projects]. 
- Set the project avatar.
- Set the visibility level for that project such as Private, Internal or Public.
- Transfer it, remove it or archive it.
- Configure [GitLab CI for a project][gitlabci].
- Add [project-level services][services] for third-party integrations.

It's important to make this distinction because when you "Import a project" in GitLab, you are really importing what is called a *repository*, and not a *project* from Bitbucket.

This is where it gets confusing.
Now Bitbucket [groups multiple repositories into Projects][bitbucket].
Projects in Bitbucket are analagous to an "organization" in GitHub.

In GitLab, we call this a "Group." 
This allows you to collect several projects together and also have members.
Those members can then configure their own group-level permissions.
Projects can be stored in only one group at once.
However you can share a project with other groups.
And even those settings can be locked at the group level so you can avoid someone sharing a private project to other groups, for example.

The confusion is understandable, especially if like many developers, you work with a number of clients each on different platforms.

I hope this has cleared up confusing. If you have any questions, you can join us for a [live Q & A in our webcast][webcast] Thursday, January 28, 5pm (17:00) UTC; 12pm EST; 9am PST.


[services]: http://doc.gitlab.com/ce/project_services/project_services.html "Configure Services for Projects"
[gitlabci]: http://doc.gitlab.com/ce/ci/yaml/README.html "configure GitLab CI"
[projects]: http://doc.gitlab.com/ce/workflow/project_features.html "Documentation of Project features"
[webcast]: http://page.gitlab.com/Jan282016Webcast.html "Webcast: 8.4 Feature Walk-through"
[release]: https://about.gitlab.com/2016/01/22/gitlab-8-4-released/ "Announcing GitLab's 50th Release: 8.4"
[bitbucket]: https://blog.bitbucket.org/2016/01/21/distributed-teams-can-now-build-faster-with-bitbucket/ "Bitbucket announces Projects"
