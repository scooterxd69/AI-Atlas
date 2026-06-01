#!/usr/bin/env node
/**
 * AI Atlas — File Organizer
 * =========================================
 * Scans the /incoming/ folder, detects file type,
 * renames to kebab-case, and moves to correct /docs/ location.
 *
 * Usage: node file-organizer.js [--dry-run] [--verbose]
 */

const fs = require("fs");
const path = require("path");

// ── CONFIG ──────────────────────────────────────────────────────────────────
const INCOMING_DIR = path.join(__dirname, "incoming");
const DOCS_DIR = path.join(__dirname, "docs");

const DRY_RUN = process.argv.includes("--dry-run");
const VERBOSE = process.argv.includes("--verbose") || DRY_RUN;

// Color helpers (terminal)
const c = {
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
};

// ── ROUTING RULES ───────────────────────────────────────────────────────────
// Order matters — first match wins.
// Each rule: { test: RegExp or Function, dest: string (relative to docs/) }

const ROUTING_RULES = [
  // Docsify system files
  { test: /^(index\.html|_sidebar\.md|_navbar\.md|readme\.md)$/i, dest: "" },

  // JEE subjects
  { test: /jee.*(physics|electr|optic|modern|mechanic|wave|thermo)/i, dest: "jee/physics" },
  { test: /jee.*(chem|organic|inorganic|physical.chem)/i, dest: "jee/chemistry" },
  { test: /jee.*(math|calculus|algebra|geometry|trigon|coord)/i, dest: "jee/mathematics" },
  { test: /jee/i, dest: "jee" },

  // NEET subjects
  { test: /neet.*(bio|botany|zoo|physiology|genetics|ecology)/i, dest: "neet/biology" },
  { test: /neet.*(physics)/i, dest: "neet/physics" },
  { test: /neet.*(chem)/i, dest: "neet/chemistry" },
  { test: /neet/i, dest: "neet" },

  // School / CBSE
  { test: /class.?10|class.?ten/i, dest: "school/class-10" },
  { test: /class.?11|class.?eleven/i, dest: "school/class-11" },
  { test: /class.?12|class.?twelve/i, dest: "school/class-12" },
  { test: /school|cbse|board/i, dest: "school" },

  // Study systems
  { test: /study.?system|complete.?system|prep.?system/i, dest: "study-systems" },

  // Prompts
  { test: /prompt.*(jee|physics|chem|math)/i, dest: "prompts/jee" },
  { test: /prompt.*(neet|bio|medic)/i, dest: "prompts/neet" },
  { test: /prompt.*(school|cbse|class)/i, dest: "prompts/school" },
  { test: /prompt.*(general|universal|doubt|revision|note|essay)/i, dest: "prompts/general" },
  { test: /prompt/i, dest: "prompts" },

  // Workflows
  { test: /workflow/i, dest: "workflows" },

  // AI Tools
  { test: /tool|claude.?guide|chatgpt.?guide|perplexity|notebooklm|gemini.?guide/i, dest: "ai-tools" },

  // Resources
  { test: /resource|free.?book|youtube|practice.?site|app.*extension/i, dest: "resources" },

  // Career guides
  { test: /career|post.?jee|post.?neet|iit.?nit|mbbs|medical.?career|engineering/i, dest: "career-guides" },

  // Chapters (subject deep-dives)
  { test: /chapter/i, dest: "chapters" },
];

// ── HELPERS ─────────────────────────────────────────────────────────────────

/**
 * Convert any filename to kebab-case.
 * e.g. "JEE Physics Prompts (V2).md" → "jee-physics-prompts-v2.md"
 */
function toKebabCase(filename) {
  const ext = path.extname(filename);
  const base = path.basename(filename, ext);
  const kebab = base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // non-alphanumeric → hyphen
    .replace(/^-+|-+$/g, ""); // trim leading/trailing hyphens
  return `${kebab}${ext}`;
}

/**
 * Detect destination folder from filename using ROUTING_RULES.
 * Returns a path relative to DOCS_DIR, or null if no match.
 */
function detectDest(filename) {
  const name = filename.toLowerCase();
  for (const rule of ROUTING_RULES) {
    const match =
      typeof rule.test === "function" ? rule.test(name) : rule.test.test(name);
    if (match) return rule.dest;
  }
  return null; // unrecognized
}

/**
 * Ensure a directory exists, creating it recursively if needed.
 */
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    if (!DRY_RUN) fs.mkdirSync(dir, { recursive: true });
    log("mkdir", dir);
  }
}

/**
 * Safely move a file — never overwrites existing files with real content.
 * If target exists, appends a numeric suffix.
 */
