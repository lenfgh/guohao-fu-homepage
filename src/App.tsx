import { useEffect, useState } from "react";
import { honors, journey, news, publications, researchAreas, type Language } from "./data";

const languageStorageKey = "guohao-site-language";
const externalProps = { target: "_blank", rel: "noreferrer noopener" };

const copy = {
  zh: {
    skip: "跳到主要内容", nav: "主要导航", language: "语言选择",
    about: "简介", publications: "论文", experience: "经历", contact: "联系",
    name: "傅国浩", otherName: "Guohao Fu", affiliation: "北京理工大学 · 本科生",
    intro: "我目前就读于北京理工大学未来精工技术专业，在多元学科高等研究院与计算机学院开展科研。",
    focus: "研究兴趣包括世界动作模型、联邦多模态图学习、图基础模型与 AI for Science。我也研究如何从基因组序列预测微生物转录组。",
    research: "研究方向", researchMore: "展开研究方向", email: "邮件", blog: "博客", cv: "简历",
    photo: "傅国浩在冰瀑前", news: "近期动态", ongoing: "进行中",
    authorNote: "# 共同贡献 · * 通讯作者", abstract: "摘要与贡献",
    education: "教育与科研经历", details: "详细经历", honors: "荣誉",
    personal: "科研之外", personalText: "旅行、城市和日常记录，写在 Len 的博客里。",
    readBlog: "阅读博客", contactText: "欢迎通过邮件与我交流。", backTop: "回到顶部 ↑",
  },
  en: {
    skip: "Skip to main content", nav: "Primary navigation", language: "Language selection",
    about: "About", publications: "Publications", experience: "Experience", contact: "Contact",
    name: "Guohao Fu", otherName: "傅国浩", affiliation: "Undergraduate · Beijing Institute of Technology",
    intro: "I am an undergraduate in Future Precision Technology at Beijing Institute of Technology, conducting research with the Advanced Research Institute of Multidisciplinary Science and the School of Computer Science.",
    focus: "My interests include world action models, federated multimodal graph learning, graph foundation models, and AI for Science. I also work on predicting microbial transcriptomes from genome sequences.",
    research: "Research interests", researchMore: "Explore research interests", email: "Email", blog: "Blog", cv: "CV",
    photo: "Guohao Fu in front of an ice waterfall", news: "News", ongoing: "Ongoing",
    authorNote: "# Equal contribution · * Corresponding author", abstract: "Abstract & contributions",
    education: "Education & experience", details: "Details", honors: "Honors",
    personal: "Outside research", personalText: "Travel, cities, and everyday notes on Len’s Blog.",
    readBlog: "Read the blog", contactText: "Feel free to get in touch by email.", backTop: "Back to top ↑",
  },
} as const;

function initialLanguage(): Language {
  try { return window.localStorage.getItem(languageStorageKey) === "en" ? "en" : "zh"; }
  catch { return "zh"; }
}

