(function () {
  const scriptUrl = new URL(document.currentScript.src, window.location.href);
  const siteRoot = new URL("../", scriptUrl);
  const indexUrl = new URL("search-index.json", scriptUrl);
  const nav = document.querySelector(".site-nav") || document.querySelector("body > nav");
  if (!nav || nav.querySelector(".nav-search")) return;

  const style = document.createElement("style");
  style.textContent = `
    .nav-search{position:relative;display:flex;align-items:center}
    .nav-search-toggle{width:2.35rem;height:2.35rem;border:1px solid rgba(56,189,248,.32);border-radius:6px;background:rgba(56,189,248,.08);color:#F8FAFC;cursor:pointer;font:700 1rem "DM Sans",sans-serif}
    .nav-search-panel{position:absolute;top:calc(100% + .75rem);right:0;width:min(26rem,calc(100vw - 2rem));display:none;border:1px solid rgba(56,189,248,.28);border-radius:8px;background:rgba(5,8,22,.97);box-shadow:0 24px 80px rgba(2,6,23,.65);padding:.8rem;z-index:140}
    .nav-search.is-open .nav-search-panel{display:block}
    .nav-search-input{width:100%;min-height:2.7rem;border:1px solid rgba(56,189,248,.34);border-radius:6px;background:#020617;color:#F8FAFC;padding:0 .8rem;font:600 .95rem "DM Sans",sans-serif;outline:none}
    .nav-search-input:focus{border-color:#38BDF8;box-shadow:0 0 0 3px rgba(56,189,248,.14)}
    .nav-search-results{display:grid;gap:.5rem;margin-top:.7rem;max-height:22rem;overflow:auto}
    .nav-search-result{display:block;border:1px solid rgba(30,58,138,.72);border-radius:6px;background:rgba(10,18,40,.78);padding:.65rem;text-decoration:none;color:#F8FAFC}
    .nav-search-result:hover{border-color:rgba(56,189,248,.62);color:#F8FAFC}
    .nav-search-result span,.nav-search-result small{display:block;color:#94A3B8;font-size:.78rem}
    .nav-search-empty{color:#94A3B8;font-size:.88rem;margin:.6rem 0 0}
    @media(max-width:780px){.nav-search{width:100%;justify-content:flex-end}.nav-search-panel{left:0;right:auto;width:100%}}
  `;
  document.head.append(style);

  const widget = document.createElement("div");
  widget.className = "nav-search";
  widget.innerHTML = `
    <button class="nav-search-toggle" type="button" aria-expanded="false" aria-label="Search AI Atlas">⌕</button>
    <div class="nav-search-panel" role="search">
      <input class="nav-search-input" type="search" placeholder="Search AI Atlas..." autocomplete="off" aria-label="Search AI Atlas">
      <div class="nav-search-results" aria-live="polite"></div>
    </div>
  `;
  nav.append(widget);

  const toggle = widget.querySelector(".nav-search-toggle");
  const input = widget.querySelector(".nav-search-input");
  const results = widget.querySelector(".nav-search-results");
  let pages = [];

  function score(page, terms) {
    const title = page.title.toLowerCase();
    const section = page.section.toLowerCase();
    const description = page.description.toLowerCase();
    const text = page.text.toLowerCase();
    return terms.reduce((sum, term) => {
      if (title.includes(term)) sum += 12;
      if (section.includes(term)) sum += 8;
      if (description.includes(term)) sum += 5;
      if (text.includes(term)) sum += 1;
      return sum;
    }, 0);
  }

  function render() {
    const terms = input.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      results.innerHTML = '<p class="nav-search-empty">Type a topic, exam, workflow, or tool.</p>';
      return;
    }
    const matches = pages
      .map((page) => ({ ...page, score: score(page, terms) }))
      .filter((page) => page.score > 0)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
      .slice(0, 8);
    results.innerHTML = matches.length
      ? matches.map((page) => `<a class="nav-search-result" href="${new URL(page.url, siteRoot).href}"><span>${page.section}</span><strong>${page.title}</strong><small>${page.description || "AI Atlas resource"}</small></a>`).join("")
      : '<p class="nav-search-empty">No matching resources found.</p>';
  }

  toggle.addEventListener("click", () => {
    const open = widget.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    if (open) setTimeout(() => input.focus(), 0);
  });
  input.addEventListener("input", render);
  document.addEventListener("click", (event) => {
    if (!widget.contains(event.target)) {
      widget.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  fetch(indexUrl)
    .then((response) => response.json())
    .then((data) => {
      pages = data;
      render();
    })
    .catch(() => {
      results.innerHTML = '<p class="nav-search-empty">Search is unavailable right now.</p>';
    });
})();
