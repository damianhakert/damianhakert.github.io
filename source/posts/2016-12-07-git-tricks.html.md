---
title: "Git tricks, handy Git commands for everyday use"
author: Achilleas Pipinellis
author_twitter: _axil
categories:
image_title:
description: Handy Git commands for everyday use.
---

Git comes with a ton of commands, and that's probably an understatement. In this
post, we gathered a handful of handy Git commands we use at GitLab everyday.

<!-- more -->

## Intro

Almost everybody at GitLab will need to use Git at some point. For newcomers
who know nothing about Git that can be a fearsome experience. We have
a `#git-help` Slack channel where we ask questions and provide help if some of
us get stuck. That's a quick way to provide help, and if something is complicated
or someone has messed up their local repository and needs immediate help, there's
always a person to jump on a quick call.

Here's a pack of Git tricks that will leverage your Git-fu and you'll hopefully
find useful. Remember, the list is far from exhaustive :)

## Git's built-in help

The majority of users rely on sites like StackOverflow to find answers to their
Git problems, but how often do you use Git's built-in help to find more about a
command you just found out?

### Learn about the most common commands

Run `git help` to print a list of the most common commands. You'll probably
notice you've used most of them, but how well do you really know them?
Thankfully, there is a help page for every command!

### A help page for every command

Git's documentation is very comprehensive and comes by default when installing
Git. Run `git help <command>` to find out all about a command's behavior and what
options it can take.

### A handful of guides

Git comes with a handful of guides ready for you to explore. Run `git help -g`
to see what's available:

```
The common Git guides are:

   attributes   Defining attributes per path
   everyday     Everyday Git With 20 Commands Or So
   glossary     A Git glossary
   ignore       Specifies intentionally untracked files to ignore
   modules      Defining submodule properties
   revisions    Specifying revisions and ranges for Git
   tutorial     A tutorial introduction to Git (for version 1.5.1 or newer)
   workflows    An overview of recommended workflows with Git
```

Jump to a Git tutorial with `git help tutorial`, go through the glossary with
`git help glossary` or learn about the most common commands with
`git help everyday`.

## See the repository status in your prompt

It's very useful to be able to visualize the status of your repository at any
given time. While there are 3rd party tools that include this information
([oh-my-zsh][ohmyzsh] anyone?), Git itself provides a script named `git-prompt.sh`
that does exactly that. You can [download it][gitprompt] and follow the
instructions to install and use it in your system.

Go ahead and replace your boring shell prompt with something like this:

![Git shell prompt](/images/blogimages/git-tricks/git-shell-info.png){: .shadow}

_Taken from oh-my-zsh's [themes wiki][git-shell-info-source]_

## Autocompletion for Git commands

You may also find useful the [completion scripts] that are also in the same
directory and will provide Git completion for `bash`, `tcsh` and `zsh`. Again,
follow the instructions inside the scripts to learn how to install them. Once
done, try them out by typing `git` in your terminal followed by <kbd>Tab</kbd>+
<kbd>Tab</kbd>, and see the magic happening.

![It's a kind of magic](https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif)

## Git plugins

Since Git is free software, it's easy for people to write scripts that extend
its functionality. Let's see some of the most common ones.

### The `git-extras` plugin

If you want to enhance Git with more commands, you'll want to try out the
[`git-extras` plugin][gitextras]. It includes commands like `git info` (show
information about the repository), `git effort` (number of commits per file),
and the list goes on. Make sure to visit the [documentation on the provided
commands][commands] in order to understand what each one does before using it.

### The `git-open` plugin

If you want to quickly visit the website on which the repository you're on is
hosted, `git-open` is for you. All major providers are supported (GitHub,
GitLab, Bitbucket) and you can even use them all at the same time if you set
them as different remotes.

[Install it][install-open], and try it out by cloning a repository from
[GitLab.com](https://gitlab.com/explore). From your terminal browse to that
repository and run `git open` to be transferred to the project's page on
GitLab.com.

It works by default for projects hosted on GitLab.com, but you can also use it
with your own GitLab instances. In that case, make sure to set up the domain
name with:

```bash
git config gitopen.gitlab.domain git.example.com
```

You can even open different remotes and branches if you have set them up.
Read more in the [examples section][git-open-examples].

## Aliases

```ini
[alias]
  lg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset' --abbrev-commit --date=relative
  lol = log --graph --decorate --pretty=oneline --abbrev-commit
```

### The Oh-my-zsh Git aliases plugin

If you are an [Oh My Zsh][ohmyzsh] user you'll probably know this already.
Learn how you can [enable the Git plugin][zshgit] provided with Oh My Zsh and


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

### Checking out a new branch from a base branch

```bash
git checkout -b new_branch base_branch
```

### Watching diffs with Git's difftool



## Further reading

[git-open-examples]: https://github.com/paulirish/git-open#examples
[install-open]: https://github.com/paulirish/git-open#installation
[commands]: https://github.com/tj/git-extras/blob/master/Commands.md
[gitextras]: https://github.com/tj/git-extras
[zshgit]: https://github.com/robbyrussell/oh-my-zsh/wiki/Plugin:git
[completion scripts]: https://github.com/git/git/tree/master/contrib/completion
[gitprompt]: https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh
[git-shell-info-source]: https://github.com/robbyrussell/oh-my-zsh/wiki/Themes#kafeitu
[del-merged]: http://stevenharman.net/git-clean-delete-already-merged-branches
[dash]: https://twitter.com/holman/status/530490167522779137
[ohmyzsh]: http://ohmyz.sh/
