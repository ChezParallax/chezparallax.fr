// main-critical.js
// Injecte header & footer, initialise Lucide + année

document.addEventListener("DOMContentLoaded", () => {
  // Header
  fetch("/parts/header.html")
    .then(r => r.text())
    .then(html => {
      document.getElementById("header").innerHTML = html;
      if (window.lucide) lucide.createIcons();
    });

  // Footer
  fetch("/parts/footer.html")
    .then(r => r.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;
      // Remplace _YEAR_ placeholder s’il existe
      const y = document.querySelector("#footer [data-year]");
      if (y) y.textContent = new Date().getFullYear();
      if (window.lucide) lucide.createIcons();
    });
});
