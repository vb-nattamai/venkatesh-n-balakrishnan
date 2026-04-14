# venkatesh-personal-site

Personal site for Venkatesh Balakrishnan — Director of Software Engineering.

Built with [Docusaurus 3](https://docusaurus.io/) (classic preset, JavaScript).  
Deployed to GitHub Pages at [vb-nattamai.github.io/venkatesh-personal-site](https://vb-nattamai.github.io/venkatesh-personal-site/).

---

## Site structure

| Route | Content |
|-------|---------|
| `/` | Homepage |
| `/about` | Background and interests |
| `/projects` | Projects and experiments |
| `/blog` | Writing and essays |
| `/docs/intro` | Ideas — short concept notes |

---

## Local development

```bash
# Install dependencies
npm install

# Start the dev server (hot reload)
npm start
```

The site will be available at `http://localhost:3000/venkatesh-personal-site/`.

---

## Build

```bash
npm run build
```

Outputs to `./build/`. To preview the production build locally:

```bash
npm run serve
```

---

## Deploy to GitHub Pages

The site is configured for deployment to GitHub Pages under the `vb-nattamai` organisation:

- **URL**: `https://vb-nattamai.github.io`  
- **Base path**: `/venkatesh-personal-site/`  
- **Deployment branch**: `gh-pages`

### First-time setup

1. Ensure your local repo is connected to the GitHub remote:

```bash
git remote add origin https://github.com/vb-nattamai/venkatesh-n-balakrishnan.git
```

2. Push the source branch:

```bash
git add .
git commit -m "Initial site"
git push -u origin main
```

3. Deploy:

```bash
GIT_USER=vb-nattamai npm run deploy
```

This builds the site and force-pushes the `build/` output to the `gh-pages` branch.

### Subsequent deploys

```bash
GIT_USER=vb-nattamai npm run deploy
```

### GitHub Pages settings

In the repository settings on GitHub:
- Go to **Settings → Pages**
- Source: **Deploy from a branch**
- Branch: `gh-pages` / `/ (root)`

---

## Project layout

```
venkatesh-personal-site/
├── blog/                       # Blog posts (Markdown)
│   ├── authors.yml
│   └── *.md
├── docs/                       # Ideas / concept notes (Markdown)
│   ├── intro.md
│   ├── agentic-sdlc.md
│   ├── context-engineering.md
│   └── evaluation-first.md
├── src/
│   ├── css/custom.css          # Global styles
│   └── pages/                  # Custom React pages
│       ├── index.js            # Homepage
│       ├── about.js
│       └── projects.js
├── static/                     # Static assets
├── docusaurus.config.js        # Site configuration
└── sidebars.js                 # Docs sidebar configuration
```

---

## Adding content

**New blog post:**  
Create `blog/YYYY-MM-DD-slug.md` with frontmatter:

```yaml
---
slug: your-post-slug
title: Post Title
authors: [venkatesh]
tags: [tag1, tag2]
date: YYYY-MM-DD
---
```

**New ideas page:**  
Create `docs/your-topic.md` and add the filename (without extension) to `sidebars.js`.
