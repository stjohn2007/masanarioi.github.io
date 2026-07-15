---
layout: about
title: about
permalink: /
subtitle: <em>PhD student at Science Tokyo</em>

profile:
  align: right
  image: profile.png
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Okazaki Laboratory</p>
    <p>Institute of Science Tokyo</p>

selected_papers: false # selected publications are rendered manually below
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # news is rendered manually below
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<style>
  @media (min-width: 768px) {
    .profile {
      margin-top: -5.25rem;
    }
  }

  .about-main-sections {
    clear: both;
    padding-top: 1rem;
  }

</style>

I am a first-year PhD student in Computer Science at the [Institute of Science Tokyo](https://www.isct.ac.jp/en), and a member of the [Okazaki Laboratory](https://www.nlp.c.titech.ac.jp/index.en.html), where I work with [Prof. Naoaki Okazaki](https://www.chokkan.org/). My research interests span natural language processing and computer vision. Recently, I have been particularly interested in embodied AI, especially spatial reasoning in vision-language models and vision-language navigation for robotics. I am also a member of [Swallow-LLM](https://swallow-llm.github.io/index.en.html), where we develop Japanese large language models.

I also work as a Research Engineer at [CoeFont](https://coefont.cloud/), where I develop text-to-speech systems, and at [3keigo](https://3keigo.com/), where I develop Japanese style-transfer systems for converting casual Japanese into keigo (敬語), a polite style of Japanese.

<div class="about-main-sections">

<h2>Recent News</h2>

<div class="news">
  <div class="table-responsive">
    <table class="table table-sm table-borderless">
      {% assign recent_news = site.news | sort: "date" | reverse %}
      {% for item in recent_news limit: 5 %}
        <tr>
          <th scope="row">{{ item.date | date: "%b %-d, %Y" }}</th>
          <td>{{ item.content | markdownify | remove: "<p>" | remove: "</p>" }}</td>
        </tr>
      {% endfor %}
    </table>
  </div>
</div>

<h2>Selected Publications</h2>

<p class="text-muted"><em>Some of my earlier publications appear under the name Masanari Ohi, which was a previous romanization of my name. Both refer to myself, Masanari Oi.</em></p>

<div class="publications">

{% bibliography -f papers -q @*[selected=true]* %}

</div>

<h2>Experiences</h2>

<ul>
  <li>
    <strong>Research Assistant</strong>, Science Tokyo
    <span class="text-muted">(Apr 2026 - Present)</span>
  </li>
  <li>
    <strong>AI Engineer</strong>, <a href="https://3keigo.com/">3keigo.com</a>
    <span class="text-muted">(Apr 2023 - Present)</span>
  </li>
  <li>
    <strong>Research Engineer</strong>, <a href="https://coefont.cloud/">CoeFont</a>
    <span class="text-muted">(Oct 2021 - Present)</span>
  </li>
  <li>
    <strong>Research Assistant</strong>, The National Institute of Advanced Industrial Science and Technology (AIST)
    <span class="text-muted">(Aug 2024 - Mar 2026)</span>
  </li>
</ul>

<h2>Education</h2>

<ul>
  <li>
    <strong>Doctor of Engineering in Computer Science</strong>, Institute of Science Tokyo
    <span class="text-muted">(Apr 2026 - Present)</span>
  </li>
  <li>
    <strong>Master of Engineering in Computer Science</strong>, Institute of Science Tokyo
    <span class="text-muted">(Apr 2024 - Mar 2026)</span><br>
    <span class="text-muted">Formerly known as Tokyo Institute of Technology.</span>
  </li>
  <li>
    <strong>Bachelor of Engineering in Computer Science</strong>, Tokyo Institute of Technology
    <span class="text-muted">(Apr 2020 - Mar 2024)</span>
  </li>
</ul>

<h2>Honors</h2>

<ul>
  <li>
    <strong><a href="https://anlp.jp/nlp2026/award.html#:~:text=P9%2D7-,%E8%87%AA%E5%B7%B1%E5%9B%9E%E5%B8%B0%E6%80%A7%E3%82%92%E7%B5%84%E3%81%BF%E8%BE%BC%E3%82%93%E3%81%A0%E7%9B%B4%E6%8E%A5%E9%81%B8%E5%A5%BD%E6%9C%80%E9%81%A9%E5%8C%96,-%E5%A4%A7%E4%BA%95%20%E8%81%96%E4%B9%9F">Best Paper Award</a></strong>, The 32nd Annual Meeting of the Association for Natural Language Processing
    <span class="text-muted">(Mar 2026; Top 3 / 789 = 0.4%)</span>
  </li>
  <li>
    <strong><a href="https://www.anlp.jp/award/ronbun.html#:~:text=%E5%A4%A7%E4%BA%95%20%E8%81%96%E4%B9%9F%EF%BC%8C%E9%87%91%E5%AD%90%20%E6%AD%A3%E5%BC%98%EF%BC%8C%E5%B0%8F%E6%B1%A0%20%E9%9A%86%E6%96%97%EF%BC%8CMengsay%20Loem%EF%BC%8C%E5%B2%A1%E5%B4%8E%20%E7%9B%B4%E8%A6%B3.%20%E5%A4%A7%E8%A6%8F%E6%A8%A1%E8%A8%80%E8%AA%9E%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E8%A9%95%E4%BE%A1%E3%83%90%E3%82%A4%E3%82%A2%E3%82%B9%E3%81%AE%E5%B0%A4%E5%BA%A6%E3%81%AB%E5%9F%BA%E3%81%A5%E3%81%8F%E7%B7%A9%E5%92%8C%2C%20Vol.32%2C%20No.2%2C%20pp.%20480%2D496">Best Paper Award</a></strong>, Journal of Natural Language Processing
    <span class="text-muted">(Mar 2026; Top 2 / 33 = 6.1%)</span>
  </li>
  <li>
    <strong><a href="https://www.ai-gakkai.or.jp/about/award/jsai_award-conf/#:~:text=%E3%80%8CJUBAKU%3A%20%E6%97%A5%E6%9C%AC%E6%96%87%E5%8C%96%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E5%81%8F%E8%A6%8B%E8%A9%95%E4%BE%A1%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E6%95%B5%E5%AF%BE%E7%9A%84%E3%83%99%E3%83%B3%E3%83%81%E3%83%9E%E3%83%BC%E3%82%AF%E3%80%8D">Annual Conference Award</a></strong>, The 39th Annual Conference of the Japanese Society for Artificial Intelligence
    <span class="text-muted">(2025; Top 35 / 1178 = 3.0%)</span>
  </li>
  <li>
    <strong><a href="https://www.anlp.jp/nlp2025/award.html#:~:text=%E8%A4%87%E6%95%B0%E3%82%BF%E3%82%B9%E3%82%AF%E3%83%BB%E8%A4%87%E6%95%B0%E9%A0%85%E7%9B%AE%E3%81%AB%E8%B7%A8%E3%81%A3%E3%81%9F%E3%83%9E%E3%83%AB%E3%83%81%E3%83%A2%E3%83%BC%E3%83%80%E3%83%AB%E8%87%AA%E5%8B%95%E8%A9%95%E4%BE%A1%E6%89%8B%E6%B3%95">Committee Special Award</a></strong>, The 31st Annual Meeting of the Association for Natural Language Processing
    <span class="text-muted">(Mar 2025; Top 63 / 726 = 8.7%)</span>
  </li>
  <li>
    <strong><a href="https://www.anlp.jp/nlp2025/award.html#:~:text=%E4%B8%AD1%E4%BB%B6%EF%BC%89-,Swallow%20LLM,-%E8%97%A4%E4%BA%95%20%E4%B8%80%E5%96%9C">Language Resource Award</a></strong>, The 31st Annual Meeting of the Association for Natural Language Processing
    <span class="text-muted">(Top 1 / 42 = 2.4%)</span>
  </li>
  <li>
    <strong><a href="https://sites.google.com/sig-nl.ipsj.or.jp/sig-nl/%E6%8E%88%E8%B3%9E/outstanding#h.c9gauoc1cv4z:~:text=%E7%A0%94%E7%A9%B6%E7%99%BA%E8%A1%A8%E4%BC%9A%EF%BC%89-,LLM%E3%81%AB%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%82%92%E5%AD%A6%E7%BF%92%E3%81%95%E3%81%9B%E3%82%8B%E6%84%8F%E7%BE%A9,-%E9%BD%8B%E8%97%A4%20%E5%B9%B8%E5%8F%B2%E9%83%8E">Best Research Award</a></strong>, The 261st NL Research Presentation
    <span class="text-muted">(Sep 2024; Top 1 / 15 = 6.7%)</span>
  </li>
  <li>
    <strong><a href="https://www.anlp.jp/nlp2024/award.html#:~:text=%E5%A4%A7%E8%A6%8F%E6%A8%A1%E8%A8%80%E8%AA%9E%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E8%A9%95%E4%BE%A1%E3%83%90%E3%82%A4%E3%82%A2%E3%82%B9%E3%81%AE%E5%B0%A4%E5%BA%A6%E3%81%AB%E5%9F%BA%E3%81%A5%E3%81%8F%E7%B7%A9%E5%92%8C">Young Researcher Award</a></strong>, The 30th Annual Meeting of the Association for Natural Language Processing
    <span class="text-muted">(Mar 2024; Top 18 / 427 = 4.2%)</span>
  </li>
  <li>
    <strong><a href="https://www.anlp.jp/nlp2024/award.html#:~:text=Swallow%E3%82%B3%E3%83%BC%E3%83%91%E3%82%B9%3A%20%E6%97%A5%E6%9C%AC%E8%AA%9E%E5%A4%A7%E8%A6%8F%E6%A8%A1%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B3%E3%83%BC%E3%83%91%E3%82%B9">Outstanding Paper Award</a></strong>, The 30th Annual Meeting of the Association for Natural Language Processing
    <span class="text-muted">(Mar 2024; Top 13 / 599 = 2.1%)</span>
  </li>
  <li>
    <strong><a href="https://www.anlp.jp/nlp2024/award.html#:~:text=%E7%B6%99%E7%B6%9A%E4%BA%8B%E5%89%8D%E5%AD%A6%E7%BF%92%E3%81%AB%E3%82%88%E3%82%8B%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%81%AB%E5%BC%B7%E3%81%84%E5%A4%A7%E8%A6%8F%E6%A8%A1%E8%A8%80%E8%AA%9E%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AE%E6%A7%8B%E7%AF%89">Outstanding Paper Award</a></strong>, The 30th Annual Meeting of the Association for Natural Language Processing
    <span class="text-muted">(Mar 2024; Top 13 / 599 = 2.1%)</span>
  </li>
</ul>

<h2>Grants</h2>

<ul>
  <li>
    <strong>Science Tokyo BOOST</strong>, Institute of Science Tokyo
    <span class="text-muted">(Apr 2026 - Mar 2029)</span><br>
    Scholarship: 3,600,000 JPY per year; research funds: 300,000 JPY per year.
  </li>
  <li>
    <strong>Takenaka Scholarship</strong>, Takenaka Scholarship Foundation
    <span class="text-muted">(Apr 2021 - Mar 2029)</span><br>
    Scholarship: 1,200,000 JPY per year.
  </li>
  <li>
    <strong>Full Repayment Exemption for Outstanding Academic Achievement</strong>, Japan Student Services Organization (JASSO)
    <span class="text-muted">(Oct 2024 - Mar 2026)</span><br>
    Full exemption from repayment of a JASSO student loan.
  </li>
</ul>

<h2>Academic Service</h2>

<ul>
  <li>
    <strong>Reviewer</strong>, IEEE/ACM Transactions on Audio, Speech, and Language Processing (TASLP)
    <span class="text-muted">(2025)</span>
  </li>
  <li>
    <strong>Emergency Reviewer</strong>, ACL Rolling Review (ARR), October cycle
    <span class="text-muted">(2025)</span>
  </li>
</ul>

</div>
