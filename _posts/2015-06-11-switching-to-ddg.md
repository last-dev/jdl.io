---
layout: post
title: Trying Duck Duck Go Search
date: 2015-06-11
permalink: /switching-to-ddg
active: blog
---

Over the past couple years, we've seen alot of stories dealing with privacy. Therefore, I’ve been exposed to a lot of arguments about the cabilities and intentions behind some companies. 

I’ve been thinking of Google, and the sheer monopoly they have over the search and advertising industry online. I want to make it clear that I am inspired by Google’s innovation with their moon-shot ideas across the plain. I also respect Google as a research and development company, not merely a search engine or an ad seller. But, let’s try the other guy out to see how my life is effected. Ha! I've called it an experiment. I've had Duck Duck Go has my default search engine on all my devices for about 2 weeks now.

<img src="{{site.baseurl}}/img/ddg.svg" style="max-width: 350px;">

What is Duck Duck Go you ask? [Duck Duck Go](duckduckgo.com/about), DDG for short, is an Internet search engine that emphasizes protecting searchers privacy and avoiding the [filter bubble](https://en.wikipedia.org/wiki/Filter_bubble) of personalized search results. Why is that cool you ask? Well, [Ben Boyter](http://www.boyter.org/about/) answered the question beautifully:

* Privacy enabled by default. This certainly helped get traction when the NSA security revelations came around. DDG is not the only privacy conscious search engine, but certainly one that pushes it as a feature more then others. See [duckduckgo.com/privacy](https://duckduckgo.com/privacy).

* [!Bang syntax](https://duckduckgo.com/bang). This makes the cost of switching to DDG much lower then any other search engine because you are not locked in when its results are lacking.

* [Gabriel Weinberg](http://ye.gg), the founder, came up with a way to index the web for a fraction the cost of anyone else. For instance, use someone else’s index through web API’s such as Bing/Yahoo Boss. This means DDG can have an index of billions of pages without buying hundreds of machines to then crawl and index. 

* Persistence. Quite a few search engines based on [Yahoo Boss](https://developer.yahoo.com/boss/search/) and other API’s have come and gone. However, DDG continues to be worked on. Being around for 7 years gives it credibility.

* [DuckDuckHack](http://duckduckhack.com). If you are a developer, you can go to DuckDuckHack and add functionality you want. Open-source FTW!

So far in my experiement, I've had mixed results. For easy queries, DDG is great, but so is Google. When I search just mildly confusing queries, the differences are very noticeable. Google still wins when you don't know the word/term/name for something and you’re trying to describe it. I believe because every time someone searches on Google, they help make Google smarter. Every time you search, the results are largely based on what someone searched for historically and what they click. 

For example, "movie about kidnapped daughter" (I'm looking for the 2008 movie Taken, but have "forgotten" the name). Google: 3rd result. DDG: 7th result. Bing: 8th result. Why did Google link “Taken" 3rd and DDG/Bing link it 7th and 8th, respectively? They likely have all indexed the Wikipedia and IMDB pages for the movie Taken. However, Google likely ranks those links closer to the top because historically that's what users want when they searched for that phase.

Particularly, when debugging and searching development related error message I had to use the "!g" bang almost constantly. I suspect this could be related to Google knowing that I tend to search for code a lot, thus bumping related results to the top. DDG of course avoids storing context for users.

BUT! !Bangs make up for the lacking. Adding in the !bang feature for searching most of my frequent websites gives me quick access to where _exactly_ I want to go. Classics like !w for Wikipedia, !gh for GitHub, and !a for amazon. Of course, if I need Google, say for word etymologies, it's just a !g away.

The !bangs also function as bookmarks, so if I ever want to go to GitHub, I can just search !gh and it'll take me there.

Another bone I have to pick with DDG is the inability to limit search results by date. I want search results from a week ago, a month ago, a year ago. I know they have sort by date, but this just sorts by date without taking into account how relevant the result is. I suspect this will be added soon considering how popular of a feature this is on Google. 

So overall, DDG has it's upsides and it's shortcomings when it's compared to Google. Once again, using !bangs makes me swing to Google less and less for the answer. I'm going to continue my experiment and give you all an update later down the line. 