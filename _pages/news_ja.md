---
layout: page
title: news
permalink: /ja/news/
nav: false
---

<div class="news">
  <div class="table-responsive">
    <table class="table table-sm table-borderless">
      {% assign recent_news = site.news | sort: "date" | reverse %}
      {% for item in recent_news %}
        <tr>
          <th scope="row">{{ item.date | date: "%Y年%-m月" }}</th>
          <td>
            {% if item.ja %}
              {{ item.ja | markdownify | remove: "<p>" | remove: "</p>" }}
            {% else %}
              {{ item.content | markdownify | remove: "<p>" | remove: "</p>" }}
            {% endif %}
          </td>
        </tr>
      {% endfor %}
    </table>
  </div>
</div>
