/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK components/Hero.tsx

import type { JSX, HeroProps } from "$types";
import ScrollArrow from "$islands/ScrollArrow.tsx";

/**
 * Hero component renders a hero section with a title, content, and a scroll arrow.
 *
 * @param {HeroProps} props - The properties for the Hero component.
 * @param {string} props.id - The unique identifier for the section.
 * @param {Lang} props.lang - The language setting for the component.
 * @param {HeroData} props.data - The data containing the title, content, and scroll arrow label.
 * @returns {JSX.Element} The rendered Hero component.
 */
export default function Hero({ id, lang, data }: HeroProps): JSX.Element {
  return (
    <section
      class="flex flex-col items-center justify-center h-screen text-center px-4"
      id={id}
    >
      <div class="absolute bg-gray-300/60 dark:bg-gray-900/80 px-6 py-20 rounded-xl">
        <h1 class="text-4xl sm:text-6xl font-bold mb-4 animate-slide-down">
          {data.title}
        </h1>
        <div class="animate-slide-up">
          {data.content}
        </div>        
      </div>
      <div class="absolute mt-96 pt-16">
        <ScrollArrow lang={lang} label={data.scrollArrow.label} href={`/${lang}/projects`} />
      </div>
    </section>
  );
}