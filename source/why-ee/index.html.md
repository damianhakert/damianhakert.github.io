---
layout: markdown_page
title: Why should I switch from CE to EE?
suppress_header: true
extra_css:
  - compared.css
---

# Why GitLab Enterprise Edition?

GitLab Enterprise Edition is built for large, professional teams.

It improves on GitLab Community Edition, by offering features that allow
for [tighter security][security], [better scaling][scaling],
[deep integration in your tools][integration], [more advanced workflows]
and [easy adoption].

If you're a very big company, you will also be interested in hearing about
[globally replicated GitLab Geo][geo].

[security]: #security

## Security

To make access to GitLab easier to manage,
GitLab EE adds [several authentication options][auth], besides providing
[deep LDAP integration][ldap-groups]. And to be sure of what happens,
we log everything in [the audit logs][audit-log].

In addition, GitLab EE gives you the ability to protect your existing code
with [Git Hooks][git-hooks].

[auth]: #authentication
[ldap-groups]: #ldap-group-support
[audit-log]: #audit-log

### Authentication

GitLab EE supports Kerberos and Atlassian Crowd
authentication, besides our support for Single Sign On and
LDAP / Active Directory.

### LDAP Group Support

With LDAP Group support in GitLab EE, you can manage all permissions on your
GitLab instance with just LDAP. You can set separate permissions for each
LDAP group on GitLab groups. This means that when a developer joins your
organization, they will have immediate access to everything they'd need.

You can even set administrator access based on LDAP groups.

### Audit Log

GitLab EE has audit logs for tracking access and permission changes on
both Group and Instance level.

### Git Hooks

Git hooks allow you to prevent any commit from entering your source code
that doesn't meet the rules you set. You can either use one of our pre-defined
Git Hooks or create a custom set of rules.

Our pre-defined Git Hooks let you:

- prevent tag removal
- check whether the commit author is a GitLab user
- check the commit message against your rules
- check the email of the author against your rules
- prohibit certain file names
- limit file size

## Maintenance & Scale

- Option: Geo
- external MySQL support
- future - HA omnibus

## Workflow

- Issue Weights
- Issue, MR Templates
- Approvals
- Rebase before merge
- FFWD merges
- Project sharing

## Integration and Global

- Mirror repos
- Remote mirrors
- Option: Geo
- Web Hooks
- Git Hooks

- Pages
- Contribution Analytics
- Super powered LDAP
- Elasticsearch
- Email users from GitLab

- future - Branch permissions
- future option - Code navigation
- future option - File locking

External users
