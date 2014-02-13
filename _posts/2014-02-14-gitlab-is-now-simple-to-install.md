---
layout: post
title: GitLab is now simple to install
date: February 14, 2014
---

GitLab is the most fully featured open source application to manage git repositories. But a downside of that is that historically it has been hard to install and update. Installing required a following a long guide. It was a guide that [actually worked] but it still is 10 pages long. In spite of this GitLab has become the most popular solution for on premise installations with 50,000 organizations using it. But to grow even faster we needed to simplify the update and installations processes. So in the last version we made sure that [upgrading is now only a single command]. Today we can announce that installing GitLab is also greatly simplified.

GitLab installation now has three new options: a Chef cookbook, Packer virtual machines and Omnibus GitLab packages.

The [official GitLab Chef cookbook](https://gitlab.com/gitlab-org/cookbook-gitlab/blob/master/README.md) is the most flexible option. It supports both development and production environments and both Ubuntu and RHEL/CentOS operating systems. You can install it with Chef Solo, a Chef server or with Vagrant. It supports MySQL and PostgreSQL databases, both in the same server as external ones. The cookbook is [well tested](https://gitlab.com/gitlab-org/cookbook-gitlab/tree/master/spec) with [ChefSpec](https://github.com/sethvargo/chefspec). And for the cloud lovers there even is [a version that runs on AWS Opsworks](https://gitlab.com/gitlab-com/cookbook-gitlab-opsworks/blob/master/README.md).

If you want to quickly spin up a production GitLab server you can also use or [GitLab virtual machine images](XXX). For now we have Ubuntu 12.04 and CentOS 6 images with GitLab preinstalled. These are made with [Packer](http://www.packer.io/) and [the source code to create your versions](https://gitlab.com/gitlab-org/gitlab-packer/blob/master/README.md) is available. Example configurations for Digital Ocean and AWS are included. These images are created with the official Chef cookbook mentioned earlier.

Last but not least are the [Omnibus GitLab packages](XXX). Creating this package was not easy. GitLab has a lot of dependencies which means that native packages would require packaging hunderds of gems. To solve this we used [omnibus-ruby] that Chef Inc. uses package Chef. Based [omnibus-chef-server](https://github.com/opscode/omnibus-chef-server) we made [omnibus-gitlab](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/README.md) that you can use to create your own package. All this so you can finally install GitLab with:

```
apt-get install openssh-server postfix
dpkg -i gitlab-6.5.1.deb
gitlab-ctl reconfigure
```

We're very proud to offer the above options. We would like to thank the awesome GitLab community and the [GitLab subscribers](https://www.gitlab.com/subscription/) for their support. Like any active project there are still many way to improve the [Chef cookbook](https://gitlab.com/gitlab-org/cookbook-gitlab/issues), the [Packer virtual machines](https://gitlab.com/gitlab-org/gitlab-packer/issues) and [Omnibus gitlab packages](https://gitlab.com/gitlab-org/omnibus-gitlab/issues) so we welcome your help. And of couse the all the existing installation options will continue to be available.
