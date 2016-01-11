---
layout: markdown_page
title: "Security"
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

Q. Is access to and maintenance of applications, systems, network components (including routers, databases, firewalls, voice communications servers, voice recording servers, etc), operating systems, virtualization components, hypervisors, or other information objects restricted to authorized personnel only?  
A. YES

Q. Is access to and maintenance of applications, systems, network components (including routers, firewalls, voice communications servers, voice recording servers, voice response units (VRU) etc), operating systems, virtualization components, hypervisors, or other information objects granted based upon need-to-know job function?  
A. YES

Q. For all IT systems including but not limited to servers, routers, switches, firewalls, databases, and external social spaces, is management approval required prior to creating all user and privileged accounts (e.g., system or security administrator)?  
A. YES

Q. For all IT systems including but not limited to servers, routers, switches, firewalls, databases are privileged accounts (e.g., system or security administrator) logged at all times and reviewed on at least a quarterly basis?  
A. YES

Q. Are all user accounts (including, but not limited to, standard user, system administrator, security administrator, internal social spaces, etc) assigned to an individual employee and not shared?  
A. YES

Q. Are all user accounts disabled after no more than ten unsuccessful logon attempts?  
A. YES

Q. For all IT systems (including but not limited to servers, routers, database, switches, firewalls, external social spaces), are inactive user and privileged accounts (e.g., system administrator or security administrator) disabled after 90 days or more?  
A. YES

Q. Is a user's identity verified before communicating an initial/temporary password or initiating a password reset by an automated or manual process?  
A. YES

Q. Do application, system, and device passwords (including routers, firewalls, databases, and external social spaces) require passwords to have the following characteristics: 1. minimum length of 8 characters, 2. chosen from any acceptable character sets available on the target system, 3. includes at least one alphabetic and one numeric character.)  
A. YES

Q. Are passwords prevented from being displayed in clear text during user authentication or in electronic/printed reports?  
A. YES

Q. Are passwords/PINs sent to users utilizing a secure method (e.g. secure e-mail) and sent separately from other authentication information such as the user account?  
A. YES

Q. For all IT systems (including but not limited to servers, routers, databases, switches, firewalls), are user and privileged account (e.g., system or security administrator) passwords changed at least every 90 days?  
A. YES

Q. Are users required to authenticate prior to changing their password?  
A. YES

Q. Are all system, application and device password files encrypted using an industry standard encryption algorithm where technically feasible?  
A. YES

Q. In instances where a software token is used to access an application or system, is a password or PIN required?  
A. YES

Q. In instances where a software token is used to access an application or system, are stored keys and software token files encrypted using an industry standard algorithm and smartcards compliant to FIPS level 2 or above?  
A. YES

Q. For externally hosted environment, is there separation of administrative access between the hosting infrastructure/platform and the hosted platform and data?  
A. YES

Q. If user accounts are assigned to non-permanent personnel (e.g., contractors, consultants)  for troubleshooting purposes, are the accounts disabled or removed after each use?  
A. YES
Q. Is the retirement or replacement of encryption keys included in key management procedures when the integrity of the key has been weakened (such as departure of an employee with key knowledge) or keys are suspected of being compromised?  
A. YES

Q. If you use cloud services, do you ensure that confidential data or an aggregation of proprietary information that can reveal confidential information is encrypted to ensure confidentiality at rest and in transit?  
A. YES

Q. If you use cloud services, do you have key management procedures to manage and maintain encryption keys?  
A. YES
