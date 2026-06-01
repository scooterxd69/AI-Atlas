#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════════
#  AI Atlas — Complete Repo Fix Script
#  Run from the root of your cloned AI-Atlas repo
#  Usage:  bash fix-ai-atlas.sh
# ═══════════════════════════════════════════════════════════════════

set -e
echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║       AI Atlas — Repo Fix & File Migration Script        ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# ── 0. SAFETY CHECK ──────────────────────────────────────────────
if [ ! -f "README.md" ] || [ ! -f "CONTRIBUTING.md" ]; then
  echo "❌  ERROR: Run this script from the root of the AI-Atlas repo."
  echo "    Expected to find README.md and CONTRIBUTING.md here."
  exit 1
fi
echo "✅  Repo root confirmed."
echo ""

# ═══════════════════════════════════════════════════════════════════
# PART 1 — CREATE ALL MISSING DIRECTORY STRUCTURE
# ═══════════════════════════════════════════════════════════════════
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  PART 1 — Creating directory structure"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

mkdir -p meta
mkdir -p sitemap
mkdir -p templates
mkdir -p prompts/jee
mkdir -p prompts/neet
mkdir -p prompts/school
mkdir -p workflows/subject-specific
mkdir -p tools/tool-profiles
mkdir -p study-systems/jee
mkdir -p study-systems/neet
mkdir -p study-systems/school
mkdir -p chapters/jee-physics/mechanics
mkdir -p chapters/jee-physics/thermodynamics
mkdir -p chapters/jee-physics/electromagnetism
mkdir -p chapters/jee-physics/optics
mkdir -p chapters/jee-physics/modern-physics
mkdir -p chapters/jee-chemistry/physical
mkdir -p chapters/jee-chemistry/organic
mkdir -p chapters/jee-chemistry/inorganic
mkdir -p chapters/jee-mathematics/algebra
mkdir -p chapters/jee-mathematics/calculus
mkdir -p chapters/jee-mathematics/coordinate-geometry
mkdir -p chapters/jee-mathematics/trigonometry
mkdir -p chapters/jee-mathematics/vectors-3d
mkdir -p chapters/neet-biology/botany
mkdir -p chapters/neet-biology/zoology
mkdir -p chapters/neet-physics
mkdir -p chapters/neet-chemistry
mkdir -p chapters/school-science/class9
mkdir -p chapters/school-science/class10
mkdir -p career-guides
mkdir -p resources
mkdir -p translations/hi
mkdir -p assets/data
mkdir -p .github/ISSUE_TEMPLATE
mkdir -p .github/workflows
mkdir -p docs

echo "✅  All directories created."
echo ""

# ═══════════════════════════════════════════════════════════════════
# PART 2 — MOVE MISPLACED ROOT-LEVEL FILES TO CORRECT LOCATIONS
# ═══════════════════════════════════════════════════════════════════
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  PART 2 — Moving misplaced root files → correct paths"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# JEE-AI-Prompt-Library.md  →  prompts/jee/jee-ai-prompt-library.md
if [ -f "JEE-AI-Prompt-Library.md" ]; then
  git mv JEE-AI-Prompt-Library.md prompts/jee/jee-ai-prompt-library.md
  echo "  ✅  JEE-AI-Prompt-Library.md  →  prompts/jee/jee-ai-prompt-library.md"
else
  echo "  ⚠️   JEE-AI-Prompt-Library.md not found (may already be moved)"
fi

# AI-Tools-Database.md  →  tools/ai-tools-database.md
if [ -f "AI-Tools-Database.md" ]; then
  git mv AI-Tools-Database.md tools/ai-tools-database.md
  echo "  ✅  AI-Tools-Database.md  →  tools/ai-tools-database.md"
else
  echo "  ⚠️   AI-Tools-Database.md not found (may already be moved)"
fi

# ai-atlas-operating-system.md  →  meta/ai-atlas-operating-system.md
if [ -f "ai-atlas-operating-system.md" ]; then
  git mv ai-atlas-operating-system.md meta/ai-atlas-operating-system.md
  echo "  ✅  ai-atlas-operating-system.md  →  meta/ai-atlas-operating-system.md"
else
  echo "  ⚠️   ai-atlas-operating-system.md not found (may already be moved)"
fi

# repo-build.md  →  meta/repo-build.md
if [ -f "repo-build.md" ]; then
  git mv repo-build.md meta/repo-build.md
  echo "  ✅  repo-build.md  →  meta/repo-build.md"
else
  echo "  ⚠️   repo-build.md not found (may already be moved)"
fi

echo ""

