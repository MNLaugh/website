/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK islands/AutoRegisterSection.tsx

import type { JSX, AutoRegisterSectionProps } from "$types";
import { useContext, useEffect } from "preact/hooks";
import { SectionRegistryContext } from "$utils/section-registry.ts";

/**
 * AutoRegisterSection is a functional component that automatically registers a section
 * with a given ID, title, and level. It uses the SectionRegistryContext to register
 * the section when the component mounts. The section is rendered as a <section> element
 * with a heading tag (h1, h2, etc.) based on the level prop.
 *
 * @param {AutoRegisterSectionProps} props - The properties for the AutoRegisterSection component.
 * @param {string} props.id - The unique identifier for the section.
 * @param {string} props.title - The title of the section.
 * @param {number} [props.level=2] - The heading level for the section (default is 2).
 * @param {JSX.Element} props.children - The content of the section.
 * @returns {JSX.Element} The rendered section element.
 */
export default function AutoRegisterSection({ id, title, level = 2, children }: AutoRegisterSectionProps): JSX.Element {
  // Retrieve the register function from the SectionRegistryContext
  const register = useContext(SectionRegistryContext);

  // Use the useEffect hook to register the section when the component mounts
  useEffect((): void => {
    // Register the section with the provided id, title, and level
    register({ id, label: title, level });
  }, [id, title, level]); // Dependencies array to re-run the effect if any of these values change

  // Dynamically create the heading tag based on the level prop
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  // Return the JSX for the section
  return (
    <section id={id} class="mb-12 scroll-mt-28">
      {/* Render the heading tag with the title */}
      <HeadingTag class="text-2xl font-bold mb-4">{title}</HeadingTag>
      {/* Render the children content of the section */}
      {children}
    </section>
  );
}
