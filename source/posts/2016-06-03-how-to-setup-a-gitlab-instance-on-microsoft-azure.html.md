---
title: "How to Setup a GitLab Instance on Microsoft Azure"
author: Dave Wentzel
author_twitter:
categories:
image_title:
---
 
_This is a guest blog post by Dave Wentzel, a Data Solution Architect
with Microsoft._

## Introduction
{:.no_toc}

GitLab is a scalable, self-hosted Git repository "ecosystem". It is available as
a free [Community Edition][ce] and as a subscription-based
[Enterprise Edition][ee]. If you want to host your own full-featured source
control system, under your control, then you should consider GitLab. Spinning up
your own instance can be done in just a few hours using the
[Omnibus packages](/2016/03/21/using-omnibus-gitlab-to-ship-gitlab).

But what if you don't want to invest that much time to see if GitLab is
for you? Does Linux scare you? Do you want to try GitLab quickly without
a big up-front investment? Need someone else to handle your GitLab
administration? [Microsoft Azure](https://azure.microsoft.com/en-us/)
may be the answer.

- TOC
{:toc}

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
Azure using [portal.azure.com](https://portal.azure.com) you will see
the Dashboard which gives you a quick overview of Azure resources:

![](/images/blogimages/gitlab-azure/image1.png)

From the Dashboard you can build VMs, create SQL Databases, author
websites, and perform lots of other cloud tasks. Today we want to try
GitLab which is part of the [Azure Marketplace][marketplace]. The
Marketplace is an online store for pre-configured applications and
services optimized for the cloud by software vendors like GitLab. Click
on the "+ New" icon and in the search box type "GitLab":

![](/images/blogimages/gitlab-azure/image2.png)

Azure Marketplace offerings are always changing but let's click "GitLab
Community Edition". GitLab CE is freely available under the MIT Expat
License. A new "blade" window will pop-out where you can read about the
offering. Click Create and you will be presented with the "Create VM"
blade. From here we enter some basic setup information for the
underlying Ubuntu VM. In the screenshot I called my host "gitlab" and I
chose Password authentication to keep things simple. A "Resource group"
is a way to group related resources together for easier administration.
Your resource group can be the same name as your VM:

![](/images/blogimages/gitlab-azure/image3.png)

The next screen reviews the Pricing Tiers, which are the VM sizes. I
chose a A1 Standard VM which meets the minimum system requirements to
run a small GitLab environment:

![](/images/blogimages/gitlab-azure/image4.png)

On the settings blade you can change your Network settings, Storage
Account, and Availability Set settings. Just review and take the
defaults which are sufficient for test-driving GitLab.

After you've reviewed all of your settings click Create. At this point
Azure takes over and begins deploying your GitLab Ubuntu VM. The
deployment process takes a few minutes:

![](/images/blogimages/gitlab-azure/image5.png)

Your GitLab environment is ready when you see a Dashboard entry like
this:

![](/images/blogimages/gitlab-azure/image6.png)

Click it and you'll see the management blade for your new VM:

![](/images/blogimages/gitlab-azure/image7.png)

You can manage your VM from this blade. You need to know your Public IP
address to connect to your instance. If you click the link you can also
set a friendly DNS name for your instance. In the screenshot above I
have set my DNS name to "gitlab-davew.eastus.cloudapp.azure.com" (click
the link to determine your exact DNS name with suffix). This name can be
a bit more friendly by adding an entry with your DNS provider, but that
is beyond the scope of this article.

## Connecting to GitLab

Navigate to your GitLab instance in a new browser window. You will be
presented with the GitLab login screen:

![](/images/blogimages/gitlab-azure/image8.png)

You need to create a password for the GitLab "root" account. We were
able to set the Ubuntu user name during setup but the GitLab account
uses a default username/password.  

At this point you have a working GitLab VM running on Azure.

## Creating Your First Project

You can skip this section if you are familiar with git and GitLab.
Otherwise, let's create our first repository. From the Welcome page
let's click "New Project;":

![](/images/blogimages/gitlab-azure/image9.png)

I'm going to make this a private project called demo:

![](/images/blogimages/gitlab-azure/image10.png)

It only takes a few seconds to build the repository and the next screen
will show you the commands to begin working with your new repository
locally.

![](/images/blogimages/gitlab-azure/image11.png)

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

![](/images/blogimages/gitlab-azure/image12.png)

In the screenshot I can see the current Azure Marketplace offering is
8.6.5 and there is an update available. To update you need to connect to
your ubuntu server using PuTTY or an equivalent SSH tool. Remember to log
in with the SSH password you specified when you created your Azure VM.
At the prompt simply type:

```bash
sudo apt-get update && sudo apt-get install gitlab-ce
```

![](/images/blogimages/gitlab-azure/image13.png)

Follow the prompts and note that some upgrades do take some time. Once
it completes you should have an up-to-date GitLab instance.

![](/images/blogimages/gitlab-azure/image14.png)

## Conclusion

GitLab is a great Git repo tool, plus a whole lot more. In this post we
looked at how to run GitLab using the Azure Marketplace offering. Azure
is a great way to experiment with GitLab. If you decide, like me, that
GitLab is the best solution for source code management you can continue
to use Azure as your secure, scalable cloud provider.

[free-trial]: https://azure.microsoft.com/en-us/pricing/free-trial/
[msdn-benefits]: https://azure.microsoft.com/en-us/pricing/member-offers/msdn-benefits-details/?WT.mc_id=A261C142F
[ms-open]: https://stackoverflow.com/questions/33653726/azure-file-share-backup-database-to-mounted-drive
[ce]: https://about.gitlab.com/downloads/
[ee]: https://about.gitlab.com/pricing/
[marketplace]: https://azure.microsoft.com/en-us/marketplace/
