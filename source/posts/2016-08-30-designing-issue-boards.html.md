---
title: "Feature Highlight: Designing Issue Boards"
author: "Taurie Davis"
author_twitter: tauried
categories: GitLab
image_title: '/images/blogimages/designing-issue-boards/####.jpg'
description: 'Feature Highlight: Learn how the UX team worked togther on the creation of issue boards.'
twitter_image: '/images/tweets/####.png'
---

Accurate planning and coordination of what goes in each release at GitLab is critical to shipping useful features on time each month. In order to improve our planning process, we took a look at our existing features that help teams organize issues and determined that our current milestone board was not powerful enough for larger teams or more complex projects. The team then began to brainstorm ideas for designing and implementing a new type of board that allows users to visually plan issues by utilizes our exisiting labels feature to create lists.

<!--more-->

## The proposal

At GitLab, we believe that [the speed of innovation for our organization and product is constrained by the total complexity we've added so far](https://about.gitlab.com/handbook/#values). Creating boring solutions and simpliying our product to its absolute minimum allows us to ship faster and make iterations based on real user feedback. With this in mind, our team began determining basic principals that would help guide us during the creation process:

- There are three types of lists: Backlog, Label lists, and Done.
- Backlog and Done list are default.
- Label lists are based on a label and show all issues with that label.
- Issues are ordered by priority.
- Moving an issue from a list removes the label from the list it came from (exception: backlog), and adds the label of the list it goes to.
- Backlog and Done are not labels
- If an issue has multiple list labels, it is shown in multiple lists.
- An issue is closed and all list labels are removed when it is moved to done.
- You should be able to filter the issue board, similiar to the issue list.
- You should be able to add a new list.
- You should be able to drag and reorder lists.

![Wireframe](/images/blogimages/designing-issue-boards/wireframe.png){: .shadow}

## Feedback

We have been using our current milestone board for awhile now. You are able to view issues within a given milestone and track whether they are open, assigned, or closed. This single flow 

seeing all the open issues
can drag&drop them through 3+ columns
have an easy access to the already implemented functionality from there (comments, attachments, assigned person)
can set a color for each issue

GitLab is quickly building out features that will make getting your ideas to production faster  than ever. The modern development cycle is 
modern development cycle
idea to production
document everything

# Our process

label -> column : are they the same or are they different
the advantage of having labels means that you'll have the metadata (in which lists does issue X appear) available throughout GitLab. Not only that, this also allows you to use all the sorting and filtering tools that we already have.
The downsides are that 1. it's different and therefore potentially confusing at first; 2. you can create 'bad' workflows quite easily. I think the flexibility outweighs these downsides

multiple labels to one ticket



# Reflections













