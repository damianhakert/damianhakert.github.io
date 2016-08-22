---
title: "Feature Highlight: Designing Issue Boards"
author: "Taurie Davis"
author_twitter: tauried
categories: GitLab
image_title: '/images/blogimages/designing-issue-boards/header-image.png'
description: 'Feature Highlight: Learn how the UX team worked together on the creation of issue boards.'
twitter_image: '/images/tweets/designing-issue-boards.png'
---

Accurate planning and coordination of each release at GitLab is critical to shipping useful features on time. In order to improve our planning process for not only ourselves but also for everyone who uses GitLab, we took a look at our existing features that help teams organize issues. From here, we determined that our current milestone board was not powerful enough for larger teams or more complex projects. The team then began to brainstorm ideas for designing and implementing a new type of board that allows users to visually plan issues.

<!--more-->

## The proposal

At GitLab, we believe that [the speed of innovation for our organization and product is constrained by the total complexity we've added so far](/handbook/#boring-solutions). Creating boring solutions and simplifying our product to its absolute minimum allows us to ship faster and make iterations based on real user feedback. With this in mind, our team began determining basic principles that would help guide us during the creation process of the new issue board feature.

We knew we wanted the product to be able to:

- Provide an overview of issues in a more visual way
- Allow for a workflow with multiple intermediate steps
- Use existing metadata that would allow for use of the same sorting and filtering tools that already exist

    
Knowing this, the team was able to craft a proposal that began to come to life with requirements, user stories, and wireframes.

![wireframe](/images/blogimages/designing-issue-boards/wireframe.png){: .shadow}

## Feedback & Challenges

Here at GitLab we are able to gather feedback early by posting our proposals as issues that are publicly available to employees, contributors, and real users. With over 100 participants, the issue boards proposal recieved a lot of response that validated many of our assumptions, addressed concerns, and provided insight for future improvements.

Some concerns included:

- **Using labels as lists.** The drawback being that it can be confusing to use the same element for both issue labels and issue board lists. However, we believe that the flexibility of using labels for lists outweighs the downsides. Users will have the same metadata available throughout GitLab, as well as be able to use all the same sorting and filtering tools that already exist.
- **Assigning multiple list labels to one issue.** We believe that managing boards should be up to the user. If a user assigns three list labels to the same issue, the issue will display in all three lists and the labels will change if you drag the issue from one column to another. As [one user mentioned](https://gitlab.com/gitlab-org/gitlab-ce/issues/17907#note_12602314): "Being able to display the same issues in multiple ways to track needs differently for different user-types through different work flows would be hugely valuable." We definitely agree!
- **Only having one issue board per project.** The current scope of this feature for 8.11 allowed only for a single board per project. However, we understand the benefit of having multiple boards per project. We also recognize that many teams work across repositories and want to see issue boards available at a group level. These are improvements we are planning for a future release. :)

## Refining through collaboration

After addressing concerns, the UX team started further refining UI elements and polishing interactions. Every member of the UX team worked on the design at some stage of the process and we came to the final product through iteration and collaboration.

We worked on creating a board that made issues feel like draggable cards, provided an easy way to create default lists, and took advantage of the metadata that labels gave us by keeping the same filtering options that are available throughout the site. We also determined that the default Backlog list could contain an unmanageable number of issues, so we added a search functionality in order to find issues more easily.

The design, development, and product teams all worked closely throughout the creation process and met up once a week to discuss challenges, status, and overall excitement for the launch of this feature. 

![issue-board](/images/blogimages/designing-issue-boards/issue-board.gif){: .shadow}

## What's next

Issue boards were created as a flexible tool that can be used for various workflows and tasks. We lean towards light-weight, flexible implementations so we can ship quickly, see real use cases, and make informed iterations. We are super excited to continue working on issue boards in the upcoming releases; from multiple and cross-project boards to frontend data caching. If you have further ideas for future improvements, let us know by [making an issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/new?issue)!



