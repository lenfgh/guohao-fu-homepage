import { useEffect, useState } from "react";

type Language = "zh" | "en";
type BilingualText = Record<Language, string>;

const languageStorageKey = "guohao-site-language";

const copy = {
  zh: {
    skip: "跳到主要内容",
    homeLabel: "傅国浩个人主页首页",
    navLabel: "主要导航",
    languageLabel: "语言选择",
    nav: ["简介", "研究", "论文", "经历", "随笔 ↗", "联系"],
    eyebrow: "联邦学习 · 图学习 · AI for Science",
    heroLead: "跨越图与模态，",
    heroEmphasis: "也跨越基因组。",
    heroIntroBefore: "我是傅国浩，北京理工大学本科生。我的研究连接",
    heroResearch: "联邦学习、多模态图学习、图基础模型",
    heroIntroMiddle: "与",
    heroBiology: "计算生物学",
    heroIntroAfter: "，希望构建既能迁移、又能在真实约束下可靠工作的学习系统。",
    viewResearch: "查看研究成果",
    emailMe: "邮件联系",
    externalLinks: "外部链接",
    profileLabel: "个人概览",
    status: "研究进行中",
    affiliation: "所属院校",
    affiliationValue: "北京理工大学",
    focus: "研究重点",
    focusValue: "联邦多模态学习",
    openTo: "期待",
    openToValue: "科研交流与合作",
    metricsLabel: "研究数据概览",
    metricLabels: ["论文与预印本", "RNA-seq 样本", "多模态图数据集", "基准方法"],
    aboutLabel: "简介",
    aboutTitle: "让模型跨过数据边界，也跨过学科边界。",
    aboutOne:
      "我目前在北京理工大学学习未来精工技术，并分别在多元学科高等研究院与计算机学院开展科研。一路从微生物转录组预测走向联邦多模态图学习，我关心的是同一件事：",
    aboutStrong: "如何从分散、异构且受约束的数据中学到可靠知识。",
    aboutTwo:
      "我的工作覆盖从数据清洗、模型实现到大规模评测与论文修订的完整流程。近期重点是联邦多模态图基础模型、任务亲和聚合，以及可迁移到科学问题中的表示学习方法。",
    quickFacts: [
      "中国 · 北京",
      "CET-4 · 592",
      "Python · PyTorch · PyG",
      "Linux · Git · LaTeX",
      "也以“Len”之名写作",
    ],
    researchLabel: "研究方向",
    researchTitle: "我正在探索什么",
    researchIntro: "聚焦连接语义、拓扑、隐私与科学发现的可迁移表示。",
    directionLabel: "研究方向",
    latestNews: "近期动态",
    newsTitle: "最近的研究进展",
    publicationsLabel: "论文",
    publicationsTitle: "代表性工作",
    authorNote: "# 共同贡献 · * 通讯作者",
    journeyLabel: "学术经历",
    journeyTitle: "教育与科研经历",
    honorsLabel: "荣誉",
    honorsTitle: "竞赛与荣誉",
    outsideLab: "科研之外",
    journalTitle: "Len 的博客",
    journalText:
      "科研之外，我也会记录旅行、城市与一些未被公式占满的时刻。旧站的星轨和“Len”被保留下来，成为这份新主页更私人的一面。",
    readJournal: "阅读随笔",
    contactLabel: "联系",
    contactTitle: "一起做严谨而有用的研究。",
    contactText: "如果你也在研究联邦学习、多模态图模型或 AI for Science，欢迎交流想法与合作机会。",
    downloadCv: "下载简历",
    footerNote: "研究属于 Guohao，随笔属于 Len。",
    backTop: "返回顶部 ↑",
  },
  en: {
    skip: "Skip to main content",
    homeLabel: "Guohao Fu personal homepage",
    navLabel: "Primary navigation",
    languageLabel: "Language selection",
    nav: ["About", "Research", "Publications", "Journey", "Journal ↗", "Contact"],
    eyebrow: "Federated Learning · Graphs · AI for Science",
    heroLead: "Learning across graphs,",
    heroEmphasis: "modalities, and genomes.",
    heroIntroBefore: "I am Guohao Fu, an undergraduate at Beijing Institute of Technology. My research connects",
    heroResearch: "federated learning, multimodal graph learning, and graph foundation models",
    heroIntroMiddle: "with",
    heroBiology: "computational biology",
    heroIntroAfter: ", with the goal of building transferable learning systems that remain reliable under real-world constraints.",
    viewResearch: "Explore my research",
    emailMe: "Email me",
    externalLinks: "External links",
    profileLabel: "Profile overview",
    status: "Researching",
    affiliation: "Affiliation",
    affiliationValue: "Beijing Institute of Technology",
    focus: "Focus",
    focusValue: "Federated multimodal learning",
    openTo: "Open to",
    openToValue: "Research collaboration",
    metricsLabel: "Research at a glance",
    metricLabels: ["papers & preprints", "RNA-seq samples", "multimodal graph datasets", "benchmark methods"],
    aboutLabel: "About",
    aboutTitle: "Crossing data boundaries — and disciplinary ones.",
    aboutOne:
      "I study Future Precision Technology at Beijing Institute of Technology and conduct research with both the Advanced Research Institute of Multidisciplinary Science and the School of Computer Science. From microbial transcriptome prediction to federated multimodal graph learning, one question connects my work: ",
    aboutStrong: "how can we learn reliable knowledge from distributed, heterogeneous, and constrained data?",
    aboutTwo:
      "My work spans the full research pipeline, from data curation and model implementation to large-scale evaluation and manuscript revision. I am currently focused on federated multimodal graph foundation models, task-affinity aggregation, and representations that transfer to scientific problems.",
    quickFacts: [
      "Beijing, China",
      "CET-4 · 592",
      "Python · PyTorch · PyG",
      "Linux · Git · LaTeX",
      "Also writing as “Len”",
    ],
    researchLabel: "Research",
    researchTitle: "What I’m exploring",
    researchIntro: "Transferable representations connecting semantics, topology, privacy, and scientific discovery.",
    directionLabel: "Research direction",
    latestNews: "Latest news",
    newsTitle: "Research, recently.",
    publicationsLabel: "Publications",
    publicationsTitle: "Selected work",
    authorNote: "# Equal contribution · * Corresponding author",
    journeyLabel: "Journey",
    journeyTitle: "Education & experience",
    honorsLabel: "Honors",
    honorsTitle: "Awards & distinctions",
    outsideLab: "Outside the lab",
    journalTitle: "Len’s Blog",
    journalText:
      "Beyond research, I write about travel, cities, and moments not entirely filled by equations. The star trails and the name “Len” from my original site remain as the more personal side of this homepage.",
    readJournal: "Read the journal",
    contactLabel: "Contact",
    contactTitle: "Let’s build something rigorous — and useful.",
    contactText: "If you are also working on federated learning, multimodal graph models, or AI for Science, I would be glad to exchange ideas and explore collaboration.",
    downloadCv: "Download CV",
    footerNote: "Research by Guohao. Notes by Len.",
    backTop: "Back to top ↑",
  },
} as const;

