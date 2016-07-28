---
title: "From Puppet code in git to production via GitLab CI"
author: Alexander Skiba
author_twitter: ghostlyrics
image_title: '/images/blogimages/xx.png'
description: "xxxxx"
twitter_image: '/images/tweets/xx.png'
categories: xxxx
---

Modern server operation guidelines recommend a high degree of seperation. However, when your system is complex, the amount of configuration required to keep things running and consistent goes through the roof. In order to conquer this problem, configuration systems like [puppet][], [salt][] or [chef][], the one powering the internal configuration of the GitLab Omnibus package whenever you run `gitlab-ctl reconfigure`, were created.

In this post you will learn how to completely automate the deployment of your puppet configuration from your git repository to production use on your puppet server.

[puppet]: https://puppetlabs.com/puppet/puppet-open-source
[salt]: http://saltstack.com/community/
[chef]: https://www.chef.io/chef/

<!-- more -->

## Why Puppet?

A configuration management tool like puppet in which you explicitly specify the state you want a certain machine to be in makes rolling out the same configuration to multiple machines a breeze. Given that I had to administrate 26 machines (both virtual and physical ones) in only 20 hours a week, the need for a more time-efficient configuration solution was very real.

By using puppet - in combination with GitLab CI I am now able to roll out new configuration to our machines in a matter of minutes by just pushing to `master` in our corresponding git repository. It makes deploying tested configurations a breeze and saves me from manually provisioning an unreasonable amount of machines individually.

One concrete example for our usage of puppet would be configuring SSH on our machines. We want:

+ All members of the admin team to be able to use their own SSH key to log in to all machines.
+ To exchange the default crypto settings of the distribution for `sshd` to our own preferences.
+ To restrict logging in via password based authentication to a few selected hosts.

Of course, for configuration as for "real" program code, it is helpful to have it all versioned in case something *does* go wrong and you need to roll back - so using git was imperative. Since we already had an instance of GitLab running and GitLab CI was rolled into the main software a while back, it meant fully automated deployment was in reach.

The basic idea for this workflow is:

+ You commit and push to your puppet repository
+ GitLab CI tests your setup according to your provided requirements
+ GitLab CI deploys your configuration to your puppetmaster if all tests were succesfull 
+ The next time a puppet client asks the puppetmaster for its configuration catalogue it will be served the new configuration you checked in

## Why Continous Integration?

Since it takes time to test each set of changes in a VM even when using a helpful tool such as [vagrant][], you may want to rely on a set of automatically run tests for minor changes. One way this can be achieved is by using GitLab CI.

[vagrant]: https://www.vagrantup.com

Personally, I've most enjoyed using CI to find files which I have specified in the code to be included but forgot to add to the repository. *Or I may have typed their name or path wrong. Doesn't really matter.*

### Why use Docker?

It's the easiest, most comfortable way to provide a reasonable degree of isolation. Using containers in contrast to virtual machines is also pretty damn fast considering that a container does not have to be booted up and no hardware emulation needs to be done.

Also, if you're willing to expose some of your infrastructure to public websites like GitHub or BitBucket, you can have the [Docker Hub][hub] rebuild your custom Docker image whenever you push to that repository. Furthermore you can link your image with the one your image is based on, so that it will be automatically rebuilt when that one is updated (e.g. for security updates).

[hub]: https://hub.docker.com

One word of advice though: If you have the option to pre-build your own docker images instead of running `apt-get install whatever` in your build jobs, do so.
In my setup we cut the **total runtime from almost 3 minutes to ligthing-fast 10 seconds** by tailoring the docker image more precisely to our needs.

And, please, if you are not sure of the security implications, stick with official builds. Those are clearly [labeled as such on the Docker Hub][official].

[official]: https://hub.docker.com/explore/

### Test Setup

For the purpose of this article I will assume that your setup looks similar to this list:

- several puppet clients
- one puppetmaster
- a GitLab instance
- a private GitLab CI runner (or a host which can become one)

