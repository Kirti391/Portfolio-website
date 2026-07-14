import AboutHeading from "./AboutHeading";
import AboutBackground from "./AboutBackground";
import ProfileCard from "./ProfileCard";
import InfoCard from "./infoCard";
import "../styles/about.css";
import profile from "../assets/Kirti.jpeg";

import {
    FiUser,
    FiTarget,
    FiBriefcase,
    FiCoffee,
} from "react-icons/fi";

function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden px-6 py-32 md:px-12 lg:px-24"
        >
            <AboutBackground />

            <div className="relative z-10 mx-auto max-w-7xl">

                <AboutHeading
                    title="About Me"
                    subtitle="Get to know me beyond the code."
                />

                {/* Profile Card */}
                <div className="mt-20 flex justify-center">
                    <ProfileCard image={profile} />
                </div>

                {/* Information Grid */}

                <div className="mt-20 grid gap-8 lg:grid-cols-2 group-hover:scale-[1.02]">

                    <div className="fade-up delay-1 lg:-translate-y-6">
                        <InfoCard
                            icon={<FiUser />}
                            title="Who I Am"
                            description="I'm a Computer Science student passionate about crafting modern web experiences through clean design, interactive interfaces, and scalable code."
                        />
                    </div>

                    <div className="fade-up delay-2 lg:translate-y-6">
                        <InfoCard
                            icon={<FiTarget />}
                            title="Current Focus"
                            description="Building full-stack applications with React, exploring backend development, and continuously strengthening my DSA skills."
                        />
                    </div>

                 <div className="fade-up delay-3 lg:translate-y-6">
                        <InfoCard
                            icon={<FiBriefcase />}
                            title="Looking For"
                            description="Seeking frontend and full-stack internship opportunities where I can learn from experienced developers and contribute to impactful products."
                        />
                    </div>

                 <div className="fade-up delay-4 lg:-translate-y-6">
                        <InfoCard
                            icon={<FiCoffee />}
                            title="Beyond Coding"
                            description="I enjoy aesthetic UI design, discovering creative interactions, solving challenging problems, and constantly improving my craft."
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;