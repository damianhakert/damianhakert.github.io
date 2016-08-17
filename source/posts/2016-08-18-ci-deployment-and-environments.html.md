---

title: "GitLab CI: Deployment & environments"
description: "GitLab CI: Learn how to set up deployment pipeline to multiple environments"
categories: GitLab CI
author: Ivan Nemytchenko
author_twitter: inemation
image_title: '/images/blogimages/ci-deployment-and-environments/intro.png'

---

## GitLab CI: Deployment & environments  

In [the earlier blog](https://about.gitlab.com/2016/07/29/the-basics-of-gitlab-ci/) post we have covered the very basics of GitLab CI. Today we'll be deploying your web application. 

Luckily you already host your project code on GitLab.com. You already know that you can run tests inside GitLab CI. Now you’re curious whether it can be used for deployment, and how far can you go with it.

To keep our story technology stack-agnostic, let's assume that the app is just a set of HTML files. No server side, no fancy JS assets compilation.

Destination platform is also simplistic - we will use Amazon S3.

Warning: The goal of the article is not to give you a bunch of copypasteable snippets. The goal is to show principles & features of GitLab CI so that you could apply them to your technology stack with ease.

Let’s start from the beginning: no CI in our story yet.

<!-- more -->

## A starting point

You need to put a bunch of HTML files to S3, which is already configured to for [static website hosting](http://docs.aws.amazon.com/AmazonS3/latest/dev/HowDoIWebsiteConfiguration.html?shortFooter=true).

There're a million ways to do it. We’ll use library [awscli](http://docs.aws.amazon.com/cli/latest/reference/s3/cp.html#examples), provided by Amazon. 

Full command looks like this:

`aws s3 cp ./ s3://yourbucket/ --recursive --exclude "*" --include "*.html"`

Important detail: the command [expects you](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#config-settings-and-precedence) to provide ``AWS_ACCESS_KEY_ID` and  `AWS_SECRET_ACCESS_KEY`` environment variables. Also you might need to specify `AWS_DEFAULT_REGION`.

Above might look like unnecessary details for a person who never cared how S3 works. But for us, it is just an example of a command used to deliver code to a destination system.

The principle is more or less the same, no matter what tool you use and where you deploy to.

Let’s see what GitLab offers us.

## First automated deployment

Frankly speaking, for GitLab there's no difference what commands to run. Put your script to `.gitlab-ci.yml` and push your code - that’s it: CI triggers a job, your commands are executed.

So far your website is small, you have 20-30 daily visitors, so you’re developing everything in `master` branch. 

Minimal `.gitlab-ci.yml` should look like this:

```yaml
deploy:
  script: aws s3 cp ./ s3://yourbucket/ --recursive --exclude "*" --include "*.html"
```

No luck: 

![Failed command](#)(/images/blogimages/ci-deployment-and-environments/fail1.png){: .shadow}

It is our job to ensure that there is an `aws` executable. Let’s specify image with preinstalled python and install `awscli` using `pip`:  

```yaml
deploy:
  image: python:latest
  script:
  - pip install awscli
  - aws s3 cp ./ s3://yourbucket/ --recursive --exclude "*" --include "*.html"
```

Installation of `awscli` extends job execution time. If you need speed, look for a Docker image with preinstalled `awscli`, or create an image by yourself.

Also, let’s not forget about these environment variables:

```yaml
variables:
  AWS_ACCESS_KEY_ID: "AKIAIOSFODNN7EXAMPLE"
  AWS_SECRET_ACCESS_KEY: “wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY”
deploy:
  image: python:latest
  script:
  - pip install awscli
  - aws s3 cp ./ s3://yourbucket/ --recursive --exclude "*" --include "*.html"
```

It should work, however keeping secret keys open, even in a private repository, is not a good idea.


### Keeping secret things secret

There is a special place for secret variables: **Settings → Variables**

![Picture of Variables page](#)(/images/blogimages/ci-deployment-and-environments/variables.png){: .shadow}

Whatever you put there will be turned into environment variables. 

Only the administrator of a project can see and change Variables.

We could remove `variables` section from our config. However, let’s use it for another purpose.


### Specifying and using non-secret variables

Let’s create a variable for S3 bucket name so it’ll be convenient to change it in future:

```yaml
variables:
  S3_BUCKET_NAME: "yourbucket"
deploy:
  image: python:latest
  script:
  - pip install awscli
  - aws s3 cp ./ s3://$S3_BUCKET_NAME/ --recursive --exclude "*" --include "*.html"
```

So far so good:

![Successful build](#)(/images/blogimages/ci-deployment-and-environments/build.png){: .shadow}

But the audience of your website grows, so you hired one more guy to help you. Team growth should definitely affect the workflow.


## Dealing with teamwork

Now there’s two of you working on the same website. It is no longer convenient to work in `master` branch. You write new articles in separate branches and merge them into `master` when they are ready.

The problem is that you current CI config doesn’t care about branches at all. Whenever you push anything to GitLab, it will be deployed to S3.

We can prevent this easily by adding `only: master` to our “deploy” job.

It would also be nice to preview work on these branches.


### Separate place for testing

Patrick(the guy you recently hired) reminds you that there is such a thing called [GitLab Pages](http://pages.gitlab.io). It looks like a perfect candidate for a place to preview work in progress. 

To host something on GitLab Pages your CI configuration should satisfy these simple rules:

- the job should be named “pages”
- there should be an `artifacts` section  with folder “public” in it
- everything you want to host should be in this “public” folder

After applying [example config for plain-html websites](https://gitlab.com/pages/plain-html/blob/master/.gitlab-ci.yml), full CI configuration looks like this:

```yaml
variables:
  S3_BUCKET_NAME: "yourbucket"

deploy:
  image: python:latest
  script:
  - pip install awscli
  - aws s3 cp ./ s3://$S3_BUCKET_NAME/ --recursive --exclude "*" --include "*.html"
  only: 
  - master

pages:
  image: alpine:latest
  script:
  - mkdir -p ./public
  - cp ./*.html ./public/
  artifacts:
    paths:
    - public
  except: 
  - master
```

But “except master” means that one can trigger a deploy, while another tries to preview his branch.


### Slack notifications

You set up Slack notifications about deployments to prevent collisions.

It is a [straightforward process](http://docs.gitlab.com/ce/project_services/slack.html).

The whole idea is to take Incoming WebHook URL from Slack... 

![Grabbing Incoming WebHook URL in Slack](#)(/images/blogimages/ci-deployment-and-environments/incoming-webhook.png){: .shadow}

...and put it into **Settings → Services → Slack** together with your Slack nickname:

![Configuring Slack Service in GitLab](#)(/images/blogimages/ci-deployment-and-environments/services-slack.png){: .shadow}

We only care about deploy, so uncheck all the checkboxes, except “Build” in the settings above. That’s it. Now you’re notified of every deployment:

![Deployment notifications in Slack](#)(/images/blogimages/ci-deployment-and-environments/slack.png){: .shadow}


## Environments

Ok, let’s return to our config. We specified two jobs. One job deploys the website for your customers to S3. Another - for developers to GitLab Pages.

They are being called Production and Staging environments.

It looks like GitLab has [support for environments](http://docs.gitlab.com/ee/ci/environments.html#environments), and all you need to do it to add environment for your deployments jobs:

```yaml
variables:
  S3_BUCKET_NAME: "yourbucket"

deploy to production:
  environment: production
  image: python:latest
  script:
  - pip install awscli
  - aws s3 cp ./ s3://$S3_BUCKET_NAME/ --recursive --exclude "*" --include "*.html"
  only: 
  - master

pages:
  image: alpine:latest
  environment: staging
  script:
  - mkdir -p ./public
  - cp ./*.html ./public/
  artifacts:
    paths:
    - public
  except: 
  - master
```

Now GitLab keeps track of what is deployed where:

![List of environments](#)(/images/blogimages/ci-deployment-and-environments/environments.png){: .shadow}

Also you can see whole history of your deployments per each environment:

![List of deployments to staging environment](#)(/images/blogimages/ci-deployment-and-environments/staging.png){: .shadow}

Now when everything is automated and set up, we’re ready for new challenges business might have for us.


## Dealing with teamwork at scale

Your website becomes popular, and you had to hire more developers.

The problems is that “Deploy every branch to staging” strategy is not working anymore.

You solved the problem by changing your process. You agreed that if someone wants to see his changes on the staging server, he should first merge the changes to “staging” branch.

Regarding CI configuration, the change is minimal:

```yaml
except:
- master
```

is now changed to

```yaml
only:
- develop
```


### Handling emergencies

Shit happens! And it happened to your website. One junior overlooked bug and pushed it straight to production. Exactly when your site was on top of HackerNews, so thousands of people saw completely broken layout instead of your shiny main page.

Luckily, someone found Rollback button, and deployed the previous version, so the website was fixed a minute after the problem have been discovered.

![List of environments](#)(/images/blogimages/ci-deployment-and-environments/rollback-arrow.png){: .shadow}

Rollback just relaunches the same job with the same commit.

Anyhow, you need to react to the problem. So you decide to turn off auto deploy to production. To switch to manual deployment you need to add `when: manual` to your job.

Whenever you feel safe to deploy, go to **Pipelines→Builds**, and click the button:

![Skipped job is available for manual launch](#)(/images/blogimages/ci-deployment-and-environments/skipped.png){: .shadow}