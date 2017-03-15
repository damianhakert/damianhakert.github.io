---
layout: markdown_page
title: "UX Team"
---

## UX Guide

The [UX Guide](https://docs.gitlab.com/ce/development/ux_guide/) documents our principles, approach, and perspective to the experience of GitLab. Help keep this document up to date and correct by making [merge requests](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/).

## UX Strategy

Please see the [2017 UX Strategy](/handbook/ux/strategy) to view the evolving UX vision for GitLab.

## UX Workflow 

### Designer

Issues should be tagged with 'UX' if UX work is required.

1. Work on issues tagged with 'UX', in the following order:
    1. **Scheduled for current release**
    2. **Scheduled for next release** 
    3. Tagged with **Coming soon**, **To schedule**, or **Shortlist**
    4. Issues with high **community involvement** (number of comments or thumbsup)
    5. Everything else
1. UX issues have a tendency to expand in scope. Aggressively split off new issues, ideas, and concepts into their own issues. Large issue become really challenging to drive decisions in and make progress on. If you are ever unsure how to split apart large issues, work with the UX Lead.
	* Developers should be able to ship a product within one life cycle. If a feature is too large to ship within one release, work together to determine the best way of splitting the feature into smaller segments.
	* Bring developers into the conversation early. Ask for feedback on how to split up features while still maintaining the integrity of the UX.
	* When breaking up features into smaller parts, make sure that the end design goal is known. Giving the team the full picture will help developers write code aimed at achieving that goal in the future.
1. Before you hand off the work, make sure to update the issue description with the single source of truth. Update the issue description if the single source of truth changes while the work is going on. If the developer implementing the issue ever has any questions on what they should implement, they can ask the designer to update the issue description with the design.
1. Once UX work is completed and feedback addressed, unassign yourself and remove the UX label. 
   * If the issue is scheduled for a milestone, add the next [workflow label](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/PROCESS.md#workflow-labels) needed to progress the issue. Typically, this is the Frontend label.
   * If the issue is not scheduled, and is a bug or a minor, non-direction feature proposal, mention the responsible team lead to schedule it.
   * If the issue is not scheduled, and is a major, direction feature proposal, mention a product manager to [prioritize and schedule it](https://about.gitlab.com/handbook/engineering/workflow/#scheduling-issues)
1. Continue to follow the issue, addressing any additional UX issues that come up.

### Researcher

Research requests can be raised in one of two ways:

**Within the CE or EE GitLab project:** tag an issue with 'UX Research - Backlog'

**Within the UX Research project:** raise a new issue using the research template. Add the label 'Backlog' to the issue.

1. Work with the UX team to determine what should be researched.
2. Create a meta issue within the UX Research project which provides a high level summary of the research to be undertaken. The issue should be marked as 'confidential' until the research is completed so it doesn't influence user behaviour.
3. Label the meta issue with the area of GitLab you are testing (for example, Navigation) and the status of the issue (In progress). If the research relates to an issue within the GitLab CE or EE project, ensure it is updated with the label of 'UX Research - In progress'.
4. Conduct the research.
5. Document the findings and recommendations with the meta issue.
6. Unmark the meta issue as 'confidential' and update the status of the issue to 'Done'. If the research relates to an issue within the GitLab CE or EE project, ensure the 'UX Research - In progress' label is removed and add the label of 'UX Research - Done'.
7. Within the meta issue, discuss with UX designers and product owners which findings should be turned into issues within the GitLab CE or EE project.
8. Create the agreed, new issues within the GitLab CE or EE project. Link the issues back to the meta issue within the UX Research project. Tag the new issues with 'UX'.
9. Close the meta issue within the UX Research project.


*Also see the [basics of GitLab development in the developer onboarding](https://about.gitlab.com/handbook/developer-onboarding/#basics-of-gitlab-development).*
