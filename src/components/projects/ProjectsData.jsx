import portfolioPreview from "../../assets/anime.png";
import weatherPreview from "../../assets/anime.png";
import moviePreview from "../../assets/anime.png";
import taskPreview from "../../assets/anime.png";

export const featuredProject = {
    title: "Developer Portfolio",

    description:
        "A premium portfolio built with React and Tailwind CSS featuring glassmorphism, immersive interactions, responsive layouts, and reusable components.",

    image: portfolioPreview,

    tech: [
        "React",
        "Tailwind",
        "JavaScript",
        "Vite",
    ],

    live: "#",

    github: "#",
};

export const otherProjects = [
    {
        title: "Weather App",

        description:
            "Real-time weather forecasting with location search and responsive UI.",

        image: weatherPreview,

        tech: [
            "React",
            "API",
            "CSS",
        ],

        live: "#",

        github: "#",
    },

    {
        title: "Movie Explorer",

        description:
            "Discover trending movies with TMDB API, search, filters, and detailed information.",

        image: moviePreview,

        tech: [
            "React",
            "Tailwind",
            "TMDB API",
        ],

        live: "#",

        github: "#",
    },

    {
        title: "Task Manager",

        description:
            "A productivity application for managing daily tasks with a clean and modern interface.",

        image: taskPreview,

        tech: [
            "React",
            "Firebase",
        ],

        live: "#",

        github: "#",
    },
];