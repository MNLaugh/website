/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK utils/path.ts

import { signal } from "@preact/signals";

/**
 * Exports a signal that holds the current path of the window's location.
 * If the window object is defined, it initializes the signal with the current pathname.
 * Otherwise, it defaults to "/".
 */
export const currentPath = signal(typeof window !== "undefined" ? globalThis.location.pathname : "/");

// Add an event listener to the globalThis object for the "popstate" event.
// This event is fired when the active history entry changes.
globalThis.addEventListener("popstate", (): void => {
  // When the "popstate" event is triggered, update the value of the currentPath signal.
  // The new value is set to the current pathname of the window's location.
  currentPath.value = globalThis.location.pathname;
});
