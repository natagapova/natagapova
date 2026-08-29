const PERSON_GALLERY_MANIFEST = "images/person-images/manifest.json";
const PERSON_GALLERY_BASE_PATH = "images/person-images/";

const PERSON_GALLERY_BREAKPOINTS = [
  { maxWidth: 719, columns: 2 },
  { maxWidth: 1150, columns: 3 },
  { maxWidth: Infinity, columns: 4 },
];

let personGalleryItems = [];
let personGalleryColumnCount = 0;
let personGalleryLastWidth = 0;
let personGalleryResizeTimer = null;
let personGalleryObserver = null;

function getGalleryItemGap() {
  const probe = document.createElement("div");
  probe.className = "gallery gallery-temp";
  probe.style.visibility = "hidden";
  probe.style.position = "absolute";
  probe.style.pointerEvents = "none";
  document.body.appendChild(probe);

  const galleryColumn = document.createElement("div");
  galleryColumn.className = "gallery-column";
  probe.appendChild(galleryColumn);

  for (let i = 0; i < 2; i++) {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.style.height = "10px";
    item.style.width = "10px";
    galleryColumn.appendChild(item);
  }

  let gap = 0;
  try {
    const style = window.getComputedStyle(galleryColumn);
    const rawGap = style.rowGap || style.gap || "0px";
    gap = parseFloat(rawGap) || 0;
  } catch (e) {
    gap = 0;
  } finally {
    document.body.removeChild(probe);
  }
  return gap;
}

function personGalleryAssetPath(relativePath) {
  const parts = relativePath.split("/");
  if (parts.length === 1) {
    return PERSON_GALLERY_BASE_PATH + encodeURIComponent(parts[0]);
  }
  return `${PERSON_GALLERY_BASE_PATH}${parts.slice(0, -1).join("/")}/${encodeURIComponent(parts[parts.length - 1])}`;
}

function personGalleryFullSrc(name) {
  return personGalleryAssetPath(name);
}

function getPersonGalleryColumnCount() {
  const width = window.innerWidth;

  for (const breakpoint of PERSON_GALLERY_BREAKPOINTS) {
    if (width <= breakpoint.maxWidth) {
      return breakpoint.columns;
    }
  }

  return 4;
}

function normalizePersonGalleryItem(entry) {
  if (typeof entry === "string") {
    const type = /\.(mov|mp4|webm)$/i.test(entry) ? "video" : "image";
    return {
      name: entry,
      type,
      aspectRatio: 1,
      thumb: null,
      poster: null,
      preview: null,
    };
  }

  return {
    name: entry.name,
    type: entry.type,
    aspectRatio: entry.aspectRatio > 0 ? entry.aspectRatio : 1,
    thumb: entry.thumb ?? null,
    poster: entry.poster ?? null,
    preview: entry.preview ?? null,
  };
}

