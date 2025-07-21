/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK routes/_app.tsx

import type { JSX, PageProps } from "$types";
import Footer from "$components/Footer.tsx";
import SidebarNav from "$islands/SidebarNav.tsx";
import LogBackground from "../islands/LogBackground.tsx";

/**
 * This is the main application component that renders the entire page structure.
 * It includes the sidebar navigation, the main content component, and the footer.
 * The component receives the main content component and the application state as props.
 *
 * @param {PageProps<null>} props - The props object containing the main content component and the application state.
 * @param {JSX.Element} props.Component - The main content component to be rendered.
 * @param {Object} props.state - The application state object.
 * @param {string} props.state.lang - The language setting for the application.
 * @returns {JSX.Element} The rendered JSX element representing the entire page structure.
 */
export default function App({ Component, state }: PageProps): JSX.Element {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>nicolas-metivier</title>
        <link rel="stylesheet" href="/assets/styles.css" />
        <script src="/assets/theme.js" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
      </head>

      <body class="bg-gray-200 dark:bg-gray-900">
        <LogBackground />
        <main class=" absolute w-full transition-colors duration-300 text-gray-800 dark:text-white min-h-screen font-sans scroll-smooth">
          
          <SidebarNav lang={state.lang} />
          <Component />
          <Footer lang={state.lang} />
        </main>
      </body>

    </html>
  );
}
