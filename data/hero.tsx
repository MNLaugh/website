/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK data/hero.tsx

import type { LangData, HeroData } from "$types";

// import { h, JSX } from "preact";

// const title: HData = {
//   type: "div",
//   children: [
//     "Hi, I'm Nicolas Métivier",
//     {
//       type: "br"
//     },
//     "also Mnlaugh"
//   ]
// }

// type hType = keyof JSX.IntrinsicElements; // comme "div", "br", "span", etc.
// type hProps = JSX.HTMLAttributes<HTMLElement> | null;

// type HData = {
//   type: hType;
//   props?: hProps;
//   children?: Array<HData | string>;
// };

// function renderNode(node: HData | string): JSX.Element | string {
//   if (typeof node === "string") return node;

//   const { type, props = null, children = [] } = node;
//   return h(type, props, children.map(renderNode));
// }
// const rended = renderNode(title);

export const heroi18n: LangData<HeroData> = {
  "en": {
      title: <>Hi, I'm Nicolas Métivier<br />also Mnlaugh</>,
      content: (
        <div class="space-y-4 text-lg leading-relaxed">
          <p>
            I'm an independent developer and trainer, helping individuals,
            nonprofits and professionals build simple, reliable and long-lasting
            tools.
          </p>
          <p>
            I care about clean code, self-hosting, digital privacy, and free
            software.
          </p>
          <p>
            I build tailor-made solutions, I document, I explain — and sometimes, I
            play guitar.
          </p>
        </div>
      ),
      scrollArrow: { label: "Go to the next section" }
    },
  "fr": {
        title: <>Salut, moi c’est Nicolas Métivier<br />aussi MNLaugh</>,
        content: (
          <div class="space-y-4 text-lg leading-relaxed">
            <p>
              Développeur indépendant et formateur, j’aide particuliers, associations
              et pros à concevoir des outils simples, robustes et durables.
            </p>
            <p>
              J’aime le code clair, l’auto-hébergement, la vie privée numérique et
              les logiciels libres.
            </p>
            <p>
              Je construis sur-mesure, je documente, j’explique — et parfois, je joue
              de la guitare.
            </p>
          </div>
        ),
        scrollArrow: { label: "Aller à la section suivante" }
      }
}