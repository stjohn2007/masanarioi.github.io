---
layout: page
permalink: /ja/publications/
title: publications
nav: false
---

<!-- _pages/publications_ja.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2>国際学会（査読付き）</h2>

{% bibliography -f papers -q @*[pubtype=international]* %}

<h2>論文誌（査読付き）</h2>

{% bibliography -f papers -q @*[pubtype=journal]* %}

<h2>ワークショップ（査読付き・非アーカイバル）</h2>

{% bibliography -f papers -q @*[pubtype=workshop]* %}

<h2>プレプリント（査読なし）</h2>

<p class="text-muted"><em>現在掲載しているプレプリントはありません。</em></p>

<h2>国内学会・研究会（査読なし）</h2>

{% bibliography -f papers -q @*[pubtype=domestic]* %}

</div>
