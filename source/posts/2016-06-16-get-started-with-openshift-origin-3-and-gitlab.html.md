---
title: "Get started with OpenShift Origin 3 and GitLab"
author: Achilleas Pipinellis
author_twitter: _axil
categories: tutorials
image_title:
---

[OpenShift Origin][openshift] is an open source container application
platform created by [RedHat] based on [kubernetes] and [Docker]. That means
you can host your own PaaS for free and almost with no hassle.

In this tutorial we will see how to deploy GitLab in OpenShift using GitLab's
official Docker image, how to scale it when needed and finally how to manage
the upgrades.

<!-- more -->

---

- TOC
{:toc}

---

## Prerequisites

OpenShift 3 is not yet deployed on RedHat's offered Online platform ([openshift.com]),
so in order to test it, we will use an [all-in-one Virtualbox image][vm] that is
offered by the OpenShift developers and managed by Vagrant. If you haven't done
already, go ahead and install the following components as they are essential to
test OpenShift easily:

- [VirtualBox]
- [Vagrant]
- [OpenShift Client][oc] (`oc` for short)

It is also important to mention that for the purposes of this tutorial, the
latest Origin release which is currently on alpha is used:

- **oc** `v1.3.0-alpha.1` (must be installed locally on your computer)
- **openshift** `v1.3.0-alpha.1-31-g81aecc8` (is pre-installed in the VM image)
- **kubernetes** `v1.3.0-alpha.1-331-g0522e63` (is pre-installed in the VM image)

> **Note:**
If you intend to deploy GitLab on a production OpenShift cluster, there are some
limitations to bare in mind. Read on the [limitations](#current-limitations)
section for more information and follow the linked links for the relevant
discussions.

Now that you have all batteries, let's see how easy it is to test OpenShift
on your computer.

## Getting familiar with OpenShift Origin

The environment we are about to use is based on CentOS 7 which comes with all
the tools needed pre-installed: Docker, kubernetes, OpenShift, etcd.

### Test OpenShift using Vagrant

As of this writing, the all-in-one VM is at version 1.2, whereas an alpha
version 1.3 has been released. Since many bugs have been fixed in 1.3, that's
what we will use in this tutorial.

In short:

1. Download the [Vagrantfile]
1. Edit it and replace `thesteve0/openshift-origin` with `openshift/origin-all-in-one`
1. Open a terminal and in the same directory where you downloaded the Vagrantfile
   enter:

   ```sh
   vagrant up
   ```

This will download the VirtualBox image and fire up the VM with some preconfigured
values as you can see in the Vagrantfile. As you may have noticed, you need
plenty of RAM (4GB in our example), so make sure you have enough.

Now that OpenShift is setup, let's see how the web console looks like.

### Explore the OpenShift web console

After Vagrant finishes its thing with the VM, you will be presented with a
message which has some important information. One of them is the IP address
of the deployed OpenShift platform and in particular <https://10.2.2.2:8443/console/>.
Open this link with your browser and accept the self-signed certificate in
order to proceed.

Let's login as admin with username/password `admin/admin`. This is what the
landing page looks like:

![openshift web console](/images/blogimages/get-started-with-openshift-origin-3-and-gitlab/web-console.png)

You can see that a number of [projects] are already created for testing purposes.

If you head over the `openshift-infra` project, a number of services with their
respective pods are there to explore.

![openshift web console](/images/blogimages/get-started-with-openshift-origin-3-and-gitlab/openshift-infra-project.png)

We are not going to explore the whole interface, but if you want to learn about
the key concepts of OpenShift, read the [core concepts reference][core] in the
official documentation.

### Explore OpenShift CLI

OpenShift Client (`oc`), is a powerful CLI tool that talks to the OpenShift API
and performs pretty much everything you can do from the web UI and much more.

Assuming you have installed it, let's explore some of its main functionalities.

Let's first see the version of `oc`:

```sh
$ oc version

oc v1.3.0-alpha.1
kubernetes v1.3.0-alpha.1-331-g0522e63
```

With `oc help` you can see the top level arguments you can run with `oc` and
interact with your cluster, kubernetes, run applications, create projects and
much more.

Let's login to the all-in-one VM and see how to achieve the same results like
when we visited the web console earlier. The username/password is `admin/admin`:

```sh
$ oc login https://10.2.2.2:8443

Authentication required for https://10.2.2.2:8443 (openshift)
Username: admin
Password:
Login successful.

You have access to the following projects and can switch between them with 'oc project <projectname>':

  * cockpit
  * default (current)
  * delete
  * openshift
  * openshift-infra
  * sample

Using project "default".
```

Switch to the `openshift-infra` project with:

```sh
oc project openshift-infra
```

And finally, see its status:

```sh
oc status
```

The last command should spit a bunch of information about the statuses of the
pods and the services, which if you look closely is what we encountered in the
second image when we explored the web console.

You can always read more about `oc` in the [OpenShift CLI documentation][oc].

## Deploy GitLab



### Create a new project

You can do this either by running the CLI client:

```bash
oc new-project gitlab
```

or use the web interface.

![Create a new project from the UI](/images/blogimages/get-started-with-openshift-origin-3-and-gitlab/create-project-ui.png)

### Import the template

First, let's download the template:

```bash
wget https://gitlab.com/gitlab-org/omnibus-gitlab/raw/master/docker/openshift-template.json
```

And then let's import it in OpenShift:

```bash
oc create -f openshift-template.json
```

## Manage and scale GitLab

## Update GitLab


## Current limitations

- Support running GitLab in OpenShift without the need for a privileged container ([1251])

## Conclusion

[RedHat]: https://www.redhat.com/en "RedHat website"
[openshift]: https://www.openshift.org "OpenShift Origin website"
[vm]: https://www.openshift.org/vm/ "OpenShift All-in-one VM"
[vm-new]: https://atlas.hashicorp.com/openshift/boxes/origin-all-in-one "Official OpenShift Vagrant box on Atlas"
[template]: https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/docker/openshift-template.json "OpenShift template for GitLab"
[openshift.com]: https://openshift.com "OpenShift Online"
[kubernetes]: http://kubernetes.io/ "Kubernetes website"
[Docker]: https://www.docker.com "Docker website"
[oc]: https://docs.openshift.org/latest/cli_reference/get_started_cli.html "Documentation - oc CLI documentation"
[1251]: https://gitlab.com/gitlab-org/omnibus-gitlab/issues/1251 "GitLab - Support running GitLab in OpenShift without the need for a privileged container"
[VirtualBox]: https://www.virtualbox.org/wiki/Downloads "VirtualBox downloads"
[Vagrant]: https://www.vagrantup.com/downloads.html "Vagrant downloads"
[Vagrantfile]: https://www.openshift.org/vm/Vagrantfile "OpenShift Vagrantfile"
[projects]: https://docs.openshift.org/latest/dev_guide/projects.html "Documentation - Projects overview"
[core]: https://docs.openshift.org/latest/architecture/core_concepts/index.html "Documentation - Core concepts of OpenShift Origin"
