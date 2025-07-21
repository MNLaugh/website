/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK islands/ColorGrid.tsx

import { useEffect, useRef, useState } from "preact/hooks";
import type { JSX, ColorGridProps } from "$types";
import colorsPage from "$data/colors.ts"

/**
 * ColorGrid Component
 *
 * This component renders a grid of colors with their respective shades.
 * It includes a search input to filter colors based on the user's query.
 *
 * @param {ColorGridProps} props - The properties object containing:
 *   - lang: The language to be used for the search placeholder.
 *   - colors: An array of color names to be displayed.
 *   - shades: An array of shade values to be displayed for each color.
 *
 * @returns {JSX.Element} The rendered ColorGrid component.
 */
export default function ColorGrid({ lang, colors, shades }: ColorGridProps): JSX.Element {
  // Initialize state for the search query
  const [query, setQuery] = useState("");

  // Create a reference to the input element
  const inputRef = useRef<HTMLInputElement>(null);

  // Use effect to focus on the input element when the component mounts
  useEffect((): void => {
    inputRef.current?.focus();
  }, []);

  // Filter the colors based on the search query
  const filteredColors = colors.filter((color): boolean =>
    color.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder={colorsPage[lang].search}
        value={query}
        onInput={(e): void =>
          setQuery((e.currentTarget as HTMLInputElement).value)
        }
        class="mb-8 p-2 rounded border border-gray-700 w-full animate-slide-down"
      />

      {filteredColors.map((color): JSX.Element => (
        <section key={color}>
          <div class="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-2 mb-4">
            <h2 class="text-xl font-semibold mb-4 capitalize text-end col-span-1">
              {color}
            </h2>
            {shades.map((shade): JSX.Element => (
              <div
                key={`${color}-${shade}`}
                title={`${color}-${shade}`}
                class={`h-10 w-full rounded bg-${color}-${shade} shadow-lg shadow-${color}-${shade}/50 hover:scale-[1.08] transition-transform duration-200 flex items-center justify-center text-xs ${
                  shade > 400 ? "text-white" : "text-black"
                }`}
              >
                {shade}
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
