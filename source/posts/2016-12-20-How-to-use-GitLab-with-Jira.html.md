<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div class="note-wrapper">
            <hr>
<p>title: "Project Management with GitLab and Jira"</p>
<p>author: Doron Katz</p>
<p>author_twitter: doronkatz</p>
<p>categories: integration</p>
<p>image_title: </p>
<p>description: "How to integrate GitLab with JIRA, and why you might want to do so"</p>
<hr>
<p>&nbsp;</p>
<p>One of the goals of software teams is to improve on the <a href="https://about.gitlab.com/2016/10/25/gitlab-workflow-an-overview/">development workflow</a>, and as you may already know, <a href="http://gitlab.com">GitLab</a> already fills the void of code management, providing a fully-featured toolset that propels teams to work cohesively across a singular platform, collaboratively towards achieving software excellence, whilst optimizing team synergy and productivity in going <a href="https://about.gitlab.com/2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/#from-idea-to-production-with-gitlab">from idea to production</a>.</p>
<p>&nbsp;</p>
<p>As for project management, <a href="https://www.atlassian.com/software/jira">Jira</a> is well known for planning, tracking, and releasing software, serving as the conduit of communication between project managers and developers.</p>
<p>&nbsp;</p>
<p>But what if those two platforms could be integrated? How would this help improve the engineer’s development workflow? </p>
<p>&nbsp;</p>
<p><!-- more --></p>
<p>&nbsp;</p>
<p>GitLab acts as a great integrator that seamlessly fits into the software development workflow to ensure developers and project managers remain in-tune. In this article, we look at the advantages of integrating GitLab with Jira.  But before we get started, we wanted to baseline the terminology we use in this article.  </p>
<p>&nbsp;</p>
<ul><li><b>Jira Issue</b> - Different organizations and projects track different kinds of issues, which could represent a software bug, project or business task, help-desk ticket, for instance. Issues could also be of different types, such as task, bug, epic, and so on. 
</li><li><b>Jira Resolution</b> - Issues that are resolved could mean different things, from an item being <i>fixed</i>, to <i>closed</i>, but conceptually means the status has changed. Jira has default statuses, which the project administrator could customize further. 
</li><li><b>Jira Closure</b> - When an issue has reached its final status, marked as <i>closed</i>.
</li><li><b>GitLab Issue</b> - An issue reported within GitLab, and is trackable within GitLab. Issues are created via the <a href="https://docs.gitlab.com/ee/gitlab-basics/create-issue.html">new issue button</a> and subsequently added to the issue tracker of the project. 
</li></ul>
<h2>What is Jira</h2>
<p>&nbsp;</p>
<p>You may or may not have heard of <a href="http://atlassian.com/software/jira">Jira</a> before, in your professional career, but for those who are unfamiliar with the tool, Jira is a project management platform that provides teams with the tools necessary to plan, create, track, prioritize, and distribute tasks amongst engineers, and manage user stories, sprints, releases, reports, and more. It offers a range of tools to facilitate project management, such as a help-desk system, a marketing campaign platform, and portfolio planning structure. GitLab's very own <a href="https://about.gitlab.com/solutions/issueboard/">Issue Board</a> provides a simple and concise in-tool way to create and track issues, sufficient for most purposes and scenarios without the extended bells and whistles of Jira. </p>
<p>&nbsp;</p>
<p><img src="￼" alt="A backlog project-view of a Jira project" title=""></p>
<p>&nbsp;</p>
<p>Before showing you how to leverage GitLab in Jira projects, to propel your development workflow, creating a more engaging relationship between developers and managers, we will first explain why you should use GitLab with Jira.</p>
<p>&nbsp;</p>
<h2>Why use GitLab with Jira?</h2>
<p>&nbsp;</p>
<p>Whereas Gitlab is developer-geared, and Jira is more project-management-driven, the goal has always been in projects for teams to work more closely, and while managers tend to not meddle in GitLab, it can also be said that developers don’t share the same passion for wanting to contribute in Jira.  </p>
<p>&nbsp;</p>
<p>By integrating these two seemingly disparate tools, you bridge the communication between the two camps, letting developers articulate the project status through an environment they are more comfortable with, through their git commit statements. </p>
<p>&nbsp;</p>
<h3>Benefit #1: Commenting on Jira issues within Git</h3>
<p>&nbsp;</p>
<p>The first benefit we will look at is using commit messages to mention and write comments in a specific Jira issue, so when developers mention specific Jira issues within their git commits by issue number, that aforementioned Jira issue will subsequently get that new comment, as well as a link that refers to that specific Jira commit, as illustrated below:</p>
<p>&nbsp;</p>
<p><img src="￼" alt="How Jira includes GitLab commits within the links-to section" title=""></p>
<p>&nbsp;</p>
<p>By adding a specific git comment in his or her commit , project managers would subsequently see that Jira issue as the integration creates a relationship to that specific Git commit, making it easier for both developers and managers to follow the progress of that user story together.  This is a really nice way of tying together the development and project tracking efforts contextually and centrally. </p>
<p>&nbsp;</p>
<h3>Benefit #2: Closing Jira issues within Git</h3>
<p>&nbsp;</p>
<p>Beyond commenting via git and getting those comments to appear in a specific Jira issue, by providing a specific Jira project and issue number (<i>PROJECT-1</i>), as well as the keyword <span class='hashtag'>#close</span> , developers are able to close that particular issue:</p>
<p>&nbsp;</p>
<pre><code class='code-multiline'>PROJECT-1 #close Fixed this today
</code></pre>
<p>The developer subsequently and conveniently notifies the project team that a particular issue has been closed, without him having to go into Jira and mark the status as close along with a comment message.  This saves time for developers, whilst ensuring greater transparency for the rest of the team. This also has the added bi-directional benefit of also showing in GitLab via merge requests, the acceptance of the merge will result in resolution of the issue, going through the technical lead’s approval workflow prior to closing the issue. </p>
<p>&nbsp;</p>
<p>In the following illustration, we can see from within GitLab (with a link to the Jira issue) within the merge-request, closure of that issue, as confirmation of bi-directionality. </p>
<p>&nbsp;</p>
<p><img src="￼" alt="Merge requests reference the specific project issue in GitLab" title=""></p>
<p>&nbsp;</p>
<p><img src="￼" alt="A Jira issue view of the resolution by commit" title=""></p>
<p>&nbsp;</p>
<p>This also has the added benefit in the long-term, through tying commits to specific issues, making regression testing and diagnosing bugs a lot easier through time by being able to trace the resolution to a specific commit in time.</p>
<p>&nbsp;</p>
<h3>Benefit #3: Performing Advanced Actions through Smart Commits</h3>
<p>&nbsp;</p>
<p>Through what is referred to as <a href="https://confluence.atlassian.com/fisheye/using-smart-commits-298976812.html">smart commits</a>, developers are able to perform more advanced and interesting actions. Following the syntax format template below, developers are able to perform additional actions, like: </p>
<p>&nbsp;</p>
<ul><li>Record time tracking information against an issue (i.e worked 1w 2d on an issue).
</li><li>Transition to a particular workflow state (i.e <i>Start Progress</i>, <i>Start Review</i>).
</li><li>Chain multiple actions together. 
</li></ul>
<pre><code class='code-multiline'><ignored text> <ISSUE_KEY> <ignored text> #<COMMAND> <optional COMMAND_ARGUMENTS>
</code></pre>
<p>If a developer on a project titled <i>PROJECT</i>, wishes to comment on issue number <i>PROJECT-42</i>, or add a work time log, and transition the workflow state to <i>start-progress</i>, the developer would write something like:</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<pre><code class='code-multiline'>PROJECT-42 #comment I need to get more information on this
...
PROJECT-42 #time 1w 2d 4h 30m Total work logged
...
PROJECT-42 #start-progress Started this today
...

