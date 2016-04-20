---
layout: markdown_page
title: GitLab Compared to other tools
suppress_header: true
extra_css:
  - compared.css
---

# GitLab compared to other tools

_Since GitLab loyalists wrote them, the comparisons here might be biased. Nonetheless we try hard to ensure the comparisons are fair and factual. If you find something that is invalid, biased or out of date in the comparisons, please [open a merge request for this website][open-mr] to correct it. As on all the pages on this website you can find a link to this page in the repository in the footer. We can help with migration services as part of a custom GitLab EE plan. Please contact sales if you would like to learn more._

- [GitLab CE vs. GitLab EE](#gitlab-ce-vs-gitlab-ee)
- [GitLab vs. GitHub](#gitlab-vs-github)
- [GitLab EE vs. GitHub Enterprise](#gitlab-ee-vs-github-enterprise)
- [GitLab.com vs. GitHub.com](#gitlabcom-vs-githubcom)
- [GitLab.com vs. Bitbucket.org](#gitlabcom-vs-bitbucketorg)
- [GitLab CE/EE vs. SaaS](#gitlab-ceee-vs-saas)
- [GitLab vs. SVN](#gitlab-vs-svn)

[open-mr]: https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests

## GitLab CE vs. GitLab EE

To learn more about how GitLab Community Edition compares to GitLab Enterprise Edition, take a look at the [comparison table on our features page][comparison-versions].

[comparison-versions]: https://about.gitlab.com/features/#compare

## GitLab vs. GitHub

### Multiple authentication Levels

Set permissions according to people's role, rather than either read or write access to a repository. Don't share the source code with people that only need access to the issue tracker.

[See the various authentication levels](http://doc.gitlab.com/ce/permissions/permissions.html)

### Group-level milestones

View all the issues for the milestone you’re currently working on across multiple projects.

[Example milestone for GitLab 8.2 (need to be logged in)](https://gitlab.com/groups/gitlab-org/milestones/8-2?title=8.2)

### Attachments in issues
In GitLab you can attach any file to any issue or comment.

### Innersourcing
Internal projects in GitLab allow you to promote innersourcing of your internal repositories.

[Find out more about innersourcing](https://about.gitlab.com/2014/09/05/innersourcing-using-the-open-source-workflow-to-improve-collaboration-within-an-organization/)

### Work-in-Progress Protection
Simply add 'WIP' to the title of a merge request to prevent anyone from merging it. This gives you all the code review power of merge requests, while protecting unfinished work.

[WIP Merge documentation](http://doc.gitlab.com/ce/workflow/wip_merge_requests.html)

### Large open source projects
GitLab is meant to be the best place for any software project. The team behind GitLab is addressing issues that maintainers and contributors to large open source projects are facing, to make it easier to do both.

[Making GitLab better for large open source projects](https://about.gitlab.com/2016/01/15/making-gitlab-better-for-large-open-source-projects/)

### Powerful Issue Tracker
Quickly set the status, assignee or milestone for multiple issues at the same time or easily filter them on any properties. See milestones and issues across projects.

### Search through Commits
GitLab not only allows you to search through code, but also searches through your commit messages.

### Don't take our word for it.
Agilob contributed [a great article about why you should choose GitLab for your next open source project.](https://www.b.agilob.net/choose-gitlab-for-your-next-project/)

## GitLab EE vs. GitHub Enterprise

### Cost
GitLab has the most competitive pricing model in the market and a fraction of the cost of our competition. Our remote-first philosophy allow us to pass on the cost savings to our clients.

### All features mentioned in GitLab.com versus GitHub.com

### GitLab handles huge repositories well
Big repository? Huge (>5GB) binary files? No problem. GitLab is built to handle very large repositories, and Git Annex and LFS are both supported.

[Using Git Annex with GitLab](https://about.gitlab.com/2015/02/17/gitlab-annex-solves-the-problem-of-versioning-large-binaries-with-git/)


### Rebase before merge in the web UI to prevent merge commits
Before merging one branch in the other, GitLab can rebase it automatically.

[See how to prevent merge commits](https://about.gitlab.com/2014/12/22/gitlab-7-6-and-ci-5-3-released/)

### Access to the server
You have complete control of the server/instance, so you can install additional software (intrusion detection, performance monitoring, etc.) and view log files on the server itself.

[Learn more about logging](http://doc.gitlab.com/ce/logs/logs.html)

### Runs on metal
You can run GitLab fully on metal. No need for pre-supplied VMs. Run GitLab on your infrastructure, however you like.

### Run more users on a single server
A single machine server handles thousands of users and repositories

### HA setups
GitLab offers multiple HA solutions, making it possible to failover easily.

[More information about active servers](https://about.gitlab.com/high-availability/)

### Run your own software on your instance
You are free to run your own software on the instance that GitLab is running on. Have your own intrusion detection system? No problem.

### Use your configuration management software
Use configuration management software of your choice to manage GitLab. Puppet, Chef, Ansible—it all works.

[Read about configuration management here](https://about.gitlab.com/installation/)

### Use standard Unix tools for maintenance and monitoring
Use the tools you know for monitoring and maintenance, whether they're standard or your own. GitLab doesn't restrict you.

### Built-in Continuous Integration tool
Easy-to-set up, performant, stable and elegant continuous integration with every GitLab installation.

[Learn about the benefits of our CI tool](http://doc.gitlab.com/ci/)

### Powerful AD / LDAP integration
Sync groups, manage SSH-keys, manage permissions, authentication and more. You can manage an entire GitLab instance through the LDAP / AD integration.

[More information about AD / LDAP integration](http://doc.gitlab.com/ee/integration/ldap.html)

### Multiple approvals in code review
To ensure strict code review, you can require a specific number of approvals on a merge request by different users before being able to merge it.

[Approvals Documentation](http://doc.gitlab.com/ee/workflow/merge_request_approvals.html)

### Ease of Migration
Easily migrate all repos and merge request data from your previous provider.

### Security and Policy enforcement
Git Hooks and Audit logs and enhanced LDAP integration give you and the added security to meet the increasing requirements of compliance teams.

### Issue Weights
Manage issues using Agile practices by setting the weight of an issue.

[Issue Weights Documentation](http://doc.gitlab.com/ee/workflow/issue_weight.html)

### Merge Request Issue Templates
Create a template for issues and merge requests in your project to ensure all information is entered correctly and to make it easy to standardise.

[Templates for Issues and Merge Requests Documentation](http://doc.gitlab.com/ee/customization/issue_and_merge_request_template.html)

### Use the most installed on-premises Git solution
GitLab is used by over 100,000 organizations worldwide, on their own servers.

## GitLab.com vs. GitHub.com

### Everything mentioned in GitLab versus GitHub
### Unlimited public private repositories and unlimited collaborators for free.
### GitLab.com runs GitLab Enterprise Edition with all its features.
### GitLab.com has free GitLab CI if you bring your own Runner or use the shared Runners

[Read more about GitLab CI](/gitlab-ci)

## GitLab CE/EE vs. BitBucket Server

### Built-in Continuous Integration tool
Easy-to-set up, performant, stable and elegant continuous integration with every GitLab installation.

[Learn about the benefits of our CI tool](http://doc.gitlab.com/ci/)

### More value with everything you need in one solution
To replace GitLab, you'd need a combination of Bitbucket server, JIRA, Confluence, and Bamboo.

### Great user interface
GitLab has a really nice user interface that your team will love, and also enjoy working with.

### Integrated issue tracking
GitLab includes an issue tracker which you can link to any merge request.

[Issue Tracker](https://gitlab.com/gitlab-org/gitlab-ce/issues)

### Better activity feed and visualization
Collaborative activity feed to help everyone understand what is happening in a project and graphical view of the commit history.

[See Our Activity Feed](https://gitlab.com/gitlab-org/gitlab-ce/activity)

### Full, powerful search
Search through all your code, issues, wikis, commits, groups and projects. Built into GitLab.

## GitLab.com vs. Bitbucket.org

### Everything mentioned in GitLab CE/EE versus Bitbucket Server

### Unlimited collaborators
With GitLab.com, you don't have to start paying when you have more than 5 collaborators across all your private repositories.

## GitLab CE/EE vs. SaaS

### Containment
Containing your company's IP behind the company's firewall gives you protection from unauthorized access. Learn from the lessons of Code Space:

[Lessons from Code Space](http://www.infoworld.com/article/2608076/data-center/murder-in-the-amazon-cloud.html)

### Integrations
Integrating with Authentication and Authorization (LDAP / AD), issue tracking, CI, deployment and other tools such as ALM, PLM, Agile and Automation tools.

### Control
Take control of maintenance downtime, don't be at the mercy of your hosting provider. Control how and where your code is backed up and stored.

### Choice and Flexibility
GitLab CE/EE can be installed on physical servers, virtualized servers (dedicated or shared), purpose-built appliances and virtualized appliances. These aren’t available with hosted solutions. Likewise, most on-premises servers can be deployed on a variety of operating systems and there’s more choice of on-premises solutions in general.

### Retrieval
Getting your IP back from cloud vendors that store data in proprietary formats can be a costly and lengthy process. No such trouble with GitLab CE/EE.

### In good company
GitLab is the most adopted on-premises solution for developer collaboration, deployed at over 100,000 organizations worldwide.

## GitLab vs. SVN

### Distributed
Git, on which GitLab is built, is fully distributed. Every user has a complete copy of the repository, allowing for much faster access to history, easier branching and an overall better experience.

### Access Control
For someone to commit to a local respository, no access has to be given in Git. At the same time, the owner of the canonical repository has the ability to restrict pushes to the repository or certain branches.

### Powerful Branching
A branch in Git contains the entire history that preceeds it. It's also created or moved towards instantly and easily shared.

### Speed
Git is really fast. Performing a diff, viewing history, committing and merging changes, obtaining any revision and any form of branching is much faster in Git than SVN.

### Size Requirements
A single repository in Git is typically a number of times smaller than the same repository in SVN.
