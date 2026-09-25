import { useState } from "react";
import { FEATURED_PROJECTS } from "../data/featuredProjects";
import { CarouselModal } from "./carouselModal";

type Project = {
  name: string;
  img: string;
  description: string;
  tags: string[];
  link?: string;
  githubLink?: string;
  carousel?: string[];
};

export function FeaturedProjectsSection() {
  return (
    <section
      id="featured-projects"
      className="flex flex-col gap-6 bg-purple-200 w-full py-8 md:py-16 px-8 md:px-32"
    >
      <h2 className="font-display text-3xl font-extrabold flex flex-row gap-3 items-center">
        <img src="/sparkle-1.svg" className="size-20" />
        <div>
          Featured Projects
          <span className="text-base">
            <p>A few of my favorite (and current) projects</p>
          </span>
        </div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURED_PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [isCarouselOpen, setCarouselOpen] = useState(false);

  return (
    <>
      <article className="flex flex-col bg-white border border-slate-300 overflow-hidden rounded-xl">
        <div className="relative p-4 group">
          {project.carousel ? (
            <button
              type="button"
              onClick={() => setCarouselOpen(true)}
              aria-label={`View ${project.name} image gallery`}
              className="block w-full p-0 cursor-pointer"
            >
              <img
                src={project.img}
                alt={`${project.name} screenshot`}
                className="w-full h-56 object-cover rounded-xl"
              />
              <span className="absolute bottom-2 right-2 flex flex-row items-center gap-1 bg-indigo-900/70 text-white text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                  className="size-4"
                >
                  <path d="M8 3H16M8 21H16M3 8V16M21 8V16" />
                </svg>
                View gallery
              </span>
            </button>
          ) : (
            <img
              src={project.img}
              alt={`${project.name} screenshot`}
              className="w-full h-56 object-cover rounded-xl"
            />
          )}
        </div>
        <div className="flex flex-col flex-1 p-6 gap-3">
          <h3 className="font-display text-3xl font-bold flex flex-row items-center gap-2">
            {project.name}
            <img src="/paw-filled.svg" className="size-6" />
          </h3>
          <p className="text-indigo-800">{project.description}</p>
          <div className="flex flex-row flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-violet-100 text-violet-800 text-sm font-semibold px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-row gap-4 mt-auto">
            {project.link && (
              <a
                href={project.link}
                className="flex flex-row gap-1 font-semibold p-2 rounded-full hover:bg-violet-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                  />
                </svg>
                Live Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            )}
            {project.link && project.githubLink && (
              <div className="h-10 w-px bg-violet-300"></div>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                className="flex flex-row gap-2 font-semibold px-4 py-2 rounded-full hover:bg-violet-100"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.822-2.324 4.648-4.53 4.894a2.365 2.365 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Github
              </a>
            )}
          </div>
        </div>
      </article>

      {project.carousel && isCarouselOpen && (
        <CarouselModal
          title={project.name}
          images={project.carousel}
          onClose={() => setCarouselOpen(false)}
        />
      )}
    </>
  );
};
