/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK islands/SidebarNav.tsx

import type { Color, JSX, Lang, SidebarNavProps } from "$types";
import { useEffect, useState } from "preact/hooks";
import Icons from "$utils/icons.tsx";
import { currentPath } from "$utils/path.ts";
import { menu } from "$data/menu.tsx";
import SmartScrollLink from "$islands/SmartScrollLink.tsx";
import { supported } from "$utils/i18n.ts";

// Define the active color for the navigation links
const ACTIVE_COLOR: Color = "indigo";

// Define the CSS class for active links using the active color
const ACTIVE_CLASS = `text-${ACTIVE_COLOR}-400`;

// Function to generate the path for a given language
const langPath = (lang: string): string => {
  // Create a regex to match any supported language code at the start of the path
  const regex = new RegExp(`^/(${supported.join("|")})`);
  // Replace the matched language code with the new language code
  return currentPath.value.replace(regex, `/${lang}`) || `/${lang}`;
};

// Function to determine the active class for a menu link based on the current path and language
const active = (lang: Lang, href: string): string => {
  // Check if the href is the root path and the current path matches the root or the language-specific root
  // Alternatively, check if the current path starts with the language-specific href
  return (
    href === "/" && (currentPath.value === "/" || currentPath.value === `/${lang}`)
  ) || currentPath.value.startsWith(`/${lang}${href}`)
    ? ACTIVE_CLASS // Return the active class if the conditions are met
    : ""; // Otherwise, return the inactive class
};

/**
 * SidebarNav Component
 *
 * This component renders a sidebar navigation menu with language-specific links.
 * It highlights the active link based on the current path and provides a language selector.
 *
 * @param {SidebarNavProps} props - The properties for the SidebarNav component.
 * @param {Lang} props.lang - The current language of the application.
 * @returns {JSX.Element} The rendered SidebarNav component.
 */
export default function SidebarNav({ lang }: SidebarNavProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  // Filter out the current language from the supported languages to get other languages
  const otherLangs = supported.filter((l): boolean => l !== lang);
  // Map over the menu items to create SmartScrollLink components
  const menu_links = menu.map(({ title, href, Icon }, i): JSX.Element => (
    <SmartScrollLink
      id={`menu-link-${i}`} // Unique ID for each menu link
      href={`/${lang}${href}`} // Link URL
      lang={lang} // Current language
      label={title[lang]} // Link label based on current language
      style={{ animationDelay: `${i * 100}ms` }} // Animation delay for each link
      class={`hover:text-indigo-500 opacity-0 translate-x-[-10px] animate-slide-left ${active(lang, href)}`} // CSS classes for styling and active state
    >
      <Icon size={30} /> {/* Icon for the menu link */}
    </SmartScrollLink>
  ));

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // useEffect hook to handle updates on navigation
  useEffect((): () => void => {

    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    // Function to update the active state of menu links
    const update = (): void => {
      const path = globalThis.location.pathname; // Get the current path
      menu.forEach(({ href }, i): void => {
        const el = document.getElementById(`menu-link-${i}`); // Get the menu link element by ID
        if (!el) return; // If the element doesn't exist, return
        // Determine if the current path matches the link's href
        const isCurrent = href === "/" ? path === "/" || path === `/${lang}` : path.startsWith(`/${lang}${href}`);
        // Toggle active and inactive classes based on the current path
        el.classList.toggle(ACTIVE_CLASS, isCurrent);
      });
    };

    update(); // Initial update

    // Add event listener for popstate to update on navigation
    globalThis.addEventListener("popstate", update);
    // Cleanup function to remove the event listener
    return (): void => globalThis.removeEventListener("popstate", update);
  }, []); // Empty dependency array to run only on mount and unmount
  return (
    <>
      <button
        type="button"
        class="fixed top-4 left-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-xl shadow md:hidden"
        aria-label="Ouvrir la navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
      </button>
      {isOpen && (
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden" onClick={() => setIsOpen(false)} />
      )}
      <nav class={`fixed top-1/2 left-4 transform -translate-y-1/2 flex flex-col space-y-4 z-40 p-3 rounded-xl shadow-lg transition-all duration-300 dark:shadow-indigo-700/20
        ease-in-out ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6 pointer-events-none"}
        md:opacity-100 md:translate-x-0 md:pointer-events-auto md:flex bg-gray-300 dark:bg-gray-950`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {menu_links}

        {/* Language selector */}
        <div class="relative group mt-6 pt-4 border-t transition-colors duration-300 border-black/20 dark:border-white/20 animate-slide-left">
          <div class="flex items-center space-x-1 cursor-pointer rounded hover:text-indigo-500">
            <Icons.Languages size={30} />
          </div>
          <ul class="absolute left-10 top-0 mt-1 dark:bg-gray-800 text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {otherLangs.map((lang): JSX.Element => (
              <li key={lang}>
                <a
                  href={langPath(lang)}
                  class="block px-4 py-2 hover:text-indigo-500 rounded"
                >
                  {lang.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          onClick={(): void => {
            document.documentElement.classList.toggle("dark");
            localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
          }}
          class="rounded hover:text-indigo-500 transition animate-slide-left"
          aria-label="Toggle dark mode"
        >
          <Icons.Moon size={30} class="hidden dark:inline transition animate-fade-in" />
          <Icons.Sun size={30} class="dark:hidden transition animate-fade-in" />
        </button>
      </nav>
    </>
  );
}