function shufflePersonGallery(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

async function loadPersonGalleryManifest() {
  const response = await fetch(PERSON_GALLERY_MANIFEST);
  if (!response.ok) throw new Error("could not load person gallery manifest");
  const entries = await response.json();
  return shufflePersonGallery(entries.map(normalizePersonGalleryItem));
}

function distributePersonGalleryItems(items, columnCount, columnWidth, gapPx) {
  const columns = Array.from({ length: columnCount }, () => []);
  const heights = Array.from({ length: columnCount }, () => 0);

  for (const item of items) {
    const aspectRatio = item.aspectRatio > 0 ? item.aspectRatio : 1;
    const height = columnWidth / aspectRatio;
    let minIdx = 0;
    let minAccum = heights[0];
    for (let i = 1; i < columnCount; i++) {
      if (heights[i] < minAccum) {
        minAccum = heights[i];
        minIdx = i;
      }
    }
    columns[minIdx].push({
      ...item,
      _expectedHeight: height,
    });
    heights[minIdx] += (columns[minIdx].length > 1 ? gapPx : 0) + height;
  }

  return { columns, heights };
}

function getPersonGalleryMinHeightRatio(item) {
  return item.type === "video" ? 1 : 0.85;
}

function computeColumnAdjustedHeights(columnItems, colHeight, targetMinHeight, gapPx) {
  const itemCount = columnItems.length;
  const numGaps = itemCount > 1 ? itemCount - 1 : 0;
  const overflow = colHeight - targetMinHeight;

  const indexed = columnItems.map((item, idx) => ({
    origIdx: idx,
    origHeight: item._expectedHeight,
    minHeight: item._expectedHeight * getPersonGalleryMinHeightRatio(item),
  }));

  if (overflow <= 0) {
    return indexed.map((entry) => entry.origHeight);
  }

  let neededTrim = overflow;
  const sorted = [...indexed].sort((a, b) => b.origHeight - a.origHeight);
  const trimmed = new Array(indexed.length).fill(0);

  for (const entry of sorted) {
    if (neededTrim <= 0) break;
    const maxTrim = entry.origHeight - entry.minHeight;
    if (maxTrim <= 0) continue;
    const toTrim = Math.min(neededTrim, maxTrim);
    trimmed[entry.origIdx] = toTrim;
    neededTrim -= toTrim;
  }

  const candidateHeights = columnItems.map((item, idx) =>
    Math.max(
      item._expectedHeight - (trimmed[idx] || 0),
      item._expectedHeight * getPersonGalleryMinHeightRatio(item)
    )
  );

  let sumCandidate = candidateHeights.reduce((sum, height) => sum + height, 0) + numGaps * gapPx;
  const correction = sumCandidate - targetMinHeight;

  if (correction > 1e-6) {
    const trimmable = candidateHeights
      .map((height, idx) => ({
        idx,
        slack: height - columnItems[idx]._expectedHeight * getPersonGalleryMinHeightRatio(columnItems[idx]),
      }))
      .filter((entry) => entry.slack > 1e-6)
      .sort((a, b) => b.slack - a.slack);

    let remaining = correction;
    for (const entry of trimmable) {
      if (remaining <= 0) break;
      const delta = Math.min(remaining, entry.slack);
      candidateHeights[entry.idx] -= delta;
      remaining -= delta;
    }
  }

  return candidateHeights;
}

function personGalleryMediaLabel(name) {
  return decodeURIComponent(name).replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").trim();
}

function getPersonGalleryAlt(item) {
  const t = typeof translations !== "undefined" ? translations[currentLang] : null;
  const name = personGalleryMediaLabel(item.name);
  const template =
    item.type === "video"
      ? t?.personGalleryVideoAlt ?? "Video: {{name}}"
      : t?.personGalleryPhotoAlt ?? "Photo: {{name}}";
  return template.replace("{{name}}", name);
}

function getPersonGalleryGridSrc(item) {
  if (item.type === "video") {
    return item.poster ? personGalleryAssetPath(item.poster) : personGalleryFullSrc(item.name);
  }
  return item.thumb ? personGalleryAssetPath(item.thumb) : personGalleryFullSrc(item.name);
}

function updatePersonGalleryAlts() {
  document.querySelectorAll(".gallery-item").forEach((wrapper) => {
    const name = wrapper.dataset.mediaName;
    if (!name) return;

    const item = {
      name,
      type: wrapper.dataset.type || "image",
    };
    const alt = getPersonGalleryAlt(item);

    const img = wrapper.querySelector("img");
    if (img) img.alt = alt;

    const video = wrapper.querySelector("video");
    if (video) video.setAttribute("aria-label", alt);
  });
}

window.updatePersonGalleryAlts = updatePersonGalleryAlts;

function createPersonGalleryElement(item) {
  const wrapper = document.createElement("div");
  wrapper.className = "gallery-item";
  wrapper.dataset.type = item.type;
  wrapper.dataset.mediaName = item.name;
  wrapper.dataset.fullSrc = personGalleryFullSrc(item.name);
  if (item.poster) {
    wrapper.dataset.posterSrc = personGalleryAssetPath(item.poster);
  }

  if (item.type === "video") {
    wrapper.classList.add("gallery-item--video");

    const video = document.createElement("video");
    video.className = "gallery-item__video";
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "none";
    video.setAttribute("aria-label", getPersonGalleryAlt(item));
    if (item.preview) {
      video.dataset.previewSrc = personGalleryAssetPath(item.preview);
    }
    wrapper.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.alt = getPersonGalleryAlt(item);
    img.loading = "lazy";
    img.decoding = "async";
    img.dataset.gridSrc = getPersonGalleryGridSrc(item);
    wrapper.appendChild(img);
  }

  return wrapper;
}

function loadPersonGalleryMedia(wrapper) {
  if (wrapper.dataset.type === "video") {
    const video = wrapper.querySelector(".gallery-item__video");
    if (!video) return;

    const previewSrc = video.dataset.previewSrc;
    if (previewSrc && !video.src) {
      video.src = previewSrc;
    }

    if (video.src) {
      video.play().catch(() => {});
    }
    return;
  }

  const img = wrapper.querySelector("img");
  if (img && !img.src) {
    img.src = img.dataset.gridSrc || wrapper.dataset.fullSrc;
  }
}

function unloadPersonGalleryVideo(wrapper) {
  if (wrapper.dataset.type !== "video") return;

  const video = wrapper.querySelector(".gallery-item__video");
  if (!video) return;

  video.pause();
  video.removeAttribute("src");
  video.load();
}

function initPersonGalleryObserver() {
  personGalleryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const wrapper = entry.target;
        if (entry.isIntersecting) {
          loadPersonGalleryMedia(wrapper);
          wrapper.classList.add("visible");
        } else {
          unloadPersonGalleryVideo(wrapper);
        }
      });
    },
    { rootMargin: "240px 0px" }
  );
}

function openPersonGalleryLightbox(item) {
  const lightbox = document.getElementById("lightbox");
  const content = lightbox?.querySelector(".lightbox-content");
  if (!lightbox || !content) return;

  const src = personGalleryFullSrc(item.name);
  content.innerHTML = "";

  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", getPersonGalleryAlt(item));
    video.style.maxWidth = "100%";
    video.style.maxHeight = "100vh";
    content.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = src;
    img.alt = getPersonGalleryAlt(item);
    img.style.maxWidth = "100%";
    img.style.maxHeight = "100vh";
    content.appendChild(img);
  }

  lightbox.classList.remove("hidden");
}

