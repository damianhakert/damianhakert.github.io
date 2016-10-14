---
layout: markdown_page
title: Global Compensation Framework
---


## Compensation principles

1. We're an open organization and want to be transparent about compensation principles, while not disclosing individual compensation. We've developed a [compensation calculator](#compensation-calculator) that provides an estimate for various roles, across the globe.
1. Compensation is based on market rate for the region, your job title, and your (expected) level of performance.
1. We don't want people to select GitLab because of the compensation and we don't offer ping pong tables or free lunches. We think it is more important to offer people flexibility and freedom, see the [Top 10 reasons to work for GitLab on our culture page](/culture/#advantages/).
1. We offer [stock options](/handbook/stock-options/) for most positions.
1. We base compensation on current position and performance, not on what we paid you last month. This means 50% raises are possible, but also that there are no automatic raises, and we even sometimes (although rarely) lower compensation.
1. When your position or performance changes we'll try to adjust your pay as soon as possible: the manager should take initiative, people should not have to ask for it. But people are free to ask their manager if they think they are due for a raise.
1. The market rate depends on your metro region. When you move [you have to inform us](#relocation) and we may adjust your compensation up or down.
1. We hire across the globe but we're not location agnostic. Your timezone, the market rate in your region, and vicinity to other team members, users, customers, and partners can all be factors. For example, we may favor an applicant over another because they live in a region with a lower market rate or because we need someone in that timezone. All things being equal we will hire people in lower cost markets vs. higher cost markets.
1. As you can see from our [contracts](/handbook/contracts/), compensation is typically set at a fixed monthly rate. People on quota (account executives, account managers, and sales leadership) have variable compensation that is about 50% of their On Target Earnings (OTE). Individual contributors in the sales organization have variable compensation that is purely based on commission. Success engineers currently have a lower variable component, we're not sure how this will evolve. All other people have fixed compensation (but we do have [bonuses and incentives](/handbook/#incentives)).
1. Compensation decisions around level and experience levels and for functions not in the calculator are taken by the compensation committee<a name="compensation-committee"></a>. This committee consists of the CFO, CEO, and Senior Director of People Operations. When there is no time to coordinate with the committee the CEO can take a decision and inform the committee. When the CEO is away (e.g. vacation), the two other members of the committee can take a decision and inform the committee. Whatever the decision is, the compensation committee should be cc-ed (or bcc-ed) on the final email, so that the committee members can know that the loop was closed.

## Compensation calculator

As a natural extension of the [Compensation Principles](#compensation-principles) outlined above, and our commitment to transparency, sharing, efficiency, directness, and boring solutions (amongst other [values](/handbook/people-operations/#values)), we developed a Compensation Calculator that we are rolling out for those roles in which we have the most contributors, and thus for whom the question about "what is fair compensation" comes up most frequently.

As with all things at GitLab, the compensation calculator is a constant work in progress. Please send an email to Ernst if/when you find a big difference between what the calculator suggests vs. what market data indicates. Please make sure to include all relevant links and data.

### The formula

Your compensation = `Benchmark compensation` x `Rent Index + 25%` x `Level Factor` x `Experience Factor` x `Contract Type Factor`

where:

- `Benchmark compensation` is typically a median employee salary for the role in New York, as found on publicly available sources such as [Payscale](http://www.payscale.com) and others.
- `Rent Index` is taken from [Numbeo](https://www.numbeo.com/cost-of-living/rankings.jsp), which expresses the ratio of cost of rent in many metro areas to the average cost of rent in New York City (i.e. Rent Index in New York = 1.00). As explained in more detail below, we add 25% to this regardless of location, which reflects the fact that we hire better than median performers. If your metro area is not listed, please list the nearest one that seems comparable.
- `Level Factor` is currently defined as junior (0.8), intermediate (1.0), senior (1.2), or lead (1.4)
- `Experience Factor` falls between 80% - 120%
- `Contract Type Factor` distinguishes between employee or contractor, and can be a different factor in each country; see below for further explanation.

### How was it developed?

In developing the compensation formula above, we looked at the compensation of our team members which had been set in the past (without the formula), and found out that there was a statistically significant correlation between compensation and the factors that are now in the formula. We purposefully chose to look for correlations with metrics that are probably causal and definitely relevant in people's lives (the rent!). This also has the advantage of letting us work with data that is readily available publicly, as opposed to trying to scour the web for market compensation rates for _all_ roles in _all_ locations. Perhaps surprisingly, there was a stronger correlation between compensation and _rent index_ than with the more general _cost of living_ index available through Numbeo (or the _cost of living with rent_ index, for that matter); and so we moved ahead with the Rent Index.

It was a small step to go from the initial linear regression to picking the coefficients that are now in the formula, except that we 'discovered' that an offset was needed in the Rent Index to make things work (i.e. to have the formula 'predict' compensations that were in line with current actual compensations). As a consequence of this offset of 25%, for an employee in New York their median compensation will be 25% _higher_ than what the New York benchmark would have suggested. This probably reflects that we generally hire better than 'median' performers.

The contract type factor helps to make the distinction between an employee and a contractor for those countries where we offer both contract types. For example, a typical contractor may have to bear the costs of their own health insurance, social security taxes and so forth, leading to a higher compensation for the contractor. As another example the costs also vary for employees between countries, for example if there are more government mandated programs, this commonly leads to more costs for the employer and a lower pay for the individual. The contract type factor is meant to capture these differences.

#### Contract Type Factors

This list will be expanded as we gain more experience with the calculator and as we are able to offer employee contracts (as opposed to only contractor contracts) in various countries. Visit our [contracts page](https://about.gitlab.com/handbook/contracts/) to learn more about the different types of contracts we offer.

- Netherlands: Employee (0.8); Contractor (1.17)
- USA: Employee (1.0); Contractor (1.17)
- UK: Employee (0.9); Contractor (1.17)
