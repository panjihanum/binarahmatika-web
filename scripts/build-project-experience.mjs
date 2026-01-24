import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const htmlPath = path.join(root, "project-experience.html");
const outputPath = path.join(
  root,
  "src",
  "data",
  "project-experience.ts"
);

function stripTags(input) {
  return input
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function stripTagsPreserveNewlines(input) {
  return input
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/[\t ]+/g, " ")
    .replace(/\n+/g, "\n")
    .trim();
}

function extractTables(html) {
  const tables = [];
  const tableMatches = html.matchAll(/<table[^>]*>([\s\S]*?)<\/table>/gi);
  for (const match of tableMatches) {
    const tableHtml = match[1];
    const rows = [];
    const rowMatches = tableHtml.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi);
    for (const rowMatch of rowMatches) {
      const rowHtml = rowMatch[1];
      const cellMatches = rowHtml.matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi);
      const cells = Array.from(cellMatches, (cell) => stripTags(cell[1]));
      if (cells.length >= 2) rows.push(cells);
    }
    if (rows.length) tables.push(rows);
  }
  return tables;
}

function extractYearHeadings(html) {
  const withBreaks = html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<\/h\d>/gi, "\n")
    .replace(/<\/div>/gi, "\n");

  const text = stripTagsPreserveNewlines(withBreaks);
  const lines = text.split("\n").map((line) => line.trim());

  const headings = lines
    .filter((line) => line.toUpperCase().startsWith("TAHUN"))
    .map((line) => line.replace(/\s+–\s+/g, " – "));

  return headings.filter((entry, index, self) => self.indexOf(entry) === index);
}

function normalizeRow(row) {
  const [no, name, client, location, scope, volume] = row;
  return {
    no: no ?? "",
    name: name ?? "",
    client: client ?? "",
    location: location ?? "",
    scope: scope ?? "",
    volume: volume ?? "",
  };
}

function buildSections(tables, headings) {
  const sections = [];
  const header = ["NO.", "NAMA PROYEK", "INSTANSI/PERUSAHAAN", "ALAMAT", "PEKERJAAN", "VOLUME"];

  tables.forEach((rows, index) => {
    const cleanRows = rows
      .filter((row) => row.join(" ") !== header.join(" "))
      .map(normalizeRow);

    if (!cleanRows.length) return;

    const title = headings[index] || `DATA ${index + 1}`;
    sections.push({ title, items: cleanRows });
  });

  return sections;
}

async function run() {
  const html = await fs.readFile(htmlPath, "utf8");
  const tables = extractTables(html);
  const headings = extractYearHeadings(html);
  const sections = buildSections(tables, headings);

  const content = `export type ProjectExperienceItem = {
  no: string;
  name: string;
  client: string;
  location: string;
  scope: string;
  volume: string;
};

export type ProjectExperienceSection = {
  title: string;
  items: ProjectExperienceItem[];
};

export const projectExperienceSections: ProjectExperienceSection[] = ${JSON.stringify(
    sections,
    null,
    2
  )};
`;

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, content, "utf8");
  console.log(`Generated ${outputPath} with ${sections.length} sections.`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
