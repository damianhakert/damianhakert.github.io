---
title: "GitLab Workflow: an Overview"
author: Marcia Ramos
author_twitter: XMDRamos
categories: GitLab workflow
image_title: '/images/blogimages/getting-started-with-gitlab-workflow/xxx.png'
description: "Add description"
twitter_image: '/images/tweets/getting-started-with-gitlab-workflow-issues-and-merge-requests.png'
---


GitLab is a Git-based repository manager, and a powerful complete application for software development.

With an _user-and-newbie-friendly interface_, GitLab allows you to work effectively, both from the command line and from the UI itself. It's useful not only for your developers, but to integrate your entire team work in a single an unique platform.

The GitLab Workflow logic is intuitive and predictable, making the entire platform easy to use and easier to get used to. Once you do, you won't want anything else!


<!-- more -->

----

## On this post
{:.no_toc}

- TOC
{:toc}

----

## GitLab Workflow

The **GitLab Workflow** consists on a logical sequence of possible actions to be taken during the entire lifecycle of the software development process, using GitLab as the platform that hosts your code.

The GitLab Workflow takes into account the [GitLab Flow][post-flow], which consists of Git-based methods and tactics for version management, such as branching strategy, Git best practices, and so on.

With the GitLab Workflow, the [goal][master-plan] is to help teams to work cohesively and effectively since the first stage of implementing something new (ideation) until the last stage, which is deploying that implementation to production. That's what we call "going faster from idea to production in 10 steps".

![FROM IDEA TO PRODUCTION IN 10 STEPS](/images/blogimages/idea-to-production-10-steps.png)

### Stages of Software Development

The natural course of the software development process passes through 10 major steps, for whose GitLab presents individual solutions:

