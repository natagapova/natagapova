const CURSOR_TRAIL_MEDIA = "(min-width: 720px) and (hover: hover) and (pointer: fine)";
const CURSOR_TRAIL_DOTS = 8;
const CURSOR_TRAIL_LERP = 0.34;

function canUseCursorTrail() {
  return (
    window.matchMedia(CURSOR_TRAIL_MEDIA).matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function initCursorTrail() {
  if (!canUseCursorTrail() || document.querySelector(".cursor-trail")) return;

  const root = document.createElement("div");
  root.className = "cursor-trail";
  root.setAttribute("aria-hidden", "true");

  const lead = document.createElement("span");
  lead.className = "cursor-trail__lead";
  root.appendChild(lead);

  const dots = Array.from({ length: CURSOR_TRAIL_DOTS }, (_, index) => {
    const dot = document.createElement("span");
    dot.className = "cursor-trail__dot";
    dot.style.setProperty("--trail-index", String(index));
    root.appendChild(dot);
    return { el: dot, x: 0, y: 0, index };
  });

  document.body.appendChild(root);
  document.body.classList.add("has-cursor-trail");

  let mouseX = -100;
  let mouseY = -100;
  let leadX = mouseX;
  let leadY = mouseY;
  let visible = false;
  let frameId = 0;

  const setVisible = (next) => {
    if (visible === next) return;
    visible = next;
    root.classList.toggle("is-visible", next);
  };

  const snapTrailTo = (x, y) => {
    leadX = x;
    leadY = y;
    for (const dot of dots) {
      dot.x = x;
      dot.y = y;
    }
    lead.style.transform = `translate3d(${leadX}px, ${leadY}px, 0) translate(-50%, -50%)`;
    for (const dot of dots) {
      dot.el.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%)`;
    }
  };

  const onMove = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    if (!visible) {
      snapTrailTo(mouseX, mouseY);
      setVisible(true);
    }
  };

  const onLeave = () => setVisible(false);

  const tick = () => {
    leadX += (mouseX - leadX) * CURSOR_TRAIL_LERP;
    leadY += (mouseY - leadY) * CURSOR_TRAIL_LERP;
    lead.style.transform = `translate3d(${leadX}px, ${leadY}px, 0) translate(-50%, -50%)`;

    let prevX = leadX;
    let prevY = leadY;
    for (const dot of dots) {
      const speed = Math.max(0.12, 0.24 - dot.index * 0.012);
      dot.x += (prevX - dot.x) * speed;
      dot.y += (prevY - dot.y) * speed;
      dot.el.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%)`;
      prevX = dot.x;
      prevY = dot.y;
    }

    frameId = window.requestAnimationFrame(tick);
  };

  window.addEventListener("mousemove", onMove, { passive: true });
  document.documentElement.addEventListener("mouseleave", onLeave);
  frameId = window.requestAnimationFrame(tick);

  const media = window.matchMedia(CURSOR_TRAIL_MEDIA);
  const onMediaChange = () => {
    if (!canUseCursorTrail()) {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      media.removeEventListener("change", onMediaChange);
      window.cancelAnimationFrame(frameId);
      root.remove();
      document.body.classList.remove("has-cursor-trail");
    }
  };
  media.addEventListener("change", onMediaChange);
}

initCursorTrail();
