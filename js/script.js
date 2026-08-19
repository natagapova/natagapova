function readStoredLang() {
  try {
    const stored = localStorage.getItem("portfolioLang");
    if (stored === "ru" || stored === "en") return stored;
  } catch {
    /* storage may be blocked in private mode */
  }
  return "en";
}

let currentLang = readStoredLang();

const translations = {
  ru: {
    navBrand: "наталья агапова",
    myName: "кто она?",
    languageSwitch: "eng",
    portfolioTitle: "проекты",
    designerPageTitle: "дизайн кейсы",
    navbarCvLabel: "CV",
    navbarCvAria: "скачать cv",
    mlPageTitle: "ml кейсы",
    designerToolsLabel: "инструменты",
    designerToolFigma: "Figma",
    designerToolIllustrator: "Adobe Illustrator",
    designerToolPhotoshop: "Adobe Photoshop",
    designerToolTilda: "Tilda",
    designerToolCanva: "Canva",
    designerToolAi: "AI",
    roleDesigner: "дизайнер",
    roleFrontend: "веб/app разработчик",
    roleML: "ML разработчик",
    rolePerson: "человек",
    personTagline: "вот кто делает вам сайты кстати",
    devPageTitle: "dev кейсы",
    frontendToolHtml: "HTML",
    frontendToolCss: "CSS",
    frontendToolJs: "JavaScript",
    frontendToolTs: "TypeScript",
    frontendToolReact: "React",
    frontendToolNext: "Next.js",
    frontendToolTailwind: "Tailwind",
    frontendToolTilda: "Tilda",
    frontendToolZeroBlock: "Zero Block",
    frontendToolFigma: "Figma",
    frontendToolIllustrator: "Illustrator",
    devToolSwift: "Swift",
    devToolSwiftUI: "SwiftUI",
    devToolMacos: "macOS",
    DevMacosTimerTitle: "Таймер для MacOS",
    DevMacosTimerDesc:
      "В других таймерах не хватало связки таймер + помодоро, нормальной жизни в menu bar и простого интерфейса — всё казалось перегруженным. Сделала своё: минимализм, оба режима, приложение живёт в menu bar. macOS 13+.",
    FrontendCroissanTitle: "Croissan Studio",
    FrontendCroissanDesc:
      "Студийный сайт AI-студии в командной разработке: секции, адаптив и визуальная целостность. Кейсы, услуги и экспертиза читаются легко — не как набор блоков.",
    FrontendCruelTitle: "Cruel Games",
    FrontendCruelDesc:
      "Промо-сайт театральной постановки с акцентом на настроение спектакля и мобильную подачу. Полноэкранный hero, кастомная галерея со свайпом, чистая вёрстка.",
    FrontendAismenaTitle: "AI-смена · Иннополис",
    FrontendAismenaDesc:
      "Лендинг летней AI-смены для школьников. Задача — за пару минут дать родителю полную картину программы и путь к заявке без звонка менеджеру. Сборка на Tilda в сжатые сроки: расписание, команда, цена, FAQ и форма записи.",
    FrontendKingstepTitle: "Барилова & Царёв",
    FrontendKingstepDesc:
      "Сайт Kingstep — главная, каталог курсов и страницы занятий. Дизайн и макеты готовы; с моей стороны проект завершён, публичной ссылки нет.",
    mlToolPython: "Python",
    mlToolPytorch: "PyTorch",
    mlToolBert: "BERT",
    mlToolXai: "XAI",
    mlToolCaptum: "Captum",
    mlToolJupyter: "Jupyter",
    mlToolRag: "RAG",
    mlToolChroma: "ChromaDB",
    mlToolOllama: "Ollama",
    mlActionGithub: "GitHub",
    mlActionArticle: "статья",
    mlStatusInProgress: "в разработке",
    MlResumeScreeningTitle: "Fair resume screening",
    MlResumeScreeningDesc:
      'Интерпретируемый BERT-классификатор резюме для 9 IT-суперкатегорий на данных HeadHunter. Аудит прокси-биаса через Integrated Gradients, сравнение шести методов debiasing, city-swap и transfer на английских резюме. Развивает <a href="https://github.com/natagapova/xai-resume-bias" class="ml-card__inline-link" target="_blank" rel="noopener noreferrer">раннюю XAI-работу</a> по bias в классификации резюме.',
    MlKnowledgeSystemTitle: "Personal Knowledge System",
    MlKnowledgeSystemDesc:
      "RAG-система для ответов по личным PDF: чанкинг, эмбеддинги, семантический поиск в ChromaDB и генерация ответов через Ollama с цитатами. Собрана с нуля на Python — без high-level фреймворков.",
    heroExperienceLabel: "Направления",
    rolesNavLabel: "Роли",
    backHome: "на главную",
    closeProject: "закрыть",
    projectLightboxPrev: "предыдущее",
    projectLightboxNext: "следующее",
    projectLightboxOpen: "открыть изображение",
    heroPhotoAlt: "Наталья Агапова",
    projectPreviewAlt: "Превью: {{title}}",
    projectImageAlt: "{{title}}, изображение {{current}} из {{total}}",
    personGalleryPhotoAlt: "Фото: {{name}}",
    personGalleryVideoAlt: "Видео: {{name}}",
    rolePagePlaceholder: "раздел в работе",
    PochtaTexTitle: "ПОЧТАТЕХ",
    PochtaTexDesc:
      "дизайн игры для промо-стенда в лагере InnoBootCamp. отвечала за UX/UI и сценарий взаимодействия на стенде",
    YandexDirectTitle: "ЯНДЕКС ДИРЕКТ",
    YandexDirectDesc: "тестовое задание в яндекс: платформа управления рекламой",
    InnoBookLoversTitle: "INN\u041eBOOKLOVERS",
    InnoBookLoversDesc:
      "дизайн сайта для курса по фронтенд разработке в университете иннополис. отвечала за ux/ui интерфейс в проекте",
    InnoMedTitle: "INNOMED",
    InnoMedDesc:
      "прототип приложения innomed был разработан для университета иннополис на курсе по продакт менеджменту. я была в роли владельца продукта и также отвечала за разработку прототипа",
    PostersTitle: "ПОСТЕРЫ",
    PostersDesc: "афиши для мероприятий в казани и иннополисе",
    ConceptsTitle: "КОНЦЕПТЫ",
    ConceptsDesc: "экспериментальные макеты, сделанные для себя",
    TsarevBarilovaTitle: "ЦАРЁВ & БАРИЛОВА",
    TsarevBarilovaDesc: "дизайн сайта для продажи онлайн курсов по танцам",
    YokoMatchaTitle: "YOKO MATCHA",
    YokoMatchaDesc: "дизайн сайта для магазина матчи yokomatcha",
    CroissanStudioTitle: "CROISSAN STUDIO",
    CroissanStudioDesc:
      "продукты, разработанные мной для проектов croissan studio: лого, мерч, концепты",
    designerProcessTitle: "разбор процесса",
    designerProcessProblem: "проблема",
    designerProcessSolution: "решение",
    designerProcessResult: "результат",
    designerActionTry: "потестировать игру",
    PochtaTexProblem:
      "нужно было сделать игру с поиском ошибок в интерфейсе и привлечь максимальное количество игроков",
    PochtaTexSolution:
      "собрала игровой сценарий, онбординг, регистрацию и UX-skeleton игрового экрана в фирменной стилистике университета иннополиса и почты россии",
    PochtaTexResult:
      "за 7 дней стенда: 420+ игроков, 99% проходили всю игру, +31% к прошлому формату",
    YandexDirectProblem:
      "рекламный кабинет перегружен метриками — рекламодателю сложно за секунды понять, что происходит с кампанией и куда смотреть в первую очередь",
    YandexDirectSolution:
      "собрала иерархию экранов, вынесла ключевые показатели на первый план и снизила визуальный шум в блоках статистики и управления",
    YokoMatchaProblem:
      "бренд матчи должен ощущаться тепло — без ощущения холодного e-commerce шаблона",
    YokoMatchaSolution:
      "выстроила палитру, типографику и сетку каталога; визуалы сгенерировала и доработала вручную под единый характер",
    TsarevBarilovaProblem:
      "владельцам танцевальной студии нужно место, где можно собрать воедино все онлайн-курсы, которые они продают, и сделать платформу, на которой их можно оплачивать и просматривать",
    TsarevBarilovaSolution:
      "сделала чёткую структуру направлений и тёплую типографику; простая структура сайта для людей из нетехнической сферы; макет адаптировала под сборку в Tilda",
    TsarevBarilovaResult:
      "согласовали главную, каталог и страницы курсов; дизайн завершён, сайт не в разработке у меня и не опубликован",
    InnoBookLoversProblem:
      "Курсовой проект рисковал выглядеть как учебная страница, а не как живое книжное сообщество.",
    InnoBookLoversSolution:
      "Выстроила UX вокруг подборок и вовлечённости: карточки, акценты на контент и простую навигацию между разделами.",
    InnoBookLoversResult:
      "DAU вырос на 34%, регистрации на курс +27%; органический трафик +1,9K визитов за семестр без платного продвижения.",
    InnoMedProblem:
      "Медицинский сервис требует ясности и спокойствия — пользователь не должен теряться в сценариях записи и профиля.",
    InnoMedSolution:
      "Спроектировала потоки пациента, разделила информацию по приоритету и визуально снизила тревожность интерфейса.",
    InnoMedResult:
      "В пилоте: конверсия в запись +31%, отказы на шаге оплаты −18%; 240+ записей за 6 недель, NPS прототипа — 52.",
    CroissanStudioProblem:
      "AI-студии нужен бренд, общий стиль, который отличает их на рынке. сюда входит как диджитал, так и оффлайн носители",
    CroissanStudioSolution:
      "разработала фирменные элементы, иллюстрации и носители в единой стилистике — с AI и ручной доработкой",
    CroissanStudioResult: "NDA",
    PostersProblem:
      "афиша должна цеплять с первого взгляда и оставаться читаемой с расстояния и на экране телефона",
    PostersSolution:
      "сфокусировалась на контрасте, иерархии даты, места и названия и на одном сильном визуальном акценте",
    PostersResult:
      "удавалось собрать до 150 человек на мероприятии с одной афиши",
    experienceBlockTitle: "опыт",
    educationBlockTitle: "образование",
    volunteeringBlockTitle: "волонтёрство",
    expCroissan:
      "<strong>croissan studio</strong> — студия разработки полного цикла для ии-продуктов (продуктовый дизайнер, апрель 2025 - ...)",
    expAzimov:
      "<strong>AzimovLab</strong> — AI-сервис генерации тестов (тимлид фронтенда, февраль – сентябрь 2024; в стартапе также вела продуктовый дизайн и UX интерфейса)",
    expClearmind: "<strong>фриланс</strong> — дизайн афиш, сайтов; вёрстка сайтов на заказ (2022 - ...)",
    eduInnopolis:
      "<strong>университет иннополис</strong> — бакалавриат: прикладной искусственный  интеллект (2026)",
    volTrenirovochnaya:
      "<strong>trenirovochnaya.kzn</strong> — организация танцевальных мероприятий в казани (бренд-дизайнер, маркетолог, март 2025 – август 2025)",
    volInnostreetdance:
      "<strong>InnoStreetDance</strong> — студенческий танцевальный клуб университета иннополис (бренд-дизайнер, маркетолог, декабрь 2022 – сентябрь 2025)",
    footerSocialLabel: "соцсети",
    footerSocialTelegram: "Telegram",
    footerSocialLinkedin: "LinkedIn",
    footerSocialGithub: "GitHub",
    footerSocialEmail: "Почта",
    footerSocialScholar: "Google Scholar",
    introBlockTitle: "обо мне",
    introLead:
      "middle product / UX/UI designer. собираю интерфейсы и визуальные\u00A0системы — от\u00A0структуры до\u00A0деталей, чтобы продуктом было удобно\u00A0пользоваться и приятно\u00A0им\u00A0делиться.",
    introStatusLabel: "current status:",
    introStatusValue: "открыта к проектам — дизайн, dev, ml и\u00A0не\u00A0только",
    introCta: "дизайн кейсы",
    introTrustLabel: "мне доверяют",
    introContactPrefix: "напишите, если есть идея — разберёмся без\u00A0сложных\u00A0брифов",
    introSocialLabel: "соцсети",
    trustLogoCroissan: "croissan studio",
    trustLogoInnopolis: "иннополис",
    trustLogoPochtaRossii: "почта россии",
    trustLogoPochta: "почтатех",
    trustLogoLitsei: "лицей иннополис",
    trustLogoArtCenter: "арт центр иси",
    trustLogoKingstep: "king step",
    PochtaTexMeta: "роль: UX/UI · 1 нед · дизайн solo, проект в команде · университет иннополис и почта россии",
    YandexDirectMeta: "роль: UX/UI · тестовое · solo · яндекс",
    YokoMatchaMeta: "роль: брендинг + UI · 2 нед · solo · фриланс",
    TsarevBarilovaMeta: "роль: UX/UI · 2 нед · solo · фриланс",
    CroissanStudioMeta: "роль: product designer · in-house · croissan studio",
    PostersMeta: "роль: графический дизайн · ongoing · solo · ивенты казани",
    ConceptsMeta: "роль: эксперимент · — · solo · личный проект",
    languagesBlockTitle: "языки",
    langRu: "русский",
    langEn: "английский",
    langFr: "французский",
    langKo: "корейский",
    langEnLevel: "C1+",
    langMapDesc: "Карта владения языками по шкале от 0 до C2.",
  },
  en: {
    navBrand: "natalia agapova",
    myName: "who is she?",
    languageSwitch: "рус",
    portfolioTitle: "projects",
    designerPageTitle: "design cases",
    navbarCvLabel: "CV",
    navbarCvAria: "download cv",
    mlPageTitle: "ml cases",
    designerToolsLabel: "tools",
    designerToolFigma: "Figma",
    designerToolIllustrator: "Adobe Illustrator",
    designerToolPhotoshop: "Adobe Photoshop",
    designerToolTilda: "Tilda",
    designerToolCanva: "Canva",
    designerToolAi: "AI",
    roleDesigner: "designer",
    roleFrontend: "web & app dev",
    roleML: "ML developer",
    rolePerson: "person",
    personTagline: "this is who does your website btw",
    devPageTitle: "dev cases",
    frontendToolHtml: "HTML",
    frontendToolCss: "CSS",
    frontendToolJs: "JavaScript",
    frontendToolTs: "TypeScript",
    frontendToolReact: "React",
    frontendToolNext: "Next.js",
    frontendToolTailwind: "Tailwind",
    frontendToolTilda: "Tilda",
    frontendToolZeroBlock: "Zero Block",
    frontendToolFigma: "Figma",
    frontendToolIllustrator: "Illustrator",
    devToolSwift: "Swift",
    devToolSwiftUI: "SwiftUI",
    devToolMacos: "macOS",
    DevMacosTimerTitle: "MacOS Timer",
    DevMacosTimerDesc:
      "Other timers offered either a timer or pomodoro, not both; menu bar placement was awkward and the UI felt overloaded. I built my own: minimal, both modes, lives in the menu bar. macOS 13+.",
    FrontendCroissanTitle: "Croissan Studio",
    FrontendCroissanDesc:
      "The AI studio site, built with a team: sections, responsive layout, and visual cohesion. Cases, services, and expertise read easily — not like a pile of blocks.",
    FrontendCruelTitle: "Cruel Games",
    FrontendCruelDesc:
      "A promo site for a theatre production, focused on the show's mood and mobile presentation. Full-screen hero, custom swipe gallery, clean hand-coded layout.",
    FrontendAismenaTitle: "AI Camp · Innopolis",
    FrontendAismenaDesc:
      "A landing page for a summer AI camp for school students. A parent should understand the program and apply in a few minutes — no call to a manager. Built on Tilda on a tight deadline: schedule, team, pricing, FAQ, and signup form.",
    FrontendKingstepTitle: "Barilova & Tsarev",
    FrontendKingstepDesc:
      "A Kingstep dance studio site — home, course catalog, and class pages. Design and layouts are done; my part is complete, with no public link.",
    mlToolPython: "Python",
    mlToolPytorch: "PyTorch",
    mlToolBert: "BERT",
    mlToolXai: "XAI",
    mlToolCaptum: "Captum",
    mlToolJupyter: "Jupyter",
    mlToolRag: "RAG",
    mlToolChroma: "ChromaDB",
    mlToolOllama: "Ollama",
    mlActionGithub: "GitHub",
    mlActionArticle: "paper",
    mlStatusInProgress: "in progress",
    MlResumeScreeningTitle: "Fair resume screening",
    MlResumeScreeningDesc:
      'An interpretable BERT resume classifier for 9 IT supercategories on HeadHunter data. Geographic proxy bias audit with Integrated Gradients, six debiasing methods, city-swap stress tests, and English transfer evaluation. Builds on earlier <a href="https://github.com/natagapova/xai-resume-bias" class="ml-card__inline-link" target="_blank" rel="noopener noreferrer">XAI work</a> on resume classification bias.',
    MlKnowledgeSystemTitle: "Personal Knowledge System",
    MlKnowledgeSystemDesc:
      "A RAG system for answering questions from personal PDFs: chunking, embeddings, semantic search in ChromaDB, and LLM answers via Ollama with citations. Built from scratch in Python without high-level frameworks.",
    heroExperienceLabel: "Directions",
    rolesNavLabel: "Roles",
    backHome: "back to home",
    closeProject: "close",
    projectLightboxPrev: "previous",
    projectLightboxNext: "next",
    projectLightboxOpen: "open image",
    heroPhotoAlt: "Natalia Agapova",
    projectPreviewAlt: "Preview: {{title}}",
    projectImageAlt: "{{title}}, image {{current}} of {{total}}",
    personGalleryPhotoAlt: "Photo: {{name}}",
    personGalleryVideoAlt: "Video: {{name}}",
    rolePagePlaceholder: "section in progress",
    PochtaTexTitle: "POCHTATECH",
    PochtaTexDesc:
      "game design for a promo stand at InnoBootCamp. i led UX/UI and the on-stand interaction flow",
    YandexDirectTitle: "YANDEX DIRECT",
    YandexDirectDesc: "test task in yandex: advertising platform management",
    InnoBookLoversTitle: "INNOBOOKLOVERS",
    InnoBookLoversDesc:
      "website design for frontend development course at innopolis university. i was responsible for ux/ui design in the project",
    InnoMedTitle: "INNOMED",
    InnoMedDesc:
      "innomed app prototype developed at innopolis university during a product management course. i was the product owner and created the prototype",
    PostersTitle: "POSTERS",
    PostersDesc: "event posters for kazan and innopolis",
    ConceptsTitle: "CONCEPTS",
    ConceptsDesc: "experimental mockups made for myself",
    TsarevBarilovaTitle: "TSAREV & BARILOVA",
    TsarevBarilovaDesc: "website design for online dance courses",
    YokoMatchaTitle: "YOKO MATCHA",
    YokoMatchaDesc: "website design for matcha shop yokomatcha",
    CroissanStudioTitle: "CROISSAN STUDIO",
    CroissanStudioDesc:
      "products developed by me for croissan studio projects: logos, merch, concepts",
    designerProcessTitle: "process breakdown",
    designerProcessProblem: "problem",
    designerProcessSolution: "solution",
    designerProcessResult: "result",
    designerActionTry: "try the game",
    PochtaTexProblem:
      "the task was to build a spot-the-error interface game and draw as many players as possible",
    PochtaTexSolution:
      "built the game flow, onboarding, signup, and game-screen UX skeleton in innopolis university and russian post brand style",
    PochtaTexResult:
      "over 7 stand days: 420+ players, 99% completed the full game, +31% vs the previous format",
    YandexDirectProblem:
      "the ad dashboard is packed with metrics — advertisers struggle to see what matters in the campaign at a glance",
    YandexDirectSolution:
      "built a clear screen hierarchy, surfaced key KPIs first, and reduced visual noise in stats and management blocks",
    YokoMatchaProblem:
      "the matcha brand had to feel warm — not like a cold e-commerce template",
    YokoMatchaSolution:
      "defined palette, typography, and catalog grid; generated visuals and refined them by hand into one cohesive look",
    TsarevBarilovaProblem:
      "the dance studio owners needed one place to bring together all their online courses — and a platform where students can pay and watch them",
    TsarevBarilovaSolution:
      "built a clear course structure and warm typography; kept the site simple for a non-technical team; adapted layouts for a Tilda build",
    TsarevBarilovaResult:
      "home, catalog, and course pages approved; design is complete — not in development on my side and not published",
    InnoBookLoversProblem:
      "A course project risked looking like homework instead of a living book community.",
    InnoBookLoversSolution:
      "Shaped UX around collections and engagement: cards, content highlights, and simple navigation between sections.",
    InnoBookLoversResult:
      "DAU up 34%, course signups +27%; +1.9K organic visits per semester with no paid promotion.",
    InnoMedProblem:
      "A medical service needs clarity and calm — users should not get lost in booking and profile flows.",
    InnoMedSolution:
      "Mapped patient journeys, prioritized information, and softened the interface to reduce anxiety.",
    InnoMedResult:
      "Pilot results: booking conversion +31%, drop-off at payment −18%; 240+ appointments in 6 weeks, prototype NPS — 52.",
    CroissanStudioProblem:
      "an AI studio needs a brand and a shared style that sets it apart — both digital and offline touchpoints",
    CroissanStudioSolution:
      "developed brand elements, illustrations, and assets in a single style — AI-assisted and hand-finished",
    CroissanStudioResult: "NDA",
    PostersProblem:
      "a poster must grab attention instantly and stay readable from a distance and on a phone screen",
    PostersSolution:
      "focused on contrast, hierarchy of date, venue, and title, and one strong visual anchor",
    PostersResult:
      "managed to draw up to 150 people to an event from a single poster",
    experienceBlockTitle: "experience",
    educationBlockTitle: "education",
    volunteeringBlockTitle: "volunteering",
    expCroissan:
      "<strong>croissan studio</strong> — ai products studio (product designer, apr 2025 - ...)",
    expAzimov:
      "<strong>AzimovLab</strong> — AI test-generation service (frontend team lead, feb – sep 2024; in a small startup I also owned product design and interface UX)",
    expClearmind: "<strong>freelance</strong> — design posters, websites; web development on order (2022 - ...)",
    eduInnopolis:
      "<strong>innopolis university</strong> — bsc in applied artificial intelligence (2026)",
    volTrenirovochnaya:
      "<strong>trenirovochnaya.kzn</strong> — organization of dance events in kazan (brand-designer, marketing person, mar 2025 – aug 2025)",
    volInnostreetdance:
      "<strong>InnoStreetDance</strong> — student dance club of innopolis university (brand-designer, marketing person, dec 2022 – sep 2025)",
    footerSocialLabel: "social links",
    footerSocialTelegram: "Telegram",
    footerSocialLinkedin: "LinkedIn",
    footerSocialGithub: "GitHub",
    footerSocialEmail: "Email",
    footerSocialScholar: "Google Scholar",
    introBlockTitle: "about me",
    introLead:
      "middle product / UX/UI designer. I build interfaces and visual\u00A0systems — from\u00A0structure to\u00A0details — so products are easy\u00A0to\u00A0use and genuinely nice\u00A0to\u00A0share.",
    introStatusLabel: "current status:",
    introStatusValue: "open to work — design, dev, ml &\u00A0more",
    introCta: "design cases",
    introTrustLabel: "trusted by",
    introContactPrefix: "got an idea? let's talk it through — no\u00A0heavy\u00A0briefs required",
    introSocialLabel: "social links",
    trustLogoCroissan: "croissan studio",
    trustLogoInnopolis: "innopolis",
    trustLogoPochtaRossii: "russian post",
    trustLogoPochta: "pochtatech",
    trustLogoLitsei: "innopolis lyceum",
    trustLogoArtCenter: "art center isi",
    trustLogoKingstep: "king step",
    PochtaTexMeta: "role: UX/UI · 1 wk · design solo, team project · innopolis university and russian post",
    YandexDirectMeta: "role: UX/UI · test task · solo · yandex",
    YokoMatchaMeta: "role: branding + UI · 2 wks · solo · freelance",
    TsarevBarilovaMeta: "role: UX/UI · 2 wks · solo · freelance",
    CroissanStudioMeta: "role: product designer · in-house · croissan studio",
    PostersMeta: "role: graphic design · ongoing · solo · kazan events",
    ConceptsMeta: "role: experiment · — · solo · personal project",
    languagesBlockTitle: "languages",
    langRu: "russian",
    langEn: "english",
    langFr: "french",
    langKo: "korean",
    langEnLevel: "C1+",
    langMapDesc: "Language proficiency map on a scale from 0 to C2.",
  },
};


