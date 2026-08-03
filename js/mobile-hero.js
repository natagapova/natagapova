window.__MOBILE_HERO_EXTENSION__ = true;

const MOBILE_HERO_MAX_WIDTH = 719;
const MOBILE_HERO_PHOTO_VH = 0.45;
const MOBILE_CLOUDS_BASE_SCALE = 0.792;
const MOBILE_CLOUDS_MIN_SCALE = 0.65;
const MOBILE_CLOUDS_MAX_STACK_RATIO = 0.94;
const MOBILE_CLOUDS_OVERLAP_RATIO = 0.33;
const MOBILE_CLOUDS_OVERLAP_MAX = 0.72;
const MOBILE_CLOUDS_STICKY_BASE_VH = 0.05;

function isMobileHeroLayout() {
  return window.matchMedia(`(max-width: ${MOBILE_HERO_MAX_WIDTH}px)`).matches;
}

function getMobileTitleFitWidth(hero, stage) {
  if (stage?.clientWidth > 0) {
    return stage.clientWidth;
  }

  const heroStyle = hero ? getComputedStyle(hero) : null;
  const inset = parseFloat(heroStyle?.getPropertyValue("--hero-mobile-inset")) || 16;
  return Math.max(window.innerWidth - inset * 2, 280);
}

function getHeroTitleLines(heading) {
  return heading ? [...heading.querySelectorAll(".hero-intro__title-line")] : [];
}

function fitHeroTitleLineToWidth(line, availableWidth) {
  const maxWidth = availableWidth - 2;
  const restore = {
    display: line.style.display,
    width: line.style.width,
    maxWidth: line.style.maxWidth,
    marginInline: line.style.marginInline,
    position: line.style.position,
    left: line.style.left,
    top: line.style.top,
    visibility: line.style.visibility,
    gridRow: line.style.gridRow,
    gridColumn: line.style.gridColumn,
  };

  line.style.position = "fixed";
  line.style.left = "-10000px";
  line.style.top = "0";
  line.style.visibility = "hidden";
  line.style.display = "inline-block";
  line.style.width = "auto";
  line.style.maxWidth = "none";
  line.style.marginInline = "0";
  line.style.gridRow = "auto";
  line.style.gridColumn = "auto";

  let lo = 16;
  let hi = 900;

  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    line.style.fontSize = `${mid}px`;
    if (line.scrollWidth > maxWidth) {
      hi = mid - 1;
    } else {
      lo = mid;
    }
  }

  line.style.fontSize = `${lo}px`;
  line.style.position = restore.position;
  line.style.left = restore.left;
  line.style.top = restore.top;
  line.style.visibility = restore.visibility;
  line.style.gridRow = restore.gridRow;
  line.style.gridColumn = restore.gridColumn;
  line.style.display = "block";
  line.style.width = "auto";
  line.style.maxWidth = "100%";
  line.style.marginInline = "auto";

  return lo;
}

function getHeroRoleCards() {
  const nav = document.getElementById("hero-roles-nav");
  return [...(nav?.querySelectorAll(".role-card") || [])];
}

function clearMobileThoughtShells() {
  getHeroRoleCards().forEach((card) => {
    const shell = card.querySelector(":scope > .role-card__thought-shell");
    if (!shell) return;

    const img = shell.querySelector(".role-card__thought-img");
    const body = shell.querySelector(".role-card__thought-body");
    if (img) card.insertBefore(img, shell);
    if (body) card.insertBefore(body, img ? img.nextSibling : null);
    shell.remove();
  });
}

function ensureMobileThoughtShells() {
  if (!isMobileHeroLayout()) return;

  getHeroRoleCards().forEach((card) => {
    if (!card.classList.contains("role-card--thought")) return;
    if (card.querySelector(":scope > .role-card__thought-shell")) return;

    const img = card.querySelector(":scope > .role-card__thought-img");
    const body = card.querySelector(":scope > .role-card__thought-body");
    if (!img || !body) return;

    const shell = document.createElement("span");
    shell.className = "role-card__thought-shell";
    card.insertBefore(shell, img);
    shell.append(img, body);
  });
}

let mobileCloudImagesWired = false;

function wireMobileCloudImageLoads() {
  if (mobileCloudImagesWired) return;
  mobileCloudImagesWired = true;

  getHeroRoleCards().forEach((card) => {
    const img = card.querySelector(".role-card__thought-img");
    if (!img || img.complete) return;

    img.addEventListener(
      "load",
      () => {
        if (!isMobileHeroLayout()) return;
        syncHeroRolesPlacement();
        rolesScrollMetrics = null;
        scheduleRolesScrollReveal();
      },
      { once: true }
    );
  });
}