const researchAreas: Array<{
  number: string;
  title: BilingualText;
  description: BilingualText;
}> = [
  {
    number: "01",
    title: { zh: "联邦多模态图学习", en: "Federated Multimodal Graph Learning" },
    description: {
      zh: "在数据不出域的约束下，让视觉、文本与图结构共同学习可迁移的表示。",
      en: "Learning transferable representations jointly from vision, language, and graph structure while data remains decentralized.",
    },
  },
  {
    number: "02",
    title: { zh: "图基础模型", en: "Graph Foundation Models" },
    description: {
      zh: "研究跨数据集、跨任务的图预训练、对齐、聚合与轻量化适配方法。",
      en: "Studying graph pretraining, alignment, aggregation, and lightweight adaptation across datasets and tasks.",
    },
  },
  {
    number: "03",
    title: { zh: "AI for Science", en: "AI for Science" },
    description: {
      zh: "把表示学习与可靠评测带到真实科学问题中，而不止停留在基准数据集。",
      en: "Bringing representation learning and reliable evaluation to real scientific questions beyond benchmark datasets.",
    },
  },
  {
    number: "04",
    title: { zh: "计算生物学", en: "Computational Biology" },
    description: {
      zh: "从基因组序列与蛋白语言模型中学习微生物转录调控与表达规律。",
      en: "Learning microbial transcriptional regulation and expression patterns from genomes and protein language models.",
    },
  },
];

