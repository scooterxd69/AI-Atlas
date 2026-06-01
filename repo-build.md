# AI Atlas — Repository Build Specification
**Path:** `meta/repo-build.md`
**Type:** Meta / Infrastructure
**Version:** 1.0
**Status:** Active
**Last updated:** 2025-05
**Authority:** This document defines the complete repository structure. Supersedes any partial specifications elsewhere.

---

## 1. Repository Tree — Complete

```
ai-atlas/
│
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── SECURITY.md
│
├── .github/
│   ├── workflows/
│   │   ├── link-check.yml
│   │   ├── markdown-lint.yml
│   │   ├── filename-validate.yml
│   │   ├── stale-content.yml
│   │   └── deploy-pages.yml
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug-report.md
│   │   ├── content-request.md
│   │   └── question.md
│   └── PULL_REQUEST_TEMPLATE.md
│
├── meta/
│   ├── ai-atlas-operating-system.md       ← V1 COMPLETE
│   ├── repo-build.md                      ← THIS FILE
│   ├── content-standards.md
│   ├── project-vision.md
│   ├── changelog.md
│   ├── backlog.md
│   ├── cross-reference.md
│   ├── contributors.md
│   ├── update-log.md
│   └── qc-failure-log.md
│
├── sitemap/
│   ├── INDEX.md
│   └── ai-atlas-sitemap.md                ← V1 COMPLETE
│
├── templates/
│   ├── INDEX.md
│   ├── universal-chapter-template.md      ← V1 COMPLETE (rename from Universal-Chapter-Template.md)
│   ├── prompt-template.md
│   ├── workflow-template.md
│   └── tool-profile-template.md
│
├── prompts/
│   ├── INDEX.md
│   ├── jee/
│   │   ├── INDEX.md
│   │   ├── jee-ai-prompt-library.md       ← V1 COMPLETE (rename from JEE-AI-Prompt-Library.md)
│   │   ├── jee-physics-prompts.md         ← V2
│   │   ├── jee-chemistry-prompts.md       ← V2
│   │   └── jee-mathematics-prompts.md     ← V2
│   ├── neet/
│   │   ├── INDEX.md
│   │   ├── neet-ai-prompt-library.md      ← V2 PRIORITY
│   │   ├── neet-biology-prompts.md        ← V2
│   │   └── neet-physics-chemistry-prompts.md ← V2
│   └── school/
│       ├── INDEX.md
│       ├── school-ai-prompt-library.md    ← V2
│       ├── class10-prompts.md             ← V2
│       └── class12-prompts.md             ← V3
│
├── workflows/
│   ├── INDEX.md
│   ├── ai-educational-workflows.md        ← V1 COMPLETE (rename from AI-Educational-Workflows.md)
│   └── subject-specific/
│       ├── INDEX.md
│       ├── jee-physics-workflow.md        ← V2 (extracted from master)
│       ├── jee-chemistry-workflow.md      ← V2
│       ├── jee-mathematics-workflow.md    ← V2
│       ├── neet-biology-workflow.md       ← V2
│       └── class10-science-workflow.md    ← V2
│
├── tools/
│   ├── INDEX.md
│   ├── ai-tools-database.md               ← V1 COMPLETE (rename from AI-Tools-Database.md)
│   └── tool-profiles/
│       ├── INDEX.md
│       ├── claude-for-students.md         ← V2 PRIORITY
│       ├── anki-setup-guide.md            ← V2 PRIORITY
│       ├── notion-study-system.md         ← V2
│       ├── chatgpt-for-students.md        ← V2
│       ├── gemini-for-students.md         ← V2
│       ├── wolfram-alpha-guide.md         ← V3
│       ├── desmos-guide.md                ← V3
│       └── phet-guide.md                  ← V3
│
├── study-systems/
│   ├── INDEX.md
│   ├── jee/
│   │   ├── INDEX.md
│   │   ├── jee-main-complete-study-system.md    ← V1 EXTRACT FROM WORKFLOWS
│   │   ├── jee-advanced-complete-study-system.md ← V1 EXTRACT FROM WORKFLOWS
│   │   ├── jee-physics-study-system.md          ← V1 EXTRACT FROM WORKFLOWS
│   │   ├── jee-chemistry-study-system.md        ← V1 EXTRACT FROM WORKFLOWS
│   │   └── jee-mathematics-study-system.md      ← V1 EXTRACT FROM WORKFLOWS
│   ├── neet/
│   │   ├── INDEX.md
│   │   ├── neet-complete-study-system.md        ← V2 PRIORITY
│   │   ├── neet-biology-study-system.md         ← V2 PRIORITY
│   │   └── neet-physics-chemistry-system.md     ← V2
│   └── school/
│       ├── INDEX.md
│       ├── class10-cbse-study-system.md         ← V2 PRIORITY
│       ├── class12-science-study-system.md      ← V2
│       ├── class12-commerce-study-system.md     ← V3
│       ├── class12-humanities-study-system.md   ← V3
│       └── class6-8-foundation-system.md        ← V3
│
├── chapters/
│   ├── INDEX.md
│   │
│   ├── jee-physics/
│   │   ├── INDEX.md
│   │   ├── mechanics/
│   │   │   ├── INDEX.md
│   │   │   ├── jee-physics-kinematics.md               ← V2
│   │   │   ├── jee-physics-laws-of-motion.md           ← V2
│   │   │   ├── jee-physics-work-energy-power.md        ← V2 PRIORITY
│   │   │   ├── jee-physics-rotational-motion.md        ← V2 PRIORITY
│   │   │   ├── jee-physics-gravitation.md              ← V2
│   │   │   └── jee-physics-shm.md                     ← V2 PRIORITY
│   │   ├── thermodynamics/
│   │   │   ├── INDEX.md
│   │   │   ├── jee-physics-thermodynamics.md           ← V2 PRIORITY
│   │   │   └── jee-physics-kinetic-theory.md           ← V2
│   │   ├── electromagnetism/
│   │   │   ├── INDEX.md
│   │   │   ├── jee-physics-electrostatics.md           ← V2 PRIORITY
│   │   │   ├── jee-physics-current-electricity.md      ← V2 PRIORITY
│   │   │   ├── jee-physics-magnetic-effects.md         ← V2
│   │   │   ├── jee-physics-electromagnetic-induction.md ← V2
│   │   │   └── jee-physics-alternating-current.md      ← V3
│   │   ├── optics/
│   │   │   ├── INDEX.md
│   │   │   ├── jee-physics-ray-optics.md               ← V2 PRIORITY
│   │   │   └── jee-physics-wave-optics.md              ← V2 PRIORITY
│   │   └── modern-physics/
│   │       ├── INDEX.md
│   │       ├── jee-physics-dual-nature.md              ← V2
│   │       ├── jee-physics-atoms-nuclei.md             ← V2
│   │       └── jee-physics-semiconductors.md           ← V2
│   │
│   ├── jee-chemistry/
│   │   ├── INDEX.md
│   │   ├── physical/
│   │   │   ├── INDEX.md
│   │   │   ├── jee-chemistry-mole-concept.md           ← V2 PRIORITY
│   │   │   ├── jee-chemistry-atomic-structure.md       ← V2
│   │   │   ├── jee-chemistry-chemical-equilibrium.md   ← V2 PRIORITY
│   │   │   ├── jee-chemistry-ionic-equilibrium.md      ← V2
│   │   │   ├── jee-chemistry-thermodynamics.md         ← V2
│   │   │   ├── jee-chemistry-electrochemistry.md       ← V2 PRIORITY
│   │   │   ├── jee-chemistry-chemical-kinetics.md      ← V2
│   │   │   └── jee-chemistry-solutions.md              ← V2
│   │   ├── organic/
│   │   │   ├── INDEX.md
│   │   │   ├── jee-chemistry-organic-basics.md         ← V2 PRIORITY
│   │   │   ├── jee-chemistry-hydrocarbons.md           ← V2
│   │   │   ├── jee-chemistry-haloalkanes.md            ← V2
│   │   │   ├── jee-chemistry-alcohols-phenols.md       ← V2
│   │   │   ├── jee-chemistry-carbonyl-compounds.md     ← V2 PRIORITY
│   │   │   ├── jee-chemistry-amines.md                 ← V2
│   │   │   └── jee-chemistry-biomolecules.md           ← V2
│   │   └── inorganic/
│   │       ├── INDEX.md
│   │       ├── jee-chemistry-periodic-table.md         ← V2
│   │       ├── jee-chemistry-chemical-bonding.md       ← V2 PRIORITY
│   │       ├── jee-chemistry-s-block.md                ← V2
│   │       ├── jee-chemistry-p-block.md                ← V2 PRIORITY
│   │       ├── jee-chemistry-d-f-block.md              ← V2
│   │       └── jee-chemistry-coordination-compounds.md ← V2 PRIORITY
│   │
│   ├── jee-mathematics/
│   │   ├── INDEX.md
│   │   ├── algebra/
│   │   │   ├── INDEX.md
│   │   │   ├── jee-maths-complex-numbers.md            ← V2 PRIORITY
│   │   │   ├── jee-maths-quadratic-equations.md        ← V2
│   │   │   ├── jee-maths-sequences-series.md           ← V2
│   │   │   ├── jee-maths-binomial-theorem.md           ← V2
│   │   │   ├── jee-maths-permutations-combinations.md  ← V2 PRIORITY
│   │   │   ├── jee-maths-probability.md                ← V2 PRIORITY
│   │   │   └── jee-maths-matrices-determinants.md      ← V2
│   │   ├── calculus/
│   │   │   ├── INDEX.md
│   │   │   ├── jee-maths-limits-continuity.md          ← V2
│   │   │   ├── jee-maths-differentiation.md            ← V2 PRIORITY
│   │   │   ├── jee-maths-applications-derivatives.md   ← V2 PRIORITY
│   │   │   ├── jee-maths-integration.md                ← V2 PRIORITY
│   │   │   └── jee-maths-differential-equations.md     ← V2
│   │   ├── coordinate-geometry/
│   │   │   ├── INDEX.md
│   │   │   ├── jee-maths-straight-lines.md             ← V2
│   │   │   ├── jee-maths-circles.md                    ← V2 PRIORITY
│   │   │   ├── jee-maths-parabola.md                   ← V2
│   │   │   ├── jee-maths-ellipse.md                    ← V2
│   │   │   └── jee-maths-hyperbola.md                  ← V2
│   │   ├── trigonometry/
│   │   │   ├── INDEX.md
│   │   │   ├── jee-maths-trigonometric-functions.md    ← V2
│   │   │   └── jee-maths-inverse-trig.md               ← V2
│   │   └── vectors-3d/
│   │       ├── INDEX.md
│   │       ├── jee-maths-vectors.md                    ← V2
│   │       └── jee-maths-3d-geometry.md                ← V2
│   │
│   ├── neet-biology/
│   │   ├── INDEX.md
│   │   ├── botany/
│   │   │   ├── INDEX.md
│   │   │   ├── neet-biology-plant-kingdom.md           ← V2 PRIORITY
│   │   │   ├── neet-biology-morphology-plants.md       ← V2
│   │   │   ├── neet-biology-anatomy-plants.md          ← V2
│   │   │   ├── neet-biology-cell-biology.md            ← V2 PRIORITY
│   │   │   ├── neet-biology-cell-division.md           ← V2 PRIORITY
│   │   │   ├── neet-biology-photosynthesis.md          ← V2 PRIORITY
│   │   │   ├── neet-biology-respiration.md             ← V2
│   │   │   ├── neet-biology-plant-growth.md            ← V2
│   │   │   └── neet-biology-ecology.md                 ← V2
│   │   └── zoology/
│   │       ├── INDEX.md
│   │       ├── neet-biology-animal-kingdom.md          ← V2
│   │       ├── neet-biology-human-digestion.md         ← V2 PRIORITY
│   │       ├── neet-biology-human-respiration.md       ← V2
│   │       ├── neet-biology-human-circulation.md       ← V2 PRIORITY
│   │       ├── neet-biology-excretory-system.md        ← V2
│   │       ├── neet-biology-nervous-system.md          ← V2
│   │       ├── neet-biology-endocrine-system.md        ← V2
│   │       ├── neet-biology-reproduction.md            ← V2 PRIORITY
│   │       ├── neet-biology-genetics-mendelian.md      ← V2 PRIORITY
│   │       ├── neet-biology-molecular-genetics.md      ← V2 PRIORITY
│   │       ├── neet-biology-evolution.md               ← V2
│   │       └── neet-biology-biotechnology.md           ← V2
│   │
│   ├── neet-physics/
│   │   ├── INDEX.md
│   │   ├── neet-physics-mechanics.md                   ← V3
│   │   ├── neet-physics-thermodynamics.md              ← V3
│   │   ├── neet-physics-optics.md                      ← V3
│   │   ├── neet-physics-electricity.md                 ← V3
│   │   └── neet-physics-modern-physics.md              ← V3
│   │
│   ├── neet-chemistry/
│   │   ├── INDEX.md
│   │   ├── neet-chemistry-basics.md                    ← V3
│   │   ├── neet-chemistry-organic.md                   ← V3
│   │   └── neet-chemistry-biomolecules.md              ← V3
│   │
│   └── school-science/
│       ├── INDEX.md
│       ├── class9/
│       │   ├── INDEX.md
│       │   ├── class9-science-matter.md                ← V2
│       │   ├── class9-science-atoms-molecules.md       ← V2
│       │   ├── class9-science-cell.md                  ← V2
│       │   ├── class9-science-motion.md                ← V2
│       │   ├── class9-science-force-laws.md            ← V2
│       │   └── class9-science-gravitation.md           ← V2
│       └── class10/
│           ├── INDEX.md
│           ├── class10-science-chemical-reactions.md   ← V2 PRIORITY
│           ├── class10-science-acids-bases.md          ← V2 PRIORITY
│           ├── class10-science-metals-nonmetals.md     ← V2
│           ├── class10-science-carbon-compounds.md     ← V2
│           ├── class10-science-life-processes.md       ← V2 PRIORITY
│           ├── class10-science-control-coordination.md ← V2
│           ├── class10-science-reproduction.md         ← V2
│           ├── class10-science-heredity-evolution.md   ← V2
│           ├── class10-science-light.md                ← V2 PRIORITY
│           ├── class10-science-electricity.md          ← V2 PRIORITY
│           ├── class10-science-magnetic-effects.md     ← V2
│           └── class10-science-energy-sources.md       ← V2
│
├── career-guides/
│   ├── INDEX.md
│   ├── after-jee-what-next.md                          ← V3
│   ├── after-neet-what-next.md                         ← V3
│   ├── iit-branch-selection-guide.md                   ← V3
│   ├── mbbs-bds-college-guide.md                       ← V3
│   ├── ai-careers-for-students.md                      ← V3
│   └── engineering-vs-medicine.md                      ← V3
│
├── resources/
│   ├── INDEX.md
│   ├── free-books-and-pdfs.md                          ← V2
│   ├── youtube-channels-jee.md                         ← V2
│   ├── youtube-channels-neet.md                        ← V2
│   ├── practice-sites.md                               ← V2
│   ├── official-exam-resources.md                      ← V2
│   └── hindi-language-resources.md                     ← V3
│
├── translations/
│   ├── INDEX.md
│   └── hi/                                             ← V3
│       ├── README-hi.md
│       └── [top-10-pages]-hi.md
│
├── scripts/
│   ├── validate-filenames.sh
│   ├── update-index.py
│   ├── update-cross-reference.py
│   ├── check-headers.py
│   ├── stale-content-detector.py
│   └── build-search-index.py
│
└── assets/
    ├── images/
    │   ├── diagrams/
    │   │   └── [chapter-slug]/
    │   ├── screenshots/
    │   └── icons/
    └── data/
        └── search-index.json
```

