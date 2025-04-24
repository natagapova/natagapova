let currentLang = "ru";

const translations = {
  ru: {
    firstName: "НАТАЛЬЯ АГАПОВА",
    languageSwitch: "switch to english",
    locationExtra: "иннополис, россия",
    contactExtra: "связаться со мной",
    year: "© 2025",
    aboutTitle: "обо мне",
    aboutText: "моя цель — сделать дизайн простым, приятным и креативным",
    portfolioTitle: "мои проекты",
    project1Title: "INNOBOOKLOVERS",
    project1Desc: "дизайн сайта для курса по фронтенд разработке в университете иннополис. отвечала за ux/ui интерфейс в проекте",
    project2Title: "INNOMED",
    project2Desc: "прототип приложения innomed был разработан для университета иннополис на курсе по продакт менеджменту. я была в роли владельца продукта и также отвечала за разработку прототипа",
    project3Title: "ПОСТЕРЫ",
    project3Desc: "у меня есть опыт дизайна афиш для мероприятий в казани и иннополисе. мое видение в том, чтобы плакаты были удобочитаемыми и эстетичными",
    project4Title: "КОНЦЕПТЫ",
    project4Desc: "экспериментальные макеты, сделанные для себя",
    experienceBlockTitle: "опыт",
    educationBlockTitle: "образование",
    expCroissan: "croissan studio — студия цифрового ии-искусства (ux/ui и продуктовый дизайнер, апрель 2025 - ...)",
    expAzimov: "azimovlab — ии-сервис генерации тестов (фронтенд разработчик, февраль – июнь 2024)",
    expClearmind: "clearmind — психолог-бот на ии (фронтенд разработчик, июнь – июль 2024)",
    eduInnopolis: "университет иннополис — бакалавриат: прикладной искусственный интеллект (2026)",
    footerContact: "связаться со мной"
  },
  en: {
    firstName: "NATALIA AGAPOVA",
    languageSwitch: "русская версия",
    locationExtra: "innopolis, russia",
    contactExtra: "contact me",
    year: "© 2025",
    aboutTitle: "about me",
    aboutText: "my goal is to make design simple, pleasing, and creative",
    portfolioTitle: "my projects",
    project1Title: "INNOBOOKLOVERS",
    project1Desc: "website design for frontend development course at innopolis university. i was responsible for ux/ui design in the project",
    project2Title: "INNOMED",
    project2Desc: "innomed app prototype developed at innopolis university during a product management course. i was the product owner and created the prototype",
    project3Title: "POSTERS",
    project3Desc: "i have experience designing event posters for kazan and innopolis. my approach is to keep them readable and aesthetic",
    project4Title: "CONCEPTS",
    project4Desc: "experimental mockups and album covers made for fun",
    experienceBlockTitle: "experience",
    educationBlockTitle: "education",
    expCroissan: "croissan studio — ai art studio (ux/ui & product designer, apr 2025 - ...)",
    expAzimov: "azimovlab — ai service for generating tests (frontend developer, feb – jun 2024)",
    expClearmind: "clearmind — ai psychologist bot (frontend developer, jun – jul 2024)",
    eduInnopolis: "innopolis university — bsc in applied artificial intelligence (2026)",
    footerContact: "contact me"
  }
};

function switchLanguage() {
  currentLang = currentLang === "ru" ? "en" : "ru";

  const map = {
    languageSwitch: "languageSwitch",
    locationExtra: "location-extra",
    contactExtra: "contact-extra",
    year: "year",
    aboutTitle: "about-title",
    aboutText: "about-text",
    portfolioTitle: "featuredTitle",
    project1Title: "project1-title",
    project1Desc: "project1-desc",
    project2Title: "project2-title",
    project2Desc: "project2-desc",
    project3Title: "project3-title",
    project3Desc: "project3-desc",
    project4Title: "project4-title",
    project4Desc: "project4-desc",
    experienceBlockTitle: "experience-block-title",
    educationBlockTitle: "education-block-title",
    expCroissan: "exp-croissan",
    expAzimov: "exp-azimov",
    expClearmind: "exp-clearmind",
    eduInnopolis: "edu-innopolis",
    footerContact: "footer-contact",
    firstName: "my-first-name",
    lastName: "my-last-name"
  };

  for (const key in map) {
    const el = document.getElementById(map[key]);
    if (el) el.textContent = translations[currentLang][key];
  }
}
