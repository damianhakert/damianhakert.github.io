# GitLab onboarding

## General
We use [Slack](https://slack.com), [Google Docs](https://www.google.com/docs/about/) and [dev.gitab.org](https://dev.gitlab.org) to communicate.

* Follow the Git and GitLab course on [Platzi](https://courses.platzi.com/courses/git-gitlab/) 

* Read our [Team Handbook](https://about.gitlab.com/handbook/)

* Add yourself to our Employee Phone List on the team's Google Sheets

* Set-up and familiarize yourself with our apps: [Gmail](https://mail.google.com/), [Google Calendar](https://www.google.com/calendar/), [Slack](https://slack.com) and [Google Drive](https://www.google.com/drive/)

* Have your manager provide access to our [Internal GitLab Server](https://dev.gitlab.org) and familiarize yourself with:

1. The Dashboard

1. The Projects

1. The Issue Tracker

* Become familiar with the README.md’s for these projects:

1. [GitLab Enterprise Edition](https://dev.gitlab.org/gitlab/gitlab-ee)

1. [GitLab HQ](https://dev.gitlab.org/gitlab/gitlabhq)

1. [GitLab www-gitlab-com](https://dev.gitlab.org/gitlab/www-gitlab-com)

* Create an account on our external / public [GitLab Server](https://gitlab.com) and have your manager grant access to the GitLab Enterprise Edition Project, Standard Subscribers Group and other projects / groups relevant to your role

* Review our Team Agenda on the team's Google Docs for daily call

* Become familiar with [GitLab's Website](https://about.gitlab.com) and the following links:

1. [Documentation](https://about.gitlab.com/documentation/)

1. [EE Pricing](https://about.gitlab.com/pricing/)

1. [Blog](https://about.gitlab.com/blog/)

1. [About Us](https://about.gitlab.com/about/)

* Connect with GitLab's social media sites:

1. [LinkedIn](https://www.linkedin.com/company/gitlab-com)

1. [Twitter](https://twitter.com/gitlab)

1. [Facebook](https://www.facebook.com/gitlab)

1. [YouTube](https://www.youtube.com/channel/UCnMGQ8QHMAnVIsI3xJrihhg)

* Learn how to use our Internal Issue Trackers:
We use GitLab Issues to raise awareness, discuss and propose solutions for various issues related to any aspect of our business. The most common Issues are created in the following projects:

1. [GitLab Enterprise Edition](https://dev.gitlab.org/gitlab/gitlab-ee) - Issues related to GitLab Enterprise Edition

1. [GitLab HQ](https://dev.gitlab.org/gitlab/gitlabhq) - customer requests

1. [GitLab www-gitlab-com](https://dev.gitlab.org/gitlab/www-gitlab-com) - Issues related to our website

## Working with Git and GitLab:

### Install your SSH Key:

1. Open Terminal window (command + space bar; search for Terminal)

1. Type: cat ~/.ssh/id_rsa.pub

1. Copy SSH Key and paste into [dev.gitlab.org](https://dev.gitlab.org) and [GitLab.com](https://gitlab.com) profile 

1. Click on avatar

1. Edit profile settings

1. Click on SSH Key (the key icon)

### Install Git 

1. Check Git version type:  git --version

1. If Git is not installed, you will get prompted to install

### Basic Git commands

1. Create new branch: git checkout -b test_changes

1. Show what has changed: git status 

1. Commit change with message: git commit -am “text"

1. Push branch to origin: git push origin <branch name>

1. Clone a project: git clone <project URL>

### Basic Shell Commands

1. ls = tells you what's inside the folder where you are

1. cd = change directory

1. pwd  = tell where you are

1. Command T = open new terminal window

1. Write and quit = :wq

### Need to install Ruby Manager and Ruby to create a blog post

* Install Ruby Manager

1. Go to: [https://rvm.io/](https://rvm.io)

1. Paste: \curl -sSL https://get.rvm.io | bash -s stable

1. Close Terminal

1. Open new Terminal to load new environment

* Install Ruby

1. Type into Terminal: rvm install 2.2.1

1. Prompt to enter password for your machine

1. ruby --version

1. bundle install

1. gem install bundler

### Preview website changes locally 

1. Type: bundle exec rake preview

1. http://localhost:4000

To edit an HTML you need to install [text editor](http://www.sublimetext.com/2)