# ═══════════════════════════════════════════════════════════════════
# PART 3 — MOVE FILES FROM incoming/ TO THEIR CORRECT LOCATIONS
# (only runs if incoming/ folder exists and has content)
# ═══════════════════════════════════════════════════════════════════
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  PART 3 — Moving files from incoming/ to correct paths"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

move_if_exists() {
  local src="$1"
  local dest="$2"
  local dest_dir
  dest_dir=$(dirname "$dest")
  if [ -f "$src" ]; then
    mkdir -p "$dest_dir"
    git mv "$src" "$dest"
    echo "  ✅  $src  →  $dest"
  fi
}

# ── Study Systems ──
move_if_exists "incoming/study-systems/jee-main-complete-study-system.md"     "study-systems/jee/jee-main-complete-study-system.md"
move_if_exists "incoming/study-systems/jee-advanced-complete-study-system.md" "study-systems/jee/jee-advanced-complete-study-system.md"
move_if_exists "incoming/study-systems/jee-physics-study-system.md"           "study-systems/jee/jee-physics-study-system.md"
move_if_exists "incoming/study-systems/jee-chemistry-study-system.md"         "study-systems/jee/jee-chemistry-study-system.md"
move_if_exists "incoming/study-systems/jee-mathematics-study-system.md"       "study-systems/jee/jee-mathematics-study-system.md"
move_if_exists "incoming/study-systems/neet-complete-study-system.md"         "study-systems/neet/neet-complete-study-system.md"
move_if_exists "incoming/study-systems/neet-biology-study-system.md"          "study-systems/neet/neet-biology-study-system.md"
move_if_exists "incoming/study-systems/neet-physics-chemistry-system.md"      "study-systems/neet/neet-physics-chemistry-system.md"
move_if_exists "incoming/study-systems/class10-cbse-study-system.md"          "study-systems/school/class10-cbse-study-system.md"
move_if_exists "incoming/study-systems/class12-science-study-system.md"       "study-systems/school/class12-science-study-system.md"

# ── Prompts ──
move_if_exists "incoming/prompts/jee-ai-prompt-library.md"           "prompts/jee/jee-ai-prompt-library.md"
move_if_exists "incoming/prompts/neet-ai-prompt-library.md"          "prompts/neet/neet-ai-prompt-library.md"
move_if_exists "incoming/prompts/school-ai-prompt-library.md"        "prompts/school/school-ai-prompt-library.md"
move_if_exists "incoming/prompts/jee-physics-prompts.md"             "prompts/jee/jee-physics-prompts.md"
move_if_exists "incoming/prompts/jee-chemistry-prompts.md"           "prompts/jee/jee-chemistry-prompts.md"
move_if_exists "incoming/prompts/jee-mathematics-prompts.md"         "prompts/jee/jee-mathematics-prompts.md"

# ── Workflows ──
move_if_exists "incoming/workflows/ai-educational-workflows.md"              "workflows/ai-educational-workflows.md"
move_if_exists "incoming/workflows/jee-physics-workflow.md"                  "workflows/subject-specific/jee-physics-workflow.md"
move_if_exists "incoming/workflows/jee-chemistry-workflow.md"                "workflows/subject-specific/jee-chemistry-workflow.md"
move_if_exists "incoming/workflows/jee-mathematics-workflow.md"              "workflows/subject-specific/jee-mathematics-workflow.md"
move_if_exists "incoming/workflows/neet-biology-workflow.md"                 "workflows/subject-specific/neet-biology-workflow.md"
move_if_exists "incoming/workflows/class10-science-workflow.md"              "workflows/subject-specific/class10-science-workflow.md"

# ── Tools ──
move_if_exists "incoming/tools/ai-tools-database.md"          "tools/ai-tools-database.md"
move_if_exists "incoming/tools/claude-for-students.md"         "tools/tool-profiles/claude-for-students.md"
move_if_exists "incoming/tools/anki-setup-guide.md"            "tools/tool-profiles/anki-setup-guide.md"
move_if_exists "incoming/tools/notion-study-system.md"         "tools/tool-profiles/notion-study-system.md"
move_if_exists "incoming/tools/chatgpt-for-students.md"        "tools/tool-profiles/chatgpt-for-students.md"
move_if_exists "incoming/tools/gemini-for-students.md"         "tools/tool-profiles/gemini-for-students.md"

# ── Templates ──
move_if_exists "incoming/templates/universal-chapter-template.md" "templates/universal-chapter-template.md"
move_if_exists "incoming/templates/prompt-template.md"             "templates/prompt-template.md"
move_if_exists "incoming/templates/workflow-template.md"           "templates/workflow-template.md"
move_if_exists "incoming/templates/tool-profile-template.md"       "templates/tool-profile-template.md"

