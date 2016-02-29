---
layout: post
title: Omnibus GitLab package, why on earth?
date: 2016-03-29
comments: true
author: Marin Jankovski
author_twitter: maxlazio
---

Two years ago we announced that [GitLab is now simple to install] with a great
triumph. Since then, GitLab has grown to become an irreplaceable tool for
many professionals. Part of this success can certainly be credited to an easier
installation process using the omnibus-gitlab packages. The packages, however,
seems to have polarized people to either
[love](https://twitter.com/invalidusrname/status/673862628125614080)
[them](https://twitter.com/Merenon/status/692027386272047104), or
[hate](https://twitter.com/phessler/status/672747920635109376)
[them](https://twitter.com/jiphex/status/672746104103051265).

Let's take a look at some of the advantages and the disadvantages of the
omnibus-gitlab package.

<!--more-->

## Omnibus concept

[Omnibus project] is a brainchild of Chef Inc.
Their product, Chef Server, was notoriously hard to install and configure. To
tackle this issue the omnibus project was created. The idea behind it was to
have one binary package for the supported OS that would install all the required
dependencies and allow configuration of each required component.
This meant that the end binary package will certainly not be lean like the most
binary packages. In fact, they will be "fat" and hence [the name omnibus].
This also meant going against [Unix design principles] which favours
composable components as opposed to monolithic software (which reminds Unix
users too much of Windows software).

The concept is simple:

* have one binary package that contains all required components
* make sure that a specific version of the package has all required components
* make sure that the supplied components have the version that is known to work
  in a predictable manner with other components

## Installing GitLab from source

GitLab is fighting a similar battle.
[Installation and update guides] for what we now call
the installation from source are available but they are at least 10 pages long.

They show how to install and configure multiple dependencies,
system users, which directories and files need to exist and user permissions
they need to have and so on. Installing a wrong version of a dependency
means that things might not work as expected, so it is imperative to follow the
guide to the letter.

Upgrading is maybe worse. Sure, the update guide is shorter but usually you have
time constraints to perform the upgrade. Having everyone breathing down your
neck and expecting everything to go smooth makes upgrading very stressful.

## Omnibus-gitlab

Enter the omnibus-gitlab package.

Anyone should be able to install and configure GitLab with minimum knowledge.
GitLab should be available on most major Linux distributions, at least on the
most widely used ones.

We want for the focus to be on GitLab and its features.
Installation and update should be easy and almost enjoyable!

This is how omnibus-gitlab was born.

Benefits for everyone:

1. Users need minimum effort to install GitLab
1. Users need minimum configuration to get GitLab up and running
1. Users can easily upgrade between GitLab versions

Benefits for the maintainers of GitLab:

1. We can provide our users with only one binary package they would need to
install
1. We can ship packages for multiple platforms at the same time
1. We can make sure that the components that GitLab requires for a specific
version are shipped
1. We know that the components are running on versions that are compatible
1. It becomes easier to support any issues user have because we have a
predictable environment
1. We can maintain one project that covers all of the above

The last point is very important for a project like GitLab.

GitLab has a monthly release cycle. Every 22nd of the month we need to release
a new version. We usually follow up the release with a couple of patch releases
to address any regressions that might have been introduced previously.
Given how important GitLab is to the development infrastructure, we need to be
able to react quick to any vulnerabilities in GitLab or any of its components.

The overhead of maintaining this type of package is low since we only need
one or two dedicated people to take care of all support that a package needs.

### Silver bullet?

No.

Omnibus-gitlab package does a lot for the end user but because of that it
assumes quite a lot. It will create the directories and files on the file system
and assume that it can do so. It will create the system users. It will occupy
the ports.
It ships with its own UNIX init supervision system, runit.
It ships with libraries that can already exist on the system (albeit might be a
different version).

For a very large portion of users all of the above won't matter but there are
environments which are highly restrictive.
The package has a lot of configuration to make it easier to adjust to the
environment but this can be a lot of work to get right. To this day we are
working on making the package even more customizable. It is a process rather
than a sprint.

### But you could have done X instead!

One of the complaints we often hear is that the omnibus packages are a blasphemy
and that we are breaking a number of "laws".

We often get told that "You could have done it in another way".

The list of usual suspects varies but there are some common ways that often get
recommended.

We did consider the options so let's review some of the conclusions we have
drawn.

#### Docker images

Two years ago Docker was still a very new project. It had problems like any new
project (like us!). The number of users using it in production is growing but
we could not and cannot count on everyone supporting Docker in their
environments. Introducing Docker into your environment adds another piece of
software that needs support and not everyone can add this layer.

The packages in .deb and .rpm archive format are usually allowed in most if not
all systems. Every company has a procedure on how to introduce new packages to
their environments.

We now have [Docker] images but as an additional method of installing GitLab.

#### Native Debian Packages

Users encouraging us to ship GitLab as a native Debian package usually say that
this would keep us in line with the Unix design principles and we can leverage
packages that already exist on the system instead of reinventing the wheel! You
most likely already have openssl installed on your system, why do you want to
ship another one?

Let's take a look at what that would entail:

1. Packaging over 300 ruby gems as a separate packages. (This is Spartaaa!)
1. If a component version we require does not exist in the system package
repository, tell the user to compile it
1. Do this at least once a month to be able to follow the release on every 22nd.
1. Make sure that any change that was created in GitLab by us or any of the
contributors does not break the package

We don't have enough expertise to do the native packaging. It is a lot of work
and we would need a dedicated team only for packaging for this platform.

There are some good news though!
[Native Debian packages are being built] by Pirate Praveen for the past 3-6
months and they are almost ready to be included in the Debian package
repository!

This will allow all users who do not want the omnibus-gitlab package to touch
their system to easily install GitLab.

#### Native Fedora Packages

The story goes pretty much the same as the story about native Debian packages.
There was an attempt of packaging for Fedora as a part of
[Google Summer of Code project] by (now) our own team member
Achilleas Pipinellis. However, it is a multi person job and packaging alone
is a lot of work.

#### Anything else

We have also often heard:

"Why can't you just leave Chef, Puppet, Ansible or something else to do what they
are made for? They can be configured to get the specific versions of
dependencies and installed on the system, it is not up to GitLab to care about
that!"

True, the bottom line is that we can leave everything up to the person that is
setting up GitLab to do that work.
However, it is _still_ a lot of work. That also means that for every GitLab
update, the administrator needs to go through a list of changes and see if
they need to upgrade the software. If they don't, GitLab might not work as
expected.
The end user most likely won't care how the setup is done, they might just see
something not working as they would expect. That is a risk we want to remove if
we can.

## Conclusion

One of the GitLab strengths is that we are able to have a very short release
cycle and to get the updates to all our users very fast.
The omnibus-gitlab packages are not the ideal way of distributing software and
they do have their own shortcomings.

If you consider:

1. the manpower required to maintain 8 packages
(4 platforms + 2 types of packages - one for CE and one for EE, 2 Docker images
and 2 Raspberry PI2 packages)
1. Monthly release cycle
1. Ease of upgrade between versions or ease of initial installation

then omnibus-gitlab is doing a very good job.

With the omnibus-gitlab packages available for everyone we can work in parallel
on getting more ways of installing GitLab available.

Want to help? Get in touch!

[GitLab is now simple to install]: https://about.gitlab.com/2014/02/14/gitlab-is-now-simple-to-install/
[Omnibus project]: https://github.com/chef/omnibus
[the name omnibus]: https://en.wikipedia.org/wiki/Omnibus
[Unix design principles]: https://en.wikipedia.org/wiki/Unix_philosophy
[Installation and update guides]: http://doc.gitlab.com/ce/install/installation.html
[Docker]: https://hub.docker.com/u/gitlab/
[Native Debian packages are being built]: https://wiki.debian.org/GitLab/Packaging
[Google Summer of Code project]: https://fedoraproject.org/wiki/User:Axilleas/GitLab
