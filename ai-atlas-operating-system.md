# AI Atlas Operating System
**Document type:** Meta / Internal Operations
**Path:** `meta/ai-atlas-operating-system.md`
**Version:** 1.0
**Status:** Active — authoritative reference for all contributors and maintainers

---

> **What this document is**
> This is the single source of truth for how AI Atlas is built, maintained, and grown. Every contributor, editor, and AI generation session references this document before doing any work. Nothing in the repository overrides what is written here.

---

## Table of Contents

| Section | Description |
|---------|-------------|
| [1. Platform State](#1-platform-state) | What exists, what's missing |
| [2. Asset Organisation System](#2-asset-organisation-system) | Folder structure and file hierarchy |
| [3. Repository Navigation System](#3-repository-navigation-system) | How readers and contributors find things |
| [4. File Naming Standards](#4-file-naming-standards) | Exact rules for every file type |
| [5. Markdown Standards](#5-markdown-standards) | Formatting rules for all content |
| [6. Internal Linking Standards](#6-internal-linking-standards) | How pages link to each other |
| [7. Content Creation Workflow](#7-content-creation-workflow) | How new content is built end-to-end |
| [8. Content Update Workflow](#8-content-update-workflow) | How existing content is revised |
| [9. Quality Control Workflow](#9-quality-control-workflow) | Standards checklist before publishing |
| [10. Contribution Workflow](#10-contribution-workflow) | How external contributors submit work |
| [11. AI Generation Workflow](#11-ai-generation-workflow) | How to use AI to produce content correctly |
| [12. GitHub Management Workflow](#12-github-management-workflow) | Branch, commit, PR, and release process |
| [13. Publishing Workflow](#13-publishing-workflow) | From draft to live page |
| [14. Missing Assets Register](#14-missing-assets-register) | Identified gaps by priority |
| [15. Bottleneck Analysis](#15-bottleneck-analysis) | Where the system slows down |
| [16. Automation Opportunities](#16-automation-opportunities) | What can be automated and how |
| [17. Future Growth Roadmap](#17-future-growth-roadmap) | Expansion strategy and milestones |

---

## 1. Platform State

### 1.1 Assets Currently in Repository

| Asset | File | Lines | Status | Category |
|-------|------|-------|--------|----------|
| Complete Sitemap | `sitemap/ai-atlas-sitemap.md` | ~200 | ✅ Complete | Architecture |
| JEE Physics Study System | embedded in workflows | ~400 | ✅ Complete | Study Systems |
| JEE Chemistry Study System | embedded in workflows | ~400 | ✅ Complete | Study Systems |
| JEE Mathematics Study System | embedded in workflows | ~400 | ✅ Complete | Study Systems |
| NEET Biology Study System | embedded in workflows | ~400 | ✅ Complete | Study Systems |
| Class 10 Science Study System | embedded in workflows | ~400 | ✅ Complete | Study Systems |
| 50 JEE Prompts | `prompts/JEE-AI-Prompt-Library.md` | 1,902 | ✅ Complete | Prompt Library |
| Universal Chapter Template | `templates/Universal-Chapter-Template.md` | 2,159 | ✅ Complete | Templates |
| 100 AI Tools Database | `tools/AI-Tools-Database.md` | 402 | ✅ Complete | Tools |
| 25 Educational Workflows | `workflows/AI-Educational-Workflows.md` | 3,163 | ✅ Complete | Workflows |
| Operating System (this document) | `meta/ai-atlas-operating-system.md` | — | 🔄 In Progress | Meta |

**Total existing content:** ~9,000+ lines of publication-ready educational material

### 1.2 Platform Health Summary

```
Content depth:     ████████░░  80%  (strong on JEE/NEET, thin on school)
Content breadth:   ██████░░░░  60%  (core subjects covered, many missing)
Infrastructure:    ████░░░░░░  40%  (templates exist, no automation yet)
Discoverability:   ███░░░░░░░  30%  (no navigation system built yet)
Contribution:      ██░░░░░░░░  20%  (no contribution framework yet)
```

---

## 2. Asset Organisation System

### 2.1 Master Folder Structure

Every file in the AI Atlas repository lives in exactly one of the following directories. No exceptions.

```
ai-atlas/
│
├── meta/                          # Platform documentation (not student-facing)
│   ├── ai-atlas-operating-system.md
│   ├── content-standards.md
│   ├── project-vision.md
│   └── changelog.md
│
├── sitemap/                       # Platform architecture
│   └── ai-atlas-sitemap.md
│
├── templates/                     # Reusable content templates
│   ├── Universal-Chapter-Template.md
│   ├── Prompt-Template.md
│   ├── Workflow-Template.md
│   └── Tool-Profile-Template.md
│
├── prompts/                       # All prompt libraries
│   ├── jee/
│   │   ├── JEE-AI-Prompt-Library.md        # 50 JEE prompts (complete)
│   │   ├── jee-physics-prompts.md          # Subject-specific extraction (future)
│   │   ├── jee-chemistry-prompts.md
│   │   └── jee-mathematics-prompts.md
│   ├── neet/
│   │   └── NEET-AI-Prompt-Library.md       # (missing — see Section 14)
│   └── school/
│       └── School-AI-Prompt-Library.md     # (missing — see Section 14)
│
├── workflows/                     # All study and operational workflows
│   ├── AI-Educational-Workflows.md         # 25 workflows (complete)
│   └── subject-specific/                   # Future subject extractions
│       ├── jee-physics-workflow.md
│       ├── neet-biology-workflow.md
│       └── class10-science-workflow.md
│
├── tools/                         # AI tools database
│   ├── AI-Tools-Database.md                # 100 tools (complete)
│   └── tool-profiles/                      # Future deep-dive tool pages
│       ├── claude-for-students.md
│       ├── anki-setup-guide.md
│       └── notion-study-system.md
│
├── study-systems/                 # Complete exam study systems
│   ├── jee/
│   │   ├── jee-main-study-system.md
│   │   ├── jee-advanced-study-system.md
│   │   ├── jee-physics-system.md           # (missing — see Section 14)
│   │   ├── jee-chemistry-system.md         # (missing)
│   │   └── jee-mathematics-system.md       # (missing)
│   ├── neet/
│   │   ├── neet-complete-study-system.md   # (missing)
│   │   ├── neet-biology-system.md          # (missing)
│   │   └── neet-physics-chemistry.md       # (missing)
│   └── school/
│       ├── class10-board-system.md         # (missing)
│       ├── class12-board-system.md         # (missing)
│       └── class6-8-foundation.md          # (missing)
│
├── chapters/                      # Individual chapter pages (future — highest volume)
│   ├── jee-physics/
│   │   ├── mechanics/
│   │   ├── thermodynamics/
│   │   ├── electromagnetism/
│   │   ├── optics/
│   │   └── modern-physics/
│   ├── jee-chemistry/
│   │   ├── physical/
│   │   ├── organic/
│   │   └── inorganic/
│   ├── jee-mathematics/
│   │   ├── algebra/
│   │   ├── calculus/
│   │   ├── coordinate-geometry/
│   │   └── trigonometry/
│   ├── neet-biology/
│   │   ├── botany/
│   │   └── zoology/
│   └── school-science/
│       ├── class9/
│       └── class10/
│
├── career-guides/                 # Career and after-exam content (future)
│   ├── after-jee.md
│   ├── after-neet.md
│   └── ai-careers.md
│
├── resources/                     # Curated external resources (future)
│   ├── free-books.md
│   ├── youtube-channels.md
│   └── practice-sites.md
│
└── assets/                        # Images, diagrams, and static files
    ├── images/
    ├── diagrams/
    └── pdfs/
```

### 2.2 Directory Rules

**Rule 1 — One file, one home.** Every content file has exactly one canonical location. No duplicates. Symlinks are permitted in the navigation index only.

**Rule 2 — Subject directories first.** When a file belongs to a subject (JEE Physics, NEET Biology), it always goes inside the subject subdirectory, not at the parent level.

**Rule 3 — Meta never mixes with content.** The `meta/` directory is internal infrastructure. Nothing inside `meta/` is linked from student-facing pages.

**Rule 4 — Templates stay in `templates/`.** No template file lives inside content directories. Content files reference templates; they do not contain them.

**Rule 5 — Assets travel with content.** Any image or diagram created for a specific chapter goes in `assets/images/[chapter-slug]/`.

---

## 3. Repository Navigation System

### 3.1 Navigation Architecture

AI Atlas uses a three-layer navigation system:

```
Layer 1 — Repository README.md       (entry point, top-level navigation)
    │
    ├── Layer 2 — Category INDEX.md files    (one per major directory)
    │       (sitemap/INDEX.md, prompts/INDEX.md, workflows/INDEX.md, etc.)
    │
    └── Layer 3 — Individual content files   (the actual pages)
```

### 3.2 README.md Structure (Root)

The root `README.md` is the only file a new visitor needs to find everything. It must always contain:

```markdown
# AI Atlas

[One sentence: what it is]
[One sentence: who it's for]
[One sentence: it's free]

## Quick Start

For JEE students → [link]
For NEET students → [link]
For school students → [link]
New to AI? → [link]

## What's Here

| Section | What's Inside | Files |
|---------|--------------|-------|
| Prompts | ... | ... |
| Workflows | ... | ... |
...

## Recently Added
[last 5 additions with dates]

## Contributing
[link to contribution guide]
```

The README must be updated every time a file is added or modified.

### 3.3 Category INDEX.md Files

Every directory that contains more than 3 files must have an `INDEX.md` with:
- What this directory contains (one paragraph)
- A table of all files with: filename, description, status, last updated
- "Start here if you are a [type] student" guidance
- Links to related directories

**Example: `workflows/INDEX.md`**

```markdown
# Workflows Index

This directory contains 25 complete AI-powered study workflows...

| File | Description | Audience | Status |
|------|-------------|----------|--------|
| AI-Educational-Workflows.md | All 25 workflows | JEE/NEET/School | ✅ Complete |
...

Start here if you are:
- A JEE student → Workflow 01, 05, 06
- A NEET student → Workflow 01, 15, 18
- A school student → Workflow 01, 22, 24
```

### 3.4 Cross-Reference Table

A permanent file at `meta/cross-reference.md` maps every concept to every file that covers it:

| Concept | Files that cover this |
|---------|----------------------|
| Anki flashcards | workflows/AI-Educational-Workflows.md (WF10), tools/AI-Tools-Database.md (#31) |
| Mock test analysis | workflows/AI-Educational-Workflows.md (WF06), prompts/JEE-AI-Prompt-Library.md (M-01 to M-10) |
| Formula revision | workflows/AI-Educational-Workflows.md (WF07), prompts/JEE-AI-Prompt-Library.md (R-10) |

This table is updated every time new content is added.

---

## 4. File Naming Standards

### 4.1 Universal Rules

1. **All lowercase.** No uppercase letters anywhere in filenames.
2. **Hyphens only.** Use `-` between words. Never use spaces, underscores, or dots (except the file extension).
3. **Descriptive, not clever.** The filename must tell you what the file contains without opening it.
4. **Date prefix for versioned files only.** Never date-prefix content files. Only dated files: changelogs, release notes.
5. **No version numbers in filenames.** Use Git for versioning. `jee-prompts-v2.md` is wrong. `jee-prompts.md` is correct.

### 4.2 Naming Patterns by File Type

**Chapter pages:**
```
[subject-code]-[chapter-slug].md

Examples:
jee-physics-rotational-motion.md
jee-chemistry-electrochemistry.md
neet-biology-cell-division.md
class10-science-electricity.md
```

**Prompt libraries:**
```
[audience]-[subject]-prompts.md

Examples:
jee-physics-prompts.md
neet-biology-prompts.md
school-science-prompts.md
jee-all-subjects-prompts.md      ← for multi-subject collections
```

**Workflows:**
```
[audience]-[topic]-workflow.md

Examples:
jee-mock-analysis-workflow.md
neet-ncert-mastery-workflow.md
school-board-exam-workflow.md
```

**Study systems:**
```
[audience]-[scope]-study-system.md

Examples:
jee-main-complete-study-system.md
neet-biology-study-system.md
class10-cbse-study-system.md
```

**Tool profiles:**
```
[tool-name]-for-students.md
[tool-name]-setup-guide.md

Examples:
claude-for-students.md
anki-setup-guide.md
notion-study-system-setup.md
```

**Templates:**
```
[content-type]-template.md

Examples:
chapter-template.md
prompt-template.md
workflow-template.md
tool-profile-template.md
```

**Index files:**
```
INDEX.md          ← always uppercase, always this exact name
```

**Meta files:**
```
[descriptor].md

Examples:
ai-atlas-operating-system.md
content-standards.md
project-vision.md
changelog.md
cross-reference.md
```

### 4.3 Subject Code Reference

Use these exact codes in all filenames:

| Subject | Code |
|---------|------|
| JEE Physics | `jee-physics` |
| JEE Chemistry | `jee-chemistry` |
| JEE Mathematics | `jee-maths` |
| NEET Biology | `neet-biology` |
| NEET Physics | `neet-physics` |
| NEET Chemistry | `neet-chemistry` |
| CBSE Class 10 Science | `class10-science` |
| CBSE Class 10 Maths | `class10-maths` |
| CBSE Class 12 Physics | `class12-physics` |
| CBSE Class 12 Chemistry | `class12-chemistry` |
| CBSE Class 12 Biology | `class12-biology` |
| CBSE Class 12 Maths | `class12-maths` |
| Foundation (Class 6–8) | `foundation` |

---

## 5. Markdown Standards

### 5.1 Document Structure Rules

Every content file must begin with this exact header block:

```markdown
# [Page Title]
**Type:** [Chapter Page / Prompt Library / Workflow / Study System / Tool Profile / Template]
**Audience:** [JEE / NEET / School / All Students]
**Subject:** [specific subject]
**Status:** [Draft / Review / Complete]
**Last updated:** [YYYY-MM]
**Related:** [2–4 internal links]

---
```

No content file may omit this header. The `Related:` field is mandatory and must contain at least 2 links.

### 5.2 Heading Hierarchy

```markdown
# H1   — Page title only. One per document. Never repeated.
## H2  — Major sections (Overview, Key Concepts, Workflows, etc.)
### H3 — Subsections within a major section
#### H4 — Item headers within a subsection (use sparingly)
```

**Rules:**
- Never skip heading levels (H2 → H4 is forbidden)
- Never bold a heading as a substitute (`**Section Name**` is not a heading)
- H1 appears exactly once — at the top of the document
- H2 sections match the Universal Chapter Template structure where applicable

### 5.3 Table Standards

All tables must have:
- A header row
- At least 3 columns (single-column tables should be lists)
- Consistent column widths (no empty cells — use `—` for not applicable)
- A one-line caption above or below if the table's purpose isn't obvious from context

```markdown
*Table: [brief description of what the table shows]*

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| data     | data     | data     |
```

### 5.4 Code Block Standards

Use fenced code blocks for all prompts, commands, and code:

```markdown
```
[prompt text here]
```
```

For prompts specifically, always add a label line above:

```markdown
**Prompt:**
```
[prompt text]
```
```

For bash/code, specify the language:

```markdown
```bash
git commit -m "feat: add chapter page"
```
```

### 5.5 Callout Standards

Use blockquotes for three purposes only:

**1. Navigation tips (how-to-use):**
```markdown
> **How to use this page**
> [one paragraph explaining how to use this specific content type]
```

**2. Important warnings:**
```markdown
> ⚠️ **Important:** [warning text]
```

**3. Key insights:**
```markdown
> 💡 **Key insight:** [one-sentence critical point]
```

Do not use blockquotes for general information or to make text "stand out."

### 5.6 List Standards

**Bullet lists:** Use for unordered items where sequence doesn't matter.
**Numbered lists:** Use for steps, sequences, and ranked items only.
**Nested lists:** Maximum one level of nesting. Never two levels deep.

```markdown
- Item one
- Item two
  - One level of nesting only
- Item three
```

### 5.7 Emphasis Standards

| Format | Use for | Example |
|--------|---------|---------|
| `**bold**` | Terms being defined, critical warnings | **Spaced repetition** is the core technique |
| `*italic*` | Titles, technical terms on first use | This is called *active recall* |
| `inline code` | File names, commands, tool names, values | Open `INDEX.md` and run `git pull` |

Do not use bold for decoration or to highlight anything you personally think is important.

### 5.8 Horizontal Rule Standards

Use `---` (three hyphens) for section breaks only when the visual separation genuinely aids reading. Between H2 sections in long documents: permitted. Within a subsection: not permitted.

---

## 6. Internal Linking Standards

### 6.1 Link Format Rules

**All internal links use relative paths:**
```markdown
[Link text](../workflows/AI-Educational-Workflows.md)    ✅ Correct
[Link text](https://github.com/ai-atlas/workflows/...)   ❌ Wrong for internal
```

**Links must use descriptive text:**
```markdown
[see the 25 educational workflows](../workflows/AI-Educational-Workflows.md)   ✅
[click here](../workflows/AI-Educational-Workflows.md)                         ❌
[this page](../workflows/AI-Educational-Workflows.md)                          ❌
```

**Deep links to sections:**
```markdown
[Workflow 06 — Mock Test Analysis](../workflows/AI-Educational-Workflows.md#workflow-06--mock-test-analysis)
```

GitHub renders Markdown heading anchors as lowercase with spaces replaced by hyphens and special characters removed.

### 6.2 Required Links Per Content Type

**Chapter pages must link to:**
- The parent study system (`../../study-systems/jee/jee-physics-system.md`)
- At least 2 related chapters
- The relevant workflow from `AI-Educational-Workflows.md`
- At least 1 relevant prompt from the prompt library
- At least 2 relevant tools from `AI-Tools-Database.md`

**Prompt library entries must link to:**
- The workflow that uses them
- Any chapter pages the prompt is designed for

**Workflows must link to:**
- All tools mentioned by name
- Any templates referenced
- Related workflows

**Study systems must link to:**
- All chapter pages within the system (once created)
- The workflow file
- The prompt library

### 6.3 Orphan Prevention Rule

No file may exist without at least one other file linking to it. Before publishing any new file:
1. Add it to the directory's `INDEX.md`
2. Add it to the root `README.md`'s relevant section
3. Add at least one link from a related existing file
4. Add it to `meta/cross-reference.md`

### 6.4 Broken Link Prevention

Before every merge to `main`:
- Run a link checker (see Automation section — this will be automated)
- Manually verify any links in newly added files
- Check that renamed files have not broken links in other files

---

## 7. Content Creation Workflow

### 7.1 Workflow Overview

```
IDEA → BRIEF → AI GENERATION → HUMAN REVIEW → QC CHECK → STAGING → PUBLISH
  │       │           │               │              │          │         │
  │     30 min      60 min         45 min          20 min    10 min    5 min
  │
  └── All ideas logged in meta/backlog.md before any work begins
```

### 7.2 Stage 1 — Idea Logging

Before any content is created, log it in `meta/backlog.md`:

```markdown
| ID | Content type | Title | Audience | Priority | Owner | Status |
|----|-------------|-------|----------|----------|-------|--------|
| C-042 | Chapter page | JEE Physics — Rotational Motion | JEE | P1 | [name] | Backlog |
```

Priority levels:
- **P1** — High demand (missing critical content for primary audience)
- **P2** — Important (fills a gap in existing content)
- **P3** — Useful (enhances existing content)
- **P4** — Nice to have (future enrichment)

Nothing moves to creation without a backlog entry.

### 7.3 Stage 2 — Content Brief

Before writing or generating, complete a brief in the backlog entry:

```markdown
**Brief for C-042:**
- File path: chapters/jee-physics/mechanics/jee-physics-rotational-motion.md
- Template to use: templates/Universal-Chapter-Template.md → JEE Physics section
- Audience: JEE Main + Advanced, Class 11 students
- Exam target: JEE Advanced 2025+
- Key sections required: all 11 sections from Chapter Template
- Specific inclusions: moment of inertia derivation, rolling motion, angular momentum conservation
- AI tools to use: Claude for generation, cross-check against NCERT Class 11 Ch 7
- Connected files to update after creation: study-systems/jee/jee-physics-system.md, workflows/INDEX.md, README.md
```

### 7.4 Stage 3 — AI Generation

Follow the AI Generation Workflow (Section 11) exactly. Key rules:
- Always load the Universal Chapter Template before generating chapter content
- Always load Content Standards before generating any content
- Generate one section at a time for long content — not the whole document at once
- Save the generation session context — it will be needed for revisions

### 7.5 Stage 4 — Human Review

Every AI-generated file requires human review before staging. The reviewer checks:
- Factual accuracy (especially formulas, exam patterns, tool descriptions)
- Consistency with existing content (no contradictions with other files)
- Content Standards compliance (Section 9)
- File naming and header compliance

The reviewer adds a review note to the file header:
```markdown
**Reviewed by:** [name/handle] on [YYYY-MM-DD]
**Review status:** Approved / Approved with edits / Needs revision
```

### 7.6 Stage 5 — Quality Control

Run the full QC checklist (Section 9). Any failed item blocks publishing.

### 7.7 Stage 6 — Staging

Before publishing, the file must:
- Be in its correct directory
- Have all required links added
- Be registered in the directory `INDEX.md`
- Be added to `README.md`
- Be added to `meta/cross-reference.md`
- Have its backlog entry updated to "In Review"

### 7.8 Stage 7 — Publishing

Follow the Publishing Workflow (Section 13). After publishing, update backlog entry to "Complete" and add the publish date.

---

## 8. Content Update Workflow

### 8.1 Types of Updates

| Type | Trigger | Urgency | Process |
|------|---------|---------|---------|
| **Factual correction** | Error identified in content | Immediate | Hotfix branch → direct merge |
| **Tool update** | AI tool changes pricing/features | Within 1 week | Standard update branch |
| **Curriculum update** | JEE/NEET syllabus change | Within 2 weeks | Standard update branch |
| **Content enhancement** | Adding sections, improving quality | Scheduled | Sprint batch |
| **Link repair** | Broken links detected | Within 48 hours | Hotfix branch |

### 8.2 Update Process

**Step 1 — Log the update**

Add to `meta/update-log.md`:
```markdown
| Date | File | Change type | Reason | Owner |
|------|------|-------------|--------|-------|
| 2025-06 | tools/AI-Tools-Database.md | Tool update | Claude pricing changed | [name] |
```

**Step 2 — Create a branch**

```bash
git checkout -b update/[file-slug]-[brief-description]
# Example: update/tools-database-claude-pricing
```

**Step 3 — Make changes**

- Change only what the update log specifies
- Update the `Last updated:` field in the file header
- Note the change in `meta/changelog.md`

**Step 4 — Review and merge**

For factual corrections: one reviewer required before merge.
For content enhancements: two reviewers required.

**Step 5 — Propagate**

After updating a file, check `meta/cross-reference.md` to find all files that link to or reference the updated content. Update those files if needed.

### 8.3 Scheduled Review Calendar

| Content type | Review frequency | Trigger |
|-------------|-----------------|---------|
| AI Tools Database | Every 3 months | Tools change frequently |
| JEE/NEET Prompts | After each JEE/NEET exam cycle | Exam patterns may shift |
| Study Systems | Every 6 months | Curriculum updates |
| Chapter pages | After NCERT revision | NCERT editions change |
| Workflows | Every 6 months | AI tools evolve |
| Operating System (this document) | Every 6 months | Platform grows |

---

## 9. Quality Control Workflow

### 9.1 The QC Checklist

Every file must pass this checklist before publishing. A single ❌ blocks the publish.

**A — File and Structure**
- [ ] File is in correct directory per Asset Organisation System
- [ ] Filename follows naming standards exactly
- [ ] File header block is complete (type, audience, subject, status, last updated, related)
- [ ] H1 appears exactly once and matches the filename concept
- [ ] Heading hierarchy is correct (no skipped levels)
- [ ] File ends with a single newline character

**B — Content Standards**
- [ ] Page is beginner-friendly (no assumed knowledge without explanation)
- [ ] Page is practical (every section has something actionable)
- [ ] Examples are included in every major section
- [ ] At least one AI tool is named and explained per section
- [ ] At least one usable prompt is included
- [ ] At least one workflow or process is described
- [ ] No buzzwords ("game-changing", "revolutionary", "unlock your potential")
- [ ] No marketing language ("best-in-class", "world-class")
- [ ] No unrealistic promises ("score 300/300 in 30 days")

**C — Accuracy**
- [ ] All formulas verified against NCERT or standard references
- [ ] All tool names and URLs verified as current and accurate
- [ ] All exam pattern claims verified against recent JEE/NEET papers
- [ ] No contradictions with other files in the repository

**D — Links and Navigation**
- [ ] All internal links are relative paths
- [ ] All internal links tested (they resolve correctly)
- [ ] All external links verified as live
- [ ] File is linked from at least one other file
- [ ] File is listed in its directory's INDEX.md
- [ ] File is registered in meta/cross-reference.md

**E — Formatting**
- [ ] All tables have headers and at least 3 columns
- [ ] All prompts are in fenced code blocks
- [ ] Bold used only for terms and critical warnings
- [ ] No double spaces, trailing spaces, or broken formatting
- [ ] Images (if any) have alt text

**F — Completeness (chapter pages only)**
- [ ] All 11 sections from Universal Chapter Template are present
- [ ] Formula sheet has conditions for every formula
- [ ] Common mistakes section has at least 4 specific entries
- [ ] 30-minute revision plan is genuinely completable in 30 minutes
- [ ] All prompts are copy-paste ready (no unfilled placeholders)

### 9.2 QC Sign-off

After passing the checklist, the reviewer adds to the file header:
```markdown
**QC passed:** [name] on [YYYY-MM-DD]
```

### 9.3 Common QC Failures

Track QC failures in `meta/qc-failure-log.md` to identify patterns:

```markdown
| Date | File | Failed item | Root cause | Prevented by |
|------|------|-------------|------------|-------------|
```

After 3 failures of the same type, update the AI Generation Workflow to prevent that class of failure automatically.

---

## 10. Contribution Workflow

### 10.1 Contribution Types

AI Atlas accepts three types of external contributions:

| Type | Description | Acceptance rate | Review time |
|------|-------------|-----------------|-------------|
| **Bug reports** | Factual errors, broken links, outdated tool info | Very high | 24–48 hours |
| **Content contributions** | New chapter pages, prompts, workflows | Selective | 1–2 weeks |
| **Translations** | Content in Hindi or regional languages | High | 1–2 weeks |

### 10.2 Bug Report Process

1. Contributor opens a GitHub Issue using the `bug-report` template
2. Template asks for: file path, specific error, correct information, source
3. Maintainer verifies within 48 hours
4. Correction made via hotfix branch
5. Issue closed with reference to the fixing commit

**Bug report template** (`meta/templates/bug-report.md`):
```markdown
**File:** [relative path to file]
**Section:** [H2 heading or line number]
**What is wrong:** [specific error]
**What should it say:** [correct information]
**Source:** [how you know this is wrong]
```

### 10.3 Content Contribution Process

**Step 1 — Contributor opens an Issue** titled "Content proposal: [title]" with:
- What they want to contribute
- Which audience it serves
- Their relevant expertise or background

**Step 2 — Maintainer responds within 5 days** with:
- Accepted / Not accepted (with reason)
- If accepted: the exact template to use, file path, specific guidelines

**Step 3 — Contributor forks the repository** and creates a branch:
```bash
git checkout -b contrib/[contributor-handle]/[content-slug]
```

**Step 4 — Contributor follows the Content Creation Workflow** (Section 7) exactly.

**Step 5 — Contributor opens a Pull Request** using the PR template. The PR description must include:
- Link to the original Issue
- QC self-checklist (completed)
- List of files changed
- Any decisions made during creation

**Step 6 — Maintainer review** (1–2 weeks):
- QC checklist verification
- Factual accuracy check
- Style and standards check
- Feedback provided as PR comments

**Step 7 — Merge or revision:**
- If passing: merged into `main`
- If failing: contributor revises based on feedback
- Maximum 2 revision rounds — if still not passing after 2 rounds, PR is declined with detailed explanation

### 10.4 Contribution Recognition

Every merged contribution is acknowledged in:
- `meta/contributors.md` — permanent list of all contributors
- The `CHANGELOG.md` entry for the release that includes the contribution

### 10.5 What Will Not Be Accepted

| Category | Reason |
|----------|--------|
| Content from specific coaching institutes | Potential IP issues, institutional bias |
| Paid tool recommendations as primary recommendation | Against free-first ethos |
| Content that requires premium AI access | Excludes students who can't pay |
| Chapters that duplicate existing content | Fragmenting the repository |
| Non-educational content | Outside platform scope |

---

## 11. AI Generation Workflow

### 11.1 Principles

Using AI to generate AI Atlas content is expected and encouraged. However, AI-generated content must follow rules that prevent the common failure modes: vagueness, inaccuracy, and inconsistency with existing content.

**The four-step rule:** Load context → Generate → Verify → Personalise. Never skip a step.

### 11.2 Pre-Generation Setup

Before every AI generation session:

**Step 1 — Load the brief**
Have the content brief (Section 7.3) open and complete.

**Step 2 — Load the template**
Copy the relevant section of `templates/Universal-Chapter-Template.md` into the session.

**Step 3 — Set the context prompt**

Use this exact context-setting prompt at the start of every generation session:

```
You are generating content for AI Atlas — a free educational platform for JEE, NEET,
and school students in India.

Content standards:
- Beginner-friendly: no assumed knowledge without explanation
- Practical: every section must have something actionable
- No buzzwords, no marketing language, no unrealistic promises
- Include examples, AI tools, prompts, and workflows in every major section
- Free AI tools only

The content I need: [CONTENT BRIEF]
The template to follow: [PASTE RELEVANT TEMPLATE SECTION]
The audience: [SPECIFIC AUDIENCE]
The exam: [JEE MAIN / JEE ADVANCED / NEET / CBSE CLASS X]

Generate one section at a time. After each section, I will verify accuracy before
asking for the next section. Begin with [SECTION NAME].
```

**Step 4 — Generate section by section**

Do not generate entire documents in one prompt. Generate major sections sequentially. After each section:
- Verify factual claims
- Check that prompts are copy-paste ready
- Confirm the section matches the template structure
- Then request the next section

### 11.3 Section-Specific Generation Prompts

**For Formula Sheets:**
```
Generate the Formula Sheet section for [CHAPTER] in [SUBJECT] for [EXAM].
For each formula: equation, all variables with SI units, exact conditions, and the most
common JEE/NEET trap from that formula.
Verify each formula against NCERT Class [X] Chapter [N].
Do not include formulas that are beyond the [EXAM] syllabus.
```

**For Common Mistakes:**
```
Generate the Common Mistakes section for [CHAPTER] in [SUBJECT] for [EXAM].
Each mistake must:
- Be specific enough that a student thinks "I've done this exact thing"
- Show the wrong working, not just name the mistake
- Explain why the mistake seems right (the convincing logic)
- Give the correct approach in one sentence
Minimum 5 mistakes. Maximum 8.
```

**For PYQ Strategy:**
```
Generate the PYQ Strategy section for [CHAPTER] for [EXAM].
Include:
- A frequency table of sub-topics with approximate appearances per year
- 3 specific question type patterns with their solving approach
- A PYQ solving protocol (step-by-step)
Base frequency estimates on JEE/NEET papers from 2019–2024.
```

**For the 30-Minute Revision Plan:**
```
Generate a 30-Minute Revision Plan for [CHAPTER] for [EXAM].
The plan must be genuinely completable in 30 minutes — not 45 minutes labelled as 30.
Include: exact minute allocations, specific activities for each block,
prompts to paste into Claude, and a readiness assessment table at the end.
```

### 11.4 Post-Generation Verification

After generating any content:

1. **Formula check:** Every formula against NCERT or standard reference
2. **Tool check:** Every AI tool named must be listed in `tools/AI-Tools-Database.md` or be a well-known free tool
3. **Prompt check:** Every prompt must be copy-paste ready with no unfilled placeholders
4. **Consistency check:** Ask Claude: "Does this content contradict anything in [related file]?" Paste related file content for comparison
5. **Readability check:** Paste into [Hemingway Editor](https://hemingwayapp.com) — target Grade 8 reading level or below

### 11.5 AI Tool Selection for Generation

| Content type | Recommended tool | Why |
|-------------|-----------------|-----|
| Chapter pages | Claude | Long context, structured output, nuanced explanations |
| Prompt libraries | Claude | Understands its own prompting patterns |
| Workflow documentation | Claude | Process-oriented reasoning |
| Tool descriptions | Claude + web search | Needs current information |
| Formula sheets | Claude + Wolfram Alpha | Formula verification |
| Database entries (tables) | Claude | Consistent formatting |

---

## 12. GitHub Management Workflow

### 12.1 Branch Strategy

```
main                    ← always production-ready, never commits directly
  │
  ├── develop           ← integration branch, all features merge here first
  │     │
  │     ├── feat/[slug] ← new content additions
  │     ├── update/[slug] ← content updates
  │     ├── fix/[slug]  ← bug fixes and corrections
  │     └── contrib/[handle]/[slug] ← external contributions
  │
  └── hotfix/[slug]     ← critical factual corrections, merge directly to main
```

**Rules:**
- Never commit directly to `main`
- `develop` is merged to `main` only when a release is ready (see Release Schedule)
- Hotfixes merge to both `main` and `develop`
- Feature branches are deleted after merge

### 12.2 Commit Message Standards

All commit messages follow this format:

```
[type]: [brief description in present tense]

[optional body — explains WHY, not WHAT]

[optional footer — references issues]
```

**Types:**

| Type | When to use |
|------|-------------|
| `feat` | New content added (new chapter, new prompts, new workflow) |
| `update` | Existing content changed (tool info, exam patterns, corrections) |
| `fix` | Factual error corrected |
| `docs` | Meta/infrastructure changes (this document, README updates) |
| `style` | Formatting fixes only (no content change) |
| `refactor` | File reorganised or renamed (no content change) |
| `chore` | Maintenance tasks (link checking, index updates) |

**Examples:**
```bash
feat: add jee-physics-rotational-motion chapter page

Covers JEE Main and Advanced. Includes all 11 template sections,
12 formulas with conditions, 6 common mistakes, PYQ pattern from 2019–2024.

Closes #42

---

fix: correct Nernst equation in jee-chemistry-electrochemistry

Temperature variable was in Celsius, should be Kelvin.
Source: NCERT Class 12 Chemistry Chapter 3, p.79

Closes #67

---

update: refresh tool URLs in AI-Tools-Database

Wolfram Alpha URL changed, Photomath URL updated, 3 tools verified current.
```

### 12.3 Pull Request Standards

Every PR must include a description using this template:

```markdown
## What this PR does
[One paragraph describing the content being added or changed]

## Files changed
- [filepath]: [what changed]
- [filepath]: [what changed]

## QC checklist
- [ ] File naming standards followed
- [ ] Header block complete
- [ ] Content Standards met
- [ ] All links verified
- [ ] Added to INDEX.md
- [ ] Added to cross-reference.md
- [ ] README updated

## Related issues
Closes #[issue number]

## Notes for reviewer
[anything that needs particular attention]
```

PRs without a complete description will be returned without review.

### 12.4 Release Schedule

AI Atlas uses monthly releases:

| Release type | Frequency | Branch | Naming |
|-------------|-----------|--------|--------|
| **Monthly release** | 1st of each month | `develop` → `main` | `v1.YYYY.MM` |
| **Hotfix release** | As needed | `hotfix/*` → `main` | `v1.YYYY.MM.1` |

**Release process:**
1. Create release branch from `develop`: `release/v1.YYYY.MM`
2. Final QC pass on all changed files
3. Update `meta/changelog.md` with release notes
4. Update root `README.md` "Recently Added" section
5. Merge to `main`
6. Tag the release: `git tag v1.YYYY.MM`
7. Delete the release branch

### 12.5 Issue Management

Issues are the primary communication channel for all work. Every issue must have:
- One of these labels: `bug`, `content-request`, `enhancement`, `question`, `duplicate`, `wontfix`
- An assignee (if in progress)
- A milestone (which release it targets)

**Issue templates** (stored in `.github/ISSUE_TEMPLATE/`):
- `bug-report.md`
- `content-request.md`
- `question.md`

---

## 13. Publishing Workflow

### 13.1 From Draft to Live

```
Draft file on local machine
        │
        ▼
git add + git commit (on feature branch)
        │
        ▼
Push to GitHub (feature branch)
        │
        ▼
Open Pull Request (with complete description)
        │
        ▼
Human review (check Section 9 QC checklist)
        │
      ┌─┴─────────────────┐
      ▼                   ▼
 Pass QC              Fail QC
      │                   │
      ▼                   ▼
Merge to develop      Return to author
      │                   │
      ▼                   └─→ Author revises → resubmit
Monthly release cycle
      │
      ▼
Merge develop to main
      │
      ▼
Content is live
```

### 13.2 Pre-Publish Final Check

Immediately before merging to `main`, verify:

1. `README.md` updated with new content
2. Directory `INDEX.md` updated
3. `meta/cross-reference.md` updated
4. `meta/changelog.md` updated with the release entry
5. Backlog entry set to "Complete"
6. All links in the new file verified live

### 13.3 Post-Publish Actions

After publishing:

1. Close the related GitHub Issue
2. Update `meta/update-log.md`
3. Update the `meta/backlog.md` entry to "Published"
4. If the content is high-value, consider announcing via the project's communication channel

---

## 14. Missing Assets Register

*This register is maintained as the authoritative list of known gaps. Priority is assigned by: audience size × content impact.*

### 14.1 Critical Missing Assets (P1 — Block student progress)

| ID | Missing Asset | Type | Audience | Blocks | Estimated effort |
|----|--------------|------|----------|--------|-----------------|
| M-001 | NEET AI Prompt Library | Prompt library | NEET (large audience) | NEET students have no prompts | 4–6 hours |
| M-002 | NEET Complete Study System | Study system | NEET | NEET students have no complete framework | 8–10 hours |
| M-003 | JEE Physics complete study system file | Study system file | JEE | Currently embedded in workflows, needs own file | 3–4 hours |
| M-004 | JEE Chemistry complete study system file | Study system file | JEE | Same issue | 3–4 hours |
| M-005 | JEE Mathematics complete study system file | Study system file | JEE | Same issue | 3–4 hours |
| M-006 | Class 10 CBSE Study System | Study system | School (largest audience) | School students lack a complete system | 6–8 hours |
| M-007 | Root README.md | Navigation | All | Repository is not navigable without this | 1 hour |
| M-008 | Directory INDEX.md files | Navigation | All | Files are not discoverable | 2 hours (all indices) |
| M-009 | meta/backlog.md | Infrastructure | Contributors | No content pipeline management | 30 min |
| M-010 | meta/cross-reference.md | Infrastructure | Contributors | No cross-reference map | 1 hour |

### 14.2 High Priority Missing Assets (P2 — Significant gaps)

| ID | Missing Asset | Type | Audience | Notes |
|----|--------------|------|----------|-------|
| M-011 | 50 NEET Prompts | Prompt library | NEET | Mirror of JEE prompt library |
| M-012 | 25 School Student Prompts | Prompt library | School | Simpler prompts for Class 9–10 |
| M-013 | NEET Biology chapter pages (top 10) | Chapter pages | NEET | Cell Division, Genetics, Human Physiology, Photosynthesis, etc. |
| M-014 | JEE Physics chapter pages (top 5) | Chapter pages | JEE | Mechanics, Thermodynamics, Electrostatics, Waves, Modern Physics |
| M-015 | Tool setup guides (Anki, Notion, Claude) | Tool profiles | All | Students need setup help for complex tools |
| M-016 | Claude for students guide | Tool profile | All | Most important tool, deserves dedicated guide |
| M-017 | Free textbooks and resources page | Resources | All | NCERT, other free sources |
| M-018 | Hindi language versions of top 5 pages | Translation | All (rural India) | Accessibility for non-English students |
| M-019 | Career guides (after JEE, after NEET) | Career | JEE/NEET | Platform scope says Career Guides are a pillar |
| M-020 | Contribution guide for external contributors | Meta | Contributors | Currently no public guide exists |

### 14.3 Medium Priority Missing Assets (P3)

| ID | Missing Asset | Audience |
|----|--------------|----------|
| M-021 | JEE Chemistry chapter pages (top 5 Organic) | JEE |
| M-022 | JEE Mathematics chapter pages (top 5) | JEE |
| M-023 | Class 12 board exam study system | School |
| M-024 | NTSE/Olympiad preparation guide | School |
| M-025 | AI for research (college students) | College |
| M-026 | Freelancers and creators AI tools guide | Freelancers |
| M-027 | Parents' guide to AI in education | Parents |
| M-028 | Teacher's guide to AI tools | Teachers |

### 14.4 Minimum Viable Repository (MVR)

The minimum set of assets needed before AI Atlas can be called "usable" for its primary audience:

**MVR Checklist:**
- [ ] M-007 — Root README.md
- [ ] M-008 — Directory INDEX.md files
- [ ] M-001 — NEET AI Prompt Library
- [ ] M-003, M-004, M-005 — Subject-specific study system files (extract from existing workflows)
- [ ] M-006 — Class 10 CBSE Study System
- [ ] M-020 — Contribution guide

**Estimated time to MVR:** 20–25 hours of focused work

---

## 15. Bottleneck Analysis

### 15.1 Current Bottlenecks

**Bottleneck 1 — Single-person content generation**
*Severity: High*

All content is currently generated in one-off sessions without a structured pipeline. There is no queue, no parallel generation, and no batch processing.

*Impact:* Content creation rate is limited by one person's available hours.
*Fix:* Formalise the backlog and brief system (Section 7.2). Enable contributors to pick up backlog items independently.

---

**Bottleneck 2 — No navigation infrastructure**
*Severity: High*

The repository currently has no README, no INDEX files, and no cross-reference map. Content exists but is not discoverable.

*Impact:* A visitor to the repository cannot find what they need.
*Fix:* M-007 and M-008 are P1 — these must be built before any new content is added.

---

**Bottleneck 3 — Embedded content not extractable**
*Severity: Medium*

The 5 study systems (JEE Physics, JEE Chemistry, JEE Maths, NEET Biology, Class 10 Science) are embedded inside `AI-Educational-Workflows.md` as interactive widget code rather than standalone markdown files.

*Impact:* These systems cannot be linked to, searched, or contributed to independently.
*Fix:* Extract each study system into its own file under `study-systems/`. Keep the interactive widget as a reference or embed it in the new file.

---

**Bottleneck 4 — No quality control process in place**
*Severity: Medium*

Content has been generated without a formal QC checklist. Factual errors could exist in published content.

*Impact:* Student trust is damaged when errors are found.
*Fix:* Retroactively run the QC checklist (Section 9) on all existing files and log results.

---

**Bottleneck 5 — AI generation produces inconsistent formatting**
*Severity: Medium*

Different generation sessions produce different heading styles, table formats, and prompt formats — because each session starts without the same context.

*Impact:* The repository feels fragmented. Cross-file linking is harder.
*Fix:* The context-setting prompt in Section 11.3 must be used at the start of every session. A formatting linter (see Automation section) will catch residual inconsistencies.

---

**Bottleneck 6 — No contributor onboarding**
*Severity: Low (until external contributions begin)*

There is no public contribution guide, no issue templates, and no PR templates.

*Impact:* External contributors cannot help without significant guidance overhead.
*Fix:* Build M-020 (contribution guide) before soliciting external contributions.

---

### 15.2 Bottleneck Priority Matrix

```
High severity + Easy to fix   → Fix immediately (B2, B1)
High severity + Hard to fix   → Plan sprint (B3)
Medium severity + Easy to fix → Fix in next release (B4, B5)
Low severity + Easy to fix    → Fix when convenient (B6)
```

---

## 16. Automation Opportunities

### 16.1 Immediate Automation (implement within 30 days)

**Auto-1 — Broken link checker**
*Tool:* `markdown-link-check` (npm package, free)
*How:* GitHub Action that runs on every PR to `develop`
*Prevents:* Merging content with broken links

```yaml
# .github/workflows/link-check.yml
name: Link Checker
on: [pull_request]
jobs:
  link-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Check links
        uses: gaurav-nelson/github-action-markdown-link-check@v1
        with:
          use-quiet-mode: 'yes'
          use-verbose-mode: 'yes'
```

---

**Auto-2 — Markdown linter**
*Tool:* `markdownlint` (free)
*How:* GitHub Action that runs on every PR
*Prevents:* Heading hierarchy violations, inconsistent list formatting, missing blank lines

```yaml
# .github/workflows/markdown-lint.yml
name: Markdown Lint
on: [pull_request]
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: DavidAnson/markdownlint-cli2-action@v13
        with:
          globs: '**/*.md'
```

---

**Auto-3 — File naming validator**
*Tool:* Custom shell script
*How:* GitHub Action that checks all changed filenames against naming rules
*Prevents:* Uppercase letters, underscores, and version numbers in filenames

```bash
#!/bin/bash
# scripts/validate-filenames.sh
for file in $(git diff --name-only HEAD); do
  basename=$(basename "$file")
  if [[ "$basename" =~ [A-Z] ]]; then
    echo "ERROR: Uppercase in filename: $file"
    exit 1
  fi
  if [[ "$basename" =~ _ ]]; then
    echo "ERROR: Underscore in filename: $file"
    exit 1
  fi
done
```

---

### 16.2 Near-Term Automation (implement within 90 days)

**Auto-4 — Automatic INDEX.md generation**
*Tool:* Custom Python script
*How:* Runs weekly via GitHub Action. Scans each directory and auto-updates INDEX.md with new files.
*Value:* Eliminates manual INDEX.md maintenance.

```python
# scripts/update-index.py
# Scans directory, reads each .md file's header block,
# extracts Title, Type, Audience, Status, Last updated
# Regenerates INDEX.md table automatically
```

---

**Auto-5 — Cross-reference map auto-update**
*Tool:* Custom Python script
*How:* On merge to `develop`, scans all files for internal links and updates `meta/cross-reference.md`
*Value:* Cross-reference never goes stale.

---

**Auto-6 — QC checklist auto-checker**
*Tool:* Custom Python script
*How:* Checks 80% of the QC checklist automatically (file structure, heading hierarchy, header block, code blocks for prompts). The 20% requiring human judgment (factual accuracy, "no buzzwords") remains manual.
*Value:* Reduces QC review time from 20 minutes to 5 minutes.

---

**Auto-7 — Stale content detector**
*Tool:* GitHub Action (scheduled)
*How:* Monthly job that identifies files where `Last updated:` is older than the review frequency threshold (Section 8.3). Opens an Issue automatically.
*Value:* No content goes stale silently.

---

### 16.3 Long-Term Automation (implement within 12 months)

**Auto-8 — AI content generation pipeline**
*Tool:* Claude API + custom scripts
*How:* Maintainer adds an item to `meta/backlog.md` with a complete brief. A script picks it up, runs the AI Generation Workflow automatically, and creates a draft PR for human review.
*Value:* Multiplies content production rate 5–10×.
*Caution:* Human review remains mandatory. Automation creates drafts; humans approve and publish.

---

**Auto-9 — Tool database auto-verifier**
*Tool:* Python + web scraping
*How:* Monthly check of all URLs in `AI-Tools-Database.md`. Flags tool pricing changes and broken tool links.
*Value:* Tool database stays accurate without manual quarterly checks.

---

**Auto-10 — Contribution pipeline assistant**
*Tool:* GitHub Issue templates + Claude integration
*How:* When a contributor opens a content-request Issue, an automated response provides the exact template, file path, and naming convention they need. Reduces maintainer time per contributor from 30 minutes to 5 minutes.

---

## 17. Future Growth Roadmap

### 17.1 Growth Phases

```
Phase 1 — Foundation (Months 1–3)
Build MVR. Establish infrastructure. Fix navigation.

Phase 2 — Content Depth (Months 4–8)
Build top 20 chapter pages. Launch NEET content. Grow contributor base.

Phase 3 — Content Breadth (Months 9–18)
Cover full JEE/NEET syllabus. Add school content. Launch Hindi versions.

Phase 4 — Platform Expansion (Months 18–36)
Add career guides. Add college student content. Build community features.
```

### 17.2 Phase 1 — Foundation (Priority actions)

| Action | Owner | Deadline | Dependency |
|--------|-------|----------|------------|
| Build root README.md | Core team | Week 1 | None |
| Build all INDEX.md files | Core team | Week 1 | README |
| Extract 5 study systems into standalone files | Core team | Week 2 | Naming standards |
| Build meta/backlog.md | Core team | Week 2 | None |
| Build meta/cross-reference.md | Core team | Week 2 | INDEX files |
| Implement Auto-1 (link checker) | Core team | Week 3 | GitHub repo |
| Implement Auto-2 (markdown linter) | Core team | Week 3 | GitHub repo |
| Build NEET Prompt Library | Content team | Week 4 | NEET study system |
| Retroactive QC on existing 6 files | Core team | Week 4 | QC checklist |
| Publish contribution guide | Core team | Week 4 | All above |

### 17.3 Phase 2 — Content Depth

**Target: Top 20 chapter pages**

Selection criteria: highest JEE/NEET weightage + most student searches.

JEE Physics priority: Mechanics, Thermodynamics, Electrostatics, Current Electricity, Wave Optics
JEE Chemistry priority: Chemical Equilibrium, Electrochemistry, Organic Reactions (3 pages), Coordination Compounds
JEE Mathematics priority: Calculus (2 pages), Coordinate Geometry, P&C + Probability, Complex Numbers
NEET Biology priority: Cell Division, Genetics, Human Physiology (2 pages), Photosynthesis, Plant Kingdom

**Each chapter page uses:** Universal Chapter Template → JEE/NEET variant → AI Generation Workflow

**Target: 50 NEET-specific prompts**

Mirror the structure of JEE-AI-Prompt-Library.md with 5 categories × 10 prompts, adapted for NEET's NCERT-first approach.

### 17.4 Phase 3 — Content Breadth

**Full syllabus coverage**

JEE Physics: 29 chapters (5 done in Phase 2, 24 remaining)
JEE Chemistry: 30 chapters (5 done, 25 remaining)
JEE Mathematics: 16 chapters (5 done, 11 remaining)
NEET Biology: 38 chapters (5 done, 33 remaining)

*At 2 chapter pages per week per contributor, full coverage takes 12–18 months with 3–4 active contributors.*

**Hindi language versions**

Priority: Start with the 10 most-used pages. Partner with Hindi-fluent contributors.
Format: `[filename]-hi.md` in the same directory.

**School content expansion**

Class 6–8 foundation pages (Science and Maths)
Class 9 complete study system
Class 11–12 all subjects (Science, Commerce, Humanities streams)

### 17.5 Phase 4 — Platform Expansion

**Career guides pillar** (already in project vision)
- After JEE: branch selection, college comparison, placement guide
- After NEET: MBBS vs other medical options, exam sequence
- AI careers: emerging roles, skill-building path for students

**College student content**
- AI for engineering students
- AI for research and thesis writing
- AI for competitive exams (CAT, UPSC foundation)

**Community features**
- Discussion threads on GitHub Discussions
- "Study groups" wiki pages maintained by student communities
- Monthly AI tool updates contributed by community

### 17.6 Long-Term Vision: The Wikipedia of AI Learning

The Project Vision states: "Become the Wikipedia of AI Learning."

The operational implication of this goal:

| Wikipedia characteristic | AI Atlas equivalent |
|--------------------------|---------------------|
| Every topic has a page | Every JEE/NEET chapter has a page |
| Pages link to each other | Internal linking system (Section 6) |
| Anyone can contribute | Contribution workflow (Section 10) |
| Errors are corrected quickly | Bug report process (Section 10.2) |
| Content is neutral and factual | Content standards (no marketing language) |
| Free forever | Free-first ethos, GitHub-hosted |
| Continuously updated | Scheduled review calendar (Section 8.3) |

To reach Wikipedia-scale, AI Atlas needs:
- 500+ content pages (currently: 6)
- 50+ active contributors
- Automation handling 80% of maintenance
- A community that self-corrects errors

The operating system in this document is the infrastructure that makes that scale possible.

---

## Appendix A — File Header Block Reference

Every content file must begin with this block. Copy and fill before writing any content.

```markdown
# [Page Title]
**Type:** [Chapter Page / Prompt Library / Workflow / Study System / Tool Profile / Template / Meta]
**Audience:** [JEE / NEET / School / All Students / Contributors]
**Subject:** [JEE Physics / JEE Chemistry / JEE Mathematics / NEET Biology / All / etc.]
**Exam:** [JEE Main / JEE Advanced / NEET UG / CBSE Class 10 / CBSE Class 12 / N/A]
**Status:** [Draft / In Review / Complete]
**Last updated:** [YYYY-MM]
**Related:**
- [descriptive link text](relative/path/to/file.md)
- [descriptive link text](relative/path/to/file.md)

---
```

---

## Appendix B — Quick Reference Card for Contributors

*Print this or keep it open during any contribution session.*

**Before starting:** Is this in the backlog? Is the brief complete?
**File location:** `[directory per Section 2.1]/[name per Section 4.2]`
**File header:** Copy Appendix A. Fill every field.
**Template:** `templates/Universal-Chapter-Template.md`
**Generation:** One section at a time. Verify before next section.
**QC:** Every checkbox in Section 9.1 must be ✅
**Commit message:** `[type]: [brief description]` — see Section 12.2
**PR:** Use the PR template. Complete description. Link the Issue.
**After merge:** Close Issue. Update cross-reference. Update README.

**Emergency contact for QC questions:** Open a GitHub Issue with label `question`.

---

## Appendix C — Changelog Template

`meta/changelog.md` uses this format for every entry:

```markdown
## v1.2025.06 — June 2025

### Added
- `chapters/jee-physics/mechanics/jee-physics-rotational-motion.md` — complete chapter page
- `prompts/neet/NEET-AI-Prompt-Library.md` — 50 NEET-specific prompts

### Updated
- `tools/AI-Tools-Database.md` — Claude and Wolfram Alpha URLs refreshed

### Fixed
- `prompts/JEE-AI-Prompt-Library.md` — corrected Nernst equation in prompt D-05

### Infrastructure
- Added `.github/workflows/link-check.yml` — automatic broken link detection
- Built `workflows/INDEX.md`

### Contributors
- [handle] contributed `chapters/neet-biology/cell-division.md`
```

---

## Appendix D — Subject Code and Audience Tag Reference

Use these exact strings everywhere: filenames, file headers, INDEX tables, cross-reference map.

**Exam codes:**
`JEE-MAIN` | `JEE-ADVANCED` | `NEET-UG` | `CBSE-10` | `CBSE-12` | `OLYMPIAD` | `ALL`

**Subject codes (for filenames):**
`jee-physics` | `jee-chemistry` | `jee-maths` | `neet-biology` | `neet-physics` | `neet-chemistry` | `class10-science` | `class10-maths` | `class12-physics` | `class12-chemistry` | `class12-biology` | `class12-maths` | `foundation`

**Audience tags (for file headers):**
`JEE` | `NEET` | `School` | `JEE + NEET` | `All Students` | `Contributors`

**Content type tags (for file headers):**
`Chapter Page` | `Prompt Library` | `Workflow` | `Study System` | `Tool Profile` | `Template` | `Meta` | `Index` | `Resource List` | `Career Guide`

---

*AI Atlas Operating System — Version 1.0*
*Maintained by the AI Atlas core team*
*This document is the authoritative reference for all platform operations.*
*All contributors must read and follow this document before making any contribution.*
