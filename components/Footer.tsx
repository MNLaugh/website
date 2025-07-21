/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK components/Footer.tsx

import type { JSX, LangProps } from "$types";
import { footerData } from "$data/footer.ts";
import icons from "$utils/icons.tsx";

/**
 * Footer component that displays the footer information.
 *
 * @param {LangProps} props - The properties for the Footer component.
 * @param {string} props.lang - The language code to determine the footer content.
 * @returns {JSX.Element} The JSX element representing the footer.
 */
export default function Footer({ lang }: LangProps): JSX.Element {
  return (
    <footer class="py-6 text-center text-xs text-gray-500">
      <p>
        {footerData[lang].made}
        <span class="inline-block text-red-500 align-middle mx-1">
          <icons.Heart size={12} />
        </span>
         {footerData[lang].by} 
      </p>
      <p class="mt-1">
        {footerData[lang].built} 
        <a href="https://deno.land/" class="underline hover:text-gray-400 mx-1" target="_blank">Deno</a>, 
        <a href="https://fresh.deno.dev/" class="underline hover:text-gray-400 mx-1" target="_blank">Fresh</a>, 
        <a href="https://tailwindcss.com/" class="underline hover:text-gray-400 mx-1" target="_blank">Tailwind</a> 
        & 
        <a href="https://lucide.dev/" class="underline hover:text-gray-400 mx-1" target="_blank">Lucide Icons</a>
      </p>
    </footer>
  );
}