export function Banner() {
  return (
    <header
      id="home"
      className="flex flex-row mt-8 px-8 md:px-32 pb-8 md:pb-16"
    >
      <div className="flex flex-col flex-1">
        <div className="flex flex-col flex-1 justify-center">
          <div className="p-8">
            <h1 className="font-display text-2xl flex flex-row">
              Hi, I'm Jenny
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M12 11c-2.4 0-4.5 1.5-4.5 4.2 0 2.5 1.8 4.3 4.5 4.3s4.5-1.8 4.5-4.3c0-2.7-2.1-4.2-4.5-4.2z" />
                <circle cx="5.5" cy="11.5" r="2" />
                <circle cx="9.5" cy="7.5" r="2.2" />
                <circle cx="14.5" cy="7.5" r="2.2" />
                <circle cx="18.5" cy="11.5" r="2" />
              </svg>
            </h1>
            <h2 className="font-display text-4xl font-extrabold mb-8">
              Fullstack Developer & Cat Enthusiast
            </h2>
            <p>
              I build products 0-1, love creating clean and usable experiences
              and enjoy working across the stack. When I'm not coding, you can
              find me with my cats, gaming, drinking coffee, or exploring new
              ideas.
            </p>
            <div className="flex flex-row gap-4 mt-8">
              <a
                href="/resume.pdf"
                download
                className="flex flex-row gap-2 bg-violet-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-violet-700"
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
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
                Resume
              </a>
              <a
                href="https://github.com/gingerbreadmocha"
                className="flex flex-row gap-2 bg-violet-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-violet-700"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
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
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <img
          src="/banner.png"
          alt="Banner"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </header>
  );
}
