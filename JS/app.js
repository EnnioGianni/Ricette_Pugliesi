/* app.js — thème sombre, liste de courses, convertisseur, bouton haut, diaporama, auto-symboles */

/* =========================
   🌗 Thème sombre (persistant)
   ========================= */
(function themeToggle(){
  const KEY = 'theme:dark';
  const apply = (on) => {
    document.documentElement.classList.toggle('dark', on);
    document.body.classList.toggle('dark', on);
  };
  apply(localStorage.getItem(KEY) === '1');
  document.querySelectorAll('[data-toggle-theme]').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOn = !document.documentElement.classList.contains('dark');
      apply(isOn);
      localStorage.setItem(KEY, isOn ? '1' : '0');
    });
  });
})();

/* =========================
   🧾 Liste de courses (localStorage)
   ========================= */
(function shoppingList(){
  const KEY = 'spesa:list';
  function openList(){
    const items = JSON.parse(localStorage.getItem(KEY) || '[]');
    const text = items.length ? items.join('\n') : '';
    const next = prompt('Liste de courses :', text);
    if (next != null) {
      const arr = next.split(/\n+/).map(s => s.trim()).filter(Boolean);
      localStorage.setItem(KEY, JSON.stringify(arr));
      alert('Liste mise à jour.');
    }
  }
  document.getElementById('openListBtn')?.addEventListener('click', e => { e.preventDefault(); openList(); });
})();

/* =========================
   🔁 Convertisseur simple
   ========================= */
(function converter(){
  function convertUnits(){
    const q = prompt('Convertir (ex: 250 g, 2 cup, 500 ml, 1 l)');
    if (!q) return;
    const m = q.trim().match(/([\d.,]+)\s*(g|ml|l|cup|cups?)/i);
    if (!m) return alert('Format inconnu (exemples: 250 g, 2 cup, 500 ml, 1 l)');
    const val = parseFloat(m[1].replace(',', '.'));
    const unit = m[2].toLowerCase();
    let result = '';
    switch(unit){
      case 'g':      result = (val/236.6).toFixed(2)+' cup (approx. eau)'; break;
      case 'ml':     result = (val/236.6).toFixed(2)+' cup'; break;
      case 'l':      result = (val*1000/236.6).toFixed(2)+' cup'; break;
      case 'cup':
      case 'cups':   result = (val*236.6).toFixed(0)+' ml'; break;
    }
    alert(`${q} ≈ ${result}`);
  }
  document.getElementById('convertBtn')?.addEventListener('click', e => { e.preventDefault(); convertUnits(); });
})();

/* =========================
   ⬆️ Bouton “haut de page”
   ========================= */
