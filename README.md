# The Persistence Problem
**Everything about AI Memory** · rex-mathew.github.io

---

## Deploy to GitHub Pages

```bash
# 1. Create repo named exactly: rex-mathew.github.io
# 2. Push this folder:
git init
git remote add origin https://github.com/rex-mathew/rex-mathew.github.io.git
git add .
git commit -m "Launch: The Persistence Problem"
git push -u origin main
```

3. Go to repo → Settings → Pages → Source: `main` branch, `/ (root)`  
4. Live at `https://rex-mathew.github.io` in ~2 minutes.

> **Note:** For a user page (`username.github.io`), no baseurl is needed — already configured in `_config.yml`.

---

## File structure

```
rex-mathew.github.io/
├── _config.yml          ← site settings
├── Gemfile              ← github-pages gem
├── index.html           ← landing page (self-contained)
├── about.md             ← about page (create when ready)
│
├── _layouts/
│   ├── default.html     ← shared header + footer
│   └── post.html        ← blog post layout (build when writing posts)
│
├── _posts/              ← 13 placeholder posts, ready to fill
│   ├── 2026-03-17-kerala-garden-ai-memory.md   ← LIVE (published: true)
│   ├── 2026-03-24-llm-training-weights.md      ← drafts...
│   └── ...
│
└── assets/
    ├── css/main.css     ← shared styles (for post pages)
    └── js/main.js       ← shared scripts
```

---

## Publishing a new post

1. Write the content in the `_posts/YYYY-MM-DD-slug.md` file
2. Set `published: true` in the front matter
3. Update the progress bar in `index.html`:
   - Find `.prog-fill` — change `width` percentage (1/13 = 7.7%, 2/13 = 15.4%, etc.)
   - Update the text "X of 13 posts published"
4. Update the `c-next` chip on the next upcoming post to `c-live`
5. Commit and push

---

## Series structure

| # | Slug | Part | Status |
|---|------|------|--------|
| 1 | llm-training-weights | Part One | Draft |
| 2 | context-window-not-memory | Part One | Draft |
| 3 | statelessness-problem | Part One | Draft |
| 4 | human-memory-bad-model | Part One | Draft |
| 5 | rag-explained | Part Two | Draft |
| 6 | vector-databases | Part Two | Draft |
| 7 | fine-tuning-forgetting | Part Two | Draft |
| 8 | memgpt-paging | Part Two | Draft |
| 9 | shared-flaw | Part Two | Draft |
| 10 | kerala-garden-ai-memory | Part Three | **LIVE** |
| 11 | dpm-architecture | Part Three | Draft |
| 12 | dpm-comparison | Part Three | Draft |
| 13 | dpm-next-steps | Part Three | Draft |
