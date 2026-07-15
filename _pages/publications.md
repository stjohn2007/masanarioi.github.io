---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2>International Conference (peer-reviewed)</h2>

{% bibliography -f papers -q @*[pubtype=international]* %}

<h2>Journal (peer-reviewed)</h2>

{% bibliography -f papers -q @*[pubtype=journal]* %}

<h2>Workshop (peer-reviewed; non-archival)</h2>

{% bibliography -f papers -q @*[pubtype=workshop]* %}

<h2>Preprint (non-peer-reviewed)</h2>

<p class="text-muted"><em>No preprints currently listed.</em></p>

<h2>Domestic Conference and Symposium (non-peer-reviewed)</h2>

{% bibliography -f papers -q @*[pubtype=domestic]* %}

</div>
