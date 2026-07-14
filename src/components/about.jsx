import SectionHeading from "./sectionHeading";
import profile from "../assets/Kirti.jpeg";
import AboutCard from "./aboutCard";
import ProfileCard from "./ProfileCard";
function About() {

    return (
        <section id="about" className="relative overflow-hidden px-6 md:px-16 lg:px-28 py-28">

            <div className="max-w-6xl mx-auto">
                <SectionHeading title="About Me" subtitle="Get to know me beyond the code" />
            </div>
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>
                <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl"></div>
                {/* <div className="absolute right-1/2 h-80 w-80 rounded-full -translate-x-1/2 bg-violet-500/15 blur-3xl"></div> */}
            </div>
            <div className="flex flex-col md:flex-row items-center gap-16">
                {/* Left side=image */}
                <div className="flex justify-center ">
                    <ProfileCard image={profile} />
                </div>
                {/* Right side=text/content */}
                <div className="flex-1">

                    <h3 className="text-4xl font-bold tracking-tight text-white">
                        Hi, I'm Kirti
                    </h3>

                    <p className="mt-3 text-lg font-medium text-indigo-300">
                        Frontend Developer • Computer Science Student
                    </p>

                    <div className="mt-8 space-y-5 text-lg leading-8 text-gray-300">

                        <p>
                            I'm a Computer Science student passionate about building
                            modern, responsive, and user-friendly web applications.
                            I enjoy transforming ideas into intuitive digital experiences
                            through clean code and thoughtful design.
                        </p>

                        <p>
                            Beyond frontend development, I'm continuously exploring
                            backend technologies, strengthening my problem-solving skills,
                            and learning how to build scalable applications from end to end.
                        </p>

                    </div>
                    <div className="my-8 h-px w-full bg-white/10"></div>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">

                        <AboutCard
                            title="Current Focus"
                            description="Building modern React applications, strengthening DSA, and exploring backend development."
                        />

                        <AboutCard
                            title="Looking For"
                            description="Frontend internship opportunities where I can learn, collaborate, and contribute to real-world products."
                        />

                    </div>
                </div>
            </div>
        </section>
    );

}
export default About;