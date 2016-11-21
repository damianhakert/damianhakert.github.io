---
layout: markdown_page
title: "UX Team"
---

## UX Guide

The [UX Guide](https://docs.gitlab.com/ce/development/ux_guide/) documents our principles, approach and perspective to the experience of GitLab. Help keep this document up to date and correct by making [merge requests](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/).

## UX Workflow 

### Designer

Issues should be tagged with 'UX' if UX work is required.

1. Work on issues tagged with 'UX' on [CE](https://gitlab.com/gitlab-org/gitlab-ce/issues?label_name=ux) and [EE](https://gitlab.com/gitlab-org/gitlab-ce/issues?label_name=ux). Prioritize issues scheduled for the current milestone. If all the issues for the current milestone have been addressed, seek out issues tagged 'coming soon'.
1. UX issues have a tendency to expand in scope. Aggressively split off new issues, ideas, and concepts into their own issues. Large issue become really challenging to drive decisions in and make progress on. If you are ever unsure how to split apart large issues, work with the UX Lead.
1. Before you hand off the work, make sure to update the issue description with the single source of truth. Update the issue description if the single source of truth changes while the work is going on. If the developer implementing the issue ever has any questions on what they should implement, they can ask the designer to update the issue description with the design.
1. Once UX work is completed and feedback addressed, unassign yourself and remove the UX label. 
   * If it is an issue that is scheduled for the current release, add the next [workflow label](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/PROCESS.md#workflow-labels) needed for the issue. Typically, this is the Frontend label.
   * If it is a large issue that needs to be scheduled, mention a member of the product team so they can [prioritize and schedule it](https://about.gitlab.com/handbook/engineering/workflow/#scheduling-issues)
   * If it is a small fix, mention the UX Lead to schedule it
1. Continue to follow the issue, addressing any additional UX issues that come up.

### Researcher

Issues should be tagged with 'UX Research' if there may be an opportunity for research.

1. Work with the UX team to determine the question to research.
2. Create an issue to track the work. The issue should include the question to be researched, the hypothesis, what the impact will be based on how the question is answered, and what research method(s) will be used. List related issues.
3. Tag the issue with 'UX Research' and assign it to yourself.
4. Conduct the research and document the findings and recommendations in the issue.
5. Assign the issue to the UX Designer who is going to implement the design based on the research. Remove the 'UX Research' tag and add the 'UX' tag.

*Also see the [basics of GitLab development in the developer onboarding](https://about.gitlab.com/handbook/developer-onboarding/#basics-of-gitlab-development).*