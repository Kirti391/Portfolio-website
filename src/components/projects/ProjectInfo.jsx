// import TechBadge from "./TechBadge";
// import ProjectButton from "./ProjectButton";

// function ProjectInfo({ project }) {

//     return (
//         <div>

//             <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm">
//                 Case Study 01
//             </span>

//             {/* <h3 className="mt-4 text-4xl font-bold text-white">
//                 {project.title}
//             </h3> */}
//             <h3 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
//                 {project.title}
//             </h3>

//             <p className="mt-6 text-lg leading-8 text-slate-300 max-w-xl">
//                 {project.description}
//             </p>

//             {/* <p className="mt-6 text-slate-300 leading-8">
//                 {project.description}
//             </p> */}

//             <div className="mt-8 flex flex-wrap gap-3">
//                 {project.tech.map((item) => (
//                     <TechBadge key={item} title={item} />
//                 ))}
//             </div>

//             <div className="mt-10 flex gap-4">
//                 {/* <ProjectButton
//                     text="Live Demo"
//                     variant="primary"
//                 /> */}
// <button
//     className="
//         group
//         flex
//         items-center
//         gap-2
//         rounded-xl
//         bg-indigo-500
//         px-6
//         py-3
//         font-medium
//         text-white
//         transition-all
//         duration-300
//         hover:-translate-y-1
//         hover:bg-indigo-400
//     "
// >
//     Live Demo
// </button>
//                 <ProjectButton
//                     text="GitHub"
//                     variant="secondary"
//                 />
//             </div>

//         </div>
//     );
// }
// export default ProjectInfo;
import { FiGithub, FiExternalLink } from "react-icons/fi";

import TechBadge from "./TechBadge";
import ProjectButton from "./ProjectButton";
import InfoItem from "./InfoItem";

function ProjectInfo({ project }) {
    return (
        <div className="flex flex-col justify-center">

            {/* Section Label */}

            <div className="flex items-center gap-4">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Featured Project
                </span>

                <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent"></div>

            </div>

            {/* Title */}

            <h2 className="mt-5 text-4xl lg:text-5xl font-bold tracking-tight text-white">
                {project.title}
            </h2>

            {/* Description */}

            <p className="mt-6 text-lg leading-8 text-slate-300">
                {project.description}
            </p>

            {/* Metadata */}

            <div className="mt-10 grid grid-cols-2 gap-6">

                <InfoItem title="Year" value="2025" />

                <InfoItem title="Category" value="Frontend" />

                <InfoItem
                    title="Status"
                    value="Live"
                    valueClassName="text-emerald-400"
                />

                <InfoItem title="Role" value="Solo Developer" />

            </div>

            <div className="my-10 h-px bg-white/10"></div>

            {/* Challenge */}

            <div>

                <h3 className="text-lg font-semibold text-white">
                    The Challenge
                </h3>

                <p className="mt-3 leading-8 text-slate-300">
                    Build a premium developer portfolio that feels unique,
                    modern and highly interactive while maintaining clean UX
                    and responsiveness.
                </p>

            </div>

            {/* Solution */}

            <div className="mt-8">

                <h3 className="text-lg font-semibold text-white">
                    The Solution
                </h3>

                <p className="mt-3 leading-8 text-slate-300">
                    Designed reusable React components with glassmorphism,
                    elegant micro-interactions, premium layouts,
                    and scalable architecture.
                </p>

            </div>

            {/* Tech Stack */}

            <div className="mt-10 flex flex-wrap gap-3">

                {project.tech.map((tech) => (
                    <TechBadge
                        key={tech}
                        title={tech}
                    />
                ))}

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

                <ProjectButton
                    text="Live Demo"
                    icon={<FiExternalLink />}
                    href={project.live}
                    variant="primary"
                />

                <ProjectButton
                    text="GitHub"
                    icon={<FiGithub />}
                    href={project.github}
                    variant="secondary"
                />

            </div>

        </div>
    );
}

export default ProjectInfo;