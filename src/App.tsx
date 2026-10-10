import { useEffect, useState } from "react";
import { journey, publications, type Language } from "./data";

const languageStorageKey = "guohao-site-language";
const externalProps = { target: "_blank", rel: "noreferrer noopener" };
const publicationYears = Array.from(new Set(publications.map((paper) => paper.publishedAt.slice(0, 4))));

function Icon({ name }: { name: "mail" | "github" | "file" | "arrow" | "wechat" }) {
  if (name === "github" || name === "wechat") {
    return <span className={`icon brand-icon brand-icon-${name}`} aria-hidden="true" />;
  }
  const paths = {
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8m-8 4h5" /></>,
    arrow: <><path d="M6 18 18 6M6 6h12v12" /></>,
  };
  return <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}

const copy = {
  zh: {
    skip: "跳到主要内容", nav: "主要导航", language: "语言选择",
    about: "简介", publications: "论文", experience: "教育", contact: "联系",
    name: "傅国浩", otherName: "Guohao Fu", affiliation: "北京理工大学 · 本科生",
    email: "邮件", cv: "简历", wechat: "微信",
    photo: "傅国浩在冰瀑前",
    authorNote: "# 共同贡献 · * 通讯作者",
    education: "教育经历",
    backTop: "回到顶部 ↑",
  },
  en: {
    skip: "Skip to main content", nav: "Primary navigation", language: "Language selection",
    about: "About", publications: "Publications", experience: "Education", contact: "Contact",
    name: "Guohao Fu", otherName: "傅国浩", affiliation: "Undergraduate · Beijing Institute of Technology",
    email: "Email", cv: "CV", wechat: "WeChat",
    photo: "Guohao Fu in front of an ice waterfall",
    authorNote: "# Equal contribution · * Corresponding author",
    education: "Education",
    backTop: "Back to top ↑",
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
            <img src="guohao-waterfall.jpg" alt={c.photo} width="164" height="208" fetchPriority="high" />
          </figure>
          <div className="intro-body">
            <div className="profile-links">
              <a href="mailto:lenfu674@gmail.com"><Icon name="mail" />{c.email}</a>
              <a href="https://github.com/lenfgh" {...externalProps}><Icon name="github" />GitHub</a>
              <a href="guohao-fu-cv.pdf" {...externalProps}><Icon name="file" />{c.cv}</a>
            </div>
          </div>
        </section>

        <section className="section publications-section" id="publications" aria-labelledby="publications-title">
          <div className="section-heading"><h2 id="publications-title">{c.publications}</h2><p>{c.authorNote}</p></div>
          {publicationYears.map((year) => (
            <section className="publication-year" key={year} aria-labelledby={`year-${year}`}>
              <h3 className="year-label" id={`year-${year}`}>{year}</h3>
              <div className="publication-list">
                {publications.filter((paper) => paper.publishedAt.startsWith(year)).map((publication) => (
                  <article className="publication" key={publication.index}>
                    <h4><a href={publication.links[0].href} {...externalProps}>{publication.title}</a></h4>
                    <p className="authors">{publication.authors}</p>
                    <p className="venue">{publication.venue[language]}</p>
                    <div className="publication-actions">
                      <div className="publication-links">
                        {publication.links.map((link) => <a key={link.label} href={link.href} {...externalProps}>{link.label}<Icon name="arrow" /></a>)}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
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
            <dl className="contact-list">
              <div><dt><Icon name="mail" />{c.email}</dt><dd><a href="mailto:lenfu674@gmail.com">lenfu674@gmail.com</a></dd></div>
              <div><dt><Icon name="wechat" />{c.wechat}</dt><dd><span className="wechat-id">QDZM5296</span></dd></div>
            </dl>
          </div>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} Guohao Fu</span><a href="#top">{c.backTop}</a></footer>
    </div>
  );
}
