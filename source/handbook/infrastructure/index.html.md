---
layout: markdown_page
title: "Infrastructure"
---

## Infrastructure documentation and reference

Most of the infrastructure documentation and reference can be found in
[in the Chef Repo](https://dev.gitlab.org/cookbooks/chef-repo).
Make sure to check that if you're looking for anything in particular.

## Always log into the infrastructure room

Before you start fixing stuff, log into the [infrastructure room](https://gitlab.slack.com/messages/infrastructure/) and leave a message. Other people might be working at the same time, especially if there was a pagerduty alert. If you don't immediately know what happened, create a postmortem doc with a sequential timeline.

## Why did server X stop working on Monday morning?

Weekly automatic OS updates are performed on Monday at 10:10 UTC.

## Emergency checklist

For [emergency checklist](https://dev.gitlab.org/cookbooks/gitlab-drbd/blob/master/doc/emergency_checklist.md).

## How does gitlab-drbd work and how do I failover?

See [failover procedure](https://dev.gitlab.org/cookbooks/gitlab-drbd/blob/master/doc/control_script.md#failover-procedure).

## Make GitLab.com settings the default

As said in the [production engineer job description]() one of the goals is "Making GitLab easier to maintain for sysadmins all over the world".
One of the ways we do it is making GitLab.com settings the default for all our customers.
It is very imporatant that GitLab.com is running GitLab Enterprise Edition with all its default settings.
We don't want users running GitLab at scale to run into any problems.
If it is not possible to use the default settings the difference should be documented in [requirements.md](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/install/requirements.md) before applying them to GitLab.com.

## Dev.gitlab.org backups

Backups for dev.gitlab.org are stored on S3 in the `backup-dev-gitlab-org` bucket. The backups are protected against deletion using S3 versioning, and move to Glacier storage (slow retrieval) after 7 days.

## GitLab Infrastructure Archive

You can find the infrastructure archive [here](https://docs.google.com/document/d/19yzyIHY9F_m5p0B0e6STSZyhzfo-vLIRVQ1zRRevWRM/edit#heading=h.lz1c6r6c9ejd).

## Network

See network spreadsheet [here](https://docs.google.com/spreadsheet/ccc?key=0Am5WZPWXUTUAdGgtVFlYZXFWbk5WdWU2Vko4b2NxdWc#gid=0).

## HP server

[Documentation](https://drive.google.com/?tab=oo&authuser=0#folders/0B25WZPWXUTUAbnp4UU1lZjBtaU0).

[Hpacucli (RAID CLI) cheat sheet](http://www.datadisk.co.uk/html_docs/redhat/hpacucli.htm).

## WWW deploy

Add the key to root@blue-moon.gitlab.com and note in the Network sheet.

Add the remote:

    git remote add deploy deploy@blue-moon.gitlap.com:~/www-gitlab-com.git

Now `git remote -v` should look like:

    deploy deploy@blue-moon.gitlap.com:~/www-gitlab-com.git (fetch)
    deploy deploy@blue-moon.gitlap.com:~/www-gitlab-com.git (push)
    origin git@gitlab.com:gitlab-com/www-gitlab-com.git (fetch)
    origin git@gitlab.com:gitlab-com/www-gitlab-com.git (push)


Deploy with:

    git push deploy master

## DRBD reports local disk state is ‘Diskless’

* Try deactivating/activating the DRBD resource:
        sudo drbdadm detach gitlab_data ; sudo drbdadm attach gitlab_data

* Check if any lvm commands are still running `ps ax | grep lvm` . If so, wait for them to finish (may take 15 minutes).

* Remove any unnecessary LVM snapshots `sudo /opt/gitlab-backup/bin/gitlab-rotate-backup purge`.

* Try the drbdadm detach/attach again.

## HTTPS certificate

* Make sure you receive webmaster@ emails (this is almost impossible to test since Gmail doesn't show the incoming email separately, but gitlab.com and gitlab.com both go to sytse@gitlab.com)

* `sudo -i`

* `cd /root`

* Follow the steps to [request new certificate](https://dev.gitlab.org/gitlab/gitlab-certificate-toolkit/blob/master/doc/request-new-certificate.md)

* Request [EssentialSSL Domain Validation](https://rcp.openprovider.eu/ssl/product-overview.php)

* Linux, paste CSR

* Paste certificate in the issue

* Order certificates

* Confirm the request by email by checking the All Mail label

* Emails from openprovider sometimes don't come through, look at [order overview](https://rcp.openprovider.eu/ssl/order-overview.php)

* Do not use empty lines at the end so combining the keys goes cleanly

* Prepare the [new certificate](https://dev.gitlab.org/gitlab/gitlab-certificate-toolkit/blob/master/doc/prepare-new-certificate.md)

* Install the [new certificate](https://dev.gitlab.org/gitlab/gitlab-certificate-toolkit/blob/master/doc/install-new-certificate.md)

### Random tips

* Configure Nginx to use the key

        sudo vim /etc/nginx/sites-available/TAB
        ( or sometimes: sudo vim /etc/nginx/ssl.conf )
        ssl_certificate         /etc/ssl/$DOMAIN.crt;
        ssl_certificate_key     /etc/ssl/$DOMAIN.key;

* Test Nginx config

        sudo nginx -t

* Restart Nginx

        sudo service nginx restart

* Change the firewall rules, needed on Digital Ocean:

        sudo ufw allow https

* Consider adding a redirect rule from http to https

        server {
          listen *:80;
          server_name www.example.com;
          server_tokens off;
          return 301 https://www.example.com$request_uri;
        }

## GitLab update on GitLab.com

Documented in [deploy a new gitlab rails](https://dev.gitlab.org/cookbooks/chef-repo/blob/master/doc/administration.md#deploy-a-new-gitlab-rails).

## GitLab Cloud upgrade procedure improvements

* Clear redis before upgrade

* 502 page for nginx (instead of ‘bad gateway’); cp public/{deploy,502}.html

* Functional testing during downtime: start unicorn on different port and connect via SSH tunnel (no users accidentally connecting while we are still down)

* Start sidekiq without mailer? not at all?

* Clear redis when aborting

## User wiki did not transfer correctly

User renamed project, which created an empty new wik repo instead of moving the existing wiki. I fixed this manually in `/home/git/repositories/username` by deleting the empty new one with `rm -rf` and using `mv` to rename the old wiki to the path expected by the new repo.

## Gathering a mailing list

    File.open('public_owners.txt', 'w') { |f| Project.public_only.each { |p| f.puts [p.owner.email.inspect,p.owner.name.inspect].join(',') }; nil }

## Ruby processes memory use

    ps -C ruby -o pid,rss,args

RSS (resident set size) seems to be the property measured by monit.

## Merge carrierwave uploads in two different buckets

From 13-20 December we have been storing uploads in the wrong S3 bucket. The bucket we were storing the uploads in was a staging bucket which already had some other uploads in it.

* Copy 1 week’s worth of uploads to local machine

        mkdir gitlab_cloud_staging_us
        s3cmd -c .s3cfg.gitlab_staging sync s3://gitlab_cloud_staging_us gitlab_cloud_staging_us/

* Locally delete uploads that do not belong in production. Production uploads had IDs in the thousands or tens of thousands; staging uploads had IDs like 1,2,3. I also checked in the S3 web console when some of the files were created to distinguish staging uploads from production uploads.

* Dry run for uploading the cleaned-up local copy of the uploads to the production bucket. Check if the paths make sense

         s3cmd -c .s3cfg sync -n gitlab_cloud_staging_us/ s3://gitlab_production_us

* Sync the local uploads to the production bucket

         s3cmd -c .s3cfg sync  gitlab_cloud_staging_us/ s3://gitlab_production_us

* Delete the local copy of the uploads

         rm -rf gitlab_cloud_staging_us/

## Monit check for disk space on root filesystem

* `cat /etc/monit/conf.d/disk_usage.monitrc`
* check filesystem rootfs with path `/dev/xvda1`
* if space usage > 70% then alert everyone@gitlab.com

Run `sudo service monit restart` after creating/editing the file.

## Changing configuration on GitLab.com using Chef

Setting up Chef server access on your local machine:

The attributes are in [GitLab cluster](https://dev.gitlab.org/cookbooks/chef-repo/blob/master/roles/gitlab-cluster.json) and [default](https://dev.gitlab.org/cookbooks/chef-repo/blob/master/data_bags/omnibus-gitlab/_default.json).

## Update grub

Sometimes when you run `apt-get upgrade`, GRUB wants to reinstall itself. During this process you get asked what disks GRUB should be installed to. Use `lsblk` to look for disks that contain a partition mounted at ‘/’ (there should be two). Install GRUB to those two disks (e.g. sda and sdj).

Example snippet of lsblk output below. Note the ‘/’

    sdj                         8:144  0   2.7T  0 disk
    ├─sdj1                      8:145  0     1M  0 part
    ├─sdj2                      8:146  0 931.3G  0 part
    │ └─md0                     9:0    0 931.2G  0 raid1  /
    └─sdj3                      8:147  0  93.1G  0 part   [SWAP]