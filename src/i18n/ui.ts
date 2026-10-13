/**
 * Site copy in the six languages the app ships with. English is the source; every language has
 * the same keys (TypeScript checks this). The legal pages stay in English only.
 */

export const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  ja: '日本語',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const langs = Object.keys(languages) as Lang[];

/** The home page for a language: `/` for English, `/es/` and so on for the rest. */
export const homePath = (lang: Lang) => (lang === defaultLang ? '/' : `/${lang}/`);

const en = {
  meta: {
    title: 'Athlethium — Adaptive coaching for endurance athletes',
    description:
      'Affordable, adaptive coaching for endurance athletes. Truly personalised, polarised training plans for cyclists, runners and triathletes that evolve with you.',
  },
  a11y: {
    skip: 'Skip to content',
    home: 'Athlethium home',
    theme: 'Switch colour theme',
    language: 'Language',
    mainNav: 'Main',
    footerNav: 'Footer',
    onX: 'Athlethium on X',
    onInstagram: 'Athlethium on Instagram',
    email: 'Email Athlethium',
  },
  nav: {
    features: 'Features',
    how: 'How it works',
    about: 'About',
    getApp: 'Get the app',
  },
  hero: {
    pill: 'Now in six languages',
    // The headline is split so the accent can sit anywhere in the sentence.
    titleBefore: 'Adaptive coaching for ',
    titleAccent: 'endurance athletes',
    titleAfter: '',
    lede: 'Personalised training that evolves with you. Affordable, intelligent and designed specifically for cyclists, runners and triathletes.',
    points: ['Polarised training', 'Syncs with Strava', 'Strength & mobility'],
    adaptedTitle: 'Plan adapted',
    adaptedBody: 'Missed Monday · week rebalanced',
    thisWeek: 'This week',
    easy: 'easy',
    hard: 'hard',
  },
  store: {
    ios: 'Download for iOS',
    android: 'Download for Android',
  },
  phone: {
    weekday: 'Tuesday',
    today: 'Today',
    days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    sport: 'Ride',
    duration: '1h 15m',
    sessionTitle: 'Threshold intervals',
    sessionBody: '3 × 12 min at threshold, easy spin between',
    start: 'Start session',
    upNext: 'Up next',
    run: 'Easy run',
    runWhen: 'Thursday · 45 min',
    strength: 'Strength · lower body',
    strengthWhen: 'Friday · 40 min',
  },
  strip: {
    label: 'Built for',
    sports: ['Cycling', 'Running', 'Swimming', 'Triathlon'],
  },
  features: {
    kicker: 'What makes us different',
    title: 'A coach in your pocket, not a template in a spreadsheet.',
    intro:
      "Athlethium combines proven training methods with modern technology to deliver coaching that's both effective and affordable.",
    adaptive: {
      title: 'Truly adaptive',
      body: "Your plan reacts to what actually happened: completed sessions, missed days, how you're feeling. Every week is rebuilt around you.",
    },
    polarised: {
      title: 'Polarised by design',
      body: 'A proven polarised model balances intensity and recovery for bigger endurance gains and fewer injuries.',
    },
    ai: {
      title: 'Structured algorithm + AI',
      body: 'Structured training algorithms combined with LLMs: reliable plans, flexible adjustments and human-like coaching conversations.',
    },
    strength: {
      title: 'Strength & mobility, built in',
      body: 'Gym and mobility sessions sit alongside your endurance work. Log sets in the app or import them from your watch.',
    },
    sync: {
      title: 'Syncs with your training',
      body: 'Connect Strava or upload FIT files. Completed workouts flow straight into your plan, with stats that suit each sport.',
    },
    language: {
      title: 'Speaks your language',
      body: "The app and your coaching notes are available in six languages, and follow your phone's language automatically.",
    },
    affordable: {
      title: 'Affordable for all',
      body: 'World-class, adaptive coaching at a fraction of the cost of a traditional coach, with no compromises.',
    },
  },
  how: {
    kicker: 'How it works',
    title: 'From goal to start line in three steps.',
    steps: [
      { title: 'Tell us your goal', body: "Your event, your sports, the hours you have each week and anything that's holding you back." },
      { title: 'Get your plan', body: 'A periodised, polarised plan built around your calendar, with clear targets for every session.' },
      { title: 'Train and adapt', body: 'Record your sessions and sync them. Athlethium adjusts the weeks ahead as you get fitter.' },
    ],
  },
  about: {
    quote: 'Built by a former GB cyclist with real-world knowledge of what it takes to train and perform at the highest level.',
    caption: 'Expert experience, in every plan.',
  },
  cta: {
    title: 'Start training smarter today.',
    body: 'Download Athlethium on iOS or Android and get your first plan in minutes.',
  },
  footer: {
    tagline: 'Adaptive coaching for cyclists, runners and triathletes.',
    product: 'Product',
    download: 'Download',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    inEnglish: '',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },
};

