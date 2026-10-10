export type Language = "zh" | "en";
export type BilingualText = Record<Language, string>;

export const researchAreas: Array<{
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
  {
    number: "05",
    title: { zh: "世界动作模型", en: "World Action Models" },
    description: {
      zh: "探索未来表征对机器人策略泛化与推理效率的影响，并通过真机与仿真实验进行评测。",
      en: "Exploring how future representations affect robot policy generalization and inference efficiency through real-world and simulation evaluation.",
    },
  },
];

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
    venue: { zh: "arXiv 预印本, 2026", en: "arXiv preprint, 2026" },
    role: {
      zh: "第四作者 · 真机实验及部分仿真实验",
      en: "Fourth author · Real-world experiments & simulation contributions",
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

export const journey: Array<{
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

export const news = [
  {
    date: "2026.09",
    title: { zh: "Simple-WAM 预印本公开", en: "Simple-WAM preprint released" },
    detail: {
      zh: "参与世界动作模型泛化研究，负责真机实验及部分仿真实验。",
      en: "Coauthored a study of world action model generalization, contributing real-world experiments and a subset of the simulation experiments.",
    },
  },
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

export const honors = [
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