# Also handle PascalCase variants (old filenames before rename)
move_if_exists "incoming/templates/Universal-Chapter-Template.md"  "templates/universal-chapter-template.md"
move_if_exists "incoming/templates/Prompt-Template.md"              "templates/prompt-template.md"
move_if_exists "incoming/templates/Workflow-Template.md"            "templates/workflow-template.md"
move_if_exists "incoming/templates/Tool-Profile-Template.md"        "templates/tool-profile-template.md"

# ── Meta ──
move_if_exists "incoming/meta/ai-atlas-operating-system.md" "meta/ai-atlas-operating-system.md"
move_if_exists "incoming/meta/repo-build.md"                "meta/repo-build.md"
move_if_exists "incoming/meta/content-standards.md"         "meta/content-standards.md"
move_if_exists "incoming/meta/project-vision.md"            "meta/project-vision.md"
move_if_exists "incoming/meta/changelog.md"                 "meta/changelog.md"
move_if_exists "incoming/meta/backlog.md"                   "meta/backlog.md"
move_if_exists "incoming/meta/cross-reference.md"           "meta/cross-reference.md"
move_if_exists "incoming/meta/contributors.md"              "meta/contributors.md"

# ── Sitemap ──
move_if_exists "incoming/sitemap/ai-atlas-sitemap.md"  "sitemap/ai-atlas-sitemap.md"
move_if_exists "incoming/sitemap/INDEX.md"              "sitemap/INDEX.md"

# ── Career Guides ──
move_if_exists "incoming/career-guides/after-jee-what-next.md"        "career-guides/after-jee-what-next.md"
move_if_exists "incoming/career-guides/after-neet-what-next.md"       "career-guides/after-neet-what-next.md"
move_if_exists "incoming/career-guides/iit-branch-selection-guide.md" "career-guides/iit-branch-selection-guide.md"
move_if_exists "incoming/career-guides/ai-careers-for-students.md"    "career-guides/ai-careers-for-students.md"

# ── Resources ──
move_if_exists "incoming/resources/free-books-and-pdfs.md"      "resources/free-books-and-pdfs.md"
move_if_exists "incoming/resources/youtube-channels-jee.md"     "resources/youtube-channels-jee.md"
move_if_exists "incoming/resources/youtube-channels-neet.md"    "resources/youtube-channels-neet.md"
move_if_exists "incoming/resources/practice-sites.md"           "resources/practice-sites.md"
move_if_exists "incoming/resources/official-exam-resources.md"  "resources/official-exam-resources.md"

# ── Docs / GitHub Pages site ──
move_if_exists "incoming/docs/index.html"    "docs/index.html"

# ── GitHub Actions ──
move_if_exists "incoming/.github/workflows/link-check.yml"        ".github/workflows/link-check.yml"
move_if_exists "incoming/.github/workflows/markdown-lint.yml"     ".github/workflows/markdown-lint.yml"
move_if_exists "incoming/.github/workflows/filename-validate.yml" ".github/workflows/filename-validate.yml"
move_if_exists "incoming/.github/workflows/deploy-pages.yml"      ".github/workflows/deploy-pages.yml"
move_if_exists "incoming/.github/PULL_REQUEST_TEMPLATE.md"        ".github/PULL_REQUEST_TEMPLATE.md"
move_if_exists "incoming/.github/ISSUE_TEMPLATE/bug-report.md"    ".github/ISSUE_TEMPLATE/bug-report.md"
move_if_exists "incoming/.github/ISSUE_TEMPLATE/content-request.md" ".github/ISSUE_TEMPLATE/content-request.md"
move_if_exists "incoming/.github/ISSUE_TEMPLATE/question.md"      ".github/ISSUE_TEMPLATE/question.md"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  PART 3 done — all incoming/ files moved."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# ═══════════════════════════════════════════════════════════════════
# PART 4 — CREATE ALL MISSING STUB FILES (404 fixes)
# These are every file referenced by a hyperlink that doesn't exist.
# Each stub is a real, properly-headed placeholder that can be
# filled later — it will NOT 404.
# ═══════════════════════════════════════════════════════════════════
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  PART 4 — Creating missing stub files (404 fixes)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Helper: write a stub only if the file doesn't already exist
write_stub() {
  local path="$1"
  local title="$2"
  local type="$3"
  local audience="$4"
  local subject="$5"
  local body="$6"

  if [ -f "$path" ]; then
    return 0
  fi

  local dir
  dir=$(dirname "$path")
  mkdir -p "$dir"

  cat > "$path" <<STUB
# ${title}
**Type:** ${type}
**Audience:** ${audience}
**Subject:** ${subject}
**Status:** Draft
**Last updated:** 2025-05
**Related:**
- [Repository README](../README.md)

---

> ⚠️ **Coming soon.** This page is planned for a future release.
> See [README.md](../README.md) for available content.

${body}
STUB

  echo "  ✅  Created stub: $path"
}

