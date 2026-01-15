(function () {
  // Nav scroll state
  const nav = document.getElementById("nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Reveal observer (skips if reduced motion)
  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
  } else {
    let observer;
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Perf: stop observing once revealed
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  }

  // Safe form helpers: block obvious PHI patterns (light-touch)
  document.querySelectorAll("form[data-safe-form]").forEach((form) => {
    const message = form.querySelector("textarea[name='message']");
    if (!message) return;

    form.addEventListener("submit", (e) => {
      const v = (message.value || "").toLowerCase();
      // Very light heuristic to discourage PHI. Doesn't block normal text.
      const risky = /(ssn|social security|medication list|diagnos|suicid|self harm|dob\b|date of birth)/i.test(v);
      if (risky) {
        e.preventDefault();
        alert("Please remove sensitive clinical details. This form is for updates only (no clinical intake).");
      }
    });
  });
})();