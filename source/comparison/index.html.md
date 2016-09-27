---
layout: markdown_page
title: GitLab Compared to other tools
suppress_header: true
extra_css:
  - compared.css
---

# GitLab compared to other tools

## Index

- [Bias](#bias)
- [Open-Core](#open-core)
- [GitLab CE vs. GitLab EE](#gitlab-ce-vs-gitlab-ee)
- [GitLab vs. GitHub](#gitlab-vs-github)
- [GitLab EE vs. GitHub Enterprise](#gitlab-ee-vs-github-enterprise)
- [GitLab.com vs. GitHub.com](#gitlabcom-vs-githubcom)
- [GitLab CE/EE vs. Bitbucket Server](#gitlab-ceee-vs-bitbucket-server)
- [GitLab.com vs. Bitbucket.org](#gitlabcom-vs-bitbucketorg)
- [GitLab CE/EE vs. SaaS](#gitlab-ceee-vs-saas)
- [GitLab vs. SVN](#gitlab-vs-svn)
- [GitLab vs. GitSwarm](#gitlab-vs-gitswarm)

## Bias

Since GitLab fans wrote most of the text here there is a pro-GitLab bias. Nonetheless we try hard to ensure the comparisons are fair and factual. Please also add things that are great in other products but missing in GitLab. If you find something that is invalid, biased, missing, or out of date in the comparisons, please [open a merge request for this website](https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests) to correct it. As with all the pages on this website you can find where this page lives in the repository via the link in the footer.

## Open-Core
GitLab is an open-core product whereas GitHub and BitBucket are closed-source products. The GitLab Community Edition is fully open-source, and the Enterprise Edition is closed-source.

## GitLab CE vs. GitLab EE

To learn more about how GitLab Community Edition compares to GitLab Enterprise Edition, take a look at the [comparison table on our features page][comparison-versions].

[comparison-versions]: https://about.gitlab.com/features/#compare

## GitLab vs. GitHub

### Faster from Idea to Production

GitLab has a different approach to code development and deployment compared with GitHub. GitLab focuses on delivering a holistic solution that will see developers from idea to production seamlessly and on a single platform. You can read more about our [vision](https://about.gitlab.com/direction/#vision).

### Multiple authentication Levels

Set permissions according to people's role, rather than either read or write access to a repository. Don't share the source code with people that only need access to the issue tracker.

[See the various authentication levels](http://doc.gitlab.com/ce/permissions/permissions.html)

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

#### Due date

In GitLab, you can set a due date for individual issues. This is very convenient if you have small tasks with a specific deadline.

#### Move issues between projects

You can move issues between projects in GitLab. All links, history and comments
will be copied and the original issue will reference the newly moved issue.
This makes working with multiple issue trackers much easier.

#### Group-level milestones

View all the issues for the milestone you’re currently working on across multiple projects.

[Example milestone for GitLab 8.2 (need to be logged in)](https://gitlab.com/groups/gitlab-org/milestones/8-2?title=8.2)

#### Create new branches from Issues

In GitLab, you can quickly create a new branch from an issue on the issue
tracker. It will include the issue number and title automatically, making it easy to track which branch belongs to which issue.

[See how in our documentation](http://doc.gitlab.com/ce/workflow/web_editor.html#sts=Create a new branch from an issue)

### Search through Commits

GitLab not only allows you to search through code, but also searches through your commit messages.

### Don't take our word for it.

agilob contributed [a great article about why you should choose GitLab for your next open source project.](https://b.agilob.net/choose-gitlab-for-your-next-project/)

### Drag and drop tasks

You can change the order of tasks in markdown on GitHub.
GitLab does not have this ability, but is considering implementing it.

> [See the GitLab issue to implement this](https://gitlab.com/gitlab-org/gitlab-ce/issues/18003)

### Assign multiple people to an issue / MR

GitHub allows you to assign multiple people to an issue or pull request.

GitLab doesn't allow you to do this, but allows for approvals in merge requests,
which offsets this there. For issues, GitLab does not have an
equivalent feature, but a feature request has been submitted for this.

> [GitLab issue to implement multiple assignees](https://gitlab.com/gitlab-org/gitlab-ce/issues/13386)

### Allow edits from upstream maintainers in branch

In GitHub, when a user opens a pull request from a fork, they are given the
option that allows the upstream repository contributors to collaborate with
them on their new branch.

GitLab allows you to restrict pushes very carefully, but does not have this option.

> [GitLab issue to implement the same feature](https://gitlab.com/gitlab-org/gitlab-ce/issues/21975)

### Cycle Analytics

GitLab provides a dashboard that lets teams measure the time it takes to go from an idea to production. GitLab can provide this data because it has all the tools built-in: from the idea, to the CI, to code review, to deploy to production.

> [Feature Highlight: Cycle Analytics](https://about.gitlab.com/2016/09/21/cycle-analytics-feature-highlight/)

### Prevent committing secrets in the repositories

GitLab provides a way to avoid committing sensitive files to your repositories automatically.

> [Documentation on push rules](https://docs.gitlab.com/ee/push_rules/push_rules.html#prevent-pushing-secrets-to-the-repository)

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
Push Rules and Audit logs and enhanced LDAP integration give you and the added security to meet the increasing requirements of compliance teams.

### Issue Weights
Manage issues using Agile practices by setting the weight of an issue.

[Issue Weights Documentation](http://doc.gitlab.com/ee/workflow/issue_weight.html)

### Merge Request Issue Templates
Create a template for issues and merge requests in your project to ensure all information is entered correctly and to make it easy to standardize.

[Templates for Issues and Merge Requests Documentation](http://doc.gitlab.com/ee/customization/issue_and_merge_request_template.html)

### Geographic Replication with GitLab Geo
GitLab Enterprise Edition can have a geographically replicated instance,
so your remote teams don't have to wait for long downloads when cloning or
pulling from repositories.

[Geo is available as an Enterprise Edition option](https://about.gitlab.com/pricing/).

[Read the Geo docs for more information](http://docs.gitlab.com/ee/gitlab-geo/README.html)

### Lock Files
File locking in GitLab Enterprise Edition allows you to lock any file or
directory. This ensures that no one will work on or overwrite work that
can't be merged easily, for instance when working with art assets or
other non-text files.

[File locking is available as an Enterprise Edition option](https://about.gitlab.com/pricing/).

[Read the File Locking documentation](http://docs.gitlab.com/ee/user/project/file_lock.html#sts=File Lock)

### Use the most installed on-premises Git solution
GitLab is used by over 100,000 organizations worldwide, on their own servers.

### Access to and possibility to modify the source code of GitLab

The Ruby code in GitHub Enterprise is obfuscated.
GitLab Enterprise Edition [has a publicly readable source code][ee-source] and
you have the right to modify the code.

[Read the GitLab Enterprise Edition license](https://gitlab.com/gitlab-org/gitlab-ee/blob/master/LICENSE)

[ee-source]: https://gitlab.com/gitlab-org/gitlab-ee

## GitLab.com vs. GitHub.com

### Everything mentioned in GitLab versus GitHub

### Unlimited public private repositories and unlimited collaborators for free.

### GitLab.com runs GitLab Enterprise Edition with all its features.

### GitLab.com has free GitLab CI if you bring your own Runner or use the shared Runners

### GitHub.com has faster pageloads than GitLab.com

Improving this is a [work in progress](https://gitlab.com/gitlab-com/operations/issues/42/).

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

## GitLab vs. GitSwarm

### Definitions
* GitSwarm - a version of GitLab customized by Perforce.
* Git Fusion - a git to Perforce connector produced by Perforce.

### Authentication
* GitSwarm uses plain GitLab authentication.  The mapping of how Git Fusion credits individual git commits to Perforce users is set up within Git Fusion and is based on the email address associated with the commit on the git side. This is compared to a text-based table stored within Perforce as part of the Git Fusion configuration.
* To ensure usernames line up across both GitSwarm and Perforce (via Git Fusion) an external authentication mechanism that both systems use to authenticate (such as LDAP) is required. Currently this can only be done via LDAP.
* For permission checking, as of the 2016.1 release, GitSwarm has an experimental option to pass a username to Git Fusion to check the Perforce protection table. In that case, the GitSwarm and Perforce usernames would have to be the same.  This functionality passes the username and git path to Git Fusion, which has to work out what is allowed.  It does not mean that permissions within GitSwarm are the same.  This feature is turned off by default. Because of the potential for different permissions for same path in GitSwarm and Perforce, a poor user experience could result if this were turned on.  Turning this on is not recommended by Perforce.

### Mirroring/Syncing with GitSwarm (requires Git Fusion) and GitLab
* GitSwarm synchronization with Perforce happens as part of the commit portion of the push process.  It is synchronous.  If the push fails (because of a non fast-forward merge, for example) any fix needs to be addressed from the git end.  This is because Perforce doesn’t allow rewriting of committed history the way git does.  GitSwarm metadata not stored directly by git (comments, wiki messages, issues, etc.) is not pushed to Perforce.
* GitLab Geo synchronization between GitLab nodes happens asynchronously.  The pushes are performed on a periodic basis. (Either scheduled via cron or initiated by a trigger of some kind).  If a push fails (because of a fast-forward merge, for example) the operation can be addressed on either of the GitLab systems.  Both are running git and both support git’s rewrite functionality.
* GitLab EE Repository Mirroring to Perforce (via Git Fusion) is performed asynchronously.  If the push fails (because of a non fast-forward merge, for example) any fix needs to be addressed from the git end.  When mirroring this way the GitLab metadata not stored directly by git (comments, wiki messages, issues, etc.) is not pushed to Perforce.
