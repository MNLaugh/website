/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK utils/dev/extract_icons.ts

// Import all icons from the lucide-preact library
import * as lucide from 'lucide-preact';
import { MetaIcon } from "$types";
const blacklist: string[] = ["icons"];

function pascalToKebab(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")   // userCircle → user-Circle
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2") // HTMLInput → HTML-Input
    .toLowerCase();
}


let i = 0;
let nfi = 0;
function iconMetaByName(name: string): MetaIcon {
  try {
    const text = Deno.readTextFileSync(`./data/icons/${name}.json`);
    const parsed = JSON.parse(text);
    i++;
    return {
      contributors: parsed.contributors ?? [],
      tags: parsed.tags ?? [],
      categories: parsed.categories ?? [],
    };
  } catch (_) {
    nfi++;
    return {
      contributors: [],
      tags: [],
      categories: [],
    }
  }
}
type ExtractedIcon = { name: string, pascal_name: string, meta: MetaIcon }
const icons = Object.keys(lucide)
  .filter((name: string): boolean => !blacklist.includes(name))
  .filter((name: string): boolean => !name.endsWith("Icon") && !name.startsWith("Lucide"))
  .map((name: string): ExtractedIcon => {
    const pascal_name = pascalToKebab(name);
    const meta = iconMetaByName(pascal_name);
    return { name, pascal_name, meta }
  })

console.log(`Meta data for ${nfi} Icons not found and ${i} found with success !`)

// Define a template string to generate the content for the default_icons.ts file
const text = `
/**
 * Auto generated file don't edit !
 */
import {
  ${icons.map(l => `${l.name},\n`).join("  ")}
} from 'lucide-preact';

export const defaultIcons = [
  ${icons.map(l => `{ name: "${l.name}", snake: "${l.pascal_name}", Icon: ${l.name}, meta: ${JSON.stringify(l.meta)}},\n`).join("  ")}
];
`;

// Write the generated content to the default_icons.ts file
await Deno.writeTextFile("./utils/default_icons.ts", text);

// Log a success message to the console
console.log("Lucide icons were successfully extracted, you can find them in the ./utils/default_icons.ts file");