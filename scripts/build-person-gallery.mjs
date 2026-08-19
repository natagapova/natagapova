import { execFileSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { basename, dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const GALLERY_DIR = join(ROOT, "images/person-images");
const MANIFEST_PATH = join(GALLERY_DIR, "manifest.json");
const THUMBS_DIR = join(GALLERY_DIR, "thumbs");
const POSTERS_DIR = join(GALLERY_DIR, "posters");
const PREVIEWS_DIR = join(GALLERY_DIR, "previews");

const THUMB_MAX_WIDTH = 900;
const THUMB_QUALITY = 80;
const VIDEO_PREVIEW_MAX_WIDTH = 720;
const VIDEO_CRF = 30;

function run(cmd, args) {
  execFileSync(cmd, args, { stdio: "pipe" });
}

function isVideo(filename) {
  return /\.(mov|mp4|webm)$/i.test(filename);
}

function stem(filename) {
  return basename(filename, extname(filename));
}

function readImageDimensions(filePath) {
  const output = execFileSync(
    "magick",
    [filePath, "-auto-orient", "-print", "%w %h", "null:"],
    { encoding: "utf8" }
  ).trim();
  const [width, height] = output.split(/\s+/).map(Number);
  return { width: width || 0, height: height || 0 };
}

function readVideoDimensions(filePath) {
  const output = execFileSync(
    "ffprobe",
    [
      "-v",
      "error",
      "-select_streams",
      "v:0",
      "-show_entries",
      "stream=width,height",
      "-of",
      "csv=p=0:s=x",
      filePath,
    ],
    { encoding: "utf8" }
  ).trim();
  const [width, height] = output.split("x").map(Number);
  return { width: width || 0, height: height || 0 };
}

function buildImageThumb(sourcePath, thumbPath) {
  run("magick", [
    sourcePath,
    "-auto-orient",
    "-resize",
    `${THUMB_MAX_WIDTH}x${THUMB_MAX_WIDTH}>`,
    "-quality",
    String(THUMB_QUALITY),
    thumbPath,
  ]);
}

function buildVideoAssets(sourcePath, posterPath, previewPath) {
  const posterJpg = `${posterPath}.jpg`;
  run("ffmpeg", [
    "-y",
    "-ss",
    "0.5",
    "-i",
    sourcePath,
    "-vf",
    "scale='min(1920,iw)':-2",
    "-vframes",
    "1",
    "-q:v",
    "2",
    posterJpg,
  ]);
  run("magick", [
    posterJpg,
    "-auto-orient",
    "-resize",
    `${THUMB_MAX_WIDTH}x${THUMB_MAX_WIDTH}>`,
    "-quality",
    String(THUMB_QUALITY),
    posterPath,
  ]);
  unlinkSync(posterJpg);

  run("ffmpeg", [
    "-y",
    "-i",
    sourcePath,
    "-vf",
    `scale='min(${VIDEO_PREVIEW_MAX_WIDTH},iw)':-2`,
    "-an",
    "-c:v",
    "libx264",
    "-crf",
    String(VIDEO_CRF),
    "-movflags",
    "+faststart",
    previewPath,
  ]);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function loadManifestFilenames() {
  if (existsSync(MANIFEST_PATH)) {
    const raw = JSON.parse(readFileSync(MANIFEST_PATH, "utf8"));
    if (Array.isArray(raw) && raw.length > 0) {
      if (typeof raw[0] === "string") return raw;
      if (typeof raw[0] === "object" && raw[0]?.name) {
        return raw.map((entry) => entry.name);
      }
    }
  }

  return readdirSync(GALLERY_DIR)
    .filter((name) => {
      if (name.startsWith(".")) return false;
      if (["thumbs", "posters", "previews"].includes(name)) return false;
      return /\.(jpe?g|png|webp|mov|mp4|webm)$/i.test(name);
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function main() {
  mkdirSync(THUMBS_DIR, { recursive: true });
  mkdirSync(POSTERS_DIR, { recursive: true });
  mkdirSync(PREVIEWS_DIR, { recursive: true });

  const filenames = loadManifestFilenames();
  const items = [];
  let sourceBytes = 0;
  let optimizedBytes = 0;

  for (const name of filenames) {
    const sourcePath = join(GALLERY_DIR, name);
    if (!existsSync(sourcePath)) {
      console.warn(`skip missing file: ${name}`);
      continue;
    }

    const type = isVideo(name) ? "video" : "image";
    const base = stem(name);
    sourceBytes += statSync(sourcePath).size;

    let width = 0;
    let height = 0;

    if (type === "image") {
      const thumbName = `${base}.webp`;
      const thumbPath = join(THUMBS_DIR, thumbName);
      ({ width, height } = readImageDimensions(sourcePath));
      buildImageThumb(sourcePath, thumbPath);
      optimizedBytes += statSync(thumbPath).size;
      items.push({
        name,
        type,
        width,
        height,
        aspectRatio: width && height ? width / height : 1,
        thumb: `thumbs/${thumbName}`,
      });
      console.log(`image  ${name} -> ${thumbName}`);
      continue;
    }

    const posterName = `${base}.webp`;
    const previewName = `${base}.mp4`;
    const posterPath = join(POSTERS_DIR, posterName);
    const previewPath = join(PREVIEWS_DIR, previewName);
    ({ width, height } = readVideoDimensions(sourcePath));
    buildVideoAssets(sourcePath, posterPath, previewPath);
    optimizedBytes += statSync(posterPath).size + statSync(previewPath).size;
    items.push({
      name,
      type,
      width,
      height,
      aspectRatio: width && height ? width / height : 1,
      poster: `posters/${posterName}`,
      preview: `previews/${previewName}`,
    });
    console.log(`video  ${name} -> ${posterName}, ${previewName}`);
  }

  writeFileSync(MANIFEST_PATH, `${JSON.stringify(items, null, 2)}\n`);

  console.log("");
  console.log(`processed ${items.length} items`);
  console.log(`source total: ${formatBytes(sourceBytes)}`);
  console.log(`optimized total: ${formatBytes(optimizedBytes)}`);
}

main();
