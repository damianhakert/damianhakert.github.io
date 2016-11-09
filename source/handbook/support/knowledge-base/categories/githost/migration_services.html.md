---
layout: markdown_page
title: Migration Services
category: GitHost
---

## On this page
{:.no_toc}

- TOC
{:toc}

----

## GitHost Migration Services

### Overview

Support offers migration services from private GitLab instances to [GitHost.io](https://githost.io) instances, this document details the process involved in migrating data to a new instance.

**Requirements**

Only the following GitLab instances can be migrated. 

1. Current GitLab version or same version as GitHost.io instances
1. Omnibus GitLab installation

### Backup existing GitLab instance

The customer will need to run a backup of their existing instance by using the [backup rake](doc.gitlab.com/ee/raketasks/backup_restore.html) task.

1. Verify the GitLab version matches the latest version
	2. `sudo gitlab-rake gitlab:env:info`
1. Request the customer creates a new backup:
   2. `sudo gitlab-rake gitlab:backup:create`
   3. The new backup will be located at `/var/opt/gitlab/backups/{{TIMESTAMP}}_gitlab_backup.tar`
   4. Backup `/etc/gitlab/gitlab-secrets.json`
   5. Compress both the `gitlab_backup.tar` file and `gitlab-secrets.json` file.
   6. Upload backup file to Google drive or any other secure location (e.g S3) and provide the link to support.

### Restore to a new GitHost Instance

1. Ensure the instance has been created and is online, do this through the GitHost.io admin dashboard. 
   2. If the customer is yet to create the instance, request this is done before proceeding with the restore.  
2. Visit the GitHost project on `dev.gitlab.org` for information on SSH'ing into instances 
3. SSH into the customers instance.
   4. Download the backup generated earlier (see Backup existing GitLab instance). 
   5. You can use `wget` or `curl` to download the backup. 
   6. Copy the downloaded backup to `/var/opt/gitlab/backups` 
   7. Stop GitLab services accessing the DB
      1. `sudo gitlab-ctl stop unicorn; sudo gitlab-ctl stop sidekiq`
   7. Restore the backup `sudo gitlab-rake gitlab:backup:restore BACKUP={{TIMESTAMP}}` - More information can be found on the [backup/restore docs](https://docs.gitlab.com/ee/raketasks/backup_restore.html)
   8. Start GitLab `sudo gitlab-ctl start`
9. Check the instance is online by visiting it directly in your web browser. 
10. Email the customer requesting they check that all data is present. 