---

## 2. Every File — Purpose Register

### 2.1 Root Files

| File | Purpose | Audience | Required by |
|------|---------|----------|-------------|
| `README.md` | Repository entry point. Quick-start for all 4 user types. Navigation to every section. | All users | First-time visitors |
| `LICENSE` | MIT licence. Grants free use, adaptation, and redistribution with attribution. | Contributors, institutions | Legal clarity |
| `CONTRIBUTING.md` | Step-by-step guide for external contributors. Links to templates and standards. | Contributors | Contribution pipeline |
| `SECURITY.md` | Process for reporting errors in medical or exam-critical content. | All users | Trust and accuracy |

### 2.2 `.github/` Files

| File | Purpose |
|------|---------|
| `workflows/link-check.yml` | GitHub Action: runs `markdown-link-check` on every PR. Blocks merge if broken links found. |
| `workflows/markdown-lint.yml` | GitHub Action: runs `markdownlint` on every PR. Enforces heading hierarchy and formatting. |
| `workflows/filename-validate.yml` | GitHub Action: validates all changed filenames against naming rules on every PR. |
| `workflows/stale-content.yml` | Scheduled monthly Action: opens Issues for files whose `Last updated:` exceeds review threshold. |
| `workflows/deploy-pages.yml` | GitHub Action: deploys `main` branch to GitHub Pages on every merge. |
| `ISSUE_TEMPLATE/bug-report.md` | Structured template for reporting factual errors. Requires: file path, section, error, correct information, source. |
| `ISSUE_TEMPLATE/content-request.md` | Template for requesting new content. Requires: type, audience, justification, contributor offer. |
| `ISSUE_TEMPLATE/question.md` | Template for questions about content or contribution. Routes to correct maintainer. |
| `PULL_REQUEST_TEMPLATE.md` | Required PR description template. Includes QC self-checklist, files-changed list, issue reference. |