const designerProjects = [
  {
    id: "pochtatex",
    titleKey: "PochtaTexTitle",
    descKey: "PochtaTexDesc",
    metaKey: "PochtaTexMeta",
    process: {
      problemKey: "PochtaTexProblem",
      solutionKey: "PochtaTexSolution",
      resultKey: "PochtaTexResult",
    },
    toolKeys: ["designerToolFigma"],
    preview: "images/pochtatex/page0.webp",
    url: "https://dropmefiles.com/C07pI",
    urlLabelKey: "designerActionTry",
    images: [
      "images/pochtatex/page1.webp",
      "images/pochtatex/page2.webp",
      "images/pochtatex/page3.webp",
      "images/pochtatex/page4.webp",
      "images/pochtatex/page5.webp",
    ],
  },
  {
    id: "croissan-studio",
    titleKey: "CroissanStudioTitle",
    descKey: "CroissanStudioDesc",
    metaKey: "CroissanStudioMeta",
    process: {
      problemKey: "CroissanStudioProblem",
      solutionKey: "CroissanStudioSolution",
      resultKey: "CroissanStudioResult",
    },
    toolKeys: ["designerToolIllustrator", "designerToolAi", "designerToolFigma"],
    images: [
      "images/croissan/page2.webp",
      "images/croissan/page13.webp",
      "images/croissan/page4.webp",
      "images/croissan/page9.webp",
      "images/croissan/page12.webp",
      "images/croissan/page5.webp",
      "images/croissan/page8.webp",
      "images/croissan/page14.webp",
      "images/croissan/page1.webp",
      "images/croissan/page7.webp",
      "images/croissan/page15.webp",
      "images/croissan/page10.webp",
      "images/croissan/page11.webp",
      "images/croissan/page6.webp",
    ],
  },
  {
    id: "yandex-direct",
    titleKey: "YandexDirectTitle",
    descKey: "YandexDirectDesc",
    metaKey: "YandexDirectMeta",
    process: {
      problemKey: "YandexDirectProblem",
      solutionKey: "YandexDirectSolution",
    },
    toolKeys: ["designerToolFigma"],
    images: [
      "images/yandex/page1.webp",
      "images/yandex/page2.webp",
      "images/yandex/page3.webp",
    ],
  },
  {
    id: "yoko-matcha",
    titleKey: "YokoMatchaTitle",
    descKey: "YokoMatchaDesc",
    metaKey: "YokoMatchaMeta",
    process: {
      problemKey: "YokoMatchaProblem",
      solutionKey: "YokoMatchaSolution",
    },
    toolKeys: ["designerToolFigma", "designerToolAi"],
    images: [
      "images/yokomatcha/page1.webp",
      "images/yokomatcha/page2.webp",
      "images/yokomatcha/page3.webp",
    ],
  },
  {
    id: "tsarev-barilova",
    titleKey: "TsarevBarilovaTitle",
    descKey: "TsarevBarilovaDesc",
    metaKey: "TsarevBarilovaMeta",
    process: {
      problemKey: "TsarevBarilovaProblem",
      solutionKey: "TsarevBarilovaSolution",
      resultKey: "TsarevBarilovaResult",
    },
    toolKeys: ["designerToolTilda", "designerToolFigma"],
    preview: "images/tsarevbarilova/page0.webp",
    images: [
      "images/tsarevbarilova/page1.webp",
      "images/tsarevbarilova/page2.webp",
      "images/tsarevbarilova/page3.webp",
      "images/tsarevbarilova/page4.webp",
      "images/tsarevbarilova/page5.webp",
      "images/tsarevbarilova/page6.webp",
    ],
  },
  {
    id: "posters",
    titleKey: "PostersTitle",
    descKey: "PostersDesc",
    metaKey: "PostersMeta",
    process: {
      problemKey: "PostersProblem",
      solutionKey: "PostersSolution",
      resultKey: "PostersResult",
    },
    toolKeys: ["designerToolIllustrator", "designerToolFigma", "designerToolAi"],
    images: [
      "images/posters/page4.webp",
      "images/posters/page3.webp",
      "images/posters/page8.webp",
      "images/posters/page2.webp",
      "images/posters/page1.webp",
      "images/posters/page6.webp",
      "images/posters/page7.webp",
      "images/posters/page5.webp",
    ],
  },
  {
    id: "concepts",
    titleKey: "ConceptsTitle",
    descKey: "ConceptsDesc",
    metaKey: "ConceptsMeta",
    toolKeys: ["designerToolIllustrator", "designerToolFigma", "designerToolAi"],
    images: [
      "images/concepts/page8.webp",
      "images/concepts/page2.webp",
      "images/concepts/page4.webp",
      "images/concepts/page1.webp",
      "images/concepts/page5.webp",
      "images/concepts/page7.webp",
    ],
  },
];

