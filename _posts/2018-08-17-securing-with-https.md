---
layout: post
title:  Upgrading to HTTPS
date:   2018-08-17
permalink: /upgrading-to-https
active: blog
---

I successfully converted my website over to a secure SSL connection with HTTPS. This stemmed from [Google announcing](https://blog.chromium.org/2017/04/next-steps-toward-more-connection.html) that starting with Chrome Version 62, it will flag HTTP websites as "Not Secure" in two new circumstances:

* When the user is entering data on an HTTP page
* On all HTTP pages visited in Incognito Mode

This announcement falls right into the timeline of [their plan](https://www.chromium.org/Home/chromium-security/marking-http-as-non-secure) to flag ALL HTTP websites during any circumstance as non-secure eventually.

### What is HTTPS?

Normally, when browsing the web, the URLs begin with the letters "http". HTTPS is the secure version of the protocol your browser uses when communicating with a website. The "S" in HTTPS stands for "Secure".

When a website's URL starts with HTTPS, and is typically accompanied by a green lock, that website has an SSL Certificate on it's server that your browser has deemed trustworthy. Your browser verifies the authenticity of the certificate by checking that it has not expired; it has been issued by a Certification Authority the browser trusts, and that it is being used by the website for which it has been issued.

The certificate shows that the site you're visiting is using an SSL connection. When an SSL connection is used, the information becomes unreadable to everyone except for the server you are sending the information to. This illustration below shows the flow of establishing a connection with the site you're visiting:

<img class="img" src="{{site.baseurl}}/img/ssl-howitworks.jpg">


### So trust any site with HTTPS? Got it.

Not quite buddy! HTTPS isn't fool-proof. HTTPS is specifically geared to keep your *communication* with the site secure from eavesdroppers and tampering, but offers nothing as to the security of the site itself.

You can still have a secure connection to a **MALICIOUS** site. Always evaluate the site's URL you're currently browsing to ensure it has no misspellings or extra characters. Often times malicious sites looking to steal your information will have a URL address that is super close to a legitimate website's URL name to trick you into thinking you're on the correct site at quick glance.

So, as long as the website you're on has the intended URL address of the site you purposefully are trying to visit, and that site is using HTTPS, you can feel more confident about your data protection.

### Getting Myself Set Up

I figured I might as well get acclimated with what tools are out there to make my website more secure with an SSL Certificate (even though I don't accept data from visitors as of this post). I have always heard great things about [Let's Encrypt](https://letsencrypt.org/about/) being free and a strong voice behind pushing to make the web a more secure place.

> Let’s Encrypt is a free, automated, and open certificate authority (CA), run for the public’s benefit. It is a service provided by the [Internet Security Research Group (ISRG)](https://letsencrypt.org/isrg/).

Luckily, GitHub actually [announced](https://blog.github.com/2018-05-01-github-pages-custom-domains-https/) that they were partnering with Let's Encrypt back on May 1st of this year to bring support for HTTPS to all [GitHub Pages](https://pages.github.com/).

Since my website is already setup with GitHub Pages, I simply needed to follow GitHub's [guide to secure your GitHub Page with HTTPS](https://help.github.com/articles/securing-your-github-pages-site-with-https/). They made the process super easy by allowing me to head to the settings of the repository hosting my website, and checking the box that says **Enforce HTTPS**. Bam! Now GitHub will redirect all HTTP requests to HTTPS.

I did have to make some [small adjustments in my header](https://github.com/goodkaws/jdl.io/commit/105533530d0681f38987f10b40aaa1b7584acef8) to remedy loading mixed content. The GitHub guide I linked to the previous paragraph breaks down mixed content well:

> If you enable HTTPS for your site, and your site's HTML still references images, CSS, or JavaScript over HTTP, then your site is serving mixed content, and you may have trouble loading assets. Serving mixed content also makes your site less secure.

Overall I'm happy I've made the change over to HTTPS. One day when I want to receive user email addresses from visitors for future communication, they can feel more confident that there are no snooping eyes capturing their email except for me.
