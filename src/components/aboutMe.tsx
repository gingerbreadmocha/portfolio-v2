import { SKILLS } from "../data/skills";

type SkillGroup = {
  label: string;
  skills: string[];
};

export function AboutMeSection() {
  return (
    <section
      id="about"
      className="flex flex-col gap-6 bg-amber-50 w-full px-8 md:px-32 py-8 md:py-16"
    >
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="font-display text-3xl font-extrabold flex flex-row items-center gap-3">
            <img src="/sparkle-1.svg" className="size-20" />
            <div>
              Skills
              <span className="text-base">
                <p>Tools and technologies I use to build things</p>
              </span>
            </div>
          </h2>

          {Object.values(SKILLS).map((group: SkillGroup) => (
            <div key={group.label} className="flex flex-col gap-1">
              <h3 className="font-display text-xl font-bold">{group.label}</h3>
              <div className="flex flex-row flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-violet-50 text-violet-800 text-sm font-semibold p-3 rounded-full "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <span
          aria-hidden="true"
          className="hidden md:block self-stretch w-px bg-violet-300"
        />

        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-orange-100 rounded-xl">
            <img
              src="/about/always_building.png"
              alt="Always building"
              className="w-full rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-display text-2xl font-bold">
              A little about me
            </h3>
            <div className="flex flex-row gap-8">
              <div className="bg-sky-50 rounded-xl h-[100px] w-[100px] border border-sky-500">
                <img
                  src="/about/cats.png"
                  alt="Love cats"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="bg-emerald-50 rounded-xl h-[100px] w-[100px] border border-emerald-500">
                <img
                  src="/about/coffee.png"
                  alt="Love coffee"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="bg-pink-50 rounded-xl h-[100px] w-[100px] border border-pink-500">
                <img
                  src="/about/make_things.png"
                  alt="Make things"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
            <p className="text-indigo-800">
              I build products 0-1, love creating clean and usable experiences
              and enjoy working across the stack. When I'm not coding, you can
              find me with my cats, gaming, drinking coffee, or exploring new
              ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
