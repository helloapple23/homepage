(() => {
  const page = document.body.dataset.page || 'home';
  const year = document.getElementById('year');
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('site-menu');

  const translations = {
    nl: {
      meta: {
        home: {
          title: 'Lars Rosevink | Data, beleid en digitale experimenten',
          description: 'Persoonlijke website van Lars Rosevink, data beleidsadviseur bij Univé, met een interactieve pixelkamer en compacte professionele context.',
          ogLocale: 'nl_NL'
        },
        about: {
          title: 'Over | Lars Rosevink',
          description: 'Over Lars Rosevink: data, governance, procesverbetering en praktische digitale experimenten.',
          ogLocale: 'nl_NL'
        },
        portfolio: {
          title: 'Portfolio | Lars Rosevink',
          description: 'Een bescheiden portfolio met digitale experimenten, prototypes en ideeën in ontwikkeling van Lars Rosevink.',
          ogLocale: 'nl_NL'
        },
        resume: {
          title: 'CV | Lars Rosevink',
          description: 'Compact CV van Lars Rosevink met data, beleid, governance, vaardigheden en opleiding.',
          ogLocale: 'nl_NL'
        },
        contact: {
          title: 'Contact | Lars Rosevink',
          description: 'Neem contact op met Lars Rosevink via e-mail of LinkedIn.',
          ogLocale: 'nl_NL'
        },
        '404': {
          title: 'Pagina niet gevonden | Lars Rosevink',
          description: 'De pagina die je zoekt is niet gevonden.',
          ogLocale: 'nl_NL'
        }
      },
      text: {
        'global.skip': 'Naar inhoud',
        'global.menu': 'Menu',
        'nav.home': 'Home',
        'nav.about': 'Over',
        'nav.portfolio': 'Portfolio',
        'nav.resume': 'CV',
        'nav.contact': 'Contact',
        'home.eyebrow': 'Persoonlijke website',
        'home.h1': 'Een kleine digitale kamer voor data, ideeën en werk in ontwikkeling.',
        'home.lead': 'Ik ben Lars Rosevink, data beleidsadviseur bij Univé. Ik werk aan datakwaliteit, governance en praktische verbetering, en bouw daarnaast graag kleine digitale experimenten.',
        'home.enterRoom': 'Ga de kamer in',
        'home.viewResume': 'Bekijk CV',
        'home.contact': 'Contact',
        'home.currently': 'Momenteel',
        'home.role': 'Data beleidsadviseur',
        'home.roleNote': 'Datakwaliteit, governance, analyse en praktische digitale tools.',
        'home.roomEyebrow': 'Interactieve homepage',
        'home.roomTitle': 'Loop door de kamer.',
        'home.roomLead': 'Gebruik de pijltjestoetsen of WASD. Loop naar een object en druk op E, of klik/tik direct op een object.',
        'home.objectsTitle': 'Objecten in de kamer',
        'home.objectDesk': 'Bureau',
        'home.objectShelf': 'Boekenkast',
        'home.objectBoard': 'Prikbord',
        'home.objectMail': 'Brievenbus',
        'home.quickEyebrow': 'Snelle routes',
        'home.quickTitle': 'Liever gewoon klikken?',
        'home.cardAbout': 'Een korte introductie over mijn werk, interesses en manier van denken.',
        'home.cardPortfolio': 'Kleine experimenten en ideeën die verder kunnen groeien.',
        'home.cardResume': 'Een compact overzicht van ervaring, opleiding en vaardigheden.',
        'home.cardContact': 'E-mail en LinkedIn op één eenvoudige plek.',
        'room.defaultStatus': 'Loop naar een object om een pagina te openen.',
        'controls.up': 'Omhoog',
        'controls.left': 'Links',
        'controls.down': 'Omlaag',
        'controls.right': 'Rechts',
        'controls.open': 'Openen',
        'about.eyebrow': 'Over',
        'about.h1': 'Analytisch van aard, praktisch in aanpak.',
        'about.lead': 'Ik werk op het snijvlak van data, beleid en verbetering. Ik vind het interessant om te begrijpen hoe informatie door een organisatie beweegt, waar kwaliteitsvraagstukken ontstaan en hoe betere structuur werk eenvoudiger maakt.',
        'about.profileTitle': 'Profiel',
        'about.profileP1': 'Ik ben Lars Rosevink, data beleidsadviseur bij Univé. Mijn werk draait om datakwaliteit, datagovernance en het vertalen van businesscontext naar heldere, bruikbare verbeteringen.',
        'about.profileP2': 'Naast mijn werk bouw ik graag kleine software-experimenten. Soms ontstaan die uit nieuwsgierigheid, soms uit een praktisch probleem dat ik zie in sport, data of dagelijkse digitale tools.',
        'about.enjoyTitle': 'Wat ik graag doe',
        'about.enjoy1': 'Complexe dingen begrijpelijk maken',
        'about.enjoy2': 'Werken met data en procescontext',
        'about.enjoy3': 'Kleine tools bouwen voor concrete problemen',
        'about.enjoy4': 'Leren door te maken',
        'about.dataTitle': 'Data',
        'about.dataText': 'Datakwaliteit, governance, analyse, SQL en Snowflake.',
        'about.processTitle': 'Proces',
        'about.processText': 'Verbetering, structuur, beslislogica en vragen vertalen naar werkbare stappen.',
        'about.buildingTitle': 'Bouwen',
        'about.buildingText': 'Kleine webapplicaties, prototypes en experimenten rond sport, puzzels en data.',
        'portfolio.eyebrow': 'Portfolio',
        'portfolio.h1': 'Experimenten, prototypes en ideeën in ontwikkeling.',
        'portfolio.lead': 'Deze sectie is bewust bescheiden. Ik bouw graag praktische digitale tools, maar laat werk liever eerlijk zien dan onafgemaakte ideeën als afgeronde producten te presenteren.',
        'portfolio.p1status': 'Verkennend prototype',
        'portfolio.p1title': 'KNLTB Rating Calculator',
        'portfolio.p1text': "Een tennisgerelateerd toolidee voor snelle ratingscenario's en what-if-berekeningen.",
        'portfolio.focus': 'Focus',
        'portfolio.tech': 'Techniek',
        'portfolio.p1focus': 'Sportanalyse',
        'portfolio.p1tech': 'Web, JavaScript, datalogica',
        'portfolio.p2status': 'Concept',
        'portfolio.p2title': 'WK Pool',
        'portfolio.p2text': 'Een idee voor een voorspellingspool met standen, scores en eenvoudige statistieken.',
        'portfolio.p2focus': 'Voetbal, ranglijsten, interactie',
        'portfolio.p2tech': 'Nog te bepalen',
        'portfolio.p3status': 'Doorlopend',
        'portfolio.p3title': 'Toekomstige experimenten',
        'portfolio.p3text': 'Een plek voor kleinere ideeën rond webdevelopment, puzzellogica, datakwaliteit en AI-ondersteund bouwen.',
        'portfolio.p3focus': 'Leren door te maken',
        'portfolio.p3tech': 'HTML, CSS, JavaScript, SQL',
        'resume.eyebrow': 'CV',
        'resume.h1': 'Data, beleid, analyse en praktische verbetering.',
        'resume.lead': 'Een compact overzicht van mijn professionele achtergrond en interesses.',
        'resume.summaryTitle': 'Samenvatting',
        'resume.summaryText': 'Data beleidsadviseur met interesse in datakwaliteit, governance, SQL, analyse en procesverbetering. Ik vind het leuk om businesscontext te verbinden met technisch begrip en onduidelijke vragen terug te brengen tot gestructureerde vervolgstappen.',
        'resume.experienceTitle': 'Ervaring',
        'resume.role1': 'Data beleidsadviseur',
        'resume.role1text': 'Werk rond datakwaliteit, governance, beleid en verbetering binnen een datamanagementcontext.',
        'resume.role2': 'Eerdere ervaring',
        'resume.role2org': 'Gomibo / Belsimpel-context',
        'resume.role2text': 'Commerciële, klantgerichte en operationele ervaring voordat mijn werk verder verschoof richting data.',
        'resume.educationTitle': 'Opleiding',
        'resume.educationOrg': 'Rijksuniversiteit Groningen',
        'resume.educationText': 'Opleiding met focus op business, analytics en data.',
        'resume.skillsTitle': 'Vaardigheden en interesses',
        'resume.skillData': 'Data',
        'resume.skillDataText': 'Datakwaliteit, datagovernance, analyse, SQL, Snowflake.',
        'resume.skillTech': 'Techniek',
        'resume.skillTechText': 'Programmeren, webdevelopment, software-experimenten, AI-ondersteund bouwen.',
        'resume.skillProcess': 'Proces',
        'resume.skillProcessText': 'Procesverbetering, structuur, requirements, praktische vertaling.',
        'resume.skillInterests': 'Interesses',
        'resume.skillInterestsText': 'Sportanalyse, tennis, voetbal, puzzels en game development.',
        'contact.eyebrow': 'Contact',
        'contact.h1': 'Wil je contact opnemen?',
        'contact.lead': 'De makkelijkste manier om mij te bereiken is per e-mail. LinkedIn werkt ook goed voor professionele context of een kort bericht.',
        'contact.emailButton': 'Stuur een e-mail',
        'contact.emailLabel': 'E-mail',
        'notfound.h1': 'Deze kamer bestaat niet.',
        'notfound.lead': 'De pagina die je zoekt is misschien verplaatst of nog niet toegevoegd.',
        'notfound.back': 'Terug naar home'
      },
      attr: {
        navMain: 'Hoofdnavigatie',
        languageSwitch: 'Taalkeuze',
        profileSummary: 'Profielsamenvatting',
        roomStage: 'Interactieve isometrische kamer. Gebruik pijltjestoetsen of WASD om Lars door de kamer te bewegen.',
        openHome: 'Open de homepage',
        openAbout: 'Open de pagina Over',
        openResume: 'Open de CV-pagina',
        openPortfolio: 'Open de portfolio-pagina',
        openContact: 'Open de contactpagina',
        movementControls: 'Bewegingsknoppen',
        moveUp: 'Beweeg omhoog',
        moveLeft: 'Beweeg naar links',
        moveDown: 'Beweeg omlaag',
        moveRight: 'Beweeg naar rechts',
        openNearby: 'Open object in de buurt',
        portfolioProjects: 'Portfolio projecten',
        contactDetails: 'Contactgegevens'
      },
      room: {
        defaultStatus: 'Loop naar een object om een pagina te openen.',
        press: 'Druk op E voor {label}',
        nearby: 'In de buurt: {label}. Druk op E of tik op het object.'
      }
    },
    en: {
      meta: {
        home: {
          title: 'Lars Rosevink | Data, policy and digital experiments',
          description: 'Personal website of Lars Rosevink, Data Policy Advisor at Univé, with a small interactive room and concise professional context.',
          ogLocale: 'en_US'
        },
        about: {
          title: 'About | Lars Rosevink',
          description: 'About Lars Rosevink: data, governance, process improvement and practical digital experiments.',
          ogLocale: 'en_US'
        },
        portfolio: {
          title: 'Portfolio | Lars Rosevink',
          description: 'A modest portfolio of digital experiments, prototypes and work in progress by Lars Rosevink.',
          ogLocale: 'en_US'
        },
        resume: {
          title: 'Resume | Lars Rosevink',
          description: 'Concise resume of Lars Rosevink, including data policy, governance, skills and education.',
          ogLocale: 'en_US'
        },
        contact: {
          title: 'Contact | Lars Rosevink',
          description: 'Contact Lars Rosevink by email or LinkedIn.',
          ogLocale: 'en_US'
        },
        '404': {
          title: 'Page not found | Lars Rosevink',
          description: 'The page you are looking for could not be found.',
          ogLocale: 'en_US'
        }
      },
      text: {
        'global.skip': 'Skip to content',
        'global.menu': 'Menu',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.portfolio': 'Portfolio',
        'nav.resume': 'Resume',
        'nav.contact': 'Contact',
        'home.eyebrow': 'Personal website',
        'home.h1': 'A small digital room for data, ideas and work in progress.',
        'home.lead': 'I am Lars Rosevink, a Data Policy Advisor at Univé. I work around data quality, governance and practical improvement, and I like building small digital experiments alongside that.',
        'home.enterRoom': 'Enter the room',
        'home.viewResume': 'View resume',
        'home.contact': 'Contact',
        'home.currently': 'Currently',
        'home.role': 'Data Policy Advisor',
        'home.roleNote': 'Data quality, governance, analysis and practical digital tools.',
        'home.roomEyebrow': 'Interactive homepage',
        'home.roomTitle': 'Walk around the room.',
        'home.roomLead': 'Use arrow keys or WASD. Move close to an object and press E, or click/tap an object directly.',
        'home.objectsTitle': 'Objects in the room',
        'home.objectDesk': 'Desk',
        'home.objectShelf': 'Bookshelf',
        'home.objectBoard': 'Pinboard',
        'home.objectMail': 'Mailbox',
        'home.quickEyebrow': 'Quick links',
        'home.quickTitle': 'Prefer the normal route?',
        'home.cardAbout': 'A short introduction to my work, interests and way of thinking.',
        'home.cardPortfolio': 'Small experiments and ideas that may grow over time.',
        'home.cardResume': 'A concise overview of experience, education and skills.',
        'home.cardContact': 'Email and LinkedIn in one simple place.',
        'room.defaultStatus': 'Move near an object to open a page.',
        'controls.up': 'Up',
        'controls.left': 'Left',
        'controls.down': 'Down',
        'controls.right': 'Right',
        'controls.open': 'Open',
        'about.eyebrow': 'About',
        'about.h1': 'Analytical by nature, practical by preference.',
        'about.lead': 'I work at the intersection of data, policy and improvement. I like understanding how information flows through an organization, where quality issues appear, and how better structure can make work easier.',
        'about.profileTitle': 'Profile',
        'about.profileP1': 'I am Lars Rosevink, Data Policy Advisor at Univé. My work is centered around data quality, data governance and translating business context into clear, usable improvements.',
        'about.profileP2': 'Alongside my professional work, I enjoy building small software experiments. Some start from curiosity, others from a practical problem I notice in sports, data or everyday digital tools.',
        'about.enjoyTitle': 'What I enjoy',
        'about.enjoy1': 'Making complex things understandable',
        'about.enjoy2': 'Working with data and process context',
        'about.enjoy3': 'Building small tools that solve a concrete problem',
        'about.enjoy4': 'Learning by making',
        'about.dataTitle': 'Data',
        'about.dataText': 'Data quality, governance, analysis, SQL and Snowflake.',
        'about.processTitle': 'Process',
        'about.processText': 'Improvement, structure, decision logic and translating questions into workable steps.',
        'about.buildingTitle': 'Building',
        'about.buildingText': 'Small web applications, prototypes and experiments around sports, puzzles and data.',
        'portfolio.eyebrow': 'Portfolio',
        'portfolio.h1': 'Experiments, prototypes and ideas in progress.',
        'portfolio.lead': 'This section is deliberately modest. I like building practical digital tools, but I would rather show work honestly than present unfinished ideas as finished products.',
        'portfolio.p1status': 'Exploratory prototype',
        'portfolio.p1title': 'KNLTB Rating Calculator',
        'portfolio.p1text': 'A small tennis-related tool idea for quick rating scenarios and what-if calculations.',
        'portfolio.focus': 'Focus',
        'portfolio.tech': 'Technology',
        'portfolio.p1focus': 'Sports analytics',
        'portfolio.p1tech': 'Web, JavaScript, data logic',
        'portfolio.p2status': 'Concept',
        'portfolio.p2title': 'World Cup Pool',
        'portfolio.p2text': 'An idea for a prediction pool with standings, scores and simple statistics.',
        'portfolio.p2focus': 'Football, rankings, interaction',
        'portfolio.p2tech': 'To be determined',
        'portfolio.p3status': 'Ongoing',
        'portfolio.p3title': 'Future experiments',
        'portfolio.p3text': 'A place for smaller ideas around web development, puzzle logic, data quality and AI-assisted building.',
        'portfolio.p3focus': 'Learning by making',
        'portfolio.p3tech': 'HTML, CSS, JavaScript, SQL',
        'resume.eyebrow': 'Resume',
        'resume.h1': 'Data, policy, analysis and practical improvement.',
        'resume.lead': 'A concise overview of my professional background and interests.',
        'resume.summaryTitle': 'Summary',
        'resume.summaryText': 'Data Policy Advisor with interests in data quality, governance, SQL, analysis and process improvement. I enjoy connecting business context with technical understanding and turning unclear questions into structured next steps.',
        'resume.experienceTitle': 'Experience',
        'resume.role1': 'Data Policy Advisor',
        'resume.role1text': 'Work around data quality, governance, policy and improvement in a data management context.',
        'resume.role2': 'Earlier experience',
        'resume.role2org': 'Gomibo / Belsimpel context',
        'resume.role2text': 'Commercial, customer-facing and operational experience before moving further into data-focused work.',
        'resume.educationTitle': 'Education',
        'resume.educationOrg': 'Rijksuniversiteit Groningen',
        'resume.educationText': 'Education with a focus around business, analytics and data.',
        'resume.skillsTitle': 'Skills and interests',
        'resume.skillData': 'Data',
        'resume.skillDataText': 'Data quality, data governance, analysis, SQL, Snowflake.',
        'resume.skillTech': 'Technology',
        'resume.skillTechText': 'Programming, web development, software experiments, AI-assisted development.',
        'resume.skillProcess': 'Process',
        'resume.skillProcessText': 'Process improvement, structure, requirements, practical translation.',
        'resume.skillInterests': 'Interests',
        'resume.skillInterestsText': 'Sports analytics, tennis, football, puzzles and game development.',
        'contact.eyebrow': 'Contact',
        'contact.h1': 'Want to get in touch?',
        'contact.lead': 'The easiest way to reach me is by email. LinkedIn works as well for professional context or a quick message.',
        'contact.emailButton': 'Email me',
        'contact.emailLabel': 'Email',
        'notfound.h1': 'This room does not exist.',
        'notfound.lead': 'The page you are looking for may have moved or has not been added yet.',
        'notfound.back': 'Back home'
      },
      attr: {
        navMain: 'Main navigation',
        languageSwitch: 'Language selection',
        profileSummary: 'Profile summary',
        roomStage: 'Interactive isometric room. Use arrow keys or WASD to move Lars around the room.',
        openHome: 'Open Home page',
        openAbout: 'Open About page',
        openResume: 'Open Resume page',
        openPortfolio: 'Open Portfolio page',
        openContact: 'Open Contact page',
        movementControls: 'Movement controls',
        moveUp: 'Move up',
        moveLeft: 'Move left',
        moveDown: 'Move down',
        moveRight: 'Move right',
        openNearby: 'Open nearby object',
        portfolioProjects: 'Portfolio projects',
        contactDetails: 'Contact details'
      },
      room: {
        defaultStatus: 'Move near an object to open a page.',
        press: 'Press E to open {label}',
        nearby: 'Nearby: {label}. Press E or tap the object.'
      }
    }
  };

  function setMeta(name, value, property = false) {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    const element = document.querySelector(selector);
    if (element && value) element.setAttribute('content', value);
  }

  function applyAttributes(langPack) {
    document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
      const specs = element.dataset.i18nAttr.split(';').map((item) => item.trim()).filter(Boolean);
      specs.forEach((spec) => {
        const separator = spec.indexOf(':');
        if (separator === -1) return;
        const attribute = spec.slice(0, separator);
        const key = spec.slice(separator + 1).replace(/^attr\./, '');
        const value = langPack.attr[key];
        if (value !== undefined) element.setAttribute(attribute, value);
      });
    });
  }

  function updateRoomLabels(langPack) {
    document.querySelectorAll('[data-room-target]').forEach((element) => {
      const roomKey = element.dataset.roomKey;
      if (!roomKey) return;
      const navKey = `nav.${roomKey}`;
      const label = langPack.text[navKey];
      if (label) element.dataset.label = label;
    });
  }

  function applyLanguage(language) {
    const lang = translations[language] ? language : 'nl';
    const langPack = translations[lang];
    const meta = langPack.meta[page] || langPack.meta.home;

    document.documentElement.lang = lang;
    document.body.dataset.language = lang;
    window.siteLanguage = lang;
    window.siteLanguageStrings = langPack.room;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      const value = langPack.text[key];
      if (value !== undefined) element.textContent = value;
    });

    applyAttributes(langPack);
    updateRoomLabels(langPack);

    if (meta) {
      document.title = meta.title;
      setMeta('description', meta.description);
      setMeta('og:title', meta.title, true);
      setMeta('og:description', meta.description, true);
      setMeta('og:locale', meta.ogLocale, true);
    }

    document.querySelectorAll('[data-lang-switch]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.langSwitch === lang));
    });

    try {
      localStorage.setItem('siteLanguage', lang);
    } catch (error) {
      // Local storage can be unavailable in some privacy modes. The site still works.
    }

    window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: lang } }));
  }

  function getInitialLanguage() {
    try {
      const stored = localStorage.getItem('siteLanguage');
      if (stored && translations[stored]) return stored;
    } catch (error) {
      return 'nl';
    }
    return 'nl';
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  document.querySelectorAll('[data-nav-page]').forEach((link) => {
    if (link.dataset.navPage === page) {
      link.setAttribute('aria-current', 'page');
    }
  });

  document.querySelectorAll('[data-lang-switch]').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.langSwitch));
  });

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      document.body.classList.toggle('menu-open', !isOpen);
    });

    menu.addEventListener('click', (event) => {
      if (event.target.matches('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      }
    });
  }

  window.setSiteLanguage = applyLanguage;
  applyLanguage(getInitialLanguage());
})();
