const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const docsDir = path.join(root, "docs");

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

function rel(file) {
  return slash(path.relative(docsDir, file));
}

function fromPage(file, target) {
  if (/^https?:/i.test(target)) return target;
  const fromDir = path.posix.dirname(rel(file));
  return slash(path.posix.relative(fromDir, target)) || path.posix.basename(target);
}

function sectionFor(file) {
  const page = rel(file);
  const first = page.split("/")[0];
  if (page === "index.html") return "home";
  if (first === "study-systems") return "study-systems";
  if (first === "prompts") return "prompts";
  if (first === "workflows") return "workflows";
  if (first === "tools" || page === "AI-Tools-Database.html") return "tools";
  if (first === "resources") return "resources";
  if (first === "career-guides") return "career-guides";
  return "";
}

const navItems = [
  ["Home", "index.html", "home"],
  ["Study Systems", "study-systems/index.html", "study-systems"],
  ["Prompts", "prompts/index.html", "prompts"],
  ["Workflows", "workflows/index.html", "workflows"],
  ["Tools", "tools/ai-tools-database.html", "tools"],
  ["Resources", "resources/index.html", "resources"],
  ["Career Guides", "career-guides/index.html", "career-guides"],
  ["GitHub", "https://github.com/scooterxd69/AI-Atlas", "external"],
];

function navHtml(file, homepage = false) {
  const current = sectionFor(file);
  const links = navItems
    .map(([label, target, key]) => {
      const href = fromPage(file, target);
      const active = key === current ? ' class="active" aria-current="page"' : "";
      const external = /^https?:/i.test(target) ? ' target="_blank" rel="noopener"' : "";
      const cta = homepage && key === "external" ? ' class="nav-cta"' : active;
      return homepage
        ? `<li><a href="${href}"${cta}${external}>${label}</a></li>`
        : `<a href="${href}" data-nav="${key}"${active}${external}>${label}</a>`;
    })
    .join("");
  if (homepage) {
    return `<nav>
  <a class="nav-logo" href="index.html" aria-label="AI Atlas home"><span>AI Atlas</span></a>
  <ul class="nav-links">${links}</ul>
</nav>`;
  }
  return `<header class="site-header">
    <nav class="site-nav" aria-label="Primary navigation">
      <a class="nav-logo" href="${fromPage(file, "index.html")}" aria-label="AI Atlas home"><span class="logo-mark" aria-hidden="true">AI</span><span>Atlas</span></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links">Menu</button>
      <div class="nav-links" id="nav-links">${links}</div>
    </nav>
  </header>`;
}

function ensureNavSearchScript(html, file) {
  const src = fromPage(file, "assets/nav-search.js");
  html = html.replace(/<script src="[^"]*assets\/nav-search\.js" defer><\/script>\s*/g, "");
  return html.replace("</body>", `  <script src="${src}" defer></script>\n</body>`);
}

const htmlPages = new Set(walk(docsDir).map((file) => rel(file).toLowerCase()));

