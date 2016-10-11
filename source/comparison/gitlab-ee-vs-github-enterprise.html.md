---
layout: comparison_page
title: GitLab Compared to other tools
suppress_header: true
extra_css:
  - compared.css
---

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