export type UI = typeof en;

const es: UI = {
  meta: {
    title: 'Athlethium — Entrenamiento adaptativo para atletas de resistencia',
    description:
      'Entrenamiento adaptativo y asequible para atletas de resistencia. Planes polarizados y realmente personalizados para ciclistas, corredores y triatletas que evolucionan contigo.',
  },
  a11y: {
    skip: 'Saltar al contenido',
    home: 'Inicio de Athlethium',
    theme: 'Cambiar el tema de color',
    language: 'Idioma',
    mainNav: 'Principal',
    footerNav: 'Pie de página',
    onX: 'Athlethium en X',
    onInstagram: 'Athlethium en Instagram',
    email: 'Escribir a Athlethium',
  },
  nav: {
    features: 'Funciones',
    how: 'Cómo funciona',
    about: 'Sobre nosotros',
    getApp: 'Descargar la app',
  },
  hero: {
    pill: 'Ahora en seis idiomas',
    titleBefore: 'Entrenamiento adaptativo para ',
    titleAccent: 'atletas de resistencia',
    titleAfter: '',
    lede: 'Un entrenamiento personalizado que evoluciona contigo. Asequible, inteligente y diseñado específicamente para ciclistas, corredores y triatletas.',
    points: ['Entrenamiento polarizado', 'Se sincroniza con Strava', 'Fuerza y movilidad'],
    adaptedTitle: 'Plan adaptado',
    adaptedBody: 'Lunes perdido · semana reajustada',
    thisWeek: 'Esta semana',
    easy: 'suave',
    hard: 'intenso',
  },
  store: {
    ios: 'Descargar para iOS',
    android: 'Descargar para Android',
  },
  phone: {
    weekday: 'Martes',
    today: 'Hoy',
    days: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
    sport: 'Bici',
    duration: '1 h 15 min',
    sessionTitle: 'Intervalos de umbral',
    sessionBody: '3 × 12 min en umbral, pedaleo suave entre series',
    start: 'Empezar sesión',
    upNext: 'A continuación',
    run: 'Carrera suave',
    runWhen: 'Jueves · 45 min',
    strength: 'Fuerza · tren inferior',
    strengthWhen: 'Viernes · 40 min',
  },
  strip: {
    label: 'Pensado para',
    sports: ['Ciclismo', 'Carrera', 'Natación', 'Triatlón'],
  },
  features: {
    kicker: 'Qué nos hace diferentes',
    title: 'Un entrenador en tu bolsillo, no una plantilla en una hoja de cálculo.',
    intro:
      'Athlethium combina métodos de entrenamiento probados con tecnología moderna para ofrecerte un entrenamiento eficaz y asequible.',
    adaptive: {
      title: 'Realmente adaptativo',
      body: 'Tu plan reacciona a lo que de verdad ha pasado: sesiones completadas, días perdidos, cómo te sientes. Cada semana se reconstruye en torno a ti.',
    },
    polarised: {
      title: 'Polarizado por diseño',
      body: 'Un modelo polarizado probado equilibra intensidad y recuperación para ganar más resistencia y sufrir menos lesiones.',
    },
    ai: {
      title: 'Algoritmo estructurado + IA',
      body: 'Algoritmos de entrenamiento estructurados combinados con LLM: planes fiables, ajustes flexibles y conversaciones de coaching con un toque humano.',
    },
    strength: {
      title: 'Fuerza y movilidad, integradas',
      body: 'Las sesiones de gimnasio y movilidad conviven con tu trabajo de resistencia. Registra las series en la app o impórtalas desde tu reloj.',
    },
    sync: {
      title: 'Se sincroniza con tu entrenamiento',
      body: 'Conecta Strava o sube archivos FIT. Los entrenamientos completados pasan directamente a tu plan, con estadísticas adaptadas a cada deporte.',
    },
    language: {
      title: 'Habla tu idioma',
      body: 'La app y tus notas de entrenamiento están disponibles en seis idiomas y siguen automáticamente el idioma de tu teléfono.',
    },
    affordable: {
      title: 'Asequible para todos',
      body: 'Entrenamiento adaptativo de primer nivel por una fracción de lo que cuesta un entrenador tradicional, sin renunciar a nada.',
    },
  },
  how: {
    kicker: 'Cómo funciona',
    title: 'De tu objetivo a la línea de salida en tres pasos.',
    steps: [
      { title: 'Cuéntanos tu objetivo', body: 'Tu prueba, tus deportes, las horas que tienes cada semana y cualquier cosa que te frene.' },
      { title: 'Recibe tu plan', body: 'Un plan periodizado y polarizado, construido en torno a tu calendario, con objetivos claros para cada sesión.' },
      { title: 'Entrena y adapta', body: 'Registra tus sesiones y sincronízalas. Athlethium ajusta las próximas semanas a medida que mejoras.' },
    ],
  },
  about: {
    quote:
      'Creado por quien fue ciclista de la selección británica, con experiencia real de lo que hace falta para entrenar y competir al más alto nivel.',
    caption: 'Experiencia de élite en cada plan.',
  },
  cta: {
    title: 'Empieza hoy a entrenar de forma más inteligente.',
    body: 'Descarga Athlethium en iOS o Android y recibe tu primer plan en minutos.',
  },
  footer: {
    tagline: 'Entrenamiento adaptativo para ciclistas, corredores y triatletas.',
    product: 'Producto',
    download: 'Descargar',
    legal: 'Legal',
    privacy: 'Política de privacidad',
    terms: 'Términos y condiciones',
    inEnglish: '(en inglés)',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
  },
};

