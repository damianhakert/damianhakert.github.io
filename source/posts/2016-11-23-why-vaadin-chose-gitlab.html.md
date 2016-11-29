---
title: "Why Vaadin Chose GitLab"
author: Emily von Hoffmann
author_twitter: emvonhoffmann
categories: user stories
image_title: '/images/default-blog-image.png'
description: "Vaadin needed a new solution after their multiple platforms began costing too much time and frustration."
twitter_image: '/images/default-blog-image.png'
---

_If your team uses GitLab and is interested in sharing your story, please fill out this [form](https://docs.google.com/a/gitlab.com/forms/d/1K8ZTS1QvSSPos6mVh1ol8ZyagInYctX3fb9eglzeK70/edit) and we’ll get in touch!_

_[Vaadin](https://vaadin.com) is an open source UI product development company that builds components and tools for developers to create beautiful web applications. The company has more than 170 employees, based in Finland, Helsinki, Berlin, and San Jose. Today more than 150,000 developers are active users of Vaadin._

Vaadin wanted a tool to centralize their internal projects, while maintaining the commitment to simple UI/UX that they prioritize in their own product. Although they had developed a workflow using Gitolite, Trac, and several other platforms, the administrative overhead began costing developers and admins valuable time. After following GitLab since its earliest iterations, Vaadin’s IT manager, Mikael Vappula, decided that GitLab was the right platform for them. We sat down with Mikael to learn more. 

Here are some tips from Mikael's experience:
* Centralizing projects reduces the overhead of both IT admins and developers. 
* Issue trackers and code review make a potent combination, especially when you can easily cross-link relevant issues and MRs. 
* Make the best tools available to your team, but let them decide what to use. 

<!-- more -->

Can you please tell me what you were using for your previous VCS?

Before migrating to GitLab, Vaadin used Gitolite for git repository management, Trac for issue tracking, and a variety of other platforms. We had a range of tools with separate instances provisioned for specific purposes within each project. 

What were the challenges with it? Was there a specific moment when you knew it was time to try something else? 

As the team grew, the administrative overhead grew with it. For me, the work of tracking which repos individual projects were in, or who had access to what, was starting to burden the team. The development team had problems finding relevant projects, linking to the right issue tracker, and managing the needed credentials. They lost valuable time searching for the right version control system and the correct set of credentials for it. 

As the IT Manager, I was tasked with setting up new repos and credentials for the growing number of projects, tools, and employees. In doing so, I noticed that our tooling was leading developers to inefficiently allocate their time and become frustrated. Like most companies, our engineering teams play a critical role in the success of our business. Vaadin couldn’t afford the loss of developers’ time. It was clear the team needed one platform where they could pull everything together under a single entry point. 

Once you decided on us, how did you find the migration process? 

The prospect of a migration can be intimidating, but Omnibus made the installation and migration process easy, so we could begin using it very quickly. I ran the setup procedure to get the new system provisioned on a new virtual machine in Vaadin's on-premise servers. I was impressed by the Omnibus distribution, and once I set up the basic settings, it was pretty much self-service. The only thing we had to pay a little more attention to was how integrate GitLab into our authentication system (powered by CAS).

I've been impressed in terms of maintenance and updates. Rather than a multitude of servers and configuration files, the only resources needed for the 200 internal projects that Vaadin runs using GitLab are just one server and one configuration file. You know there’s always that software where you try to postpone updates. But, with GitLab, it’s pretty safe to take the latest version. We’ve done the updates 20 times now.

How have developers on your team responded to the switch? How did you announce the change?

We really emphasize open-mindedness and choice, so I couldn’t mandate a tool switch. I've heard from team members who appreciate that our culture allows people to choose their own hardware and discuss challenges openly. 

So after I set up GitLab I wrote a post to all of our employees. I took the time to explain what GitLab is, what different people should use it for, and generally how GitLab as a tool fits with our culture. I was pleased to see that after they heard GitLab was available to them, people generally adopted it quickly.

Can you share any details about how using GitLab has improved your team's performance or experience? 

It made a big difference for us to have a central point for software projects that we could manage by ourselves and have all the tooling in one place. I think using GitLab has also led to improvements in our workflow and collaboration. Using cross-linking within GitLab, you can link to issues and merges, the mark-up system is great, and you can select a project’s activity to see all the members in one place. Integration, workflow, and communication have all been vastly improved. 





