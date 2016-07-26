---
title: "GitLab CI: Learn how to run jobs sequentially, in parallel, or build a custom pipeline"
date: 2016-07-28
categories: tutorial
author: Ivan Nemytchenko
author_twitter: inemation
#image_title: '/images/50th/cover.png'

---

Let's assume that you don't know anything about what  Continuous Integration is and why it's needed. Or, you just forgot. Anyway, we're starting from scratch here.

Imagine, you work on a project, where all the code consists of two text files. Moreover, it is super-critical that concatenation of these two files contains the phrase "Hello world".

![](/images/blogimages/ci-logic/hello.png)

If there's no such phrase, the whole development team stays without a salary for a month. Yeah, that is damn serious!

<!-- more -->

The most responsible developer wrote a small script to run every time we are about to send our code to customers.
Code is pretty sophisticated:

```bash
cat file1.txt file2.txt | grep -q "Hello world"
```

The problem is that there are ten developers in the team, and, you know, human factors can hit hard.

It already happened once in the last four months, so you decided to solve the problem once and for all. Luckily, your code is already on GitLab, and you remember that there is a [built-in CI system](https://about.gitlab.com/gitlab-ci/). Moreover, you heard at a conference that people use CI to run tests...

## Run our first test inside CI

Five minutes to find and read the docs, and it seems like all we need is these two lines of code in a file called `.gitlab-ci.yml` [(?)](http://docs.gitlab.com/ce/ci/yaml/README.html) :
{: .step}

```yaml
test:
  script: cat file1.txt file2.txt | grep -q 'Hello world'
```

Committing it, and hooray! Our build is successful:
![](/images/blogimages/ci-logic/success.png)

Let's change "world" to "Africa" in the second file and check what happens:
![](/images/blogimages/ci-logic/failure.png)

The build fails as expected!
Okay, we now have automated tests here!

## Make results of builds downloadable

The next business requirement is to package the code before sending it to our customers. Let's automate it as well!

All we need to do is to define another job for CI. Let's name it "package":
{: .step}

```yaml
test:
  script: cat file1.txt file2.txt | grep -q 'Hello world'

package:
  script: cat file1.txt file2.txt | gzip > package.gz
```

We have two tabs now:
![](/images/blogimages/ci-logic/twotabs.png)

However, we forgot to specify that the new file is a build _artifact_, so that it could be downloaded. We fix it by adding an `artifacts` section:
{: .step}

```yaml
test:
  script: cat file1.txt file2.txt | grep -q 'Hello world'

package:
  script: cat file1.txt file2.txt | gzip > packaged.gz
  artifacts:
    paths:
    - packaged.gz
```

Checking... It is there:
![](/images/blogimages/ci-logic/artifacts.png)

Perfect!
However, we have a problem to fix: the jobs are running in parallel, but we do not want to package our application if our tests fail.

## Run jobs sequentially

We only want to run the 'package' job if the tests are successful. Let's define the order by specifying `stages`:
{: .step}

```yaml
stages:
  - test
  - package

test:
  stage: test
  script: cat file1.txt file2.txt | grep -q 'Hello world'

package:
  stage: package
  script: cat file1.txt file2.txt | gzip > packaged.gz
  artifacts:
    paths:
    - packaged.gz
```

That should be good!

Also, we forgot to mention, that compilation (which is represented by concatenation in our case) takes a while, so we don't want to run it twice. Let's define a separate step for it:
{: .step}

```yaml
stages:
  - compile
  - test
  - package

compile:
  stage: compile
  script: cat file1.txt file2.txt > compiled.txt
  artifacts:
    paths:
    - compiled.txt

test:
  stage: test
  script: cat compiled.txt | grep -q 'Hello world'

package:
  stage: package
  script: cat compiled.txt | gzip > packaged.gz
  artifacts:
    paths:
    - packaged.gz
```

Let's take a look at our artifacts:

![](/images/blogimages/ci-logic/clean-artifacts.png)

Hmm, we do not need that "compile" file to be downloadable. Let's make our temporary artifacts expire by setting `expire_in: 20 minutes`. It might look like cheating, but it works and serves the purpose:
{: .step}

```yaml
compile:
  stage: compile
  script: cat file1.txt file2.txt > compiled.txt
  artifacts:
    paths:
    - compiled.txt
    expire_in: 20 minutes
```

Now our config looks pretty impressive:

- We have three sequential stages to compile, test, and package our application.
- We are passing the compiled app to the next stages so that there's no need to run compilation twice (so it will run faster).
- We are storing a packaged version of our app in build artifacts for further usage.

## Learning what Docker image to use

However, it appears our builds are still slow. Let's look at the logs.

![](/images/blogimages/ci-logic/logs.png)

Wait, what is this?

Why do we need Ruby at all? Oh, GitLab uses Docker images to run our builds, and [by default](https://about.gitlab.com/gitlab-com/settings/) it uses the [`ruby:2.1`](https://hub.docker.com/_/ruby/) image. For sure, this image contains many packageages we don't need. After a minute of googling, we figure out that there's an image called [`alpine`](https://hub.docker.com/_/alpine/) which is an almost blank Linux image.

Ok, let's explicitly specify that we want to use this image by adding `image: alpine` to `.gitlab-ci.yml`.
Now we're talking! We shaved 2 minutes off:
{: .step}

<div style="display: none">
<pre><code>image: alpine

stages:
  - compile
  - test
  - package

compile:
  stage: compile
  script: cat file1.txt file2.txt > compiled.txt
  artifacts:
    paths:
    - compiled.txt
    expire_in: 20 minutes

test:
  stage: test
  script: cat compiled.txt | grep -q 'Hello world'

package:
  stage: package
  script: cat compiled.txt | gzip > packaged.gz
  artifacts:
    paths:
    - packaged.gz
</code></pre>
</div>

![](/images/blogimages/ci-logic/speed.png)

It looks like [there's](https://hub.docker.com/_/mysql/) [a lot of](https://hub.docker.com/_/python/) [public images](https://hub.docker.com/_/java/) [around](https://hub.docker.com/_/php/). So we can just grab one for our technology stack. It makes sense to specify an image which contains no extra software because it minimizes download time.

## Dealing with complex scenarios

So far so good. However, let's suppose we just got a new client who wants to get an `.iso` instead of `.gz`
Since CI does the whole work, we can just add one more job to it.
Iso images can be created using the `mkisofs` command. Here's how our config should look:

```yaml
image: alpine

stages:
  - compile
  - test
  - package

# ... "compile" and "test" jobs are skipped here for the sake of compactness

package:gz:
  stage: package
  script: cat compiled.txt | gzip > packaged.gz
  artifacts:
    paths:
    - packaged.gz

package:iso:
  stage: package
  script:
  - mkisofs -o ./packaged.iso ./compiled.txt
  artifacts:
    paths:
    - packaged.iso
```

However, `mkisofs` is not included in the `alpine` image, so we need to install it first.

## Dealing with missing software/packageages

According to the [Alpine linux website](https://pkgs.alpinelinux.org/contents?file=mkisofs&path=&name=&branch=&repo=&arch=x86) `mkisofs` is a part of the `xorriso` and `cdrkit` packageages. These are the magic commands that we need to run to install a packageage:

```bash
echo "ipv6" >> /etc/modules  # enable networking
apk update                   # update packageages list
apk add xorriso              # install packageage
```

For CI, these are just like any other commands. The full list of commands we need to pass to `script` section should look like this:

```yml
script:
- echo "ipv6" >> /etc/modules
- apk update
- apk add xorriso
- mkisofs -o ./packaged.iso ./compiled.txt
```

However, to make it semantically correct, let's put commands related to packageage installation in `before_script`. Note that if you use `before_script` at the top level of a configuration, then the commands will run before all jobs. In our case, we just want it to run before one specific job.

Our final version of `.gitlab-ci.yml`:
{: .step}

```yaml
image: alpine

stages:
  - compile
  - test
  - package

compile:
  stage: compile
  script: cat file1.txt file2.txt > compiled.txt
  artifacts:
    paths:
    - compiled.txt
    expire_in: 20 minutes

test:
  stage: test
  script: cat compiled.txt | grep -q 'Hello world'

package:gz:
  stage: package
  script: cat compiled.txt | gzip > packaged.gz
  artifacts:
    paths:
    - packaged.gz

package:iso:
  stage: package
  before_script:
  - echo "ipv6" >> /etc/modules
  - apk update
  - apk add xorriso
  script:
  - mkisofs -o ./packaged.iso ./compiled.txt
  artifacts:
    paths:
    - packaged.iso
```

Wow, it looks like we have just created a pipeline! We have three sequential stages, but jobs `package:gz` and `package:iso`, inside the `package` stage, are running in parallel:

![](/images/blogimages/ci-logic/pipeline.png)

## Summary

There's much more to cover but let's stop here for now. I hope you liked this short story. All examples were made trivial intentionally so that you could learn concepts of GitLab CI without being distracted by an unfamiliar technology stack. Let's wrap up what we have learned:

1. To delegate some work to GitLab CI you should define one or more [jobs](http://docs.gitlab.com/ce/ci/yaml/README.html#jobs) in `.gitlab-ci.yml`.
2. Jobs should have names, and it's your responsibility to come up with good names.
3. Every job contains a set of rules & instructions for GitLab CI, defined by [special keywords](#keywords).
4. Jobs can run sequentially, in parallel, or you can define a custom pipeline.
5. You can pass files between jobs and store them in build artifacts so that they can be downloaded from the interface.

Below is the last section containing a more formal description of terms and keywords we used, as well as links to the detailed description of GitLab CI functionality.


### Keywords description & links to the documentation
{: #keywords}

| Keyword/term       | Description |
|---------------|--------------------|
| [.gitlab-ci.yml](http://docs.gitlab.com/ce/ci/yaml/README.html#gitlab-ci-yml) | File containing all definitions of how your project should be built |
| [script](http://docs.gitlab.com/ce/ci/yaml/README.html#script)        | Defines a shell script to be executed |
| [before_script](http://docs.gitlab.com/ce/ci/yaml/README.html#before_script) | Used to define the command that should be run before (all) jobs |
| [image](http://docs.gitlab.com/ce/ci/docker/using_docker_images.html#what-is-image) | Defines what docker image to use |
| [stage](http://docs.gitlab.com/ce/ci/yaml/README.html#stages)         | Defines a pipeline stage (default: `test`) |
| [artifacts](http://docs.gitlab.com/ce/ci/yaml/README.html#artifacts)     | Defines a list of build artifacts |
| [artifacts:expire_in](http://docs.gitlab.com/ce/ci/yaml/README.html#artifactsexpire_in) | Used to delete uploaded artifacts after the specified time |
| [pipelines](http://docs.gitlab.com/ee/ci/pipelines.html#pipelines) | A pipeline is a group of builds that get executed in stages (batches) |

Don't miss these GitLab CI stories as well:

- [Migrating from Jenkins to GitLab CI](https://blog.captaintrain.com/12703-building-on-gitlab-ci)
- [Decreasing build time from 8 minutes 33 seconds to just 10 seconds](http://beenje.github.io/blog/posts/gitlab-ci-and-conda/)