/** Hidden from the site; assets live in images/_archive/ (gitignored). */
const archivedDesignerProjects = [
  {
    id: "innobooklovers",
    titleKey: "InnoBookLoversTitle",
    descKey: "InnoBookLoversDesc",
    process: {
      problemKey: "InnoBookLoversProblem",
      solutionKey: "InnoBookLoversSolution",
      resultKey: "InnoBookLoversResult",
    },
    toolKeys: ["designerToolFigma"],
    images: [
      "images/_archive/innobooklovers/page1.webp",
      "images/_archive/innobooklovers/page2.webp",
      "images/_archive/innobooklovers/page3.webp",
      "images/_archive/innobooklovers/page4.webp",
    ],
  },
  {
    id: "innomed",
    titleKey: "InnoMedTitle",
    descKey: "InnoMedDesc",
    process: {
      problemKey: "InnoMedProblem",
      solutionKey: "InnoMedSolution",
      resultKey: "InnoMedResult",
    },
    toolKeys: ["designerToolFigma"],
    images: [
      "images/_archive/innomed/page6.webp",
      "images/_archive/innomed/page1.webp",
      "images/_archive/innomed/page2.webp",
      "images/_archive/innomed/page3.webp",
      "images/_archive/innomed/page4.webp",
      "images/_archive/innomed/page5.webp",
      "images/_archive/innomed/page7.webp",
    ],
  },
];

function getDesignerProjectPreview(project) {
  if (project.preview) return project.preview;
  const firstImage = project.images?.[0];
  if (!firstImage) return "";
  return firstImage.replace(/page\d+(\.\w+)$/, "page0$1");
}

const DESIGNER_PAGE_TOOL_KEYS = [
  "designerToolFigma",
  "designerToolIllustrator",
  "designerToolPhotoshop",
  "designerToolTilda",
  "designerToolCanva",
  "designerToolAi",
];

const devProjects = [
  {
    id: "croissan",
    url: "https://croissanstudio.ru",
    preview: "images/croissan/preview.webp",
    titleKey: "FrontendCroissanTitle",
    descKey: "FrontendCroissanDesc",
    toolKeys: [
      "frontendToolHtml",
      "frontendToolCss",
      "frontendToolJs",
      "frontendToolTs",
      "frontendToolReact",
      "frontendToolNext",
      "frontendToolTailwind",
    ],
  },
  {
    id: "macos-timer",
    url: "https://github.com/natagapova/macos-timer/releases/tag/v1.0.0",
    preview: "images/dev/macos-timer.webp",
    titleKey: "DevMacosTimerTitle",
    descKey: "DevMacosTimerDesc",
    toolKeys: ["devToolSwift", "devToolSwiftUI", "devToolMacos"],
  },
  {
    id: "aismena",
    url: "https://aismena.ru",
    preview: "images/aismena/preview.webp",
    titleKey: "FrontendAismenaTitle",
    descKey: "FrontendAismenaDesc",
    toolKeys: ["frontendToolTilda", "frontendToolZeroBlock"],
  },
  {
    id: "cruelgames",
    url: "https://cruelgames-website.vercel.app/",
    preview: "images/cruelgames/preview.webp",
    titleKey: "FrontendCruelTitle",
    descKey: "FrontendCruelDesc",
    toolKeys: ["frontendToolHtml", "frontendToolCss", "frontendToolJs"],
  },
  {
    id: "kingstep",
    preview: "images/tsarevbarilova/page1.webp",
    titleKey: "FrontendKingstepTitle",
    descKey: "FrontendKingstepDesc",
    toolKeys: ["frontendToolFigma", "frontendToolTilda", "frontendToolIllustrator"],
  },
];

const mlProjects = [
  {
    id: "resume-screening",
    url: "https://github.com/natagapova/resume-screening",
    articleUrl: "https://doi.org/10.66693/mathai.1017",
    preview: "images/ml/resume-screening.webp",
    titleKey: "MlResumeScreeningTitle",
    descKey: "MlResumeScreeningDesc",
    toolKeys: [
      "mlToolPython",
      "mlToolPytorch",
      "mlToolBert",
      "mlToolXai",
      "mlToolCaptum",
      "mlToolJupyter",
    ],
  },
  {
    id: "personal-knowledge-system",
    url: "https://github.com/natagapova/personal-knowledge-system",
    preview: "images/pks_portfolio.png",
    titleKey: "MlKnowledgeSystemTitle",
    descKey: "MlKnowledgeSystemDesc",
    toolKeys: ["mlToolPython", "mlToolRag", "mlToolChroma", "mlToolOllama"],
    inDevelopment: true,
  },
];

const PANEL_SCENE = {
  scenePad: 24,
  panelSkew: 5,
  edgeInset: 12,
  panelHeightRatio: 0.42,
  diagonalScale: 0.58,
};

const MOBILE_PROJECT_MAX_WIDTH = 719;

const MOBILE_PANEL_SCENE = {
  edgeInset: 4,
  panelSkew: 3,
  panelTiltX: 55,
  stackStep: 42,
  panelWidthRatio: 0.752,
  maxPanelHeight: 157,
  minPanelHeight: 86,
  bottomPad: 24,
  panelSizeScale: 1.5,
};

function isMobileProjectLayout() {
  return window.matchMedia(`(max-width: ${MOBILE_PROJECT_MAX_WIDTH}px)`).matches;
}

function getProjectStackBounds(stack, scene) {
  if (isMobileProjectLayout()) {
    const sceneWidth = scene?.clientWidth ?? stack.clientWidth;
    const pad = 16;
    return {
      width: Math.max(0, sceneWidth - pad),
      height: Math.max(320, window.innerHeight * 0.55),
    };
  }

  let width = stack.clientWidth;
  let height = stack.clientHeight;

  if ((!width || !height) && scene) {
    const style = getComputedStyle(stack);
    const top = Number.parseFloat(style.top) || 24;
    const right = Number.parseFloat(style.right) || 24;
    const bottom = Number.parseFloat(style.bottom) || 24;
    const left = Number.parseFloat(style.left) || 24;
    width = Math.max(0, scene.clientWidth - left - right);
    height = Math.max(0, scene.clientHeight - top - bottom);
  }

  return { width, height };
}

function createDiagonalAnchors(bounds, panelHeight, lastPanelWidth, edgeInset, diagonalScale) {
  const fullStart = { left: edgeInset, bottom: edgeInset };
  const fullEnd = {
    left: bounds.width - edgeInset - lastPanelWidth,
    bottom: bounds.height - edgeInset - panelHeight,
  };
  const midLeft = (fullStart.left + fullEnd.left) / 2;
  const midBottom = (fullStart.bottom + fullEnd.bottom) / 2;
  const scale = Math.max(0.2, Math.min(1, diagonalScale));

  return {
    start: {
      left: midLeft + (fullStart.left - midLeft) * scale,
      bottom: midBottom + (fullStart.bottom - midBottom) * scale,
    },
    end: {
      left: midLeft + (fullEnd.left - midLeft) * scale,
      bottom: midBottom + (fullEnd.bottom - midBottom) * scale,
    },
  };
}

function interpolateAlongDiagonal(start, end, t) {
  return {
    left: start.left + t * (end.left - start.left),
    bottom: start.bottom + t * (end.bottom - start.bottom),
  };
}

function layoutAnchoredDiagonalFan(bounds, aspects, panelHeight, edgeInset, diagonalScale) {
  const count = aspects.length;
  const lastWidth = panelHeight * aspects[count - 1];
  const anchors = createDiagonalAnchors(
    bounds,
    panelHeight,
    lastWidth,
    edgeInset,
    diagonalScale
  );

  return Array.from({ length: count }, (_, index) => {
    if (index === count - 1) return { ...anchors.end };
    if (index === 0) return { ...anchors.start };
    const t = index / (count - 1);
    return interpolateAlongDiagonal(anchors.start, anchors.end, t);
  });
}

function fanLayoutFits(bounds, aspects, panelHeight, edgeInset, diagonalScale) {
  if (edgeInset * 2 + panelHeight > bounds.height) return false;

  const positions = layoutAnchoredDiagonalFan(
    bounds,
    aspects,
    panelHeight,
    edgeInset,
    diagonalScale
  );

  return positions.every((pos, index) => {
    const width = panelHeight * aspects[index];
    return (
      pos.left >= edgeInset - 0.5 &&
      pos.bottom >= edgeInset - 0.5 &&
      pos.left + width <= bounds.width - edgeInset + 0.5 &&
      pos.bottom + panelHeight <= bounds.height - edgeInset + 0.5
    );
  });
}

function resolvePanelHeight(bounds, aspects, edgeInset, heightRatio, diagonalScale) {
  const maxHeight = bounds.height * heightRatio;
  let lo = 48;
  let hi = maxHeight;

  for (let i = 0; i < 32; i += 1) {
    const mid = (lo + hi) / 2;
    if (fanLayoutFits(bounds, aspects, mid, edgeInset, diagonalScale)) lo = mid;
    else hi = mid;
  }

  return lo;
}

function layoutMobileVerticalStack(bounds, aspects) {
  const {
    edgeInset,
    stackStep,
    panelWidthRatio,
    maxPanelHeight,
    minPanelHeight,
    bottomPad,
    panelSizeScale,
  } = MOBILE_PANEL_SCENE;
  const count = aspects.length;
  const scale = panelSizeScale ?? 1;
  const baseSize = Math.max(
    minPanelHeight,
    Math.min(Math.max(96, bounds.width * panelWidthRatio), maxPanelHeight)
  );
  const panelSize = Math.min(bounds.width, Math.round(baseSize * scale));
  const step = Math.round(stackStep * scale);
  const left = Math.max(edgeInset, (bounds.width - panelSize) / 2);
  const heights = aspects.map(() => panelSize);

  const positions = [];
  let top = edgeInset;
  for (let index = 0; index < count; index += 1) {
    positions.push({ left, top, width: panelSize, height: panelSize });
    top += step;
  }

  const totalHeight =
    positions[count - 1].top + panelSize + edgeInset + Math.round(bottomPad * scale);

  return { positions, heights, totalHeight };
}

let projectStackLayoutFrame = 0;

const innerHtmlKeys = new Set([
  "expCroissan",
  "expAzimov",
  "expClearmind",
  "eduInnopolis",
  "volTrenirovochnaya",
  "volInnostreetdance",
  "MlResumeScreeningDesc",
]);

const translationKeyToId = {
  navBrand: "nav-brand",
  languageSwitch: "languageSwitch",
  portfolioTitle: "projects-title",
  designerPageTitle: "designer-page-title",
  navbarCvLabel: "navbar-cv-label",
  mlPageTitle: "ml-page-title",
  designerToolsLabel: "designer-tools-label",
  roleDesigner: "role-designer",
  roleFrontend: "role-frontend",
  roleML: "role-ml",
  rolePerson: "role-person",
  personTagline: "person-tagline",
  devPageTitle: "dev-page-title",
  rolePagePlaceholder: "role-page-placeholder",
  experienceBlockTitle: "experience-block-title",
  educationBlockTitle: "education-block-title",
  volunteeringBlockTitle: "volunteering-block-title",
  expCroissan: "exp-croissan",
  expAzimov: "exp-azimov",
  expClearmind: "exp-clearmind",
  eduInnopolis: "edu-innopolis",
  myName: "store-name",
  volTrenirovochnaya: "vol-trenirovochnaya",
  volInnostreetdance: "vol-innostreetdance",
  introBlockTitle: "intro-block-title",
  introLead: "intro-lead",
  introStatusLabel: "intro-status-label",
  introStatusValue: "intro-status-value",
  introCta: "intro-cta",
  introTrustLabel: "intro-trust-label",
  introContactPrefix: "intro-contact-prefix",
  languagesBlockTitle: "languages-block-title",
  langRu: "lang-ru-name",
  langEn: "lang-en-name",
  langEnLevel: "lang-en-level",
  langFr: "lang-fr-name",
  langKo: "lang-ko-name",
  langMapDesc: "lang-map-desc",
};

const CV_DOWNLOAD = {
  ru: { href: "docs/nat_designer.pdf", filename: "nat_designer.pdf" },
  en: { href: "docs/nat_designer_en.pdf", filename: "nat_designer_en.pdf" },
};

const SOCIAL_LINKS = [
  {
    id: "telegram",
    href: "https://t.me/nhefy",
    labelKey: "footerSocialTelegram",
    external: true,
    contact: true,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/natalia-agapova-265797406/",
    labelKey: "footerSocialLinkedin",
    external: true,
    contact: true,
  },
  {
    id: "email",
    href: "mailto:agapnatalya004@gmail.com",
    labelKey: "footerSocialEmail",
    external: false,
    contact: true,
  },
  {
    id: "github",
    href: "https://github.com/natagapova",
    labelKey: "footerSocialGithub",
    external: true,
  },
  {
    id: "scholar",
    href: "https://scholar.google.com/citations?user=FqdPM_gAAAAJ&hl=en",
    labelKey: "footerSocialScholar",
    external: true,
  },
];

const TRUSTED_BY = [
  {
    id: "pochta-rossii",
    labelKey: "trustLogoPochtaRossii",
    logo: "images/logos/trusted/pochta-rossii.png",
  },
  {
    id: "innopolis",
    labelKey: "trustLogoInnopolis",
    logoRu: "images/logos/trusted/innopolis-ru.png",
    logoEn: "images/logos/trusted/innopolis-en.png",
  },
  { id: "croissan", labelKey: "trustLogoCroissan", logo: "images/logos/trusted/croissan.png" },
  { id: "litsei", labelKey: "trustLogoLitsei", logo: "images/logos/trusted/litsei-innopolis.png" },
  { id: "art-center", labelKey: "trustLogoArtCenter", logo: "images/logos/trusted/art-center-isi.png" },
  {
    id: "pochtatech",
    labelKey: "trustLogoPochta",
    logoRu: "images/logos/trusted/pochtatech-ru.png",
    logoEn: "images/logos/trusted/pochtatech-en.png",
  },
  { id: "kingstep", labelKey: "trustLogoKingstep", logo: "images/logos/trusted/kingstep.png" },
];

function getTrustedLogoSrc(item, lang) {
  if (lang === "en") {
    return item.logoEn ?? item.logo ?? item.logoRu ?? "";
  }
  return item.logoRu ?? item.logo ?? item.logoEn ?? "";
}

function getSocialIconMarkup(id, iconClass = "footer-social__icon") {
  switch (id) {
    case "telegram":
      return `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.95 4.64a1.2 1.2 0 0 0-1.24-.17L3.5 11.28a1 1 0 0 0 .08 1.86l4.2 1.5 1.58 4.86a1 1 0 0 0 1.62.37l2.2-2.16 4.08 3.02a1.2 1.2 0 0 0 1.9-.74l2.9-14.35ZM9.6 13.9l7.45-4.64-5.8 5.36-.34 3.2-1.31-3.92Z"/></svg>`;
    case "linkedin":
      return `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.5 8.8h3.1v10.7H6.5V8.8Zm1.55-5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM10.2 8.8h2.97v1.46h.04c.41-.78 1.42-1.6 2.92-1.6 3.12 0 3.7 2.05 3.7 4.72v6.1h-3.1v-5.41c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.86v5.5H10.2V8.8Z"/></svg>`;
    case "github":
      return `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.7 1a9.2 9.2 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.5.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z"/></svg>`;
    case "email":
      return `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.93 5.11a3 3 0 0 1-2.87 0L1.5 8.67Z"/><path fill="currentColor" d="M22.5 6.91V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.16l9.71 5.98a1.5 1.5 0 0 0 1.57 0L22.5 6.91Z"/></svg>`;
    case "scholar":
      return `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3 1 9l4.5 2.45V16.5c0 .83.67 1.5 1.5 1.5h3V14h5v4h3c.83 0 1.5-.67 1.5-1.5v-5.05L23 9 12 3zm0 2.18 6.9 3.77-6.9 3.77L5.1 8.95 12 5.18zM6 17.5v-3.36l6 3.27 6-3.27v3.36l-6 3.27-6-3.27z"/></svg>`;
    default:
      return "";
  }
}

