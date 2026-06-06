const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const docsDir = path.join(root, "docs");

const sourceRoots = [
  "career-guides",
  "chapters",
  "prompts",
  "resources",
  "study-systems",
  "tools",
  "workflows",
];

const rootSources = [
  "AI-Tools-Database.md",
  "JEE-AI-Prompt-Library.md",
  "ai-atlas-operating-system.md",
];

const docsSources = [
  "docs/getting-started.md",
  "docs/jee.md",
  "docs/neet.md",
  "docs/school.md",
  "docs/ai-tools/claude-guide.md",
  "docs/ai-tools/index.md",
  "docs/jee/index.md",
  "docs/neet/index.md",
  "docs/prompts/general/index.md",
  "docs/school/index.md",
  "docs/school/class-10/index.md",
  "docs/workflows/mock-test-review-workflow.md",
  "docs/workflows/new-chapter-workflow.md",
];

const navItems = [
  ["Start", "index.html"],
  ["JEE", "study-systems/jee/index.html"],
  ["NEET", "study-systems/neet/index.html"],
  ["School", "study-systems/school/index.html"],
  ["Prompts", "prompts/index.html"],
  ["Resources", "resources/index.html"],
  ["Tools", "tools/index.html"],
  ["Workflows", "workflows/index.html"],
];

const categoryLabels = {
  "career-guides": "Career Guides",
  chapters: "Chapters",
  prompts: "Prompt Libraries",
  resources: "Resources",
  "study-systems": "Study Systems",
  tools: "AI Tools",
  workflows: "Workflows",
  "ai-tools": "AI Tools",
  jee: "JEE",
  neet: "NEET",
  school: "School",
};

const sectionContext = {
  prompts: "Prompts",
  resources: "Resources",
  "study-systems": "Study Systems",
  tools: "Tools",
  workflows: "Workflows",
  chapters: "Chapters",
  "career-guides": "Career Guides",
};

function walk(dir, files = []) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) walk(full, files);
    if (item.isFile() && item.name.toLowerCase().endsWith(".md")) files.push(full);
  }
  return files;
}

function slash(value) {
  return value.split(path.sep).join("/");
}

function titleCase(value) {
  return value
    .replace(/\.(md|html)$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\bAi\b/g, "AI")
    .replace(/\bJee\b/g, "JEE")
    .replace(/\bNeet\b/g, "NEET")
    .replace(/\bCbse\b/g, "CBSE");
}

