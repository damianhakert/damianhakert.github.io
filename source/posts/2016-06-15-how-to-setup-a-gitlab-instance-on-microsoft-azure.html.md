---
title: "How to Setup a GitLab Instance on Microsoft Azure"
author: Dave Wentzel
date: 2016-06-15
author_twitter:
categories: tutorial
image_title: '/images/blogimages/gitlab-azure/gitlab-on-azure-cover.jpg'
---

GitLab is a scalable, self-hosted Git repository "ecosystem". It is available as
a free [Community Edition][ce] and as a subscription-based
[Enterprise Edition][ee]. If you want to host your own full-featured source
control system, under your control, then you should consider GitLab. Spinning up
your own instance can be done in just a few hours using the
[Omnibus packages](/2016/03/21/using-omnibus-gitlab-to-ship-gitlab).

But what if you don't want to invest that much time to see if GitLab is
for you? Does Linux scare you? Do you want to try GitLab quickly without
a big up-front investment? Need someone else to handle your GitLab
administration? [Microsoft Azure] may be the answer.

**Note:** we assume you are familiar with GitLab and you wish to have your own
GitLab instance on-premises, working in a Virtual Machine.
{: .note}

<!-- more -->

----

### What's in this tutorial?
{: .no_toc}

- TOC
{:toc}

----

## GitLab on Azure

Azure is Microsoft's business cloud and GitLab is a pre-configured
offering on the Azure Marketplace. Hopefully you aren't surprised to
hear that [Microsoft and Azure have embraced][ms-open]
open source software like Ubuntu, Red Hat Enterprise Linux, and GitLab.
You can now spin up a pre-configured GitLab VM in just a few clicks.
Let's get started.

## Getting Started

First you need an account on Azure. There are three ways to do this:

- If your company (or you) already has an account then you are ready to go!
- You can [open an Azure account for free][free-trial]. You get credits you can
  use to try out paid Azure services, and even after you've used them you can
  still keep the account and use the free Azure services. Your credit card won't
  be charged, unless you decide to pay-as-you-go. This is a great way to try out
  Azure and cloud computing.
- If you have an MSDN subscription you can [activate your Azure subscriber benefits][msdn-benefits].
  Your MSDN subscription gives you recurring Azure credits every month. Why not
  put those credits to use and try out GitLab!

## Working with Azure

Now that you have an account we can get started. When you log in to
Azure using [portal.azure.com] you will see
the Dashboard which gives you a quick overview of Azure resources:

![Microsoft Azure Dashboard](/images/blogimages/gitlab-azure/azure-welcome-screen.png)

From the Dashboard you can build VMs, create SQL Databases, author
websites, and perform lots of other cloud tasks. Today we want to try
GitLab which is part of the [Azure Marketplace][marketplace]. The
Marketplace is an online store for pre-configured applications and
services optimized for the cloud by software vendors like GitLab. Click
on the "+ New" icon and in the search box type "GitLab":

![Search for GitLab on Azure Marketplace](/images/blogimages/gitlab-azure/azure-dashboard-search-gitlab.png)

Azure Marketplace offerings are always changing but let's click "**GitLab
Community Edition**". [GitLab CE][ce] is freely available under the MIT Expat
License. A new "blade" window will pop-out, where you can read about the
offering. Click "**Create**" and you will be presented with the "Create VM"
blade. From here we enter some basic setup information for the
underlying Ubuntu VM. On the screenshot I called my host "GitLab-CE" and I
chose Password authentication to keep things simple. A "Resource group"
is a way to group related resources together for easier administration.
Mine is "GitLab-CE-Azure", but your resource group can have the same name as your VM:

![GitLab on Azure - Basic settings](/images/blogimages/gitlab-azure/basic-settings.png)

The next screen reviews the Pricing Tiers, which are the VM sizes. I
chose a "**D1 Standard**" VM, which meets the minimum system requirements to
run a small GitLab environment:

![Choose a VM size for GitLab on Azure](/images/blogimages/gitlab-azure/gitlab-ce-azure-plans.png)

On the settings blade you can change your Network settings, Storage
Account, and Availability Set settings. Just review and take the
defaults which are sufficient for test-driving GitLab.

After you've reviewed all of your settings click "**Create**". At this point
Azure takes over and begins deploying your GitLab Ubuntu VM. The
deployment process takes a few minutes:

![Azure deploying GitLab](/images/blogimages/gitlab-azure/gitlab-ce-azure-deploying.png)

Your GitLab environment is ready when you see a dashboard entry like
this:

