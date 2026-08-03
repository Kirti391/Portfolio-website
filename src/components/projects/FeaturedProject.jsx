import BrowserMockup from "./BrowserMockup";
import ProjectInfo from "./ProjectInfo";

import portfolio from "../../assets/project-preview.png";

function FeaturedProject() {
    return (
        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">

            <BrowserMockup image={portfolio} />

            <ProjectInfo />

        </div>
    );
}

export default FeaturedProject;