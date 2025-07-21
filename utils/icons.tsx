/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK utils/icons.tsx

import { JSX } from "preact";
import type { Icon, LucideIcon, LucideProps } from "$types";
import { defaultIcons } from "$utils/default_icons.ts";

/**
 * Generates a custom SVG icon based on the provided options and path data.
 *
 * @param o - The options for the icon, including class, size, and other attributes.
 * @param ds - An array of path data strings that define the shape of the icon.
 * @param vb - An optional viewBox string that defines the position and dimension of the icon's viewport.
 * @returns A JSX element representing the custom SVG icon.
 */
function customIcon(o: LucideProps, ds: string[], vb?: string): JSX.Element {
  return (
    <svg
      class={o.class} // Apply the class from the options
      width={o.size} // Set the width of the SVG to the size from the options
      height={o.size} // Set the height of the SVG to the size from the options
      viewBox={vb || "0 0 24 24"} // Set the viewBox, defaulting to "0 0 24 24" if not provided
      fill="currentColor" // Set the fill color to the current color
      xmlns="http://www.w3.org/2000/svg" // Define the XML namespace for SVG
    >
      {ds.map(d => (
        <path d={d} fill="white" /> // Map over the path data strings and create a path element for each
      ))}
    </svg>
  )
}

/**
 * Path data string for the Discord icon.
 * This string defines the shape and structure of the Discord icon.
 */
const discordD = "M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
/**
 * Generates a custom SVG icon for Discord based on the provided options.
 *
 * @param o - The options for the icon, including class, size, and other attributes.
 * @returns A JSX element representing the Discord SVG icon.
 */
const Discord: LucideIcon = (o:LucideProps): JSX.Element => customIcon(o, [discordD], "0 0 640 512");

/**
 * Path data string for the LinkedIn icon.
 * This string defines the shape and structure of the LinkedIn icon.
 */
const linkedinD = "M4.983 3.5a2.5 2.5 0 1 1-.002 5.001A2.5 2.5 0 0 1 4.983 3.5zM3 9h4v12H3zM9 9h3.6v1.71h.05c.5-.94 1.72-1.93 3.54-1.93 3.8 0 4.5 2.5 4.5 5.75V21h-4v-5.25c0-1.25 0-2.86-1.75-2.86S13 14.5 13 15.7V21H9z";
/**
 * Generates a custom SVG icon for LinkedIn based on the provided options.
 *
 * @param o - The options for the icon, including class, size, and other attributes.
 * @returns A JSX element representing the LinkedIn SVG icon.
 */
const LinkedIn: LucideIcon = (o:LucideProps): JSX.Element => customIcon(o, [linkedinD]);

/**
 * Path data string for the GitHub icon.
 * This string defines the shape and structure of the GitHub icon.
 */
const githubD = "M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.113.82-.26.82-.577v-2.234c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.334-5.466-5.933 0-1.31.47-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.513 11.513 0 0 1 3-.404c1.02.004 2.047.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.63-5.475 5.922.43.372.813 1.103.813 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12Z";
/**
 * Generates a custom SVG icon for GitHub based on the provided options.
 *
 * @param o - The options for the icon, including class, size, and other attributes.
 * @returns A JSX element representing the GitHub SVG icon.
 */
const GitHub: LucideIcon = (o:LucideProps): JSX.Element => customIcon(o, [githubD]);

export const iconList: Icon[] = [
  ...defaultIcons as Icon[],
  { name: "Discord", snake: "discord", Icon: Discord, meta: {"contributors":[],"tags":[],"categories":["brands", "social", "account"]} },
  { name: "LinkedIn", snake: "linkedin", Icon: LinkedIn, meta: {"contributors":[],"tags":[],"categories":["brands", "social"]} },
  { name: "GitHub", snake: "github", Icon: GitHub, meta: {"contributors":[],"tags":[],"categories":["brands", "development"]} }
];

const Icons = iconList.reduce((acc, { name, Icon }): Record<string, LucideIcon> => {
  acc[name] = Icon as LucideIcon;
  return acc;
}, {} as Record<string, LucideIcon>);

export default Icons;