---
layout: layouts/index.tmpl.js
url: /
title: Dario Ristić
subtitle: Technology Business Executive
description: Dario Ristić personal website.
tags: index
---

<header>

# [{{title}}](/)

{{subtitle}}

</header>

<section>

If you're browsing this page it means you probably wish to know more about me. Wish granted. I'm Dario and I'm a Technology and Business executive with over 15 years of experience in delivering extensive complex digital products and solutions to high-profile world wide clients.

Specializing in digital innovation and solving problems that other people avoid. I have worked in all type of environments from dark rooms, and noisy NOCs to fancy corporation. I have worked solo, in small or big teams, in globally and locally distributed remote teams, and incorporated high-stakes fast-paced startups. 

## Work
An entrepreneur who loves a challenge. Enjoys building and developing online businesses and products, finding creative solutions to problems. Vast experience in building complete businesses, from a startup to an established company phase, proves my ability to assemble high-quality teams of associates, who use technology to drive innovation and solve complex business problems today. Defining client-friendly products in collaboration with interdisciplinary teams in a completely agile work environment.

</section><section>

## Site
This site at darioristic.com is my personal website. I use it to share personal thoughts, document what I learned, plant some digital seeds, and host some  content I want to share for particular reasons. Even so, I tend to write about my profession I try to keep the tone personal on this site. Writing on this site since 2009.

</section><section>

## Selected writings - Serbian

<nav>{%- for post in search.pages("post") | reverse -%}
<a href="{{post.data.url}}">{{ post.data.title }}</a>{%- if loop.index !== loop.length -%}<br />{%- endif -%}
{%- endfor -%}</nav>

</section><section>

## Connect

I am interested in meeting new people, learning new things, and helping with interesting projects. I am happy to connect on [Linkedin](https://www.linkedin.com/in/dario-ristic/) and [X or Twitter](https://twitter.com/dario_ristic). 

To stay in touch I am looking forward to receiving an email at dario.ristic#gmail.com.
</section><section>

</section>

{% include "links.njk" %}
