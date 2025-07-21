/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK routes/[lang]/projects/[id].tsx

import type { JSX, Handlers, PageProps, Lang, Project, ProjectSection } from "$types";
import { Head } from "$fresh/runtime.ts";
import SectionRegistry from "$islands/SectionRegistry.tsx";
import SectionGroup from "$islands/SectionGroup.tsx";
import AutoRegisterSection from "$islands/AutoRegisterSection.tsx";

/**
 * Fetches a project by its ID.
 *
 * @param {string} id - The ID of the project to fetch.
 * @returns {Promise<Project | undefined>} A promise that resolves to the project if found, or undefined if not found.
 */
async function getProjectById(id: string): Promise<Project | undefined> {
  try {
    // Attempt to dynamically import the project data file based on the provided ID.
    // The import path is constructed using the ID to fetch the corresponding project file.
    return (await import(`$data/projects/${id}.tsx`)).default as Project;
  } catch (_e) {
    // If an error occurs during the import, log the error message to the console.
    // This helps in debugging issues related to missing or incorrect project files.
    console.error((_e as Error).message);
    // Return undefined to indicate that the project could not be found or loaded.
    return undefined;
  }
}

/**
 * Handler for managing project-related requests.
 *
 * This handler is responsible for processing requests related to projects.
 * It uses the `Handlers` type to define the structure of the handler and
 * the `Project` type to specify the expected data format.
 */
export const handler: Handlers<{ project: Project }> = {
  /**
   * Handles GET requests for the project page.
   *
   * This method is responsible for processing GET requests to retrieve and display
   * project information. It uses the request context to extract parameters and
   * fetch the corresponding project data. If the project is found, it renders the
   * project details; otherwise, it returns a 404 Not Found response.
   *
   * @param {Request} _req - The incoming request object.
   * @param {Context} ctx - The request context containing parameters and methods for rendering responses.
   * @returns {Promise<Response>} A promise that resolves to the HTTP response.
   */
  async GET(_req, ctx): Promise<Response> {
    // Extract the 'id' parameter from the request context.
    const { id } = ctx.params;

    // Fetch the project data using the 'id'.
    const target = await getProjectById(id);

    // If the project is not found, render a 404 Not Found response.
    if (!target) return ctx.renderNotFound();

    // If the project is found, render the project data.
    return ctx.render({ project: target });
  },
};

/**
 * Renders a section element based on the provided language, section data, and optional level.
 *
 * @param {Lang} lang - The language code to use for rendering the section content.
 * @param {ProjectSection} section - The section data to render.
 * @param {2 | 3} [level] - The optional level of the section (either 2 or 3).
 * @returns {JSX.Element} The rendered JSX element for the section.
 */
function sectionElement(lang: Lang, section: ProjectSection, level?: 2 | 3): JSX.Element {
  return (
    <AutoRegisterSection id={section.id} title={section.title[lang]} level={level}>
      {section.content?.[lang]}
    </AutoRegisterSection>
  )
}

/**
 * Renders the project wrapper page with the provided data and state.
 *
 * This function is responsible for rendering the project page using the given
 * project data and state. It utilizes the `PageProps` type to define the structure
 * of the props and the `Project` type to specify the expected data format.
 *
 * @param {PageProps<{ project: Project }>} props - The props containing the project data and state.
 * @param {Project} props.data.project - The project data to be rendered.
 * @param {any} props.state - The state containing additional information such as language settings.
 * @returns {JSX.Element} The rendered JSX element for the project wrapper page.
 */
export default function ProjectWrapperPage({ data, state }: PageProps<{ project: Project }>): JSX.Element {
  const { lang } = state;
  const project = data.project;
  return (
    <>
      <Head>
        <title>{project.name[lang as Lang]}</title>
        <meta name="description" content={project.description[lang as Lang]} />
      </Head>
      <SectionRegistry main_color={project.main_color}>
        <div class="md:px-4 py-20 md:py-16">
          <div class="max-w-5xl mx-auto bg-gray-300/70 dark:bg-gray-900/80 px-20 py-10 rounded-xl">
            <h1 class={`text-2xl lg:text-4xl font-bold mb-10 text-center text-${project.main_color || "orange"}-400`}>
              {project.name[lang as Lang]}
            </h1>
            {project.intro_section && (
              <section class="mb-24">
                <div class="flex flex-col lg:flex-row items-center gap-12">
                  <div class="lg:w-1/2 text-left space-y-10">
                    {project.intro_section.map((section: ProjectSection): JSX.Element => sectionElement(lang, section))}
                  </div>
                  <div class="lg:w-1/2">
                    {project.image && <img
                      src={project.image?.src}
                      alt={project.image?.alt[lang as Lang]}
                      class="rounded-xl shadow-lg w-full max-w-md mx-auto"
                    />}
                  </div>
                </div>
              </section>
            )}

            {project.sections?.map((section: ProjectSection): JSX.Element => (section.children) ? (
              <SectionGroup
                id={section.id}
                title={section.title[lang as Lang]}
                intro={section.intro?.[lang as Lang]}
              >
                {section.children.map((sectionChild: ProjectSection): JSX.Element => sectionElement(lang, sectionChild, 3))}
              </SectionGroup>
            ) : sectionElement(lang, section))}

          </div>
        </div>
      </SectionRegistry>
    </>
  );
}
