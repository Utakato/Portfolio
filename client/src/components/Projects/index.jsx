import "./style.css"
import * as projects from "./projects"
import Project from "../Project"
const Projects = () => {
    return (
        <section className="projects">
            <h1>Projects</h1>
            <div className="wrapper">
                <Project project={projects.betterMeV2} />
                <Project project={projects.moonshots} />
                <Project project={projects.sapiens} />
                <Project project={projects.ossoImobiliare}/>
            </div>
        </section>
    )
}

export default Projects