function clearMobileCloudsLayout() {
  const clouds = document.getElementById("hero-clouds");
  const pin = document.getElementById("hero-clouds-pin");
  const track = document.getElementById("hero-clouds-track");
  const nav = document.getElementById("hero-roles-nav");
  const cards = getHeroRoleCards();

  clouds?.classList.remove("is-pinned", "is-released");
  pin?.style.removeProperty("--hero-mobile-cloud-scale");
  nav?.style.removeProperty("--hero-mobile-cloud-scale");
  clouds?.style.removeProperty("min-height");
  track?.style.removeProperty("height");

  delete clouds?.dataset.cloudStep;
  delete clouds?.dataset.stickyBase;
  delete clouds?.dataset.scrollTrack;

  cards.forEach((card) => {
    card.style.removeProperty("position");
    card.style.removeProperty("left");
    card.style.removeProperty("right");
    card.style.removeProperty("top");
    card.style.removeProperty("bottom");
    card.style.removeProperty("width");
    card.style.removeProperty("max-width");
    card.style.removeProperty("margin-top");
    card.style.removeProperty("margin-inline");
    card.style.removeProperty("--hero-mobile-cloud-scale");
    card.style.removeProperty("z-index");
    card.style.removeProperty("opacity");
    card.style.removeProperty("transform");
    delete card.dataset.finalTop;
  });

  clearMobileThoughtShells();
}

function updateMobileCloudsPinState() {
  const clouds = document.getElementById("hero-clouds");
  const track = document.getElementById("hero-clouds-track");
  if (!clouds || !track) return 0;

  const trackH = track.offsetHeight;
  const viewportH = window.innerHeight;
  const rect = clouds.getBoundingClientRect();
  const scrolled = Math.max(0, -rect.top);

  clouds.classList.remove("is-pinned", "is-released");

  if (trackH <= 0) {
    clouds.style.removeProperty("min-height");
    return scrolled;
  }

  clouds.style.minHeight = `${viewportH + trackH}px`;

  if (rect.top > 0) {
    return scrolled;
  }

  if (scrolled < trackH) {
    clouds.classList.add("is-pinned");
    return scrolled;
  }

  clouds.classList.add("is-released");
  return scrolled;
}

function updateMobileCloudsLayout() {
  const clouds = document.getElementById("hero-clouds");
  if (!clouds) return;

  if (!isMobileHeroLayout()) {
    clearMobileCloudsLayout();
    return;
  }

  const pin = document.getElementById("hero-clouds-pin");
  const track = document.getElementById("hero-clouds-track");
  const nav = document.getElementById("hero-roles-nav");
  const cards = getHeroRoleCards();
  if (!pin || !track || !nav || !cards.length) return;

  ensureMobileThoughtShells();

  const viewportH = window.innerHeight;
  const pinStyle = getComputedStyle(pin);
  const pinPaddingBottom = parseFloat(pinStyle.paddingBottom) || 0;
  const stickyBase = Math.round(viewportH * MOBILE_CLOUDS_STICKY_BASE_VH);
  const maxStackH =
    viewportH - stickyBase - pinPaddingBottom - Math.round(viewportH * 0.04);

  let scale = MOBILE_CLOUDS_BASE_SCALE;
  let overlapRatio = MOBILE_CLOUDS_OVERLAP_RATIO;

  const computeStack = (heights, baseTop, overlap) => {
    const finalTops = [baseTop];

    for (let index = 1; index < heights.length; index++) {
      const stepOverlap = Math.round(heights[index - 1] * overlap);
      finalTops[index] = finalTops[index - 1] + heights[index - 1] - stepOverlap;
    }

    const stackH =
      finalTops[finalTops.length - 1] + heights[heights.length - 1] - finalTops[0];

    return { finalTops, stackH };
  };

  const layoutAtScale = (nextScale, nextOverlap) => {
    const scaleValue = String(nextScale);
    pin.style.setProperty("--hero-mobile-cloud-scale", scaleValue);
    nav.style.setProperty("--hero-mobile-cloud-scale", scaleValue);

    cards.forEach((card) => {
      card.style.setProperty("--hero-mobile-cloud-scale", scaleValue);
      card.style.position = "absolute";
      card.style.left = "0";
      card.style.right = "0";
      card.style.removeProperty("width");
      card.style.removeProperty("max-width");
      card.style.marginTop = "0";
      card.style.marginInline = "auto";
      card.style.opacity = "1";
      card.style.top = "0";
      card.style.bottom = "auto";
      card.style.transform = "none";
    });
    void nav.offsetHeight;

    const heights = cards.map((card) => {
      const shell = card.querySelector(".role-card__thought-shell");
      return (shell || card).getBoundingClientRect().height;
    });
    let { finalTops, stackH } = computeStack(heights, stickyBase, nextOverlap);

    if (stackH < maxStackH) {
      const shift = Math.round((maxStackH - stackH) * 0.22);
      finalTops = finalTops.map((top) => top + shift);
      stackH += shift;
    }

    return { heights, finalTops, stackH };
  };

  let layout = layoutAtScale(scale, overlapRatio);

  while (layout.stackH > maxStackH && overlapRatio < MOBILE_CLOUDS_OVERLAP_MAX) {
    overlapRatio = Math.min(MOBILE_CLOUDS_OVERLAP_MAX, overlapRatio + 0.03);
    layout = layoutAtScale(scale, overlapRatio);
  }

  if (layout.stackH > maxStackH && layout.stackH > 0) {
    scale = Math.max(
      MOBILE_CLOUDS_MIN_SCALE,
      MOBILE_CLOUDS_BASE_SCALE * (maxStackH / layout.stackH)
    );
    layout = layoutAtScale(scale, overlapRatio);
  }

  const scrollStep = Math.max(
    Math.round((layout.heights[0] || 72) * (1 - overlapRatio)),
    Math.round(viewportH * 0.1)
  );
  const trackH = scrollStep * cards.length;

  cards.forEach((card, index) => {
    card.dataset.finalTop = String(layout.finalTops[index]);
    card.style.top = `${layout.finalTops[index] + 48}px`;
    card.style.opacity = "0";
    card.style.zIndex = String(index + 1);
  });

  track.style.height = `${trackH}px`;
  clouds.style.minHeight = `${viewportH + trackH}px`;
  clouds.dataset.cloudStep = String(scrollStep);
  clouds.dataset.stickyBase = String(stickyBase);
  clouds.dataset.scrollTrack = String(trackH);
  clouds.dataset.overlapRatio = String(overlapRatio);
}