function renderFooterSocials(t) {
  const socialEl = document.getElementById("footer-social");
  if (!socialEl) return;

  const label = t.footerSocialLabel ?? "";
  if (label) {
    socialEl.setAttribute("aria-label", label);
  }

  socialEl.innerHTML = SOCIAL_LINKS.map((link) => {
    const ariaLabel = t[link.labelKey] ?? link.id;
    const externalAttrs = link.external
      ? ' target="_blank" rel="noopener noreferrer"'
      : "";

    return `
      <a
        class="footer-social__link"
        id="footer-social-${link.id}"
        href="${escapeHtml(link.href)}"
        aria-label="${escapeHtml(ariaLabel)}"${externalAttrs}
      >
        ${getSocialIconMarkup(link.id)}
      </a>
    `;
  }).join("");
}

function renderIntroTrust(t) {
  const logosEl = document.getElementById("intro-trust-logos");
  if (!logosEl) return;

  logosEl.innerHTML = TRUSTED_BY.map((item) => {
    const label = t[item.labelKey] ?? item.id;
    const logoSrc = getTrustedLogoSrc(item, currentLang);
    if (!logoSrc) return "";

    return `
      <li class="intro-trust__item">
        <img
          class="intro-trust__logo-img intro-trust__logo-img--${escapeHtml(item.id)}"
          src="${escapeHtml(logoSrc)}"
          alt="${escapeHtml(label)}"
          width="120"
          height="28"
          loading="lazy"
          decoding="async"
        />
      </li>
    `;
  }).join("");
}

function renderIntroSocial(t) {
  const socialEl = document.getElementById("intro-social");
  if (!socialEl) return;

  const label = t.introSocialLabel ?? t.footerSocialLabel ?? "";
  if (label) {
    socialEl.setAttribute("aria-label", label);
  }

  socialEl.innerHTML = SOCIAL_LINKS.filter((link) => link.contact).map((link) => {
    const linkLabel = t[link.labelKey] ?? link.id;
    const externalAttrs = link.external
      ? ' target="_blank" rel="noopener noreferrer"'
      : "";

    return `
      <a
        class="btn"
        href="${escapeHtml(link.href)}"
        aria-label="${escapeHtml(linkLabel)}"${externalAttrs}
      >
        ${getSocialIconMarkup(link.id, "btn__icon")}
        <span class="btn__label">${escapeHtml(linkLabel)}</span>
      </a>
    `;
  }).join("");
}

function formatHeroWord(word) {
  if (word.includes("кт")) {
    return word.replace("кт", 'к<span class="hero-letter-gap-kt">т</span>');
  }
  return word;
}

