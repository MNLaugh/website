/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK islands/RedirectToSection.tsx

import type { RedirectToSectionProps } from "$types";
import { useEffect } from "preact/hooks";

/**
 * Redirects the viewport to a specific section of the page identified by `sectionId`.
 * This function uses the `useEffect` hook to scroll the section into view smoothly.
 * If the section is not immediately available, it retries after a short delay.
 *
 * @param {RedirectToSectionProps} props - The properties object.
 * @param {string} props.sectionId - The ID of the section to scroll into view.
 * @returns {null} - This component does not render any UI elements.
 */
export default function RedirectToSection({ sectionId }: RedirectToSectionProps): null {
  useEffect((): (() => void) | undefined => {
    // Attempt to find the element with the given sectionId
    const el = document.getElementById(sectionId);
    if (el) {
      // If the element is found, scroll it into view smoothly
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // If the element is not found, set a timeout to retry after 100ms
      const timeout = setTimeout((): void => {
        // Retry finding the element
        const retry = document.getElementById(sectionId);
        if (retry) retry.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }, 100);
      // Cleanup function to clear the timeout if the component unmounts
      return (): void => clearTimeout(timeout);
    }
  }, [sectionId]);

  return null;
}
