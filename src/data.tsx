export type Language = "zh" | "en";
export type BilingualText = Record<Language, string>;


export const publications = [
  {
    index: "01",
    mark: "WAM",
    tone: "blue",
    title: "What Makes World Action Models Generalize? An Empirical Study of Test-Time Future Modeling",
    authors: (
      <>
        Renping Zhou<sup>#</sup>, Zanlin Ni<sup>#</sup>, Zihao Fan, <strong>Guohao Fu</strong>,
        Zeyu Liu, Hao Shi, Jie Zhang, Chi Bene Chen, Yang Yue, Xueyang Fu, Gao Huang
      </>
    ),
    venue: { zh: "2026 arXiv", en: "2026 arXiv" },
    role: {
      zh: "第四作者 · LeapLab · 真机实验及部分仿真实验",
      en: "Fourth author · LeapLab · Real-world experiments & simulation contributions",
    },
    summary: {
      zh: "Simple-WAM 通过对全噪声未来视频 token 的单次前向计算保留未来表征条件，在环境扰动、少样本与新任务设置下研究世界动作模型的泛化能力，兼顾泛化与推理效率。",
      en: "Simple-WAM retains future conditioning with a single forward pass over fully noised video tokens, studying world action model generalization under environmental perturbations, limited demonstrations, and unseen tasks while balancing generalization and inference efficiency.",
    },
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2609.34981" },
      { label: "Project", href: "https://zrporz.github.io/Simple-WAM-Web/" },
      { label: "Code", href: "https://github.com/LeapLabTHU/Simple-WAM" },
    ],
  },
  {
    index: "02",
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
      zh: "2024 bioRxiv",
      en: "2024 bioRxiv",
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
    index: "03",
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
      zh: "2026 ACM MM (main)",
      en: "2026 ACM MM (main)",
    },
    role: { zh: "核心参与者", en: "Core contributor" },
    summary: {
      zh: "覆盖 19 个多模态图数据集、8 类联邦模拟策略、6 个下游任务与 57 种方法的模块化评测基准。",
      en: "A modular benchmark spanning 19 multimodal graph datasets, eight federated simulation strategies, six downstream tasks, and 57 methods.",
    },
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2601.22416" }],
  },
  {
    index: "04",
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
      zh: "2026 arXiv",
      en: "2026 arXiv",
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



