/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK routes/[lang]/projects/index.tsx

import type { JSX, PageProps } from "$types";
import RedirectToSection from "$islands/RedirectToSection.tsx";
import Home from "$routes/[lang]/index.tsx";

/**
 * ProjectsPage is a functional component that renders a page with a redirection
 * to the "projects" section and the Home component.
 *
 * @param props - The properties passed to the component.
 * @returns A JSX element containing the RedirectToSection and Home components.
 */
export default function ProjectsPage(props: PageProps): JSX.Element {
  return (
    <>
      <RedirectToSection sectionId="projects" />
      <Home {...props} />
    </>
  );
}
