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

function rel(file) {
  return path.relative(docsDir, file).split(path.sep).join("/");
}

function isExternal(value) {
  return /^(https?:|mailto:|tel:|#|data:)/i.test(value);
}

function targetExists(file, value) {
  const clean = value.split("#")[0].split("?")[0];
  if (!clean || isExternal(clean)) return true;
  return fs.existsSync(path.normalize(path.join(path.dirname(file), clean)));
}

const pages = walk(docsDir);
const badLinks = [];
const badAssets = [];
const missingStructure = [];
const missingSeo = [];

for (const page of pages) {
  const html = fs.readFileSync(page, "utf8");
  const pageRel = rel(page);

  for (const [label, needle] of [
    ["footer", "site-footer"],
    ["breadcrumbs", "breadcrumbs"],
    ["description", 'name="description"'],
    ["og:title", 'property="og:title"'],
    ["canonical", 'rel="canonical"'],
  ]) {
    if (!html.includes(needle)) {
      (label === "description" || label === "og:title" || label === "canonical" ? missingSeo : missingStructure).push(`${pageRel}: ${label}`);
    }
  }

  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (!isExternal(href) && (href.endsWith(".html") || href.includes(".html#")) && !targetExists(page, href)) {
      badLinks.push(`${pageRel} -> ${href}`);
    }
  }

  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const href = match[1];
    if (!isExternal(href) && /\.(css|js|svg|png|jpg|jpeg|webp|json|txt)$/i.test(href) && !targetExists(page, href)) {
      badAssets.push(`${pageRel} -> ${href}`);
    }
  }
}

const result = {
  pages: pages.length,
  badLinks,
  badAssets,
  missingStructure,
  missingSeo,
};

if (badLinks.length || badAssets.length || missingStructure.length || missingSeo.length) {
  console.error(JSON.stringify(result, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(result, null, 2));
