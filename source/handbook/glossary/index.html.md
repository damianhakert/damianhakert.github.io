---
layout: markdown_page
title: "GitLab Glossary"
---

The following terms are often used in documentation, blog posts, and everyday life at GitLab. This list is always a work in progress and additions are very welcome.

1. [Needs sections or alphabetization]
    * [Open Core] (https://en.wikipedia.org/wiki/Open_core): 
        -GitLab's business model. Coined by Andrew Lampitt in 2008, the open core model primarily involves offering a "core" or feature-limited version of a software product as free and open-source software, while offering "commercial" versions or add-ons as proprietary software.
    * [Git](https://git-scm.com/about)
    * [Open Source](https://opensource.org/docs/osd): 
        -Including to providing access to the source code, open source software must comply with a number of criteria, among them free distribution and no discrimination against persons,  groups, or fields of endeavor.
    * Directory: 
        -A folder used for storing multiple files. 
    * Repository: 
        -A directory where Git has been initialized to start version controlling your files. The history of your work is stored here. 
    * Remote repository: 
        -A repository that is not-on-your-machine, so it's anything that is not your computer. Usually, it is online, GitLab.com for instance. The main remote repository is usually called “Origin”. Definition via [blog post](https://about.gitlab.com/2015/05/18/simple-words-for-a-gitlab-newbie/)
    * Upstream repository [vs. GitLab repository](https://news.ycombinator.com/item?id=12487112)
    * Fork: 
        -A copy of an original repository that you can put somewhere else or where you can experiment and apply changes that you can later decide if publishing or not, without affecting your original project.
    * [Shell] (https://docs.gitlab.com/ce/gitlab-basics/start-using-git.html): 
        -Terminal on Mac OSX, GitBash on Windows, or Linux Terminal on Linux
    * Shell command runner
    * Clone: 
        -a local copy of the project you want to work on. 
    * Branch: 
        -Independent line of development. New commits are recorded in the history of the branch you are working in. 
    * Commit
    * Rebase (v): 
    * [Continuous Integration] (https://about.gitlab.com/2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/): 
        -A process that involves adding new code commits to source code with the combined code being run on an automated test to ensure that the changes do not break the software. [Thoughtworks discusses continious integration](https://www.thoughtworks.com/continuous-integration)
    * Continuous Deployment: 
        -Continuous deployment is the next step of continuous delivery: Every change that passes the automated tests is deployed to production automatically. [The difference between Continuous Delivery and Continuous Integration](https://www.youtube.com/watch?v=igwFj8PPSnw)
    * Continuous Delivery: 
        -Continuous delivery is a series of practices designed to ensure that code can be rapidly and safely deployed to production by delivering every change to a production-like environment and ensuring business applications and services function as expected through rigorous automated testing.[Amazon moves toward continuous delivery](https://www.youtube.com/watch?v=esEFaY0FDKc)
    * Version control: 
        -Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.
    * [Local version control systems] (https://docs.google.com/presentation/d/16sX7hUrCZyOFbpvnrAFrg6tVO5_yT98IgdAqOmXwBho/edit#slide=id.gd69537a19_0_32): 
        -Copying files into another directory on your local computer. This is a common and early form of version control, but it is error-prone.
    * Centralized version control systems: 
        -These systems, such as CVS, Subversion, and Perforce, have a single server that contains all the versioned files, and a number of clients that check out files from that central place. For many years, this has been the standard for version control.
    * Distributed version control systems: 
        -DVCSs fully mirror the repository. Git, Mercurial, Bazaar, and Darcs are DVCSs. If any server dies, and these systems were collaborating via it, any of the client repositories can be copied back up to the server to restore it.
    * Remote mirroring
    * [Merge conflict resolution] (https://about.gitlab.com/2016/09/06/resolving-merge-conflicts-from-the-gitlab-ui/)
    * Cycle Time
        - The time it takes to move from [idea to production](https://about.gitlab.com/2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/#from-idea-to-production-with-gitlab)
    * [Cycle Analytics](https://gitlab.com/gitlab-org/gitlab-ce/issues/22458)
    * Convdev: [Conversational development](https://about.gitlab.com/2016/09/14/gitlab-live-event-recap/)
        -A natural evolution of software development that carries a conversation across functional groups throughout the development process, enabling developers to track the full path of development in a cohesive and intuitive way. ConvDev accelerates the development lifecycle by fostering collaboration and knowledge sharing from idea to production.
    * Application lifecycle management (ALM): 
        -the oversight, development, and maintenance of computer programs. Gitlab has [advantages](https://docs.google.com/presentation/d/1vCU-NbZWz8NTNK8Vu3y4zGMAHb5DpC8PE5mHtw1PWfI/edit#slide=id.g72f2e4906_2_288) over both legacy and modern ALM tools. 
    * [Open Source Stewardship](https://about.gitlab.com/2016/01/11/being-a-good-open-source-steward/)
    * [GitLab Geo](https://docs.gitlab.com/ee/gitlab-geo/README.html)
    * [GitLab Pages](https://pages.gitlab.io/?_ga=1.99536669.2048946469.1469722633)
    * [GitLab Master Plan](https://about.gitlab.com/2016/09/13/gitlab-master-plan/)
    * DevOps: 
        -The epicenter of software engineering, quality ssurance, and technology operations. [DevOps glossary by XebiaLabs](https://xebialabs.com/glossary/)
    * Diff: 
        -A commit that shows the changes before and after. 
    * [Merge Request] (https://docs.gitlab.com/ce/gitlab-basics/add-merge-request.html): 
        -Takes changes from one branch, and applies them into another branch.
    * [Docker container registry] (https://about.gitlab.com/2016/05/23/gitlab-container-registry/)
    * Two-factor LDAP authentication: Lightweight Directory Access Protocol
    * LDAP group sync 
    * audit logs
    * [Static Site Generators](https://wiki.python.org/moin/StaticSiteGenerator) (SSGs)
    * [SSH Key] (https://docs.gitlab.com/ce/gitlab-basics/create-your-ssh-keys.html): 
        -A unique identifier of a computer. It is used to identify computers without the need for a password. e.g. On GitLab I have added the ssh key of all my work machines so that the GitLab instance knows that it can accept code pushes and pulls from this trusted machines whose keys I have added.
    * single-tenant 
    * On premise: 
        -On your own server. The fact that GitLab is on premise is a strong point for large corporate clients concerned with security. 
    * pull: 
        -Git command to synchronize the local repository with the remote repository, by fetching all remote changes and merging them into the local repository. ("git pull origin [branch name]")
    * push: 
        -Git command to send commits from the local repository to the remote repository. 
    * Untracked files: 
        -New files that Git has not been told to track previously. Add them by using the command "git add [file path]"
    * Working area: 
        -Files that have been modified but are not committed. Check them by using the command "git status"
    * Staging area: 
        -Modified files that have been marked to go into the next commit.
    * Webhooks: 
        -A way for for an app to provide other applications with real-time information. e.g. send a message to a slack channel when a commit is pushed
    * Mattermost
    * Dynamic environments (review apps)
    * Dependencies (i.e. "specify [dependencies] (https://gitlab.com/gitlab-org/gitlab-ce/issues/14728) between stages")
    * GitLab High Availability
    * 
    * [PostgreSQL / MySQL DBMS] (https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/settings/database.md)
    * [NGINX] (https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/settings/nginx.md)
    * [VPC](https://university.gitlab.com/high-availability/aws/)
    * Subnet
    * Route Table
    * [Amazon RDS](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html)
    * EC2 Instance
    * Load Balancer
    * [JIRA integration] (https://docs.gitlab.com/ee/project_services/jira.html)
    * [Jenkins Integration](https://docs.gitlab.com/ee/integration/jenkins.html)
    * [Slack Integration](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/project_services/slack.md)
    * [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-ci-multi-runner)
    * [Inner-sourcing] (https://about.gitlab.com/2014/09/05/innersourcing-using-the-open-source-workflow-to-improve-collaboration-within-an-organization/): 
        -the use of open source development techniques within the corporation. 
    * True-Up licensing model
    * JUnit
    * Ubuntu
    * [VM Instance](https://cloud.google.com/compute/docs/instances/)
    * [Gogs](https://gogs.io/)
    *  golang
    * CVS (Concurrent Versioning System)
    * [Internet Relay Chat (IRC)](http://www.irchelp.org/)
    * [Emacs](https://www.masteringemacs.org/article/mastering-key-bindings-emacs)
    * OAuth
    * Virtual private server (VPS)
    * GUI/[Git GUI](https://git-scm.com/docs/git-gui)
    *  

    

