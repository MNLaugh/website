/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK data/music.ts

import type { LangData, Music } from "$types";

export const musicTitle: LangData<string> = {
  "en": "Music",
  "fr": "Musique"
}

export default [
  {
    id: "le-gorille",
    name: "Le gorille",
    image: "distrokid-le-gorille.jpeg"
  },
  {
    id: "mon-fils-ma-bataille-reggae",
    name: "Mon fils ma bataille Reggae",
    image: "distrokid-mon-fils.jpeg"
  },
  {
    id: "aione",
    name: "AIone",
    image: "distrokid-ione.png"
  },
] as Music[];