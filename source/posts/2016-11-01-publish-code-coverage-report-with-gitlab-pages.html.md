---
title: "Publish code coverage report with GitLab Pages"
author: Grzegorz Bizon
author_twitter: GrzegorzBizon
categories: tutorial
image_title: 
description: "Publish code coverage report with GitLab Pages"
---

In GitLab we believe that everyone can contribute. We also use automated
testing extensively to make contributing to GitLab easier.

Using automated testing is a great way to improve confidence when someone needs
to change the code, what actually is the case in majority of contributions to
software projects.

But how do we ensure that our test suite is good enough to aid the confidence
in changing behavior of the software, and what can we do to keep on improving it?

# What is the code coverage?

Using [code coverage](https://en.wikipedia.org/wiki/Code_coverage) metric is a
technique which helps to improve the test suite, and the software itself.

Tools used to measure the code coverage usually extend the test harness
environment, and make it possible to map the application execution process
back to the source code while automated tests are being executed.

With that approach, you can not only learn how much of your code is covered
by tests, but it is also possible to find out what exact parts of the codebase
are not covered well enough.

Some tools also make it possible to generate code coverage reports in the HTML
format that you can then review in your browser. It makes it  much easier to
inspect the areas of code that are missing tests and are likely to need some
improvements as well.

Take a look at code coverage report for GitLab that is available
on [GitLab Pages for GitLab CE project](http://gitlab-org.gitlab.io/gitlab-ce/coverage-ruby/)

# How to generate code coverage report?

There are a lot of code coverage tools available for many different languages.
You will need to find appropriate tool for your particular needs.

In GitLab, in projects using Ruby, we often use [SimpleCov](https://github.com/colszowka/simplecov).

You will need to check documentation for your tool of choice to learn how to
generate the code coverage report. Once you are able to do this locally,
check out the rest of this tutorial to learn how to publish the report with
GitLab Pages!

For the sake of this example, we will assume that you are using Ruby with RSpec
and SimpleCov.

## Configure your tools

Configuring SimpleCov can be as simple as extending your `spec_helper.rb` with

```ruby
require 'simplecov'
SimpleCov.start
```

When you run `rspec` command, you will notice code coverage report being
generated when tests are completed. Example below comes from a very simple
code that contains a single test for the single class that is there.

Test looks like:

```ruby
describe Dog do
  it 'barks' do
    expect(subject.bark).to eq 'Woof, woof!'
  end
end
```

And the RSpec test harness output is:

```text
Dog
  barks

Finished in 0.00058 seconds (files took 0.08804 seconds to load)
1 example, 0 failures

Coverage report generated for RSpec to /tmp/coverage_example/coverage. 6 / 6 LOC (100.0%) covered.
```

At the end of the output, you can see that code coverage report was generated
to `coverage/` directory. Directory contents looks like:

```bash
$ ls coverage/
assets/ index.html
```

Yes! This is a HTML code coverage report that we can publish with GitLab Pages!

## Add CI configuration

> Run RSpec test suite first

The most simple approach is to execute all tests within a single job in the
CI pipeline, using a GitLab CI.

```yaml
image: ruby:2.3

rspec:
  script:
    - bundle install
    - rspec
```

> Then store result as build artifact

```yaml
image: ruby:2.3

rspec:
  script:
    - bundle install
    - rspec
  artifacts:
    paths:
      - coverage/
```

Let's see if artifacts were stored correctly using build artifacts browser
that is available from the build sidebar:

_TODO add build sidebar screenshot here_

It is there!

_TODO add screenshot of build artifacts browser_

## Parallel tests

Things get a little more complicated when you want to parallelize your test
suite.

GitLab is capable of running tests jobs in parallel. You can use this technique
to decrease wall-clock elapsed time that is needed to execute all tests
significantly.

Numerous approaches are available, the most simple is to split test manually,
more sophisticated is to use tools or plugins that do distribute tests jobs
evenly in the automated fashion.

If you will decide to parallelize your test suite, you need to generate partial
code coverage report in each parallel job, and store it as a build artifact
Then you will need another stage in the pipeline with job that merges partial
code coverage metrics into the one and generates a single report that takes all
results, generating in all parallel jobs, into account.

In GitLab, we parallelize our test suite heavily, and we do use additional
tools, to distribute test jobs evenly. SimpleCov does not support merging
result sets out-of-the-box, so we had to [write patch for it](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/scripts/merge-simplecov).
There is an issue about contributing this change to SimpleCov [here](https://gitlab.com/gitlab-org/gitlab-ce/issues/23717)

## Deploy coverage report as GitLab Pages!

# Using code coverage report badge

# Summary

Testing shows the presence, not the absence of bugs.
  -- Edsger Dijkstra

# Documentation
