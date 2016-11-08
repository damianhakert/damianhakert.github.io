---
layout: markdown_page
title: Checklist for becoming a GitLab Geo Expert
---

Create an issue with this checklist on the [support team issue tracker](https://gitlab.com/gitlab-com/support/issues/)
with the **Title:** *"Geo Boot Camp - your_name"*

Tackle stage 1 first and the last stage last, but the others can be completed in
any order you prefer.

```
**Goal of this checklist:** Set a clear path for Geo Expert training

### Stage 1: Commit and Become familiar with what Geo is

- [ ] **Done with Stage 1**

1. [ ] Ping your manager on the issue to notify them you have started
1. [ ] Commit to this by notifying the current experts that they can start
routing non-technical Geo questions to you
1. [ ] GitLab University
  1. [ ] [GLU Deck on Geo](https://drive.google.com/open?id=1r9nXLxU9fuAJdEDTi0ZWg7JyU5Ng4hNJPY3jnQyaor8)
  1. [ ] [GLU Recording on Geo](https://drive.google.com/open?id=0BxSd33hPSs-jRGRLUkpuWHF2cjQ)
1. [ ] Read through all the [Geo Documentation](https://docs.gitlab.com/ee/gitlab-geo/README.html)

### Stage 2: Installation

- [ ] **Done with Stage 2**

Remember to contribute to any documentation that needs updating

- [ ] Follow the [Setup Instructions](https://docs.gitlab.com/ee/gitlab-geo/README.html#setup-instructions)
to install Geo on two VM's
- [ ] Set up a local repo to push to the primary and pull from the secondary
- [ ] Destroy the primary and promote the secondary node to primary by following
the [GitLab Geo Disaster Recovery Instructions](https://gitlab.com/help/gitlab-geo/disaster-recovery.md)
- [ ] Connect a local repo to this new primary and make sure you can push and pull

### Stage 3: Tickets

- [ ] **Done with Stage 3**

1. [ ] Answer 20 Geo tickets and paste the links here. Even if a ticket seems
too advanced for you to answer. Find the answers from an expert and relay it to
the customer.

  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __
  1. [ ] __

### Stage 4: Pair on Customer Calls

- [ ] **Done with Stage 4**

1. [ ] Sales calls with customers that have expressed interest in Geo, and will
be asking questions about it.
  1. [ ] call with ___
  1. [ ] call with ___
1. [ ] Installation calls where we help a client install Geo
  1. [ ] call with ___
  1. [ ] call with ___
1. [ ] Diagnosis calls, where something is wrong with Geo for a customer
  1. [ ] call with ___
  1. [ ] call with ___

### Stage 5: Quiz?

- [ ] **Done with Stage 5**

### Final Stage

- [ ] Ask Ernst and Gabriel to look over this list, send a MR to delete this line after they both satisfied with the list
- [ ] Send a MR to declare yourself a **Geo Expert** on the team page
```