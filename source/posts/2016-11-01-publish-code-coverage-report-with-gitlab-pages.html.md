---
title: "Publish Code Coverage Report with GitLab Pages"
author: Grzegorz Bizon
author_twitter: GrzegorzBizon
categories: tutorial
image_title: '/images/blogimages/publish-code-coverage-report-with-gitlab-pages/code-coverage-report-stats.png'
description: "Publish code coverage report with GitLab Pages"
---

At GitLab, we believe that everyone can contribute. We also use automated
testing extensively to make contributing to GitLab easier. Using automated
testing is a great way to improve confidence when someone needs to change
the code, which actually is the case in the majority of contributions to
software projects.

But how do we ensure that our test suite covers enough to aid the confidence
in changing behavior of the software, and what can we do to keep on improving
it?

## What is code coverage?

Using the [code coverage](https://en.wikipedia.org/wiki/Code_coverage) metric is a
technique that helps to improve the test suite and the software itself.

Tools used to measure the code coverage usually extend the test harness
environment, and make it possible to map the application execution process
back to the source code while automated tests are being executed. With that
approach, you can not only learn how much of your code is covered by tests,
but it is also possible to find out what exact parts of the codebase are not
covered well enough.

Some tools also make it possible to generate code coverage reports in the HTML
format that you can then review in your browser. It makes it  much easier to
inspect the areas of code that are missing tests and are likely to need some
improvements as well.

Take a look at code coverage report for GitLab that is available
on [GitLab Pages for GitLab CE project](http://gitlab-org.gitlab.io/gitlab-ce/coverage-ruby/)

![code coverage report summary](images/blogimages/publish-code-coverage-report-with-gitlab-pages/code-coverage-report-file-summary.png)

## How to generate a code coverage report?

There are a lot of code coverage tools available for many different languages.
You will need to find appropriate tool for your particular needs. In GitLab with
projects using Ruby, we often use [SimpleCov](https://github.com/colszowka/simplecov).

You will need to check documentation for your tool of choice to learn how to
generate the code coverage report. Once you are able to do this locally,
check out the rest of this tutorial to learn how to publish the report with
GitLab Pages!

For the sake of this example, we will assume that you are using Ruby with RSpec
and SimpleCov.

### Configure your tools

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

### Add GitLab CI configuration

GitLab CI configuration can be defined in `.gitlab-ci.yml` file.

---

<i class="fa fa-info-circle" style="color:rgb(107,79,187); font-size:.85em" aria-hidden="true"></i>
In the meantime, take a look at [documentation](https://docs.gitlab.com/ee/ci/yaml/README.html)
to learn more about how to use `.gitlab-ci.yml`!

---

Let's go throight GitLab CI configuration that is necessary to publish
coverage report with GitLab Pages.

<i class="fa fa-arrow-circle-right" style="color:rgb(107,79,187); font-size:.85em" aria-hidden="true"></i>
_Run RSpec test suite first_

The most simple approach is to execute all tests within a single job in the
CI pipeline.

```yaml
image: ruby:2.3

rspec:
  script:
    - bundle install
    - rspec
```

<i class="fa fa-arrow-circle-right" style="color:rgb(107,79,187); font-size:.85em" aria-hidden="true"></i>
_Then store result as build artifacs_

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
that is available from the build sidebar. It is there!

![code coverage report artifacts](images/blogimages/publish-code-coverage-report-with-gitlab-pages/coverage-report-artifacts-browser.png)

<i class="fa fa-arrow-circle-right" style="color:rgb(107,79,187); font-size:.85em" aria-hidden="true"></i>
_And publish with GitLab Pages!_

---

<i class="fa fa-info-circle" style="color:rgb(107,79,187); font-size:.85em" aria-hidden="true"></i>
Documentation about how to use GitLab Pages can be found [here](https://docs.gitlab.com/ee/pages/README.html)!

---

```yaml
image: ruby:2.3

rspec:
  stage: test
  script:
    - bundle install
    - rspec
  artifacts:
    paths:
      - coverage/

pages:
  stage: deploy
  dependencies:
    - rspec
  script:
    - mv coverage/ public/
  artifacts:
    paths:
      - public
  only:
    - master
```

A job that is meant to publish your code coverage report with GitLab Pages has
to be placed in the separate stage. Stages `test`, `build` and `deploy` are
specified by default, but you can change that if needed. Note that you also
need to use `pages` as a job name.

Using `dependencies` keyword, tells GitLab to download artifacts stored as part
of `rspec` job. You also need to rename directory from `coverage/` to `public/`
because this is the directory that GitLab Pages expects to find static website
in.

When it makes sense to deploy new coverage report page only when CI pipeline
runs on `master` branch, so you can add `only` keyword at the end of the
configuration file.

### Parallel tests

Things get a little more complicated when you want to parallelize your test
suite.

GitLab is capable of running tests jobs in parallel. You can use this technique
to decrease wall-clock elapsed time that is needed to execute all tests /
builds in the CI pipeline significantly.

Numerous approaches are available, the most simple is to split test manually,
more sophisticated is to use tools or plugins that do distribute tests jobs
evenly in the automated fashion.

If you will decide to parallelize your test suite, you need to generate a partial
code coverage report in each parallel job, and store it as a build artifact.
Then, you will need another stage in the pipeline with job that merges partial
code coverage metrics into the one and generates a single report that takes all
results, generated during parallel jobs, into account.

In GitLab, we parallelize our test suite heavily, and we do use additional
tools to distribute test jobs evenly. SimpleCov does not support merging
result sets out-of-the-box, so we had to [write a patch for it](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/scripts/merge-simplecov).
There is an issue about [contributing this change back to the SimpleCov](https://gitlab.com/gitlab-org/gitlab-ce/issues/23717).

### Deploy coverage report as GitLab Pages

When you push your changes in `.gitlab-ci.yml` to the GitLab for the first
time, you will see new jobs in the CI pipeline.

![coverage-report-deploy-job](images/blogimages/publish-code-coverage-report-with-gitlab-pages/coverage-report-pages-deploy-job.png)

If the deploy job has been successful, the status icon for it is green.
This means that you can access you coverage report page using a URL like
`http://group-path.gitlab.io/project-path`, for example
`http://gitlab-org.gitlab.io/gitlab-ce`.

A new coverage report will be published each time you push new code
to GitLab!

<i class="fa fa-info-circle" style="color:rgb(107,79,187); font-size:.85em" aria-hidden="true"></i>
Note that pages deploy job will not be successful if a new commit appears on
branch that CI pipeline runs for, before deploy job has been started.

## Using the code coverage report badge

Once you have code coverage report published with GitLab Pages, you may want to
put a link to it somewhere. We recommend using the code coverage badge that you
can add to the `README.md` for that purpose.

This is how it looks in our README.

![coverage-badge-gitlab](images/blogimages/publish-code-coverage-report-with-gitlab-pages/code-coverage-badge-gitlab.png)

When someone clicks coverage badge, code coverage report will be opened.
Markdown source is as follows:

```markdown
[![Coverage report](https://gitlab.com/gitlab-org/gitlab-ce/badges/master/coverage.svg?job=coverage)](http://gitlab-org.gitlab.io/gitlab-ce/coverage-ruby)
```

## Summary

Although the code coverage technique is great for revealing untested code and
improving overall coverage, it is not a great metric to tell how good
the tests are but it helps people to contribute.

There are other techniques you can explore like mutation testing. One of the
most useful techniques is _simplicity_ which is _prerequisite for reliability_.

With GitLab, you can create create simple software that it is easy to contribute
to!