const publications = [
  {
    index: "01",
    mark: "TX",
    tone: "blue",
    title: "Predicting Microbial Transcriptome Using Annotated Genome Sequence",
    authors: (
      <>
        <strong>Guohao Fu</strong><sup>#</sup>, Yujing Yan<sup>#</sup>, Ziyue Zhao,
        Ye Chen<sup>*</sup>, Bin Shao<sup>#*</sup>
      </>
    ),
    venue: {
      zh: "bioRxiv, 2024 · Genome Biology 返修",
      en: "bioRxiv, 2024 · Under revision at Genome Biology",
    },
    role: { zh: "第一作者 · 共同一作", en: "First author · Co-first author" },
    summary: {
      zh: "基于 ESM2-650M 蛋白表示与 Transformer，从注释基因组预测微生物转录组；扩展生成 2,685 个微生物基因组、约 980 万个基因的表达谱。",
      en: "Predicting microbial transcriptomes from annotated genomes with ESM2-650M protein representations and a Transformer, then extending inference to 2,685 microbial genomes and about 9.8 million genes.",
    },
    links: [
      { label: "Paper", href: "https://doi.org/10.1101/2024.12.30.630741" },
      { label: "Code", href: "https://github.com/lingxusb/TXpredict" },
    ],
  },
  {
    index: "02",
    mark: "MM",
    tone: "gold",
    title: "MM-OpenFGL: A Comprehensive Benchmark for Multimodal Federated Graph Learning",
    authors: (
      <>
        Xunkai Li, Yuming Ai, Yinlin Zhu, Haodong Lu, Yi Zhang, <strong>Guohao Fu</strong>,
        Bowen Fan, Qiangqiang Dai, Rong-Hua Li, Guoren Wang
      </>
    ),
    venue: {
      zh: "ACM Multimedia 2026 主会 · 已接收（CCF-A）",
      en: "ACM Multimedia 2026 Main Track · Accepted (CCF-A)",
    },
    role: { zh: "核心参与者", en: "Core contributor" },
    summary: {
      zh: "覆盖 19 个多模态图数据集、8 类联邦模拟策略、6 个下游任务与 57 种方法的模块化评测基准。",
      en: "A modular benchmark spanning 19 multimodal graph datasets, eight federated simulation strategies, six downstream tasks, and 57 methods.",
    },
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2601.22416" }],
  },
  {
    index: "03",
    mark: "Γ",
    tone: "green",
    title: "Toward Federated Multimodal Graph Foundation Models: A Topology-Aware Multimodal Alignment Framework",
    authors: (
      <>
        Xunkai Li, <strong>Guohao Fu</strong>, Yuming Ai, Zhengyu Wu, Hongchao Qin,
        Rong-Hua Li, Guoren Wang
      </>
    ),
    venue: {
      zh: "arXiv 预印本, 2026 · 审稿中",
      en: "arXiv preprint, 2026 · Under review",
    },
    role: {
      zh: "第二作者 · 端到端实现与实验",
      en: "Second author · End-to-end implementation & experiments",
    },
    summary: {
      zh: "提出 FedGAMMA，以语义—拓扑双视角完成联邦预训练与图提示微调；在 12 个多模态图数据集上相对强基线最高提升 12.96%。",
      en: "FedGAMMA combines semantic and topological views for federated pretraining and graph-prompt tuning, improving over strong baselines by up to 12.96% across 12 multimodal graph datasets.",
    },
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2607.15687" }],
  },
];

