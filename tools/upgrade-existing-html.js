const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const docsDir = path.join(root, "docs");

const navItems = [
  ["Home", "index.html", "home"],
  ["Study Systems", "study-systems/index.html", "study-systems"],
  ["Prompt Library", "prompts/index.html", "prompts"],
  ["Workflows", "workflows/index.html", "workflows"],
  ["Tools Database", "tools/ai-tools-database.html", "tools"],
  ["Resources", "resources/index.html", "resources"],
  ["Career Guides", "career-guides/index.html", "career-guides"],
  ["About", "about.html", "about"],
  ["Search", "search.html", "search"],
  ["Contributing", "https://github.com/scooterxd69/AI-Atlas/blob/main/CONTRIBUTING.md", "external"],
  ["Roadmap", "https://github.com/scooterxd69/AI-Atlas/blob/main/meta/roadmap.md", "external"],
  ["GitHub", "https://github.com/scooterxd69/AI-Atlas", "external"],
];

function walk(dir, files = []) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) walk(full, files);
    else if (item.isFile() && item.name.endsWith(".html")) files.push(full);
  }
  return files;
}

function slash(value) {
  return value.split(path.sep).join("/");
}

function relativeFromPage(file, target) {
  if (/^https?:/i.test(target)) return target;
  const fromDir = path.posix.dirname(slash(path.relative(docsDir, file)));
  return slash(path.posix.relative(fromDir, target)) || path.posix.basename(target);
}

function sectionFor(file) {
  const rel = slash(path.relative(docsDir, file));
  const first = rel.split("/")[0];
  if (rel === "index.html") return "home";
  if (first === "study-systems") return "study-systems";
  if (first === "prompts") return "prompts";
  if (first === "workflows") return "workflows";
  if (first === "tools" || first === "AI-Tools-Database.html") return "tools";
  if (first === "resources") return "resources";
  if (first === "career-guides") return "career-guides";
  if (rel === "search.html") return "search";
  if (rel === "about.html") return "about";
  return first.replace(/\.html$/, "");
}

function buildNav(file) {
  const current = sectionFor(file);
  const links = navItems
    .map(([label, target, key]) => {
      const external = /^https?:/i.test(target);
      const href = external ? target : relativeFromPage(file, target);
      const active = key === current ? ' class="active" aria-current="page"' : "";
      const ext = external ? ' target="_blank" rel="noopener"' : "";
      return `<a href="${href}" data-nav="${key}"${active}${ext}>${label}</a>`;
    })
    .join("");

  return `<header class="site-header">
    <nav class="site-nav" aria-label="Primary navigation">
      <a class="nav-logo" href="${relativeFromPage(file, "index.html")}" aria-label="AI Atlas home"><span class="logo-mark" aria-hidden="true">AI</span><span>Atlas</span></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links">Menu</button>
      <div class="nav-links" id="nav-links">${links}</div>
    </nav>
  </header>`;
}

function buildFooter(file) {
  return `<footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <a class="nav-logo" href="${relativeFromPage(file, "index.html")}" aria-label="AI Atlas home"><span class="logo-mark" aria-hidden="true">AI</span><span>Atlas</span></a>
        <p>Free open-source AI learning systems for JEE, NEET and school students.</p>
      </div>
      <nav class="footer-links" aria-label="Footer navigation">
        <a href="${relativeFromPage(file, "study-systems/index.html")}">Study Systems</a>
        <a href="${relativeFromPage(file, "prompts/index.html")}">Prompt Library</a>
        <a href="${relativeFromPage(file, "workflows/index.html")}">Workflows</a>
        <a href="${relativeFromPage(file, "tools/ai-tools-database.html")}">Tools Database</a>
        <a href="${relativeFromPage(file, "resources/index.html")}">Resources</a>
        <a href="${relativeFromPage(file, "career-guides/index.html")}">Career Guides</a>
      </nav>
      <div class="footer-cta">
        <p>Built for students who want a sharper study system, not more noise.</p>
        <a class="footer-button" href="https://github.com/scooterxd69/AI-Atlas" target="_blank" rel="noopener">Star on GitHub</a>
      </div>
    </div>
  </footer>`;
}

