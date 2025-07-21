/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK routes/[lang]/utils/colors.tsx

import { Head } from "$fresh/runtime.ts";
import type { JSX, Lang, PageProps } from "$types";
import ColorGrid from "$islands/ColorGrid.tsx";
import { colors, shades } from "$utils/colors.ts";
import colorsPage from "$data/colors.ts"

export default function ColorsPage(props: PageProps): JSX.Element {
  const lang = props.params.lang as Lang;

  return (
    <>
      <Head>
        <title>{colorsPage[lang].title}</title>
      </Head>
      <main class="p-8 max-w-screen-lg mx-auto">
        <h1 class="text-xl lg:text-3xl font-bold mb-6 animate-slide-down">
          {colorsPage[lang].title}
        </h1>
        <ColorGrid lang={lang} colors={colors} shades={shades} />
      </main>
    </>
  );
}