---
layout: job_page
title: "Production Engineer"
---

A production engineer is a developer with who thinks deeply about systems and
how they behave in the wild. Whether it be networking, or the Linux kernel,
or even a specific interest in scaling, algorithms, or distributed systems.

It could also be seen as a systems engineer who aims to code themselves out of
a job by automating all the things, learning to leverage great development
practices like TDD or continous integration (to start with).

## As a production engineer you will:

* Be on a PagerDuty rotation to respond to GitLab.com availability incidents and
  Provide support for service engineers with customer incidents.
* Use your oncall rotation to prevent pages from ever happening.
* Manage our infrastructure with Chef, Terraform and Kubernetes.
* Make monitoring and alerting alert on symptoms and not on outages.
* [Document every action](https://gitlab.com/gitlab-com/runbooks) so your learnings turn in repeatable actions and then on automation.
* Improve the deployment process to make it as boring as possible.
* Design, build and maintain core infrastructure pieces that allow GitLab scaling to support hundred of thousands of concurrent users.
* Debug production issues across services and levels of the stack.
* Plan the growth of GitLab's infrastructure.
* Ship every solution into the GitLab-CE and EE package as a default.

## You may be a fit to this role if you:

* Think about systems - edge cases, failure modes, behaviors, specific implementations.
* Know your way around linux and the Unix Shell.
* Have an interest in distributed systems and a solid understanding of how modern web stacks are built, and why.
* Know what is the use of config management systems like Chef (the one we use)
* Have strong programing skills - Ruby and/or Go (for operations and infrastructure projects respectively)
* Hold yourself to a high bar when working in production environments.
* Have an urge to collaborate and communicate asynchronously.
* Have an urge to document all the things so you don't need to learn the same thing twice.
* Have a proactive, go-for-it attitude. When you see something broken, you can't help
  but fix it.
* Have an urge for delivering quickly and iterating fast.
* Share our [values](/handbook/#values), and work in accordance with those
  values.

## Projects you could work on:

* Building a distributed system like [Gitaly](https://gitlab.com/gitlab-org/gitaly)
* Coding infrastructure automation with [Chef](https://gitlab.com/gitlab-cookbooks/)
* Improving our [Prometheus Monitoring](https://gitlab.com/gitlab-cookbooks/gitlab-prometheus) or building new [Metrics](https://gitlab.com/gitlab-org/gitlab-monitor)
* Building the [automation to scale out](https://gitlab.com/gitlab-com/infrastructure/issues/892) and scaling out our fleet.
* Building [chatops bundles for COG](https://gitlab.com/gitlab-cog/) to automate ourselves out of a job.
* Helping building and maintaining core GitLab.com infrastructure pieces like [GitLab Workhorse](https://gitlab.com/gitlab-org/gitlab-workhorse/)
* Helping drive production ready large scale features.
* Helping release managers deploying and troubleshooting new versions of GitLab-EE.
* Helping the build team to ship complex pieces of infrastructure in a way that just work out of the box.
* Whatever is on the [infrastructure issue tracker](https://gitlab.com/gitlab-com/infrastructure/issues) and you feel passionate about.

## Leveling

### Junior Production Engineer

* Provides emergency response either by being on-call or by reacting to symptoms according to monitoring.
* Delivers production solutions that scale, identifying automation points, and proposing ideas on how to improve efficiency.
* Improves documentation all around, either in application documentation, or in runbooks, explaining the why, not stopping with the what.
* Improves the performance of the system by either making better use of resources, distributing load or reducing the latency.
* Shares the learnings publicly, either by creating issues that provide context for anyone to understand it or by writing blog posts.
* Updates GitLab default values so there is no need for configuration by customers.
* Improves monitoring and alerting fighting alert spam.

### Production Engineer

* Proposes ideas and solutions within the infrastructure team to reduce the workload by automation.
* Plan, design and execute solutions within infrastructure team to reach specific goals agreed within the team.
* Plan and execute configuration change operations both at the application and the infrastructure level.
* Actively looks for opportunities to improve the availability and performance of the system by applying the learnings from monitoring and observation

### Senior Production Engineer

Are experienced production engineers who meet the following criteria

* Lead Production Engineers and Junior Production Engineers by setting the example.
* Identifies changes for the product architecture from the reliability, performance and availability perspective with a data driven approach.
* Know a domain really well and radiate that knowledge
* Proactively work on the efficiency and capacity planning to set clear requirements and reduce the system resources usage to make GitLab cheaper to run for all our customers.
* Perform blameless post-mortems on incidents and outages aggressively looking for answers that will prevent the incident from ever happening again.
* Show ownership of a major part of the infrastructure.
* Identify parts of the system that do not scale, provides immediate paliative measures and drives long term resolution of these incidents.
* Identify the SLI (Service Level Indicators) that will align the team to meet the availability and latency objectives.

### Staff Production Engineer

Senior Production Engineers who meet the following criteria:

1. Technical Skills
  * Identifies significant projects that result in substantial cost savings or revenue
  * Able to create innovative solutions that push GitLab's technical abilities ahead of the curve
2. Leadership
	* Proposes and drives architectural changes that affects the whole company solve scaling and performance problems
	* Set the necessary goals and SLO (Service Level Objectives) that will guide the infrastructure team to build a better product
3. Communication
  * Writes in-depth documentation that shares knowledge and radiates GitLab technical strengths
4. Production, Scalability & automation
	* Strives for automation either by coding it or by leading and influencing developers to build systems that are easy to run in production.
	* Measure the risk of introduced features to plan ahead and improve the infrastructure.


## Hiring Process

Applicants for this position can expect the hiring process to follow the order below. Please keep in mind that applicants can be declined from the position at any stage of the process. To learn more about someone who may be conducting the interview, find her/his job title on our [team page](/team).

* Qualified applicants receive a short questionnaire and coding exercise from our Global Recruiters
* The review process for this role can take a little longer than usual but if in doubt, check in with the Global recruiter at any point.
* Selected candidates will be invited to schedule a 45min [screening call](/handbook/hiring/#screening-call) with our Global Recruiters
* Next, candidates will be invited to schedule a first 45 minute behavioral interview with the Infrastructure Lead
* Candidates will then be invited to schedule a 45 minute technical interview with a Production Engineer
* Candidates will be invited to schedule a third interview with our VP of Engineering
* Finally, candidates will have a 50 minute interview with our CEO
* Successful candidates will subsequently be made an offer via email


Additional details about our process can be found on our [hiring page](/handbook/hiring).
