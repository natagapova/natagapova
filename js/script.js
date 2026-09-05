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
    navbarCvLabel: "cv",
    navbarCvAria: "выбрать cv для скачивания",
    mlPageTitle: "ml кейсы",
    designerToolFigma: "Figma",
    designerToolIllustrator: "Adobe Illustrator",
    designerToolPhotoshop: "Adobe Photoshop",
    designerToolTilda: "Tilda",
    designerToolCanva: "Canva",
    designerToolAi: "AI",
    roleDesigner: "дизайнер",
    roleFrontend: "веб/app разработчик",
    roleML: "ml разработчик",
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
    DevMacosTimerTitle: "таймер для macOS",
    DevMacosTimerDesc:
      "в готовых таймерах не хватало и обычного таймера, и помодоро, плюс хотелось жить в menu bar и не тонуть в лишних кнопках. сделала своё: оба режима, простой интерфейс, всё в menu bar. работает на macOS 13+.",
    FrontendCroissanTitle: "Croissan Studio",
    FrontendCroissanDesc:
      "сайт AI-студии, который мы собирали командой. настраивала секции, адаптив и визуальную целостность, чтобы кейсы, услуги и экспертиза читались как один продукт, а не как набор блоков.",
    FrontendAsimovLabTitle: "Asimov Lab",
    FrontendAsimovLabDesc:
      "лендинг AI-платформы для преподавателей: генерация и проверка учебных заданий. вела фронтенд как тимлид, от архитектуры и компонентов до адаптива, чтобы hero, возможности, цены и FAQ читались как единый продукт.",
    FrontendCruelTitle: "Cruel Games",
    FrontendCruelDesc:
      "промо-сайт театральной постановки с акцентом на настроение спектакля и мобильную подачу. полноэкранный hero, кастомная галерея со свайпом, чистая вёрстка.",
    FrontendAismenaTitle: "AI-смена · Иннополис",
    FrontendAismenaDesc:
      "лендинг летней AI-смены для школьников. родителю за пару минут должно быть понятно, что в программе и как записать ребёнка без звонка менеджеру. собрала на Tilda в сжатые сроки: расписание, команда, цена, FAQ и форма записи.",
    FrontendKingstepTitle: "Барилова & Царёв",
    FrontendKingstepDesc:
      "сайт танцевальной студии Kingstep: главная, каталог курсов и страницы занятий. дизайн и макеты готовы, моя часть завершена, публичной ссылки пока нет.",
    mlToolPython: "Python",
    mlToolPytorch: "PyTorch",
    mlToolBert: "BERT",
    mlToolXai: "XAI",
    mlToolCaptum: "Captum",
    mlToolJupyter: "Jupyter",
    mlToolRag: "RAG",
    mlToolChroma: "ChromaDB",
    mlToolOllama: "Ollama",
    mlToolMediaPipe: "MediaPipe",
    mlToolOpenCV: "OpenCV",
    mlToolPyAutoGUI: "PyAutoGUI",
    mlToolCoreML: "Core ML",
    mlToolOnnx: "ONNX",
    mlActionGithub: "GitHub",
    mlActionArticle: "статья",
    mlCardMore: "подробнее",
    mlStatusInProgress: "в разработке",
    mlCaseTask: "задача",
    mlCaseData: "данные",
    mlCaseApproach: "архитектура / подход",
    mlCaseMetrics: "как оценивала",
    mlCaseEngineering: "инженерные сложности",
    mlCaseHindsight: "что бы я сейчас поменяла",
    MlResumeTask:
      "найти bias в рекрутинг-модели, которая сортирует резюме в 9 IT-суперкатегорий, и попробовать снизить его разными методами.",
    MlResumeData:
      "приватная выборка HeadHunter, 9 меток суперкатегорий, city-swap counterfactuals по 41 группе городов и английские резюме для transfer-теста.",
    MlResumeApproach:
      "дообучила BERT-base и смотрела Integrated Gradients (Captum), чтобы понять, на что опирается модель. прогнала 39+ конфигураций: TF-IDF baseline, city-swap и шесть семейств debiasing (GroupDRO, focal loss, label smoothing, adversarial debiasing, data scrubbing, attribution regularization) с разными гиперпараметрами. в статью вошли самые показательные.",
    MlResumeMetrics:
      "baseline BERT дал 60.9% accuracy, но при смене города в резюме модель меняла ответ в 7.7% пар, то есть проявился географический bias. data scrubbing убрал этот эффект (0% flip) почти без потери качества: 59.4% accuracy. combined scrub + GroupDRO просадил точность до 48.8%, это наглядный trade-off, а не рабочий вариант.",
    MlResumeEngineering:
      "сложнее всего было не обучить модель, а честно сравнить десятки конфигураций: данные закрыты, всё в ноутбуках, легко потерять воспроизводимость. city-swap тесты долгие, и каждый debiasing-метод по-своему бьёт по accuracy.",
    MlResumeHindsight:
      "заранее договорилась бы, что для продукта важнее: точность, стабильность по городам или перенос на другой язык. не гналась бы за нулевым flip rate ценой половины accuracy. transfer на английский заложила бы отдельным экспериментом, а не проверкой в конце.",
    MlEmotionTask:
      "научить модель узнавать 7 эмоций по лицу и довести решение до запуска в браузере и на устройстве.",
    MlEmotionData:
      "FER2013: 35 887 изображений 48×48 в grayscale, оценка на PrivateTest (3 589), WeightedRandomSampler из-за дисбаланса классов.",
    MlEmotionApproach:
      "сравнила EmotionCNN (1.7M params) и MobileNetV3-Small, добавила strong augmentation, label smoothing и early stopping, затем INT8 quantization и экспорт в Core ML и ONNX Runtime Web.",
    MlEmotionMetrics:
      "CNN + strong aug: accuracy 58.7%, macro-F1 0.569; с TTA 59.9%; ensemble + TTA 60.8%. INT8: 58.9%, latency 1.15 ms. happy F1 0.79, neutral 0.45 (было 0.16). MobileNetV3 остановился на 34.5%.",
    MlEmotionEngineering:
      "ImageNet pretrain на 48×48 grayscale не сработал. перешла на memmap .npz вместо pandas (~61 MB вместо ~250 MB). квантизация и экспорт в Core ML / ONNX прошли без потери качества.",
    MlEmotionHindsight:
      "раньше заложила бы отдельный val для калибровки TTA и ensemble, сейчас это подобрано постфактум. добавила бы явный latency-бюджет под mobile с первого спринта.",
    MlGestureTask:
      "управлять курсором жестами руки с веб-камеры: перемещение и клик без мыши.",
    MlGestureData:
      "отдельной обучающей выборки нет, работа идёт с live webcam: 21 landmark MediaPipe Hands на кадр.",
    MlGestureApproach:
      "MediaPipe Hands, rule-based классификатор жестов (pinch / ready / click), PyAutoGUI и фоновый поток для плавного курсора с bezier easing.",
    MlGestureMetrics:
      "это не классификационный бенчмарк: целевой цикл ~60 FPS на detection, click cooldown 300 ms, порог pinch 0.15, 5 ready-событий за 500 ms для arm click.",
    MlGestureEngineering:
      "два потока: detection и cursor smoothing. jitter threshold 22 px, virtual capture area на 20% шире экрана, миграция MediaPipe API (solutions.hands → Tasks), разрешения macOS camera и accessibility.",
    MlGestureHindsight:
      "переписала бы на MediaPipe Tasks API сразу, потому что legacy solutions ломается на ≥0.10.31. вынесла бы gesture thresholds в конфиг под разные камеры и освещение.",
    MlPksTask:
      "сделать RAG Q&A по личным PDF: ответы только из контекста, с цитатами filename + page.",
    MlPksData:
      "загружаемые PDF в data/, чанки с привязкой к страницам. публичного бенчмарка нет, это pet-project на своих документах.",
    MlPksApproach:
      "цепочка pdf_loader → sentence chunker → SentenceTransformer all-MiniLM-L6-v2 → ChromaDB top-5 → Ollama llama3.2 со strict prompt. без LangChain/LlamaIndex, каждый слой написан вручную.",
    MlPksMetrics:
      "формальных метрик retrieval/faithfulness пока нет, проект в разработке. проверяю вручную: grounded vs hallucination и top-k recall на своих запросах.",
    MlPksEngineering:
      "инкрементальная индексация (skip if DB exists), citation metadata на чанк, поиск по одному файлу и по папке. на CPU ответы Ollama занимают от 5 до 15 секунд на среднем PDF.",
    MlPksHindsight:
      "добавила бы eval-набор вопросов с эталонными цитатами до расширения UI. hybrid search (BM25 + dense) и reranker сделала бы следующим шагом, а не слепой подстройкой chunk size.",
    MlResumeScreeningTitle: "fair resume screening",
    MlResumeScreeningDesc:
      'интерпретируемый BERT-классификатор резюме для 9 IT-суперкатегорий на данных HeadHunter. аудит прокси-биаса через Integrated Gradients, сравнение шести методов debiasing, city-swap и transfer на английских резюме. развивает <a href="https://github.com/natagapova/xai-resume-bias" class="ml-card__inline-link" target="_blank" rel="noopener noreferrer">раннюю XAI-работу</a> по bias в классификации резюме.',
    MlKnowledgeSystemTitle: "personal knowledge system",
    MlKnowledgeSystemDesc:
      "RAG-система для ответов по личным PDF: чанкинг, эмбеддинги, семантический поиск в ChromaDB и генерация ответов через Ollama с цитатами. собрала с нуля на Python, без high-level фреймворков.",
    MlGestureInputTitle: "gesture input",
    MlGestureInputDesc:
      "управление курсором жестами руки с веб-камеры: MediaPipe Hands, распознавание pinch / ready / click и плавное перемещение курсора через PyAutoGUI. реал-тайм трекинг со сглаживанием и двухшаговым кликом.",
    MlEmotionDetectionTitle: "emotion detection",
    MlEmotionDetectionDesc:
      "распознавание эмоций по лицу на FER2013 (7 классов): подготовка данных, обучение EmotionCNN, оценка, INT8-квантизация, экспорт в Core ML и браузерное демо на ONNX Runtime Web. 58.7% accuracy, до 60.8% с ensemble + TTA.",
    heroExperienceLabel: "направления",
    rolesNavLabel: "роли",
    backHome: "на главную",
    closeProject: "закрыть",
    projectLightboxPrev: "предыдущее",
    projectLightboxNext: "следующее",
    projectLightboxOpen: "открыть изображение",
    heroPhotoAlt: "Наталья Агапова",
    projectPreviewAlt: "превью: {{title}}",
    projectImageAlt: "{{title}}, изображение {{current}} из {{total}}",
    personGalleryPhotoAlt: "фото: {{name}}",
    personGalleryVideoAlt: "видео: {{name}}",
    rolePagePlaceholder: "раздел в работе",
    PochtaTexTitle: "Почтатех",
    PochtaTexDesc:
      "командный проект с Университетом Иннополис и Почтатехом: игра для промо-стенда на лагере InnoBootCamp. отвечала за UX/UI и сценарий на стенде",
    YandexDirectTitle: "Яндекс Директ",
    YandexDirectDesc: "тестовое задание в Яндекс, платформа для управления рекламой",
    InnoBookLoversTitle: "Innobooklovers",
    InnoBookLoversDesc:
      "дизайн сайта для курса по фронтенд-разработке в Университете Иннополис. отвечала за UX/UI интерфейса в проекте.",
    InnoMedTitle: "Innomed",
    InnoMedDesc:
      "прототип приложения Innomed для Университета Иннополис на курсе по продакт-менеджменту. была владельцем продукта и собирала прототип.",
    PostersTitle: "постеры",
    PostersDesc: "афиши для мероприятий в Казани и Иннополисе",
    TsarevBarilovaTitle: "Царёв & Барилова",
    TsarevBarilovaDesc:
      "дизайн сайта для продажи онлайн-курсов по танцам. UX/UI, фриланс",
    YokoMatchaTitle: "Yoko Matcha",
    YokoMatchaDesc: "дизайн сайта для магазина матчи",
    CroissanStudioTitle: "Croissan Studio",
    CroissanStudioDesc: "бренд и продуктовый дизайн для проектов Croissan Studio",
    designerProcessTitle: "разбор процесса",
    designerProcessProblem: "проблема",
    designerProcessSolution: "решение",
    designerProcessResult: "результат",
    designerActionTry: "потестировать игру",
    projectActionLink: "ссылка",
    PochtaTexProblem:
      "нужно было сделать игру с поиском ошибок в интерфейсе и заинтересовать как можно больше людей на стенде.",
    PochtaTexSolution:
      "собрала игровой сценарий, онбординг, регистрацию и UX-skeleton игрового экрана в стилистике Университета Иннополис и Почты России.",
    PochtaTexResult:
      "за 7 дней стенда прошли игру 420+ человек, 99% дошли до конца, это на 31% больше, чем в прошлом формате.",
    YandexDirectProblem:
      "рекламный кабинет перегружен метриками, и рекламодателю сложно за секунды понять, что происходит с кампанией и куда смотреть в первую очередь.",
    YandexDirectSolution:
      "собрала иерархию экранов, вынесла ключевые показатели на первый план и снизила визуальный шум в блоках статистики и управления.",
    YokoMatchaProblem:
      "бренд матчи должен ощущаться тепло, без ощущения холодного e-commerce шаблона.",
    YokoMatchaSolution:
      "выстроила палитру, типографику и сетку каталога; визуалы сгенерировала и доработала вручную под единый характер.",
    TsarevBarilovaProblem:
      "владельцам танцевальной студии нужно место, где можно собрать воедино все онлайн-курсы, которые они продают, и сделать платформу, на которой их можно оплачивать и просматривать.",
    TsarevBarilovaSolution:
      "сделала чёткую структуру направлений и тёплую типографику; простая структура сайта для людей из нетехнической сферы; макет адаптировала под сборку в Tilda.",
    TsarevBarilovaResult:
      "согласовали главную, каталог и страницы курсов; дизайн завершён, сайт не в разработке у меня и не опубликован.",
    InnoBookLoversProblem:
      "курсовой проект рисковал выглядеть как учебная страница, а не как живое книжное сообщество.",
    InnoBookLoversSolution:
      "выстроила UX вокруг подборок и вовлечённости: карточки, акценты на контент и простую навигацию между разделами.",
    InnoBookLoversResult:
      "dAU вырос на 34%, регистрации на курс +27%; органический трафик +1,9K визитов за семестр без платного продвижения.",
    InnoMedProblem:
      "медицинский сервис требует ясности и спокойствия, чтобы пользователь не терялся в сценариях записи и профиля.",
    InnoMedSolution:
      "спроектировала потоки пациента, разделила информацию по приоритету и визуально снизила тревожность интерфейса.",
    InnoMedResult:
      "в пилоте конверсия в запись выросла на 31%, отказы на шаге оплаты снизились на 18%; 240+ записей за 6 недель, NPS прототипа 52.",
    CroissanStudioProblem:
      "AI-студии нужен бренд и общий стиль, который отличает их на рынке. сюда входит и диджитал, и оффлайн носители.",
    CroissanStudioSolution:
      "разработала фирменные элементы, иллюстрации и носители в единой стилистике, с AI и ручной доработкой.",
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
    expCroissan: {
      title: "Croissan Studio",
      period: "апр 2025 - н.в.",
      description:
        "студия полного цикла для ИИ-продуктов. продуктовый дизайнер и ML-разработчик",
    },
    expAzimov: {
      title: "Asimov Lab",
      period: "фев - сен 2024",
      description:
        "AI-сервис генерации тестов. тимлид фронтенда, в стартапе также вела ML и UX/UI дизайн",
    },
    expClearmind: {
      title: "фриланс",
      period: "2022 - н.в.",
      description: "дизайн афиш и сайтов, вёрстка, ML-разработка на заказ",
    },
    eduInnopolis:
      "<strong>Университет Иннополис</strong>, бакалавриат по прикладному искусственному интеллекту (2026).",
    volTrenirovochnaya: {
      title: "trenirovochnaya.kzn",
      period: "мар - авг 2025",
      description:
        "организация танцевальных мероприятий в Казани. бренд-дизайнер и маркетолог",
    },
    volInnostreetdance: {
      title: "InnoStreetDance",
      period: "дек 2022 - сен 2025",
      description:
        "студенческий танцевальный клуб Университета Иннополис. бренд-дизайнер и маркетолог",
    },
    footerSocialLabel: "соцсети",
    footerSocialTelegram: "Telegram",
    footerSocialLinkedin: "LinkedIn",
    footerSocialGithub: "GitHub",
    footerSocialEmail: "Почта",
    footerSocialScholar: "Google Scholar",
    introLead:
      "бережно собираю продукты, которыми правда хочется пользоваться",
    introStatusLabel: "current status:",
    introStatusValue: "открыта к проектам: дизайн, dev, ml и\u00A0не\u00A0только",
    introCtaDesigner: "дизайн кейсы",
    introCtaDev: "dev кейсы",
    introCtaMl: "ml кейсы",
    devIntroTitle: "мой опыт в разработке",
    devIntroLead:
      "собираю веб и приложения: лендинги, фронтенд в продуктовых командах, Swift для macOS. в Asimov Lab вела фронтенд от архитектуры до UI и довожу сайты и утилиты до продакшна с чистым кодом и понятным UX.",
    mlIntroTitle: "мой опыт в ml",
    mlIntroLead:
      "делаю прикладной ML: BERT, XAI и debiasing, RAG, computer vision. есть публикации, и я довожу модели до решений, которые точны, объяснимы и на своём месте в продукте.",
    cvPickerTitle: "скачать cv",
    cvPickerClose: "закрыть",
    cvVariantDesigner: "дизайн",
    cvVariantDev: "разработка",
    cvVariantMl: "ml",
    introTrustLabel: "мне доверяют",
    introContactPrefix: "напишите, если есть идея. разберёмся без\u00A0сложных\u00A0брифов",
    introSocialLabel: "соцсети",
    trustLogoCroissan: "Croissan Studio",
    trustLogoInnopolis: "Иннополис",
    trustLogoPochtaRossii: "Почта России",
    trustLogoPochta: "Почтатех",
    trustLogoLitsei: "лицей Иннополис",
    trustLogoArtCenter: "арт-центр ИСИ",
    trustLogoKingstep: "Kingstep",
    languagesBlockTitle: "языки",
    langRu: "русский",
    langEn: "английский",
    langFr: "французский",
    langKo: "корейский",
    langEnLevel: "C1+",
    langMapDesc: "карта владения языками по шкале от 0 до C2.",
  },
  en: {
    navBrand: "natalia agapova",
    myName: "who is she?",
    languageSwitch: "рус",
    portfolioTitle: "projects",
    designerPageTitle: "design cases",
    navbarCvLabel: "cv",
    navbarCvAria: "choose a cv to download",
    mlPageTitle: "ml cases",
    designerToolFigma: "Figma",
    designerToolIllustrator: "Adobe Illustrator",
    designerToolPhotoshop: "Adobe Photoshop",
    designerToolTilda: "Tilda",
    designerToolCanva: "Canva",
    designerToolAi: "AI",
    roleDesigner: "designer",
    roleFrontend: "web & app dev",
    roleML: "ml developer",
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
    DevMacosTimerTitle: "macOS timer",
    DevMacosTimerDesc:
      "most timers made me choose between a regular timer and pomodoro, and the menu bar experience felt cluttered. i built my own: both modes, a simple UI, lives in the menu bar. works on macOS 13+.",
    FrontendCroissanTitle: "Croissan Studio",
    FrontendCroissanDesc:
      "the AI studio site we built as a team. i worked on sections, responsive layout, and visual cohesion so cases, services, and expertise read as one product, not a pile of blocks.",
    FrontendAsimovLabTitle: "Asimov Lab",
    FrontendAsimovLabDesc:
      "landing page for an AI platform that helps educators generate and grade assignments. i led front-end as team lead, from architecture and components to responsive layout, so hero, features, pricing, and FAQ read as one product.",
    FrontendCruelTitle: "Cruel Games",
    FrontendCruelDesc:
      "a promo site for a theatre production, focused on the show's mood and mobile presentation. full-screen hero, custom swipe gallery, clean hand-coded layout.",
    FrontendAismenaTitle: "AI Camp · Innopolis",
    FrontendAismenaDesc:
      "a landing page for a summer AI camp for school students. a parent should understand the program and apply in a few minutes without calling a manager. built on Tilda on a tight deadline: schedule, team, pricing, FAQ, and signup form.",
    FrontendKingstepTitle: "Barilova & Tsarev",
    FrontendKingstepDesc:
      "a dance studio site for Kingstep: home, course catalog, and class pages. design and layouts are done, my part is complete, and there is no public link yet.",
    mlToolPython: "Python",
    mlToolPytorch: "PyTorch",
    mlToolBert: "BERT",
    mlToolXai: "XAI",
    mlToolCaptum: "Captum",
    mlToolJupyter: "Jupyter",
    mlToolRag: "RAG",
    mlToolChroma: "ChromaDB",
    mlToolOllama: "Ollama",
    mlToolMediaPipe: "MediaPipe",
    mlToolOpenCV: "OpenCV",
    mlToolPyAutoGUI: "PyAutoGUI",
    mlToolCoreML: "Core ML",
    mlToolOnnx: "ONNX",
    mlActionGithub: "GitHub",
    mlActionArticle: "paper",
    mlCardMore: "more",
    mlStatusInProgress: "in progress",
    mlCaseTask: "task",
    mlCaseData: "data",
    mlCaseApproach: "architecture / approach",
    mlCaseMetrics: "how i evaluated",
    mlCaseEngineering: "engineering challenges",
    mlCaseHindsight: "what I'd change now",
    MlResumeTask:
      "find bias in a recruiting model that classifies resumes into 9 IT supercategories and try to reduce it with different debiasing methods.",
    MlResumeData:
      "private HeadHunter sample, 9 supercategory labels, city-swap counterfactuals across 41 city groups, and English resumes for transfer evaluation.",
    MlResumeApproach:
      "fine-tuned BERT-base and used Integrated Gradients (Captum) to see what the model relies on. ran 39+ configurations: TF-IDF baseline, city-swap, and six debiasing families (GroupDRO, focal loss, label smoothing, adversarial debiasing, data scrubbing, attribution regularization) with different hyperparameters. the paper includes the most meaningful results.",
    MlResumeMetrics:
      "baseline BERT reached 60.9% accuracy, but swapping the city in a resume changed the prediction in 7.7% of pairs, which showed geographic bias. data scrubbing removed that effect (0% flip) with almost no quality loss: 59.4% accuracy. combined scrub + GroupDRO pushed accuracy down to 48.8%, a useful trade-off lesson, not a shippable option.",
    MlResumeEngineering:
      "the hard part was not training the model but comparing dozens of configurations fairly: private data, everything in notebooks, easy to lose reproducibility. city-swap tests are slow, and every debiasing method hits accuracy differently.",
    MlResumeHindsight:
      "i would agree upfront what matters for the product: accuracy, stability across cities, or cross-language transfer. i would not chase zero flip rate at the cost of half the accuracy. i would plan the English transfer as its own experiment, not a final check.",
    MlEmotionTask:
      "teach a model to recognize 7 facial emotions and ship the solution to the browser and on device.",
    MlEmotionData:
      "FER2013: 35,887 images at 48×48 grayscale, evaluation on PrivateTest (3,589), WeightedRandomSampler for class imbalance.",
    MlEmotionApproach:
      "compared EmotionCNN (1.7M params) and MobileNetV3-Small, added strong augmentation, label smoothing, and early stopping, then INT8 quantization and export to Core ML and ONNX Runtime Web.",
    MlEmotionMetrics:
      "CNN + strong aug: 58.7% accuracy, macro-F1 0.569; with TTA 59.9%; ensemble + TTA 60.8%. INT8: 58.9%, 1.15 ms latency. happy F1 0.79, neutral 0.45 (was 0.16). MobileNetV3 stopped at 34.5%.",
    MlEmotionEngineering:
      "ImageNet pretraining failed on 48×48 grayscale. i switched to memmap .npz instead of pandas (~61 MB instead of ~250 MB). quantization and Core ML / ONNX export kept quality intact.",
    MlEmotionHindsight:
      "i would reserve a dedicated val set for TTA and ensemble tuning, because right now it is tuned post hoc. i would set a mobile latency budget from sprint one.",
    MlGestureTask:
      "control the cursor with hand gestures from a webcam: movement and click without a physical mouse.",
    MlGestureData:
      "there is no training set, only live webcam input: 21 MediaPipe Hand landmarks per frame.",
    MlGestureApproach:
      "MediaPipe Hands, a rule-based gesture classifier (pinch / ready / click), PyAutoGUI, and a background thread for smooth cursor movement with bezier easing.",
    MlGestureMetrics:
      "this is not a classification benchmark: target ~60 FPS on detection, 300 ms click cooldown, pinch threshold 0.15, 5 ready events in 500 ms to arm a click.",
    MlGestureEngineering:
      "two threads: detection and cursor smoothing. jitter threshold 22 px, virtual capture area 20% beyond screen edges, MediaPipe API migration (solutions.hands → Tasks), macOS camera and accessibility permissions.",
    MlGestureHindsight:
      "i would rewrite on the MediaPipe Tasks API from day one because legacy solutions breaks on ≥0.10.31. i would externalize gesture thresholds for different cameras and lighting.",
    MlPksTask:
      "build RAG Q&A over personal PDFs with answers grounded in context only and filename + page citations.",
    MlPksData:
      "uploaded PDFs in data/, chunks tied to page positions. there is no public benchmark, it is a pet project on my own documents.",
    MlPksApproach:
      "pipeline: pdf_loader → sentence chunker → SentenceTransformer all-MiniLM-L6-v2 → ChromaDB top-5 → Ollama llama3.2 with a strict prompt. no LangChain/LlamaIndex, every layer is hand-written.",
    MlPksMetrics:
      "no formal retrieval/faithfulness metrics yet, the project is in progress. i check manually: grounded vs hallucination and top-k recall on my own queries.",
    MlPksEngineering:
      "incremental indexing (skip if DB exists), citation metadata per chunk, single-file and folder search. on CPU, Ollama responses take 5 to 15 seconds on a medium PDF.",
    MlPksHindsight:
      "i would build a question set with gold citations before expanding the UI. hybrid search (BM25 + dense) and a reranker would be the next step, not blind chunk-size tuning.",
    MlResumeScreeningTitle: "fair resume screening",
    MlResumeScreeningDesc:
      'an interpretable BERT resume classifier for 9 IT supercategories on HeadHunter data. geographic proxy bias audit with Integrated Gradients, six debiasing methods, city-swap stress tests, and English transfer evaluation. builds on earlier <a href="https://github.com/natagapova/xai-resume-bias" class="ml-card__inline-link" target="_blank" rel="noopener noreferrer">XAI work</a> on resume classification bias.',
    MlKnowledgeSystemTitle: "personal knowledge system",
    MlKnowledgeSystemDesc:
      "a RAG system for answering questions from personal PDFs: chunking, embeddings, semantic search in ChromaDB, and LLM answers via Ollama with citations. built from scratch in Python without high-level frameworks.",
    MlGestureInputTitle: "gesture input",
    MlGestureInputDesc:
      "webcam hand-gesture mouse control: MediaPipe Hands landmark tracking, pinch / ready / click recognition, and smooth cursor movement with PyAutoGUI. real-time tracking with jitter reduction and a two-step click gesture.",
    MlEmotionDetectionTitle: "emotion detection",
    MlEmotionDetectionDesc:
      "facial emotion recognition on FER2013 (7 classes): data prep, EmotionCNN training, evaluation, INT8 quantization, Core ML export, and a browser demo via ONNX Runtime Web. 58.7% accuracy, up to 60.8% with ensemble + TTA.",
    heroExperienceLabel: "directions",
    rolesNavLabel: "roles",
    backHome: "back to home",
    closeProject: "close",
    projectLightboxPrev: "previous",
    projectLightboxNext: "next",
    projectLightboxOpen: "open image",
    heroPhotoAlt: "Natalia Agapova",
    projectPreviewAlt: "preview: {{title}}",
    projectImageAlt: "{{title}}, image {{current}} of {{total}}",
    personGalleryPhotoAlt: "photo: {{name}}",
    personGalleryVideoAlt: "video: {{name}}",
    rolePagePlaceholder: "section in progress",
    PochtaTexTitle: "Pochtatech",
    PochtaTexDesc:
      "team project with Innopolis University and Pochtatech: a promo stand game at InnoBootCamp. led UX/UI and the on-stand flow",
    YandexDirectTitle: "Yandex Direct",
    YandexDirectDesc: "test task for Yandex: advertising management platform",
    InnoBookLoversTitle: "Innobooklovers",
    InnoBookLoversDesc:
      "website design for a frontend development course at Innopolis University. i was responsible for the interface UX/UI.",
    InnoMedTitle: "Innomed",
    InnoMedDesc:
      "Innomed app prototype for Innopolis University during a product management course. i was the product owner and built the prototype.",
    PostersTitle: "posters",
    PostersDesc: "event posters in Kazan and Innopolis",
    TsarevBarilovaTitle: "Tsarev & Barilova",
    TsarevBarilovaDesc:
      "website design for online dance courses. UX/UI, freelance",
    YokoMatchaTitle: "Yoko Matcha",
    YokoMatchaDesc: "website design for a matcha shop",
    CroissanStudioTitle: "Croissan Studio",
    CroissanStudioDesc: "brand and product design for Croissan Studio projects",
    designerProcessTitle: "process breakdown",
    designerProcessProblem: "problem",
    designerProcessSolution: "solution",
    designerProcessResult: "result",
    designerActionTry: "try the game",
    projectActionLink: "link",
    PochtaTexProblem:
      "we needed a spot-the-error interface game that would draw as many people as possible to the stand.",
    PochtaTexSolution:
      "built the game flow, onboarding, signup, and game-screen UX skeleton in Innopolis University and Russian Post brand style.",
    PochtaTexResult:
      "over 7 stand days, 420+ people played, 99% finished the full game, 31% more than the previous format.",
    YandexDirectProblem:
      "the ad dashboard is packed with metrics, so advertisers struggle to see what matters in the campaign at a glance.",
    YandexDirectSolution:
      "built a clear screen hierarchy, surfaced key KPIs first, and reduced visual noise in stats and management blocks.",
    YokoMatchaProblem:
      "the matcha brand had to feel warm, not like a cold e-commerce template.",
    YokoMatchaSolution:
      "defined palette, typography, and catalog grid; generated visuals and refined them by hand into one cohesive look.",
    TsarevBarilovaProblem:
      "the dance studio owners needed one place to bring together all their online courses and a platform where students can pay and watch them.",
    TsarevBarilovaSolution:
      "built a clear course structure and warm typography; kept the site simple for a non-technical team; adapted layouts for a Tilda build.",
    TsarevBarilovaResult:
      "home, catalog, and course pages were approved; design is complete, not in development on my side, and not published.",
    InnoBookLoversProblem:
      "a course project risked looking like homework instead of a living book community.",
    InnoBookLoversSolution:
      "shaped UX around collections and engagement: cards, content highlights, and simple navigation between sections.",
    InnoBookLoversResult:
      "dAU up 34%, course signups +27%; +1.9K organic visits per semester with no paid promotion.",
    InnoMedProblem:
      "a medical service needs clarity and calm so users do not get lost in booking and profile flows.",
    InnoMedSolution:
      "mapped patient journeys, prioritized information, and softened the interface to reduce anxiety.",
    InnoMedResult:
      "in the pilot, booking conversion rose 31%, drop-off at payment fell 18%; 240+ appointments in 6 weeks, prototype NPS 52.",
    CroissanStudioProblem:
      "an AI studio needs a brand and a shared style that sets it apart, both in digital and offline touchpoints.",
    CroissanStudioSolution:
      "developed brand elements, illustrations, and assets in a single style, AI-assisted and hand-finished.",
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
    expCroissan: {
      title: "Croissan Studio",
      period: "apr 2025 - present",
      description: "full-cycle AI products studio. product designer and ML engineer",
    },
    expAzimov: {
      title: "Asimov Lab",
      period: "feb - sep 2024",
      description:
        "AI test-generation service. frontend team lead, also handled ML and UX/UI design",
    },
    expClearmind: {
      title: "freelance",
      period: "2022 - present",
      description: "poster and web design, front-end builds, ML projects on commission",
    },
    eduInnopolis:
      "<strong>Innopolis University</strong>, BSc in applied artificial intelligence (2026).",
    volTrenirovochnaya: {
      title: "trenirovochnaya.kzn",
      period: "mar - aug 2025",
      description: "dance events in Kazan. brand designer and marketing",
    },
    volInnostreetdance: {
      title: "InnoStreetDance",
      period: "dec 2022 - sep 2025",
      description:
        "student dance club at Innopolis University. brand designer and marketing",
    },
    footerSocialLabel: "social links",
    footerSocialTelegram: "Telegram",
    footerSocialLinkedin: "LinkedIn",
    footerSocialGithub: "GitHub",
    footerSocialEmail: "Email",
    footerSocialScholar: "Google Scholar",
    introLead:
      "i carefully build products you'd genuinely want to use",
    introStatusLabel: "current status:",
    introStatusValue: "open to work: design, dev, ml &\u00A0more",
    introCtaDesigner: "design cases",
    introCtaDev: "dev cases",
    introCtaMl: "ml cases",
    devIntroTitle: "my dev experience",
    devIntroLead:
      "i build web and apps: landing pages, front-end in product teams, Swift for macOS. at Asimov Lab i led front-end from architecture to UI and ship production sites and utilities with clean code and clear UX.",
    mlIntroTitle: "my ml experience",
    mlIntroLead:
      "i do applied ML: BERT, XAI and debiasing, RAG, computer vision. i publish my work and ship models that are accurate, explainable, and grounded in real product context.",
    cvPickerTitle: "download cv",
    cvPickerClose: "close",
    cvVariantDesigner: "design",
    cvVariantDev: "development",
    cvVariantMl: "ml",
    introTrustLabel: "trusted by",
    introContactPrefix: "got an idea? let's talk it through, no\u00A0heavy\u00A0briefs required",
    introSocialLabel: "social links",
    trustLogoCroissan: "Croissan Studio",
    trustLogoInnopolis: "Innopolis",
    trustLogoPochtaRossii: "Russian Post",
    trustLogoPochta: "Pochtatech",
    trustLogoLitsei: "Innopolis Lyceum",
    trustLogoArtCenter: "ISI Art Center",
    trustLogoKingstep: "Kingstep",
    languagesBlockTitle: "languages",
    langRu: "russian",
    langEn: "english",
    langFr: "french",
    langKo: "korean",
    langEnLevel: "C1+",
    langMapDesc: "language proficiency map on a scale from 0 to C2.",
  },
};