const fr: UI = {
  meta: {
    title: "Athlethium — Coaching adaptatif pour les athlètes d'endurance",
    description:
      "Un coaching adaptatif et abordable pour les athlètes d'endurance. Des plans polarisés vraiment personnalisés pour cyclistes, coureurs et triathlètes, qui évoluent avec vous.",
  },
  a11y: {
    skip: 'Aller au contenu',
    home: 'Accueil Athlethium',
    theme: 'Changer de thème',
    language: 'Langue',
    mainNav: 'Principale',
    footerNav: 'Pied de page',
    onX: 'Athlethium sur X',
    onInstagram: 'Athlethium sur Instagram',
    email: 'Écrire à Athlethium',
  },
  nav: {
    features: 'Fonctionnalités',
    how: 'Comment ça marche',
    about: 'À propos',
    getApp: "Télécharger l'app",
  },
  hero: {
    pill: 'Désormais en six langues',
    titleBefore: 'Un coaching adaptatif pour les ',
    titleAccent: "athlètes d'endurance",
    titleAfter: '',
    lede: 'Un entraînement personnalisé qui évolue avec vous. Abordable, intelligent et conçu spécialement pour les cyclistes, les coureurs et les triathlètes.',
    points: ['Entraînement polarisé', 'Synchronisé avec Strava', 'Renforcement et mobilité'],
    adaptedTitle: 'Plan adapté',
    adaptedBody: 'Lundi manqué · semaine rééquilibrée',
    thisWeek: 'Cette semaine',
    easy: 'facile',
    hard: 'intense',
  },
  store: {
    ios: 'Télécharger pour iOS',
    android: 'Télécharger pour Android',
  },
  phone: {
    weekday: 'Mardi',
    today: "Aujourd'hui",
    days: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
    sport: 'Vélo',
    duration: '1 h 15',
    sessionTitle: 'Intervalles au seuil',
    sessionBody: '3 × 12 min au seuil, récupération en souplesse',
    start: 'Démarrer la séance',
    upNext: 'À suivre',
    run: 'Footing facile',
    runWhen: 'Jeudi · 45 min',
    strength: 'Renforcement · bas du corps',
    strengthWhen: 'Vendredi · 40 min',
  },
  strip: {
    label: 'Conçu pour',
    sports: ['Cyclisme', 'Course à pied', 'Natation', 'Triathlon'],
  },
  features: {
    kicker: 'Ce qui nous distingue',
    title: 'Un coach dans votre poche, pas un modèle dans un tableur.',
    intro:
      "Athlethium associe des méthodes d'entraînement éprouvées à une technologie moderne pour offrir un coaching à la fois efficace et abordable.",
    adaptive: {
      title: 'Vraiment adaptatif',
      body: "Votre plan réagit à ce qui s'est réellement passé : séances réalisées, jours manqués, votre forme du moment. Chaque semaine est reconstruite autour de vous.",
    },
    polarised: {
      title: 'Polarisé par conception',
      body: "Un modèle polarisé éprouvé équilibre intensité et récupération pour plus de progrès en endurance et moins de blessures.",
    },
    ai: {
      title: 'Algorithme structuré + IA',
      body: "Des algorithmes d'entraînement structurés associés à des LLM : des plans fiables, des ajustements souples et des échanges de coaching naturels.",
    },
    strength: {
      title: 'Renforcement et mobilité intégrés',
      body: "Les séances de musculation et de mobilité s'intègrent à votre travail d'endurance. Saisissez vos séries dans l'app ou importez-les depuis votre montre.",
    },
    sync: {
      title: 'Synchronisé avec votre entraînement',
      body: 'Connectez Strava ou importez des fichiers FIT. Vos séances terminées rejoignent directement votre plan, avec des statistiques adaptées à chaque sport.',
    },
    language: {
      title: 'Parle votre langue',
      body: "L'app et vos notes de coaching sont disponibles en six langues et suivent automatiquement la langue de votre téléphone.",
    },
    affordable: {
      title: 'Abordable pour tous',
      body: "Un coaching adaptatif de haut niveau pour une fraction du prix d'un coach traditionnel, sans compromis.",
    },
  },
  how: {
    kicker: 'Comment ça marche',
    title: "De l'objectif à la ligne de départ en trois étapes.",
    steps: [
      { title: 'Indiquez votre objectif', body: 'Votre épreuve, vos sports, les heures dont vous disposez chaque semaine et tout ce qui vous freine.' },
      { title: 'Recevez votre plan', body: 'Un plan périodisé et polarisé, construit autour de votre agenda, avec des objectifs clairs pour chaque séance.' },
      { title: "Entraînez-vous, il s'adapte", body: 'Enregistrez et synchronisez vos séances. Athlethium ajuste les semaines à venir à mesure que vous progressez.' },
    ],
  },
  about: {
    quote:
      "Conçu à partir d'une expérience en équipe de Grande-Bretagne de cyclisme, avec une connaissance concrète de ce qu'il faut pour s'entraîner et performer au plus haut niveau.",
    caption: 'Une expertise de haut niveau dans chaque plan.',
  },
  cta: {
    title: "Entraînez-vous plus intelligemment dès aujourd'hui.",
    body: 'Téléchargez Athlethium sur iOS ou Android et obtenez votre premier plan en quelques minutes.',
  },
  footer: {
    tagline: 'Coaching adaptatif pour cyclistes, coureurs et triathlètes.',
    product: 'Produit',
    download: 'Télécharger',
    legal: 'Mentions légales',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions générales',
    inEnglish: '(en anglais)',
    contact: 'Contact',
    rights: 'Tous droits réservés.',
  },
};

