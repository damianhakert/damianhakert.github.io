---
layout: markdown_page
title: Security
---

- [Security of GitLab by Being an Open-Source Product](#open-source-security)
- [GitLab Development Guidelines](#gitlab-development-guidelines)
- [Common Security Related Questions for Enterprises](#common-security-related-questions)
   - [Governance](#governance)
   - [Software Development Life Cycle (SDLC)](#sdlc)
   - [Training](#training)
   - [Validation](#validation)
   - [Security Response](#security-response)
- [Business Continuity Plan](#business-continuity-plan)




## Security of GitLab by Being an Open-Source Product<a name="open-source-security"></a>

GitLab CE is open source and has over 700 contributors.
This means there have been over 700 pairs of eyes looking at the GitLab CE source code.
GitLab EE is open-core, which means the source code is also open for inspection to our customers.

## GitLab Development Guidelines<a name="gitlab-development-guidelines"></a>

* [Guidelines for shell commands in the GitLab codebase](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/development/shell_commands.md)
* For community contributions, we enforce [style guides](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md#style-guides)
* In addition, both for community contributions and for internal development, we use [brakeman](http://brakemanscanner.org/) and [RuboCop](https://github.com/bbatsov/rubocop) run by GitLab CI.
* We engage security experts to do white box testing such as fault injection (manual), penetration testing (manual) and vulnerabilities testing (both automatic, and manual)

GitLab also has a [responsible disclosure program](https://about.gitlab.com/disclosure/).

## Common Security Related Questions for Enterprises<a name="common-security-related-questions"></a>

### Governance<a name="governance"></a>

1. Do you maintain a quality management system (QMS) approved by management?
In lieu of a formal and static QMS, GitLab has a dynamic and responsive approach to quality management.
Does your quality management system (QMS) include coverage for software application security principles?
   - YES

1. Is quality management system (QMS) content published and communicated to all relevant employees?
   - YES.

1. Is quality management system (QMS) content reviewed and updated (if appropriate) at least once per year?
   - It is considered a constant Work In Progress; and updated almost daily in small increments.

1. Is there defined management oversight who is responsible for application quality and security reporting & signoff?
   - YES. See our [team page](https://about.gitlab.com/team/)  (search for "maintainer"). Also see [code review guidelines](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/development/code_review.md) which mentions the endbosses, and stresses team-wide code review.

1. Is access to and maintenance of applications, systems, network components (including routers, databases, firewalls, voice communications servers, voice recording servers, etc), operating systems, virtualization components, hypervisors, or other information objects restricted to authorized personnel only?
   - YES

1. Is access to and maintenance of applications, systems, network components (including routers, firewalls, voice communications servers, voice recording servers, voice response units (VRU) etc), operating systems, virtualization components, hypervisors, or other information objects granted based upon need-to-know job function?
   - YES

1. For all IT systems including but not limited to servers, routers, switches, firewalls, databases, and external social spaces, is management approval required prior to creating all user and privileged accounts (e.g., system or security administrator)?
   - YES

1. For all IT systems including but not limited to servers, routers, switches, firewalls, databases are privileged accounts (e.g., system or security administrator) logged at all times and reviewed on at least a quarterly basis?
   - YES

1. Are all user accounts (including, but not limited to, standard user, system administrator, security administrator, internal social spaces, etc) assigned to an individual employee and not shared?
   - YES

1. Are all user accounts disabled after no more than ten unsuccessful logon attempts?
   - YES

1. For all IT systems (including but not limited to servers, routers, database, switches, firewalls, external social spaces), are inactive user and privileged accounts (e.g., system administrator or security administrator) disabled after 90 days or more?
   - YES

1. Is a user's identity verified before communicating an initial/temporary password or initiating a password reset by an automated or manual process?
   - YES

1. Do application, system, and device passwords (including routers, firewalls, databases, and external social spaces) require passwords to have the following characteristics: 1. minimum length of 8 characters, 2. chosen from any acceptable character sets available on the target system, 3. includes at least one alphabetic and one numeric character.)
   - YES

1. Are passwords prevented from being displayed in clear text during user authentication or in electronic/printed reports?
   - YES

1. Are passwords/PINs sent to users utilizing a secure method (e.g. secure e-mail) and sent separately from other authentication information such as the user account?
   - YES

1. For all IT systems (including but not limited to servers, routers, databases, switches, firewalls), are user and privileged account (e.g., system or security administrator) passwords changed at least every 90 days?
   - YES

1. Are users required to authenticate prior to changing their password?
   - YES

1. Are all system, application and device password files encrypted using an industry standard encryption algorithm where technically feasible?
   - YES

1. In instances where a software token is used to access an application or system, is a password or PIN required?
   - YES

1. In instances where a software token is used to access an application or system, are stored keys and software token files encrypted using an industry standard algorithm and smartcards compliant to FIPS level 2 or above?
   - YES

1. For externally hosted environment, is there separation of administrative access between the hosting infrastructure/platform and the hosted platform and data?
   - YES

1. If user accounts are assigned to non-permanent personnel (e.g., contractors, consultants)  for troubleshooting purposes, are the accounts disabled or removed after each use?
   - YES

1. Is the retirement or replacement of encryption keys included in key management procedures when the integrity of the key has been weakened (such as departure of an employee with key knowledge) or keys are suspected of being compromised?
   - YES

1. If you use cloud services, do you ensure that confidential data or an aggregation of proprietary information that can reveal confidential information is encrypted to ensure confidentiality at rest and in transit?
   - YES

1. If you use cloud services, do you have key management procedures to manage and maintain encryption keys?
   - YES

### Software Development Life Cycle (SDLC)<a name="sdlc"></a>

1. Are there documented processes, procedures, standards and templates used in your SDLC process?
   - YES. See our [Contributing guidelines](https://about.gitlab.com/contributing/), and related documentation on [code review](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/development/code_review.md) and [development processes](https://gitlab.com/gitlab-org/gitlab-ce/tree/master/doc/development).

1. Do the materials above  include references to application security best-practices and principles being followed?
   - YES.

1. Are design and code reviews performed as part of your SDLC processes?
   - YES. See our [testing guidelines](http://doc.gitlab.com/ee/development/testing.html).

1. Are security considerations (checklists, standards and policies) referenced in the design and code review?
   - YES.

1. Is app security threat modeling performed when deemed appropriate (i.e. new or changed architectures and approaches)?
   - NO.

1. Is application code managed in a secure configuration management system with access controls?
   - YES.

1. Is there a configuration management plan and are release artifacts maintained in a configuration management system?
   - YES.

1. Are test plans and records kept that reflects the tests performed and results observed for each release?
   - YES.

1. Is security testing defined and included in the test plan for each release?
   - YES.

1. Is a release criteria defined, measured and reported on to confirm targeted release quality is achieved?
   - YES. We do manual QA testing for each monthly release and deploy all new versions on GitLab.com to be our own test subjects.

1. Are specific application security characteristics and measures part of the defined release criteria?
   - NO.

1. Do you work with third parties that may have access to your IP and sensitive data?
   - N/A w.r.t. code, as our code is all open-source (community edition) or open-core (enterprise edition).

1. If so, is access to data controlled by terms of Non-Disclosure Agreements?
   - N/A

### Training<a name="training"></a>

1. Is Internal company training available & performed commensurate with personnel roles and responsibilities?
   - YES; peer-to-peer training is commonplace.

1. Does training include security awareness?
   - YES; as applicable for the role.

1. Does training include education on policies, standards, procedures and updates when needed?
   - YES; as applicable.

1. Are personnel training plans and records kept for internal company compliance purposes?
   - Tasks and training completed during [onboarding](https://about.gitlab.com/handbook/general-onboarding/) are recorded.

### Validation<a name="validation"></a>

1. Are results from the execution of test plans reported and used to track and justify release readiness?
   - YES. We require all automated tests to pass before any official release (monthly and patch versions), and perform manual QA testing for each monthly release.

1. Does the quality assurance organization have authority to delay shipment of releases due to non-conformance reasons?
   - YES.

1. Is some form of static code scanning performed as part of the release acceptance? What tools are used?
   - YES. For example, [brakeman](https://github.com/presidentbeef/brakeman) and [bundler-audit](https://github.com/rubysec/bundler-audit) are part of our test suite to be alerted to any security issues in our dependent Ruby libraries.

1. Is some form of dynamic code scanning performed as part of the release acceptance? What tools are used?
   - YES. We use GitLab CI for this purpose.

### Security Response<a name="security-response"></a>

1. Do you have a documented company security incident response process?
   - YES. See [security documentation](https://gitlab.com/gitlab-org/release-tools/blob/master/doc/security.md) as well as details on [service level response times and priorities](https://about.gitlab.com/handbook/support/).

1. Do your maintenance releases include fixes for both quality and security related issues?
   - YES.

1. Do you provide dedicated security patches for software versions that are released and supported in the field? How?
   - YES, for the latest release and the three prior monthly releases, when applicable.

1. Is there proactive notification provided to customers and software partners (PTC)?  How?
   - YES. Notifications in the "version check" image, blog posts, tweets, and a mailing list just for security fixes.

1. Do you have a formal risk severity classification assessment approach?
   - NO.

1. Is there a specified response policy that includes the timeframe issues are to be addressed?
   - YES. See [security documentation](https://gitlab.com/gitlab-org/release-tools/blob/master/doc/security.md) as well as details on [service level response times and priorities](https://about.gitlab.com/handbook/support/).



## Business Continuity Plan<a name="business-continuity-plan"></a>

GitLab, by it's remote-only nature, is not easily affected by typical causes of business disruption, such as local failures of equipment, power supplies, telecommunications, social unrest, terrorist attacks, fire, or natural disasters. Even so, threats considered in the context of business continuity are categorized by impact of the disruption.

**P1: Outage would have immediate impact on GitLab customer / user operations**

1. Disruption of service of Azure, specifically the region in which GitLab.com and dev.gitlab.org are hosted.
   - Effect: a loss of the Azure service means that GitLab.com is not available. This affects anyone who uses GitLab.com to host their repositories. GitLab.com is also the primary server where GitLab CE and EE source code and packages are hosted.
   - Solution(s): There are many other servers across the globe where GitLab CE is readily available.
   - Effect: Security releases are developed and staged on dev.gitlab.org before being brought to production on GitLab.com; these may be lost or unavailable for the duration of the disruption.
   - Solution(s): Depending on the duration and nature of the disruption, the solution is to wait for service to be restored (minimal duration), or build a new staging server. Using VM snapshots, recovery from backup is relatively quick.

1. Unavailability of support staff in case of customer emergency.
   - Effect: emergency response times are greater than intended.
   - Solution(s): The team is distributed geographically (except during team get-togethers). Customer emergencies are handled by _any_ person who is in the [on-call rotation](/handbook/on-call). The on-call load is distributed at many levels, service engineers, production engineers, and even developers can be summoned when we have an outage or a customer incident. Emergencies also trigger automatic notifications on our internal chat system, alerting the entire company. There is also an ongoing effort to publish our [runbooks](https://gitlab.com/gitlab-com/runbooks), explaining how we manage our infrastructure and how we deal with outage cases.

1. Disruption of service of ZenDesk.
   - Effect: support workflows are disrupted. New tickets cannot be created, existing tickets cannot be responded to.
   - Solution(s): For the duration of the outage (if more than e.g. 4 hours) temporarily re-route incoming support requests to individual email accounts of members of the support team. Customers with premium support also have access to a direct chat channel.

**P2: Outage would have immediate impact on GitLab ability to continue business**

1. Malicious Software (Viruses, Worms, Trojan horses) attack.
   - Effect: depends on attack.
   - Solution(s): All the hosts in our fleet are running rkhunter every day to check for known rootkits. We get notifications whenever we detect a change in any of our hosted systems. Each case is handled manually for now.

1. Hacking or other Internet attacks.
   - Effect: depends on attack.
   - Solution(s): We log and track any access that happens on any server in the fleet using logstash/kibana at log.gitlap.com.


**P3: Outage greater than 72 hours would have impact on GitLab ability to continue to do business**

Disruption of service from Salesforce.com, Zuora
   - No failover plan currently.

**P4: Outage greater than 10 business days would have impact on GitLab ability to continue business**

Disruption of service from TriNet, NetSuite, Google (gmail)
   - No failover plan currently.

**P5: Non critical system**

Disruption of service from Egencia, or internal chat tool.
   - No failover plan currently.
