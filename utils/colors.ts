/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK utils/colors.ts

import { Color } from "$types";

// List of available colors
export const colors: Color[] = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

// List of shades
export const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

// List of opacities
const opacities = [
  "/0", "/5", "/10", "/15", "/20", "/25", "/30", "/35", "/40", "/45",
  "/50", "/55", "/60", "/65", "/70", "/75", "/80", "/85", "/90", "/95", "/100",
];

// Generate color combinations
const generateColorCombinations = (): string[] => {
  const colorCombinations: string[] = [];

  for (const shade of shades) {
    for (const color of colors) {
      colorCombinations.push(
        `text-${color}-${shade}`,
        `hover:text-${color}-${shade}`,
        `bg-${color}-${shade}`,
        `hover:bg-${color}-${shade}`,
        `text-shadow-${color}-${shade}`,
        `hover:text-shadow-${color}-${shade}`,
        ...opacities.map((opacity): string => `shadow-${color}-${shade}${opacity}`),
        ...opacities.map((opacity): string => `hover:shadow-${color}-${shade}${opacity}`),
      );
    }
  }

  return colorCombinations;
};

// List of valid color combinations
export const validColorCombinations = generateColorCombinations();