---
layout: markdown_page
title: "Data analysis"
---

### Get a GitLab Linux account
Ask production folks (`#infrastructure` channel) to set up a Linux account for you. Mine is `victor`, and is used as an example below.

### Access `worker1.staging.gitlab.com` staging rails console
Access the server
```
$ ssh victor@worker1.staging.gitlab.com
```

Run
```
$ sudo gitlab-rails c production
```

### Access `db2.staging.gitlab.com` db
As required, ask production folks to refresh the `db2.staging.gitlab.com` db with the `gitlab.com` db.

Access the server
```
$ ssh victor@db2.staging.gitlab.com
```

Run
```
$ sudo gitlab-psql gitlabhq_production
```

### Access `version.gitlab.com` db
Access the server
```
$ ssh victor@version.gitlab.com
```

Use `psql`
```
$ sudo su postgres
$ psql
```

Access the db
```
postgres=# \c version_gitlab_com_production
postgres=# \dt
```

### Access db from a sql client
Access db from a sql client for additional features and ease of use. The sql client can connect to your local machine, and tunnel to the server. A suggested native Mac sql client is [Postico](https://eggerapps.at/postico/). Ask GitLab to expense a license. Download and install.


Set up forwarding through your local machine by running one of the following
```
$ ssh -L5432:localhost:5432 victor@db2.staging.gitlab.com
$ ssh -L5432:localhost:5432 victor@version.gitlab.com
```

#### `db2.staging.gitlab.com`
Find the database password on `db2.staging.gitlab.com`
```
$ vi /etc/gitlab/gitlab.rb
```
Look at `postgresql['sql_password']`.

In your sql client, connect with
```
host: localhost
port: 5432
username: gitlab
password: <password>
database: gitlabhq_production
```

#### `version.gitlab.com`
Find the database login and password on `version.gitlab.com`
```
$ sudo cat /home/gitlab-version/version-gitlab-com/config/database.yml
```

In your sql client, connect with
```
host: localhost
port: 5432
username: gitlab-version
password: <password>
database: version_gitlab_com_production
```
