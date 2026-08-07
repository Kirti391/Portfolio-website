import FeaturedProject from "./FeaturedProject";
import { otherProjects } from "./ProjectsData";
import ProjectCard from "./ProjectCard";
function Projects(){

    return (
        <section
              id="projects"
              className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-cyan-500/10 blur-3xl" />
                <div className="absolute right-10 bottom-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-[120px]" />
              </div>
        
              <div className="relative max-w-7xl mx-auto px-6">
                <div className="text-center mb-14 sm:mb-20">
                  <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                    Projects
                  </span>
                  <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                   Some of the{" "}
                    <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                      ideas
                    </span>{" "}
                    I've turned into {" "}
                    <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                      reality
                    </span>{" "}
                  </h2>
                  <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                    A collection of projects that showcase my passion for building modern, scalable, and user-focused applications. 
                  </p>
                </div>
        
               <FeaturedProject />
               
              </div>
              <section className="mt-32">

    <div className="max-w-3xl">

        <span className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Selected Work
        </span>

        <h3 className="mt-4 text-4xl font-bold text-white">
            More Projects
        </h3>

        <p className="mt-4 text-lg leading-8 text-slate-400">
            A collection of projects where I explored different technologies,
            solved practical problems, and refined my development skills.
        </p>

    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {otherProjects.map((project, index) => (
            <ProjectCard
                key={project.name}
                project={project}
                index={index}
            />
        ))}

    </div>

</section>
            </section>
    )


}
export default Projects;