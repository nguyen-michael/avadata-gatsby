---
templateKey: "blog-post"
title: "Data from Kickstarter"
date: 2020-05-11T15:04:10.000Z
featuredpost: true
featuredimage: /img/outcomes-by-goal.png
description: >-
  In this analysis, our goal was to help Louise determine important factors that may 
  help her chances of success when creating a Kickstarter campaign for her new play.
tags:
  - kickstarter
  - excel
  - statistics
---

### Outcomes

In the first part of our analysis, we looked for trends related to the goal of each Kickstarter campaign. We limited our dataset to only analyze plays in order to narrow down on trends that are specific to that type of campaign. We categorized the Campaign Fundraising Goals for these plays into twelve categories, ranging from goals under $1,000, to goals over $50,000. Our findings are presented below:

![Outcomes by Goal](/img/outcomes-by-goal.png)

- This plot helps us see that campaigns with goals under \$20,000 have a higher chance of success, with 673 out of 985 projects being successful. This helps us advise Louise to keep a goal that is not too lofty in order to increase her chance at having a successful campaign.

- While there are more successes than failures in the \$35-45,000 range, the number of instances in that range are very low (9 total), and do not account for variances in the currency conversions.

- We also see that, so far, no plays have been canceled.

In the second part of our analysis, we strove to determine the best time to launch Louise's campaign based on historical data for the same genre as her project -- to accomplish this, we focused only on the "theater" category.

![Outcomes by Launch](/img/outcomes-by-launch.png)

- This plot helps us determine that the best time to launch a theater campaign is during the summer months of May and June. There are many successful campaigns that are launched in this time frame.

- On the other hand, it is clear that the worst month to start a campaign is in December.

---

### Limitations

1. We did not filter our data by country. Though we would have had a smaller data set to perform our analysis on, the inclusion of countries where Kickstarter may not be as popular or well known can skew our data. For example, the US has a 61% success rate for plays (n=671), whereas Australia had a 33% success rate (n = 15). The overall success rate for all plays is around 65%. By including countries that Louise does not plan to launch her campaign in, our analysis was not as detailed or granular as it could have been, and we may have been able to find trends that were US-specific in order to further help Louise with her project.

2. In addition, we did not convert currencies into USD. For example, there are data points from Denmark, where the currency (DKK, or the Danish Krone), is equal to $0.14 USD. The average goal among all the Danish projects was 61,785 DKK, or $8,650. However, in our analysis, most of these projects fell under our higher-dollar goal buckets, despite having a moderately low goal when converted to USD. By not converting our currencies, our analysis compares unlike datapoints, resulting in some inaccuracies that could have been prevented.

3. We did not filter out any outliers. There are multiple data points with multi-million dollar goals, all of which failed. Based on our other available data, these points are clear outliers, and could be reasonably removed as unrealistic goals, which would have increased the overall success rate and elimiated some of the skew we saw in the data.

4. We also did not analyze the blurbs written by each campaign's owner. While this is harder to quantify, we could have looked for trends among successful campaigns with regards to the quality of the description given by the owner to their potential donors. As the title of the project and the blurb describing it are all that a donor will see when deciding whether to fund a campaign, it is important that these two aspects are represented professionally in order to enhance one's chance of success.

---

### Additional Tables and Graphs to Enhance Analysis

1. Including descriptive statistics on both the Goal, as well as the Pledged amounts would have helped advise Louise on a range of goals that she should strive to be within. This, along with our plot showing Outcomes based on Goals, would have helped Louise determine the most optimal goal to set for her campaign.

2. Graphs showing the breakdown of donors, including the number of donors and the average donation size for successful campaigns could have helped Louise determine a realistic goal, and give her an idea of how to know whether her project is on track for success throughout the course of the campaign.

3. A table depicting the breakdown of successful and failed campaigns based on whether or not they were Staff Picks would have enhanced our interpretation of the data. Upon further analysis, we found that a plays had an overall success rate of 65%, but plays that were Staff Picks had a success rate of 90%. Including this in our analysis could have helped Louise understand that it would be beneficial for her to research how to get her play added to the Staff Picks, and therefore increase her chance of successfully funding it.
