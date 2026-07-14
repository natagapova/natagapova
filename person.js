const PERSON_GALLERY_MANIFEST = "images/person-images/manifest.json";
const PERSON_GALLERY_BASE_PATH = "images/person-images/";

// More tolerant breakpoints: columns move up a bit sooner
const PERSON_GALLERY_BREAKPOINTS = [
  { maxWidth: 480, columns: 1 },
  { maxWidth: 800, columns: 2 },
  { maxWidth: 1150, columns: 3 },
  { maxWidth: Infinity, columns: 4 },
];

let personGalleryItems = [];
let personGalleryColumnCount = 0;
let personGalleryResizeTimer = null;
let personGalleryObserver = null;

/**
 * Reads the gap between .gallery-item elements as defined in styles.css by
 * creating dummy elements in memory and reading the computed style.
 */
function getGalleryItemGap() {
  // Create a temporary .gallery and two .gallery-item children
  const gallery = document.createElement("div");
  gallery.className = "gallery gallery-temp";
  gallery.style.visibility = "hidden";
  gallery.style.position = "absolute";
  gallery.style.pointerEvents = "none";
  document.body.appendChild(gallery);

  for (let i = 0; i < 2; i++) {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.style.height = "10px";
    item.style.width = "10px";
    gallery.appendChild(item);
  }

  let gap = 0;
  try {
    // try row gap first
    let style = window.getComputedStyle(gallery);
    let rawGap = style.rowGap || style.gap || "0px";
    if (rawGap) {
      gap = parseFloat(rawGap);
    } else {
      // fallback: measure actual rendered gap
      const rects = Array.from(gallery.children).map(child => child.getBoundingClientRect());
      gap = Math.round(Math.abs(rects[1].top - rects[0].bottom));
      if (isNaN(gap)) gap = 0;
    }
  } catch (e) {
    gap = 0;
  } finally {
    document.body.removeChild(gallery);
  }
  return gap;
}

const PERSON_GALLERY_ITEM_GAP = getGalleryItemGap();

function personGalleryMediaSrc(name) {
  return PERSON_GALLERY_BASE_PATH + encodeURIComponent(name);
}

// Revised logic for smoother, more tolerant breakpointing.
// We let columns increase *sooner* and allow more screen sizes to get more columns.
function getPersonGalleryColumnCount() {
  const width = window.innerWidth;

  // If container exists, use its width for better granularity
  const gallery = document.getElementById("gallery");
  const galleryWidth = gallery
    ? gallery.getBoundingClientRect().width
    : width;

  // Try to fit as many columns as possible, but not below min width per column
  // We'll allow columns if their expected width is at least MIN_COLUMN_WIDTH px
  const MIN_COLUMN_WIDTH = 260;

  // Max 4 columns. Try to fit the most possible, given min col width
  let columns = Math.floor((galleryWidth + PERSON_GALLERY_ITEM_GAP) / (MIN_COLUMN_WIDTH + PERSON_GALLERY_ITEM_GAP));
  columns = Math.max(1, Math.min(4, columns));

  return columns;
}

function isPersonGalleryVideo(filename) {
  return /\.(mov|mp4|webm)$/i.test(filename);
}

