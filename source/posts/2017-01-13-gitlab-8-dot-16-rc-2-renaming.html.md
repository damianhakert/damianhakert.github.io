---
title: "Important Notice for GitLab.com Users"
author: Felipe Cabargas Madrid
author_twitter: juanpintoduran
categories: release
---

Later today, we will deploy version 8.16-RC2 on GitLab.com.

This version contains a migration that will rename a small number of namespaces
which were conflicting with our name restrictions (See [#8199](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8199) and [#8309](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/8309)).

Usernames and groups which ended in `.git` will now end in `_git`. All affected
users need to change their local clones remotes to point to the new URLs.
Otherwise, git sync operations with the remote will not work.

Users and organizations with issues related to this can contact us through our [Support form](https://support.gitlab.com/hc/en-us/requests/new?ticket_form_id=334447).