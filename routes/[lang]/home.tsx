/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK routes/[lang]/home.tsx

import type { JSX, PageProps } from "$types";
import RedirectToSection from "$islands/RedirectToSection.tsx";
import Home from "$routes/[lang]/index.tsx";

/**
 * HomePage component renders the home page of the application.
 * It uses the RedirectToSection component to redirect to the home section
 * and the Home component to display the main content of the home page.
 *
 * @param props - The properties passed to the HomePage component.
 * @returns A JSX element representing the home page.
 */
export default function HomePage(props: PageProps): JSX.Element {
  return (
    <>
      <RedirectToSection sectionId="home" />
      <Home {...props} />
    </>
  );
}