function safeMove(src, targetDir, destFilename) {
  let destPath = path.join(targetDir, destFilename);

  // Collision check
  if (fs.existsSync(destPath)) {
    const srcContent = fs.readFileSync(src, "utf8");
    const destContent = fs.readFileSync(destPath, "utf8");

    if (srcContent.trim() === destContent.trim()) {
      log("skip", `${destFilename} (identical file already exists)`);
      return { status: "skip", reason: "identical" };
    }

    // Different content — don't overwrite; use suffix
    const ext = path.extname(destFilename);
    const base = path.basename(destFilename, ext);
    let i = 2;
    while (fs.existsSync(destPath)) {
      destPath = path.join(targetDir, `${base}-${i}${ext}`);
      i++;
    }
    log(
      "warn",
      `File collision — saving as ${path.basename(destPath)} instead`
    );
  }

  if (!DRY_RUN) {
    fs.renameSync(src, destPath);
  }

  return { status: "moved", dest: destPath };
}

// ── LOGGING ─────────────────────────────────────────────────────────────────

const stats = { moved: 0, skipped: 0, unmatched: 0, errors: 0 };

function log(type, msg) {
  if (!VERBOSE && type === "skip") return;
  const labels = {
    move: c.green("  MOVE   "),
    skip: c.dim("  SKIP   "),
    warn: c.yellow("  WARN   "),
    mkdir: c.cyan("  MKDIR  "),
    error: c.red("  ERROR  "),
    unmatch: c.yellow(" UNMATCH "),
    info: c.bold("  INFO   "),
  };
  console.log(`${labels[type] || "  ????  "} ${msg}`);
}

// ── MAIN ────────────────────────────────────────────────────────────────────

function run() {
  console.log(c.bold("\n🗺️  AI Atlas — File Organizer"));
  console.log(c.dim(`   Incoming: ${INCOMING_DIR}`));
  console.log(c.dim(`   Docs:     ${DOCS_DIR}`));
  if (DRY_RUN) console.log(c.yellow("\n   ⚠️  DRY RUN — no files will be moved\n"));
  else console.log("");

  // Validate incoming dir
  if (!fs.existsSync(INCOMING_DIR)) {
    console.log(c.red(`\nError: incoming/ folder not found at ${INCOMING_DIR}`));
    console.log(c.dim("Create it and add files to process.\n"));
    process.exit(1);
  }

  // Get all files (non-recursive for now)
  const allFiles = fs
    .readdirSync(INCOMING_DIR, { withFileTypes: true })
    .filter((f) => f.isFile())
    .map((f) => f.name);

  if (allFiles.length === 0) {
    console.log(c.yellow("No files found in incoming/. Nothing to do.\n"));
    return;
  }

  log("info", `Found ${allFiles.length} file(s) in incoming/`);
  console.log("");

  for (const filename of allFiles) {
    const srcPath = path.join(INCOMING_DIR, filename);

    // Skip hidden files
    if (filename.startsWith(".")) {
      log("skip", `${filename} (hidden file)`);
      stats.skipped++;
      continue;
    }

    // Detect destination
    const relDest = detectDest(filename);

    if (relDest === null) {
      log("unmatch", `${filename} → no routing rule matched`);
      stats.unmatched++;
      continue;
    }

    const kebabName = toKebabCase(filename);
    const destDir = relDest ? path.join(DOCS_DIR, relDest) : DOCS_DIR;

    log(
      "move",
      `${c.cyan(filename)} → ${c.green(
        path.join(relDest || "docs/", kebabName)
      )}`
    );

    if (!DRY_RUN) {
      try {
        ensureDir(destDir);
        const result = safeMove(srcPath, destDir, kebabName);
        if (result.status === "moved") stats.moved++;
        else stats.skipped++;
      } catch (err) {
        log("error", `${filename}: ${err.message}`);
        stats.errors++;
      }
    } else {
      stats.moved++;
    }
  }

  // ── Summary ──
  console.log(c.bold("\n─────────────────────────────────"));
  console.log(
    `  ${c.green(`✓ ${stats.moved} moved`)}  |  ` +
      `${c.dim(`${stats.skipped} skipped`)}  |  ` +
      `${stats.unmatched > 0 ? c.yellow(`${stats.unmatched} unmatched`) : `0 unmatched`}  |  ` +
      `${stats.errors > 0 ? c.red(`${stats.errors} errors`) : `0 errors`}`
  );
  if (stats.unmatched > 0) {
    console.log(
      c.yellow(
        "\n  Unmatched files were not moved. Check filenames or add routing rules.\n"
      )
    );
  }
  if (DRY_RUN) {
    console.log(
      c.yellow(
        "\n  Dry run complete. Run without --dry-run to actually move files.\n"
      )
    );
  } else {
    console.log(c.dim("\n  Done.\n"));
  }
}

run();
