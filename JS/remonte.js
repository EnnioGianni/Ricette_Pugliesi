/* remonte.js — Bouton "Remonter en haut" (fondu + glissement, version unique & robuste) */
(function () {
  // Évite double initialisation si le script est inclus deux fois par erreur
  if (window.__remonteInit) return;
  window.__remonteInit = true;

  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  // Clique → remonte en douceur
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Toggle visible/invisible avec classe .visible (gérée en CSS)
  const update = () => {
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    btn.classList.toggle('visible', y > 0);
  };

  // Throttle via requestAnimationFrame pour garder le scroll fluide
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
      ticking = true;
    }
  };

  // État initial + écouteurs
  window.addEventListener('DOMContentLoaded', update);
  window.addEventListener('pageshow', update);
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mise à jour immédiate au chargement (si on arrive sur une ancre)
  update();
})();