function updateMobileCloudsScroll() {
  const clouds = document.getElementById("hero-clouds");
  const track = document.getElementById("hero-clouds-track");
  if (!clouds || !track) return;

  const cards = getHeroRoleCards();
  if (!cards.length) return;

  const trackH = track.offsetHeight;
  if (trackH <= 0) return;

  const scrolled = updateMobileCloudsPinState();
  const progress = clamp01(scrolled / trackH);
  const cardCount = cards.length;
  const step = 1 / cardCount;

  cards.forEach((card, index) => {
    const finalTop = parseFloat(card.dataset.finalTop) || 0;
    const revealStart = index * step;
    const localP = clamp01((progress - revealStart) / (step * 0.9));
    const eased = easeOutCubic(localP);
    const enterOffset = 64 - index * 6;
    const startTop = finalTop + enterOffset;

    card.classList.add("role-card--scroll-anim");
    card.style.transform = "none";
    card.style.zIndex = String(index + 1);

    if (eased <= 0) {
      card.style.opacity = "0";
      card.style.top = `${startTop}px`;
      return;
    }

    card.style.opacity = String(eased);
    card.style.top = `${startTop + (finalTop - startTop) * eased}px`;
    card.classList.toggle("role-card--scroll-settled", localP >= 0.995);
  });
}

function syncHeroRolesPlacement() {
  const stage = document.querySelector(".hero-intro__stage");
  const pin = document.getElementById("hero-clouds-pin");
  const nav = document.getElementById("hero-roles-nav");
  if (!stage || !pin || !nav) return;

  if (isMobileHeroLayout()) {
    if (nav.parentElement !== pin) {
      pin.appendChild(nav);
    }
    updateMobileCloudsLayout();
    return;
  }

  clearMobileCloudsLayout();

  if (nav.parentElement !== stage) {
    const photoWrap = document.getElementById("hero-photo-wrap");
    if (photoWrap) {
      photoWrap.insertAdjacentElement("afterend", nav);
    } else {
      stage.appendChild(nav);
    }
  }
}

const buildHeroHeadlineHtmlDesktop = buildHeroHeadlineHtml;
buildHeroHeadlineHtml = function buildHeroHeadlineHtmlMobile(text) {
  const words = text.trim().split(/\s+/);

  if (!isMobileHeroLayout() || words.length < 2) {
    return buildHeroHeadlineHtmlDesktop(text);
  }

  const [first, ...rest] = words;
  const line1 = `<span class="hero-word">${formatHeroWord(first)}</span>`;
  const line2 = rest
    .map((word) => `<span class="hero-word">${formatHeroWord(word)}</span>`)
    .join(" ");
  return `<span class="hero-intro__title-line">${line1}</span><span class="hero-intro__title-line">${line2}</span>`;
};

