---
layout: post
title: "Keeping your code protected"
date: 2014-11-25
comments: true
categories:
author: Job van der Voort
---

# Keeping your code protected

Git is very easy to use and abuse. A single commit is made very quickly,
making it very appealing to quickly push a change or modify your commits to fix mistakes.

```
git commit --amend
git push -f
```
This is great when you're working alone, but potentially disrupting if you're working with others.
As other people are building on the history of the repository, you want to make sure to keep the history intact.
In addition, you typically shouldn't commit any code to the repository (master branch)
without it been reviewed by someone else. You want to work _together_.

Our solution to potential problems when working together with git is a surprisingly simple permission system,
built on top of an elegant authorization method.

<!--more-->

## Read, Write

Permission in GitLab are fundamentally defined around the idea of having read or write permission to the repository and branches. They're built on top of [Six](http://randx.github.io/six/), an ultra simple authorization gem.

A user with the lowest private permission _Guest_
is only able to make use of the issues in a project and does not have read access to the code.
The _Reporter_ permission has the same abilities, but also has read access to the code.
Their permissions are defined as follows.

```
# app/models/ability.rb:131
def project_report_rules
project_guest_rules + [
:download_code,
:fork_project,
:write_project_snippet
]
end
```
As you can see, the reporter has the same access as the guest, on top of which we only add the ability to download code,
fork the project and write snippets.
A reporter role is ideal for those that you do not want to be pushing to your repository,
but still want to give access to the code and give the option to fork off.

Developers on a project will probably get the role _Developer_. The implementation says it all:

```
# app/models/ability.rb:139
def project_dev_rules
project_report_rules + [
:write_merge_request,
:write_wiki,
:modify_issue,
:admin_issue,
:admin_label,
:push_code
]
end
```

Any developer can `push_code`, meaning they can branch off, work in and push their own branch back to the repository. Write permission to the repository is all a developer needs, but it doesn't solve the issues with modifying history, nor does it help with collaboration: anyone can push to any branch (such as the master branch).

## Protecting your code

To stop people from messing with history or pushing code without review, we've created **protected branches**. A protected branch does three simple things:

- it prevents pushes from everybody except users with Master permission
- it prevents _anyone_ from force pushing to the branch
- it prevents _anyone_ from deleting the branch

You can make any branch a protected branch. We make the master branch a protected branch by default, but you can turn that off.

If you want to contribute code to a protected branch as a developer, you can simply push your feature branch and create a merge request towards the protected branch. History is protected and the code gets reviewed before it's merged.

The implementation of _Master_ reflects its powers:

```
# app/models/ability.rb:160
def project_master_rules
project_dev_rules + [
:push_code_to_protected_branches,
:modify_issue,
:modify_project_snippet,
:modify_merge_request,
:admin_issue,
:admin_milestone,
:admin_project_snippet,
:admin_team_member,
:admin_merge_request,
:admin_note,
:admin_wiki,
:admin_project
]
end
```
If you've paid attention, you might notice that even _Masters_ are not able to force push to or delete a protected branch. Our motto is simple:

> Do not let anyone change the history of a shared branch. Revert changes in the present.

You can easily add a commit on top of history to revert earlier changes.
This is much easier to work with than changes in history on top of which people already committed.
In addition, you probably do not want to delete such an important branch, hence the inability to remove it.

## How we check the permissions

By basing permissions on simple principles and adding protected branches, GitLab allows you to set up any type of workflow, while protecting your code from easily made mistakes.
Underlying this elegant scheme is a surprisingly simple authorization library.

We simply define the authorizations as above and check them with a simple method:

```
# app/models/user.rb:351
def can?(object, action, subject)
abilities.allowed?(object, action, subject)
end
```

For instance, to check whether a user is allowed to destroy a snipped:

```
def destroy
return access_denied! unless can?(current_user, :admin_personal_snippet, @snippet)

@snippet.destroy

redirect_to snippets_path
end
```

Can it be any easier?

## GitLab

Interesting in trying GitLab's protected branches?
You can try GitLab by [downloading](https://about.gitlab.com/downloads/) the Community Edition and installing it on your own server or by signing up to our free, umlimited GitLab instance [GitLab.com](https://gitlab.com/users/sign_up).

For support, deep LDAP integration, git hooks, Jenkins integration and more enterprise features, check out [GitLab Enterprise Edition](https://about.gitlab.com/features/#enterprise).

For more on Git workflows, read our article on [GitLab Flow](https://about.gitlab.com/2014/09/29/gitlab-flow/).
