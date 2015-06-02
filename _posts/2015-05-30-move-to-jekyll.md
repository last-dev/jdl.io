---
layout: post
title:  Move to Jekyll
date:   2015-05-30
permalink: /move-to-jekyll
active: blog
---

I finally completed my conversion of this site to the Jekyll platform. [Jekyll](http://jekyllrb.com/) is an open source static site generator. I've talked about making this move for awhile. I found a tutorial that put everything into layman's terms for me. 

My original workflow in my previous attempts at a blog consisted of updating each file individually. For example, if I wanted to change the links in the footer of my site, I had to go and make each revision on each HTML file of my site. Not very efficient... But I didn't mind doing it because I felt as if it was strengthening my familiarity with the HTML and CSS. 

### <i>Developing Locally</i>
Woo! I was missing out big time! One of my top enjoyable features right now is that Jekyll comes with a built in development server so I can view my site and its revisions locally, before publishing to the world. Before, I would view my HTML files individually in the browser, but I couldn't interact with the site links or else they would take me out to the web. Now, I can view and navigate my entire site locally, to test the flow. 

When I'm ready to preview the site, I open Terminal on my Mac, navigate to my project folder, and type <code>jekyll serve</code>. Then I head to my browser and visit http://localhost:4000/ to view the preview. Jekyll now even has 'auto-regeneration' enabled automatically so that if I make a change to my site, all I have to do is refresh the page, instead of closing, and restarting the local server. 

### <i>Templates</i>
A second favorite feature of mine is Jekyll's template functionality. Of course most sites have a common masthead, or common footer across the pages of the site. Using Jekyll template functionality, it's extremely helpful and efficient for me to have this HTML in one location, and inherit the layout on any other page of my site. 

With templates, now when I need to change those links in my footer, or add another link in my navigation bar, I only have to edit them in my designated 'template' HTML file, and the rest of my site inherits the changes for me. 

<img class="img" style="max-width: 450px;" src="{{site.baseurl}}/img/layout.png">

In this example above, you can see my default template uses the [Liquid templating system](http://liquidmarkup.org) to have my header and footer nested in the layout. Liquid is a simple, extensible templating language that makes it easy to embed data in your templates.

In Jekyll, my post files are Markdown files. Jekyll converts the Markdown into ready-to-publish HTML. Check out the [syntax documentation for Markdown](http://daringfireball.net/projects/markdown/). 

Overall, I'm excited for this new workflow to encourage me to blog my thoughts more often. 