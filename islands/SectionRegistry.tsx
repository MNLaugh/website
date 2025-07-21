/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK islands/SectionRegistry.tsx

import type { JSX, RegisteredSection, SectionRegistryProps } from "$types";
import { useState } from "preact/hooks";
import { SectionRegistryContext, organizeSections } from "$utils/section-registry.ts";
import ScrollSpyNav from "$islands/ScrollSpyNav.tsx";

/**
 * SectionRegistry Component
 *
 * This component manages the registration of sections and provides a context for
 * registering new sections. It uses the `SectionRegistryContext` to allow child
 * components to register themselves as sections. The registered sections are
 * organized and passed to the `ScrollSpyNav` component for navigation purposes.
 *
 * @param {SectionRegistryProps} props - The properties for the SectionRegistry component.
 * @param {string} props.main_color - The main color to be used for styling the navigation.
 * @param {JSX.Element} props.children - The child components to be rendered within the SectionRegistry.
 * @returns {JSX.Element} The rendered SectionRegistry component.
 */
export default function SectionRegistry({ main_color, children }: SectionRegistryProps): JSX.Element {
  // Initialize state to hold an array of registered sections
  const [sections, setSections] = useState<RegisteredSection[]>([]);

  // Function to register a new section
  const register = (section: RegisteredSection): void => {
    // Log the section being registered
    console.log("Registering section:", section);

    // Update the sections state
    setSections((prev): RegisteredSection[] => {
      // Check if the section is already registered
      if (prev.some((s): boolean => s.id === section.id)) return prev;
      // Add the new section to the list
      return [...prev, section];
    });
  };

  return (
    <SectionRegistryContext.Provider value={register}>
      <ScrollSpyNav sections={organizeSections(sections)} main_color={main_color} />
      {children}
    </SectionRegistryContext.Provider>
  );
}
