---
layout: markdown_page
title: University | Support Path
---

## Support Boot Camp

**Goal:** Prepare new Service Engineers at GitLab

For each stage there are learning goals and content to support the learning of the engineer.
The goal of this boot camp is to have every Service Engineer prepared to help our customers
with whatever needs they might have and to also assist our awesome community with their
questions.

Always start with the [General Boot Camp](../#general-boot-camp) and then work
your way here for more advanced and specific training. Once you feel comfortable
with the topics of the current stage, move to the next.

### Stage 1

Follow the [General Boot Camp](../#general-boot-camp), concentrate on it
during your first Stage, but also:

1. Perform the [first steps](/handbook/support/onboarding.html#first-steps) of
   the on-boarding process for new Service Engineers

### Stage 2

Complement the [General Boot Camp](../#general-boot-camp) with these topics:

1. Get to know GitLab by installing the [GDK](https://gitlab.com/gitlab-org/gitlab-development-kit)
1. [Installation Methods](/installation/):
	  - Omnibus
	  - Docker
	  - [Source](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/install/installation.md)

1. Migrate GitLab from CE to EE
1. Learn about our Integrations (specially, not only):
	  - [LDAP](http://doc.gitlab.com/ee/integration/ldap.html)
	  - [JIRA](http://doc.gitlab.com/ee/project_services/jira.html)
	  - [Jenkins](http://doc.gitlab.com/ee/integration/jenkins.html)
	  - [SAML](http://doc.gitlab.com/ce/integration/saml.html)

### Stage 3

1. Familiarize yourself with ZenDesk
   - [UI Overview](https://support.zendesk.com/hc/en-us/articles/203661806-Introduction-to-the-Zendesk-agent-interface)
   - [Updating Tickets](https://support.zendesk.com/hc/en-us/articles/212530318-Updating-and-solving-tickets)
   - [Working w/ Tickets](https://support.zendesk.com/hc/en-us/articles/203690856-Working-with-tickets) *Read: avoiding agent collision.*

1. Learn about the future at GitLab: [Direction Page](/direction/)
1. Dive into our ZenDesk support process by reading how to [handle tickets](/handbook/support/onboarding.html#handling-tickets)
1. Perform a downgrade from [EE to CE](http://doc.gitlab.com/ee/downgrade_ee_to_ce/README.html)
1. [Restore](http://doc.gitlab.com/ee/raketasks/backup_restore.html) a GitLab instance from a backup
1. Start getting real world experience by handling real tickets. Begin with new
   tickets from the lowest [priority channels](/handbook/support#support-channels)
   that are listed on the Support page, and then address any backlog that may

1. **Tip:** Read through old tickets that your colleagues have worked on


### Stage 4

1. Advanced GitLab topics
   - Set up and try [Git Annex](http://doc.gitlab.com/ee/workflow/git_annex.html)
   - Set up and try [Git LFS](http://doc.gitlab.com/ee/workflow/lfs/manage_large_binaries_with_git_lfs.html)
   - Get to know the [GitLab API](http://doc.gitlab.com/ee/api/README.html),
     its capabilities and shortcomings
   - Learn how to [migrate from SVN to Git](http://doc.gitlab.com/ee/workflow/importing/migrating_from_svn.html)
   - Set up [GitLab CI](http://doc.gitlab.com/ee/ci/quick_start/README.html)
   - Create your first [GitLab Page](http://doc.gitlab.com/ee/pages/administration.html)
   - Migrate from a [source installation to Omnibus](http://doc.gitlab.com/omnibus/update/README.html#upgrading-from-a-non-omnibus-installation-to-an-omnibus-installation)

1. Join Support Calls by asking with your colleagues to invite you
   exist for those channels.

1. Create an issue on the internal Organization tracker to schedule time with
   the DevOps / Production team, so that you learn how to handle GitLab.com
   going down. Once you are trained for this, you are ready to be added to the
   on-call rotation.

1. Get to know the GitLab Codebase by reading through the source code:
   - Find the differences between the [EE codebase](https://gitlab.com/gitlab-org/gitlab-ce)
     and the [CE codebase](https://gitlab.com/gitlab-org/gitlab-ce)

1. Ask as many questions as you can think of on the `#support` chat channel



[» Back](/university)