# ── meta/ ──
write_stub "meta/repo-build.md" \
  "AI Atlas — Repository Build Specification" \
  "Meta" "Contributors" "All" \
  "Full repository specification. Move repo-build.md from root to this location."

write_stub "meta/content-standards.md" \
  "AI Atlas — Content Standards" \
  "Meta" "Contributors" "All" \
  "Standalone content standards reference for contributors."

write_stub "meta/project-vision.md" \
  "AI Atlas — Project Vision" \
  "Meta" "Contributors" "All" \
  "Platform mission, core pillars, primary audience, long-term goal."

write_stub "meta/changelog.md" \
  "AI Atlas — Changelog" \
  "Meta" "Contributors" "All" \
  "Chronological record of every release."

write_stub "meta/backlog.md" \
  "AI Atlas — Content Backlog" \
  "Meta" "Contributors" "All" \
  "Content pipeline — every planned file with priority, owner, and status."

write_stub "meta/cross-reference.md" \
  "AI Atlas — Cross-Reference Map" \
  "Meta" "Contributors" "All" \
  "Concept-to-file map. Every key concept linked to every file that covers it."

write_stub "meta/contributors.md" \
  "AI Atlas — Contributors" \
  "Meta" "All" "All" \
  "Permanent acknowledgement of all contributors."

# ── templates/ ──
write_stub "templates/universal-chapter-template.md" \
  "Universal Chapter Template" \
  "Template" "Contributors" "All" \
  "5 subject-specific chapter templates (JEE Physics, JEE Chemistry, JEE Maths, NEET Biology, School Science)."

write_stub "templates/prompt-template.md" \
  "Prompt Template" \
  "Template" "Contributors" "All" \
  "Standard structure for a single prompt entry."

write_stub "templates/workflow-template.md" \
  "Workflow Template" \
  "Template" "Contributors" "All" \
  "Standard structure for a study workflow."

write_stub "templates/tool-profile-template.md" \
  "Tool Profile Template" \
  "Template" "Contributors" "All" \
  "Standard structure for a deep-dive tool guide."

write_stub "templates/INDEX.md" \
  "Templates — Index" \
  "Index" "Contributors" "All" \
  "Lists all templates with name, content type, status, and audience."

# ── prompts/ ──
write_stub "prompts/INDEX.md" \
  "Prompts — Master Index" \
  "Index" "All Students" "All" \
  "Master index of all prompt libraries. Start here if you need prompts."

write_stub "prompts/jee/INDEX.md" \
  "JEE Prompts — Index" \
  "Index" "JEE" "All JEE Subjects" \
  "Index of all JEE prompt libraries."

write_stub "prompts/neet/INDEX.md" \
  "NEET Prompts — Index" \
  "Index" "NEET" "All NEET Subjects" \
  "Index of all NEET prompt libraries."

write_stub "prompts/neet/neet-ai-prompt-library.md" \
  "NEET AI Prompt Library" \
  "Prompt Library" "NEET" "NEET Biology / Physics / Chemistry" \
  "50 NEET prompts. NCERT-first approach. Categories: Learning, NCERT Mastery, Revision, PYQ Analysis, Mock Analysis."

write_stub "prompts/school/INDEX.md" \
  "School Prompts — Index" \
  "Index" "School" "Class 9-10 Science + Maths" \
  "Index of all school student prompt libraries."

write_stub "prompts/school/school-ai-prompt-library.md" \
  "School AI Prompt Library" \
  "Prompt Library" "School" "Class 9-10 All Subjects" \
  "25 school student prompts. Simpler language. CBSE board exam format."

# ── workflows/ ──
write_stub "workflows/INDEX.md" \
  "Workflows — Index" \
  "Index" "All Students" "All" \
  "Lists all 25 workflows by number, audience, time required, and best use case."

write_stub "workflows/subject-specific/INDEX.md" \
  "Subject-Specific Workflows — Index" \
  "Index" "All Students" "All" \
  "Lists all subject-specific workflow extractions."

write_stub "workflows/subject-specific/jee-physics-workflow.md" \
  "JEE Physics — AI Study Workflow" \
  "Workflow" "JEE" "JEE Physics" \
  "Physics-specific study workflows extracted from the master workflow document."

