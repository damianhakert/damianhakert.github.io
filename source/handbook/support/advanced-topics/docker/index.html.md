---
layout: markdown_page
title: Checklist for becoming a Docker Expert
---

Create an issue with this checklist on the [support team issue tracker](https://gitlab.com/gitlab-com/support/issues/)
with the **Title:** *"Docker Bootcamp - your_name"*

Tackle stage 1 first and the last stage last, but the others can be completed in
any order you prefer.

```
### Stage 1: Commit and Become familiar with what Docker is

1. [ ] Ping your manager on the issue to notify them you have started
1. [ ] Commit to this by notifying the current experts that they can start
routing non-technical Docker questions to you
1. [ ] [GitLab University Docker](https://www.youtube.com/watch?v=ugOrCcbdHko)

### Stage 2: 3rd party resources (Expense non-free learning materials to GitLab)

1. [ ] Read [Docker in practice, by Miell and Sayers](https://www.manning.com/books/docker-in-practice)
1. [ ] Watch the introductory [Play by Play: Docker for Web Developers course](https://www.pluralsight.com/courses/play-by-play-docker-web-developers-john-papa-dan-wahlin)
1. [ ] Watch the more complete [Docker for Web Developers course](https://www.pluralsight.com/courses/docker-web-development)

### Stage 3: Practical

- [ ] **Done with Stage 3**

Remember to contribute to any documentation that needs updating

1. [ ] Install Docker on your laptop
1. [ ] Set up the Docker SE test environment on Digital Ocean or locally
1. [ ] Understand why there are no host volumes being mounted in the above setup, but when installing GitLab in production you have to
1. [ ] Create a **Dockerfile** and build an image with it, which runs a web application that you otherwise would run on your local machine
1. [ ] Get GitLab CI to build that Docker image and upload it to a GitLab registry
1. [ ] Set up a dev-tools image that have the command-line dev tools you like set up and ready to use as soon as a container starts, if you don't have a preferred setup, have at least Vim with **ctrl + p** set up to find files, and Oh My Zshell to let you know which branch you are on. 
1. [ ] Run Firefox inside a Gui container. Install a plugin on it and make sure you can stop the container and get it back with the plugin. It might be easier to borrow a Linux Laptop for this.


### Stage 4: Tickets

- [ ] **Done with Stage 4**

- [ ] Contribute valuable responses on at least 10 Docker tickets. Even if a ticket seems
too advanced for you to answer. Find the answers from an expert and relay it to
the customer.

   1. [ ] https://gitlab.zendesk.com/agent/tickets/65559
   1. [ ] https://gitlab.zendesk.com/agent/tickets/65917
   1. [ ] __
   1. [ ] __
   1. [ ] __
   1. [ ] __
   1. [ ] __
   1. [ ] __
   1. [ ] __
   1. [ ] __

### Stage 5: Quiz?

- [ ] Need link to Quiz here
- [ ] Quiz answers were checked by Kamil, and he said you passed

### Final Stage

- [ ] Your Manager needs to check this box to acknowledge that you finished
- [ ] Send a MR to declare yourself a **Docker Expert** on the team page
```

