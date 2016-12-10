---
title: "Project Management with GitLab and Jira"
author: Doron Katz
author_twitter: doronkatz
categories: integration concepts
image_title: 
description: "How to integrate GitLab with JIRA, and why you might want to do so"
---

One of the goals of software teams is to improve on the [development workflow](https://about.gitlab.com/2016/10/25/gitlab-workflow-an-overview/), and as you may already know, [GitLab](http://gitlab.com) already fills the void of code management. 

> GitLab has a fully-featured toolset that propels teams to work cohesively across a singular platform, collaboratively towards achieving software excellence, whilst optimizing team synergy and productivity in going [from idea to production](https://about.gitlab.com/2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/#from-idea-to-production-with-gitlab).

As for project management, [Jira](https://www.atlassian.com/software/jira) is well known for planning, tracking, and releasing software, serving as the conduit of communication between project managers and developers.

But what if those two platforms could be integrated? How would this help improve the engineer’s development workflow? 

GitLab acts as a great integrator that seamlesly fits into the software development workflow to ensure developers and project managers remain in-tune. In this article, we look at the advantages of integrating GitLab with Jira. 

In this article, we dive into how to integrate GitLab with JIRA, and why you would want to do so, and we assume you already have some familiar with with both [GitLab](http://gitlab.com) and [Jira](http://atlassian.com/software/jira).

## What is Jira
[Jira](http://atlassian.com/software/jira) is a project management platform that provides teams with the tools necessary to plan, create, track, prioritize, and distribute tasks amongst engineers, and manage user stories, sprints, releases, reports, and more. While GitLab's very own [Issue Board](https://about.gitlab.com/solutions/issueboard/) provides a simple and concise in-tool way to create and track issues, which is sufficient for many smaller teams and projects, the industry-established Jira offers greater enterprise-level project management tools to projects. 


![A backlog project-view of a Jira project](source/images/blogimages/How-to-use-GitLab-with-Jira/image_1.png)

Teams working with an agile-first approach, would find Jira highly conducive toward effective scrum and Kanban management, and more so, Jira is highly customizable allowing teams to create their own custom workflow processes from conception to completion.

Jira on its own, whilst serving as a strong project management platform, not being able to relate issues to specific bits of code makes articulating to developers the problem a bit more ambiguous. In this article we will show you how you can leverage GitLab in Jira projects to propel your development workflow to a whole new level, creating a more engaging relationship between developers and project managers.  Let’s find out how. 

## Why use GitLab with Jira?
Whereas Gitlab is developer-geared, and Jira is more project-management-driven, the goal has always been in projects for teams to work more closely, and while managers tend to not meddle in GitLab, it can also be said that developers don’t share the same passion for wanting to contribute in Jira. Through integrating GitLab into Jira, this takes away a major pain-point, by letting developers articulate to the project team through an environment they are more comfortable with, through their git commit statements. 

### Commenting on Jira issues within Git
The first benefit we will look at is using commit messages to mention and write comments in a specific Jira issue, so when developers mention specific Jira issues within their git commits by issue number, that aforementioned Jira issue will subsequently get that new comment, as well as a link that refers to that specific Jira commit, as illustrated below:

![How Jira includes GitLab commits within the links-to section](source/images/blogimages/How-to-use-GitLab-with-Jira/image_3.png)

> When a developer adds a specific git comment in his or her commit we would subsequently see that Jira issue create a relationship to that specific Git commit, making it easier for both developers and managers to follow the progress of that user story together.  This is a really nice way of tying together the development and project tracking efforts contextually and centrally. 

### Closing Jira issues within Git]
Given a certain Jira project and issue number *PROJECT-1*, in the linked GitLab project, a commit message to close that particular issue would look like:


```
PROJECT-1 #close Fixed this today
```

> By signifying closes in his or her git commit, the developer conveniently notifies the project team that a particular issue has been closed, without him having to go into Jira and mark the status as close along with a comment message.  This saves time for developers, whilst ensuring greater transparency for the rest of the team. This also has the added bi-directional benefit of also showing in GitLab via merge requests, the acceptance of the merge will result in resolution of the issue, going through the technical lead’s approval workflow prior to closing the issue. 

In the following illustration, we can see from within GitLab (with a link to the Jira issue) within the merge-request, closure of that issue, as confirmation of bi-directionality. 

![Merge requests reference the specific project issue in GitLab](source/images/blogimages/How-to-use-GitLab-with-Jira/image_4.png)


![A Jira issue view of the resolution by commit](source/images/blogimages/How-to-use-GitLab-with-Jira/image_5.png)


This also has the added benefit in the long-term, through tying commits to specific issues, making regression testing and diagnosing bugs a lot easier through time by being able to trace the resolution to a specific commit in time.

### Other Advanced actions through Smart Commits
Through what is referred to as [smart commits](https://confluence.atlassian.com/fisheye/using-smart-commits-298976812.html), developers are able to perform additional advanced actions. By following the syntax format of: 


```
<ignored text> <ISSUE_KEY> <ignored text> #<COMMAND> <optional COMMAND_ARGUMENTS>
```


Developers are able to perform additional actions like:
* Comment on a issue;
* Record time tracking information against an issue (i.e worked 1w 2d on an issue).
* Transition to a particular workflow state (i.e *Start Progress*, *Start Review*).

If a developer on a project titled *PROJECT*, wishes to comment on issue number *PROJECT-42*, or add a work time log, and transition the workflow state to *start-progress*, the developer would write something like:


```
PROJECT-42 #comment I need to get more information on this
...
PROJECT-42 #time 1w 2d 4h 30m Total work logged
...
PROJECT-42 #start-progress Started this today
...

```


### Chaining multiple actions together in one commit
Beyond simple commit stateme,ts developers are able to chain together multiple actions in a single commit line. The following would close both PROJECT-42 and PROJECT-1 issue issues:


```
PROJECT-42 PROJECT-1 #close This task has been closed
```


Or by adding the following commit statement, have both PROJECT-42 and PROJECT-1 issues record a time of 2 days and 5 hours, as well as add a specific comment:


```
PROJECT-42 PROJECT-1 #time 2d 5h #comment Task completed ahead of schedule #close
```


As you can see, chaining actions together in one commit saves developers even more time, and hassle, while ensuring the project managers get all the information in a timely and accurate manner. 

##How to Integrate GitLab into Jira
In order for you to take advantage of GitLab in your Jira project, and integrate into your specific Jira project, you will need to first follow some configuration steps on Jira, before referring to your Jira instance on GitLab. 

###Configuring Jira
Starting off with Jira, the first step is to create a new Jira user, with access to all the projects. Log in to Jira with as an admin user, and create a new user (under Administration/User Management), you can call it **gitlab**, making sure you give it **read/write access* to all projects in Jira. Take note of the username and password, you will need it later. 

Next, you will create a new group, and you could call it something like *GitLab-developers*, adding the user you just created to that group, then within Application Access/View configuration, add the group you just created to **Jira Core**.

![Associating the group with Jira Core](source/images/blogimages/How-to-use-GitLab-with-Jira/image_9.png)

With that last step, you are now ready to move on to setting up GitLab. 

###Configuring GitLab
In your GitLab project, to complete the Jira integration, within the project repository, go to Services/JIRA and complete the details to connect to your specific Jira instance nad project. 

![Configuring Jira on your GitLab project services settings](source/images/blogimages/How-to-use-GitLab-with-Jira/image_7.png)

You will need to set the following:
* URL - the base URL of your Jira project.
* Project Key - the key of your specific project, such as PROJ
* Username - the username of the gitlab user you created.
* Password - the password of the gitlab user you created. 
* JIRA issue transition - The id of the transition that moves your issue to the closed state. This is found under Jira workflow administration.

By following those two steps, your GitLab and Jira project are integrated and ready to be bi-directionally engaged. 

## Next Steps
- Integrate GitLab into Jira through following our [step-by-step guide](https://docs.gitlab.com/ee/project_services/jira.html#gitlab-jira-integration) . 
* Enable smart-commits in JIRA, for advanced commands, by following [Atlassian’s guide](https://confluence.atlassian.com/fisheye/enabling-smart-commits-298976933.html).

## Helpful resources
* [GitLab JIRA integration - GitLab Documentation](https://docs.gitlab.com/ee/project_services/jira.html)
* [Using Smart Commits - Atlassian Documentation](https://confluence.atlassian.com/fisheye/using-smart-commits-298976812.html) 