const de: UI = {
  meta: {
    title: 'Athlethium — Adaptives Coaching für den Ausdauersport',
    description:
      'Bezahlbares, adaptives Coaching für den Ausdauersport. Wirklich persönliche, polarisierte Trainingspläne für Radsport, Laufen und Triathlon, die sich mit dir weiterentwickeln.',
  },
  a11y: {
    skip: 'Zum Inhalt springen',
    home: 'Athlethium Startseite',
    theme: 'Farbschema wechseln',
    language: 'Sprache',
    mainNav: 'Hauptmenü',
    footerNav: 'Fußzeile',
    onX: 'Athlethium auf X',
    onInstagram: 'Athlethium auf Instagram',
    email: 'E-Mail an Athlethium',
  },
  nav: {
    features: 'Funktionen',
    how: "So funktioniert's",
    about: 'Über uns',
    getApp: 'App holen',
  },
  hero: {
    pill: 'Jetzt in sechs Sprachen',
    titleBefore: 'Adaptives Coaching für ',
    titleAccent: 'den Ausdauersport',
    titleAfter: '',
    lede: 'Persönliches Training, das sich mit dir weiterentwickelt. Bezahlbar, intelligent und speziell für Radsport, Laufen und Triathlon gemacht.',
    points: ['Polarisiertes Training', 'Synchronisiert mit Strava', 'Kraft & Mobilität'],
    adaptedTitle: 'Plan angepasst',
    adaptedBody: 'Montag verpasst · Woche neu verteilt',
    thisWeek: 'Diese Woche',
    easy: 'locker',
    hard: 'hart',
  },
  store: {
    ios: 'Für iOS laden',
    android: 'Für Android laden',
  },
  phone: {
    weekday: 'Dienstag',
    today: 'Heute',
    days: ['M', 'D', 'M', 'D', 'F', 'S', 'S'],
    sport: 'Rad',
    duration: '1 h 15 min',
    sessionTitle: 'Schwellenintervalle',
    sessionBody: '3 × 12 min an der Schwelle, locker rollen dazwischen',
    start: 'Einheit starten',
    upNext: 'Als Nächstes',
    run: 'Lockerer Lauf',
    runWhen: 'Donnerstag · 45 min',
    strength: 'Kraft · Unterkörper',
    strengthWhen: 'Freitag · 40 min',
  },
  strip: {
    label: 'Gemacht für',
    sports: ['Radsport', 'Laufen', 'Schwimmen', 'Triathlon'],
  },
  features: {
    kicker: 'Was uns unterscheidet',
    title: 'Ein Coach in deiner Tasche, keine Vorlage in einer Tabelle.',
    intro: 'Athlethium verbindet bewährte Trainingsmethoden mit moderner Technologie – für Coaching, das wirkt und bezahlbar bleibt.',
    adaptive: {
      title: 'Wirklich adaptiv',
      body: 'Dein Plan reagiert auf das, was tatsächlich passiert ist: absolvierte Einheiten, verpasste Tage, wie du dich fühlst. Jede Woche wird um dich herum neu aufgebaut.',
    },
    polarised: {
      title: 'Polarisiert von Grund auf',
      body: 'Ein bewährtes polarisiertes Modell bringt Intensität und Erholung ins Gleichgewicht – für mehr Ausdauer und weniger Verletzungen.',
    },
    ai: {
      title: 'Strukturierter Algorithmus + KI',
      body: 'Strukturierte Trainingsalgorithmen kombiniert mit LLMs: verlässliche Pläne, flexible Anpassungen und Coaching-Gespräche wie mit einem Menschen.',
    },
    strength: {
      title: 'Kraft & Mobilität inklusive',
      body: 'Kraft- und Mobilitätseinheiten stehen direkt neben deinem Ausdauertraining. Trage Sätze in der App ein oder importiere sie von deiner Uhr.',
    },
    sync: {
      title: 'Synchron mit deinem Training',
      body: 'Verbinde Strava oder lade FIT-Dateien hoch. Absolvierte Einheiten landen direkt in deinem Plan, mit Werten, die zur jeweiligen Sportart passen.',
    },
    language: {
      title: 'Spricht deine Sprache',
      body: 'Die App und deine Coaching-Hinweise gibt es in sechs Sprachen – automatisch in der Sprache deines Handys.',
    },
    affordable: {
      title: 'Für alle bezahlbar',
      body: 'Adaptives Coaching auf Weltklasseniveau zu einem Bruchteil der Kosten eines klassischen Coaches, ohne Kompromisse.',
    },
  },
  how: {
    kicker: "So funktioniert's",
    title: 'In drei Schritten vom Ziel an die Startlinie.',
    steps: [
      { title: 'Nenne dein Ziel', body: 'Dein Wettkampf, deine Sportarten, deine Stunden pro Woche und alles, was dich gerade bremst.' },
      { title: 'Erhalte deinen Plan', body: 'Ein periodisierter, polarisierter Plan rund um deinen Kalender, mit klaren Vorgaben für jede Einheit.' },
      { title: 'Trainieren und anpassen', body: 'Zeichne deine Einheiten auf und synchronisiere sie. Athlethium passt die kommenden Wochen an, während du fitter wirst.' },
    ],
  },
  about: {
    quote:
      'Entwickelt mit der Erfahrung aus dem britischen Radsport-Nationalteam – und echtem Wissen darüber, was es braucht, um auf höchstem Niveau zu trainieren und Leistung zu bringen.',
    caption: 'Spitzenerfahrung in jedem Plan.',
  },
  cta: {
    title: 'Trainiere ab heute smarter.',
    body: 'Lade Athlethium für iOS oder Android und erhalte in wenigen Minuten deinen ersten Plan.',
  },
  footer: {
    tagline: 'Adaptives Coaching für Radsport, Laufen und Triathlon.',
    product: 'Produkt',
    download: 'Download',
    legal: 'Rechtliches',
    privacy: 'Datenschutzerklärung',
    terms: 'AGB',
    inEnglish: '(auf Englisch)',
    contact: 'Kontakt',
    rights: 'Alle Rechte vorbehalten.',
  },
};

