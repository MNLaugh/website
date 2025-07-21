/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK data/contact.tsx

import type { LangData, Contact } from "$types";
import Icons from "$utils/icons.tsx";

export const contactText: LangData<string> = {
  "en": "If you want to discuss a project, ask a question or just say hello:",
  "fr": "Si tu veux discuter d’un projet, poser une question ou simplement dire bonjour :"
}

export default [
  {
    label: {
      "en": "Contact by mail",
      "fr": "Me contacter par mail"
    },
    url: "mailto:contact@nicolas-metivier.fr",
    Icon: Icons.AtSign,
    color: "blue"
  },
  {
    label: {
      "en": "My Discord server",
      "fr": "Mon serveur Discord"
    },
    url: "https://discord.gg/QP27TCFwe9",
    Icon: Icons.Discord,
    color: "indigo"
  },
  {
    label: {
      "en": "My LinkedIn profil",
      "fr": "Mon profile LinkedIn"
    },
    url: "https://www.linkedin.com/in/mnlaugh/",
    Icon: Icons.LinkedIn,
    color: "sky"
  },
  {
    label: {
      "en": "My Github profil",
      "fr": "Mon profile Github"
    },
    url: "https://github.com/MNLaugh/",
    Icon: Icons.GitHub,
    color: "gray"
  },
] as Contact[];

