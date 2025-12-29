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
         img: './Menu/Images/saporiDelSalento.png',
        meta: '⏱ 5 plats · 👥 4 · Traditionnel',
        hay: 'menu complet salento terre mer antipasti primi secondi dolci'
      },
      {
        id: 'menu-terre-mer-gargano',
        title: 'Menu Terre & Mer du Gargano',
        url: 'Menu/menuGargano.html',
         img: './Menu/Images/menu-gargano.png',
        meta: '⏱ 5 plats · 👥 4 · Traditionnel',
        hay: 'menu complet gargano mer terre nord pouilles'
      },
      {
        id: 'menu-lecce',
        title: 'Menu Tradizionale di Lecce',
        url: 'Menu/menuLecce.html',
         img: './Menu/Images/menu-lecce.png',
        meta: '⏱ 5 plats · 👥 4 · Traditionnel',
        hay: 'menu complet lecce salento traditionnel'
      },
      {
        id: 'menu-tradizionale-di-bari',
        title: 'Menu Tradizionale di Bari — Saveurs de la côte adriatique',
        url: 'Menu/menu-bari.html',
         img: './Menu/Images/menu-bari.png',
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
         img: './Images/rustici.png',
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
         img: './Images/friselle.png',
        meta: '⏱ 10 min · 👥 4 · Très facile',
        hay: 'friselle tomate huile olive origan'
      },
      {
        id: 'taralli-pugliesi',
        title: 'Taralli Pugliesi',
        url: 'Antipasti/taralliPugliesi.html',
         img: './Images/taralli.png',
        meta: '⏱ 45 min · 👥 30 · Facile',
        hay: 'taralli vin blanc huile olive'
      },
      {
        id: 'panzerotti-bari',
        title: 'Panzerotti di Bari',
        url: 'Antipasti/panzerottiDiBari.html',
         img: './Images/panzerotti.png',
        meta: '⏱ 2 h · 👥 12 · Moyen',
        hay: 'panzerotti frits tomate mozzarella'
      },
      {
        id: 'pepata-di-cozze',
        title: 'Pepata di Cozze',
        url: 'Antipasti/pepataDiCozze.html',
         img: './Images/pepata-di-cozze.png',
        meta: '⏱ 25 min · 👥 4 · Facile',
        hay: 'moules poivre ail vin blanc'
      },
      {
        id: 'pitta-patate-leccese',
        title: 'Pitta di Patate Leccese',
        url: 'Antipasti/pittaPatateLeccese.html',
         img: './Images/pitta-di-patate.png',
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
        url: 'Primi/orechietteCimaDiRapa.html',
         img: './Images/orecchiette-cime-di-rapa.png',
        meta: '⏱ 30 min · 👥 4 · Facile',
        hay: 'orecchiette cime rapa bari'
      },
      {
        id: 'ciceri-tria',
        title: 'Ciceri e Tria',
        url: 'Primi/ciceriETria.html',
         img: './Images/ciceriETria.png',
        meta: '⏱ 2 h 30 · 👥 4 · Moyenne',
        hay: 'pois chiches pâtes frites Lecce Salento recette traditionnelle ciceri e tria'
      },

      {
        id: 'orecchiette-sugo-di-braciole',
        title: 'Orecchiette al Sugo di Braciole',
        url: 'Primi/orecchietteAlSugoDiBraciole.html',
        img: './Images/orecchiette-sugo-di-braciole.png',
        meta: '⏱ 2 h · 👥 4 · Moyen',
        hay: 'orecchiette sauce tomate roulades de viande Bari'
      },
      {
        id: 'cozze-gratinate-leccesi',
        title: 'Cozze Gratinate alla Leccese',
        url: 'Primi/cozzeGratinateLeccesi.htm',
        img: './Images/cozze-gratinate-leccesi.png',
        meta: '⏱ 40 min · 👥 4 · Facile',
        hay: 'cozze gratinate chapelure'
      },
      {
        id: 'lagane-e-ceci',
        title: 'Lagane e Ceci alla Salentina',
        url: 'Primi/lagane-e-ceci.html',
        img: './Images/lagane-e-ceci.png',
        meta: '⏱ 1 h 55 · 👥 4 · Facile',
        hay: 'pois chiches pâtes lagane salento recette traditionnelle soupe puglia'
      },
      {
        id: "sagne-ncannulate",
        title: "Sagne Ncannulate al Sugo",
        url: "./Primi/sagneNcannulate.html",
        img: "./Menu/Images/sagne-ncannulate.png",
        meta: "⏱ 45 min · 👥 4 · Traditionnel",
        hay: "mots-clés…"
      },
      {
        id: 'cavatelli-bietola-bianca-limone',
        title: 'Cavatelli con Bietola Bianca e Limone',
        url: 'Primi/cavatelliBietolaBiancaLimone.html',
        img: './Primi/Images/cavatelli-bietola-bianca-limone.png',
        meta: '⏱ 45 min · 👥 4 · Léger & rustique',
        hay: 'cavatelli bietola bianca blettes citron primo puglia recette rare rustique'
      },
      {
        id: 'ravioli-cime-di-rapa-antica',
        title: 'Ravioli alle Cime di Rapa (version antica)',
        url: 'Primi/ravioliCimeDiRapaAntica.html',
        img: './Primi/Images/ravioli-cime-di-rapa-antica.png',
        meta: '⏱ 1 h 15 · 👥 4 · Rustique',
        hay: 'ravioli cime di rapa puglia pasta ripiena rurale ancienne salento'
      },
      {
        id: 'sagne-tonde-antiche',
        title: 'Sagne Tonde Antiche',
        url: 'Primi/sagneTondeAntiche.html',
        img: './Menu/Images/sagne-tonde-antiche.png',
        meta: '⏱ 1 h 20 · 👥 4 · Ancienne · Salento',
        hay: 'sagne tonde antiche salento pasta antique ronde puglia recette ancienne masseria'
      },
      {
        id: 'cavatelli-cozze-fagioli-pomodoro',
        title: 'Cavatelli con Cozze e Fagioli (pomodoro)',
        url: 'Primi/cavatelliCozzeFagioliPomodoro.html',
        img: './Primi/Images/cavatelli-cozze-fagioli.png',
        meta: '⏱ 45 min · 👥 4 · Barese',
        hay: 'cavatelli cozze fagioli pomodoro bari primi puglia pasta moules haricots'
      },
      {
        id: 'pizza-teglia-verdure-saltate-grigliate',
        title: 'Pizza in Teglia con Verdure Saltate e Grigliate',
        url: 'Primi/pizzaTegliaVerdureSaltateGrigliate.html',
        img: './Primi/Images/pizza-teglia-verdure-saltate-grigliate.png',
        meta: '⏱ 24 h · 👥 4–6 · Romana',
        hay: 'pizza teglia romaine légumes grillés sautés verdure al forno bonci panetti recette plaque haute hydratation'
      },
      {
        id: 'pizza-napoletana',
        title: 'Pizza Napoletana Autentica',
        url: 'Primi/pizzaNapoletana.html',
        img: './Primi/Images/pizza-napoletana.png',
        meta: '⏱ 24 h · 👥 4 · Traditionnelle AVPN',
        hay: 'pizza napolitaine vera napoli margherita napoletana avpn san marzano fior di latte pâte longue fermentation'
      },
      {
        id: 'calzone-napoletano',
        title: 'Calzone Napoletano (Forno & Fritto)',
        url: 'Primi/calzoneNapoletano.html',
        img: './Primi/Images/calzone-napoletano.png',
        meta: '⏱ 24 h · 👥 4 · Traditionnel',
        hay: 'calzone napolitain ripieno pizza fritta ricotta provola salame recette napolitaine traditionelle forno fritto'
      }
    ]
  },

  /* ========================= Contorni ========================= */
  {
    id: 'contorni',
    title: '🥗 Contorni',
    items: [
    {
      id: "fruttone-leccese",
      title: "Fruttone Leccese",
      url: "./Dolci/fruttoneLeccese.html",
      img: "./Menu/Images/fruttone.png",
      meta: "⏱ 30 min · 👥 6 · Moyen",
      hay: "fruttone lecce dessert amande chocolat dolci salento puglia pâtisserie traditionnelle"
    },
    {
      id: "funghi-porcini-patate",
      title: "Funghi Porcini con Patate",
      url: "./Contorni/funghiPorciniPatate.html",
      img: "./Contorni/Images/funghi-porcini-patate.png",
      meta: "⏱ 25 min · 👥 4 · Facile",
      hay: "funghi porcini patate pommes de terre champignons puglia contorni recette rustique huile d'olive"
    },
    {
      id: 'cardon-patate-pomodoro',
      title: 'Cardon con Patate e Pomodori al Forno',
      url: 'Contorni/cardonPatate.html',
      img: './Contorni/Images/cardon-patate-pomodoro.png',
      meta: '⏱ 40 min · 👥 4 · Rustique',
      hay: 'cardon patate tomates forno contorno puglia plat paysan rustique cuisine ancienne'
    },
    {
      id: 'pure-cardon',
      title: 'Purée di Cardon alla Pugliese',
      url: 'Contorni/pureCardon.html',
      img: './Contorni/Images/pure-cardon.png',
      meta: '⏱ 60 min · 👥 4 · Rustique',
      hay: 'puree cardon schiacciato contorno puglia vegetal purée rustique recette ancienne'
    },
    {
      id: 'cipolle-forno-zia-antonia',
      title: 'Cipolle al Forno della Zia Antonia',
      url: 'Contorni/cipolleFornoZiaAntonia.html',
      img: './Contorni/Images/cipolle-forno-zia-antonia.png',
      meta: '⏱ 75 min · 👥 4 · Rustique',
      hay: 'cipolle forno oignons rôtis contorno puglia recette ancienne paysanne huile olive four'
    },
    {
      id: "patate-strascinate-cicorielle",
      title: "Patate “Strascinate” cu Cicorielle Selvatiche",
      url: "./Contorni/patateStrascinateCicorielle.html",
      img: "./Contorni/Images/patate-strascinate-cicorielle.png",
      meta: "⏱ 30 min · 👥 4 · Facile",
      hay: "patate strascinate cicorielle selvatiche chicoree sauvage pouilles contorni recette rustique salento huile olive"
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
        img: './Images/bombette-martina-franca.png',
        meta: '⏱ 25 min · 👥 4 · Facile',
        hay: 'roulades de viande grillées farcies fromage'
      },
      {
        id: 'polpo-alla-pignata',
        title: 'Polpo alla Pignata',
        url: 'Secondi/polpoAllaPignata.html',
        img: './Images/polpo-alla-pignata.png',
        meta: '⏱ 1 h 30 · 👥 4 · Moyen',
        hay: 'poulpe mijoté tomate terracotta salento'
      },
      {
        id: 'agnello-al-forno',
        title: 'Agnello al Forno con Patate e Rosmarino',
        url: 'Secondi/agnelloAlForno.html',
        img: './Menu/Images/agnello-al-forno.png',
        meta: '⏱ 1 h 30 · 👥 4 · Moyen',
        hay: 'agneau rôti pommes de terre romarin four plat traditionnel gargano'
      },
      {
        id: 'verdure-grigliate',
        title: 'Verdure Grigliate al Profumo d’Olio',
        url: 'Antipasti/verdureGrigliate.html',
        img: './Menu/Images/verdure-grigliate.png',
        meta: '⏱ 30 min · 👥 4 · Facile',
        hay: 'légumes grillés aubergines courgettes poivrons huile olive ail origan contorno sans gluten'
      },
      {
        id: 'braciole-leccesi',
        title: 'Braciole alla Leccese',
        url: 'Secondi/bracioleLeccesi.html',
        img: './Images/braciole-leccesi.png',
        meta: '⏱ 2 h 30 · 👥 4 · Moyenne',
        hay: 'roulés viande cheval veau sugo tomate salento lecce braciole'
      },
      {
        id: 'li-boti-di-carne',
        title: 'Li Boti di Carne',
        url: 'Secondi/liBotiDiCarne.html',
        img: './Images/li-boti-di-carne.png',
        meta: '⏱ 3 h · 👥 4–6 · Moyenne',
        hay: 'boti roulés viande cheval veau sugo tomate fête salento lecce li boti'
      },
      {
        id: 'baccala-patate-strati',
        title: 'Baccalà con le Patate (a Strati)',
        url: 'Secondi/baccalaPatate.html',
        img: './Images/baccala-patate.png',
        meta: '⏱ 36–48 h + 70 min · 👥 4 · Moyenne',
        hay: 'baccala morue pommes de terre strati couches gratin chapelure four pouilles salento'
      },
      {
        id: 'Riso di mare a strati',
        title: 'Riso de mare a strati',
        url: 'Secondi/riso-mare-strati.html',
        img: './Images/riso-mare-strati.png',
        meta: '⏱ 1 h 40 · 👥 4 · Moyenne',
        hay: 'paella pugliese riso fruits mer moules crevettes calamars poisson four strati casserole riz gratin'
      },
      {
        id: 'calzone-cipolla-pugliese',
        title: 'Calzone di Cipolla alla Pugliese',
        url: 'Secondi/calzoneCipollaPugliese.html',
        img: './Images/calzone-pugliese.png',
        meta: '⏱ 1 h 40 · 👥 6 · Moyenne',
        hay: 'calzone pugliese oignons anchois olives capres tourte pouilles bari focaccia farcie'
      },
      {
        id: 'spazzatu-salentino',
        title: 'Spazzatu del Salento',
        url: 'Secondi/spazzatuSalentino.html',
        img: './Images/spazzatu-salentino.png',
        meta: '⏱ 1 h 30 · 👥 6 · Moyenne',
        hay: 'spazzatu salento ragoût paques œufs écrasés agneau mouton petits pois blettes plat traditionnel puglia'
      },
      {
        id: 'turcinieddhri-brace',
        title: 'Turcinieddhri alla Brace',
        url: 'Secondi/turcinieddhriBrace.html',
        img: './Images/turcinieddhri-brace.png',
        meta: '⏱ 40 min · 👥 4 · Élevée',
        hay: 'turcinieddhri gnummarieddhri abats agneau grillade pouilles salento murgia barbecue four boyau rouleaux'
      },
      {
        id: "polpette-cavallo-lecce",
        title: "Polpette di Cavallo alla Leccese",
        url: "Secondi/polpetteCavalloLeccese.html",
        img: "./Images/polpette-cavallo-lecce.png",
        meta: "⏱ 1 h 40 · 👥 4 · Traditionnel",
        hay: "polpette cavallo leccese sugo viande cheval salento secondo pugliese recette"
      },
      {
        id: 'zuppa-pesce-salento',
        title: 'Zuppa di Pesce del Salento',
        url: 'Secondi/zuppaPesceSalento.html',
        img: './Secondi/Images/zuppa-pesce-salento.png',
        meta: '⏱ 35 min · 👥 4 · Moyen',
        hay: 'zuppa pesce salento soupe poisson fruits de mer poulpe moules crevettes tomate vin blanc secondi puglia'
      },
      {
        id: "zuppa-frutti-mare-recanati",
        title: "Zuppa di Frutti di Mare alla Recanati",
        url: "Secondi/zuppaFruttiMareRecanati.html",
        img: "./Secondi/Images/zuppa-frutti-mare-recanati.png",
        meta: "⏱ 25 min + 20 min · 👥 4 · Moyen",
        hay: "zuppa frutti di mare fruits de mer soup moules palourdes crevettes calamars puglia salento recanati poisson recette"
      },
      {
        id: "cosce-pollo-mare-masseria",
        title: "Cosce di Pollo alla Mare e Masseria",
        url: "Secondi/coscePolloMareMasseria.html",
        img: "./Secondi/Images/cosce-pollo-mare-masseria.png",
        meta: "⏱ 20 min + 45 min · 👥 4 · Facile",
        hay: "pollo poulet artichauts olives capres secondi salento puglia four masseria recette"
      },
      {
        id: "baccala-in-umido",
        title: "Baccalà in umido",
        url: "Secondi/baccala-in-umido.html",
        img: "./Secondi/Images/baccala-in-umido.png",
        meta: "⏱ 20 min + 40 min · 👥 4 · Facile",
        hay: "baccala morue poisson umido tomate pommes de terre olives capres puglia salento secondo recette"
      }




    ]
  },

  /* ========================= Dolci ========================= */
  {
    id: 'dolci',
    title: '🍰 Dolci',
    items: [
      {
        id: 'croissants-maison',
        title: 'Croissants Maison',
        url: 'Dolci/croissantsMaison.html',
        img: './Images/croissants.png',
        meta: '⏱ 4 h · 👥 6 · Moyen',
        hay: 'croissants maison pâte feuilletée beurre moelleux'
      },
      {
        id: 'pasticciotto-leccese',
        title: 'Pasticciotto Leccese',
        url: 'Dolci/pasticciottoLeccese.html',
        img: './Images/pasticciotto-leccese.png',
        meta: '⏱ 1 h 15 · 👥 12 · Moyen',
        hay: 'pâte sablée crème pâtissière dessert salento'
      },
      {
        id: 'cartellate',
        title: 'Cartellate',
        url: 'Dolci/cartellate.html',
        img: './Images/cartellate.png',
        meta: '⏱ 1 h 30 · 👥 20 · Moyen',
        hay: 'rosaces croustillantes miel vin cuit Noël'
      },
      {
        id: 'sporcamuss',
        title: 'Sporcamuss',
        url: 'Dolci/sporcamuss.html',
        img: './Menu/Images/Sporcamuss.png',
        meta: '⏱ 50 min · 👥 6 · Moyen',
        hay: 'sporcamuss sporcamuss foggia crème pâtissière feuilletée dessert pouilles dolci'
      },
      {
        id: 'scones-inglesi-tradizionali',
        title: 'Scones Anglais Traditionnels',
        url: 'Dolci/sconesInglesiTradizionali.html',
        img: './Dolci/Images/scones-inglesi.png',
        meta: '⏱ 30 min · 👥 8–10 · Tea-time',
        hay: 'scones anglais teatime the creme confiture raisins citron pavot cheddar chocolat cranberries orange dolci colazione'
      },
      {
        id: "strudel-di-mele-tradizionale",
        title: "Strudel di Mele (version tradizionale)",
        url: "Dolci/strudelDiMeleTradizionale.html",
        img: "./Dolci/Images/strudel-di-mele.png",
        meta: "⏱ 45 min · 🍎 Tradizionale",
        hay: "strudel mele pomme autriche alto adige cannelle raisin pignons dessert roule rustique montagne"
      },
      {
        id: "purceddhruzzi",
        title: "Purceddhruzzi",
        url: "Dolci/purceddhruzzi.html",
        img: "./Dolci/Images/purceddhruzzi.jpg",
        meta: "⏱ 40 min · 👥 6 · Facile",
        hay: "purciazzucci dolci frits puglia salento noel gnocchi sucrés tradition recette ancienne potiron farine friture sucre cannelle"
      },
      {
        id: 'bocconcini-reali',
        title: 'Bocconcini Reali',
        url: 'Dolci/bocconciniReali.html',
        img: './Dolci/Images/bocconcini-reali.png',
        meta: '⏱ 20 min · 👥 20–24 pièces · Très facile',
        hay: 'pasta reale bocconcini farce amande dolci salento pâte amandes moelleuse traditionnelle'
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
        title: 'Salade de quinoa à la feta (Grèce)',
        url: 'SansGluten/salade-quinoa-feta.html',
        img: './Images/salade-quinoa-feta.png',
        meta: '⏱ 20 min · 👥 2 · Très facile',
        hay: 'quinoa feta tomate concombre olive basilic sans gluten'
      },
      {
        id: 'salade-mediterraneenne',
        title: 'Salade Méditerranéenne (Italie)',
        url: 'Sans-Gluten/salade-mediterraneenne.html',
        img: './Images/Salade_Méditerranéenne.png',
        meta: '⏱ 20 min · 👥 2 · Très facile',
        hay: 'tomates mûres olives mozzarella concombre basilic huile olive sans gluten'
      },
      {
        id: 'salade-poulet-mangue',
        title: 'Salade de poulet et mangue (Asie)',
        url: 'SansGluten/saladePouletMangue.html',
        img: './Images/salade-poulet-mangue.png',
        meta: '⏱ 25 min · 👥 2 · Facile',
        hay: 'poulet mangue coriandre citron vert sauce soja sans gluten'
      }
    ]
  }

];
