/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK routes/[lang]/index.tsx

import type { JSX, Lang, PageProps, Project, ProjectMini } from "$types";
import { Head } from "$fresh/runtime.ts";
import Hero from "$components/Hero.tsx";
import Section from "$components/Section.tsx";
import ProjectCard from "$components/ProjectCard.tsx";

import { heroi18n } from "$data/hero.tsx";

import sites, { sitesTitle } from "$data/sites.ts";
import musics, { musicTitle } from "$data/music.ts";
import contact, { contactText } from "$data/contact.tsx";

import { resolve, toFileUrl } from "jsr:@std/path";

import SectionURLUpdater from "$islands/SectionURLUpdater.tsx";
import { persoTitle, projectTitle } from "$data/projects.ts";
import FadeInOnVisible from "$islands/FadeInOnVisible.tsx";
import certs, { certsTitle } from "$data/certs.tsx";
import { indexDescription, indexTitle } from "$data/index.ts";

// Define the path to the projects directory
const projectsPath = resolve("./data/projects");

// Read the directory entries asynchronously
const entries = Deno.readDir(projectsPath);

// Initialize an array to store project information
const projects: ProjectMini[] = [];

// Iterate over each entry in the directory
for await (const e of entries) {
  // Construct the file path for the current entry
  const filePath = toFileUrl(resolve(`${projectsPath}/${e.name}`));

  // Dynamically import the module from the file path
  const module = await import(filePath.href);

  // Extract the default export from the module as a Project object
  const project = module.default as Project;

  // Push the project information into the projects array
  projects.push({
    title: project.name,
    description: project.description,
    link: `/projects/${project.id}`,
    image: project.card_image?.src || project.image?.src
  });
}

/**
 * The Home component renders the main page of the website, including sections for
 * hero, projects, music, and contact information. It utilizes various components
 * such as Hero, Section, ProjectCard, and FadeInOnVisible to structure and display
 * the content. The component also handles internationalization (i18n) to support
 * multiple languages.
 *
 * @param {PageProps<null>} props - The properties passed to the Home component.
 * @param {Object} props.state - The state object containing the current language setting.
 * @returns {JSX.Element} The JSX element representing the Home page.
 */
export default function Home({ state }: PageProps): JSX.Element {
  const { lang } = state;
  return (
    <>
      <Head>
        <title>{indexTitle[lang as Lang]}</title>
        <meta name="description" content={indexDescription[lang as Lang]} />
      </Head>
      <>
        <Hero id="home" lang={lang} data={heroi18n[lang]} />
        <Section id="projects" title={projectTitle[lang as Lang]}>
          {/* Subsection : Sites made */}
          <div id="websites" class="mb-12 text-center">
            <h3 class="text-xl font-semibold mb-4">🌐 {sitesTitle[lang as Lang]}</h3>
            <div class="flex flex-wrap justify-center gap-6 max-w-screen-xl mx-auto">
              {sites.map(({ id, name, target_self, image, description }): JSX.Element => (
                <FadeInOnVisible>
                  <ProjectCard
                    lang={lang}
                    title={name}
                    description={description[lang as Lang]}
                    target_self={target_self}
                    link={`/${lang}/projects/site/${id}`}
                    label=""
                    image={`/images/${image}`}
                    clickable
                  />
                </FadeInOnVisible>

              ))}
            </div>
          </div>

          {/* Subsection : Personal projects */}
          <div id="personals" class="text-center">
            <h3 class="text-xl font-semibold mb-4">🧪 {persoTitle[lang as Lang]}</h3>
            <div class="flex flex-wrap justify-center gap-6 max-w-screen-xl mx-auto">
              {projects.map(project => (
                <FadeInOnVisible>
                  <ProjectCard
                    lang={lang}
                    title={project.title[lang as Lang]}
                    description={project.description[lang as Lang]}
                    link={`/${lang}${project.link}` }
                    target_self
                    image={project.image}
                    clickable
                  />
                </FadeInOnVisible>
              ))}
            </div>
          </div>
        </Section>

        <Section id="certs" title={certsTitle[lang as Lang]}>
          <div class="flex flex-wrap justify-center gap-6 max-w-screen-xl mx-auto">
            {certs.map(({ id, name, description, file }): JSX.Element => (
              <FadeInOnVisible>
                <ProjectCard
                  id={id}
                  lang={lang}
                  title={name[lang]}
                  description={description[lang]}
                  image="https://secnumacademie.gouv.fr/resources/assets/images/logo.png"
                  imagecls="bg-gray-900 p-4"
                  link={`/docs/${file}`}
                />
              </FadeInOnVisible>
            ))}
          </div>
        </Section>

        <Section id="music" title={musicTitle[lang as Lang]}>
          <div class="flex flex-wrap justify-center gap-6 max-w-screen-xl mx-auto">
            {musics.map(({ id, name, image }): JSX.Element => (
              <FadeInOnVisible>
                <ProjectCard
                  id={id}
                  lang={lang}
                  title={name}
                  image={`/images/music/${image}`}
                  link={`https://distrokid.com/hyperfollow/mnlaugh/${id}`}
                  clickable
                />
              </FadeInOnVisible>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" class="pt-20">
          <p class="mb-6">
            {contactText[lang as Lang]}
          </p>
          <FadeInOnVisible>
            <div class="flex justify-center gap-4 flex-wrap pt-20 pb-40 animate-slide-up">
              {contact.map(({ label, url, Icon, color }): JSX.Element => (
                <a target="_blank" href={url} class={`bg-${color ? color : "gray"}-600 hover:bg-${color ? color : "gray"}-700 shadow-lg shadow-${color ? color : "gray"}-500/50 text-white px-4 py-2 hover:scale-[1.1] rounded transition`}>
                  <div class="flex"><Icon size={25} class="mr-2" /> {label[lang as Lang]}</div>
                </a>
              ))}
            </div>
          </FadeInOnVisible>
        </Section>
        <SectionURLUpdater
          sectionIds={["home", "projects", "music", "contact"]}
          lang={lang}
        />
      </>
    </>
  );
}