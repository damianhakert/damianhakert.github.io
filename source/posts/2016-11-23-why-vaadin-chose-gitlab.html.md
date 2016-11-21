---
title: "Why Vaadin Chose GitLab"
author: Mikael Vappula
categories: user stories
image_title: '/images/default-blog-image.png'
description: "Vaadin needed a new solution after their multiple platforms began costing too much time and frustration."
twitter_image: '/images/default-blog-image.png'
---

_[Vaadin](https://vaadin.com) is an open source UI product development company that builds components and tools for developers to create beautiful web applications. The company has more than 170 employees, based in Finland, Helsinki, Berlin, and San Jose. Today more than 150,000 developers are active users of Vaadin._

At Vaadin, we maintain a very free-spirited culture full of enthusiastic people. We wanted a tool to centralize our internal projects, while maintaining the commitment to simple UI/UX that Vaadin builds into our own product. We previously used Gitolite, Trac, and several other platforms, but decided to find an alternative after the administrative overhead began costing developers (and myself as IT Manager) valuable time. 

After following GitLab since its earliest iterations, I decided that the model and ethos of GitLab aligned perfectly with Vaadin’s. Since switching to GitLab, we’ve seen several notable improvements; I see our experience as proof of how selecting the right tool not only increases collaboration and communication, but also improves workflow.

Here are the key takeaways from our experience with GitLab:
* Centralizing projects reduces the overhead of both IT admins and developers. 
* Issue trackers and code review make a potent combo, especially when you can easily cross-link relevant issues and MRs. 
* Make the best tools available to your team, but let them choose. 
* Being open source has a lot of perks; enjoy them by following the roadmap, contributing ideas, and watching the product evolve quickly.


## Life Before GitLab

Before migrating to GitLab, Vaadin used Gitolite for git repository management, Trac for issue tracking, and a variety of other platforms. We had a range of tools with separate instances provisioned for specific purposes within each project. As the team grew, the administrative overhead grew with it. For me, the work of tracking which repos individual projects were in, or who had access to what, was starting to burden the team. The development team had problems finding relevant projects, linking to the right issue tracker, and managing the needed credentials. They lost valuable time searching for the right version control system and the correct set of credentials for it. 

As the IT Manager, I was tasked with setting up new repos and credentials for the growing number of projects, tools, and employees. In doing so, I noticed that our tooling was leading developers to inefficiently allocate their time and become frustrated. Like most companies, our engineering teams play a critical role in the success of our business. Vaadin couldn’t afford the loss of developers’ time. It was clear the team needed one platform where they could pull everything together under a single entry point. 


## Migrating to GitLab

The prospect of a migration can be intimidating, but GitLab worked hard to make the installation and migration process easy, so we could begin using very quickly. Using GitLab Omnibus, a single package complete with the different services and tools required to run GitLab, I ran the setup procedure to get the new system provisioned on a new virtual machine in Vaadin's on-premise servers. I was impressed by the Omnibus distribution, which made the process incredibly easy. Once I set up the basic settings, it was pretty much self-service. The only thing we had to pay a little more attention to was how integrate GitLab into our authentication system (powered by CAS).

When it comes to maintenance and updates, GitLab once again proved to be the best choice for Vaadin. Rather than a multitude of servers and configuration files, the only resources needed for the 200 internal projects that Vaadin runs using GitLab are just one server and one configuration file. You know there’s always that software where you try to postpone updates. But, with GitLab, it’s pretty safe to take the latest version. We’ve done the updates 20 times now.


## Letting Developers Self-Select 

I knew that GitLab was the right choice for us, but because of our emphasis on open-mindedness and choice I couldn’t mandate a tool switch. Our team members appreciate that our culture allows people to choose their own hardware and tools; they really value the opportunity to discuss challenges within the project.

So, according to these values, I set up GitLab and wrote a post to all of our employees. I took the time to explain what GitLab is, what different people should use it for, and generally how GitLab as a tool fits with our culture. I was pleased to see that after they heard GitLab was available to them, people adopted it quickly.


### An Easy and Modern Fit

Vaadin wanted to have a central point for software projects that we could manage by ourselves and have all the tooling in one place. In addition to centralizing Vaadin’s development, GitLab has also succeeded in improving the company’s workflow and collaboration. Using cross-linking within GitLab, you can link to issues and merges, the mark-up system is great, and you can select a project’s activity to see all the members in one place. Integration, workflow, and communication have all been vastly improved. 
Vaadin and its global community of developers now have the tools to create interesting and beautiful applications. 




