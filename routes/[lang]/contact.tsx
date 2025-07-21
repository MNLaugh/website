/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK routes/[lang]/contact.tsx

import type { JSX, PageProps } from "$types";
import RedirectToSection from "$islands/RedirectToSection.tsx";
import Home from "$routes/[lang]/index.tsx";

/**
 * ContactPage component renders the contact section of the website.
 * It uses the RedirectToSection component to navigate to the contact section
 * and renders the Home component with the provided props.
 *
 * @param props - The properties passed to the ContactPage component.
 * @returns A JSX element representing the contact page.
 */
export default function ContactPage(props: PageProps): JSX.Element {
  return (
    <>
      <RedirectToSection sectionId="contact" />
      <Home {...props} />
    </>
  );
}
