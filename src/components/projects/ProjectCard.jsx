// ProjectCard.jsx
// Secondary project card — image on top, compact body below. Intentionally simpler
// and smaller than the featured browser mockup so the two never read as siblings.

import TechBadge from "./TechBadge";
import ProjectButton from "./ProjectButton";
import { useReveal } from "./useReveal";

export default function ProjectCard({ project, index = 0 }) {
  const [ref, isVisible] = useReveal({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`
        reveal group relative flex flex-col overflow-hidden rounded-2xl
        border border-white/10 bg-[#111318]
        transition-all duration-500 ease-out
        hover:-translate-y-1.5 hover:border-transparent
        ${isVisible ? "is-visible" : ""}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glow border ring, only visible on hover */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 rounded-2xl opacity-0
          transition-opacity duration-500 ease-out
          group-hover:opacity-100
          [box-shadow:0_0_0_1px_rgba(99,102,241,0.35),0_0_30px_-6px_rgba(34,211,238,0.25)]
        "
      />

      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={project.image}
          alt={`Screenshot of the ${project.name} application`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h4 className="text-lg font-semibold tracking-tight text-white">
          {project.name}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.stack.map((tech) => (
            <li key={tech}>
              <TechBadge label={tech} />
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3 pt-1">
          <ProjectButton href={project.liveUrl} label="Live Demo" variant="filled" />
          <ProjectButton href={project.githubUrl} label="GitHub" variant="outline" />
        </div>
      </div>
    </article>
  );
}