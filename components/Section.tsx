/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK components/Section.tsx

import type { JSX, SectionProps } from "$types";


/**
 * Section Component
 *
 * This component renders a section with an optional image, title, and children.
 * The section can be customized with an ID, title alignment, and additional CSS classes.
 *
 * @param {Props} props - The properties for the Section component.
 * @param {string} props.id - The unique identifier for the section.
 * @param {string} props.title - The title of the section.
 * @param {ComponentChildren} [props.children] - The children elements to be rendered inside the section.
 * @param {string} [props.image] - The URL of the image to be displayed in the section.
 * @param {string} [props.class] - Additional CSS classes to apply to the section.
 * @param {"start" | "center" | "end"} [props.title_align="center"] - The alignment of the title within the section.
 * @returns {JSX.Element} The rendered section element.
 */
export default function Section({ id, title, children, image, class: cls, title_align = "center" }: SectionProps): JSX.Element {
  return (
    <section id={id} class={`py-10 px-4 text-${title_align} max-w-6xl mx-auto ${cls || ""}`}>
      {image && (
        <img
          src={image}
          alt={title}
          class="mx-auto mb-8 rounded-xl shadow-lg w-full max-w-3xl object-cover"
        />
      )}
      <h2 class="text-3xl font-semibold mb-8">{title}</h2>
      {children}
    </section>
  );
}