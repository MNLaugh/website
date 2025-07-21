/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK data/menu.tsx

import type { Link } from "$types";
import Icons from "$utils/icons.tsx";
import { indexTitle } from "./index.ts";
import { projectTitle } from "./projects.ts";
import { musicTitle } from "./music.ts";
import { certsTitle } from "./certs.tsx";

export const menu: Link[] = [
  {
    title: indexTitle,
    href: "/",
    Icon: Icons.Home
  }, {
    title: projectTitle,
    href: "/projects",
    Icon: Icons.Folder
  }, {
    title: certsTitle,
    href: "/certs",
    Icon: Icons.GraduationCap
  }, {
    title: musicTitle,
    href: "/music",
    Icon: Icons.Disc3
  }, {
    title: {
      "en": "Contact",
      "fr": "Contact"
    },
    href: "/contact",
    Icon: Icons.MailSearch
  }
]