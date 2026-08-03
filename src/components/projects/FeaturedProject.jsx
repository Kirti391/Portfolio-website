import BrowserMockup from "./BrowserMockup";
import ProjectInfo from "./ProjectInfo";
import { featuredProject } from "./projectsData";

function FeaturedProject() {
  return (
    <div className="mt-20 grid gap-16 lg:grid-cols-2 items-center">

      <BrowserMockup image={featuredProject.image} />

      <ProjectInfo project={featuredProject} />

    </div>
  );
}

export default FeaturedProject;