const journey: Array<{
  date: BilingualText;
  title: BilingualText;
  org: BilingualText;
  detail: BilingualText;
}> = [
  {
    date: { zh: "2024.09 — 预计 2028", en: "Sep 2024 — Expected 2028" },
    title: { zh: "未来精工技术专业 · 本科", en: "B.Eng. in Future Precision Technology" },
    org: {
      zh: "北京理工大学 · 徐特立学院 / 未来精工技术学院",
      en: "Beijing Institute of Technology · Xu Teli School / School of Future Precision Technology",
    },
    detail: {
      zh: "代表性课程包括 C++ 程序设计（100）、大学物理 A II（100）、程序设计方法与实践（98）与材料科学中的机器学习算法与实践（97）。",
      en: "Selected coursework: C++ Programming (100), University Physics A II (100), Programming Methods and Practice (98), and Machine Learning Algorithms and Practice in Materials Science (97).",
    },
  },
  {
    date: { zh: "2024.10 — 至今", en: "Oct 2024 — Present" },
    title: {
      zh: "科研实习生 · AI for Science / 计算生物学",
      en: "Research Intern · AI for Science / Computational Biology",
    },
    org: {
      zh: "北京理工大学多元学科高等研究院 · 邵斌老师课题组",
      en: "Advanced Research Institute of Multidisciplinary Science, BIT · Bin Shao Group",
    },
    detail: {
      zh: "负责 TXpredict 的数据管线、模型训练、跨物种验证、扩展预测，以及审稿回复与多轮稿件修订。",
      en: "Responsible for TXpredict’s data pipeline, model training, cross-species validation, expanded inference, reviewer responses, and multiple rounds of manuscript revision.",
    },
  },
  {
    date: { zh: "2025.01 — 至今", en: "Jan 2025 — Present" },
    title: {
      zh: "科研实习生 · 联邦图学习 / 多模态图学习",
      en: "Research Intern · Federated / Multimodal Graph Learning",
    },
    org: {
      zh: "北京理工大学计算机学院图数据科学团队 · 李荣华教授课题组",
      en: "Graph Data Science Group, School of Computer Science, BIT · Prof. Rong-Hua Li",
    },
    detail: {
      zh: "参与 FedGAMMA、FedM3G 与 MM-OpenFGL，聚焦模型实现、统一实验流程与大规模系统评测。",
      en: "Contributing to FedGAMMA, FedM3G, and MM-OpenFGL through model implementation, unified experimental pipelines, and large-scale systematic evaluation.",
    },
  },
];

const news = [
  {
    date: "2026.07",
    title: { zh: "FedGAMMA 预印本公开", en: "FedGAMMA preprint released" },
    detail: {
      zh: "面向联邦多模态图基础模型的拓扑感知对齐框架。",
      en: "A topology-aware alignment framework for federated multimodal graph foundation models.",
    },
  },
  {
    date: "2026",
    title: {
      zh: "MM-OpenFGL 被 ACM MM 2026 接收",
      en: "MM-OpenFGL accepted at ACM MM 2026",
    },
    detail: {
      zh: "系统化多模态联邦图学习基准，覆盖 57 种方法。",
      en: "A systematic multimodal federated graph learning benchmark covering 57 methods.",
    },
  },
  {
    date: "Ongoing",
    title: { zh: "TXpredict 持续迭代", en: "TXpredict continues to evolve" },
    detail: {
      zh: "Genome Biology 返修中，并扩展到更广泛的微生物谱系。",
      en: "Under revision at Genome Biology and expanding to a broader range of microbial lineages.",
    },
  },
];

const honors = [
  {
    year: "2025",
    title: {
      zh: "第 41 届全国部分地区大学生物理竞赛",
      en: "41st Regional National College Physics Competition",
    },
    detail: { zh: "非物理类 A 组 · 一等奖", en: "Non-Physics Group A · First Prize" },
  },
  {
    year: "2025",
    title: {
      zh: "北京市大学生数学建模与计算机应用竞赛",
      en: "Beijing College Mathematical Modeling & Computer Application Competition",
    },
    detail: { zh: "北京赛区 · 二等奖", en: "Beijing Division · Second Prize" },
  },
];

