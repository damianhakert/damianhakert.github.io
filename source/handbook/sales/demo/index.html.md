---
layout: markdown_page
title: "Demo Script"
---

This demonstration is designed to show customers the highlights of GitLab and the basics of the Gitlab Flow.

# Sections
- [Overall navigation](#overall_navigation)
- [Basic product demo](#basic_product_demo)
- [Issues and milestones](#issues_milestones)
- [Product differentiations](#product_differentiations)
- [EE vs. CE](#ee_vs_ce)

## Prerequisites
- Access to a GitLab instance
- Ability to create a project
- If Internet access is available, start at this URL while logged in: [https://gitlab.com/](https://gitlab.com/)

## <A name="overall_navigation"></A>OVERALL NAVIGATION

### Front page navigation

- Screen areas - Discuss the different areas of the GitLab screen and how they are used
   - Left hand navigation bar
       - Top - Open and close navigation bar
       - Upper part - Global navigation
       - Lower part - Currently logged-in user
   - Top navigation - context-sensitive based on selected left hand item  
       - Tasks
   - Upper right area
       - Todos
       - New project
       - Sign out

### Left hand global navigation items

- Projects - list of projects the current user has access to
   - Explain ‘your projects’ ‘starred projects’ and ‘explore projects’
       - Your projects -- projects you have specific access to
       - Starred projects -- projects you have marked as special to you
       - Explore projects -- all projects you have any access to
   - These filters are used throughout the product
- Todos - tasks of note for the current user
- Activity - Recent push events, merge requests, etc.
   - Commit list - equivalent to 'git log' 
- Groups - Collections of projects
- Milestones - Organizes issues and merge requests
- Issues - Defect / task tracking
- Merge requests - Equivalent to Github pull request
- Snippets -  shared pieces of code
- Help
- Profile settings

## <A name="basic_product_demo"></A>BASIC PRODUCT DEMO

### Project / [GitLab flow](https://about.gitlab.com/2016/07/27/the-11-rules-of-gitlab-flow/)
- Ensure you are signed in
- Select ‘New Project’
   - Discuss per project settings
   - Name/path
   - Description
   - Import (select / unselect)
   - Visibility levels
- Create project!
- ‘Project created’ screen has many useful things
   - SSH / HTTPS connection information
   - Star / unstar setting
   - Command line access instructions
       - Git setup
       - New repo instructions
       - Repo import instructions
   - Prompt to add ‘README’ file
- Add a ‘README’ file
   - Defaults to branch ‘master’
   - Enter some text
   - Enter a description
   - Commit changes
- View project activity from main project screen via ‘activity’ tab
- Show Project->branches
   - By default master is protected
   - You have to push from another branch
   - GitLab Workflow enforced.
- Select Project->Files  (or Code)
- Select README.md and then ‘Edit’
   - Change the file
   - Add a new branchname to the bottom
   - Note the ‘start new merge request’ box -- leave it checked
- Commit changes
   - New branch is created
   - New merge request is created on next screen
- New Merge Request dialog
   - ‘from <branchname> into ‘master’ is displayed
   - Discuss WIP: header
   - Put in a good description
   - Assign to yourself
   - Check ‘remove source branch when merge request is accepted’
   - Submit merge request
- See the branches
- Compare the commits
- Accept Merge Request dialog
   - Make sure ‘Remove source branch’ is checked
   - Write a comment if desired
- Code->Network
   - See network diagram!

## <A name="issues_milestones"></A>Issues and milestones -- see how they are created, used and closed

- Create milestone
   - On Issue tab select 'Milestones' and then 'Create new'
   - Call the milestone "Initial file setup"
   - Set a due date
   - Description "Base files for this project need to be created/fixed"
- Create two issues
   - Create issue
      - Enter text "Readme needs more detail"
      - Add the Milestone from right hand menu
   - Create another issue
      - Enter text "License file needs to be created"
      - Add the Milestone from right hand menu
- View milestone progress
   - From 'Activity' tab
   - From 'Issues' tab and then Milestones
- Update readme file with new information - on temp branch
   - Find readme file in repository and select Edit
   - Update readme.md content
   - Select a target branch (NOT master) and 'X' start a new merge request
   - Commit changes
- Close the 'readme' issue as it's been addressed
- See how the Milestone progress has changed
- Create Merge Request
   - Select 'remove source branch qhen merge request is accepted'
   - Assign the merge request to yourself
   - Assign the milestone to the request
- Accept Merge Request
   - Branch should be removed
   - Milestone progress should increase (another item was added and addressed)

## <A name="product_differentiations"></A>Product differentiations

### vs. BitBucket

- Continuous integration tool - Easy-to-set up, performant, stable and elegant continuous integration with every GitLab installation.
   - Go to a project, select ‘Pipelines’ and then ‘builds’
   - View build status, duration, branch (under ref) and tags
   - Select buildID for more detail (and then use back button)
   - Click on commit and see the diff
       - Inline, side-by-side, comments all available
       - (use back button to go back to builds)
   - Ref is the branch where it is now located and the stage of the build is shown as well - build test or deploy
   - Select “Graphs” then Continuous Integration to see a collection of graphical information on CI
   - Docs for learning more about CI:  [http://docs.gitlab.com/ce/ci/](http://docs.gitlab.com/ce/ci/)

- Integrated issue tracking - GitLab includes an issue tracker which you can link to any merge request.
   - Click Issues at the top of page in www.gitlab.com project
   - Look at Open, Closed or All issues
   - Search by Author, Assignee, Milestone, Label, Weight
   - Open a closed issue and show the communication which occurred while the issue was open.

- Elastic Search - (not installed by default) GitLab leverages the search capabilities of Elasticsearch uses it when searching:
   - Issues
   - Merge Requests
   - Milestones
   - Notes
   - Projects
   - Repositories
   - Snippets
   - Wiki Repositories
   - Details available here: [https://gitlab.com/help/integration/elasticsearch.md](https://gitlab.com/help/integration/elasticsearch.md)

- Better activity feed and visualization - Collaborative activity feed to help everyone understand what is happening in a project; graphical view of the commit history.
   - From project page of https://gitlab.com select “commits”
   - Select a commit
       - Look at the history
       - Show ability to make comments in the diff itself.
       - References to Jira ticket #’s in issues and merge requests
       - When the merge happens the Jira ticket will be closed.

- Great user interface - A really clean user interface that your team will love, and also enjoy working with
   - Show left hand navigation menu
   - From https://gitlab.com select a project
   - Note ways to view project data and activity
       - Project, Activity, Code, etc…
       - Project settings (gear)
       - Wiki available - Can be turned on in projects

- More value in a single solution
   - To replace GitLab you’d need licenses for all of these:
       - BitBucket
       - JIRA
       - Confluence
       - Bamboo
- GitLab was developed as a platform
- Above other products were developed separately (some were acquired)



## <A name="ee_vs_ce"></A>EE vs. CE
- Reporting
- Workflow Management
- Additional server management options
- Deeper integration with external tools

------


## NOTES FOR FUTURE CHANGES TO THE ABOVE:


  -- Revert & Cherry pick a particular commit from commit screen
-- Show blame view from the comparison


-- milestones -- reference point for what issues need to be created for, say, a release, debugging session, etc.
-- Label -- collection of arbitrary issues & merge requests -- NOT commits or files
-- users can subscribe to labels

-- Merge request -- bottom
   --list of commits to me merged , builds
   -- CI passed/failed commits, changes
   -- line changes in files in commits to be merged

-- Create WIP: merge request allows team to discuss what might be changed vs. actually performing change.
-- Add @ mention to comment box
-- Localized to time zone of user -- hover over timestam in your local time!
-- Add comments to code!
  -- See discussion started in the middle of the file!

-- Go to CE and find a merge request to show comments inline, etc.


-- Make an additional change to the README.md
-- same merge request, different commit
-- USer confirms all is well. Remove WIP:

-- Commit merge request, remove source branch (to keep things clean)
-- Oops -- can easily revert the merge request -- an start a new merge request!
  -- into revert-afgadgagd

-- Create issue  "Probelm with readme"
   IN description
-- Create new branch from within issue create
-- Edit file
-- Start new merge request from within the issue!
-- Submit merge request

