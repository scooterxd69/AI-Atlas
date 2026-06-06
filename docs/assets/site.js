(function () {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const points = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);
    points.length = 0;
    const count = Math.min(180, Math.max(70, Math.floor(canvas.height / 28)));
    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 0.6 + Math.random() * 1.4,
        a: 0.12 + Math.random() * 0.28,
        vy: 0.08 + Math.random() * 0.2,
      });
    }
  }

  function draw() {
    const h = Math.max(document.body.scrollHeight, window.innerHeight);
    if (canvas.height !== h) resize();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gradients = [
      [canvas.width * 0.18, window.scrollY + 180, 420, "56,189,248"],
      [canvas.width * 0.82, window.scrollY + 320, 460, "168,85,247"],
    ];

    for (const [x, y, r, color] of gradients) {
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, `rgba(${color},0.08)`);
      grad.addColorStop(1, `rgba(${color},0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    for (const p of points) {
      p.y -= p.vy;
      if (p.y < -4) p.y = canvas.height + 4;
      ctx.fillStyle = `rgba(56,189,248,${p.a})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
})();
