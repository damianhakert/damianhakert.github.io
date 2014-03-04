---
layout: post
title: 360i transitions to GitLab
date: March 04, 2014
author: Marc Radulescu
---
### 360i decides to move away from SVN
360i recently caught the spotlight for being the most innovative and one of the most successful digital media companies in the US. They focus on digitally centric programs for their customers, with campaigns for renowned brands such as Oreo, Toyota, Hanes and Ben & Jerry's. Their continuously innovative ideas are made possible, in part, by a software infrastructure maintained using GitLab.
 
Initially, 360i was using SVN for their code revision control, but they recently decided to look for alternatives. At first, the developers’ main goal was to move away from the SVN legacy system because of its limited collaboration options and big storage demands. Once they began using GitLab, however, they found that not only is the underlying Git a better system, but GitLab’s collaboration tools and open-source code are bringing added value to the company.

Keith Harris, associate director and the person in charge with software architecture at 360i, was having trouble with the legacy SVN code revisioning setup on two major accounts: first, it was easy for developers to accidentally break the code when committing, and 
second, the storage requirements were getting heftier and heftier.

### GitLab is the chosen alternative
When Keith started looking for alternatives to SVN, he had to balance internal team preferences with management requirements. The team had always wanted to move to Git, but they also wanted a user-friendly interface to help their workflows. From a managerial standpoint, having an on-premise installation was mandatory so as to respect third-party agreements. Keith himself was a supporter of open-source software.

Bringing together the wishes of all parties involved, Keith decided to start testing GitLab, to see if it was easy enough for him to maintain and for the developers to use. He soon gained confidence in the stability of his GitLab installation, so he is running it on the bleeding edge now.

### The developers become intrigued with GitLab’s source code
The open-source nature of GitLab provided an incentive for Keith to start digging into the code and see if there were any improvements to be made. One such improvement, showing permissions as a grid, he shared with the community and was afterwards merged by Dmitriy to be included in GitLab v6.0. “The source code is clean and easy to read”, said Keith, who even started learning a little bit of Ruby to get more from GitLab. Soon, those developers who were involved with GitLab began to share Keith’s enthusiasm and were browsing the source code as well.

After the testing phase finished, GitLab was rolled out in production and the workflow was changed, so that all new projects would be handled via GitLab, with SVN only supporting the old projects, awaiting migration.

### Implementing GitLab leads to additional benefits
Initially, the team only expected to see an improvement in the efficiency of their work. However, the collaboration between developers was a major and unexpected gain for the team. The issue tracker and user-friendly interface allowed developers to quickly identify and fix bugs and to write better code. The integrated wiki made documentation easier. User permissions introduced more clarity in the workflow.

The implementation also opens long-term opportunities. GitLab is versatile and user-friendly enough to make Keith wonder whether he can involve more of the company with the setup. Some of the tools he is managing, which are used by other departments, could at one point be replaced with a customized GitLab version.

### Learning points
The experience of introducing GitLab at 360i leads to several key learning points:
 - the on-premise installation is a big advantage for companies that need to keep sensitive information in-house;
 - keeping to centralized version control systems has two drawbacks: not only does it create frustration in the team, but it also makes it harder for the company to keep and attract new talent;
 - GitLab makes developers happy on two counts: first, it makes it easy for them to collaborate in writing code, and second, it also allows them to dig into the source code, learn best practices, and perform customizations.