write_stub "workflows/subject-specific/jee-chemistry-workflow.md" \
  "JEE Chemistry — AI Study Workflow" \
  "Workflow" "JEE" "JEE Chemistry" \
  "Chemistry branch-separated workflows (Physical / Organic / Inorganic)."

write_stub "workflows/subject-specific/jee-mathematics-workflow.md" \
  "JEE Mathematics — AI Study Workflow" \
  "Workflow" "JEE" "JEE Mathematics" \
  "Mathematics technique-focused workflows."

write_stub "workflows/subject-specific/neet-biology-workflow.md" \
  "NEET Biology — AI Study Workflow" \
  "Workflow" "NEET" "NEET Biology" \
  "NEET NCERT-first approach workflows for Biology."

write_stub "workflows/subject-specific/class10-science-workflow.md" \
  "Class 10 Science — AI Study Workflow" \
  "Workflow" "School" "Class 10 Science" \
  "Class 10 CBSE board format science workflows."

# ── tools/ ──
write_stub "tools/INDEX.md" \
  "AI Tools — Master Index" \
  "Index" "All Students" "All" \
  "Master tools index. Category, file, tool count, status. Start-here guidance per student type."

write_stub "tools/tool-profiles/INDEX.md" \
  "Tool Profiles — Index" \
  "Index" "All Students" "All" \
  "Lists all deep-dive tool guides with setup difficulty and best use case."

write_stub "tools/tool-profiles/claude-for-students.md" \
  "Claude for Students — Complete Guide" \
  "Tool Profile" "All Students" "All" \
  "Setup, prompt writing, image upload, PDF analysis, study system setup, 20 ready-to-use prompts."

write_stub "tools/tool-profiles/anki-setup-guide.md" \
  "Anki Setup Guide for JEE / NEET" \
  "Tool Profile" "All Students" "All" \
  "Anki from zero. Install, first deck, import from CSV, scheduling settings, mobile sync."

write_stub "tools/tool-profiles/notion-study-system.md" \
  "Notion Study System Setup" \
  "Tool Profile" "All Students" "All" \
  "Notion study system setup. Templates for chapter notes, error log, backlog, mock tracker."

write_stub "tools/tool-profiles/chatgpt-for-students.md" \
  "ChatGPT for Students — Complete Guide" \
  "Tool Profile" "All Students" "All" \
  "ChatGPT free tier maximisation for students."

write_stub "tools/tool-profiles/gemini-for-students.md" \
  "Gemini for Students — Complete Guide" \
  "Tool Profile" "All Students" "All" \
  "Gemini + Google Docs + Drive integration. Hindi language use."

# ── study-systems/ ──
write_stub "study-systems/INDEX.md" \
  "Study Systems — Master Index" \
  "Index" "All Students" "All" \
  "Audience-first navigation: I'm preparing for JEE Main → start here."

write_stub "study-systems/jee/INDEX.md" \
  "JEE Study Systems — Index" \
  "Index" "JEE" "All JEE Subjects" \
  "JEE study system index. Main vs Advanced. Links to subject-specific systems."

write_stub "study-systems/jee/jee-main-complete-study-system.md" \
  "JEE Main — Complete AI Study System" \
  "Study System" "JEE" "JEE Physics + Chemistry + Mathematics" \
  "Complete JEE Main system. All 3 subjects, full year plan, mock schedule, tool stack."

write_stub "study-systems/jee/jee-advanced-complete-study-system.md" \
  "JEE Advanced — Complete AI Study System" \
  "Study System" "JEE" "JEE Physics + Chemistry + Mathematics" \
  "JEE Advanced system. Higher difficulty calibration, multi-concept problems, advanced tool usage."

write_stub "study-systems/jee/jee-physics-study-system.md" \
  "JEE Physics — Complete AI Study System" \
  "Study System" "JEE" "JEE Physics" \
  "Physics-only deep system. Chapter sequence, topic dependencies, tool stack, workflow sequence."

write_stub "study-systems/jee/jee-chemistry-study-system.md" \
  "JEE Chemistry — Complete AI Study System" \
  "Study System" "JEE" "JEE Chemistry" \
  "Chemistry-only system. Branch-separated (Physical/Organic/Inorganic) approach."

write_stub "study-systems/jee/jee-mathematics-study-system.md" \
  "JEE Mathematics — Complete AI Study System" \
  "Study System" "JEE" "JEE Mathematics" \
  "Mathematics-only system. Technique-first approach, proof requirements, speed training."

write_stub "study-systems/neet/INDEX.md" \
  "NEET Study Systems — Index" \
  "Index" "NEET" "All NEET Subjects" \
  "NEET system index."

