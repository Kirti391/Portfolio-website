import TechBadge from "./TechBadge";
import ProjectButton from "./ProjectButton";

export default function ProjectCard({ project }) {
    return (
        <article
            className="
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#111318]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-indigo-400/30
                hover:shadow-[0_25px_60px_rgba(99,102,241,0.18)]
            "
        >
            {/* Image */}

            <div className="relative aspect-[16/10] overflow-hidden">

                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="
                        h-full
                        w-full
                        object-cover
                        object-top
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
                />

                {/* Reflection */}

                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

                {/* Overlay */}

                <div
                    className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        gap-4
                        bg-black/50
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:opacity-100
                    "
                >
                    <ProjectButton
                        href={project.live}
                        text="Live Demo"
                        variant="primary"
                    />

                    <ProjectButton
                        href={project.github}
                        text="GitHub"
                        variant="secondary"
                    />
                </div>

            </div>

            {/* Content */}

            <div className="flex flex-1 flex-col p-6">

                <span className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                    Personal Project
                </span>

                <h3 className="mt-3 text-xl font-bold text-white">
                    {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                    {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                    {project.tech.map((tech) => (
                        <TechBadge
                            key={tech}
                            title={tech}
                        />
                    ))}

                </div>

            </div>
        </article>
    );
}