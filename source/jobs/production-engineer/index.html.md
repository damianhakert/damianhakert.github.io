---
layout: job_page
title: "Production Engineer"
---

A production engineer is a developer with deep knowledge of some parts of the
stack, whether it be networking, or the Linux kernel, or even a specific
interest in scaling and algorithms.

It could also be seen as any systems engineer who aims to code themselves out of
a job by automating all the things.

By becoming a production engineer you could be:

* Building a distributed system like [Gitaly](https://gitlab.com/gitlab-org/gitaly)
* Coding infrastructure automation with [Chef](https://gitlab.com/gitlab-cookbooks/)
* Improving our [Prometheus Monitoring](https://gitlab.com/gitlab-cookbooks/gitlab-prometheus) or building new [Metrics](https://gitlab.com/gitlab-org/gitlab-monitor)
* Building the [automation to scale out](https://gitlab.com/gitlab-com/infrastructure/issues/892) and scaling out our fleet.
* Building [chatops bundles for COG](https://gitlab.com/gitlab-cog/) to automate ourselves out of a job.
* Helping building and maintaining core GitLab.com infrastructure pieces like [GitLab Workhorse](https://gitlab.com/gitlab-org/gitlab-workhorse/)
* Helping drive production ready large scale features.
* Helping release managers deploying and troubleshooting new versions of GitLab-EE.
* Helping the build team to ship complex pieces of infrastructure in a way that just work out of the box.

## Responsibilities

* As a Production Engineer you will be on a PagerDuty rotation to respond to
  GitLab.com availability incidents and provide support for service engineers
  with customer incidents.
* Use your oncall rotation to prevent pages from ever happening.
* Manage our infrastructure with Chef, Terraform and Kubernetes.
* Build monitoring and alerting systems so alerts trigger on symptoms and not on outages.
* [Document every action](https://gitlab.com/gitlab-com/runbooks) so they turn in repeatable and then on automation.
* Improve the deployment process to make it as boring as possible.
* Build core infrastructure pieces that allow GitLab scaling to support hundred of thousands of concurrent users.
* Work comfortably at any level of the stack.
* Ship every solution into the GitLab-CE and EE package as a default.

## Workflow

* You work on issues in the [infrastructure repository](https://gitlab.com/gitlab-com/infrastructure/issues).
* The priority of the issues can be found in [the handbook under GitLab Workflow](https://about.gitlab.com/handbook/#prioritize).

## Requirements for Applicants

* Linux depth of knowledge (we use Ubuntu Server).
* Database scaling depth of knowledge (we use PostgreSQL and Redis).
* An interest in distributed systems and a solid understanding of how modern web stacks are built, and why.
* Chef experience (optional if you are awesome on something else).
* Strong Ruby (our preferred language for operations).
* Go programming experience or willing to learn (our preferred language for core infrastructure pieces)
* Programming expertise, and a sense for scale either demonstrable with experience or CS knowledge.
* Collaborative team spirit with great communication skills.
* Proactive, go-for-it attitude. When you see something broken, you can't help
  but fix it.
* An urgency for delivering quickly and iterating fast.
* You share our [values](/handbook/#values), and work in accordance with those
  values.

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
