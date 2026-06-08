const fs = require("fs");
const path = require("path");

const file = path.resolve(__dirname, "..", "docs", "index.html");
let html = fs.readFileSync(file, "utf8");

const nav = `<nav>
  <a class="nav-logo" href="index.html" aria-label="AI Atlas home"><span>AI Atlas</span></a>
  <ul class="nav-links">
    <li><a href="#quick-start">Home</a></li>
    <li><a href="study-systems/index.html">Study Systems</a></li>
    <li><a href="prompts/index.html">Prompt Library</a></li>
    <li><a href="workflows/index.html">Workflows</a></li>
    <li><a href="tools/ai-tools-database.html">Tools Database</a></li>
    <li><a href="resources/index.html">Resources</a></li>
    <li><a href="career-guides/index.html">Career Guides</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="search.html">Search</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="https://github.com/scooterxd69/AI-Atlas" target="_blank" rel="noopener" class="nav-cta">GitHub</a></li>
  </ul>
</nav>`;

html = html.replace(/<nav>\s*<a class="nav-logo"[\s\S]*?<\/ul>\s*<\/nav>/, nav);
fs.writeFileSync(file, html, "utf8");
console.log("Updated homepage navigation.");
