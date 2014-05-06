---
layout: post
title: "GitLab CI 5.0 released"
date: 2014-05-06 15:55:40 +0300
comments: true
categories: 
author: Dmitriy Zaporozhets
---

Hi everyone!

As you know GitLab CI is a continuous integration server.
It integrates with your GitLab installation and runs tests for your projects.

Today we release a new version of GitLab CI.

[![screenshot](/images/ci_5/dash.png)](/images/ci_5/dash.png)

<!--more-->

## Why version 5?

You may know that GitLab CI contains 2 components: Coordinator(web application) and Runner.
And we release major version of CI because of runner.

Runner actually run builds for you. And we changed the way how build is served.
Before you have each line of build script executed in separate process. So if you do `cd` command or set ENV variable - it was unavailable in next line.

With new runner all lines of the build script will be concatenated in one file and executed. 
If you change the working directory or the environment in one line - it will affect the next lines too.


[![screenshot](/images/ci_5/edit.png)](/images/ci_5/edit.png)

Old runner code had some other problems: 

* aborting running tests from the gitlab-ci didn't work (it marked the job as failed, but didn't kill the build)
* the runner didn't properly handle crashing build scripts (it considered the build is still running forever)

With new code runner creates a single temporary bash script which contains all the commands the build needs. 
The script itself is then exectued as a child process in its own session (process group) by the runner. 
This way we can ensure that killing the script also kills all its childs.

__We want to thank Corin Langosch for contributing such improvements into runner code__

## Web hooks

In order to build some services based on GitLab CI you may need hooks that send data when build finished.
GitLab itself has such hooks but CI does not.
In version 5 we added web hooks functionality. Thanks to Võ Anh Duy for help with this feature.

[![screenshot](/images/ci_5/hooks.png)](/images/ci_5/hooks.png)

## Screenshots

We changed colors a bit for more fresh look. 
See screenshots below:

[![screenshot](/images/ci_5/project.png)](/images/ci_5/project.png)

[![screenshot](/images/ci_5/build.png)](/images/ci_5/build.png)


## Update process

If you already use GitLab CI you need to follow [Update guide]() for Coordinator and update all your Runners to version 5.
You can find Runner update guide [here](). Also check your builds scripts for projects to make sure they are compatible with new behaviour.

## New setup

You can setup new GitLab CI instance using [installation guide]()

## Support

If you look for paid support for GitLab CI instances - please contact us SUPPORT_EMAIL
