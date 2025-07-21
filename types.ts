/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK types.ts

import { ComponentChildren, ComponentType, JSX } from "preact";
import { FreshContext, Handlers, PageProps as PagePropsCopy } from "$fresh/server.ts";
import { LucideProps } from "lucide-preact";
//TYPE - Baics
export type { JSX, Handlers, FreshContext };

//TYPE - utils / colors
export type Color = "slate" | "gray" | "zinc" | "neutral" | "stone" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";

//TYPE - utils / i18n
export type Lang = "fr" | "en";
export type LangData<DataType> = Record<Lang, DataType>;
export type LangProps = { lang: Lang };

//TYPE - utils / icons
export type MetaIcon = {
  contributors: string[];
  tags: string[];
  categories: string[];
}

export type { LucideProps };
export type LucideIcon = ComponentType<LucideProps>;

export type Icon = {
  name: string;
  snake: string;
  Icon: LucideIcon;
  meta: MetaIcon;
}

//TYPE - utils / section-registry
export type RegisteredSection = {
  id: string;
  label: string;
  level?: 2 | 3;
};
export type SectionElement = {
  id: string;
  label: string;
  children?: SectionElement[]
}

//TYPE - components / Hero
export type HeroData = {
  title: string | JSX.Element;
  content: JSX.Element;
  scrollArrow: {
    label: string;
  }
}

export type HeroProps= {
  id: string;
  lang: Lang;
  data: HeroData;
}

//TYPE - components / ProjectCard
export type ProjectCardProps = {
  lang: Lang;
  id?: string;
  title: string;
  description?: string | JSX.Element;
  link?: string;
  target_self?: boolean;
  label?: string;
  image?: string;
  imagecls?: string;
  clickable?: boolean;
};

//TYPE - components / Section
export type SectionProps = {
  id: string;
  title: string;
  children?: ComponentChildren;
  image?: string;
  class?: string;
  title_align?: "start" | "center" | "end"
};

//TYPE - data / projects
export type Image = {
  src: string;
  alt: LangData<string>;
}
export type ProjectSection = {
  id: string;
  title: LangData<string>;
  intro?: LangData<string | JSX.Element>;
  content?: LangData<string | JSX.Element>;
  children?: ProjectSection[];
}

export type Project = {
  id: string;
  name: LangData<string>;
  description: LangData<string>;
  image?: Image;
  card_image?: Image
  main_color: string;
  intro_section?: ProjectSection[];
  sections: ProjectSection[];
}

export type ProjectMini = {
  title: LangData<string>;
  description: LangData<string>;
  link: string
  image?: string
}

//TYPE - data / contact
export type Contact = {
  label: LangData<string>;
  url: string;
  Icon: LucideIcon;
  color?: Color;
}

//TYPE - data / menu
export type Link = {
  title: LangData<string>;
  href: string;
  Icon: LucideIcon;
}

//TYPE - data / music
export type Music = {
  id: string;
  name: string;
  image: string;
}

//TYPE - data / sites
export type Site = {
  id: string;
  name: string;
  url: string;
  target_self?: boolean;
  image: string;
  description: LangData<string>;
}

//TYPE - data / iconsPage
export type iconsPageText = LangData<{
  title: string;
  search: string;
  categories: string;
  meta: {
    name: string;
    tags: string;
    categories: string;
    contributors: string;
  }
  screen_alert: string;
}>

//TYPE - data / colorsPage
export type colorsPageText = LangData<{
  title: string;
  search: string;
}>

//TYPE - islands / AutoRegisterSection
export type AutoRegisterSectionProps = {
  id: string;
  title: string;
  level?: 2 | 3;
  children: ComponentChildren;
}

//TYPE - islands / ColorGrid
export type ColorGridProps = {
  lang: Lang;
  colors: string[];
  shades: number[];
};

//TYPE - islands / CopyBlock
export type CopyBlockProps = {
  code?: string;
  text?: string;
  copiedText?: string
};

//TYPE - islands / FadeInOnVisible
export type FadeInOnVisibleProps = {
  children: JSX.Element;
  class?: string;
  delay?: string;
};

//TYPE - islands / RedirectToSection
export type RedirectToSectionProps = {
  sectionId: string;
}

//TYPE - islands / ScrollArrow
export type ScrollArrowProps = {
  href: string;
  lang: Lang;
  label: string;
};

//TYPE - islands / ScrollSpyNav
export type ScrollSpyNavSection = {
  id: string;
  label: string;
  children?: ScrollSpyNavSection[];
};

export type ScrollSpyNavProps = {
  main_color?: string;
  sections: ScrollSpyNavSection[];
};

//TYPE - islands / SectionGroup
export type SectionGroupProps = {
  id: string;
  title: string;
  intro?: JSX.Element | string;
  children: JSX.Element | JSX.Element[];
};

//TYPE - islands / SectionRegistry
export type SectionRegistryProps = {
  main_color?: string;
  children: ComponentChildren;
}

//TYPE - islands / SectionURLUpdater
export type SectionURLUpdaterProps = {
  sectionIds: string[];
  lang: string;
};

//TYPE - islands / SidebarNav
export type SidebarNavProps = {
  lang: Lang;
}

//TYPE - islands / SmartScrollLink
export type SmartScrollLinkProps = {
  id?: string;
  href: string;
  lang: Lang;
  label: string;
  class?: string;
  style?: JSX.CSSProperties | JSX.SignalLike<string | JSX.CSSProperties | undefined>;
  children: ComponentChildren;
};

//TYPE - routes / _middleware
export type State = {
  lang: Lang;
}

export type PageProps<T = unknown> = PagePropsCopy<T, State>;