The aim is to have the code checked and distributed.

#### One first test

In order to run automated tests, those tests have to be specified somewhere. This is the `.gitlab-ci.yml` file in the root of your repository.

~~~yaml
puppet:
  stage: build
  script: tests/puppet-validate.sh
  tags:
  - puppet
~~~

In order to structure your tests better you will want to have them in single files, in one separate directory. The simplest form of test will be to have puppet make sure your syntax is correct. Edit `tests/puppet-validate.sh` to contain the following:

~~~Bash
#!/bin/bash
set -euo pipefail

find . -type f -name "*.pp" | xargs puppet parser validate --debug
~~~

This will make puppet check every `.pp` file for errors in your syntax.

After you pushed these two changes into your repository, GitLab will automatically enable CI for this project.


#### GitLab CI Multi Runner

The software which runs on the clients to set up the environment, test your code and tear the environment down aftewards is called `gitlab-ci-multi-runner` and available [at their project site on GitLab.com][ci-runner].

[ci-runner]: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner

After installing it on the host you wish to run your tests on, the client needs to be registered as a private runner - you don't wish to potentially share your puppet builds with anyone else. Do so by referring to these [excellent instructions in the official docs][docs] and don't forget to tag your newly registered host with `puppet`.

[docs]: http://docs.gitlab.com/ce/ci/quick_start/

After having registered the runner you can try to push to the branch with a simple test commit to see the CI in action for the first time.

#### Puppet Deployment

If you have confirmed that your runner and CI setup works, you can tackle the next part, setting up another runner directly on your puppetmaster with executor `shell`.

Here, you would fetch all external modules that you need and then have the entire directory rsync'ed into production. For good measure you can stop and restart the puppetmaster service during deployment so that no failures occur on the clients.

~~~yaml
puppetmaster:
  stage: deploy
  only: 
    - master
  script:
    - make
    - sudo service apache2 stop
    - rsync --omit-dir-times --recursive --group --owner --links --perms --human-readable --sparse --force --delete --stats . /etc/puppet
    - sudo service apache2 start
  tags:
    - puppetmaster
~~~

In the example I assume that you are using a Makefile thatl looks somewhat like the following example. Of course you can also substitute your own method for getting third-party modules. The importance for this example is just that you install to `./modules` in order to `rsync` everything that you prepared into production.

~~~makefile
INSTALL := puppet module install
TARGET_DIR := `pwd`/modules
TARGET := --target-dir $(TARGET_DIR)

modules:
  @echo "Info: Installing required puppet modules from forge.puppetlabs.com."
  mkdir -p $(TARGET_DIR)
  # Puppetlabs modules
  $(INSTALL) puppetlabs-stdlib $(TARGET)
  $(INSTALL) puppetlabs-apt $(TARGET)

.PHONY: modules
~~~

### Writing tests

You will want to run as many good tests as you can come up with against your code base. Some things you can do with your CI when using puppet:

- Test your puppet syntax (see [puppet parser][parser])
- Test your ERB syntax (used for templates, see [rails-erb-lint][erb])
- Test your coding standard (see [puppet-lint][lint])
- Test whether your things are documented
- Check if applications accept configured values
- Use rspec to check if your puppet code does what you want (Note: *I have not yet looked into using rspec*)
- Install applications, run parts of your puppet code and check if these applications accept the values you assigned their configuration ("acceptance tests")

[parser]: https://puppet.com/blog/verifying-puppet-checking-syntax-and-writing-automated-tests
[lint]: https://github.com/rodjek/puppet-lint
[erb]: https://github.com/katgironpe/rails-erb-lint

Writing tests is an easy process. Every command that you execute has an exit code. If this exit code is not `0`, the CI recognizes this build as failed. If you want to make your own more complex checks instead of relying on piping together several commands, make your scripts fail the build by returning anything else than `0` on return.

TODO: improve test setup
TODO: proofread (writing tests, suggestions)
TODO: section (consider usage of stages)
TODO: proofread deployment