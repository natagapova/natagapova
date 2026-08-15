function readStoredLang() {
  try {
    const stored = localStorage.getItem("portfolioLang");
    if (stored === "ru" || stored === "en") return stored;
  } catch {
    /* storage may be blocked in private mode */
  }
  return "ru";
}

let currentLang = readStoredLang();

const translations = {
  ru: {
    navBrand: "наталья агапова",
    myName: "кто она?",
    languageSwitch: "eng",
    contactExtra: "связаться",
    portfolioTitle: "проекты",
    designerPageTitle: "дизайн кейсы",
    mlPageTitle: "ml кейсы",
    designerToolsLabel: "инструменты",
    designerToolFigma: "Figma",
    designerToolIllustrator: "Adobe Illustrator",
    designerToolPhotoshop: "Adobe Photoshop",
    designerToolTilda: "Tilda",
    designerToolCanva: "Canva",
    designerToolAi: "AI",
    roleDesigner: "дизайнер",
    roleFrontend: "frontend разработчик",
    roleML: "ML разработчик",
    rolePerson: "человек",
    personTagline: "вот кто делает вам сайты кстати",
    frontendPageTitle: "frontend кейсы",
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
      "Сайт танцевальной студии Kingstep — главная, каталог курсов и страницы занятий. Тёмная эстетика бренда: макеты в Figma, сборка в Tilda. Сейчас на финальном этапе.",
    heroExperienceLabel: "Направления",
    rolesNavLabel: "Роли",
    backHome: "на главную",
    closeProject: "закрыть",
    projectLightboxPrev: "предыдущее",
    projectLightboxNext: "следующее",
    projectLightboxOpen: "открыть изображение",
    rolePagePlaceholder: "раздел в работе",
    YandexDirectTitle: "ЯНДЕКС ДИРЕКТ",
    YandexDirectDesc: "тестовое задание в яндекс: платформа управления рекламой",
    InnoBookLoversTitle: "INN\u041eBOOKLOVERS",
    InnoBookLoversDesc:
      "дизайн сайта для курса по фронтенд разработке в университете иннополис. отвечала за ux/ui интерфейс в проекте",
    InnoMedTitle: "INNOMED",
    InnoMedDesc:
      "прототип приложения innomed был разработан для университета иннополис на курсе по продакт менеджменту. я была в роли владельца продукта и также отвечала за разработку прототипа",
    PostersTitle: "ПОСТЕРЫ",
    PostersDesc:
      "у меня есть опыт дизайна афиш для мероприятий в казани и иннополисе. мое видение в том, чтобы плакаты были удобочитаемыми и эстетичными",
    ConceptsTitle: "КОНЦЕПТЫ",
    ConceptsDesc: "экспериментальные макеты, сделанные для себя",
    TsarevBarilovaTitle: "ЦАРЁВ & БАРИЛОВА",
    TsarevBarilovaDesc: "дизайн сайта для продажи онлайн курсов по танцам",
    YokoMatchaTitle: "YOKO MATCHA",
    YokoMatchaDesc: "дизайн сайта для магазина матчи yokomatcha",
    CroissanStudioTitle: "CROISSAN STUDIO",
    CroissanStudioDesc:
      "продукты, разработанные мной для нейрохудожника - продукта croissan studio: лого, мерч, концепты",
    experienceBlockTitle: "опыт",
    educationBlockTitle: "образование",
    volunteeringBlockTitle: "волонтёрство",
    expCroissan:
      "<strong>croissan studio</strong> — студия разработки полного цикла для ии-продуктов (продуктовый дизайнер, апрель 2025 - ...)",
    expAzimov:
      "<strong>azimovlab</strong> — ии-сервис генерации тестов (тимлид команды фронтенд-разработки, февраль – сентябрь 2024)",
    expClearmind: "<strong>фриланс</strong> — дизайн афиш, сайтов; вёрстка сайтов на заказ (2022 - ...)",
    eduInnopolis:
      "<strong>университет иннополис</strong> — бакалавриат: прикладной искусственный  интеллект (2026)",
    volTrenirovochnaya:
      "<strong>trenirovochnaya.kzn</strong> — организация танцевальных мероприятий в казани (бренд-дизайнер, маркетолог, март 2025 – август 2025)",
    volInnostreetdance:
      "<strong>innostreetdance</strong> — студенческий танцевальный клуб университета иннополис (бренд-дизайнер, маркетолог, декабрь 2022 – сентябрь 2025)",
    footerContact: "связаться",
    languagesBlockTitle: "языки",
    langRu: "русский",
    langEn: "английский",
    langFr: "французский",
    langKo: "корейский",
    langEnLevel: "C1+",
    langMapDesc: "Карта владения языками по шкале от A1 до C2.",
  },
  en: {
    navBrand: "natalia agapova",
    myName: "who is she?",
    languageSwitch: "рус",
    contactExtra: "hmu",
    portfolioTitle: "projects",
    designerPageTitle: "design cases",
    mlPageTitle: "ml cases",
    designerToolsLabel: "tools",
    designerToolFigma: "Figma",
    designerToolIllustrator: "Adobe Illustrator",
    designerToolPhotoshop: "Adobe Photoshop",
    designerToolTilda: "Tilda",
    designerToolCanva: "Canva",
    designerToolAi: "AI",
    roleDesigner: "designer",
    roleFrontend: "frontend developer",
    roleML: "ML developer",
    rolePerson: "person",
    personTagline: "this is who does your website btw",
    frontendPageTitle: "frontend cases",
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
      "A site for Kingstep dance studio — home, course catalog, and class pages. Dark brand aesthetic: layouts in Figma, build in Tilda. Currently in the final stretch.",
    heroExperienceLabel: "Directions",
    rolesNavLabel: "Roles",
    backHome: "back to home",
    closeProject: "close",
    projectLightboxPrev: "previous",
    projectLightboxNext: "next",
    projectLightboxOpen: "open image",
    rolePagePlaceholder: "section in progress",
    YandexDirectTitle: "YANDEX DIRECT",
    YandexDirectDesc: "test task in yandex: advertising platform management",
    InnoBookLoversTitle: "INNOBOOKLOVERS",
    InnoBookLoversDesc:
      "website design for frontend development course at innopolis university. i was responsible for ux/ui design in the project",
    InnoMedTitle: "INNOMED",
    InnoMedDesc:
      "innomed app prototype developed at innopolis university during a product management course. i was the product owner and created the prototype",
    PostersTitle: "POSTERS",
    PostersDesc:
      "i have experience designing event posters for kazan and innopolis. my approach is to keep them readable and aesthetic",
    ConceptsTitle: "CONCEPTS",
    ConceptsDesc: "experimental mockups and album covers made for fun",
    TsarevBarilovaTitle: "TSAREV & BARILOVA",
    TsarevBarilovaDesc: "website design for online dance courses",
    YokoMatchaTitle: "YOKO MATCHA",
    YokoMatchaDesc: "website design for matcha shop yokomatcha",
    CroissanStudioTitle: "CROISSAN STUDIO",
    CroissanStudioDesc:
      "products developed by me for neuroartist - a project by croissan studio: logos, merch, concepts",
    experienceBlockTitle: "experience",
    educationBlockTitle: "education",
    volunteeringBlockTitle: "volunteering",
    expCroissan:
      "<strong>croissan studio</strong> — ai products studio (product designer, apr 2025 - ...)",
    expAzimov:
      "<strong>azimovlab</strong> — ai service for generating tests (frontend team lead, feb – sep 2024)",
    expClearmind: "<strong>freelance</strong> — design posters, websites; web development on order (2022 - ...)",
    eduInnopolis:
      "<strong>innopolis university</strong> — bsc in applied artificial intelligence (2026)",
    volTrenirovochnaya:
      "<strong>trenirovochnaya.kzn</strong> — organization of dance events in kazan (brand-designer, marketing person, mar 2025 – aug 2025)",
    volInnostreetdance:
      "<strong>innostreetdance</strong> — student dance club of innopolis university (brand-designer, marketing person, dec 2022 – sep 2025)",
    footerContact: "hmu",
    languagesBlockTitle: "languages",
    langRu: "russian",
    langEn: "english",
    langFr: "french",
    langKo: "korean",
    langEnLevel: "C1+",
    langMapDesc: "Language proficiency map on a scale from A1 to C2.",
  },
};

