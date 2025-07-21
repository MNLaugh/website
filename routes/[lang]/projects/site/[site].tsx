/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK routes/[lang]/projects/site/[site].tsx

import type { JSX, Handlers, PageProps, Site, LangData } from "$types";
import { Head } from "$fresh/runtime.ts";
import { getSiteById } from "$data/sites.ts";
import icons from "$utils/icons.tsx";

/**
 * Handler for the ProjectWrapperPage component.
 * This handler retrieves the site information based on the site ID from the request parameters.
 * If the site is not found, it renders a 404 not found page.
 * Otherwise, it renders the ProjectWrapperPage with the retrieved site data.
 */
export const handler: Handlers<{ site: Site }> = {
  /**
   * Handles GET requests to retrieve and render site information.
   *
   * @param _req - The incoming request object (not used in this handler).
   * @param ctx - The context object containing request parameters and rendering functions.
   * @returns A Response object, either rendering the site data or a 404 not found page.
   */
  GET(_req, ctx): Response | Promise<Response> {
    // Extract the site ID from the request parameters
    const { site } = ctx.params;

    // Retrieve the site information using the site ID
    const target = getSiteById(site);

    // If the site is not found, render a 404 not found page
    if (!target) {
      return ctx.renderNotFound();
    }

    // If the site is found, render the ProjectWrapperPage with the retrieved site data
    return ctx.render({ site: target });
  },
};

const prevent: LangData<(href: string) => JSX.Element> = {
  "en": (href: string): JSX.Element => (
    <p>
      You are currently viewing this site through a preview page on <strong>nicolas-metivier.fr</strong>.
      You are not directly on the original website.
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        class="ml-1 hover:underline transition-colors duration-300 text-gray-400 dark:text-gray-300 hover:text-gray-800 inline-flex items-center gap-1"
      >
        Visit the original site
        <icons.ArrowRight size={14} />
      </a>
    </p>
  ),
  "fr": (href: string): JSX.Element => (
    <p>
      Vous consultez actuellement ce site via une page d'aperçu sur <strong>nicolas-metivier.fr</strong>.
      Vous n'êtes pas directement sur le site Web d'origine.
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        class="ml-1 hover:underline transition-colors duration-300 text-gray-400 dark:text-gray-300 hover:text-gray-800 inline-flex items-center gap-1"
      >
        Accéder au site original
        <icons.ArrowRight size={14} />
      </a>
    </p>
  )
}

/**
 * The ProjectWrapperPage component.
 * This component renders a page that displays an iframe containing the site's URL.
 * It also sets the page title to the site's name.
 *
 * @param props - The properties passed to the component, including the site data.
 * @returns The JSX element representing the ProjectWrapperPage.
 */
export default function ProjectWrapperPage(props: PageProps<{ site: Site }>): JSX.Element {
  return (
    <>
      <Head>
        <title>{props.data.site.name}</title>
      </Head>
      <div class="px-4 py-3 text-sm text-center">
        {prevent[props.state.lang](props.data.site.url)}
      </div>
      <iframe
        src={props.data.site.url}
        loading="lazy"
        class="absolute h-[calc(100vh-148px)] w-full lg:w-[calc(100vw-90px)] rounded-md lg:mx-10 mt-4 z-10"
      ></iframe>
    </>
  );
}