</code></pre>
<p>&nbsp;</p>
<p>Beyond simple commit statements developers are able to chain together multiple actions in a single commit line. The following would close both PROJECT-42 and PROJECT-1 issue issues:</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<pre><code class='code-multiline'>PROJECT-42 PROJECT-1 #close This task has been closed
</code></pre>
<p>&nbsp;</p>
<p>Or by adding the following commit statement, have both PROJECT-42 and PROJECT-1 issues record a time of 2 days and 5 hours, as well as add a specific comment:</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<pre><code class='code-multiline'>PROJECT-42 PROJECT-1 #time 2d 5h #comment Task completed ahead of schedule #close
</code></pre>
<p>&nbsp;</p>
<p>As you can see, chaining actions together in one commit saves developers even more time, and hassle, while ensuring the project managers get all the information in a timely and accurate manner. </p>
<p>&nbsp;</p>
<h2>Integrating GitLab with Jira</h2>
<p>&nbsp;</p>
<p>You’ve seen the benefits of GitLab and Jira working together, next we walk you through the process of:</p>
<p>&nbsp;</p>
<ul><li>Creating a Jira account
</li><li>Configuring Jira
</li><li>Configuring Gitlab
</li></ul>
<p>Let's start off first by creating a new Jira account.</p>
<p>&nbsp;</p>
<h3>Creating and setting up a Jira Account</h3>
<p>Atlassian offer both a <a href="https://www.atlassian.com/software/jira/pricing?tab=self-hosted">self-hosted license tier</a>, as well as a <a href="https://www.atlassian.com/software/jira/pricing?tab=cloud">cloud license tier</a>, of which you can start off with a free trial. For the purpose of this tutorial, we opted with a cloud-based licensing, so go ahead and register for a free trial. After you've successfully create a new Jira account, we will configure it to work with your GitLab project. </p>
<p>&nbsp;</p>
<h3>Configuring Jira</h3>
<p>In your newly created Jira instance, the first step is to create a new Jira user with access to all the projects.</p>
<p> </p>
<ul><li>Making sure you are logged in to Jira  as an admin user, the user with access to all projects so that you can manage user permissions on a higher level, which you will do in the next step.
</li><li>Create a new user(under Administration/User Management), you can call it <b>gitlab</b>, making sure you give it **read/write access* to all projects in Jira, which will make it easier in the long run when adding new projects, with the same user. 
</li><li>Take note of the username and password, you will need it later. 
</li></ul>
<p>&nbsp;</p>
<p><img src="￼" alt="Accessing User Management" title=""></p>
<p>&nbsp;</p>
<p><img src="￼" alt="Creating the new User" title=""></p>
<p>&nbsp;</p>
<ul><li>Next, you will create a new group, and you could call it something like <i>GitLab-developers</i>, adding the user you just created to that group. 
</li><li>Then within Application Access/View configuration, add the group you just created to <b>jira-software-users</b>.
</li></ul>
<p><img src="￼" alt="Creating a group in Jira" title=""></p>
<p>&nbsp;</p>
<p><img src="￼" alt="Adding the user to the group" title=""></p>
<p>&nbsp;</p>
<p><img src="￼" alt="Associating the group with jira-software-users" title=""></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>Now, before we move to setting up GitLab, lets setup a mock project to work with. We are calling it <b>GitR</b>. Go to Settings/Projects/Create New Project.</p>
<p>&nbsp;</p>
<p><img src="￼" alt="Creating a new Project for this tutorial" title=""></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>With that last step, you are now ready to move on to setting up GitLab. </p>
<p>&nbsp;</p>
<h3>Configuring GitLab</h3>
<p>&nbsp;</p>
<p>First create a new Gitlab project, as shown below:</p>
<p>&nbsp;</p>
<p><img src="￼" alt="Creating a new GitLab project" title=""></p>
<p>&nbsp;</p>
<p>In your GitLab project, to complete the Jira integration, within the project repository, go to Services/JIRA and complete the details to connect to your specific Jira instance nad project. </p>
<p>&nbsp;</p>
<p><img src="￼" alt="Associating project with Jira settings" title=""></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><img src="￼" alt="Configuring Jira on your GitLab project services settings" title=""></p>
<p>&nbsp;</p>
<p>You will need to set the following:</p>
<ul><li>URL - the base URL of your Jira project.
</li><li>Project Key - the key of your specific project, such as PROJ
</li><li>Username - the username of the gitlab user you created.
</li><li>Password - the password of the gitlab user you created. 
</li><li>JIRA issue transition - The id of the transition that moves your issue to the closed state. This is found under Jira workflow administration.
</li></ul>
<p><img src="￼" alt="Successful confirmation of Jira integration" title=""></p>
<p>&nbsp;</p>
<p>By following those two steps, your GitLab and Jira project are integrated and ready to be bi-directionally engaged. </p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h2>Next Steps</h2>
<p>&nbsp;</p>
<ul><li>Integrate GitLab into Jira through following our <a href="https://docs.gitlab.com/ee/project_services/jira.html#gitlab-jira-integration">step-by-step guide</a> . 
</li><li>Enable smart-commits in JIRA, for advanced commands, by following <a href="https://confluence.atlassian.com/fisheye/enabling-smart-commits-298976933.html">Atlassian’s guide</a>.
</li></ul>
<h2>Helpful resources</h2>
<p>&nbsp;</p>
<ul><li><a href="https://docs.gitlab.com/ee/project_services/jira.html">GitLab JIRA integration - GitLab Documentation</a>
</li><li><a href="https://confluence.atlassian.com/fisheye/using-smart-commits-298976812.html">Using Smart Commits - Atlassian Documentation</a> 
</li></ul>
        </div>

        <style>
            @charset "UTF-8";
