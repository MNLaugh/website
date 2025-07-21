/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK islands/ScrollArrow.tsx

import type { JSX, ScrollArrowProps } from "$types";
import Icons from "$utils/icons.tsx";
import SmartScrollLink from "./SmartScrollLink.tsx";

/**
 * ScrollArrow Component
 *
 * This component renders a scroll arrow that, when clicked, scrolls to a specified section of the page.
 * It uses the SmartScrollLink component to handle the scrolling behavior and the ChevronDown icon to indicate the direction.
 *
 * @param {ScrollArrowProps} props - The properties for the ScrollArrow component.
 * @param {string} props.href - The href attribute for the SmartScrollLink, specifying the target section to scroll to.
 * @param {string} props.lang - The language attribute for the SmartScrollLink, used for accessibility.
 * @param {string} props.label - The label for the SmartScrollLink, used for accessibility.
 * @returns {JSX.Element} The rendered ScrollArrow component.
 */
export default function ScrollArrow({ href, lang, label }: ScrollArrowProps): JSX.Element {
  return (
    <div class="mt-12 animate-bounce">
      <SmartScrollLink href={href} lang={lang} label={label} >
        <Icons.ChevronDown size={50} strokeWidth={2} />
      </SmartScrollLink>
    </div>
  );
}