const designerProjects = [
  {
    id: "pochtatex",
    titleKey: "PochtaTexTitle",
    descKey: "PochtaTexDesc",
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
    process: {
      problemKey: "CroissanStudioProblem",
      solutionKey: "CroissanStudioSolution",
      resultKey: "CroissanStudioResult",
    },
    toolKeys: ["designerToolIllustrator", "designerToolAi", "designerToolFigma"],
    url: "https://croissanstudio.ru",
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
    id: "asimovlab",
    url: "https://asimovlab.ru",
    preview: "images/dev/asimovlab.webp",
    titleKey: "FrontendAsimovLabTitle",
    descKey: "FrontendAsimovLabDesc",
    toolKeys: [
      "frontendToolTs",
      "frontendToolReact",
      "frontendToolNext",
      "frontendToolTailwind",
      "frontendToolFigma",
    ],
  },
  {
    id: "macos-timer",
    url: "https://github.com/natagapova/macos-timer",
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
    caseStudy: {
      taskKey: "MlResumeTask",
      dataKey: "MlResumeData",
      approachKey: "MlResumeApproach",
      metricsKey: "MlResumeMetrics",
      engineeringKey: "MlResumeEngineering",
      hindsightKey: "MlResumeHindsight",
    },
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
    id: "emotions-with-audio",
    url: "https://github.com/natagapova/emotions-with-audio",
    preview: "images/ml/emotions-with-audio.webp",
    titleKey: "MlEmotionDetectionTitle",
    descKey: "MlEmotionDetectionDesc",
    caseStudy: {
      taskKey: "MlEmotionTask",
      dataKey: "MlEmotionData",
      approachKey: "MlEmotionApproach",
      metricsKey: "MlEmotionMetrics",
      engineeringKey: "MlEmotionEngineering",
    },
    toolKeys: ["mlToolPython", "mlToolPytorch", "mlToolOnnx", "mlToolCoreML"],
  },
  {
    id: "gesture-input",
    url: "https://github.com/natagapova/gesture-input",
    preview: "images/ml/gesture-input.gif",
    titleKey: "MlGestureInputTitle",
    descKey: "MlGestureInputDesc",
    caseStudy: {
      taskKey: "MlGestureTask",
      dataKey: "MlGestureData",
      approachKey: "MlGestureApproach",
      metricsKey: "MlGestureMetrics",
      engineeringKey: "MlGestureEngineering",
      hindsightKey: "MlGestureHindsight",
    },
    toolKeys: ["mlToolPython", "mlToolMediaPipe", "mlToolOpenCV", "mlToolPyAutoGUI"],
  },
  {
    id: "personal-knowledge-system",
    url: "https://github.com/natagapova/personal-knowledge-system",
    preview: "images/ml/personal-knowledge-system.webp",
    titleKey: "MlKnowledgeSystemTitle",
    descKey: "MlKnowledgeSystemDesc",
    caseStudy: {
      taskKey: "MlPksTask",
      dataKey: "MlPksData",
      approachKey: "MlPksApproach",
      metricsKey: "MlPksMetrics",
      engineeringKey: "MlPksEngineering",
    },
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

const innerHtmlKeys = new Set(["eduInnopolis", "MlResumeScreeningDesc"]);

const aboutEntryKeyToId = {
  expCroissan: "exp-croissan",
  expAzimov: "exp-azimov",
  expClearmind: "exp-clearmind",
  volTrenirovochnaya: "vol-trenirovochnaya",
  volInnostreetdance: "vol-innostreetdance",
};

const translationKeyToId = {
  navBrand: "nav-brand",
  languageSwitch: "languageSwitch",
  portfolioTitle: "projects-title",
  designerPageTitle: "designer-page-title",
  navbarCvLabel: "navbar-cv-label",
  mlPageTitle: "ml-page-title",
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
  eduInnopolis: "edu-innopolis",
  myName: "store-name",
  introLead: "intro-lead",
  introStatusLabel: "intro-status-label",
  introStatusValue: "intro-status-value",
  introCtaDesigner: "intro-cta-designer",
  introCtaDev: "intro-cta-dev",
  introCtaMl: "intro-cta-ml",
  devIntroTitle: "dev-intro-title",
  devIntroLead: "dev-intro-lead",
  mlIntroTitle: "ml-intro-title",
  mlIntroLead: "ml-intro-lead",
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

const CV_VARIANTS = [
  {
    id: "designer",
    labelKey: "cvVariantDesigner",
    ru: { href: "docs/nat_designer.pdf", filename: "Natalia_Agapova_CV_Design_RU.pdf" },
    en: { href: "docs/nat_designer_en.pdf", filename: "Natalia_Agapova_CV_Design_EN.pdf" },
  },
  {
    id: "dev",
    labelKey: "cvVariantDev",
    ru: { href: "docs/nat_dev.pdf", filename: "Natalia_Agapova_CV_Development_RU.pdf" },
    en: { href: "docs/nat_dev_en.pdf", filename: "Natalia_Agapova_CV_Development_EN.pdf" },
  },
  {
    id: "ml",
    labelKey: "cvVariantMl",
    ru: { href: "docs/nat_ml.pdf", filename: "Natalia_Agapova_CV_ML_RU.pdf" },
    en: { href: "docs/nat_ml_en.pdf", filename: "Natalia_Agapova_CV_ML_EN.pdf" },
  },
];

let cvPickerBound = false;
const SURFACE_TRANSITION_MS = 280;

const CV_DOWNLOAD_ICON =
  '<svg class="cv-picker__icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 15.59 7.7 11.3l1.42-1.42L11 12.17V4h2v8.17l1.88-1.88 1.42 1.42L12 15.59ZM5 18h14v2H5v-2z"/></svg>';

function getCvFile(variant) {
  return variant[currentLang] ?? variant.en;
}

function positionCvPicker() {
  const trigger = document.getElementById("navbar-cv-download");
  const panel = document.querySelector("#cv-picker .cv-picker__panel");
  if (!trigger || !panel) return;

  const rect = trigger.getBoundingClientRect();
  const gap = 8;
  const margin = 16;
  const panelWidth = panel.offsetWidth || Math.min(220, window.innerWidth - margin * 2);
  const panelHeight = panel.offsetHeight;

  let left = rect.right - panelWidth;
  left = Math.max(margin, Math.min(left, window.innerWidth - panelWidth - margin));

  let top = rect.bottom + gap;
  if (top + panelHeight > window.innerHeight - margin) {
    top = rect.top - panelHeight - gap;
  }
  top = Math.max(margin, Math.min(top, window.innerHeight - panelHeight - margin));

  panel.style.left = `${Math.round(left)}px`;
  panel.style.top = `${Math.round(top)}px`;
}

function playSurfaceOpen(surfaceEl, beforeOpen) {
  if (!surfaceEl) return;
  surfaceEl.hidden = false;
  surfaceEl.classList.remove("is-closing");
  beforeOpen?.();
  requestAnimationFrame(() => {
    surfaceEl.classList.add("is-open");
  });
}

function playSurfaceClose(surfaceEl, onClosed) {
  if (!surfaceEl || surfaceEl.hidden) return;
  surfaceEl.classList.remove("is-open");
  surfaceEl.classList.add("is-closing");
  window.clearTimeout(surfaceEl._closeTimer);
  surfaceEl._closeTimer = window.setTimeout(() => {
    surfaceEl.hidden = true;
    surfaceEl.classList.remove("is-closing");
    onClosed?.();
  }, SURFACE_TRANSITION_MS);
}

function ensureCvPicker() {
  const trigger = document.getElementById("navbar-cv-download");
  if (!trigger) return null;

  trigger.querySelector(".btn__icon")?.remove();
  trigger.setAttribute("aria-haspopup", "dialog");
  trigger.setAttribute("aria-controls", "cv-picker");

  let picker = document.getElementById("cv-picker");
  if (!picker) {
    picker = document.createElement("div");
    picker.id = "cv-picker";
    picker.className = "cv-picker";
    picker.hidden = true;
    picker.innerHTML = `
      <button type="button" class="cv-picker__backdrop" id="cv-picker-backdrop" aria-label="close"></button>
      <div class="cv-picker__panel" role="dialog" aria-modal="true" aria-label="CV">
        <ul class="cv-picker__list" id="cv-picker-list" role="menu"></ul>
      </div>
    `;
    document.body.appendChild(picker);

    picker.querySelector("#cv-picker-backdrop")?.addEventListener("click", closeCvPicker);
  }

  return picker;
}

function renderCvPicker(t) {
  const picker = ensureCvPicker();
  const listEl = document.getElementById("cv-picker-list");
  if (!picker || !listEl) return;

  const closeLabel = t.cvPickerClose ?? t.closeProject ?? "close";
  picker.querySelector("#cv-picker-backdrop")?.setAttribute("aria-label", closeLabel);
  picker.querySelector(".cv-picker__panel")?.setAttribute(
    "aria-label",
    t.navbarCvLabel ?? "CV"
  );

  listEl.innerHTML = CV_VARIANTS.map((variant) => {
    const file = getCvFile(variant);
    const label = t[variant.labelKey] ?? variant.id;
    return `
      <li role="none">
        <a
          class="cv-picker__option"
          href="${escapeHtml(file.href)}"
          download="${escapeHtml(file.filename)}"
          role="menuitem"
        >
          <span class="cv-picker__option-label">${escapeHtml(label)}</span>
          ${CV_DOWNLOAD_ICON}
        </a>
      </li>
    `;
  }).join("");
}

function openCvPicker() {
  const picker = document.getElementById("cv-picker");
  const trigger = document.getElementById("navbar-cv-download");
  if (!picker || !trigger) return;

  playSurfaceOpen(picker, positionCvPicker);
  trigger.setAttribute("aria-expanded", "true");

  if (!picker.dataset.positionBound) {
    picker.dataset.positionBound = "true";
    window.addEventListener("resize", () => {
      if (!picker.hidden) positionCvPicker();
    });
    window.addEventListener(
      "scroll",
      () => {
        if (!picker.hidden) positionCvPicker();
      },
      true
    );
  }
}

function closeCvPicker() {
  const picker = document.getElementById("cv-picker");
  const trigger = document.getElementById("navbar-cv-download");
  if (!picker || !trigger) return;

  playSurfaceClose(picker, () => {
    trigger.setAttribute("aria-expanded", "false");
  });
}

function initCvPicker(t) {
  if (!cvPickerBound) {
    const trigger = document.getElementById("navbar-cv-download");
    if (trigger) {
      cvPickerBound = true;
      ensureCvPicker();
      trigger.setAttribute("aria-expanded", "false");

      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const picker = document.getElementById("cv-picker");
        if (!picker) return;
        if (picker.hidden) openCvPicker();
        else closeCvPicker();
      });

      document.addEventListener("keydown", (event) => {
        const picker = document.getElementById("cv-picker");
        if (event.key === "Escape" && picker && !picker.hidden) {
          closeCvPicker();
        }
      });
    }
  }

  renderCvPicker(t);
}

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
    url: "https://www.pochta.ru",
  },
  {
    id: "innopolis",
    labelKey: "trustLogoInnopolis",
    logoRu: "images/logos/trusted/innopolis-ru.png",
    logoEn: "images/logos/trusted/innopolis-en.png",
    url: "https://innopolis.university",
  },
  {
    id: "croissan",
    labelKey: "trustLogoCroissan",
    logo: "images/logos/trusted/croissan.png",
    url: "https://croissanstudio.ru",
  },
  { id: "litsei", labelKey: "trustLogoLitsei", logo: "images/logos/trusted/litsei-innopolis.png" },
  {
    id: "art-center",
    labelKey: "trustLogoArtCenter",
    logo: "images/logos/trusted/art-center-isi.png",
    url: "https://art-center-isi.ru",
  },
  {
    id: "pochtatech",
    labelKey: "trustLogoPochta",
    logoRu: "images/logos/trusted/pochtatech-ru.png",
    logoEn: "images/logos/trusted/pochtatech-en.png",
    url: "https://pochta.tech",
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

    const imageMarkup = `
        <img
          class="intro-trust__logo-img intro-trust__logo-img--${escapeHtml(item.id)}"
          src="${escapeHtml(logoSrc)}"
          alt="${item.url ? "" : escapeHtml(label)}"
          width="120"
          height="28"
          loading="lazy"
          decoding="async"
        />`;

    const logoContent = item.url
      ? `<a
          class="intro-trust__link"
          href="${escapeHtml(item.url)}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${escapeHtml(label)}"
        >${imageMarkup}</a>`
      : imageMarkup;

    return `
      <li class="intro-trust__item">
        ${logoContent}
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

const aboutEntryUrls = {
  expCroissan: "https://croissanstudio.ru",
  expAzimov: "https://asimovlab.ru",
};

function renderProjectTitleLink(title, url) {
  const safeTitle = escapeHtml(title);
  if (!url) return safeTitle;

  return `<a class="text-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${safeTitle}</a>`;
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
        repositionElevatedMobileCaptions();

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

const ML_CARD_GRID_BREAKPOINTS = [{ minWidth: 640, columns: 2 }];
const DEV_CARD_GRID_BREAKPOINTS = [
  { minWidth: 1024, columns: 3 },
  { minWidth: 640, columns: 2 },
];

let cardGridResizeTimer = null;

function getCardGridColumnCount(breakpoints) {
  const sorted = [...breakpoints].sort((a, b) => b.minWidth - a.minWidth);
  for (const breakpoint of sorted) {
    if (window.innerWidth >= breakpoint.minWidth) {
      return breakpoint.columns;
    }
  }
  return 1;
}

function layoutCardMasonryGrid(gridEl, { cardSelector, breakpoints }) {
  if (!gridEl) return;

  const cards = [...gridEl.querySelectorAll(`:scope > ${cardSelector}`)];

  gridEl.querySelectorAll(":scope > .card-grid__column").forEach((column) => {
    [...column.children].forEach((child) => gridEl.appendChild(child));
    column.remove();
  });

  gridEl.classList.remove("card-grid--columns");

  const columnCount = getCardGridColumnCount(breakpoints);
  if (columnCount <= 1 || cards.length === 0) return;

  const columns = Array.from({ length: columnCount }, () => {
    const column = document.createElement("div");
    column.className = "card-grid__column";
    return column;
  });

  cards.forEach((card, index) => {
    columns[index % columnCount].appendChild(card);
  });

  columns.forEach((column) => gridEl.appendChild(column));
  gridEl.classList.add("card-grid--columns");
}

function scheduleCardGridLayout() {
  clearTimeout(cardGridResizeTimer);
  cardGridResizeTimer = setTimeout(() => {
    layoutCardMasonryGrid(document.getElementById("ml-grid"), {
      cardSelector: ".ml-card",
      breakpoints: ML_CARD_GRID_BREAKPOINTS,
    });
    layoutCardMasonryGrid(document.getElementById("dev-grid"), {
      cardSelector: ".frontend-card",
      breakpoints: DEV_CARD_GRID_BREAKPOINTS,
    });
  }, 120);
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
          ${
            project.url && !project.comingSoon
              ? `<div class="frontend-card__actions">${renderProjectCardLink(project, t, "frontend-card__action")}</div>`
              : ""
          }
        </div>
      `;

      return `
        <article class="frontend-card" role="listitem" aria-label="${escapeHtml(title)}">
          ${body}
        </article>
      `;
    })
    .join("");

  initFrontendLazyIframes();
  scheduleCardGridLayout();
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
        class="btn ml-card__action"
        href="${escapeHtml(project.url)}"
        target="_blank"
        rel="noopener noreferrer"
      ><span class="btn__label">${escapeHtml(t.mlActionGithub ?? "GitHub")} →</span></a>
    `);
  }

  if (project.articleUrl) {
    links.push(`
      <a
        class="btn ml-card__action"
        href="${escapeHtml(project.articleUrl)}"
        target="_blank"
        rel="noopener noreferrer"
      ><span class="btn__label">${escapeHtml(t.mlActionArticle ?? "paper")} →</span></a>
    `);
  }

  if (!links.length) return "";

  return `<div class="ml-card__actions">${links.join("")}</div>`;
}

