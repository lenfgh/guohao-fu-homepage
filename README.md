# Guohao Fu — Personal Homepage

Bilingual academic homepage for Guohao Fu (傅国浩), an undergraduate researcher at Beijing Institute of Technology.

The site presents research on federated multimodal graph learning, graph foundation models, AI for Science, and computational biology.

## Live site

[https://lenfgh.github.io/guohao-fu-homepage/](https://lenfgh.github.io/guohao-fu-homepage/)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The site is deployed automatically to GitHub Pages from the `main` branch.

The production build prerenders the complete homepage into `dist/index.html`, so profile and publication content are readable without JavaScript. React hydrates this snapshot and restores the saved language preference after the initial render.

Search metadata and the canonical address are defined in `index.html`. Keep `public/sitemap.xml` in sync with the canonical address and update its `lastmod` when homepage content changes.
