/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK utils/section-registry.ts

import { createContext } from "preact";
import type { RegisteredSection, SectionElement } from "$types";

/**
 * Creates a context for the SectionRegistry.
 * This context provides a function that can be used to register a new section.
 * The function takes a `RegisteredSection` object as an argument and returns nothing (void).
 */
export const SectionRegistryContext = createContext<(section: RegisteredSection) => void>((): void => {});

/**
 * Organizes an array of `RegisteredSection` objects into a hierarchical structure of `SectionElement` objects.
 *
 * This function processes an array of sections, each with a `level` property indicating its hierarchy level.
 * Sections with a level of 2 are considered top-level sections, and sections with a level of 3 are considered
 * sub-sections of the last encountered top-level section. If a level 3 section is encountered before any level 2
 * section, it is assigned to a default top-level section labeled 'Autres'.
 *
 * @param sections - An array of `RegisteredSection` objects to be organized.
 * @returns An array of `SectionElement` objects representing the hierarchical structure of the sections.
 */
export function organizeSections(sections: RegisteredSection[]): SectionElement[] {
  // Initialize the result array to store the hierarchical structure of sections
  const result: SectionElement[] = [];

  // Initialize a variable to keep track of the last top-level section encountered
  let lastParent: SectionElement | null = null;

  // Iterate over each section in the input array
  for (const s of sections) {
    // If the section is a top-level section (level 2)
    if (s.level === 2) {
      // Create a new SectionElement for the top-level section
      lastParent = { id: s.id, label: s.label };
      // Add the top-level section to the result array
      result.push(lastParent);
    }
    // If the section is a sub-section (level 3)
    else if (s.level === 3) {
      // If there is no last top-level section, create a default one labeled 'Autres'
      if (!lastParent) {
        lastParent = { id: 'autres', label: 'Autres' };
        // Add the default top-level section to the result array
        result.push(lastParent);
      }
      // Ensure the last top-level section has a children array
      lastParent.children = lastParent.children || [];
      // Add the sub-section to the children array of the last top-level section
      lastParent.children.push({ id: s.id, label: s.label });
    }
  }

  // Return the organized array of SectionElement objects
  return result;
}

