---
layout: post
title: Hosted On Github
date: 2014-01-28
permalink: /hosted-on-github
active: blog
---

Fixing my hosting and deploy process has been on my todo list for months, but somehow consistently took a backseat. I'm happy to announce I finally addressed it and am now 100% hosted on Github.

### *Why It's Awesome*
* The deploy process is fantastically simple. I just push to a gh-pages branch and it's live in seconds.
* Easy deploys mean I'm more likely to address bugs/issues in a timely manner.
* It's free (unless you want private repositories).

### *The Limitation*
Github pages only serve vanilla HTML/CSS/JS, meaning if your project requires server-side scripting or a traditional database, you're out of luck. T

### *Deploying In Style*
If your site is raw HTML/CSS/JS, deploying is as simple as merging any new changes from a working branch into the gh-pages branch and pushing. You're done. Changes to your site will be reflected almost immediately. 

### *I Love My New Workflow*
Using Github as a hosting provider is amazing. If you have projects built with vanilla HTML/CSS/JS (or that compile to static code), I strongly suggest giving [Github Pages](https://pages.github.com) a chance. Combining [version control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) with hosting seems like a no brainer in retrospect. Since version control already means pushing files to a remote server, why not use that same system to deploy the whole site to a remote server?

Faster, simpler, semi-automated deploys means I get to focus on the fun stuff like designing, writing, and coding.