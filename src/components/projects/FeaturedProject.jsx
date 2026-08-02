import BrowserMockup from "./BrowserMockup";
import ProjectInfo from "./ProjectInfo";

function FeaturedProject() {
    return (
        <div
            className="
                mt-20
                grid
                gap-12
                items-center
                lg:grid-cols-2
            "
        >
            <BrowserMockup />

            <ProjectInfo />
        </div>
    );
}

export default FeaturedProject;