### 2.3 `meta/` Files

| File | Purpose |
|------|---------|
| `ai-atlas-operating-system.md` | **V1 COMPLETE.** Master operations reference. All workflows, standards, naming rules, QC checklists, automation specs, and growth roadmap. |
| `repo-build.md` | **THIS FILE.** Complete repository specification. Every folder, every file, every purpose. |
| `content-standards.md` | Extracted from operating system. Standalone reference for the 6 content rules and 3 avoid rules. Referenced by every contributor. |
| `project-vision.md` | Platform mission, core pillars, primary audience, long-term goal. Referenced at the start of every AI generation session. |
| `changelog.md` | Chronological record of every release. Format: version, date, Added/Updated/Fixed/Infrastructure/Contributors sections. |
| `backlog.md` | Content pipeline. Every planned file with: ID, type, title, audience, priority (P1–P4), owner, status. Nothing is created without a backlog entry. |
| `cross-reference.md` | Concept-to-file map. Every key concept linked to every file that covers it. Updated on every merge. |
| `contributors.md` | Permanent acknowledgement of all contributors. Name/handle, contribution, date. |
| `update-log.md` | Record of every content update: date, file, change type, reason, owner. |
| `qc-failure-log.md` | Tracks QC failures by type. After 3 failures of same type, AI generation workflow is updated to prevent it. |

### 2.4 `sitemap/` Files

| File | Purpose |
|------|---------|
| `INDEX.md` | Directory navigation: lists sitemap file with description and status. |
| `ai-atlas-sitemap.md` | **V1 COMPLETE.** Complete platform sitemap. All 7 sections, all categories, subcategories, ~160 planned pages. Interactive hierarchical display. |

### 2.5 `templates/` Files

| File | Purpose |
|------|---------|
| `INDEX.md` | Lists all templates with: name, content type it applies to, status, which audience it serves. |
| `universal-chapter-template.md` | **V1 COMPLETE.** 5 subject-specific chapter templates (JEE Physics, JEE Chemistry, JEE Maths, NEET Biology, School Science). 11 sections each. 2,159 lines. |
| `prompt-template.md` | Standard structure for a single prompt entry: Purpose, Best Use Case, Prompt, Example Input, Example Output, Optimization Tips. |
| `workflow-template.md` | Standard structure for a workflow: Goal, Ideal User, AI Tools, Inputs, Step-by-Step Process, Example Usage, Expected Outcome, Common Mistakes, Optimization Tips. |
| `tool-profile-template.md` | Standard structure for a deep-dive tool guide: Overview, Setup (step-by-step), Key Features, Student Use Cases, Prompts, Common Issues, FAQ. |

### 2.6 `prompts/` Files

| File | Purpose |
|------|---------|
| `INDEX.md` | Master index of all prompt libraries. Table: file, subject, count, audience, status. Start-here guidance per user type. |
| `jee/INDEX.md` | JEE-specific prompt index. Links to all JEE prompt files. |
| `jee/jee-ai-prompt-library.md` | **V1 COMPLETE.** 50 JEE prompts across 5 categories: Learning (L-01–10), Doubt Solving (D-01–10), Revision (R-01–10), PYQ Analysis (P-01–10), Mock Analysis (M-01–10). 1,902 lines. |
| `jee/jee-physics-prompts.md` | **V2.** Extraction of JEE Library prompts specifically relevant to Physics. Adds Physics-specific prompts not in master library. |
| `jee/jee-chemistry-prompts.md` | **V2.** Same extraction for Chemistry. Adds branch-specific prompts (Physical/Organic/Inorganic). |
| `jee/jee-mathematics-prompts.md` | **V2.** Same extraction for Mathematics. Adds technique-identification specific prompts. |
| `neet/INDEX.md` | NEET prompt index. |
| `neet/neet-ai-prompt-library.md` | **V2 PRIORITY.** 50 NEET prompts. Mirror structure of JEE library, NCERT-first approach. Categories: Learning, NCERT Mastery, Revision, PYQ Analysis, Mock Analysis. |
| `neet/neet-biology-prompts.md` | **V2.** Biology-specific NEET prompts. Diagram mastery, A-R generation, process narration. |
| `neet/neet-physics-chemistry-prompts.md` | **V2.** Physics + Chemistry prompts for NEET. |
| `school/INDEX.md` | School prompt index. |
| `school/school-ai-prompt-library.md` | **V2.** 25 school student prompts. Simpler language. Class 9–10 focus. CBSE board exam format. |
| `school/class10-prompts.md` | **V2.** Class 10 specific prompts. Science + Maths board exam preparation. |
| `school/class12-prompts.md` | **V3.** Class 12 prompts across all streams. |

### 2.7 `workflows/` Files

| File | Purpose |
|------|---------|
| `INDEX.md` | Lists all 25 workflows by number. Table: workflow ID, name, audience, time required, best use case. |
| `ai-educational-workflows.md` | **V1 COMPLETE.** All 25 workflows: Learn a Chapter, Create Notes, Doubt Solving, Daily Revision, PYQ Analysis, Mock Analysis, Formula Revision, Weak Topic Recovery, Concept Mastery, Flashcard Creation, Exam Planner, Last 30 Days, Last 7 Days, Error Log, NCERT Mastery, Organic Chemistry, Mathematics Problem Solving, Biology Diagram Mastery, Speed Training, Score Booster, Group Study, Board Exam, Concept Mapping, Routine Builder, Post-Result Recovery. 3,163 lines. |
| `subject-specific/INDEX.md` | Lists all subject-specific workflow extractions. |
| `subject-specific/jee-physics-workflow.md` | **V2.** Extracts workflows 01, 03, 07, 09, 17, 19 with Physics-specific customisation. |
| `subject-specific/jee-chemistry-workflow.md` | **V2.** Extracts workflows 01, 03, 16 with Chemistry branch customisation (Physical/Organic/Inorganic). |
| `subject-specific/jee-mathematics-workflow.md` | **V2.** Extracts workflows 01, 09, 17, 19 with Mathematics technique focus. |
| `subject-specific/neet-biology-workflow.md` | **V2.** Extracts workflows 01, 15, 18 with NEET NCERT-first approach. |
| `subject-specific/class10-science-workflow.md` | **V2.** Extracts workflows 01, 22 with CBSE board format. |

