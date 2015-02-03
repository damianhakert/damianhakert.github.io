---
layout: post
title: "5 reasons why you should be using CI"
date: 2015-02-03
comments: true
categories:
author: Patricio Cano
---

When developing software you are usually spoiled for choice. There are many languages you can choose from, different
test suites to try, countless frameworks you can use and a bunch of Continuous Integration offerings.

You can always go with the language you like the most, the test suite you find most practical and choose not to use a
framework, but you should always think about CI. Here are out top 7 reasons why we think you should be using CI and
why you should consider it from the beginning of your project.

<!-- more -->

## 1. Run the tests outside of your development environment

Have you ever had your tests pass on your machine, but fail on someone else's? Well, with CI you can avoid that embarrassment.
Just push your code to your new branch and the CI server will take care of running the tests for you. If everything is
green, you can be sure that you didn't brake anything. And if they fail for someone else, you have evidence that they
are wrong.

## 2. Check for code test coverage

Think your tests cover most of your code? Well think again. If your CI server supports it, you can have it check your code
for test coverage. This way every time you commit something new without any tests you will feel the shame that comes with
having your coverage percentage go down because of your changes.

## 3. Deploy your code to production

You can have the CI server automatically deploy your code to production if all the test within a given branch are green.
This is what is formally known as **Continuous Delivery**, or as **Oh my God, that was scary, I'm glad my code worked!
Delivery** in some circles.

It might seem dangerous to have Continuous Delivery, but if something goes wrong, you can always roll back, just make sure
your deployment mechanism supports that.

## 4. Build packages or compile binaries

All your tests are green and the coverage is good, but you don't handle code that needs to be deployed? No worries! CI
servers can also trigger build and compilation processes that will take care of your needs in no time. No more having to
sit in front of your terminal waiting for the build to finish only to have it fail at the last second. The CI server will
run this for you within its scripts and notify you as soon as something goes wrong.

## 5. Check the status of a Merge Request before merging

If your CI and Version Control System support it, you can have them communicate between each other and tell you when a MR is
good to merge. It can also show how the code coverage would be affected by the MR. This can dramatically reduce the time
it takes to review a merge request.

Now, if you are wondering why we didn't mention **GitLab CI** specifically in this article is because we want to make a
point in general for the use of CI, not just our offering. We want to help you build better software and implementing
CI into your pipeline will definitely help you get there.

Of course if you are in the market for a CI server, we kindly encourage you to use [GitLab CI](https://about.gitlab.com/gitlab-ci/),
specially because it includes all the features we mentioned here and more!









