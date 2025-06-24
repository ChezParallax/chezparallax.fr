// main-noncritical.js  (ESM, chargé en defer)
// Animations Motion One + petite UX

import { inView, animate } from "https://cdn.jsdelivr.net/npm/@motionone/dom/+esm";

// Intro fade-in
inView("#intro", () =>
  animate("#intro", { opacity: [0, 1], y: [-20, 0] }, { duration: 0.8, easing: "ease-out" })
);

// Cartes : fade + scale
inView(".choice-card", ({ target }) =>
  animate(target, { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.6, easing: "ease-out" })
);

// CTA section : léger zoom on-scroll
inView(".bg-[#c78a5c]", () =>
  animate(".bg-[#c78a5c] a.btn", { scale: [0.96, 1] }, { duration: 0.5, easing: "ease-out" })
);
