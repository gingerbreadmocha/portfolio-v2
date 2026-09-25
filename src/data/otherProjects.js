export const GAME_PROJECTS = [
    {
        name: "Captain Jones",
        description: "Play as a pirate and find the key to pass the level",
        tags: ["PhaserJS"],
        img: "/other/captain-jones.png",
    },
    {
        name: "Froggee High Scores",
        description: "High scores system for Yepi game contest",
        tags: ["NodeJS", "EaselJS", "Bootstrap", "Postgres"],
        img: "/other/froggee.png"
    },
    {
        name: "Cat.IO",
        description: "Based on Agar.IO except cats.",
        tags: ["NodeJS", "Websockets", "PhaserJS"],
        img: "/other/catio.png"
    },
]

export const WEB_APPS = [
    {
        name: "Kantan desu",
        description: "Anime backlog app",
        tags: ["React Native"],
        img: "/other/kantan-desu.png",
    },
    {
        name: "Pisuke's Recommendations",
        description: "Anime recommendation app",
        tags: ["React", "NodeJS", "Redis", "Boostrap"],
        img: "/other/piske.png",
    },
    {
        name: "Hamsterbux",
        description: "Virtual currency exchange app",
        tags: ["Ruby on Rails", "Postgres", "Boostrap"],
        img: "/other/hamsterbux.png",
    },
    {
        name: "PepeBoards",
        description: "A web forum",
        tags: ["Ruby on Rails", "Postgres", "Boostrap"],
        img: "/other/pepeboards.png",
    },
]

export const PRO_PROJECTS = [
    {
        name: "Handy Mason",
        description: "Independent contractor project; management/invoicing app",
        tags: ["React Native"],
        img: "/other/handy-mason.png",
    },
]

export const CATEGORIES = [
    {
        label: "Games",
        value: GAME_PROJECTS,
        svg: "/game-controller.svg",
        backgroundColor: "bg-fuchsia-50"
    },
    {
        label: "Web Apps",
        value: WEB_APPS,
        backgroundColor: "bg-orange-50",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path d="M16.555 5.412a8.028 8.028 0 0 0-3.503-2.81 14.899 14.899 0 0 1 1.663 4.472 8.547 8.547 0 0 0 1.84-1.662ZM13.326 7.825a13.43 13.43 0 0 0-2.413-5.773 8.087 8.087 0 0 0-1.826 0 13.43 13.43 0 0 0-2.413 5.773A8.473 8.473 0 0 0 10 8.5c1.18 0 2.304-.24 3.326-.675ZM6.514 9.376A9.98 9.98 0 0 0 10 10c1.226 0 2.4-.22 3.486-.624a13.54 13.54 0 0 1-.351 3.759A13.54 13.54 0 0 1 10 13.5c-1.079 0-2.128-.127-3.134-.366a13.538 13.538 0 0 1-.352-3.758ZM5.285 7.074a14.9 14.9 0 0 1 1.663-4.471 8.028 8.028 0 0 0-3.503 2.81c.529.638 1.149 1.199 1.84 1.66ZM17.334 6.798a7.973 7.973 0 0 1 .614 4.115 13.47 13.47 0 0 1-3.178 1.72 15.093 15.093 0 0 0 .174-3.939 10.043 10.043 0 0 0 2.39-1.896ZM2.666 6.798a10.042 10.042 0 0 0 2.39 1.896 15.196 15.196 0 0 0 .174 3.94 13.472 13.472 0 0 1-3.178-1.72 7.973 7.973 0 0 1 .615-4.115ZM10 15c.898 0 1.778-.079 2.633-.23a13.473 13.473 0 0 1-1.72 3.178 8.099 8.099 0 0 1-1.826 0 13.47 13.47 0 0 1-1.72-3.178c.855.151 1.735.23 2.633.23ZM14.357 14.357a14.912 14.912 0 0 1-1.305 3.04 8.027 8.027 0 0 0 4.345-4.345c-.953.542-1.971.981-3.04 1.305ZM6.948 17.397a8.027 8.027 0 0 1-4.345-4.345c.953.542 1.971.981 3.04 1.305a14.912 14.912 0 0 0 1.305 3.04Z" />
</svg>
`
    },
    {
        label: "Professional Projects",
        value: PRO_PROJECTS,
        backgroundColor: "bg-green-50",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
  <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
</svg>
`
    }
]
