# AI Atlas — Deployment Guide

## Step 1: Copy files to your repo

```bash
git clone https://github.com/scooterxd69/AI-Atlas.git
cd AI-Atlas

# Copy everything from this package into the repo
# (Replace all existing files)
cp -r /path/to/package/docs ./
cp -r /path/to/package/.github ./
cp /path/to/package/README.md ./
cp /path/to/package/LICENSE ./
cp /path/to/package/CONTRIBUTING.md ./
cp /path/to/package/.markdownlint.json ./
```

## Step 2: Move your existing V1 content files

```bash
mkdir -p docs/prompts/jee docs/tools docs/workflows docs/templates

# Rename and move existing content files
git mv JEE-AI-Prompt-Library.md docs/prompts/jee/jee-ai-prompt-library.md
git mv AI-Tools-Database.md docs/tools/ai-tools-database.md
git mv AI-Educational-Workflows.md docs/workflows/ai-educational-workflows.md
git mv Universal-Chapter-Template.md docs/templates/universal-chapter-template.md

# Move any meta files
mkdir -p meta
git mv ai-atlas-operating-system.md meta/ai-atlas-operating-system.md 2>/dev/null || true
git mv ai-atlas-sitemap.md meta/ai-atlas-sitemap.md 2>/dev/null || true
```

## Step 3: Commit and push

```bash
git add -A
git commit -m "feat: complete Docsify website v2 — brand redesign, 79 pages

- Redesigned index.html: Inter/Manrope fonts, blue-purple brand system
- New homepage with hero, stats, feature grid, roadmap, CTA
- Complete sidebar and navbar navigation
- All study system landing pages (JEE/NEET/School)
- All prompt library pages (JEE/NEET/School — 125+ prompts)
- Complete workflows index and all 25 workflow descriptions
- AI tools database + 6 deep-dive tool guides
- All chapter section indexes (JEE Physics/Chem/Maths, NEET Bio, School)
- Resources: books, YouTube channels, practice sites, official links
- Career guides landing + AI careers deep-dive
- GitHub Actions: auto-deploy, lint, link-check
- Custom 404 page
- Root README, LICENSE, CONTRIBUTING

Built by Naitik Singh — AI Atlas v2"

git push origin main
```

## Step 4: Enable GitHub Pages

1. Go to: **https://github.com/scooterxd69/AI-Atlas/settings/pages**
2. Source: **GitHub Actions**
3. Click **Save**
4. Wait 2–3 minutes
5. Visit: **https://scooterxd69.github.io/AI-Atlas/**

## Step 5: Enable Actions permissions

1. **Settings → Actions → General**
2. Workflow permissions: **Read and write permissions**
3. Check: **Allow GitHub Actions to create and approve pull requests**
4. Save

## Verify

- [ ] Homepage loads with dark background + blue-purple hero
- [ ] Sidebar shows navigation categories
- [ ] Search bar works (type "JEE prompts")
- [ ] At least 3 links navigate correctly
- [ ] Mobile: sidebar collapses, content readable

## Your live URL

**https://scooterxd69.github.io/AI-Atlas/**
