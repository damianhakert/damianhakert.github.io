---
layout: markdown_page
title: Security
---

## Security of GitLab by Being an Open-Source Product

GitLab CE is open source and has over 700 contributors.
This means there have been over 700 pairs of eyes looking at the GitLab CE source code.
GitLab EE is open-core, which means the source code is also open for inspection to our customers.

## GitLab Development Guidelines

* [Guidelines for shell commands in the GitLab codebase](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/development/shell_commands.md)
* For community contributions, we enforce [style guides](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md#style-guides)
* In addition, both for community contributions and for internal development, we use [brakeman](http://brakemanscanner.org/) and [RuboCop](https://github.com/bbatsov/rubocop) run by GitLab CI.
* We engage security experts to do white box testing such as fault injection (manual), penetration testing (manual) and vulnerabilities testing (both automatic, and manual)

GitLab also has a [responsible disclosure program](https://about.gitlab.com/disclosure/).

## Common Security Related Questions for Enterprises

### Governance

**Q.** Do you maintain a quality management system (QMS) approved by management?
In lieu of a formal and static QMS, GitLab has a dynamic and responsive approach to quality management.
Does your quality management system (QMS) include coverage for software application security principles?

**A.** YES


**Q.** Is quality management system (QMS) content published and communicated to all relevant employees?

**A.** Yes.  


**Q.** Is quality management system (QMS) content reviewed and updated (if appropriate) at least once per year?

**A.** It is considered a constant Work In Progress; and updated almost daily in small increments.

**Q.** Is there defined management oversight who is responsible for application quality and security reporting & signoff?

**A.** Yes. See our team page https://about.gitlab.com/team/  (search for "Merge request endboss"). Also see https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/development/code_review.md which mentions the endbosses, and stresses team-wide code review.

### Software Development Life Cycle (SDLC)

1. **Q.** Are there documented processes, procedures, standards and templates used in your SDLC process?  
**A.** Yes. See our [Contributing guidelines](https://about.gitlab.com/contributing/), and related documentation on code review and development processes: https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/development/code_review.md  and https://gitlab.com/gitlab-org/gitlab-ce/tree/master/doc/development .

1. **Q.** Do the materials above  include references to application security best-practices and principles being followed?
**A.** Yes. Also see https://about.gitlab.com/security/ for an overview.

**Q.** Are design and code reviews performed as part of your SDLC processes?
**A.** Yes. Testing guidelines are at: http://doc.gitlab.com/ee/development/testing.html

**Q.** Are security considerations (checklists, standards and policies) referenced in the design and code review?
**A.** Yes.

**Q.** Is app security threat modeling performed when deemed appropriate (i.e. new or changed architectures and approaches)?
**A.** No.

**Q.** Is application code managed in a secure configuration management system with access controls?
**A.** Yes.

**Q.** Is there a configuration management plan and are release artifacts maintained in a configuration management system?
**A.** Yes.

**Q.** Are test plans and records kept that reflects the tests performed and results observed for each release?
**A.** Yes.

**Q.** Is security testing defined and included in the test plan for each release?
**A.** Yes.

**Q.** Is a release criteria defined, measured and reported on to confirm targeted release quality is achieved?
**A.** Yes. We do manual QA testing for each monthly release and deploy all new versions on GitLab.com to be our own test subjects.

**Q.** Are specific application security characteristics and measures part of the defined release criteria?
**A.** No.

**Q.** Do you work with third parties that may have access to your IP and sensitive data?
**A.** N/A w.r.t. code, as our code is all open-source (community edition) or open-core (enterprise edition).

**Q.** If so, is access to data controlled by terms of Non-Disclosure Agreements?
**A.** N/A

### Training

**Q.** Is Internal company training available & performed commensurate with personnel roles and responsibilities?
**A.** Yes; peer-to-peer training is commonplace.

**Q.** Does training include security awareness?
**A.** Yes; as applicable for the role.

**Q.** Does training include education on policies, standards, procedures and updates when needed?
**A.** Yes; as applicable.

**Q.** Are personnel training plans and records kept for internal company compliance purposes?
**A.** No.

### Validation

**Q.** Are results from the execution of test plans reported and used to track and justify release readiness?
Yes. We require all automated tests to pass before any official release (monthly and patch versions), and perform manual QA testing for each monthly release.

**Q.** Does the quality assurance organization have authority to delay shipment of releases due to non-conformance reasons?
Yes.

**Q.** Is some form of static code scanning performed as part of the release acceptance? What tools are used?
Yes. For example, https://github.com/presidentbeef/brakeman and https://github.com/rubysec/bundler-audit are part of our test suite to be alerted to any security issues in our dependent Ruby libraries.

**Q.** Is some form of dynamic code scanning performed as part of the release acceptance? What tools are used?
No

### Security Response

**Q.** Do you have a documented company security incident response process?
**A.** Yes. See https://gitlab.com/gitlab-org/release-tools/blob/master/doc/security.md as well as https://about.gitlab.com/handbook/support/ (which details service level response times and priorities).

**Q.** Do your maintenance releases include fixes for both quality and security related issues?
**A.** Yes.

**Q.** Do you provide dedicated security patches for software versions that are released and supported in the field? How?
**A.** Yes, for the latest release and the three prior monthly releases, when applicable.

**Q.** Is there proactive notification provided to customers and software partners (PTC)?  How?
**A.** Yes. Notifications in the "version check" image, blog posts, tweets, and a mailing list just for security fixes.

**Q.** Do you have a formal risk severity classification assessment approach?
**A.** No.

**Q.** Is there a specified response policy that includes the timeframe issues are to be addressed?
**A.** Yes. https://gitlab.com/gitlab-org/release-tools/blob/master/doc/security.md as well as https://about.gitlab.com/handbook/support/ .




**Q.** Is access to and maintenance of applications, systems, network components (including routers, databases, firewalls, voice communications servers, voice recording servers, etc), operating systems, virtualization components, hypervisors, or other information objects restricted to authorized personnel only?

**A.** YES

---

**Q.** Is access to and maintenance of applications, systems, network components (including routers, firewalls, voice communications servers, voice recording servers, voice response units (VRU) etc), operating systems, virtualization components, hypervisors, or other information objects granted based upon need-to-know job function?

**A.** YES

---

**Q.** For all IT systems including but not limited to servers, routers, switches, firewalls, databases, and external social spaces, is management approval required prior to creating all user and privileged accounts (e.g., system or security administrator)?

**A.** YES

---

**Q.** For all IT systems including but not limited to servers, routers, switches, firewalls, databases are privileged accounts (e.g., system or security administrator) logged at all times and reviewed on at least a quarterly basis?

**A.** YES

---

**Q.** Are all user accounts (including, but not limited to, standard user, system administrator, security administrator, internal social spaces, etc) assigned to an individual employee and not shared?

**A.** YES

---

**Q.** Are all user accounts disabled after no more than ten unsuccessful logon attempts?

**A.** YES

---

**Q.** For all IT systems (including but not limited to servers, routers, database, switches, firewalls, external social spaces), are inactive user and privileged accounts (e.g., system administrator or security administrator) disabled after 90 days or more?

**A.** YES

---

**Q.** Is a user's identity verified before communicating an initial/temporary password or initiating a password reset by an automated or manual process?

**A.** YES

---

**Q.** Do application, system, and device passwords (including routers, firewalls, databases, and external social spaces) require passwords to have the following characteristics: 1. minimum length of 8 characters, 2. chosen from any acceptable character sets available on the target system, 3. includes at least one alphabetic and one numeric character.)

**A.** YES

---

**Q.** Are passwords prevented from being displayed in clear text during user authentication or in electronic/printed reports?

**A.** YES

---

**Q.** Are passwords/PINs sent to users utilizing a secure method (e.g. secure e-mail) and sent separately from other authentication information such as the user account?

**A.** YES

---

**Q.** For all IT systems (including but not limited to servers, routers, databases, switches, firewalls), are user and privileged account (e.g., system or security administrator) passwords changed at least every 90 days?

**A.** YES

---

**Q.** Are users required to authenticate prior to changing their password?

**A.** YES

---

**Q.** Are all system, application and device password files encrypted using an industry standard encryption algorithm where technically feasible?

**A.** YES

---

**Q.** In instances where a software token is used to access an application or system, is a password or PIN required?

**A.** YES

---

**Q.** In instances where a software token is used to access an application or system, are stored keys and software token files encrypted using an industry standard algorithm and smartcards compliant to FIPS level 2 or above?

**A.** YES

---

**Q.** For externally hosted environment, is there separation of administrative access between the hosting infrastructure/platform and the hosted platform and data?

**A.** YES

---

**Q.** If user accounts are assigned to non-permanent personnel (e.g., contractors, consultants)  for troubleshooting purposes, are the accounts disabled or removed after each use?

**A.** YES

---

**Q.** Is the retirement or replacement of encryption keys included in key management procedures when the integrity of the key has been weakened (such as departure of an employee with key knowledge) or keys are suspected of being compromised?

**A.** YES

---

**Q.** If you use cloud services, do you ensure that confidential data or an aggregation of proprietary information that can reveal confidential information is encrypted to ensure confidentiality at rest and in transit?

**A.** YES

---

**Q.** If you use cloud services, do you have key management procedures to manage and maintain encryption keys?

**A.** YES

---