write_stub "study-systems/neet/neet-complete-study-system.md" \
  "NEET — Complete AI Study System" \
  "Study System" "NEET" "NEET Biology + Physics + Chemistry" \
  "Full NEET system. All 3 subjects, NCERT-first approach, 2-year and 1-year variants."

write_stub "study-systems/neet/neet-biology-study-system.md" \
  "NEET Biology — Complete AI Study System" \
  "Study System" "NEET" "NEET Biology" \
  "Biology deep system. Chapter sequence, diagram masterlist, NCERT coverage tracker."

write_stub "study-systems/neet/neet-physics-chemistry-system.md" \
  "NEET Physics + Chemistry — AI Study System" \
  "Study System" "NEET" "NEET Physics + Chemistry" \
  "NEET Physics + Chemistry combined system."

write_stub "study-systems/school/INDEX.md" \
  "School Study Systems — Index" \
  "Index" "School" "CBSE Class 9-12" \
  "School system index."

write_stub "study-systems/school/class10-cbse-study-system.md" \
  "Class 10 CBSE — Complete AI Study System" \
  "Study System" "School" "Class 10 All Subjects" \
  "Class 10 board preparation system. All subjects, 3-month and 1-month variants, CBSE marking scheme."

write_stub "study-systems/school/class12-science-study-system.md" \
  "Class 12 Science — AI Study System" \
  "Study System" "School" "Class 12 PCB/PCM" \
  "Class 12 Science stream boards. PCM + Biology, practical preparation."

# ── chapters/ INDEX files ──
for dir in chapters chapters/jee-physics chapters/jee-physics/mechanics \
  chapters/jee-physics/thermodynamics chapters/jee-physics/electromagnetism \
  chapters/jee-physics/optics chapters/jee-physics/modern-physics \
  chapters/jee-chemistry chapters/jee-chemistry/physical \
  chapters/jee-chemistry/organic chapters/jee-chemistry/inorganic \
  chapters/jee-mathematics chapters/jee-mathematics/algebra \
  chapters/jee-mathematics/calculus chapters/jee-mathematics/coordinate-geometry \
  chapters/jee-mathematics/trigonometry chapters/jee-mathematics/vectors-3d \
  chapters/neet-biology chapters/neet-biology/botany chapters/neet-biology/zoology \
  chapters/neet-physics chapters/neet-chemistry \
  chapters/school-science chapters/school-science/class9 chapters/school-science/class10; do
  if [ ! -f "$dir/INDEX.md" ]; then
    title=$(echo "$dir" | sed 's|chapters/||' | sed 's|/| — |g' | sed 's/-/ /g')
    cat > "$dir/INDEX.md" <<STUB
# ${title^} — Chapter Index
**Type:** Index
**Status:** Draft

> Chapter pages for this section are planned for V2. Check back soon.

| Chapter | Status |
|---------|--------|
| Coming in V2 | 🔄 Planned |

[← Back to Chapters](../INDEX.md) | [← Repository Root](../../README.md)
STUB
    echo "  ✅  Created index: $dir/INDEX.md"
  fi
done

# ── career-guides/ ──
write_stub "career-guides/INDEX.md" \
  "Career Guides — Index" \
  "Index" "JEE + NEET" "All" \
  "Career guides navigation."

write_stub "career-guides/after-jee-what-next.md" \
  "After JEE — What Next?" \
  "Career Guide" "JEE" "All" \
  "IIT admission process, branch selection, gap year options, alternative exams."

write_stub "career-guides/after-neet-what-next.md" \
  "After NEET — What Next?" \
  "Career Guide" "NEET" "All" \
  "MBBS counselling, state vs central colleges, AIIMS/JIPMER, alternative paths."

write_stub "career-guides/iit-branch-selection-guide.md" \
  "IIT Branch Selection Guide" \
  "Career Guide" "JEE" "All" \
  "Branch comparison by placement, curriculum, growth. AI-assisted decision making."

write_stub "career-guides/ai-careers-for-students.md" \
  "AI Careers for Students" \
  "Career Guide" "All Students" "All" \
  "Entry-level AI roles, skill paths, certifications, portfolio building for students."

# ── resources/ ──
write_stub "resources/INDEX.md" \
  "Resources — Index" \
  "Index" "All Students" "All" \
  "Resources navigation."

write_stub "resources/free-books-and-pdfs.md" \
  "Free Books and PDFs for JEE / NEET" \
  "Resource List" "All Students" "All" \
  "Curated list of free legally available textbooks. NCERT, HC Verma, standard references."

