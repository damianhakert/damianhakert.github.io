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

Issues should be tagged with 'UX Research' if there may be an opportunity for research.

1. Work with the UX team to determine the question to research.
2. Create a meta issue which provides a high level summary of the research to be undertaken. Ensure that it is generic enough in scope, so it doesn’t influence user behaviour. 
3. Detail research plan in Google Docs. The doc should include the question to be researched, the hypothesis, what the impact will be based on how the question is answered, and what research method(s) will be used. List related issues.
4. Add the link to the research plan in the meta issue.
5. Tag the meta issue with 'UX Research' and assign it to yourself. If the research is for a release, ensure that the release label is also added.
6. Conduct the research.
7. Document the findings and recommendations in a Google Doc. 
8. Add the link to the findings and recommendations document in the meta issue.
9. Ensure you update any issues which the research relates to, so the UX Designer is aware that the research has been completed. 
10. Remove the ‘UX Research’ label from the issues your research addresses. For the meta issue, if further UX research work is required, then the ‘UX Research’ label should remain. If no further research is needed, the meta issue can be closed.
11. For any new pain points which are uncovered during the research phase, create a new issue per pain point which describes the problem and link it to the meta issue.
12. Tag any new issues with the ‘UX’ label.

## UX on Social Media

It is encouraged to share UX designs and insight on social media platforms such as Twitter and Dribbble.

### Twitter

You can contribute design-related posts to our `@gitlab` Twitter handle by adding your tweet to our [UX Design Twitter spreadsheet](https://docs.google.com/spreadsheets/d/1GDAUNujD1-eRYxAj4FIYbCyy8ltCwwIWqVTd9-gf4wA/edit).

1. Add a new row with your tweet message, a relevant link, and an optional photo.
1. Ensure that your tweet is no more than 140 characters. If you are including a link, ensure you have enough characters and consider using a [link shortening service](https://bitly.com/).
1. The UX Lead will check the spreadsheet at the beginning of each week and schedule any tweets on Tweetdeck.
1. Once a tweet is scheduled, the tweet will be moved to the "Scheduled" tab of the spreadsheet.

### Dribbble

GitLab has a [team dribbble account](https://dribbble.com/GitLab) where you can add work in progress, coming soon, and recently released works.

* If a dribbble post has a corresponding open issue, link to the issue so designers can contribute on GitLab.
* Share the dribbble post on twitter, along with a link to the corresponding open issue if applicable.
* If you are not a member of the GitLab dribbble team and would like to be, contact the UX Lead to grant you membership.

*Also see the [basics of GitLab development in the developer onboarding](https://about.gitlab.com/handbook/developer-onboarding/#basics-of-gitlab-development).*
