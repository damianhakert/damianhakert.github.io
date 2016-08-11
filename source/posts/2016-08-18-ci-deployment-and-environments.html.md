---
title: "GitLab CI: Deployment & environments"
description: "GitLab CI: Learn how to set up deployment pipeline to multiple environments"
categories: GitLab CI
author: Ivan Nemytchenko
author_twitter: inemation
image_title: '/images/blogimages/ci-deployment-and-environments/intro.png'
---

In previous blog post we covered the very basics of GitLab CI. As you might have guessed, today we'll cover deployment question.

We'll be deploying your website. In order to keep our story technology stack-agnostic, let's assume that it is just a set of HTML and CSS files. No serverside, and no fancy JS assets compilation. Oh, what a pleasure! :)

You've just set up your new and shiny virtual server on Digital Ocean. You already host your project code on GitLab.com. Now you're ready to do your first deployment.

Let's do it!

<!-- more -->
## Trivial hand deployment

The most trivial way to do it is to ssh to your server, and run `git clone ...`. But you need to convince GitLab that this server should have an access to you code. 

In order to do that you need to set a public key of that server as a Deploy Key on GitLab.com
<i>If you forgot how to create SSH key, don't tell anyone, just quickly [take a look at the docs](DK ).</i>

![DK Adding Deploy Key]()

Now your server has read-only access to your repository. And you can do your manual deployment without any issues. However you have read article about basics of GitLab CI, and you have a strong desire to automate as much as possible. 

## Making GitLab CI to run deployment for you

Generally speaking, for GitLab there's no difference what commands to run. You put your commands, you name the job, and GitLab will run it. 

### Mechanics of deployment

No matter what you use to deploy, the principle is the same: You need to pass some secret key or a set of keys to a command you run to deploy your code. No matter what command it is and where you're deploying to. For AWS you need to provide Access Key ID & Secret Key, for Heroku - API key, etc.

It would be a bad idea to put them openly in `.gitlab-ci.yml`. There is a Secret Variables page in your Project Settings for that purpose:

![DK Picture of Secret Variables page]()

Let's make CI system to execute required commands over SSH. Sounds simple, right? 

### Deploy Keys vs Secret Variables
Remember those Deploy Keys? Surprisingly, they will not help us here at all! Let shortly recall how SSH works.

![Picture of a Laptop with Virtual server in Clouds]()
Here we should put public key to authorized_keys on our server, and keep private key on our laptop.

![Picture of a repo on GitLab with Virtual server in Clouds]()
Here we should generate key on the server, and put public key to Deploy Keys on GitLab(it will go to authorized_keys?).

![Picture of a Virtual machine with CI Runner with Virtual server in Clouds]()
We should somehow pass private key to GitLab, and add public one to authorized keys on server. 

Still sounds complicated? Well, then just follow the instructions above:

### Run commands over SSH from CI

1. Generate SSH key pair using `ssh-keygen`, and put contents of *private key* to a Secret variable, named SSH_PRIVATE_KEY. 
2. Add public key to authorized_keys on your server
3. Add the following into your `.gitlab-ci.yml`(assuming you have Ubuntu or Debian based Docker image):

```yaml
before_script:
  - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )'
  - eval $(ssh-agent -s)
  - ssh-add <(echo "$SSH_PRIVATE_KEY")
  - mkdir -p ~/.ssh
  - '[[ -f /.dockerenv ]] && echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config'
```

You can find [detailed explanation here](http://docs.gitlab.com/ce/ci/ssh_keys/README.html#ssh-keys-when-using-the-docker-executor)

Ok, let's add our deployment command... 

```yaml
script:
- scp ./*.html root@productionserver.io:/www/data/
```

...and check how it works:
![DK Screenshot of Pipelines]

It simply works. Great!

As the time passes


Сайт стал популярным, и вы наняли еще одного человека в помощь. Чтобы работать параллельно, вы начали использовать ветки.

Чтобы CI не деплоил изменения только с мастера, нужно дописать немного наш конфиг, добавив в него 

```yaml
script:
- scp ./*.html root@productionserver.io:/www/data/
only:
- master
```

Изменения на других ветках игнорируются. Однако вы решаете, что было бы неплохо завести отдельное место, где можно было бы просматривать работу на рабочих ветках до публикации. Вы вспомнили о сервере на котором у вас поднят FTP, и который хостит все что вы туда заливаете. Прекрасно, давайте настроим CI так, чтобы он заливал туда все кроме master

TODO: FTP --> S3

```yaml
DK Конфиг для FTP

script:
  - curl -T *.html ftp://ftp.example.com --user user:secret`
```

TODO: >> Можно ли "*" в curl?

```yaml
DK Конфиг полностью без environments
```

Now every time someone pushes something new to some branch, it is deployed your second server via FTP.

TODO: Introducing environments
TODO: Screenshots & summary

It might look not very convenient. But for a team of two it is an acceptable sollution. To prevent collisions you decide to set up Slack notifications about deployments.

## Setting up Slack notifications

---

Your business is growing. You have even more people working on the project. You decide to switch to GitLab Flow, where you have "develop" branch. And you Everything that is pushed to that branch, goes to Staging

It is more of a process change. Config change is trivial:

```yaml
except --> only: develop
```

---

Since work on the project is much more intensive, you missed a bug, and the layout of you website was broken for 30 minutes during час пик. And since you website is pretty popular, more than 10000 people saw that.
Luckily, there's a rollback button, so it took minutes to revert website to last working version.

TODO: screenshot


---

You decide to disable automatic deployment.

```yaml
when: manual
```

TODO: ScreenShot


## 
---

Все устали мержить в develop - решили что неплохо было бы иметь по инстансу на каждую ветку/Merge Request





Заливать на s3 в разные бакеты 


--------


Пояснения:

Examples in this story were intentionally over-simplified, so that you could focus on ideas of deployment & environments itself. 

For real cases, the config will be much longer

Take a look at some examples:
- Demo deploy to docker-cloud
- Elixir stuff deployment
- more examples??


Заливка на s3 в разные бакеты - это конечно эмуляция. В реальной жизни надо гасить такие инстансы через полчаса. И скорее всего вы не захотите поднимать инстанс на каждую ветку. Может быть нарулено вот так например: В чате задается команда, и поднимается сервак.

- Review apps в будущем релизе GitLab.

