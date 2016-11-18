---
layout: markdown_page
title: "Run GitLab locally"
---

Refer to the [documentation for developing and contributing to GitLab](http://docs.gitlab.com/ce/development/README.html). If you need to quickly run any branch of GitLab locally on your machine for testing or reviewing purposes, follow these simplified steps in conjuction with the detailed documention to get set up quickly. This guide has been verified on a Mac machine with macOS Sierra. It assumes that you at least know how to use the Terminal and understand the [basics of Git](https://docs.gitlab.com/ce/gitlab-basics/start-using-git.html).

# Prepare environment

## Install and configure the desired ruby version

Install [homebrew](http://brew.sh/).
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Install [chruby](https://github.com/postmodern/chruby).
```
$ brew install chruby
```

Install [ruby-install](https://github.com/postmodern/ruby-install).
```
$ brew install ruby-install
```

View supported ruby versions.
```
$ ruby-install
```

Install the desired ruby version, such as:
```
$ ruby-install ruby 2.3.2
```

Confirm that it was installed in `~/.rubies/`.

Configure [chruby](https://github.com/postmodern/chruby) by [writing to the read-only `/etc/bashrc` file without explicitly changing permissions](http://askubuntu.com/questions/73052/how-to-modify-etc-bash-bashrc-it-is-read-only).
```
$ sudo bash -c "echo 'source /usr/local/share/chruby/chruby.sh' >> /etc/bashrc"
$ sudo bash -c "echo 'source /usr/local/share/chruby/auto.sh' >> /etc/bashrc"
```

Set the default ruby version by pasting this line (with the appropriate version) into `~/.bash_profile`. (Create the file if it does not exist.)
```
chruby ruby-2.3.2
```

Create a ruby version file.
```
$ echo "ruby-2.3.2" > ~/.ruby-version
```

Quit and restart the Terminal. Verify that the desired ruby version is configured upon starting the Terminal.
```
$ ruby -v
```

Install the bundler ruby gem.
```
$ gem install bundler
```

## Install Git
Install a sufficient version of Git if you don't have it already. Check the installed version.
```
$ git --version
```

# Set up SSH
Follow the [SSH instructions](https://gitlab.com/help/ssh/README).

# Set up GDK
Follow the [GDK instructions](https://gitlab.com/gitlab-org/gitlab-development-kit/blob/master/doc/set-up-gdk.md) to install GDK, pull down the GitLab source code, and run GitLab locally on your machine.