function htmlEscape(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function attrEscape(value) {
  return htmlEscape(value).replace(/'/g, "&#39;");
}

function stripMarkdown(value) {
  return value
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[`*_>#|~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value) {
  return stripMarkdown(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

function isMarkdownLink(href) {
  return /\.md($|#)/i.test(href);
}

function outputForSource(source) {
  const rel = slash(path.relative(root, source));
  const inDocs = rel.startsWith("docs/");
  const withoutDocs = inDocs ? rel.slice(5) : rel;
  const parsed = path.posix.parse(withoutDocs);
  const baseLower = parsed.base.toLowerCase();
  let fileName;

  if (baseLower === "index.md" || baseLower === "index.md") fileName = "index.html";
  else if (baseLower === "index.md") fileName = "index.html";
  else if (baseLower === "readme.md") fileName = parsed.dir ? "readme.html" : "readme.html";
  else fileName = `${parsed.name}.html`;

  return slash(path.posix.join("docs", parsed.dir, fileName));
}

function titleFromPath(relSource) {
  const parts = relSource.replace(/^docs\//, "").split("/");
  const file = parts.pop().toLowerCase();
  const parent = parts[parts.length - 1] || "";
  const section = parts[0] || "";

  if (file === "index.md" || file === "readme.md") {
    if (!parent) return "AI Atlas";
    const label = categoryLabels[parent] || titleCase(parent);
    const context = sectionContext[section];
    if (context && parent !== section) return `${label} ${context}`;
    return label;
  }

  return titleCase(path.posix.basename(relSource));
}

function collectSources() {
  const files = [];
  for (const rel of rootSources) files.push(path.join(root, rel));
  for (const rel of sourceRoots) files.push(...walk(path.join(root, rel)));
  for (const rel of docsSources) {
    const full = path.join(root, rel);
    if (fs.existsSync(full)) files.push(full);
  }

  const seen = new Set();
  return files
    .filter((file) => fs.existsSync(file))
    .filter((file) => {
      const key = slash(path.relative(root, file)).toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => slash(path.relative(root, a)).localeCompare(slash(path.relative(root, b))));
}

const sources = collectSources();
const pages = sources.map((source, index) => {
  const raw = fs.readFileSync(source, "utf8").replace(/^\uFEFF/, "");
  const relSource = slash(path.relative(root, source));
  const outRel = outputForSource(source);
  const markdownTitle = raw.match(/^#\s+(.+)$/m);
  const fallbackTitle = titleFromPath(relSource);
  const parsedTitle = markdownTitle ? stripMarkdown(markdownTitle[1]) : "";
  const title = parsedTitle && !/^index$/i.test(parsedTitle) ? parsedTitle : fallbackTitle;
  const text = stripMarkdown(raw.replace(/^#\s+.+$/m, ""));
  const description = (text || `AI Atlas educational resource for ${title}.`).slice(0, 158);
  return { source, relSource, outRel, title, description, raw, index };
});

const pageBySource = new Map(pages.map((page) => [page.relSource.toLowerCase(), page]));
const pageByOut = new Map(pages.map((page) => [page.outRel.toLowerCase(), page]));

function linkTargetFromMd(currentPage, href) {
  const [filePart, hash = ""] = href.split("#");
  const decoded = filePart.replace(/\\/g, "/").replace(/^\/+/, "");
  const currentSourceDir = slash(path.posix.dirname(currentPage.relSource));
  const absoluteRel = href.startsWith("/")
    ? slash(path.posix.normalize(decoded))
    : slash(path.posix.normalize(path.posix.join(currentSourceDir, decoded)));
  const sourceLike = [];
  sourceLike.push(absoluteRel);
  if (!/\.md$/i.test(absoluteRel)) {
    sourceLike.push(`${absoluteRel}.md`);
    sourceLike.push(`${absoluteRel}/INDEX.md`);
    sourceLike.push(`${absoluteRel}/index.md`);
    sourceLike.push(`${absoluteRel}/README.md`);
  }
  const candidates = [
    ...sourceLike,
    ...sourceLike.map((item) => item.replace(/^docs\//, "")),
    ...sourceLike.map((item) => `docs/${item}`),
  ].map((item) => item.toLowerCase());

  let targetPage = null;
  for (const candidate of candidates) {
    if (pageBySource.has(candidate)) {
      targetPage = pageBySource.get(candidate);
      break;
    }
  }

  if (!targetPage) {
    const htmlPath = decoded.replace(/\.md$/i, ".html").replace(/^\/+/, "");
    return hash ? `${htmlPath}#${hash}` : htmlPath;
  }

  const fromDir = slash(path.posix.dirname(currentPage.outRel));
  let rel = slash(path.posix.relative(fromDir, targetPage.outRel));
  if (!rel.startsWith(".")) rel = rel || path.posix.basename(targetPage.outRel);
  return hash ? `${rel}#${hash}` : rel;
}

function renderInline(value, page) {
  let out = htmlEscape(value);
  out = out.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt, src) => {
    const finalSrc = src.startsWith("http") || src.startsWith("data:") ? src : src.replace(/\\/g, "/");
    return `<img src="${attrEscape(finalSrc)}" alt="${attrEscape(alt)}" loading="lazy">`;
  });
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, text, href) => {
    let finalHref = href.trim();
    if (!/^(https?:|mailto:|tel:)/i.test(finalHref) && !finalHref.startsWith("#")) {
      finalHref = linkTargetFromMd(page, finalHref);
    }
    return `<a href="${attrEscape(finalHref)}">${renderInline(text, page)}</a>`;
  });
  out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return out;
}

function renderTable(lines, page) {
  const rows = lines.map((line) =>
    line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim())
  );
  const head = rows[0] || [];
  const body = rows.slice(2);
  return `<div class="table-wrap"><table><thead><tr>${head
    .map((cell) => `<th>${renderInline(cell, page)}</th>`)
    .join("")}</tr></thead><tbody>${body
    .map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell, page)}</td>`).join("")}</tr>`)
    .join("")}</tbody></table></div>`;
}