function buildHeroHeadlineHtml(text) {
  const words = text.trim().split(/\s+/);
  const wordSpans = words
    .map((word) => `<span class="hero-word">${formatHeroWord(word)}</span>`)
    .join(" ");
  return `<span class="hero-intro__title-line">${wordSpans}</span>`;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function fillAltTemplate(template, values) {
  return String(template).replace(/\{\{(\w+)\}\}/g, (_, key) => String(values[key] ?? ""));
}

function waitForImage(img) {
  return new Promise((resolve) => {
    if (img.complete && img.naturalWidth > 0) {
      resolve();
      return;
    }
    img.addEventListener("load", () => resolve(), { once: true });
    img.addEventListener("error", () => resolve(), { once: true });
  });
}

const bevelColorCanvas = document.createElement("canvas");
const bevelColorCtx = bevelColorCanvas.getContext("2d", { willReadFrequently: true });

const BEVEL_EDGE_SAMPLES = 28;
const BEVEL_DARKEN = 0.88;
const BEVEL_FALLBACK_RGB = [168, 160, 152];

function rgbCss(r, g, b) {
  return `rgb(${Math.round(r)} ${Math.round(g)} ${Math.round(b)})`;
}

function darkenRgb(rgb, factor = BEVEL_DARKEN) {
  return rgbCss(rgb[0] * factor, rgb[1] * factor, rgb[2] * factor);
}

function readPixel(x, y) {
  try {
    const { data } = bevelColorCtx.getImageData(x, y, 1, 1);
    return data[3] > 20 ? [data[0], data[1], data[2]] : null;
  } catch {
    return null;
  }
}

function readEdgePixel(x, y, fallback = BEVEL_FALLBACK_RGB) {
  return (
    readPixel(x, y) ??
    readPixel(x, Math.min(y + 1, bevelColorCanvas.height - 1)) ??
    readPixel(Math.max(x - 1, 0), y) ??
    fallback
  );
}

function buildLinearGradient(direction, colors) {
  if (!colors.length) return `linear-gradient(${direction}, ${darkenRgb(BEVEL_FALLBACK_RGB)})`;

  const stops = colors.map((rgb, index) => {
    const pct = colors.length === 1 ? 0 : (index / (colors.length - 1)) * 100;
    return `${darkenRgb(rgb)} ${pct}%`;
  });

  return `linear-gradient(${direction}, ${stops.join(", ")})`;
}

function sampleImageEdgeStrips(img) {
  const w = img.naturalWidth;
  const h = img.naturalHeight;
  if (!w || !h) return null;

  const sampleW = Math.min(220, w);
  const sampleH = Math.max(1, Math.round((h / w) * sampleW));
  bevelColorCanvas.width = sampleW;
  bevelColorCanvas.height = sampleH;
  bevelColorCtx.clearRect(0, 0, sampleW, sampleH);
  bevelColorCtx.drawImage(img, 0, 0, sampleW, sampleH);

  const marginX = Math.max(1, Math.floor(sampleW * 0.05));
  const marginY = Math.max(1, Math.floor(sampleH * 0.05));
  const innerW = Math.max(1, sampleW - marginX * 2);
  const innerH = Math.max(1, sampleH - marginY * 2);

  const topColors = [];
  const sideColors = [];

  for (let i = 0; i < BEVEL_EDGE_SAMPLES; i += 1) {
    const t = BEVEL_EDGE_SAMPLES === 1 ? 0 : i / (BEVEL_EDGE_SAMPLES - 1);
    const x = marginX + Math.round(t * innerW);
    const y = marginY + Math.round(t * innerH);
    topColors.push(readEdgePixel(x, 0));
    sideColors.push(readEdgePixel(sampleW - 1, y));
  }

  const cornerRgb = readEdgePixel(sampleW - 1, 0, topColors[topColors.length - 1]);

  return { topColors, sideColors, cornerRgb };
}

function applyPanelBevelColors(panel) {
  try {
    const card = panel.querySelector(".project-panel__card");
    const bevel = panel.querySelector(".project-panel__bevel");
    const img = panel.querySelector(".project-panel__surface");
    if (!card || !bevel || !img) return;

    const sampled = sampleImageEdgeStrips(img);
    if (!sampled) return;

    card.style.setProperty(
      "--bevel-top-gradient",
      buildLinearGradient("90deg", sampled.topColors)
    );
    card.style.setProperty(
      "--bevel-side-gradient",
      buildLinearGradient("180deg", sampled.sideColors)
    );
    card.style.setProperty("--bevel-corner", darkenRgb(sampled.cornerRgb, 0.84));
  } catch {
    /* canvas sampling can fail in some preview contexts */
  }
}

function layoutProjectPanels() {
  const scene = document.getElementById("projects-scene");
  const stack = document.getElementById("projects-stack");
  if (!stack) return;

  const panels = [...stack.querySelectorAll(".project-panel")];
  if (!panels.length) return;

  Promise.all(
    panels.map((panel) => waitForImage(panel.querySelector(".project-panel__surface")))
  ).then(() => {
    const applyLayout = () => {
      const bounds = getProjectStackBounds(stack, scene);
      if (!bounds.width) return false;

      const aspects = panels.map((panel) => {
        const img = panel.querySelector(".project-panel__surface");
        return img.naturalWidth / img.naturalHeight;
      });

      if (isMobileProjectLayout()) {
        const { panelSkew, panelTiltX } = MOBILE_PANEL_SCENE;
        const mobile = layoutMobileVerticalStack(bounds, aspects);

        stack.classList.add("projects-stack--mobile");
        stack.style.height = `${Math.ceil(mobile.totalHeight)}px`;
        stack.style.setProperty("--panel-skew", `${panelSkew}deg`);
        stack.style.setProperty("--panel-tilt-x", `${panelTiltX}deg`);

        if (scene) {
          const stackMarginTop = Number.parseFloat(getComputedStyle(stack).marginTop) || 0;
          scene.style.minHeight = `${Math.ceil(mobile.totalHeight + stackMarginTop + 8)}px`;
        }

        panels.forEach((panel, index) => {
          const positionIndex = panels.length - 1 - index;
          const { left, top, width, height } = mobile.positions[positionIndex];

          panel.style.width = `${width}px`;
          panel.style.height = `${height}px`;
          panel.style.left = `${left}px`;
          panel.style.top = `${top}px`;
          panel.style.removeProperty("bottom");
          panel.style.setProperty("--panel-z", String(positionIndex + 1));
          panel.style.removeProperty("--panel-trap-inset");
          applyPanelBevelColors(panel);
          panel.classList.remove("project-panel--pending");
        });

        ensureMobileCaptionViewportListeners();
        bindMobilePanelCaptionElevation();

        return true;
      }

      stack.classList.remove("projects-stack--mobile");
      stack.style.removeProperty("height");
      stack.style.removeProperty("--panel-tilt-x");
      hideAllMobilePanelPreviews();
      if (scene) {
        scene.style.removeProperty("min-height");
      }

      const { panelSkew, edgeInset, panelHeightRatio, diagonalScale } = PANEL_SCENE;
      if (!bounds.height) return false;

      const panelHeight = resolvePanelHeight(
        bounds,
        aspects,
        edgeInset,
        panelHeightRatio,
        diagonalScale
      );
      const positions = layoutAnchoredDiagonalFan(
        bounds,
        aspects,
        panelHeight,
        edgeInset,
        diagonalScale
      );
      const count = panels.length;

      stack.style.setProperty("--panel-skew", `${panelSkew}deg`);

      panels.forEach((panel, index) => {
        const width = panelHeight * aspects[index];
        const { left, bottom } = positions[index];

        panel.style.width = `${width}px`;
        panel.style.left = `${left}px`;
        panel.style.bottom = `${bottom}px`;
        panel.style.removeProperty("top");
        panel.style.removeProperty("--panel-tilt");
        panel.style.removeProperty("--panel-trap-inset");
        panel.style.removeProperty("--panel-depth-z");
        panel.style.removeProperty("--panel-caption-width");
        panel.style.setProperty("--panel-z", String(count - index));
        applyPanelBevelColors(panel);
        panel.classList.remove("project-panel--pending");
      });

      return true;
    };

    if (!applyLayout()) {
      requestAnimationFrame(() => {
        if (!applyLayout()) {
          requestAnimationFrame(applyLayout);
        }
      });
    }
  });
}

function fitProjectPanelsToViewport() {
  layoutProjectPanels();
}

function layoutDesignerProjectStack() {
  layoutProjectPanels();
}

function scheduleDesignerProjectStackLayout() {
  cancelAnimationFrame(projectStackLayoutFrame);
  projectStackLayoutFrame = requestAnimationFrame(() => {
    layoutDesignerProjectStack();
  });
}

let projectsSceneResizeObserver;

function initProjectsSceneResizeObserver() {
  const scene = document.getElementById("projects-scene");
  if (!scene || !window.ResizeObserver) return;

  projectsSceneResizeObserver?.disconnect();
  projectsSceneResizeObserver = new ResizeObserver(() => {
    scheduleDesignerProjectStackLayout();
  });
  projectsSceneResizeObserver.observe(scene);
}

function getFrontendProjectToolKeys() {
  const seen = new Set();
  const keys = [];
  for (const project of devProjects) {
    for (const key of project.toolKeys ?? []) {
      if (!seen.has(key)) {
        seen.add(key);
        keys.push(key);
      }
    }
  }
  return keys;
}

function renderFrontendCardTools(toolKeys, t) {
  const tools = (toolKeys ?? []).map((key) => t[key]).filter(Boolean);
  if (!tools.length) return "";

  return `
    <div class="frontend-card__tools">
      ${tools.map((label) => `<span class="frontend-card__tool">${escapeHtml(label)}</span>`).join("")}
    </div>
  `;
}

function renderFrontendPreview(project, title) {
  const previewAlt = escapeHtml(
    fillAltTemplate(translations[currentLang].projectPreviewAlt, { title })
  );

  if (project.preview) {
    return `
      <div class="frontend-card__preview" aria-hidden="true">
        <img
          class="frontend-card__image"
          src="${project.preview}"
          alt="${previewAlt}"
          loading="lazy"
          decoding="async"
        />
      </div>
    `;
  }

  if (project.previewMode === "iframe" && project.url) {
    return `
      <div class="frontend-card__preview" aria-hidden="true">
        <iframe
          class="frontend-card__iframe"
          data-src="${escapeHtml(project.url)}"
          title="${escapeHtml(title)}"
          tabindex="-1"
          loading="lazy"
        ></iframe>
      </div>
    `;
  }

  return `<div class="frontend-card__preview frontend-card__preview--empty" aria-hidden="true"></div>`;
}

function initFrontendLazyIframes() {
  const iframes = document.querySelectorAll(".frontend-card__iframe[data-src]");
  if (!iframes.length) return;

  const loadIframe = (iframe) => {
    const src = iframe.dataset.src;
    if (!src) return;
    iframe.removeAttribute("data-src");
    iframe.src = src;
  };

  if (!("IntersectionObserver" in window)) {
    iframes.forEach(loadIframe);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadIframe(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "240px 0px" }
  );

  iframes.forEach((iframe) => observer.observe(iframe));
}

function renderFrontendProjects() {
  const grid = document.getElementById("dev-grid");
  if (!grid) return;

  const t = translations[currentLang];

  grid.innerHTML = devProjects
    .map((project) => {
      const title = t[project.titleKey] ?? "";
      const description = t[project.descKey] ?? "";
      const tools = renderFrontendCardTools(project.toolKeys, t);
      const body = `
        ${renderFrontendPreview(project, title)}
        <div class="frontend-card__body">
          <div class="frontend-card__heading">
            <h2 class="frontend-card__title">${escapeHtml(title)}</h2>
            ${renderInProgressStatus(project, t)}
          </div>
          ${tools}
          ${description ? `<p class="frontend-card__desc">${escapeHtml(description)}</p>` : ""}
        </div>
      `;

      if (project.url && !project.comingSoon) {
        return `
          <a
            class="frontend-card"
            role="listitem"
            href="${escapeHtml(project.url)}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${escapeHtml(title)}"
          >
            ${body}
          </a>
        `;
      }

      return `
        <article class="frontend-card frontend-card--static" role="listitem" aria-label="${escapeHtml(title)}">
          ${body}
        </article>
      `;
    })
    .join("");

  initFrontendLazyIframes();
}

function applyFrontendPage(t) {
  const skillsEl = document.getElementById("dev-skills");
  if (skillsEl) {
    const tags = getFrontendProjectToolKeys()
      .map((key) => t[key])
      .filter(Boolean);

    skillsEl.innerHTML = tags
      .map((label) => `<li class="frontend-page__skill">${escapeHtml(label)}</li>`)
      .join("");
    skillsEl.hidden = tags.length === 0;
  }

  renderFrontendProjects();
}

function getMlProjectToolKeys() {
  const seen = new Set();
  const keys = [];
  for (const project of mlProjects) {
    for (const key of project.toolKeys ?? []) {
      if (!seen.has(key)) {
        seen.add(key);
        keys.push(key);
      }
    }
  }
  return keys;
}

function renderInProgressStatus(project, t) {
  if (!project.inDevelopment) return "";
  return `<span class="ml-card__status">${escapeHtml(t.mlStatusInProgress ?? "")}</span>`;
}

function renderMlCardTools(toolKeys, t) {
  const tools = (toolKeys ?? []).map((key) => t[key]).filter(Boolean);
  if (!tools.length) return "";

  return `
    <div class="ml-card__tools">
      ${tools.map((label) => `<span class="ml-card__tool">${escapeHtml(label)}</span>`).join("")}
    </div>
  `;
}

function renderMlPreview(project, title) {
  const previewAlt = escapeHtml(
    fillAltTemplate(translations[currentLang].projectPreviewAlt, { title })
  );

  if (project.preview) {
    return `
      <div class="ml-card__preview" aria-hidden="true">
        <img
          class="ml-card__image"
          src="${escapeHtml(project.preview)}"
          alt="${previewAlt}"
          loading="lazy"
          decoding="async"
        />
      </div>
    `;
  }

  return `<div class="ml-card__preview ml-card__preview--placeholder" aria-hidden="true"></div>`;
}

function renderMlDescription(project, t) {
  const value = t[project.descKey];
  if (!value) return "";

  if (innerHtmlKeys.has(project.descKey)) {
    return `<div class="ml-card__desc">${value}</div>`;
  }

  return `<p class="ml-card__desc">${escapeHtml(value)}</p>`;
}

function renderMlActions(project, t) {
  const links = [];

  if (project.url) {
    links.push(`
      <a
        class="ml-card__action"
        href="${escapeHtml(project.url)}"
        target="_blank"
        rel="noopener noreferrer"
      >${escapeHtml(t.mlActionGithub ?? "GitHub")}</a>
    `);
  }

  if (project.articleUrl) {
    links.push(`
      <a
        class="ml-card__action ml-card__action--accent"
        href="${escapeHtml(project.articleUrl)}"
        target="_blank"
        rel="noopener noreferrer"
      >${escapeHtml(t.mlActionArticle ?? "paper")}</a>
    `);
  }

  if (!links.length) return "";

  return `<div class="ml-card__actions">${links.join("")}</div>`;
}

function renderMlProjects() {
  const grid = document.getElementById("ml-grid");
  if (!grid) return;

  const t = translations[currentLang];

  grid.innerHTML = mlProjects
    .map((project) => {
      const title = t[project.titleKey] ?? "";
      const tools = renderMlCardTools(project.toolKeys, t);
      const status = renderInProgressStatus(project, t);

      return `
        <article class="ml-card${project.inDevelopment ? " ml-card--in-progress" : ""}" role="listitem" aria-label="${escapeHtml(title)}">
          ${renderMlPreview(project, title)}
          <div class="ml-card__body">
            <div class="ml-card__heading">
              <h2 class="ml-card__title">${escapeHtml(title)}</h2>
              ${status}
            </div>
            ${tools}
            ${renderMlDescription(project, t)}
            ${renderMlActions(project, t)}
          </div>
        </article>
      `;
    })
    .join("");
}

function applyMlPage(t) {
  const skillsEl = document.getElementById("ml-skills");
  if (skillsEl) {
    const tags = getMlProjectToolKeys()
      .map((key) => t[key])
      .filter(Boolean);

    skillsEl.innerHTML = tags
      .map((label) => `<li class="ml-page__skill">${escapeHtml(label)}</li>`)
      .join("");
    skillsEl.hidden = tags.length === 0;
  }

  renderMlProjects();
}

function applyDesignerPage(t) {
  const toolsWrap = document.getElementById("designer-tools-wrap");
  const toolsEl = document.getElementById("designer-tools");
  const toolsLabel = document.getElementById("designer-tools-label");
  if (!toolsEl) return;

  if (toolsWrap && t.designerToolsLabel) {
    toolsWrap.setAttribute("aria-label", t.designerToolsLabel);
  }

  if (toolsLabel && t.designerToolsLabel) {
    toolsLabel.textContent = t.designerToolsLabel;
  }

  const tags = DESIGNER_PAGE_TOOL_KEYS.map((key) => t[key]).filter(Boolean);
  const rows = [];
  for (let i = 0; i < tags.length; i += 2) {
    rows.push(tags.slice(i, i + 2));
  }

  toolsEl.innerHTML = rows
    .filter((row) => row.length)
    .map(
      (row) => `
        <div class="designer-tools__row" role="list">
          ${row.map((label) => `<span class="frontend-page__skill" role="listitem">${escapeHtml(label)}</span>`).join("")}
        </div>
      `
    )
    .join("");
}

function renderDesignerOverlayTools(toolKeys, t) {
  const tools = (toolKeys ?? []).map((key) => t[key]).filter(Boolean);
  if (!tools.length) return "";

  return tools
    .map((label) => `<span class="frontend-page__skill">${escapeHtml(label)}</span>`)
    .join("");
}

function isNdaProcessText(text) {
  return String(text).trim().toUpperCase() === "NDA";
}

function renderProcessStepContent(text) {
  if (isNdaProcessText(text)) {
    return `<span class="project-process__nda">NDA</span>`;
  }

  return `<p class="project-process__text">${escapeHtml(text)}</p>`;
}

function renderDesignerProcess(project, t) {
  const process = project.process;
  if (!process) return "";

  const steps = [
    { label: t.designerProcessProblem, key: process.problemKey },
    { label: t.designerProcessSolution, key: process.solutionKey },
    { label: t.designerProcessResult, key: process.resultKey },
  ]
    .filter((step) => step.label && step.key && t[step.key])
    .map((step) => ({ label: step.label, text: t[step.key] }));

  if (!steps.length) return "";

  const columnsClass =
    steps.length === 2
      ? " project-process__steps--cols-2"
      : steps.length === 1
        ? " project-process__steps--cols-1"
        : "";

  return `
    <section class="project-process">
      <ol class="project-process__steps${columnsClass}">
        ${steps
          .map(
            (step, index) => `
          <li class="project-process__step">
            <span class="project-process__index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
            <div class="project-process__body">
              <p class="project-process__label">${escapeHtml(step.label)}</p>
              ${renderProcessStepContent(step.text)}
            </div>
          </li>
        `
          )
          .join("")}
      </ol>
    </section>
  `;
}

function renderDesignerPanelCaption(project, t) {
  const title = t[project.titleKey] ?? "";
  const description = t[project.descKey] ?? "";
  const linkLabel = project.url ? (t[project.urlLabelKey ?? "designerActionTry"] ?? "") : "";
  const linkHtml =
    project.url && linkLabel
      ? `<a class="project-panel__caption-link" href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(linkLabel)}</a>`
      : "";

  return `
    <div class="project-panel__caption" aria-hidden="true">
      <p class="project-panel__caption-title">${escapeHtml(title)}</p>
      <p class="project-panel__caption-desc">${escapeHtml(description)}</p>
      ${linkHtml}
    </div>
  `;
}

function renderDesignerOverlayActions(project, t) {
  if (!project.url) return "";

  const label = t[project.urlLabelKey ?? "designerActionTry"] ?? "";
  if (!label) return "";

  return `
    <div class="project-overlay__actions">
      <div class="ml-card__actions">
        <a
          class="ml-card__action ml-card__action--accent"
          href="${escapeHtml(project.url)}"
          target="_blank"
          rel="noopener noreferrer"
        >${escapeHtml(label)}</a>
      </div>
    </div>
  `;
}

function renderDesignerProjects() {
  const scene = document.getElementById("projects-scene");
  if (!scene) return;

  const t = translations[currentLang];

  const panelsHtml = designerProjects
    .map((project) => {
      const preview = getDesignerProjectPreview(project);
      if (!preview) return "";

      const title = t[project.titleKey] ?? "";
      const description = t[project.descKey] ?? "";

      return `
        <article
          class="project-panel project-panel--pending"
          tabindex="0"
          data-project-id="${project.id}"
          aria-label="${escapeHtml(title)}"
        >
          <div class="project-panel__stack">
            ${renderDesignerPanelCaption(project, t)}
            <div class="project-panel__card">
              <span class="project-panel__bevel" aria-hidden="true"></span>
              <img
                class="project-panel__surface"
                src="${preview}"
                alt="${escapeHtml(fillAltTemplate(t.projectPreviewAlt, { title }))}"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
          <span class="visually-hidden">${escapeHtml(title)}. ${escapeHtml(description)}</span>
        </article>
      `;
    })
    .join("");

  scene.innerHTML = `<div class="projects-stack" id="projects-stack">${panelsHtml}</div>`;

  const section = document.getElementById("projects-section");
  const titleEl = document.getElementById("designer-page-title");
  if (section && titleEl) {
    section.setAttribute("aria-labelledby", "designer-page-title");
  }

  scheduleDesignerProjectStackLayout();
  bindProjectPanelHandlers();
  initProjectsSceneResizeObserver();
}

let openProjectId = null;

function renderProjectOverlayContent(projectId) {
  const project = designerProjects.find((item) => item.id === projectId);
  const titleEl = document.getElementById("project-overlay-title");
  const statusEl = document.getElementById("project-overlay-status");
  const metaEl = document.getElementById("project-overlay-meta");
  const toolsEl = document.getElementById("project-overlay-tools");
  const descEl = document.getElementById("project-overlay-desc");
  const actionsEl = document.getElementById("project-overlay-actions");
  const processEl = document.getElementById("project-overlay-process");
  const galleryEl = document.getElementById("project-overlay-gallery");
  if (!project || !titleEl || !descEl || !galleryEl) return;

  const t = translations[currentLang];
  const title = t[project.titleKey] ?? "";
  const description = t[project.descKey] ?? "";
  const meta = project.metaKey ? (t[project.metaKey] ?? "") : "";

  titleEl.textContent = title;
  if (statusEl) {
    if (project.inDevelopment) {
      statusEl.textContent = t.mlStatusInProgress ?? "";
      statusEl.hidden = false;
    } else {
      statusEl.hidden = true;
    }
  }
  if (metaEl) {
    metaEl.textContent = meta;
    metaEl.hidden = !meta;
  }
  if (toolsEl) {
    const toolsHtml = renderDesignerOverlayTools(project.toolKeys, t);
    toolsEl.innerHTML = toolsHtml;
    toolsEl.hidden = !toolsHtml;
  }
  descEl.textContent = description;

  if (actionsEl) {
    const actionsHtml = renderDesignerOverlayActions(project, t);
    actionsEl.innerHTML = actionsHtml;
    actionsEl.hidden = !actionsHtml;
  }

  if (processEl) {
    const processHtml = renderDesignerProcess(project, t);
    processEl.innerHTML = processHtml;
    processEl.hidden = !processHtml;
  }

  galleryEl.innerHTML = project.images
    .map(
      (src, index) => {
        const imageAlt = escapeHtml(
          fillAltTemplate(t.projectImageAlt, {
            title,
            current: index + 1,
            total: project.images.length,
          })
        );
        return `
        <button
          type="button"
          class="project-overlay__image-btn"
          data-image-index="${index}"
          aria-label="${escapeHtml(t.projectLightboxOpen ?? "open image")}"
        >
          <img
            class="project-overlay__image"
            src="${src}"
            alt="${imageAlt}"
            loading="${index === 0 ? "eager" : "lazy"}"
            decoding="async"
          />
        </button>
      `;
      }
    )
    .join("");

  observeProjectOverlayGalleryLayout(galleryEl);
}

const PROJECT_GALLERY_DESKTOP_MQ = "(min-width: 641px)";
const PROJECT_GALLERY_MAX_WIDTH = 880;
const PROJECT_GALLERY_TALL_DISPLAY_HEIGHT = 520;
const PROJECT_GALLERY_MIN_IMAGES_FOR_COLUMNS = 2;
let projectGalleryLayoutObserver = null;
let projectGalleryLayoutMediaQuery = null;
let projectGalleryLayoutMediaQueryHandler = null;

function updateProjectOverlayGalleryLayout(galleryEl) {
  if (!galleryEl) return;

  const images = [...galleryEl.querySelectorAll(".project-overlay__image")];
  const canUseTwoColumns =
    window.matchMedia(PROJECT_GALLERY_DESKTOP_MQ).matches &&
    images.length >= PROJECT_GALLERY_MIN_IMAGES_FOR_COLUMNS;

  if (!canUseTwoColumns) {
    galleryEl.classList.remove("project-overlay__gallery--two-columns");
    return;
  }

  let pending = images.length;
  let useTwoColumns = false;

  const finish = () => {
    pending -= 1;
    if (pending === 0) {
      galleryEl.classList.toggle("project-overlay__gallery--two-columns", useTwoColumns);
    }
  };

  const checkImage = (img) => {
    const width = img.naturalWidth;
    const height = img.naturalHeight;

    if (width > 0 && height > 0) {
      const galleryWidth = Math.min(
        PROJECT_GALLERY_MAX_WIDTH,
        galleryEl.clientWidth || PROJECT_GALLERY_MAX_WIDTH
      );
      const displayHeight = height * (galleryWidth / width);
      if (displayHeight > PROJECT_GALLERY_TALL_DISPLAY_HEIGHT) {
        useTwoColumns = true;
      }
    }

    finish();
  };

  images.forEach((img) => {
    if (img.complete && img.naturalWidth > 0) {
      checkImage(img);
      return;
    }

    img.addEventListener("load", () => checkImage(img), { once: true });
    img.addEventListener("error", finish, { once: true });
  });
}

function observeProjectOverlayGalleryLayout(galleryEl) {
  disconnectProjectOverlayGalleryLayout();
  if (!galleryEl) return;

  updateProjectOverlayGalleryLayout(galleryEl);

  projectGalleryLayoutMediaQuery = window.matchMedia(PROJECT_GALLERY_DESKTOP_MQ);
  projectGalleryLayoutMediaQueryHandler = () => {
    updateProjectOverlayGalleryLayout(galleryEl);
  };
  projectGalleryLayoutMediaQuery.addEventListener("change", projectGalleryLayoutMediaQueryHandler);

  if (typeof ResizeObserver === "undefined") return;

  projectGalleryLayoutObserver = new ResizeObserver(() => {
    updateProjectOverlayGalleryLayout(galleryEl);
  });
  projectGalleryLayoutObserver.observe(galleryEl);
}

function disconnectProjectOverlayGalleryLayout() {
  if (projectGalleryLayoutMediaQuery && projectGalleryLayoutMediaQueryHandler) {
    projectGalleryLayoutMediaQuery.removeEventListener("change", projectGalleryLayoutMediaQueryHandler);
  }
  projectGalleryLayoutMediaQuery = null;
  projectGalleryLayoutMediaQueryHandler = null;
  projectGalleryLayoutObserver?.disconnect();
  projectGalleryLayoutObserver = null;
}

let projectLightboxImages = [];
let projectLightboxIndex = 0;
let projectLightboxOpen = false;
let projectLightboxTitle = "";

function renderProjectLightboxImage() {
  const content = document.getElementById("project-lightbox-content");
  const prevBtn = document.getElementById("project-lightbox-prev");
  const nextBtn = document.getElementById("project-lightbox-next");
  if (!content) return;

  const src = projectLightboxImages[projectLightboxIndex];
  const t = translations[currentLang];
  const alt = escapeHtml(
    fillAltTemplate(t.projectImageAlt, {
      title: projectLightboxTitle,
      current: projectLightboxIndex + 1,
      total: projectLightboxImages.length,
    })
  );
  content.innerHTML = src
    ? `<img src="${src}" alt="${alt}">`
    : "";

  const hasMultiple = projectLightboxImages.length > 1;
  if (prevBtn) prevBtn.hidden = !hasMultiple;
  if (nextBtn) nextBtn.hidden = !hasMultiple;
}

function openProjectLightbox(imageIndex) {
  const project = designerProjects.find((item) => item.id === openProjectId);
  const lightbox = document.getElementById("project-lightbox");
  if (!project?.images?.length || !lightbox) return;

  const t = translations[currentLang];
  projectLightboxTitle = t[project.titleKey] ?? "";
  projectLightboxImages = project.images;
  projectLightboxIndex = Math.max(0, Math.min(imageIndex, projectLightboxImages.length - 1));
  projectLightboxOpen = true;
  renderProjectLightboxImage();
  lightbox.hidden = false;
  lightbox.classList.remove("hidden");
}

function closeProjectLightbox() {
  const lightbox = document.getElementById("project-lightbox");
  const content = document.getElementById("project-lightbox-content");
  if (!lightbox) return;

  projectLightboxOpen = false;
  projectLightboxImages = [];
  projectLightboxIndex = 0;
  projectLightboxTitle = "";
  lightbox.classList.add("hidden");
  lightbox.hidden = true;
  if (content) content.innerHTML = "";
}

function stepProjectLightbox(delta) {
  if (!projectLightboxOpen || projectLightboxImages.length < 2) return;
  const count = projectLightboxImages.length;
  projectLightboxIndex = (projectLightboxIndex + delta + count) % count;
  renderProjectLightboxImage();
}

function openProjectOverlay(projectId) {
  const overlay = document.getElementById("project-overlay");
  if (!overlay || !projectId) return;

  openProjectId = projectId;
  renderProjectOverlayContent(projectId);

  overlay.hidden = false;
  document.body.classList.add("is-project-overlay-open");

  const closeBtn = document.getElementById("project-overlay-close");
  closeBtn?.focus({ preventScroll: true });

  const scroll = document.getElementById("project-overlay-scroll");
  if (scroll) scroll.scrollTop = 0;
}

function closeProjectOverlay() {
  const overlay = document.getElementById("project-overlay");
  if (!overlay || overlay.hidden) return;

  disconnectProjectOverlayGalleryLayout();
  closeProjectLightbox();
  overlay.hidden = true;
  openProjectId = null;
  document.body.classList.remove("is-project-overlay-open");
}

const MOBILE_CAPTION_GAP = 4;

function getMobilePanelCaptionMetrics(panel) {
  const stack = panel.querySelector(".project-panel__stack");
  const rect = (stack ?? panel).getBoundingClientRect();

  return {
    centerX: rect.left + rect.width / 2,
    width: rect.width,
    top: rect.top,
  };
}

function positionElevatedMobileCaption(caption, panel) {
  const { centerX, width, top } = getMobilePanelCaptionMetrics(panel);

  caption.classList.add("project-panel__caption--elevated");
  caption.style.left = `${centerX}px`;
  caption.style.right = "auto";
  caption.style.width = `${width}px`;
  caption.style.top = "auto";
  caption.style.bottom = `${window.innerHeight - top + MOBILE_CAPTION_GAP}px`;
  caption.style.transform = "translateX(-50%)";
}

function resetElevatedMobileCaption(caption) {
  caption.classList.remove("project-panel__caption--elevated");
  caption.style.left = "";
  caption.style.right = "";
  caption.style.width = "";
  caption.style.top = "";
  caption.style.bottom = "";
  caption.style.transform = "";
}

function showMobilePanelPreview(panel) {
  const caption = panel.querySelector(".project-panel__caption");
  if (!caption) return;
  panel.classList.add("is-preview-open");
  requestAnimationFrame(() => {
    positionElevatedMobileCaption(caption, panel);
  });
}

function hideMobilePanelPreview(panel) {
  const caption = panel.querySelector(".project-panel__caption");
  panel.classList.remove("is-preview-open");
  if (caption) resetElevatedMobileCaption(caption);
}

function hideAllMobilePanelPreviews() {
  document
    .querySelectorAll(".projects-stack--mobile .project-panel.is-preview-open")
    .forEach((panel) => hideMobilePanelPreview(panel));
}

function bindMobilePanelCaptionElevation() {
  if (!document.getElementById("projects-stack")?.classList.contains("projects-stack--mobile")) {
    return;
  }
  ensureMobileCaptionViewportListeners();
}

function repositionElevatedMobileCaptions() {
  document
    .querySelectorAll(".projects-stack--mobile .project-panel__caption--elevated")
    .forEach((caption) => {
      const panel = caption.closest(".project-panel");
      if (!panel) return;
      positionElevatedMobileCaption(caption, panel);
    });
}

let mobileCaptionViewportListenersBound = false;

function ensureMobileCaptionViewportListeners() {
  if (mobileCaptionViewportListenersBound) return;
  mobileCaptionViewportListenersBound = true;
  document.addEventListener("scroll", repositionElevatedMobileCaptions, {
    passive: true,
    capture: true,
  });
  window.addEventListener("resize", repositionElevatedMobileCaptions, { passive: true });
}

function bindProjectPanelHandlers() {
  const scene = document.getElementById("projects-scene");
  if (!scene || scene.dataset.panelHandlersBound === "true") return;

  scene.dataset.panelHandlersBound = "true";

  scene.addEventListener("click", (event) => {
    const panel = event.target.closest(".project-panel");
    if (!panel?.dataset.projectId) return;

    if (isMobileProjectLayout()) {
      event.stopPropagation();

      if (panel.classList.contains("is-preview-open")) {
        hideMobilePanelPreview(panel);
        openProjectOverlay(panel.dataset.projectId);
        return;
      }

      hideAllMobilePanelPreviews();
      showMobilePanelPreview(panel);
      return;
    }

    openProjectOverlay(panel.dataset.projectId);
  });

  scene.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const panel = event.target.closest(".project-panel");
    if (!panel?.dataset.projectId) return;
    event.preventDefault();

    if (isMobileProjectLayout()) {
      if (panel.classList.contains("is-preview-open")) {
        hideMobilePanelPreview(panel);
        openProjectOverlay(panel.dataset.projectId);
        return;
      }

      hideAllMobilePanelPreviews();
      showMobilePanelPreview(panel);
      return;
    }

    openProjectOverlay(panel.dataset.projectId);
  });

  document.addEventListener("click", (event) => {
    if (!isMobileProjectLayout()) return;
    if (event.target.closest(".projects-stack--mobile .project-panel")) return;
    hideAllMobilePanelPreviews();
  });
}