### 2.8 `tools/` Files

| File | Purpose |
|------|---------|
| `INDEX.md` | Master tools index. Table: category, file, tool count, status. Start-here guidance per student type. |
| `ai-tools-database.md` | **V1 COMPLETE.** 100 AI tools across 12 categories. Each entry: name, free/paid, best for, difficulty, key features, use cases, website. Includes master summary table, recommended stacks by student type, free tier limitations table. 402 lines. |
| `tool-profiles/INDEX.md` | Lists all deep-dive tool guides. |
| `tool-profiles/claude-for-students.md` | **V2 PRIORITY.** Complete Claude guide. Setup, prompt writing, image upload, PDF analysis, study system setup, 20 ready-to-use prompts. |
| `tool-profiles/anki-setup-guide.md` | **V2 PRIORITY.** Anki from zero. Install, first deck, import from CSV, scheduling settings optimised for JEE/NEET, mobile sync. |
| `tool-profiles/notion-study-system.md` | **V2.** Notion study system setup. Templates for chapter notes, error log, backlog, mock tracker. |
| `tool-profiles/chatgpt-for-students.md` | **V2.** ChatGPT free tier maximisation. What works vs what doesn't for students. |
| `tool-profiles/gemini-for-students.md` | **V2.** Gemini + Google Docs + Drive integration. Hindi language use. |
| `tool-profiles/wolfram-alpha-guide.md` | **V3.** Wolfram Alpha for JEE Physics and Maths. Specific query formats. |
| `tool-profiles/desmos-guide.md` | **V3.** Desmos for JEE Maths. Function graphing, conic section exploration. |
| `tool-profiles/phet-guide.md` | **V3.** PhET for JEE Physics. Best simulations per chapter. |

### 2.9 `study-systems/` Files

| File | Purpose |
|------|---------|
| `INDEX.md` | Master index of all study systems. Audience-first navigation: "I'm preparing for JEE Main → start here." |
| `jee/INDEX.md` | JEE study system index. Main vs Advanced. Links to subject-specific systems. |
| `jee/jee-main-complete-study-system.md` | **V1 EXTRACT.** Complete JEE Main system. Extracted and expanded from AI-Educational-Workflows.md. Covers all 3 subjects, full year plan, mock schedule, tool stack. |
| `jee/jee-advanced-complete-study-system.md` | **V1 EXTRACT.** JEE Advanced system. Higher difficulty calibration, multi-concept problems, advanced tool usage. |
| `jee/jee-physics-study-system.md` | **V1 EXTRACT.** Physics-only deep system. Chapter sequence, topic dependencies, tool stack, workflow sequence. |
| `jee/jee-chemistry-study-system.md` | **V1 EXTRACT.** Chemistry-only system. Branch-separated (Physical/Organic/Inorganic) approach. |
| `jee/jee-mathematics-study-system.md` | **V1 EXTRACT.** Mathematics-only system. Technique-first approach, proof requirements, speed training. |
| `neet/INDEX.md` | NEET system index. |
| `neet/neet-complete-study-system.md` | **V2 PRIORITY.** Full NEET system. All 3 subjects, NCERT-first approach, 2-year and 1-year variants. |
| `neet/neet-biology-study-system.md` | **V2 PRIORITY.** Biology deep system. Chapter sequence, diagram masterlist, NCERT coverage tracker. |
| `neet/neet-physics-chemistry-system.md` | **V2.** NEET Physics + Chemistry combined (lower weighting than Biology for NEET). |
| `school/INDEX.md` | School system index. |
| `school/class10-cbse-study-system.md` | **V2 PRIORITY.** Class 10 board preparation system. All subjects, 3-month and 1-month variants, CBSE marking scheme. |
| `school/class12-science-study-system.md` | **V2.** Class 12 Science stream boards. PCM + Biology, practical preparation. |
| `school/class12-commerce-study-system.md` | **V3.** Class 12 Commerce stream. Accountancy, Economics, Business Studies. |
| `school/class12-humanities-study-system.md` | **V3.** Class 12 Humanities stream. |
| `school/class6-8-foundation-system.md` | **V3.** Foundation system for Class 6–8. Building blocks before competitive exam preparation. |

### 2.10 `chapters/` Files

All chapter pages use `universal-chapter-template.md` — the relevant subject section.

Each chapter page contains: Overview, Key Concepts, Best AI Tools, Learning Workflow, Master Prompt, Common Mistakes, PYQ Strategy, Revision Strategy, Formula Sheet, 30-Minute Revision Plan, Advanced Tips.

| Subdirectory | Chapter count (V2 target) | Chapter count (V3 full coverage) |
|-------------|--------------------------|----------------------------------|
| `jee-physics/mechanics/` | 6 | 7 |
| `jee-physics/thermodynamics/` | 2 | 3 |
| `jee-physics/electromagnetism/` | 5 | 5 |
| `jee-physics/optics/` | 2 | 2 |
| `jee-physics/modern-physics/` | 3 | 3 |
| `jee-chemistry/physical/` | 8 | 10 |
| `jee-chemistry/organic/` | 7 | 9 |
| `jee-chemistry/inorganic/` | 6 | 7 |
| `jee-mathematics/algebra/` | 7 | 7 |
| `jee-mathematics/calculus/` | 5 | 5 |
| `jee-mathematics/coordinate-geometry/` | 5 | 5 |
| `jee-mathematics/trigonometry/` | 2 | 2 |
| `jee-mathematics/vectors-3d/` | 2 | 2 |
| `neet-biology/botany/` | 9 | 14 |
| `neet-biology/zoology/` | 12 | 15 |
| `neet-physics/` | 0 | 5 |
| `neet-chemistry/` | 0 | 3 |
| `school-science/class9/` | 6 | 9 |
| `school-science/class10/` | 12 | 12 |
| **Total V2** | **99** | — |
| **Total V3** | — | **125** |

### 2.11 `career-guides/` Files

| File | Purpose |
|------|---------|
| `INDEX.md` | Career guides navigation. |
| `after-jee-what-next.md` | **V3.** IIT admission process, branch selection, gap year options, alternative exams. |
| `after-neet-what-next.md` | **V3.** MBBS counselling, state vs central colleges, AIIMS/JIPMER, alternative paths. |
| `iit-branch-selection-guide.md` | **V3.** Branch comparison by placement, curriculum, growth. AI-assisted decision making. |
| `mbbs-bds-college-guide.md` | **V3.** Government vs private MBBS, fees, state-wise analysis. |
| `ai-careers-for-students.md` | **V3.** Entry-level AI roles, skill paths, certifications, portfolio building for students. |
| `engineering-vs-medicine.md` | **V3.** Structured comparison for students deciding between JEE and NEET preparation. |

### 2.12 `resources/` Files

| File | Purpose |
|------|---------|
| `INDEX.md` | Resources navigation. |
| `free-books-and-pdfs.md` | **V2.** Curated list of free legally available textbooks. NCERT, HC Verma, standard references. |
| `youtube-channels-jee.md` | **V2.** Vetted YouTube channels for JEE. Physics Wallah, Unacademy free, Khan Academy, 3Blue1Brown, MIT OCW. |
| `youtube-channels-neet.md` | **V2.** Vetted channels for NEET. |
| `practice-sites.md` | **V2.** Free practice question platforms. NTA mock portal, Embibe free tier, Allen free tests. |
| `official-exam-resources.md` | **V2.** Official NTA, CBSE, NCERT links. Information bulletins, syllabus documents, official sample papers. |
| `hindi-language-resources.md` | **V3.** Hindi-medium resources for all subjects. |

### 2.13 `scripts/` Files