(function scrollTop(){
  const btn = document.createElement('button');
  btn.id = 'scrollTopBtn';
  btn.textContent = '↑';
  btn.title = 'Remonter en haut';
  btn.className = 'scroll-top';
  document.body.appendChild(btn);
  const onScroll = () => btn.classList.toggle('show', window.scrollY > 200);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* =========================
   🎬 Diaporama d'accueil
   ========================= */
(function slideshow(){
  const slides = document.querySelectorAll('.slideshow-wrapper img');
  if (!slides.length) return;
  let i = 0;
  slides[i].classList.add('active');
  setInterval(() => {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 5000);
})();

/* ============================================================
   🔣 Auto-symboles ingrédients (détection par mots-clés)
   ============================================================ */
(function autoSymbols(){
  const norm = (s) =>
    s
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[’´`]/g, "'");

  const rules = [
    // Céréales / farines / pains / pâtes
    { re: /\bfarine(s)?\b/, sym: '🍞' },
    { re: /\bsemoule(s)?\b/, sym: '🌾' },
    { re: /\bble (dur|tendre)\b/, sym: '🌾' },
    { re: /\bpolenta\b/, sym: '🌽' },
    { re: /\bpain|focaccia\b/, sym: '🥖' },
    { re: /\bpates?\b|\borecchiette\b|\bcavatelli\b|\btroccoli\b|\bspaghett?i\b|\bpenne\b|\bgnocchi\b/, sym: '🍝' },
    { re: /\bchapelure|pane rale|pain rale\b/, sym: '🍞' },

    // Liquides & matières grasses
    { re: /\bhuile d'olive|huile d’olive\b/, sym: '🫒' },
    { re: /\bhuile(s)?\b/, sym: '🧴' },
    { re: /\beau\b/, sym: '💧' },
    { re: /\blait\b/, sym: '🥛' },
    { re: /\bcreme\b|\bcrème\b/, sym: '🥛' },
    { re: /\bvin (blanc|rouge)?\b/, sym: '🍷' },
    { re: /\bbierre?\b/, sym: '🍺' },
    { re: /\bvinaigre\b/, sym: '🧪' },
    { re: /\bbeurre\b/, sym: '🧈' },

    // Légumes / fruits frais
    { re: /\btomate(s)?\b|pomodoro(s)?\b/, sym: '🍅' },
    { re: /\baubergine(s)?\b/, sym: '🍆' },
    { re: /\bcourgette(s)?\b/, sym: '🥒' },
    { re: /\bpoivron(s)?\b/, sym: '🫑' },
    { re: /\bcarotte(s)?\b/, sym: '🥕' },
    { re: /\bceleri\b/, sym: '🥬' },
    { re: /\boignon(s)?\b/, sym: '🧅' },
    { re: /\bail\b/, sym: '🧄' },
    { re: /\bcime di rapa|brocoli rabe\b/, sym: '🥬' },
    { re: /\bbrocoli(s)?\b/, sym: '🥦' },
    { re: /\bepinard(s)?\b/, sym: '🥬' },
    { re: /\bchampignon(s)?\b/, sym: '🍄' },
    { re: /\bpatate(s)?|pommes? de terre\b/, sym: '🥔' },
    { re: /\bfenouil\b/, sym: '🌿' },
    { re: /\bconcombre(s)?\b/, sym: '🥒' },
    { re: /\bchou(x)?\b|\bchou-fleur\b/, sym: '🥬' },
    { re: /\bcitron(s)?\b/, sym: '🍋' },
    { re: /\borange(s)?\b/, sym: '🍊' },
    { re: /\bfigue(s)?\b/, sym: '🧺' },
    { re: /\braisin(s)?\b/, sym: '🍇' },

    // Herbes / épices / condiments
    { re: /\borigan|origano\b/, sym: '🌿' },
    { re: /\bbasilic|basilico\b/, sym: '🌿' },
    { re: /\bpersil\b/, sym: '🌿' },
    { re: /\bmenthe\b/, sym: '🌿' },
    { re: /\bromarin\b/, sym: '🌿' },
    { re: /\bsauge\b/, sym: '🌿' },
    { re: /\bthym\b/, sym: '🌿' },
    { re: /\blaurier\b/, sym: '🌿' },
    { re: /\bcapres?\b/, sym: '🧂' },
    { re: /\banchois?\b/, sym: '🐟' },
    { re: /\bsel fin|gros sel|sel\b/, sym: '🧂' },
    { re: /\bpoivre\b/, sym: '🌶️' },
    { re: /\bpiment|peperoncino\b/, sym: '🌶️' },
    { re: /\bsucre\b/, sym: '🍬' },

    // Fromages / laitages
    { re: /\bmozzarella|burrata|ricotta|scamorza|pecorino|parmigiano|parmesan|grana padano|cacioricotta\b/, sym: '🧀' },
    { re: /\byaourt\b/, sym: '🥛' },

    // 🥩 Viandes
    { re: /\bviande\b/, sym: '🥩' },
    { re: /\bporc|prosciutto|lonza|coppa\b/, sym: '🥩' },
    { re: /\bboeuf|bœuf|manzo\b/, sym: '🥩' },
    { re: /\bveau|vitello\b/, sym: '🥩' },
    { re: /\bagneau|agnello\b/, sym: '🥩' },
    { re: /\bbraciole?\b/, sym: '🥩' },
    { re: /\bvolaille|poulet|pollo|dinde\b/, sym: '🍗' },
    { re: /\bsaucisse(s)?|salsiccia\b/, sym: '🌭' },
    { re: /\bcharcuterie|speck|salami|soppressata\b/, sym: '🥓' },

    // 🐟 Mer / poissons / fruits de mer
    { re: /\bpoisson(s)?\b/, sym: '🐟' },
    { re: /\bthon\b/, sym: '🐟' },
    { re: /\bmorue|baccala\b/, sym: '🐟' },
    { re: /\bsardine(s)?\b/, sym: '🐟' },
    { re: /\banchois?\b/, sym: '🐟' },
    { re: /\bpoulpe|polpo\b/, sym: '🐙' },
    { re: /\bcalamar(s)?|seiche(s)?|totani\b/, sym: '🦑' },
    { re: /\bmoule(s)?|cozze?\b/, sym: '🦪' },
    { re: /\bpalourde(s)?|vongole\b/, sym: '🦪' },
    { re: /\bcrevette(s)?|gamberi\b/, sym: '🍤' },

    // Fruits secs / graines
    { re: /\bamande(s)?\b/, sym: '🌰' },
    { re: /\bnoisette(s)?\b/, sym: '🌰' },
    { re: /\bpistache(s)?\b/, sym: '🌰' },
    { re: /\bnoix\b/, sym: '🌰' },
    { re: /\bsesame|sésame\b/, sym: '🟤' },
    { re: /\bpinoli|pignons?\b/, sym: '🌰' },

    // Sucré / dessert / levants
    { re: /\bmiel\b/, sym: '🍯' },
    { re: /\bchocolat|cacao\b/, sym: '🍫' },
    { re: /\bvanille\b/, sym: '🧁' },
    { re: /\blevure chimique|bicarbonate\b/, sym: '🧪' },
    { re: /\blevure\b/, sym: '🍞' },

    // Conserves / tomate
    { re: /\bconcentre de tomate|puree de tomate|tomates? pelees?\b/, sym: '🥫' },

    // Olives
    { re: /\bolives?\b|taggiasche|leccino/gi, sym: '🫒' },
  ];

  function applySymbols(root = document) {
    const items = root.querySelectorAll('.ingredient, .ingredients li');
    items.forEach(li => {
      if (li.hasAttribute('data-symbol')) return;
      const t = norm(li.textContent || '');
      for (const { re, sym } of rules) {
        if (re.test(t)) {
          li.setAttribute('data-symbol', sym);
          break;
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applySymbols());
  } else {
    applySymbols();
  }

  const mo = new MutationObserver(muts => {
    for (const m of muts) {
      m.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;
        if (node.matches?.('.ingredient, .ingredients li')) {
          applySymbols(node.parentElement || node);
        } else if (node.querySelectorAll) {
          const has = node.querySelectorAll('.ingredient, .ingredients li').length;
          if (has) applySymbols(node);
        }
      });
    }
  });
  mo.observe(document.documentElement, { childList: true, subtree: true });
})();


/* -----------------------------------------------------------
   Impression couleur forcée pour toutes les recettes
   ----------------------------------------------------------- */

(function () {
  // On vérifie que le style n'existe pas déjà (évite les doublons)
  if (document.getElementById('print-color-style')) return;

  const style = document.createElement('style');
  style.id = 'print-color-style';
  style.innerHTML = `
    @media print {
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
    }
  `;
  document.head.appendChild(style);
})();




/* ============================================================
   MINI CHAT CRISP — VERSION FINALE + ICÔNE PERSONNALISÉE
============================================================ */

(function () {
  const WEBSITE_ID = "b5cfb557-5874-4734-bd13-efab4951b54d";

  function createMiniChat() {

    /* -------------------------------------------------------
       🟦 Icône ronde d’ouverture AVEC TEXTE DANS LA BULLE
    ------------------------------------------------------- */
    const icon = document.createElement("div");
    icon.id = "miniChatIcon";
    icon.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 70px;
      width: 65px;
      height: 65px;
      background: #0078ff;
      color: white;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 999999;
      box-shadow: 0 4px 12px rgba(0,0,0,0.25);
      transition: transform 0.25s ease;
      padding-top: 6px;
      font-family: Arial, sans-serif;
    `;
    document.body.appendChild(icon);

    /* ---- Icône personnalisée ---- */
    const iconSymbol = document.createElement("div");
    iconSymbol.textContent = "🤖";   // <<< CHANGE ICI L’ICÔNE SI TU VEUX
    iconSymbol.style.fontSize = "28px";
    icon.appendChild(iconSymbol);

    /* ---- Texte dans la bulle ---- */
    const iconText = document.createElement("div");
    iconText.textContent = "Aide ?";
    iconText.style.cssText = `font-size: 11px; margin-top: -3px;`;
    icon.appendChild(iconText);

    icon.addEventListener("mouseenter", () => icon.style.transform = "scale(1.15)");
    icon.addEventListener("mouseleave", () => icon.style.transform = "scale(1)");

    /* -------------------------------------------------------
       🟦 Mini-fenêtre de chat
    ------------------------------------------------------- */
    const box = document.createElement("div");
    box.id = "miniChatBox";
    box.style.cssText = `
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 400px;
      height: 500px;
      background: white;
      border: 2px solid #0078ff;
      border-radius: 14px;
      overflow: hidden;
      display: none;
      opacity: 0;
      transform: translateY(10px);
      z-index: 999999;
      box-shadow: 0 4px 26px rgba(0,0,0,0.25);
      transition: opacity 0.25s ease, transform 0.25s ease;
      font-family: Arial, sans-serif;
    `;
    document.body.appendChild(box);

    /* Mobile */
    if (window.innerWidth < 500) {
      box.style.width = "90%";
      box.style.right = "5%";
    }

    /* -------------------------------------------------------
       🟦 Barre du haut (titre + bouton SVG ✖)
    ------------------------------------------------------- */
    const topbar = document.createElement("div");
    topbar.style.cssText = `
      width: 100%;
      background: #0078ff;
      color: white;
      padding: 6px 10px;
      font-size: 14px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
    `;
    box.appendChild(topbar);

    const title = document.createElement("span");
    title.textContent = "Discussion";
    topbar.appendChild(title);

    const closeBtn = document.createElement("button");
    closeBtn.style.cssText = `
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      margin: 0;
    `;
    closeBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 18 18">
        <line x1="4" y1="4" x2="14" y2="14" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="14" y1="4" x2="4" y2="14" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `;
    topbar.appendChild(closeBtn);

    /* -------------------------------------------------------
       🟦 Iframe Crisp
    ------------------------------------------------------- */
    const frame = document.createElement("iframe");
    frame.src = "https://go.crisp.chat/chat/embed/?website_id=" + WEBSITE_ID;
    frame.style.cssText = `
      width: 100%;
      height: calc(100% - 42px);
      border: none;
    `;
    box.appendChild(frame);

    /* -------------------------------------------------------
       🟩 Animation ouverture
    ------------------------------------------------------- */
    function openChat() {
      box.style.display = "block";
      requestAnimationFrame(() => {
        box.style.opacity = "1";
        box.style.transform = "translateY(0px)";
      });
    }

    /* -------------------------------------------------------
       🟥 Animation fermeture
    ------------------------------------------------------- */
    function closeChat() {
      box.style.opacity = "0";
      box.style.transform = "translateY(10px)";
      setTimeout(() => {
        box.style.display = "none";
      }, 250);
    }

    icon.addEventListener("click", openChat);
    closeBtn.addEventListener("click", closeChat);

    /* -------------------------------------------------------
       🖱️ Fermeture en cliquant hors du chat
    ------------------------------------------------------- */
    document.addEventListener("click", function (e) {
      const clickedInside = box.contains(e.target) || icon.contains(e.target);
      if (!clickedInside && box.style.display === "block") closeChat();
    });

    /* -------------------------------------------------------
       🧹 Reset discussion quand on quitte la page
    ------------------------------------------------------- */
    window.addEventListener("beforeunload", () => {
      frame.src = frame.src;  
    });
  }

  /* Chargement */
  if (document.readyState === "loading")
    window.addEventListener("DOMContentLoaded", createMiniChat);
  else
    createMiniChat();

})();
