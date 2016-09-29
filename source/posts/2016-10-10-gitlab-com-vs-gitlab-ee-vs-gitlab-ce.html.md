---
title: "GitLab.com vs GitLab EE vs GitLab CE"
author: Marcia Ramos
author_twitter: XMDRamos
categories: GitLab
image_title: 
description: 
twitter_image: 
ee_cta: true
---

Which GitLab instance is my best choice?

Actually, what exactly is a GitLab instance?

What are the differences between them?

Why should I choose GitLab Enterprise Edition (aka GitLab EE)?

If these questions ring a bell, this post if for you!

<!-- more -->

## What is GitLab?

GitLab is a Git-based repository management and version control platform,
which has a complete toolset for software development, including the following, listed below.

### General Management Assets

- GitLab Groups, so you can group your projects alike and set them up at once
- GitLab repositories: unlimitted collaborators, unlimitted repos, unlimmited private repos
- Integrated Chat, with Mattermost
- Advanced issue tracker, including confidential issues, with due dates, labels, priority labels, user assignment, and milestones
- GitLab Issue Board, which helps you to prioritize, organize and plan your workflow and course of action
- Todos: you in control on what you need to track and get done

### Build, Test, and Deploy

- Continuous Integration built-in (GitLab CI), allowing you to run endless scripts
with GitLab Runners, which use an autoscaling method, making multiple simultaneous builds not only possible, but fast
- GitLab CI templates, to make your live easy when configuring a new project
- GitLab merge requests, with in-line commenting, which is the best way to review your code, get feedback and approval
- Merge conflict resolution from the user interface, making easier than ever solving them out-of-the-box, faster than any other way
- GitLab Pipelines, with which you run multiple scripts in sequence or in parallel, whichever suits you best, and visualize the entire pipeline, making any error easily identifiable
- Environments support, so you can deploy your code to different enviroments, as `staging` and `production`
- Continuous Delivery and Continuos Deployment build-in support, to allow you to choose between deploying manually or automatically to whichever environment you choose, and `rollback` to the previous working version with a click of a button, whenever something goes wrong

### Automation & Integration

- GitLab Webhooks, allowing you to automate repetitive processes, integrating with external tools and aplications a discomplicated process
- GitLab Pages, a static webserver which supports custom domains and subdomains, SSL/TLS encryption and builds any SSGs. It was specially designed to attend web developers, and for making it easier for developers to deploy their website from the same platform they use for developing their software applications
- [GitLab Container Registry], the first Docker registry that is fully-integrated with Git repository management, allowing you to build and deploy your Docker image right from GitLab, automatically
- A lot of external integrations, with Jira, Jekins, Slack, Shippable, Digital Ocean, Mesosphere and many others
- GitLab Cycle Analytics: a new feedback tool, which allows you to track the time taken by your team to evolve in a project, from the first step (creating a new issue) until the last step (deploying to production)

Astonished so far? Keep going, GitLab has a lot more to offer!

## Who is GitLab for?

Yes, it is for you! GitLab is for everyone. If you are a **sofware developer**, of course GitLab is for you. If you're not, you might consider joining the club as well:

- **Web developers**: with GitLab CI/CD/CD, you build and test your website or web application, get reviewed, deploy it to `staging` and `production`, gather feedback and proposals within the issues, organize yourself with labels, milestones and Issue Boards, and track the time you take over the entire process with Cycle Analytics. If you use static sites, even easier to deploy it with GitLab Pages.
- **Enterprises**: with our friendly UI, your entire team can use GitLab, not only your developers. The issue tracker makes everybody's live easier by having all the proposals easily achievable from the UI. With labels and the Issue Board, it's even easier to organize your team's and project's workflow. You don't need to keep your non-technical team
members apart of the developers, they can all use GitLab to improve and evolve together.
- **Universities**: colaboration and review is always easier to track within a version control platform. From the GitLab UI, it's simple to add new files, colaborate with your colleagues, pass the resposibilty on by reassigning issues and merge requests, and keep everything organized with the Issue Board.
- **Students**: doesn't matter what you're studing for; version control is the best way to track your own improvement in your college homeworks, colabotate with your schollar groups, discuss different subjects and point of views within issues, and improve your entire workflow for having things done better and quicker.
- **Professionals**: if you work with a lot of projects, such as books, manuals, translations, and general written materials, you should definitely try a friendly version control platform as GitLab is. Your work and your changes will never get lost. With the commits history you can recover anything you've left behind. Besides that, you'll find your own way to explore GitLab's best tools in your favor. More and more writers are using Git management and version control to help them out.

## GitLab Instances

You might have heard that before, but doesn't know exactly what this means. It's simple: our
company offers two different major products: GitLab CE (which stands for Community Edition), and GitLab EE (which stands for Enterprise Edition). What about GitLab.com? Well, it runs on top of GitLab EE. It's our premium product, and you are free to use it at GitLab.com (yay!).

Now you're confused: "okay, so the folks at GitLab give their honey for free?" Yes, we do. But let's start from the beginning, you'll catch up.

### GitLab.com

First, let's understand something here: at GitLab.com, you can access everything GitLab offers, but in a user-level basis only. We own the admin tools, setups, servers, firewalls, etc. Is it customizable? Up to a point, yes: you take control over your projects, your groups, you give access to your contributors, you do everything an user can possibly do. But no, you can't setup GitLab.com at your will. To do that, you'll need your **own** GitLab instance. With it, you are in control of the entire administrative area, tools, limits, defaults, etc.

