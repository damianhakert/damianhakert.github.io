---
layout: markdown_page
title: Errors on GitLab.com
category: GitLab.com
---

If GitLab.com users encounter errors on GitLab.com (particularly Error 500s), it may be useful to see the encountered
error on our [Sentry instance](https://sentry.gitlap.com). You can search for a specific username in the search bar
by entering in the following:

user.username:<user ID>

For example:

user.username:sytse

This will bring up all exceptions encountered by the user.

Note that Sentry tries to group similar errors together, but it's possible
that it creates a separate entry for the same problem. If a GitLab issue
exists for that exception, it will show up by the headline as GL-XYZ, where
XYZ is some incident number defined by Sentry. You may have to search other
similar events or look on the issue tracker on GitLab.com whether a separate
GitLab issue has been created for the Sentry exception.

If the exception looks like it does not exist, feel free to create a GitLab
issue by clicking the "Create GitLab Issue" button. This will provide a
pre-filled form with all the details of the backtrace. Please clean up the
title and/or augment the description with what the user experienced when this
exception occurred to make it easier for developers to understand what
happened.