![GitLab on Azure - deployment successful](/images/blogimages/gitlab-azure/deployment_succeeded.png)

Click it and you'll see the management blade for your new VM:

![Manage your GitLab VM on Azure](/images/blogimages/gitlab-azure/gitlab-ce-on-azure.png)

You can manage your VM from this blade. You need to know your Public IP
address to connect to your instance. If you click the link you can also
set a friendly DNS name for your instance:

![Setting up a DNS name label for your IP](/images/blogimages/gitlab-azure/DNS-name-azure-gitlab-ce.png)

In the screenshot above I have set my DNS name to
"gitlab-ce.xxxx.cloudapp.azure.com" (click the link to determine your
exact DNS name with suffix).

If you want to use your own domain name, add a DNS `A` record into your
domain registrar pointing to the IP address displayed given by Azure.
It should work out of the blue, just type into your web browser
"yourdomain.com" and it should redirect you to your new GitLab instance.
You don't need to set it up in your Azure UI.

## Connecting to GitLab

Navigate to your GitLab instance in a new browser window. You will be
presented with the first GitLab screen:

![GitLab first screen - choose password for admin user](/images/blogimages/gitlab-azure/gitlab-ce-first-access.png)

Now you need to create a password for the GitLab administrator account. We were
able to set the Ubuntu user name during setup but the GitLab account
uses a default username/password, which is "root" for the administrator
user and the password was setup on the previous screen:

![GitLab - log into your root account](/images/blogimages/gitlab-azure/sign_in.png)  

At this point you have a working GitLab VM running on Azure.

## Creating Your First Project

You can skip this section if you are familiar with git and GitLab.
Otherwise, let's create our first repository. From the Welcome page
let's click "**New Project**":

![Welcome to GitLab](/images/blogimages/gitlab-azure/welcome-to-gitlab.png)

I'm going to make this a private project called "demo":

![GitLab - create new project](/images/blogimages/gitlab-azure/new-project.png)

It only takes a few seconds to create the repository and the next screen
will show you the commands to begin working with your new repository
locally.

![GitLab - project git config](/images/blogimages/gitlab-azure/gitlab-new-project.png)

Following these instructions you should be able to push and pull from
your new GitLab repository.

That's it! You have a working GitLab environment!

## Maintaining Your GitLab Instance

GitLab administration is beyond the scope of this article but it is
important to keep your GitLab environment up-to-date. The GitLab team is
constantly making enhancements to the product and occasionally you may
need to upgrade for security reasons. Let's review how to upgrade
GitLab. When you click on the "Admin Area" wrench GitLab will tell you
whether there are updates available.

![GitLab - update asap](/images/blogimages/gitlab-azure/update-asap.png)

On the screenshot we can see the current Azure Marketplace offered GitLab CE
version 8.6.5, and there is an update available. To update you need to connect to
your ubuntu server using PuTTY or an equivalent SSH tool. Remember to log
in with the SSH password you specified when you created your Azure VM.
At the prompt simply type:

```bash
sudo apt-get update && sudo apt-get install gitlab-ce
```

![Sheel - update GitLab](/images/blogimages/gitlab-azure/image13.png)

Follow the prompts and note that some upgrades do take some time. Once
it completes you should have an up-to-date GitLab instance.

![GitLab up to date](/images/blogimages/gitlab-azure/image14.png)

## Conclusion

GitLab is a great Git repo tool, plus a whole lot more. In this post we
looked at how to run GitLab using the Azure Marketplace offering. Azure
is a great way to experiment with GitLab. If you decide, like me, that
GitLab is the best solution for source code management you can continue
to use Azure as your secure, scalable cloud provider.

## About guest author

This is a guest blog post by Dave Wentzel, a Data Solution Architect
with Microsoft. <!-- Dave: improve at will, if you wish. -->


<!-- Identifiers -->

[ce]: https://about.gitlab.com/downloads/
[ee]: https://about.gitlab.com/pricing/
[free-trial]: https://azure.microsoft.com/en-us/pricing/free-trial/
[msdn-benefits]: https://azure.microsoft.com/en-us/pricing/member-offers/msdn-benefits-details/?WT.mc_id=A261C142F
[marketplace]: https://azure.microsoft.com/en-us/marketplace/
[Microsoft Azure]: https://azure.microsoft.com/en-us/
[ms-open]: https://stackoverflow.com/questions/33653726/azure-file-share-backup-database-to-mounted-drive
[portal.azure.com]: https://portal.azure.com
