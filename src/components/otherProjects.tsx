import { CATEGORIES } from "../data/otherProjects";

type OtherProject = {
  name: string;
  description: string;
  tags: string[];
  img: string;
};

type Category = {
  label: string;
  value: OtherProject[];
  svg: string;
  backgroundColor: string;
};

export function OtherProjectsSection() {
  return (
    <section
      id="other-projects"
      className="flex flex-col gap-6 bg-purple-100 w-full px-32 py-16"
    >
      <h2 className="font-display text-3xl font-extrabold mb-8 flex flex-row items-center">
        <img src="/sparkle-2.svg" className="size-20" />
        <div>
          Other Projects &amp; Experiments
          <span className="text-base">
            <p>
              A collection of old things I've built over the years - some are
              polished, some are experiments, and some are here because I
              thought they were fun.
            </p>
          </span>
        </div>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((category) => (
          <CategoryColumn key={category.label} category={category} />
        ))}
      </div>
    </section>
  );
}

const CategoryColumn = ({ category }: { category: Category }) => {
  return (
    <article
      className={`flex flex-col gap-5 ${category.backgroundColor} rounded-2xl shadow-md hover:shadow-lg p-8 pb-16`}
    >
      <h3 className="font-display text-3xl font-bold flex flex-row items-center gap-2">
        <CategoryIcon svg={category.svg} />
        {category.label}
      </h3>

      <div className="flex flex-col gap-6">
        {category.value.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </article>
  );
};

const ProjectItem = ({ project }: { project: OtherProject }) => {
  return (
    <div className="flex flex-row gap-2 items-center border-b border-purple-300 pb-4">
      <img
        src={project.img}
        alt={`${project.name} screenshot`}
        className="h-15 w-15 object-cover rounded-full"
      />
      <div className="px-1">
        <h4 className="font-display text-lg font-bold">{project.name}</h4>
        <p className="text-indigo-800 text-sm">{project.description}</p>
        <div className="flex flex-row flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-violet-100 text-violet-800 text-sm font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CategoryIcon = ({ svg }: { svg: string }) => {
  if (svg.trim().startsWith("<svg")) {
    return (
      <span
        className="text-violet-600 [&>svg]:size-6"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    );
  }
  return <img src={svg} alt="" className="size-6" />;
};
