---
layout: markdown_page
title: Common Problems and Solutions
---

## LDAP

### How to configure LDAP?

We have very detailed guides on this topic. Please read them carefully, both
for [CE](http://doc.gitlab.com/ce/integration/ldap.html) and [EE](http://doc.gitlab.com/ee/integration/ldap.html)

To learn more about LDAP, you should setup the integration yourself. For that
you can use our staging LDAP server, access details for this server can be found
in the Support vault.

### Common problems

**Admin group not synchronizing**

Make sure the `group_base` is set in the LDAP settings and that the `admin_group`
field contains just the name of the group and not the full `oid`. GitLab will
search for the group within the base already defined.

**Invalid credentials when logging in**

Make sure the user you are binding with has enough permissions to read the user's
tree and traverse it.

Also make sure that the `user_filter` is not blocking otherwise valid users.

To make sure that the LDAP settings are correct and GitLab can see your users,
execute the following command:

```bash
sudo gitlab-ctl gitlab:ldap:check
```

## SAML

### How to configure SAML?

Please check out [this link](http://doc.gitlab.com/ce/integration/saml.html) for that
information.

### Common problems

**Redirect back to login screen showing a CSRF token error**

This is a red herring and is actually hiding the actual problem. For steps on how
to proceed checkout the [troubleshooting](http://doc.gitlab.com/ce/integration/saml.html#troubleshooting)
section in the SAML docs.

**Invalid audience**

This error means that the IdP doesn't recognize GitLab as a valid sender and
receiver of SAML requests. Make sure to add the GitLab callback URL to the approved
audiences of the IdP server.

**Missing claims**

The IdP server needs to pass certain information in order for GitLab to either
create an account, or match the login information to an existing account. `email`
is the minimum amount of information that needs to be passed. If the IdP server
is not providing this information, all SAML requests will fail.

Make sure this information is provided.

**Key validation error, Digest mismatch or Fingerprint mismatch**

These errors all come from a similar place, the SAML certificate. SAML requests
need to be validated using a fingerprint, a certificate or a validator.

For this you need take the following into account:

- If no certificate is provided in the settings, a fingerprint or fingerprint
  validator needs to be provided and the response from the server must contain
  a certificate (`<ds:KeyInfo><ds:X509Data><ds:X509Certificate>`)
- If a certificate is provided in the settings, it is no longer necessary for
  the request to contain one. In this case the fingerprint or fingerprint
  validators are optional

Make sure that one of teh above described scenarios is valid, or the requests will
fail with one of the mentioned errors.

## Git LFS

Git LFS has some limitations at the moment. LFS authentications works only via
HTTP for the time being and is only compatible with the GitLFS client versions
1.1.0 or 1.0.2.

It is also not possible for the LFS stored binaries to be deleted from the LFS
storage at the moment.

See our documentation for more information: [admin doc](http://doc.gitlab.com/ce/workflow/lfs/lfs_administration.html)
[user doc](http://doc.gitlab.com/ce/workflow/lfs/manage_large_binaries_with_git_lfs.html).

## Git Annex

Git Annex is a bit more complicated to setup than LFS. They both serve the same
purpose, but are very different.

See our [documentation](http://doc.gitlab.com/ee/workflow/git_annex.html) to learn
how to set it up.

**Possible errors**

Several errors can manifest themselves due to old versions of Git Annex. Make sure
both your server and client are using updated versions.

## SSL certificate errors

When trying to integrate GitLab with services that are using self-signed certificates,
it is very likely that SSL certificate error will occur on different parts of the
application, most likely Sidekiq. There are 2 approaches you can take to solve this:

1. Add the root certificate to the trusted chain of the OS
1. If using Omnibus, you can add the certificate to GitLab's trusted certificates

**OS main trusted chain**

This [resource](http://kb.kerio.com/product/kerio-connect/server-configuration/ssl-certificates/adding-trusted-root-certificates-to-the-server-1605.html)
has all the information you need to add a certificate to the main trusted chain.

This [answer](http://superuser.com/questions/437330/how-do-you-add-a-certificate-authority-ca-to-ubuntu) at SuperUser
also has relevant information.

**Omnibus Trusted Chain**

It is enough to concatenate the certificate to the main trusted certificate:

```bash
cat jenkins.pem >> /opt/gitlab/embedded/ssl/certs/cacert.pem
```

After that restart GitLab with:

```bash
sudo gitlab-ctl restart
```

## Missing email confirmations (GitLab.com related)

This problem seems to happen from time to time, where emails, specially confirmations,
are not delivered to the end users. There can be several reasons for this, but the
most common is that the email provider of the user is blocking our emails. If you
encounter one of this cases, the best thing to do is get the related error log from
Mailgun (credentials in 1password Support Vault) and send it to the user, so they can
contact their email provider.

If the email provider is a bigger organization, you can also contact Mailgun support
to help you resolve the issue, this is done via the Mailgun Control Panel.
