import SectionHeading from "./sectionHeading";
import profile from "../assets/Kirti.jpeg";
import InfoCard from "./InfoCard";
import ProfileCard from "./ProfileCard";
function About() {

    return (
        <section id="about" className="px-28 py-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading title="About Me" subtitle="Get to know me beyond the code" />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-16">
                {/* Left side=image */}
               <div className="flex justify-center flex-1">
    <ProfileCard image={profile} />
</div>
                {/* Right side=text/content */}
                <div className="flex-1">

                  <h3 className="text-3xl font-bold text-white">
                        Hi, I'm Kirti
                    </h3>

                    <p className="mt-6 text-gray-300 leading-8">
                        I'm a Computer Science student and frontend developer passionate
                        about creating responsive, interactive, and user-friendly web
                        applications. I enjoy turning ideas into clean interfaces while
                        continuously learning modern technologies and improving my
                        problem-solving skills.
                    </p>
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