---
layout: page
permalink: /mmunoa
title: Maialen Muñoa
redirect_from:
  - /blog/author/mmunoa/
---

<img src="/images/profile_m-300x300.jpg" width="200"/>

<p style="text-align: center;">
Periodista<br/>
🙋‍♀️&nbsp;<a href="https://maialenmunoa.com">Puedes saber más sobre mi aquí</a>
</p>

<p style="text-align: center;">
<a href="https://twitter.com/maialenmunoa"><i class="svg-icon twitter"></i></a>
<a href="https://linkedin.com/in/maialenmunoa"><i class="svg-icon linkedin"></i></a>
</p>

##### Mis artículos en Lanalua:
{% for post in site.tags["author-mmunoa"] %}- [{{post.title}}]({{ site.baseurl }}{{ post.url }})
{% endfor %}