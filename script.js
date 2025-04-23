let currentLanguage = 'ru';

const translations = {
  en: {
    storeName: "NATALIA AGAPOVA",
    location: "innopolis, russia",
    aboutTitle: "about me",
    aboutText: "my aim is to make design simple, pleasing, and creative",
    featuredTitle: "some of my projects",
    languageSwitch: "switch to russian",
    contactExtra: "CONTACT ME",
    year: "© 2025",
    experienceTitle: "experience & education",
    experienceBlockTitle: "my other experience",
    educationBlockTitle: "education",

    expCroissan: "croissan studio — ai art studio (ux/ui & product designer, apr 2025 - ...)",
    expAzimov: "azimovlab — ai service for generating tests (front end developer, feb 2024 – jun 2024)",
    expClearmind: "clearmind — ai psychologist service (front end developer, jun 2024 – jul 2024)",
    eduInnopolis: "innopolis university — bsc applied artificial intelligence (2026)",
    

    footerContact: "contact me",

    // Project Descriptions
    project1Title: "INNOBOOKLOVERS",
    project1Desc: "website design for innopolis university front end course. i was the ux/ui designer of the team",

    project2Title: "INNOMED",
    project2Desc: "innomed app prototype was developed for innopolis university during product management course. i was the product owner and was responsible for the prototype",

    project3Title: "POSTERS",
    project3Desc: "i have experience in designing posters for dance events in kazan and innopolis. my vision is to make posters easy to read and aesthetically pleasing",

    project4Title: "CONCEPTS",
    project4Desc: "experimental layouts made just for fun"
  },
  ru: {
    storeName: "НАТАЛЬЯ АГАПОВА",
    location: "иннополис, россия",
    aboutTitle: "обо мне",
    aboutText: "моя цель — сделать дизайн простым, приятным и креативным",
    featuredTitle: "некоторые мои проекты",
    languageSwitch: "переключиться на английский",
    contactExtra: "СВЯЗАТЬСЯ СО МНОЙ",
    year: "© 2025",
    experienceTitle: "опыт и образование",
    experienceBlockTitle: "мой опыт",
    educationBlockTitle: "образование",

    expCroissan: "croissan studio — студия цифрового ии-искусства (ux/ui и продуктовый дизайнер, апрель 2025 - ...)",
    expAzimov: "azimovlab — ии-сервис генерации тестов (фронтенд разработчик, февраль – июнь 2024)",
    expClearmind: "clearmind — психолог-бот на ии (фронтенд разработчик, июнь – июль 2024)",
    eduInnopolis: "университет иннополис — бакалавриат: прикладной искусственный интеллект (2026)",


    footerContact: "связаться со мной",

    project1Title: "INNОBOOKLOVERS",
    project1Desc: "дизайн сайта для курса по фронтенд разработке в университете иннополис. отвечала за ux/ui интерфейс в проекте",

    project2Title: "INNOMED",
    project2Desc: "прототип приложения innomed был разработан для университета иннополис на курсе по продакт менеджменту. я была в роли владельца продукта и также отвечала за разработку прототипа",

    project3Title: "АФИШИ",
    project3Desc: "у меня есть опыт дизайна афиш для мероприятий в казани и иннополисе. мое видение в том, чтобы плакаты были удобочитаемыми и эстетичными",

    project4Title: "КОНЦЕПТЫ",
    project4Desc: "экспериментальные макеты, сделанные для себя"
  }
};

function switchLanguage() {
  currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
  const t = translations[currentLanguage];

  document.getElementById('store-name').textContent = t.storeName;
  document.getElementById('location-extra').textContent = t.location;
  document.getElementById('about-title').textContent = t.aboutTitle;
  document.getElementById('about-text').textContent = t.aboutText;
  document.getElementById('portfolioTitle').textContent = t.featuredTitle;
  document.getElementById('languageSwitch').textContent = t.languageSwitch;
  document.getElementById('contact-extra').textContent = t.contactExtra;
  document.getElementById('year').textContent = t.year;

  document.getElementById('experience-title').textContent = t.experienceTitle;
  document.getElementById('experience-block-title').textContent = t.experienceBlockTitle;
  document.getElementById('education-block-title').textContent = t.educationBlockTitle;

  document.getElementById('exp-croissan').textContent = t.expCroissan;
  document.getElementById('exp-azimov').textContent = t.expAzimov;
  document.getElementById('exp-clearmind').textContent = t.expClearmind;
  document.getElementById('edu-innopolis').textContent = t.eduInnopolis;

  document.getElementById('project1-title').textContent = t.project1Title;
  document.getElementById('project1-desc').textContent = t.project1Desc;
  document.getElementById('project2-title').textContent = t.project2Title;
  document.getElementById('project2-desc').textContent = t.project2Desc;
  document.getElementById('project3-title').textContent = t.project3Title;
  document.getElementById('project3-desc').textContent = t.project3Desc;
  document.getElementById('project4-title').textContent = t.project4Title;
  document.getElementById('project4-desc').textContent = t.project4Desc;

  document.getElementById('footer-contact').textContent = t.footerContact;
}

document.addEventListener('DOMContentLoaded', switchLanguage);
