---
title: "Continuous Delivery of a Spring Boot application with Gitlab CI and Kubernetes"
author: Marco Lenzo
author_twitter: marco_lenzo
categories: GitLab CI
image_title: '/images/unsplash/dew-leaf.jpg'
description: "Create a Continuous Delivery pipeline in few minutes leveraging the power of Spring Boot, GitLab CI and Kubernetes."
---
{::options parse_block_html="true" /}

Continuous Integration (CI) and Continuous Delivery (CD) are increasingly popular topics among modern development teams. Together they enable a team to safely build, test and deploy the code virtually at any commit. The main benefit of these approaches is the ability to release more frequently quality code through means of automated pipelines. The tough part is building such pipelines. There is a myriad of tools available which we would need to choose, learn, install, integrate, and maintain. 

Recently, I literally fell in love with [GitLab](https://gitlab.com/)! It offers a complete ecosystem of tools which enable us to create an automated pipeline in minutes! From source control to issue tracking and CI, we find everything under one roof fully integrated and ready for use.

In this tutorial, we will create a [Spring Boot](https://projects.spring.io/spring-boot/) application built, tested, and deployed with [GitLab CI](https://about.gitlab.com/gitlab-ci/) on a [Kubernetes](http://kubernetes.io/) cluster. Spring Boot is the leading [microservice chassis](http://microservices.io/patterns/microservice-chassis.html) for Java. It allows a developer to build a production-grade stand-alone application with minimal configuration, reducing drastically the learning curve required for using the [Spring Framework](https://spring.io/). Kubernetes is an open-source container orchestrator inspired by [Google Borg](http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43438.pdf) that schedules, scales and manages containerized applications.

## Create a GitLab Project

Let's start by [creating a new project](https://gitlab.com/projects/new) in GitLab named `actuator-sample`. Then we follow the command line instructions displayed in the project's home page to clone the repository on our machine and perform the first commit.

```
git clone git@gitlab.com:marcolenzo/actuator-sample.git
cd actuator-sample
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

Always replace `marcolenzo` with your own GitLab username whenever copying a snippet of code from this tutorial.
{: .alert .alert-info}

## Create a Spring Boot application

To bootstrap the Spring Boot application we navigate to the [Spring Initializr](https://start.spring.io) web page and generate a **Maven Project** with the pre-selected Spring Boot **Version**. We leave `com.example` as **Group** and set `actuator-sample` as the **Artifact** name. We select the `Web` and `Actuator` dependencies and generate the project. A Zip file will be downloaded to our machine.

![Spring Initializr](/images/blogimages/continuous-delivery-of-a-spring-boot-application-with-gitlab-ci-and-kubernetes/initializr.png){: .shadow}

We can now unzip the archive and launch the application immediately. Spring Initializr has already created everything for us. We just need to have a Java JDK 1.7 or later installed on our machine and the `JAVA_HOME` environment variable set accordingly. 

```shell
marcol@ubuntu-workstation:~/git/actuator-sample$ unzip ~/Downloads/actuator-sample.zip -d ../
marcol@ubuntu-workstation:~/git/actuator-sample$ ./mvnw spring-boot:run

[...]

2016-12-02 22:41:14.376  INFO 10882 --- [           main] s.b.c.e.t.TomcatEmbeddedServletContainer : Tomcat started on port(s): 8080 (http)
2016-12-02 22:41:14.420  INFO 10882 --- [           main] com.example.ActuatorSampleApplication    : Started ActuatorSampleApplication in 17.924 seconds (JVM running for 87.495)
```

The application is up and running and we did not write one line of code! Spring Boot is opinionated and auto-configures the application with sane default values and beans. It also scans the classpath for known dependencies and initializes them. In our case, we enjoy immediately all the production grade services offered by [Spring Actuator](http://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-endpoints.html).

```shell
marcol@ubuntu-workstation:~$ curl http://localhost:8080/health
{"status":"UP","diskSpace":{"status":"UP","total":981190307840,"free":744776503296,"threshold":10485760}}
```

If you wish to learn Spring Boot in greater detail, have a look at their [reference documentation](http://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/) and [guides](https://spring.io/guides).
{: .alert .alert-info}

It is time to commit our changes and push them to `origin`. To simplify things a bit, we commit directly on `master` without using [feature branches](https://docs.gitlab.com/ee/workflow/gitlab_flow.html#github-flow-as-a-simpler-alternative) since collaboration is not the focus of this tutorial. Later, we will use [environment branches](https://docs.gitlab.com/ee/workflow/gitlab_flow.html#environment-branches-with-gitlab-flow) as specified in the [GitLab Flow](https://docs.gitlab.com/ee/workflow/gitlab_flow.html) to selectively deploy to different environments, e.g. staging and production. If you are not familiar with the GitLab Flow, I strongly recommend you to read its documentation.

```shell
git add --all
git commit -m "Creates actuator-example application"
git push origin master
```

## Creating a Continuous Delivery Pipeline with GitLab CI

While our code is now safe on GitLab, we still need to automate its integration and deployment. We need to verify each commit with an automated build and set of tests in order to discover issues as early as possible and, if the build is successful, deploy to a target environment. Few years ago, our only option was to install, configure and maintain a CI Server like [Jenkins](https://jenkins.io/) and possibly automate our deployment with a set of bash scripts. While the number of options has grown significantly, whether hosted or on the cloud, we still need to find a way to integrate our source control system with the CI Server of our choice. 

Not anymore though! GitLab has fully integrated CI and CD Pipelines in its offering allowing us to build, test and deploy our code with ease.

For the purpose of this tutorial we will deploy to the [Google Cloud Container Engine](https://cloud.google.com/container-engine/) which is a cluster management and orchestration system built on the open source [Kubernetes](http://kubernetes.io/). Kubernetes is supported by all main cloud providers and can be easily installed on any Linux server in minutes. That said we will be able to re-use this configuration virtually on any environment running Kubernetes.

Before we can proceed to the creation of the pipeline, we need to add a couple of files to our repository to package our application as a Docker container and to describe the target deployment in Kubernetes terms.

### Packaging a Spring Boot application as a Docker container

Let's start by creating the `Dockerfile` in the root directory of our project.
```shell
FROM openjdk:8u111-jdk-alpine
VOLUME /tmp
ADD /target/actuator-sample-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
```
The `FROM` keyword defines the base layer of our container. We chose [OpenJDK](http://openjdk.java.net/) installed on [Alpine Linux](https://alpinelinux.org/) which is a lightweight Linux distribution. The `VOLUME` instruction creates a mount point with the specified name and marks it as holding externally mounted volumes from native host or other containers. `ADD` copies the executable JAR generated during the build to the container root directory. Finally `ENTRYPOINT` defines the command to execute when the container is started. Since Spring Boot produces an executable JAR with embedded Tomcat, the command to execute is simply `java -jar app.jar`. The additiona flag `java.security.edg=file:/dev/./urandom` is used to speed up the application start-up and avoid possible freezes. By default Java uses `/dev/random` to seed its `SecureRandom` class which is known to block if its entropy pool is empty.

Time to commit.
```shell
git add Dockerfile
git commit -m "Adds Dockerfile"
git push origin master
```
### Define the Kubernetes Deployment

Let's create a file named `deployment.yml` in the root directory of our project.

```yml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: actuator-sample
spec:
  replicas: 2
  template:
    metadata:
      labels:
        app: actuator-sample
    spec:
      containers:
      - name: actuator-sample
        image: registry.gitlab.com/marcolenzo/actuator-sample
        imagePullPolicy: Always
        ports:
        - containerPort: 8080
      imagePullSecrets:
        - name: registry.gitlab.com
```
This is the definition of a Kubernetes [`Deployment`](http://kubernetes.io/docs/user-guide/deployments/) named `actuator-sample`. The `replicas` element defines the target number of [`Pods`](http://kubernetes.io/docs/user-guide/pods/). Kubernetes performs automated binpacking and self-healing of the system to comply with the deployment specifications while achieving optimal utilization of compute resources. A Pod can be composed of multiple containers. In this scenario, we only include the `actuator-sample` image stored on our private [GitLab Container Registry](https://about.gitlab.com/2016/05/23/gitlab-container-registry/). For this reason, we need to set an entry under the `imagePullSecrets` which is used to authenticate to the GitLab Container Registry.

Time to commit again and we are ready to define our GitLab CI pipeline.

```shell
git add deployment.yml
git commit -m "Adds Kubernetes Deployment definition"
git push origin master
```
### Creating the GitLab CI Pipeline

In order to make use of [Gitlab CI](https://about.gitlab.com/gitlab-ci/) we need to add the [`.gitlab-ci.yml`](https://docs.gitlab.com/ce/ci/yaml/) file to the root directory of our repository. This file is used by [GitLab Runner](https://docs.gitlab.com/ee/ci/runners/README.html) to manage our project's builds and deployments. Therein we can define an unlimited number of [Jobs](https://docs.gitlab.com/ce/ci/yaml/#jobs) and their role in the whole build lifecycle.

```yml
image: docker:latest
services:
  - docker:dind

variables:
  DOCKER_DRIVER: overlay
  SPRING_PROFILES_ACTIVE: gitlab-ci

stages:
  - build
  - package
  - deploy

maven-build:
  image: maven:3-jdk-8
  stage: build
  script: "mvn package -B"
  artifacts:
    paths:
      - target/*.jar

docker-build:
  stage: package
  script:
  - docker build -t registry.gitlab.com/marcolenzo/actuator-sample .
  - docker login -u gitlab-ci-token -p $CI_BUILD_TOKEN registry.gitlab.com
  - docker push registry.gitlab.com/marcolenzo/actuator-sample

k8s-deploy:
  image: google/cloud-sdk
  stage: deploy
  script:
  - echo "$GOOGLE_KEY" > key.json
  - gcloud auth activate-service-account --key-file key.json
  - gcloud config set compute/zone europe-west1-c
  - gcloud config set project actuator-sample
  - gcloud config set container/use_client_certificate True
  - gcloud container clusters get-credentials actuator-sample
  - kubectl delete secret registry.gitlab.com
  - kubectl create secret docker-registry registry.gitlab.com --docker-server=https://registry.gitlab.com --docker-username=marcolenzo --docker-password=$REGISTRY_PASSWD --docker-email=lenzo.marco@gmail.com
  - kubectl apply -f deployment.yml 
```

Let's break the file in pieces to understand what is going on.

#### **[Image and Services](https://docs.gitlab.com/ce/ci/yaml/#image-and-services)**

```yml
image: docker:latest
services:
  - docker:dind
```
The [GitLab Runner](https://docs.gitlab.com/ee/ci/runners/README.html) can [use Docker images](https://docs.gitlab.com/ce/ci/docker/using_docker_images.html) to support our pipelines. The `image` element defines the name of the Docker image we want to use. Valid images are those hosted in the local Docker Engine or on [Docker Hub](https://hub.docker.com/). The `services` element defines additional Docker images which should be linked to the main container. In our case the main container is a plain Docker image with a linked container enabled for running Docker in Docker.

#### **[Variables](https://docs.gitlab.com/ce/ci/yaml/#variables)**

```yml
variables:
  DOCKER_DRIVER: overlay
  SPRING_PROFILES_ACTIVE: gitlab-ci
```

This is the definition `variables` to be set on our build environment. The `DOCKER_DRIVER` variable signals the Docker Engine which storage driver to use. We use `overlay` for performance reasons. The `SPRING_PROFILES_ACTIVE` is very useful when dealing with Spring Boot applications. It activates [Spring Profiles](http://docs.spring.io/autorepo/docs/spring-boot/current/reference/html/boot-features-profiles.html) which provide a way to segregate parts of our application configuration and make it available only in certain environments. For instance, we can define different database URIs per environment, e.g. `localhost` when running on the developer machine and `mongo` when running within GitLab CI. 

#### **[Stages](https://docs.gitlab.com/ce/ci/yaml/#stages)**

```yml
stages:
  - build
  - package
  - deploy
```
The `stages` element defines the lifecycle of our build. We associate each job to one stage. All jobs within a stage are run in parallel and stages are triggered sequentially in the order we define them, i.e. the next stage is initiated only when the previous one is complete.

#### The `maven-build` job

```yml
maven-build:
  image: maven:3-jdk-8
  stage: build
  script: "mvn package -B"
  artifacts:
    paths:
      - target/*.jar
```
This is a job definition. Jobs can have any name except keywords. Have a look at the `.gitlab-ci.yml` [documentation](https://docs.gitlab.com/ce/ci/yaml/) for the complete list of keywords.

The scope of this job is to perform a [Maven](https://maven.apache.org/index.html) build. For this reason, we define the `maven:3-jdk-8` as the Docker image on which this job should execute. This image comes with Maven 3 and the Java JDK 8 pre-installed for us. 

We then specify `build` as the `stage` of this job. As mentioned early, job associated the same stage run concurrently. This is extremely useful if you need to cross-compile your application. For instance, if we wanted to build and test our application also on Java JDK 7, we could simply create another job with a different name and just use the image `maven:3-jdk-7`.

The script is a shell command to be executed by the GitLab Runner. The `mvn package -B` triggers a non-interactive Maven build up to the `package` phase. This phase is specific to the [Maven build lifecycle](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html) and it includes also the `validate`, `compile` and `test` phases. That means that our Maven project will be validated, compiled and (unit) tested as well. Tests are to be included in the `src/test/java` folder. In our specific case, Spring Initializr has already created a text which just verifies that the application context loads without errors. We are free to add as many unit tests as we like. The `package` instead creates the executable JAR.

To share the executable JAR with other jobs, we specify job `artifacts`. These are files or directories that should be attached to the build after success.

#### **The docker-build job**

```yml
docker-build:
  stage: package
  script:
  - docker build -t registry.gitlab.com/marcolenzo/actuator-sample .
  - docker login -u gitlab-ci-token -p $CI_BUILD_TOKEN registry.gitlab.com
  - docker push registry.gitlab.com/marcolenzo/actuator-sample
```

The `docker-build` job packages the application in a Docker container. We define `package` as the build `stage` since we want `maven-build` job to be executed before and have the executable JAR as an available artifact to add to our container as specified in the `Dockerfile` we created beforehand.

We then execute a typical sequence of `docker` commands which builds the container and pushes it to the GitLab Container Registry. It is interesting the use of the `$CI_BUILD_TOKEN` variable. This is a pre-defined variable which is available in our build environment for free. It is used to login to the GitLab Container Registry. For the full list of pre-defined variables, have a look at the [variables documentation](https://docs.gitlab.com/ce/ci/variables/README.html#variables).

#### **The k8s-deploy job**

This job is responsible for deploying our application to the [Google Container Engine](https://cloud.google.com/container-engine/). I purposely decided to make use of the [Google Cloud SDK](https://cloud.google.com/sdk/gcloud/) (`gcloud`) because it gives us the possibility to programmatically create and manage Google Container Engine clusters and many more products of the Google Cloud ecosystem. In this tutorial, we will simplify things a bit by creating the Google Container Engine cluster beforehand.

First, we need to create a Google Cloud Project named `actuator-sample`. Take note of the `Project ID` since this can sometimes differ from the project name we specify. Then we create a Google Container Engine cluster named `actuator-sample` as well. Choose the settings you prefer and take note of the `zone`.

![Create a container cluster](/images/blogimages/continuous-delivery-of-a-spring-boot-application-with-gitlab-ci-and-kubernetes/create-gce-cluster.png){: .shadow}

Finally we need to create a service account which is necessary to perform a non-interactive login with `gcloud`. Navigate to Google Cloud `API Manager > Credentials > Create Credentials` and create a JSON key for the `Compute Engine default service account`.

We can now analyze the configuration.

```yml
k8s-deploy:
  image: google/cloud-sdk
  stage: deploy
  script:
  - echo "$GOOGLE_KEY" > key.json # Google Cloud service account key
  - gcloud auth activate-service-account --key-file key.json
  - gcloud config set compute/zone europe-west1-c
  - gcloud config set project actuator-sample 
  - gcloud config set container/use_client_certificate True
  - gcloud container clusters get-credentials actuator-example
  - kubectl delete secret registry.gitlab.com
  - kubectl create secret docker-registry registry.gitlab.com --docker-server=https://registry.gitlab.com --docker-username=marcolenzo --docker-password=$REGISTRY_PASSWD --docker-email=lenzo.marco@gmail.com
  - kubectl apply -f deployment.yml 
```

We use the `google/cloud-sdk` image for this process since it comes preloaded with `gcloud` and all components and dependencies of the Google Cloud SDK including alpha and beta components. We obviously chose `deploy` as the `stage` since we want that our application is packaged beforehand and its container pushed to the GitLab Container Registry. Then we execute a set of scripts.

The `echo "$GOOGLE_KEY" > key.json` script injects the Google Cloud service account key in the container. `$GOOGLE_KEY` is a Secure Variable having as value the content of the Google Cloud service account key. [Secure Variables](https://docs.gitlab.com/ce/ci/variables/#user-defined-variables-secure-variables) are user defined variables that should not be shown in the `.gitlab-ci.yml`. They are set per project by navigating to `Project > Variables > Add Variable` in GitLab.

The `gcloud auth activate-service-account --key-file key.json` script performs the non-interactive authentication process. The `gcloud config set ...` scripts are selecting the target project, zone and cluster. Make sure these values correspond to those you jotted down before. The `gcloud container clusters get-credentials actuator-example` scripts downloads the `kubectl` configuration file. If we wanted to use Kubernetes on another cloud provider or custom installation, we would instead source the `kubectl` configuration by injecting the relevant `~/.kube/config` file in the container without the need of interacting with `gcloud`.

The `kubectl create secret docker-registry ...` script creates the `imagePullSecret` we had defined in the `deployment.yml`. This is used by Kubernetes to authenticate with our private GitLab Container Registry and download the container images. The `kubectl delete secret` is necessary because the Kubernetes API is lacking the `replace` operation for `docker-registry` secrets. In a real world scenario, it would be advisable to set these secrets outside the CD pipeline. Note that `$REGISTRY_PASSWD` is another Secure Variable.

Time to check if everything is in order on our cluster.

```shell
marcol@ubuntu-workstation:~$ kubectl get deployments
NAME              DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
actuator-sample   2         2         2            2           2m
marcol@ubuntu-workstation:~$ kubectl get pods
NAME                               READY     STATUS    RESTARTS   AGE
actuator-sample-3641958612-3e5xy   1/1       Running   0          2m
actuator-sample-5542343546-fr4gh   1/1       Running   0          2m
```

Deployed!


#### **Environments**

Before concluding the tutorial, we will learn about [GitLab Environments](https://docs.gitlab.com/ce/ci/environments.html) which enable us to track environments and deployments.

Let's refactor the `k8s-deploy` job and split it in two. One job will target the staging environment and the other production.

```yml
k8s-deploy-staging:
  image: google/cloud-sdk
  stage: deploy
  script:
  - echo "$GOOGLE_KEY" > key.json
  - gcloud auth activate-service-account --key-file key.json
  - gcloud config set compute/zone europe-west1-c
  - gcloud config set project actuator-sample
  - gcloud config set container/use_client_certificate True
  - gcloud container clusters get-credentials actuator-example
  - kubectl delete secret registry.gitlab.com
  - kubectl create secret docker-registry registry.gitlab.com --docker-server=https://registry.gitlab.com --docker-username=marcolenzo --docker-password=$REGISTRY_PASSWD --docker-email=lenzo.marco@gmail.com
  - kubectl apply -f deployment.yml --namespace=staging
  environment:
    name: staging
    url: https://example.staging.com
  only:
  - master

k8s-deploy-production:
  image: google/cloud-sdk
  stage: deploy
  script:
  - echo "$GOOGLE_KEY" > key.json
  - gcloud auth activate-service-account --key-file key.json
  - gcloud config set compute/zone europe-west1-c
  - gcloud config set project actuator-sample
  - gcloud config set container/use_client_certificate True
  - gcloud container clusters get-credentials actuator-example
  - kubectl delete secret registry.gitlab.com
  - kubectl create secret docker-registry registry.gitlab.com --docker-server=https://registry.gitlab.com --docker-username=marcolenzo --docker-password=$REGISTRY_PASSWD --docker-email=lenzo.marco@gmail.com
  - kubectl apply -f deployment.yml --namespace=production
  environment:
    name: production
    url: https://example.production.com
  when: manual
  only:
  - production
```

The `environment` keyword associates the job with a specific environment. The `url` element is used to generate a handy hyperlink on the GitLab Environments page from which we can access our application. The `only` keyword signals to GitLab CI that the job should be executed only when the pipeline is building the listed branches. Finally, `when: manual` is used to turn the job execution from automatic to manual. In this example, we are setting deployment to the production environments to manual. From a Kubernetes perspective, we are making use of `namespaces` to segregate the different environments. 

We commit on `master` and create the `production` branch to trigger a pipeline per environment. As previously said, we are not making use of any collaboration tool because it is out of the scope of this tutorial. In real world scenarios, we would use [Merge Requests](https://docs.gitlab.com/ee/api/merge_requests.html) to move code across branches since they work as a reviewing and gatekeeping tool.

```shell
git commit -am "Showcasing Pipelines"
git push origin master
git checkout -b production
git push origin production
```
![Pipelines](/images/blogimages/continuous-delivery-of-a-spring-boot-application-with-gitlab-ci-and-kubernetes/pipelines.png){: .shadow}

The Pipelines screen details all pipeline executions. We can gather information about the branch and the individual result of each stage. In the case of the `production` pipeline we can manually trigger the `k8s-deploy-production` job as expected. We can also download the build artifacts.

![Environments](/images/blogimages/continuous-delivery-of-a-spring-boot-application-with-gitlab-ci-and-kubernetes/environments.png){: .shadow}

Environments are listed in a separate page from where we can trigger re-deployments. By accessing the details for an environment, we can also see all the deployment history and perform rollbacks.

![Rollbacks](/images/blogimages/continuous-delivery-of-a-spring-boot-application-with-gitlab-ci-and-kubernetes/rollbacks.png){: .shadow}


## Conclusion

In this tutorial, we were able to create a [Continuous Delivery](https://en.wikipedia.org/wiki/Continuous_delivery) pipeline with ease thanks to the suite of [GitLab](https://about.gitlab.com/) products that supported us at every stage. [Spring Boot](https://projects.spring.io/spring-boot/) gave us agility by auto-configuring the application context and offering production grade services out of the box. [Kubernetes](http://kubernetes.io/) abstracted us from the compute resources and orchestration duties allowing us to define only the desired deployment state. GitLab CI was the core engine of our pipeline. Its declarative `.gitlab-ci.yml` file allowed us to declare, version and manage our pipelines while GitLab Pipelines and Environments gave us full visibility and control.

While this example is far from complete, it shows clearly the immense benefits any team or company can gain by using the unified UI of GitLab for issues, code review, CI and CD.

## About Guest Author

Marco Lenzo is a Software Architect at CCBill and PhoenixNAP always looking for the next challenge. He has expertise in transaction processing and platform as a service (PaaS). Java, Spring, Go and Kubernetes are currently his bread and butter.

<!-- closes https://gitlab.com/gitlab-com/blog-posts/issues/309 -->

<style>
  img {
    display: block;
    margin: 0 auto 20px auto;
  }
  .special-h4 {
    margin-top: 20px !important;
  }
</style>
