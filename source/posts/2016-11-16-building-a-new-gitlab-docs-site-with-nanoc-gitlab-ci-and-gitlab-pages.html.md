---
title: "Building a new GitLab Docs site with Nanoc, GitLab CI, and GitLab Pages"
author: Connor Shea
author_twitter: connorjshea
categories: tutorial
image_title: 
description: 
---

We recently rebuilt [docs.gitlab.com](https://docs.gitlab.com) from scratch. Where previously the site was generated with a simple Ruby script, we now use a proper static site generator.

We wanted to show you some of the improvements we made, problems we faced, and the ways we used GitLab to build the new site more quickly and easily.

<!-- more -->

## Improvements

The old documentation website was pretty much just an HTML file, a stylesheet, and a Ruby script called `generate.rb`. While it worked, it was hard to update and not very flexible. It mostly laid dormant, only occasionally being touched by developers. The docs team really wanted to update the site to use a static site generator and take better advantage of GitLab Pages.

We chose [Nanoc](http://nanoc.ws/) because it’s fast, it comes with a number of built-in helpers and filters (as well as the ability to create custom filters and helpers), and it’s built with Ruby. Overall I think this was definitely the right choice. Nanoc’s documentation had some problems, but the author was very responsive and addressed anything we brought up. Kudos to him on the great project!

Other improvements include syntax highlighting with Rouge (no syntax highlighting was used at all on the old site), breadcrumbs for navigating between pages, and an improved overall design – especially on mobile.

## Requirements

Our documentation site has some unique requirements that I haven’t seen mentioned or solved in any other companies’ blog posts. We have a few products with documentation we want to include in the site: Community Edition, Enterprise Edition, Omnibus, and Runner. In the future we’ll likely add more.

Each product has it own repository with its own documentation directory. This allows developers to add documentation in the same merge request they add a new feature or change some behavior. It prevents documentation from becoming outdated.

The site also needed to be flexible enough that we could add versioning to it in the future. Eventually our goal is to replace the Help section in CE/EE with this Docs site, so we need to maintain older versions of the documentation on the Docs site for users on older versions of GitLab.

## The build process

Given the requirements and separate repositories, we decided we’d just need to clone the repositories as part of the build process.

In the `Rakefile` we have a hash for each of our products containing all the data we need, something like this:

```ruby
ce = {
  name: 'ce',
  repo: 'https://gitlab.com/gitlab-org/gitlab-ce.git',
  temp_dir: 'tmp/ce/',
  dest_dir: 'content/ce',
  doc_dir:  'doc'
}
```

We shallow clone each product’s repository into the `tmp` directory to make the clone as fast as possible.

```ruby
products.each do |product|
  `git clone #{product[:repo]} #{product[:temp_dir]} --depth 1`
end
```

In the future we could speed this up further by caching the `tmp` folder in CI. The task would need to be updated to check if the local repository is up-to-date with the remote, only cloning if they differ.

We then copy the contents of the documentation directory (defined by `doc_dir`) for each product from `tmp` to `content`. `content` is where Nanoc looks for the actual site’s Markdown files. To prevent the `tmp` and `content` subdirectories from being pushed after testing the site locally, they’re excluded by the `.gitignore`.

Nanoc runs each Markdown file through a series of filters defined by rules in the `Rules` file. We currently use Redcarpet as the Markdown parser along with Rouge for syntax highlighting, as well as some custom filters. For more on the specifics of building a site with Nanoc, see [the Nanoc tutorial](http://nanoc.ws/doc/tutorial/).

## Taking advantage of GitLab to put everything together

### GitLab CI

Nanoc has a built-in system of [Checks](http://nanoc.ws/doc/testing/), including HTML/CSS validation and internal/external link validation. With GitLab CI we test with the internal link checker (set to allow failure) and also verify that the site compiles without errors. We also run a [SCSS Linter](https://github.com/brigade/scss-lint) to make sure our SCSS looks uniform.

Our `.gitlab-ci.yml` file looks like this:

```yml
image: ruby:2.3

cache:
  key: "ruby-231"
  paths:
  - vendor/ruby
  
stages:
  - test
  - deploy
  
before_script:
  - bundle install --jobs 4 --path vendor

verify_compile:
  stage: test
  script:
    - rake pull_repos
    - nanoc
  artifacts:
    paths:
      - public
    expire_in: 1w
  except:
    - master
  tags:
    - docker

internal_links:
  stage: test
  script:
    - rake pull_repos
    - nanoc
    - nanoc check internal_links
  tags:
    - docker

scss_lint:
  stage: test
  script:
    - bundle exec scss-lint
  tags:
    - docker

review:
  stage: deploy
  before_script: []
  script:
    - rsync -av --delete public /srv/nginx/pages/$CI_BUILD_REF_NAME
  environment:
    name: review/$CI_BUILD_REF_NAME
    url: http://$CI_BUILD_REF_NAME.$APPS_DOMAIN
    on_stop: review_stop
  only:
    - branches
  except:
    - master
  tags:
    - nginx
    - review-apps

review_stop:
  stage: deploy
  before_script: []
  artifacts: {}
  cache: {}
  script:
    - rm -rf public /srv/nginx/pages/$CI_BUILD_REF_NAME
  when: manual
  environment:
    name: review/$CI_BUILD_REF_NAME
    action: stop
  only:
    - branches
  except:
    - master
  tags:
    - nginx
    - review-apps

pages:
  stage: deploy
  environment:
    name: production
    url: https://docs.gitlab.com
  script:
    - rake pull_repos
    - nanoc
  artifacts:
    paths:
    - public
  only:
    - master
  tags:
    - docker
```

### Review Apps

When opening a merge request for the docs site we use a new feature called Review Apps to test changes. This lets us test new features, style changes, new sections, etc. by deploying the updated static site to a test domain.

![Review apps](/images/blogimages/gitlab-docs-review-apps-screenshot.png)

**MORE DETAILS ON REVIEW APPS GO HERE**

### GitLab Pages

[GitLab Pages](http://pages.gitlab.io/) allows us to create the static site dynamically since it just deploys the `public` directory after the GitLab CI task is done.

GitLab Pages deploys the site whenever a commit is made to the master branch of the gitlab-docs repository or whenever the deploy hook is called. A job is used to trigger a new build whenever tests run and pass on master branch of CE, EE, Omnibus, and Runner.

It’s worth noting that GitLab Pages _is_ an Enterprise Edition-only feature, but it’s also available for free on GitLab.com.

## Conclusion

Hopefully this shows some of the power of GitLab and having everything integrated into one cohesive product. If you have a complex documentation site you’d like to put together from multiple Git repositories, the process described above is the best we’ve been able to come up with.

The [documentation website](https://gitlab.com/gitlab-com/gitlab-docs) is open source, available under the MIT License. You’re welcome to take a look at it, submit a merge request, or even fork it to use it with your own project.

Thanks for reading, if you have any questions we’d be happy to answer them in the comments!