| File | Language | Purpose |
|------|----------|---------|
| `validate-filenames.sh` | Bash | Checks all changed filenames for uppercase, underscores, version numbers. Runs in GitHub Action on PR. |
| `update-index.py` | Python | Scans each directory, reads file headers, regenerates INDEX.md tables. Runs weekly via GitHub Action. |
| `update-cross-reference.py` | Python | Scans all files for internal links, rebuilds `meta/cross-reference.md`. Runs on merge to develop. |
| `check-headers.py` | Python | Verifies all required header fields (Type, Audience, Subject, Status, Last updated, Related) are present and non-empty. |
| `stale-content-detector.py` | Python | Parses `Last updated:` fields against review thresholds. Opens GitHub Issue for stale files. |
| `build-search-index.py` | Python | Parses all `.md` files, extracts headings and key terms, builds `assets/data/search-index.json` for client-side search. |

---

## 3. Navigation Structure

### 3.1 User Entry Paths

Four primary user types arrive at the repository. Each has a direct path from `README.md`.

```
README.md
    │
    ├── "I'm preparing for JEE"
    │       └── study-systems/jee/jee-main-complete-study-system.md
    │               ├── → prompts/jee/jee-ai-prompt-library.md
    │               ├── → workflows/ai-educational-workflows.md
    │               └── → chapters/jee-physics/ (by subject)
    │
    ├── "I'm preparing for NEET"
    │       └── study-systems/neet/neet-complete-study-system.md
    │               ├── → prompts/neet/neet-ai-prompt-library.md
    │               ├── → workflows/subject-specific/neet-biology-workflow.md
    │               └── → chapters/neet-biology/
    │
    ├── "I'm a school student"
    │       └── study-systems/school/class10-cbse-study-system.md
    │               ├── → prompts/school/school-ai-prompt-library.md
    │               ├── → workflows/subject-specific/class10-science-workflow.md
    │               └── → chapters/school-science/class10/
    │
    └── "I'm new to AI"
            └── tools/ai-tools-database.md
                    ├── → tool-profiles/claude-for-students.md
                    ├── → tool-profiles/anki-setup-guide.md
                    └── → workflows/ai-educational-workflows.md (WF-01)
```

### 3.2 Three-Layer Navigation

```
Layer 1 — README.md (root)
    Single entry point. Four audience paths. Recently added section. Contributing link.

Layer 2 — INDEX.md (per directory)
    One per directory with 3+ files.
    Contents: directory description, file table (name/description/audience/status), start-here guidance.
    Directories requiring INDEX.md:
        meta/, sitemap/, templates/, prompts/, prompts/jee/, prompts/neet/, prompts/school/,
        workflows/, workflows/subject-specific/, tools/, tools/tool-profiles/,
        study-systems/, study-systems/jee/, study-systems/neet/, study-systems/school/,
        chapters/, chapters/jee-physics/, chapters/jee-physics/mechanics/,
        chapters/jee-physics/thermodynamics/, chapters/jee-physics/electromagnetism/,
        chapters/jee-physics/optics/, chapters/jee-physics/modern-physics/,
        chapters/jee-chemistry/, chapters/jee-chemistry/physical/,
        chapters/jee-chemistry/organic/, chapters/jee-chemistry/inorganic/,
        chapters/jee-mathematics/, chapters/jee-mathematics/algebra/,
        chapters/jee-mathematics/calculus/, chapters/jee-mathematics/coordinate-geometry/,
        chapters/jee-mathematics/trigonometry/, chapters/jee-mathematics/vectors-3d/,
        chapters/neet-biology/, chapters/neet-biology/botany/, chapters/neet-biology/zoology/,
        chapters/neet-physics/, chapters/neet-chemistry/,
        chapters/school-science/, chapters/school-science/class9/, chapters/school-science/class10/,
        career-guides/, resources/, translations/

Layer 3 — Individual content files
    The actual pages. Each file is self-contained with header block and Related links.
```

### 3.3 Breadcrumb Standard

Every content file (not INDEX, not meta) includes a breadcrumb in the header:

```markdown
**Path:** [Repository root](../../README.md) → [Section](../INDEX.md) → This page
```

---

## 4. Internal Linking Strategy

### 4.1 Link Density Rules

| File type | Minimum inbound links | Minimum outbound links |
|-----------|----------------------|----------------------|
| Chapter page | 3 (study system + subject INDEX + related chapter) | 5 (workflow, prompts, 2 tools, related chapter) |
| Prompt library | 2 (master index + study system) | 3 (relevant workflows, tool profiles) |
| Workflow file | 2 (master index + study system) | 4 (all tools named, template if used) |
| Study system | 3 (main README + subject INDEX + cross-reference) | 8+ (all chapters, workflows, prompts, tools) |
| Tool profile | 2 (tools INDEX + tools database entry) | 2 (relevant workflows, related tools) |

### 4.2 Cross-Content Links (Required)

The following links must exist in every published file:

**Every chapter page must link to:**
- Its parent study system
- `workflows/ai-educational-workflows.md` at the specific workflow for chapter learning (WF-01)
- `prompts/jee/jee-ai-prompt-library.md` or equivalent at 2+ relevant prompts
- `tools/ai-tools-database.md` at 2+ relevant tools
- At least 1 related chapter (prerequisite or follow-on)

**Every study system must link to:**
- All chapter pages within its scope (updated as chapters are published)
- `workflows/ai-educational-workflows.md` at the mock analysis workflow (WF-06)
- The full prompt library for its audience
- `tools/ai-tools-database.md` at the recommended tool stack

**Every workflow must link to:**
- All AI tools used by name with their `tools/ai-tools-database.md` entry
- Any template referenced
- 2 related workflows
- The audience's study system

### 4.3 Anchor Link Format

GitHub renders H2 headings as lowercase with spaces to hyphens and punctuation removed.

```markdown
[Workflow 06 — Mock Test Analysis](../workflows/ai-educational-workflows.md#workflow-06--mock-test-analysis)
[Prompt L-01](../prompts/jee/jee-ai-prompt-library.md#l-01--first-principles-concept-builder)
```

### 4.4 Link Maintenance Protocol

- All internal links use relative paths, never absolute GitHub URLs
- `scripts/update-cross-reference.py` rebuilds `meta/cross-reference.md` on every merge to `develop`
- `workflows/link-check.yml` GitHub Action verifies all links on every PR
- Renamed files must update all inbound links before merge (checked manually by PR reviewer)

---

## 5. GitHub Pages Structure

### 5.1 Pages Configuration

```yaml
# _config.yml (Jekyll — GitHub Pages default)
title: AI Atlas
description: Free AI education for JEE, NEET, and school students
baseurl: ""
url: "https://ai-atlas.github.io"
theme: jekyll-theme-minimal
markdown: kramdown
plugins:
  - jekyll-relative-links
  - jekyll-optional-front-matter
```

### 5.2 URL Structure

GitHub Pages renders the repository markdown directly. URLs mirror the folder structure:

```
https://ai-atlas.github.io/                                    → README.md
https://ai-atlas.github.io/study-systems/jee/                 → jee/INDEX.md
https://ai-atlas.github.io/chapters/jee-physics/mechanics/    → mechanics/INDEX.md
https://ai-atlas.github.io/prompts/jee/jee-ai-prompt-library  → jee-ai-prompt-library.md
https://ai-atlas.github.io/workflows/ai-educational-workflows  → ai-educational-workflows.md
https://ai-atlas.github.io/tools/ai-tools-database            → ai-tools-database.md
```

### 5.3 Deployment Pipeline

```
Push to main branch
        ↓
deploy-pages.yml GitHub Action triggers
        ↓
Jekyll builds static site from markdown
        ↓
Deployed to GitHub Pages (ai-atlas.github.io)
        ↓
Build time: ~2 minutes
```

### 5.4 Custom Domain (V2)

