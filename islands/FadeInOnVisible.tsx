/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK islands/FadeInOnVisible.tsx

import { useEffect, useRef, useState } from "preact/hooks";
import type { JSX, FadeInOnVisibleProps } from "$types";

/**
 * FadeInOnVisible Component
 *
 * This component renders its children with a fade-in animation when the component becomes visible in the viewport.
 * It uses the IntersectionObserver API to detect when the component is in view.
 *
 * @param {FadeInOnVisibleProps} props - The properties for the FadeInOnVisible component.
 * @param {ReactNode} props.children - The children to be rendered inside the component.
 * @param {string} [props.class=""] - Additional CSS classes to apply to the component.
 * @param {string} [props.delay] - Optional delay for the animation.
 * @returns {JSX.Element} The rendered component with fade-in animation.
 */
export default function FadeInOnVisible({ children, class: className = "", delay }: FadeInOnVisibleProps): JSX.Element {
  // Create a ref to attach to the div element
  const ref = useRef<HTMLDivElement>(null);
  // State to track if the element is visible
  const [isVisible, setIsVisible] = useState(false);

  // Effect to set up the IntersectionObserver
  useEffect((): (() => void) | undefined => {
    // Get the current element from the ref
    const el = ref.current;
    // If the element is not available, return early
    if (!el) return;

    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(
      ([entry]): void => {
        // If the element is intersecting (visible in the viewport)
        if (entry.isIntersecting) {
          // Set the visibility state to true
          setIsVisible(true);
          // Stop observing the element
          observer.unobserve(el);
        }
      },
      // Set the threshold for the observer
      { threshold: 0.2 }
    );

    // Start observing the element
    observer.observe(el);
    // Cleanup function to disconnect the observer when the component unmounts
    return (): void => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      class={`transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
      style={delay ? { animationDelay: delay } : undefined}
    >
      {children}
    </div>
  );
}
