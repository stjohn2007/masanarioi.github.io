---
layout: about
title: Ja / 日本語
display_name: 大井 聖也 (Masanari Oi)
permalink: /ja/
nav: false
nav_order: 1
subtitle: <em>東京科学大学 博士課程学生</em>

profile:
  align: right
  image: profile.png
  image_circular: false
  more_info: >
    <p>岡崎研究室</p>
    <p>東京科学大学</p>

selected_papers: false
social: true

announcements:
  enabled: false
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
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

[東京科学大学](https://www.isct.ac.jp/ja) 情報理工学院 情報工学系 博士課程1年の大井聖也です。[岡崎研究室](https://www.nlp.c.titech.ac.jp/index.ja.html) に所属しています。研究分野は自然言語処理とコンピュータビジョンです。最近は、Embodied AI、特にVision-Language Modelにおける空間推論や、ロボティクス分野におけるVision-Language Navigationに関心があります。また、[Swallow-LLM](https://swallow-llm.github.io/index.ja.html) のメンバーとして、日本語に強い大規模言語モデルの開発にも取り組んでいます。

[CoeFont](https://coefont.cloud/) ではリサーチエンジニアとして音声合成システムの研究開発を行っています。また、[3keigo](https://3keigo.com/) では、くだけた日本語を敬語に変換するスタイル変換システムの開発に取り組んでいます。

<div class="about-main-sections">

<h2>ニュース</h2>

<div class="news">
  <div class="table-responsive">
    <table class="table table-sm table-borderless">
      {% assign recent_news = site.news | sort: "date" | reverse %}
      {% for item in recent_news limit: 5 %}
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

<h2>主な発表</h2>

<p class="text-muted"><em>一部の文献では、私の名前のローマ字表記が Masanari Ohi となっています。現在は Masanari Oi を使用していますが、どちらも同一人物を指します。</em></p>

<div class="publications">

{% bibliography -f papers -q @*[selected=true]* %}

</div>

<h2>職歴</h2>

<ul>
  <li>
    <strong>リサーチアシスタント</strong>, 東京科学大学
    <span class="text-muted">(2026年4月 - 現在)</span>
  </li>
  <li>
    <strong>AIエンジニア</strong>, <a href="https://3keigo.com/">3keigo.com</a>
    <span class="text-muted">(2023年4月 - 現在)</span>
  </li>
  <li>
    <strong>リサーチエンジニア</strong>, <a href="https://coefont.cloud/">CoeFont</a>
    <span class="text-muted">(2021年10月 - 現在)</span>
  </li>
  <li>
    <strong>リサーチアシスタント</strong>, 国立研究開発法人産業技術総合研究所（産総研）
    <span class="text-muted">(2024年8月 - 2026年3月)</span>
  </li>
</ul>

<h2>学歴</h2>

<ul>
  <li>
    <strong>博士課程 情報工学系</strong>, 東京科学大学
    <span class="text-muted">(2026年4月 - 現在)</span>
  </li>
  <li>
    <strong>修士（工学） 情報工学系</strong>, 東京科学大学
    <span class="text-muted">(2024年4月 - 2026年3月)</span><br>
    <span class="text-muted">旧 東京工業大学。</span>
  </li>
  <li>
    <strong>学士（工学） 情報工学系</strong>, 東京工業大学
    <span class="text-muted">(2020年4月 - 2024年3月)</span>
  </li>
</ul>

<h2>受賞</h2>

<ul>
  <li>
    <strong><a href="https://anlp.jp/nlp2026/award.html#:~:text=P9%2D7-,%E8%87%AA%E5%B7%B1%E5%9B%9E%E5%B8%B0%E6%80%A7%E3%82%92%E7%B5%84%E3%81%BF%E8%BE%BC%E3%82%93%E3%81%A0%E7%9B%B4%E6%8E%A5%E9%81%B8%E5%A5%BD%E6%9C%80%E9%81%A9%E5%8C%96,-%E5%A4%A7%E4%BA%95%20%E8%81%96%E4%B9%9F">最優秀賞</a></strong>, 言語処理学会第32回年次大会
    <span class="text-muted">(2026年3月; Top 3 / 789 = 0.4%)</span>
  </li>
  <li>
    <strong><a href="https://www.anlp.jp/award/ronbun.html#:~:text=%E5%A4%A7%E4%BA%95%20%E8%81%96%E4%B9%9F%EF%BC%8C%E9%87%91%E5%AD%90%20%E6%AD%A3%E5%BC%98%EF%BC%8C%E5%B0%8F%E6%B1%A0%20%E9%9A%86%E6%96%97%EF%BC%8CMengsay%20Loem%EF%BC%8C%E5%B2%A1%E5%B4%8E%20%E7%9B%B4%E8%A6%B3.%20%E5%A4%A7%E8%A6%8F%E6%A8%A1%E8%A8%80%E8%AA%9E%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E8%A9%95%E4%BE%A1%E3%83%90%E3%82%A4%E3%82%A2%E3%82%B9%E3%81%AE%E5%B0%A4%E5%BA%A6%E3%81%AB%E5%9F%BA%E3%81%A5%E3%81%8F%E7%B7%A9%E5%92%8C%2C%20Vol.32%2C%20No.2%2C%20pp.%20480%2D496">最優秀論文賞</a></strong>, 自然言語処理
    <span class="text-muted">(2026年3月; Top 2 / 33 = 6.1%)</span>
  </li>
  <li>
    <strong><a href="https://www.ai-gakkai.or.jp/about/award/jsai_award-conf/#:~:text=%E3%80%8CJUBAKU%3A%20%E6%97%A5%E6%9C%AC%E6%96%87%E5%8C%96%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E5%81%8F%E8%A6%8B%E8%A9%95%E4%BE%A1%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E6%95%B5%E5%AF%BE%E7%9A%84%E3%83%99%E3%83%B3%E3%83%81%E3%83%9E%E3%83%BC%E3%82%AF%E3%80%8D">全国大会優秀賞</a></strong>, 2025年度人工知能学会全国大会（第39回）
    <span class="text-muted">(2025年; Top 35 / 1178 = 3.0%)</span>
  </li>
  <li>
    <strong><a href="https://www.anlp.jp/nlp2025/award.html#:~:text=%E8%A4%87%E6%95%B0%E3%82%BF%E3%82%B9%E3%82%AF%E3%83%BB%E8%A4%87%E6%95%B0%E9%A0%85%E7%9B%AE%E3%81%AB%E8%B7%A8%E3%81%A3%E3%81%9F%E3%83%9E%E3%83%AB%E3%83%81%E3%83%A2%E3%83%BC%E3%83%80%E3%83%AB%E8%87%AA%E5%8B%95%E8%A9%95%E4%BE%A1%E6%89%8B%E6%B3%95">委員特別賞</a></strong>, 言語処理学会第31回年次大会
    <span class="text-muted">(2025年3月; Top 63 / 726 = 8.7%)</span>
  </li>
  <li>
    <strong><a href="https://www.anlp.jp/nlp2025/award.html#:~:text=%E4%B8%AD1%E4%BB%B6%EF%BC%89-,Swallow%20LLM,-%E8%97%A4%E4%BA%95%20%E4%B8%80%E5%96%9C">言語資源賞</a></strong>, 言語処理学会第31回年次大会
    <span class="text-muted">(Top 1 / 42 = 2.4%)</span>
  </li>
  <li>
    <strong><a href="https://sites.google.com/sig-nl.ipsj.or.jp/sig-nl/%E6%8E%88%E8%B3%9E/outstanding#h.c9gauoc1cv4z:~:text=%E7%A0%94%E7%A9%B6%E7%99%BA%E8%A1%A8%E4%BC%9A%EF%BC%89-,LLM%E3%81%AB%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%82%92%E5%AD%A6%E7%BF%92%E3%81%95%E3%81%9B%E3%82%8B%E6%84%8F%E7%BE%A9,-%E9%BD%8B%E8%97%A4%20%E5%B9%B8%E5%8F%B2%E9%83%8E">優秀研究賞</a></strong>, 第261回自然言語処理研究発表会
    <span class="text-muted">(2024年9月; Top 1 / 15 = 6.7%)</span>
  </li>
  <li>
    <strong><a href="https://www.anlp.jp/nlp2024/award.html#:~:text=%E5%A4%A7%E8%A6%8F%E6%A8%A1%E8%A8%80%E8%AA%9E%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E8%A9%95%E4%BE%A1%E3%83%90%E3%82%A4%E3%82%A2%E3%82%B9%E3%81%AE%E5%B0%A4%E5%BA%A6%E3%81%AB%E5%9F%BA%E3%81%A5%E3%81%8F%E7%B7%A9%E5%92%8C">若手奨励賞</a></strong>, 言語処理学会第30回年次大会
    <span class="text-muted">(2024年3月; Top 18 / 427 = 4.2%)</span>
  </li>
  <li>
    <strong><a href="https://www.anlp.jp/nlp2024/award.html#:~:text=Swallow%E3%82%B3%E3%83%BC%E3%83%91%E3%82%B9%3A%20%E6%97%A5%E6%9C%AC%E8%AA%9E%E5%A4%A7%E8%A6%8F%E6%A8%A1%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B3%E3%83%BC%E3%83%91%E3%82%B9">優秀賞</a></strong>, 言語処理学会第30回年次大会
    <span class="text-muted">(2024年3月; Top 13 / 599 = 2.1%)</span>
  </li>
  <li>
    <strong><a href="https://www.anlp.jp/nlp2024/award.html#:~:text=%E7%B6%99%E7%B6%9A%E4%BA%8B%E5%89%8D%E5%AD%A6%E7%BF%92%E3%81%AB%E3%82%88%E3%82%8B%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%81%AB%E5%BC%B7%E3%81%84%E5%A4%A7%E8%A6%8F%E6%A8%A1%E8%A8%80%E8%AA%9E%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AE%E6%A7%8B%E7%AF%89">優秀賞</a></strong>, 言語処理学会第30回年次大会
    <span class="text-muted">(2024年3月; Top 13 / 599 = 2.1%)</span>
  </li>
</ul>

<h2>研究費・奨学金</h2>

<ul>
  <li>
    <strong>Science Tokyo BOOST</strong>, 東京科学大学
    <span class="text-muted">(2026年4月 - 2029年3月)</span><br>
    奨励費: 年額3,600,000円、研究費: 年額300,000円。
  </li>
  <li>
    <strong>竹中育英会 奨学生</strong>, 公益財団法人 竹中育英会
    <span class="text-muted">(2021年4月 - 2029年3月)</span><br>
    奨学金: 年額1,200,000円。
  </li>
  <li>
    <strong>特に優れた業績による返還免除</strong>, 日本学生支援機構（JASSO）
    <span class="text-muted">(2024年10月 - 2026年3月)</span><br>
    第一種奨学金の全額返還免除。
  </li>
</ul>

<h2>学術活動</h2>

<ul>
  <li>
    <strong>Reviewer</strong>, IEEE/ACM Transactions on Audio, Speech, and Language Processing (TASLP)
    <span class="text-muted">(2025年)</span>
  </li>
  <li>
    <strong>Emergency Reviewer</strong>, ACL Rolling Review (ARR), October cycle
    <span class="text-muted">(2025年)</span>
  </li>
</ul>

</div>