When contributor base exceeds 10 active members:
- Register `ai-atlas.in` (India-focused TLD)
- Add CNAME file to repository root
- Configure DNS A records to GitHub Pages IPs
- Enable HTTPS via Let's Encrypt (automatic via GitHub Pages)

### 5.5 Pages-Specific Files Required

| File | Purpose |
|------|---------|
| `_config.yml` | Jekyll configuration |
| `404.md` | Custom 404 page with navigation back to README |
| `sitemap.xml` | Auto-generated by Jekyll sitemap plugin for search indexing |
| `robots.txt` | Allows all crawlers; points to sitemap |

---

## 6. Search Structure

### 6.1 Client-Side Search (V1)

GitHub's built-in repository search covers file content. No additional implementation required for V1.

Students use: `site:github.com/ai-atlas [search term]` via Google, or GitHub's native search.

### 6.2 lunr.js Search (V2)

When content exceeds 50 files, implement `lunr.js` (free, open-source client-side search):

```
scripts/build-search-index.py
        ↓
Parses all .md files
Extracts: title, path, H2 headings, first 200 chars of each section, audience tags, subject codes
        ↓
Outputs: assets/data/search-index.json
        ↓
search.md page (GitHub Pages)
Loads search-index.json
Implements lunr.js query interface
Returns results with: title, path, excerpt, audience, subject
```

**Search index fields per document:**

```json
{
  "id": "chapters/jee-physics/mechanics/jee-physics-rotational-motion",
  "title": "JEE Physics — Rotational Motion",
  "type": "Chapter Page",
  "audience": ["JEE"],
  "subject": "jee-physics",
  "exam": "JEE-ADVANCED",
  "headings": ["Overview", "Key Concepts", "Formula Sheet", "30-Minute Revision Plan"],
  "excerpt": "Rotational motion covers angular velocity, moment of inertia, torque...",
  "status": "Complete",
  "last_updated": "2025-06"
}
```

### 6.3 Search Page (`search.md`)

```markdown
# Search AI Atlas

[search input field]

Filter by: Audience [JEE | NEET | School | All] — Subject [dropdown] — Type [dropdown]

Results display: title, breadcrumb path, excerpt, audience tags
```

### 6.4 Google Search Integration (V2)

Submit `sitemap.xml` to Google Search Console after GitHub Pages deployment.

Target keywords:
- "JEE Physics AI study guide"
- "NEET Biology prompts Claude"
- "free AI tools for JEE preparation"
- "Class 10 CBSE AI workflow"

No paid SEO. Organic only through content quality and structured data.

---

## 7. Documentation Structure

### 7.1 Documentation Hierarchy

```
Student-facing documentation (in content files themselves)
        ↑ serves
Contributor documentation (CONTRIBUTING.md, meta/ files)
        ↑ governs
Operations documentation (meta/ai-atlas-operating-system.md)
        ↑ defines
Repository specification (meta/repo-build.md — this file)
```

### 7.2 Document Ownership

| Document | Owned by | Update frequency | Can be changed by |
|----------|----------|-----------------|-------------------|
| `meta/repo-build.md` | Repository architect | On major structural changes | Core team only |
| `meta/ai-atlas-operating-system.md` | Core team | Every 6 months or on major process changes | Core team only |
| `meta/content-standards.md` | Core team | Rarely | Core team only |
| `meta/project-vision.md` | Founder | Rarely | Founder only |
| `CONTRIBUTING.md` | Core team | When contribution process changes | Core team |
| `README.md` | All maintainers | On every merge to main | Any maintainer |
| `meta/changelog.md` | Release manager | Every release | Any maintainer |
| `meta/backlog.md` | Content team | Continuously | Any contributor (add only) |
| `meta/cross-reference.md` | Automated | On every merge | Script-maintained |
| `meta/contributors.md` | Release manager | Every release | Release manager |

### 7.3 Readme Sections (Full Specification)

`README.md` must contain exactly these sections in this order:

1. **Header** — Name, one-line description, badge row (stars, forks, license, last-updated)
2. **What is AI Atlas** — 3-sentence platform description
3. **Quick Start** — 4 audience paths, each 1 link
4. **What's in this Repository** — Table: section, what's inside, files, status
5. **Currently Available** — List of V1 complete assets with links
6. **Recently Added** — Last 5 additions with date and 1-line description
7. **Roadmap** — V1/V2/V3 summary (2 lines each, no detail)
8. **Contributing** — 3 sentences + link to CONTRIBUTING.md
9. **License** — 2 sentences, link to LICENSE
10. **Acknowledgements** — Tools used (Claude, GitHub, etc.), not people (people go in contributors.md)

### 7.4 CONTRIBUTING.md Sections

1. **Before you contribute** — read operating system and content standards links
2. **Types of contributions** — bug reports, content, translations (with acceptance criteria)
3. **Step-by-step process** — 7 steps from Issue to merged PR
4. **File naming** — reference to operating system section
5. **Templates** — link to templates directory, which template for which content
6. **QC checklist** — embedded copy of the 30-item checklist from operating system
7. **Commit format** — type list and examples
8. **What will not be accepted** — 6-item list
9. **Getting help** — how to ask questions

---

## 8. Automation Opportunities

### 8.1 V1 Automations (Implement before first external contributor)

| ID | Name | Trigger | Tool | File | Prevents |
|----|------|---------|------|------|---------|
| A-01 | Link checker | PR to `develop` | `markdown-link-check` | `.github/workflows/link-check.yml` | Broken links in published content |
| A-02 | Markdown linter | PR to `develop` | `markdownlint` | `.github/workflows/markdown-lint.yml` | Heading hierarchy violations, formatting errors |
| A-03 | Filename validator | PR to `develop` | `scripts/validate-filenames.sh` | `.github/workflows/filename-validate.yml` | Uppercase, underscores, version numbers in filenames |
| A-04 | Header checker | PR to `develop` | `scripts/check-headers.py` | Integrated into A-02 workflow | Files published without required header fields |
| A-05 | Pages deploy | Push to `main` | Jekyll | `.github/workflows/deploy-pages.yml` | Manual deployment steps |

### 8.2 V2 Automations (Implement at 20+ files)

| ID | Name | Trigger | Tool | Value |
|----|------|---------|------|-------|
| A-06 | INDEX.md auto-generator | Push to `develop` | `scripts/update-index.py` | Eliminates manual INDEX maintenance |
| A-07 | Cross-reference auto-update | Push to `develop` | `scripts/update-cross-reference.py` | Cross-reference never goes stale |
| A-08 | Stale content detector | Monthly scheduled | `scripts/stale-content-detector.py` | No content silently outdated |
| A-09 | Search index builder | Push to `main` | `scripts/build-search-index.py` | Search always reflects current content |
| A-10 | Tool URL verifier | Monthly scheduled | Python + requests | Tool database links stay accurate |
| A-11 | Contribution welcome bot | New Issue opened | GitHub Actions + comment | Reduces maintainer time per contributor |

### 8.3 V3 Automations (Implement at 100+ files)

| ID | Name | Trigger | Tool | Value |
|----|------|---------|------|-------|
| A-12 | AI draft generator | Backlog item created with complete brief | Claude API | Creates draft PRs from backlog items |
| A-13 | Duplicate detector | PR opened | Python + similarity matching | Prevents near-duplicate chapter pages |
| A-14 | Formula extractor | Chapter page merged | Python + regex | Auto-populates master formula index |
| A-15 | Analytics dashboard | Weekly scheduled | GitHub API | Content usage and gap identification |
| A-16 | Hindi auto-translate draft | English page merged | DeepL API | Draft Hindi versions for human review |

### 8.4 Automation Implementation Order

```
Week 1-2:    A-01, A-02, A-03 (basic PR quality gates)
Week 3-4:    A-04, A-05 (header checking + pages deployment)
Month 2:     A-06, A-07 (index and cross-reference maintenance)
Month 3:     A-08, A-09, A-10 (content health monitoring)
Month 4-6:   A-11 (contributor experience)
Month 6-12:  A-12, A-13, A-14 (content scaling)
Year 2+:     A-15, A-16 (analytics and translation)
```

