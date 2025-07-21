/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK data/404.ts

import type { LangData } from "$types";

export const notFoundi18n: LangData<{
  title: string;
  text: string;
  button: string;
}> = {
  "en": {
    title: "404 - Page not found",
    text: "The page you were looking for doesn't exist.",
    button: "Go back home"
  },
  "fr": {
    title: "404 - Page non trouvée",
    text: "La page que vous cherchez n’existe pas.",
    button: "Retour à l’accueil"
  }
}