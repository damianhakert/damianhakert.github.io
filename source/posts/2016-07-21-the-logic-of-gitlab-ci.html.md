---
title: "The logic of GitLab CI"
date: 2016-07-21
categories: tutorial
author: Ivan Nemytchenko
author_twitter: inemation
#image_title: '/images/50th/cover.png'

---

<div id="aside" style="width:500px; height:450px; position:fixed; right:0px; top: 200px; padding: 4px; margin:4px; font-size:90%">
</div>

Let's assume that you do not know anything about what is Continuous Integration and why it is needed. Alternatively, you just forgot it. Anyhow, we are starting from scratch.

Imagine, you work on a project, where all the code consists of two text files. Moreover, it is super-critical that concatenation of these two files contains the phrase "Hello world".

![](/images/blogimages/ci-logic/hello.png)

If there's no such phrase, the whole development team stays without a salary for a month. Yeah, that is damn serious!

<!-- more -->

The most responsible developer wrote a small script to run every time we are about to send our code to customers.
Code is pretty sophisticated:

```bash
cat file1.txt file2.txt | grep -q "Hello world"
```

The problem is that there are ten developers in the team, and, you know, human factor can hit hard.

It already happened once in last four month, so you decided to solve the problem once and for all. Luckily your code is already on GitLab, and you remember that there is [built-in CI system](https://about.gitlab.com/gitlab-ci/). Moreover, you have heard at a conference, that people use CI to run tests...


### Run our first test inside CI

Five minutes to find and read the docs, and it seems like all we need is these two lines of code in file called `.gitlab-ci.yml` [(?)](http://docs.gitlab.com/ce/ci/yaml/README.html) :
{: .step}

```yaml
test:
  script: cat file1.txt file2.txt | grep -q 'Hello world'
```

Committing it, and hooray! Our build is successful:
[![](/images/blogimages/ci-logic/success.png)](https://gitlab.com/inem/ci/builds/2346110)

Lets change "world" to "Africa" in the second file and check what will happen:
[![](/images/blogimages/ci-logic/failure.png)](https://gitlab.com/inem/ci/builds/2346623)

Build fails as expected!</br>
Okay, we now have automated tests here!

The next step is to pack the code before sending it to our customers. Let's automate it as well!

### Make results of builds downloadable

All we need to do is to define another job for CI. Let's name it "build":
{: .step}

```yaml
test:
  script: cat file1.txt file2.txt | grep -q 'Hello world'

build:
  script: cat file1.txt file2.txt | gzip > build.gz
```

We have two tabs now:
![](/images/blogimages/ci-logic/twotabs.png)

However, we forgot to specify what should be passed to build _artifacts_, so that it could be downloaded. Fixing it by adding `artifacts`section:
{: .step}

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
![](/images/blogimages/ci-logic/artifacts.png)

Perfect!
However, we have a problem to fix: jobs are running in parallel, but we do not want to generate archive if our tests fail.

### Run jobs consequentially

We only want to run 'build' job if tests are successful. Let's define order by specifying `stages`:
{: .step}

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

That should be good!<br/>
Also, we forgot to mention, that compilation (which is represented by concatenation in our case) takes a while, so we do not want it to run twice. Let's define separate step for it:
{: .step}

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

![](/images/blogimages/ci-logic/clean-artifacts.png)

Hmm, we do not need that "compile" file to be downloadable. The following looks like a cheat, but it should work and serves the purpose for now: `expire_in: 2 minutes`.
{: .step}

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
    expire_in: 2 minutes

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

Now our config looks pretty impressive:

- We have three following stages to compile, test and build our application.
- We are passing compiled app to next stages so that there's no need to build it twice (so it will run faster)
- We are storing packed version of out app in build artifacts for further usage


### Learning what Docker image to use

However, it appears our builds are still slow. Wait, what is this?

```
Using Docker executor with image ruby:2.1 ...
Pulling docker image ruby:2.1 ...
```

Why do we need Ruby at all? Oh, GitLab uses Docker images to run our builds, and [by default](https://about.gitlab.com/gitlab-com/settings/) it uses image [ruby:2.1](https://hub.docker.com/_/ruby/). This image for sure contains many packages we do not need. After a minute of googling figuring out that there's an image called [alpine](https://hub.docker.com/_/alpine/) which is almost blank Linux image.

Ok, let's specify explicitly, that we want to use this image by adding `image: alpine` to `.gitlab-ci.yml`
Now we are talking!:
{: .step}

<div style="display: none">
<pre><code>image: alpine

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
    expire_in: 2 minutes

test:
  stage: test
  script: cat compiled.txt | grep -q 'Hello world'

build:
  stage: build
  script: cat compiled.txt | gzip > build.gz
  artifacts:
    paths:
    - build.gz
</code></pre>
</div>

![](/images/blogimages/ci-logic/speed.png)

It looks like [there's](https://hub.docker.com/_/mysql/) [a lot of](https://hub.docker.com/_/python/) [public images](https://hub.docker.com/_/java/) [around](https://hub.docker.com/_/php/). So we can just grab one for our technology stack. It makes sense to specify an image, which contains no extra software because it minimizes download time.


### Dealing with complex scenarios

So far so good. However, let's suppose we have just got a new client, who wants to get `.tar` instead of `.gz`<br/>
Since CI does the whole work, let's just add one more job to it:
{: .step}

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
    expire_in: 2 minutes

test:
  stage: test
  script: cat compiled.txt | grep -q 'Hello world'

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
![](/images/blogimages/ci-logic/pipeline.png)

It is evident, why we need a duplication like this:

```yaml
test:
  stage: test
```

Now jobs "build:gz" and "build:tar" are running in parallel as parts of stage "build".

<!--### Deployment and Environments

TODO

(install rsync, use `only` or `except`, environments, not sure about `when`)

<script src="https://code.jquery.com/jquery-3.1.0.slim.min.js" integrity="sha256-cRpWjoSOw5KcyIOaZNo4i6fZ9tKPhYYb6i5T9RSVJG8=" crossorigin="anonymous"></script>
-->

<script type="text/javascript">
// $(document).ready(function() {
//   setTimeout(function (){

//     // 1. find the closest .step element
//     // 2. take closes "pre" block content and put it to aside
//     $.each($(".step"), function(i, step){
//       var anchor_offset = $(step).offset().top;
//       $(window).on('scroll', function() {
//         if ( $(window).scrollTop() > anchor_offset - 200) {
//           var code = $(step).next("pre").html();
//           $('#aside').html("<pre>" + code + "</pre>");
//         }
//       });
//     })
//   }, 1000);
// })
</script>