const syncBlinkPhotoScaleDesktop = syncBlinkPhotoScale;
syncBlinkPhotoScale = function syncBlinkPhotoScaleMobile(photoWrap) {
  if (!isMobileHeroLayout()) {
    return syncBlinkPhotoScaleDesktop(photoWrap);
  }

  const open = photoWrap.querySelector(".hero-intro__photo--open");
  const closed = photoWrap.querySelector(".hero-intro__photo--closed");
  if (!open?.offsetWidth || !open.offsetHeight) return;

  if (closed) {
    closed.style.removeProperty("width");
    closed.style.removeProperty("height");
    closed.style.removeProperty("left");
    closed.style.removeProperty("top");
    closed.style.removeProperty("right");
    closed.style.removeProperty("bottom");
    closed.style.removeProperty("transform");
  }

  return syncBlinkPhotoScaleDesktop(photoWrap);
};

const fitHeroPhotoDesktop = fitHeroPhoto;
fitHeroPhoto = function fitHeroPhotoMobile() {
  if (!isMobileHeroLayout()) {
    return fitHeroPhotoDesktop();
  }

  const hero = document.querySelector(".hero-intro");
  const stage = hero?.querySelector(".hero-intro__stage");
  const heading = document.getElementById("store-name");
  const photoWrap = document.getElementById("hero-photo-wrap");
  if (!hero || !stage || !heading || !photoWrap) return;

  const lines = getHeroTitleLines(heading);
  if (!lines.length) return;

  const heroStyle = getComputedStyle(hero);
  const viewportH = window.innerHeight;
  const photoVh = parseFloat(heroStyle.getPropertyValue("--hero-mobile-photo-vh")) || MOBILE_HERO_PHOTO_VH;
  const targetHeight = Math.round(viewportH * photoVh);

  photoWrap.style.setProperty("--hero-photo-max-height", `${targetHeight}px`);
  photoWrap.style.removeProperty("--hero-photo-height");
  photoWrap.style.setProperty("--hero-photo-width", "auto");
  photoWrap.style.removeProperty("margin-top");
  syncBlinkPhotoScale(photoWrap);
  requestAnimationFrame(() => syncBlinkPhotoScale(photoWrap));
  syncHeroRolesPlacement();
  rolesScrollMetrics = null;
  scheduleRolesScrollReveal();
};

const fitHeroHeadlineDesktop = fitHeroHeadline;
fitHeroHeadline = async function fitHeroHeadlineMobile() {
  if (!isMobileHeroLayout()) {
    return fitHeroHeadlineDesktop();
  }

  const heading = document.getElementById("store-name");
  const hero = document.querySelector(".hero-intro");
  const stage = hero?.querySelector(".hero-intro__stage");
  if (!heading) return;

  let lines = getHeroTitleLines(heading);
  if (lines.length < 2) {
    const headline = translations[currentLang]?.myName;
    if (headline) {
      heading.innerHTML = buildHeroHeadlineHtml(headline);
      lines = getHeroTitleLines(heading);
    }
  }
  if (!lines.length) return;

  const mobileWidth = getMobileTitleFitWidth(hero, stage);
  if (mobileWidth <= 0) return;

  try {
    await document.fonts.load('1em "Theater Bold"');
  } catch {
    /* ignore */
  }

  lines.forEach((titleLine) => {
    fitHeroTitleLineToWidth(titleLine, mobileWidth);
  });
  const titleBlockHeight = lines.reduce((sum, titleLine) => sum + titleLine.offsetHeight, 0);
  heading.style.setProperty("--hero-title-size", `${titleBlockHeight}px`);
  fitHeroPhoto();
  syncHeroRolesPlacement();
  rolesScrollMetrics = null;
  scheduleRolesScrollReveal();
};

const updateHeroPinReleaseDesktop = updateHeroPinRelease;
updateHeroPinRelease = function updateHeroPinReleaseMobile() {
  if (isMobileHeroLayout()) {
    document.getElementById("hero-experience")?.classList.remove("is-released", "is-pinned");
    return;
  }
  return updateHeroPinReleaseDesktop();
};

const updateRolesScrollDesktop = updateRolesScroll;
updateRolesScroll = function updateRolesScrollMobile() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  if (isMobileHeroLayout()) {
    updateMobileCloudsScroll();
    return;
  }

  return updateRolesScrollDesktop();
};

const initRolesScrollRevealDesktop = initRolesScrollReveal;
initRolesScrollReveal = function initRolesScrollRevealMobile() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!document.getElementById("hero-experience")) return;

  if (isMobileHeroLayout()) {
    rolesScrollMetrics = null;
    heroPinWasReleased = false;
    wireMobileCloudImageLoads();
    syncHeroRolesPlacement();
    scheduleRolesScrollReveal();

    window.addEventListener("scroll", scheduleRolesScrollReveal, { passive: true });
    window.addEventListener(
      "resize",
      () => {
        rolesScrollMetrics = null;
        syncHeroRolesPlacement();
        scheduleRolesScrollReveal();
      },
      { passive: true }
    );
    return;
  }

  return initRolesScrollRevealDesktop();
};

window.addEventListener("resize", () => {
  syncHeroRolesPlacement();
});

window.bootPortfolio();
