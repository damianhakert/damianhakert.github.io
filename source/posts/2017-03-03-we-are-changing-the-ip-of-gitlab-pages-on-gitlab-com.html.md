---
title: "We are changing the IP of GitLab Pages on GitLab.com"
author: Marcia Ramos
author_gitlab: marcia
author_twitter: XMDRamos
categories: GitLab
image_title: '/images/blogimages/we-are-changing-the-ip-of-gitlab-pages-on-gitlab-com-cover.png'
twitter_image: '/images/tweets/pages-alert.png'
description: "Websites hosted on GitLab.com with GitLab Pages with custom root domains require DNS A record update"
---

<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
&nbsp;&nbsp;
**GitLab Pages' IP** on **GitLab.com** is changing from `104.208.235.32` to `52.167.214.135`!
&nbsp;&nbsp;
<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
{:.alert .alert-webcast}

Learn which websites are affected by this change, which settings you'll have to update, and how much time you have to do it.

<!-- more -->

----

## What is changing?

We are changing the [IP address of **GitLab Pages** server on **GitLab.com**](https://gitlab.com/gitlab-com/marketing/issues/883) to `52.167.214.135`.

## Which websites will be affected?

Every website hosted with GitLab Pages on GitLab.com set up with a custom root domain, such as `example.com`, which has a DNS `A` record pointing to `104.208.235.32`, will be affected.

## Which websites will NOT be affected?

- Websites hosted with GitLab Pages on GitLab Community Edition and Enterprise Edition: the IP of the GitLab Pages server is given by the sysadmin of your GitLab instance, not by GitLab.com
- Websites hosted on GitLab.com with default Pages domains (`*.gitlab.io`): there's no additional DNS settings for the ones using default domains
- Websites hosted on GitLab.com with custom subdomains, like `subdomain.example.com`, set up with DNS `CNAME` records

Whoever uses **GitLab Pages on hosted GitLab** instances will **NOT** be affected by this change.
{:.alert .alert-info .text-center}

## What do I have to do?

If you have a [DNS `A` record](https://docs.gitlab.com/ce/user/project/pages/getting_started_part_three.html#dns-a-record) pointing your domain to `104.208.235.32`, edit it to point to `52.167.214.135` instead. If you cannot edit it, delete it and create a new one.

## When is the deadline?

The deadline is **March 31st, 2017 at 23:59h UTC**.

### Can I change the DNS `A` record right now?

Yes, you can, and we ask you to do so as soon as possible. Currently we have both IPs working, the old and the new. From April 1st on, only the new IP address will be working.

### What happens if I don't do anything?

From April 1st on, your website will present a 404 or a 522 response from the server. Meaning, it will be unaccessible.

Your website **will be down** from April 1st on if you don't update the DNS `A` record before the deadline.
{:.alert .alert-info .text-center}

## Why is this happening?

We have recently changed the IP address of GitLab.com, from `104.210.2.228` to `52.167.219.168`. This caused an alert on your terminal when pulling repositories from GitLab.com:

```shell
Warning: Permanently added the ECDSA host key for IP address '52.167.219.168' to the list of known hosts.
```

This warning **is expected**, safe, and you don't need to worry about it.

The IP address of GitLab.com changed as a consequence of a restructure of GitLab.com infrastructure in Azure. Unfortunately, the IP of GitLab Pages server could not stay the same.

## Questions?

Please leave a comment below or in [this issue](https://gitlab.com/gitlab-com/marketing/issues/883) thread.
