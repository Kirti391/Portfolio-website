import AboutHeading from "./AboutHeading";
import BackgroundEffects from "./backgroundEffects";
import ProfileCard from "./ProfileCard";
import InfoCard from "./InfoCard";
import ResumeButton from "./ResumeButton";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 px-6"
    >
      <BackgroundEffects />

      <div className="relative z-10 mx-auto max-w-7xl">

        <AboutHeading />

        <div
          className="
            mt-20
            grid
            grid-cols-1
            lg:grid-cols-[1fr_430px_1fr]
            gap-10
            items-center
          "
        >

          {/* Left */}

          <div className="space-y-10">

            <InfoCard
              title="Who I Am"
              description="Content will come here..."
            />

            <InfoCard
              title="Looking For"
              description="Content will come here..."
            />

          </div>

          {/* Center */}

          <div className="flex justify-center">

            <ProfileCard />

          </div>

          {/* Right */}

          <div className="space-y-10">

            <InfoCard
              title="Current Focus"
              description="Content will come here..."
            />

            <InfoCard
              title="Beyond Coding"
              description="Content will come here..."
            />

          </div>

        </div>

        <div className="mt-20 flex justify-center">

          <ResumeButton />

        </div>

      </div>
    </section>
  );
}

export default About;