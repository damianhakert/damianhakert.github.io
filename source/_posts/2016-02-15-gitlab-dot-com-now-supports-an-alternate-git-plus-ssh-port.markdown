---
layout: post
title: "GitLab.com now supports an alternate git+ssh port"
date: 2016-02-15
comments: true
author: Achilleas Pipinellis
author_twitter: _axil
image_title: '/images/unsplash/FILENAME.jpg'
---

Have you ever been in a situation where the network you are connected to
doesn't allow using port 22? Well, I have and it doesn't feel good. I want to
push and I want to push now!

To get around this problem, GitLab has been offering an option
([since version 6.9][diff-ssh-port]) to run the SSH server on a different port
than the default 22. You'd be happy to know that GitLab.com now also runs an
alternate `git+ssh` port which you can use whenever you are in a place where
the network sysadmin decided to make your life harder.

<!-- more -->

## The problem

It's not uncommon that in some places the network traffic is being monitored
and heavily firewalled, allowing only ports 80 and 443 to be used.

## The solution

Luckily, there are more than one options to overcome this issue. One can use a
VPN, Tor or [sshuttle] to alter their network route traffic and be able to use
SSH.

But even then, [VPNs can be blocked][vpn-wiki] and these counter measures
require some knowledge to be set up and used.

Not all users are tech-savvy, so using GitLab's option to set the SSH server
listen on an alternate port is the most straightforward and easiest solution.

## How GitLab implements an alternate SSH port

## How to use the alternate SSH server

GitLab.com runs a second SSH server that listens on the commonly used port `443`,
which is unlikely to be firewalled.

All you have to do is edit in your `.ssh/config` and change the way you
connect to GitLab.com:

```
Host gitlab.com
  Hostname altssh.gitlab.com
  Port 443
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/gitlab
```

[diff-ssh-port]: https://gitlab.com/gitlab-org/gitlab-ce/commit/db86fe47ce42f8f5aa72cc52d07c7e6eb312dcf9 "Add ability to set different ssh host, if different from http/https"
[sshuttle]: https://github.com/apenwarr/sshuttle "sshuttle - a poor man's VPN"
[vpn-wiki]: https://en.wikipedia.org/wiki/VPN_blocking "Wikipedia - VPN Blocking"