/* line 5, ../../../../../../../../../Library/Ruby/Gems/2.0.0/gems/compass-core-1.0.3/stylesheets/compass/reset/_utilities.scss */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
}

/* line 22, ../../../../../../../../../Library/Ruby/Gems/2.0.0/gems/compass-core-1.0.3/stylesheets/compass/reset/_utilities.scss */
html {
  line-height: 1;
}

/* line 24, ../../../../../../../../../Library/Ruby/Gems/2.0.0/gems/compass-core-1.0.3/stylesheets/compass/reset/_utilities.scss */
ol, ul {
  list-style: none;
}

/* line 26, ../../../../../../../../../Library/Ruby/Gems/2.0.0/gems/compass-core-1.0.3/stylesheets/compass/reset/_utilities.scss */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* line 28, ../../../../../../../../../Library/Ruby/Gems/2.0.0/gems/compass-core-1.0.3/stylesheets/compass/reset/_utilities.scss */
caption, th, td {
  text-align: left;
  font-weight: normal;
  vertical-align: middle;
}

/* line 30, ../../../../../../../../../Library/Ruby/Gems/2.0.0/gems/compass-core-1.0.3/stylesheets/compass/reset/_utilities.scss */
q, blockquote {
  quotes: none;
}
/* line 103, ../../../../../../../../../Library/Ruby/Gems/2.0.0/gems/compass-core-1.0.3/stylesheets/compass/reset/_utilities.scss */
q:before, q:after, blockquote:before, blockquote:after {
  content: "";
  content: none;
}

