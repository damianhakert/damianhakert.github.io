---
layout: markdown_page
title: "GitLab Positioning FAQ"
---
1.  GitLab Positioning FAQ
    * What is GitLab?
        1. GitLab is an open source tool used by developers to create and manage code bases collaboratively. Built on Git, which is a very popular and efficient distributed version control system, GitLab gives you all the tools needed for Git repository management from code reviews to issue tracking and more. 
        1. We have a few different versions of GitLab. 
            - GitLab.com.  Hosted, open source for private repos. Just signup and get started. 
            - GitLab CE.  On-premise, self-hosted GitLab with LDAP integration, issue tracker, webhooks, and integrated CI. 
            - GitLab EE.  GitLab Enterprise Edition builds on top of the Community Edition and includes extra features mainly aimed at organizations with more than 100 users. It has LDAP group sync, audit logs and multiple roles. It includes deeper authentication and authorization integration, has fine-grained workflow management, has extra server management options and it integrates with your tool stack. 
            - Know the comparison chart - https://about.gitlab.com/features/#compare
    * I use GitHub.  What can GitLab offer me?
        1. GitHub has done a lot for the Git space. Great company.
        1. For the basics, we have some key differences: (no more)
            - Scales better with multiple application servers- Run GitLab in a cluster
            - Multiple authentication levels 
            - Group level milestones
            - 4 times more cost effective 
            - Community of 1,000 developers contributing to updates that are pushed on the 22nd of every month 
    * GitLab is winning enterprise - GitLab is focusing a considerable amount of energy on making Git the way large companies manage their code repositories. Our open-source community has created a powerful tool that we are excited to bring into the enterprise world.
        1. GitLab enterprise key features: 
            - Most installed on-premises Git solution - GitLab is used by over 100,000 organisations worldwide, on their own servers.
            - GitLab handles huge repositories well - Big repository? No problem. GitLab is built to handle very large repositories. 
            - Access to the server - You have complete control of the server/instance, so you can install additional software (intrusion detection, performance monitoring, etc.) and view log files on the server itself.
            - Pricing - we are much more cost effective. 
    * I use BitBucket.  What can Gitlab offer me?
        1. BitBucket has done a lot for the enterprise Git space. Great company.
        1. GitLab.com and Community Edition are completely free - BitBucket.com is pay if you have more than 5 competitors. 
        1. Backed by a community of a few hundred thousand developers and 1,000 contributors.
        1. We launch new features monthly and are iterating on our product faster than anyone in the market. Thanks to our community and our open-way of working, we’ve been able to release new features quickly and effectively. 
            - Job’s blog post on the topic is a great read, https://about.gitlab.com/2015/04/15/bitbucket-vs-gitlab-com/
    * I use or am looking at GitSwarm.  Do I need GitLab too?  Am I missing anything by not being with GitLab?
        1. GitSwarm is built on GitLab CE or EE. 
        1. GitSwarm combines Perforce and GitLab to enable easy project and team management while allowing developers to collaboratively code using their preferred version control system, Git.
        1. We’re happy that Perforce chose GitLab to help their customers create, code, and deploy together. To learn more, have a look at the GitSwarm overview, https://www.perforce.com/gitswarm.
        1. How should GitLab account managers engage prospects that are currently using or evaluating GitSwarm + Perforce 
            - If the prospect is already using GitSwarm the GitLab account manager should focus on the benefits of upgrading existing GitSwarm customers to GitLab EE and track this opportunity in Salesforce with a placeholder.  Upgrading to GitLab EE creates additional reasons for a customer to switch to GitLab.
            - GitLab EE is more of a cost effective solution.  With Perforce you pay a perpetual license fee up-front then an annual Support and Maintenance fee. The average price for one annual license of Perforce is around $450 upfront plus $100 per year. So for 1000 users you'd be looking at ~$450k versus $49k for GitLab. 
            - GitLab’s new LFS feature will allow us to compete with Perforce by providing storage for large binary files.   This is a must have feature for companies in the video, hardware and gaming space.
            - GitLab has partnered with Perforce as a reseller and GitLab is comped 50% on every GitLab license that Perforce sells to their customer base. 
            - GitLab Account managers should be proactive in identifying companies that are using Perforce and work with them in developing a plan to migrate towards Git.  Perforce’s source code management tools are becoming outdated and tracking these companies in Salesforce will help us to manage opportunities.   In addition, prospects currently using using GitSwarm + Perforce should be identified in Salesforce.com as an opportunity that could eventually make a full transition to GitLab.  As we continue to add new features and value within the EE product we can work with these prospects towards a migration plan to make the full transition to GitLab.
            - Perforce has developed GitSwarm as a way to reduce the loss of business from customers that are quickly transitioning to Git. Many long term Perforce customers are in the process of evaluating Git solutions and this is good time to proactively build a relationship during the early evaluation stages to gain a competitive edge. (GitLab Account Managers can review the Perforce website to see a list of Perforce's major customers).
    * We’re already using GitLab CE for free. Why should we upgrade?
        1. CE is a great option for smaller teams but larger organizations benefit from the features of GitLab EE.
        1. GitLab Enterprise Edition builds on top of the Community Edition and includes extra features mainly aimed at organizations with more than 100 users. 
        1. It has LDAP group sync, audit logs and multiple roles. 
        1. It includes deeper authentication and authorization integration, has fine-grained workflow management, has extra server management options and it integrates with your tool stack. 
        1. More customizable and secure.
    * Who are some of your customers?
        1. Used by more than 100,000 organizations.
        1. Large - Disney, IBM, AT&T, CERN
        1. Small - SpaceX, Stack Overflow
    * Why are you monetizing an open-source product?
        1. Our community has worked hard on making a great product. 
        1. The enterprise world could benefit from this product.
        1. We wanted to be able to offer some features that aren’t necessarily needed in the open source world but are needed for large companies.
        1. For those features, we charge our large customers and in return are able to create those features and hire people to work on the open source project. 
    * I use the hosted version of GitLab. Why would my company need on-premise?
        1. More secure and customizable. 
        1. LDAP integration
        1. Paid support
        1. 2FA
        1. Permissions management
    * How does support work?
        1. For on-premise EE - https://about.gitlab.com/pricing/ - gitlab enterprise edition with paid support
        1. For GitLab.com - Bronze support - monthly fee - https://gitlab.recurly.com/subscribe/gitlab-com-bronze-yearly-20
        1. Active StackOverflow community for free users.
    * Do you offer a solution for migrating data from GitHub, Bitbucket, SVN to GitLab?  
        1. Import from Bitbucket, GitHub, anywhere
        1. Want to start using GitLab? You can easily import your repositories from Bitbucket, GitHub, Gitorious or anywhere else, all in batch!
        1. Migrating SVN to GitLab 
            - http://doc.gitlab.com/ce/workflow/importing/migrating_from_svn.html
            - SVN stands for Subversion and is a version control system (VCS). Git is a distributed version control system.
    * Why aren’t you using a GPL license? 
        1. based on ruby on rails
        1. MIT license is common for ruby and RoR