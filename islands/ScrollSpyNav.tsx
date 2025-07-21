/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK islands/ScrollSpyNav.tsx

import type { JSX, ScrollSpyNavProps, ScrollSpyNavSection } from "$types";
import { useEffect, useState } from "preact/hooks";
import Icons from "$utils/icons.tsx";

/**
 * ScrollSpyNav Component
 *
 * This component creates a navigation menu that highlights the active section
 * based on the user's scroll position. It also handles hover events to temporarily
 * highlight a section when the user hovers over it.
 *
 * @param {ScrollSpyNavProps} props - The properties for the ScrollSpyNav component.
 * @param {string} props.main_color - The main color to use for highlighting active sections.
 * @param {ScrollSpyNavSection[]} props.sections - The sections to include in the navigation menu.
 * @returns {JSX.Element} The rendered ScrollSpyNav component.
 */
export default function ScrollSpyNav({ main_color, sections }: ScrollSpyNavProps): JSX.Element {
  const [isOpenSpy, setIsOpenSpy] = useState(false);
  // State to keep track of the currently active section ID
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");

  // State to ignore scroll events when hovering over a section
  const [ignoreScroll, setIgnoreScroll] = useState(false);

  // Flatten the section IDs including their children
  const flatSectionIds = sections.flatMap((section): string[] => [
    section.id,
    ...(section.children?.map((child): string => child.id) || []),
  ]);

  useEffect((): () => void => {
    // Handler for mouse enter event to set active ID and ignore scroll
    const handleMouseEnter = (id: string): () => void => (): void => {
      setActiveId(id);
      setIgnoreScroll(true);
    };

    // Handler for mouse leave event to stop ignoring scroll
    const handleMouseLeave = (): () => void => (): void => setIgnoreScroll(false);

    // Intersection observer to track visible sections
    const observer = new IntersectionObserver((entries): void => {
      console.log(ignoreScroll);
      if (ignoreScroll) return;
      const visible = entries
        .filter((entry): boolean => entry.isIntersecting)
        .sort((a, b): number => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length > 0) setActiveId(visible[0].target.id);
    },
      {
        rootMargin: "-30% 0% -65% 0%",
        threshold: 0.1,
      });

    // Array to store cleanup functions for observers and event listeners
    const cleanups: (() => void)[] = [];

    // Attach observers and event listeners to each section element
    flatSectionIds.forEach((id): void => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        const hoverFn = handleMouseEnter(id);
        const leaveFn = handleMouseLeave();
        el.addEventListener("mouseenter", hoverFn);
        el.addEventListener("mouseleave", leaveFn);
        cleanups.push((): void => {
          observer.unobserve(el);
          el.removeEventListener("mouseenter", hoverFn);
          el.removeEventListener("mouseleave", leaveFn);
        });
      }
    });

    // Cleanup function to remove observers and event listeners
    return (): void => cleanups.forEach((fn): void => fn());
  }, [flatSectionIds]);

  // Function to check if a section or its children are active
  const isActive = (id: string, children?: ScrollSpyNavSection[]): boolean => {
    if (activeId === id) return true;
    return children?.some((child): boolean => child.id === activeId) || false;
  };
  useEffect(() => {
    document.body.style.overflow = isOpenSpy ? "hidden" : "";
  }, [isOpenSpy]);
  return (
    <>
      <button
        type="button"
        class="fixed top-4 right-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-xl shadow md:hidden"
        aria-label="Ouvrir la navigation"
        onClick={() => setIsOpenSpy(!isOpenSpy)}
      >
        {isOpenSpy ? <Icons.X size={24} /> : <Icons.SquareMenu size={24} />}
      </button>
      {isOpenSpy && (<div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={(): void => setIsOpenSpy(false)} />)}
      <nav class={`fixed top-64 md:top-32 right-8 transform text-sm -translate-y-1/2 flex flex-col space-y-4 z-40 p-3 rounded-xl shadow-lg transition-all duration-300 dark:shadow-indigo-700/20
        ease-in-out ${isOpenSpy ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6 pointer-events-none"}
        md:opacity-100 md:translate-x-0 md:pointer-events-auto md:flex bg-gray-300 dark:bg-gray-950`}
      >
        <ul class="space-y-2 border-l border-gray-700 pl-4" onClick={(): void => setIsOpenSpy(false)}>
          {sections.map(({ id, label, children }): JSX.Element => (
            <li key={id}>
              <a
                href={`#${id}`}
                class={`block transition-colors duration-200 ${isActive(id, children)
                    ? `text-${main_color || "orange"}-400 hover:underline font-semibold`
                    : "hover:underline"
                  }`}
              >
                {label}
              </a>
              {children && (
                <ul class="pl-4 mt-1 space-y-1">
                  {children.map(({ id: childId, label: childLabel }): JSX.Element => (
                    <li key={childId}>
                      <a
                        href={`#${childId}`}
                        class={`block text-xs transition-colors duration-200 ${activeId === childId
                            ? `text-${main_color || "orange"}-300 hover:underline font-semibold`
                            : "hover:underline dark:hover:text-white transition-colors duration-300"
                          }`}
                      >
                        {childLabel}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