/* line 32, ../../../../../../../../../Library/Ruby/Gems/2.0.0/gems/compass-core-1.0.3/stylesheets/compass/reset/_utilities.scss */
a img {
  border: none;
}

/* line 116, ../../../../../../../../../Library/Ruby/Gems/2.0.0/gems/compass-core-1.0.3/stylesheets/compass/reset/_utilities.scss */
article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
  display: block;
}

/* line 8, ../Sass/sass/utilities/_common-import.scss */
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/* line 106, ../../../../../../../../../Library/Ruby/Gems/2.0.0/gems/compass-core-1.0.3/stylesheets/compass/typography/_vertical_rhythm.scss */
html {
  font-size: 87.5%;
  line-height: 1.57143em;
}

/* line 8, ../Sass/sass/partials/_typography.scss */
html {
  font-size: 14px;
  line-height: 1.6em;
  -webkit-text-size-adjust: 100%;
}

/* line 14, ../Sass/sass/partials/_typography.scss */
body {
  background: #fcfcfc;
  color: #545454;
  text-rendering: optimizeLegibility;
  font-family: "Avenir-Book";
}

/* line 21, ../Sass/sass/partials/_typography.scss */
a {
  color: #de4c4f;
  text-decoration: none;
}

/* line 26, ../Sass/sass/partials/_typography.scss */
h1 {
  font-family: "Avenir-Medium";
  color: #333333;
  font-size: 1.6em;
  line-height: 1.3em;
  margin-bottom: 0.78571em;
}

