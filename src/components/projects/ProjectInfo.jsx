import TechBadge from "./TechBadge";
import ProjectButton from "./ProjectButton";

function ProjectInfo({ project }) {

    return (
        <div>

            <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm">
                Case Study 01
            </span>

            {/* <h3 className="mt-4 text-4xl font-bold text-white">
                {project.title}
            </h3> */}
            <h3 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {project.title}
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-300 max-w-xl">
                {project.description}
            </p>

            {/* <p className="mt-6 text-slate-300 leading-8">
                {project.description}
            </p> */}

            <div className="mt-8 flex flex-wrap gap-3">
                {project.tech.map((item) => (
                    <TechBadge key={item} title={item} />
                ))}
            </div>

            <div className="mt-10 flex gap-4">
                <ProjectButton
                    text="Live Demo"
                    variant="primary"
                />

                <ProjectButton
                    text="GitHub"
                    variant="secondary"
                />
            </div>

        </div>
    );
}
export default ProjectInfo;