function initProjectOverlay() {
  const overlay = document.getElementById("project-overlay");
  if (!overlay) return;

  const closeBtn = document.getElementById("project-overlay-close");
  const backdrop = overlay.querySelector(".project-overlay__backdrop");
  const gallery = document.getElementById("project-overlay-gallery");
  const lightbox = document.getElementById("project-lightbox");
  const lightboxClose = document.getElementById("project-lightbox-close");
  const lightboxPrev = document.getElementById("project-lightbox-prev");
  const lightboxNext = document.getElementById("project-lightbox-next");

  closeBtn?.addEventListener("click", closeProjectOverlay);
  backdrop?.addEventListener("click", closeProjectOverlay);

  gallery?.addEventListener("click", (event) => {
    const button = event.target.closest(".project-overlay__image-btn");
    if (!button) return;
    const index = Number.parseInt(button.dataset.imageIndex ?? "", 10);
    if (Number.isNaN(index)) return;
    openProjectLightbox(index);
  });

  lightboxClose?.addEventListener("click", closeProjectLightbox);
  lightboxPrev?.addEventListener("click", () => stepProjectLightbox(-1));
  lightboxNext?.addEventListener("click", () => stepProjectLightbox(1));

  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) closeProjectLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (projectLightboxOpen) {
      if (event.key === "Escape") {
        closeProjectLightbox();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        stepProjectLightbox(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        stepProjectLightbox(1);
      }
      return;
    }

    if (event.key === "Escape" && openProjectId) {
      closeProjectOverlay();
    }
  });
}

const SITE_ORIGIN = "https://www.natagapova.ru";
const SITE_OG_IMAGE = `${SITE_ORIGIN}/images/my-head.png`;

const PAGE_SEO = {
  index: {
    path: "/",
    ru: {
      title: "natalia's portfolio",
      description:
        "Наталья Агапова — product / UX/UI designer. Интерфейсы и визуальные системы для продуктов и брендов. Кейсы для Innopolis, Почты России, Croissan Studio и др.",
    },
    en: {
      title: "natalia's portfolio",
      description:
        "Natalia Agapova — product / UX/UI designer. Interfaces and visual systems for products and brands. Cases for Innopolis, Russian Post, Croissan Studio, and more.",
    },
  },
  designer: {
    path: "/designer.html",
    ru: {
      title: "дизайнер — natalia's portfolio",
      description: "UX/UI и продуктовый дизайн — кейсы Натальи Агаповой.",
    },
    en: {
      title: "designer — natalia's portfolio",
      description: "UX/UI and product design cases by Natalia Agapova.",
    },
  },
  frontend: {
    path: "/dev.html",
    ru: {
      title: "dev — natalia's portfolio",
      description: "Разработка — веб и нативные приложения, проекты Натальи Агаповой.",
    },
    en: {
      title: "dev — natalia's portfolio",
      description: "Development projects by Natalia Agapova — web and native apps.",
    },
  },
  dev: {
    path: "/dev.html",
    ru: {
      title: "dev — natalia's portfolio",
      description: "Разработка — веб и нативные приложения, проекты Натальи Агаповой.",
    },
    en: {
      title: "dev — natalia's portfolio",
      description: "Development projects by Natalia Agapova — web and native apps.",
    },
  },
  ml: {
    path: "/ml.html",
    ru: {
      title: "ML — natalia's portfolio",
      description: "ML-разработка и исследования — портфолио Натальи Агаповой.",
    },
    en: {
      title: "ML — natalia's portfolio",
      description: "ML development and research — Natalia Agapova's portfolio.",
    },
  },
  person: {
    path: "/person.html",
    ru: {
      title: "человек — natalia's portfolio",
      description: "Личные заметки и фото — портфолио Натальи Агаповой.",
    },
    en: {
      title: "person — natalia's portfolio",
      description: "Personal notes and photos — Natalia Agapova's portfolio.",
    },
  },
};

function getCurrentPageSeoKey() {
  const page = window.location.pathname.toLowerCase().split("/").pop() || "index.html";

  if (page === "designer.html") return "designer";
  if (page === "dev.html" || page === "frontend.html") return "dev";
  if (page === "ml.html") return "ml";
  if (page === "person.html") return "person";
  return "index";
}

function upsertHeadMeta(selector, attributes) {
  let el = document.head.querySelector(selector);
  if (!el) {
    const isLink = "href" in attributes;
    el = document.createElement(isLink ? "link" : "meta");
    document.head.appendChild(el);
  }
  Object.entries(attributes).forEach(([name, value]) => {
    el.setAttribute(name, value);
  });
}

