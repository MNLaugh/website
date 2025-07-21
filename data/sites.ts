/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK data/sites.ts

import type { LangData, Site } from "$types";

export const sitesTitle: LangData<string> = {
  "en": "Sites made",
  "fr": "Sites réalisés"
}

/**
 * Retrieves a site object by its unique identifier.
 *
 * @param searchId - The unique identifier of the site to retrieve.
 * @returns The site object if found, otherwise undefined.
 */
export function getSiteById(searchId: string): Site | undefined {
  return sites.find(({ id }: Site): boolean => id === searchId);
}

export const sites: Site[] = [
  {
    id: "poule-noire",
    name: "La Poule Noire du Berry",
    url: "http://lapoulenoireduberry.com",
    target_self: true,
    image: "lapoulenoireduberry.png",
    description: {
      "en": "Website produced for the Berry Black Pool Association. Development, accommodation and technical support.",
      "fr": "Site web réalisé pour l'association de la Poule Noire du Berry. Développement, hébergement et accompagnement technique."
    }
  },
]

export default sites;