write_stub "resources/youtube-channels-jee.md" \
  "YouTube Channels for JEE Preparation" \
  "Resource List" "JEE" "All JEE Subjects" \
  "Vetted YouTube channels for JEE. Physics Wallah, Unacademy free, Khan Academy, MIT OCW."

write_stub "resources/youtube-channels-neet.md" \
  "YouTube Channels for NEET Preparation" \
  "Resource List" "NEET" "All NEET Subjects" \
  "Vetted channels for NEET."

write_stub "resources/practice-sites.md" \
  "Free Practice Sites for JEE / NEET" \
  "Resource List" "All Students" "All" \
  "Free practice question platforms. NTA mock portal, Embibe free tier, Allen free tests."

write_stub "resources/official-exam-resources.md" \
  "Official Exam Resources" \
  "Resource List" "All Students" "All" \
  "Official NTA, CBSE, NCERT links. Information bulletins, syllabus documents, official sample papers."

# ── sitemap/ ──
write_stub "sitemap/INDEX.md" \
  "Sitemap — Index" \
  "Index" "All" "All" \
  "Sitemap directory."

write_stub "sitemap/ai-atlas-sitemap.md" \
  "AI Atlas — Complete Sitemap" \
  "Meta" "All" "All" \
  "Complete platform sitemap. All sections, categories, subcategories, and ~160 planned pages."

# ── translations/ ──
write_stub "translations/INDEX.md" \
  "Translations — Index" \
  "Index" "All Students" "All" \
  "Hindi and regional language translations. V3 planned."

# ── .github/ templates ──
if [ ! -f ".github/PULL_REQUEST_TEMPLATE.md" ]; then
cat > ".github/PULL_REQUEST_TEMPLATE.md" <<'EOF'
## What this PR does
[One paragraph describing the content being added or changed]

## Files changed
- [filepath]: [what changed]

## QC checklist
- [ ] File naming standards followed (lowercase, hyphens only)
- [ ] Header block complete (Type, Audience, Subject, Status, Last updated, Related)
- [ ] Content Standards met (beginner-friendly, practical, no buzzwords)
- [ ] All internal links are relative paths and verified working
- [ ] Added to directory INDEX.md
- [ ] Added to meta/cross-reference.md
- [ ] README.md updated

## Related issues
Closes #

## Notes for reviewer
[anything that needs particular attention]
EOF
echo "  ✅  Created: .github/PULL_REQUEST_TEMPLATE.md"
fi

if [ ! -f ".github/ISSUE_TEMPLATE/bug-report.md" ]; then
cat > ".github/ISSUE_TEMPLATE/bug-report.md" <<'EOF'
---
name: Bug Report / Factual Error
about: Report an incorrect fact, broken link, or outdated information
labels: bug
---

**File:** [relative path, e.g. tools/ai-tools-database.md]
**Section:** [H2 heading or line number]
**What is wrong:** [describe the specific error]
**What should it say:** [the correct information]
**Source:** [how you verified this — e.g. NCERT Class 12 Ch 3, p.79]
EOF
echo "  ✅  Created: .github/ISSUE_TEMPLATE/bug-report.md"
fi

if [ ! -f ".github/ISSUE_TEMPLATE/content-request.md" ]; then
cat > ".github/ISSUE_TEMPLATE/content-request.md" <<'EOF'
---
name: Content Request
about: Request a new chapter, prompt, workflow, or guide
labels: content-request
---

**What you want:** [chapter page / prompt / workflow / guide]
**Topic:** [specific topic or chapter]
**Audience:** [JEE / NEET / School / All]
**Why it's needed:** [how students will benefit]
**Will you contribute it?** [yes / no / maybe]
EOF
echo "  ✅  Created: .github/ISSUE_TEMPLATE/content-request.md"
fi

if [ ! -f ".github/ISSUE_TEMPLATE/question.md" ]; then
cat > ".github/ISSUE_TEMPLATE/question.md" <<'EOF'
---
name: Question
about: Ask about content, contribution, or how to use AI Atlas
labels: question
---

**Your question:**

**Context:**
[What you were trying to do when you had this question]
EOF
echo "  ✅  Created: .github/ISSUE_TEMPLATE/question.md"
fi

# ── GitHub Actions ──
if [ ! -f ".github/workflows/link-check.yml" ]; then
cat > ".github/workflows/link-check.yml" <<'EOF'
name: Link Checker
on: [pull_request]
jobs:
  link-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Check Markdown links
        uses: gaurav-nelson/github-action-markdown-link-check@v1
        with:
          use-quiet-mode: 'yes'
          use-verbose-mode: 'yes'
          config-file: '.markdownlint.json'
EOF
echo "  ✅  Created: .github/workflows/link-check.yml"
fi