---

## 9. V1 Roadmap

**Definition:** V1 = Minimum Viable Repository. A student arriving at the repository can find everything they need without confusion.

**Target:** Complete by end of Month 1 from repository creation.

### 9.1 V1 Asset Status

| Asset | File | Status |
|-------|------|--------|
| AI Atlas Operating System | `meta/ai-atlas-operating-system.md` | ✅ Complete |
| Repository Build Spec | `meta/repo-build.md` | ✅ Complete (this file) |
| Sitemap | `sitemap/ai-atlas-sitemap.md` | ✅ Complete |
| Universal Chapter Template | `templates/universal-chapter-template.md` | ✅ Complete (rename) |
| 50 JEE Prompts | `prompts/jee/jee-ai-prompt-library.md` | ✅ Complete (rename) |
| 100 AI Tools Database | `tools/ai-tools-database.md` | ✅ Complete (rename) |
| 25 Educational Workflows | `workflows/ai-educational-workflows.md` | ✅ Complete (rename) |

### 9.2 V1 Infrastructure Tasks

| Task | File to create | Priority | Effort |
|------|---------------|----------|--------|
| Root README.md | `README.md` | P1 — Blocks all navigation | 2 hours |
| All directory INDEX.md files | 40+ INDEX.md files | P1 — Blocks discoverability | 4 hours total |
| Extract JEE study systems | 5 files in `study-systems/jee/` | P1 — Core V1 content | 3 hours |
| meta/backlog.md | `meta/backlog.md` | P1 — Content pipeline | 30 min |
| meta/cross-reference.md | `meta/cross-reference.md` | P1 — Navigation integrity | 1 hour |
| meta/content-standards.md | `meta/content-standards.md` | P1 — Contributor reference | 30 min |
| meta/project-vision.md | `meta/project-vision.md` | P1 — Contributor reference | 30 min |
| meta/changelog.md | `meta/changelog.md` | P2 | 30 min |
| CONTRIBUTING.md | `CONTRIBUTING.md` | P2 | 2 hours |
| LICENSE | `LICENSE` | P2 | 5 min |
| GitHub Actions A-01, A-02, A-03 | 3 workflow files | P2 | 2 hours |
| Rename existing files | 5 filename changes | P1 | 30 min |
| Retroactive QC on existing files | QC checklist on 6 files | P1 | 2 hours |

### 9.3 V1 File Count

```
Infrastructure files:        48  (meta, .github, root, INDEX.md files)
V1 content files:             7  (existing assets renamed)
Study system extractions:     5  (from workflows)
Total V1 files:              60
```

### 9.4 V1 Completion Criteria

- [ ] A visitor can navigate from `README.md` to any of the 7 content assets in under 3 clicks
- [ ] All existing 7 content files pass the QC checklist
- [ ] All filenames follow naming standards
- [ ] All files have correct header blocks
- [ ] GitHub Actions A-01, A-02, A-03 are active and passing
- [ ] GitHub Pages deployed and accessible
- [ ] `CONTRIBUTING.md` is complete

---

## 10. V2 Roadmap

**Definition:** V2 = Content depth. The repository covers JEE and NEET comprehensively enough to be a student's primary reference for their top-weightage chapters.

**Target:** Complete by end of Month 6 from repository creation.

### 10.1 V2 Priority Content

**Tier 1 — Must have for V2:**

| Content | File count | Estimated effort |
|---------|-----------|-----------------|
| NEET complete study system | 3 files | 8 hours |
| NEET AI Prompt Library (50 prompts) | 1 file | 4 hours |
| Class 10 CBSE study system | 1 file | 4 hours |
| Claude for students guide | 1 file | 3 hours |
| Anki setup guide | 1 file | 2 hours |
| Top 5 JEE Physics chapter pages | 5 files | 15 hours |
| Top 5 JEE Chemistry chapter pages | 5 files | 15 hours |
| Top 5 JEE Mathematics chapter pages | 5 files | 15 hours |
| Top 5 NEET Biology chapter pages | 5 files | 15 hours |
| Top 5 Class 10 Science chapter pages | 5 files | 10 hours |
| Free resources pages | 4 files | 4 hours |
| Subject-specific workflow extractions | 5 files | 5 hours |

**Total V2 effort estimate:** ~100 hours across team

### 10.2 V2 Chapter Priority (30 chapters)

| # | Chapter | Subject | JEE/NEET weight | Priority reason |
|---|---------|---------|-----------------|-----------------|
| 1 | Rotational Motion | JEE Physics | Very high | Most tested Advanced topic |
| 2 | Electrostatics | JEE Physics | High | Consistent Main + Advanced |
| 3 | Current Electricity | JEE Physics | High | Numerical-heavy, high yield |
| 4 | Wave Optics | JEE Physics | High | Advanced specificity |
| 5 | Thermodynamics | JEE Physics | High | Cross-topic with Chemistry |
| 6 | Chemical Equilibrium | JEE Chemistry | Very high | Foundation for multiple chapters |
| 7 | Electrochemistry | JEE Chemistry | High | Consistent Main + Advanced |
| 8 | Coordination Compounds | JEE Chemistry | High | Inorganic flagship chapter |
| 9 | Organic Basics + GOC | JEE Chemistry | Very high | Foundation for all Organic |
| 10 | Carbonyl Compounds | JEE Chemistry | High | Most JEE Organic questions |
| 11 | Integration | JEE Maths | Very high | Highest marks chapter |
| 12 | Differential Equations | JEE Maths | High | Advanced level |
| 13 | Circles + Conics | JEE Maths | High | Consistent across years |
| 14 | P&C + Probability | JEE Maths | High | Paired chapters |
| 15 | Complex Numbers | JEE Maths | High | Advanced specificity |
| 16 | Cell Division | NEET Biology | Very high | Annual NEET appearance |
| 17 | Genetics (Mendelian) | NEET Biology | Very high | Most marks in Genetics |
| 18 | Molecular Biology | NEET Biology | High | Growing NEET weightage |
| 19 | Human Physiology | NEET Biology | Very high | Multiple chapters, highest marks |
| 20 | Photosynthesis | NEET Biology | High | Consistent annual |
| 21 | Reproduction | NEET Biology | High | Class 12, consistent |
| 22 | Chemical Reactions | Class 10 Science | High | Board exam core |
| 23 | Electricity | Class 10 Science | High | Board numericals |
| 24 | Light | Class 10 Science | High | Board diagrams |
| 25 | Life Processes | Class 10 Science | High | Biology boards |
| 26 | Acids Bases Salts | Class 10 Science | High | Chemistry boards |
| 27 | Heredity + Evolution | Class 10 Science | Medium | Long-answer questions |
| 28 | Carbon Compounds | Class 10 Science | Medium | Organic intro |
| 29 | Metals Non-metals | Class 10 Science | Medium | Consistent board questions |
| 30 | Control Coordination | Class 10 Science | Medium | Diagram questions |

### 10.3 V2 Infrastructure Additions

| Task | Effort |
|------|--------|
| Implement automations A-06 through A-10 | 8 hours |
| Build search page with lunr.js | 6 hours |
| Custom domain setup | 2 hours |
| Submit sitemap to Google Search Console | 1 hour |
| First contributor onboarding (2–3 external contributors) | 5 hours |

### 10.4 V2 File Count

```
V1 files carried forward:    60
V2 new content files:        50  (30 chapters + 10 study/prompt/resource + 10 tool profiles)
V2 infrastructure additions: 20  (automation, search, new INDEX files)
Total V2 files:             ~130
```

### 10.5 V2 Completion Criteria

- [ ] 30 chapter pages published (all passing QC)
- [ ] NEET and School study systems complete
- [ ] NEET prompt library published
- [ ] 3+ active external contributors have merged PRs
- [ ] GitHub Pages live with custom domain
- [ ] Search functional (lunr.js)
- [ ] All automations A-01 through A-10 active
- [ ] Repository has 100+ GitHub stars (community validation signal)

