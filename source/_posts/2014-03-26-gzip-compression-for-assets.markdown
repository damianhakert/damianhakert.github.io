---
layout: post
title: "Gzip compression for assets"
date: 2014-03-26 10:04:04 +0100
comments: true
categories:
author: Marin Jankovski
---

Currently, GitLab is not equipped to serve assets with compression. This increases the load time since the browser has to download all assets.

In the next release of GitLab, we've added the option to example Nginx config to serve the pre-gzipped version of the assets.
Nginx has this module enabled by default in Ubuntu but if you are using the compiled version of Nginx, make sure that you have compiled it with --with-http_gzip_static_module flag.
More information on GZip compression [can be found here](http://guides.rubyonrails.org/asset_pipeline.html#gzip-compression)