/* line 34, ../Sass/sass/partials/_typography.scss */
h2 {
  font-family: "Avenir-Medium";
  color: #333333;
  font-size: 1.3em;
  line-height: 1em;
  margin-bottom: 0.62857em;
}

/* line 44, ../Sass/sass/partials/_typography.scss */
h3 {
  font-family: "Avenir-Medium";
  color: #333333;
  font-size: 1.15em;
  line-height: 1em;
  margin-bottom: 0.47143em;
}

/* line 53, ../Sass/sass/partials/_typography.scss */
p {
  margin-bottom: 1.57143em;
  hyphens: auto;
}

/* line 58, ../Sass/sass/partials/_typography.scss */
hr {
  height: 1px;
  border: 0;
  background-color: #dedede;
  margin: -1px auto 1.57143em auto;
}

/* line 66, ../Sass/sass/partials/_typography.scss */
ul, ol {
  margin-bottom: 1.57143em;
}
/* line 68, ../Sass/sass/partials/_typography.scss */
ul ul, ul ol, ol ul, ol ol {
  margin-bottom: 0px;
}

/* line 73, ../Sass/sass/partials/_typography.scss */
b, strong {
  font-family: "Avenir-Heavy";
}

/* line 77, ../Sass/sass/partials/_typography.scss */
i, em {
  font-family: "Avenir-BookOblique";
}

/* line 81, ../Sass/sass/partials/_typography.scss */
code {
  font-family: "Menlo-Regular";
}

/* line 87, ../Sass/sass/partials/_typography.scss */
.text-overflow-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* line 8, ../Sass/sass/HTMLExport.scss */
.note-wrapper {
  max-width: 46em;
  margin: 0px auto;
  padding: 1.57143em 3.14286em;
}
/* line 13, ../Sass/sass/HTMLExport.scss */
.note-wrapper.spotlight-preview {
  overflow-x: hidden;
}

/* line 18, ../Sass/sass/HTMLExport.scss */
u {
  text-decoration: none;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, #e06e73 50%);
  background-repeat: repeat-x;
  background-size: 2px 2px;
  background-position: 0 1.05em;
}

/* line 23, ../Sass/sass/HTMLExport.scss */
s {
  color: #878787;
}

/* line 27, ../Sass/sass/HTMLExport.scss */
p {
  margin-bottom: 0.1em;
}

/* line 31, ../Sass/sass/HTMLExport.scss */
hr {
  margin-bottom: 0.7em;
  margin-top: 0.7em;
}

/* line 37, ../Sass/sass/HTMLExport.scss */
ul li {
  text-indent: -0.6em;
}
/* line 39, ../Sass/sass/HTMLExport.scss */
ul li:before {
  content: "•";
  color: #e06e73;
  display: inline-block;
  margin-right: 0.3em;
}
/* line 46, ../Sass/sass/HTMLExport.scss */
ul ul {
  margin-left: 1.25714em;
}

/* line 52, ../Sass/sass/HTMLExport.scss */
ol li {
  text-indent: -1.25em;
}
/* line 55, ../Sass/sass/HTMLExport.scss */
ol ol {
  margin-left: 1.25714em;
}