function renderMlCardMore(project, t) {
  const label = escapeHtml(t.mlCardMore ?? "подробнее");
  return `<div class="ml-card__actions"><button type="button" class="btn ml-card__more" data-ml-project-id="${escapeHtml(project.id)}"><span class="btn__label">${label}</span></button></div>`;
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
        <article
          class="ml-card${project.inDevelopment ? " ml-card--in-progress" : ""}"
          role="listitem"
          aria-label="${escapeHtml(title)}"
        >
          ${renderMlPreview(project, title)}
          <div class="ml-card__body">
            <div class="ml-card__heading">
              <h2 class="ml-card__title">${escapeHtml(title)}</h2>
              ${status}
            </div>
            ${tools}
            ${renderMlDescription(project, t)}
            ${renderMlCardMore(project, t)}
          </div>
        </article>
      `;
    })
    .join("");

  scheduleCardGridLayout();
}

function bindMlProjectCards() {
  const grid = document.getElementById("ml-grid");
  if (!grid || grid.dataset.mlCardsBound === "true") return;

  grid.dataset.mlCardsBound = "true";

  grid.addEventListener("click", (event) => {
    const trigger = event.target.closest(".ml-card__more");
    if (!trigger) return;
    openProjectOverlay(trigger.dataset.mlProjectId, "ml");
  });

  grid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const trigger = event.target.closest(".ml-card__more");
    if (!trigger || !grid.contains(trigger)) return;
    event.preventDefault();
    openProjectOverlay(trigger.dataset.mlProjectId, "ml");
  });
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
  bindMlProjectCards();
}

function applyDesignerPage(t) {
  const toolsWrap = document.getElementById("designer-tools-wrap");
  const toolsEl = document.getElementById("designer-tools");
  if (!toolsEl) return;

  const tags = DESIGNER_PAGE_TOOL_KEYS.map((key) => t[key]).filter(Boolean);

  if (toolsWrap && tags.length) {
    toolsWrap.setAttribute("aria-label", tags.join(", "));
  }

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

function renderMlCaseStudy(project, t) {
  const caseStudy = project.caseStudy;
  if (!caseStudy) return "";

  const steps = [
    { label: t.mlCaseTask, key: caseStudy.taskKey },
    { label: t.mlCaseData, key: caseStudy.dataKey },
    { label: t.mlCaseApproach, key: caseStudy.approachKey },
    { label: t.mlCaseMetrics, key: caseStudy.metricsKey },
    { label: t.mlCaseEngineering, key: caseStudy.engineeringKey },
    { label: t.mlCaseHindsight, key: caseStudy.hindsightKey },
  ]
    .filter((step) => step.label && step.key && t[step.key])
    .map((step) => ({ label: step.label, text: t[step.key] }));

  if (!steps.length) return "";

  const stepsClass =
    steps.length === 5
      ? "project-process__steps project-process__steps--cols-2 project-process__steps--last-full"
      : "project-process__steps project-process__steps--cols-2";

  return `
    <section class="project-process project-process--ml">
      <ol class="${stepsClass}">
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

function renderMlOverlayTools(project, t) {
  const tools = (project.toolKeys ?? []).map((key) => t[key]).filter(Boolean);
  if (!tools.length) return "";

  return tools
    .map((label) => `<span class="frontend-page__skill">${escapeHtml(label)}</span>`)
    .join("");
}

function renderProjectOverlayLink(href, label, actionClass = "project-overlay__action") {
  return `<a
    class="btn ${actionClass}"
    href="${escapeHtml(href)}"
    target="_blank"
    rel="noopener noreferrer"
  ><span class="btn__label">${escapeHtml(label)} →</span></a>`;
}

function renderProjectCardLink(project, t, actionClass) {
  if (!project.url || project.comingSoon) return "";

  const label = t.projectActionLink ?? "ссылка";
  return renderProjectOverlayLink(project.url, label, actionClass);
}

function populateProjectOverlayActions(actionsEl, links) {
  if (!actionsEl) return;
  if (!links.length) {
    actionsEl.innerHTML = "";
    actionsEl.hidden = true;
    return;
  }
  actionsEl.innerHTML = links.join("");
  actionsEl.hidden = false;
}

function renderMlOverlayLinks(project, t) {
  const links = [];

  if (project.url) {
    links.push(renderProjectOverlayLink(project.url, t.mlActionGithub ?? "GitHub"));
  }

  if (project.articleUrl) {
    links.push(renderProjectOverlayLink(project.articleUrl, t.mlActionArticle ?? "paper"));
  }

  return links;
}

function renderDesignerOverlayLinks(project, t) {
  if (!project.url) return [];

  const label = t.projectActionLink ?? "ссылка";
  if (!label) return [];

  return [renderProjectOverlayLink(project.url, label)];
}

function arrangeOverlayLayout(mode) {
  const scroll = document.getElementById("project-overlay-scroll");
  if (!scroll) return;

  const heading = scroll.querySelector(".project-overlay__heading");
  const tools = document.getElementById("project-overlay-tools");
  const actions = document.getElementById("project-overlay-actions");
  const desc = document.getElementById("project-overlay-desc");
  const process = document.getElementById("project-overlay-process");
  const gallery = document.getElementById("project-overlay-gallery");

  const nodes = [heading, tools, actions, desc, process, gallery];

  nodes.forEach((node) => {
    if (node) scroll.appendChild(node);
  });
}

function renderMlOverlayContent(projectId) {
  const project = mlProjects.find((item) => item.id === projectId);
  const titleEl = document.getElementById("project-overlay-title");
  const statusEl = document.getElementById("project-overlay-status");
  const toolsEl = document.getElementById("project-overlay-tools");
  const actionsEl = document.getElementById("project-overlay-actions");
  const descEl = document.getElementById("project-overlay-desc");
  const processEl = document.getElementById("project-overlay-process");
  const galleryEl = document.getElementById("project-overlay-gallery");
  if (!project || !titleEl || !descEl || !galleryEl) return;

  const t = translations[currentLang];
  const title = t[project.titleKey] ?? "";
  const description = t[project.descKey] ?? "";

  titleEl.textContent = title;
  populateProjectOverlayActions(actionsEl, renderMlOverlayLinks(project, t));
  if (statusEl) {
    if (project.inDevelopment) {
      statusEl.textContent = t.mlStatusInProgress ?? "";
      statusEl.hidden = false;
    } else {
      statusEl.hidden = true;
    }
  }
  if (toolsEl) {
    const toolsHtml = renderMlOverlayTools(project, t);
    toolsEl.innerHTML = toolsHtml;
    toolsEl.hidden = !toolsHtml;
  }

  if (innerHtmlKeys.has(project.descKey)) {
    descEl.innerHTML = description;
  } else {
    descEl.textContent = description;
  }
  descEl.hidden = !description;

  if (processEl) {
    const processHtml = renderMlCaseStudy(project, t);
    processEl.innerHTML = processHtml;
    processEl.hidden = !processHtml;
  }

  if (project.preview) {
    const imageAlt = escapeHtml(fillAltTemplate(t.projectPreviewAlt, { title }));
    galleryEl.innerHTML = `
      <button
        type="button"
        class="project-overlay__image-btn"
        data-image-index="0"
        aria-label="${escapeHtml(t.projectLightboxOpen ?? "open image")}"
      >
        <img
          class="project-overlay__image"
          src="${escapeHtml(project.preview)}"
          alt="${imageAlt}"
          loading="eager"
          decoding="async"
        />
      </button>
    `;
    galleryEl.hidden = false;
    galleryEl.classList.remove("project-overlay__gallery--two-columns");
  } else {
    galleryEl.innerHTML = "";
    galleryEl.hidden = true;
  }

  arrangeOverlayLayout("ml");
}

function renderDesignerPanelCaption(project, t) {
  const title = t[project.titleKey] ?? "";
  const description = t[project.descKey] ?? "";

  return `
    <div class="project-panel__caption" aria-hidden="true">
      <p class="project-panel__caption-title">${escapeHtml(title)}</p>
      <p class="project-panel__caption-desc">${escapeHtml(description)}</p>
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
          ${renderDesignerPanelCaption(project, t)}
          <div class="project-panel__stack">
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
let openOverlaySource = null;

function getOpenOverlayProject() {
  if (!openProjectId) return null;
  if (openOverlaySource === "ml") {
    return mlProjects.find((item) => item.id === openProjectId) ?? null;
  }
  return designerProjects.find((item) => item.id === openProjectId) ?? null;
}

function getOpenOverlayImages(project) {
  if (!project) return [];
  if (openOverlaySource === "ml") {
    return project.preview ? [project.preview] : [];
  }
  return project.images ?? [];
}

function renderProjectOverlayContent(projectId) {
  if (openOverlaySource === "ml") {
    renderMlOverlayContent(projectId);
    return;
  }

  arrangeOverlayLayout("designer");

  const project = designerProjects.find((item) => item.id === projectId);
  const titleEl = document.getElementById("project-overlay-title");
  const statusEl = document.getElementById("project-overlay-status");
  const toolsEl = document.getElementById("project-overlay-tools");
  const actionsEl = document.getElementById("project-overlay-actions");
  const descEl = document.getElementById("project-overlay-desc");
  const processEl = document.getElementById("project-overlay-process");
  const galleryEl = document.getElementById("project-overlay-gallery");
  if (!project || !titleEl || !descEl || !galleryEl) return;

  const t = translations[currentLang];
  const title = t[project.titleKey] ?? "";
  const description = t[project.descKey] ?? "";

  titleEl.textContent = title;
  populateProjectOverlayActions(actionsEl, renderDesignerOverlayLinks(project, t));
  if (statusEl) {
    if (project.inDevelopment) {
      statusEl.textContent = t.mlStatusInProgress ?? "";
      statusEl.hidden = false;
    } else {
      statusEl.hidden = true;
    }
  }
  if (toolsEl) {
    const toolsHtml = renderDesignerOverlayTools(project.toolKeys, t);
    toolsEl.innerHTML = toolsHtml;
    toolsEl.hidden = !toolsHtml;
  }
  descEl.textContent = description;

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
  const project = getOpenOverlayProject();
  const images = getOpenOverlayImages(project);
  const lightbox = document.getElementById("project-lightbox");
  if (!images.length || !lightbox) return;

  const t = translations[currentLang];
  projectLightboxTitle = t[project.titleKey] ?? "";
  projectLightboxImages = images;
  projectLightboxIndex = Math.max(0, Math.min(imageIndex, images.length - 1));
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

function openProjectOverlay(projectId, source = openOverlaySource ?? "designer") {
  const overlay = document.getElementById("project-overlay");
  if (!overlay || !projectId) return;

  openOverlaySource = source;
  openProjectId = projectId;
  renderProjectOverlayContent(projectId);

  playSurfaceOpen(overlay, () => {
    const closeBtn = document.getElementById("project-overlay-close");
    closeBtn?.focus({ preventScroll: true });

    const scroll = document.getElementById("project-overlay-scroll");
    if (scroll) scroll.scrollTop = 0;
  });
  document.body.classList.add("is-project-overlay-open");
}

function closeProjectOverlay() {
  const overlay = document.getElementById("project-overlay");
  if (!overlay || overlay.hidden) return;

  playSurfaceClose(overlay, () => {
    disconnectProjectOverlayGalleryLayout();
    closeProjectLightbox();
    openProjectId = null;
    openOverlaySource = null;
    document.body.classList.remove("is-project-overlay-open");
  });
}

function showMobilePanelPreview(panel) {
  const caption = panel.querySelector(".project-panel__caption");
  if (!caption) return;

  panel.classList.add("is-preview-open");
  caption.setAttribute("aria-hidden", "false");
  caption.classList.remove("is-caption-visible");

  delete panel._mobileCaptionLock;
  lockMobileCaptionGeometry(caption, panel);

  requestAnimationFrame(() => {
    syncMobileCaptionBottom(caption, panel);
    runMobileCaptionPositionLoop(panel);

    requestAnimationFrame(() => {
      caption.classList.add("is-caption-visible");
    });
  });
}

function hideMobilePanelPreview(panel) {
  cancelMobileCaptionPositionLoop(panel);
  const caption = panel.querySelector(".project-panel__caption");
  panel.classList.remove("is-preview-open");

  if (caption) {
    caption.classList.remove("is-caption-visible");
    caption.setAttribute("aria-hidden", "true");
    window.setTimeout(() => {
      if (!panel.classList.contains("is-preview-open")) {
        resetElevatedMobileCaption(caption, panel);
      }
    }, 460);
  } else {
    delete panel._mobileCaptionLock;
  }
}

const MOBILE_CAPTION_GAP = 8;
const MOBILE_PREVIEW_ANIM_MS = 580;

function cancelMobileCaptionPositionLoop(panel) {
  if (!panel?._captionFrameId) return;
  cancelAnimationFrame(panel._captionFrameId);
  panel._captionFrameId = 0;
}

function getMobilePanelCaptionMetrics(panel) {
  const card = panel.querySelector(".project-panel__card");
  const rect = (card ?? panel).getBoundingClientRect();

  return {
    left: rect.left,
    width: rect.width,
    top: rect.top,
  };
}

function lockMobileCaptionGeometry(caption, panel) {
  const { left, width, top } = getMobilePanelCaptionMetrics(panel);

  panel._mobileCaptionLock = { left, width };
  caption.classList.add("project-panel__caption--elevated");
  caption.style.left = `${left}px`;
  caption.style.right = "auto";
  caption.style.width = `${width}px`;
  caption.style.top = "auto";
  caption.style.bottom = `${window.innerHeight - top + MOBILE_CAPTION_GAP}px`;
}

function syncMobileCaptionBottom(caption, panel) {
  if (!panel.classList.contains("is-preview-open")) return;

  if (!panel._mobileCaptionLock) {
    lockMobileCaptionGeometry(caption, panel);
    return;
  }

  const { top } = getMobilePanelCaptionMetrics(panel);
  const { left, width } = panel._mobileCaptionLock;

  caption.style.left = `${left}px`;
  caption.style.width = `${width}px`;
  caption.style.bottom = `${window.innerHeight - top + MOBILE_CAPTION_GAP}px`;
}

function positionElevatedMobileCaption(caption, panel) {
  syncMobileCaptionBottom(caption, panel);
}

function resetElevatedMobileCaption(caption, panel) {
  caption.classList.remove("project-panel__caption--elevated", "is-caption-visible");
  caption.style.left = "";
  caption.style.right = "";
  caption.style.width = "";
  caption.style.top = "";
  caption.style.bottom = "";
  if (panel) {
    delete panel._mobileCaptionLock;
  }
}

function runMobileCaptionPositionLoop(panel, durationMs = MOBILE_PREVIEW_ANIM_MS) {
  const caption = panel.querySelector(".project-panel__caption");
  if (!caption) return;

  cancelMobileCaptionPositionLoop(panel);

  const start = performance.now();
  const tick = (now) => {
    if (!panel.classList.contains("is-preview-open")) {
      cancelMobileCaptionPositionLoop(panel);
      return;
    }

    syncMobileCaptionBottom(caption, panel);

    if (now - start < durationMs) {
      panel._captionFrameId = requestAnimationFrame(tick);
    } else {
      cancelMobileCaptionPositionLoop(panel);
    }
  };

  syncMobileCaptionBottom(caption, panel);
  panel._captionFrameId = requestAnimationFrame(tick);
}

function scheduleMobileCaptionPosition(panel) {
  const caption = panel.querySelector(".project-panel__caption");
  if (!caption) return;

  delete panel._mobileCaptionLock;
  lockMobileCaptionGeometry(caption, panel);
  if (panel.classList.contains("is-preview-open")) {
    caption.classList.add("is-caption-visible");
  }
}

function repositionElevatedMobileCaptions() {
  document
    .querySelectorAll(".projects-stack--mobile .project-panel.is-preview-open")
    .forEach((panel) => scheduleMobileCaptionPosition(panel));
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

function hideAllMobilePanelPreviews() {
  document
    .querySelectorAll(".projects-stack--mobile .project-panel.is-preview-open")
    .forEach((panel) => hideMobilePanelPreview(panel));
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
        openProjectOverlay(panel.dataset.projectId, "designer");
        return;
      }

      hideAllMobilePanelPreviews();
      showMobilePanelPreview(panel);
      return;
    }

    openProjectOverlay(panel.dataset.projectId, "designer");
  });

  scene.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const panel = event.target.closest(".project-panel");
    if (!panel?.dataset.projectId) return;
    event.preventDefault();

    if (isMobileProjectLayout()) {
      if (panel.classList.contains("is-preview-open")) {
        hideMobilePanelPreview(panel);
        openProjectOverlay(panel.dataset.projectId, "designer");
        return;
      }

      hideAllMobilePanelPreviews();
      showMobilePanelPreview(panel);
      return;
    }

    openProjectOverlay(panel.dataset.projectId, "designer");
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
const SITE_OG_IMAGE = `${SITE_ORIGIN}/images/bookmark-cloud.png?v=8`;

const PAGE_SEO = {
  index: {
    path: "/",
    ru: {
      title: "natalia's portfolio",
      description:
        "Наталья Агапова, product / UX/UI designer. интерфейсы и визуальные системы для продуктов и брендов. кейсы для Innopolis, Почты России, Croissan Studio и др.",
    },
    en: {
      title: "natalia's portfolio",
      description:
        "Natalia Agapova, product / UX/UI designer. interfaces and visual systems for products and brands. cases for Innopolis, Russian Post, Croissan Studio, and more.",
    },
  },
  designer: {
    path: "/designer",
    ru: {
      title: "дизайнер · natalia's portfolio",
      description: "UX/UI и продуктовый дизайн, кейсы Натальи Агаповой.",
    },
    en: {
      title: "designer · natalia's portfolio",
      description: "UX/UI and product design cases by Natalia Agapova.",
    },
  },
  frontend: {
    path: "/dev",
    ru: {
      title: "dev · natalia's portfolio",
      description: "разработка: веб и нативные приложения, проекты Натальи Агаповой.",
    },
    en: {
      title: "dev · natalia's portfolio",
      description: "development projects by Natalia Agapova: web and native apps.",
    },
  },
  dev: {
    path: "/dev",
    ru: {
      title: "dev · natalia's portfolio",
      description: "разработка: веб и нативные приложения, проекты Натальи Агаповой.",
    },
    en: {
      title: "dev · natalia's portfolio",
      description: "development projects by Natalia Agapova: web and native apps.",
    },
  },
  ml: {
    path: "/ml",
    ru: {
      title: "ML · natalia's portfolio",
      description: "ML-разработка и исследования, портфолио Натальи Агаповой.",
    },
    en: {
      title: "ML · natalia's portfolio",
      description: "ml development and research, Natalia Agapova's portfolio.",
    },
  },
  person: {
    path: "/person",
    ru: {
      title: "человек · natalia's portfolio",
      description: "личные заметки и фото, портфолио Натальи Агаповой.",
    },
    en: {
      title: "person · natalia's portfolio",
      description: "personal notes and photos, Natalia Agapova's portfolio.",
    },
  },
};

function getCurrentPageSeoKey() {
  const path = window.location.pathname.replace(/\/+$/, "").toLowerCase();
  const page = path.split("/").pop() || "";

  if (page === "designer" || page === "designer.html") return "designer";
  if (page === "dev" || page === "dev.html" || page === "frontend" || page === "frontend.html") return "dev";
  if (page === "ml" || page === "ml.html") return "ml";
  if (page === "person" || page === "person.html") return "person";
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

function renderAboutEntries(t) {
  for (const [key, id] of Object.entries(aboutEntryKeyToId)) {
    const el = document.getElementById(id);
    const entry = t[key];
    if (!el || !entry) continue;

    el.innerHTML = `
      <div class="about-entry__head">
        <span class="about-entry__title">${renderProjectTitleLink(entry.title, aboutEntryUrls[key])}</span>
        <span class="about-entry__period">${escapeHtml(entry.period)}</span>
      </div>
      <p class="about-entry__desc">${escapeHtml(entry.description)}</p>
    `;
  }
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

  renderAboutEntries(t);

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

  const cvTrigger = document.getElementById("navbar-cv-download");
  if (cvTrigger) {
    if (t.navbarCvAria) {
      cvTrigger.setAttribute("aria-label", t.navbarCvAria);
    }
    const cvLabelEl = document.getElementById("navbar-cv-label");
    if (cvLabelEl && t.navbarCvLabel) {
      cvLabelEl.textContent = t.navbarCvLabel;
    }
  }

  initCvPicker(t);

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
    const project = getOpenOverlayProject();
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
  markHeroLayoutReady();
  rolesScrollMetrics = null;
  scheduleRolesScrollReveal();
}

let heroFitFrame;
function scheduleHeroLayoutFit() {
  cancelAnimationFrame(heroFitFrame);
  heroFitFrame = requestAnimationFrame(() => {
    Promise.resolve(fitHeroHeadline()).finally(() => {
      if (!document.documentElement.classList.contains("hero-layout-ready")) {
        markHeroLayoutReady();
      }
    });
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
const HOME_SCROLL_STORAGE_KEY = "portfolioHomeScrollY";
const HOME_SCROLL_PENDING_KEY = "portfolioHomeScrollPending";

function getHomeNavigationType() {
  const nav = performance.getEntriesByType("navigation")[0];
  return nav?.type || "";
}

function isInternalSubpagePath(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  return path !== "/" && path !== "/index.html";
}

function shouldRestoreHomeScroll() {
  try {
    const raw = sessionStorage.getItem(HOME_SCROLL_STORAGE_KEY);
    if (!raw) return false;

    const y = parseFloat(raw);
    if (!Number.isFinite(y) || y <= 0) return false;

    const navType = getHomeNavigationType();
    if (navType === "back_forward" || navType === "reload") return true;

    if (sessionStorage.getItem(HOME_SCROLL_PENDING_KEY) === "1") {
      const ref = document.referrer;
      if (ref) {
        const refUrl = new URL(ref);
        if (refUrl.origin === window.location.origin && isInternalSubpagePath(refUrl.pathname)) {
          return true;
        }
      }
    }

    const ref = document.referrer;
    if (!ref) return false;

    const refUrl = new URL(ref);
    if (refUrl.origin !== window.location.origin) return false;

    return isInternalSubpagePath(refUrl.pathname);
  } catch {
    return false;
  }
}

function saveHomeScrollPosition() {
  if (!document.getElementById("hero-experience")) return;

  try {
    sessionStorage.setItem(HOME_SCROLL_STORAGE_KEY, String(window.scrollY));
    sessionStorage.setItem(HOME_SCROLL_PENDING_KEY, "1");
  } catch {
    /* storage may be blocked */
  }
}

function restoreHomeScrollPosition(force = false) {
  if (!force && !shouldRestoreHomeScroll()) return;

  try {
    const y = parseFloat(sessionStorage.getItem(HOME_SCROLL_STORAGE_KEY));
    if (!Number.isFinite(y) || y <= 0) return;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, y);
    updateHeroPinRelease();
    rolesScrollMetrics = null;
    scheduleRolesScrollReveal();
  } catch {
    /* ignore */
  }
}

function initHomeScrollMemory() {
  if (!document.getElementById("hero-experience")) return;

  let scrollSaveRaf = 0;
  const scheduleSaveHomeScrollPosition = () => {
    cancelAnimationFrame(scrollSaveRaf);
    scrollSaveRaf = requestAnimationFrame(saveHomeScrollPosition);
  };

  window.addEventListener("scroll", scheduleSaveHomeScrollPosition, { passive: true });
  window.addEventListener("pagehide", saveHomeScrollPosition);
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      restoreHomeScrollPosition(true);
    }
  });

  restoreHomeScrollPosition();
}

function markHeroLayoutReady() {
  document.documentElement.classList.add("hero-layout-ready");
  document.getElementById("hero-experience")?.classList.add("is-layout-ready");
  if (getHomeNavigationType() === "back_forward" || getHomeNavigationType() === "reload") {
    restoreHomeScrollPosition(true);
  }
}

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
    initHomeScrollMemory();
    scheduleHeroLayoutFit();
    scheduleLangMapPath();
    initLangMapGlowObserver();
    initHeroBlink();
    initRolesScrollReveal();
    requestAnimationFrame(() => {
      restoreHomeScrollPosition();
    });
  }

  if (isDesignerPage || isMlPage) {
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
  scheduleCardGridLayout();
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
