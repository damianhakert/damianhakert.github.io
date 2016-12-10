---
layout: markdown_page
title: "Critical Security Release Process"
---

This is intended to be a template and suggested schedule for actions required
for GitLab to respond to critical vulnerabilities. Steps include actions taken
from the moment the vulnerability is discovered/reported up to the final package
deployments and announcements. This assumes that a critical patch will take
roughly one week to deploy, however this will vary depending on the
vulnerability and number of releases to be patched.

```

### First steps:

- [ ] Create a confidential issue for diagnosing, discussing, and mitigating the vulnerability in the GitLab CE repository.
- [ ] Create a confidential issue for the release (using the rest of this document as a rough template). Include a reference to the vulnerability issue and merge request when it exists. This issue should include information on which releases are vulnerable and which will receive a patch.
- [ ] Branch off of the dev CE master branch for pushing patches
- [ ] Create a Work-In-Progress merge request against dev security branch, assigned to the release manager for the current release.
- [ ] Fix build failures (owner: release managers)
- [ ] Install mitigation for GitLab.com, GitHost.io (if possible) and any other vulnerable infrastructure hosts, create an issue in the infrastructure project describing the mitigation and impact.

### Day one:

- [ ] Merge all patches to dev.gitlab.org security branch (owner: dev team)
- [ ] Write pre-announcement security update (owner: security lead)
- [ ] Contact package maintainers about security announcement (e.g. GitSwarm, Debian, FreeBSD) (owner: security lead)
- [ ] Request pre-assigned CVE (owner: security lead)

### Day two:

- [ ] Cherry-pick all patches to releases -> stable branches (owner: release managers)
- [ ] Validate security fixes for current release (owner: dev team)
- [ ] Write WIP blog post against www-gitlab-com on dev.gitlab.org about security update, mitigation steps (include HAProxy/Apache/nginx workarounds): (owner: security lead)
- [ ] Send pre-announcement e-mail to general security list and contacts (owners: customer relations / marketing)

### Day three:

- [ ] Post blog post security announcement. Branch off of dev www repository and then merge to prod www (owner: security lead)
- [ ] Build packages to private PackageCloud package repository (latest stable and patches) (owner: release manager & build team)
- [ ] Validate security fixes on dedicated test instances for each package (owner: dev team)
- [ ] Deploy to staging (owner: release manager)
- [ ] Deploy to GitLab.com (owners: infrastructure)
- [ ] Remove mitigation from infrastructure hosts and close issue. (owner: infrastructure)

### Day four (before 12:00 UTC):
- [ ] Build packages for all versions to private PackageCloud package repository (owners: build team)
- [ ] Write blog post with CVE number (owner: security lead)
- [ ] Write CVE notice for CVE-ID provider (owner: security lead)

### Day four (before 23:59 UTC):
- [ ] Publish security packages to public (owner: build team)
- [ ] Publish latest security Docker images (owner: build team)
- [ ] Update GitHost.io (owner: githost / infrastructure)
- [ ] Send CVE notice to CVE-ID provider (owner: security lead)
- [ ] Add version.gitlab.com entries (owner: release manager)
- [ ] Publish blog post (owner: marketing)
- [ ] Email, Tweet, etc. (owner: marketing)
- [ ] Publish latest code to GitLab.com (owner: release manager)
- [ ] Update vulnerability acknowledgements (owner: security lead)
- [ ] Remove confidentiality from disclosure issues. (owner: security lead)
- [ ] Follow-up with disclosure reports to inform/thank security researchers (owner: security lead)
- [ ] Approve request(s) for disclosure on HackerOne (owner security lead)

_Note that we should not publish code or the packages to the public until everything is ready._

### Afterwards:
- [ ] "Lessons learned" writeup / blog post. (owner: security lead)
```
