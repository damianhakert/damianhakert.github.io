---
layout: post
title: "GitLab CE 6.8 released"
date: 2014-04-22 10:04:04 +0100
comments: true
categories:
community: false
---

### GitLab CE 6.8 released!

<!--more-->

## GZipped assets

Previously, GitLab was not equipped to serve assets with compression. This increased the load time since the browser had to download all assets.
We've added the option to the example Nginx config to serve the pre-gzipped version of the assets.
Nginx has this module enabled by default in Ubuntu but if you are using the compiled version of Nginx, make sure that you have compiled it with --with-http_gzip_static_module flag.
More information on GZip compression [can be found here](http://guides.rubyonrails.org/asset_pipeline.html#gzip-compression)
