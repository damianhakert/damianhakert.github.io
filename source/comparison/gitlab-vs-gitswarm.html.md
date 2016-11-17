---
layout: comparison_page
title: GitLab compared to other tools
suppress_header: true
image_title: '/images/comparison/title_image.png'
extra_css:
  - compared.css
---

## GitLab vs. GitSwarm

### Definitions
* GitSwarm - a version of GitLab customized by Perforce.
* Git Fusion - a git to Perforce connector produced by Perforce.

### Authentication
* GitSwarm uses plain GitLab authentication.  The mapping of how Git Fusion credits individual git commits to Perforce users is set up within Git Fusion and is based on the email address associated with the commit on the git side. This is compared to a text-based table stored within Perforce as part of the Git Fusion configuration.
* To ensure usernames line up across both GitSwarm and Perforce (via Git Fusion) an external authentication mechanism that both systems use to authenticate (such as LDAP) is required. Currently this can only be done via LDAP.
* For permission checking, as of the 2016.1 release, GitSwarm has an experimental option to pass a username to Git Fusion to check the Perforce protection table. In that case, the GitSwarm and Perforce usernames would have to be the same.  This functionality passes the username and git path to Git Fusion, which has to work out what is allowed.  It does not mean that permissions within GitSwarm are the same.  This feature is turned off by default. Because of the potential for different permissions for same path in GitSwarm and Perforce, a poor user experience could result if this were turned on.  Turning this on is not recommended by Perforce.

### Mirroring/Syncing with GitSwarm (requires Git Fusion) and GitLab
* GitSwarm synchronization with Perforce happens as part of the commit portion of the push process.  It is synchronous.  If the push fails (because of a non fast-forward merge, for example) any fix needs to be addressed from the git end.  This is because Perforce doesn’t allow rewriting of committed history the way git does.  GitSwarm metadata not stored directly by git (comments, wiki messages, issues, etc.) is not pushed to Perforce.
* GitLab Geo synchronization between GitLab nodes happens asynchronously.  The pushes are performed on a periodic basis. (Either scheduled via cron or initiated by a trigger of some kind).  If a push fails (because of a fast-forward merge, for example) the operation can be addressed on either of the GitLab systems.  Both are running git and both support git’s rewrite functionality.
* GitLab EE Repository Mirroring to Perforce (via Git Fusion) is performed asynchronously.  If the push fails (because of a non fast-forward merge, for example) any fix needs to be addressed from the git end.  When mirroring this way the GitLab metadata not stored directly by git (comments, wiki messages, issues, etc.) is not pushed to Perforce.
