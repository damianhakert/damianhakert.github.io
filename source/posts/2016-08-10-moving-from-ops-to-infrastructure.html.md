---
title: "Why we switched our philosophy from Ops to Infrastructure"
author: Pablo Carranza
author_twitter: psczg
categories: inside GitLab
image_title: '/images/blogimages/infrastructure_post_image.jpeg' 
description: Why and how GitLab moved from an Ops mindset to an Infrastructure mindset
---

There is Ops, Infrastructure, Performance, DevOps etc. The terms and titles go on and they vary based on a
variety of industries, companies, and cultures. At GitLab, we focus on the philosophy not the title. In this 
post, I’ll explain why and how our team shifted our philosophy on how we approach the GitLab's performance 
from an Operations mindset to an Infrastructure mindset.

<!-- more -->

## Operations mindset

With more and more people using GitLab to host their public and private repos, run CI tests, and deploy to a 
number of different environments, we started experiencing noticeable performance and scaling challenges. We’d spot a problem and then race to get it fixed. 
The team was incredibly reactionary, working to fix this and change that. The reality is that computers will 
break and as you scale more things will fail. With this mind, we could’ve 
taken the “Mongolian hoard approach” and thrown more people at the problem. However, that would have been 
another knee-jerk reaction and we could already see that the reactive way of doing things would never scale. 
So, we had to change. Our goal was to stop running behind the issues and start anticipating challenges to 
stay steps ahead of them.

## The transition 

Like most things, change is a process. Here are the steps we took:

* **Focus on infrastructure**: We shifted the team to drop the operations view that segregates systems engineering and instead focus on building infrastructure from a development perspective. Our goal was to get away from a world where developers code features and then system engineers deploy it and provision machines. We achieve better results when everyone has to be included in this process, either by building the product adding features, or by building the infrastructure and driving how the product uses the infrastructure to grow.
* **Spot patterns**: We learned to spot patterns. Fortunately, our brains are very good at pattern matching. It's just the way our brain works. Of course, just seeing the pattern isn’t enough. We’d spot the pattern and then work to match it to what we already knew were signs of good performance levels. The only way to be able to spot patterns is to commit to long terms metrics that you will collect data on over an extended period of time.
* **Mind the gap**: When we spotted an unexpected or strange behavior we moved closer to the problem to understand where it was coming from, build a hypothesis, and then challenge our assumptions. We don't take feelings as data, if someone on the team feels that something is slow, we still need to get a number showing how slow, in a way that we can reproduce.
* **Align resources effectively**: With data on what’s not working and how this affecting your system, you can focus on the right problem and allocate the right level of people and resources to finding a solution.
* **Seek to automate**: If you find yourself performing a manual task, you should do it once, twice, then many. By that, I mean you do the manual work to fix it once, twice, and then you if you have to fix it a third time you need to automate the fix. This is the laziness in [the three virtues](http://threevirtues.com/). The goal is to rinse and repeat, forever. 

## Cultural shift 

Making this transition really forced the company to tear down the wall between development and production and collectively focus on building a product. It’s been very important 
for our infrastructure team to have a "developer mindset.” We need to like complex problems and constantly 
be working to code ourselves out of a job.  Our team works to scale our software by automating solutions and 
then chasing new challenges to find the next great solution to. There will always be new challenges for the 
team work on next. For example, one of the problems that we faced recently was that we were going to run out 
of storage and we needed to fix this before we ran out. Our process to get ahead of this was:

* Understand the problem
* See the limits
* Start planning for how we fix it

## Our toolbox 

Here is a list of the tools we use right now:

- chef -> [infrastructure as code](https://www.thoughtworks.com/es/insights/blog/infrastructure-code-reason-smile)
- prometheus -> [Blackbox monitoring](https://github.com/prometheus/blackbox_exporter) This will allow you to graph what your customers are seeing in your site, if it's slow, you will [see how slow](http://monitor.gitlab.net/dashboard/db/gitlab-status)
- influxdb + grafana -> performance metrics time based database and exploration tool
- ELK stack (Elasticsearch, Logstash, Kibana) -> for log processing. Logs are usually the first source of information that can and should be used. There's no lower hanging fruit than writing logs that add value, then parsing these logs to see how is the system behaving. Something as simple as requests per minute will tell you how much the system is being used, add errors per minute to the same graph and you will know if the system is behaving fine or not.
