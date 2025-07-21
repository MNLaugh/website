/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK utils/dev/delete_svg.ts

import { walk } from "@walk";
import { relative } from "@path";

const CURRENT_YEAR = new Date().getFullYear();
const HEADER_LINES = [
  "/**",
  ` * © ${CURRENT_YEAR} nicolas-metivier.fr`,
  " * This work was created by Nicolas Metivier.",
  " * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.",
  " */",
];

const EXCLUDED_FILES = new Set([
  "dev.ts",
  "fresh.config.ts",
  "fresh.gen.ts",
  "main.ts",
  "tailwind.config.ts",
  "add_license_banner.ts",
]);

const EXCLUDED_DIRS = [".git", "static", "node_modules"];

const isDryRun = Deno.args.includes("--dry-run");

for await (const entry of walk(".", {
  includeDirs: false,
  exts: [".ts", ".tsx"],
  skip: EXCLUDED_DIRS.map((d): RegExp => new RegExp(d)),
})) {
  const filename = entry.path.split("/").pop();
  if (!filename || EXCLUDED_FILES.has(filename)) continue;

  let content = await Deno.readTextFile(entry.path);

  // Remove old banner if present (between /** ...* /)
  const licenseRegex = /\/\*\*[\s\S]*?nicolas-metivier\.fr[\s\S]*?\*\/\s*/;
  const hasBanner = licenseRegex.test(content);
  if (hasBanner) content = content.replace(licenseRegex, "");

  const relativePath = relative(Deno.cwd(), entry.path).replaceAll("\\", "/");
  const linkLine = `//LINK ${relativePath}`;
  const banner = `${HEADER_LINES.join("\n")}\n\n${linkLine}\n\n`;

  if (isDryRun) {
    console.log(`🧪 [dry-run] Would update: ${relativePath}`);
  } else {
    await Deno.writeTextFile(entry.path, banner + content);
    console.log(`✔️ Banner updated: ${relativePath}`);
  }
}