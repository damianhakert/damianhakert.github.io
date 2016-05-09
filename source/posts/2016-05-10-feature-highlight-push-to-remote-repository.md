---
title: "Feature highlight: Push to a remote repository"
date: 2016-05-10 18:30
comments: true
author: Ivan Nemytchenko
author_twitter: inemation
---

Since GitLab EE 8.2 you could sync all changes from remote repository to one on GitLab.

In 8.7 we introduced second part of the mirroring functionality: ability to push changes to external repo from GitLab.

This means that now you can use GitLab as a main place for you development, and get all your changes pushed to another repository.
There could be a number of reasons why sometimes it is important to keep the old system working, while you're switched to GitLab:

- You can be tied with company policy to keep using the legacy system
- You want Github to keep playing the role of showcase for your project
- You don't want to spend time reconfiguring all your existing integrations

In any of these cases "Push to remote repository" might be your savior.


## Setting up

It can be configured in Settings → Mirror Repository:

![Settings: Push to a remote repository](/images/blogimages/push-to-remote-repository/settings.png)

It will be pushed every hour. You can also trigger it manually right from the project page:

![Trigger push to a remote repository](/images/blogimages/push-to-remote-repository/trigger.png)


## Playing with mirroring functionality

As an experiment, I built a chain of 3 repositories: [Bitbicket](https://bitbucket.org/ivannemytchenko/sync) → [GitLab](https://gitlab.com/inem/sync) → [Github](https://github.com/inem/sync).

Every change from Bitbucket repo goes to GitLab, triggers build there(since I checked "Trigger builds for mirror updates" checkbox). Then all the changes are pushed to the repo at Github.

![Checkbox](/images/blogimages/push-to-remote-repository/checkbox.png)

As you see, mirroring gives you an additional dimension of flexibility. You can use it to modify existing workflow, or to build one from scratch.


"Push to remote repository" is a feature of GitLab Enterprise Edition. It means that you can use it for free at GitLab.com or in your own GitLab EE instance.
