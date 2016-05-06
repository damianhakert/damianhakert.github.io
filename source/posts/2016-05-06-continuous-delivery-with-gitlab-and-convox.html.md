# Continuous Delivery with GitLab and Convox

Convox is an open-source tool for deploying, managing, and monitoring applications in cloud infrastructure. It increases the productivity of your developers, reduces your infrastructure spend, and ensures that your architecture is resilient, consistent, and compliant.

GitLab is an open-source tool for managing source code collaboratively. It helps your team write great code and conduct code reviews, and coordinates how your team tests and deploys code together.

Recently Convox launched a native integration with GitLab for Continuous Delivery (CD). By using Convox and GitLab together, your team can:

* Set up a private deployment cloud in minutes with `convox install`

* Create a production-ready application with `convox apps create`

* Push code to GitLab.com or a private GitLab CE install with `git push`

* Let GitLab and Convox coordinate automatic builds and deploys of your code

* Notify the team via Slack when the new release is live

This level of automation enables your team to safely release new code as fast as possible. This represents the most productive workflow possible for you and your team.

All of this is facilitated with open source software that you are free to use, modify and work with growing communities to improve.

All of this can run in a totally isolated environment where your code, images and containers never leave your control.

![Continuous Delivery from GitLab to Convox](/images/blogimages/continuous-delivery-with-gitlab-and-convox/gitlab-integration.png)*Continuous Delivery from GitLab to Convox*

![Push Code, Get Service](/images/blogimages/continuous-delivery-with-gitlab-and-convox/slack.png)*Push Code, Get Service*

### Continuous Delivery

Continuous Delivery (CD) is a modern software development best practice. Your team wants and needs the ability to safely push updates to production multiple times a day. With a great CD pipeline you can:

* Ship features faster and more frequently

* Roll out bug fixes and security patches instantly

* Keep your development team in a coding flow

* Eliminate work and interruptions on infrastructure that’s not core to your business

If you don’t have this, you are wasting precious time and budget on infrastructure, servers and bespoke deployment tools.

### Granting GitLab Auth to Convox

Every service integration begins with authorizing two services to talk to each other. For the first iteration of GitLab and Convox we opted for a simple token-based solution.

![Get your GitLab Private Token](/images/blogimages/continuous-delivery-with-gitlab-and-convox/gitlab-account.png)*Get your GitLab Private Token*

![Give Convox your GitLab Endpoint and Token](/images/blogimages/continuous-delivery-with-gitlab-and-convox/gitlab-setup.png)*Give Convox your GitLab Endpoint and Token*

Convox encrypts this token, and decrypts it when it needs to perform actions on your GitLab like creating a webhooks and deploy key.

### Webhooks

Webhooks — user-defined HTTP callbacks — are the fabric on which Continuous Deployment systems are built.

GitLab has tremendous webhook support, allowing you to configure how it will make an HTTPS request to an external system on events like every comment, code push and code merge.

When you integrate GitLab with a Convox app, the first thing Convox does is add a new Push Event webhook to your repository pointing to a secure and secret Convox URL.

![Tell Convox About the Push](/images/blogimages/continuous-delivery-with-gitlab-and-convox/gitlab-webhooks.png)**

When this is configured Convox will get notified every time your team pushes new code.

### Deploy Keys

GitLab has an impeccable security model. If an actor like Convox happens to learn the URL for a private repo via a webhook, we still want to control its ability to read or write to this private repo.

To grant Convox limited, read-only access to your private repo, GitLab offers “Deploy Keys.” These are SSH keys that have read-only access to a repo, guaranteeing that a 3rd party system can clone code, but can not push any code back.

![Read-only SSH key](/images/blogimages/continuous-delivery-with-gitlab-and-convox/gitlab-deploy-key.png)*Read-only SSH key*

When you integrate GitLab with a Convox app, the next thing Convox does is generate a new SSH keypair, encrypt and save the private key, and set up a new Deploy Key with the public key.

With a webhook and deploy key, Convox can dutifully perform an automatic build and/or deploy.

### Challenge:  Secure Builds with Docker

A GitLab webhook tells Convox that there is new code that was pushed. A deploy key gives Convox a way to pull this new code. So where and how does it actually perform the build? We desire a place where:

* You are the single tenant. Your code and other Convox user’s code never reside on the same server for privacy reasons

* GitLab SSH keys are available to access a repo

* Git and SSH tools are available to clone a repo

* Docker tools are available to build new Docker images

* Docker authentication secrets are available to push new images to a registry

Your Convox Rack is a single tenant, container based runtime and is perfect for the job. See the [What Is A Rack? documentation](https://convox.com/docs/rack/) for more information about the architecture.

Rack offers a simple Build API ([docs](https://convox.com/api#!/default/post_apps_app_builds)) to create a new build from a repository URL. For the GitLab integration we extended this API to support an SSH and deploy-key based URL:

![Cram Everything Into One URL](/images/blogimages/continuous-delivery-with-gitlab-and-convox/build-url.png)*Cram Everything Into One URL*

Docker containers offer all the answers to perform the actual build. We need:

* A base image with `docker`, `git`, and `openssl` tools

* Access to the Docker daemon

* A container command with the fully-loaded GitLab URL

* A container environment with authentication to a Docker registry and the Rack API

Then we can execute a simple containerized build pipeline:

* Write SSH and Docker authentication to the container virtual filesystem

* Clone the repo from GitLab

* Checkout the commit hash

* Read the repo docker-compose.yml file

* Pull a base image

* Build a new image from the repo Dockerfile

* Tag the image with the build ID

* Push the image to the a Docker Registry

* Call back to the Rack API to set a final build success or failure status so it can deploy a successful release

![Disposable Docker Containers Are Perfect For Builds](/images/blogimages/continuous-delivery-with-gitlab-and-convox/docker-inspect.png)*Disposable Docker Containers Are Perfect For Builds*

### Challenge: Robust Deployments To AWS

The build that GitLab triggered was successful at making new artifacts. There are numerous challenges left to safely deploy this new code, but Convox eliminates as many as possible by expertly integrating AWS services:

* Virtual Private Cloud spanning 3 availability zones

* EC2 and an AutoScale Groups (ASG) with at least 3 instances

* EC2 Container Registry (ECR)

* Elastic Load Balancers (ELB)

* CloudWatch Logs for visibility

Because you have a consistent, batteries-included cluster setup with the `convox install` tool, we can relibly push new instances to ECR, update ECS, and watch our new containers roll out behind our ELB.

![Under The Hood of The EC2 Container Service](/images/blogimages/continuous-delivery-with-gitlab-and-convox/ecs.png)*Under The Hood of The EC2 Container Service*

### Conclusion

As you can tell, there is a lot coordinate between your team pushing code and delivering it as a running service in the cloud.

GitLab and Convox understand how important Continuous Delivery is and have gone to great lengths to make it available to everyone as free and open source software.

--

Please send feedback and/or questions via Twitter to [@nzoschke](https://twitter.com/nzoschke) or email to noah@convox.com.
