/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK data/certs.tsx

import type { JSX, LangData } from "$types";

export const certsTitle: LangData<string> = {
  "en": "Certifications",
  "fr": "Certificats"
}

export default [
  {
    id: "mooc",
    name: {
      "en": "SecNumacadémie – Mooc Cybersecurity",
      "fr": "SecNumacadémie – MOOC Cybersécurité"
    },
    description: {
      "en": (
        <p class="text-sm">
          Certificate issued by the ANSSI<br />
          Date of obtaining: July 15, 2025<br />
          Validated modules with 100 % success
        </p>
      ),
      "fr": (
        <p class="text-sm">
          Attestation délivrée par l’ANSSI<br />
          Date d'obtention : 15 juillet 2025<br />
          Modules validés avec 100 % de réussite
        </p>
      )
    },
    file: "attestation-secnumacademie.pdf"
  },
] as {
  id: string;
  name: LangData<string>;
  description: LangData<JSX.Element>;
  file: string;
}[];