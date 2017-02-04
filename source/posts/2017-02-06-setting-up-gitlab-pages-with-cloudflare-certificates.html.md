---
title: "Setting up GitLab Pages with CloudFlare Certificates"
author: Marcia Ramos
author_twitter: XMDRamos
author_gitlab: marcia
categories: tutorial
image_title: '/images/unsplash/lock.jpg'
description: "How to setup GitLab Pages with a CloudFlare SSL/TLS Certificate for your (sub)domain"
---

[CloudFlare SSL/TLS certificates][cert] are free to use.
If you want your [GitLab Pages] site to work with them,
it's as simple as it could be. There's just a **trick**
that perhaps you don't know about (yet)!

I'll go straight to the point in this tutorial, to show
you how to add a custom (sub)domain with a certificate
issued by [CloudFlare] to your [GitLab Pages] project.

We assume you're familiar with SSL/TLS, DNS, GitLab Pages,
and CloudFlare.
{:.note}

<!-- more -->

----

## On this page
{:.no_toc}

- TOC
{:toc}

----

## Introduction

With [GitLab Pages], you can [deploy a static website][pages-setup-post]
with custom domains/subdomains and SSL/TLS support.

This tutorial responds to the issue
"[Support CloudFlare CA please!](https://gitlab.com/pages/pages.gitlab.io/issues/29)",
and other cases where GitLab users asked specifically how do
to add a CloudFlare certificate to GitLab Pages. 😉 Anything else
is out of the scope of this post.

If you don't know how to setup your GitLab Pages site, or why
should you care about SSL/TLS:

- Take a look at the [GitLab Pages] overview
- Read the step-by-step tutorial [Hosting on GitLab.com with GitLab Pages][pages-setup-post]
- Read the series "**Static Site Generators** (SSGs)": 
  - [SSGs Part 1: Static vs Dynamic Websites][ssg-1]
  - [SSGs Part 2: Modern Static Site Generators][ssg-2]
  - [SSGs Part 3: Build any SSG site with GitLab Pages][ssg-3]
- Read the [documentation on GitLab Pages][pages-docs]
- Read an [overview on the importance of HTTPS][post-startssl]

In case you don't know about it yet, we're bringing [GitLab Pages into GitLab Community Edition][pages-ce]! 🎉

## Step-by-Step Quick Guide

To create this step-by-step guide, I'll use my subdomain
`https://cloudflare.marcia.ml` as an alias for the website
originally deployed to <https://gitlab-tests.gitlab.io/jekyll>.

The codebase is a simple [Jekyll] site built with its default
theme, available at <https://gitlab.com/gitlab-tests/jekyll>.

### STEP 1. DNS Record

On CloudFlare, navigate to the tab **DNS** and create a new
DNS record ([`CNAME`][cname] or [`A`][a]) pointing your
subdomain (`CNAME`) or root domain (`A`)
[to your GitLab Pages site][pages-setup-domains].

The image below shows both `CNAME` and `A` records
(for this demo purposes), but of course, you will only
need one of them. For this example, I used the `CNAME` record pointing `gitlab-tests.gitlab.io` to my subdomain `cloudflare.marcia.ml`: 

![setup CloudFlare DNS](/images/blogimages/setting-up-gitlab-pages-with-cloudflare-certificates/cloudflare-dns-settings.png){:.shadow}

If you'd already set this up, just jump into the second step.

### STEP 2. Generate your Certificate

1. Navigate to the tab **Cripto**.
1. Generate your Certificate

    ![generate certificate](/images/blogimages/setting-up-gitlab-pages-with-cloudflare-certificates/generate-certificate.png){:.shadow}

1. Choose the domain, subdomain, or wildcard to apply the cert to, then click **Next**:

    ![choose-domain](/images/blogimages/setting-up-gitlab-pages-with-cloudflare-certificates/certificate-setup.png){:.shadow}

1. Your certificate and private key have been generated. Leave the tab and the modal window opened:

    ![modal with certificate](/images/blogimages/setting-up-gitlab-pages-with-cloudflare-certificates/modal-window.png){:.shadow}

### STEP 3. Add the Custom (sub)domain and the Certificate to your GitLab Pages Project

From a new tab, go to GitLab, and navigate to your project's **Settings** > **Pages** > **+ New Domain**:

![configure GitLab Pages](/images/blogimages/setting-up-gitlab-pages-with-cloudflare-certificates/configure-gitlab-pages.png){:.shadow}

Copy the PEM certificate and the private key from the tab you've
left opened on CloudFlare, and paste it into their respective fields in GitLab:

![Add PEM certificate to Pages](/images/blogimages/setting-up-gitlab-pages-with-cloudflare-certificates/add-certificate-to-pages.png){:.shadow}

### STEP 4. The Trick

CloudFlare doesn't combine both PEM and root certificates in one.
So, we need to copy the root certificate (aka "intermediate")
**[CloudFlare Origin CA — RSA Root][root]** from the code block
below, and **paste it below your PEM** certificated just added to GitLab:

Copy CloudFlare's Origin CA — RSA Root:

```
-----BEGIN CERTIFICATE-----
MIID/DCCAuagAwIBAgIID+rOSdTGfGcwCwYJKoZIhvcNAQELMIGLMQswCQYDVQQG
EwJVUzEZMBcGA1UEChMQQ2xvdWRGbGFyZSwgSW5jLjE0MDIGA1UECxMrQ2xvdWRG
bGFyZSBPcmlnaW4gU1NMIENlcnRpZmljYXRlIEF1dGhvcml0eTEWMBQGA1UEBxMN
U2FuIEZyYW5jaXNjbzETMBEGA1UECBMKQ2FsaWZvcm5pYTAeFw0xNDExMTMyMDM4
NTBaFw0xOTExMTQwMTQzNTBaMIGLMQswCQYDVQQGEwJVUzEZMBcGA1UEChMQQ2xv
dWRGbGFyZSwgSW5jLjE0MDIGA1UECxMrQ2xvdWRGbGFyZSBPcmlnaW4gU1NMIENl
cnRpZmljYXRlIEF1dGhvcml0eTEWMBQGA1UEBxMNU2FuIEZyYW5jaXNjbzETMBEG
A1UECBMKQ2FsaWZvcm5pYTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB
AMBIlWf1KEKR5hbB75OYrAcUXobpD/AxvSYRXr91mbRu+lqE7YbyyRUShQh15lem
ef+umeEtPZoLFLhcLyczJxOhI+siLGDQm/a/UDkWvAXYa5DZ+pHU5ct5nZ8pGzqJ
p8G1Hy5RMVYDXZT9F6EaHjMG0OOffH6Ih25TtgfyyrjXycwDH0u6GXt+G/rywcqz
/9W4Aki3XNQMUHNQAtBLEEIYHMkyTYJxuL2tXO6ID5cCsoWw8meHufTeZW2DyUpl
yP3AHt4149RQSyWZMJ6AyntL9d8Xhfpxd9rJkh9Kge2iV9rQTFuE1rRT5s7OSJcK
xUsklgHcGHYMcNfNMilNHb8CAwEAAaNmMGQwDgYDVR0PAQH/BAQDAgAGMBIGA1Ud
EwEB/wQIMAYBAf8CAQIwHQYDVR0OBBYEFCToU1ddfDRAh6nrlNu64RZ4/CmkMB8G
A1UdIwQYMBaAFCToU1ddfDRAh6nrlNu64RZ4/CmkMAsGCSqGSIb3DQEBCwOCAQEA
cQDBVAoRrhhsGegsSFsv1w8v27zzHKaJNv6ffLGIRvXK8VKKK0gKXh2zQtN9SnaD
gYNe7Pr4C3I8ooYKRJJWLsmEHdGdnYYmj0OJfGrfQf6MLIc/11bQhLepZTxdhFYh
QGgDl6gRmb8aDwk7Q92BPvek5nMzaWlP82ixavvYI+okoSY8pwdcVKobx6rWzMWz
ZEC9M6H3F0dDYE23XcCFIdgNSAmmGyXPBstOe0aAJXwJTxOEPn36VWr0PKIQJy5Y
4o1wpMpqCOIwWc8J9REV/REzN6Z1LXImdUgXIXOwrz56gKUJzPejtBQyIGj0mveX
Fu6q54beR89jDc+oABmOgg==
-----END CERTIFICATE-----
```

Paste it below your PEM certificate (jump a line between the
last row of your cert `-----END CERTIFICATE-----` and the
first row of the intermediate cert `-----BEGIN CERTIFICATE-----`):

![Add intermediate certificate](/images/blogimages/setting-up-gitlab-pages-with-cloudflare-certificates/add-intermediate-certificate.png){:.shadow}


### STEP 5. Apply the Changes

1. Click **Create New Domain**.
1. Ta-da! 🎉

    ![Screen_Shot_2016-12-21_at_13.52.02](/images/blogimages/setting-up-gitlab-pages-with-cloudflare-certificates/certificate-added.png){:.shadow}

It works fine with the encryption set to _"Full"_ or _"Full (strict)"_ on CloudFlare:

![Set Cloudflare SSL to full strict](/images/blogimages/setting-up-gitlab-pages-with-cloudflare-certificates/cloudflare-settings-ssl-strict.png){:.shadow}

## Wrap Up

That's it, now your site runs on `https` with a custom domain
and a free CloudFlare certificate, valid up to 15 years!

Comments, questions, suggestions? Please comment below or tweet [@GitLab]! 😀

----

[Cover image] by [Rita Morais], licensed under [CC0 1.0][cc].
{:.note}

<!-- identifiers -->

[@GitLab]: https://twitter.com/gitlab
[a]: https://support.dnsimple.com/articles/a-record/
[cc]: https://unsplash.com/license
[cert]: https://www.cloudflare.com/ssl/
[cloudflare]: https://www.cloudflare.com
[cname]: https://en.wikipedia.org/wiki/CNAME_record
[Cover image]: https://unsplash.com/collections/427463/locks?photo=q6vBEPqsojc
[GitLab Pages]: https://pages.gitlab.io
[Jekyll]: https://jekyllrb.com/
[pages-ce]: /2016/12/24/were-bringing-gitlab-pages-to-community-edition/
[pages-docs]: http://doc.gitlab.com/ee/pages/README.html#getting-started-with-gitlab-pages
[pages-setup-domains]: /2016/04/07/gitlab-pages-setup/#custom-domains
[pages-setup-post]: /2016/04/07/gitlab-pages-setup/
[post-startssl]: /2016/06/24/secure-gitlab-pages-with-startssl/#https-a-quick-overview
[Rita Morais]: https://unsplash.com/@moraisr
[root]: https://support.cloudflare.com/hc/en-us/articles/218689638
[ssg-1]: /2016/06/03/ssg-overview-gitlab-pages-part-1-dynamic-x-static/
[ssg-2]: /2016/06/10/ssg-overview-gitlab-pages-part-2/
[ssg-3]: /2016/06/17/ssg-overview-gitlab-pages-part-3-examples-ci/
[static site]: /2016/06/03/ssg-overview-gitlab-pages-part-1-dynamic-x-static/