function renderMarkdown(markdown, page) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let paragraph = [];
  let list = null;
  let inCode = false;
  let codeLang = "";
  let code = [];

  function flushParagraph() {
    if (!paragraph.length) return;
    html.push(`<p>${renderInline(paragraph.join(" "), page)}</p>`);
    paragraph = [];
  }

  function flushList() {
    if (!list) return;
    html.push(`<${list.type}>${list.items.map((item) => `<li>${renderInline(item, page)}</li>`).join("")}</${list.type}>`);
    list = null;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      if (inCode) {
        html.push(`<pre><code class="language-${attrEscape(codeLang)}">${htmlEscape(code.join("\n"))}</code></pre>`);
        inCode = false;
        codeLang = "";
        code = [];
      } else {
        flushParagraph();
        flushList();
        inCode = true;
        codeLang = trimmed.slice(3).trim();
      }
      continue;
    }

    if (inCode) {
      code.push(line);
      continue;
    }

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    if (/^\|.+\|$/.test(trimmed) && i + 1 < lines.length && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(lines[i + 1].trim())) {
      flushParagraph();
      flushList();
      const tableLines = [line, lines[i + 1]];
      i += 2;
      while (i < lines.length && /^\|.+\|$/.test(lines[i].trim())) {
        tableLines.push(lines[i]);
        i++;
      }
      i--;
      html.push(renderTable(tableLines, page));
      continue;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      const text = heading[2].replace(/\s+#+$/, "");
      const id = slugify(text);
      html.push(`<h${level} id="${attrEscape(id)}">${renderInline(text, page)}</h${level}>`);
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      flushParagraph();
      flushList();
      html.push("<hr>");
      continue;
    }

    const quote = trimmed.match(/^>\s+(.+)$/);
    if (quote) {
      flushParagraph();
      flushList();
      html.push(`<blockquote>${renderInline(quote[1], page)}</blockquote>`);
      continue;
    }

    const unordered = trimmed.match(/^[-*+]\s+(.+)$/);
    const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      const type = unordered ? "ul" : "ol";
      if (!list || list.type !== type) flushList();
      if (!list) list = { type, items: [] };
      list.items.push((unordered || ordered)[1]);
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  return html.join("\n");
}

function pageDepth(page) {
  return slash(path.posix.dirname(page.outRel)).split("/").filter(Boolean).length - 1;
}

function relativeFromPage(page, target) {
  const fromDir = slash(path.posix.dirname(page.outRel));
  let rel = slash(path.posix.relative(fromDir, slash(path.posix.join("docs", target))));
  return rel || path.posix.basename(target);
}

