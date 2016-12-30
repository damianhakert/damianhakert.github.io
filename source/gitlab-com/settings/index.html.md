---
layout: markdown_page
title: GitLab.com settings
---

In this page you will find information about the settings that are used on
GitLab.com.

---

**Table of contents**

- TOC
{:toc}

---

## SSH host keys fingerprints

Below are the fingerprints for GitLab.com's SSH host keys.

| Algorithm | MD5 | SHA256  |
| --------- | --- | ------- |
|  DSA      | `7a:47:81:3a:ee:89:89:64:33:ca:44:52:3d:30:d4:87` | `p8vZBUOR0XQz6sYiaWSMLmh0t9i8srqYKool/Xfdfqw` |
|  ECDSA    | `f1:d0:fb:46:73:7a:70:92:5a:ab:5d:ef:43:e2:1c:35` | `HbW3g8zUjNSksFbqTiUWPWg2Bq1x8xdGUrliXFzSnUw` |
|  ED25519  | `2e:65:6a:c8:cf:bf:b2:8b:9a:bd:6d:9f:11:5c:12:16` | `eUXGGm1YGsMAS7vkcx6JOJdOGHPem5gQp4taiCfCLB8` |
|  RSA      | `b6:03:0e:39:97:9e:d0:e7:24:ce:a3:77:3e:01:42:09` | `ROQFvPThGrW4RuWLoL9tq9I9zJ42fK4XywyRtbOz/EQ` |

## Mail configuration

GitLab.com sends emails from the `mg.gitlab.com` domain via [Mailgun] and has
its own dedicated IP address (`198.61.254.240`).

## Alternative SSH port

GitLab.com can be reached via a [different SSH port][altssh] for `git+ssh`.

| Setting     | Value               |
| ---------   | ------------------- |
| `Hostname`  | `altssh.gitlab.com` |
| `Port`      | `443`               |

An example `~/.ssh/config` is the following:

```
Host gitlab.com
  Hostname altssh.gitlab.com
  User git
  Port 443
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/gitlab
```

## GitLab Pages

Below are the settings for [GitLab Pages].

| Setting                 | GitLab.com        | Default       |
| ----------------------- | ----------------  | ------------- |
| Domain name             | `gitlab.io`       | -             |
| IP address              | `104.208.235.32`  | -             |
| Custom domains support  | yes               | no            |
| TLS certificates support| yes               | no            |

The maximum size of your Pages site is regulated by the artifacts maximum size
which is part of [GitLab CI](#gitlab-ci).

## GitLab CI

Below are the current settings regarding [GitLab CI](/gitlab-ci).

| Setting                 | GitLab.com        | Default       |
| -----------             | ----------------- | ------------- |
| Artifacts maximum size  | 1G                | 100M          |

## Shared Runners

Since April 2016, GitLab.com [partnered with DigitalOcean][do-post] to provide
[shared Runners][runners-post] in autoscale mode that are free for all
GitLab.com users. Autoscaling means reduced waiting times to spin up builds, and
isolated VMs for each project, thus maximizing security.

All your builds run on 4GB (RAM) ephemeral instances, with CoreOS and the latest
Docker Engine installed. The default region of the VMs is NYC.

Below are the shared Runners settings.

| Setting                 | GitLab.com        | Default   |
| -----------             | ----------------- | ----------|
| [GitLab Runner]         | `1.3.2 (0323456)` | -  |
| Executor                | Docker            | -         |
| Default Docker image    | `ruby:2.1`        | -         |
| `privileged` (run [Docker in Docker])| `true` | `false`  |

### `config.toml`

The full contents of our `config.toml` are:

```toml
[[runners]]
  name = "docker-auto-scale"
  limit = X
  url = "https://gitlab.com/ci"
  token = "SHARED_RUNNER_TOKEN"
  executor = "docker+machine"
  [runners.docker]
    image = "ruby:2.1"
    privileged = true
    volumes = ["/cache", "/usr/local/bundle/gems"]
  [runners.machine]
    IdleCount = 40
    IdleTime = 1800
    MaxBuilds = 1
    MachineDriver = "digitalocean"
    MachineName = "machine-%s-digital-ocean-4gb"
    MachineOptions = [
      "digitalocean-image=coreos-beta",
      "digitalocean-ssh-user=core",
      "digitalocean-access-token=DIGITAL_OCEAN_ACCESS_TOKEN",
      "digitalocean-region=nyc2",
      "digitalocean-size=4gb",
      "digitalocean-private-networking",
      "engine-registry-mirror=http://IP_TO_OUR_REGISTRY_MIRROR"
    ]
  [runners.cache]
    Type = "s3"
    ServerAddress = "IP_TO_OUR_CACHE_SERVER"
    AccessKey = "ACCESS_KEY"
    SecretKey = "ACCESS_SECRET_KEY"
    BucketName = "runner"
```

## Sidekiq
GitLab.com runs [Sidekiq][sidekiq] with arguments `--timeout=4 --concurrency=6` and the following environment variables:

| Key                                     | Value     |
|-----                                    |-------    |
| `SIDEKIQ_MEMORY_KILLER_MAX_RSS`         | `1000000` |
| `SIDEKIQ_MEMORY_KILLER_SHUTDOWN_SIGNAL` | `SIGKILL` |
| `SIDEKIQ_LOG_ARGUMENTS`                 | `1`       |


[runners-post]: /2016/04/05/shared-runners/ "Shared Runners on GitLab.com"
[do-post]: /2016/04/19/gitlab-partners-with-digitalocean-to-make-continuous-integration-faster-safer-and-more-affordable/ "GitLab Partners with DigitalOcean"
[GitLab Runner]: https://gitlab.com/gitlab-org/gitlab-ci-multi-runner
[altssh]: /2016/02/18/gitlab-dot-com-now-supports-an-alternate-git-plus-ssh-port/ "GitLab.com now supports an alternate git+ssh port"
[GitLab Pages]: https://pages.gitlab.io "GitLab Pages"
[docker in docker]: https://hub.docker.com/_/docker/ "Docker in Docker at DockerHub"
[mailgun]: https://www.mailgun.com/ "Mailgun website"
[sidekiq]: http://sidekiq.org/ "Sidekiq website"
