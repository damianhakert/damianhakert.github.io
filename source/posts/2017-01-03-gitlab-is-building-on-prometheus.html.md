---
title: "GitLab is Building On Prometheus"
author: Eliran Mesika
author_twitter: eliran_mesika
categories: GitLab
image_title: 'needs-to-be-added-later'
description: "Needs to be added later"
---

At GitLab we decided we're going big on building monitoring with Prometheus part of GitLab. We've started building our Prometheus team a few months ago and are still busy expanding it to execute on our vision. We've shared our vision on how we want that to look on our [Prometheus and GitLab: Completing the application lifecycle with monitoring video](https://www.youtube.com/watch?v=NFPGtbQfL1A). As part of our focus for making monitoring a key part of the GitLab experience we've been learning more about Prometheus and recently took a look into the recorded sessions from PromCon 2016 [available on YouTube](https://www.youtube.com/watch?v=-JkxB0CiMjU&list=PLoz-W_CUquUlCq-Q0hy53TolAhaED9vmU). Having gone through several of the talks and condensing them, I thought it'd be a good idea to share my notes of them.

<!--more-->

The videos summarized here are:
  - [Prometheus Design & Philosophy](https://www.youtube.com/watch?v=4DzoajMs4DM&list=PLoz-W_CUquUlCq-Q0hy53TolAhaED9vmU&index=2)
  - [Scaling to a Million Machines with Prometheus (a DigitalOcean talk)](https://www.youtube.com/watch?v=likpVWB5Lvo&list=PLoz-W_CUquUlCq-Q0hy53TolAhaED9vmU&index=4)
  - [Life of a Label](https://www.youtube.com/watch?v=b5-SvvZ7AwI&index=5&list=PLoz-W_CUquUlCq-Q0hy53TolAhaED9vmU)
  - [Full Stack Metrics with Triton's Native Prometheus Support](https://www.youtube.com/watch?v=X8QV9HgPNbc&index=8&list=PLoz-W_CUquUlCq-Q0hy53TolAhaED9vmU)


## Prometheus Design & Philosophy

* [Video](https://www.youtube.com/watch?v=4DzoajMs4DM&list=PLoz-W_CUquUlCq-Q0hy53TolAhaED9vmU&index=2), [slides](https://docs.google.com/presentation/d/1HO7_rRgOa8w86yDtlD6771mM2e6VuIvluPfPrmrqc1E/edit#slide=id.g15c18d332d_0_130)

  - Time series based monitoring system, focused on two use cases:
      - Operations systems monitoring
      - Dynamic cloud environments
  -  Not good for: raw log, request tracing, long-term storage, automatic horizontal scaling, authentication management.
  -  Data model is label based vs. hierarchical model - you can fetch just the label you are interested in (“post” etc.). Gives you stronger abilities for cross-cutting selection of data.
  -  Selection is non-SQL, use PromQL example: rate(api_requests_total[5m]), much shorter compared to SQL. Significantly easier for binary selection and calculations. Read only.
  -  Pull vs. Push - Prometheus uses pull mechanism:
      - Allows for horizontal monitoring (you can access data from other teams by pulling and not having to configure a push from that team).
      - Simpler HA - can run two identical Prometheus server to record the same data.
      - Scales
      - Problems when there are firewalls in place, workarounds are: run Prom on the same network segments, configure the ports, use a VPN
  -  Exporters - a single exporter per process is a more efficient way of exporting the data, no SPOF, no bottleneck, easier to associate metadata vs. per-machine exporter
  -  Didn’t go with JSON because they wanted to have something that is easy to construct, efficient, readable, streamable (text-wise) and robust and streamable for the protocol buffering.
  -  Aren’t using clustering (using local storage) because it’s hard to get right, usually the first thing that fails, allows you to focus on monitoring and makes HA for alerting easy
  -  Relabeling is a small domain specific language that is part of the configuration file, used when you configure a service you want to monitor defining what you monitor and how.
  -  Client libraries keep state and Prometheus pulls the latest state, manage the metrics for histograms and graphs. Are a bit heavier in volume as a result of this pre-aggregation.
  -  Use float64 to simplify things, provides good compression. Precision until 2^53 - no precision problems (mostly relevant for counters)
  -  Authentication/multi-user: not supported in Prometheus. Users can solve authentication by using an external reverse proxy. Multi Tenancy is more difficult, one company uses a tenant label to any time series that comes in and the validation happens against that when a request to present data comes in.


## Scaling to a Million Machines with Prometheus (a DigitalOcean talk)

* [Videos](https://www.youtube.com/watch?v=likpVWB5Lvo&list=PLoz-W_CUquUlCq-Q0hy53TolAhaED9vmU&index=4), [slides](http://www.slideshare.net/MatthewCampbell7/breaking-prometheus-promcon-berlin-16)

  -  Before Prometheus every team used something else (Graphite, InfluxDB, OpenTSDB)
  -  At the beginning each team had their own prom server for any microservice
  -  Some issues they ran into: never upgraded versions, mismatched versions
  -  Stage 1 of their use of Prometheus: figured out Consul & Prometheus was a great combo. Setup a centralized prometheus server, every time a new microservice came out they had a Consul entry for that matrix endpoint. Only adding config once to Consul and Prometheus would get that from Consul.
  -  Stage 2 of their use of Prometheus: wanted to monitor every one of their HV. Setup a single prometheus server for each regional datacenter. For smaller datacenters that worked fine, the larger ones did not work well. Kept bulking up the prometheus machine but that still didn’t work (also dropped metrics).
      -  If you’re running Prometheus on a server that has more than 8GB of RAM you have to tweak these settings (see slide 11)
  -  For bigger regions they started to shard the prom servers. Used Chef to deploy multiple prometheus servers and tell each one which node in the shard it was, were able to spin up 3 prometheus servers in the region to scrape 10,000 HV. Ran into problems of querying the data because they didn’t know where the data is on each of the shards. Wrote a Prometheus proxy, the single Graphana instance points to prometheus proxy which then determines which shard to get the data from (parses the prometheus queries).
  -  Didn’t like Nagios and wanted to use the alert manager for disk space on prometheus. There’s a new interface out to do this today easily. They used a LB with MySQL.
  -  Stage 3 of their use of Prometheus: ran into problems when they want to add a prometheus server because of the sharding, when you added a server you lost the history. Used Kafka with a Push gateway and a prometheus scraper that were pushing data into Kafka and the Prometheus server reading from it. Enabled them to rebuild the prometheus instance or the shard cluster from Kafka. Never went live with this.
  -  Wanted to give their users a UI of the metrics (millions of VMs):
      -  Built a special version of the node exporter (“reverse node exporter”). It was an authenticated push gateway that pushed data into DO (users had to install on their machines).
      -  Built a special customer querying API (GRPC and http) that enabled customers to query the data but in an authenticated way without data leaks into other customers’ data.
  -  Created [Vulcan](https://github.com/digitalocean/vulcan), an extension to Prometheus for long-term storage and high-cardinality labels, built on the Prometheus API, using a Cassandra storage (centralized db for Prometheus), all the standard scrapers go to Kafka. Prometheus only does reading in this use case.
  -  Doing downsampling, spinning up an in-memory version of prometheus server to query from Kafka to query against that data. Keeping that prometheus only for the time needed and write the queries back into Cassandra.
  -  Alerting is done by scraping the Kafka with an in-memory Prometheus and applying the alerting rules

## Life of a Label

* [Videos](https://www.youtube.com/watch?v=b5-SvvZ7AwI&index=5&list=PLoz-W_CUquUlCq-Q0hy53TolAhaED9vmU), [slides](http://www.slideshare.net/brianbrazil/life-of-a-label-promcon2016-berlin)

  -  Relabeling is a way to capture metadata on an object and based on that select which targets to scrape. Can also be used to choose your target labels (default is: `_address_/instance`)
  -  Simplest relabel actions are `keep` and `drop`. keep means the regex matches and the target will continue, drop stops processing if the regex matches.
  -  You can use source_labels to match against more than one label, results separated by semicolon.
  -  You can use relabeling to give meaning to your service discovery results and instead of getting host:port as `_address_` you can relabel using instance (`prod` etc.).
  -  If there’s a clash with instrumentation labels the target label takes precedence. The scraped label will be prefixed with exported_. An empty scraped label will remove labels including instance. Use this for Pushgateway.
  -  Alerts can be grouped by label to reduce spam.
  -  Summary:
      -  Instrumentation labels come from the application
      -  Service discovery creates targets (your microservices)
      -  Relabeling filters targets and adds target labels to make them meaningful
      -  Metric relabel configs apply to scraped time series
      -  Alerts can add labels before sending to alertmanager (name, description..)
      -  Alertmanager uses labels for routing, grouping, deduplication and silencing
      -  Performance implications of labels - adding them requires bandwidth, querying is WIP. Rather cheap as long as cardinality is under control.

## Full Stack Metrics with Triton's Native Prometheus Support

* [Videos](https://www.youtube.com/watch?v=X8QV9HgPNbc&index=8&list=PLoz-W_CUquUlCq-Q0hy53TolAhaED9vmU), [slides](https://speakerdeck.com/tgross/triton)

  -  On Triton applications run on containers as Solaris zones.
  -  It was hard to get data from past system.
  -  New development services a multi-tenant environment, providing an API for customers to deploy their containers in an isolated setting.
  -  Are in favor of "Pull" because of the nature of the service where the status of each container and customer varies, leaves it up to the client to act on.
  -  Chose Prometheus because of the storage agnostics, pull mechanism
  -  Have a metric agent on each physical machine which collects data from all the containers via system commands (kstat etc.)
  -  Metric agent takes the role of the node exporter
  -  The metric agent proxy is stateless and horizontally scalable, in charge of authentication, also routes Prometheus server requests to the right metric agent through the Prometheus API.
  -  Metric collection happens by customer owned Prometheus server or setup a forwarder to forward the data to another system you use
  -  Developed AutoPilot that handles orchestration from the app level unlike Kubernetes/Mesosphere. Have set up a “sensor” that hooks feed data to a Prometheus end point so you can track application metrics on top of the container metrics.

Hope these summaries gave you better insight into the topics in a text-friendly, time constrained fashion.
