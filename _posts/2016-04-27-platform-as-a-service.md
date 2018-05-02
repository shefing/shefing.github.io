---
layout: post
title:  "Platform as a Service Developer experience"
date:   2016-04-27 8:21:31
categories: paas
author: "Philippe Joseph Cohen"
description: "How the cloud had changed our development workflow"
image: "assets/paas.png"
---

The cloud is transforming the relation we have with our audience, changing the workflow of the development operation. In [Startup made in cloud]({% post_url 2016-04-11-startup-made-in-cloud %}) I've wrote about the cloud impact on general operations, such as email, communication and project management, in this post I want to share with you how [Plaform as a Service](https://en.wikipedia.org/wiki/Platform_as_a_service){:target="_blank"} and more specifically [Heroku](https://www.heroku.com/what){:target="_blank"}, changed the way we build teams, develop, deploy, support and monitor our web product.
<div style="text-align:center" markdown="1">
![](/assets/paas.png)
<br>
</div>

## Team skills
When I started developing in the 90's, we were focused on deep infrastructural expertise. Databases, Operating systems, Dynamic loading, multi-threading  were the hottest topics. But today when discussing memory management strategies to my developer team, I feel like a dinosaur. 

Today our focus in hiring is to find full stack Web developers (worth to discuss hiring methodology in a future post, isn't it?) that bring strong technology learning skills and a genuine connection to the business user stories. We do not focus anymore on expertise in issues like shared libraries loading algorithms and other low level issues. This is a great evolution since we're now focusing more on business value and less on technical infrastructures.

So today, when it comes to set up production servers, to configure databases, to ensure full redundancy, to deal properly with virtual machines, to setup disk volumes and filesystems, virtual memory, to manage access to static and dynamic files, we would need senior IT internal resources working with a reliable hosting partner that we would select. Then we would expect that each deployment will be a procedure that will require half day at best and one week at worst. 

So no worry, thanks G-d and Its smart creatures, it's not the case anymore.

## PaaS: a game changer 
I've started hearing about Heroku 4 years ago at a Salesforce conference and was impressed by the vision: automate all DevOps via [git](https://git-scm.com/){:target="_blank"} making it developer friendly. After running on Heroku for close to 3 years, I can say it changed our day in term of developer workflow, agility, productivity, DevOp and cost of operation.

### Heroku DX (Developer experience)
Heroku is a exposing the git repository interface so deploying to production is as simple as

{% highlight zsh %}
	➜ src git:(master)   git push production
{% endhighlight %}

And since we have additional systems running on Heroku, all we do to deploy selectively to each of the systems, is as simple as 
{% highlight zsh %}
	➜ src git:(develop)   git push alpha
	➜ src git:(develop)   git push beta
{% endhighlight %}

When it appeared (rarely) that a deployment caused a regression, before any thorough analysis we first rolled back:

{% highlight zsh %}
	➜ src git:(master)    heroku releases:rollback
{% endhighlight %}

There is much more to the [heroku command line](https://devcenter.heroku.com/articles/using-the-cli){:target="_blank"}, and in general the [heroku documentation](https://devcenter.heroku.com/categories/reference){:target="_blank"} is comprehensive and developer friendly. 

## Multiple environments App reviews, alpha , beta and production
With Heroku we cloned our application to have 3 systems: alpha, beta and production. Every feature, developed in a [Git pull requests](https://help.github.com/articles/using-pull-requests/){:target="_blank"} is immediately testable via [Heroku Review Apps](https://devcenter.heroku.com/articles/github-integration-review-apps){:target="_blank"}, and once validated and code reviewed, it is pushed to our alpha system where all the product stake holders can validate and demo them on realistic data. 

Upon succesful review of the alpha system, we push the new features to our beta users, using the system in real life conditions. After analyzing the feedback from them and making the required corrections, we are ready to move to production. We validate thorougly our release candidate (QA worth a separated post) and finalize the release that we push to  the production server, usually on a Sunday so we do have all the required time to create a clone system with the old version for reference, to face any unexpected data migrations issues, and to validate the new version to ensure all customers will be pleased on Monday morning to find a new release. 

All this release cycle takes 6 to 8 weeks, so our customers benefit from exciting innovations at least every other month.


<div style="text-align:center" markdown="1">
![Heroku pipeline](/assets/pipeline.png)
*Heroku pipeline*
<br>
</div>



To make this happen, we setup a simple but powerful workflow, based on [git flow](http://nvie.com/posts/a-successful-git-branching-model/){:target="_blank"} and Heroku. Features are developed in their dedicated branches and automatically deployed in App reviews. Once validated, they are merged into our integration branch `develop` and from there pushed to alpha and later to beta. Once ready for production, we merged `develop` to `master` (or first to a release branch) and push to production. 

<div style="text-align:center" markdown="1">
![Git flow](/assets/git-flow.png)
*Git flow*
<br>
</div>

Heroku made it trivial to work with tens of dev and test systems, at no costs and no efforts, directly plumbed into our github environment. I should mentionned the integration with [CircleCi](https://circleci.com){:target="_blank"} so the App review is deployed only upon successful run of the automatic tests. 
Special attention to my partner [Yehonathan](https://il.linkedin.com/in/viebel){:target="_blank"} that setup up all this and made it work as (almost) a charm.



