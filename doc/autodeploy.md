In order to get webhook on `https://gitlab.com/gitlab-com/www-gitlab-com` to trigger autodeploy:

1. Directory deploy needs to be placed in `/home/deploy/webhook/`
1. Rule that allows GitLab.com repository to trigger deploy needs to be placed in `/etc/nginx/sites-available/www.gitlab.com`. Details are in `source/_support/nginx/www.gitlab.com`
1. Create `/opt/webhook/pids` and make sure it is owned by deploy user
1. Start to listen for webhook payloads: `ruby /home/deploy/webhook/listen.rb start`
