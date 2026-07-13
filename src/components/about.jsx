import SectionHeading from "./sectionHeading";
import profile from "../assets/Kirti.jpeg";
import InfoCard from "./InfoCard";
import ProfileCard from "./ProfileCard";
function About() {

    return (<section
    id="about"
    className="relative overflow-hidden px-6 md:px-16 lg:px-28 py-28"
>
  
         <div className="max-w-6xl mx-auto">
                <SectionHeading title="About Me" subtitle="Get to know me beyond the code" />
            </div>
              <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="
            absolute
            left-20
            top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-indigo-500/10
            blur-[140px]
        "
    />
 <div className="
            absolute
            right-10
            bottom-20
            h-64
            w-64
            rounded-full
            bg-cyan-500/5
            blur-[120px]
        "
    />

</div>
            <div className="flex flex-col md:flex-row items-center gap-16">
                {/* Left side=image */}
               <div className="flex justify-center lg:justify-start">
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

    <InfoCard
        title="Current Focus"
        description="Building modern React applications, strengthening DSA, and exploring backend development."
    />

    <InfoCard
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