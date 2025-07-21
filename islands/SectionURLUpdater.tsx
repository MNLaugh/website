/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK islands/SectionURLUpdater.ts

import type { SectionURLUpdaterProps } from "$types";
import { useEffect } from "preact/hooks";

/**
 * SectionURLUpdater is a React component that updates the URL based on the visibility of sections.
 * It uses the IntersectionObserver API to monitor the visibility of elements with the given section IDs.
 * When a section becomes visible, the URL is updated to reflect the current section.
 *
 * @param {SectionURLUpdaterProps} props - The properties for the SectionURLUpdater component.
 * @param {string[]} props.sectionIds - An array of section IDs to monitor.
 * @param {string} props.lang - The language code to include in the URL.
 * @returns {null} This component does not render any UI elements.
 */
export default function SectionURLUpdater(
  { sectionIds, lang }: SectionURLUpdaterProps,
): null {
  useEffect((): () => void => {
    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(
      (entries): void => {
        // Filter the entries to find the visible ones and sort them by their top position
        const visible = entries
          .filter((entry): boolean => entry.isIntersecting)
          .sort((a, b): number =>
            a.boundingClientRect.top - b.boundingClientRect.top
          );

        // If there are visible sections
        if (visible.length > 0) {
          // Get the ID of the first visible section
          const id = visible[0].target.id;
          // Construct the new URL based on the section ID and language
          const newUrl = `/${lang}${id === "home" ? "" : `/${id}`}`;

          // If the current URL is different from the new URL
          if (globalThis.location.pathname !== newUrl) {
            // Update the URL without reloading the page
            globalThis.history.replaceState(null, "", newUrl);
            // Dispatch a popstate event to notify listeners of the URL change
            globalThis.dispatchEvent(new PopStateEvent("popstate"));
          }
        }
      },
      {
        // Set the root margin for the observer
        rootMargin: "-10% 0px -50% 0px",
        // Set the threshold for the observer
        threshold: 0.1,
      },
    );

    // Get the elements with the given section IDs
    const elements = sectionIds
      .map((id): HTMLElement | null => document.getElementById(id))
      .filter(Boolean);
    // Observe each element
    elements.forEach((el): void => observer.observe(el!));

    // Cleanup function to disconnect the observer when the component unmounts
    return (): void => observer.disconnect();
  }, [sectionIds, lang]);

  return null;
}
