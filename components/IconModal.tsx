/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK components/IconModal.tsx

import { useEffect, useRef } from "preact/hooks";
import type { JSX, Icon, Lang } from "$types";
import icons from "$utils/icons.tsx";
import iconsPage from "$data/icons.ts";
import { capitalize } from "$utils/i18n.ts";
import CopyBlock from "$islands/CopyBlock.tsx";

type IconModalProps = {
  entry: Icon;
  lang: Lang;
  onClose: () => void;
};

export default function IconModal({ entry, lang, onClose }: IconModalProps): JSX.Element {
  const { name, snake, meta } = entry;
  const modalRef = useRef<HTMLDivElement>(null);
  const Icon = icons[name];

  useEffect((): () => void => {
    const escHandler = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
    };
    addEventListener("keydown", escHandler);
    return (): void => removeEventListener("keydown", escHandler);
  }, []);

  return (
    <div
      class="fixed bottom-0 left-0 right-0 z-50 items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        class="bg-gray-900 text-white rounded-t-xl shadow-2xl p-6 max-w-screen-md mx-auto animate-slide-up"
        onClick={(e): void => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          class="absolute top-3 right-3 text-gray-400 hover:text-red-400 text-2xl transition"
          aria-label="Fermer"
        >
          <icons.X />
        </button>

        {/* Icon Preview */}
        <Icon size={96} class="mx-auto mb-4 text-indigo-500" />

        {/* Titres */}
        <div class="text-center mb-2">
          <h2 class="text-xl font-bold"><CopyBlock text={name} copiedText={lang === "fr" ? "Nom copié dans le presse-papiers" : "Name copied in the clipboard"} /></h2>
          <p class="text-sm text-gray-400">{snake}</p>
        </div>

        <hr class="border-gray-700 my-4" />

        {/* Detailed info */}
        {meta && (
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-300 mt-4 max-w-3xl mx-auto justify-center">
            {meta.categories?.length > 0 && (
              <div>
                <h3 class="text-xs text-gray-500 uppercase font-semibold mb-2 text-center">
                  {iconsPage[lang].meta.categories}
                </h3>
                <div class="flex flex-wrap gap-1 justify-center">
                  {meta.categories.map((cat): JSX.Element => (
                    <span class="px-2 py-1 bg-gray-800 rounded text-white text-xs">
                      {capitalize(cat)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {meta.tags?.length > 0 && (
              <div>
                <h3 class="text-xs text-gray-500 uppercase font-semibold mb-2 text-center">
                  {iconsPage[lang].meta.tags}
                </h3>
                <div class="flex flex-wrap gap-1 justify-center">
                  {meta.tags.map((tag): JSX.Element => (
                    <span class="px-2 py-1 bg-indigo-800 rounded text-white text-xs">
                      {capitalize(tag)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {meta.contributors?.length > 0 && (
              <div>
                <h3 class="text-xs text-gray-500 uppercase font-semibold mb-2 text-center">
                  {iconsPage[lang].meta.contributors}
                </h3>
                <div class="flex flex-wrap gap-1 justify-center">
                  {meta.contributors.map((contrib): JSX.Element => (
                    <span class="px-2 py-1 bg-gray-700 rounded text-white text-xs">
                      {contrib}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
