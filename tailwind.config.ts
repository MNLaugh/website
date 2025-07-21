/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

import { type Config } from "tailwindcss";
import animate from "npm:tailwindcss-animate";
import { validColorCombinations } from "./utils/colors.ts";
import animations from "./utils/animations.ts";

export default {
  darkMode: "class",
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  safelist: [
    ...validColorCombinations
  ],
  plugins: [animate],
  theme: {
    extend: {
      animationDelay: animations.animationDelay,
      scrollBehavior: ['responsive'],
      animation: animations.animation,
      keyframes: animations.keyframes
    },
  },
} satisfies Config;
