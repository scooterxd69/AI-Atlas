const fs = require("fs");
const path = require("path");

const file = path.resolve(__dirname, "..", "docs", "index.html");
let html = fs.readFileSync(file, "utf8");

if (!html.includes('class="breadcrumbs home-breadcrumbs"')) {
  html = html.replace(
    "</nav>\n\n<!-- HERO -->",
    `</nav>\n<nav class="breadcrumbs home-breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a></nav>\n\n<!-- HERO -->`
  );
}

html = html.replace('<section id="contents">', '<section id="contents" class="related-resources">');
html = html.replace("<footer>", '<footer class="site-footer">');

fs.writeFileSync(file, html, "utf8");
console.log("Updated homepage structure landmarks.");