const it: UI = {
  meta: {
    title: 'Athlethium — Coaching adattivo per chi fa endurance',
    description:
      'Coaching adattivo e accessibile per chi fa endurance. Piani polarizzati davvero personalizzati per ciclismo, corsa e triathlon, che si evolvono con te.',
  },
  a11y: {
    skip: 'Vai al contenuto',
    home: 'Home di Athlethium',
    theme: 'Cambia tema',
    language: 'Lingua',
    mainNav: 'Principale',
    footerNav: 'Piè di pagina',
    onX: 'Athlethium su X',
    onInstagram: 'Athlethium su Instagram',
    email: 'Scrivi ad Athlethium',
  },
  nav: {
    features: 'Funzionalità',
    how: 'Come funziona',
    about: 'Chi siamo',
    getApp: "Scarica l'app",
  },
  hero: {
    pill: 'Ora in sei lingue',
    titleBefore: 'Coaching adattivo per ',
    titleAccent: 'chi fa endurance',
    titleAfter: '',
    lede: 'Un allenamento personalizzato che si evolve con te. Accessibile, intelligente e pensato apposta per ciclismo, corsa e triathlon.',
    points: ['Allenamento polarizzato', 'Si sincronizza con Strava', 'Forza e mobilità'],
    adaptedTitle: 'Piano adattato',
    adaptedBody: 'Lunedì saltato · settimana ribilanciata',
    thisWeek: 'Questa settimana',
    easy: 'facile',
    hard: 'intenso',
  },
  store: {
    ios: 'Scarica per iOS',
    android: 'Scarica per Android',
  },
  phone: {
    weekday: 'Martedì',
    today: 'Oggi',
    days: ['L', 'M', 'M', 'G', 'V', 'S', 'D'],
    sport: 'Bici',
    duration: '1 h 15 min',
    sessionTitle: 'Ripetute alla soglia',
    sessionBody: '3 × 12 min alla soglia, recupero agile tra le ripetute',
    start: 'Inizia seduta',
    upNext: 'Prossime',
    run: 'Corsa facile',
    runWhen: 'Giovedì · 45 min',
    strength: 'Forza · parte inferiore',
    strengthWhen: 'Venerdì · 40 min',
  },
  strip: {
    label: 'Pensato per',
    sports: ['Ciclismo', 'Corsa', 'Nuoto', 'Triathlon'],
  },
  features: {
    kicker: 'Cosa ci rende diversi',
    title: 'Un coach in tasca, non un modello su un foglio di calcolo.',
    intro: 'Athlethium unisce metodi di allenamento collaudati e tecnologia moderna per offrirti un coaching efficace e accessibile.',
    adaptive: {
      title: 'Davvero adattivo',
      body: 'Il tuo piano reagisce a ciò che è successo davvero: sedute completate, giorni saltati, come ti senti. Ogni settimana viene ricostruita su di te.',
    },
    polarised: {
      title: 'Polarizzato per natura',
      body: 'Un modello polarizzato collaudato bilancia intensità e recupero per migliorare di più la resistenza e ridurre gli infortuni.',
    },
    ai: {
      title: 'Algoritmo strutturato + IA',
      body: 'Algoritmi di allenamento strutturati uniti agli LLM: piani affidabili, adattamenti flessibili e conversazioni di coaching dal tono umano.',
    },
    strength: {
      title: 'Forza e mobilità, incluse',
      body: "Le sedute in palestra e di mobilità affiancano il tuo lavoro di endurance. Registra le serie nell'app o importale dal tuo orologio.",
    },
    sync: {
      title: 'In sincronia con il tuo allenamento',
      body: 'Collega Strava o carica file FIT. Gli allenamenti completati entrano direttamente nel tuo piano, con statistiche adatte a ogni sport.',
    },
    language: {
      title: 'Parla la tua lingua',
      body: "L'app e le tue note di coaching sono disponibili in sei lingue e seguono automaticamente la lingua del tuo telefono.",
    },
    affordable: {
      title: 'Accessibile a tutti',
      body: 'Coaching adattivo di livello mondiale a una frazione del costo di un coach tradizionale, senza compromessi.',
    },
  },
  how: {
    kicker: 'Come funziona',
    title: "Dall'obiettivo alla linea di partenza in tre passi.",
    steps: [
      { title: 'Raccontaci il tuo obiettivo', body: 'La tua gara, i tuoi sport, le ore che hai ogni settimana e tutto ciò che ti frena.' },
      { title: 'Ricevi il tuo piano', body: 'Un piano periodizzato e polarizzato costruito intorno al tuo calendario, con obiettivi chiari per ogni seduta.' },
      { title: 'Allenati e adatta', body: 'Registra e sincronizza le tue sedute. Athlethium adatta le settimane successive man mano che migliori.' },
    ],
  },
  about: {
    quote:
      "Nato dall'esperienza nella nazionale britannica di ciclismo, con una conoscenza concreta di ciò che serve per allenarsi e rendere ai massimi livelli.",
    caption: "Esperienza d'élite in ogni piano.",
  },
  cta: {
    title: 'Inizia oggi ad allenarti in modo più intelligente.',
    body: 'Scarica Athlethium su iOS o Android e ricevi il tuo primo piano in pochi minuti.',
  },
  footer: {
    tagline: 'Coaching adattivo per ciclismo, corsa e triathlon.',
    product: 'Prodotto',
    download: 'Scarica',
    legal: 'Note legali',
    privacy: 'Informativa sulla privacy',
    terms: 'Termini e condizioni',
    inEnglish: '(in inglese)',
    contact: 'Contatti',
    rights: 'Tutti i diritti riservati.',
  },
};