function closePersonGalleryLightbox() {
  const lightbox = document.getElementById("lightbox");
  const content = lightbox?.querySelector(".lightbox-content");
  if (!lightbox) return;

  lightbox.classList.add("hidden");
  if (content) content.innerHTML = "";
}

function initPersonGalleryLightboxHandlers() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  const closeBtn = lightbox.querySelector(".lightbox-close");
  closeBtn?.addEventListener("click", closePersonGalleryLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closePersonGalleryLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePersonGalleryLightbox();
  });
}

function equalizePersonGalleryColumns(gallery) {
  const columns = gallery.querySelectorAll(".gallery-column");
  if (!columns.length) return;

  columns.forEach((column) => {
    const spacer = column.querySelector(".gallery-column__spacer");
    if (spacer) spacer.style.minHeight = "";
  });

  let maxContentHeight = 0;

  columns.forEach((column) => {
    const items = column.querySelectorAll(".gallery-item");
    if (!items.length) return;

    const gap = parseFloat(window.getComputedStyle(column).rowGap) || 0;
    let contentHeight = 0;

    items.forEach((item, index) => {
      contentHeight += item.offsetHeight;
      if (index > 0) contentHeight += gap;
    });

    maxContentHeight = Math.max(maxContentHeight, contentHeight);
  });

  columns.forEach((column) => {
    const items = column.querySelectorAll(".gallery-item");
    if (!items.length) return;

    const gap = parseFloat(window.getComputedStyle(column).rowGap) || 0;
    let contentHeight = 0;

    items.forEach((item, index) => {
      contentHeight += item.offsetHeight;
      if (index > 0) contentHeight += gap;
    });

    const spacer = column.querySelector(".gallery-column__spacer");
    if (spacer) {
      spacer.style.minHeight = `${Math.max(0, maxContentHeight - contentHeight)}px`;
    }
  });
}

function renderPersonGallery() {
  const gallery = document.getElementById("gallery");
  if (!gallery || personGalleryItems.length === 0) return;

  const columnCount = getPersonGalleryColumnCount();
  const galleryRect = gallery.getBoundingClientRect();
  const galleryWidth = galleryRect.width > 0 ? galleryRect.width : window.innerWidth;

  if (
    columnCount === personGalleryColumnCount &&
    Math.abs(galleryWidth - personGalleryLastWidth) < 1 &&
    gallery.childNodes.length === columnCount
  ) {
    return;
  }
  personGalleryColumnCount = columnCount;
  personGalleryLastWidth = galleryWidth;

  if (personGalleryObserver) {
    gallery.querySelectorAll(".gallery-item").forEach((item) => {
      personGalleryObserver.unobserve(item);
    });
  }

  gallery.innerHTML = "";

  const itemGap = getGalleryItemGap();
  const totalColGaps = (columnCount - 1) * itemGap;
  const columnWidth = (galleryWidth - totalColGaps) / columnCount;

  const { columns, heights } = distributePersonGalleryItems(
    personGalleryItems,
    columnCount,
    columnWidth,
    itemGap
  );

  const minHeight = Math.min(...heights);

  gallery.className = "gallery";
  gallery.classList.add(`gallery--cols-${columnCount}`);

  columns.forEach((columnItems) => {
    const columnEl = document.createElement("div");
    columnEl.className = "gallery-column";

    const originalColHeight = columnItems.reduce(
      (acc, item, i) => acc + item._expectedHeight + (i > 0 ? itemGap : 0),
      0
    );
    const finalHeights = computeColumnAdjustedHeights(
      columnItems,
      originalColHeight,
      minHeight,
      itemGap
    );

    columnItems.forEach((item, i) => {
      const wrapper = createPersonGalleryElement(item);
      wrapper.style.height = `${finalHeights[i]}px`;
      wrapper.addEventListener("click", () => openPersonGalleryLightbox(item));
      personGalleryObserver.observe(wrapper);
      columnEl.appendChild(wrapper);
    });

    const spacer = document.createElement("div");
    spacer.className = "gallery-column__spacer";
    spacer.setAttribute("aria-hidden", "true");
    columnEl.appendChild(spacer);

    gallery.appendChild(columnEl);
  });

  requestAnimationFrame(() => equalizePersonGalleryColumns(gallery));
}

function schedulePersonGalleryResize() {
  clearTimeout(personGalleryResizeTimer);
  personGalleryResizeTimer = setTimeout(renderPersonGallery, 150);
}

async function initPersonGallery() {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  initPersonGalleryObserver();
  initPersonGalleryLightboxHandlers();

  try {
    personGalleryItems = await loadPersonGalleryManifest();
  } catch (error) {
    console.error(error);
    return;
  }

  renderPersonGallery();
  window.addEventListener("resize", schedulePersonGalleryResize);
}

initPersonGallery();
