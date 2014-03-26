---
layout: post
title: "GitLab CI with parallel builds and deployments"
date: 2013-12-19
author: Sytse Sijbrandij
comments: true
categories:
community: true
---

### GitLab CI with parallel builds and deployments

This is a proposal to extend GitLab CI with parallel builds, pushing successful builds to external repo's, branch specific builds and support for build metrics.

<!--more-->

GitLab CI is quickly becoming more popular and [people](https://twitter.com/r1chardj0n3s/status/412749435316080640) appreciate the good integration with GitLab and the clean UI.

This popularity also brings requests for the following functionality that make a lot of sense:

1. [Several independent build projects should be possible per Gitlab project](http://feedback.gitlab.com/forums/176466-general/suggestions/4366643-several-independent-build-projects-should-be-possi)
1. [GitLab CI should push successful builds to an external repo](http://feedback.gitlab.com/forums/176466-general/suggestions/3873803-gitlab-ci-should-push-successful-builds-to-an-exte)
1. [Maybe it should be possible to have a build script per branch if needed](http://feedback.gitlab.com/forums/176466-general/suggestions/4319173-maybe-it-should-be-possible-to-have-a-build-script)
1. [Display timeline of build metrics like coverage e.t.c.](http://feedback.gitlab.com/forums/176466-general/suggestions/3974513-display-timeline-of-build-metrics-like-coverage-e-)

We alse added a reserve compatibility requirement so we don't break the unofficial [Windows](https://github.com/virtualmarc/gitlab-ci-runner-win) and [Scala](https://github.com/nafg/gitlab-ci-runner-scala) runners. If we make the above requests a bit more general we come to the following 5 requirements:

1. Parallel builds (to speed up the testing of your project if you have many runners)
1. Success and failure builds (in that build you can also push to an external repo) 
1. Branch restricted builds (so you can do certain actions only when code is merged into master, etc.)
1. Percentage results as output (so coverage and other quality indicators can be seen)
1. Compatible with existing runners (so the upgrade path is easier)

The parallel builds feature will allow tests to complete a lot faster. Suppose you have the following build:

- Runner 1 - bundle exec rspec - Finished in 8 minutes
- Runner 1 - bundle exec cucumber - Finished in 12 minutes

With a total build time of 20 minutes. With a parallel build and two runners you can have the following:

- Runner 1 - bundle exec rspec - Finished in 8 minutes
- Runner 2 - bundle exec cucumber - Finished in 12 minutes

For a total build time of 12 minutes. The parallel builds are almost two times as fast.

The days when we just run a single test type on our software are long gone. We look forward to a future where in the merge request you see the following:

[![screenshot](/images/future_ci/mr_status.png)](/images/future_ci/mr_status.png)

- Rspec unit tests - Pass
- Cucumber integration tests - Pass
- Older Ruby (1.9) - Pass
- Another DB (MySQL) - Pass
- Performance test with rails-perftest | -3% (63%)
- Load test with Apache Brench | Pass
- Code smell with Rubocop | Pass
- Coverage (Simplecov coverage | -1.2% (81.6%)
- Documentation generation with RDoc | Pass
- Lint test with ruby-lint | Pass
- Trigger build of dependency | Pass
- Saved build artifacts on S3 | Pass
- Deployment to staging server | Pass

In order to achieve the requirements the following things need to change in the GitLab CI coordinator:

1. Each Project has many Commit objects (created every time a new commit is pushed to the project, these used to be called builds)
1. Each Commit object has many Build objects (these are the actual things executed by the runners)
1. Each Project has many Scripts objects (a project used to have only one build script but we now get multiple ones)
1. Each Script has a type (setup/test/success/failure) and a branch restriction

The script types mentioned in the last item have the following characteristics:

1. The setup scripts will always run on any runner before any other scripts (including success and failure)
1. The test scripts can be run in parallel on different runnners
1. The failure scripts are run if any of the setup and test scripts don't return 0
1. The success scripts are run all of the setup and test scripts do return 0

Suppose a project has 7 scripts:

1. 'Ruby install' of type setup
1. 'Rails install' of type setup
1. 'Rspec unit tests' of type test
1. 'Cucumber intergation test' of type test
1. 'Create documentation' of type success
1. 'Deploy to staging' of type success
1. 'Email developers' of type failure

If there is a new commit on the project the CI coordinator will create one Commit object and two Build objects, one for each of the test scripts. When a runner requests one of these it will receive the concatenated contents of the two setup scripts and one of the test scripts. The two runners report back their progress by submitting their logs to the CI coordinator just like today. Suppose that both Builds complete successfully. An observer on the CI coordinator will now create two new Build objects for the success scripts. These can again run on different runners.

To ensure a for example a Jekyll blog is quickly deployed people should put both the generation and the deployment into the success task. Having the generation in a test and the deployment in a success script is not an option because the scripts could run on different runners. Repeating the generation in a test and the success script slows down the complete process since another runner has to do the setup and the test before the success task can run. If the generation fails in the success task this runner will exit with a failure before the success task is run as long as the generation and deployment are on different lines of the script.

Maybe you noticed that the example merge request content talked about 'Older Ruby' and 'Another DB'. One consequence of this proposal is that we will not support a build matrix where all combinations of options are tested. So you can't easily test your project with all combinations of 3 ruby versions, 2 databases, 4 gemfiles and 3 environments. We recommend to choose a default configuration (ruby 2.0, PostgeSQL, Gemfile, production) for which you run the specific test scripts (rspec, cucumber, etc.). The other options have a script run all tests (for example rake:test) with just that option changed. This means that you miss failures that are a result of two options (a different ruby and a different database). In our experience most failures can already be caught by testing one option at a time. As a workaround you can of course manually create scripts for combinations of options. The advantage of not testing combinations is that you need a lot less testing, 12 complete builds instead of 72 in our example. Another advantage is that executing the specific test scripts in parallel allow you to quickly identify where an error occurs.

Apart from giving each script a type they can also have a branch restriction. This means the script only runs if the current branch matches on of the branches listed in the branch restiction. For example you can only deliver a failure notification if the master or production branch breaks. The current branch is already passed from GitLab to GitLab CI coordinator when a new commit is pushed.

[![screenshot](/images/future_ci/script.png)](/images/future_ci/script.png)

Percentage results as output are something that is useful for only part of the tests. For tests like Rspec and Cucumber a pass/fail result is enough. But for code quality tools that measure things such as test coverage, code complexity and code style a percentage is appropriate. For example for a code coverage tool like [simplecov](https://github.com/colszowka/simplecov) a 81.45% code coverage is much more useful than a pass/fail result. Adding percentage results means that the runner has to determine the percentage somehow. We propose the use the CI_RESULT environmental variable for that. So when you run a code quality tool you should use a regular expression to parse the results and set CI_RESULT to a decimal value (for example 0.2345 to represent 23.45%). Some tools do not output a percentage but an absolute number, for example [Rails perftest](https://github.com/rails/rails-perftest) outputs the number of milliseconds something took. In this case you have to normalize the output. One way to do this would be to select a value that is perfect (25ms for a page load) and diving that by the output. Suppose the page loads in 67ms, the normalized result is 25/67 = 0.3731 = 37.31%. The advantage of normalizing in this way is that high percentages are better a slight disadvantage might be that you can get values over 100%. GitLab CI coordinator can generate graphs of how the percentages of the master build for each individual script change over time. Even when CI_REULT is set the runner always also submits the pass/fail result based on the exit code to the coordinator. Obviously old runners will not submit this value to the coordinator, in that case the coordinator falls back on the pass/fail result.

Even with the help of the rest of the community implementing the above will take multiple versions of GitLab CI. We could use the following implementation steps:

1. A commit has many builds
1. Multiple scripts with different types
1. Branch restrictions
1. Parallel builds
1. Percentage results
1. Percentage result history graphs

We think the above is a feasible way to integrate a lot of useful features in GitLab CI. We look forward to hear your questions, comments and suggestions.

Update on 2014-03-26: As [commented below](https://www.gitlab.com/2013/12/19/gitlab-ci-with-parallel-builds-and-deployments/#comment-1228617249) we would like to also include the ability to assign a runner to a specific script. This would enable you to perform a performance test on a specific machine or to perform a build on multiple operating systems.
