/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK routes/[lang]/utils/icons.tsx

import IconGrid from "$islands/IconGrid.tsx";
import { Head } from "$fresh/runtime.ts";
import type { JSX, Lang, PageProps } from "$types";
import iconsPage from "$data/icons.ts"
import { iconList } from "$utils/icons.tsx";

export default function IconsPage(props: PageProps): JSX.Element {
  const lang = props.params.lang as Lang;

  return (
    <>
      <Head>
        <title>{iconsPage[lang].title}</title>
      </Head>
      <main class="mt-8 p-8 max-w-5xl mx-auto bg-gray-300 dark:bg-gray-900 px-20 py-10 rounded-xl">
        <h1 class="text-xl lg:text-3xl font-bold mb-6 animate-slide-down">
          {iconsPage[lang].title} ({iconList.length})
        </h1>

        <IconGrid lang={lang} />
      </main>
    </>
  );
}
