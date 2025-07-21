/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK utils/dev/tree_to_md.ts

const excludeDirs = [".git", "node_modules", "dist", ".vscode", ".DS_Store"];
const maxFilesToShow = 3; // Nombre de fichiers affichés par gros dossier
const truncateDirs = ["./data/icons"]; // Répertoires à tronquer

async function walk(dir: string, prefix = ""): Promise<string> {
  const entries = [];

  for await (const entry of Deno.readDir(dir)) {
    const fullPath = `${dir}/${entry.name}`;
    if (excludeDirs.includes(entry.name)) continue;
    entries.push({ entry, fullPath });
  }

  entries.sort((a, b) => {
    if (a.entry.isDirectory && !b.entry.isDirectory) return -1;
    if (!a.entry.isDirectory && b.entry.isDirectory) return 1;
    return a.entry.name.localeCompare(b.entry.name);
  });

  let output = "";

  const isTruncated = truncateDirs.includes(dir);
  const visibleEntries = isTruncated ? entries.slice(0, maxFilesToShow) : entries;

  for (const { entry, fullPath } of visibleEntries) {
    const line = `${prefix}- ${entry.name}\n`;
    output += line;

    if (entry.isDirectory) {
      output += await walk(fullPath, prefix + "  ");
    }
  }

  if (isTruncated && entries.length > maxFilesToShow) {
    const remaining = entries.length - maxFilesToShow;
    output += `${prefix}- … (${remaining} more)\n`;
  }

  return output;
}

const tree = await walk(".");
await Deno.writeTextFile("tree.md", tree);

console.log("✅ Arborescence generated in Tree.md with partial display for large files.");