const ja: UI = {
  meta: {
    title: 'Athlethium — 持久系アスリートのためのアダプティブ・コーチング',
    description:
      '持久系アスリートのための、手頃でアダプティブなコーチング。サイクリスト、ランナー、トライアスリートに合わせた本当にパーソナルなポラライズドトレーニングプランが、あなたと一緒に進化します。',
  },
  a11y: {
    skip: '本文へスキップ',
    home: 'Athlethium ホーム',
    theme: 'カラーテーマを切り替え',
    language: '言語',
    mainNav: 'メイン',
    footerNav: 'フッター',
    onX: 'X の Athlethium',
    onInstagram: 'Instagram の Athlethium',
    email: 'Athlethium にメール',
  },
  nav: {
    features: '機能',
    how: '使い方',
    about: '私たちについて',
    getApp: 'アプリを入手',
  },
  hero: {
    pill: '6言語に対応しました',
    titleBefore: '',
    titleAccent: '持久系アスリート',
    titleAfter: 'のためのアダプティブ・コーチング',
    lede: 'あなたと一緒に進化する、パーソナルなトレーニング。手頃な価格で賢く、サイクリスト、ランナー、トライアスリートのために設計されています。',
    points: ['ポラライズドトレーニング', 'Strava と同期', '筋トレとモビリティ'],
    adaptedTitle: 'プランを調整',
    adaptedBody: '月曜を欠席 · 週を再調整',
    thisWeek: '今週',
    easy: '低強度',
    hard: '高強度',
  },
  store: {
    ios: 'iOS 版をダウンロード',
    android: 'Android 版をダウンロード',
  },
  phone: {
    weekday: '火曜日',
    today: '今日',
    days: ['月', '火', '水', '木', '金', '土', '日'],
    sport: 'バイク',
    duration: '1時間15分',
    sessionTitle: '閾値インターバル',
    sessionBody: '閾値で12分 × 3本、間はゆっくり回復',
    start: 'セッション開始',
    upNext: '次の予定',
    run: 'イージーラン',
    runWhen: '木曜日 · 45分',
    strength: '筋トレ · 下半身',
    strengthWhen: '金曜日 · 40分',
  },
  strip: {
    label: '対応競技',
    sports: ['サイクリング', 'ランニング', 'スイミング', 'トライアスロン'],
  },
  features: {
    kicker: 'Athlethium の特長',
    title: 'スプレッドシートのテンプレートではなく、ポケットの中のコーチを。',
    intro: 'Athlethium は実績あるトレーニング手法と最新のテクノロジーを組み合わせ、効果的で手頃なコーチングを提供します。',
    adaptive: {
      title: '本当にアダプティブ',
      body: '完了したセッション、休んだ日、その日の体調など、実際に起きたことにプランが反応します。毎週があなたに合わせて組み直されます。',
    },
    polarised: {
      title: 'ポラライズドを基本に',
      body: '実績あるポラライズドモデルで強度と回復のバランスを取り、持久力を伸ばしながらケガを防ぎます。',
    },
    ai: {
      title: '構造化アルゴリズム + AI',
      body: '構造化されたトレーニングアルゴリズムと LLM を組み合わせ、信頼できるプラン、柔軟な調整、人間らしいコーチングの会話を実現します。',
    },
    strength: {
      title: '筋トレとモビリティも',
      body: 'ジムやモビリティのセッションも持久系トレーニングと並べて管理。セットはアプリで記録するか、ウォッチから取り込めます。',
    },
    sync: {
      title: 'トレーニングと同期',
      body: 'Strava を連携するか FIT ファイルをアップロード。完了したワークアウトはそのままプランに反映され、競技ごとに適した指標で表示されます。',
    },
    language: {
      title: 'あなたの言語で',
      body: 'アプリとコーチングノートは6言語に対応し、スマートフォンの言語に自動で合わせます。',
    },
    affordable: {
      title: '誰にでも手頃な価格',
      body: '妥協のない世界水準のアダプティブ・コーチングを、従来のコーチのほんの一部の費用で。',
    },
  },
  how: {
    kicker: '使い方',
    title: '目標からスタートラインまで、3ステップ。',
    steps: [
      { title: '目標を教えてください', body: '出場する大会、取り組む競技、毎週使える時間、そして今の課題を教えてください。' },
      { title: 'プランを受け取る', body: 'あなたのカレンダーに合わせた、ピリオダイゼーションとポラライズドのプラン。各セッションの目標も明確です。' },
      { title: 'トレーニングして調整', body: 'セッションを記録して同期するだけ。体力の向上に合わせて、Athlethium がこの先の週を調整します。' },
    ],
  },
  about: {
    quote: '元イギリス代表サイクリストが開発。トップレベルでトレーニングし、結果を出すために何が必要かを実体験から知っています。',
    caption: 'すべてのプランにトップレベルの経験を。',
  },
  cta: {
    title: '今日から、もっと賢くトレーニングを。',
    body: 'iOS または Android で Athlethium をダウンロードすれば、数分で最初のプランが届きます。',
  },
  footer: {
    tagline: 'サイクリスト、ランナー、トライアスリートのためのアダプティブ・コーチング。',
    product: 'プロダクト',
    download: 'ダウンロード',
    legal: '法的情報',
    privacy: 'プライバシーポリシー',
    terms: '利用規約',
    inEnglish: '（英語）',
    contact: 'お問い合わせ',
    rights: '無断転載を禁じます。',
  },
};

export const ui: Record<Lang, UI> = { en, es, fr, de, it, ja };
