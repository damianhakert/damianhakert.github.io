---
layout: markdown_page
title: "Product Marketing"
---
# Welcome to the Product Marketing Handbook  

The Product Marketing organization includes Product Marketing and Partner/Channel Product Marketing.The team consists of: 

* Amara: [Director of Product Marketing](https://about.gitlab.com/jobs/director-product-marketing/) 
* Stephane: [Product Marketing Manager - Partner and Channel Specialist](https://about.gitlab.com/jobs/product-marketing-manager-partner/) 
* Krys: [Product Marketing Manager - Enterprise Specialist](https://about.gitlab.com/jobs/product-marketing-manager/)

[Up one level to the Marketing Handbook](/handbook/marketing/)

## On this page

* [Key responsibilities](#responsibilities)
* [Priority focus areas](#priority-focus-areas)
* [Audience and Buyer Personas](#audience-buyer-persona)
* [Release management](#release-management)
* [Sales enablement](#sales-enablement)


## Product Marketing Handbooks  
* [Content marketing](/handbook/marketing/product-marketing/content-marketing/)
* [Partner marketing](/handbook/marketing/product-marketing/partner-marketing/)

## Key Responsibilities<a name="responsibilities"></a>

At the highest level, the goal of product marketing is to communicate the value of our product
or services to our target audience.

Product marketing has three primary responsibilities.

1. **Analysis**: Product marketing is responsible for researching and analyzing the market, competition, product, and customer to find unique insights that aid the sales process.
2. **Messaging**: Product marketing is responsible for defining and managing the value proposition, messaging, and positioning of new and existing products and features.
3. **Enablement**: Product marketing is responsible for listening to the sales teams to understand the challenges and opportunities they face in the sales process. Additionally, product marketing supports the sales team with collateral, training, and go-to-market strategy.


## Priority Focus Areas<a name="priority-focus-areas"></a>

* Customer Research 
* Sales Training
* Sales Enablement 
* Moving from GitLab CE to GitLab EE
* Website Messaging and Flow 

If you're interested in learning more about the specific deliverables or read more on the insights that were shared, take a look a the documented feedback in this presentation. 

<script async class="speakerdeck-embed" data-id="10e750aafa4f4680af00f134d1dc4bcd" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

## Audience and Buyer Persona<a name="audience-buyer-persona"></a>

### Audiences

Based on feedback from the sales team it seems like potential EE customers come from the following places: 

* Legacy systems: There is a Gartner report that states that 30% of enterprise development teams have move to Git and they predict that there will be a great migration to Git. The sales team has communicated that a number of prospects are looking to move off SVN. 
* DevOps transformation: There is an ongoing trend for more team to adopt DevOps principles in efforts to deliver value to customers faster. In the effort to adopt DevOps principles, we are seeing teams adopt new tooling as well. 
* Hosted git competitive switchers: There are a number of teams that already use hosted Git solutions in the workplace, they may be using GitHub Enterprise, BitBucket, Gogs, or others. Our own CE solution would fall in this group as well.  

### Buying Personas 

Within the above audiences, we assume the following personas play a role in the decision making process. There are likely more personas involved but we should focus our efforts on the audiences that we can market/sell to in a unique way. For example, we should focus on audiences that we can reach with demographic data like company size or job title to help support our marketing and sales outreach. Therefore, I suggest we focus on the following audiences. 

* Developer: This is the person who will likely use GitLab. In August 2016, we worked on [a buyer persona study](https://drive.google.com/open?id=0BxSd33hPSs-jbEpSNkFVLXlkY3c) (internal only) to understand more about our enterprise audience. We only interviewed the "lead evaluator" (i.e. the developer who is looking to find a Git solution for their team). 
* Admin: This is the person who will implement GitLab for the team to use and they are responsible for maintaining the instance and controlling permissions. 
* Manager/buyer: This person oversees the decision to buy GitLab. They likely will not be a core user but they have a vested interest in making sure that their team gets the tooling they need to be successful at work. 
* VP Level: This person is not involved in the tool selection process. Their concern is with driving business value but they will likely leave the decision for tools up to the management level as long as managers can prove to them how the solution will drive business value. 

### Product 

GitLab is an expansive product and we pack a lot of features into one product. While all of our features deliver a lot of value to prospective customers, it is often hard for them to understand all of what GitLab does. Even after they understand what our product can offer, it does not mean that they can fully adopt our full solution. Most companies, especially enterprises, already have an existing toolset in place so while they may be looking for a solution to help improve their version control and code review process, they likely already have an issue tracker or CI tool. Therefore, we need to ensure that anyone who wants to use GitLab knows that while we support the fill development lifecycle in our platform that we are also a flexible platform that can integrate with their existing tools. To communicate what GitLab does we are updating our features page to speak to key functions that people look for from development tools. 

* Repository management:  Consolidating source code and managing all people and projects from one place.  
* Version control: Effectively track and manage changes to files. 
* Project management: Planning and managing projects. 
* CI: Run tests on changes before they are merged.  
* CD: Define deploy stages and deploy to them. 
* Feedback and reporting: Track the team's contributions and progress

### Value Drivers

Value drivers were [initially discussed in this issue]( (https://gitlab.com/gitlab-com/sales/issues/32). They are the business value that enterprise buyers are looking for. They are based on pains and business objectives that prospective customers face on a daily basis (e.g. reducing costs or risks, saving time, or increasing revenue). Value drivers are not about GitLab, they are about our prospective customers and the value they are looking for. It is our job to understand their value and then communicate how GitLab can provide that value to them.

The drivers that we agreed on are: 

* Increase software/product quality: Improve version control, CI and CD practices to reduce the number of bugs.
* Increase productivity/ Reduce cycle time: Increase developer output and accelerate time to market by giving your team the best tools to work with.
* Reduce IT operational costs: Reduce the complexity and lost time of managing a number of different people, projects, and platforms.
* Reduce security and compliance risks: Developers can use the tools that help them collaborate without compromising the source code or the ability to meet strict industry requirements. 

Using the value drivers: 
* These value drivers should be how we marry our audience and product together to highlight what parts of our product each audience will care most about. For example, admins and managers would both be interested in how they can lower IT operations cost. Admins may want to know how we will help remove the overhead and managers may want to know how we can save them money by helping them get rid of some of their existing tools. 

## Release Management<a name="release-management"></a>

### Release Kickoff

The goal is to enable sales and marketing/PR to work one release ahead of the product release cycle. The proposed process to get us there is below.   

- After the kickoff meeting Job and Amara will agree on priority features
- A sister marketing issue will be created in the [marketing project](https://gitlab.com/gitlab-com/marketing) for each priority feature
- In the sister issue, the developer working on the feature will work to answer the following:
    - Who are we building the feature for
    - What pain will the feature solve
    - How will the user/team/admin benefit from having the feature (focus on measurable benefits)
    - How will this feature change a user/team/admins workflow (e.g. this used to be a 10-step process now it is 1-click)
    - What are the current limitations
- Prod. Marketing will answer the following
    - What is the competitive landscape
    - What are the key selling points
    - How will we message it

### Release Checklist 

The goal of our release checklist is to highlight what should be completed with each release.  

- Verify that the work for the last release was documented and issue was closed 
- Release issue using the `release` label was created in the [marketing project](https://gitlab.com/gitlab-com/marketing) 
- Priority features that were agreed upon in the release kickoff were mentioned in this release issue
- Priority features have been scheduled or demoed in GitLab University
- Marketing plan for priority features has been documented
- Priority features are fully documented with screenshots (align with technical writers)
- Priority features are shown on /features or updated in other website pages
- Priority features appear in the compare view on /features
- /direction is updated 
- Evaluate the opportunity to update existing screens or copy on pages that will be updated for the release
- Document changes made to the site in the release issue

## Sales Enablement<a name="sales-enablement"></a>

The goal of sales enablement is to empower the sales team with training, collateral, and go-to-market. 

### Sales Playbook

The sales playbook will contain a number of sales enablement materials. 

* Gitlab 25, 50, 100 word description
* GitLab pitch deck
* GitLab product breakdown sheet
* [Buyer persona](https://drive.google.com/open?id=0BxSd33hPSs-jbEpSNkFVLXlkY3c)
* Customer stories, testimonials, and eventual case studies
* Objection handling
* CE to EE kit: 
    * CE to EE sales tear sheet (Key selling points, messaging for features, trap-setting questions, proof points) 
    * CE to EE deck  
    * Materials for CE to EE programmatic approaches (i.e. quarterly upgrade email, webcasts, etc.)
* Templated emails 
* Site content directory (i.e. links to existing site content in a simple searchable)


### GitLab University Sales and Product Training 

GLU sales and product training is a weekly meeting open to all GitLab employees to join and learn more about our industry, product, and customers.

#### **Topics**:

- New releases (selected within the release management process)
- Existing features or experiences, at the request of GitLab team members 
- Customer stories and sales process review
- Industry and competitive research 

#### **Requesting a new topic**:
 - Create an issue in the [GLU project](https://gitlab.com/gitlab-org/University)
 - Clarify questions you would like answered 
 - Offer any examples on when the topic has come up to provide additional context
 - Assign to Amara to organize and schedule

#### **GLU presentations should follow this rough structure**:
- What is the new feature or experience
- Who did we build it for
- What pain is it solving for them
- Tell us more about the customer profile and the use cases for this feature
- Walk us through how customers will use this feature (i.e. what may change in their workflow)
- What are the measurable benefits of using this feature
- What do we know about the competitive landscape
- How are we differentiated
- Are there any current limitations the sales team should be aware of
- What documentation exists today
- Summary slide: key selling points and suggested message

#### **GLU Materials**: 

* Check out the [GLU calendar](https://docs.google.com/a/gitlab.com/spreadsheets/d/18ZouDT5HASCxztDX_a8H4zHVrTN0EkqbIkuf9SpHJsM/edit?usp=sharing) to see what's scheduled. 
* GLU slides and recordings will be stored in the Sales Google Drive in the [GitLab University folder](https://drive.google.com/a/gitlab.com/folderview?id=0B41DBToSSIG_NlNFLUEwQ2JHSVk&usp=sharing).
* All recordings that do not contain senstive information will also be shared in Gitlab's public [YouTube channel](https://www.youtube.com/channel/UCnMGQ8QHMAnVIsI3xJrihhg). 
