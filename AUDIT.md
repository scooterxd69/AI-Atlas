# 🔍 AI Atlas — Repository Audit Report

> Generated as part of the AI Atlas Full Repository Rebuild

---

## 1. Audit Findings

### 🔴 Critical Issues Found

| Issue | Location | Impact |
|---|---|---|
| Content lives in root, not `/docs` | `JEE-AI-Prompt-Library.md`, `AI-Tools-Database.md` (root) | Docsify can't serve them |
| No `_sidebar.md` in `/docs` | `/docs/` | No navigation |
| No `_navbar.md` in `/docs` | `/docs/` | No top nav |
| `docs/index.html` missing Docsify plugin config | `/docs/index.html` | Broken search, no zoom |
| Hub `index.md` files missing | All 9 hubs | Dead navigation links |
| Sub-hub indexes missing | `jee/physics/`, `neet/biology/`, etc. | 404 on all sub-pages |

### 🟡 Structure Issues

| Issue | Description |
|---|---|
| Mixed naming convention | Some files PascalCase (`JEE-AI-Prompt-Library.md`), some kebab |
| Root-level content | `JEE-AI-Prompt-Library.md`, `ai-atlas-operating-system.md` not in `/docs` |
| `chapters/`, `prompts/`, `tools/` at root | Should be inside `/docs` |
| No `incoming/` processing system | Files sit in `incoming/` with no pipeline |

### 🟢 What's Already Good

- GitHub Pages deployment configured correctly
- Docsify base `index.html` exists
- Core content exists (`study-systems/`, `prompts/`, `workflows/`)
- `.github/` workflow present
- `CONTRIBUTING.md`, `LICENSE`, `SECURITY.md` all present

---

## 2. Files Added / Modified in This Rebuild

### New Files Created

```
docs/
├── index.html          ← MODIFIED (full design system, plugins)
├── README.md           ← MODIFIED (SaaS homepage)
├── _sidebar.md         ← CREATED
├── _navbar.md          ← CREATED
├── jee/
│   └── index.md        ← CREATED
├── neet/
│   └── index.md        ← CREATED
├── school/
│   ├── index.md        ← CREATED
│   └── class-10/
│       └── index.md    ← CREATED
├── study-systems/
│   └── index.md        ← CREATED
├── prompts/
│   ├── index.md        ← CREATED
│   ├── jee/index.md    ← CREATED
│   ├── neet/index.md   ← CREATED
│   └── general/index.md ← CREATED
├── workflows/
│   ├── index.md        ← CREATED
│   ├── new-chapter-workflow.md      ← CREATED
│   └── mock-test-review-workflow.md ← CREATED
├── ai-tools/
│   ├── index.md        ← CREATED
│   └── claude-guide.md ← CREATED
├── resources/
│   └── index.md        ← CREATED
└── career-guides/
    └── index.md        ← CREATED

file-organizer.js       ← CREATED (automation script)
```

---

## 3. Files to Migrate (Action Required)

These root-level files should be moved into `/docs`:

```bash
# Run these from repo root:
mv JEE-AI-Prompt-Library.md docs/prompts/jee/jee-ai-prompt-library.md
mv AI-Tools-Database.md docs/ai-tools/ai-tools-database.md
mv ai-atlas-operating-system.md docs/meta/ai-atlas-operating-system.md
```

---

## 4. Routing Map

| URL (after #/) | File in docs/ |
|---|---|
| `/` | `README.md` |
| `/jee/index` | `jee/index.md` |
| `/neet/index` | `neet/index.md` |
| `/school/index` | `school/index.md` |
| `/study-systems/index` | `study-systems/index.md` |
| `/prompts/index` | `prompts/index.md` |
| `/workflows/index` | `workflows/index.md` |
| `/ai-tools/index` | `ai-tools/index.md` |
| `/resources/index` | `resources/index.md` |
| `/career-guides/index` | `career-guides/index.md` |

---

## 5. V2 Content Roadmap

Pages to create for full content coverage:

**Priority 1 (High traffic / linked in sidebar):**
- [ ] `study-systems/jee-main-complete-study-system.md`
- [ ] `study-systems/neet-complete-study-system.md`
- [ ] `study-systems/revision-master-system.md`
- [ ] `study-systems/mock-test-analysis-system.md`
- [ ] `prompts/jee/physics-prompts.md`
- [ ] `prompts/jee/chemistry-prompts.md`
- [ ] `prompts/jee/math-prompts.md`
- [ ] `ai-tools/ai-tools-database.md`
- [ ] `ai-tools/chatgpt-guide.md`
- [ ] `ai-tools/perplexity-guide.md`
- [ ] `ai-tools/notebooklm-guide.md`

**Priority 2:**
- [ ] `jee/physics/mechanics.md`
- [ ] `jee/physics/electrostatics.md`
- [ ] `neet/biology/human-physiology.md`
- [ ] `career-guides/post-jee-careers.md`
- [ ] `career-guides/post-neet-careers.md`

---

*Audit completed during v2 rebuild · [View on GitHub](https://github.com/scooterxd69/AI-Atlas)*
