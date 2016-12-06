---
title: "Git tricks, handy Git commands for everyday use"
author: Achilleas Pipinellis
author_twitter: _axil
categories: 
image_title: 
description: Handy Git commands for everyday use.
---

Almost everybody at GitLab will need to use Git at some point. For newcomers
who know nothing about Git that can be a fearsome experience. We have
a `#git-help` Slack channel where we ask questions and provide help if some of
us get stuck. That's a quick way to provide help, and if something is complicated
or someone has messed up their local repository and needs immediate help, there's
always a person to jump on a quick call.

Git comes with a ton of commands, and that's probably an understatement. In this
post, we gathered a handful of handy Git commands we use at GitLab everyday.
Here's a pack of Git tricks that will leverage your Git-fu and you'll hopefully
find useful. Remember, the list is far from exhaustive :)

## Git's built-in help

The majority of users rely on sites like StackOverflow to find answers to their
Git problems, but how often do you use Git's built-in help to find more about a
command you just found out?

### Learn about the most common commands

Run `git help` to print a list of the most common commands. You'll probably
notice you've used most of them, but how well do you really know them.
Thankfully, there is a help page for every command!

### A help page for every command

Run `git help <command>` to find out all about a command's behavior and what
options it can take.

### A handful of guides

Git comes with a handful of guides ready for you to explore. Run `git help -g`
to see what's available and take a tour 


## Oh-my-zsh Git plugin

- https://github.com/robbyrussell/oh-my-zsh/wiki/Plugin:git
- https://github.com/robbyrussell/oh-my-zsh/blob/master/plugins/git/git.plugin.zsh

## Git extras

Enhance Git with more commands

- https://github.com/tj/git-extras

## Aliases

```ini
[alias]
  lg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset' --abbrev-commit --date=relative
  lol = log --graph --decorate --pretty=oneline --abbrev-commit
```

## `.gitconfig` on steroids

- https://github.com/thoughtbot/dotfiles/blob/master/gitconfig
- https://github.com/thoughtbot/dotfiles/pull/377

---

1.  Set a global `.gitignore`:

    ```ini
    [core]
      excludesfile = /home/user/.gitignore
    ```

1.  Delete local branches that have been removed from remote on fetch/pull:

    ```ini
    [fetch]
      prune = true
    ```

1.  Gives you extra info when using Git submodules:

    ```ini
    [status]
      submodulesummary = 1
    ```

## Misc

1. Get a list of Git branches, ordered by most recent commit:

   ```
   git for-each-ref --sort=-committerdate refs/heads/
   ```

1. `@` is the same as `HEAD`:

    ```
    git show @~3
    ```

1. `-` refers to the branch you were on before the current one.
   Use it to checkout the previous branch ([source][dash]):

    ```sh
    % git branch
      master
    * rs-zenmode-refactor

    % git checkout master

    % git checkout -
    ```

1. Delete local branches which have already been merged into master
   ([source][del-merged]):

    ```
    git branch --merged master | grep -v "master" | xargs -n 1 git branch -d
    ```

### Clean up all obsolete tracking branches for a remote

Remove all tracking branches that you have locally but are no more present in
the remote repository. Use the `--dry-run` flag to only see what branches will
be pruned, but not actually prune them.

```bash
git remote prune origin
```

### Checking out a branch 

## Further reading



[del-merged]: http://stevenharman.net/git-clean-delete-already-merged-branches
[dash]: https://twitter.com/holman/status/530490167522779137