function shufflePersonGallery(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Estimates the aspect ratio for an image/video item,
 * but ensures errors are clear in dev tools for debugging.
 */
function getMediaAspectRatio(item) {
  const src = personGalleryMediaSrc(item.name);

  return new Promise((resolve) => {
    if (item.type === "video") {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.muted = true;
      video.addEventListener(
        "loadedmetadata",
        () => {
          const ratio =
            video.videoWidth && video.videoHeight
              ? video.videoWidth / video.videoHeight
              : 1;
          resolve(ratio);
        },
        { once: true }
      );
      video.addEventListener("error", () => {
        console.warn("Error loading video for aspect ratio:", item.name);
        resolve(1);
      }, { once: true });
      video.src = src;
    } else {
      const img = new Image();
      img.addEventListener(
        "load",
        () => {
          const ratio =
            img.naturalWidth && img.naturalHeight
              ? img.naturalWidth / img.naturalHeight
              : 1;
          resolve(ratio);
        },
        { once: true }
      );
      img.addEventListener("error", () => {
        console.warn("Error loading image for aspect ratio:", item.name);
        resolve(1);
      }, { once: true });
      img.src = src;
    }
  });
}

async function loadPersonGalleryManifest() {
  const response = await fetch(PERSON_GALLERY_MANIFEST);
  if (!response.ok) throw new Error("could not load person gallery manifest");
  const filenames = await response.json();

  const items = filenames.map((name) => ({
    name,
    type: isPersonGalleryVideo(name) ? "video" : "image",
  }));

  const shuffled = shufflePersonGallery(items);

  // Preload aspect ratios
  const aspectRatios = await Promise.all(shuffled.map(getMediaAspectRatio));

  return shuffled.map((item, index) => ({
    ...item,
    aspectRatio: aspectRatios[index],
  }));
}

// Greedy bin-packing: assign each new item to column with smallest cumulative "real" height so far.
function distributePersonGalleryItems(items, columnCount, columnWidth, gapPx) {
  // columnWidth is in px (gallery.clientWidth / columnCount)
  // Returns array of arrays of items: [ [item, ...], ... ]
  const columns = Array.from({ length: columnCount }, () => []);
  const heights = Array.from({ length: columnCount }, () => 0);
  
  for (const item of items) {
    // Item's natural displayed height is columnWidth / aspectRatio, plus gap (except last in col).
    const aspectRatio = item.aspectRatio > 0 ? item.aspectRatio : 1;
    const height = columnWidth / aspectRatio;
    // Assign to column with shortest pile so far
    // (plus (columns[i].length > 0 ? gapPx : 0) to simulate margin between stacked items)
    let minIdx = 0;
    let minAccum = heights[0];
    for (let i = 1; i < columnCount; i++) {
      if (heights[i] < minAccum) {
        minAccum = heights[i];
        minIdx = i;
      }
    }
    columns[minIdx].push(item);
    // only add gap if not first item in this column
    heights[minIdx] += (columns[minIdx].length > 1 ? gapPx : 0) + height;
  }

  return columns;
}

function createPersonGalleryElement(item) {
  const wrapper = document.createElement("div");
  wrapper.className = "gallery-item";
  wrapper.dataset.type = item.type;
  wrapper.dataset.src = personGalleryMediaSrc(item.name);

  if (item.type === "video") {
    const video = document.createElement("video");
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "none";
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.style.display = "block";
    wrapper.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    img.style.display = "block";
    wrapper.appendChild(img);
  }

  return wrapper;
}

function loadPersonGalleryMedia(wrapper) {
  const src = wrapper.dataset.src;

  if (wrapper.dataset.type === "video") {
    const video = wrapper.querySelector("video");
    if (video && !video.src) {
      video.src = src;
      video.play().catch(() => {});
    } else if (video) {
      video.play().catch(() => {});
    }
  } else {
    const img = wrapper.querySelector("img");
    if (img && !img.src) img.src = src;
  }
}

function unloadPersonGalleryVideo(wrapper) {
  if (wrapper.dataset.type !== "video") return;
  const video = wrapper.querySelector("video");
  if (video) video.pause();
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
    { rootMargin: "200px 0px" }
  );
}