function faviconLinks(file) {
  const href = relativeFromPage(file, "assets/favicon.svg");
  return `  <link rel="icon" href="${href}" type="image/svg+xml">
  <link rel="apple-touch-icon" href="${href}">`;
}

function fontLinks() {
  return `  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap" rel="stylesheet">`;
}

function addHeadAssets(html, file) {
  html = html.replace(/  <link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\n  <link rel="preconnect" href="https:\/\/fonts\.gstatic\.com" crossorigin>\n  <link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Syne[^"]+" rel="stylesheet">\n/g, "");
  html = html.replace(/  <link rel="icon" href="[^"]+" type="image\/svg\+xml">\n  <link rel="apple-touch-icon" href="[^"]+">\n/g, "");
  html = html.replace(/(<link rel="canonical" href="[^"]+">\n)/, `${fontLinks()}\n${faviconLinks(file)}\n$1`);
  html = html.replace(/href="([^"]*?)assets\/css\/global\.css"/g, 'href="$1assets/site.css"');
  return html;
}

function upgradeHero(html, file) {
  const match = html.match(/<article class="content-card">\s*<p class="eyebrow">([\s\S]*?)<\/p>\s*<h1>([\s\S]*?)<\/h1>\s*<p class="page-summary">([\s\S]*?)<\/p>\s*<div class="markdown-body">/);
  if (!match) return html;

  const [, eyebrow, title, summary] = match;
  const hero = `<section class="page-hero">
      <p class="eyebrow">${eyebrow}</p>
      <h1>${title}</h1>
      <p class="page-summary">${summary}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="${relativeFromPage(file, "study-systems/index.html")}">Explore Systems</a>
        <a class="btn btn-ghost" href="${relativeFromPage(file, "resources/index.html")}">Browse Resources</a>
      </div>
    </section>
    <article class="content-card">
      <div class="markdown-body">`;

  return html.replace(match[0], hero);
}

function sectionizeMarkdownBody(html) {
  return html.replace(/<div class="markdown-body">\n([\s\S]*?)\n      <\/div>/, (_match, body) => {
    if (body.includes('class="content-section"')) return _match;
    let cleaned = body.replace(/\n<hr>\n/g, "\n");
    const firstH2 = cleaned.search(/<h2\b/);
    if (firstH2 === -1) {
      return `<div class="markdown-body">\n<section class="content-section intro-section">\n${cleaned}\n</section>\n      </div>`;
    }

    const intro = cleaned.slice(0, firstH2).trim();
    const rest = cleaned.slice(firstH2);
    const sections = rest
      .split(/(?=<h2\b)/)
      .filter(Boolean)
      .map((chunk) => `<section class="content-section">\n${chunk.trim()}\n</section>`)
      .join("\n");
    const introSection = intro ? `<section class="content-section intro-section">\n${intro}\n</section>\n` : "";
    return `<div class="markdown-body">\n${introSection}${sections}\n      </div>`;
  });
}

function fixKnownDeadLinks(html, file) {
  const workflow = relativeFromPage(file, "workflows/index.html");
  const prompts = relativeFromPage(file, "prompts/jee/jee-ai-prompt-library.html");
  html = html.replace(/href="workflows\/ai-educational-workflows"/g, `href="${workflow}"`);
  html = html.replace(/href="https:\/\/github\.com\/scooterxd69\/AI-Atlas\/blob\/main\/prompts\/jee\/jee-ai-prompt-library\.md"/g, `href="${prompts}"`);
  return html;
}

function upgradePage(file) {
  let html = fs.readFileSync(file, "utf8");
  if (slash(path.relative(docsDir, file)) === "index.html") return;

  html = addHeadAssets(html, file);
  html = html.replace(/<header class="site-header">[\s\S]*?<\/header>/, buildNav(file));
  html = upgradeHero(html, file);
  html = sectionizeMarkdownBody(html);
  html = fixKnownDeadLinks(html, file);
  html = html.replace(/<footer class="site-footer">[\s\S]*?<\/footer>/, buildFooter(file));

  fs.writeFileSync(file, html, "utf8");
}

for (const file of walk(docsDir)) {
  upgradePage(file);
}

console.log("Upgraded existing HTML pages without reading Markdown sources.");