function updatePageSeo(lang) {
  const pageKey = getCurrentPageSeoKey();
  const seo = PAGE_SEO[pageKey]?.[lang];
  const shareSeo = PAGE_SEO[pageKey]?.en;
  if (!seo || !shareSeo) return;

  const pagePath = PAGE_SEO[pageKey].path;
  const canonicalUrl = `${SITE_ORIGIN}${pagePath === "/" ? "/" : pagePath}`;

  document.title = seo.title;

  upsertHeadMeta('meta[name="description"]', { name: "description", content: seo.description });
  upsertHeadMeta('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });

  [
    ["property", "og:type", "website"],
    ["property", "og:site_name", "natalia's portfolio"],
    ["property", "og:url", canonicalUrl],
    ["property", "og:title", shareSeo.title],
    ["property", "og:description", shareSeo.description],
    ["property", "og:image", SITE_OG_IMAGE],
    ["property", "og:locale", "en_US"],
    ["property", "og:locale:alternate", "ru_RU"],
    ["name", "twitter:card", "summary_large_image"],
    ["name", "twitter:title", shareSeo.title],
    ["name", "twitter:description", shareSeo.description],
    ["name", "twitter:image", SITE_OG_IMAGE],
  ].forEach(([attr, key, value]) => {
    upsertHeadMeta(`meta[${attr}="${key}"]`, { [attr]: key, content: value });
  });
}

function applyTranslations() {
  const t = translations[currentLang];
  document.documentElement.lang = currentLang === "ru" ? "ru" : "en";
  updatePageSeo(currentLang);

  for (const [key, id] of Object.entries(translationKeyToId)) {
    const el = document.getElementById(id);
    if (!el) continue;
    const value = t[key];
    if (value === undefined) continue;
    if (key === "myName") {
      el.innerHTML = buildHeroHeadlineHtml(value);
    } else if (innerHtmlKeys.has(key)) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  }

  const btn = document.getElementById("languageSwitch");
  if (btn) {
    btn.textContent = t.languageSwitch;
    btn.setAttribute(
      "aria-label",
      currentLang === "ru"
        ? "Switch interface language to English"
        : "Переключить интерфейс на русский"
    );
  }

  const cvLink = document.getElementById("navbar-cv-download");
  const cvFile = CV_DOWNLOAD[currentLang] ?? CV_DOWNLOAD.en;
  if (cvLink) {
    cvLink.href = cvFile.href;
    cvLink.download = cvFile.filename;
    if (t.navbarCvAria) {
      cvLink.setAttribute("aria-label", t.navbarCvAria);
    }
  }

  const heroExperience = document.getElementById("hero-experience");
  if (heroExperience && t.heroExperienceLabel) {
    heroExperience.setAttribute("aria-label", t.heroExperienceLabel);
  }

  const rolesNav = document.querySelector(".roles-nav--hero");
  if (rolesNav && t.rolesNavLabel) {
    rolesNav.setAttribute("aria-label", t.rolesNavLabel);
  }

  const heroPhoto = document.querySelector(".hero-intro__photo--open");
  if (heroPhoto && t.heroPhotoAlt) {
    heroPhoto.alt = t.heroPhotoAlt;
  }

  if (typeof updatePersonGalleryAlts === "function") {
    updatePersonGalleryAlts();
  }

  const backHome = document.getElementById("back-home");
  if (backHome && t.backHome) {
    backHome.setAttribute("aria-label", t.backHome);
  }

  const rolePageTitle = document.getElementById("role-page-title");
  if (rolePageTitle) {
    const roleTitleByPage = {
      dev: t.roleFrontend,
      ml: t.roleML,
      designer: t.roleDesigner,
      person: t.rolePerson,
    };
    const pageKey = getCurrentPageSeoKey();
    if (roleTitleByPage[pageKey]) {
      rolePageTitle.textContent = roleTitleByPage[pageKey];
    }
  }

  const personPageTitle = document.getElementById("person-page-title");
  if (personPageTitle) {
    personPageTitle.textContent = t.rolePerson;
  }

  applyDesignerPage(t);
  applyFrontendPage(t);
  applyMlPage(t);
  renderFooterSocials(t);
  renderIntroTrust(t);
  renderIntroSocial(t);

  if (document.getElementById("projects-scene")) {
    renderDesignerProjects();
  }

  if (document.getElementById("hero-experience")) {
    scheduleHeroLayoutFit();
  }

  if (openProjectId) {
    renderProjectOverlayContent(openProjectId);
  }

  if (projectLightboxOpen && openProjectId) {
    const project = designerProjects.find((item) => item.id === openProjectId);
    if (project) {
      projectLightboxTitle = t[project.titleKey] ?? "";
      renderProjectLightboxImage();
    }
  }

  const closeBtn = document.getElementById("project-overlay-close");
  const backdrop = document.querySelector(".project-overlay__backdrop");
  if (closeBtn && t.closeProject) {
    closeBtn.setAttribute("aria-label", t.closeProject);
  }
  if (backdrop && t.closeProject) {
    backdrop.setAttribute("aria-label", t.closeProject);
  }

  const projectLightboxClose = document.getElementById("project-lightbox-close");
  const projectLightboxPrev = document.getElementById("project-lightbox-prev");
  const projectLightboxNext = document.getElementById("project-lightbox-next");
  if (projectLightboxClose && t.closeProject) {
    projectLightboxClose.setAttribute("aria-label", t.closeProject);
  }
  if (projectLightboxPrev && t.projectLightboxPrev) {
    projectLightboxPrev.setAttribute("aria-label", t.projectLightboxPrev);
  }
  if (projectLightboxNext && t.projectLightboxNext) {
    projectLightboxNext.setAttribute("aria-label", t.projectLightboxNext);
  }
}

const HERO_PHOTO_ASPECT = 2392 / 3503;
const HERO_PHOTO_CLOSED_ASPECT = 832 / 1248;
const HERO_BLINK_PHOTO_TUNE = 0.987;
const HERO_PHOTO_BOTTOM_GAP = 12;

function syncBlinkPhotoScale(photoWrap) {
  const open = photoWrap.querySelector(".hero-intro__photo--open");
  if (!open?.offsetWidth || !open.offsetHeight) return;

  const w = open.offsetWidth;
  const h = open.offsetHeight;
  const boxAspect = w / h;
  let scale = 1;

  if (HERO_PHOTO_CLOSED_ASPECT <= boxAspect) {
    scale = w / (h * HERO_PHOTO_CLOSED_ASPECT);
  } else {
    scale = h / (w / HERO_PHOTO_CLOSED_ASPECT);
  }

  photoWrap.style.setProperty("--hero-blink-photo-scale", String(scale * HERO_BLINK_PHOTO_TUNE));
}

function fitHeroPhoto() {
  const hero = document.querySelector(".hero-intro");
  const stage = hero?.querySelector(".hero-intro__stage");
  const heading = document.getElementById("store-name");
  const line = heading?.querySelector(".hero-intro__title-line");
  const photoWrap = document.getElementById("hero-photo-wrap");
  if (!hero || !stage || !heading || !line || !photoWrap) return;

  const heroStyle = getComputedStyle(hero);
  const paddingBottom = parseFloat(heroStyle.paddingBottom) || 0;
  const overlap = parseFloat(heroStyle.getPropertyValue("--hero-overlap")) || 0.52;
  const lift = parseFloat(heroStyle.getPropertyValue("--hero-photo-lift")) || 0;

  const heroRect = hero.getBoundingClientRect();
  const headingRect = heading.getBoundingClientRect();
  const titleHeight = line.offsetHeight;
  if (heroRect.height <= 0 || stage.clientWidth <= 0) return;

  const targetBottom = heroRect.bottom - paddingBottom - HERO_PHOTO_BOTTOM_GAP;
  const photoTop = headingRect.bottom - titleHeight * overlap - 12 - lift;
  let availableHeight = targetBottom - photoTop;
  if (availableHeight < 96) availableHeight = 96;

  const maxWidth = stage.clientWidth;
  let height = availableHeight;
  let width = height * HERO_PHOTO_ASPECT;
  if (width > maxWidth) {
    width = maxWidth;
    height = width / HERO_PHOTO_ASPECT;
  }

  photoWrap.style.setProperty("--hero-photo-width", `${Math.round(width)}px`);
  photoWrap.style.setProperty("--hero-photo-max-height", `${Math.round(availableHeight)}px`);
  syncBlinkPhotoScale(photoWrap);
}

async function fitHeroHeadline() {
  const heading = document.getElementById("store-name");
  const line = heading?.querySelector(".hero-intro__title-line");
  const hero = document.querySelector(".hero-intro");
  const stage = hero?.querySelector(".hero-intro__stage");
  if (!heading || !line) return;

  const available = heading.clientWidth;
  if (available <= 0) return;

  const heroStyle = hero ? getComputedStyle(hero) : null;
  const headlineMinRatio = heroStyle
    ? parseFloat(heroStyle.getPropertyValue("--hero-headline-min-ratio")) || 0
    : 0;
  const isLargeMonitor = window.matchMedia("(min-width: 1600px) and (min-height: 880px)").matches;
  const useHeadlineBoost = isLargeMonitor && headlineMinRatio > 0;

  try {
    await document.fonts.load('1em "Theater Bold"');
  } catch {
    /* ignore */
  }

  line.style.fontSize = "16px";
  let lo = 16;
  let hi = useHeadlineBoost ? 720 : 600;

  const maxWidth = available - 6;

  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    line.style.fontSize = `${mid}px`;
    if (line.scrollWidth > maxWidth) {
      hi = mid - 1;
    } else {
      lo = mid;
    }
  }

  let fontSize = lo;

  if (useHeadlineBoost && stage) {
    const maxTextWidth = window.innerWidth - 40;
    const maxTitleHeight = Math.round(stage.clientHeight * 0.5);
    const targetFont = Math.round(stage.clientWidth * headlineMinRatio * 0.58);
    fontSize = Math.max(lo, Math.min(targetFont, hi));
    line.style.fontSize = `${fontSize}px`;

    while (fontSize > lo && (line.scrollWidth > maxTextWidth || line.offsetHeight > maxTitleHeight)) {
      fontSize -= 2;
      line.style.fontSize = `${fontSize}px`;
    }
  }

  line.style.fontSize = `${fontSize}px`;
  heading.style.setProperty("--hero-title-size", `${line.offsetHeight}px`);
  fitHeroPhoto();
  rolesScrollMetrics = null;
  scheduleRolesScrollReveal();
}

let heroFitFrame;
function scheduleHeroLayoutFit() {
  cancelAnimationFrame(heroFitFrame);
  heroFitFrame = requestAnimationFrame(() => {
    void fitHeroHeadline();
    scheduleLangMapPath();
    rolesScrollMetrics = null;
    scheduleRolesScrollReveal();
  });
}

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

function clamp01(value) {
  return Math.min(Math.max(value, 0), 1);
}

const HEAD_SPAWN_Y = 0.54;
const MIN_HERO_PHOTO_READY_H = 96;

const roleSpawnOffsets = [
  { className: "role-card--designer", x: -0.1, y: 0.02 },
  { className: "role-card--frontend", x: 0.1, y: 0.02 },
  { className: "role-card--ml", x: -0.08, y: 0.04 },
  { className: "role-card--person", x: 0.08, y: 0.04 },
];

let rolesScrollMetrics = null;
let rolesScrollRaf = 0;
let rolesScrollWasActive = false;

function getRoleSpawnOffset(card, index) {
  return (
    roleSpawnOffsets.find((entry) => card.classList.contains(entry.className)) ??
    roleSpawnOffsets[index] ??
    roleSpawnOffsets[0]
  );
}

function getHeadSpawnPoint(photoRect, offsetX, offsetY) {
  return {
    x: photoRect.left + photoRect.width * (0.5 + offsetX),
    y: photoRect.top + photoRect.height * (HEAD_SPAWN_Y + offsetY),
  };
}

function applyRoleCardSpawnState(card, photoRect, metric, rotate) {
  const { baseX, baseY, offsetX, offsetY } = metric;
  const spawn = getHeadSpawnPoint(photoRect, offsetX, offsetY);

  card.classList.add("role-card--scroll-anim");
  card.classList.remove("role-card--scroll-settled");
  card.style.zIndex = "2";
  card.style.transformOrigin = "";
  card.style.transform = `translate(${spawn.x - baseX}px, ${spawn.y - baseY}px) rotate(${rotate}) scale(0.88)`;
  card.style.opacity = "0";
}

function measureRolesScroll() {
  const photoWrap = document.getElementById("hero-photo-wrap");
  const cards = [...document.querySelectorAll(".roles-nav .role-card")];
  if (!photoWrap || !cards.length) return null;

  const photoRect = photoWrap.getBoundingClientRect();
  if (photoRect.height < MIN_HERO_PHOTO_READY_H || photoRect.width < 40) return null;

  cards.forEach((card) => {
    card.style.transform = "";
    card.style.opacity = "";
    card.style.zIndex = "";
    card.style.transformOrigin = "";
    card.classList.remove("role-card--scroll-anim", "role-card--scroll-settled");
  });

  void photoWrap.offsetHeight;

  return cards.map((card, index) => {
    const settledRect = card.getBoundingClientRect();
    const restX = settledRect.left + settledRect.width / 2;
    const restY = settledRect.top + settledRect.height / 2;

    card.classList.add("role-card--scroll-anim");
    void card.offsetHeight;
    const baseRect = card.getBoundingClientRect();
    card.classList.remove("role-card--scroll-anim");

    const offset = getRoleSpawnOffset(card, index);

    return {
      card,
      index,
      restX,
      restY,
      baseX: baseRect.left + baseRect.width / 2,
      baseY: baseRect.top + baseRect.height / 2,
      nudgeX: restX - (baseRect.left + baseRect.width / 2),
      nudgeY: restY - (baseRect.top + baseRect.height / 2),
      offsetX: offset.x,
      offsetY: offset.y,
    };
  });
}

function getHeroScrollState() {
  const track = document.getElementById("hero-experience-track");
  if (!track) {
    return { progress: 0, released: false };
  }

  const trackH = track.offsetHeight;
  if (trackH <= 0) {
    return { progress: 0, released: false };
  }

  const progress = clamp01(window.scrollY / trackH);
  const released = window.scrollY >= trackH - 1;

  return { progress, released };
}

function rolesScrollProgress() {
  return getHeroScrollState().progress;
}

let heroPinWasReleased = false;

function updateHeroPinRelease() {
  const experience = document.getElementById("hero-experience");
  if (!experience) return;

  const { released } = getHeroScrollState();
  experience.classList.toggle("is-released", released);
  experience.classList.toggle("is-pinned", !released);

  if (released !== heroPinWasReleased) {
    heroPinWasReleased = released;
    rolesScrollMetrics = null;
  }
}

function updateRolesScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  updateHeroPinRelease();

  const photoWrap = document.getElementById("hero-photo-wrap");
  if (!photoWrap) return;

  const photoRect = photoWrap.getBoundingClientRect();
  if (photoRect.height < MIN_HERO_PHOTO_READY_H) {
    rolesScrollMetrics = null;
    scheduleRolesScrollReveal();
    return;
  }

  if (!rolesScrollMetrics) {
    rolesScrollMetrics = measureRolesScroll();
    if (!rolesScrollMetrics) {
      scheduleRolesScrollReveal();
      return;
    }
  }

  const progress = rolesScrollProgress();
  const settled = progress >= 0.995;
  const cardCount = rolesScrollMetrics.length;
  const staggerStep = cardCount > 3 ? 0.055 : 0.07;

  if (progress <= 0) {
    rolesScrollWasActive = false;
    rolesScrollMetrics.forEach((metric) => {
      const rotate =
        getComputedStyle(metric.card).getPropertyValue("--role-rotate").trim() || "0deg";
      applyRoleCardSpawnState(metric.card, photoRect, metric, rotate);
    });
    return;
  }

  if (progress > 0.04) {
    rolesScrollWasActive = true;
  }

  rolesScrollMetrics.forEach((metric) => {
    const { card, index, baseX, baseY, nudgeX, nudgeY, offsetX, offsetY } = metric;
    const rotate =
      getComputedStyle(card).getPropertyValue("--role-rotate").trim() || "0deg";

    card.classList.add("role-card--scroll-anim");
    card.classList.toggle("role-card--scroll-settled", settled);

    if (settled) {
      card.style.transform = `translate(${nudgeX}px, ${nudgeY}px) rotate(${rotate})`;
      card.style.opacity = "1";
      card.style.zIndex = "";
      card.style.transformOrigin = "";
      return;
    }

    const spawn = getHeadSpawnPoint(photoRect, offsetX, offsetY);
    const startX = spawn.x - baseX;
    const startY = spawn.y - baseY;

    const stagger = index * staggerStep;
    const localP = clamp01((progress - stagger) / (1 - stagger * 0.75));
    const moveEased = easeOutCubic(localP);
    const tx = startX + (nudgeX - startX) * moveEased;
    const ty = startY + (nudgeY - startY) * moveEased;
    const scale = 0.88 + moveEased * 0.12;
    const fade = easeOutCubic(clamp01((moveEased - 0.04) / 0.96));

    card.style.zIndex = "2";
    card.style.transformOrigin = "";
    card.style.transform = `translate(${tx}px, ${ty}px) rotate(${rotate}) scale(${scale})`;
    card.style.opacity = fade <= 0 ? "0" : String(fade);
  });
}

