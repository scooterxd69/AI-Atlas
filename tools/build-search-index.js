const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const docsDir = path.join(root, "docs");
const outFile = path.join(docsDir, "assets", "search-index.json");

function walk(dir, files = []) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) walk(full, files);
    else if (item.isFile() && item.name.endsWith(".html")) files.push(full);
  }
  return files;
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function sectionFor(rel) {
  if (rel === "index.html") return "Home";
  const first = rel.split("/")[0];
  const labels = {
    "study-systems": "Study Systems",
    prompts: "Prompt Library",
    workflows: "Workflows",
    tools: "Tools Database",
    resources: "Resources",
    "career-guides": "Career Guides",
    chapters: "Chapters",
  };
  return labels[first] || "AI Atlas";
}

const pages = walk(docsDir)
  .map((file) => {
    const rel = path.relative(docsDir, file).split(path.sep).join("/");
    if (rel === "search.html") return null;
    const html = fs.readFileSync(file, "utf8");
    const title = (html.match(/<title>(.*?)\s*\|\s*AI Atlas<\/title>/i) || html.match(/<title>(.*?)<\/title>/i) || [null, "AI Atlas"])[1];
    const description = (html.match(/<meta name="description" content="([^"]*)"/i) || [null, ""])[1];
    const text = stripHtml(html).slice(0, 8000);
    return {
      title,
      description,
      section: sectionFor(rel),
      url: rel,
      text,
    };
  })
  .filter(Boolean)
  .sort((a, b) => a.title.localeCompare(b.title));

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, `${JSON.stringify(pages, null, 2)}\n`, "utf8");
console.log(`Built search index for ${pages.length} pages.`);
