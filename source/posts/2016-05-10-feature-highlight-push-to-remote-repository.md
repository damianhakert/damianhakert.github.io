---
title: "Feature highlight: Push to a remote repository"
date: 2016-05-10 18:30
comments: true
author: Ivan Nemytchenko
author_twitter: inemation
---

Since GitLab EE 8.2 you could sync all changes from remote repository to one on GitLab.

In 8.7 we introduced second half of the mirroring functionality: ability to push changes to external repo from GitLab.

This means that now you can use GitLab as a main place for you development, and get all your changes synced to another repository.

This might be extremely useful if you're tied to some legacy system due to company policy, but would like to use GitLab.

It can be configured in Settings → Mirror Repository:

![Settings: Push to a remote repository](/images/blogimages/push-to-remote-repository/settings.png)

It will be synced every hour. You can also trigger it manually right from the project page:

![Trigger push to a remote repository](/images/blogimages/push-to-remote-repository/trigger.png)

"Push to remote repository" is a feature of Enterprise Edition of GitLab. It means that you can use it for free at GitLab.com or in your own GitLab EE instance.


## Build flexible workflows

As an experiment, I build a chain of 3 repositories: Bitbicket → GitLab → Github.
It means every change from Bitbucket goes to GitLab, and it triggers a Build there, since I checked "Trigger builds for mirror updates" checkbox. Then all the changes are synced to the repo at Github.


## What it can be used for:

- Keep a project at self-hosted GitLab in sync with a copy at GitLab.com

- Some companies use outdated systems, and their business processes are tied to these tools.
With this feature you can start using GitLab for development, and keep your company managers happy, just by adding Remote Git repository URL in settings

