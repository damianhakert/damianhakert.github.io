---
title: "Meet a GitLabber: Jneen"
author: Emily von Hoffmann
author_twitter: emvonhoffmann
categories: customer stories
image_title: '/images/default-blog-image.png'
description: "An intermittent series on passions and to-do lists."
---

_The GitLab team contains multitudes. One GitLabber at a time, we'll celebrate the personalities that make the whole thing go._   

<!-- more -->

You've been a friend of the team for a while through your work maintaining Rouge, which I recently learned we use at GitLab! Can you tell me more about Rouge, and what your work on it entails?
{: .alert .alert-info} 

**Jeanine:** Yes I have! I really enjoyed working with the GitLab team on Rouge. It's a syntax highlighter, which means it's capable of breaking apart text written in more than 100 programming languages into different highlightable tokens, and then formatting those tokens in, for example, HTML to display colors. It can also make a reasonable guess at what language text is written in by the file extension and the source contents.

It's one of those projects that's never really *done* - there are always more languages to support and guessing improvements to be made. At its heart one lexer (the thing needed to support a particular language) is a slightly more organized giant pile of regular expressions, so there's always going to be edge cases that crop up and some level of maintenance cost.

How did you first hear about GitLab, and what made you interested in joining the team?
{: .alert .alert-info}

**Jeanine:** I was only sort of vaguely aware of GitLab until they started using Rouge a couple of years ago to highlight their project pages and markdown snippets. Between them and the Jekyll project, I was just completely overwhelmed with issues and pull requests - from genuine bugs to language support requests (JSX was a big one) to guessing inaccuracies - I just couldn't keep up. That's why I eventually reached out to GitLab, and they hired me on as a contractor last summer to, among other things, catch up on the massive backlog I'd accumulated.

Working as a contractor, I got the opportunity to experience the amazing remote culture at GitLab. It was really easy to get a lot of work done quickly. I think, mostly because we make a product centered around software process, this company highly values things I'd have to advocate for in other companies - we already do code review, our CI is already set up and integrated into the workflow, we have an issue/merge-request process that has clearly been thought through carefully in terms of product design.

What do you now do in your day-to-day at GitLab? What does your task list look like?
{: .alert .alert-info}

**Jeanine:** I've just started, so there isn't really a "usual" yet. I'm strongest at text-processing kinds of tasks, so I started by working out some bugs in the parsing of our comment-by-email feature. Recently I've picked up some features for our Enterprise Edition as well. In general I like to take on difficult bits of code and untangle them to make something nicer.

I also saw that you created a programming language called Tulip. Can you tell me about that process, how you got the idea, and any surprising challenges you encountered?
{: .alert .alert-info}

**Jeanine:** Oh, Tulip! Tulip is my dream project, and also my windmill-chasing attempt to take over the world (of tech). It's an impure functional language with a unique ML/Haskell-inspired syntax and an Erlang-style concurrency model. It's still a work-in-progress and has a long ways to go before it's even close to production-ready.

It's been kicking around in the back of my head since about 2011, when I started looking around for a language that was optimized for interactive shell use but also was something suitable for large programs (i.e. not a system shell language). I have a fascination with product design for programmers, so when I became pretty frustrated with everything I stumbled on, I decided to make a sketch of something better. It's changed a *lot* over the years - all the way from a TCL-like command-centric system to a dependently typed idris-style language with a proof engine. It came together suddenly about two years ago when I designed the variant and pattern-matching systems and dropped types (and later, any kind of purity guarantee). We ended up very close to Erlang semantics, and I think that's a really good thing.

I'm really hoping to create a language community that does a lot of things right from the get-go (code of conduct, cultural expectations, etc) and also doesn't just have another group of cis dudes and their buddies at the top. One of my biggest challenges has been the sheer size of a language project. I'm really lucky that @sigfig has taken over the runtime, and we've got another volunteer about to start work on the concurrency implementation. We hang out in a snek channel (joinable from http://snek.jneen.net/) and we've given a couple of talks at conferences, most recently StrangeLoop - all linked from tuliplang.org.


_Tweet us [@GitLab](https://twitter.com/gitlab), and check out our [job openings](https://about.gitlab.com/jobs/)_





