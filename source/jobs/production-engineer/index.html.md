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

### Junior Production Engineer
* Provide emergency response either by being on-call or by reacting to root causes according to monitoring.
* Deliver production solutions that scale, automating themselves out of a job.
* Improve documentation all around, either in application documentation, or in runbooks
* Improve the performance of the system by either making better use of resources or by reducing the latency.
* Share the learnings publicly, either by creating issues that provide context for anyone to understand it or by writing blog posts.
* Update GitLab default values so there is no need for configuration by customers.

### Intermediate Production Engineer 
* Improve monitoring and alerting to increase the signal to noise ratio: explain the why, don’t stop with the what.
* Learn and understand how systems behave in production.
* Actively look for opportunities to improve the availability and performance of the system by applying the learnings from monitoring and observation, and proposing ideas and solutions within the infrastructure team.
* Plan, design and execute solutions within the production engineering team to reach specific goals.
* Plan and execute configuration change operations both at the application and the infrastructure level.

### Senior Production Engineer 

* Influence the product architecture from the availability, reliability, performance and availability perspective .
* Lead Production Engineers and Junior Production Engineers by setting the example.
* Proactively work on the efficiency and capacity planning to set clear requirements and reduce the system resources usage to make GitLab cheaper to run for all our customers.
* Set the necessary goals and SLO (Service Level Objective) that will guide the infrastructure team to build a better product, easy to run in production and self healing.
* Perform blameless post-mortems on incidents and outages aggressively looking for answers that will prevent the incident from ever happening again.
* Measure the risk of introduced features to plan ahead and improve the infrastructure or automation to reach the SLO.

### Staff Production Engineer 
* TODO 

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
