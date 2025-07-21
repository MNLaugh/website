/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK routes/[lang]/music.tsx

import type { JSX, PageProps } from "$types";
import RedirectToSection from "$islands/RedirectToSection.tsx";
import Home from "$routes/[lang]/index.tsx";

/**
 * MusicPage is a functional component that renders the Music section of the website.
 * It uses the RedirectToSection component to navigate to the "music" section and
 * renders the Home component with the provided props.
 *
 * @param props - The properties passed to the MusicPage component.
 * @returns A JSX element representing the MusicPage.
 */
export default function MusicPage(props: PageProps): JSX.Element {
  return (
    <>
      <RedirectToSection sectionId="music" />
      <Home {...props} />
    </>
  );
}
