# GitLab onboarding

## General
We use [Slack](https://slack.com), [Google Docs](https://www.google.com/docs/about/) and [dev.gitab.com](https://dev.gitlab.org) instead of intranet.

1. Follow the git and GitLab course on [Platzi](https://courses.platzi.com/courses/git-gitlab/) 
1. Read the [Team Handbook](https://about.gitlab.com/handbook/)
1. Add yourself to the GitLab Employee Phone List on the team Google sheets
1. Set-up and familiarize yourself with our apps: [Gmail](https://mail.google.com/), [Google Calendar](https://www.google.com/calendar/), [Slack](https://slack.com) and [Google Drive](https://www.google.com/drive/)
1. Have your manager provide access to our [Internal GitLab Server](https://dev.gitlab.org) and familiarize yourself with:
* The dashboard
* The projects
* The issue tracker
* The README.md’s for these projects:
** [GitLab Enterprise Edition](https://dev.gitlab.org/gitlab/gitlab-ee)
** [GitLab HQ](https://dev.gitlab.org/gitlab/gitlabhq)
** [GitLab www-gitlab-com](https://dev.gitlab.org/gitlab/www-gitlab-com)
1. Create an account on external/public GitLab server  and have your manager grant access to the GitLab Enterprise Edition Project, Standard Subscribers Group and other projects/groups relevant to your role.
1. Review Team Agenda for daily call
1. Become familiar with our website such as:
* The various Documentation
* EE pricing
* Blog
* About Us
1. Connect with GitLab social media sites:
* LinkedIn
* Twitter
* Facebook
* YouTube
1. Using Internal Issue Trackers
We use GitLab Issues to raise awareness, discuss and propose solutions for of
various issues relates to any aspect of our business. The most common Issues are created in the following Projects:
* GitLab Enterprise Edition - Issues related to GitLab Enterprise Edition
* GitLab HQ - customer requests
* GitLab www-gitlab-com - Issues related to our website

## Working with Git and GitLab:
1. Install SSH key
* Open Terminal window (Command space bar; search for Terminal)
* Type cat ~/.ssh/id_rsa.pub
* Copy SSH Key and paste into dev.gitlab.org and gilt.com profile 
* Click on avatar
* Edit profile settings
* click SSH Key (the Key icon)

1. Install Git 
* Check Git version type  git --version
* If no Git you will get prompted to install

1. Basic Git commands
*Create new branch git checkout -b test_changes
*Show what has changed git status 
*Commit change with message git commit -am “text"
*Push branch to origin git push origin <branch name>
*Clone a project git clone <project URL>

1. Basic Shell Commands
* ls = tells you whats inside the folder where you are
*cd = change directory
*pwd  = tell where you are
*Command T = open new terminal window
*write and quit = :wq

1. Need to install Ruby Manager and Ruby to create a blog post
* Install Ruby Manager
* Go to: https://rvm.io/
* Paste: \curl -sSL https://get.rvm.io | bash -s stable
* Close Terminal
* Open new Terminal to load new environment

1. Install Ruby
* Type into Terminal rvm install 2.2.1
* Prompt to enter password for your machine
* ruby --version
* bundle install
* gem install bundler

1. Preview website changes locally type bundle exec rake preview
* http://localhost:4000

1. To edit HTML you need to install text editor: http://www.sublimetext.com/2