function openPersonGalleryLightbox(item) {
  const lightbox = document.getElementById("lightbox");
  const content = lightbox?.querySelector(".lightbox-content");
  if (!lightbox || !content) return;

  const src = personGalleryMediaSrc(item.name);
  content.innerHTML = "";

  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.style.maxWidth = "100%";
    video.style.maxHeight = "100vh";
    content.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
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

/**
 * Render the gallery as a masonry grid with equal-length (flush) columns.
 * 
 * - Distribute items via bin-packing/balancing using estimated layouts.
 * - Compute the actual rendered column heights, and clip the last item in each col
 *   so all columns' bottoms end at exactly the same px, even if some overrun.
 */
function renderPersonGallery() {
  const gallery = document.getElementById("gallery");
  if (!gallery || personGalleryItems.length === 0) return;

  const columnCount = getPersonGalleryColumnCount();
  if (columnCount === personGalleryColumnCount &&
      gallery.childNodes.length === columnCount) return;
  personGalleryColumnCount = columnCount;

  gallery.innerHTML = "";

  // Determine gallery width and column width minus gutters
  const galleryRect = gallery.getBoundingClientRect();
  const galleryWidth = galleryRect.width > 0 ? galleryRect.width : window.innerWidth;
  // subtract total column gaps (not item gap!) for consistent sizing
  const totalColGaps = (columnCount - 1) * PERSON_GALLERY_ITEM_GAP;
  const columnWidth = (galleryWidth - totalColGaps) / columnCount;

  // Distribute items via bin-packing using aspect ratios and gap estimates
  const columns = distributePersonGalleryItems(
    personGalleryItems,
    columnCount,
    columnWidth,
    PERSON_GALLERY_ITEM_GAP
  );

  // Now: render columns & gallery, then fix all columns to same pixel bottom by clipping last item
  // We'll keep references to last wrapper per column for clipping after layout.
  const colEls = [];
  const lastItemEls = [];

  gallery.style.display = "flex";
  gallery.style.flexDirection = "row";
  gallery.style.alignItems = "flex-start";

  columns.forEach((columnItems, colIdx) => {
    const columnEl = document.createElement("div");
    columnEl.className = "gallery-column";
    columnEl.style.flex = "1 1 0";
    columnEl.style.display = "flex";
    columnEl.style.flexDirection = "column";
    columnEl.style.justifyContent = "flex-start";
    if (colIdx !== 0) columnEl.style.marginLeft = PERSON_GALLERY_ITEM_GAP + "px";

    let lastWrapper = null;
    columnItems.forEach((item, i) => {
      const aspectRatio = item.aspectRatio > 0 ? item.aspectRatio : 1;
      const height = columnWidth / aspectRatio;
      const wrapper = createPersonGalleryElement(item);
      wrapper.style.width = "100%";
      wrapper.style.height = `${height}px`;
      wrapper.style.overflow = "hidden";
      wrapper.style.boxSizing = "border-box";
      if (i !== 0) wrapper.style.marginTop = PERSON_GALLERY_ITEM_GAP + "px";

      wrapper.addEventListener("click", () => openPersonGalleryLightbox(item));
      personGalleryObserver.observe(wrapper);

      columnEl.appendChild(wrapper);
      lastWrapper = wrapper;
    });

    colEls.push(columnEl);
    if (lastWrapper) lastItemEls.push(lastWrapper);
    gallery.appendChild(columnEl);
  });

  // After layout, measure all .gallery-column heights and find the max (tallest) one
  // We want to clamp/clip all columns to this max so bottoms are even.
  // (Use setTimeout 0 for Chrome style flush – not strictly required but safer for paint timing.)
  setTimeout(() => {
    const colHeights = colEls.map(colEl =>
      colEl.getBoundingClientRect().height
    );
    const maxHeight = Math.max(...colHeights);

    // If any column overflows, clip last item in that column to fit bottom flush
    colEls.forEach((colEl, idx) => {
      const lastItem = lastItemEls[idx];
      if (!lastItem) return;
      const colHeight = colEl.getBoundingClientRect().height;
      const overflow = colHeight - maxHeight;
      if (overflow > 0 && lastItem.offsetHeight > overflow + 5) {
        lastItem.style.height = (lastItem.offsetHeight - overflow) + "px";
        lastItem.style.overflow = "hidden";
      }
    });

    // Set gallery height for consistent scroll space
    gallery.style.height = maxHeight + "px";
  }, 0);
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