---
layout: markdown_page
title: GitHost.io FAQ
---

### What is GitHost?

GitHost is a single-tenant solution that provides GitLab CE or EE as a managed
service. GitLab Inc. is responsible for installing, updating, hosting, and
backing up customers own private and secure GitLab instance.

### Why should I use GitHost?

* GitHost removes the system administration overhead of having to manage
  hardware, infrastructure, upgrades and back-ups, without compromising security
* It allows customers to concentrate on their core business of delivering
  applications to end users
* It facilitates the use of GitLab for organizations who do not have experience in
  GitLab, Linux or MySQL/PostgreSQL

### What is different about GitHost than other hosted Git solutions?

* Unlike GitHub.com, Bitbucket.org and GitLab.com, GitHost is a single-tenant
  solution which means your IP does not share the underlying infrastructure with
  other customers
* GitHost can integrate with your Active Directory or LDAP server for better
  authentication, as well as SAML, Crowd and all the OmniAuth Providers
  supported by GitLab
* GitHost has better performance than other hosted Git solutions because each
  instance only serves one customer, rather than many customers to one
  instance
* You can choose between automatic and manual updates. If you want, your server
  will always be automatically updated to the latest GitLab version, or you can
  stay on your current version and choose when you want the upgrade to happen

### What regions does GitHost operate in?

Amsterdam, London, San Francisco, Singapore, Toronto, New York and Frankfurt.

### Can I customize my disk space?

No. Our plans are based on the underlying infrastructure templates.

### What SLA does the service provide?

99.9% uptime.

### Will I be notified of downtime for maintenance?

Yes.

### Do I need an SSL certificate?

Yes, if you want to use your own domain. You can purchase one from vendors such
as GoDaddy. No, if you want a `*.githost.io` subdomain.

### Is LDAP supported?

Yes.

### Is SSO supported?

Yes we use OmniAuth so users can sign in using Twitter, Facebook etc.

### Is there support for SAML?

Yes.

### Can I make custom changes to the GitLab configuration?

Custom changes such as increasing the number of Unicorn workers or setting up an
SMTP server for email must be done by a GitLab Service Engineer. Customers can
request this by contacting GitHost Support. Self service for custom changes is
in development.

### What connections does GitHost support?

SSH and HTTP.

### How is back-up and recovery managed?

Full backups are taken every day and stored at an offsite location. Restoring
from backups can be done by customers without help from GitHost Support.

### Does GitHost come with a private hosted GitLab CI runner?

No, but you can hook up runners from anywhere. We plan to support this in the
future.

### Can I migrate from my on-premises GitLab server to GitHost?

Yes, you can use backup and restore but this requires the intervention of a
Service Engineer. However, we are working to make this easier.

### Can I apply my GitLab Enterprise Edition subscription for use with GitHost if I decide to move from on-premises hosting?

Yes.

### What version of GitLab Enterprise Edition does GitHost support?

GitHost will always install the latest version of GitLab when a new server is
created.

### If I subscribe to GitLab Enterprise and use GitHost how to I get support?

GitLab Enterprise subscribers will have the ability to email our Service
Engineers directly for assistance with both GitHost and GitLab.

### How is the service billed?

Subscriptions plans are prorated to the nearest minute and charged monthly.

### Can I purchase an annual subscription to GitLab Enterprise Edition and GitHost?

Yes. Please [contact our sales team](/sales).
