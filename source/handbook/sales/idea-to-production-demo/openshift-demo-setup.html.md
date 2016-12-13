---
layout: markdown_page
title: "Setup your own test OpenShift Origin instance for the Idea to Production Demo"
---

## Overview
{:.no_toc}

This document is meant to outline a simple way of setting up an OpenShift Origin
test box for demonstrating our Idea to Production demo. @todo link


## Hardware and OS Requirements

This setup is meant to work on a Linux or Mac host. Windows is not supported at
this time.

In order to run the demo smoothly, you should have at least 10Gb of RAM available
for the demo.

If you do not have a supported operating system, or enough machine resources, you
can provision a Linux machine in the cloud to run your setup on. @todo DO link

## Software Requirements

In order to run the demo, you need to install Docker, the OC Client Tools, and our setup script.


### Install Docker

You will need to install Docker on your OpenShift machine if you have not installed it already.

The best way to install Docker is by going to their [official installation instructions](https://docs.docker.com/engine/installation/)
and following the install instructions for your OpenShift machine's operating system.

Once Docker is installed and running, we need to configure support for a insecure local registry:

#### Insecure Local Registry on Linux

Configure the Docker daemon with an insecure registry parameter of `172.30.0.0/16`

 - In RHEL and Fedora, edit the `/etc/sysconfig/docker` file and add or uncomment the following line:
   ```
   INSECURE_REGISTRY='--insecure-registry 172.30.0.0/16'
   ```
 - After editing the config, restart the Docker daemon.
   ```
   sudo systemctl restart docker
   ```

 - In Ubuntu edit `/lib/systemd/system/docker.service` and edit edit the `ExecStart` line:
   ```
   ExecStart=/usr/bin/dockerd --insecure-registry 172.30.0.0/16 -H fd://
   ```
 - After editing the config, restart the Docker daemon.
   ```
   sudo systemctl daemon-reload
   sudo systemctl restart docker
   ```

For troubleshooting these steps refer to the [OpenShift cluster up docs](https://github.com/openshift/origin/blob/master/docs/cluster_up_down.md#linux)

#### Insecure Local Registry on Mac

Once Docker is running, add an insecure registry of `172.30.0.0/16`:

 - From the Docker menu in the toolbar, select Preferences...
 - Click on Advanced in the preferences dialog
 - Under Insecure registries:, click on the + icon to add a new entry
 - Enter `172.30.0.0/16` and press return
 - Click on Apply and Restart

For troubleshooting these steps refer to the [OpenShift cluster up docs](https://github.com/openshift/origin/blob/master/docs/cluster_up_down.md#macos-with-docker-for-mac)

### Install the OC Client Tools

The OC client tools are released with OpenShift Origin and are located on Origin's
[GitHub Releases Page](https://github.com/openshift/origin/releases)

We will be running the Demo using the latest stable release of OpenShift Origin. Currently *1.3.2*

To install the tools, run the following from a terminal on the OpenShift host machine:

1. In a new directory, download and extract the tools:
  - Linux:
    ```
    curl -L  https://github.com/openshift/origin/releases/download/v1.3.2/openshift-origin-client-tools-v1.3.2-ac1d579-linux-64bit.tar.gz | tar -xz
    ```
  - Mac:
    ```
    curl -L https://github.com/openshift/origin/releases/download/v1.3.2/openshift-origin-client-tools-v1.3.2-ac1d579-mac.zip | unzip
    ```
1. Place the tools on your path:
   - Linux:
     ```
     sudo cp openshift-origin-client-tools-*/oc /usr/local/bin/.
     ```
   - Mac:
     ```
     cd openshift-origin-client-tools-*
     sudo echo pwd >> /private/etc/paths.d/origin-paths
     export PATH=$(pwd):$PATH
     ```
1. Test that the tools are on your path:
   ```
   oc version
   ```
   Should return version output:
   ```
   oc v1.3.2
   kubernetes v1.3.0+52492b4
   features: Basic-Auth GSSAPI Kerberos SPNEGO
   ```

### Download and install our Setup script

This script will launch OpenShift Origin using Docker by running the cluster up
script. We will use it to provision some storage, and update user permissions on
the cluster to allow the demo to run.

In case you are not running our setup script, and instead already have a OpenShift
cluster setup. We have outlined what the script does here @TODO so you can make similar
changes to your cluster.

1. Get the setup script, in a new directory from your terminal:
   - Linux:
     ```
     curl -L https://gitlab.com/gitlab-org/omnibus-gitlab/repository/archive.tar.gz?ref=i2ptest | tar -zx
     ```
   - Mac:
     ```
     curl -L https://gitlab.com/gitlab-org/omnibus-gitlab/repository/archive.zip?ref=i2ptest | unzip
     ```
1. Place the script on your path:
  - Linux:
    ```
    cd omnibus-gitlab-*
    echo "export PATH=$(pwd)/docker/openshift/oc-cluster-wrapper:\$PATH" >> ~/.bashrc
    export PATH=$(pwd)/docker/openshift/oc-cluster-wrapper:$PATH
    ```
  - Mac:
    ```
    cd omnibus-gitlab-*
    sudo echo $(pwd)/docker/openshift/oc-cluster-wrapper >> /private/etc/paths.d/origin-paths
    export PATH=$(pwd)/docker/openshift/oc-cluster-wrapper:$PATH
    ```
1. Test that the script is on your path:
  ```
  oc-cluster help
  ```
  This should return a list of valid commands.
  ```
  oc-cluster up [profile] [OPTIONS]
  oc-cluster down
  oc-cluster destroy [profile]
  oc-cluster list
  oc-cluster status
  oc-cluster ssh
  oc-cluster console
  oc-cluster completion bash
  oc-cluster plugin-install <plugin>
  oc-cluster plugin-uninstall <plugin>
  oc-cluster plugin-list
  oc-cluster create-volume volumeName [size|10Gi] [path|/root/.oc/profiles/<profile>/volumes/<volumeName>]
  oc-cluster create-shared-volume project/volumeName [size|10Gi] [path|/root/.oc/volumes/<volumeName>]
  ```

## Setup and Run the cluster

1. Find your IP you want to use to access the cluster. And export it into your terminal.
   ```
   export OC_CLUSTER_PUBLIC_HOSTNAME=127.0.0.1
   ```

1. Launch the Cluster:
   ```
   oc-cluster up
   ```

1. Once it is finished it should have given you a link to the web console. If
everything is working you should see the OpenShift login page after you paste the
link into your browser. Also make note of the user credentials that were printed out.

1. In your terminal, install the gitlab plugin:
   ```
   oc-cluster plugin-install gitlab
   ```
   You can read up on what happens during the plugin-install here: @TODO