function scheduleRolesScrollReveal() {
  cancelAnimationFrame(rolesScrollRaf);
  rolesScrollRaf = requestAnimationFrame(updateRolesScroll);
}

function initRolesScrollReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!document.getElementById("hero-experience")) return;

  rolesScrollMetrics = null;
  heroPinWasReleased = false;
  updateHeroPinRelease();
  scheduleRolesScrollReveal();

  window.addEventListener("scroll", scheduleRolesScrollReveal, { passive: true });
  window.addEventListener(
    "resize",
    () => {
      rolesScrollMetrics = null;
      scheduleRolesScrollReveal();
    },
    { passive: true }
  );
}

function switchLanguage() {
  currentLang = currentLang === "ru" ? "en" : "ru";
  try {
    localStorage.setItem("portfolioLang", currentLang);
  } catch {
    /* ignore */
  }
  applyTranslations();
}

const langBtn = document.getElementById("languageSwitch");
if (langBtn) {
  langBtn.setAttribute("aria-label", "Switch interface language to English");
  langBtn.addEventListener("click", switchLanguage);
}

function initHeroBlink() {
  const wrap = document.getElementById("hero-photo-wrap");
  if (!wrap) return;

  const closedImg = wrap.querySelector(".hero-intro__photo--closed");
  if (closedImg) {
    const preload = new Image();
    preload.src = closedImg.currentSrc || closedImg.src;
  }

  let blinkTimer;

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function randomPauseMs() {
    const roll = Math.random();
    if (roll < 0.12) return randomBetween(4200, 6000);
    if (roll < 0.38) return randomBetween(2400, 4800);
    if (roll < 0.68) return randomBetween(1200, 2600);
    if (roll < 0.88) return randomBetween(550, 1400);
    return randomBetween(350, 750);
  }

  function runBlink(extraBlinksAfter = 0, { allowBurst = true } = {}) {
    const blinkMs = 170;
    wrap.classList.add("is-blinking");
    blinkTimer = window.setTimeout(() => {
      wrap.classList.remove("is-blinking");

      if (extraBlinksAfter > 0) {
        blinkTimer = window.setTimeout(
          () => runBlink(extraBlinksAfter - 1),
          randomBetween(280, 520)
        );
        return;
      }

      if (!allowBurst) {
        scheduleBlink();
        return;
      }

      const burstRoll = Math.random();
      if (burstRoll < 0.07) {
        blinkTimer = window.setTimeout(
          () => runBlink(1),
          randomBetween(260, 480)
        );
        return;
      }
      if (burstRoll < 0.09) {
        blinkTimer = window.setTimeout(
          () => runBlink(2),
          randomBetween(300, 520)
        );
        return;
      }

      scheduleBlink();
    }, blinkMs);
  }

  function scheduleBlink() {
    blinkTimer = window.setTimeout(runBlink, randomPauseMs());
  }

  blinkTimer = window.setTimeout(
    () => runBlink(0, { allowBurst: false }),
    randomBetween(900, 1200)
  );

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.clearTimeout(blinkTimer);
      wrap.classList.remove("is-blinking");
    } else {
      scheduleBlink();
    }
  });
}

let langMapPathSampler;

const langGlowPaletteDefault = {
  main: "72, 168, 255",
  soft: "100, 190, 255",
  accent: "255, 148, 108",
};

let langGlowPalette = { ...langGlowPaletteDefault };
let langGlowBlur = { outer: 8, inner: 10 };
let langGlowOpacity = 0.7;

function readLangGlowPalette() {
  const section = document.querySelector(".languages-section");
  if (!section) return;

  const styles = getComputedStyle(section);
  langGlowPalette = {
    main:
      styles.getPropertyValue("--lang-glow-rgb").trim() ||
      langGlowPaletteDefault.main,
    soft:
      styles.getPropertyValue("--lang-glow-soft-rgb").trim() ||
      langGlowPaletteDefault.soft,
    accent:
      styles.getPropertyValue("--lang-glow-accent-rgb").trim() ||
      langGlowPaletteDefault.accent,
  };

  const outerBlur = parseFloat(styles.getPropertyValue("--lang-glow-blur-outer"));
  const innerBlur = parseFloat(styles.getPropertyValue("--lang-glow-blur-inner"));
  langGlowBlur = {
    outer: Number.isFinite(outerBlur) ? outerBlur : 8,
    inner: Number.isFinite(innerBlur) ? innerBlur : 10,
  };

  const opacity = parseFloat(styles.getPropertyValue("--lang-glow-opacity"));
  langGlowOpacity = Number.isFinite(opacity) ? opacity : 0.7;
}

function getLangGlowLineMetrics() {
  const section = document.querySelector(".languages-section");
  const styles = section ? getComputedStyle(section) : null;
  const readMetric = (name, fallback) => {
    const value = parseFloat(styles?.getPropertyValue(name));
    return Number.isFinite(value) ? value : fallback;
  };

  return {
    minWidth: readMetric("--lang-glow-line-min", 3.4),
    maxWidth: readMetric("--lang-glow-line-max", 34),
    reachPx: readMetric("--lang-glow-line-reach", 50),
  };
}

function glowRgba(channel, alpha) {
  return `rgba(${channel}, ${alpha})`;
}

function smoothPathThroughPoints(points, smoothness = 0.82) {
  if (points.length < 2) return "";
  if (points.length === 2) {
    const [a, b] = points;
    const cx = (a.x + b.x) / 2;
    const cy = (a.y + b.y) / 2 - (b.x - a.x) * 0.08;
    return `M ${a.x.toFixed(2)} ${a.y.toFixed(2)} Q ${cx.toFixed(2)} ${cy.toFixed(2)}, ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
  }

  const tension = smoothness / 3;
  let d = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;

  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[Math.max(i - 1, 0)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(i + 2, points.length - 1)];
    const cp1x = p1.x + (p2.x - p0.x) * tension;
    const cp1y = p1.y + (p2.y - p0.y) * tension;
    const cp2x = p2.x - (p3.x - p1.x) * tension;
    const cp2y = p2.y - (p3.y - p1.y) * tension;
    d += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }

  return d;
}

function getLangMapPathSampler() {
  if (langMapPathSampler) return langMapPathSampler;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");
  svg.style.position = "absolute";
  svg.style.overflow = "hidden";
  svg.style.visibility = "hidden";
  langMapPathSampler = document.createElementNS("http://www.w3.org/2000/svg", "path");
  svg.appendChild(langMapPathSampler);
  document.body.appendChild(svg);
  return langMapPathSampler;
}

function samplePathD(pathD, sampleCount = 160) {
  const path = getLangMapPathSampler();
  path.setAttribute("d", pathD);
  const length = path.getTotalLength();
  if (!length) return [];

  const samples = [];
  for (let i = 0; i <= sampleCount; i += 1) {
    const point = path.getPointAtLength((length * i) / sampleCount);
    samples.push({ x: point.x, y: point.y });
  }
  return samples;
}

function glowWidthAt(point, anchors, minWidth, maxWidth, reachPx) {
  let width = minWidth;
  const sigma2 = reachPx * reachPx;

  anchors.forEach((anchor) => {
    const dx = point.x - anchor.x;
    const dy = point.y - anchor.y;
    const dist2 = dx * dx + dy * dy;
    const gaussian = Math.exp(-dist2 / (2 * sigma2));
    const localized = Math.sqrt(gaussian);
    width = Math.max(width, minWidth + (maxWidth - minWidth) * localized);
  });

  return width;
}

const LANG_LINE_OPACITY = 0.7;
const LANG_LINE_BLUR_SCALE = 1.5;

function getLangGlowCanvasPad() {
  readLangGlowPalette();
  const lineBlurOuter = langGlowBlur.outer * LANG_LINE_BLUR_SCALE;
  const lineBlurInner = langGlowBlur.inner * LANG_LINE_BLUR_SCALE;
  return Math.ceil(Math.max(langGlowBlur.outer, langGlowBlur.inner, lineBlurOuter, lineBlurInner) * 3);
}

let langMapLayerCanvas;

function getLangMapLayerCanvas(width, height, dpr) {
  if (!langMapLayerCanvas) {
    langMapLayerCanvas = document.createElement("canvas");
  }

  langMapLayerCanvas.width = Math.round(width * dpr);
  langMapLayerCanvas.height = Math.round(height * dpr);
  return langMapLayerCanvas;
}

function drawLangMapGlow(canvas, samples, anchors) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  readLangGlowPalette();

  const dpr = window.devicePixelRatio || 1;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const { minWidth, maxWidth, reachPx } = getLangGlowLineMetrics();

  const passes = [
    {
      color: langGlowPalette.main,
      weight: 0.58,
      widthScale: 0.88,
      blur: langGlowBlur.outer * LANG_LINE_BLUR_SCALE,
      rings: [
        { widthMult: 1, alphaMult: 0.3125 },
        { widthMult: 0.72, alphaMult: 0.625 },
        { widthMult: 0.44, alphaMult: 1 },
      ],
    },
    {
      color: langGlowPalette.soft,
      weight: 0.42,
      widthScale: 0.62,
      blur: langGlowBlur.inner * LANG_LINE_BLUR_SCALE,
      rings: [
        { widthMult: 1, alphaMult: 0.5 },
        { widthMult: 0.68, alphaMult: 1 },
      ],
    },
  ];

  ctx.globalCompositeOperation = "source-over";

  passes.forEach((pass) => {
    const layer = getLangMapLayerCanvas(width, height, dpr);
    const layerCtx = layer.getContext("2d");
    if (!layerCtx) return;

    layerCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    layerCtx.clearRect(0, 0, width, height);
    layerCtx.lineCap = "round";
    layerCtx.lineJoin = "round";
    layerCtx.globalCompositeOperation = "source-over";

    for (let i = 0; i < samples.length - 1; i += 1) {
      const p1 = samples[i];
      const p2 = samples[i + 1];
      const baseWidth =
        ((glowWidthAt(p1, anchors, minWidth, maxWidth, reachPx) +
          glowWidthAt(p2, anchors, minWidth, maxWidth, reachPx)) /
          2) *
        pass.widthScale;

      pass.rings.forEach((ring) => {
        layerCtx.beginPath();
        layerCtx.moveTo(p1.x, p1.y);
        layerCtx.lineTo(p2.x, p2.y);
        layerCtx.strokeStyle = glowRgba(pass.color, langGlowOpacity * ring.alphaMult);
        layerCtx.lineWidth = baseWidth * ring.widthMult;
        layerCtx.stroke();
      });
    }

    ctx.globalAlpha = LANG_LINE_OPACITY * pass.weight;
    ctx.filter = `blur(${pass.blur}px)`;
    ctx.drawImage(layer, 0, 0, width, height);
    ctx.filter = "none";
    ctx.globalAlpha = 1;
  });
}

function syncLangMapGlowFrame() {
  const map = document.getElementById("lang-map");
  const rows = map?.querySelector(".lang-map__rows");
  const glow = document.getElementById("lang-map-glow");
  if (!map || !rows || !glow) return null;

  const mapRect = map.getBoundingClientRect();
  const rowsRect = rows.getBoundingClientRect();
  const pad = getLangGlowCanvasPad();

  glow.style.top = `${rowsRect.top - mapRect.top - pad}px`;
  glow.style.left = `${rowsRect.left - mapRect.left - pad}px`;
  glow.style.width = `${rowsRect.width + pad * 2}px`;
  glow.style.height = `${rowsRect.height + pad * 2}px`;

  return {
    left: rowsRect.left,
    top: rowsRect.top,
    width: rowsRect.width,
    height: rowsRect.height,
    pad,
  };
}

function updateLangMapPath() {
  const map = document.getElementById("lang-map");
  const canvas = document.getElementById("lang-map-canvas");
  if (!map || !canvas) return;

  const frameRect = syncLangMapGlowFrame();
  if (!frameRect || frameRect.width <= 0 || frameRect.height <= 0) return;

  const anchors = [];
  map.querySelectorAll(".lang-map__row").forEach((row) => {
    const dot = row.querySelector(".lang-map__anchor--active");
    if (!dot) return;
    const dotRect = dot.getBoundingClientRect();
    anchors.push({
      x: dotRect.left + dotRect.width / 2 - frameRect.left + frameRect.pad,
      y: dotRect.top + dotRect.height / 2 - frameRect.top + frameRect.pad,
    });
  });

  if (anchors.length < 2) {
    const ctx = canvas.getContext("2d");
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }

  const pathD = smoothPathThroughPoints(anchors);
  const samples = samplePathD(pathD, 180);
  drawLangMapGlow(canvas, samples, anchors);
}

let langMapFrame;
function scheduleLangMapPath() {
  cancelAnimationFrame(langMapFrame);
  langMapFrame = requestAnimationFrame(() => {
    requestAnimationFrame(updateLangMapPath);
  });
}

function initLangMapGlowObserver() {
  const rows = document.querySelector(".lang-map__rows");
  if (!rows || !window.ResizeObserver) return;

  const observer = new ResizeObserver(() => scheduleLangMapPath());
  observer.observe(rows);
  rows.querySelectorAll(".lang-map__row").forEach((row) => observer.observe(row));
}

function bootPortfolio() {
  const isIndexPage = Boolean(document.getElementById("hero-experience"));
  const isDesignerPage = Boolean(document.getElementById("projects-scene"));
  const isDevPage = Boolean(document.getElementById("dev-grid"));
  const isMlPage = Boolean(document.getElementById("ml-grid"));

  try {
    applyTranslations();
  } catch (error) {
    console.error(error);
    if (isDevPage) {
      applyFrontendPage(translations[currentLang]);
    }
    if (isMlPage) {
      applyMlPage(translations[currentLang]);
    }
  }

  if (isIndexPage) {
    scheduleHeroLayoutFit();
    scheduleLangMapPath();
    initLangMapGlowObserver();
    initHeroBlink();
    initRolesScrollReveal();
  }

  if (isDesignerPage) {
    initProjectOverlay();
  }
}

window.bootPortfolio = bootPortfolio;

if (!window.__MOBILE_HERO_EXTENSION__) {
  bootPortfolio();
}

window.addEventListener("resize", () => {
  scheduleHeroLayoutFit();
  scheduleLangMapPath();
  scheduleDesignerProjectStackLayout();
});
if (document.fonts?.ready) {
  document.fonts.ready.then(() => {
    scheduleHeroLayoutFit();
    scheduleLangMapPath();
    rolesScrollMetrics = null;
    scheduleRolesScrollReveal();
  });
}

const heroOpenPhoto = document.querySelector(".hero-intro__photo--open");
const heroClosedPhoto = document.querySelector(".hero-intro__photo--closed");
for (const img of [heroOpenPhoto, heroClosedPhoto]) {
  if (img && !img.complete) {
    img.addEventListener("load", scheduleHeroLayoutFit, { once: true });
  }
}
