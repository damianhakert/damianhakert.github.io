---
layout: markdown_page
title: DO - Testing Environment
category: General
---

## On this page
{:.no_toc}

- TOC
{:toc}

----

## Initial setup

This guide involves configuring a Digital Ocean droplet and setting up Docker locally, it assumes you're using Mac OS X. 

#### Install Docker Toolbox

1. [https://www.docker.com/products/docker-toolbox](https://www.docker.com/products/docker-toolbox)


#### Create new docker host

1. Login to Digital Ocean
1. Generate a new API token at https://cloud.digitalocean.com/settings/api/tokens


This command will create a new DO droplet called `gitlab-test-evn-do` that will act as a docker host. 

+ RAM: 4GB
+ Name: `gitlab-test-env-do`
+ Driver: `digitalocean`


**Set the DO token** - Replace the string below with your generated token

```
export DOTOKEN=cf3dfd0662933203005c4a73396214b7879d70aabc6352573fe178d340a80248
```

**Create the machine**

```
docker-machine create \
  --driver digitalocean \
  --digitalocean-access-token=$DOTOKEN \
  --digitalocean-size "4gb" \
    gitlab-test-evn-do
```    

+ Resource: https://docs.docker.com/machine/drivers/digital-ocean/


### Creating GitLab test instance


#### Connect your shell to the new machine


In this example we'll create a GitLab EE 8.10.8 instance. 


First connect the docker client to the docker host you created previously.

```
eval "$(docker-machine env gitlab-test-env-do)"
```

You can add this to your `~/.bash_profile` file to ensure the `docker` client uses the `gitlab-test-env-do` docker host


#### Create new GitLab container

+ HTTP port: `8080`
+ SSH port: `2222`
   + Set `gitlab_shell_ssh_port` using `--env GITLAB_OMNIBUS_CONFIG ` 
+ Hostname: IP of docker host
+ Container name: `gitlab-test-8.10`
+ GitLab version: **EE** `8.10.8-ee.0`

#####  Setup container settings

```
export SSH_PORT=2222
export HTTP_PORT=8080
export VERSION=8.10.8-ee.0
export NAME=gitlab-test-8.10
```

#####  Create container
```
docker run --detach \
--env GITLAB_OMNIBUS_CONFIG="external_url 'http://$(docker-machine ip gitlab-test-env-do):$SSH_PORT'; gitlab_rails['gitlab_shell_ssh_port'] = $SSH_PORT;" \
--hostname $(docker-machine ip gitlab-test-env-do) \
-p $HTTP_PORT:80 -p $SSH_PORT:22 \
--name $NAME \
gitlab/gitlab-ee:$VERSION 
```


##### Update `gitlab.rb` values
``` 
docker exec -it $NAME \
sed -i "s/.*gitlab_shell_ssh_port.*/gitlab_rails['gitlab_shell_ssh_port'] = $SSH_PORT/g" /etc/gitlab/gitlab.rb 

docker exec -it $NAME gitlab-ctl reconfigure
```

*Note: the use of `sed` on gitlab.rb should not be required as you can use GITLAB_OMNIBUS_CONFIG, this isn't working in testing*


#### Connect to the GitLab container

##### Retrieve the docker host IP

```
docker-machine ip gitlab-test-env-do
# example output: 192.168.151.134
```


+ Browse to: http://192.168.151.134:8080/


##### Execute interactive shell/edit configuration 


```
docker exec -it $NAME /bin/bash
```

```
# example commands
root@192:/# vi /etc/gitlab/gitlab.rb
root@192:/# gitlab-ctl reconfigure
```

#### Resources 

+ https://docs.gitlab.com/omnibus/docker/
+ https://docs.docker.com/machine/get-started/
+ https://docs.docker.com/machine/reference/ip/
