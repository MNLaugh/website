/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK routes/[lang]/certs.tsx

import type { JSX, PageProps } from "$types";
import RedirectToSection from "$islands/RedirectToSection.tsx";
import Home from "$routes/[lang]/index.tsx";

/**
 * CertsPage is a functional component that renders the Certs section of the website.
 * It uses the RedirectToSection component to navigate to the "certs" section and
 * renders the Home component with the provided props.
 *
 * @param props - The properties passed to the CertsPage component.
 * @returns A JSX element representing the CertsPage.
 */
export default function CertsPage(props: PageProps): JSX.Element {
  return (
    <>
      <RedirectToSection sectionId="certs" />
      <Home {...props} />
    </>
  );
}
