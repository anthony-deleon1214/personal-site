import ProjectInfo from "../components/ProjectInfo";
import Sidebar from "../components/Sidebar";

function Projects() {
    return (
        <div>
            <Sidebar />
            <div className="projects-grid-container">
                <ProjectInfo title={"Chip-8 Interpreter"} description={"Terminal-based Chip-8 interpreter in Javascript"} link={"https://github.com/anthony-deleon1214/chip-8-interpreter"} />
            </div>
        </div>
    )
}

export default Projects;