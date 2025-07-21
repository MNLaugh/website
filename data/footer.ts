/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK data/footer.ts

import type { LangData } from "$types";

export const footerData: LangData<{ made: string; by: string; built: string}> = {
  "en": {
    made: "Made with",
    by: "by myself and my little hands",
    built: "Built with"
  },
  "fr": {
    made: "Réalisé avec",
    by: "par moi même et mes petites mains",
    built :"Construit avec"
  }
}