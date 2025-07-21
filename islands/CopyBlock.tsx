/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK islands/CopyBlock.tsx

import type { CopyBlockProps, JSX } from "$types";
import { useRef, useState } from "preact/hooks";
import Icons from "$utils/icons.tsx";

/**
 * CopyBlock Component
 *
 * This component renders a block of code with a copy-to-clipboard functionality.
 * It uses Preact hooks to manage the reference to the code block and the state of the copy action.
 * When the copy button is clicked, the code is copied to the clipboard, and a confirmation message is displayed.
 *
 * @param {CopyBlockProps} props - The properties for the CopyBlock component.
 * @param {string} props.code - The code to be displayed and copied.
 * @param {string} [props.copiedText] - The text to display when the code is successfully copied. Defaults to "Copied in the clipboard".
 * @returns {JSX.Element} The rendered CopyBlock component.
 */
export default function CopyBlock({ code, text, copiedText }: CopyBlockProps): JSX.Element {
  // Create a reference to the <pre> element that will contain the code
  const codeRef = useRef<HTMLPreElement>(null);

  // State to track whether the code has been copied to the clipboard
  const [copied, setCopied] = useState(false);

  // Function to handle the copy action
  const handleCopy = async (): Promise<void> => {
    // Check if the code reference is available
    if (codeRef.current) {
      // Copy the code to the clipboard
      await navigator.clipboard.writeText((code || text) as string);

      // Update the state to indicate that the code has been copied
      setCopied(true);

      // Reset the copied state after 1.5 seconds
      setTimeout((): void => setCopied(false), 1500);
    }
  };

  return (
    <>
      <div class="relative group">
        {code && <pre
          ref={codeRef}
          class="bg-gray-900 text-sm text-gray-200 p-4 rounded overflow-x-auto"
        >
          <code>{code}</code>
        </pre>}
        {text && <span ref={codeRef}>{text}</span>}

        <button
          type="button"
          onClick={handleCopy}
          class="absolute top-2 right-2 p-1 rounded transition-opacity opacity-0 group-hover:opacity-100"
          aria-label="Copier"
        >
          {copied ? <Icons.Check size={18} /> : <Icons.ClipboardCopy size={18} />}
        </button>
      </div>

      {copied && (
        <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded shadow-lg animate-fade-in-out z-50">
          {copiedText ?? "Copied in the clipboard"}
        </div>
      )}
    </>
  );
}
