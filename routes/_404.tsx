/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK routes/_404.tsx

import type { JSX, PageProps } from "$types";
import { Head } from "$fresh/runtime.ts";
import { notFoundi18n } from "$data/404.ts";

/**
 * Renders a 404 Not Found page with internationalized content.
 * This component uses the `notFoundi18n` data to display the appropriate
 * title, text, and button label based on the user's language setting.
 *
 * @param {PageProps<null>} props - The props for the page, which include the state.
 * @returns {JSX.Element} The JSX element representing the 404 Not Found page.
 */
export default function Error404({ state }: PageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{notFoundi18n[state.lang].title}</title>
      </Head>
      <div class="px-4 py-8 mx-auto h-[calc(100vh-5rem)]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/images/logo.png"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">{notFoundi18n[state.lang].title}</h1>
          <p class="my-4">
            {notFoundi18n[state.lang].text}
          </p>
          <a href={`/${state.lang}`} class="underline">{notFoundi18n[state.lang].button}</a>
        </div>
      </div>
    </>
  );
}
