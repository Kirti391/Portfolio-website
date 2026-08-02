
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
        
               
              </div>
            </section>
    )


}
export default Projects;