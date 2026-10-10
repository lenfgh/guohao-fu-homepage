import { useEffect, useState } from "react";
import { journey, publications, type Language } from "./data";

const languageStorageKey = "guohao-site-language";
const externalProps = { target: "_blank", rel: "noreferrer noopener" };

const copy = {
  zh: {
    skip: "跳到主要内容", nav: "主要导航", language: "语言选择",
    about: "简介", publications: "论文", experience: "教育", contact: "联系",
    name: "傅国浩", otherName: "Guohao Fu", affiliation: "北京理工大学 · 本科生",
    intro: "我目前就读于北京理工大学未来精工技术专业。",
    email: "邮件", blog: "博客", cv: "简历", wechat: "微信",
    photo: "傅国浩在冰瀑前",
    authorNote: "# 共同贡献 · * 通讯作者", abstract: "摘要与贡献",
    education: "教育经历",
    contactText: "可以通过邮件或微信联系我。", backTop: "回到顶部 ↑",
  },
  en: {
    skip: "Skip to main content", nav: "Primary navigation", language: "Language selection",
    about: "About", publications: "Publications", experience: "Education", contact: "Contact",
    name: "Guohao Fu", otherName: "傅国浩", affiliation: "Undergraduate · Beijing Institute of Technology",
    intro: "I am an undergraduate in Future Precision Technology at Beijing Institute of Technology.",
    email: "Email", blog: "Blog", cv: "CV", wechat: "WeChat",
    photo: "Guohao Fu in front of an ice waterfall",
    authorNote: "# Equal contribution · * Corresponding author", abstract: "Abstract & contributions",
    education: "Education",
    contactText: "You can reach me by email or WeChat.", backTop: "Back to top ↑",
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
            <p>{c.intro}</p>
            <div className="profile-links">
              <a href="mailto:lenfu674@gmail.com">{c.email}</a>
              <a href="https://github.com/lenfgh" {...externalProps}>GitHub</a>
              <a href="guohao-fu-cv.pdf" {...externalProps}>{c.cv}<span aria-hidden="true"> ↗</span></a>
              <a href="https://lenfgh.github.io/elflen/" {...externalProps}>{c.blog}<span aria-hidden="true"> ↗</span></a>
            </div>
          </div>
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
            </article>)}
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">{c.contact}</h2>
          <div>
            <p>{c.contactText}</p>
            <dl className="contact-list">
              <div><dt>{c.email}</dt><dd><a href="mailto:lenfu674@gmail.com">lenfu674@gmail.com</a></dd></div>
              <div><dt>{c.wechat}</dt><dd><span className="wechat-id">QDZM5296</span></dd></div>
            </dl>
          </div>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} Guohao Fu</span><a href="#top">{c.backTop}</a></footer>
    </div>
  );
}
