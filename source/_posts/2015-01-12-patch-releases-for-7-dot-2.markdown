---
layout: post
title: "Patch releases for 7.2, 7.3 and 7.4"
date: 2015-01-12 21:27:39 -0500
comments: true
author: Patricio Cano
---

Today we are releasing a patch release for 3 previous GitLab CE and GitLab EE versions. This is a small but
necessary patch.

With these releases we have updated the version of the `rugged` gem to 0.21.2 used by the `gitlab_git` gem, which
in turn means that we needed to bump the version of `gitlab_git`.

7.2 and 7.3 will now use `gitlab_git` v6.2.2 and 7.4 will use `gitlab_git` v.7.0.0.rc12. These updates were needed
in order to address a bug found in the `rugged` gem that could cause a segmentation fault when accessing a repository.

If you have a manual installation, you can update it by fetching the changes from your current stable branch and if
you use the Omnibus packages you can download them here:

## Community Edition

### 7.4.4

Ubuntu 12.04 LTS 64bit
[gitlab_7.4.4-omnibus.5.1.0.ci.1-1_amd64.deb](https://downloads-packages.s3.amazonaws.com/ubuntu-12.04/gitlab_7.4.4-omnibus.5.1.0.ci.1-1_amd64.deb)

SHA256: 26bc56cf9892866218a7ffc9729eaf60799b419636ea451fe941d6b8c7938dc0

Ubuntu 14.04 LTS 64bit
[gitlab_7.4.4-omnibus.5.1.0.ci.1-1_amd64.deb](https://downloads-packages.s3.amazonaws.com/ubuntu-14.04/gitlab_7.4.4-omnibus.5.1.0.ci.1-1_amd64.deb)

SHA256: 152df61ba6bce33384bd5f3f5328aeb9b312410b9b3030a0253832a51d749ffd

Debian 7 (Wheezy) 64bit
[gitlab_7.4.4-omnibus.5.1.0.ci.1-1_amd64.deb](https://downloads-packages.s3.amazonaws.com/debian-7.6/gitlab_7.4.4-omnibus.5.1.0.ci.1-1_amd64.deb)

SHA256: 1353ace3aecbf1ef428437616640aa89766119f6122ba16e3c40438fa4a95e0b

CentOS 6.5 64bit (compatible with all Enterprise Linux 6.x distributions)
[gitlab-7.4.4_omnibus.5.1.0.ci.1-1.el6.x86_64.rpm](https://downloads-packages.s3.amazonaws.com/centos-6.6/gitlab-7.4.4_omnibus.5.1.0.ci.1-1.el6.x86_64.rpm)

SHA256: 4cd5b59d4b073618a1ac4ce91927cbf1555edaa72a59204a810f656c3c0e379a

CentOS 7.0 64bit (compatible with all Enterprise Linux 7.x distributions)
[gitlab-7.4.4_omnibus.5.1.0.ci.1-1.el7.x86_64.rpm](https://downloads-packages.s3.amazonaws.com/centos-7.0.1406/gitlab-7.4.4_omnibus.5.1.0.ci.1-1.el7.x86_64.rpm)

SHA256: 7727ca73412264ebd925bdeb331f118e2ff79cd2f01031a41b01a51278ae9e75


### 7.3.3

Ubuntu 12.04 LTS 64bit
[gitlab_7.3.3-omnibus-1_amd64.deb](https://downloads-packages.s3.amazonaws.com/ubuntu-12.04/gitlab_7.3.3-omnibus-1_amd64.deb)

SHA256: ec67a3a213edbf9a779163ab33b06e34b28b741a34ac10a31f8f8c802ec1dc30

Ubuntu 14.04 LTS 64bit
[gitlab_7.3.3-omnibus-1_amd64.deb](https://downloads-packages.s3.amazonaws.com/ubuntu-14.04/gitlab_7.3.3-omnibus-1_amd64.deb)

SHA256: 96619a7a173c0683a824bd6095b198f3c3b23b6653d4bc2ad8c4620f629e8a19

Debian 7 (Wheezy) 64bit
[gitlab_7.3.3-omnibus-1_amd64.deb](https://downloads-packages.s3.amazonaws.com/debian-7.7/gitlab_7.3.3-omnibus-1_amd64.deb)

SHA256: 6b9f9145c44b91e0024177168c70fd725ef424752c75dcf577dc9d86cf42adb0

CentOS 6.6 64bit (compatible with all Enterprise Linux 6.x distributions)
[gitlab-7.3.3_omnibus-1.el6.x86_64.rpm](https://downloads-packages.s3.amazonaws.com/centos-6.6/gitlab-7.3.3_omnibus-1.el6.x86_64.rpm)

SHA256: e0d443ab0b35815a3fb90676371be8c9ecaa5e1dfff9964e282d341fb7bf7d62

CentOS 7.0 64bit (compatible with all Enterprise Linux 7.x distributions)
[gitlab-7.3.3_omnibus-1.el7.x86_64.rpm](https://downloads-packages.s3.amazonaws.com/centos-7.0.1406/gitlab-7.3.3_omnibus-1.el7.x86_64.rpm)

SHA256: 5f685fe626d831859eb64f9becc919f4b3c0916bc0e45cb9654eab07e9292760

### 7.2.3

Ubuntu 12.04 LTS 64bit
[gitlab-7.2.3_omnibus-1_amd64.deb](https://downloads-packages.s3.amazonaws.com/ubuntu-12.04/gitlab-7.2.3_omnibus-1_amd64.deb)

SHA256: a9b07ee5210d0602431419f6c751b6133bb84d036482e7b89125c0fced0ea772

Ubuntu 14.04 LTS 64bit
[gitlab-7.2.3_omnibus-1_amd64.deb](https://downloads-packages.s3.amazonaws.com/ubuntu-14.04/gitlab-7.2.3_omnibus-1_amd64.deb)

SHA256: a0199a02950075065e650218df44422ff23cfabf8bfc798a73545f54dbc6ea91

Debian 7 (Wheezy) 64bit
[gitlab-7.2.3_omnibus-1_amd64.deb](https://downloads-packages.s3.amazonaws.com/debian-7.7/gitlab-7.2.3_omnibus-1_amd64.deb)

SHA256: 9326f568e892e4d930236b4dfe8f073805759dd7c173bd40948df32a4012a7f6

CentOS 6.6 64bit (compatible with all Enterprise Linux 6.x distributions)
[gitlab-7.2.3_omnibus-1.el6.x86_64.rpm](https://downloads-packages.s3.amazonaws.com/centos-6.6/gitlab-7.2.3_omnibus-1.el6.x86_64.rpm)

SHA256: 5735c39bc73f2837858558044e1de2834fd7ce511d33322d1795c8aadd008bd7

CentOS 7.0 64bit (compatible with all Enterprise Linux 7.x distributions)
[gitlab-7.2.3_omnibus-1.el7.x86_64.rpm](https://downloads-packages.s3.amazonaws.com/centos-7.0.1406/gitlab-7.2.3_omnibus-1.el7.x86_64.rpm)

SHA256: fdfe81fcfd00b6bd65c7e32a6aefe0cc5e3575d56557aa25fb870187309d16c4


## Enterprise Edition

You can download the Enterprise Edition packages from the subscribers repository located at
[https://gitlab.com/subscribers/gitlab-ee/](https://gitlab.com/subscribers/gitlab-ee/)


