---
layout: post
title: "GitLab on Raspberry Pi 2!"
date: 2015-04-21
comments: true
author: Job van der Voort
author_twitter: Jobvo
image_title: '/images/stock/rbp.jpg'
---

Want to run GitLab on your Raspberry Pi 2?
Now you can do so much easier!

Previously you had to install GitLab from source yourself.

But we have just released the [official Raspberry Pi 2 Omnibus package](/installation/#other-methods)
that you can use to install GitLab quickly on your new small-but-powerful
repository server!

Simply download the Omnibus package and follow the [installation instructions](/downloads) as you
would with any other package:

```
wget https://s3-eu-west-1.amazonaws.com/downloads-packages/raspberry-pi/gitlab_7.9.0-omnibus.pi-1_armhf.deb
sudo dpkg -i gitlab_7.9.0-omnibus.pi-1_armhf.deb
```

Run reconfigure to install:

```
sudo gitlab-ctl reconfigure
```

Sign in on your new micro-instance with username `root` and password `5iveL!fe`.

<!-- more -->

## Help us scaling GitLab up the fruit tree

Currently, the packages for Raspberry Pi are built manually and for minor
releases only.

We are looking for ways to automate building the Raspberry Omnibus packages,
so we can keep them up to date. For this we either need to cross-compile them (complex),
or build them on ARM servers (hard to find).

We welcome suggestions on this subject.
