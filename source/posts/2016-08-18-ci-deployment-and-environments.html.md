---
title: "GitLab CI: Deployment & environments"
description: "GitLab CI: Learn how to set up deployment pipeline to multiple environments"
categories: GitLab CI
author: Ivan Nemytchenko
author_twitter: inemation
image_title: '/images/blogimages/ci-deployment-and-environments/intro.png'
---

## GitLab CI: Deployment & environments  

This post is a success story of one imaginary news portal, and you're the happy 
owner, the editor and the only developer. Luckily you already host your project 
code on GitLab.com. You already know that you can 
[run tests with GitLab CI](https://about.gitlab.com/2016/07/29/the-basics-of-gitlab-ci/#run-our-first-test-inside-ci). 
Now you’re curious whether it can be used for deployment, and how far can you go with it.

To keep our story technology stack-agnostic, let's assume that the app is just a 
set of HTML files. No server side, no fancy JS assets compilation.

Destination platform is also simplistic - we will use Amazon S3.

Warning: The goal of the article is not to give you a bunch of copypasteable snippets. 
The goal is to show principles and features of GitLab CI so that you could apply 
them to your technology stack with ease.
{: .alert .alert-warning}

Let’s start from the beginning: no CI in our story yet.

<!-- more -->

## A starting point

Deployment. In your case it means that a bunch of HTML files should appear on your 
S3 bucket (which is already configured to for 
[static website hosting](http://docs.aws.amazon.com/AmazonS3/latest/dev/HowDoIWebsiteConfiguration.html?shortFooter=true))

There's a million ways to do it. We’ll use library 
[awscli](http://docs.aws.amazon.com/cli/latest/reference/s3/cp.html#examples), 
provided by Amazon. 

The full command looks like this: 

```shell
aws s3 cp ./ s3://yourbucket/ --recursive --exclude "*" --include "*.html"
```

Important detail: the command 
[expects you](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#config-settings-and-precedence) 
to provide ``AWS_ACCESS_KEY_ID` and  `AWS_SECRET_ACCESS_KEY`` environment 
variables. Also you might need to specify `AWS_DEFAULT_REGION`.
{: .alert .alert-info}

This is an example of a command used to deliver code to a destination system. 
No matter what tool and what destination system you use, the principle is more 
or less the same: you had to run a command with some parameters and somehow pass 
a secret key or a set of keys for authentication.
{: .alert .alert-info}

Let’s try to automate it using GitLab CI.

## First automated deployment

For GitLab there's no difference what commands to run. 
Put your script to `.gitlab-ci.yml` and push your code - that’s it: CI triggers 
a job, and your commands are executed.

Let's add some context to our story: your website is small, you have 20-30 daily 
visitors, and your repository has only one branch: `master`. 

The minimal `.gitlab-ci.yml` should look like this:

```yaml
deploy:
  script: aws s3 cp ./ s3://yourbucket/ --recursive --exclude "*" --include "*.html"
```

No luck: 
![Failed command](/images/blogimages/ci-deployment-and-environments/fail1.png){: .shadow}

It is our job to ensure that there is an `aws` executable. 
To install `awscli` we need `pip`, which is a tool for Python packages installation.
Let's specify Docker image with preinstalled Python, which should contain `pip` as well:

```yaml
deploy:
  image: python:latest
  script:
  - pip install awscli
  - aws s3 cp ./ s3://yourbucket/ --recursive --exclude "*" --include "*.html"
```

The installation of `awscli` extends the job execution time, but it is not a big 
deal for now. If you'll need speed, you can always [look for
a Docker image](https://hub.docker.com/explore/) with preinstalled `awscli`, 
or create an image by yourself.
{: .alert .alert-warning}

Also, let’s not forget about these environment variables, which you've just grabbed 
in [AWS Console](https://console.aws.amazon.com/):

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

It should work, however keeping secret keys open, even in a private repository, 
is not a good idea. Let's see how to deal with it.


### Keeping secret things secret

There is a special place for secret variables: **Settings → Variables**

![Picture of Variables page](/images/blogimages/ci-deployment-and-environments/variables.png){: .shadow}

Whatever you put there will be turned into environment variables. 
Only an administrator of a project has access to this section.

We could remove `variables` section from our config. However, let’s use it for another purpose.


### Specifying and using non-secret variables

When your configuration gets bigger, it is convenient to keep some of the 
parameters as variables at the beginning of your configuration. Especially if you 
use them in multiple places. Although it is not the case in our situation yet, 
let's put S3 bucket name in a variable as a demonstration:

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
![Successful build](/images/blogimages/ci-deployment-and-environments/build.png){: .shadow}

But the audience of your website grows, so you've hired a developer to help you. 
Team growth should definitely affect the workflow.


## Dealing with teamwork

Now there’s two of you working in the same repository. It is no longer convenient 
to use the `master` branch for development. You decide to use seprate branches 
for both new features and new articles, and merge them into `master` when they are ready.

The problem is that your current CI config doesn’t care about branches at all. 
Whenever you push anything to GitLab, it will be deployed to S3.

Preventing it is straightforward. Just add `only: master` to your “deploy” job.

But it would be also nice to preview your changes from feature-branches somehow.


### Setting up a separate place for testing

Patrick (the guy you recently hired) reminds you that there is such a thing called
[GitLab Pages](http://pages.gitlab.io). It looks like a perfect candidate for 
a place to preview your work in progress. 

To [host something on GitLab Pages](https://about.gitlab.com/2016/04/07/gitlab-pages-setup/) your CI configuration should satisfy these simple rules:

- the job should be named “pages”
- there should be an `artifacts` section with folder “public” in it
- everything you want to host should be in this “public” folder

After applying the [example config for plain-html websites](https://gitlab.com/pages/plain-html/blob/master/.gitlab-ci.yml),
 full CI configuration looks like this:

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


We specified two jobs. One job deploys the website for your customers to S3. 
Another - for developers to GitLab Pages.

Actually some people would name it Production environment and Staging environment.


## Figuring out what is Environments

It looks like GitLab has 
 [support for environments](http://docs.gitlab.com/ee/ci/environments.html#environments),
 and all you need to do it to add environment for your deployments jobs:

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

![List of environments](/images/blogimages/ci-deployment-and-environments/environments.png){: .shadow}

Also you can see whole history of your deployments per environment:

![List of deployments to staging environment](/images/blogimages/ci-deployment-and-environments/staging.png){: .shadow}

Now when everything is automated and set up, we’re ready for new challenges just around the corner.


## Keeping to deal with teamwork

It is just happened again. 
You've pushed your feature-branch to preview it on Staging; a minute later Patrick pushed 
his branch, so the Staging was re-written with his work. Aargh!! It was a third time a day!

Idea! Let's use Slack to notify us of deployments, so that people will not to push their stuff if another one has been just deployed!

### Slack notifications

Seting up Slack notifications is a [straightforward process](http://docs.gitlab.com/ce/project_services/slack.html).

The whole idea is to take Incoming WebHook URL from Slack... 
![Grabbing Incoming WebHook URL in Slack](/images/blogimages/ci-deployment-and-environments/incoming-webhook.png){: .shadow}

...and put it into **Settings → Services → Slack** together with your Slack nickname:
![Configuring Slack Service in GitLab](/images/blogimages/ci-deployment-and-environments/services-slack.png){: .shadow}

We only care about deploy, so uncheck all the checkboxes, except “Build” in the 
settings above. That’s it. Now you’re notified of every deployment:

![Deployment notifications in Slack](/images/blogimages/ci-deployment-and-environments/slack.png){: .shadow}





Your website became popular, and you had to hire more developers.

The problems is that “Deploy every branch to staging” strategy is not working anymore.

You solved the problem by changing your process. You agreed that if someone 
wants to see his changes on the staging server, he should first merge the 
changes to “staging” branch.

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

Shit happens! And it happened to your website. One junior overlooked bug and 
pushed it straight to production. Exactly when your site was on top of HackerNews,
so thousands of people saw completely broken layout instead of your shiny main page.

Luckily, someone found Rollback button, and deployed the previous version, so the 
website was fixed a minute after the problem have been discovered.

![List of environments](/images/blogimages/ci-deployment-and-environments/rollback-arrow.png){: .shadow}

Rollback just relaunches the same job with the same commit.

Anyhow, you need to react to the problem. So you decide to turn off auto deploy 
to production. To switch to manual deployment you need to add `when: manual` to your job.

Whenever you feel safe to deploy, go to **Pipelines→Builds**, and click the button:

![Skipped job is available for manual launch](/images/blogimages/ci-deployment-and-environments/skipped.png){: .shadow}