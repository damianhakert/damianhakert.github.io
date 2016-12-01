---
title: "A Media Company's GitLab Wishlist"
author: Emily von Hoffmann
author_twitter: emvonhoffmann
categories: user stories
image_title: '/images/default-blog-image.png'
description: "A Lukkien developer shares his team's challenges with Git and GitLab for their UX designs, and requests a few tweaks they'd find useful."
twitter_image: '/images/tweets/default-blog-image.png'
---
Wouter is an engineer at Lukkien, a multimedia company that produces photography, commercials, apps and website. His team currently works on an app aimed towards parents and healthcare professionals, on behalf of an account that makes baby food. They've used a combination of Jenkins and GitLab, although they are switching to GitLab CI for testing, and they use Jira for issue-tracking. He told me his team tends to use the collaboration tools of GitLab the most. Before GitLab, they used a CVS, and ultimately decided on Gitlab intead of a competitor because they needed to host on-premises for security reasons. Our service engineer Lee Matos sat down with Wouter to learn about how GitLab can help.

Here are some items discussed below and requested by the Lukkien team:

* A view that will let you see changes over builds, and how builds are affected over time.  
* Notifications around CI builds, so if there are any related tickets, those get updated as well. 
* Versioning for Photoshop and InDesign files.

Read the full exchange below!

<!--more-->

**Wouter: We struggle as a team and company to find a good versioning system for our (UX) designs. We want to know the latest version, but also want to have a clear visual representation of the changes between versions. Is there any planning for tooling like that in GitLab in the (near) feature?**
{: .alert .alert-info}

**Lee:** Could I first ask what UX tool you’re using now, and if you have a solution for versioning?

**Wouter: Currently, no we don’t. Right now we create separate folders and label the versions. We use InDesign and Photoshop files.**
{: .alert .alert-info}

**Lee:** Ok so not Balsamiq or another tool. Frankly this is on our dream feature list. I think everybody on our team wants to be able to version Photoshop and InDesign documents, but we don’t have a good solution for those files right now that is going to work smoothly.  On a related note though, it looks like Adobe is getting into the versioning space for files like these, so there’s a silver lining here in that once Adobe solves that problem, we’ll probably do something similar quickly thereafter. For now if it’s a text-based format or some other kind of underlined xml structure then sure, we’re good. Otherwise it’s pretty tiresome to use GitLab for versioning those files. 

**Wouter: Right, and especially for seeing differences in those files.**
{: .alert .alert-info}

**Lee:** Yes, and that’s something that we would love to do, because we use GitLab for everything at GitLab, but unfortunately it’s not there yet. 

**Wouter: As a team we are now working on integrating CI builds for merge requests, we are able to run validation & testing suites, which is great and easy to set-up, but we miss the option to have all output of the builds in one place (like unit test results across different builds) We are thinking about pushing the results to another server, but can't this be managed from within Gitlab itself?**
{: .alert .alert-info}

**Lee:** So your question is about validating the builds in one place — this is really interesting, I’m curious to see what you think about the two options that I have in mind, and what you’re looking for, and if they align. 
If you’re on the GitLab community edition, we have two sections for pipelines, we have “end builds,” which aggregate all of the pending and current builds. That’s the “builds view,” so you can see all the builds in progress. There’s also the “pipelines” view, which shows us which stage they’re in. Is this different from what you’re looking for? 

**Wouter: Currently we’re on a Jenkins set-up, so we can quickly compare testing results between builds using their "code metrics repoort." As an example, over on the right we have the test results, so you can see the scope of the builds and when something fails you’ll see a gap in that. And then you can see stuff like code metrics, and output from the unit test compared to previous builds.**
{: .alert .alert-info}

**Lee:**  I see, and that gives you basically the output of the unit test, and the trend over time. Ok, so as far as I know, we don’t have this currently, and I’ll confirm with our CI team and see if there are any related issues. It seems like something we'd be interested in exploring.

**Wouter: Secondly, keeping track of issues between builds is sometimes hard. Team members have the responsibility to set the correct status of a ticket to keep track of the status, but it's a manual job. We have a OTAP build lane, but its sometimes not clear on/to which environment a ticket is deployed (is this ticket on acceptance yet?) Do you have any idea on how we could improve this? We are thinking about posting a comment to an issue when a specific commit (always containing issue number) is build to a certain env.(by the way we use Jira)?**
{: .alert .alert-info}

**Lee:** This is really interesting to myself and my team, because you’re talking about tracking issues between builds. This seems like a use case that we haven’t encountered before. Where are the struggles in the over the air builds? I saw you’re using Jira now; do you plan on using Jira with GitLab, or are you trying to replace Jira, what are your thoughts on that? 