const externalProps = {
  target: "_blank",
  rel: "noreferrer noopener",
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const c = copy[language];

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(languageStorageKey);
    if (savedLanguage === "zh" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    window.localStorage.setItem(languageStorageKey, language);
  }, [language]);

  return (
    <main id="top" data-language={language}>
      <a className="skip-link" href="#content">
        {c.skip}
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label={c.homeLabel}>
          <span className="brand-mark">GF</span>
          <span>
            <strong>{language === "zh" ? "傅国浩" : "Guohao Fu"}</strong>
            <small>{language === "zh" ? "Guohao Fu · Len" : "傅国浩 · Len"}</small>
          </span>
        </a>
        <nav aria-label={c.navLabel}>
          <a href="#about">{c.nav[0]}</a>
          <a href="#research">{c.nav[1]}</a>
          <a href="#publications">{c.nav[2]}</a>
          <a href="#journey">{c.nav[3]}</a>
          <a href="https://lenfgh.github.io/elflen/" {...externalProps}>{c.nav[4]}</a>
          <a href="#contact">{c.nav[5]}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" role="group" aria-label={c.languageLabel}>
            <button
              type="button"
              className={language === "zh" ? "active" : undefined}
              aria-pressed={language === "zh"}
              onClick={() => setLanguage("zh")}
            >
              中文
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={language === "en" ? "active" : undefined}
              aria-pressed={language === "en"}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
          <a className="header-cv" href="guohao-fu-cv.pdf" {...externalProps}>
            CV <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <div id="content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{c.eyebrow}</p>
            <h1 id="hero-title">
              {c.heroLead}
              <br />
              <em>{c.heroEmphasis}</em>
            </h1>
            <p className="hero-intro">
              {c.heroIntroBefore} <strong>{c.heroResearch}</strong> {c.heroIntroMiddle}{" "}
              <strong>{c.heroBiology}</strong>{c.heroIntroAfter}
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#publications">
                {c.viewResearch} <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-quiet" href="mailto:lenfu674@gmail.com">
                {c.emailMe} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-links" aria-label={c.externalLinks}>
              <a href="https://github.com/lenfgh" {...externalProps}>GitHub ↗</a>
              <a href="guohao-fu-cv.pdf" {...externalProps}>Academic CV ↗</a>
              <a href="https://lenfgh.github.io/elflen/" {...externalProps}>Len&apos;s Journal ↗</a>
            </div>
          </div>

          <aside className="profile-panel" aria-label={c.profileLabel}>
            <div className="research-portrait" aria-hidden="true">
              <div className="portrait-grid" />
              <span className="orbit orbit-one" />
              <span className="orbit orbit-two" />
              <span className="connector connector-one" />
              <span className="connector connector-two" />
              <span className="node node-one" />
              <span className="node node-two" />
              <span className="node node-three" />
              <span className="node node-four" />
              <span className="portrait-initials">GF</span>
              <span className="portrait-caption">graphs × modalities × biology</span>
            </div>
            <div className="profile-name">
              <div>
                <strong>{language === "zh" ? "傅国浩" : "Guohao Fu"}</strong>
                <span>{language === "zh" ? "Guohao Fu" : "傅国浩"}</span>
              </div>
              <span className="status-dot">{c.status}</span>
            </div>
            <dl className="profile-facts">
              <div><dt>{c.affiliation}</dt><dd>{c.affiliationValue}</dd></div>
              <div><dt>{c.focus}</dt><dd>{c.focusValue}</dd></div>
              <div><dt>{c.openTo}</dt><dd>{c.openToValue}</dd></div>
            </dl>
          </aside>
        </section>

        <section className="metrics" aria-label={c.metricsLabel}>
          {["3", "4,896", "19", "57"].map((value, index) => (
            <div key={value}>
              <strong>{value}</strong>
              <span>{c.metricLabels[index]}</span>
            </div>
          ))}
        </section>

        <section className="section split-section" id="about" aria-labelledby="about-title">
          <div className="section-label"><span>{c.aboutLabel}</span><span className="rule" /></div>
          <div className="section-body about-body">
            <h2 id="about-title">{c.aboutTitle}</h2>
            <div className="about-columns">
              <p>{c.aboutOne}<strong>{c.aboutStrong}</strong></p>
              <p>{c.aboutTwo}</p>
            </div>
            <div className="quick-facts">
              {c.quickFacts.map((fact) => <span key={fact}>{fact}</span>)}
            </div>
          </div>
        </section>

        <section className="section" id="research" aria-labelledby="research-title">
          <div className="section-heading">
            <div><p className="section-kicker">{c.researchLabel}</p><h2 id="research-title">{c.researchTitle}</h2></div>
            <p>{c.researchIntro}</p>
          </div>
          <div className="research-grid">
            {researchAreas.map((area) => (
              <article className="research-card" key={area.number}>
                <span className="card-number">{area.number}</span>
                <div>
                  <h3>{area.title[language]}</h3>
                  <p className="card-title-en">{c.directionLabel} {area.number}</p>
                  <p>{area.description[language]}</p>
                </div>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="news-band" aria-labelledby="news-title">
          <div><p className="section-kicker light">{c.latestNews}</p><h2 id="news-title">{c.newsTitle}</h2></div>
          <div className="news-items">
            {news.map((item) => (
              <article key={item.date}>
                <time>{item.date}</time>
                <h3>{item.title[language]}</h3>
                <p>{item.detail[language]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="publications" aria-labelledby="publications-title">
          <div className="section-heading publication-heading">
            <div><p className="section-kicker">{c.publicationsLabel}</p><h2 id="publications-title">{c.publicationsTitle}</h2></div>
            <p><sup>#</sup> {c.authorNote.replace("# ", "").split(" · ")[0]} · <sup>*</sup> {c.authorNote.split(" · ")[1].replace("* ", "")}</p>
          </div>
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication" key={publication.index}>
                <div className={`publication-visual ${publication.tone}`} aria-hidden="true">
                  <span className="publication-index">{publication.index}</span>
                  <span className="publication-mark">{publication.mark}</span>
                  <span className="publication-gridline" />
                </div>
                <div className="publication-content">
                  <div className="publication-meta"><span>{publication.venue[language]}</span><span>{publication.role[language]}</span></div>
                  <h3>{publication.title}</h3>
                  <p className="authors">{publication.authors}</p>
                  <p className="publication-summary">{publication.summary[language]}</p>
                  <div className="publication-links">
                    {publication.links.map((link) => (
                      <a key={link.label} href={link.href} {...externalProps}>{link.label} <span aria-hidden="true">↗</span></a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section journey-section" id="journey" aria-labelledby="journey-title">
          <div className="section-label"><span>{c.journeyLabel}</span><span className="rule" /></div>
          <div className="section-body">
            <h2 id="journey-title">{c.journeyTitle}</h2>
            <div className="timeline">
              {journey.map((item) => (
                <article className="timeline-item" key={item.date.en}>
                  <time>{item.date[language]}</time>
                  <div><h3>{item.title[language]}</h3><p className="timeline-org">{item.org[language]}</p><p>{item.detail[language]}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section honors-section" aria-labelledby="honors-title">
          <div className="section-heading compact"><div><p className="section-kicker">{c.honorsLabel}</p><h2 id="honors-title">{c.honorsTitle}</h2></div></div>
          <div className="honor-list">
            {honors.map((honor) => (
              <article key={honor.title.en}><span>{honor.year}</span><h3>{honor.title[language]}</h3><p>{honor.detail[language]}</p></article>
            ))}
          </div>
        </section>

        <section className="journal-teaser" aria-labelledby="journal-title">
          <div className="journal-image" aria-hidden="true" />
          <div className="journal-copy">
            <p className="section-kicker light">{c.outsideLab}</p>
            <h2 id="journal-title">{c.journalTitle}</h2>
            <p>{c.journalText}</p>
            <a href="https://lenfgh.github.io/elflen/" {...externalProps}>{c.readJournal} <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="section-kicker light">{c.contactLabel}</p>
          <h2 id="contact-title">{c.contactTitle}</h2>
          <p>{c.contactText}</p>
          <div className="contact-links">
            <a href="mailto:lenfu674@gmail.com">lenfu674@gmail.com ↗</a>
            <a href="https://github.com/lenfgh" {...externalProps}>github.com/lenfgh ↗</a>
            <a href="guohao-fu-cv.pdf" {...externalProps}>{c.downloadCv} ↗</a>
          </div>
        </section>
      </div>

      <footer>
        <p>© 2026 Guohao Fu.</p>
        <p>{c.footerNote}</p>
        <a href="#top">{c.backTop}</a>
      </footer>
    </main>
  );
}
