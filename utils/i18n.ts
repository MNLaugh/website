/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK utils/i18n.ts

import type { Lang } from "$types";

/**
 * List of supported language codes.
 */
export const supported = ["fr", "en"];

/**
 * The default language code to use when no preferred language is detected.
 */
export const defaultLang: Lang = "fr";

/**
 * Checks if the given language is supported.
 *
 * @param lang - The language code to check.
 * @returns True if the language is supported, false otherwise.
 */
export function isSupportedLang(lang: string): lang is Lang {
  return supported.includes(lang as Lang);
}

/**
 * Detects the preferred language from the Accept-Language header.
 *
 * @param header - The Accept-Language header string, which may be null or undefined.
 * @returns The detected language if supported, otherwise the default language.
 */
export function detectPreferredLang(header?: string | null): Lang {
  // If the header is null or undefined, return the default language
  if (!header) return defaultLang;

  // Split the header by commas to get individual language preferences
  const requested = header
    // Split each part by semicolons and trim whitespace, then convert to lowercase
    .split(",")
    .map((part): string => part.split(";")[0].trim().toLowerCase());

  // Iterate through each requested language
  for (const lang of requested) {
    // Extract the primary language code (e.g., "en" from "en-US")
    const short = lang.split("-")[0];
    // Check if the primary language code is supported
    if (supported.includes(short as Lang)) {
      // Return the supported language code
      return short as Lang;
    }
  }

  // If no supported language is found, return the default language
  return defaultLang;
}

export const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);