/*
 * recherche.js — Recherche dans le drawer (recettes + menus)
 * -----------------------------------------------------------
 * - Source : window.RECIPES (menu.js) ou fallback DOM
 * - Recherche insensible à la casse et aux accents
 * - Inclut maintenant les Menus complets (ex: Menu du Salento)
 * - ENTER ouvre le 1er résultat
 * - Fermeture douce du drawer
 */

(function () {
  const input     = document.getElementById('searchDrawer');
  const box       = document.getElementById('searchResultsDrawer');
  const drawer    = document.getElementById('menuDrawer');
  const backdrop  = document.getElementById('backdrop');
  if (!input || !box) return;

  /* === Helpers === */

  function toAbs(u) {
    if (!u) return '#';
    if (u.startsWith('/') || /^https?:\/\//i.test(u)) return u;
    return '/' + u.replace(/^\/+/, '');
  }

  function resolveHref(u) {
    try {
      const base = document.querySelector('base')?.href || location.href;
      return new URL(u || '#', base).href;
    } catch { return u || '#'; }
  }

  function closeLocalDrawer() {
    if (!drawer) return;
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    if (backdrop) backdrop.hidden = true;
    const openBtns = [document.getElementById('openMenuBtn'), document.getElementById('openMenuBtn2')].filter(Boolean);
    openBtns.forEach(b => b?.setAttribute('aria-expanded', 'false'));
  }

  const norm = (s) => (s || '').normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase().trim();

  const esc = (s) => String(s)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#39;');

  function highlight(rawText, qNorm){
    const raw = rawText || '';
    const stripped = raw.normalize('NFD').replace(/\p{Diacritic}/gu,'');
    const i = stripped.toLowerCase().indexOf(qNorm);
    if (i < 0) return esc(raw);
    return esc(raw.slice(0,i)) + '<mark>' + esc(raw.slice(i, i+qNorm.length)) + '</mark>' + esc(raw.slice(i+qNorm.length));
  }

  // Source des données : window.RECIPES (menu.js) ou DOM fallback
  function getSRC() {
    if (Array.isArray(window.RECIPES) && window.RECIPES.length) {
      return window.RECIPES.map(r => ({
        title: r.title || '',
        url:   toAbs(r.url || '#'),
        thumb: r.thumb || '',
        meta:  r.meta  || '',
        hay:   r.hay   || '',
        category: r.category || ''
      }));
    }

    // Fallback DOM (si menuDrawer déjà rendu)
    const links = document.querySelectorAll('#recipeList a.recipe-link');
    return Array.from(links).map(a => ({
      title: a.querySelector('strong')?.textContent?.trim() || a.textContent.trim(),
      url:   toAbs(a.getAttribute('href') || '#'),
      thumb: a.querySelector('img')?.getAttribute('src') || '',
      meta:  a.querySelector('small')?.textContent?.trim() || '',
      hay:   a.getAttribute('data-hay') || a.textContent.trim(),
      category: a.closest('.cat')?.querySelector('.cat-title')?.textContent?.trim() || ''
    }));
  }

  // Ajoute aussi les Menus depuis window.CATEGORIES
  function mergeMenus(SRC) {
    if (window.CATEGORIES) {
      window.CATEGORIES.forEach(cat => {
        if (cat.id === 'menus' && Array.isArray(cat.items)) {
          cat.items.forEach(m => {
            SRC.push({
              title: m.title,
              url: m.url,
              thumb: m.img,
              meta: m.meta,
              hay: m.hay,
              category: 'Menus complets'
            });
          });
        }
      });
    }
    return SRC;
  }

  function render(queryRaw) {
    box.innerHTML = '';
    const q = norm(queryRaw);
    if (!q) {
      box.hidden = true;
      drawer?.classList.remove('is-searching');
      return;
    }

    drawer?.classList.add('is-searching');

    let SRC = getSRC();
    SRC = mergeMenus(SRC); // ✅ Ajoute les menus complets à la recherche

    const matches = SRC.filter(r =>
      norm(`${r.title} ${r.meta} ${r.hay} ${r.category}`).includes(q)
    );

    if (!matches.length) {
      const div = document.createElement('div');
      div.className = 'search-empty';
      div.textContent = `« ${queryRaw} » — Pas trouvé`;
      box.appendChild(div);
      box.hidden = false;
      return;
    }

    matches.slice(0, 20).forEach((r, i) => {
      const hrefAbs = resolveHref(r.url || '#');
      const wrap = document.createElement('div');
      wrap.className = 'search-item';
      wrap.style.animationDelay = (i*50)+'ms';
      wrap.innerHTML = `
        <a href="${hrefAbs}" class="search-link" target="_self" rel="noreferrer">
          ${r.thumb ? `<img src="${r.thumb}" alt="" width="28" height="28" loading="lazy">` : ''}
          <span class="search-text">
            <strong>${highlight(r.title, q)}</strong>
            <small>${esc(r.category || '')}</small>
          </span>
        </a>
      `;
      const a = wrap.querySelector('a.search-link');
      a.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        const dest = a.href;
        window.location.assign(dest);
        setTimeout(closeLocalDrawer, 120);
      });
      a.addEventListener('touchstart', (ev) => ev.stopPropagation(), { passive: true });
      box.appendChild(wrap);
    });

    box.hidden = false;
  }

  /* === Événements === */
  input.addEventListener('input', () => render(input.value));
  input.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const first = box.querySelector('.search-link');
    const q = input.value.trim();
    if (first) {
      const dest = first.getAttribute('href');
      window.location.assign(dest);
      setTimeout(closeLocalDrawer, 120);
    } else if (q) {
      alert(`« ${q} » — Pas trouvé`);
    }
  });
  input.addEventListener('focus', () => { if (input.value.trim()) render(input.value); });
  input.addEventListener('blur', () => {
    setTimeout(() => { box.hidden = true; drawer?.classList.remove('is-searching'); }, 120);
  });
  document.addEventListener('recipes:ready', () => {
    if (input.value.trim()) render(input.value);
  });
})();

/* === Sécurité navigation HOTFIX === */
window.addEventListener('mousedown', (e) => {
  const a = e.target?.closest?.('a.search-link');
  if (!a) return;
  try {
    e.stopPropagation();
    const dest = a.href;
    window.location.href = dest;
    setTimeout(() => {
      const drawer = document.getElementById('menuDrawer');
      if (document.visibilityState === 'visible' && drawer) {
        drawer.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
        const backdrop = document.getElementById('backdrop');
        if (backdrop) backdrop.hidden = true;
        const openBtns = [document.getElementById('openMenuBtn'), document.getElementById('openMenuBtn2')].filter(Boolean);
        openBtns.forEach(b => b?.setAttribute('aria-expanded','false'));
      }
    }, 120);
  } catch (err) {
    console.error('[HOTFIX] erreur nav:', err);
  }
}, { capture: true });

window.addEventListener('click', (e) => {
  const a = e.target?.closest?.('a.search-link');
  if (!a) return;
  try {
    e.stopImmediatePropagation();
    e.preventDefault();
    const dest = a.href;
    window.location.assign(dest);
  } catch (err) {
    console.error('[HOTFIX] erreur click nav:', err);
  }
}, { capture: true });
