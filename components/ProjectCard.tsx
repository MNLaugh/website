/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK components/ProjectCard.tsx

import type { JSX, LangData, ProjectCardProps } from "$types";
import Icons from "$utils/icons.tsx";

const data: LangData<string> = {
  "en": "See the project",
  "fr": "Voir le projet"
}

/**
 * ProjectCard Component
 *
 * This component renders a card for a project, displaying its title, description, and an optional image.
 * It supports different languages for the "See the project" text and can be made clickable to link to the project.
 *
 * @param {ProjectCardProps} props - The properties for the ProjectCard component.
 * @param {string} props.lang - The language code to display the text in (e.g., "en" for English, "fr" for French).
 * @param {string} props.id - The unique identifier for the card.
 * @param {string} props.title - The title of the project.
 * @param {string} [props.description] - The description of the project (optional).
 * @param {string} [props.link] - The URL link to the project (optional).
 * @param {boolean} [props.target_self] - Whether to open the link in the same tab (optional).
 * @param {string} [props.image] - The URL of the image to display (optional).
 * @param {boolean} [props.clickable] - Whether the card should be clickable (optional).
 * @returns {JSX.Element} The rendered ProjectCard component.
 */
export default function ProjectCard({ lang, id, title, description, link, target_self, label, image, imagecls, clickable }: ProjectCardProps): JSX.Element {
  // Define the Card component as a JSX element
  const Card = (
    <div
      id={id}
      className="w-[300px] bg-gray-300/70 dark:bg-gray-900/80 dark:hover:bg-indigo-950/80 hover:bg-gray-100/70 shadow-lg dark:hover:shadow-indigo-700/20 rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300"
    >
      {/* Display the image if provided */}
      {image && <img src={image} alt={title} className={`rounded-xl mb-4 w-full object-cover ${imagecls}`} />}
      {/* Display the title of the project */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {/* Display the description if provided */}
      {description && <p className="text-sm">{description}</p>}
      {/* Display the link if the card is not clickable and a link is provided */}
      {(!clickable && link) && (
        <a
          href={link}
          target={!target_self ? "_blank" : "_self"}
          className="inline-flex items-center gap-1 text-indigo-500 hover:underline text-sm align-middle pt-2"
        >
          {/* Display the appropriate text based on the language */}
          {label || data[lang]}
          {/* Display the chevron icon */}
          <Icons.ChevronRight size={16} className="relative top-[0.5px]" />
        </a>
      )}
    </div>
  );

  // Return the Card component, wrapped in an anchor tag if the card is clickable
  return (clickable) ? (<a href={link} target={!target_self ? "_blank" : "_self"}>{Card}</a>) : Card;
}