#### Why GitLab.com?

Why not? GitLab.com is where you'll find community colaboration, opensource projects, and enjoy all it's awesomeness for free!

#### When should I choose GitLab EE or CE?

If you want to control your own GitLab instance, you have two options: GitLab CE and GitLab EE. And I can tell you by heart, it's awesome having your own GitLab, even if it's running in your local machine!

### GitLab CE

GitLab CE is our princess, our opensource product, free to download, tweak, contribute, customize and use as you wish. Does GitLab CE have everything described in this post so far? Yes, it does, except GitLab Pages. And we are very proud to deliver such an amazing product, for free.

#### Why GitLab CE?

Well, if you want to have an entire GitLab only for you, it's all yours! If you want it for your company, it's all yours too.

It's great for people that don't need all the premium features GitLab EE has, for trying GitLab for a while, for when you can't affort GitLab EE, or just for fun!

GitLab CE is as customizable as possible, it has all the administrative settings and tools, it can be installed in different Unix operational systems (Windows excluded), it can be made available locally, in your own network, or globally, to the entire internet. How you set it up, where to install, how you manage it, is totally up to you. We provide you guides and documentation, the rest is on you to play around!

Does GitLab CE has all the features offered by GitLab? No, only its big brother has everything: GitLab EE.

For GitLab CE, we provide support via issue tracker and forum.

### GitLab EE

GitLab EE is our queen, our open core and premium product, it's like having a "GitLab.com" all for yourself! It has all the possible features GitLab offers, and some adds-ons to spice it up. It's also available to install and use however you want. Our subscriptions are very affordable and don't have any restrictions: if you want it just for yourself, you can buy a single-user subscription. If your company has thousands of users, GitLab EE supports all of them.

### Why GitLab EE?

Well, for a great number of reasons. Let's make it reader-friendly and not over populate this single post with all the reasons.

Case 1: Single-User Subscription

Okay. Let's say you love GitLab.com and you decided to have your own GitLab instance. If you are an advanced user of GitLab.com, it might be disappointing to move over GitLab CE. Sometimes, you'll find yourself wondering "where can I do this?", "where is that feature I love?", "where is my Pages server?". They're in GitLab EE. That's what drives you buy a single-user subscription.

Case 2: Small Group Subscription

Let's say you and a bunch of friends from college decided to work on a game project. Your game will be awesome, and you need a lot of different integrated tools, control who has access to what, keep it behind your own firewall, design a webpage for it, and do a lot of stuff you can achieve only with an advanced, fully-featured platform. You need all the features only GitLab EE has. And you need Premium Support, in case some of you messes things around. You go for GitLab EE. It's also affordable, you and your friends can split the costs among yourselves, until the game pays you all back!

Case 3: Big Company Subscription

Now, let's say you run an entire company and you're looking for a software development platform that can attend all your giant enterprise needs. Of course you will choose the best option available, so your team will be able to work faster and better within a fully-featured product. You go for GitLab EE, with Premium Support, File Locking and GitLab GEO: in case something terrible happens to your server, you'll have an entire backup somewhere else.

### What GitLab EE has and CE has not?

If you are following us on social media, our blog, and other communication channels, you probably have heard about our [Master Plan], and you're asking yourself "okay, sounds great! But what about the whole Master Plan thing? And the idea to production workflow? Is that available only for GitLab EE customers?" Don't worry, be happy: the answer is, **no**! Our 10-step "from idea to production" toolset is available for every GitLab user: CE, EE and GitLab.com.

GitLab CE is an amazing product, and, as we've already said, we are proud to deliver it for free. But, of course, in order to be able to have people working at GitLab, to provide the entire infrastructure necessary to keep things up, and to support our company culture (which is awesome), we need to monetize. For this purpose, we offer an singular premium product, with special things that make it, well, special.

#### GitLab EE-only main features

There are a lot of things GitLab EE is boosted up with. You'll find the entire comparison table in our [feaures page]. Let's describe the main ones here.

- GitLab Pages:
- GitLab Group Webhooks:
- LDAP:
- Templates for issues and merge requests:
- Contribution Analytics:
- Mirroring repositories:
- Kerberos:
- Audit Logs:
- Atlassian Cloud integration:
- Merge request approval:
- Global code search: 
- Email:

#### GitLab EE-only premium adictional products

- GitLab Geo:
- Premium Support:
- Pivotal Tile integration:
- File Locking:

## Who is using GitLab?


## Final Thoughts

We love GitLab, by all means. Whichever instance you choose, you'll fall in love with it and will never want anything else.

Every 22nd there's a new GitLab realease, with more awesomeness than before!

You are more than invited to contribute to make GitLab CE even better. We are happy to receive feature proposals in our issue tracker, and we get even happier and cheerful when you contribute with your own code, so it's easier and faster to make it happen.

Check out our features **up-for-grabs** and submit your code! You're also more than invited to help our community in our forum, in StackOverflow and wherever you find someone lost or stuck. It's what makes GitLab better and more attractive to everyone. We elect an **MVP** every month to express our gratitude. And loads of MVPs are now happy GitLab Team members!

Looking forward to see you around! Questions, suggestions, feedback? Much appreciated! Please leave a comment below or tweet at us [@GitLab]!

[GitLab Container Registry]: /2016/05/23/gitlab-container-registry/
