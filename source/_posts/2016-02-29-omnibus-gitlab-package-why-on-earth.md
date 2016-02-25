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
many professionals. Part of this success can certainly be credited to easier
installation process using the omnibus-gitlab packages. The packages, however,
seems to have polarized people to either
[love](https://twitter.com/invalidusrname/status/673862628125614080)
[them](https://twitter.com/Merenon/status/692027386272047104), or
[hate](https://twitter.com/jiphex/status/672746104103051265)
[them](https://twitter.com/jiphex/status/672746104103051265).
In this blog post, I will try to explain why the omnibus-gitlab packages are
built the way they are.

<!--more-->

## Omnibus concept

[Omnibus project] is a brainchild of Chef Inc.
Their product, Chef Server, was notoriously hard to install and configure. To
tackle this issue omnibus project was created. The idea behind it was to have
one binary package for the supported OS that would install
all required dependencies and allow configuration of each required component.
This meant that the end binary package will certainly not be lean like most
binary packages. In fact, they will be "fat" and hence [the name omnibus].
This also meant going against [Unix design principles] which favours
composable components as opposed to monolithic software(which reminds Unix users
too much of Windows software).

The concept is simple:

* have one binary package that contains all required components
* make sure that a specific version of the package has all required components
* make sure that the supplied components have the version that is known to work
  in a predictable manner with other components

## Omnibus-gitlab

Right about that time GitLab was fighting a similar battle.
We had (and still have!) [installation and update guides] but they are at least
10 pages long.
Installing GitLab meant installing and configuring multiple dependencies, system
users, creating multiple directories and files, setting the correct permissions
and so on. To make matters worse, installing a wrong version of a dependency
meant that things might not work as expected.

If we were to increase GitLab adoption we had to make sure that anyone can
install and configure GitLab with minimum knowledge and on most major Linux
distributions and their versions.

Oh, and did I mention that at that time we were a team of 4 plus 5-10
volunteers(which will later become the Core team)?

That is how omnibus-gitlab was born:

1. We would be able to make sure the correct components are shipped with the
version we expect
1. We would be able to give our users only one binary package they would need to
install
1. Users would need minimum effort to install GitLab
1. Users would need minimum configuration to get GitLab up and running
1. We would be able to ship packages for multiple platforms
1. We would only need to maintain one project that covers all of the above
1. Omnibus DSL is very similar to Chef DSL which we already had expertise in
1. We would be able to react quick to any vulnerabilities in any of the
components and ship the fixed package to our users quickly
1. We would still be able to ship a new version on every 22nd of the month
1. We would only need one to two people to ship the packages

### Silver bullet?

No.

Omnibus-gitlab package does a lot for the end user but because of that it
assumes quite a lot. It will create the directories and files on the file system
and assume that it can do so. It will create system users. It will occupy ports.
It ships with its own UNIX init supervision, runit. It ships with libraries
that can already exist on the system (albeit might be a different version).

For a very large portion of users all of the above won't matter but there are
environments which are highly restrictive.
The package has a lot of configuration to make it easier to adjust to the
environment but this can be a lot of work to get right. To this day we are
working on making the package even more customizable. It is a process rather
than a sprint.

### But you could have done X instead!

One of the complaints we often hear is that omnibus packages are a blasphemy and
that we are breaking number of "laws".

You could have done:

#### Docker images

Two years ago Docker was still a very new project. It had issues like any new
project (like us!). Number of users using it in production was growing but
we could not and cannot bet that everyone will allow Docker to be installed in
their environments.
Packages in .deb and .rpm archive format are allowed in most if not all systems.
Restrictions can exist but there is usually a company process that allows
installation of those packages if some rules are followed.

[Docker] images are available now as an additional method of installing GitLab.

#### Native Debian Packages

This way you are in line with the Unix design principles and you can leverage
packages that already exist on the system instead of reinventing the wheel!

Lets take a look at what that would entitle:

1. Packaging over 300 ruby gems as a separate packages. (This is Spartaaa!)
1. If a component version we require does not exist in the system package
repository, tell the user to compile it.
1. Do this at least once a month to be able to honor the release of every 22nd.
1. Make sure that any change that was created in GitLab by us or any of the
contributors does not break the package

We did not (and still don't) have enough expertise to do the native packaging.
We would need a dedicated team only for packaging for this platform.

There are some good news though!
[Native Debian packages are being built] by Pirate Praveen for the past 3-6
months and they are almost ready to be included in the Debian package
repository!

This will allow all users who do not want the omnibus-gitlab package to touch
their system to easily install GitLab.

#### Native Fedora Packages

The story goes pretty much the same as above. There was an attempt of packaging
as a part of [Google Summer of Code project] by (now) our own team member
Axilleas however, it is a multi person job and requires a lot of work.

#### Anything else

Why can't you just leave Chef, Puppet, Ansible or something else to do what they
are made for? They can be configured to get the specific versions of
dependencies and installed on the system, it is not up to GitLab to care about
that!

True, bottom line is that we can leave everything up to the person that is
setting up GitLab to do that work.
However, it is _still_ a lot of work. That also means that for every GitLab
update, the administrator needs to go through a list of changes and see if
they need to upgrade the software. If they don't, GitLab might not work as
expected.
The end user won't care how the setup is done, they might just see
something not working as they would expect. That is a risk we want to remove if
we can.

## Conclusion

One of the GitLab strengths is that we are able to have a very short release
cycle and to get the updates to all our users very fast.
Omnibus-gitlab packages are not the ideal way of distributing software and they
do have their own shortcomings.

However, if you consider:

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
[installation and update guides]: http://doc.gitlab.com/ce/install/installation.html
[Docker]: https://hub.docker.com/u/gitlab/
[Native Debian packages are being built]: https://wiki.debian.org/GitLab/Packaging
[Google Summer of Code project]: https://fedoraproject.org/wiki/User:Axilleas/GitLab
