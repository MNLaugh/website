/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK islands/IconGrid.tsx

import { useEffect, useState } from "preact/hooks";
import type { Icon, JSX, Lang } from "$types";
import icons, { iconList } from "$utils/icons.tsx";
import IconModal from "$components/IconModal.tsx";
import iconsPage from "$data/icons.ts";
import { capitalize } from "$utils/i18n.ts";
import FadeInOnVisible from "./FadeInOnVisible.tsx";

export default function IconGrid({ lang }: { lang: Lang }): JSX.Element {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selected, setSelected] = useState<Icon | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const categories = Array.from(new Set(iconList.flatMap((icon): string[] => icon.meta?.categories ?? []))).sort();
  const filteredIcons = iconList.filter((icon): boolean => {
    const matchCategory = selectedCategory ? icon.meta?.categories?.includes(selectedCategory) : true;
    const matchQuery = icon.name.toLowerCase().includes(query.toLowerCase());
    return matchCategory && matchQuery;
  });
  const categoryCounts = categories.reduce((acc, cat): Record<string, number> => {
    acc[cat] = iconList.filter(icon => icon.meta?.categories?.includes(cat)).length;
    return acc;
  }, {} as Record<string, number>);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <div class="flex">
      {/* Icons Grid */}
      <div class="w-full">
        <input
          type="text"
          placeholder={iconsPage[lang].search}
          value={query}
          onInput={(e): void => setQuery((e.currentTarget as HTMLInputElement).value)}
          class="mb-6 p-2 rounded dark:bg-gray-800 dark:text-white border border-gray-700 w-full animate-slide-down transition-colors duration-300"
        />
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {filteredIcons.map(({ name }, index): JSX.Element => {
            const Icon = icons[name];
            const delay = `${index * 40}ms`;
            return (
              <FadeInOnVisible key={name} delay={delay}>
                <div
                  key={`${name}-${selectedCategory ?? "all"}`}
                  class="flex flex-col items-center text-center gap-2 group hover:text-indigo-500 transition relative group"
                  onClick={(): void => setSelected(filteredIcons[index])}
                  title={name}
                >
                  <Icon
                    size={32}
                    class="group-hover:text-indigo-500 transition"
                  />
                  <div
                    class="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-max whitespace-nowrap 
                          px-2 py-1 rounded-md dark:bg-gray-800 ring-1 ring-indigo-500 text-xs 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 
                          pointer-events-none shadow-md backdrop-blur-sm"
                  >
                    {name}
                  </div>

                </div>
              </FadeInOnVisible>
            );
          })}
        </div>
        {selected && <IconModal entry={selected} lang={lang} onClose={(): void => setSelected(null)} />}
      </div>
      {/* Category Filter */}
      <button
        type="button"
        class="fixed top-4 right-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-xl shadow xl:hidden"
        aria-label="Ouvrir la navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <icons.X size={24} /> : <icons.ListFilterPlus size={24} />}
      </button>
      {isOpen && (
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 xl:hidden" onClick={() => setIsOpen(false)} />
      )}

    <nav
      class={`fixed top-8 w-64 xl:w-72 mr-9 xl:mr-1 p-3 right-8 text-sm z-40 rounded-xl shadow-lg dark:shadow-indigo-700/20 bg-gray-300 dark:bg-gray-950
        transition-colors duration-300 ease-in-out 
        ${isOpen ? "block opacity-100 translate-x-0" : "hidden opacity-0 -translate-x-6 pointer-events-none"}
        xl:block xl:opacity-100 xl:translate-x-0 xl:pointer-events-auto`}
    >
        <div class="flex justify-end">
          <icons.ListFilterPlus size={24} />
          <h2 class="mb-3 mx-2 text-lg font-semibold ">{iconsPage[lang].categories}</h2>
        </div>
        <ul class="flex flex-wrap gap-2 p-3 justify-end overflow-x-auto h-[calc(100vh-70px)]">
          {categories.map((cat, i): JSX.Element => (
            <li key={cat}>
              <button
                type="button"
                onClick={(): void => setSelectedCategory(cat === selectedCategory ? null : cat)}
                style={{ animationDelay: `${i * 20}ms` }}
                class={`inline-block px-3 py-1.5 rounded-full ${cat === selectedCategory ? "bg-indigo-500 text-white" : "dark:bg-gray-800 dark:text-gray-300 hover:bg-indigo-500 hover:text-white"} border border-gray-500 text-xs transition-colors animate-slide-right`}
              >
                {capitalize(cat)}
                <span class="ml-1 inline-block px-1.5 py-0.5 rounded-full dark:bg-black/20 dark:text-white border border-gray-500 text-[10px] transition-colors duration-300">
                  {categoryCounts[cat]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
