const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "featured-projects", label: "Featured Projects" },
  { id: "other-projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
];

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 flex flex-row flex-wrap items-center justify-between gap-x-4 gap-y-2 bg-violet-200 backdrop-blur px-8 md:px-32 py-4">
      <a href="#home" className="flex flex-row items-center gap-3">
        <img
          src="/cat_icon.png"
          alt="Jenny Zhou cat icon"
          className="size-9 rounded-full"
        />
        <span className="font-display text-2xl font-bold text-indigo-900">
          Jenny Zhou
        </span>
      </a>

      <ul className="flex flex-row flex-wrap items-center gap-x-4 md:gap-x-6">
        {NAV_SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="font-semibold text-indigo-800 text-sm md:text-base hover:text-violet-700 hover:underline underline-offset-4 transition-colors"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
