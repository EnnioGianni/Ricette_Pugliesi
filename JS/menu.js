/* ============================================================
 * menu.js — Sapori di Puglia (version corrigée)
 * - Menu latéral + accordéon fonctionnel
 * - Génération auto des catégories
 * - Gestion des menus complets (Salento, etc.)
 * ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ============================================================
     🟢 PARTIE 1 — MENU LATÉRAL (commun à tout le site)
     ============================================================ */
  const drawer   = document.getElementById("menuDrawer");
  const backdrop = document.getElementById("backdrop");
  const list     = document.getElementById("recipeList");
  const openBtns = [document.getElementById("openMenuBtn"), document.getElementById("openMenuBtn2")].filter(Boolean);
  const closeBtn = document.getElementById("closeMenuBtn");

  if (drawer && list) {

    // --- Ouvrir le menu ---
    function openDrawer() {
      drawer.setAttribute("aria-hidden", "false");
      drawer.classList.add("open");
      document.body.classList.add("no-scroll");
      if (backdrop) {
        backdrop.hidden = false;
        requestAnimationFrame(() => backdrop.classList.add("visible"));
      }
      openBtns.forEach(b => b?.setAttribute("aria-expanded", "true"));
    }

    // --- Fermer le menu ---
    function closeDrawer() {
      drawer.classList.remove("open");
      document.body.classList.remove("no-scroll");
      if (backdrop) {
        backdrop.classList.remove("visible");
        setTimeout(() => (backdrop.hidden = true), 250);
      }
      drawer.setAttribute("aria-hidden", "true");
      openBtns.forEach(b => b?.setAttribute("aria-expanded", "false"));
    }

    // --- Événements globaux ---
    openBtns.forEach(btn => btn?.addEventListener("click", openDrawer));
    closeBtn?.addEventListener("click", closeDrawer);
    backdrop?.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });

    // --- Construction dynamique du menu de recettes ---
    function renderCategories() {
      if (!Array.isArray(window.CATEGORIES)) return console.warn("[menu.js] ⚠️ CATEGORIES absentes.");

      list.innerHTML = "";
      const RECIPES = [];

      window.CATEGORIES.forEach(cat => {
        if (!cat || !Array.isArray(cat.items)) return;

        const catEl = document.createElement("li");
        catEl.className = "cat";

        // --- Bouton d’accordéon ---
        const btn = document.createElement("button");
        btn.className = "cat-toggle";
        btn.setAttribute("aria-expanded", "false");
        btn.innerHTML = `
          <span class="cat-icon">${cat.icon || "🍴"}</span>
          <span class="cat-title">${cat.title}</span>
          <span class="cat-chev">▼</span>
        `;

        // --- Liste interne ---
        const ul = document.createElement("ul");
        ul.className = "cat-list";
        ul.hidden = true;

        cat.items.forEach(item => {
          const absURL = item.url?.startsWith("/") ? item.url : "/" + (item.url || "");
          const li = document.createElement("li");
          li.className = "recipe-item";
          li.innerHTML = `
            <a href="${absURL}" class="recipe-link" data-hay="${item.hay || ""}">
              <img src="${item.img || "/Images/default.png"}" alt="${item.title}" loading="lazy">
              <div class="recipe-text">
                <strong>${item.title}</strong>
                <small>${item.meta || ""}</small>
              </div>
            </a>
          `;

          // --- Fermer le tiroir au clic sur une recette ---
          li.querySelector("a").addEventListener("click", () => {
            setTimeout(closeDrawer, 150);
          });

          ul.appendChild(li);
          RECIPES.push({ ...item, category: cat.title });
        });

        // --- Toggle accordéon ---
        btn.addEventListener("click", () => {
          const isOpen = btn.getAttribute("aria-expanded") === "true";
          btn.setAttribute("aria-expanded", String(!isOpen));

          if (!isOpen) {
            ul.hidden = false;
            const height = ul.scrollHeight;
            ul.style.maxHeight = height + "px";
            setTimeout(() => (ul.style.maxHeight = "none"), 280);
          } else {
            ul.style.maxHeight = ul.scrollHeight + "px";
            requestAnimationFrame(() => {
              ul.style.maxHeight = "0";
            });
            setTimeout(() => (ul.hidden = true), 280);
          }
        });

        catEl.appendChild(btn);
        catEl.appendChild(ul);
        list.appendChild(catEl);
      });

      window.RECIPES = RECIPES;
      document.dispatchEvent(new CustomEvent("recipes:ready", { detail: { RECIPES } }));
    }

    if (window.CATEGORIES) renderCategories();
    else window.addEventListener("load", renderCategories);
  }

  /* ============================================================
     🍷 PARTIE 2 — PAGES DE MENU COMPLET
     ============================================================ */
  const menuContainer = document.getElementById("menuContainer");
  if (menuContainer) {
    const page = window.location.pathname.toLowerCase();
    let activeMenu = null;

    // --- Menu du Salento ---
    if (page.includes("salento")) {
      activeMenu = {
        id: "menu-saveurs-salento",
        title: "Menu Saveurs du Salento — De la mer à la terre",
        description:
          "Un voyage gustatif à travers les Pouilles : des saveurs iodées de la côte aux parfums rustiques de l’arrière-pays.",
        courses: [
          { category: "Antipasto", title: "Rustici Leccesi", img: "./Menu/Images/rustici-leccesi.png", desc: "Feuilletés dorés farcis de béchamel et de tomate.", time: "⏱ 40 min", level: "👥 Facile", price: "💶 3,20 € / pers", url: "/Antipasti/rusticiLeccesi.html" },
          { category: "Primo Piatto", title: "Orecchiette al Sugo di Braciole", img: "./Menu/Images/orecchiette-sugo-di-braciole.png", desc: "Pâtes au ragoût lent de roulades de viande fondantes.", time: "⏱ 2 h", level: "👥 Moyen", price: "💶 4,50 € / pers", url: "/Primi/orecchietteAlSugoDiBraciole.html" },
          { category: "Secondo Piatto", title: "Polpo alla Pignata", img: "./Menu/Images/polpo-alla-pignata.png", desc: "Poulpe mijoté en terre cuite avec tomate, vin et herbes du maquis.", time: "⏱ 1 h 30", level: "👥 Moyen", price: "💶 6,80 € / pers", url: "/Secondi/polpoAllaPignata.html" },
          { category: "Contorno", title: "Melanzane alla Pugarganicagliese", img: "./Menu/Images/Aubergines.png", desc: "Aubergines marinées à l’huile d’olive, ail et origan.", time: "⏱ 40 min", level: "👥 Facile", price: "💶 2,90 € / pers", url: "/Antipasti/melanzaneMarinate.html" },
          { category: "Dolce", title: "Pasticciotto Leccese", img: "./Menu/Images/pasticciotto-leccese.png", desc: "Petits gâteaux sablés garnis de crème pâtissière tiède.", time: "⏱ 1 h 15", level: "👥 Moyen", price: "💶 3,50 € / pers", url: "/Dolci/pasticciottoLeccese.html" }
        ]
      };
    }

    // --- Menu du Gargano ---
if (page.includes("gargano")) {
  activeMenu = {
    id: "menu-gargano",
    title: "Menu Terre & Mer du Gargano",
    description:
      "Un menu inspiré du Gargano : entre mer Adriatique et collines parfumées, des plats rustiques et généreux typiques du Nord des Pouilles.",
    courses: [
      {
        category: "Antipasto",
        title: "Polpette di Pane alla Garganica",
        img: "./Images/polpette-pane-garganica.png",
        desc: "Boulettes rustiques à base de pain rassis, pecorino, ail et persil, dorées dans un filet d’huile du Gargano.",
        time: "⏱ 35 min",
        level: "👥 Facile",
        price: "💶 3,20 € / pers",
        url: "./Antipasti/polpettePaneGarganica.html"
      },
      {
        category: "Primo Piatto",
        title: "Trofie alle Cozze e Pomodorini",
        img: "./Menu/Images/trofie-alle-cozze.png",
        desc: "Pâtes trofie avec moules fraîches, tomates cerises et vin blanc — un classique des pêcheurs du Gargano.",
        time: "⏱ 45 min",
        level: "👥 Moyen",
        price: "💶 4,60 € / pers",
        url: "./Primi/trofieAlleCozze.html"
      },
      {
        category: "Secondo Piatto",
        title: "Agnello al Forno con Patate e Rosmarino",
        img: "./Menu/Images/agnello-al-forno.png",
        desc: "Agneau rôti au four avec pommes de terre, romarin et vin blanc — spécialité de montagne.",
        time: "⏱ 1 h 30",
        level: "👥 Moyen",
        price: "💶 6,80 € / pers",
        url: "./Secondi/agnelloAlForno.html"
      },
      {
        category: "Contorno",
        title: "Verdure Grigliate al Profumo d’Olio",
        img: "./Menu/Images/verdure-grigliate.png",
        desc: "Aubergines, courgettes et poivrons grillés, marinés à l’huile d’olive, ail et origan.",
        time: "⏱ 30 min",
        level: "👥 Facile",
        price: "💶 2,80 € / pers",
        url: "./Antipasti/verdureGrigliate.html"
      },
      {
        category: "Dolce",
        title: "Sporcamuss alla Crema",
        img: "./Menu/Images/sporcamuss.png",
        desc: "Carrés de pâte feuilletée garnis de crème pâtissière et sucre glace — un dessert populaire à Foggia.",
        time: "⏱ 50 min",
        level: "👥 Facile",
        price: "💶 2,50 € / pers",
        url: "./Dolci/sporcamuss.html"
      }
    ]
  };
}


    // --- (autres menus pourront être ajoutés ici) ---
    if (!activeMenu) return;

    const section = document.createElement("section");
    section.className = "menu-section fade-in";
    section.innerHTML = `
      <header class="menu-header">
        <h1>${activeMenu.title}</h1>
        <p class="menu-desc">${activeMenu.description}</p>
      </header>
      <div class="menu-grid">
        ${activeMenu.courses.map((dish, i) => `
          <article class="menu-card" style="animation-delay: ${i * 100}ms">
            <div class="menu-image">
              <img src="${dish.img}" alt="${dish.title}" loading="lazy" onclick="openImage(this)">
            </div>
            <div class="menu-content">
              <h2>${dish.category}: <span>${dish.title}</span></h2>
              <p>${dish.desc}</p>
              <div class="menu-meta">
                <span>${dish.time}</span>
                <span>${dish.level}</span>
                <span>${dish.price}</span>
              </div>
              <a href="${dish.url}" class="button recipe-link">Voir la recette</a>
            </div>
          </article>
        `).join('')}
      </div>
    `;
    menuContainer.appendChild(section);
  }

  /* ============================================================
     🔍 Zoom image plein écran
     ============================================================ */
  window.openImage = function (img) {
    const overlay = document.createElement("div");
    overlay.className = "img-overlay";
    overlay.innerHTML = `
      <div class="img-viewer">
        <img src="${img.src}" alt="${img.alt}">
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener("click", () => overlay.remove());
  };
});
/* ============================================================
   🌄 Arrière-plan automatique pour toutes les recettes
   Sans modifier le HTML des pages
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  // Liste des dossiers contenant des recettes
  const recettesPaths = ["/antipasti/", "/primi/", "/secondi/", "/dolci/"];
  const current = window.location.pathname.toLowerCase();

  // Vérifie si l'URL est une page de recette
  const isRecettePage = recettesPaths.some(path => current.includes(path));

  if (isRecettePage) {
    document.body.style.backgroundImage = "url('/Images/bg-recette.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
  }

});


/* Menu déroulant dynamique injecté dans toutes les pages */

document.addEventListener("DOMContentLoaded", () => {

  // Liste centralisée des menus (tu peux en ajouter ou modifier ici)
  const menus = [
    { name: "Menu Gargano", href: "./Menu/menuGargano.html" },
    { name: "Menu Salento", href: "./Menu/menu-salento.html" },
    { name: "Menu Bari", href: "./Menu/menuBari.html" },
    { name: "Menu Lecce", href: "./Menu/menuLecce.html" },
    { name: "Menu Foggia", href: "./Menu/menuFoggia.html" },
    { name: "Menu Végétarien", href: "./Menu/menuVegetarien.html" },
    { name: "Menu Poisson", href: "./Menu/menuPoisson.html" }
  ];

  // On génère le HTML du menu déroulant
  let html = `
    <details class="menu-dropdown" style="position:relative;">
      <summary
        style="
          list-style:none;
          cursor:pointer;
          background:#d4a373;
          color:#fff;
          padding:0.5rem 1rem;
          border-radius:8px;
          font-weight:bold;
          white-space:nowrap;
          display:inline-block;
          user-select:none;
        "
      >
        Menus ▾
      </summary>

      <ul
        style="
          margin:0.5rem 0 0;
          padding:0.25rem 0;
          list-style:none;
          background:#fff;
          border:1px solid rgba(0,0,0,0.1);
          border-radius:8px;
          box-shadow:0 6px 18px rgba(0,0,0,0.1);
          position:absolute;
          right:0;
          min-width:220px;
          z-index:999;
        "
      >
  `;

  menus.forEach(menu => {
    html += `
      <li>
        <a href="${menu.href}"
           onclick="this.closest('details').removeAttribute('open')"
           style="display:block; padding:0.5rem 0.75rem; color:#3a2a1b; text-decoration:none;">
           ${menu.name}
        </a>
      </li>
    `;
  });

  html += `
      </ul>
    </details>
  `;

  // Injection dans la page (toutes les pages qui ont <div id="menu-dropdown">)
  const container = document.getElementById("menu-dropdown");
  if (container) container.innerHTML = html;

});
