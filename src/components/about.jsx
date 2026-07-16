import AboutHeading from "./AboutHeading";
import BackgroundEffects from "./backgroundEffects";
import ProfileCard from "./ProfileCard";
import InfoCard from "./InfoCard";
import ResumeButton from "./ResumeButton";
import ConnectorLines from "./ConnectorLines";

function About() {
  return (
    <section id="about" className="relative py-6 px-6"
    >
      <BackgroundEffects />

      <div className="relative z-10 mx-auto max-w-7xl">

        <AboutHeading />

<div className="relative mt-20">

    <ConnectorLines />

    <div
        className="
            relative
            z-10
            grid
            grid-cols-1
            lg:grid-cols-[1fr_380px_1fr]
            gap-10
            items-center
        "
    >

        {/* Left */}

        <div className="space-y-10">

            <InfoCard
                title="Who I Am"
                description="..."
            />

            <InfoCard
                title="Looking For"
                description="..."
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
                description="..."
            />

            <InfoCard
                title="Beyond Coding"
                description="..."
            />

        </div>

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