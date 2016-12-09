---
title: "How to use GitLab with Jira"
author: Doron Katz
author_twitter: doronkatz
categories: integration concepts
image_title: '/images/blogimages/jira_logo.png'
description: "In this article, we dive into how to integrate GitLab with JIRA, and why you would want to do so."
twitter-image: "images/tweets/How-to-use-GitLab-with-Jira.png" 
---

One of the goals of a developer and development team is to improve on the development workflow, and as you may already know, [GitLab](http://gitlab.com) already fills the void of code management. As for project management, [Atlassian’s Jira](https://www.atlassian.com/software/jira) the industry-standard in planning, tracking and releasing software, serves as the conduit of communication between project managers and developers.  

But what if those two platforms could be integrated? How would this help improve the engineer’s development workflow? In this article, we dive into how to integrate GitLab with JIRA, and why you would want to do so, and we assume you already have some familiar with with both [GitLab](http://gitlab.com) and [Jira](http://atlassian.com/software/jira).

## What is Jira
[Jira](http://atlassian.com/software/jira) is a software platform by [Atlassian](https://atlassian.com) that serves project managers and engineers in companies large and small, by being able to provide the tools necessary to plan (and create) user stories, sprints, and distribute the tasks amongst engineers; track and prioritize the user stories, release as well as report on.  

![JIRA image](https://wac-cdn.atlassian.com/software/jira/main/01/columns/00/content/0/localUpload/Backlog@2x.png.png?cdnVersion=eh)

Teams working with an agile-first approach, would find Jira highly conducive toward effective scrum and KZanban management, and more so, Jira is highly customizable allowing teams to create their own custom workflow processes from conception to completion.

Jira also integrates with thousands of plugins, from continuous integration, real-time collaboration to source code management.  One such integration that we will focus on in this article,  is integrating [GitLab](http://gitlab.com), and how it would improve your development workflow.

![Image](http://i.imgur.com/d7LTaQb.png)

While each on its own merits, GitLab and Jira provide a powerful development framework for teams, leveraging GitLab as a fully-integrated part of Jira would take your development workflow to a new level, creating a more engaging relationship between developers and project managers.  Let’s find out how. 

## Why use GitLab with Jira?
Whereas Gitlab is developer-geared, and Jira is more project-management-driven, the goal has always been in projects for teams to work more closely, and while managers tend to not meddle in GitLab, it can also be said that developers don’t share the same passion for wanting to contribute in Jira. Through integrating GitLab into Jira, this takes away a major pain-point, by letting developers articulate to the project team through an environment they are more comfortable with, through their git commit statements. 

### Commenting on Jira issues within Git
The first benefit we will look at is using commit messages to mention and write comments in a specific Jira issue, so when developers mention specific Jira tickets within their git commits by ticket number,  that aforementioned Jira ticket will subsequently get that new comment, as well as a link that refers to that specific Jira commit within GitLab, as illustrated below:

![Commit messages](https://docs.gitlab.com/ee/project_services/img/jira_issue_reference.png)


> With John, the developer, adding a specific git comment in his commit we now see that Jira ticket create a relationship to that specific Git commit, making it easier for both developers and managers to follow the progress of that user story together.  This is a really nice way of tying together the development and project tracking efforts contextually and centrally. 

### Closing Jira tickets within Git
Beyond tracking commits, developers also have the ability via their terminal when committing code to signal to that particular Jira ticket that this commit closes the ticket, using specific trigger words. Jira currently recognizes three trigger words developers could use include *Resolved*, *Closes*, and *Fixes*, along with the specific issue ID of the project. 

An example of this might look like:
```
PROJECT-1 #close Fixed this today
```

> By signifying resolves in his git commit, John conveniently notifies the project team that a particular issue has been resolved, without him having to go into Jira and mark the status as close along with a comment message.  This saves time for developers, whilst ensuring greater transparency for the rest of the team. This also has the added bi-directional benefit of also showing in GitLab via merge requests, the acceptance of the merge will result in resolution of the ticket, going through the technical lead’s approval workflow prior to resolving the issue. 

![Merge requests reference the specific project issue in GitLab](https://docs.gitlab.com/ee/project_services/img/jira_merge_request_close.png)


![Jira ticket view of the resolution by commit](https://docs.gitlab.com/ee/project_services/img/jira_service_close_issue.png)

![View in Jira](https://docs.gitlab.com/ee/project_services/img/jira_service_close_issue.png)

This also has the added benefit in the long-term, through tying commits to specific issues, making regression testing and diagnosing bugs a lot easier through time by being able to trace the resolution to a specific commit in time.

### Other Advanced actions through Smart Commits
Through what Atlassian refers to as [smart commits](https://confluence.atlassian.com/fisheye/using-smart-commits-298976812.html) developers are able to perform additional advanced actions. By following the format of: 

```
<ignored text> <ISSUE_KEY> <ignored text> #<COMMAND> <optional COMMAND_ARGUMENTS>
```

Developers are able to perform other actions like:
* Comment on a ticket;
* Record time tracking information against an issue (i.e worked 1w 2d on an issue).
* Transition to a particular workflow state (i.e *Start Progress*, *Start Review*).

An example of commenting, recording time, and transitioning to a workflow state, respectively would look like:
```
PROJECT-42 #comment I need to get more information on this
...
PROJECT-42 #time 1w 2d 4h 30m Total work logged
...
PROJECT-1 #start-progress Started this today
...

```

### Chaining multiple actions together in one commit
If a developer is working on a piece of code that would resolve more than one ticket, the developer could refer to multiple issues within the one commit, like so:

```
PROJECT-42 PROJECT-1 #close This task has been resolved
```

As you can see, both issues will get resolved, with the same comment. Let’s say the developer wants to save time by resolving, as well as recording his time-in-effort on the two tickets, you could do so as follows:

```
PROJECT-42 PROJECT-1 #time 2d 5h #comment Task completed ahead of schedule #resolve
```

Note that both tickets get resolved (rather than closed), the same comment appears on both tickets, and the same time effort on both. As you can see, chaining actions together in one commit saves developers even more time, and hassle, while ensuring the project managers get all the information in a timely and accurate manner. 

### Third-Party libraries
Beyond what Jira supports out-of-the-box, there are third party libraries out there that can provide additional enriched GitLab/Jira experiences, and [Git Integration for JIRA  | Atlassian Marketplace](https://marketplace.atlassian.com/plugins/com.xiplink.jira.git.jira_git_plugin/cloud/overview) is one such library, which adds support for additional features like adding source code with diffs integration into Jira, as well as being able to view a summary of git tags, branches, commits, all related to a specific Jira issue. 

![Plugin screenshot](https://marketplace-cdn.atlassian.com/files/images/9d9e6c03-9b7a-478f-ba3b-d8fec50c7686.png)

## Next Steps
- Integrate GitLab into Jira through following our [step-by-step guide](https://docs.gitlab.com/ee/project_services/jira.html#gitlab-jira-integration) . 
* Enable smart-commits in JIRA, for advanced commands, by following [Atlassian’s guide](https://confluence.atlassian.com/fisheye/enabling-smart-commits-298976933.html).


## Helpful resources
* [GitLab JIRA integration - GitLab Documentation](https://docs.gitlab.com/ee/project_services/jira.html)
* [Using Smart Commits - Atlassian Documentation](https://confluence.atlassian.com/fisheye/using-smart-commits-298976812.html) 
