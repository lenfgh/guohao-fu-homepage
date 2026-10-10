export type Language = "zh" | "en";
export type BilingualText = Record<Language, string>;


// Sort by first public release (YYYY-MM); paper links may point to later revisions.
export const publications = [
  {
    index: "01",
    publishedAt: "2026-09",
    title: "What Makes World Action Models Generalize? An Empirical Study of Test-Time Future Modeling",
    authors: (
      <>
        Renping Zhou<sup>#</sup>, Zanlin Ni<sup>#</sup>, Zihao Fan, <strong>Guohao Fu</strong>,
        Zeyu Liu, Hao Shi, Jie Zhang, Chi Bene Chen, Yang Yue, Xueyang Fu, Gao Huang
      </>
    ),
    venue: { zh: "2026 arXiv", en: "2026 arXiv" },
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2609.34981" },
      { label: "Project", href: "https://zrporz.github.io/Simple-WAM-Web/" },
      { label: "Code", href: "https://github.com/LeapLabTHU/Simple-WAM" },
    ],
  },
  {
    index: "04",
    publishedAt: "2026-07",
    title: "Toward Federated Multimodal Graph Foundation Models: A Topology-Aware Multimodal Alignment Framework",
    authors: (
      <>
        Xunkai Li, <strong>Guohao Fu</strong>, Yuming Ai, Zhengyu Wu, Hongchao Qin,
        Rong-Hua Li, Guoren Wang
      </>
    ),
    venue: {
      zh: "2026 arXiv",
      en: "2026 arXiv",
    },
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2607.15687" }],
  },
  {
    index: "03",
    publishedAt: "2026-01",
    title: "MM-OpenFGL: A Comprehensive Benchmark for Multimodal Federated Graph Learning",
    authors: (
      <>
        Xunkai Li, Yuming Ai, Yinlin Zhu, Haodong Lu, Yi Zhang, <strong>Guohao Fu</strong>,
        Bowen Fan, Qiangqiang Dai, Rong-Hua Li, Guoren Wang
      </>
    ),
    venue: {
      zh: "2026 ACM MM (main)",
      en: "2026 ACM MM (main)",
    },
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2601.22416" }],
  },
  {
    index: "02",
    publishedAt: "2024-12",
    title: "Predicting Microbial Transcriptome Using Annotated Genome Sequence",
    authors: (
      <>
        <strong>Guohao Fu</strong><sup>#</sup>, Yujing Yan<sup>#</sup>, Ziyue Zhao,
        Ye Chen<sup>*</sup>, Bin Shao<sup>#*</sup>
      </>
    ),
    venue: {
      zh: "2024 bioRxiv",
      en: "2024 bioRxiv",
    },
    links: [
      { label: "Paper", href: "https://www.biorxiv.org/content/10.1101/2024.12.30.630741v4" },
      { label: "Code", href: "https://github.com/lingxusb/TXpredict" },
    ],
  },
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const journey: Array<{
  date: BilingualText;
  title: BilingualText;
  org: BilingualText;
}> = [
  {
    date: { zh: "2024.09 — 预计 2028", en: "Sep 2024 — Expected 2028" },
    title: { zh: "未来精工技术专业 · 本科", en: "B.Eng. in Future Precision Technology" },
    org: {
      zh: "北京理工大学 · 徐特立学院 / 未来精工技术学院",
      en: "Beijing Institute of Technology · Xu Teli School / School of Future Precision Technology",
    },
  },
];



