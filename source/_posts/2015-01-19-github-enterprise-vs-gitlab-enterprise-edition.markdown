---
layout: post
title: "GitHub Enterprise vs GitLab Enterprise Edition"
date: 2015-01-19
comments: true
categories: 
---

We get asked a lot how GitLab compares to GitHub Enterprise Edition, the version of GitHub that you can run on your own servers.
In this post we'll briefly discuss what we see as the advantages of running GitLab Enterprise Edition, our paid version of GitLab.
The three main advantages are that GitLab focuses on enterprise needs, is easier to operate and scale and it is more inclusive.

<!-- more -->

# Focuses on enterprise needs

GitLas was created as a tool for larger organizations from the start.
We want to keep it as simple as possible but not simpler.
You should be able to participate in issues without getting read access to the repository.
Some branches are more important than feature branches and should be protected against force pushes.

Keeping the permissions up to date is a constant struggle is larger organizations.
That is why GitLab allows you to synchronize groups with your LDAP server.
And collaboration a much harder problem when working across organizational boundaries.
To enable this 'inner-sourcing' GitLab has internally visible projects that are visible to all signed in users.

# Easier to operate and scale

GitLab was developed to run on your own server from the start.
It's architecture is simple but powerful.
It is easy to change where repositories are stored so you can store them on a separate fileserver (NFS) or network attached storage (NAS).
GitLab allows you to modify it to it needs, for example to install another type of web-server.
The application server is stateless so that it is possible to run multiple active servers, greatly helping with scalability and high availability.

At the same time this simple and powerful architecture also enables good performance.
One server can handle 25,000 active users, the best in the industry.
It can run on virtualized hardware but you can also run it directly on metal.

If you need changes to GitLab the Enterprise Edition license enables this.
But you'll find that we're very happy to accept contributions and merge your changes upstream if they make life better for everyone.

# More inclusive

GitLab is an open source project with more than 700 contributors that share their improvements.
There are also more that 100,000 organizations running it of which some sponsor new features.
This allows us to keep the cost of GitLab Enterprise Edition very low.
It is great value for money for a tool that comes with git hosting, issue tracking, wiki's and continuous integration.

This means that you can open up your installation to everyone in your organization that needs it.
Since software is eating the world the people that are involved with software projects are no longer only developers.
Stakeholders in projects need access to the issue tracker and end-users want access to the wiki.
With GitHub Enterprise the pricing causes some organizations to limit access to developers.
With the affordable pricing made possible by open source GitLab Enterprise Edition allows you to include everyone.

# Conclusion

We hope the above gives a good overview of of we see GitHub Enteprise vs GitLab Enterprise Edition.
If you have any comments, questions or additions feel free to leave them in the comments below or email me at sytse@gitlab.com