/* line 60, ../Sass/sass/HTMLExport.scss */
quote {
  display: block;
  margin-left: -1em;
  padding-left: 0.8em;
  border-left: 0.2em solid #e06e73;
}

/* line 69, ../Sass/sass/HTMLExport.scss */
.todo-list ul {
  margin-left: 1.88571em;
}
/* line 73, ../Sass/sass/HTMLExport.scss */
.todo-list li {
  text-indent: -1.75em;
}
/* line 76, ../Sass/sass/HTMLExport.scss */
.todo-list li:before {
  content: "";
  display: static;
  margin-right: 0px;
}

/* line 84, ../Sass/sass/HTMLExport.scss */
.todo-checkbox {
  text-indent: -1.7em;
}
/* line 87, ../Sass/sass/HTMLExport.scss */
.todo-checkbox svg {
  margin-right: 0.3em;
  position: relative;
  top: 0.2em;
}
/* line 92, ../Sass/sass/HTMLExport.scss */
.todo-checkbox svg #check {
  display: none;
}
/* line 97, ../Sass/sass/HTMLExport.scss */
.todo-checkbox.todo-checked #check {
  display: inline;
}
/* line 100, ../Sass/sass/HTMLExport.scss */
.todo-checkbox.todo-checked .todo-text {
  text-decoration: line-through;
  color: #878787;
}

/* line 107, ../Sass/sass/HTMLExport.scss */
.code-inline {
  display: inline-block;
  background: white;
  border: solid 1px #dedede;
  padding: 0.0em 0.5em;
  font-size: 0.9em;
}

/* line 115, ../Sass/sass/HTMLExport.scss */
.code-multiline {
  display: block;
  background: white;
  border: solid 1px #dedede;
  padding: 0.7em 1em;
  font-size: 0.9em;
  overflow-x: auto;
}

/* line 124, ../Sass/sass/HTMLExport.scss */
.hashtag {
  display: inline-block;
  color: white;
  background: #b8bfc2;
  padding: 0.0em 0.5em;
  border-radius: 1em;
}
/* line 130, ../Sass/sass/HTMLExport.scss */
.hashtag a {
  color: white;
}

/* line 137, ../Sass/sass/HTMLExport.scss */
.address a {
  color: #545454;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, #0da35e 50%);
  background-repeat: repeat-x;
  background-size: 2px 2px;
  background-position: 0 1.05em;
}
/* line 142, ../Sass/sass/HTMLExport.scss */
.address svg {
  position: relative;
  top: 0.2em;
  display: inline-block;
  margin-right: 0.2em;
}

/* line 150, ../Sass/sass/HTMLExport.scss */
.color-preview {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: solid 1px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  margin-right: 0.1em;
  position: relative;
  top: 0.2em;
  white-space: nowrap;
}

/* line 162, ../Sass/sass/HTMLExport.scss */
.color-code {
  margin-right: 0.2em;
  font-family: "Menlo-Regular";
  font-size: 0.9em;
}

/* line 168, ../Sass/sass/HTMLExport.scss */
.color-hash {
  opacity: 0.4;
}

/* line 176, ../Sass/sass/HTMLExport.scss */
.ordered-list-number {
  color: #e06e73;
  text-align: right;
  display: inline-block;
  min-width: 1em;
}

/* line 185, ../Sass/sass/HTMLExport.scss */
.arrow svg {
  position: relative;
  top: 0.08em;
  display: inline-block;
  margin-right: 0.15em;
  margin-left: 0.15em;
}
/* line 192, ../Sass/sass/HTMLExport.scss */
.arrow svg #rod {
  stroke: #545454;
}
/* line 193, ../Sass/sass/HTMLExport.scss */
.arrow svg #point {
  fill: #545454;
}

/* line 197, ../Sass/sass/HTMLExport.scss */
img {
  max-width: 100%;
  height: auto;
}

        </style>
    </body>
</html>
