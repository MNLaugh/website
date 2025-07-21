/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK utils/dev/delete_svg.ts

const dirPath = "./data/icons";

for await (const entry of Deno.readDir(dirPath)) {
  if (entry.isFile && entry.name.endsWith(".svg")) {
    const filePath = `${dirPath}/${entry.name}`;
    await Deno.remove(filePath);
    console.log(`❌ Deleted : ${filePath}`);
  }
}