---

## 11. V3 Roadmap

**Definition:** V3 = Full coverage. AI Atlas covers the complete JEE + NEET + CBSE Class 9–12 syllabus. The Wikipedia of AI Learning for Indian students.

**Target:** Complete by Month 18–24 from repository creation.

### 11.1 V3 Content Scope

| Content area | Files required | Source |
|-------------|---------------|--------|
| JEE Physics — all 29 chapters | 29 | Template + AI generation |
| JEE Chemistry — all 30 chapters | 30 | Template + AI generation |
| JEE Mathematics — all 16 chapters | 16 | Template + AI generation |
| NEET Biology — all 38 chapters | 38 | Template + AI generation |
| NEET Physics — 5 key chapters | 5 | Template + AI generation |
| NEET Chemistry — 5 key chapters | 5 | Template + AI generation |
| Class 9 Science — 9 chapters | 9 | Template + AI generation |
| Class 10 Science — all 12 chapters | 12 | Template + contributors |
| Class 11–12 all streams | 40 | V3 extension |
| Career guides | 6 | V3 extension |
| Hindi translations (top 20 pages) | 20 | Translation contributors |
| **Total new V3 files** | **~210** | |

**Total V3 repository files: ~340**

### 11.2 V3 Infrastructure

| System | V3 requirement |
|--------|---------------|
| Contributors | 15–20 active contributors |
| Automation | A-12 through A-16 active |
| GitHub Discussions | Enabled for community Q&A |
| Release cadence | Bi-weekly releases |
| Review process | 2 reviewer requirement for all content |
| Language support | English + Hindi (top 20 pages) |

### 11.3 V3 Platform Maturity Metrics

| Metric | V1 target | V2 target | V3 target |
|--------|-----------|-----------|-----------|
| Content files | 60 | 130 | 340 |
| Active contributors | 1 | 5 | 20 |
| GitHub stars | 10 | 100 | 1,000 |
| Monthly GitHub visitors | 100 | 1,000 | 10,000 |
| QC pass rate | 80% | 90% | 95% |
| Broken links | <5 | 0 | 0 (automated) |
| Stale content | Some | Detected | Auto-flagged |

### 11.4 V3 Completion Criteria

- [ ] Full JEE + NEET syllabus covered (all chapters with dedicated pages)
- [ ] Class 9–12 all streams covered
- [ ] Hindi versions of top 20 pages live
- [ ] 15+ active contributors with merged PRs
- [ ] All 16 automations active
- [ ] Community self-corrects errors via Issues
- [ ] Listed in JEE/NEET preparation resource guides externally

---

## 12. Growth Strategy

### 12.1 Content Growth Model

```
AI-generated content (85%)          Human-verified and edited content
        +                    →              Published to repository
Human-contributed content (15%)
```

The 85/15 split is by volume, not by importance. Human review is mandatory for all content regardless of origin. As the contributor community grows, the human contribution percentage increases.

### 12.2 Contributor Growth Path

```
Month 1:   Core team only (1–2 people)
Month 2–3: 2–3 trusted early contributors (invited)
Month 4–6: Open contribution with full review process
Month 7–12: 10+ active contributors; community forming
Month 12+:  Self-sustaining contribution cycle
```

**Contributor incentive:** Recognition in `meta/contributors.md` and `CHANGELOG.md`. No other compensation — this is a free educational resource.

**Contributor retention:** Clear process, responsive review, specific feedback, successful merges within 2 weeks.

### 12.3 Audience Growth Path

```
Phase 1: JEE aspirants discover via GitHub search for "JEE AI prompts"
Phase 2: NEET aspirants discover via word of mouth from JEE users
Phase 3: School students and teachers discover via educator networks
Phase 4: Coaching institutes reference AI Atlas in their curriculum
Phase 5: Wikipedia-equivalent reference for AI in Indian education
```

**No paid promotion.** Growth through content quality, SEO, and community sharing.

### 12.4 Platform Sustainability

| Risk | Mitigation |
|------|-----------|
| Core maintainer unavailability | 3+ maintainers with admin access; documented processes |
| AI tool pricing changes | Free-tier focus; tools verified quarterly |
| NCERT/JEE syllabus changes | Annual review cycle; stale content automation |
| Content quality degradation | QC automation catches structural issues; human review mandatory |
| Repository abandoned | MIT licence allows community fork and continuation |
| GitHub free tier limits | Repository size manageable; assets kept minimal |

### 12.5 Content Expansion Plan

**Expansion 1 — Competitive exams (V3+)**
NTSE, NSO/IMO, KVPY, JEE Advanced paper 2 specific content. These audiences use the same tools and workflows but need exam-specific prompt customisation.

**Expansion 2 — College students (V3+)**
AI for engineering coursework, AI for research methodology, AI for thesis writing. Distinct from school content but shares tool database.

**Expansion 3 — Educators (V3+)**
AI for teachers: generating question papers, creating study material, analysing student errors. High-leverage expansion — one teacher reaches hundreds of students.

**Expansion 4 — Regional languages (V3+)**
Hindi, Tamil, Telugu, Marathi, Bengali versions of top-50 pages. Requires language-specific contributors and a translation quality process.

**Expansion 5 — Interactive content (V3+)**
When contributor expertise allows: interactive calculators, formula visualisers, embedded practice questions. Technology: vanilla JavaScript in GitHub Pages, no frameworks, no backend.

---

## 13. Content Expansion Plan

### 13.1 Chapter Expansion Priority Matrix

New chapters are prioritised by this formula:

```
Priority score = (JEE/NEET marks weightage × 3) + (student search volume × 2) + (existing coverage gap × 1)
```

Chapters with priority score > 20 are P1. Scores 15–20 are P2. Below 15 are P3.

Top-priority chapters not yet covered:

| Chapter | Subject | Estimated priority score | V target |
|---------|---------|------------------------|---------|
| Integration (Calculus) | JEE Maths | 28 | V2 |
| Human Physiology (all) | NEET Biology | 27 | V2 |
| Organic Reaction Mechanisms | JEE Chemistry | 26 | V2 |
| Rotational Motion | JEE Physics | 25 | V2 |
| Genetics | NEET Biology | 24 | V2 |
| Electricity | Class 10 Science | 22 | V2 |
| Chemical Equilibrium | JEE Chemistry | 21 | V2 |
| P&C + Probability | JEE Maths | 20 | V2 |

### 13.2 Prompt Library Expansion

After V1 JEE library (50 prompts) and V2 NEET library (50 prompts):

| Library | Prompts | Audience | Target |
|---------|---------|----------|--------|
| School student prompts | 25 | Class 9–10 | V2 |
| Class 12 board prompts | 25 | Class 12 all streams | V3 |
| College student prompts | 25 | College | V3 |
| Teacher prompts | 25 | Educators | V3 |
| Career guidance prompts | 15 | Post-exam | V3 |

### 13.3 Tool Database Expansion

The 100-tool database covers AI tools as of 2025. It requires:
- Quarterly URL verification (automated in V2)
- Annual full review (new tools added, discontinued tools removed)
- Subject-specific tool profile pages for top 8 tools

### 13.4 Workflow Expansion

After 25 core educational workflows (V1), add:

| Workflow | Audience | V target |
|----------|----------|---------|
| NEET-specific study workflows (5) | NEET | V2 |
| Class 10 board-specific workflows (3) | School | V2 |
| Group study workflows (2) | All | V2 |
| Educator workflows (5) | Teachers | V3 |
| College student workflows (5) | College | V3 |
| Career planning workflows (3) | Post-exam | V3 |

---

*AI Atlas — Repository Build Specification*
*Version 1.0 | meta/repo-build.md*
*This document defines the complete repository. Changes require core team consensus.*
*Reference document: meta/ai-atlas-operating-system.md*