1. **IDEA:** Every new proposal starts with an idea, which usually come up in a chat. For this stage, GitLab integrates with [Mattermost].
2. **ISSUE:** The most effective way to discuss an idea is creating an issue for it. Your team and your collaborators can help you to polish and improve it in the [issue tracker](#gitlab-issue-tracker).
3. **PLAN:** Once the discussion came to an agreement, it's time to code. But wait! First, we need to prioritize and organize our workflow. For this, we can use the [Issue Board](#gitlab-issue-board).
4. **CODE:** Now we're ready to write our code, once we have everything organized. 
5. **COMMIT:** Once we're happy with our draft, we can commit our code to a feature-branch.
6. **TEST:** With [GitLab CI][ci], we can run our scripts to build and test our application.
7. **REVIEW:** Once our script worked and our tests and builds succeeded, we are ready to get our [code reviewed](#gitlab-code-review) and approved.
8. **STAGING:** Now it's time to [deploy our code to a staging environment][ci-cd-cd] to check if everything worked as we were expecting or if we still need adjustments.
9. **PRODUCTION:** When we got everything working as it should, it's time to [deploy to our production environment][ci-cd-cd]!
10. **FEEDBACK:** Now it's time to look back and check what stage of our work needs improvement. We use [Cycle Analytics][ca] for a feedback on the time we spent on key stages of our process.

To walk through these stages smoothly, it's important to have powerful tools to support this workflow. On the next sections you'll find an overview of the toolset available at GitLab.

## GitLab Issue Tracker

GitLab has a powerful issue tracker that allows you, your team and your collaborators to share and discuss ideas before putting them in practice.

![issue tracker - view list](#)

Issues are the first essential feature of the GitLab Workflow. [Always start a discussion with an issue][issue-post]: it's the best way to track the evolution of a new prospect.

It's most useful for:

- Discussing ideas
- Submitting feature proposals
- Asking questions
- Reporting bugs and malfunction
- Elaborating new code implementations coding

Each project hosted by GitLab has an issue tracker. To create a new issue, navigate to your project's **Issues** > **New issue**, give it a title that resumes the subject to be treated, and describe it using [Markdown][md-gitlab]. Check the [pro tips](#pro-tips) below to enhance your issue description.

The GitLab Issue Tracker presents extra functionalities to make it easier to organize and prioritize your actions, described below.

![new issue - additional settings](#)

### Issue Weight

You can attribute an [Issue Weight] to make it clear how difficult is the implementation of that idea. Less difficult would receive weights of 01-03, more difficult, 07-09, and the ones in the middle, 04-06.

### Confidential Issues

Whenever you want to keep the discussion presented in a issue within your team only, you can make that [issue confidential][confid-issue]. Even if your project is public, that issue will be preserved: the browser will respond with an 404 error whenever someone who is not a project member with at least [Reporter level][user-level] tries to access that issue's URL.

### Due dates

Every issue enables you to attribute a [due date][due-dates-post] for it. Some teams work on tight schedules, and it's important to them having a way to setup a deadline for implementations and for solving problems. This can be facilitated by the due dates.

When you have due dates for multi-project task, for example, for a new release, for launching a new product, or for every quarter, you can use [milestones](#milestones) for them.

### Assignee

Whenever someone starts to work on an issue, it can be assigned to that person. You can change the assignee as much as you need. The idea is that the assignee is responsible for that issue until he/she reassigns it to someone else to take it from there.

### Labels

GitLab labels are also an important part of the GitLab flow. You can use them to categorize your issues, to localize them in your workflow, and to organize them by priority with [Priority Labels].

Labels will enable you to work with the [GitLab Issue Board](#gitlab-issue-board), facilitating your plan stage and organizing your workflow.

### GitLab Issue Board

The [GitLab Issue Board][board] is a tool ideal for planning and organizing your issues according to your project's workflow.

It consists of a board with lists corresponding to its respective labels. Each list contains their corresponding labeled issues, displayed as cards.

The cards can be moved between lists, which will cause the label to be updated according to the list you moved the card into.

![Issue Board gif](#)

## GitLab Code Review

After discussing a new proposal or implementation in the issue tracker, it's time to work on the code. You write your code locally and, once you're done with your first iteration, you commit your code and push to your GitLab repository. Your Git-based management strategy can be improved with the [GitLab Flow][post-flow].

### First Commit

In your first commit message, you can add the number of the issue related to that commit message. By doing so, you create a link between the two stages of the development workflow: the issue itself and the first commit related to that issue.

To do so, if the issue and the code you're committing are both in the same project, you simply add `#xxx` to the commit message, where `xxx` is the issue number. If they are not in the same project, you can add the full URL to the issue (`https://gitlab.com/<username>/<projectname>/issues/<xxx>`).

```shell
git commit -m "this is my commit message. Ref #xxx"
```

or

```shell
git commit -m "this is my commit message. Related to https://gitlab.com/<username>/<projectname>/issues/<xxx>"
```

Of course, you can replace `gitlab.com` with the URL of your own GitLab instance.

**Note:** Linking your first commit to your issue is going to be relevant for tracking your process far ahead with [GitLab Cycle Analytics](#feedback). It will measure the time taken for planning the implementation of that issue, which is the time between creating an issue and making the first commit.
{: .note .alert .alert-success}

### Merge Request

Once you push your changes to a feature-branch, GitLab will identify this change and will prompt you to create a Merge Request (MR).

Every MR will have a title (something that resumes that implementation) and a description ([Markdown][md-gitlab] supported). On the description, you can shortly describe what that MR is doing, mention any related issues and MRs (creating a link between them), and you can also add the [issue closing pattern], which will close that issue(s) once the MR is **merged**.

For example:

```md
## Add new page

This MR creates a `readme.md` to this project, with an overview of this app.

Closes #xxx and https://gitlab.com/<username>/<projectname>/issues/<xxx>

Preview:

![preview the new page](#image-url)

cc/ @Mary @Jane @John
```

When you create an MR with a description like the one above, it will:

- Close both issues `#xxx` and `https://gitlab.com/<username>/<projectname>/issues/<xxx>` when merged
- Display an image
- Notify the users `@Mary`, `@Jane`, and `@John` by e-mail

You can assign the MR to yourself until you finish your work, then assign it to someone else to conduct a review. It can be reassigned as many times as necessary, to cover all the reviewers you need.

It can also be labeled and added to a [milestone](#milestones) to facilitate organization and prioritization.

When you add or edit a file and commit to a new branch from the UI instead of from the command line, it's also easy to create a new merge requests. Just mark the checkbox "start a new merge request with these changes" and GitLab will automatically create a new MR once you commit your changes.

**Note:** It's important to add the issue closing pattern to your MR in order to be able to track the process with [GitLab Cycle Analytics](#feedback). It will track the "code" stage, which measures the time between pushing a first commit and creating a merge request related to that commit.
{: .note .alert .alert-success}

### WIP MR

A WIP MR, which stands for **Work in Progress Merge Request**, is a technique we use at GitLab to prevent that MR to get merged before it's ready. Just add `WIP:` to the beginning of the title of an MR, and it will not be merged, unless you remove it from there.

When your changes are ready to get merged, remove the `WIP:` pattern either by editing the issue and deleting manually, or use the shortcut available for you just below the MR description.

![WIP MR click to remove WIP from the title](#)

### Code Review

Once you created a merge request, it's time for getting reviewed by your team or collaborators. Using the diffs available on the UI, you can add inline comments, reply to them and resolve them.

You can also grab the link for each line of code by clicking on the line number.

The commit history is also available from the UI, from which you can track the changes between the different versions of that file. You can view them inline or side-by-side.

![code review in MRs at GitLab](#)

## Build, Test, and Deploy

[GitLab CI][ci] is an powerful built-in tool for [Continuous Integration, Continuos Deployment and Continuous Delivery][ci-cd-cd], which can be used to run scripts as you wish. The possibilities are endless: think of it as if it was your own command line, integrated with GitLab.

It's all set by an Yaml file called, `.gitlab-ci.yml`, placed at your project's repository. Enjoy the bunch of CI templates by simply adding a new file through the web interface, and type the file name as `.gitlab-ci.yml` to trigger a dropdown menu with dozen of possible templates for different applications.

Examples of GitLab CI capabilities:

- Use it to [build][pages-post] any [Static Site Generator][ssgs-post], and deploy your website with [GitLab Pages][pages]
- Use it to [deploy your website][ivan-post] to `staging` and `production` [environments][env]
- Use it to [build an iOS application][ios-post]
- Use it to [build and deploy your Docker Image][post-docker] with [GitLab Container Registry][gcr]

## Feedback: Cycle Analytics
{: #feedback}

When you follow the GitLab Workflow, you'll be able to gather feedback with [GitLab Cycle Analytics][ca-post] on the time your team took to go from idea to production, for each key stage of the process:

- **Issue:** the time from creating an issue to assigning the issue to a milestone or adding the issue to a list on your Issue Board
- **Plan:** the time from giving an issue a milestone or adding it to an Issue Board list to the pushing first commit
- **Code:** the time from the first commit to creating the merge request
- **Test:** the time CI takes to run every build for the related merge request
- **Review:** the time from creating the merge request to merging it
- **Staging:** the time from MR merge until deploy to production
- **Production** (Total): The time it takes between creating an issue and [deploying the code to production][env]

## Enhance

### Issue and MR Templates

They allow you to define context-specific templates for issue and merge request description fields for your project.

You write them in [Markdown] and add them to the default branch of your repository. They can be access by the dropdown menu whenever an issue or MR is created.

They save time when describing issues and MRs and standardize the information necessary to follow along. It makes sure everything you need to proceed is there.

As you can create multiple templates, they serve for different purposes. For example, you can have one for feature proposals, and a different one for bug reports. Check the ones in [GitLab CE project][templates-ce] for real examples.

![issues and MR templates - dropdown menu screenshot](#)

### Milestones

[Milestones][post-amanda] are the best tool you have at GitLab to track the work of your team based on a common target, in a specific date.

The goal can be different for each situation, but the panorama is the same: you have a collection of issues and merge requests being worked on to achieve that particular objective.

This goal can be basically anything that groups the team work and effort to do something by a deadline. For example, publish a new release, launch a new product, get things done by that date, or assemble projects to get done by year quarters.

For instance, you can create a milestone for Q1 2017 and assign every issue and MR that should be finished by the end of March, 2017. You can also create a milestone for an event that your company is organizing. Then you access that milestone and view an entire panorama on the progress of your team to get things done.

![milestone dashboard](#)

## Pro Tips

### For both Issues and MRs

- In issues and MRs descriptions:
  - Type `#` to trigger a dropdown list of existing issues
  - Type `!` to trigger a dropdown list of existing MRs
  - Type `/` to trigger slash commands
  - Type `:` to trigger emojis (also supported for inline comments)
- Add images (jpg, png, gif) and videos to inline comments with the button **Attach a file**
- [Apply labels automatically][labels-post] with [GitLab Webhooks][hooks]
- [Fenced blockquote][fenced]: use the syntax `>>>` to start and finish a blockquote

      >>>
      Quoted text

      Another paragraph
      >>>
- Create [task lists]:

      - [ ] Task 1
      - [ ] Task 2
      - [ ] Task 3

#### Subscribe

Have you found an issue or an MR that you want to follow up? Expand the navigation on your right and click [Subscribe][subsc-issue] and you'll be updated whenever a new comment comes up. What if you want to subscribe to multiple issues and MRs at once? Use [bulk subscriptions]. 😃

#### Add TO-DO

Besides keeping an eye on an issue or MR, if you want to take a future action on it, or whenever you want it in your GitLab TO-DO list, expand the navigation tab at your right and [click on **Add todo**][add-todo].

#### Search for your Issues and MRs

When you're looking for an issue or MR you opened long ago in a project with dozens, hundreds or even thousands of them, it turns out to be hard to find. Expand the navigation on your left and click on **Issues** or **Merge Requests**, and you'll be able to filter all your issues or MRs by author, assignee, milestone, label and weight. You can also search for opened, merged, closed, and all of them (both merged, closed, and opened).

### Moving Issues

An issue end up in a wrong project? Don't worry. Click on **Edit**, and [move the issue][move-issue] to the correct project.

### Code Snippets

Sometimes do you use exactly the same code snippet or template in different projects or files? Create a code snippet and leave it available for you whenever you want. Expand the navigation on your left and click **[Snippets]**. All of your snippets are gonna be there. You can set them to public, internal (only for GitLab logged users), or private.

![Snippets - screenshot](#)

## GitLab WorkFlow Use-Case Scenario

To wrap-up, let's put everything together. It's easy!

Let's suppose you work at a company focused in software development. You created a new issue for developing a new feature to be implemented in one of your applications.

For this  application, you already have created labels for "discussion", "backend", "frontend", "working on", "staging", "ready", "docs", "marketing", and "production". All of them already have their own lists in the Issue Board. Your issue currently have the label "discussion".

After the discussion in the issue tracker came to an agreement, your backend team started to work on that issue, so their lead moved the issue from the list "discussion" to the list "backend". The first developer to start writing the code assigned the issue to himself, and added the label "working on".

In his first commit message, he referenced the issue number. After some work, he pushed his commits to a feature-branch and created a new merge request, including the issue closing pattern in the MR description. His team reviewed his code and made sure all the tests and builds were passing.

Once the backend team finished their work, they removed the label "working on" and moved the issue from the list "backend" to "frontend". So, the frontend team knew that issue was ready for them.

When a frontend developer started working on that issue, he or she added back the label "working on" and reassigned the issue to him/herself. When ready, the implementation was deployed to a **staging** environment. The label "working on" was removed and the issue card was moved to the "staging" list on the Issue Board.

Finally, when the implementation succeeded, your team moved it to the list "ready".

Now it's time for your technical writing team to create the documentation for the new feature, and once someone got started, he/she added the label "docs". At the same time, your marketing team started to work on the campaign to launch and promote that feature, so someone added the label "marketing". When the tech writer finished the documentation, he/she removed the label "docs". Once the marketing team finished their work, they moved the issue from the list "marketing" to "production".

At last, you, being the person responsible for new releases, merged the MR and deployed the new feature into the **production** environment and the issue was **closed**.

<!-- identifiers -->

[due-dates-post]: /2016/08/05/feature-highlight-set-dates-for-issues/#due-dates-for-issues
[milestones-post]: /2016/08/05/feature-highlight-set-dates-for-issues/#milestones
[issue weight]: https://docs.gitlab.com/ee/workflow/issue_weight.html
[priority labels]: https://docs.gitlab.com/ee/user/project/labels.html#prioritize-labels
[board]: /solutions/issueboard
[task lists]: https://docs.gitlab.com/ee/user/markdown.html#task-lists
[issue closing pattern]: https://docs.gitlab.com/ce/administration/issue_closing_pattern.html
[md-gitlab]: https://docs.gitlab.com/ee/user/markdown.html
[user-level]: https://docs.gitlab.com/ce/user/permissions.html
[templates]: https://docs.gitlab.com/ce/user/project/description_templates.html
[bulk subscriptions]: https://about.gitlab.com/2016/07/22/gitlab-8-10-released/#bulk-subscribe-to-issues
[fenced]: /2016/07/22/gitlab-8-10-released/#blockquote-fence-syntax
[add-todo]: /2016/06/22/gitlab-8-9-released/#manually-add-todos
[subsc-issue]: /2016/03/22/gitlab-8-6-released/#subscribe-to-a-label
[confid-issue]: /2016/03/31/feature-highlihght-confidential-issues/
[move-issue]: /2016/03/22/gitlab-8-6-released/#move-issues-to-other-projects
[templates-ce]: https://gitlab.com/gitlab-org/gitlab-ce/issues/new
[Snippets]: https://gitlab.com/dashboard/snippets
[ca]: /solutions/cycle-analytics/
[ci]: /gitlab-ci/
[ci-cd-cd]: /2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/
[post-flow]: /2014/09/29/gitlab-flow/
[master-plan]: /2016/09/13/gitlab-master-plan/
[mattermost]: /2015/08/18/gitlab-loves-mattermost/
[issue-post]: /2016/03/03/start-with-an-issue/
[labels-post]: /2016/08/19/applying-gitlab-labels-automatically/
[hooks]: https://docs.gitlab.com/ce/web_hooks/web_hooks.html
[pages]: https://pages.gitlab.io/
[pages-post]: /2016/04/07/gitlab-pages-setup/
[ssgs-post]: /2016/06/17/ssg-overview-gitlab-pages-part-3-examples-ci/
[ivan-post]: /2016/08/26/ci-deployment-and-environments/
[ios-post]: /2016/03/10/setting-up-gitlab-ci-for-ios-projects/
[GCR]: /2016/05/23/gitlab-container-registry/
[post-docker]: /2016/08/11/building-an-elixir-release-into-docker-image-using-gitlab-ci-part-1/
[ca-post]: /2016/09/21/cycle-analytics-feature-highlight/
[post-amanda]: /2016/08/05/feature-highlight-set-dates-for-issues/#milestones
[env]: https://docs.gitlab.com/ce/ci/yaml/README.html#environment

<!-- closes https://gitlab.com/gitlab-com/blog-posts/issues/279 -->
