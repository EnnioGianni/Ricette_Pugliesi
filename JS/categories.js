/* ============================================================
 * categories.js — Sapori di Puglia (version PRO nettoyée)
 * Arborescence :
 *   /Antipasti/*.html  /Primi/*.html  /Secondi/*.html
 *   /Contorni/*.html   /Dolci/*.html  /SansGluten/*.html
 * Images : Images/*.png | Images/*.jpg
 * ============================================================ */

window.CATEGORIES = [

  /* ========================= Menus complets ========================= */
  {
    id: 'menus',
    title: '🍷 Menus complets',
    items: [
      {
        id: 'menu-saveurs-salento',
        title: 'Menu Saveurs du Salento — De la mer à la terre',
        url: 'Menu/menu-salento.html',
        img: 'Images/saporiDelSalento.png',
        meta: '⏱ 5 plats · 👥 4 · Traditionnel',
        hay: 'menu complet salento terre mer antipasti primi secondi dolci'
      },
      {
        id: 'menu-terre-mer-gargano',
        title: 'Menu Terre & Mer du Gargano',
        url: 'Menu/menuGargano.html',
        img: 'Images/menu-gargano.png',
        meta: '⏱ 5 plats · 👥 4 · Traditionnel',
        hay: 'menu complet gargano mer terre nord pouilles'
      },
      {
        id: 'menu-lecce',
        title: 'Menu Tradizionale di Lecce',
        url: 'Menu/menuLecce.html',
        img: 'Images/menu-lecce.png',
        meta: '⏱ 5 plats · 👥 4 · Traditionnel',
        hay: 'menu complet lecce salento traditionnel'
      },
      {
        id: 'menu-bari',
        title: 'Menu Tradizionale di Bari',
        url: 'Menu/menu-bari.html',
        img: 'Images/menu-bari.png',
        meta: '⏱ 5 plats · 👥 4 · Traditionnel',
        hay: 'menu bari barese plats traditionnels'
      }
    ]
  },

  /* ========================= Antipasti ========================= */
  {
    id: 'antipasti',
    title: '🥖 Antipasti',
    items: [
      {
        id: 'rustici-leccesi',
        title: 'Rustici Leccesi',
        url: 'Antipasti/rusticiLeccesi.html',
        img: 'Images/rustici.png',
        meta: '⏱ 40 min · 👥 6 · Facile',
        hay: 'rustici feuilletés béchamel tomate mozzarella'
      },
      {
        id: 'focaccia-barese',
        title: 'Focaccia Barese',
        url: 'Antipasti/focacciaBarese.html',
        img: './Images/focaccia-barese.png',
        meta: '⏱ 2 h 30 · 👥 6 · Facile',
        hay: 'focaccia barese tomates cerises origan'
      },
      {
        id: 'friselle-pomodoro',
        title: 'Friselle al Pomodoro',
        url: 'Antipasti/frisellePomodoro.html',
        img: 'Images/friselle.png',
        meta: '⏱ 10 min · 👥 4 · Très facile',
        hay: 'friselle tomate huile olive origan'
      },
      {
        id: 'taralli-pugliesi',
        title: 'Taralli Pugliesi',
        url: 'Antipasti/taralliPugliesi.html',
        img: 'Images/taralli.png',
        meta: '⏱ 45 min · 👥 30 · Facile',
        hay: 'taralli vin blanc huile olive'
      },
      {
        id: 'panzerotti-bari',
        title: 'Panzerotti di Bari',
        url: 'Antipasti/panzerottiDiBari.html',
        img: 'Images/panzerotti.png',
        meta: '⏱ 2 h · 👥 12 · Moyen',
        hay: 'panzerotti frits tomate mozzarella'
      },
      {
        id: 'pepata-di-cozze',
        title: 'Pepata di Cozze',
        url: 'Antipasti/pepataDiCozze.html',
        img: 'Images/pepata-di-cozze.png',
        meta: '⏱ 25 min · 👥 4 · Facile',
        hay: 'moules poivre ail vin blanc'
      },
      {
        id: 'pitta-patate-leccese',
        title: 'Pitta di Patate Leccese',
        url: 'Antipasti/pittaPatateLeccese.html',
        img: 'Images/pitta-di-patate.png',
        meta: '⏱ 1 h 20 · 👥 6 · Traditionnel',
        hay: 'pitta patate lecce salento'
      }
    ]
  },

  /* ========================= Primi ========================= */
  {
    id: 'primi',
    title: '🍝 Primi piatti',
    items: [
      {
        id: 'orecchiette-cime-rapa',
        title: 'Orecchiette alle Cime di Rapa',
        url: 'Primi/orecchietteCimeDiRapa.html',
        img: 'Images/orecchiette-cime-rapa.png',
        meta: '⏱ 30 min · 👥 4 · Facile',
        hay: 'orecchiette cime rapa bari'
      },
      {
        id: 'ciceri-tria',
        title: 'Ciceri e Tria',
        url: 'Primi/ciceriETria.html',
        img: 'Images/ciceri-e-tria.png',
        meta: '⏱ 2 h 30 · 👥 4 · Traditionnel',
        hay: 'ciceri tria lecce salento'
      },
      {
        id: 'cozze-gratinate-leccesi',
        title: 'Cozze Gratinate alla Leccese',
        url: 'Primi/cozzeGratinateLeccesi.html',
        img: 'Images/cozze-gratinate.png',
        meta: '⏱ 40 min · 👥 4 · Facile',
        hay: 'cozze gratinate chapelure'
      },
      {
        id: 'sagne-ncannulate',
        title: 'Sagne Ncannulate al Sugo',
        url: 'Primi/sagneNcannulate.html',
        img: 'Images/sagne-ncannulate.png',
        meta: '⏱ 45 min · 👥 4 · Traditionnel',
        hay: 'sagne ncannulate salento'
      }
    ]
  },

  /* ========================= Contorni ========================= */
  {
    id: 'contorni',
    title: '🥗 Contorni',
    items: [
      {
        id: 'funghi-patate',
        title: 'Funghi Porcini con Patate',
        url: 'Contorni/funghiPorciniPatate.html',
        img: 'Images/funghi-patate.png',
        meta: '⏱ 25 min · 👥 4 · Facile',
        hay: 'funghi porcini patate'
      },
      {
        id: 'cipolle-forno',
        title: 'Cipolle al Forno',
        url: 'Contorni/cipolleForno.html',
        img: 'Images/cipolle-forno.png',
        meta: '⏱ 75 min · 👥 4 · Rustique',
        hay: 'cipolle forno puglia'
      }
    ]
  },

  /* ========================= Secondi ========================= */
  {
    id: 'secondi',
    title: '🍗 Secondi',
    items: [
      {
        id: 'bombette-martina-franca',
        title: 'Bombette di Martina Franca',
        url: 'Secondi/bombetteMartinaFranca.html',
        img: 'Images/bombette.png',
        meta: '⏱ 25 min · 👥 4 · Facile',
        hay: 'bombette martina franca'
      },
      {
        id: 'riso-di-mare-strati',
        title: 'Riso di Mare a Strati',
        url: 'Secondi/riso-mare-strati.html',
        img: 'Images/riso-mare-strati.png',
        meta: '⏱ 1 h 40 · 👥 4 · Moyen',
        hay: 'riso mare strati puglia'
      }
    ]
  },

  /* ========================= Dolci ========================= */
  {
    id: 'dolci',
    title: '🍰 Dolci',
    items: [
      {
        id: 'pasticciotto-leccese',
        title: 'Pasticciotto Leccese',
        url: 'Dolci/pasticciottoLeccese.html',
        img: 'Images/pasticciotto.png',
        meta: '⏱ 1 h 15 · 👥 12 · Traditionnel',
        hay: 'pasticciotto lecce'
      },
      {
        id: 'purceddhruzzi',
        title: 'Purceddhruzzi',
        url: 'Dolci/purceddhruzzi.html',
        img: 'Images/purceddhruzzi.jpg',
        meta: '⏱ 40 min · 👥 6 · Facile',
        hay: 'purceddhruzzi salento noel'
      }
    ]
  },

  /* ========================= Sans gluten ========================= */
  {
    id: 'sans-gluten',
    title: '🌾❌ Sans gluten',
    items: [
      {
        id: 'salade-quinoa-feta',
        title: 'Salade de quinoa à la feta',
        url: 'SansGluten/salade-quinoa-feta.html',
        img: 'Images/salade-quinoa-feta.png',
        meta: '⏱ 20 min · 👥 2 · Très facile',
        hay: 'quinoa feta sans gluten'
      }
    ]
  }

];
