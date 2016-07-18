---
title: "The logic of GitLab CI"
date: 2016-07-17
categories: howto
author: Ivan Nemytchenko
author_twitter: inemation
#image_title: '/images/50th/cover.png'

---

<div id="aside" style="width:400px; height:400px; position:fixed; right:0px; border: 1px solid grey">
  - blank -
</div>


Let's assume that you don't know anything about what is Continuous Integration and why it is needed. Or you just forgot it. Anyhow, we're starting from scratch.

Imagine, you work on a project, where all the code consists of two text files. And it is super-critical that concatenation of these two files contains the phrase "Hello world".

If there's no such phrase, the whole development team stays without a salary for a month. Yeah, that's damn serious!

The most responsible developer wrote a small script to run every time we're about to send our code to customers.
Code is pretty sophisticated:

```bash
cat file1.txt file2.txt | grep -q "Hello world"
```

The problem is that there are ten developers in the team, and, you know, human factor can hit hard.

It already happened once in last four month, so you decided to solve the problem once and for all. Luckily your code is already on GitLab, and you've heard that there is built-in CI system. And you've heard at a conference, that people use CI to run tests...


### Run our first test inside CI

Five minutes to find and read the docs, and it looks like all we need is these two lines of code in `.gitlab-cy.yml`:
{: #step1}

```yaml
test:
  script: cat file1.txt file2.txt | grep -q 'Hello world'
```

Committing it, and hooray! Our build [is successful](https://gitlab.com/inem/ci/builds/2346110)!

To make sure it won't pass for incorrect data, changing the contents of the second file, and build [has failed](https://gitlab.com/inem/ci/builds/2346623) as expected.

Okay, it looks like we now have automated testing here! Big deal!

The next step is to pack the code before sending it to our customers. Let's automate it as well!

### Make results of builds downloadable

{: #step2}

```yaml
test:
  script: cat file1.txt file2.txt | grep -q 'Hello world'

build:
  script: cat file1.txt file2.txt | gzip > build.gz
```

We added 'build' task. And it works. We see two tabs now:

![](2016-07-13-18-00-18.png)

But we forgot to tell GitLab to pass the archive to build artifacts, so that it could be downloaded. Fixing it:
{: #step3}

```yaml
test:
  script: cat file1.txt file2.txt | grep -q 'Hello world'

build:
  script: cat file1.txt file2.txt | gzip > build.gz
  artifacts:
    paths:
    - build.gz
```

Checking... It is there:

![](2016-07-13-18-07-14.png)

Perfect!
But we have a problem to fix: Jobs are running in parallel, but we don't want to generate archive if our tests fail.

### Run jobs consequentially

We can define order by specifying stages:
{: #step4}

```yaml
stages:
  - test
  - build

test:
  stage: test
  script: cat file1.txt file2.txt | grep -q 'Hello world'

build:
  stage: build
  script: cat file1.txt file2.txt | gzip > build.gz
  artifacts:
    paths:
    - build.gz

```

That should be good!
And we forgot to mention, that compilation(which is represented by concatenation in our case) takes a while, so we don't want it to run twice. Let's define separate step for it:
{: #step5}

```yaml
stages:
  - compile
  - test
  - build

compile:
  stage: compile
  script: cat file1.txt file2.txt > compiled.txt
  artifacts:
    paths:
    - compiled.txt

test:
  stage: test
  script: cat compiled.txt | grep -q 'Hello world'

build:
  stage: build
  script: cat compiled.txt | gzip > build.gz
  artifacts:
    paths:
    - build.gz

```

Let's take a look at our artifacts:
![](2016-07-14-07-52-29.png)

Hmm, we don't need that `compiled` file to be downloadable. The following looks like a cheat, but it should work and serves the purpose for now: `expire_in: 2 minutes`.


Now our config looks pretty impressive:
- We have three following stages to compile, test and build our application.
- We are passing compiled app to the next **stages** so that there's no need to build it twice(so it'll be faster)
- We're storing packed version of out app in build artifacts for further usage


### Learning what Docker image to use

But it looks like builds are still slow. Wait, what is this?
```
Using Docker executor with image ruby:2.1 ...
Pulling docker image ruby:2.1 ...
```

Why do we need ruby at all? Oh, it looks like GitLab uses Docker images to run our builds, and [by default]((https://about.gitlab.com/gitlab-com/settings/)) it takes image `ruby:2.1`. This image for sure contains a lot of packages we don't need. After a minute of googling figuring out that there's an image called `alpine` which includes a minimum of stuff.

Ok, let's specify explicitly, that we want to use this image by adding `image: alpine` to `.gitlab-ci.yml`
Now we're talking!:

![](2016-07-13-19-09-32.png)

It looks like there's a lot of public images around. And we can just grab one for our technology stack. It makes sense to specify an image, which contains no extra software because it minimizes download time.


### Pipelines

So far so good. But we've just got a new client. The client wants us to send him '.tar' instead of '.gz'
It is not a problem for us anymore. Since CI does whole work, let's just add one more job to it:
{: #step8}

```yaml
image: alpine

stages:
  - compile
  - test
  - build

compile:
  stage: compile
  script: cat file1.txt file2.txt > compiled.txt
  artifacts:
    paths:
    - compiled.txt
    expire_in: 5 minutes

build:gz:
  stage: build
  script: cat compiled.txt | gzip > build.gz
  artifacts:
    paths:
    - build.gz

build:tar:
  stage: build
  script: tar cf - compiled.txt > build.tar
  artifacts:
    paths:
    - build.tar
```

Wow, it looks like we have a pipeline here:

![](draw-a-pictue-of-pipeline.png)

And now it is evident, why we need a duplication like this:
```yaml
test:
  stage: test
```
Now jobs "build:gz" and "build:tar" are running in parallel as parts of stage "build".


### Deployment and Environments

TODO

(install rsync, use `only` or `except`, environments, not sure about `when`)



<script type="text/javascript">
  var anchor_offset = $('#step1').offset().top;

  $(window).on('scroll', function() {
    if ( $(window).scrollTop() > anchor_offset - 100)
      $('#aside').html($('#step1').next("pre").html());
  });
</script>