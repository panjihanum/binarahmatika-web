import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const legacyDir = path.join(root, "public", "assets", "legacy");
const rawDir = path.join(legacyDir, "raw");
const rawImagesDir = path.join(rawDir, "images");
const rawLogosDir = path.join(rawDir, "logos");
const optimizedDir = path.join(legacyDir, "optimized");
const outImagesDir = path.join(optimizedDir, "images");
const outLogosDir = path.join(optimizedDir, "logos");

const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg", ".ico"]);

async function ensureDirs() {
  await fs.mkdir(rawImagesDir, { recursive: true });
  await fs.mkdir(rawLogosDir, { recursive: true });
  await fs.mkdir(outImagesDir, { recursive: true });
  await fs.mkdir(outLogosDir, { recursive: true });
}

async function moveToRawIfNeeded() {
  const legacyImagesDir = path.join(legacyDir, "images");
  const legacyLogosDir = path.join(legacyDir, "logos");

  const moveDir = async (from, to) => {
    try {
      const entries = await fs.readdir(from, { withFileTypes: true });
      for (const entry of entries) {
        if (!entry.isFile()) continue;
        const src = path.join(from, entry.name);
        const dest = path.join(to, entry.name);
        await fs.rename(src, dest);
      }
    } catch {
      // ignore
    }
  };

  await moveDir(legacyImagesDir, rawImagesDir);
  await moveDir(legacyLogosDir, rawLogosDir);
}

function baseName(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  const name = path.basename(fileName, ext);
  return name.replace(/-\d+x\d+$/, "");
}

async function collectFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => imageExtensions.has(path.extname(name).toLowerCase()))
    .map((name) => path.join(dir, name));
}

async function pickLargest(files) {
  const withMeta = await Promise.all(
    files.map(async (file) => {
      try {
        const meta = await sharp(file).metadata();
        const width = meta.width ?? 0;
        const height = meta.height ?? 0;
        const area = width * height;
        return { file, width, height, area };
      } catch {
        return { file, width: 0, height: 0, area: 0 };
      }
    })
  );
  return withMeta.sort((a, b) => b.area - a.area)[0];
}

function isNearWhite(r, g, b, threshold = 245) {
  return r >= threshold && g >= threshold && b >= threshold;
}

async function makeTransparentIfWhiteBackground(input) {
  const image = sharp(input).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;

  const corners = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
  ];

  const cornerSamples = corners.map(([x, y]) => {
    const idx = (y * width + x) * 4;
    return {
      r: data[idx],
      g: data[idx + 1],
      b: data[idx + 2],
      a: data[idx + 3],
    };
  });

  const cornerLooksWhite = cornerSamples.every(
    (c) => c.a > 10 && isNearWhite(c.r, c.g, c.b)
  );

  const cornerLooksTransparent = cornerSamples.every((c) => c.a <= 10);

  if (!cornerLooksWhite && !cornerLooksTransparent) {
    return sharp(input).ensureAlpha();
  }

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    if (isNearWhite(r, g, b)) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, { raw: { width, height, channels: 4 } });
}

async function optimizeGroup(files, outDir, makeTransparent = false) {
  const grouped = new Map();
  for (const file of files) {
    const base = baseName(path.basename(file));
    if (!grouped.has(base)) grouped.set(base, []);
    grouped.get(base).push(file);
  }

  const manifest = [];

  for (const [base, group] of grouped) {
    const chosen = await pickLargest(group);
    const output = path.join(outDir, `${base}.webp`);

    let pipeline = sharp(chosen.file);
    if (makeTransparent) {
      pipeline = await makeTransparentIfWhiteBackground(chosen.file);
      await pipeline.webp({ quality: 90, effort: 6 }).toFile(output);
    } else {
      await pipeline.webp({ quality: 82, effort: 4 }).toFile(output);
    }

    manifest.push({
      base,
      output: path.relative(legacyDir, output).replace(/\\/g, "/"),
      source: path.relative(legacyDir, chosen.file).replace(/\\/g, "/"),
      skipped: group
        .filter((g) => g !== chosen.file)
        .map((g) => path.relative(legacyDir, g).replace(/\\/g, "/")),
    });
  }

  return manifest;
}

async function run() {
  await ensureDirs();
  await moveToRawIfNeeded();

  const rawImages = await collectFiles(rawImagesDir);
  const rawLogos = await collectFiles(rawLogosDir);

  const imageManifest = await optimizeGroup(rawImages, outImagesDir, false);
  const logoManifest = await optimizeGroup(rawLogos, outLogosDir, true);

  const manifestPath = path.join(optimizedDir, "manifest.json");
  await fs.writeFile(
    manifestPath,
    JSON.stringify({ images: imageManifest, logos: logoManifest }, null, 2)
  );

  console.log("Optimization complete:");
  console.log(`Images: ${imageManifest.length}`);
  console.log(`Logos: ${logoManifest.length}`);
  console.log(`Manifest: ${manifestPath}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
