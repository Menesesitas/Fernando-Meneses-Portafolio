const projects = [
  // ==== QA Bootcamp (relleno inicial; tú me pasas capturas y lo refinamos) ====
  {
    title: "QA — Web Testing (Bootcamp)",
    category: "qa",
    desc: "Diseño y ejecución de casos de prueba manuales; reporte de bugs con severidad y evidencia (Excel + Jira).",
    tags: ["Casos de prueba", "Jira", "Severidad", "Evidencia"],
    repo: "",
    demo: "",
    demoLabel: ""
  },
  {
    title: "QA — API Testing (Bootcamp)",
    category: "qa",
    desc: "Pruebas de API REST con Postman: positivos, negativos y valores límite; validación de request/response y lógica de negocio.",
    tags: ["Postman", "Swagger/ApiDoc", "Excel", "Jira"],
    repo: "",
    demo: "",
    demoLabel: ""
  },

  // ==== Web & UX ====
  {
    title: "Columbus — Client Web",
    category: "web",
    desc: "Página web del cliente (HTML/CSS/JS).",
    tags: ["HTML", "CSS", "JS"],
    repo: "https://github.com/Menesesitas/Columbus_Client_Web",
    demo: "https://columbus-i.com/sitio/index.html",
    demoLabel: "Sitio"
  },
  {
    title: "Columbus — Login Screen",
    category: "web",
    desc: "Interfaz de login (HTML/CSS/JS) como módulo independiente.",
    tags: ["HTML", "CSS", "JS"],
    repo: "https://github.com/Menesesitas/Columbus_Login_Screen",
    demo: "demo_login/login.html",
    demoLabel: "Abrir Login"
  },

    {
    title: "Página Web — Valle del Volcán",
    category: "web",
    desc: "Proyecto web (UX). Sitio para purificadora de agua “Valle del Volcán”.",
    tags: ["HTML", "CSS", "JS"],
    repo: "https://github.com/Menesesitas/Pagina_Web_Valle_del_Volcan",
    demo: ""
  },

  // ==== Datos & Automatización (VW lo dejamos listo para PDF cuando lo pongas) ====
  {
    title: "Volkswagen — Automatización de Reportes de Productividad",
    category: "data",
    desc: "Automatización y optimización de procesos para generación de reportes de productividad; validación de datos y mejora de tiempos.",
    tags: ["Excel", "Power Query", "VBA", "SharePoint", "Power BI"],
    repo: "",
    demo: "",
    demoLabel: ""
  },

{
    title: "Visión Artificial",
    category: "data",
    desc: "Notebooks de visión artificial (prácticas/proyectos académicos).",
    tags: ["Jupyter", "CV"],
    repo: "https://github.com/Menesesitas/VisionArtificial",
    demo: ""
  },

{
    title: "Inteligencia Artificial",
    category: "data",
    desc: "Notebooks y actividades de IA.",
    tags: ["Jupyter", "IA"],
    repo: "https://github.com/Menesesitas/Inteligencia_Artificial",
    demo: ""
  },

  // ==== Sistemas / Académico (ejemplos existentes) ====
  {
    title: "Fruit-lens",
    category: "data",
    desc: "Proyecto en C++ (ajustamos la descripción cuando me digas exactamente qué hace).",
    tags: ["C++"],
    repo: "https://github.com/Menesesitas/Fruit-lens",
    demo: "",
    demoLabel: ""
  }
];

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderProjects(filter = "all") {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  const filtered = (filter === "all")
    ? projects
    : projects.filter(p => p.category === filter);

  grid.innerHTML = "";

  filtered.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.desc)}</p>

      <div class="tags">
        ${p.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
      </div>

      <div class="card-actions">
        ${p.repo ? `<a class="btn btn-ghost" href="${p.repo}" target="_blank" rel="noreferrer">Repo</a>` : ""}
        ${p.demo ? `<a class="btn" href="${p.demo}" target="_blank" rel="noreferrer">${escapeHtml(p.demoLabel || "Demo")}</a>` : ""}
      </div>
    `;

    grid.appendChild(card);
  });
}

function setActiveChip(chip) {
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
  chip.classList.add("is-active");
}

document.addEventListener("DOMContentLoaded", () => {
  // Año en footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Render inicial
  renderProjects("all");

  // Filtros
  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const filter = chip.getAttribute("data-filter") || "all";
      setActiveChip(chip);
      renderProjects(filter);
    });
  });
});

