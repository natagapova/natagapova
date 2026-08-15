const PERSON_GALLERY_MANIFEST = "images/person-images/manifest.json";
const PERSON_GALLERY_BASE_PATH = "images/person-images/";

const PERSON_GALLERY_BREAKPOINTS = [
  { maxWidth: 719, columns: 2 },
  { maxWidth: 1150, columns: 3 },
  { maxWidth: Infinity, columns: 4 },
];

let personGalleryItems = [];
let personGalleryColumnCount = 0;
let personGalleryResizeTimer = null;
let personGalleryObserver = null;

/**
 * Reads the gap between .gallery-item elements as defined in css/styles.css by
 * creating dummy elements in memory and reading the computed style.
 * Updated to match DOM nesting: .gallery > .gallery-column > .gallery-item
 */
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

function personGalleryMediaSrc(name) {
  return PERSON_GALLERY_BASE_PATH + encodeURIComponent(name);
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
// Returns { columns, heights } where columns: array of arrays of items, heights: array of total column heights.
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
      _expectedHeight: height
    });
    heights[minIdx] += (columns[minIdx].length > 1 ? gapPx : 0) + height;
  }

  return { columns, heights };
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
 * - Compute the min rendered column height, and clip each column
 *   by distributing reduction proportionally across the tallest items,
 *   enforcing a minimum-item-height floor; log a warning if undershoot is forced.
 * - All logic is synchronous & based on computed heights (no DOM race).
 */
function renderPersonGallery() {
  const gallery = document.getElementById("gallery");
  if (!gallery || personGalleryItems.length === 0) return;

  const columnCount = getPersonGalleryColumnCount();
  if (columnCount === personGalleryColumnCount &&
      gallery.childNodes.length === columnCount) return;
  personGalleryColumnCount = columnCount;

  gallery.innerHTML = "";

  const galleryRect = gallery.getBoundingClientRect();
  const galleryWidth = galleryRect.width > 0 ? galleryRect.width : window.innerWidth;
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

  const colEls = [];

  // Height ratio floor for regular reduction
  const MIN_HEIGHT_RATIO = 0.7; // don't make any image <70% original height

  /**
   * For a column, adjust item heights so that column sums exactly to minHeight.
   * First, do MIN_HEIGHT_RATIO-clipping as before (tallest-first distributed trim).
   * Then, if any exact pixels remain (even < 1px), apply as final unrestricted correction
   * to the tallest item after floor-limited crops.
   */
  function computeColumnAdjustedHeights(columnItems, colIdx, colHeight, minHeight, gapPx) {
    // 1. Build: {origIdx, item, origHeight, minHeight}
    let indexed = columnItems.map((item, idx) => ({
      origIdx: idx,
      item,
      origHeight: item._expectedHeight,
      minHeight: item._expectedHeight * MIN_HEIGHT_RATIO
    }));

    const itemCount = columnItems.length;
    const numGaps = itemCount > 1 ? (itemCount - 1) : 0;
    const overflow = colHeight - minHeight;
    if (overflow <= 0) {
      return indexed.map(x => x.origHeight);
    }

    let neededTrim = overflow;

    // 2. Sort by origHeight descending for tallest-first trim
    indexed.sort((a, b) => b.origHeight - a.origHeight);

    let trimmed = new Array(indexed.length).fill(0);

    // 3. Tallest-first distribute down to minHeight floor
    for (let i = 0; i < indexed.length; i++) {
      if (neededTrim <= 0) break;
      let maxTrim = indexed[i].origHeight - indexed[i].minHeight;
      if (maxTrim <= 0) continue;
      let toTrim = Math.min(neededTrim, maxTrim);
      trimmed[i] = toTrim;
      neededTrim -= toTrim;
    }

    // 4. Map trims back to original order (by origIdx)
    let resultTrimByOrigIdx = new Array(indexed.length);
    let bySortedOrigIdx = indexed.map((x, idx) => ({ ...x, trim: trimmed[idx] }));
    bySortedOrigIdx.forEach((obj, sortIdx) => {
      resultTrimByOrigIdx[obj.origIdx] = obj.trim;
    });

    // 5. Compose candidate heights (floored by MIN_HEIGHT_RATIO)
    let candidateHeights = columnItems.map((item, idx) =>
      Math.max(item._expectedHeight - (resultTrimByOrigIdx[idx] || 0), item._expectedHeight * MIN_HEIGHT_RATIO)
    );

    // 6. Compute sum after floor-limited distribution
    let sumCandidate = candidateHeights.reduce((a, b) => a + b, 0) + numGaps * gapPx;
    // Compute the exact required correction (could be positive, negative, or zero)
    let correction = sumCandidate - minHeight;

    // 7. If any pixels remain (correction > 0), apply exactly to the tallest final item (now ignoring the min floor)
    //    (If correction <= 0, no further crop is possible/needed; correction < 0 means we've undershot, only possible if rounding/numeric drift)
    if (Math.abs(correction) > 1e-6) {
      if (correction > 0) {
        // Find tallest of the candidateHeights (after floor-limited correction)
        let tallestIdx = 0;
        let tallestHeight = candidateHeights[0];
        for (let i = 1; i < candidateHeights.length; i++) {
          if (candidateHeights[i] > tallestHeight) {
            tallestHeight = candidateHeights[i];
            tallestIdx = i;
          }
        }
        candidateHeights[tallestIdx] -= correction;
      }
      // If correction is negative (should be extremely rare: floating-point undershoot), cannot add to heights (never "grow").
      // Log only if the drift is actually meaningful
    }

    // 8. Final check
    let sumFinal = candidateHeights.reduce((a, b) => a + b, 0) + numGaps * gapPx;
    if (Math.abs(sumFinal - minHeight) > 1e-5) {
      console.warn(
        `[PersonGallery] Column ${colIdx + 1}: could not match minHeight. Wanted ${minHeight}, got ${sumFinal}. Missed by ${sumFinal - minHeight}.`,
        {finalHeights: candidateHeights, target: minHeight, columnItems}
      );
    }

    return candidateHeights;
  }

  columns.forEach((columnItems, colIdx) => {
    const columnEl = document.createElement("div");
    columnEl.className = "gallery-column";
    columnEl.style.flex = "1 1 0";
    columnEl.style.display = "flex";
    columnEl.style.flexDirection = "column";
    columnEl.style.justifyContent = "flex-start";

    // Compute original height for this column
    const originalColHeight = columnItems.reduce((acc, item, i) =>
      acc + item._expectedHeight + (i > 0 ? itemGap : 0), 0
    );
    const finalHeights = computeColumnAdjustedHeights(
      columnItems,
      colIdx,
      originalColHeight,
      minHeight,
      itemGap
    );

    columnItems.forEach((item, i) => {
      const height = finalHeights[i];
      const wrapper = createPersonGalleryElement(item);
      wrapper.style.width = "100%";
      wrapper.style.height = `${height}px`;
      wrapper.style.flexShrink = "0";
      wrapper.style.overflow = "hidden";
      wrapper.style.boxSizing = "border-box";
      wrapper.addEventListener("click", () => openPersonGalleryLightbox(item));
      personGalleryObserver.observe(wrapper);
      columnEl.appendChild(wrapper);
    });

    colEls.push(columnEl);
    gallery.appendChild(columnEl);
  });

  const renderedHeights = colEls.map((col) => col.offsetHeight);
  const galleryHeight = renderedHeights.length
    ? Math.max(...renderedHeights)
    : Math.round(minHeight);
  gallery.style.height = galleryHeight > 0 ? `${galleryHeight}px` : "auto";
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