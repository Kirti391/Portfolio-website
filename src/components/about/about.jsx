import AboutHeading from "./aboutHeading";
import ProfileCard from "./profileCard";

function About() {

    return (
        <section id="about" className=" relative px-6 py-4">
            {/* <div className="relative"> */}
            <AboutHeading />

            <div>
                {/* Left info cards */}
                <div>
                    <div></div>
                    <div></div>
                </div>
                
                {/* Center Card */}
                <div>
                    <ProfileCard/>
                </div>

                {/* Right info cards */}
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}

export default About;