**Wouter: Yes we are already using Jira and GitLab alongside each other, so now when a tester wants to test a subject, first they have to see if it’s already built to that environment, maybe it’s in production already, and some time goes into that stage by developers. They have to do that with GitHub as well, this issue is older.**
{: .alert .alert-info}

**Lee:** And they’re looking it up in GitLab issues, or in Jira? 

**Wouter: Our testers aren’t in GitLab, so they have to look it up in Jira. So we now have an extra lane in Jira saying “this is ready for deployment,” and then when it’s being deployed, someone has to do a manual change to say “this is now being deployed to the testing environment,” later on when it’s going to acceptance, someone has to change the label to “this is now in acceptance.” This is hard when people have to do it manually because people forget sometimes which causes problems.**
{: .alert .alert-info}

**Lee:** So you’re in CI, you’re using Jira, and then you have it set up for someone to say “hey, we need to do acceptance testing, and then they do their testing, and then…you’re saying the failure happens…I’m trying to see how GitLab can help that. What are you thinking would solve it? 

**Wouter: Yes, our tickets get updated when someone puts the ticket number in the commit, which is really useful for developers who check the status of the ticket. But it would be really useful if a CI build could update all tickets that are mentioned in that build. So if it’s a merge request, those issues would say “this is now built to test.” Because we use Jenkins now to deploy but we want to use GitLab CI to deploy.**
{: .alert .alert-info}

**Lee:** That’s interesting, so if I can compare it to other tools that have Git in the name and end with “Hub,” they have something similar. It sounds like when a build passes, if the build had any tickets related to that, it would update those tickets with a message that CI then update all the tickets that are related to that build. That sounds like something that could be useful, and it sounds like it could be either integrated into GitLab directly or added as some kind of monitor that pings in an issue that "the build is now complete, go test." I made a note here to raise with our CI team and see if there are any related issues. That would be interesting for us of course because the other big “G” has something like that.  

**Wouter: My next question is that we are hosting Gitlab using a docker set-up, this works quite well but we are not sure if this will create limitations in the long run, for example if we want to use Mattermost in the future?**
{: .alert .alert-info}

**Lee:** I talked with some of our product team leads to see if there is anything that they run into. The true honest answer is, they’re not aware of running GitLab in docker at a big scale. But how big is your team?

**Wouter: My team has 8-10 developers, but we use the setup for all our teams, we’re all in the same GitLab instance. So that’s 100-120 developers.**
{: .alert .alert-info}

**Lee:** Ok, and that sounds like a reasonable number that I would call GitLab instance-sized. As it stands, we think that will be fine, there’s no limitations even with Mattermost and we don’t expect there to be any problems. Obviously if there are, we’ll explore that and figure it out. We feel that obviously docker is the future so we need to  find the answer to these questions. If you had 1,000 users, then we might expect some weirdness, but you should be fine at around 100-200. If you run into anything, please bring it up in an issue. And the same goes for docker in Mattermost, we don’t expect anything different. 

**Wouter: It does seem like Mattermost would use a lot of system resources.**
{: .alert .alert-info}

**Lee:** I agree with that, but as far as I know the Mattermost integration is working really well. But that probably depends on what Mattermost is doing, so we will keep an eye on that. 

**Wouter: Finally, in what way does Gitlab want to position itself in the long run compared to GitHub?**
{: .alert .alert-info}

**Lee:** The best way to think about it, for me, is we are actually more like Atlassian. Atlassian came to prominence by acquiring all these software pieces and mashing them together with 30 different stacks, and just making it work. I think that we have the lucky second mover advantage of saying “all of this integration is great, but it needs to be built cohesively.” So our end goal is to build what Atlassian ended up with by acquiring the little pieces, by instead building those parts and making them 100 percent cohesive. So it’s more about building an end-to-end development tool that allows your team to work together and converse and go. Our buzz phrase at this point is “idea to production,” so we want to cover everything over that process, and make it faster, whatever you’re using GitLab for. That’s even our goal internally as well, so it excites me because we’re actually using GitLab to build it. 

I think GitHub is positioning itself as more of a core component, they see Git and code as the core thing that needs to be solved, and are leaving integrations up to the third parties. We have integrations and we see the need for and value in them, but we want to build something that out of the box allows you to start making things work. Instead of saying “you need to go buy Drone, and need to wire them all up and read ten different documentations to figure it out.” We want that process to be as easy as possible. 


_If you'd be interested in speaking with a GitLab technical expert about your use-case or unique challenges, please fill out this[form]( https://docs.google.com/a/gitlab.com/forms/d/1K8ZTS1QvSSPos6mVh1ol8ZyagInYctX3fb9eglzeK70/edit)  and we’ll get in touch!_

_Tweet [@GitLab](https://twitter.com/gitlab) and check out our [job openings](https://about.gitlab.com/jobs/)._