const designerProjects = [
  {
    id: "yandex-direct",
    titleKey: "YandexDirectTitle",
    descKey: "YandexDirectDesc",
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
    toolKeys: ["designerToolTilda", "designerToolFigma"],
    preview: "images/tsarevbarilova/page1.webp",
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
    id: "innobooklovers",
    titleKey: "InnoBookLoversTitle",
    descKey: "InnoBookLoversDesc",
    toolKeys: ["designerToolFigma"],
    images: [
      "images/innobooklovers/page1.webp",
      "images/innobooklovers/page2.webp",
      "images/innobooklovers/page3.webp",
      "images/innobooklovers/page4.webp",
    ],
  },
  {
    id: "innomed",
    titleKey: "InnoMedTitle",
    descKey: "InnoMedDesc",
    toolKeys: ["designerToolFigma"],
    images: [
      "images/innomed/page6.webp",
      "images/innomed/page1.webp",
      "images/innomed/page2.webp",
      "images/innomed/page3.webp",
      "images/innomed/page4.webp",
      "images/innomed/page5.webp",
      "images/innomed/page7.webp",
    ],
  },
  {
    id: "croissan-studio",
    titleKey: "CroissanStudioTitle",
    descKey: "CroissanStudioDesc",
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
    id: "posters",
    titleKey: "PostersTitle",
    descKey: "PostersDesc",
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

const frontendProjects = [
  {
    id: "croissan",
    url: "https://croissanstudio.ru",
    preview: "images/frontend/croissan.webp",
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
    id: "cruelgames",
    url: "https://cruelgames-website.vercel.app/",
    previewMode: "iframe",
    titleKey: "FrontendCruelTitle",
    descKey: "FrontendCruelDesc",
    toolKeys: ["frontendToolHtml", "frontendToolCss", "frontendToolJs"],
  },
  {
    id: "aismena",
    url: "https://aismena.ru",
    preview: "images/frontend/aismena.jpg",
    titleKey: "FrontendAismenaTitle",
    descKey: "FrontendAismenaDesc",
    toolKeys: ["frontendToolTilda", "frontendToolZeroBlock"],
  },
  {
    id: "kingstep",
    preview: "images/tsarevbarilova/page1.webp",
    titleKey: "FrontendKingstepTitle",
    descKey: "FrontendKingstepDesc",
    toolKeys: ["frontendToolFigma", "frontendToolTilda", "frontendToolIllustrator"],
    comingSoon: true,
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
]);

const translationKeyToId = {
  navBrand: "nav-brand",
  languageSwitch: "languageSwitch",
  contactExtra: "contact-extra",
  portfolioTitle: "projects-title",
  designerPageTitle: "designer-page-title",
  mlPageTitle: "ml-page-title",
  designerToolsLabel: "designer-tools-label",
  roleDesigner: "role-designer",
  roleFrontend: "role-frontend",
  roleML: "role-ml",
  rolePerson: "role-person",
  personTagline: "person-tagline",
  frontendPageTitle: "frontend-page-title",
  rolePagePlaceholder: "role-page-placeholder",
  experienceBlockTitle: "experience-block-title",
  educationBlockTitle: "education-block-title",
  volunteeringBlockTitle: "volunteering-block-title",
  expCroissan: "exp-croissan",
  expAzimov: "exp-azimov",
  expClearmind: "exp-clearmind",
  eduInnopolis: "edu-innopolis",
  footerContact: "footer-contact",
  myName: "store-name",
  volTrenirovochnaya: "vol-trenirovochnaya",
  volInnostreetdance: "vol-innostreetdance",
  languagesBlockTitle: "languages-block-title",
  langRu: "lang-ru-name",
  langEn: "lang-en-name",
  langEnLevel: "lang-en-level",
  langFr: "lang-fr-name",
  langKo: "lang-ko-name",
  langMapDesc: "lang-map-desc",
};

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
          const { left, top, width, height } = mobile.positions[index];

          panel.style.width = `${width}px`;
          panel.style.height = `${height}px`;
          panel.style.left = `${left}px`;
          panel.style.top = `${top}px`;
          panel.style.removeProperty("bottom");
          panel.style.setProperty("--panel-z", String(index + 1));
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
  for (const project of frontendProjects) {
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

function renderFrontendPreview(project) {
  if (project.preview) {
    return `
      <div class="frontend-card__preview" aria-hidden="true">
        <img
          class="frontend-card__image"
          src="${project.preview}"
          alt=""
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
          title=""
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
  const grid = document.getElementById("frontend-grid");
  if (!grid) return;

  const t = translations[currentLang];

  grid.innerHTML = frontendProjects
    .map((project) => {
      const title = t[project.titleKey] ?? "";
      const description = t[project.descKey] ?? "";
      const tools = renderFrontendCardTools(project.toolKeys, t);
      const body = `
        ${renderFrontendPreview(project)}
        <div class="frontend-card__body">
          <h2 class="frontend-card__title">${escapeHtml(title)}</h2>
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
  const skillsEl = document.getElementById("frontend-skills");
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
            <div class="project-panel__card">
              <span class="project-panel__bevel" aria-hidden="true"></span>
              <img
                class="project-panel__surface"
                src="${preview}"
                alt=""
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
          <div class="project-panel__caption" aria-hidden="true">
            <p class="project-panel__caption-title">${escapeHtml(title)}</p>
            <p class="project-panel__caption-desc">${escapeHtml(description)}</p>
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
  const toolsEl = document.getElementById("project-overlay-tools");
  const descEl = document.getElementById("project-overlay-desc");
  const galleryEl = document.getElementById("project-overlay-gallery");
  if (!project || !titleEl || !descEl || !galleryEl) return;

  const t = translations[currentLang];
  const title = t[project.titleKey] ?? "";
  const description = t[project.descKey] ?? "";

  titleEl.textContent = title;
  if (toolsEl) {
    const toolsHtml = renderDesignerOverlayTools(project.toolKeys, t);
    toolsEl.innerHTML = toolsHtml;
    toolsEl.hidden = !toolsHtml;
  }
  descEl.textContent = description;

  galleryEl.innerHTML = project.images
    .map(
      (src, index) => `
        <button
          type="button"
          class="project-overlay__image-btn"
          data-image-index="${index}"
          aria-label="${escapeHtml(t.projectLightboxOpen ?? "open image")}"
        >
          <img
            class="project-overlay__image"
            src="${src}"
            alt=""
            loading="${index === 0 ? "eager" : "lazy"}"
            decoding="async"
          />
        </button>
      `
    )
    .join("");
}

let projectLightboxImages = [];
let projectLightboxIndex = 0;
let projectLightboxOpen = false;

function renderProjectLightboxImage() {
  const content = document.getElementById("project-lightbox-content");
  const prevBtn = document.getElementById("project-lightbox-prev");
  const nextBtn = document.getElementById("project-lightbox-next");
  if (!content) return;

  const src = projectLightboxImages[projectLightboxIndex];
  content.innerHTML = src
    ? `<img src="${src}" alt="">`
    : "";

  const hasMultiple = projectLightboxImages.length > 1;
  if (prevBtn) prevBtn.hidden = !hasMultiple;
  if (nextBtn) nextBtn.hidden = !hasMultiple;
}

function openProjectLightbox(imageIndex) {
  const project = designerProjects.find((item) => item.id === openProjectId);
  const lightbox = document.getElementById("project-lightbox");
  if (!project?.images?.length || !lightbox) return;

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

function applyTranslations() {
  const t = translations[currentLang];
  document.documentElement.lang = currentLang === "ru" ? "ru" : "en";

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

  const heroExperience = document.getElementById("hero-experience");
  if (heroExperience && t.heroExperienceLabel) {
    heroExperience.setAttribute("aria-label", t.heroExperienceLabel);
  }

  const rolesNav = document.querySelector(".roles-nav--hero");
  if (rolesNav && t.rolesNavLabel) {
    rolesNav.setAttribute("aria-label", t.rolesNavLabel);
  }

  const backHome = document.getElementById("back-home");
  if (backHome && t.backHome) {
    backHome.setAttribute("aria-label", t.backHome);
  }

  const rolePageTitle = document.getElementById("role-page-title");
  if (rolePageTitle) {
    const path = window.location.pathname;
    if (path.includes("frontend")) {
      rolePageTitle.textContent = t.roleFrontend;
    } else if (path.includes("ml")) {
      rolePageTitle.textContent = t.roleML;
    } else if (path.includes("designer")) {
      rolePageTitle.textContent = t.roleDesigner;
    } else if (path.includes("person")) {
      rolePageTitle.textContent = t.rolePerson;
    }
  }

  const personPageTitle = document.getElementById("person-page-title");
  if (personPageTitle) {
    personPageTitle.textContent = t.rolePerson;
  }

  applyDesignerPage(t);
  applyFrontendPage(t);

  if (document.getElementById("projects-scene")) {
    renderDesignerProjects();
  }

  if (document.getElementById("hero-experience")) {
    scheduleHeroLayoutFit();
  }

  if (openProjectId) {
    renderProjectOverlayContent(openProjectId);
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

  const closedSrc = "images/my-head-eyesclosed.png";
  const preload = new Image();
  preload.src = closedSrc;

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
  const isFrontendPage = Boolean(document.getElementById("frontend-grid"));

  try {
    applyTranslations();
  } catch (error) {
    console.error(error);
    if (isFrontendPage) {
      applyFrontendPage(translations[currentLang]);
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
