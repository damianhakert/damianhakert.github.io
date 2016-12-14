---
title: "A creative agency's GitLab wishlist"
author: Emily von Hoffmann
author_twitter: emvonhoffmann
categories: user stories
image_title: '/images/default-blog-image.png'
description: "A Lukkien developer shares his team's challenges with Git and GitLab for their UX designs, and requests a few tweaks they'd find useful."
twitter_image: '/images/tweets/default-blog-image.png'
---
[Wouter van Kuipers](https://twitter.com/wvkuipers) is an engineer at [Lukkien](https://www.lukkien.com/en/), a creative agency that produces online media, photography, film, apps, CGI, and graphic design. His team currently works on a platform aimed at parents and healthcare professionals. They've used a combination of Jenkins and GitLab, although they are switching to GitLab CI for testing. He told me his team tends to use the collaboration tools of GitLab the most. Before GitLab, they used SVN, and ultimately decided on GitLab instead of a competitor because they needed to host on-premises for security reasons. Our service engineer [Lee Matos](https://twitter.com/leematos) sat down with Wouter to learn about how GitLab can help.

<!--more-->

Here are some items discussed below and requested by the Lukkien team:

* A view that will let you see changes over builds, and how builds are affected over time.  
* Notifications around CI builds, so if there are any related tickets, those get updated as well.
* Versioning for Photoshop and InDesign files.

**Wouter:** We struggle as a team and company to find a good versioning system for our (UX) designs. Right now we create separate folders and label the versions of our InDesign and Photoshop files. We want to know the latest version, but also want to have a clear visual representation of the changes between versions. Is there any planning for tooling like that in GitLab in the (near) feature?
{: .alert .alert-info}

**Lee:** Frankly, this is on our dream feature list. I think everybody on our team wants to be able to version Photoshop and InDesign documents, but we don’t have a good solution for those files right now that's going to work smoothly. It looks like Adobe is getting into the versioning space for files like these, so there’s a silver lining here in that once Adobe solves that problem, we’ll probably do something similar quickly thereafter.

**Wouter:** My next question has to do with the fact that keeping track of issues between builds is sometimes hard. Team members have the responsibility to set the correct status of a ticket to keep track of the status, but it's a manual job. We have a DTAP build lane, but it's sometimes not clear to which environment a ticket is deployed. Do you have any idea how we could improve this? We are thinking about posting a comment to an issue when a specific commit (always containing issue number) is built to a certain environment.
{: .alert .alert-info}

**Lee:**  Where are the struggles in the over-the-air builds? I saw you’re using Jira now; do you plan on using Jira with GitLab, or are you trying to replace Jira?

**Wouter:** Yes, we are already using Jira and GitLab alongside each other, so now when a tester wants to test a issue, first they have to see if it’s already built to a specific environment, maybe it’s in production already, and some time goes into that stage for testers/developers as they have to look it up. They have to do that from within GitLab as well, especially when the issue is older, but our testers aren’t in GitLab, so they have to look it up in Jira. So we now have an extra lane in Jira saying "This is ready for deployment," and then when it’s being deployed, someone has to do a manual change to say "This is now being deployed to the testing environment," later on when it’s going to acceptance, someone has to change the label to "This is now in acceptance." This is hard when people have to do it manually because people forget sometimes, which causes problems.
{: .alert .alert-info}

**Lee:** I’m trying to see how GitLab can help. What are you thinking would solve it?

**Wouter:** Our tickets get updated when someone puts the ticket number in the commit, which is really useful for developers who check the status of the ticket. But it would be really useful if a CI build could update all tickets that are mentioned in that build. So if it’s a merge request, those issues would say "This is now built to test." Because we use Jenkins now to deploy but we want to use GitLab CI to deploy.
{: .alert .alert-info}

**Lee:** It sounds like when a build passes, if the build had any tickets related to that, it would update those tickets with a message that CI then update all the tickets that are related to that build. That sounds like something that could be useful: it could be either integrated into GitLab directly or added as some kind of monitor that pings in an issue that, "The build is now complete, go test." I made a note here to raise with our CI team and see if there are any related issues.

**Wouter:** My next question is that we are hosting GitLab using a Docker setup, this works quite well but we are not sure if this will create limitations in the long run, for example if we want to use Mattermost in the future? My team has 8-10 developers, but we use the setup for all our teams, we’re all in the same GitLab instance. So that’s 100-120 developers.
{: .alert .alert-info}

**Lee:** That's what I would call GitLab Small/Medium-sized. As it stands, we think that will be fine, there are no limitations even with Mattermost and we don’t expect there to be any problems. Obviously if there are, we’ll explore that with you and figure it out. Our product team leads aren't aware of running GitLab in Docker at a big scale (1000+) – most of those clients are running it directly in a VM or Bare Metal. We feel that obviously Docker is the future so we need to find the answer to these questions. If you run into anything, please bring it up in an issue. And the same goes for Docker in Mattermost, we don’t expect anything different.

**Wouter:** Finally, in what way does GitLab want to position itself in the long run compared to GitHub?
{: .alert .alert-info}

**Lee:** The best way to think about it, for me, is we are actually more like Atlassian. Our end goal is to build what Atlassian ended up with by acquiring the little pieces, by instead building those parts and making them 100 percent cohesive. So it’s more about building an end-to-end development tool that allows your team to work together and converse and go. Our buzz phrase at this point is "From idea to production", so we want to cover everything over that process, and make it faster, whatever you’re using GitLab for. That’s even our goal internally as well, so it excites me because we’re actually using GitLab to build it.

I think GitHub is positioning itself as more of a core component, they see Git and code as the core thing that needs to be solved, and are leaving integrations up to the third parties. We have integrations and we see the value in them, but we want to build something that allows you to start making things work out of the box. Instead of saying "You need to go buy Drone CI, you need to use Waffle.io, and need to wire them all up and read 10 different documentations to figure it out." We want that process to be as easy as possible.


_We want you to ask us anything! If you're a user interested in sharing your story on our blog, please fill out this [form]( https://docs.google.com/a/gitlab.com/forms/d/1K8ZTS1QvSSPos6mVh1ol8ZyagInYctX3fb9eglzeK70/edit)  and we’ll get in touch!_

_Tweet us [@GitLab](https://twitter.com/gitlab) and check out our [job openings](https://about.gitlab.com/jobs/)._