export default function Home() {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const c = copy[language];

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = language === "zh" ? "傅国浩 · Guohao Fu" : "Guohao Fu · 傅国浩";
    try { window.localStorage.setItem(languageStorageKey, language); }
    catch { /* The language switch remains usable when storage is unavailable. */ }
  }, [language]);

  return (
    <div className="site" id="top" data-language={language}>
      <a className="skip-link" href="#content">{c.skip}</a>
      <header className="site-header">
        <a className="wordmark" href="#top">Guohao Fu<span aria-hidden="true">.</span></a>
        <nav aria-label={c.nav}>
          <a href="#about">{c.about}</a><a href="#publications">{c.publications}</a>
          <a href="#journey">{c.experience}</a><a href="#contact">{c.contact}</a>
        </nav>
        <div className="language-switch" role="group" aria-label={c.language}>
          <button type="button" aria-pressed={language === "zh"} onClick={() => setLanguage("zh")}>中文</button>
          <span aria-hidden="true">/</span>
          <button type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
        </div>
      </header>

      <main id="content" tabIndex={-1}>
        <section className="intro" id="about" aria-labelledby="name">
          <div className="intro-heading">
            <h1 id="name">{c.name}<span>{c.otherName}</span></h1>
            <p className="affiliation">{c.affiliation}</p>
          </div>
          <figure className="portrait">
            <img src="guohao-waterfall.jpg" alt={c.photo} width="180" height="224" fetchPriority="high" />
          </figure>
          <div className="intro-body">
            <p>{c.intro}</p><p>{c.focus}</p>
            <div className="profile-links">
              <a href="mailto:lenfu674@gmail.com">{c.email}</a>
              <a href="https://github.com/lenfgh" {...externalProps}>GitHub</a>
              <a href="guohao-fu-cv.pdf" {...externalProps}>{c.cv}<span aria-hidden="true"> ↗</span></a>
              <a href="https://lenfgh.github.io/elflen/" {...externalProps}>{c.blog}<span aria-hidden="true"> ↗</span></a>
            </div>
          </div>
          <details className="research-details" id="research">
            <summary>{c.researchMore}</summary>
            <dl aria-label={c.research}>
              {researchAreas.map((area) => <div key={area.number}><dt>{area.title[language]}</dt><dd>{area.description[language]}</dd></div>)}
            </dl>
          </details>
        </section>

        <section className="section news-section" aria-labelledby="news-title">
          <h2 id="news-title">{c.news}</h2>
          <ul className="news-list">
            {news.map((item) => <li key={item.date}>
              <span className="date">{item.date === "Ongoing" ? c.ongoing : item.date}</span>
              <div><span className="news-title">{item.title[language]}</span><p>{item.detail[language]}</p></div>
            </li>)}
          </ul>
        </section>

        <section className="section" id="publications" aria-labelledby="publications-title">
          <div className="section-label"><h2 id="publications-title">{c.publications}</h2><p>{c.authorNote}</p></div>
          <div className="publication-list">
            {publications.map((publication) => <article className="publication" key={publication.index}>
              <p className="venue">{publication.venue[language]}</p>
              <h3><a href={publication.links[0].href} {...externalProps}>{publication.title}</a></h3>
              <p className="authors">{publication.authors}</p>
              <div className="publication-actions">
                <div className="publication-links">
                  {publication.links.map((link) => <a key={link.label} href={link.href} {...externalProps}>{link.label}<span aria-hidden="true"> ↗</span></a>)}
                </div>
                <details className="abstract"><summary>{c.abstract}</summary>
                  <p>{publication.summary[language]}</p><p className="contribution">{publication.role[language]}</p>
                </details>
              </div>
            </article>)}
          </div>
        </section>

        <section className="section" id="journey" aria-labelledby="experience-title">
          <h2 id="experience-title">{c.education}</h2>
          <div className="experience-list">
            {journey.map((item) => <article className="experience" key={item.date.en}>
              <p className="date">{item.date[language]}</p><h3>{item.title[language]}</h3>
              <p className="organization">{item.org[language]}</p>
              <details><summary>{c.details}</summary><p>{item.detail[language]}</p></details>
            </article>)}
          </div>
        </section>

        <section className="section" aria-labelledby="honors-title">
          <h2 id="honors-title">{c.honors}</h2>
          <ul className="honors-list">
            {honors.map((honor) => <li key={honor.title.en}><span className="date">{honor.year}</span><div><h3>{honor.title[language]}</h3><p>{honor.detail[language]}</p></div></li>)}
          </ul>
        </section>

        <section className="section personal-section" aria-labelledby="personal-title">
          <h2 id="personal-title">{c.personal}</h2>
          <div className="personal-note">
            <img src="len-startrails.jpg" alt="" width="160" height="96" loading="lazy" />
            <div><p>{c.personalText}</p><a href="https://lenfgh.github.io/elflen/" {...externalProps}>{c.readBlog}<span aria-hidden="true"> ↗</span></a></div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">{c.contact}</h2>
          <div><p>{c.contactText}</p><a className="email-link" href="mailto:lenfu674@gmail.com">lenfu674@gmail.com</a></div>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} Guohao Fu</span><a href="#top">{c.backTop}</a></footer>
    </div>
  );
}
