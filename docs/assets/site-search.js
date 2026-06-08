(function () {
  const input = document.querySelector("#site-search-input");
  const results = document.querySelector("#site-search-results");
  const count = document.querySelector("#site-search-count");
  if (!input || !results) return;

  let pages = [];

  function scorePage(page, terms) {
    const title = page.title.toLowerCase();
    const section = page.section.toLowerCase();
    const description = page.description.toLowerCase();
    const text = page.text.toLowerCase();
    let score = 0;
    for (const term of terms) {
      if (title.includes(term)) score += 12;
      if (section.includes(term)) score += 8;
      if (description.includes(term)) score += 5;
      if (text.includes(term)) score += 1;
    }
    return score;
  }

  function render(query) {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    const matches = terms.length
      ? pages
          .map((page) => ({ ...page, score: scorePage(page, terms) }))
          .filter((page) => page.score > 0)
          .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
          .slice(0, 24)
      : pages.slice(0, 12);

    count.textContent = terms.length
      ? `${matches.length} result${matches.length === 1 ? "" : "s"}`
      : "Start with a topic, exam, workflow, or tool";

    results.innerHTML = matches
      .map(
        (page) => `<a class="search-result-card" href="${page.url}">
          <span>${page.section}</span>
          <strong>${page.title}</strong>
          <small>${page.description || "AI Atlas learning resource"}</small>
        </a>`
      )
      .join("");
  }

  fetch("assets/search-index.json")
    .then((response) => response.json())
    .then((data) => {
      pages = data;
      render("");
      input.addEventListener("input", () => render(input.value));
      input.focus();
    })
    .catch(() => {
      count.textContent = "Search index could not be loaded.";
    });
})();
