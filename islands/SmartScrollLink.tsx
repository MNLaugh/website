/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK islands/SmartScrollLink.tsx

import type { JSX, Lang, SmartScrollLinkProps } from "$types";

const onClick = (e: MouseEvent, lang: Lang, href: string): void => {
  // Check if the current pathname matches any of the specified routes
  if ([`/${lang}`, `/${lang}/projects`, `/${lang}/music`, `/${lang}/contact`].includes(globalThis.location.pathname)) {
    // Prevent the default anchor click behavior
    e.preventDefault();

    // Extract the section ID from the href by removing the leading slash
    const sectionId = href.replace(`/${lang}/`, "");

    // Find the section element by its ID
    let sectionEl = document.getElementById(sectionId);

    // If the section element is not found, default to the "home" section
    if (!sectionEl) sectionEl = document.getElementById("home");

    // If the section element is found, scroll to it smoothly
    if (sectionEl) sectionEl.scrollIntoView({ behavior: "smooth" });

    // Update the browser's URL without causing a full page reload
    history.pushState(null, "", `${href}`);

    // Dispatch a popstate event to notify the application of the URL change
    globalThis.dispatchEvent(new PopStateEvent("popstate"));
  }
}

/**
 * SmartScrollLink Component
 *
 * This component creates a link that, when clicked, smoothly scrolls to a specified section
 * within the current page. It also updates the browser's URL without causing a full page reload.
 *
 * @param {SmartScrollLinkProps} props - The properties for the SmartScrollLink component.
 * @param {string} props.id - The unique identifier for the link element.
 * @param {string} props.href - The URL fragment that specifies the section to scroll to.
 * @param {Lang} props.lang - The language code for the current page.
 * @param {string} props.label - The ARIA label for accessibility.
 * @param {string} [props.class="text-white text-3xl hover:text-indigo-500 transition-colors"] - The CSS classes for styling the link.
 * @param {React.CSSProperties} [props.style] - Inline styles for the link.
 * @param {React.ReactNode} props.children - The content to be displayed inside the link.
 * @returns {JSX.Element} The rendered SmartScrollLink component.
 */
export default function SmartScrollLink({ id, href, lang, label, class: cls = "text-3xl hover:text-indigo-500 transition-colors", style, children }: SmartScrollLinkProps): JSX.Element {
  return (
    <a
      id={id}
      href={href}
      class={cls}
      style={style}
      aria-label={label}
      onClick={(e): void => onClick(e, lang, href)}
    >
      {children}
    </a>
  );
}