function sectionFor(page) {
  const parts = page.outRel.replace(/^docs\//, "").split("/");
  return parts.length > 1 ? parts[0] : "Core";
}

function renderBreadcrumbs(page) {
  const parts = page.outRel.replace(/^docs\//, "").split("/");
  const crumbs = [`<a href="${relativeFromPage(page, "index.html")}">Home</a>`];
  let acc = "";
  for (let i = 0; i < parts.length - 1; i++) {
    acc = slash(path.posix.join(acc, parts[i]));
    const indexPath = slash(path.posix.join("docs", acc, "index.html")).toLowerCase();
    const label = categoryLabels[parts[i]] || titleCase(parts[i]);
    if (pageByOut.has(indexPath)) crumbs.push(`<a href="${relativeFromPage(page, `${acc}/index.html`)}">${label}</a>`);
    else crumbs.push(`<span>${label}</span>`);
  }
  crumbs.push(`<span>${htmlEscape(page.title)}</span>`);
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">${crumbs.join("<span aria-hidden=\"true\">/</span>")}</nav>`;
}

function relatedPages(page) {
  const section = sectionFor(page);
  const sameSection = pages.filter((item) => item !== page && sectionFor(item) === section);
  return sameSection.slice(0, 4);
}

function renderLayout(page) {
  const content = renderMarkdown(page.raw, page);
  const previous = pages[page.index - 1];
  const next = pages[page.index + 1];
  const styleHref = relativeFromPage(page, "assets/site.css");
  const scriptHref = relativeFromPage(page, "assets/site.js");
  const canonical = page.outRel.replace(/^docs\//, "");
  const canonicalHref = relativeFromPage(page, canonical);
  const nav = navItems
    .map(([label, target]) => `<a href="${relativeFromPage(page, target)}">${label}</a>`)
    .join("");
  const related = relatedPages(page)
    .map((item) => `<a class="resource-card" href="${relativeFromPage(page, item.outRel.replace(/^docs\//, ""))}"><span>${htmlEscape(sectionFor(item))}</span><strong>${htmlEscape(item.title)}</strong><small>${htmlEscape(item.description)}</small></a>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${htmlEscape(page.title)} | AI Atlas</title>
  <meta name="author" content="Naitik Singh">
  <meta name="description" content="${attrEscape(page.description)}">
  <meta name="keywords" content="${attrEscape(`AI Atlas, ${page.title}, JEE AI study, NEET AI preparation, CBSE AI learning, student prompts`)}">
  <meta property="og:title" content="${attrEscape(page.title)} | AI Atlas">
  <meta property="og:description" content="${attrEscape(page.description)}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${attrEscape(canonical)}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${attrEscape(page.title)} | AI Atlas">
  <meta name="twitter:description" content="${attrEscape(page.description)}">
  <link rel="canonical" href="${attrEscape(canonicalHref)}">
  <link rel="stylesheet" href="${attrEscape(styleHref)}">
</head>
<body>
  <canvas id="bg-canvas" aria-hidden="true"></canvas>
  <a class="skip-link" href="#content">Skip to content</a>
  <header class="site-header">
    <nav class="site-nav" aria-label="Primary navigation">
      <a class="nav-logo" href="${relativeFromPage(page, "index.html")}">AI <span>Atlas</span></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links">Menu</button>
      <div class="nav-links" id="nav-links">${nav}</div>
    </nav>
  </header>
  <main id="content" class="page-shell">
    ${renderBreadcrumbs(page)}
    <article class="content-card">
      <p class="eyebrow">${htmlEscape(sectionFor(page))}</p>
      <h1>${htmlEscape(page.title)}</h1>
      <p class="page-summary">${htmlEscape(page.description)}</p>
      <div class="markdown-body">
${content}
      </div>
    </article>
    <nav class="prev-next" aria-label="Previous and next resources">
      ${previous ? `<a href="${relativeFromPage(page, previous.outRel.replace(/^docs\//, ""))}"><span>Previous</span><strong>${htmlEscape(previous.title)}</strong></a>` : "<span></span>"}
      ${next ? `<a href="${relativeFromPage(page, next.outRel.replace(/^docs\//, ""))}"><span>Next</span><strong>${htmlEscape(next.title)}</strong></a>` : "<span></span>"}
    </nav>
    <section class="related-resources" aria-labelledby="related-title">
      <div>
        <p class="eyebrow">Related Resources</p>
        <h2 id="related-title">Continue Exploring</h2>
      </div>
      <div class="resource-grid">${related}</div>
    </section>
  </main>
  <footer class="site-footer">
    <p><strong>AI Atlas</strong> is a free open-source learning atlas for JEE, NEET and school students.</p>
    <p><a href="${relativeFromPage(page, "index.html")}">Home</a> <span>/</span> <a href="${relativeFromPage(page, "resources/index.html")}">Resources</a> <span>/</span> <a href="${relativeFromPage(page, "study-systems/jee/index.html")}">JEE</a> <span>/</span> <a href="${relativeFromPage(page, "study-systems/neet/index.html")}">NEET</a></p>
  </footer>
  <script src="${attrEscape(scriptHref)}" defer></script>
</body>
</html>
`;
}

function writeFile(rel, content) {
  const full = path.join(root, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf8");
}

for (const page of pages) {
  writeFile(page.outRel, renderLayout(page));
}

const sitemap = pages
  .map((page) => page.outRel.replace(/^docs\//, ""))
  .sort()
  .join("\n");
writeFile("docs/sitemap.txt", `${sitemap}\n`);

console.log(`Generated ${pages.length} static HTML pages in docs/`);