function localHtmlForMarkdown(file, mdPath) {
  const clean = mdPath.replace(/^https:\/\/github\.com\/scooterxd69\/AI-Atlas\/blob\/main\//, "").replace(/^docs\//, "");
  const withoutHash = clean.split("#")[0];
  const hash = clean.includes("#") ? `#${clean.split("#").slice(1).join("#")}` : "";
  const parsed = path.posix.parse(withoutHash);
  const candidates = [
    `${parsed.dir ? `${parsed.dir}/` : ""}${parsed.name}.html`,
    `docs/${parsed.dir ? `${parsed.dir}/` : ""}${parsed.name}.html`.replace(/^docs\//, ""),
  ];
  for (const candidate of candidates) {
    if (htmlPages.has(candidate.toLowerCase())) return fromPage(file, candidate) + hash;
  }
  return null;
}

function fixMarkdownLinks(html, file) {
  return html.replace(/href="(https:\/\/github\.com\/scooterxd69\/AI-Atlas\/blob\/main\/[^"]+\.md(?:#[^"]+)?)"/g, (match, href) => {
    const local = localHtmlForMarkdown(file, href);
    return local ? `href="${local}"` : match;
  });
}

function schoolLanding() {
  const file = path.join(docsDir, "study-systems", "school", "index.html");
  const href = (target) => fromPage(file, target);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>School Study Systems | AI Atlas</title>
  <meta name="author" content="Naitik Singh">
  <meta name="description" content="AI Atlas school study systems for Class 9, Class 10, Class 11 and Class 12 students using AI-assisted workflows.">
  <meta name="keywords" content="AI Atlas, school study systems, Class 9, Class 10, Class 11, Class 12, CBSE AI study">
  <meta property="og:title" content="School Study Systems | AI Atlas">
  <meta property="og:description" content="Choose a Class 9, Class 10, Class 11 or Class 12 AI-powered school study system.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="study-systems/school/index.html">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="School Study Systems | AI Atlas">
  <meta name="twitter:description" content="Choose a Class 9, Class 10, Class 11 or Class 12 AI-powered school study system.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap" rel="stylesheet">
  <link rel="icon" href="${href("assets/favicon.svg")}" type="image/svg+xml">
  <link rel="apple-touch-icon" href="${href("assets/favicon.svg")}">
  <link rel="canonical" href="index.html">
  <link rel="stylesheet" href="${href("assets/site.css")}">
</head>
<body>
  <canvas id="bg-canvas" aria-hidden="true"></canvas>
  <a class="skip-link" href="#content">Skip to content</a>
  ${navHtml(file)}
  <main id="content" class="page-shell">
    <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${href("index.html")}">Home</a><span aria-hidden="true">/</span><a href="${href("study-systems/index.html")}">Study Systems</a><span aria-hidden="true">/</span><span>School</span></nav>
    <section class="page-hero">
      <p class="eyebrow">School Study Systems</p>
      <h1>Class 9-12 Boards</h1>
      <p class="page-summary">Choose the right AI-assisted school study system for your class. Each path keeps the original AI Atlas content and connects to prompts, resources and revision workflows.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="class9.html">Start Class 9</a>
        <a class="btn btn-ghost" href="${href("prompts/school/school-ai-prompt-library.html")}">School Prompts</a>
      </div>
    </section>
    <article class="content-card">
      <div class="markdown-body">
        <section class="content-section intro-section">
          <h2 id="choose-your-class">Choose Your Class</h2>
          <p>Use this landing page instead of jumping directly to Class 10. Pick the class you are studying right now.</p>
          <div class="resource-grid">
            <a class="resource-card" href="class9.html"><span>Foundation</span><strong>Class 9 Study System</strong><small>Build Science and Maths fundamentals early.</small></a>
            <a class="resource-card" href="class10-cbse-study-system.html"><span>Boards</span><strong>Class 10 Study System</strong><small>Prepare for CBSE boards with AI workflows.</small></a>
            <a class="resource-card" href="class11.html"><span>Transition</span><strong>Class 11 Study System</strong><small>Handle the Class 11 jump with structure.</small></a>
            <a class="resource-card" href="class12-science-study-system.html"><span>Final Year</span><strong>Class 12 Study System</strong><small>Balance boards, revision and entrance prep.</small></a>
          </div>
        </section>
      </div>
    </article>
    <nav class="prev-next" aria-label="Previous and next resources">
      <a href="${href("study-systems/neet/index.html")}"><span>Previous</span><strong>NEET Study Systems</strong></a>
      <a href="class9.html"><span>Next</span><strong>Class 9 Study System</strong></a>
    </nav>
    <section class="related-resources" aria-labelledby="related-title">
      <div><p class="eyebrow">Related Resources</p><h2 id="related-title">Continue Exploring</h2></div>
      <div class="resource-grid">
        <a class="resource-card" href="${href("prompts/school/school-ai-prompt-library.html")}"><span>Prompts</span><strong>School Prompt Library</strong><small>Ready-to-use prompts for school learning.</small></a>
        <a class="resource-card" href="${href("resources/index.html")}"><span>Resources</span><strong>Free Resources</strong><small>Books, practice sites and official links.</small></a>
        <a class="resource-card" href="${href("workflows/index.html")}"><span>Workflows</span><strong>Study Workflows</strong><small>Repeatable AI-assisted study routines.</small></a>
        <a class="resource-card" href="${href("search.html")}"><span>Search</span><strong>Search AI Atlas</strong><small>Find the right guide faster.</small></a>
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand"><a class="nav-logo" href="${href("index.html")}" aria-label="AI Atlas home"><span class="logo-mark" aria-hidden="true">AI</span><span>Atlas</span></a><p>Free open-source AI learning systems for JEE, NEET and school students.</p></div>
      <nav class="footer-links" aria-label="Footer navigation"><a href="${href("study-systems/index.html")}">Study Systems</a><a href="${href("prompts/index.html")}">Prompts</a><a href="${href("workflows/index.html")}">Workflows</a><a href="${href("tools/ai-tools-database.html")}">Tools</a><a href="${href("resources/index.html")}">Resources</a><a href="${href("career-guides/index.html")}">Career Guides</a></nav>
      <div class="footer-cta"><p>Built for students who want a sharper study system, not more noise.</p><a class="footer-button" href="https://github.com/scooterxd69/AI-Atlas" target="_blank" rel="noopener">Star on GitHub</a></div>
    </div>
  </footer>
  <script src="${href("assets/site.js")}" defer></script>
  <script src="${href("assets/nav-search.js")}" defer></script>
</body>
</html>
`;
}

for (const file of walk(docsDir)) {
  let html = fs.readFileSync(file, "utf8");
  if (rel(file) === "index.html") {
    html = html.replace(/<nav>\s*<a class="nav-logo"[\s\S]*?<\/ul>\s*<\/nav>/, navHtml(file, true));
    html = html.replace(/href="study-systems\/school\/class10-cbse-study-system\.html"/g, 'href="study-systems/school/index.html"');
    html = ensureNavSearchScript(html, file);
  } else if (rel(file) !== "study-systems/school/index.html") {
    html = html.replace(/<header class="site-header">[\s\S]*?<\/header>/, navHtml(file));
    html = ensureNavSearchScript(html, file);
  }
  html = fixMarkdownLinks(html, file);
  fs.writeFileSync(file, html, "utf8");
}

fs.writeFileSync(path.join(docsDir, "study-systems", "school", "index.html"), schoolLanding(), "utf8");
console.log("Applied minimal V1 finalization fixes.");