if [ ! -f ".github/workflows/markdown-lint.yml" ]; then
cat > ".github/workflows/markdown-lint.yml" <<'EOF'
name: Markdown Lint
on: [pull_request]
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: DavidAnson/markdownlint-cli2-action@v16
        with:
          globs: '**/*.md'
EOF
echo "  ✅  Created: .github/workflows/markdown-lint.yml"
fi

if [ ! -f ".github/workflows/deploy-pages.yml" ]; then
cat > ".github/workflows/deploy-pages.yml" <<'EOF'
name: Deploy GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: docs/
      - id: deployment
        uses: actions/deploy-pages@v4
EOF
echo "  ✅  Created: .github/workflows/deploy-pages.yml"
fi

echo ""

# ═══════════════════════════════════════════════════════════════════
# PART 5 — FIX README BROKEN LINKS
# ═══════════════════════════════════════════════════════════════════
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  PART 5 — Fixing broken links in README.md"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Fix the 4 broken docs/ links in README.md
sed -i \
  -e 's|blob/main/docs/study-systems/jee/jee-main-complete-study-system.md|blob/main/study-systems/jee/jee-main-complete-study-system.md|g' \
  -e 's|blob/main/docs/study-systems/neet/neet-complete-study-system.md|blob/main/study-systems/neet/neet-complete-study-system.md|g' \
  -e 's|blob/main/docs/study-systems/school/class10-cbse-study-system.md|blob/main/study-systems/school/class10-cbse-study-system.md|g' \
  -e 's|blob/main/docs/tools/ai-tools-database.md|blob/main/tools/ai-tools-database.md|g' \
  README.md

echo "  ✅  README.md links fixed (4 docs/ → correct paths)"

# Fix the broken link in CONTRIBUTING.md (meta/repo-build.md was linked as meta/repo-build.md but file was at root)
sed -i \
  -e 's|blob/main/meta/repo-build.md|blob/main/meta/repo-build.md|g' \
  -e 's|docs/templates/universal-chapter-template.md|templates/universal-chapter-template.md|g' \
  -e 's|docs/templates/prompt-template.md|templates/prompt-template.md|g' \
  CONTRIBUTING.md

echo "  ✅  CONTRIBUTING.md links fixed"

echo ""

# ═══════════════════════════════════════════════════════════════════
# PART 6 — COMMIT EVERYTHING
# ═══════════════════════════════════════════════════════════════════
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  PART 6 — Staging and committing all changes"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

git add -A

git commit -m "fix: resolve all 404 broken links + migrate files to correct paths

BROKEN LINKS FIXED:
- README.md: 4 links updated (docs/study-systems/* → study-systems/*)
- README.md: docs/tools/ai-tools-database.md → tools/ai-tools-database.md
- CONTRIBUTING.md: template paths corrected

ROOT FILES MOVED TO CORRECT LOCATIONS:
- JEE-AI-Prompt-Library.md     → prompts/jee/jee-ai-prompt-library.md
- AI-Tools-Database.md         → tools/ai-tools-database.md
- ai-atlas-operating-system.md → meta/ai-atlas-operating-system.md
- repo-build.md                → meta/repo-build.md

INCOMING FILES MIGRATED (if present):
- All study-systems, prompts, workflows, tools, templates, meta, career-guides, resources

STUB FILES CREATED (404 prevention):
- meta/ (7 files)
- templates/ (4 files + INDEX)
- prompts/ (indices + NEET + school stubs)
- workflows/ (INDEX + 5 subject-specific stubs)
- tools/ (INDEX + tool-profiles INDEX + 5 profile stubs)
- study-systems/ (full tree: JEE×5, NEET×3, School×2 + indices)
- chapters/ (all INDEX.md files for every subdirectory)
- career-guides/ (INDEX + 4 guide stubs)
- resources/ (INDEX + 5 resource stubs)
- sitemap/ (INDEX + sitemap stub)
- translations/ (INDEX stub)
- .github/ (PR template, 3 issue templates, 3 actions)

All pages now return valid Markdown instead of 404."

echo ""
echo "✅  All changes committed."
echo ""

# ═══════════════════════════════════════════════════════════════════
# DONE
# ═══════════════════════════════════════════════════════════════════
echo "╔══════════════════════════════════════════════════════════╗"
echo "║                    ✅  COMPLETE                          ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""
echo "  Next step — push to GitHub:"
echo ""
echo "    git push origin main"
echo ""
echo "  Then verify your site at:"
echo "    https://scooterxd69.github.io/AI-Atlas/"
echo ""
echo "  All 404 links are now resolved."
echo "  Stub files are waiting to be filled with real content."
echo ""
