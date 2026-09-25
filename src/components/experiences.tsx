import { useState } from "react";
import { EXPERIENCE } from "../data/experience";

type ExperienceJob = {
  company: string;
  title: string;
  dates: string;
  experience: string[];
};

export function ExperiencesSection() {
  return (
    <section
      id="experience"
      className="flex flex-col gap-6 bg-violet-100 w-full px-8 md:px-32 py-8 md:py-16"
    >
      <h2 className="font-display text-3xl font-extrabold flex flex-row items-center gap-3">
        <img src="/sparkle-1.svg" className="size-20" />
        <div>
          Experience
          <span className="text-base">
            <p>
              A timeline of where I've worked and what I've built along the way
            </p>
          </span>
        </div>
      </h2>

      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute left-2 top-2 bottom-2 w-px bg-violet-300"
        />
        <ol className="flex flex-col gap-8">
          {EXPERIENCE.map((job) => (
            <ExperienceItem key={job.company} job={job} />
          ))}
        </ol>
      </div>
    </section>
  );
}

const ExperienceItem = ({ job }: { job: ExperienceJob }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = `experience-${job.company.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <li className="relative flex flex-col">
      <span
        aria-hidden="true"
        className="absolute left-0 top-2 size-4 rounded-full bg-violet-600 ring-2 ring-white"
      />

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="flex w-full flex-row items-center justify-between text-left"
      >
        <div className="flex flex-col items-start gap-1 ml-16">
          <span className="font-display text-2xl font-bold text-indigo-900">
            {job.company}
          </span>
          <span className="flex flex-row items-center gap-2 text-indigo-800 font-medium">
            {job.title}
            <span aria-hidden="true" className="text-violet-500">
              •
            </span>
            {job.dates}
          </span>
        </div>

        <span className="flex size-8 items-center justify-center rounded-full bg-violet-100 text-violet-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={`size-4 transition-transform ${isOpen ? "rotate-90" : ""}`}
          >
            <path d="M9 6L15 12L21 6" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div id={contentId} className="pt-4">
          <ul className="flex flex-col gap-2 text-indigo-800">
            {job.experience.map((point) => (
              <li key={point} className="flex flex-row items-start gap-3 ml-16">
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-violet-500"
                />
                <span
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: point }}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
