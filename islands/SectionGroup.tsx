/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK islands/SectionGroup.tsx

import type { JSX, SectionGroupProps } from "$types";
import AutoRegisterSection from "$islands/AutoRegisterSection.tsx";

/**
 * SectionGroup Component
 *
 * This component renders a section group with an optional introduction and children elements.
 * It uses the AutoRegisterSection component to register the section and apply styling.
 *
 * @param {SectionGroupProps} props - The properties for the SectionGroup component.
 * @param {string} props.id - The unique identifier for the section.
 * @param {string} props.title - The title of the section.
 * @param {JSX.Element} [props.intro] - An optional introduction element to display above the children.
 * @param {JSX.Element[]} props.children - The child elements to render within the section group.
 * @returns {JSX.Element} The rendered SectionGroup component.
 */
export default function SectionGroup({ id, title, intro, children }: SectionGroupProps): JSX.Element {
  return (
    <>
      <AutoRegisterSection id={id} title={title}>
        {intro && <div class="mb-6">{intro}</div>}
      </AutoRegisterSection>
      <div class="pl-4 space-y-16">
        {children}
      </div>
    </>
  );
}
